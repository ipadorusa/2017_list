/*!
 * @author 강태진
 * @description 현대자동차 통합 브랜드 프레임웍
 */
(function (context, $, undefined) {
    "use strict";
    /* jshint expr: true, validthis: true */
    /* global common, alert, escape, unescape */

    var $root = $(document.documentElement);

    /**
     * @namespace
     * @name common
     * @description root namespace of hib site
     */


    /**
     * @namespace
     * @name common
     * @description 현대자동차 통합 브랜드 웹 공통 기능 스크립트
     */

    /**
     * @namespace
     * @name common
     * @description common 단축명
     */
    var common = context.common || (context.common = {});

    var toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty,
        doc = context.document,
        emptyFn = function () {},
        arraySlice = Array.prototype.slice;

    if (typeof Function.prototype.bind === 'undefined') {
        /**
         * 함수내의 컨텐스트를 지정
         * @param {Object} context 컨텍스트
         * @param {Mixed} ... 두번째 인자부터는 실제로 싱행될 함수로 전달된다.
         * @example
         * function Test(){
		 *		alert(this.name);
		 * }.bind({name: 'axl rose'});
         *
         * Test(); -> alert('axl rose');
         */
        Function.prototype.bind = function () {
            var __method = this,
                args = arraySlice.call(arguments),
                object = args.shift();

            return function () {
                // bind로 넘어오는 인자와 원본함수의 인자를 병합하여 넘겨줌.
                var local_args = args.concat(arraySlice.call(arguments));
                if (this !== window) { local_args.push(this); }
                return __method.apply(object, local_args);
            };
        };
    }

    /**
     * jQuery 객체
     * @class
     * @name $
     */

    /**
     * jquery easing
     * Open source under the BSD License.
     *  */
    jQuery.easing['jswing'] = jQuery.easing['swing'];
    $.extend($.easing,
        {
            def: 'easeOutQuad',
            /**
             * custom: 그냥 만들어봄
             *  */
            custom: function (x, t, b, c, d) {
                var s = 1.70158;
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            swing: function (x, t, b, c, d) {
                //alert($.easing.default);
                return $.easing[$.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c*(t/=d)*t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c*(t/=d)*t*t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        });

    /**
     * Object에 해당 하는 클래스명을 리턴
     * @function
     * @name $#getClassName
     * @param {Integer} index default: 0
     * @return {String} 문자열
     * @example
     * 	$('.d-list').getClassName();
     *
     *  */
    $.fn.getClassName = function (index) {
        var str = ' '.concat(this.eq((index ? index : 0)).attr('class')).replace(/\s/gi, function () {
            return '.';
        });
        return str;
    };


    /**
     * value값을 URI인코딩하여 반환
     * @function
     * @name $#encodeURI
     * @return {String} 인코딩된 문자열
     */
    $.fn.encodeURI = function (value) {
        if (arguments.length === 0) {
            return encodeURIComponent($.trim(this.val()));
        } else {
            return this.val(encodeURIComponent(value));
        }
    };

    /**
     * value값의 앞뒤 스페이스문자 또는 old ie인경우에 placeholder를 제거하여 실제 값만 반환
     * @function
     * @name $#trimVal
     * @return {String} 문자열
     */
    $.fn.trimVal = (function () {
        var supportPlaceholder = ('placeholder' in document.createElement('input'));

        return supportPlaceholder ? function (value) {
            if(arguments.length === 0) { return $.trim(this.val()); }
            else { return this.val($.trim(value)); }
        } : function (value) {
            if (arguments.length === 0) {
                if(this.val() === this.attr('placeholder')) {
                    return '';
                }
                return $.trim(this.val());
            } else {
                value = $.trim(value) || this.attr('placeholder');
                return this.val(value);
            }
        };
    })();

    /**
     * 체크여부를 지정할 때, changed 이벤트를 발생시킨다.(연결된 label에 on클래스를 토글링하고자 할 때 사용)
     * @function
     * @name $#checked
     * @param {Boolean} checked 체크여부
     * @fires $#changed
     * @example
     * // 먼저 changed 이벤트 바인딩
     * $('input:checkbox').on('changed', function (e, isChecked){ $(this).parent()[isChecked?'addClass':'removeClass']('on'); });
     * ..
     * // checked 값을 변경
     * $('input:checkbox').checked(true); // 해당체크박스의 부모에 on클래스가 추가된다.
     */
    $.fn.checked = function (checked) {
        return this.each(function () {
            if(this.type !== 'checkbox' && this.type !== 'radio'){ return; }
            /**
             * @event $#changed
             * @type {object}
             * @peoperty {boolean} checked - 체크 여부
             */
            var $this = $(this).prop('checked', checked).trigger('changed', [checked]);
        });
    };

    /**
     * 클래스 치환
     * @function
     * @name $#replaceClass
     * @param {String} old 대상클래스
     * @param {String} newCls 치환클래스
     */
    $.fn.replaceClass = function (old, newCls) {
        return this.each(function () {
            $(this).removeClass(old).addClass(newCls);
        });
    };

    /**
     * 레이어 표시 담당:
     * - 단순히 show를 하는게 아니라, 레이어가 표시되기전에 beforeshow이벤트를, 표시된 후에 show이벤트를 발생시켜준다.
     * - 레이어를 띄운 버튼을 보관한다. 닫을때, 버튼에 어떠한 액션을 취하고자 할 때 유용
     * @function
     * @name $#showLayer
     * @param {Element|jQuery} options.button (Optional) 버튼
     * @param {Function} options.onShow (Optional) 표시될 때 실행될 함수
     */
    $.fn.showLayer = function (options) {
        options = $.extend({
            onShow: common.emptyFn,
            opener: null
        }, options);

        return this.each(function () {
            var $this = $(this),
                evt;
            if (options.opener) {
                $this.data('opener', options.opener);
                $(options.opener).attr({'aria-pressed': 'true', 'aria-expand': 'true'});
            }

            $this.trigger(evt = $.Event('beforeshow'));
            if (evt.isDefaultPrevented()){ return; }

            // 표시될 때 d_open 클래스 추가
            $this.addClass('d_open').show().trigger('show');
            options.onShow.call($this[0]);
        });
    };

    /**
     * 레이어 숨김 담당:
     * - 단순히 hide를 하는게 아니라, 숨겨진 후에 hide이벤트를 발생시켜준다.
     * @function
     * @name $#hideLayer
     * @param {Boolean} options.focusOpener (Optional) 숨겨진 후에 버튼에 포커스를 줄것인지 여부
     * @param {Function} options.onHide (Optional) 숨겨진 후에 실행될 함수
     */
    $.fn.hideLayer = function (options) {
        options = $.extend({
            onHide: common.emptyFn,
            focusOpener: false
        }, options);

        return this.each(function () {
            var $this = $(this);
            $this.removeClass('d_open').hide().trigger('hide');
            options.onHide.call($this[0]);

            // 숨겨진 후에 열었던 원래버튼에 포커스를 강제로 준다.
            if($this.data('opener')){
                var $btn = $( $this.data('opener') );
                $btn.attr({'aria-pressed': 'false', 'aria-expand': 'false'});
                if (options.focusOpener === true) {
                    $btn.focus();
                }
            }
        });
    };

    /**
     * 아무것도 안하는 빈함수
     * @function
     * @name $#noop
     * @example
     * $(this)[ isDone ? 'show' : 'noop' ](); // isDone이 true에 show하되 false일때는 아무것도 안함.
     */
    $.fn.noop = function () {
        return this;
    };

    /**
     * 체크된 항목의 값을 배열에 담아서 반환
     * @function
     * @name $#checkedValues
     * @return {Array}
     */
    $.fn.checkedValues = function () {
        var results = [];
        this.each(function () {
            if((this.type === 'checkbox' || this.type === 'radio') && this.checked === true) {
                results[results.length] = this.value;
            }
        });
        return results;
    };

    /**
     * 같은 레벨에 있는 다른 row에서 on를 제거하고 현재 row에 on 추가
     * @function
     * @name $#activeRow
     * @param {String} cls 활성 클래스명
     * @return {jQuery}
     */
    $.fn.activeRow = function (cls) {
        cls = cls || 'on';
        return this.addClass(cls).siblings().removeClass(cls).end();
    };


    $.fn.mousestop = function (time) {
        var me = this,
            stop_timeout = null;

        time = time || 1500;

        this.on('mouseenter mouseleave mousemove',function (e) {
            switch(e.type) {
                case 'mousemove':
                case 'mouseenter':
                    clearTimeout(stop_timeout);
                    stop_timeout = setTimeout(function() {
                        me.trigger('mousestop');
                    }, time);
                    break;
                case 'mouseleave':
                    clearTimeout(stop_timeout);
                    break;
                default:
                    break;
            }
        });
    };

    $.fn.imageSequnce = function(opts) {
        opts = $.extend({
            duration:1000,
            repeat: false,
            reverse: false
        }, opts);

        opts.start && opts.start.call(this);
        var me = this,
            count = this.length,
            idx = opts.reverse ? count - 1 : 0,
            interval = opts.duration / count,
            ended = function() {
                if(opts.repeat) {
                    if(opts.reverse) {
                        idx = count - 1;
                    } else {
                        idx = 0;
                    }
                } else {
                    opts.ended && opts.ended.call(me);
                    clearInterval(timer); timer = null;
                }
            },
            timer;

        timer = setInterval(function(){
            me.hide().eq(idx).show();
            if(opts.reverse) {
                idx -= 1;
                if(0 > idx) {
                    ended();
                }
            } else {
                idx += 1;
                if(count <= idx) {
                    ended();
                }
            }
        }, interval);
    };

    /**
     * 특정 object를 arguement로 입력된 text로 치환
     * @function
     * @name $#log
     * @param {Arguments} cls 출력시킬 내용
     * @example
     * $('#header').log(1, 2, 3, 4, 5);
     *  */
    $.fn.log = function () {
        var str = '';
        for(var key in arguments){
            str += arguments[key]+' | ';
        }
        this.text(str);
        this.attr('style', "position:fixed; top:0px; left:0px; border:1px solid red; background-color:#FFF; z-index:11111111111;");
    };

    /**
     * timeStart("name")로 name값을 키로하는 타이머가 시작되며, timeEnd("name")로 해당 name값의 지난 시간을 로그에 출력해준다.
     * @memberOf common
     * @name timeStart
     * @function
     *
     * @param {String} name 타이머의 키값
     * @param {Boolean} reset 리셋(초기화) 여부
     *
     * @example
     * common.timeStart('animate');
     * ...
     * common.timeEnd('animate'); -> animate: 10203ms
     */
    common.timeStart = function (name, reset){
        if(!name) { return; }
        var time = new Date().getTime(),
            key = "KEY" + name.toString();

        this.timeCounters || (this.timeCounters = {});
        if(!reset && this.timeCounters[key]) { return; }
        this.timeCounters[key] = time;
    };

    /**
     * timeStart("name")에서 지정한 해당 name값의 지난 시간을 로그에 출력해준다.
     * @memberOf common
     * @name timeEnd
     * @function
     *
     * @param {String} name 타이머의 키값
     * @return {Number} 걸린 시간
     *
     * @example
     * common.timeStart('animate');
     * ...
     * common.timeEnd('animate'); -> animate: 10203ms
     */
    common.timeEnd = function (name){
        if(!this.timeCounters) { return; }

        var time = new Date().getTime(),
            key = "KEY" + name.toString(),
            timeCounter = this.timeCounters[key],
            diff, label;

        if(timeCounter) {
            diff = time - timeCounter;
            label = name + ": " + diff + "ms";
            console.log('[' + name + '] ' + label + 'ms');
            delete this.timeCounters[key];
        }
        return diff;
    };

    /**
     * 네임스페이스 공간을 생성하고 객체를 설정<br>
     * js의 네이티브에서 제공하지 않는 기능이지만,<br>
     * 객체리터럴을 이용하여 여타 컴파일 언어의 네임스페이스처럼 쓸 수 있다.
     *
     * @function
     * @memberOf common
     * @name namespace
     *
     * @param {String} name 네임스페이스명
     * @param {Object} obj {Optional} 지정된 네임스페이스에 등록할 객체, 함수 등
     * @return {Object} 생성된 네임스페이스
     *
     * @example
     * common.namesapce('common.widget.Tabcontrol', TabControl)
     *
     * ex) common.namespace('common.widget.Control', function (){}) 를 네이티브로 풀어서 작성한다면 다음과 같다.
     *
     * var common = common || {};
     * common.ui = common.ui || {};
     * common.widget.Control = common.widget.Control || function (){};
     */
    common.namespace = function (name, obj) {
        if (typeof name !== 'string') {
            obj && (name = obj);
            return name;
        }
        var root = context,
            names = name.split('.'),
            isSet = arguments.length === 2;

        if(isSet) {
            for(var i = -1, item; item = names[++i]; ){
                root = root[item] || (root[item] = (i === names.length - 1 ? obj : {}));
            }
        } else { // isGet
            for(var i = -1, item; item = names[++i]; ){
                if(item in root) { root = root[item] }
                else { throw Error(name + '은(는) 정의되지 않은 네임스페이스입니다.'); }
            }
        }

        return root;
    };

    /**
     * common를 루트로 하여 네임스페이스를 생성하여 새로운 속성을 추가하는 함수
     *
     * @function
     * @memberOf common
     * @name define
     *
     * @param {String} name .를 구분자로 해서 common를 시작으로 하위 네임스페이스를 생성. 없으면 common에 추가된다.
     * @param {Object|Function} object
     * @param {Boolean} (Optional) isExecFn object값이 함수형일 때 실행을 시킨 후에 설정할 것인가 여부
     *
     * @example
     * common.define('', [], {});
     * common.
     */
    common.define = function (name, object, isExecFn) {
        if (typeof name !== 'string') {
            object = name; name = '';
        }

        var root = common,
            names = name ? name.replace(/^common\.?/, '').split('.') : [],
            ln = names.length - 1,
            leaf = names[ln];

        if (isExecFn !== false && typeof object === 'function' && !hasOwn.call(object, 'classType')) {
            object = object.call(root);
        }

        for (var i = 0; i < ln; i++) {
            root = root[names[i]] || (root[names[i]] = {});
        }

        (leaf && (root[leaf] ? $.extend(root[leaf], object) : (root[leaf] = object))) || $.extend(root, object);
    };

    /**
     * common.define 를 통해 정의된 모듈을 변수에 담아서 사용하고자 할 경우
     *
     * @function
     * @memberOf common
     * @name use
     *
     * @param {String} name 네임스페이스
     * @return {Object} 함수를 실행한 결과값
     *
     * @example
     * common.define('test', function (){
	*	 return {
	*		init: function (){
	*			 alert(0);
	*		}
	*	});
	 * var test = common.use('test');
	 * test.init()	=> alert(0)
	 */
    common._prefix = 'common.';

    common.define(/** @lends common */ {
        /**
         * document jQuery wrapper
         */
        $doc: $(document),
        /**
         * window jQuery wrapper
         */
        $win: $(window),
        /**
         * 빈 함수
         * @function
         * @example
         * var func = common.emptyFn
         */
        emptyFn: emptyFn,

        /**
         * 임시 노드: css3스타일의 지원여부와 html을 인코딩/디코딩하거나 노드생성할 때  사용
         */
        tmpNode: doc.createElement('div'),

        /**
         * html5 속성의 지원여부를 체크할 때 사용
         * @example
         * is = 'placeholder' in common.tmpInput;  // placeholder를 지원하는가
         */
        tmpInput: doc.createElement('input'),

        /**
         * 터치기반 디바이스 여부
         */
        isTouch: !!('ontouchstart' in window),

        /**
         * PC 접속여부
         */
        isPC: !!(/win16|win32|win64|mac|macintel/gi.test(navigator.platform)),

        /**
         * Transform 지원여부
         */
        isTransform: function (obj, name) {
            var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
                count = prefixes.length,
                el = document.createElement('div'),
                i = 0,
                support = false;

            // 2. 임의의 element를 생성한 다음에 element.style에서 해당 프로퍼티가 있는 지를 확인합니다.
            for ( i = 0 ; i < count ; i++ ) {
                support = document.createElement('div').style[prefixes[i]] != undefined || support;
                if (support) { break; }
            }
            //while( support !== true ) {
            //	support = document.createElement('div').style[prefixes[support++]] != undefined || support;
            //}

            // 3. 지원여부를 출력합니다.
            return support;
        },

        /**
         * 객체 자체에 주어진 이름의 속성이 있는지 조회
         *
         * @param {Object} obj 객체
         * @param {String} name 키 이름
         * @return {Boolean} 키의 존재 여부
         */
        hasOwn: function (obj, name) {
            return hasOwn.call(obj, name);
        },

        /**
         * 브라우저의 Detect 정보: 되도록이면 Modernizr 라이브러리를 사용할 것을 권함
         *
         * @example
         * common.browser.isOpera // 오페라
         * common.browser.isWebKit // 웹킷
         * common.browser.isIE // IE
         * common.browser.isIE6 // IE56
         * common.browser.isIE7 // IE567
         * common.browser.isOldIE // IE5678
         * common.browser.version // IE의 브라우저
         * common.browser.isChrome // 크롬
         * common.browser.isGecko // 파이어폭스
         * common.browser.isMac // 맥OS
         * common.browser.isAir // 어도비 에어
         * common.browser.isIDevice // 아이폰, 아이패드
         * common.browser.isSafari // 사파리
         * common.browser.isIETri4 // IE엔진
         */
        browser: (function () {
            var t = {},
                win = context,
                na = win.navigator,
                ua = na.userAgent,
                match;

            t.isOpera = win.opera && win.opera.buildNumber;
            t.isWebKit = /WebKit/.test(ua);

            match = /(msie) ([\w.]+)/.exec(ua.toLowerCase()) || /(trident)(?:.*rv.?([\w.]+))?/.exec(ua.toLowerCase()) || ['',null,-1];
            t.isIE = !t.isWebKit && !t.isOpera && match[1] !== null;		//(/MSIE/gi).test(ua) && (/Explorer/gi).test(na.appName);
            t.isIE6 = t.isIE && /MSIE [56]/i.test(ua);
            t.isIE7 = t.isIE && /MSIE [567]/i.test(ua);
            t.isOldIE = t.isIE && /MSIE [5678]/i.test(ua);
            t.version = parseInt(match[2], 10);		// 사용법: if(browser.isIE && browser.version > 8) { // 9이상인 ie브라우저

            t.isChrome = (ua.indexOf('Chrome') !== -1);
            t.isGecko = (ua.indexOf('Firefox') !==-1);
            t.isMac = (ua.indexOf('Mac') !== -1);
            t.isAir = ((/adobeair/i).test(ua));
            t.isIDevice = /(iPad|iPhone)/.test(ua);
            t.isSafari = (/Safari/).test(ua);
            t.isIETri4 = (t.isIE && ua.indexOf('Trident/4.0') !== -1);

            return t;
        }()),

        is: function (o, typeName) {
            if (o === null) {
                return typeName === 'null';
            }

            if (o && (o.nodeType === 1 || o.nodeType === 9)) {
                return typeName === 'element';
            }

            var s = toString.call(o),
                type = s.match(/\[object (.*?)\]/)[1].toLowerCase();

            if (type === 'number') {
                if (isNaN(o)) {
                    return typeName === 'nan';
                }
                if (!isFinite(o)) {
                    return typeName === 'infinity';
                }
            }

            return type === typeName;
        },

        /**
         * 주어진 인자가 빈값인지 체크
         *
         * @param {Object} value 체크할 문자열
         * @param {Boolean} allowEmptyString (Optional: false) 빈문자를 허용할 것인지 여부
         * @return {Boolean}
         */
        isEmpty: function (value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (this.isArray(value) && value.length === 0);
        },

        /**
         * 배열인지 체크
         *
         * @function
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isArray: function (value) {
            return value && (value.constructor === Array || !!value.push);
        },

        /**
         * 날짜형인지 체크
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isDate: function (value) {
            return toString.call(value) === '[object Date]';
        },

        /**
         * JSON 객체인지 체크
         *
         * @function
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isObject: (toString.call(null) === '[object Object]') ? function (value) {
            return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } : function (value) {
            return toString.call(value) === '[object Object]';
        },

        /**
         * 함수형인지 체크
         *
         * @function
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isFunction: (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function (value) {
            return toString.call(value) === '[object Function]';
        } : function (value) {
            return typeof value === 'function';
        },

        /**
         * 숫자 타입인지 체크.
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isNumber: function (value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * 숫지인지 체크하되 .를 허용
         * @param {Object} value 예: 1, '1', '2.34'
         * @return {Boolean}
         */
        isNumeric: function (value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        /**
         * 문자형인지 체크
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isString: function (value) {
            return typeof value === 'string';
        },

        /**
         * 불린형인지 체크
         *
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isBoolean: function (value) {
            return typeof value === 'boolean';
        },

        /**
         * 엘리먼트인지 체크
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isElement: function (value) {
            return value ? value.nodeType === 1 : false;
        },

        /**
         * 텍스트노드인지 체크
         * @param {Object} value 체크할 값
         * @return {Boolean}
         */
        isTextNode: function (value) {
            return value ? value.nodeName === "#text" : false;
        },

        /**
         * 정의된 값인지 체크
         * @param {Object} 체크할 값
         * @return {Boolean}
         */
        isDefined: function (value) {
            return typeof value !== 'undefined';
        },

        /**
         * 주어진 값을 배열로 변환
         *
         * @param {Mixed} 배열로 변환하고자 하는 값
         * @return {Array}
         *
         * @example
         * common.toArray('abcd"); => ["a", "b", "c", "d"]
         * common.toArray(arguments);  => arguments를 객체를 array로 변환하여 Array에서 지원하는 유틸함수(slice, reverse ...)를 쓸수 있다.
         */
        toArray: function (value) {
            return arraySlice.apply(value, arraySlice.call(arguments, 1));
        },

        /**
         * 15자의 숫자로 이루어진 유니크한 값 생성
         *
         * @return {String}
         */
        getUniqId: function () {
            return Number(String(Math.random() * 10).replace(/\D/g, ''));
        },

        /**
         * 시퀀스 엘리먼트 생성
         * @function
         * @param {jQuery} $container 컨테이너
         * @param {String} format 포멧
         * @param {Number} length 개수
         */
        createSequenceElement: function ( $container, format, length ) {
            $container.css('position', 'static');
            var isBottomAuto = $container.css('bottom'),
                isLeftAuto = $container.css('left');
            $container.css('position', '');

            var style1 = (isBottomAuto === 'auto') ? 'top:' + $container.position().top + 'px;': 'bottom:' + $container.css('bottom') + ';',
                style2 = (isLeftAuto === 'auto') ? 'left:-' + $container.position().left + 'px;': 'left:' + $container.position().left + 'px;',
                t,
                h = [],
                i;


            if ($container.hasClass('d-position')) style1 = '';
            if ($container.parent().parent().hasClass('md_full') || $container.hasClass('d-position')) style2 = '';

            t = '<img src="' + format + '" alt="" style="position: absolute; ' + style1 + style2 + ' visibility:hidden;" />';

            // 최초 첫장 이미지만 추가함
            h.push(t.replace( /#+/, function ( $0 ) { return common.lpad( 0, $0.length ); }));
            $container.html( h.join( '' ) );
            $container.children( ':first' ).css({ visibility : 'visible' });
        },

        /**
         * 시퀀스 엘리먼트 시작
         * @function
         * @param {jQuery} $container 컨테이너
         */
        startSequenceElement: function ( $container, options ) {
            var $img = $container.find('img').eq(0),
                style1 = ($img.css('bottom') === 'auto') ? 'top:' + $img.position().top + 'px;': 'bottom:' + $img.css('bottom') + ';',
                style2 = ($img.css('left') === 'auto') ? 'left:-' + $img.position().left + 'px;': 'left:' + $img.position().left + 'px;',
                timer = $container.data( 'seq-timer' ),
                opts = $.extend( { fps: 30, loop: true, first: false, overlay: '', loading: true, complete: null, onComplete: null }, options ),
                t = '<img src="' + $container.attr('data-image-pattern') + '" alt="" style="position: absolute; ' + style1 + style2 + ' visibility:hidden;" />',
                h = [],
                max = parseInt($container.attr('data-image-max'),10),
                i;

            // 최초 실행시 나머지 이미지 추가
            if ( $container.find('img').size() <= 1) {
                // 로딩바가 존재할 경우 보여준다.
                if ((opts.overlay !== '' && opts.overlay !== 'undefined') && opts.loading) {
                    $('<div class="loader d-loading"><span class="none">Loading...</span></div>').appendTo($('#'+opts.overlay));
                }
                //for ( i = 0; i < $container.attr('data-image-max'); i += 1 ) {
                for ( i = 0; i < max; i += 1 ) {
                    h.push(t.replace( /#+/, function ( $0 ) { return common.lpad( i, $0.length ); }));
                }
                $container.html( h.join( '' ) );
                $container.children( ':first' ).css({ visibility : 'visible' });
            }

            // 내부에 있는 이미지들이 다 불러들여진 후에 실행
            common.waitImageLoad($container.find('img')).done(function () {
                common.PubSub.trigger('startSequenceEvent'+opts.overlay);
                if (opts.overlay !== '' && opts.loading) $('#'+opts.overlay).find('.d-loading').remove();
                if (!timer) {
                    var $els = $container.children(),
                        length = $els.length,
                        index = opts.first ? 0 : $els.filter( ':visible:first' ).index(),
                        oldIndex;
                    $container.find('img').css({ visibility : 'hidden' }).end().children( ':first' ).css({ visibility : 'visible' });
                    timer = setInterval(function () {
                        $els.eq(index).css({ visibility : 'hidden' }).end().eq(index = ++index % length).css({ visibility : 'visible' });
                        if ( !opts.loop && index === length - 1 ) {
                            common.stopSequenceElement( $container );
                            if ( opts.complete ) opts.complete.apply( $container[ 0 ] );

                            if ( typeof opts.onComplete === 'function') {
                                opts.onComplete();
                            }
                        }
                    }, Math.floor( 1000 / opts.fps ));
                    $container.data( 'seq-timer', timer );
                }
            });
        },

        /**
         * 시퀀스 엘리먼트 정지
         * @function
         * @param {jQuery} $container 컨테이너
         */
        stopSequenceElement: function ( $container ) {
            var timer = $container.data( 'seq-timer' );
            if ( timer ) {
                clearInterval( timer );
                $container.data( 'seq-timer', null );
            }
        },

        /**
         * 이미지 로드 확인
         * @function
         * @param {jQuery} $imgs 이미지
         */
        waitImageLoad: function ($imgs, allowError) {
            var me = this,
                defer = $.Deferred(),
                count = $imgs.length,
                loaded = function() {
                    count -= 1;
                    if(count <= 0){
                        defer.resolve();
                    }
                };

            if(count === 0) {
                defer.resolve();
            } else {
                $imgs.each(function(i) {
                    if(this.complete){
                        loaded();
                    } else {
                        $imgs.eq(i).one('load' + (allowError === false?'' : ' error'), loaded);
                    }
                });
            }

            return defer.promise();
        },

        /**
         * 3D 갤러리에 TOP버튼 또는 SNS 공유 버튼이 들어온 경우 처리
         */
        gallerys3d: function ($gallerys, $element) {
            if ($gallerys.size() > 0 && $element.size() > 0) {
                if ($gallerys.offset().top < ($element.offset().top + $element.height()) && ($gallerys.offset().top + $gallerys.height()) > $element.offset().top) {
                    $element.addClass('off_3d');
                } else {
                    $element.removeClass('off_3d');
                }
            }
        },

        /**
         * 왼쪽 문자 채우기
         * @param {String} val 값
         * @param {Number} len 길이
         * @param {String} str 문자
         */
        lpad: function ( val, len, str ) {
            var v = new String( val ),
                n = ( len || 2 ) - v.length,
                s = str || '0',
                p = '',
                i;

            for ( i = 0; i < n; i += 1 ) {
                p += s;
            }

            return p + v;
        },

        /**
         * View 화면에 위치했는지
         * @param {Object} 확인할 Object
         * @param {Number} top
         */
        isOnScreen: function (obj, top) {
            var win = $(window),
                viewport = {
                    top : win.scrollTop(),
                    left : win.scrollLeft()
                },
                bounds,
                onScreen = [],
                i = 0;

            $.each(obj, function (k, value) {
                bounds = obj.eq(k).offset();
                viewport.right = viewport.left + win.width();
                viewport.bottom = viewport.top + win.height() - top;
                bounds.right = bounds.left + obj.eq(k).outerWidth();
                bounds.bottom = bounds.top + obj.eq(k).outerHeight();
                if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
                    onScreen.push(k);
                    i++;
                }
            });

            return onScreen;
        },

        /**
         * 순번으로 유니크값 을 생성해서 반환
         * @function
         * @return {Number}
         */
        getUniqKey: (function () {
            var uniqKey = 0;
            return function () {
                return (uniqKey += 1);
            };
        }()),

        /**
         * 로그를 보기위한 함수
         * @private
         * @function
         * @param {Arguments} 출력시킬 문자열
         */
        log: function () {
            var str = '';
            var $header = $('#header');
            for(var key in arguments){
                str += arguments[key]+' | ';
            }
            $header.text(str);

            $header.get(0).style['position'] = 'fixed';
            $header.attr('style', "position:fixed; top:0px; left:0px; border:1px solid red; background-color:#FFF; z-index:11111111111;");
        }

    });

    /**
     * 문자열 관련 유틸 함수 모음
     *
     * @namespace
     * @name common.string
     * @description
     */
    common.define('string', function () {
        var escapeChars = {
                '&': '&amp;',
                '>': '&gt;',
                '<': '&lt;',
                '"': '&quot;',
                "'": '&#39;'
            },
            unescapeChars = (function (escapeChars) {
                var results = {};
                $.each(escapeChars, function (k, v) {
                    results[v] = k;
                });
                return results;
            })(escapeChars),
            escapeRegexp = /[&><'"]/g,
            unescapeRegexp = /(&amp;|&gt;|&lt;|&quot;|&#39;|&#[0-9]{1,5};)/g,
            tagRegexp = /<\/?[^>]+>/gi,
            scriptRegexp = /<script[^>]*>([\\S\\s]*?)<\/script>/img;

        return /** @lends common.string */{
            /**
             * 정규식이나 검색문자열을 사용하여 문자열에서 텍스트를 교체
             *
             * @param {String} value 교체를 수행할 문자열
             * @param {RegExp|String} 검색할 문자열이나 정규식 패턴
             * @param {String} 대체할 문자열
             * @return {String} 대체된 결과 문자열
             *
             * @example
             * common.replaceAll("a1b2c3d", /[0-9]/g, ''); => "abcd"
             */
            replaceAll: function (value, find, rep) {
                if (find.constructor === RegExp) {
                    return value.replace(new RegExp(find.toString().replace(/^\/|\/$/gi, ""), "gi"), rep);
                }
                return value.split(find).join(rep);
            },

            /**
             * 주어진 문자열의 바이트길이 반환
             *
             * @param {String} value 길이를 계산할 문자열
             * @return {Number}
             *
             * @example
             * common.byteLength("동해물과"); => 8
             */
            byteLength: function (value) {
                var l = 0;
                for (var i=0, len = value.length; i < len; i++) {
                    l += (value.charCodeAt(i) > 255) ? 2 : 1;
                }
                return l;
            },

            /**
             * 주어진 문자열을 지정된 길이(바이트)만큼 자른 후, 꼬리글을 덧붙여 반환
             *
             * @param {String} value 문자열
             * @param {Number} length 잘라낼 길이
             * @param {String} truncation (Optional: '...') 꼬리글
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.cutByByte("동해물과", 3, "..."); => "동..."
             */
            cutByByte: function (value, length, truncation) {
                var str = value,
                    chars = this.charsByByte(value, length);

                truncation || (truncation = '');
                if (str.length > chars) {
                    return str.substring(0, chars) + truncation;
                }
                return str;
            },

            /**
             * 주어진 바이트길이에 해당하는 char index 반환
             *
             * @param {String} value 문자열
             * @param {Number} length 제한 문자수
             * @return {Number} chars count
             */
            charsByByte: function (value, length) {
                var str = value,
                    l = 0, len = 0, i = 0;
                for (i=0, len = str.length; i < len; i++) {
                    l += (str.charCodeAt(i) > 255) ? 2 : 1;
                    if (l > length) { return i; }
                }
                return i;
            },

            /**
             * 첫글자를 대문자로 변환하고 이후의 문자들은 소문자로 변환
             *
             * @param {String} value 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.capitalize("abCdEfg"); => "Abcdefg"
             */
            capitalize: function (value) {
                return value ? value.charAt(0).toUpperCase() + value.substring(1) : value;
            },

            /**
             * 카멜 형식으로 변환
             *
             * @param {String} value 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.capitalize("ab-cd-efg"); => "abCdEfg"
             */
            camelize: function (value) {
                return value ? value.replace(/(\-|_|\s)+(.)?/g, function (a, b, c) {
                    return (c ? c.toUpperCase() : '');
                }) : value
            },

            /**
             * 대쉬 형식으로 변환
             *
             * @param {String} value 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.dasherize("abCdEfg"); => "ab-cd-efg"
             */
            dasherize: function (value) {
                return value ? value.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase() : value;
            },

            toFirstLower: function (value) {
                return value ? value.replace(/^[A-Z]/, function (s) { return s.toLowerCase(); }) : value;
            },

            /**
             * 주어진 문자열을 지정한 수만큼 반복하여 조합
             *
             * @param {String} value 문자열
             * @param {Number} cnt 반복 횟수
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.repeat("ab", 4); => "abababab"
             */
            repeat: function (value, cnt, sep) {
                sep || (sep = '');
                var result = [];

                for (var i = 0; i < cnt; i++) {
                    result.push(value);
                }
                return result.join(sep);
            },

            /**
             * 특수기호를 HTML ENTITY로 변환
             *
             * @param {String} value 특수기호
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.escapeHTML('<div><a href="#">링크</a></div>'); => "&lt;div&gt;&lt;a href=&quot;#&quot;&gt;링크&lt;/a&gt;&lt;/div&gt;"
             */
            escapeHTML: function (value) {
                return value ? (value+"").replace(escapeRegexp, function (m) {
                    return escapeChars[m];
                }) : value;
            },

            /**
             * HTML ENTITY로 변환된 문자열을 원래 기호로 변환
             *
             * @param {String} value 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.unescapeHTML('&lt;div&gt;&lt;a href=&quot;#&quot;&gt;링크&lt;/a&gt;&lt;/div&gt;');  => '<div><a href="#">링크</a></div>'
             */
            unescapeHTML: function (value) {
                return value ? (value+"").replace(unescapeRegexp, function (m) {
                    return unescapeChars[m];
                }) : value;
            },

            /**
             * string === value이면 other를,  string !== value 이면 value를 반환
             *
             * @param {String} value
             * @param {String} these
             * @param {String} other
             * @return {String}
             *
             * @example
             * common.string.toggle('ASC", "ASC", "DESC"); => "DESC"
             * common.string.toggle('DESC", "ASC", "DESC"); => "ASC"
             */
            toggle: function (value, these, other) {
                return these === value ? other : value;
            },

            /**
             * 주어진 문자열에 있는 {인덱스} 부분을 인수로 대테하여 반환
             *
             * @param {String} format 문자열
             * @param {String} ... 대체할 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.string.format("{0}:{1}:{2} {0}", "a", "b", "c");  => "a:b:c a"
             */
            format: function (format) {
                var args = common.toArray(arguments).slice(1);

                return format.replace(/{([0-9]+)}/g, function (m, i) {
                    return args[i];
                });
            },

            /**
             * 주어진 문자열에서 HTML를 제거
             *
             * @param {String} value 문자열
             * @return {String}
             */
            stripTags: function (value) {
                return value.replace(tagRegexp, '');
            },

            /**
             * 주어진 문자열에서 스크립트를 제거
             *
             * @param {String} value 문자열
             * @return {String}
             */
            stripScripts: function (value) {
                return value.replace(scriptRegexp, '');
            }

        };
    });


    /**
     * @namespace
     * @name common.uri
     * @description
     */
    common.define('uri', /** @lends common.uri */{

        /**
         * 주어진 url에 쿼리스츠링을 조합
         *
         * @param {String} url
         * @param {String:Object} string
         * @return {String}
         *
         * @example
         * common.uri.urlAppend("board.do", {"a":1, "b": 2, "c": {"d": 4}}); => "board.do?a=1&b=2&c[d]=4"
         * common.uri.urlAppend("board.do?id=123", {"a":1, "b": 2, "c": {"d": 4}}); => "board.do?id=123&a=1&b=2&c[d]=4"
         */
        addToQueryString: function (url, string) {
            if (common.isObject(string)) {
                string = common.object.toQueryString(string);
            }
            if (!common.isEmpty(string)) {
                return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
            }

            return url;
        },

        /**
         * 쿼리스트링을 객체로 변환
         *
         * @param {String} query
         * @return {Object}
         *
         * @example
         * common.uri.parseQuery("a=1&b=2"); => {"a": 1, "b": 2}
         */
        parseQuery: function (query) {
            if (!query) {
                return {};
            }
            if (query.length > 0 && query.charAt(0) === '?'){ query = query.substr(1); }

            var params = (query + '').split('&');
            var obj = {};
            var params_length = 0,
                tmp = '',
                x = 0;
            params_length = params.length;
            for (x = 0; x < params_length; x++) {
                tmp = params[x].split('=');
                obj[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]).replace(/[+]/g, ' ');
            }
            return obj;
        },

        /**
         * url를 파싱하여 host, port, protocol 등을 추출
         *
         * @function
         * @param {String} str url 문자열
         * @return {Object}
         *
         * @example
         * common.uri.parseUrl("http://www.common.com:8080/list.do?a=1&b=2#comment");
         * => {scheme: "http", host: "www.common.com", port: "8080", path: "/list.do", query: "a=1&b=2"…}
         */
        parseUrl: (function () {
            var o = {
                strictMode: false,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            };

            return function (str) {
                if (str.length > 2 && str[0] === '/' && str[1] === '/') {
                    str = window.location.protocol + str;
                }
                var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                    uri = {}, i = 14;
                while (i--){ uri[o.key[i]] = m[i] || ""; }
                var retArr = {};
                if (uri.protocol !== '') { retArr.scheme = uri.protocol; }
                if (uri.host !== '') { retArr.host = uri.host; }
                if (uri.port !== '') { retArr.port = uri.port; }
                if (uri.user !== '') { retArr.user = uri.user; }
                if (uri.password !== '') { retArr.pass = uri.password; }
                if (uri.path !== '') { retArr.path = uri.path; }
                if (uri.query !== '') { retArr.query = uri.query; }
                if (uri.anchor !== '') { retArr.fragment = uri.anchor; }
                return retArr;
            };
        })(),

        /**
         * 주어진 url에서 해쉬문자열 제거
         *
         * @param {String} url url 문자열
         * @return {String} 결과 문자열
         *
         * @example
         * common.uri.removeHash("list.do#comment"); => "list.do"
         */
        removeHash: function (url) {
            return url ? url.replace(/.*(?=#[^\s]+$)/, '') : url;
        }
    });

    /**
     * 숫자관련 유틸함수 모음
     *
     * @namespace
     * @name common.number
     * @description
     */
    common.define('number', /** @lends common.number */{
        /**
         * 주어진 수를 자릿수만큼 앞자리에 0을 채워서 반환
         *
         * @param {String} value
         * @param {Number} size (Optional: 2)
         * @param {String} character (Optional: '0')
         * @return {String}
         *
         * @example
         * common.number.zeroPad(2, 3); => "002"
         */
        zeroPad: function (value, size, character) {
            var result = String(value);
            character = character || "0";
            size || (size = 2);

            while (result.length < size) {
                result = character + result;
            }
            return result;
        },

        /**
         * 세자리마다 ,를 삽입
         *
         * @param {Number} value
         * @return {String}
         *
         * @example
         * common.number.addComma(21342); => "21,342"
         */
        addComma: function (value) {
            value += '';
            var x = value.split('.'),
                x1 = x[0],
                x2 = x.length > 1 ? '.' + x[1] : '',
                re = /(\d+)(\d{3})/;

            while (re.test(x1)) {
                x1 = x1.replace(re, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },

        /**
         * min ~ max사이의 랜덤값 반환
         *
         * @param {Number} min 최소값
         * @param {Number} max 최대값
         * @return {Number} 랜덤값
         */
        random: function (min, max) {
            if (max === null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        },

        /**
         * 상하한값을 반환. value가 min보다 작을 경우 min을, max보다 클 경우 max를 반환
         *
         * @param {Number} value
         * @param {Number} min 최소값
         * @param {Number} max 최대값
         * @return {Number}
         */
        limit: function (value, min, max) {
            if (value < min) { return min; }
            else if (value > max) { return max; }
            return value;
        }
    });


    /**
     * 배열관련 유틸함수
     * @namespace
     * @name common.array
     */
    common.define('array', /** @lends common.array */{
        /**
         * 콜백함수로 하여금 요소를 가공하는 함수
         *
         * @param {Array} obj 배열
         * @param {Function} cb 콜백함수
         * @return {Array}
         *
         * @example
         * common.array.map([1, 2, 3], function (item, index){
		 *		return item * 10;
		 * });
         * => [10, 20, 30]
         */
        map: function (obj, cb) {
            var results = [];
            if (!common.isArray(obj) || !common.isFunction(cb)) { return results; }

            for(var i =0, len = obj.length; i < len; i++) {
                results[results.length] = cb(obj[i], i, obj);
            }
            return results;
        },

        /**
         * 배열 요소의 순서를 섞어주는 함수
         *
         * @param {Array} obj 배열
         * @return {Array} 순서가 섞인 새로운 배열
         */
        shuffle: function (obj) {
            var rand,
                index = 0,
                shuffled = [],
                number = common.number;

            $.each(obj, function (k, value) {
                rand = number.random(index++);
                shuffled[index - 1] = shuffled[rand], shuffled[rand] = value;
            });
            return shuffled;
        },

        /**
         * 콜백함수로 하여금 요소를 걸려내는 함수
         *
         * @param {Array} obj 배열
         * @param {Function} cb 콜백함수
         * @return {Array}
         *
         * @example
         * common.array.filter([1, '일', 2, '이', 3, '삼'], function (item, index){
		 *		return typeof item === 'string';
		 * });
         * => ['일','이','삼']
         */
        filter: function (obj, cb) {
            var results = [];
            if (!common.isArray(obj) || !common.isFunction(cb)) { return results; }
            for(var i =0, len = obj.length; i < len; i++) {
                cb(obj[i], i, obj) && (results[results.length] = obj[i]);
            }
            return results;
        },

        /**
         * 주어진 배열에 지정된 값이 존재하는지 체크
         *
         * @param {Array} obj 배열
         * @param {Function} cb 콜백함수
         * @return {Array}
         *
         * @example
         * common.array.include([1, '일', 2, '이', 3, '삼'], '삼');  => true
         */
        include: function (arr, value, b) {
            return common.array.indexOf(arr, value, b) > -1;
        },

        /**
         * 주어진 인덱스의 요소를 반환
         *
         * @param {Array} obj 배열
         * @param {Function} cb 콜백함수
         * @return {Array}
         *
         * @example
         * common.array.indexOf([1, '일', 2, '이', 3, '삼'], '일');  => 1
         */
        indexOf: function (arr, value, b) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if( (b !== false && arr[i] === value) || (b === false && arr[i] == value) ) { return i; }
            }
            return -1;
        },

        /**
         * 주어진 배열에서 index에 해당하는 요소를 삭제
         *
         * @param {Array} value 배열
         * @param {Number} index 삭제할 인덱스
         * @return {Array} 지정한 요소가 삭제된 배열
         */
        remove: function (value, index) {
            if (!common.isArray(value)) { return value; }
            return value.slice(index, 1);
        },

        /**
         * 주어진 배열에서 가장 큰 요소를 반환
         *
         * @param {Array} array 배열
         * @return {Mix}
         */
        max: function ( array ){
            return Math.max.apply( Math, array );
        },

        /**
         * 주어진 배열에서 가장 작은 요소를 반환
         *
         * @param {Array} array 배열
         * @return {Mix}
         */
        min: function ( array ){
            return Math.min.apply( Math, array );
        }
    });

    /**
     * JSON객체 관련 유틸함수
     * @namespace
     * @name common.object
     */
    common.define('object', /** @lends common.object */{

        /**
         * 개체의 열거가능한 속성 및 메서드 이름을 배열로 반환
         *
         * @param {Object} obj 리터럴 객체
         * @return {Array} 객체의 열거가능한 속성의 이름이 포함된 배열
         *
         * @example
         * common.object.keys({"name": "Axl rose", "age": 50}); => ["name", "age"]
         */
        keys: function (obj) {
            var results = [];
            $.each(obj, function (k) {
                results[results.length] = k;
            });
            return results;
        },

        /**
         * 개체의 열거가능한 속성의 값을 배열로 반환
         *
         * @param {Object} obj 리터럴 객체
         * @return {Array} 객체의 열거가능한 속성의 값들이 포함된 배열
         *
         * @example
         * common.object.values({"name": "Axl rose", "age": 50}); => ["Axl rose", 50]
         */
        values: function (obj) {
            var results = [];
            $.each(obj, function (k, v) {
                results[results.length] = v;
            });
            return results;
        },

        /**
         * 콜백함수로 하여금 요소를 가공하는 함수
         *
         * @param {JSON} obj 배열
         * @param {Function} cb 콜백함수
         * @return {JSON}
         *
         * @example
         * common.object.map({1; 'one', 2: 'two', 3: 'three'}, function (item, key){
		 *		return item + '__';
		 * });
         * => {1: 'one__', 2: 'two__', 3: 'three__'}
         */
        map: function (obj, cb) {
            if (!common.isObject(obj) || !common.isFunction(cb)){ return obj; }
            var results = {};
            for(var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    results[k] = cb(obj[k], k, obj);
                }
            }
            return results;
        },

        /**
         * 요소가 있는 json객체인지 체크
         *
         *
         * @param {Object} value json객체
         * @return {Boolean} 요소가 하나라도 있는지 여부
         */
        hasItems: function (value) {
            if (!common.isObject(value)) {
                return false;
            }

            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    return true;
                }
            }
            return false;
        },


        /**
         * 객체를 쿼리스크링으로 변환
         *
         * @param {Object} obj 문자열
         * @param {Boolean} isEncode {Optional} URL 인코딩할지 여부
         * @return {String} 결과 문자열
         *
         * @example
         * common.object.toQueryString({"a":1, "b": 2, "c": {"d": 4}}); => "a=1&b=2&c[d]=4"
         */
        toQueryString: function (params, isEncode) {
            if (typeof params === 'string') {
                return params;
            }
            var queryString = '',
                encode = isEncode === false ? function (v) {
                    return v;
                } : encodeURIComponent;

            $.each(params, function (key, value) {
                if (typeof (value) === 'object') {
                    $.each(value, function (innerKey, innerValue) {
                        if (queryString !== '') {
                            queryString += '&';
                        }
                        queryString += encode(key) + '[' + encode(innerKey) + ']=' + encode(innerValue);
                    });
                } else if (typeof (value) !== 'undefined') {
                    if (queryString !== '') {
                        queryString += '&';
                    }
                    queryString += encode(key) + '=' + encode(value);
                }
            });
            return queryString;
        },

        /**
         * 주어진 배열를 키와 요소를 맞바꾸어 반환
         *
         * @param {Array} obj 배열
         * @return {Object}
         *
         * @example
         * common.object.travere({1:a, 2:b, 3:c, 4:d]);
		 * => {a:1, b:2, c:3, d:4}
		 */
        traverse: function (obj) {
            var result = {};
            $.each(obj, function (index, item) {
                result[item] = index;
            });
            return result;
        },

        /**
         * 주어진 리터럴에서 index에 해당하는 요소를 삭제
         *
         * @param {Array} value 리터럴
         * @param {Number} key 삭제할 키
         * @return 지정한 요소가 삭제된 리터럴
         */
        remove: function (value, key) {
            if (!common.isObject(value)) { return value; }
            value[key] = null;
            delete value[key];
            return value;
        }
    });


    /**
     * 날짜관련 유틸함수
     * @namespace
     * @name common.date
     */
    common.define('date', function () {
        var months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            fullMonths = "January,Febrary,March,April,May,June,July,Augst,September,October,November,December".split(",");


        function compare(d1, d2) {
            return d1.getTime() > d2.getTime() ? -1 : (d1.getTime() === d2.getTime() ? 0 : 1);
        }

        return /** @lends common.date */{
            /**
             * 날짜 가감함수
             * @param {Date} date 날짜
             * @param {String} interval 가감타입
             * @param {Number} value 가감 크기
             * @returns {Date}
             */
            add: function(date, interval, value) {
                var d = new Date(date.getTime());
                if (!interval || value === 0) {
                    return d;
                }

                switch(interval) {
                    case "ms":
                        d.setMilliseconds(d.getMilliseconds() + value);
                        break;
                    case "s":
                        d.setSeconds(d.getSeconds() + value);
                        break;
                    case "m":
                        d.setMinutes(d.getMinutes() + value);
                        break;
                    case "h":
                        d.setHours(d.getHours() + value);
                        break;
                    case "d":
                        d.setDate(d.getDate() + value);
                        break;
                    case "M":
                        d.setMonth(d.getMonth() + value);
                        break;
                    case "y":
                        d.setFullYear(d.getFullYear() + value);
                        break;
                }
                return d;
            },
            /**
             * 날짜형식을 지정한 포맷의 문자열로 변환
             *
             * @param {Date} formatDate
             * @param {String} formatString} 포맷 문자열
             * @return {String} 결과 문자열
             *
             * @example
             * common.date.format(new Date(), "yy:MM:dd");
             * =>
             */
            format: function (formatDate, formatString) {
                formatString || (formatString = 'yyyy-MM-dd');
                if (formatDate instanceof Date) {
                    var yyyy = formatDate.getFullYear(),
                        yy = yyyy.toString().substring(2),
                        M = formatDate.getMonth() + 1,
                        MM = M < 10 ? "0" + M : M,
                        MMM = months[M - 1],
                        MMMM = fullMonths[M - 1],
                        d = formatDate.getDate(),
                        dd = d < 10 ? "0" + d : d,
                        h = formatDate.getHours(),
                        hh = h < 10 ? "0" + h : h,
                        m = formatDate.getMinutes(),
                        mm = m < 10 ? "0" + m : m,
                        s = formatDate.getSeconds(),
                        ss = s < 10 ? "0" + s : s,
                        x = h > 11 ? "PM" : "AM",
                        H = h % 12;

                    if (H === 0) {
                        H = 12;
                    }
                    return formatString.replace(/yyyy/g, yyyy).replace(/yy/g, yy).replace(/MMMM/g, MMMM).replace(/MMM/g, MMM).replace(/MM/g, MM).replace(/M/g, M).replace(/dd/g, dd).replace(/d/g, d).replace(/hh/g, hh).replace(/h/g, h).replace(/mm/g, mm).replace(/m/g, m).replace(/ss/g, ss).replace(/s/g, s).replace(/!!!!/g, MMMM).replace(/!!!/g, MMM).replace(/H/g, H).replace(/x/g, x);
                } else {
                    return "";
                }
            },

            /**
             * date가 start와 end사이인지 여부
             *
             * @param {Date} date 날짜
             * @param {Date} start 시작일시
             * @param {Date} end 만료일시
             * @return {Boolean}
             */
            between: function (date, start, end) {
                return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
            },

            /**
             * 날짜 비교
             *
             * @function
             * @param {Date} date1 날짜1
             * @param {Date} date2 날짜2
             * @return {Number} -1: date1가 이후, 0: 동일, 1:date2가 이후
             */
            compare: compare,

            /**
             * 년월일이 동일한가
             *
             * @param {Date} date1 날짜1
             * @param {Date} date2 날짜2
             * @return {Boolean}
             */
            equalsYMH: function (a, b){
                var ret = true;
                if(!a || !a.getDate || !b || !b.getDate) { return false; }
                $.each(['getFullYear', 'getMonth', 'getDate'], function (i, fn){
                    ret = ret && (a[fn]() === b[fn]());
                    if(!ret){ return false; }
                });
                return ret;
            },

            /**
             * value날짜가 date이후인지 여부
             *
             * @param {Date} value 날짜
             * @param {Date} date
             * @return {Boolean}
             */
            isAfter: function (value, date) {
                return compare(value, date || new Date()) === 1;
            },

            /**
             * value날짜가 date이전인지 여부
             *
             * @param {Date} value 날짜
             * @param {Date} date
             * @return {Boolean}
             */
            isBefore: function (value, date) {
                return compare(value, date || new Date()) === -1;
            },

            /**
             * 주어진 날짜 형식의 문자열을 Date객체로 변환
             *
             * @function
             * @param {String} dateStringInRange 날짜 형식의 문자열
             * @return {Date}
             */
            parseDate: (function () {
                var isoExp = /^\s*(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?\s*$/;
                return function (dateStringInRange) {
                    var date, month, parts;

                    if (dateStringInRange instanceof Date){
                        return dateStringInRange;
                    }

                    dateStringInRange = dateStringInRange.replace(/[^\d]+/g, '');
                    date = new Date(dateStringInRange);
                    if (!isNaN(date)) {
                        return date;
                    }

                    date = new Date(NaN);
                    parts = isoExp.exec(dateStringInRange);

                    if(parts) {
                        month = +parts[2];
                        date.setFullYear(parts[1]|0, month - 1, parts[3]|0);
                        date.setHours(parts[4]|0);
                        date.setMinutes(parts[5]|0);
                        date.setSeconds(parts[6]|0);
                        if(month != date.getMonth() + 1) {
                            date.setTime(NaN);
                        }
                    }
                    return date;
                };
            })(),

            /**
             * 주어진 년월의 일수를 반환
             *
             * @param {Number} year 년도
             * @param {Number} month 월
             * @return {Date}
             */
            daysInMonth: function (year, month) {
                var dd = new Date(year|0, month|0, 0);
                return dd.getDate();
            },

            /**
             * 주어진 시간이 현재부터 몇시간 이전인지 표현(예: -54000 -> 54초 이전)
             *
             * @function
             * @param {Date|Interval} time 시간
             * @return {String}
             *
             * @example
             * common.date.prettyTimeDiff(new Date() - 51811); -> "52초 이전"
             */
            prettyTimeDiff: (function () {
                var ints = {
                    '초': 1,
                    '분': 60,
                    '시': 3600,
                    '일': 86400,
                    '주': 604800,
                    '월': 2592000,
                    '년': 31536000
                };

                return function (time) {

                    time = +new Date(time);

                    var gap = ((+new Date()) - time) / 1000,
                        amount, measure;

                    for (var i in ints) {
                        if (gap > ints[i]) { measure = i; }
                    }

                    amount = gap / ints[measure];
                    amount = gap > ints.day ? (Math.round(amount * 100) / 100) : Math.round(amount);
                    amount += measure + ' 이전';

                    return amount;
                };
            }()),
            /**
             * 주어진 시간이 현재부터 몇시간 이전인지 표현(예: -54000 -> 54초 이전)
             *
             * @function
             * @param {Date|Interval} time 시간
             * @return {String}
             *
             * @example
             * common.date.timeDiff(new Date() - 51811); -> "00:00:52"
             */
            timeDiff: function (t1, t2) {
                var zeroPad = common.number.zeroPad;
                var amount = (t1.getTime() - t2.getTime()) / 1000,
                    days = 0,
                    hours = 0,
                    mins = 0,
                    secs = 0;

                days=Math.floor(amount/86400);
                amount=amount%86400;
                hours=Math.floor(amount/3600);
                amount=amount%3600;
                mins=Math.floor(amount/60);
                amount=amount%60;
                secs=Math.floor(amount);

                return zeroPad(hours) + ':' + zeroPad(mins) + ':' + zeroPad(secs);
            }
        };
    });


    /**
     * prototype 을 이용한 클래스 생성
     * @namespace
     * @name common.Class
     * @example
     * var Person = Class({
	*	$extend: Object, // 상속받을 부모클래스
	*	$singleton: true, // 싱글톤 여부
	*	$statics: { // 클래스 속성 및 함수
	*		live: function () {} // Person.live(); 으로 호출
	*	},
	*	$mixins: [Animal, Robot], // 특정 클래스에서 메소드들을 빌려오고자 할 때 해당 클래스를 지정(다중으로도 가능),
	*	initialize: function (name) {
	*		this.name = name;
	*	},
	*	say: function (job){
	*		alert("I'm Person: " + job);
	*	},
	*	run: function (){
	*		alert("i'm running...");
	*	}
	*`});
     *
     * var Man = Class({
	*	$extend: Person,
	*	initialize: function (name, age) {
	*		this.supr(name);  // Person(부모클래스)의 initialize메소드를 호출 or this.suprMethod('initialize', name);
	*		this.age = age;
	*	},
	*	// say를 오버라이딩함
	*	say: function (job) {
	*		this.suprMethod('say', 'programer'); // 부모클래스의 say 메소드 호출 - 첫번째인자는 메소드명, 두번째부터는 해당 메소드로 전달될 인자

	*		alert("I'm Man: "+ job);
	*	}
	* });
     * var man = new Man('kim', 20);
     * man.say('freeman');  // 결과: alert("I'm Person: programer"); alert("I'm Man: freeman");
     * man.run(); // 결과: alert("i'm running...");
     */


    common.define('Class', function () {
        var isFn = common.isFunction,
            emptyFn = common.emptyFn,
            include = common.array.include,
            ignoreNames = ['superclass', 'members', 'statics'];


        // 부모클래스의 함수에 접근할 수 있도록 .supr 속성에 부모함수를 래핑하여 설정
        function wrap(k, fn, supr) {
            return function () {
                var tmp = this.supr, undef, ret;

                this.supr = supr.prototype[k];
                ret = undefined;
                try {
                    ret = fn.apply(this, arguments);
                } finally {
                    this.supr = tmp;
                }
                return ret;
            };
        }

        // 속성 중에 부모클래스에 똑같은 이름의 함수가 있을 경우 래핑처리
        function process(what, o, supr) {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    what[k] = isFn(o[k]) && isFn(supr.prototype[k]) ? wrap(k, o[k], supr) : o[k];
                }
            }
        }

        /**
         * 클래스 정의
         *
         * @memberOf common.Class
         *
         * @param {String} ns (Optional) 네임스페이스
         * @param {Object} attr 속성
         * @return {Class}
         */
        return function (attr) {
            var supr, statics, mixins, hooks, singleton, Parent, instance;

            if (isFn(attr)) {
                attr = attr();
            }

            // 생성자 몸체
            function constructor() {
                if (singleton) {
                    if (instance) {
                        return instance;
                    } else {
                        instance = this;
                    }
                }

                if (this.initialize) {
                    this.initialize.apply(this, arguments);
                } else {
                    supr.prototype.initialize && supr.prototype.initialize.apply(this, arguments);
                }
            }

            function Class() {
                constructor.apply(this, arguments);
            }

            supr = attr.$extend || emptyFn;
            singleton = attr.$singleton || false;
            statics = attr.$statics || false;
            mixins = attr.$mixins || false;
            hooks = attr.$hooks || false;

            Parent = emptyFn;
            Parent.prototype = supr.prototype;

            Class.prototype = new Parent;
            Class.prototype.constructor = Class;

            /**
             * 메소드 내에서 부모클래스에 접근할 때 사용
             * @memberOf common.Class
             * @property
             */
            Class.superclass = supr.prototype;
            Class.classType = Class;

            if (singleton) {
                /**
                 * 싱글톤 클래스일 경우 싱글톤 인스턴스를 반환
                 * @memberOf common.Class
                 * @property
                 */
                Class.getInstance = function () {
                    if (!instance) {
                        instance = new Class();
                    }
                    return instance;
                };
            }

            /**
             * 부모클래스의 메소드를 호출할 수 있는 래핑함수
             * @memberOf common.Class
             * @name suprMethod
             * @function
             * @param {String} name 호출하고자 하는 부모함수명
             * @return {Mix} 부모함수의 반환값
             * @example
             * this.suprMethod('show', true);  -> 부모클래스의 show(true) 메소드 호출
             */
            Class.prototype.suprMethod = function (name) {
                var args = arraySlice.call(arguments, 1);
                return supr.prototype[name].apply(this, args);
            };

            /**
             * func의 컨텍스트를 this로 지정
             * @memberOf common.Class
             * @name proxy
             * @function
             * @param {function} function 함수
             * @return {Function}
             * @example
             * function test(){
			 *		alert(this.name);
			 * }
             * var Person = Class({
			 *		initialize: function () {
			 *			this.name = 'axl rose',
			 *			this.proxy(test)();  // = test.bind(this)와 동일, test함수의 컨텍스? this로 지정 -> 결과: alert('axl rose');
			 *		}
			 * });
             */
            Class.prototype.proxy = function (func) {
                var _this = this;
                return function () {
                    func.apply(_this, arraySlice.call(arguments));
                };
            };


            /**
             * 여러 클래스를 mixins방식으로 merge
             * @memberOf common.Class
             * @name mixins
             * @function
             * @param {function} o 객체
             * @example
             * var A = Class({
			 *		funcA: function (){ ... }
			 * });
             * var B = Class({
			 *		funcB: function (){ ... }
			 * });
             * var Person = Class({
			 *		initialize: function () {
			 *			...
			 *		}
			 * });
             * Person.mixins([A, B]);
             * var person = new Person();
             * person.funcA();
             * person.funcB();
             */
            Class.mixins = function (o) {
                if (!o.push) { o = [o]; }
                $.each(o, function (index, value) {
                    $.each(value, function (key, item) {
                        Class.prototype[key] = item;
                    });
                });
            };
            mixins && Class.mixins.call(Class, mixins);


            /**
             * 클래스에 메소드  추가
             * @memberOf common.Class
             * @name members
             * @function
             * @param {function} o 객체
             * @example
             * var Person = Class({
			 *		initialize: function () {
			 *			...
			 *		}
			 * });
             * Person.members({
			 *		newFunc: function () { ... }
			 * });
             * var person = new Person();
             * person.newFunc();
             */
            Class.members = function (o) {
                process(Class.prototype, o, supr);
            };
            attr && Class.members.call(Class, attr);

            /*
             * 클래스함수 추가함수
             * @memberOf common.Class
             * @name statics
             * @function
             * @param {function} o 객체
             * @example
             * var Person = Class({
             *		initialize: function () {
             *			...
             *		}
             * });
             * Person.statics({
             *		staticFunc: function () { ... }
             * });
             * Person.staticFunc();
             */
            Class.statics = function (o) {
                o = o || {};
                for (var k in o) {
                    if (!include(ignoreNames, k)) {
                        Class[k] = o[k];
                    }
                }
                return Class;
            };
            Class.statics.call(Class, supr);
            statics && Class.statics.call(Class, statics);

            if(hooks || (hooks = Parent.prototype.$hooks)) {
                hooks.onClassCreate && hooks.onClassCreate(Class);
            }

            return Class;
        };
    });

    common.define( /** @lends common */{
        /**
         * 설정 값들이 들어갈 리터럴
         *
         * @private
         * @type {Object}
         */
        configs: {},

        /**
         * 설정값을 꺼내오는 함수
         *
         * @param {String} name 설정명. `.`를 구분값으로 단계별로 값을 가져올 수 있다.
         * @param {Object} def {Optional} 설정된 값이 없을 경우 사용할 기본값
         * @return {Object} 설정값
         */
        getConfig: function (name, def) {
            var root = common.configs,
                names = name.split('.'),
                pair = root;

            for (var i = 0, len = names.length; i < len; i++) {
                if (!(pair = pair[names[i]])) {
                    return def;
                }
            }
            return pair;
        },

        /**
         * 설정값을 지정하는 함수
         *
         * @param {String} name 설정명. `.`를 구분값으로 단계를 내려가서 설정할 수 있다.
         * @param {Object} value 설정값
         * @return {Object} 설정값
         */
        setConfig: function (name, value) {
            var root = common.configs,
                names = name.split('.'),
                len = names.length,
                last = len - 1,
                pair = root;

            for (var i = 0; i < last; i++) {
                pair = pair[names[i]] || (pair[names[i]] = {});
            }
            return (pair[names[last]] = value);
        }
    });

    common.define( /** @lends common */{
        /**
         * 템플릿 생성
         *
         * @param {String} text 템플릿 문자열
         * @param {Object} data 템플릿 문자열에서 변환될 데이타
         * @param {Object} settings 옵션
         * @return tempalte 함수
         *
         * @example
         * var tmpl = common.template('&lt;span>&lt;%=name%>&lt;/span>');
         * var html = tmpl({name: 'Axl rose'}); => &lt;span>Axl rose&lt;/span>
         * $('div').html(html);
         */
        template: function (str, data) {
            var m,
                src = 'var __src = [], escapeHTML=common.string.escapeHTML; with(value||{}){ __src.push("';
            str = $.trim(str);
            src += str.replace(/\r|\n|\t/g, " ")
                .replace(/<%(.*?)%>/g, function (a, b){ return '<%' + b.replace(/"/g, '\t') + '%>'; })
                .replace(/"/g, '\\"')
                .replace(/<%(.*?)%>/g, function (a, b){ return '<%' + b.replace(/\t/g, '"') + '%>'; })
                .replace(/<%=(.+?)%>/g, '", $1, "')
                .replace(/<%-(.+?)%>/g, '", escapeHTML($1), "')
                .replace(/(<%|%>)/g, function (a, b){ return b === '<%' ? '");' : '__src.push("'});

            src+='"); }; return __src.join("")';

            var f = new Function('value', 'data', src);
            if( data ) {
                return f( data );
            }
            return f;
        }
    });


    /**
     * @namespace
     * @name common.valid
     * @description 밸리데이션 함수 모음
     */
    common.define('valid', function () {
        var trim = $.trim,
            isString = common.isString,
            isNumber = common.isNumber,
            isElement = common.isElement;

        return /** @lends common.valid */{
            empty: common.isEmpty,
            /**
             * 필수입력 체크
             *
             * @param {String} str
             * @return {Boolean} 빈값이면 false 반환
             */
            require: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return !!str;
            },
            /**
             * 유효한 이메일형식인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            email: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(str) : false;
            },
            /**
             * 한글인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            kor: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[가-힝]+$/).test(str) : false;
            },
            /**
             * 영문 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            eng: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[a-zA-Z]+$/).test(str) : false;
            },
            /**
             * 숫자 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            num: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? isNumber(str) : false;
            },
            /**
             * 유효한 url형식인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            url: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^https?:\/\/([\w\-]+\.)+/).test(str) : false;
            },
            /**
             * 특수기호 유무 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            special: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]+$/).test(str) : false;
            },
            /**
             * 유효한 전화번호형식인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            phone: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{1,3}-\d{3,4}-\d{4}$/).test(str) : false;
            },
            /**
             * 유효한 yyyy-MM-dd형식인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            dateYMD: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2}$/).test(str) : false;
            },
            /**
             * 유효한 yyyy-MM-dd hh:mm:ss형식인지 체크
             *
             * @param {String} str
             * @return {Boolean}
             */
            dateYMDHMS: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).test(str) : false;
            },
            /**
             * 유효한 주민번호인지 체크
             *
             * @param {String} strSsn1 앞주민번호.
             * @param {String} strSsn2 (Optional) 뒷주민번호. 값이 없으면 strSsn1만으로 체크
             * @return {Boolean}
             */
            SSN: function (sid1, sid2) {
                var num = sid1 + (sid2 ? sid2 : ""),
                    pattern = /^(\d{6})-?(\d{7})$/,
                    sum = 0,
                    last, mod,
                    bases = "234567892345";

                if (!pattern.test(num)) { return false; }
                num = RegExp.$1 + RegExp.$2;

                last = num.charCodeAt(12) - 0x30;

                for (var i = 0; i < 12; i++) {
                    if (isNaN(num.substring(i, i + 1))) { return false; }
                    sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
                }
                mod = sum % 11;
                return ((11 - mod) % 10 === last) ? true : false;
            },
            /**
             * 유효한 외국인주민번호인지 체크
             *
             * @param {String} strSsn1 앞주민번호.
             * @param {String} strSsn2 (Optional) 뒷주민번호. 값이 없으면 strSsn1만으로 체크
             * @return {Boolean}
             */
            FgnSSN: function (sid1, sid2) {
                var num = sid1 + (sid2 ? sid2 : ""),
                    pattern = /^(\d{6})-?(\d{7})$/,
                    sum = 0,
                    odd, buf,
                    multipliers = "234567892345".split("");

                if (!pattern.test(num)) { return false; }
                num = RegExp.$1 + RegExp.$2;

                buf = common.toArray(num);
                odd = buf[7] * 10 + buf[8];

                if (odd % 2 !== 0) { return false; }

                if ((buf[11] !== 6) && (buf[11] !== 7) && (buf[11] !== 9)) { return false; }

                for (var i = 0; i < 12; i++) { sum += (buf[i] *= multipliers[i]); }

                sum = 11 - (sum % 11);
                if (sum >= 10){ sum -= 10; }

                sum += 2;
                if (sum >= 10) { sum -= 10; }

                if (sum !== buf[12]) { return false; }

                return true;
            }
        };
    });

    /**
     * @namespace
     * @name common.css
     * @description 벤더별 css명칭 생성
     */
    common.define('css', function (){

        var _tmpDiv = common.tmpNode,
            _prefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'],
            _style = _tmpDiv.style,
            _vendor = (function () {
                var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                    transform,
                    i = 0,
                    l = vendors.length;

                for ( ; i < l; i++ ) {
                    transform = vendors[i] + 'ransform';
                    if ( transform in _style ) return vendors[i].substr(0, vendors[i].length-1);
                }

                return false;
            })(),
            string  = common.string;

        function prefixStyle(name) {
            if ( _vendor === false ) return false;
            if ( _vendor === '' ) return name;
            return _vendor + string.capitalize(name);
        }

        return /** @lends common.css */{
            supportTransition: _vendor !== false,
            /**
             * 현재 브라우저의 css prefix명 (webkit or Moz or ms or O)
             * @function
             * @return {String}
             */
            vendor: _vendor,
            /**
             * 주어진 css속성을 지원하는지 체크
             *
             * @param {String} cssName 체크하고자 하는 css명
             * @return {Boolean} 지원여부
             */
            hasCSS3: function (name) {
                var a = _prefixes.length;
                if (name in _style) { return true; }
                name = string.capitalize(name);
                while (a--) {
                    if (_prefixes[a] + name in _style) {
                        return true;
                    }
                }
                return false;
            },

            /**
             * 주어진 css명 앞에 현재 브라우저에 해당하는 prefix를 붙여준다.
             *
             * @function
             * @param {String} cssName css명
             * @return {String}
             * @example
             * common.css.prefixStyle('transition'); // => webkitTransition
             */
            prefixStyle: prefixStyle
        };
    });

    /**
     * @namespace
     * @name common.util
     */
    common.define('util', function (){

        return /** @lends common.util */{
            /**
             * png Fix
             */
            pngFix: function () {
                var s, bg;
                $('img[@src*=".png"]', document.body).each(function () {
                    this.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + this.src + '\', sizingMethod=\'\')');
                    this.src = common.getSite() + common.Urls.getBlankImage() || '/resource/images/common/blank.gif';
                });
                $('.pngfix', document.body).each(function () {
                    var $this = $(this);

                    s = $this.css('background-image');
                    if (s && /\.(png)/i.test(s)) {
                        bg = /url\("(.*)"\)/.exec(s)[1];
                        $this.css('background-image', 'none');
                        $this.css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + bg + "',sizingMethod='scale')");
                    }
                });
            },

            /**
             * 페이지에 존재하는 플래쉬의 wmode모드를 opaque로 변경
             */
            wmode: function () {
                $('object').each(function () {
                    var $this;
                    if (this.classid.toLowerCase() === 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' || this.type.toLowerCase() === 'application/x-shockwave-flash') {
                        if (!this.wmode || this.wmode.toLowerCase() === 'window') {
                            this.wmode = 'opaque';
                            $this = $(this);
                            if (typeof this.outerHTML === 'undefined') {
                                $this.replaceWith($this.clone(true));
                            } else {
                                this.outerHTML = this.outerHTML;
                            }
                        }
                    }
                });
                $('embed[type="application/x-shockwave-flash"]').each(function () {
                    var $this = $(this),
                        wm = $this.attr('wmode');
                    if (!wm || wm.toLowerCase() === 'window') {
                        $this.attr('wmode', 'opaque');
                        if (typeof this.outerHTML === 'undefined') {
                            $this.replaceWith($this.clone(true));
                        } else {
                            this.outerHTML = this.outerHTML;
                        }
                    }
                });
            },

            /**
             * 팝업. (common.openPopup으로도 사용가능)
             * @param {string} url 주소
             * @param {number=} width 너비.
             * @param {number=} height 높이.
             * @param {opts=} 팝업 창 모양 제어 옵션.
             */
            openPopup: function (url, width, height, opts) {
                opts = $.extend({

                }, opts);
                width = width || 600;
                height = height || 400;
                //var winCoords = common.util.popupCoords(width, height),
                var target = opts.target || '',
                    feature = 'app_, ',
                    tmp = [];

                delete opts.name;
                for(var key in opts) {
                    tmp.push(key + '=' + opts[ key ]);
                }
                common.browser.isSafari && tmp.push('location=yes');
                tmp.push('height='+height);
                tmp.push('width='+width);
                /* + ', top=' + winCoords.top + ', left=' + winCoords.left;*/
                feature += tmp.join(', ');

                window.open(
                    url,
                    target,
                    feature
                );
            },

            /**
             * 팝업의 사이즈를 $el 사이즈에 맞게 조절
             */
            resizePopup: function ($el) {
                if(!($el instanceof jQuery)) { $el = $($el); }
                window.resizeTo($el.width(), $el.height());
            },

            /**
             * 팝업의 사이즈에 따른 화면상의 중앙 위치좌표를 반환
             * @param {number} w 너비.
             * @param {number} h 높이.
             * @return {JSON} {left: 값, top: 값}
             */
            popupCoords: function (w, h) {
                var wLeft = window.screenLeft ? window.screenLeft : window.screenX,
                    wTop = window.screenTop ? window.screenTop : window.screenY,
                    wWidth = window.outerWidth ? window.outerWidth : document.documentElement.clientWidth,
                    wHeight = window.outerHeight ? window.outerHeight : document.documentElement.clientHeight;

                return {
                    left: wLeft + (wWidth / 2) - (w / 2),
                    top: wTop + (wHeight / 2) - (h / 2) - 25
                };
            },

            /**
             * data-src에 있는 이미지주소를 실제로 불러들인 다음, 주어진 사이즈내에서 자동으로 리사이징 처리
             * @param {jQuery} $imgs
             * @param {Number} wrapWidth 최대 너비 값
             * @param {Number} wrapHeight 최대 높이 값
             * @param {Function} [onError] (optional) 이미지를 불어오지 못했을 경우 실행할 콜백함수
             * @return {Boolean} true 불러들인 이미지가 있었는지 여부
             */
            lazyLoadImage: function ($imgs, wrapWidth, wrapHeight, onError) {
                var hasLazyImage = false;
                var dataSrcAttr = 'data-src';

                $imgs.filter('img[data-src]').each(function (i) {
                    var $img = $(this);
                    wrapWidth = wrapWidth || $img.parent().width();
                    wrapHeight = wrapHeight || $img.parent().height();

                    // 이미지가 로드되면, 실제 사이즈를 체크해서 가로이미지인지 세로이미지인지에 따라 기준이 되는 width, height에 지정한다.
                    $img.one('load', function () {
                        $img.removeAttr('width height').css({'width':'auto', 'height':'auto'});
                        if($img.attr('data-no-height') === 'true' && this.width > wrapWidth) {
                            $img.css('width', wrapWidth);
                        } else if($img.attr('data-no-width') === 'true' && this.height > wrapHeight) {
                            $img.css('height', wrapWidth);
                        } else {
                            var isHoriz = this.width > this.height;
                            if ( isHoriz ) { // 가로로 긴 이미지
                                $img.css('width', Math.min(this.width, wrapWidth));
                            } else { // 세로로 긴 이미지
                                $img.css('height', Math.min(this.height, wrapHeight));
                            }
                        }
                    }).attr('src', $img.attr('data-src')).removeAttr('data-src');
                });
                return hasLazyImage;
            },

            /**
             * 도큐먼트의 높이를 반환
             * @return {Number}
             */
            getDocHeight: function () {
                var doc = document,
                    bd = doc.body,
                    de = doc.documentElement;

                return Math.max(
                    Math.max(bd.scrollHeight, de.scrollHeight),
                    Math.max(bd.offsetHeight, de.offsetHeight),
                    Math.max(bd.clientHeight, de.clientHeight)
                );
            },

            /**
             * 도큐먼트의 너비를 반환
             * @return {Number}
             */
            getDocWidth: function () {
                var doc = document,
                    bd = doc.body,
                    de = doc.documentElement;
                return Math.max(
                    Math.max(bd.scrollWidth, de.scrollWidth),
                    Math.max(bd.offsetWidth, de.offsetWidth),
                    Math.max(bd.clientWidth, de.clientWidth)
                );
            },

            /**
             * 창의 너비를 반환
             * @return {Number}
             */
            getWinWidth : function () {
                var w = 0;
                if (self.innerWidth) {
                    w = self.innerWidth;
                } else if (document.documentElement && document.documentElement.clientHeight) {
                    w = document.documentElement.clientWidth;
                } else if (document.body) {
                    w = document.body.clientWidth;
                }
                return w;
            },

            /**
             * 창의 높이를 반환
             * @return {Number}
             */
            getWinHeight : function () {
                var w = 0;
                if (self.innerHeight) {
                    w = self.innerHeight;
                } else if (document.documentElement && document.documentElement.clientHeight) {
                    w = document.documentElement.clientHeight;
                } else if (document.body) {
                    w = document.body.clientHeight;
                }
                return w;
            }
        };
    });

    common.openPopup = common.util.openPopup;

})(window, jQuery);


(function (context, $, common) {
    "use strict";
    /* jshint expr: true, validthis: true */

    var $win = common.$win,
        $doc = common.$doc,
        Class = common.Class,
        dateUtil = common.date,
        stringUtil = common.string,
        numberUtil = common.number,
        arraySlice = [].slice,
        View;		// ui.View

    /*
     * @namespace
     * @name common.EVENTS
     */
    common.define('EVENTS', {
        ON_BEFORE_SHOW: 'beforeshow',
        ON_SHOW: 'show',
        ON_BEFORE_HIDE: 'beforehide',
        ON_HIDE: 'hide'
    });


    common.define( /** @lends common */{
        /**
         * 작성된 클래스를 jQuery의 플러그인으로 사용할 수 있도록 바인딩시켜 주는 함수
         *
         * @param {Class} klass 클래스
         * @param {String} name 플러그인명
         *
         * @example
         * // 클래스 정의
         * var Slider = common.Class({
		 *   initialize: function (el, options) { // 생성자의 형식을 반드시 지킬 것..(첫번째 인수: 대상 엘리먼트, 두번째 인수: 옵션값들)
		 *   ...
		 *   },
		 *   ...
		 * });
         * common.bindjQuery(Slider, 'hibSlider');
         * // 실제 사용시
         * $('#slider').hibSlider({count: 10});
         */
        bindjQuery: function (Klass, name) {
            var old = $.fn[name];

            $.fn[name] = function (options) {
                var a = arguments,
                    args = arraySlice.call(a, 1),
                    me = this,
                    returnValue = this;

                this.each(function () {
                    var $this = $(this),
                        methodValue,
                        instance;

                    if( !(instance = $this.data(name)) || (a.length === 1 && typeof options !== 'string')) {
                        instance && (instance.destroy(), instance = null);
                        $this.data(name, (instance = new Klass(this, $.extend({}, $this.data(), options), me)));
                    }

                    if (typeof options === 'string' && common.isFunction(instance[options])) {
                        try {
                            methodValue = instance[options].apply(instance, args);
                        } catch(e) {
                            console.log('[jQuery bind error] ' + e);
                        }

                        if (/*methodValue !== instance && */methodValue !== undefined) {
                            returnValue = methodValue;
                            return false;
                        }
                    }
                });
                return returnValue;
            };

            // 기존의 모듈로 복구
            $.fn[name].noConflict = function () {
                $.fn[name] = old;
                return this;
            };
        }
    });


    common.define('Listener', function () {
        /**
         * 이벤트 리스너
         * @class
         * @name common.Listener
         */
        var Listener = Class( /** @lends common.Listener# */ {
            /**
             * 생성자
             */
            initialize: function () {
                this._listeners = $({});
            },

            /**
             * 이벤트 핸들러 등록
             * @param {Object} name 이벤트명
             * @param {Object} cb 핸들러
             */
            on: function () {
                var lsn = this._listeners;
                lsn.on.apply(lsn, arguments);
                return this;
            },

            /**
             * 한번만 실행할 이벤트 핸들러 등록
             * @param {Object} name 이벤트명
             * @param {Object} cb 핸들러
             */
            once: function () {
                var lsn = this._listeners;
                lsn.once.apply(lsn, arguments);
                return this;
            },

            /**
             * 이벤트 핸들러 삭제
             * @param {Object} name 삭제할 이벤트명
             * @param {Object} cb {Optional} 삭제할 핸들러. 이 인자가 없을 경우 name에 등록된 모든 핸들러를 삭제.
             */
            off: function () {
                var lsn = this._listeners;
                lsn.off.apply(lsn, arguments);
                return this;
            },

            /**
             * 이벤트 발생
             * @param {Object} name 발생시킬 이벤트명
             */
            trigger: function () {
                var lsn = this._listeners;
                lsn.trigger.apply(lsn, arguments);
                return this;
            }
        });

        return Listener;
    });


    /**
     * @namespace
     * @name common.PubSub
     * @description 발행/구독 객체: 상태변화를 관찰하는 옵저버(핸들러)를 등록하여, 상태변화가 있을 때마다 옵저버를 발행(실행)
     * 하도록 하는 객체이다.
     * @example
     * // 옵저버 등록
     * common.PubSub.on('customevent', function (){
	 *	 alert('안녕하세요');
	 * });
     *
     * // 등록된 옵저버 실행
     * common.PubSub.trigger('customevent');
     */
    common.define('PubSub', function () {

        var PubSub = new common.Listener();
        PubSub.attach = PubSub.on;
        PubSub.unattach = PubSub.off;

        return PubSub;
    });

    /**
     *
     * @param name
     * @param attr
     * @returns {*}
     */
    common.ui = function (/*String*/name, /*Object*/attr) {
        var names = name.split(/\./),
            bindName = attr.bindjQuery,
            Klass;

        delete attr.bindjQuery;
        $.extend(attr, {
            $extend: (attr.$extend === undefined) ? common.ui.View : attr.$extend,
            name: names[names.length - 1]
        });
        Klass = common.Class(attr);
        common.define('ui.' + name, Klass);
        if(bindName) {
            common.bindjQuery(Klass, bindName);
        }
        return Klass;
    };


    /**
     * @namespace
     * @name common.ui
     */
    View = common.define('ui.View', function () {
        var isFn = common.isFunction,
            execObject = function (obj, ctx) {
                return isFn(obj) ? obj.call(ctx) : obj;
            };

        /**
         * 모든 UI요소 클래스의 최상위 클래스로써, UI클래스를 작성함에 있어서 편리한 기능을 제공해준다.
         * @class
         * @name common.ui.View
         *
         * @example
         *
         * var Slider = Class({
		 *		$extend: common.ui.View,
		 *		// 기능1) events 속성을 통해 이벤트핸들러를 일괄 등록할 수 있다. ('이벤트명 selector': '핸들러함수명')
		 *	events: {
		 *		click ul>li.item': 'onItemClick',		// this.$el.on('click', 'ul>li.item', this.onItemClick.bind(this)); 를 자동 수행
		 *		'mouseenter ul>li.item>a': 'onMouseEnter'	// this.$el.on('mouseenter', 'ul>li.item>a', this.onMouseEnter.bind(this)); 를 자동 수행
		 *	},
		 *	// 기능2) selectors 속성을 통해 지정한 selector에 해당하는 노드를 주어진 이름의 멤버변수에 자동으로 설정해 준다.
		 *	selectors: {
		 *		box: 'ul',			// this.$box = this.$el.find('ul') 를 자동수행
		 *		items: 'ul>li.item',	// this.$items = this.$el.find('ul>li.item') 를 자동수행
		 *		prevBtn: 'button.prev', // this.$prevBtn = this.$el.find('button.prev') 를 자동 수행
		 *		nextBtn: 'button..next' // this.$nextBtn = this.$el.find('button.next') 를 자동 수행
		 *	},
		 *	initialize: function (el, options) {
		 *	this.supr(el, options);	// 기능4) this.$el, this.options가 자동으로 설정된다.
		 *	},
		 *	onItemClick: function (e) {
		 *		...
		 *	},
		 *	onMouseEnter: function (e) {
		 *		...
		 *	}
		 * });
         *
         * new common.ui.Slider('#slider', {count: 10});
         */
        var View = Class(/** @lends common.ui.View# */{
            $statics: {
                _instances: [] // 모든 인스턴스를 갖고 있는다..
            },
            /**
             * 생성자
             * @param {String|Element|jQuery} el 해당 엘리먼트(노드, id, jQuery 어떤 형식이든 상관없다)
             * @param {Object} options 옵션값
             * @return {Mixes} false 가 반환되면, 이미 해당 엘리먼트에 해당 모듈이 빌드되어 있거나 disabled 상태임을 의미한다.
             */
            initialize: function (el, options) {
                options || (options = {});

                var me = this,
                    eventPattern = /^([a-z]+) ?([^$]*)$/i,
                    moduleName, superClass;

                if (!me.name){
                    throw new Error('클래스의 이름이 없습니다');
                }

                moduleName = me.moduleName = common.string.toFirstLower(me.name);
                me.$el = el instanceof jQuery ? el : $(el);

                // 강제로 리빌드 시킬 것인가 /////////////////////////////////////////////////////////////////////////////////////////////////
                if(options.rebuild === true) {
                    try { me.$el.data(moduleName).destroy(); } catch(e){}
                    me.$el.removeData(moduleName);
                } else {
                    // 이미 빌드된거면 false 반환 - 중복 빌드 방지
                    if (me.$el.data(moduleName) ) {
                        return false;
                    }
                    me.$el.data(moduleName, this);
                }
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                // disabled상태면 false 반환
                if (me.$el.hasClass('disabled') || me.$el.attr('data-readony') === 'true' || me.$el.attr('data-disabled') === 'true') {
                    return false;
                }

                View._instances.push(me);
                superClass = me.constructor.superclass;
                me.el = me.$el[0];													// 원래 엘리먼트도 변수에 설정
                me.options = $.extend({}, superClass.defaults, me.defaults, options);			// 옵션 병합
                me.cid = me.moduleName + '_' + common.getUniqKey();					// 객체 고유 키
                me.subViews = {};														// 하위 컨트롤를 관리하기 위함
                me._eventNamespace = '.' + me.cid;	// 객체 고유 이벤트 네임스페이스명


                me.updateSelectors();

                // events 속성 처리
                // events: {
                //	'click ul>li.item': 'onItemClick', //=> this.$el.on('click', 'ul>li.item', this.onItemClick); 으로 변환
                // }
                me.options.events = $.extend({},
                    execObject(me.events, me),
                    execObject(me.options.events, me));
                $.each(me.options.events, function (key, value) {
                    if (!eventPattern.test(key)) { return false; }

                    var name = RegExp.$1,
                        selector = RegExp.$2,
                        args = [name],
                        func = isFn(value) ? value : (isFn(me[value]) ? me[value] : common.emptyFn);

                    if (selector) { args[args.length] = $.trim(selector); }

                    args[args.length] = function () {
                        func.apply(me, arguments);
                    };
                    me.on.apply(me, args);
                });

                // options.on에 지정한 이벤트들을 클래스에 바인딩
                $.each(me.options.on || {}, function (key, value) {
                    me.on(key, value);
                });
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            },

            updateSelectors: function () {
                var me = this,
                    superClass = me.constructor.superclass;

                // selectors 속성 처리
                // selectors: {
                //  box: 'ul',			// => this.$box = this.$el.find('ul');
                //  items: 'ul>li.item'  // => this.$items = this.$el.find('ul>li.item');
                // }
                me.options.selectors = $.extend({},
                    execObject(superClass.selectors, me),
                    execObject(me.selectors, me),
                    execObject(me.options.selectors, me));
                $.each(me.options.selectors, function (key, value) {
                    if (typeof value === 'string') {
                        me['$' + key] = me.$el.find(value);
                    } else if (value instanceof jQuery) {
                        me['$' + key] = value;
                    } else {
                        me['$' + key] = $(value);
                    }
                    me.subViews['$' + key] = me['$' + key];
                });
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            },

            $: function (selector) {
                return this.$el.find(selector);
            },

            /**
             * 파괴자
             */
            destroy: function () {
                var me = this;

                me.$el.off(me._eventNamespace);

                // me.subviews에 등록된 자식들의 파괴자 호출
                $.each(me.subViews, function (key, item) {
                    if(key.substr(0, 1) === '$') {
                        item.off(me._eventNamespace);
                    } else {
                        item.destroy && item.destroy();
                    }
                });
            },

            /**
             * 옵션 설정함수
             *
             * @param {String} name 옵션명
             * @param {Mixed} value 옵션값
             */
            setOption: function (name, value) {
                this.options[name] = value;
            },

            /**
             * 옵션값 반환함수
             *
             * @param {String} name 옵션명
             * @param {Mixed} def 옵션값이 없을 경우 기본값
             * @return {Mixed} 옵션값
             */
            getOption: function (name, def) {
                return (name in this.options && this.options[name]) || def;
            },

            /**
             * 인자수에 따라 옵션값을 설정하거나 반환해주는 함수
             *
             * @param {String} name 옵션명
             * @param {Mixed} value {Optional} 옵션값: 없을 경우 name에 해당하는 값을 반환
             * @return {Mixed}
             * @example
             * $('...').tabs('option', 'startIndex', 2);
             */
            option: function (name, value) {
                if (typeof value === 'undefined') {
                    return this.getOption(name);
                } else {
                    this.setOption(name, value);
                    this.triggerHandler('optionchange', [name, value]);
                }
            },

            /**
             * 이벤트명에 현재 클래스 고유의 네임스페이스를 붙여서 반환 (ex: 'click mousedown' -> 'click.MyClassName mousedown.MyClassName')
             * @private
             * @param {String} eventNames 네임스페이스가 없는 이벤트명
             * @return {String} 네임스페이스가 붙어진 이벤트명
             */
            _normalizeEventNamespace: function (eventNames) {
                if (eventNames instanceof $.Event) {
                    return eventNames;
                }

                var me = this,
                    m = (eventNames || "").split( /\s/ );
                if(!m || !m.length) {
                    return eventNames;
                }

                var name, tmp = [];
                for(var i = -1, name; name = m[++i]; ) {
                    if (name.indexOf('.') === -1) {
                        tmp.push(name + me._eventNamespace);
                    } else {
                        tmp.push(name);
                    }
                }
                return tmp.join(' ');
            },

            /**
             * 현재 클래스의 이벤트네임스페이스를 반환
             * @return {String} 이벤트 네임스페이스
             */
            getEventNamespace: function () {
                return this._eventNamespace;
            },


            /**
             * me.$el에 이벤트를 바인딩
             */
            on: function () {
                var args = arraySlice.call(arguments);
                args[0] = this._normalizeEventNamespace(args[0]);

                this.$el.on.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el에 등록된 이벤트를 언바인딩
             */
            off: function () {
                var args = arraySlice.call(arguments);
                this.$el.off.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el에 일회용 이벤트를 바인딩
             */
            one: function () {
                var args = arraySlice.call(arguments);
                args[0] = this._normalizeEventNamespace(args[0]);

                this.$el.one.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el에 등록된 이벤트를 실행
             */
            trigger: function () {
                var args = arraySlice.call(arguments);
                this.$el.trigger.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el에 등록된 이벤트 핸들러를 실행
             */
            triggerHandler: function () {
                var args = arraySlice.call(arguments);
                this.$el.triggerHandler.apply(this.$el, args);
                return this;
            },

            /**
             * 해당 엘리먼트에 바인딩된 클래스 인스턴스를 반환
             * @return {Class}
             * @example
             * var tabs = $('div').Tabs('instance');
             */
            instance: function () {
                return this;
            },

            /**
             * 해당 클래스의 소속 엘리먼트를 반환
             * @return {jQuery}
             */
            getElement: function (){
                return this.$el;
            }
        });

        return View;
    });


})(window, jQuery, common);

(function (context, $, common, ui) {

    var $win = common.$win,
        $doc = common.$doc,
        Class = common.Class,
        dateUtil = common.date,
        stringUtil = common.string,
        numberUtil = common.number,
        View = ui.View;		// ui.View


    /**
     * 페이지 이벤트 바인딩
     * 사이트 전반에 포진되어 있는 기능들이기에 따로 일일이 바인딩하지 않아도 data- 속성만 추가하기만 하면,
     * 자동으로 해당기능들(레이어표시, 펼침/숨기기, 더보기/간략보기)이 작동되도록 해준다.
     * (document 에 델리게이트방식으로 바인딩)
     *
     * @namespace
     * @name common.GlobalEvents
     */
    common.define('GlobalEvents', {
        _$tooltip: $(),
        _inited: false,
        /**
         * 초기화 함수
         */
        init: function () {
            var me = this;

            if (me._inited) { return; }
            me._inited = true;

            me._dropdown();
            me._tooltip();
            me._placeholder();
            me._skipNaviFocus();
            me._contentTop();
            me._inputBoxKeyUp();
            me._loadingBar();
        },

        /**
         * 드롭다운 띄우기 이벤트 바인딩
         *
         * @example
         * &lt;button data-control="dropdown">
         * &lt;div class="d_notpos">...&lt;/div>		&lt;!-- d_notpos클래스: 강제 위치재조절이 안되도록 하기 위한 옵션 -->
         */
        _dropdown: function () {
            var me = this;

            // data-control=dropdown 인 엘리먼트를 클릭했을 때 해당 모달을 띄운다.
            $doc.on('mousedown.globalevents keydown.globalevents', '[data-control=dropdown]', function (e) {
                if (e.type === 'keydown' && e.keyCode !== 13) {
                    return;
                }
                e.preventDefault();

                var $this = $(this);
                if ($this.hasClass('disabled') || $this.is(':disabled') || $this.data('dropdown')) { return; }

                e.stopPropagation();
                $this.dropdown('open');
            });
        },

        /**
         * 툴팁 띄우기 이벤트 바인딩
         *
         * @example
         * &lt;button data-hover="tooltip">
         * &lt;div class="d_tooltip">...&lt;/div>
         */
        _tooltip: function () {
            var me = this;

            $doc.on('mouseenter.globalevents focusin.globalevents mouseleave.globalevents focusout.globalevents', '[data-control=tooltip]', function () {
                var $btn = $(this);
                if ($btn.data('tooltip')) { return; }

                $btn.tooltip('open');
            });
        },

        /**
         * placeholder 기능 바인딩, placeholder를 지원하는 브라우저에서는 무시됨
         *
         * @example
         * $('input').placeholder();
         */
        _placeholder: function () {
            var isSupport = 'placeholder' in common.tmpInput;

            $(function() {
                if (isSupport) {
                    $('input[placeholder], textarea[placeholder]').each(function () {
                        if(this.value === this.getAttribute('placeholder')) { this.value = ''; return; }
                    });
                } else {
                    $('input[placeholder], textarea[placeholder]').placeholder();
                }
            });
        },

        /**
         * 스킵네비게이션으로 이동했을 때, 해당 영역에 포커싱이 가도록..
         */
        _skipNaviFocus: function () {
            $('#skip_nav').on('click', 'a', function (e) {
                $($(this).attr('href')).attr('tabindex', 0).focus();
            });
        },

        /**
         * 탑버튼
         */
        _contentTop: function () {
            var height = $('#header').height();
            $('.d-top').hide();

            $(window).scroll(function () {
                if($(window).scrollTop() > height) {
                    $('.d-top').show();
                } else {
                    $('.d-top').hide();
                }
            });
        },

        /**
         * INPUT BOX 키업관련 이벤트
         */
        _inputBoxKeyUp: function () {
            $(document).on("keyup", "input:text[numberOnly]", function() {
                $(this).val($(this).val().replace(/[^0-9]/gi,""));
            });
            $(document).on("keyup", "input:text[engOnly]", function() {
                $(this).val($(this).val().replace(/[^a-zA-Z]/gi,""));
            });

            if (!common.browser.isOldIE) {
                $(document).on("keyup", "input:text[textOnly]", function() {
                    $(this).val($(this).val().replace(/[^ㄱ-ㅎㅏ-ㅣ가-?a-zA-Z]/gi,""));
                });
                $(document).on("keyup", "input:text[korOnly]", function() {
                    $(this).val($(this).val().replace(/[^ㄱ-ㅎㅏ-ㅣ가-?]/gi,""));
                });
            }
        },

        /**
         * 로딩바 이미지 위치 변경
         */
        _loadingBar: function () {
            var $el = $('.loader > .none'),
                ypos = 0;


            setInterval(function () {
                ypos = (ypos - 40 < -280) ? 0 : ypos - 40;
                $el.css('background-position', '0px '+ ypos +'px');
            }, 100);
        }
    });

    /**
     * Modal 클래스<br />
     * // 옵션 <br />
     * @class
     * @name common.ui.Modal
     * @extends common.ui.View
     */
    common.ui('Modal', function() {
        /**
         * 모달 클래스<br />
         * // 옵션 <br />
         * options.overlay:true 오버레이를 깔것인가<br />
         * options.clone: true	복제해서 띄울 것인가<br />
         * options.closeByEscape: true	// esc키를 눌렀을 때 닫히게 할 것인가<br />
         * options.removeOnClose: false	// 닫을 때 dom를 삭제할것인가<br />
         * options.draggable: true				// 드래그를 적용할 것인가<br />
         * options.dragHandle: 'h1.title'		// 드래그대상 요소<br />
         * options.show: true					// 호출할 때 바로 표시할 것인가...
         *
         * @class
         * @name common.modal
         * @extends View
         * @example
         */
        var Modal = Class(/** @lends Modal# */{
            $extend: View,
            name: 'Modal',
            $statics: /** @lends Modal */{
                /**
                 * 모달 생성시 발생되는 이벤트
                 * @static
                 */
                ON_MODAL_CREATED: 'created',
                /**
                 * 모달 표시 전에 발생되는 이벤트
                 * @static
                 */
                ON_MODAL_SHOW:'modalshow',
                /**
                 * 모달 표시 후에 발생되는 이벤트
                 * @static
                 */
                ON_MODAL_SHOWN:'modalshown',	// 표시 후
                /**
                 * 모달이 숨기기 전에 발생되는 이벤트
                 * @static
                 */
                ON_MODAL_HIDE:'modalhide',			// 숨기기 전
                /**
                 * 모달이 숨겨진 후에 발생되는 이벤트
                 * @static
                 */
                ON_MODAL_HIDDEN: 'modalhidden'	// 숨긴 후
            },
            defaults: {
                overlay: true,
                clone: false,
                closeByEscape: false,
                removeOnClose: false,
                draggable: true,
                dragHandle: 'h1.title',
                show: true
            },

            events: {
                'click button[data-role]': function (e) {
                    var me = this,
                        $btn = $(e.currentTarget),
                        role = ($btn.attr('data-role') || ''),
                        e;

                    if (role) {
                        me.trigger(e = $.Event(role), [me]);
                        if(e.isDefaultPrevented()){
                            return;
                        }
                    }

                    this.hide();
                },
                'click .d-close': function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    this.hide();
                }
            },
            /**
             * 생성자
             * @constructors
             * @param {String|Element|jQuery} el
             * @param {Object} options
             * @param {Boolean}  options.overlay:true 오버레이를 깔것인가
             * @param {Boolean}  options.clone: true	복제해서 띄울 것인가
             * @param {Boolean}  options.closeByEscape: true	// esc키를 눌렀을 때 닫히게 할 것인가
             * @param {Boolean}  options.removeOnClose: false	// 닫을 때 dom를 삭제할것인가
             * @param {Boolean}  options.draggable: true				// 드래그를 적용할 것인가
             * @param {Boolean}  options.dragHandle: 'h1.title'		// 드래그대상 요소
             * @param {Boolean}  options.show: true					// 호출할 때 바로 표시할 것인가...
             */
            initialize: function(el, options) {
                var me = this;
                options = options || {};


                if(me.supr(el, options) === false) {
                    return;
                }

                // 열릴때 body로 옮겼다가, 닫힐 때 다시 원복하기 위해 임시요소를 넣어놓는다.
                //me._createHolder();

                me.isShown = false;
                me._originalDisplay = me.$el.css('display');

                if(me.options.remote) {
                    me.$el.load(me.options.remote).done(function(){
                        me.options.show && me.show();
                    });
                } else {
                    me.options.show && me.show();
                }

                me.$el.on('mousewheel.modal', function(e) {
                    e.stopPropagation();
                });

                me.trigger('created');
            },

            /**
             * zindex때문에 모달을 body바로 위로 옮긴 후에 띄우는데, 닫을 때 원래 위치로 복구시켜야 하므로,
             * 원래 위치에 임시 홀더를 만들어 놓는다.
             * @private
             */
            _createHolder: function() {
                var me = this;

                if(me.$el.parent().is('body')){ return; }

                me.$holder = $('<span class="d_modal_area" style="display:none;"></span>').insertAfter(me.$el);
                me.$el.appendTo('body');
            },
            /**
             * 원래 위치로 복구시키고 홀더는 제거
             * @private
             */
            _replaceHolder: function() {
                var me = this;

                if(me.$holder){
                    me.$el.insertBefore(me.$holder);
                    me.$holder.remove();
                }
            },

            /**
             * 토글
             */
            toggle: function() {
                var me = this;

                me[ me.isShown ? 'hide' : 'show' ]();
            },

            /**
             * 표시
             */
            show: function() {
                if(this.isShown && Modal.active === this) { return; }

                Modal.close();
                Modal.active = this;

                var me = this,
                    e = $.Event('modalshow');

                me.$el.trigger(e);
                if(me.isShown || e.isDefaultPrevented()) { return; }

                me.isShown = true;

                me.layout();
                me._escape();
                me._overlay();
                me._draggabled();
                me._enforceFocus();

                if(me.options.title) {
                    me.$el.find('h1.d_title').html(me.options.title || '알림');
                }

                me.$el.stop().addClass('d_modal_container').addClass('show')
                    .css({
                        position: 'fixed',
                        left: '50%',
                        top: '50%',
                        zIndex: 9900,
                        backgroundColor: '#ffffff',
                        outline: 'none',
                        backgroundClip: 'padding-box'
                    }).fadeIn('fast', function() {
                    //me.$el.trigger('modalshown').focus();
                    me.$el.find('.d-close').focus();
                    me.layout();
                });

                common.PubSub.trigger('show:modal');

            },

            /**
             * 숨김
             */
            hide: function(e) {
                if(e) {
                    e.preventDefault();
                }

                var me = this;
                e = $.Event('modalhide');
                me.$el.trigger(e);
                if(!me.isShown || e.isDefaultPrevented()) { return; }

                $doc.off('focusin.modal');
                me.$el.off('click.modal keyup.modal');

                me.isShown = false;
                me._escape();
                me.hideModal();

                me.$el.trigger('modalhidden');

                Modal.active = null;

                common.PubSub.trigger('hide:modal');
            },

            /**
             * 뒷처리 담당
             */
            hideModal: function() {
                var me = this;
                // 동영상 레이어 종료시 이벤트 발생
                me.$el.hide().removeData(me.moduleName).removeClass('d_modal_container').removeClass('show');
                me._replaceHolder();

                if(me.options.removeOnClose) {
                    me.$el.remove();
                }

                if(me.$overlay) {
                    me.$overlay.hide().remove(), me.$overlay = null;
                }
            },

            /**
             * 도큐먼트의 가운데에 위치하도록 지정
             */
            layout: function(){
                var me = this,
                    width = 0,
                    height = 0;

                me.$el.css({'display': 'inline', 'position': 'fixed' });
                width = me.$el.width();
                height = me.$el.height();
                me.$el.css({'display': ''});

                me.$el.css({
                    'width': width,
                    'marginTop': Math.ceil(height / 2) * -1,
                    'marginLeft': Math.ceil(width / 2) * -1
                });

                common.PubSub.trigger('show:layout');
            },

            /**
             * 타이틀 영역을 드래그기능 빌드
             * @private
             */
            _draggabled: function(){
                var me = this,
                    options = me.options;

                if(!options.draggable || me.bindedDraggable) { return; }
                me.bindedDraggable = true;

                if (options.dragHandle) {
                    me.$el.find(options.dragHandle).css('cursor', 'move');
                    me.$el.draggable({
                        handle: options.dragHandle
                    });
                } else {
                    me.$el.draggable('cancel');
                }
            },

            /**
             * 모달이 띄워진 상태에서 탭키를 누를 때, 모달안에서만 포커스가 움직이게
             * @private
             */
            _enforceFocus: function() {
                var me = this;

                $doc
                    .off('focusin.modal')
                    .on('focusin.modal', me.proxy(function(e) {
                        if(me.$el[0] !== e.target && !$.contains(me.$el[0], e.target)) {
                            me.$el.find(':focusable').first().focus();
                            e.stopPropagation();
                        }
                    }));
            },

            /**
             * esc키를 누를 때 닫히도록
             * @private
             */
            _escape: function() {
                var me = this;

                if(me.isShown && me.options.closeByEscape) {
                    me.$el.off('keyup.modal').on('keyup.modal', me.proxy(function(e) {
                        e.which === 27 && me.hide();
                    }));
                } else {
                    me.$el.off('keyup.modal');
                }
            },

            /**
             * 오버레이 생성
             * @private
             */
            _overlay: function() {
                var me = this;

                me.$overlay = $('<div class="d_modal_overlay" />');
                me.$overlay.css({
                    'backgroundColor': '#ffffff',
                    'opacity': 0.6,
                    'position': 'fixed',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'bottom': 0,
                    'zIndex': 9000
                }).appendTo('body');

                //me.$overlay.off('click.modal').on('click.modal', function(e) {
                //	if(e.target != e.currentTarget) { return; }
                //	me.$overlay.off('click.modal');
                //	me.hide();
                //});
            },

            /**
             * 모달의 사이즈가 변경되었을 때 가운데위치를 재조절
             * @example
             * $('...').modal(); // 모달을 띄운다.
             * $('...').find('.content').html( '...');	// 모달내부의 컨텐츠를 변경
             * $('...').modal('center');	// 컨텐츠의 변경으로 인해 사이즈가 변경되었으로, 사이즈에 따라 화면가운데로 강제 이동
             */
            center: function(){
                this.layout();
            },

            /**
             * 닫기
             */
            close: function() {
                this.hide();
            },

            destroy: function() {
                var me = this;

                me.supr();
                me.$el.off('.modal').removeClass('d_modal_container');
                me.$overlay.add(me.$el).off('.modal').remove();
                $doc.off('.modal');
                $win.off('.hibModal');
            }
        });

        /**
         */
        Modal.close = function (e) {
            if (!Modal.active) return;
            if (e) e.preventDefault();
            Modal.active.hide();
            Modal.active = null;
        };

        // 모달모듈이 한번이라도 호출되면, 이 부분이 실행됨, 모달모듈이 단 한번도 사용안하는 경우도 있는데,
        // 무조건 바인딩시켜놓는건 비효율적인 듯 해서 이와 같이 처리함
        Modal.onClassCreate = function() {

            common.PubSub.on('show:modal', function (e, force) {
                if (force === false) {
                    if(Modal.active){
                        Modal.close();
                    }
                }
            });

        };

        common.bindjQuery(Modal, 'modal');

        common.modal = function(el, options){
            $(el).modal(options);
        };

        return Modal;
    });

    /**
     * WebGNB 클래스<br />
     * // 옵션 <br />
     * @class
     * @name common.ui.WebGNB
     * @extends common.ui.View
     */
    common.ui('WebGNB', {
        bindjQuery:'webGNB',

        $statics:{
        },

        defaults: {
        },

        selectors: {
            btnMenuOpen: '.d-menuOpen',
            menuContent: '.d-menuContent',
            step1Open: '.d-step1Open',
            btnAllOpen: '.d-menuAllOpen',
            step2Open: '.d-step2Open',
            subMenu2: '.d-subMenu2',
            //step3Open: '.d-step3Open',
            //subMenu3: '.d-subMenu3',
            btnClose: '.d-menuClose'
        },

        initialize: function(el, options) {
            var me = this;
            options = options || {};

            if(me.supr(el, options) === false) return;

            me.$el.on('mousewheel.webgnb', function(e) {
                e.stopPropagation();
            });

            me.$btnMenuOpen.on('click.webgnb', function(e) {
                e.preventDefault();
                $('body').css({'overflow':'hidden'});
                me.$menuContent.show();
                me.$btnAllOpen.trigger('click');
                me.$btnClose.focus();
                me._enforceFocus();
            });

            me.$btnAllOpen.on('click.webgnb', function(e) {
                e.preventDefault();
                e.stopPropagation();

                if ($(this).hasClass('on')) {
                    $(this).removeClass('on').attr('title', $(this).attr('data-open-text')).find('span').html($(this).attr('data-open-text'));
                    me.$subMenu2.slideUp('fast',function () {
                        $(this).parent().removeClass('on');
                    });
                    $.each(me.$step2Open, function (idx, that) {
                        $(that).attr('title', $(that).attr('data-open-text')).find('.none').html($(that).attr('data-open-text'));
                    });
                    /*
                     me.$subMenu3.slideUp('fast',function () {
                     $(this).parent().removeClass('on');
                     });
                     */
                } else {
                    $(this).addClass('on').attr('title', $(this).attr('data-close-text')).find('span').html($(this).attr('data-close-text'));
                    me.$subMenu2.slideDown('fast',function () {
                        $(this).parent().addClass('on');
                    });
                    $.each(me.$step2Open, function (idx, that) {
                        $(that).attr('title', $(that).attr('data-close-text')).find('.none').html($(that).attr('data-close-text'));
                    });
                    /*
                     me.$subMenu3.slideDown('fast',function () {
                     $(this).parent().addClass('on');
                     });
                     */
                }
            });

            me.$step1Open.on('mouseenter.webgnb mouseleave.webgnb focusin.webgnb focusout.webgnb', function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (e.type === 'mouseenter' || e.type === 'focusin') {
                    $(this).addClass('mhover');
                } else {
                    $(this).removeClass('mhover');
                }
            });

            me.$step2Open.on('click.webgnb', function(e) {
                e.preventDefault();
                e.stopPropagation();

                var idx = me.$step2Open.index(this);

                if ($(this).parent().parent().hasClass('on')) {
                    me.$subMenu2.eq(idx).slideUp('fast',function () {
                        $(this).parent().removeClass('on');
                        me.$step2Open.eq(idx).attr('title', me.$step2Open.eq(idx).attr('data-open-text')).find('.none').html(me.$step2Open.eq(idx).attr('data-open-text'));
                    });
                } else {
                    me.$subMenu2.eq(idx).slideDown('fast',function () {
                        $(this).parent().addClass('on');
                        me.$step2Open.eq(idx).attr('title', me.$step2Open.eq(idx).attr('data-close-text')).find('.none').html(me.$step2Open.eq(idx).attr('data-close-text'));
                    });
                }
            });

            /*
             me.$step3Open.on('click.webgnb', function(e) {
             e.preventDefault();
             e.stopPropagation();
             var idx = me.$step3Open.index(this);

             if ($(this).parent().hasClass('on')) {
             me.$subMenu3.eq(idx).slideUp('fast',function () {
             $(this).parent().removeClass('on');
             });
             } else {
             me.$subMenu3.eq(idx).slideDown('fast',function () {
             $(this).parent().addClass('on');
             });
             }
             });
             */

            me.$btnClose.on('click.webgnb', function(e) {
                e.preventDefault();
                e.stopPropagation();

                $('body').css({'overflow':''});

                me.$btnAllOpen.removeClass('on').attr('title', me.$btnAllOpen.attr('data-open-text')).find('span').html(me.$btnAllOpen.attr('data-open-text'));
                me.$subMenu2.slideUp('fast',function () {
                    $(this).parent().removeClass('on');
                });
                /*
                 me.$subMenu3.slideUp('fast',function () {
                 $(this).parent().removeClass('on');
                 });
                 */

                me.$menuContent.hide();
                me.$btnMenuOpen.focus();
                me._offEnforceFocus();
            });
        },

        /**
         * 모달이 띄워진 상태에서 탭키를 누를 때, 모달안에서만 포커스가 움직이게
         * @private
         */
        _enforceFocus: function() {
            var me = this;

            $doc.off('focusin.webgnb')
                .on('focusin.webgnb', me.proxy(function(e) {
                    if(me.$menuContent[0] !== e.target && !$.contains(me.$menuContent[0], e.target)) {
                        me.$menuContent.find(':focusable').first().focus();
                        e.stopPropagation();
                    }
                }));
        },

        _offEnforceFocus: function() {
            var me = this;

            $doc.off('focusin.webgnb');
        }
    });

    /**
     * MovieModule 클래스<br />
     * // 옵션 <br />
     * options.hideBtnTime: integer <br />
     * options.btnShowTime: integer	<br />
     * @class
     * @name common.ui.MovieModule
     * @extends common.ui.View
     */
    common.ui('MovieModule', {
        bindjQuery:'movieModule',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            hideBtnTime: 1000,
            btnShowTime: 500
        },
        selectors: {
            player: '.d-player',				// 플레이어 영역
            poster: '.d-poster',				// 포스터 영역
            controls: '.d-controls',			// 컨트롤러 영역
            accessibility: '.d-accessibility',	// 탭 컨트롤러 영역
            videoWrap : '.d-videoWrap',			// 동영상 영역
            btnLayer: '.d-layerBtn',			// 레이어 띄우기 버튼
            btnSNS: 'd-sns',					// SNS 버튼
            btnPlay: '.d-videoPlay',			// 플레이 버튼
            btnCaption: '.d-caption',			// 자막 버튼
            btnClose: '.d-close',				// 닫기 버튼

            clipPlayer: '.d-clipPlayer',		// 무비클립 플레이어 영역
            btnClipPlay: '.d-clipPlay'			// 무비클립 플레이 버튼
        },
        _clickedBtn: null,			//중복실행을 방지 하기 위한 키값

        /**
         * 생성자 - _playerPlay 함수에 swfPath: "/js/lib/jplayer" 경로를 잘 맞춰줘야 한다.
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.captinSize = me.$btnCaption.size();

            // 레이어 오픈 버튼 이벤트 바인딩
            me.$el.on('click.layer', me.selectors.btnLayer, function (e) {
                e.preventDefault();
                me.index = me.$btnLayer.index(this);
                me._clickedBtn = this;									//갯수만큼 실행되므로 싱크로를 맞추기 위한 클릭한 항목을 값을 유지

                $(this).next().find('.d-videoWrap').addClass('show').end().addClass('show').modal();
                me.$poster.show();
                me.updateSelectors();

                // 레이어 오픈시 자동 플레이
                me.$btnPlay.eq(me.index).trigger('click');
            });

            // 플레이 버튼 이벤트 바인딩
            me.$el.on('click.play', me.selectors.btnPlay, function (e) {
                e.preventDefault();

                var $btnPlay = $(this),
                    data = {type: $btnPlay.attr('data-movie-type'), play: $btnPlay.attr('data-play-type'), rtmpv: $btnPlay.attr('data-movie-rtmpv'), mp4: $btnPlay.attr('data-movie-mp4'), webm : $btnPlay.attr('data-movie-webm'), ogg: $btnPlay.attr('data-movie-ogg'), poster: $btnPlay.attr('data-movie-poster')};

                if (e.type === 'click') {
                    me.$accessibility.show();
                    me.index = me.$el.find(me.selectors.btnPlay).index(this);
                    me.volume = 0.5;
                    // 플레이어가 뜨지 않은 경우.
                    if ($btnPlay.attr('data-play') !== 'T') {
                        // 플레이어 분리하여 실행
                        if (data.type == 'youtube') {
                            me._youtubePlay(data);
                        } else {
                            me._jplayerPlay(data);
                            $btnPlay.attr('data-play','T').removeClass('btn_play').addClass('btn_pause').find('.none').html($btnPlay.attr('data-pause-text'));
                            me._playerAction('play');
                        }
                        me.$btnCaption.eq(me.index).parent().addClass('on').siblings().addClass('show');
                        me.$btnCaption.eq(me.index).find('.none').html(me.$btnCaption.eq(me.index).attr('data-caption-close'));
                        me.$poster.hide();
                        me._buttonControl({type: 'hide'});
                    } else {
                        if ($btnPlay.hasClass('btn_play')) {
                            me._playerAction('play');
                        } else if ($btnPlay.hasClass('btn_pause')) {
                            me._playerAction('pause');
                        }
                    }
                }
            });

            // 닫기 버튼 이벤트 바인딩
            me.$el.on('click.stop', me.selectors.btnClose, function (e) {
                e.preventDefault();
                me._playerStop('');
            });

            // 자막보기 버튼 이벤트 바인딩
            me.$el.on('click.caption', me.selectors.btnCaption, function (e) {
                e.preventDefault();
                if ($(this).parent().hasClass('on')) {
                    $(this).find('.none').html($(this).attr('data-caption-open'));
                } else {
                    $(this).find('.none').html($(this).attr('data-caption-close'));
                }
                $(this).parent().toggleClass('on').siblings().toggleClass('show');
            });

            // 동영상 탭 콘트롤러 영역 CLICK
            me.$el.on('click.accessibility focusin.accessibility focusout.accessibility', me.selectors.accessibility, function (e) {
                e.preventDefault();
                var $videoWrap  = me.$videoWrap.eq(me.index),
                    $btnPlay  = me.$btnPlay.eq(me.index),
                    $controls = me.$controls.eq(me.index),
                    fullScreen = me.$btnPlay.eq(me.index).attr('data-fullscreen-id');

                if (e.type === 'focusin') {
                    $(this).addClass('on');
                    $controls.hide();
                } else  if (e.type === 'focusout') {
                    $(this).removeClass('on');
                } else if (e.type === 'click') {
                    // 클릭한 버튼에 따른 처리
                    if ($(e.target).hasClass('btn_play')) {
                        me._playerAction('play');
                    } else if ($(e.target).hasClass('btn_pause')) {
                        me._playerAction('pause');
                    } else if ($(e.target).hasClass('btn_stop')) {
                        me._playerAction('stop');
                    } else if ($(e.target).hasClass('btn_full')) {
                        me._playerAction({fullScreen: '#'+fullScreen});
                    } else if ($(e.target).hasClass('btn_small')) {
                        me._playerAction({fullScreen:''});
                    } else if ($(e.target).hasClass('btn_mute')) {
                        me._playerAction('mute');
                    } else if ($(e.target).hasClass('btn_unmute')) {
                        me._playerAction('unmute');
                    } else if ($(e.target).hasClass('btn_volup')) {
                        me.volume = (me.volume + 0.05 > 1) ? 1 : me.volume + 0.05;
                        me._playerAction({volume:me.volume});
                    } else if ($(e.target).hasClass('btn_voldown')) {
                        me.volume = (me.volume - 0.05 < 0) ? 0 : me.volume - 0.05;
                        me._playerAction({volume:me.volume});
                    } else if ($(e.target).hasClass('d-sns')) {
                        $(e.target).parent().toggleClass('on');
                    }
                }
            });

            // 동영상 콘트롤러 영역 CLICK
            me.$el.on('click.controls', me.selectors.controls, function (e) {
                e.preventDefault();
                var $videoWrap  = me.$videoWrap.eq(me.index),
                    $btnPlay  = me.$btnPlay.eq(me.index),
                    fullScreen = me.$btnPlay.eq(me.index).attr('data-fullscreen-id');

                if (e.type === 'click') {
                    // 클릭한 버튼에 따른 처리
                    if ($(e.target).hasClass('btn_play')) {
                        me._playerAction('play');
                    } else if ($(e.target).hasClass('btn_pause')) {
                        me._playerAction('pause');
                    } else if ($(e.target).hasClass('btn_stop')) {
                        me._playerAction('stop');
                    } else if ($(e.target).hasClass('btn_full')) {
                        me._playerAction({fullScreen: '#'+fullScreen});
                    } else if ($(e.target).hasClass('btn_small')) {
                        me._playerAction({fullScreen:''});
                    } else if ($(e.target).hasClass('d-sns')) {
                        $(e.target).parent().toggleClass('on');
                        //me._playerAction('pause');
                    }
                }
            });

            // 레이어로 플레이어 호출한 경우 처리 프로세스
            common.PubSub.on('show:modal', function () {
                if(!me._clickedBtn) return;			//중복 실행 방지
                me.$accessibility.hide();
            });

            // 레이어로 플레이어 호출한 경우 닫기 버튼 클릭시 처리 프로세스
            common.PubSub.on('hide:modal', function () {
                me._clickedBtn = null;
                me.$controls.hide();
                me.$videoWrap.removeClass('show');
                me.$poster.show();
                me._playerStop('');
            });

            $('body').on('keyup', function (e) {
                if (e.keyCode == 27 && me.$controls.find('.btn_small').length === 1) {
                    me.$controls.find('.btn_small').trigger('click');
                }
            });

            // common.PubSub.trigger('playerStop');
            common.PubSub.on('playerStop', function () {
                me._playerStop('');
            });


            //
            me.$btnClipPlay.each(function (i, that) {
                var $that = $(that),
                    $clipPlayer = me.$clipPlayer.eq(i),
                    type = $that.attr('data-movie-type'),
                    info = {"m4v": $that.attr('data-movie-mp4'), "webmv": $that.attr('data-movie-webm'), "ogv": $that.attr('data-movie-ogg'), "poster": $that.attr('data-movie-poster')};

                switch(type) {
                    case 'MANUAL':
                        $clipPlayer.attr('data-play','T').jPlayer({
                            ready: function () {
                                $(this).jPlayer("setMedia", info);
                                $that.show();
                            },
                            swfPath: "/js/lib/jplayer",
                            supplied: "m4v, webmv, ogv",
                            solution: "html, flash",
                            wmode: "transparent",
                            size: {
                                width: '100%',
                                height: '100%'
                            },
                            volume: 0,
                            smoothPlayBar: true,
                            keyEnabled: false
                        });
                        break;
                    case 'AUTO_B':
                        $clipPlayer.attr('data-play','F').jPlayer({
                            ready: function () {
                                $(this).jPlayer("setMedia", info);
                            },
                            swfPath: "/js/lib/jplayer",
                            supplied: "m4v, webmv, ogv",
                            solution: "html, flash",
                            wmode: "transparent",
                            size: {
                                width: '100%',
                                height: '100%'
                            },
                            volume: 0,
                            smoothPlayBar: true,
                            keyEnabled: false
                        });
                        break;
                    default:
                        $clipPlayer.attr('data-play','T').jPlayer({
                            ready: function () {
                                $(this).jPlayer("setMedia", info).jPlayer('play');
                            },
                            swfPath: "/js/lib/jplayer",
                            supplied: "m4v, webmv, ogv",
                            solution: "html, flash",
                            wmode: "transparent",
                            size: {
                                width: '100%',
                                height: '100%'
                            },
                            volume: 0,
                            loop: true,
                            smoothPlayBar: true,
                            keyEnabled: false
                        });
                        break;
                }
            });

            me.$el.on('click.clipPlay', me.selectors.btnClipPlay, function (e) {
                e.preventDefault();

                var $btnPlay = $(this),
                    index = me.$btnClipPlay.index(this),
                    $clipPlayer = me.$clipPlayer.eq(index);

                $clipPlayer.jPlayer('play');

            });

            common.PubSub.on('scroll.trigger', function (e) {
                me._winScroll();
            });
        },

        /**
         * 윈도우 스크롤시 자동 플레이 영역 처리
         * @param
         */
        _winScroll: function () {
            var me = this;

            onScreen = common.isOnScreen(me.$clipPlayer, 500);
            if (onScreen.length > 0) {
                $.each(onScreen, function (k, value) {
                    if (me.$btnClipPlay.eq(value).attr('data-movie-type') === 'AUTO_B' && me.$clipPlayer.eq(value).attr('data-play') === 'F') {
                        me.$clipPlayer.eq(value).attr('data-play','T').jPlayer('play');
                    }
                });
            }
        },

        /**
         * youtube 동영상 생성
         * @param {JSON} data
         *	@param {String} mp4 youtube 동영상 ID
         */
        _youtubePlay: function (data) {
            var me = this,
                $player = me.$player.eq(me.index),
                $controls = me.$controls.eq(me.index),
                $accessibility = me.$accessibility.eq(me.index),
                $videoWrap  = me.$videoWrap.eq(me.index);

            me._playerStop('');
            $controls.html('');
            $accessibility.html('');
            $player.css({width:'100%', height:'100%'}).html('<div id="ytplayer"></div>');
            me.ytplayer = new YT.Player('ytplayer', {
                width: '100%',
                height: '100%',
                videoId: data.mp4,
                events: {
                    'onReady': me._youtubePlayerReady.bind(me),
                    'onStateChange': me._youtubeStateChange.bind(me)
                }
            });
            $videoWrap.addClass('show');
        },

        /**
         * youtube 동영상이 준비된 경우 플레이
         */
        _youtubePlayerReady: function () {
            var me = this;

            // 레이어가 아닌 경우 자동 플레이 - 사파리일 경우 자동플레이 금지
            if (!common.browser.isSafari) {
                me.ytplayer.playVideo();
            }
        },

        /**
         * youtube 동영상이 종료된 경우 처리
         */
        _youtubeStateChange: function (e) {
            var me = this;
            // 유튜브 플레이 종료시
            if (e.data === 0) {
                me._playerStop('auto');
            }
        },

        /**
         * jPlayer 생성 및 플레이
         * 	@param {JSON} data
         *	@param {String} mp4 동영상 mp4 URL
         *	@param {String} webm 동영상 webm URL
         *	@param {String} ogg 동영상 ogg URL
         *	@param {String} poster 동영상 포스터 URL
         */
        _jplayerPlay: function (data) {
            var me = this,
                $btn = me.$btnPlay.eq(me.index),
                $videoWrap  = me.$videoWrap.eq(me.index),
                $player = me.$player.eq(me.index),
                $controls = me.$controls.eq(me.index),
                attrPlay = me.$btnPlay.eq(me.index).attr('data-play-type'),
                fullScreen = me.$btnPlay.eq(me.index).attr('data-fullscreen-id'),
                info = {"rtmpv": data.rtmpv, "m4v": data.mp4, "webmv": data.webm, "ogv": data.ogg, "poster": data.poster};


            for (var i in info) {
                if (info[i] === null || info[i] === undefined) {
                    delete info[i];
                }
            }

            // player 동작 멈추고 숨기기
            me.screenX = 0;
            me.screenY = 0;
            me._playerStop('');
            // 동영상 플레이
            $player.jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia",info).jPlayer("play");
                    $player.find('img').attr('alt', $player.parent().find('.d-poster > img').attr('alt'));
                },
                ended: function () {
                    me._playerStop('auto');
                },
                resize: function (e) {
                    me._playerResize();
                },
                swfPath: "/js/lib/jplayer",
                supplied: "rtmpv, m4v, webmv, ogv",
                solution: "flash, html",
                cssSelectorAncestor: "#"+fullScreen,
                cssSelector: {
                    seekBar: ".d-seekBar",
                    playBar: ".d-playBar",
                    mute: ".d-mute",
                    unmute: ".d-unmute",
                    volumeBar: ".d-volumeBar",
                    volumeBarValue: ".d-volumeBarValue",
                    currentTime: ".d-currentTime",
                    duration: ".d-duration"
                },
                wmode: "transparent",
                size: {
                    width: '100%',
                    height: '100%'
                },
                volume: 0.5,
                smoothPlayBar: true,
                keyEnabled: false
            });

            // 동영상 영역 마우스 오버에 대한 제어
            $player.on('mouseenter.player mouseleave.player mousemove.player mousestop.player',function (e) {
                var $btnPlay  = me.$btnPlay.eq(me.index);

                if ($btnPlay.attr('data-play') === 'T' && $btnPlay.attr('data-movie-type') === 'movie') {
                    switch(e.type) {
                        case 'mouseenter':
                            // 동영상 플레이 영역에서 마우스가 들어온 경우 Interval을 초기화한다.
                            clearInterval(me.mouseOutTimer);
                            me.mouseOutTimer = null;
                            break;
                        case 'mousemove':
                            if ((me.screenX > 0 && (me.screenX + 1) < e.screenX) || (me.screenY > 0 && (me.screenY + 1) < e.screenY)) {
                                me.screenX = e.screenX;
                                me.screenY = e.screenY;
                                // 동영상 플레이 영역에서 마우스 움직일 경우 버튼 계속 보여준다.
                                me._buttonControl({type: 'show'});
                            } else {
                                me.screenX = e.screenX;
                                me.screenY = e.screenY;
                            }
                            break;
                        case 'mouseleave':
                            // 동영상 플레이 영역에서 마우스가 빠진후 1.5초후에 버튼 SHOW/HIDE 함수 실행
                            me.mouseOutTimer = setTimeout(function () {
                                if ($btnPlay.attr('data-play') === 'T') {
                                    me._buttonControl({type: 'hide'});
                                }
                            }, 1500);
                            break;
                        case 'mousestop':
                            // 마우스가 1.5초 정지시에 컨트롤 영역을 숨긴다.
                            me._buttonControl({type: 'hide'});
                            break;
                        default:
                            break;
                    }
                }
            }).mousestop();
            $videoWrap.addClass('show').on('mousestop.player',function (e) {
                var $btnPlay  = me.$btnPlay.eq(me.index);

                if ($btnPlay.attr('data-play') === 'T' && $btnPlay.attr('data-movie-type') === 'movie') {
                    switch(e.type) {
                        case 'mousestop':
                            // 마우스가 1.5초 정지시에 컨트롤 영역을 숨긴다.
                            me._buttonControl({type: 'hide'});
                            break;
                        default:
                            break;
                    }
                }
            }).mousestop();
        },

        /**
         * 플레이어 컨트롤러 영역 디스플레이 관련 함수
         * @param {JSON} data
         *	@param {String} force 플레이어 컨트롤러 영역 강제 SHOW 옵션(show)
         */
        _buttonControl: function (data) {
            var me = this,
                $btn = me.$btnPlay.eq(me.index),
                $controls = me.$controls.eq(me.index);

            if (data.type === 'show') {
                $btn.fadeIn();
                $controls.fadeIn();
            } else if (data.type === 'hide') {
                $btn.fadeOut();
                $controls.fadeOut();
            }
        },

        /**
         * 플레이 Pause/Stop 함수
         * @param {String} action 플레이 Pause/Stop 옵션
         */
        _playerAction: function (action) {
            var me = this,
                $player = me.$player.eq(me.index),
                $videoWrap  = me.$videoWrap.eq(me.index),
                $btnPlay = me.$btnPlay.eq(me.index),
                $controls  = me.$controls.eq(me.index),
                $btnCaption  = me.$btnCaption.eq(me.index),
                $accessibility  = me.$accessibility.eq(me.index);

            // 버튼 동기화 (Play/Pause/Stop 버튼 클릭시 각각의 버튼 동기화)
            switch(action) {
                case 'play':
                    $videoWrap.removeClass('pause');
                    $btnPlay.removeClass('btn_play').addClass('btn_pause').find('.none').html($btnPlay.attr('data-pause-text'));
                    $controls.find('.btn_play').removeClass('btn_play').addClass('btn_pause').find('.none').html($btnPlay.attr('data-pause-text'));
                    $accessibility.find('.btn_play').removeClass('btn_play').addClass('btn_pause').find('.none').html($btnPlay.attr('data-pause-text'));
                    break;

                case 'pause':
                    $videoWrap.addClass('pause');
                    $btnPlay.removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    $controls.find('.btn_pause').removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    $accessibility.find('.btn_pause').removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    break;

                case 'stop':
                    $videoWrap.removeClass('pause');
                    $btnPlay.removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    $controls.find('.btn_pause').removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    $accessibility.find('.btn_pause').removeClass('btn_pause').addClass('btn_play').find('.none').html($btnPlay.attr('data-play-text'));
                    break;

                case 'mute':
                    me.muteText = $accessibility.find('.btn_mute').attr('data-unmute-text');
                    $accessibility.find('.btn_mute').removeClass('btn_mute').addClass('btn_unmute').find('.none').html(me.muteText);
                    break;

                case 'unmute':
                    me.muteText = $accessibility.find('.btn_unmute').attr('data-mute-text');
                    $accessibility.find('.btn_unmute').removeClass('btn_unmute').addClass('btn_mute').find('.none').html(me.muteText);
                    break;

                default:
                    break;
            }
            $player.jPlayer(action);
        },

        /**
         * 동영상 Resize시 Full/Down 버튼 변경 함수
         * @param
         */
        _playerResize: function () {
            var me = this,
                $videoWrap  = me.$videoWrap.eq(me.index),
                $controls  = me.$controls.eq(me.index);

            // 버튼 클릭시마다 처리하였으나 동영상 FULL 사이즈후 ESC로 원복시킬때 버튼이 변경되지 않아서 RESIZE시에 변경하는 것으로 처리
            if ($videoWrap.hasClass('jp-video-full')) {
                $controls.find('.d-fullDown').removeClass('btn_full').addClass('btn_small').find('.none').html($controls.find('.btn_small').attr('data-full-screen-text'));
            } else {
                $controls.find('.d-fullDown').removeClass('btn_small').addClass('btn_full').find('.none').html($controls.find('.btn_full').attr('data-down-screen-text'));
            }
        },

        /**
         * 동영상 종료 함수
         * @param {String} auto 자동중지일 경우는 Oject를 삭제하지 않고 유지
         */
        _playerStop: function (auto) {
            var me = this,
                attrPlay = me.$btnPlay.eq(me.index).attr('data-play-type'),
                $videoWrap  = me.$videoWrap.eq(me.index),
                $player = me.$player;

            if (auto !== 'auto') {
                // jPlayer일 경우 삭제
                try {
                    $player.jPlayer("destroy");
                } catch(e) {}

                // youtube일 경우 IE8에서 단순히 Dom만 제거하면 문제가 생겨서 처리 로직 추가
                if (typeof me.ytplayer === 'object' && me.ytplayer !== null) {
                    if (me.ytplayer.u) me.ytplayer.stopVideo();
                    $player.find('iframe').hide();
                    me.ytplayer.destroy();
                    me.ytplayer = null;
                }
                $player.find('iframe').attr('src','about:blank');
                $player.html('');

                me.$btnCaption.parent().removeClass('on').siblings().removeClass('show');
                me.$videoWrap.removeClass('show');
            }

            //me.$controls.eq(me.index).hide();
            me.$btnPlay.each(function (e, that) {
                var $that = $(that);
                /* 151123 수정 */
                if($that.hasClass('btn_play_Gear') || $that.hasClass('btn_play_Epi') || $that.hasClass('btn_play_che') || $that.hasClass('btn_play_joy') ||$that.hasClass('btn_play_life')){
                    $that.attr('data-play','F').removeClass('btn_pause').removeClass('btn_play').show().find('.none').html($that.attr('data-play-text')).show();
                }else{
                    $that.attr('data-play','F').removeClass('btn_pause').addClass('btn_play').show().find('.none').html($that.attr('data-play-text')).show();
                }
                /* //151123 수정 */
            });
        }
    });

    /**
     * FullImage 클래스<br />
     * // 옵션 <br />
     * @class
     * @name common.ui.FullImage
     * @extends common.ui.View
     */
    common.ui('FullImage', {
        bindjQuery:'fullImage',
        $statics: {
            ON_CLICK: 'click'
        },
        selectors: {
            image: '.d-fullImage'
        },

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._preloading();
            common.PubSub.on('windowResizeEnd', function (e) {
                me._resize();
            });
        },

        _preloading: function () {
            var me = this;

            me.$image.each(function (e, that) {
                var $that = $(that),
                    imageObj = new Image();

                if ($that.attr('data-image-src') !== undefined) {
                    $(that).attr('src', $that.attr('data-image-src'));
                }
            });
        },

        /**
         * 이미지 크기 변경 - 보여주는 영역의 width와 height보다 크게 설정 후 센터 정렬한다.
         *
         */
        _resize: function () {
            var me = this;

            me.$image.each(function (e, that) {
                var $that = $(that);
                me.ratio = parseFloat($that.attr('data-img-ratio'));
                me.defaultWidth = parseInt($that.attr('data-min-width'), 10);
                me.defaultHeight = parseInt($that.attr('data-min-height'), 10);

                //me.defaultWidth = $that.width();
                //me.defaultHeight = $that.height();

                if (me.ratio > 1) {
                    me.docWidth = ($(window).width() < me.defaultWidth) ? me.defaultWidth : $(window).width() + 50;
                    me.docHeight = ($(window).height() < me.defaultHeight) ? me.defaultHeight : $(window).height() + 50;
                    me.winRation = Math.round(me.docWidth / me.docHeight * 1000) / 1000;

                    if (me.docWidth > me.docHeight) {
                        me.docWidth = (me.ratio < me.winRation) ? me.docWidth : me.docHeight * me.ratio;
                        me.top = Math.abs((me.docWidth / me.ratio - me.docHeight) / 2);
                        $that.css({width:me.docWidth+'px', height:'auto', top:-me.top, left:0});
                    } else {
                        me.left = Math.abs((me.docHeight * me.ratio - me.docWidth) / 2);
                        $that.css({width:'auto', height:me.docHeight+'px', top:0, left:-me.left});
                    }
                } else {
                    me.docWidth = ($(window).width() < me.defaultWidth) ? me.defaultWidth : $(window).width() / 2 + 50;
                    me.docHeight = ($(window).height() < me.defaultHeight) ? me.defaultHeight : $(window).height() + 50;
                    me.winRation = Math.round(me.docWidth / me.docHeight * 1000) / 1000;

                    if (me.docWidth < me.docHeight) {
                        me.imgWidth = (me.ratio < me.winRation) ? me.docWidth : me.docHeight * me.ratio;
                        me.left = Math.abs((me.docHeight * me.ratio - me.docWidth) / 2);
                        $that.css({width:me.imgWidth+'px', height:'auto', top:0, left:-me.left});
                    } else {
                        me.top = Math.abs((me.docWidth * me.ratio - me.docHeight) / 2);
                        $that.css({width:me.docWidth+'px', height:'auto', top:-me.top, left:0});
                    }
                }

            });
        }
    });

    /**
     * OnScreen 클래스<br />
     * // 옵션 <br />
     * @class
     * @name common.ui.OnScreen
     * @extends common.ui.View
     */
    common.ui('OnScreen', {
        bindjQuery:'onScreen',
        selectors: {
            content: '.d-onScreen'
        },

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.$content.each(function (k, value) {
                me.top = me.$content.eq(k).position().top;
                me.$content.eq(k).attr('attr-on-view','F');
                if (me.$content.eq(k).css('position') === 'absolute') {
                    me.$content.eq(k).css({'top': me.top + 100, 'opacity': 0});
                } else {
                    me.$content.eq(k).css({position: 'relative', 'top': 100, 'opacity': 0});
                }
            });

            common.PubSub.on('scroll.trigger', function (e) {
                me._winScroll();
            });
        },

        _winScroll: function () {
            var me = this;

            onScreen = common.isOnScreen(me.$content, -100);
            if (onScreen.length > 0) {
                $.each(onScreen, function (k, value) {
                    me.top = me.$content.eq(value).position().top;
                    if ( me.$content.eq(value).attr('attr-on-view') == 'F') {
                        me.$content.eq(value).attr('attr-on-view','T');
                        if (me.$content.eq(value).css('position') === 'absolute') {
                            // Position이 Absolute인 경우
                            me.$content.eq(value).animate({
                                'top': me.top - 100,
                                'opacity': 1
                            }, 700);
                        } else {
                            // Position이 Absolute가 아닌 경우
                            me.$content.eq(value).css({position: 'relative', 'top': 100}).animate({
                                'top': 0,
                                'opacity': 1
                            }, 700, function () {
                                me.$content.eq(value).css({position: ''});
                            });
                        }
                    }
                });
            }
        }
    });

    /**
     * Placeholder 클래스<br />
     * // 옵션 <br />
     * @class
     * @name common.ui.Placeholder
     * @extends common.ui.View
     */
    common.ui('Placeholder', {
        bindjQuery:'placeholder',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
        },
        selectors: {
        },

        /**
         * 생성자
         * @param {String|Element|jQuery} el 해당 엘리먼트(노드, id, jQuery 어떤 형식이든 상관없다)
         * @param {Object} options 옵션값
         */
        initialize: function (el, options) {
            var me = this,
                is = 'placeholder' in common.tmpInput;

            if ( is ) { return; }

            if(me.supr(el, options) === false) { return; }
            me.placeholder = me.$el.attr('placeholder');
            me._foreColor = me.options.foreColor;

            var isPassword = me.$el.attr('type') === 'password';

            me.on('focusin click', function () {
                if ($.trim(this.value) === me.placeholder || !$.trim(this.value)) {
                    me.$el.removeClass(me._foreColor);
                    if(isPassword) {
                        me.$el.removeClass('placeholder');
                    }
                    this.value = '';
                }
            }).on('focusout', function () {
                if (this.value === '' || this.value === me.placeholder) {
                    if(isPassword) {
                        me.$el.val('').addClass('placeholder');
                    } else {
                        me.$el.val(me.placeholder).addClass(me._foreColor);
                    }
                }
            }).triggerHandler('focusout');
        },

        /**
         * placeholder 갱신(only ie9 이하)
         */
        update: function(){
            var me = this;
            me.$el.val(me.placeholder);
        },

        /**
         * 파괴자 : 자동으로 호출되지 않으므로, 필요할 때는 직접 호출해주어야 한다.
         */
        destroy: function () {
            var me = this;

            me.$el.removeData();
            me.supr();
        }
    });

    /**
     * SequnceModule 클래스<br />
     * // 옵션 <br />
     * options.stopAll: boolean	<br />
     * @class
     * @name common.ui.SequnceModule
     * @extends common.ui.View
     */
    common.ui('SequnceModule', {
        bindjQuery:'sequnceModule',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            stopAll: false
        },
        selectors: {
            content: '.d-seqContent',
            btnPlay : '.d-seqPlay'
        },

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }
            if(me.$el.hasClass('d-seqContent')) me.$content = me.$el;

            me.start = true;
            if (me.start) {
                me.start = false;
                switch (me.$content.attr('data-auto')) {
                    case 'FOCUS_LOOP' :
                        me._focusType(true);
                        break;

                    case 'FOCUS_ONCE' :
                        me._focusType(false);
                        break;

                    case 'BUTTON_LOOP' :
                        me._buttonType(true);
                        break;

                    case 'BUTTON_ONCE' :
                        me._buttonType(false);
                        break;

                    case 'FOCUS_GIF' :
                        me._focusGifType();
                        break;

                    case 'OVER_LOOP' :
                        me._overType(true);
                        break;

                    case 'OVER_ONCE' :
                        me._overType(true);
                        break;

                    default :
                        break;
                }
            }
        },

        _focusGifType: function (loop) {
            var me = this;

            me.$btnPlay.remove();
            me.$content.prop('data-play',true);

            common.PubSub.on('scroll.trigger', function (e) {
                me._focusGifPlay();
            });
        },

        _focusGifPlay: function () {
            var me = this;

            onScreen = common.isOnScreen(me.$content, me.$content.height());
            if (onScreen.length > 0) {
                if (me.$content.prop('data-play')) {
                    me.$content.prop('data-play',false);

                    if (common.browser.isIE) {
                        me.$content.find('img').remove();
                        me.$img = $('<img src="'+me.$content.attr('data-image-pattern')+'" alt="" style="display:block;">');
                        setTimeout(function () {
                            me.$img.appendTo(me.$content);
                        }, 0);
                    } else {
                        me.$content.find('img').attr('src',me.$content.attr('data-image-pattern'));
                    }
                }
            } else {
                me.$content.prop('data-play',true);
            }
        },

        _focusType: function (loop) {
            var me = this;

            me.$btnPlay.remove();
            me.$content.prop('data-play',true);

            common.PubSub.on('scroll.trigger', function (e) {
                me._focusPlay(loop);
            });

            $.each(me.$content, function (k, value) {
                common.createSequenceElement($(this), $(this).attr('data-image-pattern'), $(this).attr('data-image-max'));
            });
        },

        _focusPlay: function (loop) {
            var me = this;

            onScreen = common.isOnScreen(me.$content, me.$content.height());
            if (onScreen.length > 0) {
                if (me.$content.prop('data-play')) {
                    me.$content.prop('data-play',false);
                    /* 141017 - 시퀀스 프레임 수정 */
                    common.startSequenceElement(me.$content, { fps: 30, loop: loop, overlay: me.$content.attr('data-id'), onComplete: me._complete.bind(me)});
                }
            }
        },

        _buttonType: function (loop) {
            var me = this;

            $.each(me.$content, function (k, value) {
                common.createSequenceElement($(this), $(this).attr('data-image-pattern'), $(this).attr('data-image-max'));
            });

            // 플레이 버튼 이벤트 바인딩
            me.$el.on('click.Play', me.selectors.btnPlay, function (e) {
                e.preventDefault();
                var index = me.$btnPlay.index(this),
                    playText = ($(this).find('span').html() === 'STOP') ? 'PLAY' : $(this).find('span').html(),
                    stopText = ($(this).find('span').html() === 'PLAY') ? 'STOP' : $(this).find('span').html();

                if ($(this).hasClass('stop')) {
                    clearTimeout(me.timer);
                    me.timer= null;
                    me.$btnPlay.removeClass('stop');
                    $(this).attr('title',$(this).attr('data-play-text')).removeClass('stop').addClass('play').find('span').html(playText).end();
                    common.stopSequenceElement( me.$content.eq(index) );
                } else {
                    me.loop = (me.$content.eq(index).attr('data-auto') === 'BUTTON_LOOP') ? true : false;
                    if (me.options.stopAll) {
                        $.each(me.$btnPlay, function (k, value) {
                            playText = ($(value).find('span').html() === 'STOP') ? 'PLAY' : $(value).find('span').html(),
                                stopText = ($(value).find('span').html() === 'PLAY') ? 'STOP' : $(value).find('span').html();
                            $(value).removeClass('stop').addClass('play').attr('title',$(value).attr('data-play-text')).find('span').html(playText).end();
                        });
                        $(this).attr('title', $(this).attr('data-stop-text')).find('span').end().removeClass('play').addClass('stop').parent().activeRow('on');
                    } else {
                        $(this).attr('title', $(this).attr('data-stop-text')).find('span').html(stopText).end().removeClass('play').addClass('stop').parent().activeRow('on');
                    }
                    //me.timer = setTimeout(function () {
                    /* 141017 - 시퀀스 프레임 수정 */
                    common.startSequenceElement(me.$content.eq(index), {fps: 30, loop: loop, overlay: me.$content.attr('data-id'), onComplete: me._complete.bind(me)});
                    //}, 500);
                }
            });
        },

        _overType: function (loop) {
            var me = this;
            me.over = true;

            $.each(me.$content, function (k, value) {
                common.createSequenceElement($(this), $(this).attr('data-image-pattern'), $(this).attr('data-image-max'));
            });

            // 플레이 버튼 이벤트 바인딩
            me.$el.on('focusin.overSeq focusout.overSeq mouseenter.overSeq mouseleave.overSeq', 'a', function (e) {
                e.preventDefault();
                if (e.type === 'mouseleave' || e.type === 'focusout') {
                    me.over = true;
                    common.stopSequenceElement(me.$content);
                    common.createSequenceElement(me.$content, me.$content.attr('data-image-pattern'), me.$content.attr('data-image-max'));
                } else if ((e.type === 'mouseenter' || e.type === 'focusin') && me.over) {
                    me.over = false;
                    /* 141017 - 시퀀스 프레임 수정 */
                    common.startSequenceElement(me.$content, {fps: 30, loop: true, overlay: me.$content.attr('data-id'), onComplete: me._complete.bind(me)});
                }
            });
        },

        _complete: function () {
            var me = this,
                playText,
                stopText;

            if (!me.loop) {
                me.$btnPlay.removeClass('stop').addClass('play');
                $.each(me.$btnPlay, function (k, value) {
                    playText = ($(value).find('span').html() === 'STOP') ? 'PLAY' : $(value).find('span').html(),
                        stopText = ($(value).find('span').html() === 'PLAY') ? 'STOP' : $(value).find('span').html();
                    $(value).removeClass('stop').addClass('play').attr('title',$(value).attr('data-play-text')).find('span').html(playText).end();
                });
            }
        }
    });

    /**
     * WidthSlide 클래스<br />
     * // 옵션 <br />
     * options.delayTime: integer <br />
     * options.asMore: String <br />
     * @class
     * @name common.ui.WidthSlide
     * @extends common.ui.View
     */
    common.ui('WidthSlide', {
        bindjQuery:'widthSlide',
        defaults: {
            delayTime: 500,
            asMore: 'be_img'
        },
        selectors: {
            wrap: '.d-widthWrap',
            list: '.d-widthList',
            btnPrev: '.d-widthPrev',
            btnNext: '.d-widthNext'
        },
        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.isAnimation = true;
            //me.$btnPrev.prop('disabled', true);
            //me.$btnNext.prop('disabled', true);

            me.wrapWidth = me.$el.width();
            me.width = me.$el.attr('data-left');
            me.viewCount = Math.round(me.wrapWidth / me.width);
            me.listCount = me.$list.find('li').size();
            me.moveCount = me.listCount - me.viewCount;
            me.defalut = (me.$list.find('li').index(me.$list.find('li.on')) + 1) - me.viewCount;
            me.nowCount  = (me.defalut > 0) ? me.defalut : 0;

            if (me.viewCount < me.listCount) {
                me.$btnNext.addClass(me.options.asMore);

                me.$btnNext.on('click.next', function (e) {
                    if(me.isAnimation && me.$btnNext.hasClass(me.options.asMore)) {
                        me.isAnimation = false;
                        me._animate(++me.nowCount, me.options.delayTime);
                    }
                });

                me.$btnPrev.on('click.prev', function (e) {
                    if(me.isAnimation && me.$btnPrev.hasClass(me.options.asMore)) {
                        me.isAnimation = false;
                        me._animate(--me.nowCount, me.options.delayTime);
                    }
                });
            }

            // 초기 세팅
            me._animate(me.nowCount, 0);
        },
        /**
         * Object를 이동시키는 함수
         * @memberOf WidthSlide
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * widthSlide._animate(1, 500);
         */
        _animate: function (index, delayTime) {
            var me = this,
                posX = me.width *  -index;

            //me.$btnPrev.prop('disabled', false).addClass(me.options.asMore);
            //me.$btnNext.prop('disabled', false).addClass(me.options.asMore);
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);

            me.$list.stop(true, true).animate({
                'left': posX
            }, delayTime, function () {
                me.isAnimation = true;
                //@140930 파워 트레인의 년도가 작을 경우 be_img 클래스를 삭제함
                if (index == me.moveCount || me.moveCount < index) {
                    //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnNext.removeClass(me.options.asMore);
                    if(me.options.isreverse) me.$btnNext.addClass(me.options.asMore);
                }
                if (index == 0) {
                    //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnPrev.removeClass(me.options.asMore);
                    if(me.options.isreverse) me.$btnPrev.addClass(me.options.asMore);
                }
            });
        },

        _setPosition: function () {
            var me = this;
        }
    });

    /**
     * TechnologyModule 클래스<br />
     * // 옵션 <br />
     * options.delayTime: integer <br />		//애니메이션이 이동하는데 걸리는 시간 설정
     * options.step: integer <br />				//보여지는 컨텐츠 갯수
     * options.margin: integer <br />			//마진값
     *
     * @class
     * @name common.ui.TechnologyModule
     * @extends common.ui.View
     */
    common.ui('TechnologyModule', {
        bindjQuery:'technologyModule',
        defaults: {
            delayTime: 500,						//애니메이션 이동시간
            step: 5,
            margin: 32
        },
        maxWidth: 0,							//상위컨텐츠의 넓이
        selectors: {
            handler : '.d-handler',
            mask: '.d-mask',
            prev: '.d-prev',
            next: '.d-next',
            leftImg: '.d-left',
            rightImg: '.d-right',
            fullArea: '.d-fullArea',
            win: $(window)
        },
        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function(el, options) {
            var me = this;
            if(me.supr(el, options) === false) { return; }

            me.maxWidth = me.$fullArea.width();
            me.center = me.maxWidth / 2;

            me.$handler.css({'right': me.center});
            me.$mask.css({'width': me.center});
            me._addEvent();
        },

        /**
         * 이벤트 바인딩
         * @private
         */
        _addEvent: function () {
            var me = this,
                resizeTimer = null;

            //me._setDragEvent(me.$handler);
            //me.center = parseInt(me.$handler.css('right'),10);
            //이전 버튼을 눌렀을 경우
            me.$prev.on('click', function (event) {
                event.preventDefault();
                me.width = (parseInt(me.$handler.css('right'),10) > me.center) ? me.center + 'px' : me.defaults.margin + 'px';
                me._togglePosition(me.width, me.options.delayTime);
            });

            //다음 버튼을 눌렀을 경우
            me.$next.on('click', function (event) {
                event.preventDefault();
                me.width = (parseInt(me.$handler.css('right'),10) < me.center) ? me.center + 'px' : (me.$fullArea.width() - me.defaults.margin) + 'px';
                me._togglePosition(me.width, me.options.delayTime);
            });

            // 좌우 이동 버튼 클릭
            me.$handler.on('mousedown.moveTime keydown.moveTime', function (e) {
                var playHead = Math.round((me.$mask.width() / me.$fullArea.width()) * 100);
                if (e.type === "mousedown") {
                    me.$fullArea.css({"z-index":100});
                    me.mousedown = true;
                } else if (e.keyCode === 37) {								// 왼쪽 키
                    e.preventDefault();
                    me.width = (parseInt(me.$handler.css('right'),10) < me.center) ? me.center + 'px' : (me.$fullArea.width() - me.defaults.margin) + 'px';
                    me._togglePosition(me.width, me.options.delayTime);
                } else if (e.keyCode === 39) {								//오른쪽 키
                    e.preventDefault();
                    me.width = (parseInt(me.$handler.css('right'),10) > me.center) ? me.center + 'px' : me.defaults.margin + 'px';
                    me._togglePosition(me.width, me.options.delayTime);
                }
            });

            // 좌우 이동 버튼 클릭 후 마우스 위치 계산
            me.$fullArea.on('mousemove.moveTime', function (e) {
                e.preventDefault();
                var offset = $(this).offset();
                if (me.mousedown) {
                    me.width = me.$fullArea.width() - (e.clientX - offset.left);
                    me.width = ( me.width < me.defaults.margin ) ? me.defaults.margin : me.width;
                    me.width = ( me.width > me.$fullArea.width() - me.defaults.margin ) ? me.$fullArea.width() - me.defaults.margin : me.width;
                    me._togglePosition(me.width+'px', 0);
                }
            });

            // 마우스업 이벤트시
            common.PubSub.on('mouseupEvent', function (e) {
                e.preventDefault();
                if (me.mousedown) {
                    me.$fullArea.css({"z-index":0});
                    me.mousedown = false;
                }
            });
        },

        _togglePosition: function (prev, delayTime) {
            var me = this;

            me.$mask.stop(true, true).animate({
                'width': prev
            }, delayTime);

            me.$handler.stop(true, true).animate({
                'right': prev
            }, delayTime);
        }
    });

    /**
     * AudioModule 클래스<br />
     * // 옵션 <br />
     * options.asMore: String <br />
     *
     * @class
     * @name common.ui.AudioModule
     * @extends common.ui.View
     */
    common.ui('AudioModule', {
        bindjQuery:'audioModule',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            asMore: 'be_img'
        },
        selectors: {
            list: '.d-list',
            player : '#jquery_jplayer_1',
            btnPlay : '.d-audioPlay',
            btnPrev : '.d-audioPrev',
            btnNext : '.d-audioNext',
            seqContent: '.d-seqContent'
        },

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.tabs = 0;
            me.max = me.$list.eq(0).find('li').size() - 1;
            me.index = 0;
            me._playerStop();

            // 플레이 버튼 이벤트 바인딩
            me.$el.on('click.play', me.selectors.btnPlay, function (e) {
                e.preventDefault();
                var $btnPlay = $(this),
                    info = {"mp3": $btnPlay.attr('data-audio-mp3')};

                me.index = me.$btnPlay.index($btnPlay);
                if ($btnPlay.hasClass('play')) {
                    me._playerStop(me.$player);
                    $btnPlay.removeClass('play');
                    $btnPlay.attr('title',$btnPlay.attr('data-play-text'));
                } else {
                    me._playerStop(me.$player);
                    me.$player.jPlayer({
                        ready: function (event) {
                            $(this).jPlayer("setMedia", info).jPlayer('play');
                        },
                        swfPath: "/js/lib/jplayer",
                        supplied: "mp3",
                        wmode: "window",
                        smoothPlayBar: false,
                        keyEnabled: false,
                        playing: function () {
                            //$btnPlay.addClass('play');
                            //$btnPlay.attr('title',$btnPlay.attr('data-stop-text'));
                        },
                        ended: function () {
                            common.stopSequenceElement(me.$seqContent);
                            $btnPlay.removeClass('play');
                            $btnPlay.attr('title',$btnPlay.attr('data-play-text'));
                        }
                    });
                    me.$list.find('li').eq(me.index).activeRow('on');
                    me.$btnPlay.eq(me.index).attr('title',$btnPlay.attr('data-stop-text')).activeRow('play');
                    common.createSequenceElement(me.$seqContent, me.$seqContent.attr('data-image-pattern'), me.$seqContent.attr('data-image-max'));
                    common.startSequenceElement(me.$seqContent, { fps: 30, loop: true, overlay: me.$seqContent.attr('data-id')});
                }
            });

            // 이전 버튼 이벤트 바인딩
            me.$el.on('click.Prev', me.selectors.btnPrev, function (e) {
                e.preventDefault();
                me.index = (me.index - 1 < 0) ? me.$list.eq(me.tabs).find('li').size() - 1 : me.index - 1;
                me._playerStop();

            });

            // 다음 버튼 이벤트 바인딩
            me.$el.on('click.Next', me.selectors.btnNext, function (e) {
                e.preventDefault();
                me.index = (me.index + 1 < me.$list.eq(me.tabs).find('li').size()) ? me.index + 1 : 0;
                me._playerStop();
            });

            // 마우스업 이벤트시
            common.PubSub.on('audioStop', function (e) {
                e.preventDefault();
                me.index = 0;
                me.tabs = (me.tabs) ? 0 : 1;
                me._playerStop();
            });
        },
        /**
         * 플레이중인 audio를 정지
         * @memberOf AudioModule
         * @name _playerStop
         * @private
         *
         * @example
         * audioModule._playerStop();
         */
        _playerStop: function () {
            var me = this;
            // 클래스 제어
            me.$btnPlay.removeClass('play');
            me.$list.eq(me.tabs).find('li').eq(me.index).activeRow('on');
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);
            //if (me.index === 0) me.$btnPrev.removeClass(me.options.asMore);
            //if (me.index === me.max) me.$btnNext.removeClass(me.options.asMore);

            // 플레이어 제거
            try {
                me.$player.jPlayer("destroy");
            } catch(e) {}
            common.stopSequenceElement(me.$seqContent);
            common.createSequenceElement(me.$seqContent, me.$seqContent.attr('data-image-pattern'), me.$seqContent.attr('data-image-max'));
        }
    });

    /**
     * SlideModule 클래스<br />
     * // 옵션 <br />
     * options.width: integer <br />
     * options.index: integer	<br />
     * options.thumb: interger <br />
     * options.isAnimation: boolean 	애니메이션이 동작중인지 여부<br />
     * options.delayTime: integer 	animation delay time<br />
     * options.poistion: String <br />
     * options.asMore: String 			다음, 이전 이미지가 있을경우 적용되는 클래스명<br />
     * options.isreverse: boolean <br />
     * @class
     * @name common.ui.SlideModule
     * @extends common.ui.View
     */
    common.ui('SlideModule', {
        bindjQuery:'SlideModule',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            width: 0,
            index: 0,
            //width: 960,
            thumb: 100,
            isAnimation: true,						//애니메이션이 동작중인지 여부
            delayTime: 700,						//animation delay time
            position: 'relative',
            asMore: 'be_img',						//다음, 이전 이미지가 있을경우 적용되는 클래스명
            isreverse: false,
            easing: 'easeOutQuad'
        },
        selectors: {
            list: '.d-list',							//slide의 그룹
            slide: '.d-slide',						//클릭에 대한 이벤트가 적용되는 요소
            indicator: '.d-indicator',
            btnPrev: '.d-prev',					//이전버튼
            btnNext: '.d-next',					//다음버튼
            thumb: '.d-thumbnail',
            numCount: '.d-num-count',		//해당 태그가 있을시 카운팅을 시작함
            dimLeft: '.dim_left',
            dimRight: '.dim_right',
            image: '.d-image'
        },

        /**
         * Object들의 좌표값을 세팅
         * @memberOf SlideModule
         * @name _setWidth
         * @private
         *
         * @example
         * slideModule._setWidth();
         */
        _setWidth: function () {
            var me = this;
            me.options.width = (me.options.width == 0) ? me.$el.width() : me.options.width;
            me.options.position = me.$slide.eq(0).css('position');

            me.$bg = me.$el.find('.bg');

            me.$slide.each(function (idx, cell) {
                var $this = $(this);
                $this.css({
                    //left: (idx*me.options.width)-(me.options.width*me.options.index)
                    left: idx*me.options.width
                });
            });

            me.$thumb.each(function (idx, cell) {
                var $this = $(this);
                $this.css({
                    left: idx*me.options.thumb
                });
            });

            if (me.$slide.size() == 0) {
                me.$btnNext.removeClass(me.options.asMore);
                if(me.options.isreverse) me.$btnNext.addClass(me.options.asMore);
                me.$dimRight.addClass('end');
            }

            me.$btnPrev.removeClass(me.options.asMore);
            if(me.options.isreverse) me.$btnPrev.addClass(me.options.asMore);
            me.$dimLeft.addClass('end');

            //최초 options.index 값이 있을 경우 해당 좌표로 이동 @141007
            me._animate(me.options.index, 0, function () {});
        },

        /**
         * Object를 이동시키는 함수
         * @memberOf SlideModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         * @param {function} callback 이벤트 처리후 실행시킬 callback함수
         *
         * @example
         * slideModule._animate(1, 500, function () {alert(1);});
         */
        _animate: function (index, delayTime, callback) {
            var me = this;

            // 슬라이드시에 동영상 플레이어 중지
            common.PubSub.trigger('playerStop');

            //me.$btnPrev.prop('disabled', false).addClass(me.options.asMore);
            //me.$btnNext.prop('disabled', false).addClass(me.options.asMore);
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);
            if(me.options.isreverse){
                me.$btnPrev.removeClass(me.options.asMore);
                me.$btnNext.removeClass(me.options.asMore);
            }
            me.$dimLeft.removeClass('end');
            me.$dimRight.removeClass('end');

            //@141007	//작은 이미지를 큰이미지로 교체
            if(me.$image.size() > 0){
                me.$image.eq(index-1).attr('src', me.$image.eq(index-1).attr('data-fullimage-src'));
                me.$image.eq(index).attr('src', me.$image.eq(index).attr('data-fullimage-src'));
                me.$image.eq(index+1).attr('src', me.$image.eq(index+1).attr('data-fullimage-src'));
            }

            me.$slide.each(function (idx, cell) {
                var $this = $(this),
                    posX = (idx*me.options.width)-(me.options.index*me.options.width);

                $this.stop(true, true).animate({
                    'left': posX
                }, delayTime, me.options.easing, function () {
                    me.options.isAnimation = true;
                    me.$list.removeClass('on').eq(me.options.index).addClass('on');

                    if (index === me.$slide.size() -  1) {
                        //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                        me.$btnNext.removeClass(me.options.asMore);
                        if(me.options.isreverse) me.$btnNext.addClass(me.options.asMore);
                        me.$dimRight.addClass('end');
                    }
                    if (index === 0) {
                        //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
                        me.$btnPrev.removeClass(me.options.asMore);
                        if(me.options.isreverse) me.$btnPrev.addClass(me.options.asMore);
                        me.$dimLeft.addClass('end');
                    }
                });

                if(idx+1 == me.$slide.size() && callback){
                    setTimeout(function () {
                        callback.call(me);
                        me.$numCount.text(me.options.index+1);			//태그가 있을시 값 교체
                    }, me.options.delayTime);
                }
            });

            if (me.$bg.size() > 0) me.$bg.fadeOut(me.options.delayTime, me.options.easing).eq(index).fadeIn(me.options.delayTime, me.options.easing);
        },

        /**
         * 내부 이벤트 바인딩용
         * @memberOf SlideModule
         * @name _resize
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * slideModule._resize(index, delayTime);
         */
        _resize: function (index, delayTime) {
            var me = this;

            me.options.width = me.$el.width();

            me.$slide.each(function (idx, cell) {
                var $this = $(this),
                    posX = (idx*me.options.width)-(me.options.index*me.options.width);

                $this.stop(true, true).animate({
                    'left': posX
                }, 0);
            });
        },

        /**
         * 내부 이벤트 바인딩용
         * @memberOf SlideModule
         * @name _bindEvent
         * @private
         *
         * @example
         * slideModule._bindEvent();
         */
        _bindEvent: function () {
            var me = this,
                //@play중이 audio 중지
                checkAudio = function () {
                    if(me.options.skipPadding == true){
                        var $audioPlay = me.$slide.eq(me.options.index).find('.d-audioPlay');
                        if($audioPlay.hasClass('play') == true) $audioPlay.trigger('click.play');
                    }
                };

            //인디게이터 클릭시
            me.on('click.indicator', me.selectors.indicator, function (e) {
                e.preventDefault();
                me.options.index = me.$indicator.index(this);
                me._animate(me.options.index, me.options.delayTime);
            });

            //섬네일 클릭시
            me.on('click.thumb', me.selectors.thumb, function (e) {
                e.preventDefault();
                me.options.index = me.$thumb.index(this);
                me._animate(me.options.index, me.options.delayTime);
            });

            me.$btnNext.on('click.next', function (e) {
                if(me.options.isAnimation && me.options.index < (me.$slide.size() - 1)) {
                    me.options.isAnimation = false;
                    checkAudio();
                    me._animate(++me.options.index, me.options.delayTime, function () {});
                }
            });

            me.$btnPrev.on('click.prev', function (e) {
                if(me.options.isAnimation && me.options.index > 0) {
                    me.options.isAnimation = false;
                    checkAudio();
                    me._animate(--me.options.index, me.options.delayTime, function () {});
                }
            });

            common.PubSub.on('resize.trigger', function () {
                me._resize();
            });
        },
        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._setWidth();			//너비값 ( 포지션 ) 세팅
            me._bindEvent();
        }
    });

    /**
     * EdgeSlideModule 클래스<br />
     * // 옵션 <br />
     * options.width: integer <br />
     * options.autoFocus: String	<br />
     * options.delayTime: integer	<br />
     * options.asMore: String	<br />
     * options.isreverse: boolean	<br />
     * @class
     * @name common.ui.EdgeSlideModule
     * @extends common.ui.View
     */
    common.ui('EdgeSlideModule', {
        bindjQuery:'edgeSlideModule',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            width: 0,
            autoFocus: 'F',
            delayTime: 700,
            asMore: 'be_img',
            isreverse: false
        },
        selectors: {
            list: '.d-list',			//slide의 그룹
            slide: '.d-slide',		//클릭에 대한 이벤트가 적용되는 요소
            btnChange: '.d-change',
            btnPlay: '.d-videoPlay',
            btnFull: '.d-showFull',
            btnPrev: '.d-prev',				//이전버튼
            btnNext: '.d-next',				//다음버튼
            txtIndex: '.d-index-count',
            txtMax: '.d-max-count',
            image: '.d-image'
        },
        /**
         * Object들의 좌표값을 세팅
         * @memberOf EdgeSlideModule
         * @name _setWidth
         * @private
         *
         * @example
         * edgeSlideModule._setWidth();
         */
        _setWidth: function () {
            var me = this;

            me.options.width = (me.options.width === 0) ? me.$el.width() : me.options.width;

            me.$slide.each(function (idx, cell) {
                var $this = $(this);
                $this.css({
                    left: idx * me.options.width
                });
            });

            if (me.max === 0) {
                //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                me.$btnNext.removeClass(me.options.asMore);
                if(me.options.isreverse) me.$btnNext.addClass(me.options.asMore);
            }
            //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
            me.$btnPrev.removeClass(me.options.asMore);
            if(me.options.isreverse) me.$btnPrev.addClass(me.options.asMore);

            me._animate(me.index, 0);
        },
        /**
         * Object를 이동시키는 함수
         * @memberOf EdgeSlideModule
         * @name _animate
         * @private
         *
         * @param {integer} add
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * edgeSlideModule._animate(1, 500);
         */
        _animate: function (add, delayTime) {
            var me = this,
                cssX,
                posX,
                i;

            // 슬라이드시에 동영상 플레이어 중지
            common.PubSub.trigger('playerStop');

            me.first = ((me.index - 2) < 0) ? 0 : me.index - 2;
            me.last = ((me.index + 2) > me.max) ? me.max : me.index + 2;

            //me.$btnPrev.prop('disabled', false).addClass(me.options.asMore);
            //me.$btnNext.prop('disabled', false).addClass(me.options.asMore);
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);


            if(me.options.isreverse){
                me.$btnPrev.removeClass(me.options.asMore);
                me.$btnNext.removeClass(me.options.asMore);
            }

            for (i = me.first; i <= me.last; i++) {
                cssX = (i * me.options.width) - ((me.index) * me.options.width);
                posX = (i * me.options.width) - ((me.index + add) * me.options.width);

                me.$slide.eq(i).stop(true, true).css({'left':cssX}).animate({
                    'left': posX
                }, delayTime, function () {
                    me.isAnimation = true;
                    me.$txtIndex.html(me.index+1);
                    me.$list.removeClass('on').eq(me.index).addClass('on');
                    if (me.index === me.max) {
                        //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                        me.$btnNext.removeClass(me.options.asMore);
                        if(me.options.isreverse) me.$btnNext.addClass(me.options.asMore);
                    }
                    if (me.index === 0) {
                        //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
                        me.$btnPrev.removeClass(me.options.asMore);
                        if(me.options.isreverse) me.$btnPrev.addClass(me.options.asMore);
                    }
                });
            }

            me.index = me.index + add;
            if (!me.$el.hasClass('thumb')) me._fullImage();
        },
        /**
         * 화면크기가 변동 될 경우 해상도에 따라 object들의 좌표를 이동
         * @memberOf EdgeSlideModule
         * @name _resize
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * edgeSlideModule._resize(1, 500);
         */
        _resize: function (index, delayTime) {
            var me = this;

            me.options.width = me.$el.width();

            me.$slide.each(function (idx, cell) {
                var $this = $(this),
                    posX = (idx*me.options.width)-(me.index*me.options.width);

                $this.stop(true, true).animate({
                    'left': posX
                }, 0);
            });
        },
        /**
         * 내부 이벤트 바인딩용
         * @memberOf EdgeSlideModule
         * @name _bindEvent
         * @private
         *
         * @example
         * edgeSlideModule._bindEvent();
         */
        _bindEvent: function () {
            var me = this;

            me.$btnNext.on('click.next', function (e) {
                if(!me.isAnimation || me.index === me.max) return;
                me.isAnimation = false;
                me._animate(1, me.options.delayTime);
            });

            me.$btnPrev.on('click.prev', function (e) {
                if(!me.isAnimation || me.index === 0) return;
                me.isAnimation = false;
                me._animate(-1, me.options.delayTime);
            });

            me.$btnChange.on('click.change', function (e) {
                e.preventDefault();
                var type = me.$btnChange.attr('data-list-type'),
                    thumbText = me.$btnChange.attr('data-thumb-text'),
                    listText = me.$btnChange.attr('data-list-text');

                if (type === 'list') {
                    me._fullImage();
                    me.$btnChange.attr('data-list-type','thumb').find('.none').html(thumbText);
                } else {
                    me.$btnChange.attr('data-list-type','list').find('.none').html(listText);
                }
                me.$el.toggleClass('thumb');
                common.PubSub.trigger('playerStop');
            });

            me.$btnFull.on('click.full', function (e) {
                e.preventDefault();
                var type = me.$btnChange.attr('data-list-type'),
                    thumbText = me.$btnChange.attr('data-thumb-text'),
                    listText = me.$btnChange.attr('data-list-text');

                me.index = me.$btnFull.index($(this));
                me._fullImage();

                //me.$btnPrev.prop('disabled', false).addClass(me.options.asMore);
                //me.$btnNext.prop('disabled', false).addClass(me.options.asMore);
                me.$btnPrev.addClass(me.options.asMore);
                me.$btnNext.addClass(me.options.asMore);

                if (me.index === 0) {
                    //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnPrev.removeClass(me.options.asMore);
                }
                if (me.index === me.max) {
                    //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnNext.removeClass(me.options.asMore);
                }

                if (me.options.autoFocus === 'T') $('body, html').animate({scrollTop:me.$el.find('.d-setScreen').offset().top}, 500);
                me.$btnChange.attr('data-list-type','list').find('.none').html(thumbText);
                me.$slide.css({left:'10000px'}).eq(me.move1).css({left: -me.options.width+'px'}).end().eq(me.move2).css({left: me.options.width+'px'}).end().eq(me.index).css({left:'0px'});
                me.$list.removeClass('on').eq(me.index).addClass('on');
                me.$el.toggleClass('thumb');
            });

            common.PubSub.on('resize.trigger', function () {
                me._resize();
            });
        },
        /**
         * 큰이미지일경우 이미지 치환
         * @memberOf EdgeSlideModule
         * @name _fullImage
         * @private
         *
         * @example
         * edgeSlideModule._fullImage();
         */
        _fullImage: function () {
            var me = this,
                i;

            me.move1 = ((me.index - 1) < 0) ? 0 : me.index - 1;
            me.move2 = ((me.index + 1) > me.max) ? me.max : me.index + 1;

            // 이미지 FULL 이미지로 교체
            me.$image.eq(me.move1).attr('src', me.$image.eq(me.move1).attr('data-fullimage-src'));
            me.$image.eq(me.move2).attr('src', me.$image.eq(me.move2).attr('data-fullimage-src'));
            me.$image.eq(me.index).attr('src', me.$image.eq(me.index).attr('data-fullimage-src'));
        },
        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.index = 0;
            me.isAnimation = true;
            me.max = me.$slide.size() - 1;
            me.$txtMax.html(me.max+1);

            //if (!me.$el.hasClass('thumb')) me._fullImage();

            if (!me.$el.hasClass('thumb')) {
                me._fullImage();
                me.$btnChange.attr('data-list-type','thumb').find('.none').html(me.$btnChange.attr('data-thumb-text'));
            } else {
                me.$btnChange.attr('data-list-type','list').find('.none').html(me.$btnChange.attr('data-list-text'));
            }

            me._setWidth();			//너비값 ( 포지션 ) 세팅
            me._bindEvent();
        }
    });

    /**
     * Cascade 클래스<br />
     * // 옵션 <br />
     * options.className: String <br />
     * options.type: String	<br />
     * @class
     * @name common.ui.Cascade
     * @extends common.ui.View
     */
    common.ui('Cascade', {
        bindjQuery:'cascade',
        $statics: {
            ON_CLICK: 'click'
        },
        defaults: {
            className: 'd-none',					//치환될 클래스명
            type: null								//resizeHeight(클릭후 스크롤 이동), self(자기자신에 대한 toggleClass('on'))
        },
        selectors: {
            list: '.d-list',							//slide의 그룹
            clickable: '.d-clickable',				//클릭할 수 있는 요소
            slide: '.d-slide',						//클릭에 대한 이벤트가 적용되는 요소
            btnExps: '.d-btnExps'
        },
        /**
         * childNode가 있고 아무 스크롤 변동이 없을때
         * @memberOf Cascade
         * @name _defaultFunc
         * @private
         *
         * @param {Object} $selectedCell 선택된 슬라이드 object
         *
         * @example
         * cascade._defaultFunc($selectedCell);
         */
        _defaultFunc: function ($selectedCell) {
            var me = this;
            $selectedCell.toggleClass(me.options.className);
            me.$slide.not($selectedCell).addClass(me.options.className);
        },
        /**
         * childNode가 있고 선택후 스크롤의 위치가 가변적일때
         * @memberOf Cascade
         * @name _resizeHeight
         * @private
         *
         * @param {Object} $selectedCell 선택된 슬라이드 object
         * @param {Integer} idx 리스트의 index값
         *
         * @example
         * cascade._reiszeHeight($selectedCell, idx);
         */
        _resizeHeight: function ($selectedCell, idx) {
            var me = this,
                height = parseInt($selectedCell.height(),10);

            me.$list.not(me.$list.eq(idx).addClass('on')).removeClass('on');
            me.top = (me.$clickable.eq(0).children().eq(0).offset().top)-(me.$list.eq(idx).offset().top);
            me.$slide.eq(idx).css({'margin-top':me.top+'px'});

            var $htmlNbody = $('html, body');
            //if($htmlNbody.scrollTop() == 0) return;
            $htmlNbody.stop(true, true).animate({
                'scrollTop': me.$el.offset().top
            }, 500);
        },
        /**
         * childNode가  없고 자기 자신만 toggle될때
         * @memberOf Cascade
         * @name _selfFunc
         * @private
         *
         * @param {Object} $selectedCell 선택된 슬라이드 object
         *
         * @example
         * cascade._selfFunc($selectedCell);
         */
        _selfFunc: function ($selectedCell) {
            var me = this;
            $selectedCell.toggleClass('on');
        },
        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._bindEvent();
        },
        /**
         * 내부 이벤트 바인딩용
         * @memberOf Cascade
         * @name _bindEvent
         * @private
         *
         * @example
         * cascade._bindEvent();
         */
        _bindEvent: function () {
            var me = this,
                clickable = me.selectors.list+' a';

            switch (me.options.type) {
                case 'resizeheight':
                    clickable = me.selectors.list+' a.d-clickable';
                    break;
                case 'self':
                    clickable = me.$el;
                    break;
            }


            me.$el.on('click.list', clickable, function (e) {
                e.preventDefault();
                var $this = $(this),
                    idx = me.$list.index($this.closest(me.selectors.list)),
                    $selectedCell = me.$slide.eq(idx);

                switch (me.options.type) {
                    case 'resizeheight':
                        me._resizeHeight($selectedCell, idx);
                        break;
                    case 'self':
                        $selectedCell = me.$el;
                        me._selfFunc($selectedCell);
                        break;
                    default:
                        me._defaultFunc($selectedCell);
                        break;
                }
            });

            me.$el.on('click.list', me.selectors.btnExps, function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('on');
            });

            //me.$clickable.eq(0).trigger('click.list');
        }
    });

    /**
     * RelateModule 클래스<br />
     * // 옵션 <br />
     * options.delayTime: integer <br />
     * options.asMore: String <br />
     * options.isFullType: Boolean <br />
     * options.index: 처음 시작시 보여질 index <br/>
     * options.moveCount: Integer <br />
     * options.width: String '0~100%' <br />
     * options.easing: String <br />
     * @class
     * @name common.ui.RelateModule
     * @extends common.ui.View
     */
    common.ui('RelateModule', {
        bindjQuery:'relateModule',
        defaults: {
            delayTime: 500,
            asMore: 'be_img',
            isFullType: true,
            moveCount: 4,
            index: 0,
            width: 0,
            easing: 'easeInOutCubic'
        },
        selectors: {
            wrap: '.d-wrap',
            list: '.d-list',
            slide: '.d-slide',
            btnPrev: '.d-prev',
            btnNext: '.d-next',
            child: '.d-slide>'
        },
        _isPercentage: false,
        _isAnimation: true,

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.index = 1;
            me.move = 0;
            me.totalCount = me.$slide.find('li').size();
            me._isPercentage = isNaN(me.options.width);
            me.options.width = (me._isPercentage == true ? me.options.width.substring(0, me.options.width.length - 1) : me.options.width);

            if(me._isPercentage == true){
                me.$slide.width((me.$child.size() + 1) * 100 / Math.round(me.$list.width() / me.$child.width())+'%');
                me._totalPageCount = Math.ceil((me.$child.size() * me.$child.width()) / (me.$list.width() / (100 / me.options.width)));
            }else{
                me.$slide.width((me.$child.size() + 1) * me.options.width);
                me._totalPageCount = Math.floor(me.$slide.width() / me.options.width);
            }

            me._animate(me.options.index, 0);
            me._bindEvent();
        },

        /**
         * 이벤트 바인딩
         * @memberOf RelateModule
         * @name _bindEvent
         * @private
         *
         * @example
         * RelateModule._bindEvent();
         */
        _bindEvent: function () {
            var me = this;

            me.$btnNext.on('click.next', function (e) {
                //if(me.$btnNext.prop('disabled') == true || me._isAnimation == false) return;
                if (me._isAnimation == false || !me.$btnNext.hasClass(me.options.asMore)) return;
                if (me.options.isFullType) {
                    if ((me.totalCount - ((me.index * me.options.moveCount) + me.options.moveCount)) > 0) {
                        me.move = me.index * me.options.moveCount;
                        me.index++;
                    } else {
                        me.move = me.move + (me.totalCount - (me.index * me.options.moveCount));
                        me.index++;
                    }
                } else {
                    me.move = me.move + me.options.moveCount;
                }
                me._animate(me.move, me.options.delayTime);
            });

            me.$btnPrev.on('click.prev', function (e) {
                //if(me.$btnPrev.prop('disabled') == true || me._isAnimation == false) return;
                if (me._isAnimation == false || !me.$btnPrev.hasClass(me.options.asMore)) return;
                if (me.options.isFullType) {
                    if ((me.move - me.options.moveCount) < 0) {
                        me.move = 0;
                        me.index--;
                    } else {
                        me.move = me.move - me.options.moveCount;
                        me.index--;
                    }
                } else {
                    me.move = me.move - me.options.moveCount;
                }
                me._animate(me.move, me.options.delayTime);
            });
        },

        /**
         * Object를 이동시키는 함수
         * @memberOf RelateModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * RelateModule._animate(1, 500);
         */
        _animate: function (index, delayTime) {
            var me = this,
                posX = (me.options.width * index) * -1,
                $last = me.$slide.children().last();

            if(me._isAnimation == false) return;
            me._isAnimation = false;

            //me.$btnPrev.prop('disabled', false).addClass(me.options.asMore);
            //me.$btnNext.prop('disabled', false).addClass(me.options.asMore);
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);

            posX = (me._isPercentage ? posX+'%' : posX);
            me.$slide.stop(true, true).animate({
                left: posX
            }, delayTime, me.options.easing, function () {
                if(me.move == 0){
                    //me.$btnPrev.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnPrev.removeClass(me.options.asMore);
                }
                if(($last.offset().left+$last.width()) <= me.$list.offset().left+me.$list.width()){
                    //me.$btnNext.prop('disabled', true).removeClass(me.options.asMore);
                    me.$btnNext.removeClass(me.options.asMore);
                }
                me._isAnimation = true;
            });
        }
    });

    /**
     * AjaxRelateModule 클래스<br />
     * // 옵션 <br />
     * options.delayTime: integer <br />
     * options.asMore: String <br />
     * options.isFullType: Boolean <br />
     * options.moveCount: Integer <br />
     * options.index: 처음 시작시 보여질 index <br/>
     * options.width: String '0~100%' <br />
     * options.easing: String <br />
     * @class
     * @name common.ui.AjaxRelateModule
     * @extends common.ui.View
     */
    common.ui('AjaxRelateModule', {
        bindjQuery:'ajaxRelateModule',
        defaults: {
            delayTime: 500,
            asMore: 'be_img',
            isFullType: true,
            moveCount: 5,
            index: 0,
            width: 0,
            easing: 'easeInOutCubic'
        },
        selectors: {
            wrap: '.d-wrap',
            list: '.d-list',
            slide: '.d-slide',
            btnPrev: '.d-prev',
            btnNext: '.d-next',
            child: '.d-slide>'
        },
        _isPercentage: false,
        _isAnimation: true,

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._init();
            me._bindEvent();

        },

        _init: function () {
            var me = this;

            me.url = me.$el.attr('data-ajax-url');
            me.page = parseInt(me.$el.attr('data-now-page'),10);
            me.maxCount = parseInt(me.$el.attr('data-max-count'),10);

            me.minLoad = ((me.page - 1) < 1) ? 1 : me.page - 1;
            me.maxLoad = ((me.page + 1) > me.maxCount) ? me.maxCount : me.page + 1;

            me.$el.attr('data-min-load', me.minLoad);
            me.$el.attr('data-max-load', me.maxLoad);

            // 최초 로드시 로드 페이지에 따라 서버에서 추가적인 데이터를 준다.
            $.ajax({
                type: 'get',
                url: me.url,
                //url: '/html/ko/normal/gr/GR11.11_first.html',
                cache: false,
                data: {page:me.page, first:'T'},
                dataType: 'html',
                success: function( html ) {
                    me.$slide.append(html);
                    me.updateSelectors();

                    me.totalCount = me.$slide.find('li').size();
                    me._isPercentage = isNaN(me.options.width);
                    me.options.width = (me._isPercentage == true ? me.options.width.substring(0, me.options.width.length - 1) : me.options.width);

                    if (me._isPercentage == true) {
                        me.$slide.width((me.$child.size() + 1) * 100 / Math.round(me.$list.width() / me.$child.width())+'%');
                        me._totalPageCount = Math.ceil((me.$child.size() * me.$child.width()) / (me.$list.width() / (100 / me.options.width)));
                    } else {
                        me.$slide.width((me.$child.size() + 1) * me.$child.width());
                        me._totalPageCount = Math.floor(me.$slide.width() / me.options.width);
                    }

                    if (me.page === 1 ) {
                        me._animate(me.options.index, 0);
                    } else {
                        me._animate(me.options.moveCount, 0);
                    }

                    me._btnControl();
                }
            });
        },

        _getAjax: function () {
            var me = this;

            if ((me.minLoad === me.page && (me.minLoad - 1) > 0) || (me.maxLoad === me.page && (me.maxLoad + 1) <= me.maxCount)) {

                if (parseInt(me.$el.attr('data-min-load'),10) === me.page) {
                    me.prev = true;
                    me.call = me.minLoad = me.minLoad - 1;
                    me.$el.attr('data-min-load', me.minLoad);
                } else {
                    me.prev = false;
                    me.call = me.maxLoad = me.maxLoad + 1;
                    me.$el.attr('data-max-load', me.maxLoad);
                }

                $.ajax({
                    type: 'get',
                    url: me.url,
                    cache: false,
                    data: {page:me.call, first:'F'},
                    dataType: 'html',
                    success: function( html ) {
                        (me.prev) ? me.$slide.prepend(html): me.$slide.append(html);

                        me.updateSelectors();
                        me.totalCount = me.$slide.find('li').size();
                        if (me._isPercentage == true) {
                            me.$slide.width((me.$child.size() + 1) * 100 / Math.round(me.$list.width() / me.$child.width())+'%');
                            me._totalPageCount = Math.ceil((me.$child.size() * me.$child.width()) / (me.$list.width() / (100 / me.options.width)));
                        } else {
                            me.$slide.width((me.totalCount + 1) * me.options.width);
                            me._totalPageCount = Math.floor(me.$slide.width() / me.options.width);
                        }

                        // PREV일 경우 위치 이동 (앞쪽에 두기 위해)
                        (me.prev) ? me._animate(me.options.moveCount, 0): $(this).noop();
                        me._btnControl();
                    }
                });
            } else {
                me._btnControl();
            }
        },

        /**
         * 이벤트 바인딩
         * @memberOf RelateModule
         * @name _bindEvent
         * @private
         *
         * @example
         * RelateModule._bindEvent();
         */
        _bindEvent: function () {
            var me = this;

            me.$btnNext.on('click.next', function (e) {

                if (me._isAnimation && me.page < me.maxCount) {
                    if (me.options.isFullType) {
                        me.page++;
                        me.move = (me.page - me.minLoad) * me.options.moveCount;

                        if((me.move+ me.options.moveCount) < me.totalCount) {
                            me.move = (me.page - me.minLoad) * me.options.moveCount;
                        } else {
                            me.move = me.totalCount - me.options.moveCount;
                        }
                    } else {
                        me.page++;
                        me.move = (me.page - me.minLoad) * me.options.moveCount;
                    }

                    me._animate(me.move, me.options.delayTime);
                }
            });

            me.$btnPrev.on('click.prev', function (e) {
                if (me._isAnimation && me.page > 1) {
                    if (me.options.isFullType) {
                        me.page--;
                        me.move = (me.page - me.minLoad) * me.options.moveCount;
                    } else {
                        me.page--;
                        me.move = (me.page - me.minLoad) * me.options.moveCount;
                    }
                    me._animate(me.move, me.options.delayTime);
                }
            });
        },

        /**
         * Object를 이동시키는 함수
         * @memberOf RelateModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime 에니메이션 시간
         *
         * @example
         * RelateModule._animate(1, 500);
         */
        _animate: function (index, delayTime) {
            var me = this,
                posX = (me.options.width * index) * -1,
                $last = me.$slide.children().last();

            if(me._isAnimation == false) return;
            me._isAnimation = false;

            posX = (me._isPercentage ? posX+'%' : posX);
            me.$slide.stop(true, true).animate({
                left: posX
            }, delayTime, me.options.easing, function () {
                me._isAnimation = true;
                if (delayTime > 0) me._getAjax();
            });
        },

        _btnControl: function () {
            var me = this,
                $first = me.$slide.children().first();
            $last = me.$slide.children().last();

            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);

            if($first.offset().left > 0) me.$btnPrev.removeClass(me.options.asMore);
            if(($last.offset().left+$last.width()) <= me.$list.offset().left+me.$list.width()) me.$btnNext.removeClass(me.options.asMore);
        }
    });

    /**
     * GNB 클래스<br />
     * // 옵션 <br />
     * options.className: 	String 치환될 클래스명 <br />
     * options.easing: 		String slideUp, slideDown시의 easing ( 티가 나질 않음 )<br/>
     * options.delayTime: 	Integer slideUp/Down시의 delay시간 <br />
     * @class
     * @name common.ui.GNB
     * @extends common.ui.View
     */
    common.ui('GNB', {
        bindjQuery:'gnb',
        defaults: {
            className: 'on',
            easing: 'easeOutBounce',
            delayTime: 500
        },
        selectors: {
            topMenu: '.d-top-menu',
            level0: '.d-level-0',
            level1: '.d-level-1',
            clickable: '.d-clickable',
            searchBtn: '.d-search-btn',
            searchLyr: '.d-search_layer',
            searchBg: '.d-search-bg',
            subLevel01: '.d-sub-level01',
            subLevel02: '.d-sub-level02',
            subGnbBg: '.gnb_bg'
        },
        _isAnimation: true,


        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.bgEnter = false;
            me.timer = null;

            me.$level0.removeClass(me.options.className);
            me._bindEvent();
        },
        /**
         * 로케이션중 열려있는 항목 닫음
         * @memberOf GNB
         * @name _closeLocationInSelected
         * @private
         *
         * @example
         * gnb._closeLocationInSelected();
         * @page
         * http://local.kia.com/html/ko/normal/gr/GR3.html
         *  */
        _closeLocationInSelected: function () {
            var me = this;
            me.$level0.filter('.'+me.options.className).children('.menu_view').stop(true, true).show().slideUp(me.options.delayTime, me.options.easing, function () {
                $(this).parent().removeClass('on');
            });
            return me.$level0;
        },
        /**
         * 이벤트 바인딩
         * @memberOf GNB
         * @name _bindEvent
         * @private
         *
         * @example
         * gnb._bindEvent();
         */
        _bindEvent: function () {
            var me = this;

            me.$level1.on('click', function (e) {
                e.stopPropagation();
            });

            me.$el.on({
                'click': function (e) {
                    e.preventDefault();
                    e.stopPropagation();												// document 클릭시 레이어가 닫히게

                    if(me._isAnimation == false) return;
                    me._isAnimation = false;

                    if(me.$searchLyr.hasClass(me.options.className) == true){
                        me.$searchLyr.find('.close').triggerHandler('click');
                    }

                    var $this = $(this),
                        idx = me.$clickable.index($this),
                        $selectedCell = me.$level0.eq(idx).toggleClass(me.options.className);

                    //애니메이션 처리를 위한 부분
                    var flag = $selectedCell.hasClass(me.options.className),
                        $not = me.$level0.not($selectedCell);

                    $selectedCell.children('.menu_view').stop(true, true)[(flag ? 'hide': 'show')]()[(flag ? 'slideDown' : 'slideUp')](me.options.delayTime, me.options.easing, function () {
                        $(this).removeAttr('style');
                        me._isAnimation = true;
                    });
                    $not.children('.menu_view').stop(true, true).slideUp(me.options.delayTime, me.options.easing, function () {
                        $(this).removeAttr('style').parent().removeClass(me.options.className);
                    });
                }
            }, me.selectors.clickable);


            //검색버튼을 눌렀을때
            me.$searchBtn.on({
                'click': function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    me.$searchBg.addClass('on');
                    me.$searchLyr.addClass('on').modal();
                    me._closeLocationInSelected();
                }
            });

            //modal class handler
            common.PubSub.on({
                //검색 레이어 팝업이 떴을때 css 재수정
                'show:modal': function () {
                    $('.d_modal_overlay').hide().fadeIn(me.options.dealyTime);
                    me.$searchLyr.removeAttr('style').css({
                        'z-index': '9999'
                    });
                },
                //검색 레이어 팝업이 닫혔을때
                'hide:modal': function () {
                    if(me.$searchLyr.hasClass('on') == false) return;
                    me.$searchLyr.show().fadeOut(me.options.dealyTime, function () {
                        me.$searchBg.toggleClass('on');
                        me.$searchLyr.toggleClass('on');
                    });
                },
                //검색 레이어 dim이 열렸을때
                'show:layout': function () {}
            });
            //검색영역

            //topMenu
            me.$el.on('click', me.selectors.topMenu, function (e) {
                e.preventDefault();
                e.stopPropagation();
                me._closeLocationInSelected();
            });

            me.$subLevel01.on('mouseenter.webgnb focusin.webgnb mouseleave.webgnb focusout.webgnb', function(e) {
                e.preventDefault();
                if (e.type === 'mouseenter' || e.type === 'focusin' ) {
                    clearTimeout(me.timer);
                    me.timer = null;
                    $(this).activeRow('on');
                    me.$subGnbBg.show().css({height:$(this).find('.low').height()});
                } else {
                    me.timer = setTimeout(function () {
                        if (!me.bgEnter) {
                            me.$subLevel01.removeClass('on');
                            me.$subGnbBg.hide();
                        }
                    }, 100)
                }
            });

            me.$subLevel02.on('mouseenter.webgnb focusin.webgnb mouseleave.webgnb focusout.webgnb', function(e) {
                e.preventDefault();
                if (e.type === 'mouseenter' || e.type === 'focusin' ) {
                    $(this).find('.more').html($(this).attr('data-close-text'));
                    $(this).addClass('on');
                } else {
                    $(this).find('.more').html($(this).attr('data-open-text'));
                    $(this).removeClass('on');
                }
            });

            me.$subGnbBg.on('mouseenter.webgnb focusin.webgnb mouseleave.webgnb focusout.webgnb', function(e) {
                e.preventDefault();
                if (e.type === 'mouseenter' || e.type === 'focusin' ) {
                    me.bgEnter = true;
                } else {
                    me.bgEnter = false;

                    me.timer = setTimeout(function () {
                        me.$subLevel01.removeClass('on');
                        me.$subGnbBg.hide();
                    }, 100)
                }
            });

            // 문서 클릭시 카테고리 레이어 닫음
            common.PubSub.on('document.click', function (e) {
                if(me.$searchLyr.hasClass('on') == false) me._closeLocationInSelected();
            });

            //index값에 해당 하는 내용으로 location을 재설정
            if(me.options.index){
                me.$level1.removeClass(me.options.className);
                me.$level0.addClass('d-none');//.addClass('end');
                var indexTemp = me.options.index.split('|');

                for(var x=0 ; x<indexTemp.length ; x++){
                    var $selectedCell = me.$level0.eq(x).removeClass('d-none').find(me.selectors.level1).eq(indexTemp[x]).addClass(me.options.className);
                    me.$clickable.eq(x).children('span').eq(0).text($selectedCell.text());
                }
            }
        }
    });


    /**
     * Footer 클래스<br />
     * // 옵션 <br />
     * options.className: 	String 치환될 클래스명 <br />
     * options.easing: 		String slideUp, slideDown시의 easing ( 티가 나질 않음 )<br/>
     * options.delayTime: 	Integer slideUp/Down시의 delay시간 <br />
     * @class
     * @name common.ui.Footer
     * @extends common.ui.View
     */
    common.ui('Footer', {
        bindjQuery:'footer',
        defaults: {
            className: 'on',
            easing: 'easeOutQuad',
            delayTime: null
        },
        selectors: {
            clickable: '.d-clickable',
            list: '.d-list',
            slide: '.d-slide'
        },
        _isAnimation: true,


        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._bindEvent();
        },
        /**
         * 이벤트 바인딩
         * @memberOf Footer
         * @name _bindEvent
         * @private
         *
         * @example
         * footer._bindEvent();
         */
        _bindEvent: function () {
            var me = this;

            me.$el.on('click', me.selectors.clickable, function (e) {
                e.preventDefault();
                e.stopPropagation();

                if(me._isAnimation == false) return;
                me._isAnimation = false;

                var $this = me.$list.toggleClass('on'),
                    flag = $this.hasClass('on');
                me.$slide[(flag ? 'hide' : 'show')]()[(flag ? 'slideDown' : 'slideUp')](me.options.delayTime, me.options.easing, function () {
                    me.$slide.removeAttr('style');
                    me._isAnimation = true;
                });
            });

            me.$el.on('click', me.selectors.slide, function (e) {
                e.stopPropagation();
            });


            // 문서 클릭시 카테고리 레이어 닫음
            common.PubSub.on('document.click', function (e) {
                if(me.$list.hasClass('on') == true) me.$clickable.trigger('click');
            });

        }
    });


    /**
     * RollingCounter 클래스<br />
     * // 옵션 <br />
     * options.easing: 		String 애니메이션 easing 값 <br />
     * options.rollCount:	Integer 추가로 몇바퀴를 더 회절시킬지에 대한 카운트
     * options.height: 		Integer ?이값<br />
     * options.duration:	Integer 자릿수간의 애니메이션이 시작되는 텀<br />
     * options.delayTime: 	Integer 애니메이션 duration <br />
     * @class
     * @name common.ui.RollingCounter
     * @extends common.ui.View
     */
    common.ui('RollingCounter', {
        bindjQuery:'rollingCounter',
        defaults: {
            easing: 'easeInOutQuart',
            rollCount: 1,			//추가로 몇바퀴를 더 회전할지여부
            height: 0,				// 높이
            delay: 100,
            delayTime: 2000		// 자릿수간에 애니메이션 간격
        },
        selectors: {
        },

        /**
         * 생성자
         * @param {jQuery|Element|String} el 대상 엘리먼트
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._$items = [].reverse.call(me.$el.find('.d-digit'));		// 숫자에 해당하는 각 요소를 찾아서 거꾸로 정렬시켜서 가지고 있는다.(일단위부터 애니메이션을 시작)
            me._numbers = (me.$el.attr('data-value') || parseInt(me.$el.text() || 0))+"";		// 뿌려질 숫자값

            common.PubSub.on('scroll.trigger', function (e) {
                me.onScreen = common.isOnScreen(me.$el, 100);
                if (me.onScreen.length > 0 && me.$el.attr('data-start') !== 'start') {
                    me.$el.attr('data-start', 'start');
                    me.start();
                }
            });
        },
        /**
         * 애니메이션 시작부분
         * @memberOf RollingCounter
         * @name start
         * @public
         *
         * @example
         * rollingCounter.start();
         */
        start: function(){
            var me = this,
                opts = me.options,
                numbers = [].reverse.call(me._numbers.split('')).join(''), // 숫자를 거꾸로 정렬
                ease = opts.easing,
                len = numbers.length,
                height = (opts.height == 0 ? me._$items.height(): me.options.height),
                totalHeight = (10*height);
            me.options.height = height;

            me._$items.attr('style', 'background-position:0 0px').stop(true).each(function(i){
                if(i >= len){ return false; }

                var $el = $(this),
                    n = parseInt(numbers.substr(i, 1), 10),		// i번째 숫자를 가져옴
                    y = (n*opts.height)+(totalHeight*opts.rollCount);				// n에 해당하는 top를 계산

                $el.delay(i * opts.delay).queue(function(){
                    // ie9, firefox에서 backgroundPosition에 대한 animate기능이 문제가 있어서 트릭으로 구현
                    $el.prop({ypos: -y}).stop().animate({ypos: 0}, {
                        duration: opts.delayTime,
                        easing: opts.easing,
                        step: function(now) {
                            now = (totalHeight-(y + now)%totalHeight)*-1;
                            $el.css('background-position', '0 '+(now)+'px');
                        }
                    });
                });
                $el.children().html(n);
            });
        },
        /**
         * 업데이트
         * @memberOf RollingCounter
         * @name update
         * @public
         * @param {Interger} newNumber 새로운 숫자값
         *
         * @example
         * $('..').rollingCounter('update', 1234); 로 호출하면 숫자가 변경됨
         */
        update: function(newNumber) {
            var me = this;
            me._numbers = newNumber+"";
            me.start();
        }
    });

})(window, jQuery, common, common.ui);


// 글로벌 작업들
(function ($, common, ui, undefined) {
    var $win = common.$win,
        $doc = common.$doc,
        ui = common.ui,
        winResize = null,
        $gallerys = $('.md_egim-h'),
        $sns = $('.sns_share'),
        $top = $('.d-top');

    // 글로벌 이벤트 바인딩
    common.GlobalEvents.init();

    $(window).scroll(function () {
        common.PubSub.trigger('scroll.trigger');

        common.gallerys3d($gallerys, $sns);
        common.gallerys3d($gallerys, $top);
    }).load(function () {
        $('#cont_wrap').onScreen();
        common.PubSub.trigger('scroll.trigger');

        common.gallerys3d($gallerys, $sns);
        common.gallerys3d($gallerys, $top);
    }).resize(function () {
        clearTimeout(winResize);
        winResize = setTimeout(function () {
            common.PubSub.trigger('resize.trigger');
        }, 50);
    });


    $('#header').gnb();

    $(function () {
        $('#footer').footer();
    });

    // 마우스업시 - User Event 발생
    $(document).on('mouseup', function (e) {
        common.PubSub.trigger('mouseupEvent');
    }).on('click.document', function () {
        common.PubSub.trigger('document.click');
    });

    if(window.location.hash) {
        if ($(window.location.hash).size() > 0) {
            $(window).scrollTop($(window.location.hash).offset().top);
        }
    }

})(jQuery, common, common.ui);
