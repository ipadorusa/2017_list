/*!
 * @author ������
 * @description �����ڵ��� ���� �귣�� �����ӿ�
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
     * @description �����ڵ��� ���� �귣�� �� ���� ��� ��ũ��Ʈ
     */

    /**
     * @namespace
     * @name common
     * @description common �����
     */
    var common = context.common || (context.common = {});

    var toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty,
        doc = context.document,
        emptyFn = function () {},
        arraySlice = Array.prototype.slice;

    if (typeof Function.prototype.bind === 'undefined') {
        /**
         * �Լ����� ���ٽ�Ʈ�� ����
         * @param {Object} context ���ؽ�Ʈ
         * @param {Mixed} ... �ι�° ���ں��ʹ� ������ ����� �Լ��� ���޵ȴ�.
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
                // bind�� �Ѿ���� ���ڿ� �����Լ��� ���ڸ� �����Ͽ� �Ѱ���.
                var local_args = args.concat(arraySlice.call(arguments));
                if (this !== window) { local_args.push(this); }
                return __method.apply(object, local_args);
            };
        };
    }

    /**
     * jQuery ��ü
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
             * custom: �׳� ����
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
     * Object�� �ش� �ϴ� Ŭ�������� ����
     * @function
     * @name $#getClassName
     * @param {Integer} index default: 0
     * @return {String} ���ڿ�
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
     * value���� URI���ڵ��Ͽ� ��ȯ
     * @function
     * @name $#encodeURI
     * @return {String} ���ڵ��� ���ڿ�
     */
    $.fn.encodeURI = function (value) {
        if (arguments.length === 0) {
            return encodeURIComponent($.trim(this.val()));
        } else {
            return this.val(encodeURIComponent(value));
        }
    };

    /**
     * value���� �յ� �����̽����� �Ǵ� old ie�ΰ�쿡 placeholder�� �����Ͽ� ���� ���� ��ȯ
     * @function
     * @name $#trimVal
     * @return {String} ���ڿ�
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
     * üũ���θ� ������ ��, changed �̺�Ʈ�� �߻���Ų��.(����� label�� onŬ������ ��۸��ϰ��� �� �� ���)
     * @function
     * @name $#checked
     * @param {Boolean} checked üũ����
     * @fires $#changed
     * @example
     * // ���� changed �̺�Ʈ ���ε�
     * $('input:checkbox').on('changed', function (e, isChecked){ $(this).parent()[isChecked?'addClass':'removeClass']('on'); });
     * ..
     * // checked ���� ����
     * $('input:checkbox').checked(true); // �ش�üũ�ڽ��� �θ� onŬ������ �߰��ȴ�.
     */
    $.fn.checked = function (checked) {
        return this.each(function () {
            if(this.type !== 'checkbox' && this.type !== 'radio'){ return; }
            /**
             * @event $#changed
             * @type {object}
             * @peoperty {boolean} checked - üũ ����
             */
            var $this = $(this).prop('checked', checked).trigger('changed', [checked]);
        });
    };

    /**
     * Ŭ���� ġȯ
     * @function
     * @name $#replaceClass
     * @param {String} old ���Ŭ����
     * @param {String} newCls ġȯŬ����
     */
    $.fn.replaceClass = function (old, newCls) {
        return this.each(function () {
            $(this).removeClass(old).addClass(newCls);
        });
    };

    /**
     * ���̾� ǥ�� ���:
     * - �ܼ��� show�� �ϴ°� �ƴ϶�, ���̾ ǥ�õǱ����� beforeshow�̺�Ʈ��, ǥ�õ� �Ŀ� show�̺�Ʈ�� �߻������ش�.
     * - ���̾ ��� ��ư�� �����Ѵ�. ������, ��ư�� ��� �׼��� ���ϰ��� �� �� ����
     * @function
     * @name $#showLayer
     * @param {Element|jQuery} options.button (Optional) ��ư
     * @param {Function} options.onShow (Optional) ǥ�õ� �� ����� �Լ�
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

            // ǥ�õ� �� d_open Ŭ���� �߰�
            $this.addClass('d_open').show().trigger('show');
            options.onShow.call($this[0]);
        });
    };

    /**
     * ���̾� ���� ���:
     * - �ܼ��� hide�� �ϴ°� �ƴ϶�, ������ �Ŀ� hide�̺�Ʈ�� �߻������ش�.
     * @function
     * @name $#hideLayer
     * @param {Boolean} options.focusOpener (Optional) ������ �Ŀ� ��ư�� ��Ŀ���� �ٰ����� ����
     * @param {Function} options.onHide (Optional) ������ �Ŀ� ����� �Լ�
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

            // ������ �Ŀ� ������ ������ư�� ��Ŀ���� ������ �ش�.
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
     * �ƹ��͵� ���ϴ� ���Լ�
     * @function
     * @name $#noop
     * @example
     * $(this)[ isDone ? 'show' : 'noop' ](); // isDone�� true�� show�ϵ� false�϶��� �ƹ��͵� ����.
     */
    $.fn.noop = function () {
        return this;
    };

    /**
     * üũ�� �׸��� ���� �迭�� ��Ƽ� ��ȯ
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
     * ���� ������ �ִ� �ٸ� row���� on�� �����ϰ� ���� row�� on �߰�
     * @function
     * @name $#activeRow
     * @param {String} cls Ȱ�� Ŭ������
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
     * Ư�� object�� arguement�� �Էµ� text�� ġȯ
     * @function
     * @name $#log
     * @param {Arguments} cls ��½�ų ����
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
     * timeStart("name")�� name���� Ű���ϴ� Ÿ�̸Ӱ� ���۵Ǹ�, timeEnd("name")�� �ش� name���� ���� �ð��� �α׿� ������ش�.
     * @memberOf common
     * @name timeStart
     * @function
     *
     * @param {String} name Ÿ�̸��� Ű��
     * @param {Boolean} reset ����(�ʱ�ȭ) ����
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
     * timeStart("name")���� ������ �ش� name���� ���� �ð��� �α׿� ������ش�.
     * @memberOf common
     * @name timeEnd
     * @function
     *
     * @param {String} name Ÿ�̸��� Ű��
     * @return {Number} �ɸ� �ð�
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
     * ���ӽ����̽� ������ �����ϰ� ��ü�� ����<br>
     * js�� ����Ƽ�꿡�� �������� �ʴ� ���������,<br>
     * ��ü���ͷ��� �̿��Ͽ� ��Ÿ ������ ����� ���ӽ����̽�ó�� �� �� �ִ�.
     *
     * @function
     * @memberOf common
     * @name namespace
     *
     * @param {String} name ���ӽ����̽���
     * @param {Object} obj {Optional} ������ ���ӽ����̽��� ����� ��ü, �Լ� ��
     * @return {Object} ������ ���ӽ����̽�
     *
     * @example
     * common.namesapce('common.widget.Tabcontrol', TabControl)
     *
     * ex) common.namespace('common.widget.Control', function (){}) �� ����Ƽ��� Ǯ� �ۼ��Ѵٸ� ������ ����.
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
                else { throw Error(name + '��(��) ���ǵ��� ���� ���ӽ����̽��Դϴ�.'); }
            }
        }

        return root;
    };

    /**
     * common�� ��Ʈ�� �Ͽ� ���ӽ����̽��� �����Ͽ� ���ο� �Ӽ��� �߰��ϴ� �Լ�
     *
     * @function
     * @memberOf common
     * @name define
     *
     * @param {String} name .�� �����ڷ� �ؼ� common�� �������� ���� ���ӽ����̽��� ����. ������ common�� �߰��ȴ�.
     * @param {Object|Function} object
     * @param {Boolean} (Optional) isExecFn object���� �Լ����� �� ������ ��Ų �Ŀ� ������ ���ΰ� ����
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
     * common.define �� ���� ���ǵ� ����� ������ ��Ƽ� ����ϰ��� �� ���
     *
     * @function
     * @memberOf common
     * @name use
     *
     * @param {String} name ���ӽ����̽�
     * @return {Object} �Լ��� ������ �����
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
         * �� �Լ�
         * @function
         * @example
         * var func = common.emptyFn
         */
        emptyFn: emptyFn,

        /**
         * �ӽ� ���: css3��Ÿ���� �������ο� html�� ���ڵ�/���ڵ��ϰų� �������� ��  ���
         */
        tmpNode: doc.createElement('div'),

        /**
         * html5 �Ӽ��� �������θ� üũ�� �� ���
         * @example
         * is = 'placeholder' in common.tmpInput;  // placeholder�� �����ϴ°�
         */
        tmpInput: doc.createElement('input'),

        /**
         * ��ġ��� ����̽� ����
         */
        isTouch: !!('ontouchstart' in window),

        /**
         * PC ���ӿ���
         */
        isPC: !!(/win16|win32|win64|mac|macintel/gi.test(navigator.platform)),

        /**
         * Transform ��������
         */
        isTransform: function (obj, name) {
            var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
                count = prefixes.length,
                el = document.createElement('div'),
                i = 0,
                support = false;

            // 2. ������ element�� ������ ������ element.style���� �ش� ������Ƽ�� �ִ� ���� Ȯ���մϴ�.
            for ( i = 0 ; i < count ; i++ ) {
                support = document.createElement('div').style[prefixes[i]] != undefined || support;
                if (support) { break; }
            }
            //while( support !== true ) {
            //	support = document.createElement('div').style[prefixes[support++]] != undefined || support;
            //}

            // 3. �������θ� ����մϴ�.
            return support;
        },

        /**
         * ��ü ��ü�� �־��� �̸��� �Ӽ��� �ִ��� ��ȸ
         *
         * @param {Object} obj ��ü
         * @param {String} name Ű �̸�
         * @return {Boolean} Ű�� ���� ����
         */
        hasOwn: function (obj, name) {
            return hasOwn.call(obj, name);
        },

        /**
         * �������� Detect ����: �ǵ����̸� Modernizr ���̺귯���� ����� ���� ����
         *
         * @example
         * common.browser.isOpera // �����
         * common.browser.isWebKit // ��Ŷ
         * common.browser.isIE // IE
         * common.browser.isIE6 // IE56
         * common.browser.isIE7 // IE567
         * common.browser.isOldIE // IE5678
         * common.browser.version // IE�� ������
         * common.browser.isChrome // ũ��
         * common.browser.isGecko // ���̾�����
         * common.browser.isMac // ��OS
         * common.browser.isAir // ��� ����
         * common.browser.isIDevice // ������, �����е�
         * common.browser.isSafari // ���ĸ�
         * common.browser.isIETri4 // IE����
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
            t.version = parseInt(match[2], 10);		// ����: if(browser.isIE && browser.version > 8) { // 9�̻��� ie������

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
         * �־��� ���ڰ� ������ üũ
         *
         * @param {Object} value üũ�� ���ڿ�
         * @param {Boolean} allowEmptyString (Optional: false) ���ڸ� ����� ������ ����
         * @return {Boolean}
         */
        isEmpty: function (value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (this.isArray(value) && value.length === 0);
        },

        /**
         * �迭���� üũ
         *
         * @function
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isArray: function (value) {
            return value && (value.constructor === Array || !!value.push);
        },

        /**
         * ��¥������ üũ
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isDate: function (value) {
            return toString.call(value) === '[object Date]';
        },

        /**
         * JSON ��ü���� üũ
         *
         * @function
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isObject: (toString.call(null) === '[object Object]') ? function (value) {
            return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } : function (value) {
            return toString.call(value) === '[object Object]';
        },

        /**
         * �Լ������� üũ
         *
         * @function
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isFunction: (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function (value) {
            return toString.call(value) === '[object Function]';
        } : function (value) {
            return typeof value === 'function';
        },

        /**
         * ���� Ÿ������ üũ.
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isNumber: function (value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * �������� üũ�ϵ� .�� ���
         * @param {Object} value ��: 1, '1', '2.34'
         * @return {Boolean}
         */
        isNumeric: function (value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        /**
         * ���������� üũ
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isString: function (value) {
            return typeof value === 'string';
        },

        /**
         * �Ҹ������� üũ
         *
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isBoolean: function (value) {
            return typeof value === 'boolean';
        },

        /**
         * ������Ʈ���� üũ
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isElement: function (value) {
            return value ? value.nodeType === 1 : false;
        },

        /**
         * �ؽ�Ʈ������� üũ
         * @param {Object} value üũ�� ��
         * @return {Boolean}
         */
        isTextNode: function (value) {
            return value ? value.nodeName === "#text" : false;
        },

        /**
         * ���ǵ� ������ üũ
         * @param {Object} üũ�� ��
         * @return {Boolean}
         */
        isDefined: function (value) {
            return typeof value !== 'undefined';
        },

        /**
         * �־��� ���� �迭�� ��ȯ
         *
         * @param {Mixed} �迭�� ��ȯ�ϰ��� �ϴ� ��
         * @return {Array}
         *
         * @example
         * common.toArray('abcd"); => ["a", "b", "c", "d"]
         * common.toArray(arguments);  => arguments�� ��ü�� array�� ��ȯ�Ͽ� Array���� �����ϴ� ��ƿ�Լ�(slice, reverse ...)�� ���� �ִ�.
         */
        toArray: function (value) {
            return arraySlice.apply(value, arraySlice.call(arguments, 1));
        },

        /**
         * 15���� ���ڷ� �̷���� ����ũ�� �� ����
         *
         * @return {String}
         */
        getUniqId: function () {
            return Number(String(Math.random() * 10).replace(/\D/g, ''));
        },

        /**
         * ������ ������Ʈ ����
         * @function
         * @param {jQuery} $container �����̳�
         * @param {String} format ����
         * @param {Number} length ����
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

            // ���� ù�� �̹����� �߰���
            h.push(t.replace( /#+/, function ( $0 ) { return common.lpad( 0, $0.length ); }));
            $container.html( h.join( '' ) );
            $container.children( ':first' ).css({ visibility : 'visible' });
        },

        /**
         * ������ ������Ʈ ����
         * @function
         * @param {jQuery} $container �����̳�
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

            // ���� ����� ������ �̹��� �߰�
            if ( $container.find('img').size() <= 1) {
                // �ε��ٰ� ������ ��� �����ش�.
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

            // ���ο� �ִ� �̹������� �� �ҷ��鿩�� �Ŀ� ����
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
         * ������ ������Ʈ ����
         * @function
         * @param {jQuery} $container �����̳�
         */
        stopSequenceElement: function ( $container ) {
            var timer = $container.data( 'seq-timer' );
            if ( timer ) {
                clearInterval( timer );
                $container.data( 'seq-timer', null );
            }
        },

        /**
         * �̹��� �ε� Ȯ��
         * @function
         * @param {jQuery} $imgs �̹���
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
         * 3D �������� TOP��ư �Ǵ� SNS ���� ��ư�� ���� ��� ó��
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
         * ���� ���� ä���
         * @param {String} val ��
         * @param {Number} len ����
         * @param {String} str ����
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
         * View ȭ�鿡 ��ġ�ߴ���
         * @param {Object} Ȯ���� Object
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
         * �������� ����ũ�� �� �����ؼ� ��ȯ
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
         * �α׸� �������� �Լ�
         * @private
         * @function
         * @param {Arguments} ��½�ų ���ڿ�
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
     * ���ڿ� ���� ��ƿ �Լ� ����
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
             * ���Խ��̳� �˻����ڿ��� ����Ͽ� ���ڿ����� �ؽ�Ʈ�� ��ü
             *
             * @param {String} value ��ü�� ������ ���ڿ�
             * @param {RegExp|String} �˻��� ���ڿ��̳� ���Խ� ����
             * @param {String} ��ü�� ���ڿ�
             * @return {String} ��ü�� ��� ���ڿ�
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
             * �־��� ���ڿ��� ����Ʈ���� ��ȯ
             *
             * @param {String} value ���̸� ����� ���ڿ�
             * @return {Number}
             *
             * @example
             * common.byteLength("���ع���"); => 8
             */
            byteLength: function (value) {
                var l = 0;
                for (var i=0, len = value.length; i < len; i++) {
                    l += (value.charCodeAt(i) > 255) ? 2 : 1;
                }
                return l;
            },

            /**
             * �־��� ���ڿ��� ������ ����(����Ʈ)��ŭ �ڸ� ��, �������� ���ٿ� ��ȯ
             *
             * @param {String} value ���ڿ�
             * @param {Number} length �߶� ����
             * @param {String} truncation (Optional: '...') ������
             * @return {String} ��� ���ڿ�
             *
             * @example
             * common.string.cutByByte("���ع���", 3, "..."); => "��..."
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
             * �־��� ����Ʈ���̿� �ش��ϴ� char index ��ȯ
             *
             * @param {String} value ���ڿ�
             * @param {Number} length ���� ���ڼ�
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
             * ù���ڸ� �빮�ڷ� ��ȯ�ϰ� ������ ���ڵ��� �ҹ��ڷ� ��ȯ
             *
             * @param {String} value ���ڿ�
             * @return {String} ��� ���ڿ�
             *
             * @example
             * common.string.capitalize("abCdEfg"); => "Abcdefg"
             */
            capitalize: function (value) {
                return value ? value.charAt(0).toUpperCase() + value.substring(1) : value;
            },

            /**
             * ī�� �������� ��ȯ
             *
             * @param {String} value ���ڿ�
             * @return {String} ��� ���ڿ�
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
             * �뽬 �������� ��ȯ
             *
             * @param {String} value ���ڿ�
             * @return {String} ��� ���ڿ�
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
             * �־��� ���ڿ��� ������ ����ŭ �ݺ��Ͽ� ����
             *
             * @param {String} value ���ڿ�
             * @param {Number} cnt �ݺ� Ƚ��
             * @return {String} ��� ���ڿ�
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
             * Ư����ȣ�� HTML ENTITY�� ��ȯ
             *
             * @param {String} value Ư����ȣ
             * @return {String} ��� ���ڿ�
             *
             * @example
             * common.string.escapeHTML('<div><a href="#">��ũ</a></div>'); => "&lt;div&gt;&lt;a href=&quot;#&quot;&gt;��ũ&lt;/a&gt;&lt;/div&gt;"
             */
            escapeHTML: function (value) {
                return value ? (value+"").replace(escapeRegexp, function (m) {
                    return escapeChars[m];
                }) : value;
            },

            /**
             * HTML ENTITY�� ��ȯ�� ���ڿ��� ���� ��ȣ�� ��ȯ
             *
             * @param {String} value ���ڿ�
             * @return {String} ��� ���ڿ�
             *
             * @example
             * common.string.unescapeHTML('&lt;div&gt;&lt;a href=&quot;#&quot;&gt;��ũ&lt;/a&gt;&lt;/div&gt;');  => '<div><a href="#">��ũ</a></div>'
             */
            unescapeHTML: function (value) {
                return value ? (value+"").replace(unescapeRegexp, function (m) {
                    return unescapeChars[m];
                }) : value;
            },

            /**
             * string === value�̸� other��,  string !== value �̸� value�� ��ȯ
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
             * �־��� ���ڿ��� �ִ� {�ε���} �κ��� �μ��� �����Ͽ� ��ȯ
             *
             * @param {String} format ���ڿ�
             * @param {String} ... ��ü�� ���ڿ�
             * @return {String} ��� ���ڿ�
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
             * �־��� ���ڿ����� HTML�� ����
             *
             * @param {String} value ���ڿ�
             * @return {String}
             */
            stripTags: function (value) {
                return value.replace(tagRegexp, '');
            },

            /**
             * �־��� ���ڿ����� ��ũ��Ʈ�� ����
             *
             * @param {String} value ���ڿ�
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
         * �־��� url�� ������������ ����
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
         * ������Ʈ���� ��ü�� ��ȯ
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
         * url�� �Ľ��Ͽ� host, port, protocol ���� ����
         *
         * @function
         * @param {String} str url ���ڿ�
         * @return {Object}
         *
         * @example
         * common.uri.parseUrl("http://www.common.com:8080/list.do?a=1&b=2#comment");
         * => {scheme: "http", host: "www.common.com", port: "8080", path: "/list.do", query: "a=1&b=2"��}
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
         * �־��� url���� �ؽ����ڿ� ����
         *
         * @param {String} url url ���ڿ�
         * @return {String} ��� ���ڿ�
         *
         * @example
         * common.uri.removeHash("list.do#comment"); => "list.do"
         */
        removeHash: function (url) {
            return url ? url.replace(/.*(?=#[^\s]+$)/, '') : url;
        }
    });

    /**
     * ���ڰ��� ��ƿ�Լ� ����
     *
     * @namespace
     * @name common.number
     * @description
     */
    common.define('number', /** @lends common.number */{
        /**
         * �־��� ���� �ڸ�����ŭ ���ڸ��� 0�� ä���� ��ȯ
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
         * ���ڸ����� ,�� ����
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
         * min ~ max������ ������ ��ȯ
         *
         * @param {Number} min �ּҰ�
         * @param {Number} max �ִ밪
         * @return {Number} ������
         */
        random: function (min, max) {
            if (max === null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        },

        /**
         * �����Ѱ��� ��ȯ. value�� min���� ���� ��� min��, max���� Ŭ ��� max�� ��ȯ
         *
         * @param {Number} value
         * @param {Number} min �ּҰ�
         * @param {Number} max �ִ밪
         * @return {Number}
         */
        limit: function (value, min, max) {
            if (value < min) { return min; }
            else if (value > max) { return max; }
            return value;
        }
    });


    /**
     * �迭���� ��ƿ�Լ�
     * @namespace
     * @name common.array
     */
    common.define('array', /** @lends common.array */{
        /**
         * �ݹ��Լ��� �Ͽ��� ��Ҹ� �����ϴ� �Լ�
         *
         * @param {Array} obj �迭
         * @param {Function} cb �ݹ��Լ�
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
         * �迭 ����� ������ �����ִ� �Լ�
         *
         * @param {Array} obj �迭
         * @return {Array} ������ ���� ���ο� �迭
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
         * �ݹ��Լ��� �Ͽ��� ��Ҹ� �ɷ����� �Լ�
         *
         * @param {Array} obj �迭
         * @param {Function} cb �ݹ��Լ�
         * @return {Array}
         *
         * @example
         * common.array.filter([1, '��', 2, '��', 3, '��'], function (item, index){
		 *		return typeof item === 'string';
		 * });
         * => ['��','��','��']
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
         * �־��� �迭�� ������ ���� �����ϴ��� üũ
         *
         * @param {Array} obj �迭
         * @param {Function} cb �ݹ��Լ�
         * @return {Array}
         *
         * @example
         * common.array.include([1, '��', 2, '��', 3, '��'], '��');  => true
         */
        include: function (arr, value, b) {
            return common.array.indexOf(arr, value, b) > -1;
        },

        /**
         * �־��� �ε����� ��Ҹ� ��ȯ
         *
         * @param {Array} obj �迭
         * @param {Function} cb �ݹ��Լ�
         * @return {Array}
         *
         * @example
         * common.array.indexOf([1, '��', 2, '��', 3, '��'], '��');  => 1
         */
        indexOf: function (arr, value, b) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if( (b !== false && arr[i] === value) || (b === false && arr[i] == value) ) { return i; }
            }
            return -1;
        },

        /**
         * �־��� �迭���� index�� �ش��ϴ� ��Ҹ� ����
         *
         * @param {Array} value �迭
         * @param {Number} index ������ �ε���
         * @return {Array} ������ ��Ұ� ������ �迭
         */
        remove: function (value, index) {
            if (!common.isArray(value)) { return value; }
            return value.slice(index, 1);
        },

        /**
         * �־��� �迭���� ���� ū ��Ҹ� ��ȯ
         *
         * @param {Array} array �迭
         * @return {Mix}
         */
        max: function ( array ){
            return Math.max.apply( Math, array );
        },

        /**
         * �־��� �迭���� ���� ���� ��Ҹ� ��ȯ
         *
         * @param {Array} array �迭
         * @return {Mix}
         */
        min: function ( array ){
            return Math.min.apply( Math, array );
        }
    });

    /**
     * JSON��ü ���� ��ƿ�Լ�
     * @namespace
     * @name common.object
     */
    common.define('object', /** @lends common.object */{

        /**
         * ��ü�� ���Ű����� �Ӽ� �� �޼��� �̸��� �迭�� ��ȯ
         *
         * @param {Object} obj ���ͷ� ��ü
         * @return {Array} ��ü�� ���Ű����� �Ӽ��� �̸��� ���Ե� �迭
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
         * ��ü�� ���Ű����� �Ӽ��� ���� �迭�� ��ȯ
         *
         * @param {Object} obj ���ͷ� ��ü
         * @return {Array} ��ü�� ���Ű����� �Ӽ��� ������ ���Ե� �迭
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
         * �ݹ��Լ��� �Ͽ��� ��Ҹ� �����ϴ� �Լ�
         *
         * @param {JSON} obj �迭
         * @param {Function} cb �ݹ��Լ�
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
         * ��Ұ� �ִ� json��ü���� üũ
         *
         *
         * @param {Object} value json��ü
         * @return {Boolean} ��Ұ� �ϳ��� �ִ��� ����
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
         * ��ü�� ������ũ������ ��ȯ
         *
         * @param {Object} obj ���ڿ�
         * @param {Boolean} isEncode {Optional} URL ���ڵ����� ����
         * @return {String} ��� ���ڿ�
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
         * �־��� �迭�� Ű�� ��Ҹ� �¹ٲپ� ��ȯ
         *
         * @param {Array} obj �迭
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
         * �־��� ���ͷ����� index�� �ش��ϴ� ��Ҹ� ����
         *
         * @param {Array} value ���ͷ�
         * @param {Number} key ������ Ű
         * @return ������ ��Ұ� ������ ���ͷ�
         */
        remove: function (value, key) {
            if (!common.isObject(value)) { return value; }
            value[key] = null;
            delete value[key];
            return value;
        }
    });


    /**
     * ��¥���� ��ƿ�Լ�
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
             * ��¥ �����Լ�
             * @param {Date} date ��¥
             * @param {String} interval ����Ÿ��
             * @param {Number} value ���� ũ��
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
             * ��¥������ ������ ������ ���ڿ��� ��ȯ
             *
             * @param {Date} formatDate
             * @param {String} formatString} ���� ���ڿ�
             * @return {String} ��� ���ڿ�
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
             * date�� start�� end�������� ����
             *
             * @param {Date} date ��¥
             * @param {Date} start �����Ͻ�
             * @param {Date} end �����Ͻ�
             * @return {Boolean}
             */
            between: function (date, start, end) {
                return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
            },

            /**
             * ��¥ ��
             *
             * @function
             * @param {Date} date1 ��¥1
             * @param {Date} date2 ��¥2
             * @return {Number} -1: date1�� ����, 0: ����, 1:date2�� ����
             */
            compare: compare,

            /**
             * ������� �����Ѱ�
             *
             * @param {Date} date1 ��¥1
             * @param {Date} date2 ��¥2
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
             * value��¥�� date�������� ����
             *
             * @param {Date} value ��¥
             * @param {Date} date
             * @return {Boolean}
             */
            isAfter: function (value, date) {
                return compare(value, date || new Date()) === 1;
            },

            /**
             * value��¥�� date�������� ����
             *
             * @param {Date} value ��¥
             * @param {Date} date
             * @return {Boolean}
             */
            isBefore: function (value, date) {
                return compare(value, date || new Date()) === -1;
            },

            /**
             * �־��� ��¥ ������ ���ڿ��� Date��ü�� ��ȯ
             *
             * @function
             * @param {String} dateStringInRange ��¥ ������ ���ڿ�
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
             * �־��� ����� �ϼ��� ��ȯ
             *
             * @param {Number} year �⵵
             * @param {Number} month ��
             * @return {Date}
             */
            daysInMonth: function (year, month) {
                var dd = new Date(year|0, month|0, 0);
                return dd.getDate();
            },

            /**
             * �־��� �ð��� ������� ��ð� �������� ǥ��(��: -54000 -> 54�� ����)
             *
             * @function
             * @param {Date|Interval} time �ð�
             * @return {String}
             *
             * @example
             * common.date.prettyTimeDiff(new Date() - 51811); -> "52�� ����"
             */
            prettyTimeDiff: (function () {
                var ints = {
                    '��': 1,
                    '��': 60,
                    '��': 3600,
                    '��': 86400,
                    '��': 604800,
                    '��': 2592000,
                    '��': 31536000
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
                    amount += measure + ' ����';

                    return amount;
                };
            }()),
            /**
             * �־��� �ð��� ������� ��ð� �������� ǥ��(��: -54000 -> 54�� ����)
             *
             * @function
             * @param {Date|Interval} time �ð�
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
     * prototype �� �̿��� Ŭ���� ����
     * @namespace
     * @name common.Class
     * @example
     * var Person = Class({
	*	$extend: Object, // ��ӹ��� �θ�Ŭ����
	*	$singleton: true, // �̱��� ����
	*	$statics: { // Ŭ���� �Ӽ� �� �Լ�
	*		live: function () {} // Person.live(); ���� ȣ��
	*	},
	*	$mixins: [Animal, Robot], // Ư�� Ŭ�������� �޼ҵ���� ���������� �� �� �ش� Ŭ������ ����(�������ε� ����),
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
	*		this.supr(name);  // Person(�θ�Ŭ����)�� initialize�޼ҵ带 ȣ�� or this.suprMethod('initialize', name);
	*		this.age = age;
	*	},
	*	// say�� �������̵���
	*	say: function (job) {
	*		this.suprMethod('say', 'programer'); // �θ�Ŭ������ say �޼ҵ� ȣ�� - ù��°���ڴ� �޼ҵ��, �ι�°���ʹ� �ش� �޼ҵ�� ���޵� ����

	*		alert("I'm Man: "+ job);
	*	}
	* });
     * var man = new Man('kim', 20);
     * man.say('freeman');  // ���: alert("I'm Person: programer"); alert("I'm Man: freeman");
     * man.run(); // ���: alert("i'm running...");
     */


    common.define('Class', function () {
        var isFn = common.isFunction,
            emptyFn = common.emptyFn,
            include = common.array.include,
            ignoreNames = ['superclass', 'members', 'statics'];


        // �θ�Ŭ������ �Լ��� ������ �� �ֵ��� .supr �Ӽ��� �θ��Լ��� �����Ͽ� ����
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

        // �Ӽ� �߿� �θ�Ŭ������ �Ȱ��� �̸��� �Լ��� ���� ��� ����ó��
        function process(what, o, supr) {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    what[k] = isFn(o[k]) && isFn(supr.prototype[k]) ? wrap(k, o[k], supr) : o[k];
                }
            }
        }

        /**
         * Ŭ���� ����
         *
         * @memberOf common.Class
         *
         * @param {String} ns (Optional) ���ӽ����̽�
         * @param {Object} attr �Ӽ�
         * @return {Class}
         */
        return function (attr) {
            var supr, statics, mixins, hooks, singleton, Parent, instance;

            if (isFn(attr)) {
                attr = attr();
            }

            // ������ ��ü
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
             * �޼ҵ� ������ �θ�Ŭ������ ������ �� ���
             * @memberOf common.Class
             * @property
             */
            Class.superclass = supr.prototype;
            Class.classType = Class;

            if (singleton) {
                /**
                 * �̱��� Ŭ������ ��� �̱��� �ν��Ͻ��� ��ȯ
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
             * �θ�Ŭ������ �޼ҵ带 ȣ���� �� �ִ� �����Լ�
             * @memberOf common.Class
             * @name suprMethod
             * @function
             * @param {String} name ȣ���ϰ��� �ϴ� �θ��Լ���
             * @return {Mix} �θ��Լ��� ��ȯ��
             * @example
             * this.suprMethod('show', true);  -> �θ�Ŭ������ show(true) �޼ҵ� ȣ��
             */
            Class.prototype.suprMethod = function (name) {
                var args = arraySlice.call(arguments, 1);
                return supr.prototype[name].apply(this, args);
            };

            /**
             * func�� ���ؽ�Ʈ�� this�� ����
             * @memberOf common.Class
             * @name proxy
             * @function
             * @param {function} function �Լ�
             * @return {Function}
             * @example
             * function test(){
			 *		alert(this.name);
			 * }
             * var Person = Class({
			 *		initialize: function () {
			 *			this.name = 'axl rose',
			 *			this.proxy(test)();  // = test.bind(this)�� ����, test�Լ��� ���ؽ�? this�� ���� -> ���: alert('axl rose');
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
             * ���� Ŭ������ mixins������� merge
             * @memberOf common.Class
             * @name mixins
             * @function
             * @param {function} o ��ü
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
             * Ŭ������ �޼ҵ�  �߰�
             * @memberOf common.Class
             * @name members
             * @function
             * @param {function} o ��ü
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
             * Ŭ�����Լ� �߰��Լ�
             * @memberOf common.Class
             * @name statics
             * @function
             * @param {function} o ��ü
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
         * ���� ������ �� ���ͷ�
         *
         * @private
         * @type {Object}
         */
        configs: {},

        /**
         * �������� �������� �Լ�
         *
         * @param {String} name ������. `.`�� ���а����� �ܰ躰�� ���� ������ �� �ִ�.
         * @param {Object} def {Optional} ������ ���� ���� ��� ����� �⺻��
         * @return {Object} ������
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
         * �������� �����ϴ� �Լ�
         *
         * @param {String} name ������. `.`�� ���а����� �ܰ踦 �������� ������ �� �ִ�.
         * @param {Object} value ������
         * @return {Object} ������
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
         * ���ø� ����
         *
         * @param {String} text ���ø� ���ڿ�
         * @param {Object} data ���ø� ���ڿ����� ��ȯ�� ����Ÿ
         * @param {Object} settings �ɼ�
         * @return tempalte �Լ�
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
     * @description �븮���̼� �Լ� ����
     */
    common.define('valid', function () {
        var trim = $.trim,
            isString = common.isString,
            isNumber = common.isNumber,
            isElement = common.isElement;

        return /** @lends common.valid */{
            empty: common.isEmpty,
            /**
             * �ʼ��Է� üũ
             *
             * @param {String} str
             * @return {Boolean} ���̸� false ��ȯ
             */
            require: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return !!str;
            },
            /**
             * ��ȿ�� �̸����������� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            email: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(str) : false;
            },
            /**
             * �ѱ����� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            kor: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[��-��]+$/).test(str) : false;
            },
            /**
             * ���� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            eng: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[a-zA-Z]+$/).test(str) : false;
            },
            /**
             * ���� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            num: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? isNumber(str) : false;
            },
            /**
             * ��ȿ�� url�������� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            url: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^https?:\/\/([\w\-]+\.)+/).test(str) : false;
            },
            /**
             * Ư����ȣ ���� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            special: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]+$/).test(str) : false;
            },
            /**
             * ��ȿ�� ��ȭ��ȣ�������� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            phone: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{1,3}-\d{3,4}-\d{4}$/).test(str) : false;
            },
            /**
             * ��ȿ�� yyyy-MM-dd�������� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            dateYMD: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2}$/).test(str) : false;
            },
            /**
             * ��ȿ�� yyyy-MM-dd hh:mm:ss�������� üũ
             *
             * @param {String} str
             * @return {Boolean}
             */
            dateYMDHMS: function (str) {
                isString(str) || (isElement(str) && (str = str.value));
                return (str = trim(str)) ? (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/).test(str) : false;
            },
            /**
             * ��ȿ�� �ֹι�ȣ���� üũ
             *
             * @param {String} strSsn1 ���ֹι�ȣ.
             * @param {String} strSsn2 (Optional) ���ֹι�ȣ. ���� ������ strSsn1������ üũ
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
             * ��ȿ�� �ܱ����ֹι�ȣ���� üũ
             *
             * @param {String} strSsn1 ���ֹι�ȣ.
             * @param {String} strSsn2 (Optional) ���ֹι�ȣ. ���� ������ strSsn1������ üũ
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
     * @description ������ css��Ī ����
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
             * ���� �������� css prefix�� (webkit or Moz or ms or O)
             * @function
             * @return {String}
             */
            vendor: _vendor,
            /**
             * �־��� css�Ӽ��� �����ϴ��� üũ
             *
             * @param {String} cssName üũ�ϰ��� �ϴ� css��
             * @return {Boolean} ��������
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
             * �־��� css�� �տ� ���� �������� �ش��ϴ� prefix�� �ٿ��ش�.
             *
             * @function
             * @param {String} cssName css��
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
             * �������� �����ϴ� �÷����� wmode��带 opaque�� ����
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
             * �˾�. (common.openPopup���ε� ��밡��)
             * @param {string} url �ּ�
             * @param {number=} width �ʺ�.
             * @param {number=} height ����.
             * @param {opts=} �˾� â ��� ���� �ɼ�.
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
             * �˾��� ����� $el ����� �°� ����
             */
            resizePopup: function ($el) {
                if(!($el instanceof jQuery)) { $el = $($el); }
                window.resizeTo($el.width(), $el.height());
            },

            /**
             * �˾��� ����� ���� ȭ����� �߾� ��ġ��ǥ�� ��ȯ
             * @param {number} w �ʺ�.
             * @param {number} h ����.
             * @return {JSON} {left: ��, top: ��}
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
             * data-src�� �ִ� �̹����ּҸ� ������ �ҷ����� ����, �־��� ��������� �ڵ����� ������¡ ó��
             * @param {jQuery} $imgs
             * @param {Number} wrapWidth �ִ� �ʺ� ��
             * @param {Number} wrapHeight �ִ� ���� ��
             * @param {Function} [onError] (optional) �̹����� �Ҿ���� ������ ��� ������ �ݹ��Լ�
             * @return {Boolean} true �ҷ����� �̹����� �־����� ����
             */
            lazyLoadImage: function ($imgs, wrapWidth, wrapHeight, onError) {
                var hasLazyImage = false;
                var dataSrcAttr = 'data-src';

                $imgs.filter('img[data-src]').each(function (i) {
                    var $img = $(this);
                    wrapWidth = wrapWidth || $img.parent().width();
                    wrapHeight = wrapHeight || $img.parent().height();

                    // �̹����� �ε�Ǹ�, ���� ����� üũ�ؼ� �����̹������� �����̹��������� ���� ������ �Ǵ� width, height�� �����Ѵ�.
                    $img.one('load', function () {
                        $img.removeAttr('width height').css({'width':'auto', 'height':'auto'});
                        if($img.attr('data-no-height') === 'true' && this.width > wrapWidth) {
                            $img.css('width', wrapWidth);
                        } else if($img.attr('data-no-width') === 'true' && this.height > wrapHeight) {
                            $img.css('height', wrapWidth);
                        } else {
                            var isHoriz = this.width > this.height;
                            if ( isHoriz ) { // ���η� �� �̹���
                                $img.css('width', Math.min(this.width, wrapWidth));
                            } else { // ���η� �� �̹���
                                $img.css('height', Math.min(this.height, wrapHeight));
                            }
                        }
                    }).attr('src', $img.attr('data-src')).removeAttr('data-src');
                });
                return hasLazyImage;
            },

            /**
             * ��ť��Ʈ�� ���̸� ��ȯ
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
             * ��ť��Ʈ�� �ʺ� ��ȯ
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
             * â�� �ʺ� ��ȯ
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
             * â�� ���̸� ��ȯ
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
         * �ۼ��� Ŭ������ jQuery�� �÷��������� ����� �� �ֵ��� ���ε����� �ִ� �Լ�
         *
         * @param {Class} klass Ŭ����
         * @param {String} name �÷����θ�
         *
         * @example
         * // Ŭ���� ����
         * var Slider = common.Class({
		 *   initialize: function (el, options) { // �������� ������ �ݵ�� ��ų ��..(ù��° �μ�: ��� ������Ʈ, �ι�° �μ�: �ɼǰ���)
		 *   ...
		 *   },
		 *   ...
		 * });
         * common.bindjQuery(Slider, 'hibSlider');
         * // ���� ����
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

            // ������ ���� ����
            $.fn[name].noConflict = function () {
                $.fn[name] = old;
                return this;
            };
        }
    });


    common.define('Listener', function () {
        /**
         * �̺�Ʈ ������
         * @class
         * @name common.Listener
         */
        var Listener = Class( /** @lends common.Listener# */ {
            /**
             * ������
             */
            initialize: function () {
                this._listeners = $({});
            },

            /**
             * �̺�Ʈ �ڵ鷯 ���
             * @param {Object} name �̺�Ʈ��
             * @param {Object} cb �ڵ鷯
             */
            on: function () {
                var lsn = this._listeners;
                lsn.on.apply(lsn, arguments);
                return this;
            },

            /**
             * �ѹ��� ������ �̺�Ʈ �ڵ鷯 ���
             * @param {Object} name �̺�Ʈ��
             * @param {Object} cb �ڵ鷯
             */
            once: function () {
                var lsn = this._listeners;
                lsn.once.apply(lsn, arguments);
                return this;
            },

            /**
             * �̺�Ʈ �ڵ鷯 ����
             * @param {Object} name ������ �̺�Ʈ��
             * @param {Object} cb {Optional} ������ �ڵ鷯. �� ���ڰ� ���� ��� name�� ��ϵ� ��� �ڵ鷯�� ����.
             */
            off: function () {
                var lsn = this._listeners;
                lsn.off.apply(lsn, arguments);
                return this;
            },

            /**
             * �̺�Ʈ �߻�
             * @param {Object} name �߻���ų �̺�Ʈ��
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
     * @description ����/���� ��ü: ���º�ȭ�� �����ϴ� ������(�ڵ鷯)�� ����Ͽ�, ���º�ȭ�� ���� ������ �������� ����(����)
     * �ϵ��� �ϴ� ��ü�̴�.
     * @example
     * // ������ ���
     * common.PubSub.on('customevent', function (){
	 *	 alert('�ȳ��ϼ���');
	 * });
     *
     * // ��ϵ� ������ ����
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
         * ��� UI��� Ŭ������ �ֻ��� Ŭ�����ν�, UIŬ������ �ۼ��Կ� �־ ���� ����� �������ش�.
         * @class
         * @name common.ui.View
         *
         * @example
         *
         * var Slider = Class({
		 *		$extend: common.ui.View,
		 *		// ���1) events �Ӽ��� ���� �̺�Ʈ�ڵ鷯�� �ϰ� ����� �� �ִ�. ('�̺�Ʈ�� selector': '�ڵ鷯�Լ���')
		 *	events: {
		 *		click ul>li.item': 'onItemClick',		// this.$el.on('click', 'ul>li.item', this.onItemClick.bind(this)); �� �ڵ� ����
		 *		'mouseenter ul>li.item>a': 'onMouseEnter'	// this.$el.on('mouseenter', 'ul>li.item>a', this.onMouseEnter.bind(this)); �� �ڵ� ����
		 *	},
		 *	// ���2) selectors �Ӽ��� ���� ������ selector�� �ش��ϴ� ��带 �־��� �̸��� ��������� �ڵ����� ������ �ش�.
		 *	selectors: {
		 *		box: 'ul',			// this.$box = this.$el.find('ul') �� �ڵ�����
		 *		items: 'ul>li.item',	// this.$items = this.$el.find('ul>li.item') �� �ڵ�����
		 *		prevBtn: 'button.prev', // this.$prevBtn = this.$el.find('button.prev') �� �ڵ� ����
		 *		nextBtn: 'button..next' // this.$nextBtn = this.$el.find('button.next') �� �ڵ� ����
		 *	},
		 *	initialize: function (el, options) {
		 *	this.supr(el, options);	// ���4) this.$el, this.options�� �ڵ����� �����ȴ�.
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
                _instances: [] // ��� �ν��Ͻ��� ���� �ִ´�..
            },
            /**
             * ������
             * @param {String|Element|jQuery} el �ش� ������Ʈ(���, id, jQuery � �����̵� �������)
             * @param {Object} options �ɼǰ�
             * @return {Mixes} false �� ��ȯ�Ǹ�, �̹� �ش� ������Ʈ�� �ش� ����� ����Ǿ� �ְų� disabled �������� �ǹ��Ѵ�.
             */
            initialize: function (el, options) {
                options || (options = {});

                var me = this,
                    eventPattern = /^([a-z]+) ?([^$]*)$/i,
                    moduleName, superClass;

                if (!me.name){
                    throw new Error('Ŭ������ �̸��� �����ϴ�');
                }

                moduleName = me.moduleName = common.string.toFirstLower(me.name);
                me.$el = el instanceof jQuery ? el : $(el);

                // ������ ������ ��ų ���ΰ� /////////////////////////////////////////////////////////////////////////////////////////////////
                if(options.rebuild === true) {
                    try { me.$el.data(moduleName).destroy(); } catch(e){}
                    me.$el.removeData(moduleName);
                } else {
                    // �̹� ����ȰŸ� false ��ȯ - �ߺ� ���� ����
                    if (me.$el.data(moduleName) ) {
                        return false;
                    }
                    me.$el.data(moduleName, this);
                }
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                // disabled���¸� false ��ȯ
                if (me.$el.hasClass('disabled') || me.$el.attr('data-readony') === 'true' || me.$el.attr('data-disabled') === 'true') {
                    return false;
                }

                View._instances.push(me);
                superClass = me.constructor.superclass;
                me.el = me.$el[0];													// ���� ������Ʈ�� ������ ����
                me.options = $.extend({}, superClass.defaults, me.defaults, options);			// �ɼ� ����
                me.cid = me.moduleName + '_' + common.getUniqKey();					// ��ü ���� Ű
                me.subViews = {};														// ���� ��Ʈ�Ѹ� �����ϱ� ����
                me._eventNamespace = '.' + me.cid;	// ��ü ���� �̺�Ʈ ���ӽ����̽���


                me.updateSelectors();

                // events �Ӽ� ó��
                // events: {
                //	'click ul>li.item': 'onItemClick', //=> this.$el.on('click', 'ul>li.item', this.onItemClick); ���� ��ȯ
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

                // options.on�� ������ �̺�Ʈ���� Ŭ������ ���ε�
                $.each(me.options.on || {}, function (key, value) {
                    me.on(key, value);
                });
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            },

            updateSelectors: function () {
                var me = this,
                    superClass = me.constructor.superclass;

                // selectors �Ӽ� ó��
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
             * �ı���
             */
            destroy: function () {
                var me = this;

                me.$el.off(me._eventNamespace);

                // me.subviews�� ��ϵ� �ڽĵ��� �ı��� ȣ��
                $.each(me.subViews, function (key, item) {
                    if(key.substr(0, 1) === '$') {
                        item.off(me._eventNamespace);
                    } else {
                        item.destroy && item.destroy();
                    }
                });
            },

            /**
             * �ɼ� �����Լ�
             *
             * @param {String} name �ɼǸ�
             * @param {Mixed} value �ɼǰ�
             */
            setOption: function (name, value) {
                this.options[name] = value;
            },

            /**
             * �ɼǰ� ��ȯ�Լ�
             *
             * @param {String} name �ɼǸ�
             * @param {Mixed} def �ɼǰ��� ���� ��� �⺻��
             * @return {Mixed} �ɼǰ�
             */
            getOption: function (name, def) {
                return (name in this.options && this.options[name]) || def;
            },

            /**
             * ���ڼ��� ���� �ɼǰ��� �����ϰų� ��ȯ���ִ� �Լ�
             *
             * @param {String} name �ɼǸ�
             * @param {Mixed} value {Optional} �ɼǰ�: ���� ��� name�� �ش��ϴ� ���� ��ȯ
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
             * �̺�Ʈ�� ���� Ŭ���� ������ ���ӽ����̽��� �ٿ��� ��ȯ (ex: 'click mousedown' -> 'click.MyClassName mousedown.MyClassName')
             * @private
             * @param {String} eventNames ���ӽ����̽��� ���� �̺�Ʈ��
             * @return {String} ���ӽ����̽��� �پ��� �̺�Ʈ��
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
             * ���� Ŭ������ �̺�Ʈ���ӽ����̽��� ��ȯ
             * @return {String} �̺�Ʈ ���ӽ����̽�
             */
            getEventNamespace: function () {
                return this._eventNamespace;
            },


            /**
             * me.$el�� �̺�Ʈ�� ���ε�
             */
            on: function () {
                var args = arraySlice.call(arguments);
                args[0] = this._normalizeEventNamespace(args[0]);

                this.$el.on.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el�� ��ϵ� �̺�Ʈ�� ����ε�
             */
            off: function () {
                var args = arraySlice.call(arguments);
                this.$el.off.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el�� ��ȸ�� �̺�Ʈ�� ���ε�
             */
            one: function () {
                var args = arraySlice.call(arguments);
                args[0] = this._normalizeEventNamespace(args[0]);

                this.$el.one.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el�� ��ϵ� �̺�Ʈ�� ����
             */
            trigger: function () {
                var args = arraySlice.call(arguments);
                this.$el.trigger.apply(this.$el, args);
                return this;
            },

            /**
             * me.$el�� ��ϵ� �̺�Ʈ �ڵ鷯�� ����
             */
            triggerHandler: function () {
                var args = arraySlice.call(arguments);
                this.$el.triggerHandler.apply(this.$el, args);
                return this;
            },

            /**
             * �ش� ������Ʈ�� ���ε��� Ŭ���� �ν��Ͻ��� ��ȯ
             * @return {Class}
             * @example
             * var tabs = $('div').Tabs('instance');
             */
            instance: function () {
                return this;
            },

            /**
             * �ش� Ŭ������ �Ҽ� ������Ʈ�� ��ȯ
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
     * ������ �̺�Ʈ ���ε�
     * ����Ʈ ���ݿ� �����Ǿ� �ִ� ��ɵ��̱⿡ ���� ������ ���ε����� �ʾƵ� data- �Ӽ��� �߰��ϱ⸸ �ϸ�,
     * �ڵ����� �ش��ɵ�(���̾�ǥ��, ��ħ/�����, ������/��������)�� �۵��ǵ��� ���ش�.
     * (document �� ��������Ʈ������� ���ε�)
     *
     * @namespace
     * @name common.GlobalEvents
     */
    common.define('GlobalEvents', {
        _$tooltip: $(),
        _inited: false,
        /**
         * �ʱ�ȭ �Լ�
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
         * ��Ӵٿ� ���� �̺�Ʈ ���ε�
         *
         * @example
         * &lt;button data-control="dropdown">
         * &lt;div class="d_notpos">...&lt;/div>		&lt;!-- d_notposŬ����: ���� ��ġ�������� �ȵǵ��� �ϱ� ���� �ɼ� -->
         */
        _dropdown: function () {
            var me = this;

            // data-control=dropdown �� ������Ʈ�� Ŭ������ �� �ش� ����� ����.
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
         * ���� ���� �̺�Ʈ ���ε�
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
         * placeholder ��� ���ε�, placeholder�� �����ϴ� ������������ ���õ�
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
         * ��ŵ�׺���̼����� �̵����� ��, �ش� ������ ��Ŀ���� ������..
         */
        _skipNaviFocus: function () {
            $('#skip_nav').on('click', 'a', function (e) {
                $($(this).attr('href')).attr('tabindex', 0).focus();
            });
        },

        /**
         * ž��ư
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
         * INPUT BOX Ű������ �̺�Ʈ
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
                    $(this).val($(this).val().replace(/[^��-����-�Ӱ�-?a-zA-Z]/gi,""));
                });
                $(document).on("keyup", "input:text[korOnly]", function() {
                    $(this).val($(this).val().replace(/[^��-����-�Ӱ�-?]/gi,""));
                });
            }
        },

        /**
         * �ε��� �̹��� ��ġ ����
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
     * Modal Ŭ����<br />
     * // �ɼ� <br />
     * @class
     * @name common.ui.Modal
     * @extends common.ui.View
     */
    common.ui('Modal', function() {
        /**
         * ��� Ŭ����<br />
         * // �ɼ� <br />
         * options.overlay:true �������̸� ����ΰ�<br />
         * options.clone: true	�����ؼ� ��� ���ΰ�<br />
         * options.closeByEscape: true	// escŰ�� ������ �� ������ �� ���ΰ�<br />
         * options.removeOnClose: false	// ���� �� dom�� �����Ұ��ΰ�<br />
         * options.draggable: true				// �巡�׸� ������ ���ΰ�<br />
         * options.dragHandle: 'h1.title'		// �巡�״�� ���<br />
         * options.show: true					// ȣ���� �� �ٷ� ǥ���� ���ΰ�...
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
                 * ��� ������ �߻��Ǵ� �̺�Ʈ
                 * @static
                 */
                ON_MODAL_CREATED: 'created',
                /**
                 * ��� ǥ�� ���� �߻��Ǵ� �̺�Ʈ
                 * @static
                 */
                ON_MODAL_SHOW:'modalshow',
                /**
                 * ��� ǥ�� �Ŀ� �߻��Ǵ� �̺�Ʈ
                 * @static
                 */
                ON_MODAL_SHOWN:'modalshown',	// ǥ�� ��
                /**
                 * ����� ����� ���� �߻��Ǵ� �̺�Ʈ
                 * @static
                 */
                ON_MODAL_HIDE:'modalhide',			// ����� ��
                /**
                 * ����� ������ �Ŀ� �߻��Ǵ� �̺�Ʈ
                 * @static
                 */
                ON_MODAL_HIDDEN: 'modalhidden'	// ���� ��
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
             * ������
             * @constructors
             * @param {String|Element|jQuery} el
             * @param {Object} options
             * @param {Boolean}  options.overlay:true �������̸� ����ΰ�
             * @param {Boolean}  options.clone: true	�����ؼ� ��� ���ΰ�
             * @param {Boolean}  options.closeByEscape: true	// escŰ�� ������ �� ������ �� ���ΰ�
             * @param {Boolean}  options.removeOnClose: false	// ���� �� dom�� �����Ұ��ΰ�
             * @param {Boolean}  options.draggable: true				// �巡�׸� ������ ���ΰ�
             * @param {Boolean}  options.dragHandle: 'h1.title'		// �巡�״�� ���
             * @param {Boolean}  options.show: true					// ȣ���� �� �ٷ� ǥ���� ���ΰ�...
             */
            initialize: function(el, options) {
                var me = this;
                options = options || {};


                if(me.supr(el, options) === false) {
                    return;
                }

                // ������ body�� �Ű�ٰ�, ���� �� �ٽ� �����ϱ� ���� �ӽÿ�Ҹ� �־���´�.
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
             * zindex������ ����� body�ٷ� ���� �ű� �Ŀ� ���µ�, ���� �� ���� ��ġ�� �������Ѿ� �ϹǷ�,
             * ���� ��ġ�� �ӽ� Ȧ���� ����� ���´�.
             * @private
             */
            _createHolder: function() {
                var me = this;

                if(me.$el.parent().is('body')){ return; }

                me.$holder = $('<span class="d_modal_area" style="display:none;"></span>').insertAfter(me.$el);
                me.$el.appendTo('body');
            },
            /**
             * ���� ��ġ�� ������Ű�� Ȧ���� ����
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
             * ���
             */
            toggle: function() {
                var me = this;

                me[ me.isShown ? 'hide' : 'show' ]();
            },

            /**
             * ǥ��
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
                    me.$el.find('h1.d_title').html(me.options.title || '�˸�');
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
             * ����
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
             * ��ó�� ���
             */
            hideModal: function() {
                var me = this;
                // ������ ���̾� ����� �̺�Ʈ �߻�
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
             * ��ť��Ʈ�� ����� ��ġ�ϵ��� ����
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
             * Ÿ��Ʋ ������ �巡�ױ�� ����
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
             * ����� ����� ���¿��� ��Ű�� ���� ��, ��޾ȿ����� ��Ŀ���� �����̰�
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
             * escŰ�� ���� �� ��������
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
             * �������� ����
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
             * ����� ����� ����Ǿ��� �� �����ġ�� ������
             * @example
             * $('...').modal(); // ����� ����.
             * $('...').find('.content').html( '...');	// ��޳����� �������� ����
             * $('...').modal('center');	// �������� �������� ���� ����� ����Ǿ�����, ����� ���� ȭ�鰡��� ���� �̵�
             */
            center: function(){
                this.layout();
            },

            /**
             * �ݱ�
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

        // ��޸���� �ѹ��̶� ȣ��Ǹ�, �� �κ��� �����, ��޸���� �� �ѹ��� �����ϴ� ��쵵 �ִµ�,
        // ������ ���ε����ѳ��°� ��ȿ������ �� �ؼ� �̿� ���� ó����
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
     * WebGNB Ŭ����<br />
     * // �ɼ� <br />
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
         * ����� ����� ���¿��� ��Ű�� ���� ��, ��޾ȿ����� ��Ŀ���� �����̰�
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
     * MovieModule Ŭ����<br />
     * // �ɼ� <br />
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
            player: '.d-player',				// �÷��̾� ����
            poster: '.d-poster',				// ������ ����
            controls: '.d-controls',			// ��Ʈ�ѷ� ����
            accessibility: '.d-accessibility',	// �� ��Ʈ�ѷ� ����
            videoWrap : '.d-videoWrap',			// ������ ����
            btnLayer: '.d-layerBtn',			// ���̾� ���� ��ư
            btnSNS: 'd-sns',					// SNS ��ư
            btnPlay: '.d-videoPlay',			// �÷��� ��ư
            btnCaption: '.d-caption',			// �ڸ� ��ư
            btnClose: '.d-close',				// �ݱ� ��ư

            clipPlayer: '.d-clipPlayer',		// ����Ŭ�� �÷��̾� ����
            btnClipPlay: '.d-clipPlay'			// ����Ŭ�� �÷��� ��ư
        },
        _clickedBtn: null,			//�ߺ������� ���� �ϱ� ���� Ű��

        /**
         * ������ - _playerPlay �Լ��� swfPath: "/js/lib/jplayer" ��θ� �� ������� �Ѵ�.
         * @param {jQuery|Element|String} el ��� ������Ʈ
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me.captinSize = me.$btnCaption.size();

            // ���̾� ���� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.layer', me.selectors.btnLayer, function (e) {
                e.preventDefault();
                me.index = me.$btnLayer.index(this);
                me._clickedBtn = this;									//������ŭ ����ǹǷ� ��ũ�θ� ���߱� ���� Ŭ���� �׸��� ���� ����

                $(this).next().find('.d-videoWrap').addClass('show').end().addClass('show').modal();
                me.$poster.show();
                me.updateSelectors();

                // ���̾� ���½� �ڵ� �÷���
                me.$btnPlay.eq(me.index).trigger('click');
            });

            // �÷��� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.play', me.selectors.btnPlay, function (e) {
                e.preventDefault();

                var $btnPlay = $(this),
                    data = {type: $btnPlay.attr('data-movie-type'), play: $btnPlay.attr('data-play-type'), rtmpv: $btnPlay.attr('data-movie-rtmpv'), mp4: $btnPlay.attr('data-movie-mp4'), webm : $btnPlay.attr('data-movie-webm'), ogg: $btnPlay.attr('data-movie-ogg'), poster: $btnPlay.attr('data-movie-poster')};

                if (e.type === 'click') {
                    me.$accessibility.show();
                    me.index = me.$el.find(me.selectors.btnPlay).index(this);
                    me.volume = 0.5;
                    // �÷��̾ ���� ���� ���.
                    if ($btnPlay.attr('data-play') !== 'T') {
                        // �÷��̾� �и��Ͽ� ����
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

            // �ݱ� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.stop', me.selectors.btnClose, function (e) {
                e.preventDefault();
                me._playerStop('');
            });

            // �ڸ����� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.caption', me.selectors.btnCaption, function (e) {
                e.preventDefault();
                if ($(this).parent().hasClass('on')) {
                    $(this).find('.none').html($(this).attr('data-caption-open'));
                } else {
                    $(this).find('.none').html($(this).attr('data-caption-close'));
                }
                $(this).parent().toggleClass('on').siblings().toggleClass('show');
            });

            // ������ �� ��Ʈ�ѷ� ���� CLICK
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
                    // Ŭ���� ��ư�� ���� ó��
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

            // ������ ��Ʈ�ѷ� ���� CLICK
            me.$el.on('click.controls', me.selectors.controls, function (e) {
                e.preventDefault();
                var $videoWrap  = me.$videoWrap.eq(me.index),
                    $btnPlay  = me.$btnPlay.eq(me.index),
                    fullScreen = me.$btnPlay.eq(me.index).attr('data-fullscreen-id');

                if (e.type === 'click') {
                    // Ŭ���� ��ư�� ���� ó��
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

            // ���̾�� �÷��̾� ȣ���� ��� ó�� ���μ���
            common.PubSub.on('show:modal', function () {
                if(!me._clickedBtn) return;			//�ߺ� ���� ����
                me.$accessibility.hide();
            });

            // ���̾�� �÷��̾� ȣ���� ��� �ݱ� ��ư Ŭ���� ó�� ���μ���
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
         * ������ ��ũ�ѽ� �ڵ� �÷��� ���� ó��
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
         * youtube ������ ����
         * @param {JSON} data
         *	@param {String} mp4 youtube ������ ID
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
         * youtube �������� �غ�� ��� �÷���
         */
        _youtubePlayerReady: function () {
            var me = this;

            // ���̾ �ƴ� ��� �ڵ� �÷��� - ���ĸ��� ��� �ڵ��÷��� ����
            if (!common.browser.isSafari) {
                me.ytplayer.playVideo();
            }
        },

        /**
         * youtube �������� ����� ��� ó��
         */
        _youtubeStateChange: function (e) {
            var me = this;
            // ��Ʃ�� �÷��� �����
            if (e.data === 0) {
                me._playerStop('auto');
            }
        },

        /**
         * jPlayer ���� �� �÷���
         * 	@param {JSON} data
         *	@param {String} mp4 ������ mp4 URL
         *	@param {String} webm ������ webm URL
         *	@param {String} ogg ������ ogg URL
         *	@param {String} poster ������ ������ URL
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

            // player ���� ���߰� �����
            me.screenX = 0;
            me.screenY = 0;
            me._playerStop('');
            // ������ �÷���
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

            // ������ ���� ���콺 ������ ���� ����
            $player.on('mouseenter.player mouseleave.player mousemove.player mousestop.player',function (e) {
                var $btnPlay  = me.$btnPlay.eq(me.index);

                if ($btnPlay.attr('data-play') === 'T' && $btnPlay.attr('data-movie-type') === 'movie') {
                    switch(e.type) {
                        case 'mouseenter':
                            // ������ �÷��� �������� ���콺�� ���� ��� Interval�� �ʱ�ȭ�Ѵ�.
                            clearInterval(me.mouseOutTimer);
                            me.mouseOutTimer = null;
                            break;
                        case 'mousemove':
                            if ((me.screenX > 0 && (me.screenX + 1) < e.screenX) || (me.screenY > 0 && (me.screenY + 1) < e.screenY)) {
                                me.screenX = e.screenX;
                                me.screenY = e.screenY;
                                // ������ �÷��� �������� ���콺 ������ ��� ��ư ��� �����ش�.
                                me._buttonControl({type: 'show'});
                            } else {
                                me.screenX = e.screenX;
                                me.screenY = e.screenY;
                            }
                            break;
                        case 'mouseleave':
                            // ������ �÷��� �������� ���콺�� ������ 1.5���Ŀ� ��ư SHOW/HIDE �Լ� ����
                            me.mouseOutTimer = setTimeout(function () {
                                if ($btnPlay.attr('data-play') === 'T') {
                                    me._buttonControl({type: 'hide'});
                                }
                            }, 1500);
                            break;
                        case 'mousestop':
                            // ���콺�� 1.5�� �����ÿ� ��Ʈ�� ������ �����.
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
                            // ���콺�� 1.5�� �����ÿ� ��Ʈ�� ������ �����.
                            me._buttonControl({type: 'hide'});
                            break;
                        default:
                            break;
                    }
                }
            }).mousestop();
        },

        /**
         * �÷��̾� ��Ʈ�ѷ� ���� ���÷��� ���� �Լ�
         * @param {JSON} data
         *	@param {String} force �÷��̾� ��Ʈ�ѷ� ���� ���� SHOW �ɼ�(show)
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
         * �÷��� Pause/Stop �Լ�
         * @param {String} action �÷��� Pause/Stop �ɼ�
         */
        _playerAction: function (action) {
            var me = this,
                $player = me.$player.eq(me.index),
                $videoWrap  = me.$videoWrap.eq(me.index),
                $btnPlay = me.$btnPlay.eq(me.index),
                $controls  = me.$controls.eq(me.index),
                $btnCaption  = me.$btnCaption.eq(me.index),
                $accessibility  = me.$accessibility.eq(me.index);

            // ��ư ����ȭ (Play/Pause/Stop ��ư Ŭ���� ������ ��ư ����ȭ)
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
         * ������ Resize�� Full/Down ��ư ���� �Լ�
         * @param
         */
        _playerResize: function () {
            var me = this,
                $videoWrap  = me.$videoWrap.eq(me.index),
                $controls  = me.$controls.eq(me.index);

            // ��ư Ŭ���ø��� ó���Ͽ����� ������ FULL �������� ESC�� ������ų�� ��ư�� ������� �ʾƼ� RESIZE�ÿ� �����ϴ� ������ ó��
            if ($videoWrap.hasClass('jp-video-full')) {
                $controls.find('.d-fullDown').removeClass('btn_full').addClass('btn_small').find('.none').html($controls.find('.btn_small').attr('data-full-screen-text'));
            } else {
                $controls.find('.d-fullDown').removeClass('btn_small').addClass('btn_full').find('.none').html($controls.find('.btn_full').attr('data-down-screen-text'));
            }
        },

        /**
         * ������ ���� �Լ�
         * @param {String} auto �ڵ������� ���� Oject�� �������� �ʰ� ����
         */
        _playerStop: function (auto) {
            var me = this,
                attrPlay = me.$btnPlay.eq(me.index).attr('data-play-type'),
                $videoWrap  = me.$videoWrap.eq(me.index),
                $player = me.$player;

            if (auto !== 'auto') {
                // jPlayer�� ��� ����
                try {
                    $player.jPlayer("destroy");
                } catch(e) {}

                // youtube�� ��� IE8���� �ܼ��� Dom�� �����ϸ� ������ ���ܼ� ó�� ���� �߰�
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
                /* 151123 ���� */
                if($that.hasClass('btn_play_Gear') || $that.hasClass('btn_play_Epi') || $that.hasClass('btn_play_che') || $that.hasClass('btn_play_joy') ||$that.hasClass('btn_play_life')){
                    $that.attr('data-play','F').removeClass('btn_pause').removeClass('btn_play').show().find('.none').html($that.attr('data-play-text')).show();
                }else{
                    $that.attr('data-play','F').removeClass('btn_pause').addClass('btn_play').show().find('.none').html($that.attr('data-play-text')).show();
                }
                /* //151123 ���� */
            });
        }
    });

    /**
     * FullImage Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
         * �̹��� ũ�� ���� - �����ִ� ������ width�� height���� ũ�� ���� �� ���� �����Ѵ�.
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
     * OnScreen Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
                            // Position�� Absolute�� ���
                            me.$content.eq(value).animate({
                                'top': me.top - 100,
                                'opacity': 1
                            }, 700);
                        } else {
                            // Position�� Absolute�� �ƴ� ���
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
     * Placeholder Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {String|Element|jQuery} el �ش� ������Ʈ(���, id, jQuery � �����̵� �������)
         * @param {Object} options �ɼǰ�
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
         * placeholder ����(only ie9 ����)
         */
        update: function(){
            var me = this;
            me.$el.val(me.placeholder);
        },

        /**
         * �ı��� : �ڵ����� ȣ����� �����Ƿ�, �ʿ��� ���� ���� ȣ�����־�� �Ѵ�.
         */
        destroy: function () {
            var me = this;

            me.$el.removeData();
            me.supr();
        }
    });

    /**
     * SequnceModule Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
                    /* 141017 - ������ ������ ���� */
                    common.startSequenceElement(me.$content, { fps: 30, loop: loop, overlay: me.$content.attr('data-id'), onComplete: me._complete.bind(me)});
                }
            }
        },

        _buttonType: function (loop) {
            var me = this;

            $.each(me.$content, function (k, value) {
                common.createSequenceElement($(this), $(this).attr('data-image-pattern'), $(this).attr('data-image-max'));
            });

            // �÷��� ��ư �̺�Ʈ ���ε�
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
                    /* 141017 - ������ ������ ���� */
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

            // �÷��� ��ư �̺�Ʈ ���ε�
            me.$el.on('focusin.overSeq focusout.overSeq mouseenter.overSeq mouseleave.overSeq', 'a', function (e) {
                e.preventDefault();
                if (e.type === 'mouseleave' || e.type === 'focusout') {
                    me.over = true;
                    common.stopSequenceElement(me.$content);
                    common.createSequenceElement(me.$content, me.$content.attr('data-image-pattern'), me.$content.attr('data-image-max'));
                } else if ((e.type === 'mouseenter' || e.type === 'focusin') && me.over) {
                    me.over = false;
                    /* 141017 - ������ ������ ���� */
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
     * WidthSlide Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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

            // �ʱ� ����
            me._animate(me.nowCount, 0);
        },
        /**
         * Object�� �̵���Ű�� �Լ�
         * @memberOf WidthSlide
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
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
                //@140930 �Ŀ� Ʈ������ �⵵�� ���� ��� be_img Ŭ������ ������
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
     * TechnologyModule Ŭ����<br />
     * // �ɼ� <br />
     * options.delayTime: integer <br />		//�ִϸ��̼��� �̵��ϴµ� �ɸ��� �ð� ����
     * options.step: integer <br />				//�������� ������ ����
     * options.margin: integer <br />			//������
     *
     * @class
     * @name common.ui.TechnologyModule
     * @extends common.ui.View
     */
    common.ui('TechnologyModule', {
        bindjQuery:'technologyModule',
        defaults: {
            delayTime: 500,						//�ִϸ��̼� �̵��ð�
            step: 5,
            margin: 32
        },
        maxWidth: 0,							//������������ ����
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
         * �̺�Ʈ ���ε�
         * @private
         */
        _addEvent: function () {
            var me = this,
                resizeTimer = null;

            //me._setDragEvent(me.$handler);
            //me.center = parseInt(me.$handler.css('right'),10);
            //���� ��ư�� ������ ���
            me.$prev.on('click', function (event) {
                event.preventDefault();
                me.width = (parseInt(me.$handler.css('right'),10) > me.center) ? me.center + 'px' : me.defaults.margin + 'px';
                me._togglePosition(me.width, me.options.delayTime);
            });

            //���� ��ư�� ������ ���
            me.$next.on('click', function (event) {
                event.preventDefault();
                me.width = (parseInt(me.$handler.css('right'),10) < me.center) ? me.center + 'px' : (me.$fullArea.width() - me.defaults.margin) + 'px';
                me._togglePosition(me.width, me.options.delayTime);
            });

            // �¿� �̵� ��ư Ŭ��
            me.$handler.on('mousedown.moveTime keydown.moveTime', function (e) {
                var playHead = Math.round((me.$mask.width() / me.$fullArea.width()) * 100);
                if (e.type === "mousedown") {
                    me.$fullArea.css({"z-index":100});
                    me.mousedown = true;
                } else if (e.keyCode === 37) {								// ���� Ű
                    e.preventDefault();
                    me.width = (parseInt(me.$handler.css('right'),10) < me.center) ? me.center + 'px' : (me.$fullArea.width() - me.defaults.margin) + 'px';
                    me._togglePosition(me.width, me.options.delayTime);
                } else if (e.keyCode === 39) {								//������ Ű
                    e.preventDefault();
                    me.width = (parseInt(me.$handler.css('right'),10) > me.center) ? me.center + 'px' : me.defaults.margin + 'px';
                    me._togglePosition(me.width, me.options.delayTime);
                }
            });

            // �¿� �̵� ��ư Ŭ�� �� ���콺 ��ġ ���
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

            // ���콺�� �̺�Ʈ��
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
     * AudioModule Ŭ����<br />
     * // �ɼ� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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

            // �÷��� ��ư �̺�Ʈ ���ε�
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

            // ���� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.Prev', me.selectors.btnPrev, function (e) {
                e.preventDefault();
                me.index = (me.index - 1 < 0) ? me.$list.eq(me.tabs).find('li').size() - 1 : me.index - 1;
                me._playerStop();

            });

            // ���� ��ư �̺�Ʈ ���ε�
            me.$el.on('click.Next', me.selectors.btnNext, function (e) {
                e.preventDefault();
                me.index = (me.index + 1 < me.$list.eq(me.tabs).find('li').size()) ? me.index + 1 : 0;
                me._playerStop();
            });

            // ���콺�� �̺�Ʈ��
            common.PubSub.on('audioStop', function (e) {
                e.preventDefault();
                me.index = 0;
                me.tabs = (me.tabs) ? 0 : 1;
                me._playerStop();
            });
        },
        /**
         * �÷������� audio�� ����
         * @memberOf AudioModule
         * @name _playerStop
         * @private
         *
         * @example
         * audioModule._playerStop();
         */
        _playerStop: function () {
            var me = this;
            // Ŭ���� ����
            me.$btnPlay.removeClass('play');
            me.$list.eq(me.tabs).find('li').eq(me.index).activeRow('on');
            me.$btnPrev.addClass(me.options.asMore);
            me.$btnNext.addClass(me.options.asMore);
            //if (me.index === 0) me.$btnPrev.removeClass(me.options.asMore);
            //if (me.index === me.max) me.$btnNext.removeClass(me.options.asMore);

            // �÷��̾� ����
            try {
                me.$player.jPlayer("destroy");
            } catch(e) {}
            common.stopSequenceElement(me.$seqContent);
            common.createSequenceElement(me.$seqContent, me.$seqContent.attr('data-image-pattern'), me.$seqContent.attr('data-image-max'));
        }
    });

    /**
     * SlideModule Ŭ����<br />
     * // �ɼ� <br />
     * options.width: integer <br />
     * options.index: integer	<br />
     * options.thumb: interger <br />
     * options.isAnimation: boolean 	�ִϸ��̼��� ���������� ����<br />
     * options.delayTime: integer 	animation delay time<br />
     * options.poistion: String <br />
     * options.asMore: String 			����, ���� �̹����� ������� ����Ǵ� Ŭ������<br />
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
            isAnimation: true,						//�ִϸ��̼��� ���������� ����
            delayTime: 700,						//animation delay time
            position: 'relative',
            asMore: 'be_img',						//����, ���� �̹����� ������� ����Ǵ� Ŭ������
            isreverse: false,
            easing: 'easeOutQuad'
        },
        selectors: {
            list: '.d-list',							//slide�� �׷�
            slide: '.d-slide',						//Ŭ���� ���� �̺�Ʈ�� ����Ǵ� ���
            indicator: '.d-indicator',
            btnPrev: '.d-prev',					//������ư
            btnNext: '.d-next',					//������ư
            thumb: '.d-thumbnail',
            numCount: '.d-num-count',		//�ش� �±װ� ������ ī������ ������
            dimLeft: '.dim_left',
            dimRight: '.dim_right',
            image: '.d-image'
        },

        /**
         * Object���� ��ǥ���� ����
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

            //���� options.index ���� ���� ��� �ش� ��ǥ�� �̵� @141007
            me._animate(me.options.index, 0, function () {});
        },

        /**
         * Object�� �̵���Ű�� �Լ�
         * @memberOf SlideModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
         * @param {function} callback �̺�Ʈ ó���� �����ų callback�Լ�
         *
         * @example
         * slideModule._animate(1, 500, function () {alert(1);});
         */
        _animate: function (index, delayTime, callback) {
            var me = this;

            // �����̵�ÿ� ������ �÷��̾� ����
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

            //@141007	//���� �̹����� ū�̹����� ��ü
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
                        me.$numCount.text(me.options.index+1);			//�±װ� ������ �� ��ü
                    }, me.options.delayTime);
                }
            });

            if (me.$bg.size() > 0) me.$bg.fadeOut(me.options.delayTime, me.options.easing).eq(index).fadeIn(me.options.delayTime, me.options.easing);
        },

        /**
         * ���� �̺�Ʈ ���ε���
         * @memberOf SlideModule
         * @name _resize
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
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
         * ���� �̺�Ʈ ���ε���
         * @memberOf SlideModule
         * @name _bindEvent
         * @private
         *
         * @example
         * slideModule._bindEvent();
         */
        _bindEvent: function () {
            var me = this,
                //@play���� audio ����
                checkAudio = function () {
                    if(me.options.skipPadding == true){
                        var $audioPlay = me.$slide.eq(me.options.index).find('.d-audioPlay');
                        if($audioPlay.hasClass('play') == true) $audioPlay.trigger('click.play');
                    }
                };

            //�ε������ Ŭ����
            me.on('click.indicator', me.selectors.indicator, function (e) {
                e.preventDefault();
                me.options.index = me.$indicator.index(this);
                me._animate(me.options.index, me.options.delayTime);
            });

            //������ Ŭ����
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._setWidth();			//�ʺ� ( ������ ) ����
            me._bindEvent();
        }
    });

    /**
     * EdgeSlideModule Ŭ����<br />
     * // �ɼ� <br />
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
            list: '.d-list',			//slide�� �׷�
            slide: '.d-slide',		//Ŭ���� ���� �̺�Ʈ�� ����Ǵ� ���
            btnChange: '.d-change',
            btnPlay: '.d-videoPlay',
            btnFull: '.d-showFull',
            btnPrev: '.d-prev',				//������ư
            btnNext: '.d-next',				//������ư
            txtIndex: '.d-index-count',
            txtMax: '.d-max-count',
            image: '.d-image'
        },
        /**
         * Object���� ��ǥ���� ����
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
         * Object�� �̵���Ű�� �Լ�
         * @memberOf EdgeSlideModule
         * @name _animate
         * @private
         *
         * @param {integer} add
         * @param {integer} delayTime ���ϸ��̼� �ð�
         *
         * @example
         * edgeSlideModule._animate(1, 500);
         */
        _animate: function (add, delayTime) {
            var me = this,
                cssX,
                posX,
                i;

            // �����̵�ÿ� ������ �÷��̾� ����
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
         * ȭ��ũ�Ⱑ ���� �� ��� �ػ󵵿� ���� object���� ��ǥ�� �̵�
         * @memberOf EdgeSlideModule
         * @name _resize
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
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
         * ���� �̺�Ʈ ���ε���
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
         * ū�̹����ϰ�� �̹��� ġȯ
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

            // �̹��� FULL �̹����� ��ü
            me.$image.eq(me.move1).attr('src', me.$image.eq(me.move1).attr('data-fullimage-src'));
            me.$image.eq(me.move2).attr('src', me.$image.eq(me.move2).attr('data-fullimage-src'));
            me.$image.eq(me.index).attr('src', me.$image.eq(me.index).attr('data-fullimage-src'));
        },
        /**
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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

            me._setWidth();			//�ʺ� ( ������ ) ����
            me._bindEvent();
        }
    });

    /**
     * Cascade Ŭ����<br />
     * // �ɼ� <br />
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
            className: 'd-none',					//ġȯ�� Ŭ������
            type: null								//resizeHeight(Ŭ���� ��ũ�� �̵�), self(�ڱ��ڽſ� ���� toggleClass('on'))
        },
        selectors: {
            list: '.d-list',							//slide�� �׷�
            clickable: '.d-clickable',				//Ŭ���� �� �ִ� ���
            slide: '.d-slide',						//Ŭ���� ���� �̺�Ʈ�� ����Ǵ� ���
            btnExps: '.d-btnExps'
        },
        /**
         * childNode�� �ְ� �ƹ� ��ũ�� ������ ������
         * @memberOf Cascade
         * @name _defaultFunc
         * @private
         *
         * @param {Object} $selectedCell ���õ� �����̵� object
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
         * childNode�� �ְ� ������ ��ũ���� ��ġ�� �������϶�
         * @memberOf Cascade
         * @name _resizeHeight
         * @private
         *
         * @param {Object} $selectedCell ���õ� �����̵� object
         * @param {Integer} idx ����Ʈ�� index��
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
         * childNode��  ���� �ڱ� �ڽŸ� toggle�ɶ�
         * @memberOf Cascade
         * @name _selfFunc
         * @private
         *
         * @param {Object} $selectedCell ���õ� �����̵� object
         *
         * @example
         * cascade._selfFunc($selectedCell);
         */
        _selfFunc: function ($selectedCell) {
            var me = this;
            $selectedCell.toggleClass('on');
        },
        /**
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
         * @param {JSON} options
         *
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._bindEvent();
        },
        /**
         * ���� �̺�Ʈ ���ε���
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
     * RelateModule Ŭ����<br />
     * // �ɼ� <br />
     * options.delayTime: integer <br />
     * options.asMore: String <br />
     * options.isFullType: Boolean <br />
     * options.index: ó�� ���۽� ������ index <br/>
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
         * �̺�Ʈ ���ε�
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
         * Object�� �̵���Ű�� �Լ�
         * @memberOf RelateModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
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
     * AjaxRelateModule Ŭ����<br />
     * // �ɼ� <br />
     * options.delayTime: integer <br />
     * options.asMore: String <br />
     * options.isFullType: Boolean <br />
     * options.moveCount: Integer <br />
     * options.index: ó�� ���۽� ������ index <br/>
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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

            // ���� �ε�� �ε� �������� ���� �������� �߰����� �����͸� �ش�.
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

                        // PREV�� ��� ��ġ �̵� (���ʿ� �α� ����)
                        (me.prev) ? me._animate(me.options.moveCount, 0): $(this).noop();
                        me._btnControl();
                    }
                });
            } else {
                me._btnControl();
            }
        },

        /**
         * �̺�Ʈ ���ε�
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
         * Object�� �̵���Ű�� �Լ�
         * @memberOf RelateModule
         * @name _animate
         * @private
         *
         * @param {integer} index
         * @param {integer} delayTime ���ϸ��̼� �ð�
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
     * GNB Ŭ����<br />
     * // �ɼ� <br />
     * options.className: 	String ġȯ�� Ŭ������ <br />
     * options.easing: 		String slideUp, slideDown���� easing ( Ƽ�� ���� ���� )<br/>
     * options.delayTime: 	Integer slideUp/Down���� delay�ð� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
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
         * �����̼��� �����ִ� �׸� ����
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
         * �̺�Ʈ ���ε�
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
                    e.stopPropagation();												// document Ŭ���� ���̾ ������

                    if(me._isAnimation == false) return;
                    me._isAnimation = false;

                    if(me.$searchLyr.hasClass(me.options.className) == true){
                        me.$searchLyr.find('.close').triggerHandler('click');
                    }

                    var $this = $(this),
                        idx = me.$clickable.index($this),
                        $selectedCell = me.$level0.eq(idx).toggleClass(me.options.className);

                    //�ִϸ��̼� ó���� ���� �κ�
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


            //�˻���ư�� ��������
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
                //�˻� ���̾� �˾��� ������ css �����
                'show:modal': function () {
                    $('.d_modal_overlay').hide().fadeIn(me.options.dealyTime);
                    me.$searchLyr.removeAttr('style').css({
                        'z-index': '9999'
                    });
                },
                //�˻� ���̾� �˾��� ��������
                'hide:modal': function () {
                    if(me.$searchLyr.hasClass('on') == false) return;
                    me.$searchLyr.show().fadeOut(me.options.dealyTime, function () {
                        me.$searchBg.toggleClass('on');
                        me.$searchLyr.toggleClass('on');
                    });
                },
                //�˻� ���̾� dim�� ��������
                'show:layout': function () {}
            });
            //�˻�����

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

            // ���� Ŭ���� ī�װ� ���̾� ����
            common.PubSub.on('document.click', function (e) {
                if(me.$searchLyr.hasClass('on') == false) me._closeLocationInSelected();
            });

            //index���� �ش� �ϴ� �������� location�� �缳��
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
     * Footer Ŭ����<br />
     * // �ɼ� <br />
     * options.className: 	String ġȯ�� Ŭ������ <br />
     * options.easing: 		String slideUp, slideDown���� easing ( Ƽ�� ���� ���� )<br/>
     * options.delayTime: 	Integer slideUp/Down���� delay�ð� <br />
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
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._bindEvent();
        },
        /**
         * �̺�Ʈ ���ε�
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


            // ���� Ŭ���� ī�װ� ���̾� ����
            common.PubSub.on('document.click', function (e) {
                if(me.$list.hasClass('on') == true) me.$clickable.trigger('click');
            });

        }
    });


    /**
     * RollingCounter Ŭ����<br />
     * // �ɼ� <br />
     * options.easing: 		String �ִϸ��̼� easing �� <br />
     * options.rollCount:	Integer �߰��� ������� �� ȸ����ų���� ���� ī��Ʈ
     * options.height: 		Integer ?�̰�<br />
     * options.duration:	Integer �ڸ������� �ִϸ��̼��� ���۵Ǵ� ��<br />
     * options.delayTime: 	Integer �ִϸ��̼� duration <br />
     * @class
     * @name common.ui.RollingCounter
     * @extends common.ui.View
     */
    common.ui('RollingCounter', {
        bindjQuery:'rollingCounter',
        defaults: {
            easing: 'easeInOutQuart',
            rollCount: 1,			//�߰��� ������� �� ȸ����������
            height: 0,				// ����
            delay: 100,
            delayTime: 2000		// �ڸ������� �ִϸ��̼� ����
        },
        selectors: {
        },

        /**
         * ������
         * @param {jQuery|Element|String} el ��� ������Ʈ
         * @param {JSON} options
         */
        initialize: function (el, options) {
            var me = this;

            if(me.supr(el, options) === false) { return; }

            me._$items = [].reverse.call(me.$el.find('.d-digit'));		// ���ڿ� �ش��ϴ� �� ��Ҹ� ã�Ƽ� �Ųٷ� ���Ľ��Ѽ� ������ �ִ´�.(�ϴ������� �ִϸ��̼��� ����)
            me._numbers = (me.$el.attr('data-value') || parseInt(me.$el.text() || 0))+"";		// �ѷ��� ���ڰ�

            common.PubSub.on('scroll.trigger', function (e) {
                me.onScreen = common.isOnScreen(me.$el, 100);
                if (me.onScreen.length > 0 && me.$el.attr('data-start') !== 'start') {
                    me.$el.attr('data-start', 'start');
                    me.start();
                }
            });
        },
        /**
         * �ִϸ��̼� ���ۺκ�
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
                numbers = [].reverse.call(me._numbers.split('')).join(''), // ���ڸ� �Ųٷ� ����
                ease = opts.easing,
                len = numbers.length,
                height = (opts.height == 0 ? me._$items.height(): me.options.height),
                totalHeight = (10*height);
            me.options.height = height;

            me._$items.attr('style', 'background-position:0 0px').stop(true).each(function(i){
                if(i >= len){ return false; }

                var $el = $(this),
                    n = parseInt(numbers.substr(i, 1), 10),		// i��° ���ڸ� ������
                    y = (n*opts.height)+(totalHeight*opts.rollCount);				// n�� �ش��ϴ� top�� ���

                $el.delay(i * opts.delay).queue(function(){
                    // ie9, firefox���� backgroundPosition�� ���� animate����� ������ �־ Ʈ������ ����
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
         * ������Ʈ
         * @memberOf RollingCounter
         * @name update
         * @public
         * @param {Interger} newNumber ���ο� ���ڰ�
         *
         * @example
         * $('..').rollingCounter('update', 1234); �� ȣ���ϸ� ���ڰ� �����
         */
        update: function(newNumber) {
            var me = this;
            me._numbers = newNumber+"";
            me.start();
        }
    });

})(window, jQuery, common, common.ui);


// �۷ι� �۾���
(function ($, common, ui, undefined) {
    var $win = common.$win,
        $doc = common.$doc,
        ui = common.ui,
        winResize = null,
        $gallerys = $('.md_egim-h'),
        $sns = $('.sns_share'),
        $top = $('.d-top');

    // �۷ι� �̺�Ʈ ���ε�
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

    // ���콺���� - User Event �߻�
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
