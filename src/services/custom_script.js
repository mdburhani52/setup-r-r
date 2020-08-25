
import jQuery from "jquery";
import "./tooltip.js";
// import "./jquery.validate.js";
import {AMOUNT_VALID_REGEX,BALANCE_VALID_REGEX} from 'service/config.js';

var $ = jQuery;


// var bsMajorVer = 0;
// var bsMinorVer = 0;
// $.extend(true, $.validator, {
//     prototype: {
//         defaultShowErrors: function () {
//             var _this = this;
//             var bsVersion = $.fn.tooltip.Constructor.VERSION;

//             // Try to determine Bootstrap major and minor versions
//             if (bsVersion) {
//                 bsVersion = bsVersion.split('.');
//                 bsMajorVer = parseInt(bsVersion[0]);
//                 bsMinorVer = parseInt(bsVersion[1]);
//             }

//             $.each(this.errorList, function (index, value) {

//                 //If Bootstrap 3.3 or greater
//                 if (bsMajorVer === 3 && bsMinorVer >= 3 && $(value.element != null)) {
//                     var specificLocation = _this.errorsFor(value.element);
//                     var $currentElement = $(value.element);

//                     if (specificLocation.length) {
//                         $currentElement = specificLocation;
//                     }

//                     if ($currentElement.data('bs.tooltip') !== undefined) {
//                         $currentElement.data('bs.tooltip').options.title = value.message;
//                     } else {
//                         $currentElement.tooltip(_this.applyTooltipOptions(value.element, value.message));
//                     }

//                     if (specificLocation.length) {
//                         specificLocation.tooltip('show');
//                     } else {
//                         $(value.element).removeClass(_this.settings.validClass)
//                             .addClass(_this.settings.errorClass)
//                             .tooltip('show');
//                     }
                    

//                 } else {
//                     $(value.element).removeClass(_this.settings.validClass)
//                         .addClass(_this.settings.errorClass)
//                         .tooltip(bsMajorVer === 4 ? 'dispose' : 'hide')
//                         .tooltip(_this.applyTooltipOptions(value.element, value.message))
//                         .tooltip('show');
//                 }

//                 if (_this.settings.highlight) {
//                     _this.settings.highlight.call(_this, value.element, _this.settings.errorClass, _this.settings.validClass);
//                 }
//             });

//             $.each(_this.validElements(), function (index, value) {

//                 if ($(value) != null && $(value) != undefined) {
//                     var specificLocation = _this.errorsFor(value);

//                     if (specificLocation.length) {
//                         specificLocation.tooltip(bsMajorVer === 4 ? 'dispose' : 'hide');
//                     } else {
//                         $(value).removeClass(_this.settings.errorClass)
//                             .addClass(_this.settings.validClass)
//                             .tooltip(bsMajorVer === 4 ? 'dispose' : 'hide');
//                     }
//                 }

//                 if (_this.settings.unhighlight) {
//                     _this.settings.unhighlight.call(_this, value, _this.settings.errorClass, _this.settings.validClass);
//                 }
//             });
//         },

//         applyTooltipOptions: function (element, message) {
//             var defaults;

//             if (bsMajorVer === 4) {
//                 defaults = $.fn.tooltip.Constructor.Default;
//             } else if (bsMajorVer === 3) {
//                 defaults = $.fn.tooltip.Constructor.DEFAULTS;
//             } else {
//                 // Assuming BS version 2
//                 defaults = $.fn.tooltip.defaults;
//             }

//             var options = {
//                 // Using Twitter Bootstrap Defaults if no settings are given 
//                 animation: $(element).data('animation') || defaults.animation,
//                 html: $(element).data('html') || defaults.html,
//                 placement: $(element).data('placement') || defaults.placement,
//                 selector: $(element).data('selector') || defaults.selector,
//                 title: $(element).attr('title') || message,
//                 trigger: $.trim('manual ' + ($(element).data('trigger') || '')),
//                 delay: $(element).data('delay') || defaults.delay,
//                 container: $(element).data('container') || defaults.container,
//             };

//             if (this.settings.tooltip_options && this.settings.tooltip_options[element.name]) {
//                 $.extend(options, this.settings.tooltip_options[element.name]);
//             }
//             //jshint ignore:start 
//             if (this.settings.tooltip_options && this.settings.tooltip_options['_all_']) {
//                 $.extend(options, this.settings.tooltip_options['_all_']);
//             }
//             // jshint ignore:end 
//             return options;
//         }
//     },
// });

$.validator.addMethod("phonenumber",
    function (value, element) {
        if (value != '') {
            return /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]{8,18}$/.test(value);
        } else {
            return true;
        }
    },
    "Please enter valid phone number"
);

$.validator.addMethod("postcodecheck",
    function (value, element) {
        if (value != '') {
            return /^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/.test(value);
        } else {
            return true;
        }
    },
    "Please enter valid 4 digit postcode number"
);

$.validator.addMethod("email", function (value, element) {
    if (value != '') {
        return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    } else {
        return true;
    }
}, "Please enter valid email address"
);

$.validator.addMethod("numberValid", function (value, element, param) {

    var val_a = 0;

    return this.optional(element)
        || (value > val_a);
}, "Please enter valid number"
);

$.validator.addMethod("valid_password", function (value, element) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
}, 
"Password must be minimum 8 characters contain atleast 1 capital letter, number and special character");

$.validator.addMethod("alphanum_space", function(value, element) {
    return this.optional(element) || /^[\S+ ]+$/i.test(value.trim());
  }, "Alpha numeric characters allowed in name");

$.validator.addMethod("alphanum_nospace", function(value, element) {
    return this.optional(element) || /^[\S+]+$/i.test(value);
  }, "Alpha numeric characters allowed without space in name");

$.validator.addMethod("amtcompare", function (value, element, param) {
    if (value != '' && value >= 0) {
        return this.optional(element) || parseFloat(value) <= parseFloat($(param).val());
    }
    }, "Amount should be less than or equels to total amount."
);

$.validator.addMethod("dueamtcompare", function (value, element, param) {
    let amt = parseFloat($(param[0]).val());
    let paid =parseFloat($(param[1]).val());
    if (value != '' && value >= 0) {
        let val = amt - paid;
        if(!AMOUNT_VALID_REGEX.test(value)){
            return false;
        }
        return this.optional(element) || (parseFloat(value).toFixed(2) === parseFloat(val).toFixed(2));
    }
    }, "Invalid due amount."
);

$.validator.addMethod("amt_valid", function(value, element) {
    if (value != '') {
        return value > 0 && AMOUNT_VALID_REGEX.test(value);
    }else{
        return true;
    }
  }, "Only 8 digits positive number with 2 decimals are allowed.");

  $.validator.addMethod("valid_balance", function(value, element) {
    if (value != '') {
        return BALANCE_VALID_REGEX.test(value);
    }else{
        return true;
    }
  }, "Only 8 digits number with 2 decimals are allowed.");
  