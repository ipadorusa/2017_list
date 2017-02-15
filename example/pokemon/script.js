/**
 * Created by user on 2017-02-15.
 */
if (top != self) {
    top.location.replace(document.location);
}

var shouldRedirect = false;

if (document.location.hostname != 'seoulpokemap.com' || document.location.protocol != 'https:') {
    shouldRedirect = true;
}

// testing
if (document.location.hostname == 'localhost' || document.location.hostname == 'test.seoulpokemap.com') {
    shouldRedirect = false;
}

if (shouldRedirect) {
    document.location= 'https://seoulpokemap.com/?forcerefresh';
}

var pokemons = [];
var markers = [];
var infoWindows = [];
var pokeDict = {};
var pokeArray = [];
var inserted = 0;
var selectedMarker = null;
var map = null;
var locationMarker = null;
var shouldShowLocationError = false;
var timeOffset = 0;
var shouldUpdate = true;
var lastLoad = 0;
var hashPokemonLat = 0;
var hashPokemonLng = 0;
var movesDict = {"13":"Wrap","14":"Hyper Beam","16":"Dark Pulse","18":"Sludge","20":"Vice Grip","21":"Flame Wheel","22":"Megahorn","24":"Flamethrower","26":"Dig","28":"Cross Chop","30":"Psybeam","31":"Earthquake","32":"Stone Edge","33":"Ice Punch","34":"Heart Stamp","35":"Discharge","36":"Flash Cannon","38":"Drill Peck","39":"Ice Beam","40":"Blizzard","42":"Heat Wave","45":"Aerial Ace","46":"Drill Run","47":"Petal Blizzard","48":"Mega Drain","49":"Bug Buzz","50":"Poison Fang","51":"Night Slash","53":"Bubble Beam","54":"Submission","56":"Low Sweep","57":"Aqua Jet","58":"Aqua Tail","59":"Seed Bomb","60":"Psyshock","62":"Ancient Power","63":"Rock Tomb","64":"Rock Slide","65":"Power Gem","66":"Shadow Sneak","67":"Shadow Punch","69":"Ominous Wind","70":"Shadow Ball","72":"Magnet Bomb","74":"Iron Head","75":"Parabolic Charge","77":"Thunder Punch","78":"Thunder","79":"Thunderbolt","80":"Twister","82":"Dragon Pulse","83":"Dragon Claw","84":"Disarming Voice","85":"Draining Kiss","86":"Dazzling Gleam","87":"Moonblast","88":"Play Rough","89":"Cross Poison","90":"Sludge Bomb","91":"Sludge Wave","92":"Gunk Shot","94":"Bone Club","95":"Bulldoze","96":"Mud Bomb","99":"Signal Beam","100":"X Scissor","101":"Flame Charge","102":"Flame Burst","103":"Fire Blast","104":"Brine","105":"Water Pulse","106":"Scald","107":"Hydro Pump","108":"Psychic","109":"Psystrike","111":"Icy Wind","114":"Giga Drain","115":"Fire Punch","116":"Solar Beam","117":"Leaf Blade","118":"Power Whip","121":"Air Cutter","122":"Hurricane","123":"Brick Break","125":"Swift","126":"Horn Attack","127":"Stomp","129":"Hyper Fang","131":"Body Slam","132":"Rest","133":"Struggle","200":"Fury Cutter","201":"Bug Bite","202":"Bite","203":"Sucker Punch","204":"Dragon Breath","205":"Thunder Shock","206":"Spark","207":"Low Kick","208":"Karate Chop","209":"Ember","210":"Wing Attack","211":"Peck","212":"Lick","213":"Shadow Claw","214":"Vine Whip","215":"Razor Leaf","216":"Mud Shot","217":"Ice Shard","218":"Frost Breath","219":"Quick Attack","220":"Scratch","221":"Tackle","222":"Pound","223":"Cut","224":"Poison Jab","225":"Acid","226":"Psycho Cut","227":"Rock Throw","228":"Metal Claw","229":"Bullet Punch","230":"Water Gun","231":"Splash","233":"Mud Slap","234":"Zen Headbutt","235":"Confusion","236":"Poison Sting","237":"Bubble","238":"Feint Attack","239":"Steel Wing","240":"Fire Fang","241":"Rock Smash","242":"Transform"};

var min_iv;
if (localStorage.getItem('min_iv')) {
    min_iv = parseInt(localStorage.getItem('min_iv'));
}
else {
    min_iv = 0;
}

L.HtmlIcon = L.Icon.extend({
    options: {
        /*
         html: (String) (required)
         iconAnchor: (Point)
         popupAnchor: (Point)
         */
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
    },

    createIcon: function () {
        var div = document.createElement('div');
        div.innerHTML = this.options.html;
        return div;
    },

    createShadow: function () {
        return null;
    }
});

function pokeHTML(pokemon, shouldHide) {
    return "<div class='pokemon_icon'><img class='pokemon_icon_img' src='images/poke/"+pokemon.id+".png?ver17' /></div>";
}

function Point(lat, lng) {
    this.lat = parseFloat(lat);
    this.lng = parseFloat(lng);
}

function Pokemon(pokemon_id, center, despawn, disguise, attack, defence, stamina, move1, move2) {
    this.id = pokemon_id;
    this.center = center;
    this.despawn = parseInt(despawn);
    this.disguise = parseInt(disguise);
    this.attack = parseInt(attack);
    this.defence = parseInt(defence);
    this.stamina = parseInt(stamina);
    this.move1 = parseInt(move1);
    this.move2 = parseInt(move2);

    this.isEqual = function(pokemon) {
        return (this.id == pokemon.id &&
        this.center.lat == pokemon.center.lat &&
        this.center.lng == pokemon.center.lng &&
        this.despawn == pokemon.despawn);
    }

    this.remainingTime = function() {
        var currentUnixTime = Math.floor(Date.now() / 1000) - timeOffset;
        var remain = this.despawn - currentUnixTime;
        return remain;
    }
}

function locateMeButton() {
    shouldShowLocationError = true;
    map.locate({setView : true});
    map.on('locationfound', function (e) {
        shouldShowLocationError = false;
        if (!locationMarker) {
            var iconOptions = {
                iconUrl: 'images/your_location.png?ver17',
                iconAnchor: [12, 25],
                iconSize: [25, 25],
                zIndexOffset: 1000
            }
            locationMarker = L.marker(e.latlng, {icon: L.icon(iconOptions)});
            locationMarker.addTo(map);
        }
        else {
            locationMarker.setLatLng(e.latlng);
        }
    });
    map.on('locationerror', function (e) {
        if (shouldShowLocationError) {
            alert("You need to allow your browser (Safari/Chrome/etc) to have location access. It's usually in Settings.");
            shouldShowLocationError = false;
        }
    });
}

function locateMe() {
    map.locate({setView : true});
}

function refreshPokemons() {
    if (!shouldUpdate) {
        return; //don't update when map is moving
    }
    var toBeRemovedIndexes = [];
    var currentUnixTime = Math.floor(Date.now() / 1000) - timeOffset;
    for (var i = 0; i < pokemons.length; ++i) {
        var currentPokemon = pokemons[i];
        if (currentPokemon.despawn < currentUnixTime - 10 ||
            (!isPokemonChecked(currentPokemon.id) && !shouldTurnFilterOff())) {
            toBeRemovedIndexes.push(i);
        }
    }

    for (var i = toBeRemovedIndexes.length - 1; i >= 0; --i) {
        pokemons.splice(toBeRemovedIndexes[i], 1);
        var marker = markers[toBeRemovedIndexes[i]];
        marker.removeFrom(map);
        markers.splice(toBeRemovedIndexes[i], 1);
    }

    //remove low IV from map, add high IV to map

    for (var i = 0; i < pokemons.length; ++i) {
        var currentPokemon = pokemons[i];

        var ivPercentage = (currentPokemon.attack + currentPokemon.defence + currentPokemon.stamina) / 45 * 100;
        var marker = markers[i];

        var min_iv_compare = min_iv;

        //to let unknown iv show
        if (min_iv == 0) {
            min_iv_compare = -100;
        }

        if (ivPercentage >= min_iv_compare || shouldTurnFilterOff()) {
            if (!marker._map) {
                marker.addTo(map);
            }
        }
        else {
            if (marker._map) {
                marker.removeFrom(map);
            }
        }
    }

    if (shouldShowTimers()) {
        for (var i = 0; i < markers.length; ++i) {
            //only update for the ones in bounds
            var mapBounds = map.getBounds();
            var tmpMarker = markers[i];
            if (mapBounds.contains(tmpMarker.getLatLng())) {
                $(tmpMarker._icon).find('.pokemon_icon_timer').html(timeToString(pokemons[i].remainingTime()));
            }
        }
    }
}

function refreshMarker() {
    //update selected marker
    if (selectedMarker) {
        var index = -1;
        for (var i = 0; i < markers.length; i ++) {
            var marker = markers[i];
            if (marker == selectedMarker) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            marker.bindPopup(infoWindowString(pokemons[index]));
        }
    }

    if (locationMarker) {
        map.locate();
    }
}

function indexOfPokemons(pokemon, pokemons) {
    for (var i = 0; i < pokemons.length; ++i) {
        var currentPokemon = pokemons[i];
        if (pokemon.isEqual(currentPokemon)) {
            return i;
        }
    }
    return -1;
}

function timeToString(seconds) {
    if (seconds < 0) {
        return 'Expired';
    }
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;

    var minuteString = '' + minutes;
    var secondString = '' + seconds;

    if (minutes < 10) {
        minuteString = '0' + minuteString;
    }
    if (seconds < 10) {
        secondString = '0' + secondString;
    }
    return minuteString + ':' + secondString;
}

function processNewPokemons(newPokemons) {
    var shouldHide = true;
    if (map.getZoom() >= 14 || (markers.length + newPokemons.length) <= 15) {
        // shouldHide = false;
    }

    for (var i = 0; i < newPokemons.length; ++i) {
        if (!newPokemons[i]['disguise']) {
            newPokemons[i]['disguise'] = 0;
        }

        if (!newPokemons[i]['attack']) {
            newPokemons[i]['attack'] = -1;
        }

        if (!newPokemons[i]['defence']) {
            newPokemons[i]['defence'] = -1;
        }

        if (!newPokemons[i]['stamina']) {
            newPokemons[i]['stamina'] = -1;
        }

        if (!newPokemons[i]['move1']) {
            newPokemons[i]['move1'] = -1;
        }

        if (!newPokemons[i]['move2']) {
            newPokemons[i]['move2'] = -1;
        }

        var pokemon = new Pokemon(newPokemons[i]['pokemon_id'], new Point(newPokemons[i]['lat'], newPokemons[i]['lng']), newPokemons[i]['despawn'], newPokemons[i]['disguise'], newPokemons[i]['attack'], newPokemons[i]['defence'], newPokemons[i]['stamina'], newPokemons[i]['move1'], newPokemons[i]['move2']);
        var currentUnixTime = Math.floor(Date.now() / 1000) - timeOffset;
        if (currentUnixTime < pokemon.despawn) {
            var index = indexOfPokemons(pokemon, pokemons);
            if (index == -1) {
                pokemons.push(pokemon);

                var markerLocation = new L.LatLng(pokemon.center.lat, pokemon.center.lng);

                var iconDimension = 36;
                var iconOptions = {
                    iconSize: [iconDimension, iconDimension],
                    iconAnchor: [iconDimension/2, iconDimension],
                    popupAnchor: [0, -iconDimension],
                    zIndexOffset: -1000,
                    html : pokeHTML(pokemon, shouldHide)
                }
                var htmlIcon = new L.HtmlIcon(iconOptions);

                var marker = new L.Marker(markerLocation, {icon: htmlIcon});

                var ivPercentage = (pokemon.attack + pokemon.defence + pokemon.stamina) / 45 * 100;

                var min_iv_compare = min_iv;

                //to let unknown iv show
                if (min_iv == 0) {
                    min_iv_compare = -100;
                }

                if ((isPokemonChecked(pokemon.id) && ivPercentage >= min_iv_compare) || shouldTurnFilterOff()) {
                    marker.addTo(map);
                }

                marker.bindPopup("");
                markers.push(marker);
                marker.addEventListener('click', function(e) {
                    selectedMarker = e.target;
                    var index = -1;
                    for (var i = 0; i < markers.length; ++i) {
                        if (markers[i] == selectedMarker) {
                            index = i;
                            break;
                        }
                    }
                    if (index != -1) {
                        selectedMarker.bindPopup(infoWindowString(pokemons[index]));
                    }
                });

                if (parseFloat(newPokemons[i]['lat']) == hashPokemonLat && parseFloat(newPokemons[i]['lng']) == hashPokemonLng) {
                    hashPokemonLat = 0;
                    hashPokemonLng = 0;
                    selectedMarker = marker;
                    selectedMarker.bindPopup(infoWindowString(pokemon));
                    selectedMarker.openPopup();
                }
            }
        }
    }
    refreshPokemons();
}

function shouldTurnFilterOff() {
    var userSettings = localStorage.getItem('filterOff');
    if (userSettings != '1')  {
        return false;
    }
    return shouldShowFilterLabel();
}

function shouldShowFilterLabel() {
    if (window.mobilecheck()) {
        return (map.getZoom() >= 14);
    }
    return (map.getZoom() >= 15);
}

var pendingLoad = null;

function reloadPokemons() {
    var currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - 2 < lastLoad) {
        //try to reload in the next 5 seconds
        if (!pendingLoad) {
            pendingLoad = setTimeout(function() {
                reloadPokemons();
            }, (lastLoad + 2 - currentTime) * 1000);
        }

        return;
    }

    pendingLoad = null;

    lastLoad = currentTime;

    var mons = '&mons=';

    for (var i in pokeDict) {
        if (isPokemonChecked(i) || shouldTurnFilterOff()) {
            mons += i + ',';
        }
    }

    mons = mons.slice(0, -1);

    var bounds = '';

    var localInserted = inserted;
    if (shouldTurnFilterOff()) {
        bounds = '&bounds=' + map.getBounds().getWest() + ',' + map.getBounds().getEast() + ',' + map.getBounds().getSouth() + ',' + map.getBounds().getNorth();
        localInserted = 0;
    }

    var doneFunction = function(data) {
        var newPokemons = data['pokemons'];
        var meta = data['meta'];

        //do not modify inserted if looking at bounds
        if (!shouldTurnFilterOff()) {
            inserted = parseInt(meta['inserted']);
        }

        timeOffset = Math.floor(Date.now() / 1000) - parseInt(meta['time']);
        processNewPokemons(newPokemons);
    }

    $.ajax({
        type: 'GET',
        url: 'query2.php?since='+ localInserted + mons + bounds
    }).done(doneFunction);
}

function getPokemonName(pokemon) {
    return pokeDict[pokemon.id]["name"];
}

function getDisguisePokemonName(pokemon) {
    return pokeDict[pokemon.disguise]["name"];
}

function getMoveName(moveId) {
    if (movesDict[moveId]) {
        return movesDict[moveId];
    }
    return "";
}

function infoWindowString(pokemon) {

    var disguiseString = "";
    if (pokemon.disguise != 0) {
        disguiseString = " (" + getDisguisePokemonName(pokemon) + ")";
    }

    var ivString = "<b>IV</b>: unknown";

    var movesetString = "<b>Moveset</b>: unknown";
    if (pokemon.attack != -1 && pokemon.defence != -1 && pokemon.stamina != -1 && pokemon.move1 != -1 && pokemon.move2 != -1) {
        ivString = "<b>IV</b>: "+ pokemon.attack + " | " + pokemon.defence + " | " + pokemon.stamina + " (" + Math.floor((pokemon.attack + pokemon.defence + pokemon.stamina)/45 * 100) + "%)";
        movesetString = "<b>Moveset:</b><br />" + getMoveName(pokemon.move1) + " | " + getMoveName(pokemon.move2);
    }

    ivString += "<br />";
    movesetString += "<br /><br />";

    return '<b>' + getPokemonName(pokemon) + disguiseString + "</b><br />" + ivString + movesetString + timeToString(pokemon.remainingTime()) + ' | <a target="_blank" href="http://maps.google.com/maps?q=' + pokemon.center.lat + ',' + pokemon.center.lng + '">Maps</a>';
}

function checkPokemon(pokemon_id) {
    localStorage.setItem(pokemon_id, '1');
}

function uncheckPokemon(pokemon_id) {
    localStorage.setItem(pokemon_id, '0');
}

function isPokemonChecked(pokemon_id) {
    var string = localStorage.getItem(pokemon_id);
    return (string == '1');
}

function generateFilterList() {
    var html = '';
    var ad_break_index = 15;
    for (var i = 0; i < pokeArray.length; ++i) {
        var pokemon = pokeArray[i];
        var disabled = '';
        var checked = '';
        var cssClass = '';
        var question = '';
        if (isPokemonChecked(pokemon['id']) && pokemon['show_filter']) {
            checked = ' checked="true" ';
        }

        if (pokemon['show_filter']) {
            cssClass = 'filter_checkbox';
        }
        else {
            cssClass = 'filter_checkbox input_disabled';
            disabled = ' disabled ';
            question = ' <a href="faq.html#pidgey"><img src="images/question.png" style="width: 15px; height: 15px;" /></a> '
        }
        html += '<div class="' + cssClass + '"><input id="checkbox_' + pokemon['id'] + '" type="checkbox" ' + checked + disabled + ' name="pokemon" value="' + pokemon['id'] + '"><label for="checkbox_' + pokemon['id'] + '"><img src="images/poke/' + pokemon['id'] + '.png?ver17" style="max-height: 25px">' + pokemon['name'] + '</label>' + question + '</div>';
    }

    $('#filter_list_top').html(html);
    // html = '';
//   for (var i = ad_break_index; i < pokeArray.length; ++i) {
//     var pokemon = pokeArray[i];
//     var disabled = '';
//     var checked = '';
//     var cssClass = '';
//     var question = '';
//     if (isPokemonChecked(pokemon['id']) && pokemon['show_filter']) {
//       checked = ' checked="true" ';
//     }
//
//     if (pokemon['show_filter']) {
//       cssClass = 'filter_checkbox';
//     }
//     else {
//       cssClass = 'filter_checkbox input_disabled';
//       disabled = ' disabled ';
//       question = ' <a href="faq.html#pidgey"><img src="images/question.png" style="width: 15px; height: 15px;" /></a> '
//     }
//     html += '<div class="' + cssClass + '"><input id="checkbox_' + pokemon['id'] + '" type="checkbox" ' + checked + disabled + ' name="pokemon" value="' + pokemon['id'] + '"><label for="checkbox_' + pokemon['id'] + '">' + pokemon['name'] + '</label>' + question + '</div>';
//   }
//
//   $('#filter_list_bottom').html(html);
//
    $('.filter_checkbox input').bind("change", function(data) {
        if (this.checked) {
            checkPokemon(this.value);
            inserted = 0;
            reloadPokemons();
        }
        else {
            uncheckPokemon(this.value);
        }
    });
}

function compare(a, b) {
    if (a.rank < b.rank) {
        return -1;
    }
    else {
        return 1;
    }
}

function firstRun() {
    if (localStorage.getItem('firstRun') != "1") {
        for (var key in pokeDict) {
            localStorage.setItem(key, "0");
        }
        localStorage.setItem('149', "1");
        localStorage.setItem('142', "1");
        localStorage.setItem('143', "1");
        localStorage.setItem('130', "1");
        localStorage.setItem('131', "1");
        localStorage.setItem('3', "1");
        localStorage.setItem('6', "1");
        localStorage.setItem('9', "1");
        localStorage.setItem('59', "1");
        localStorage.setItem('65', "1");
        localStorage.setItem('76', "1");
        localStorage.setItem('103', "1");
        localStorage.setItem('112', "1");
        localStorage.setItem('113', "1");
        localStorage.setItem('134', "1");
        localStorage.setItem('135', "1");
        localStorage.setItem('136', "1");
        localStorage.setItem('137', "1");
        localStorage.setItem('89', "1");
        localStorage.setItem('68', "1");
        localStorage.setItem('106', "1");
        localStorage.setItem('107', "1");
        localStorage.setItem('108', "1");

        localStorage.setItem('firstRun', "1");
    }
}

function loadPokemonList() {
    $.get('json/pokemon_list.json?ver17', function(data) {
        pokeArray = data;
        pokeDict = {};

        for (var i in data) {
            var pokemon = data[i];
            pokeDict[pokemon['id']] = {"name": pokemon['name'], 'show_filter': pokemon['show_filter']};
        }

        firstRun();
        generateFilterList();
        reloadPokemons();
        refreshPokemons();
        setInterval(function(){
            refreshPokemons();
        }, 1000);

        setInterval(function(){
            refreshMarker();
        }, 1000);

        setInterval(function(){
            reloadPokemons();
        }, 60000);
    });
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPrivateSafari() {
    try { localStorage.test = 2; } catch (e) {
        alert("SeoulPokeMap doesn't work in private browsing mode. Please switch it off.");
    }
}

function shouldShowTimers() {
    return false;
    return (map.getZoom() >= 14 || markers.length <= 15);
}

function updateFilterLabel() {
    var userSettings = localStorage.getItem('filterOff');
    if (userSettings == '1') {
        $('#filter_settings_center a').html('Filter Off');
    }
    else {
        $('#filter_settings_center a').html('Filter On');
    }
}

function initMap() {
    $(document).ready(function() {

        jQuery('#min_iv').val(min_iv);

        jQuery('#min_iv').bind('propertychange change click keyup input paste', function(event) {
            var min_iv_input = event.target;
            var min_iv_value = parseInt(jQuery(event.target).val());

            var shouldForceChangeValue = false;
            if (min_iv_value < 0) {
                min_iv_value = 0;
                shouldForceChangeValue = true;
            }
            if (min_iv_value > 100) {
                min_iv_value = 100;
                shouldForceChangeValue = true;
            }

            if (shouldForceChangeValue) {
                jQuery(event.target).val(min_iv_value);
            }

            min_iv = min_iv_value;

            localStorage.setItem('min_iv', min_iv.toString());

            refreshPokemons();
        });

        checkPrivateSafari();
        updateFilterLabel();
        var center = [37.552961, 126.991325];
        loadPokemonList();
        var zoomLevel = 11;

        if (window.mobilecheck()) {
            zoomLevel = 10;
        }

        if (window.location.hash != "") {
            var hash = window.location.hash.substr(1);

            var array = hash.split(",");

            if (array.length == 2) {
                var hashLat = parseFloat(array[0]);
                var hashLng = parseFloat(array[1]);

                hashPokemonLat = hashLat;
                hashPokemonLng = hashLng;

                center = [hashLat, hashLng];
                zoomLevel = 15;
                $('#filter_settings').fadeIn();
            }
        }

        map = L.map('map').setView(center, zoomLevel);



        map.on('popupclose', function() {
            selectedMarker = null;
        });

        map.on("movestart", function(event) {
            shouldUpdate = false;
        });
        map.on("moveend", function(event) {
            shouldUpdate = true;
            if (shouldTurnFilterOff()) {
                inserted = 0;
                reloadPokemons();
            }
        });
        map.on("dragstart", function(event) {
            shouldUpdate = false;
        });
        map.on("dragend", function(event) {
            shouldUpdate = true;
            if (shouldTurnFilterOff()) {
                inserted = 0;
                reloadPokemons();
            }
        });
        map.on("zoomstart", function(event) {
            shouldUpdate = false;
        });
        map.on('zoomend', function() {
            shouldUpdate = true;
            refreshPokemons();
            if (shouldShowTimers()) {
                $('.pokemon_icon_timer').css('display', 'block');
            }
            else {
                $('.pokemon_icon_timer').css('display', 'none');
            }
            // if (shouldTurnFilterOff()) {
            inserted = 0;
            reloadPokemons();
            // }

            if (shouldShowFilterLabel()) {
                $('#filter_settings').fadeIn();
            }
            else {
                $('#filter_settings').fadeOut();
            }
        });

        $('#filter_settings_center a').bind('click', function() {
            var nextFilter = '';
            var text = '';
            if (localStorage.getItem('filterOff') == '1') {
                nextFilter = '0';
                text = 'Filter On';
            }
            else {
                nextFilter = '1';
                text = 'Filter Off';
            }
            localStorage.setItem('filterOff', nextFilter);
            $(this).html(text);

            if (nextFilter == '1') {
                reloadPokemons();
            }
            return false;
        });

        var tilesServer = 'https://seoul-{s}.1pokemap.com/{z}/{x}/{y}.png';
        // var tilesServer = 'https://seoulpokemap.com/images/seoulpokemap.png';
        // var tilesServer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var defaultMaxZoom = 17;
        var defaultMinZoom = 9;
        var randomNumber = getRandomIntInclusive(1, 100);
        var mapAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

        L.tileLayer(tilesServer, {
            maxZoom: defaultMaxZoom,
            attribution: mapAttribution,
            minZoom: defaultMinZoom
        }).addTo(map);

        if (Math.random() < 0.2 && false) {
            $('#overlay').show();
        }

        $('#close_donation_button a').bind('click', function() {
            $('#overlay').hide();
        });

        $('#donate_button a').bind('click', function() {
            $('#overlay').hide();
        });

        $('#filter_link').bind('click', function() {
            $('#filter').css('display', 'block');
            ga('send', 'event', 'Filter', 'click');
        });

        $('#close_btn').bind('click', function() {
            $('#filter').css('display', 'none');
        });

        $('#select_all_btn').bind('click', function() {
            var shouldCheckAll = true;

            shouldCheckAll = confirm("Show all Pokémon will make your page laggy. Proceed?");

            if (shouldCheckAll) {
                $(".filter_checkbox input").each(function(){
                    var tmpPokemon = pokeDict[$(this).val()];
                    if (tmpPokemon['show_filter']) {
                        $(this).prop('checked', true);
                    }
                });
                for (var key in pokeDict) {
                    if (pokeDict[key]['show_filter']) {
                        checkPokemon(key);
                    }
                }
                inserted = 0;
                reloadPokemons();
            }
        });
        $('#deselect_all_btn').bind('click', function() {
            $(".filter_checkbox input").each(function(){
                $(this).prop('checked', false);
            });
            for (var key in pokeDict) {
                uncheckPokemon(key);
            }
            inserted = 0;
            reloadPokemons();
        });
    });
}
