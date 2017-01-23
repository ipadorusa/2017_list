/**
 * Created by kimwoosuk on 2017. 1. 8..
 */
function search_skill(search_text){
    var array = [];
    for(var i=0; i<스킬.length; i++){
        var 이름 = 스킬[i].이름;
        var 설명 = 스킬[i].설명;
        var 검색어 = search_text;
        if(이름.indexOf(검색어) >= 0 || 설명.indexOf(검색어) >= 0 ){
            array.push(이름);
        }
    }
    return array;
}

function get_skill_contents(skill_name){
    for(var i=0; i<스킬.length; i++){
        var 이름 = 스킬[i].이름;
        var 검색어 = skill_name;
        if(이름.indexOf(검색어) >= 0){
            return 스킬[i].설명;
        }
    }
    return "";
}
function get_skill_list(skill_name){
    var arr = [];
    for(var i=0; i<스킬.length; i++){
        var 이름 = 스킬[i].이름;
        var 검색어 = skill_name.split("_")[0];
        if(이름.indexOf(검색어) >= 0){
            arr.push(스킬[i]);
        }
    }
    return arr;
}


function search_starmon(search_text, search_type){
    var array = [];
    for(var i=0; i<스타몬.length; i++){
        var isSearch = false;

        //몬스터검색
        if(search_type == "전체" || search_type == "이름"){
            if(!isSearch){
                var 진화1 = 스타몬[i].진화1;
                var 진화2 = 스타몬[i].진화2;
                var 진화3 = 스타몬[i].진화3;
                if(진화1.indexOf(search_text) >= 0
                    || 진화2.indexOf(search_text) >= 0
                    || 진화3.indexOf(search_text) >= 0){
                    array.push(스타몬[i]);
                    isSearch = true;
                }
            }
        }

        //속성검색
        if(search_type == "전체" || search_type == "속성"){
            if(!isSearch){
                var 속성 = 스타몬[i].속성;
                if(속성.indexOf(search_text) >= 0){
                    array.push(스타몬[i]);
                    isSearch = true;
                }
            }
        }

        //타입검색
        if(search_type == "전체" || search_type == "타입"){
            if(!isSearch){
                var 타입 = 스타몬[i].타입;
                if(타입.indexOf(search_text) >= 0){
                    array.push(스타몬[i]);
                    isSearch = true;
                }
            }
        }

        //태생검색
        if(search_type == "전체" || search_type == "태생"){
            if(!isSearch){
                var 태생 = 스타몬[i].태생;
                if(태생.indexOf(search_text) >= 0){
                    array.push(스타몬[i]);
                    isSearch = true;
                }
            }
        }

        //리더스킬검색
        if(search_type == "전체" || search_type == "리더스킬"){
            if(!isSearch){
                var 리더스킬 = 스타몬[i].리더스킬;
                var _skill_list = search_skill(search_text);
                for(var j=0; j<_skill_list.length; j++){
                    if(리더스킬.indexOf(_skill_list[j]) >= 0 ){
                        array.push(스타몬[i]);
                        break;
                    }
                }
            }
        }

        //3성스킬
        if(search_type == "전체" || search_type == "3성스킬"){
            if(!isSearch){
                var 스킬3성 = 스타몬[i].스킬3성;
                var _skill_list = search_skill(search_text);
                for(var j=0; j<_skill_list.length; j++){
                    if(스킬3성.indexOf(_skill_list[j]) >= 0 ){
                        array.push(스타몬[i]);
                        break;
                    }
                }
            }
        }

        //5성스킬
        if(search_type == "전체" || search_type == "5성스킬"){
            if(!isSearch){
                var 스킬5성 = 스타몬[i].스킬5성;
                var _skill_list = search_skill(search_text);
                for(var j=0; j<_skill_list.length; j++){
                    if(스킬5성.indexOf(_skill_list[j]) >= 0 ){
                        array.push(스타몬[i]);
                        break;
                    }
                }
            }
        }

    }
    return array;
}

function get_starmon(mon_name, mon_elem){
    for(var i=0; i<스타몬.length; i++){
        var 진화1 = 스타몬[i].진화1;
        var 진화2 = 스타몬[i].진화2;
        var 진화3 = 스타몬[i].진화3;
        var 속성 = 스타몬[i].속성;
        var 검색어 = mon_name;
        if(속성.indexOf(mon_elem) >= 0
            && (진화1.indexOf(검색어) >= 0 || 진화2.indexOf(검색어) >= 0 || 진화3.indexOf(검색어) >= 0 )){
            return 스타몬[i];
        }
    }
    return "";
}

function get_count(mon_list){
    var 불 = 0 ;
    var 물 = 0 ;
    var 나무 = 0;
    var 빛 = 0;
    var 어둠 = 0;


    for(var i=0; i<mon_list.length; i++){
        var mon = mon_list[i];

        //속성카운터
        if("불" == mon.속성) 불++;
        if("물" == mon.속성) 물++;
        if("나무" == mon.속성) 나무++;
        if("빛" == mon.속성) 빛++;
        if("어둠" == mon.속성) 어둠++;
    }
    var data = {
        "속성" : {
            "불" : 불,
            "물" : 물,
            "나무" : 나무,
            "빛" : 빛,
            "어둠" : 어둠,
        }
    };
    return data;
}

function get_css_element(element_name){
    var val = "";
    switch(element_name){
        case "불" : val = "fire"; break;
        case "물" : val = "water"; break;
        case "나무" : val = "wood"; break;
        case "빛" : val = "light"; break;
        case "어둠" : val = "dark"; break;
    }
    return val;
}


function get_not_3el(){
    var datas = [];
    for(var i=0; i<스타몬.length; i++){
        var mon1 = 스타몬[i];
        var list = [];
        for(var j=0; j<스타몬.length; j++){
            var mon2 = 스타몬[j];
            if(mon1.진화1 == mon2.진화1 && mon1.속성 != mon2.속성){
                if(mon1.속성 != "빛" && mon2.속성 != "빛" && mon1.속성 != "어둠" && mon2.속성 != "어둠"){
                    list.push(mon2);
                }
            }
        }
        if(list.length < 2 && mon1.속성 != "빛" && mon1.속성 != "어둠"){
            datas.push(mon1);
        }
    }
    return datas;
}