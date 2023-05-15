$(document).ready(function() {
    $.fn.elements = function() {

        $("krag-slide-range").each(function(krag_slide_range_counter) {
            var attributes_collection = "";
            var attrs = this.attributes;
            var id_value = $(this).attr("id");
            var slide_range_id = "";
            var slide_ranger_selector = 'input[type="range"]';
            var parent_attr_colle = "";
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "id") {
                    if (id_value == "" || id_value == null) {
                        slide_range_id = "krag-slide-range-" + krag_slide_range_counter;
                    } else {
                        slide_range_id = id_value;
                    }
                } else {

                }
            });
            $(this).replaceWith("<script>$(document).ready(function() {new RangeSlider($('.krag-slide-range'), {size: 1,borderSize: 0.3,percentage: 100});});</script><div class='krag-slide-range'></div>");
            krag_slide_range_counter++;
        });

        $("krag-button").each(function(krag_button_counter) {
            var attributes_collection = "";
            var attrs = this.attributes;
            var id_value = $(this).attr("id");
            var button_id = "";
            var parent_attr_colle = "";
            var button_class = "";
            var ripple_class = "";
            var button_value = $(this).attr("value");
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "id") {
                    if (id_value == "" || id_value == null) {
                        button_id = "krag-button-" + krag_button_counter;
                    } else {
                        button_id = id_value;
                    }
                } else if (elem.name == "value") {
                    if (button_value == "" || button_value == null) {
                        button_value = "Button";
                    } else {
                        button_value = button_value;
                    }
                } else if (elem.name == "style-options") {
                    parent_attr_colle = element_value;
                    if (parent_attr_colle == "primary-style") {
                        parent_attr_colle = "button-primary-style-filled"
                    } else {
                        parent_attr_colle = "button-primary-style-filled"
                    }
                } else if (element_name == "outlined") {
                    button_class = "button-primary-style-outlined";
                    ripple_class = "ripple-outlined";
                } else if (element_name == "filled") {
                    button_class = "button-primary-style-filled";
                    ripple_class = "ripple";
                } else if (element_name == "text") {
                    button_class = "button-primary-style-text";
                    ripple_class = "ripple-text";
                } else {
                    if (id_value == "" || id_value == null) {
                        button_id = "krag-button-" + krag_button_counter;
                    } else {
                        button_id = id_value;
                    }
                    if (button_value == "" || button_value == null) {
                        button_value = "Button";
                    } else {
                        button_value = button_value;
                    }
                    if (button_class == "" || button_class == null) {
                        button_class = "button-primary-style-filled";
                        ripple_class = "ripple";
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }
            });
            $(this).replaceWith("<button id='" + button_id + "' class='krag-button " + ripple_class + " vertical_horizontal_align_space_between " + button_class + "' " + attributes_collection + "><div class='button-icon vertical_horizontal_align_center'></div><div class='button-value vertical_horizontal_align_center'>" + button_value + "</div><div class='button-icon vertical_horizontal_align_center'></div></button>");
            krag_button_counter++;
        });

        $("krag-switch").each(function(krag_switch_counter) {
            var attributes_collection = "";
            var attrs = this.attributes;
            var id_value = $(this).attr("id");
            var switch_id = "";
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "id") {
                    if (id_value == "" || id_value == null) {
                        switch_id = "krag-switch-" + krag_switch_counter;
                    } else {
                        switch_id = id_value;
                    }
                } else {
                    if (id_value == "" || id_value == null) {
                        switch_id = "krag-switch-" + krag_switch_counter;
                    } else {
                        switch_id = id_value;
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }
            });
            $(this).replaceWith("<div class='krag-switch'><label class='krag-switch-slide round'><input id='" + switch_id + "' type='checkbox' " + attributes_collection + " ><span class='slider'><span class='slider-container'></span></span></label></div>");
            krag_switch_counter++;
        });

        $("krag-checkbox").each(function(krag_checkbox_counter) {
            var attributes_collection = "";
            var attrs = this.attributes;
            var id_value = $(this).attr("id");
            var label_value = "";
            var checkbox_id = "";
            var label_for = "";
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "value") {
                    label_value = element_value;
                } else if (elem.name == "id") {
                    if (id_value == "" || id_value == null) {
                        checkbox_id = "krag-checkbox-" + krag_checkbox_counter;
                        label_for = "krag-checkbox-" + krag_checkbox_counter;
                    } else {
                        checkbox_id = id_value;
                        label_for = id_value;
                    }
                } else {
                    if (id_value == "" || id_value == null) {
                        checkbox_id = "krag-checkbox-" + krag_checkbox_counter;
                        label_for = "krag-checkbox-" + krag_checkbox_counter;
                    } else {
                        checkbox_id = id_value;
                        label_for = id_value;
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }
            });
            $(this).replaceWith("<div class='krag-checkbox vertical_horizontal_align_left'><label for='" + label_for + "' class='checkbox-label vertical_horizontal_align_center'><div class='krag-checkbox-label'>" + label_value + "</div><input id='" + checkbox_id + "' type='checkbox' " + attributes_collection + " /><span class='krag-checkbox-check-main-container vertical_horizontal_align_center'><span class='krag-checkbox-check-outer-layer vertical_horizontal_align_center'><span class='krag-checkbox-check-inner-layer vertical_horizontal_align_center'></span></span></span></label></div>");
            krag_checkbox_counter++;
        });

        $("krag-radio").each(function(krag_radio_counter) {
            var attributes_collection = "";
            var attrs = this.attributes;
            var id_value = $(this).attr("id");
            var label_value = "";
            var radio_id = "";
            var label_for = "";
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "value") {
                    label_value = element_value;
                } else if (elem.name == "id") {
                    if (id_value == "" || id_value == null) {
                        radio_id = "krag-radio-" + krag_radio_counter;
                        label_for = "krag-radio-" + krag_radio_counter;
                    } else {
                        radio_id = id_value;
                        label_for = id_value;
                    }
                } else {
                    if (id_value == "" || id_value == null) {
                        radio_id = "krag-radio-" + krag_radio_counter;
                        label_for = "krag-radio-" + krag_radio_counter;
                    } else {
                        radio_id = id_value;
                        label_for = id_value;
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }
            });
            $(this).replaceWith("<div class='krag-radio vertical_horizontal_align_left'><label for='" + label_for + "' class='radio-label vertical_horizontal_align_center'><div class='krag-radio-label'>" + label_value + "</div><input id='" + radio_id + "' type='radio' " + attributes_collection + " /><span class='krag-radio-check-main-container vertical_horizontal_align_center'><span class='krag-radio-check-outer-layer vertical_horizontal_align_center'><span class='krag-radio-check-inner-layer vertical_horizontal_align_center'></span></span></span></label></div>");
            krag_radio_counter++;
        });

        $("krag-textarea").each(function() {
            var attributes_collection = "";
            var parent_attr_colle = "";
            var parent_label_attributes = "";
            var element_placeholder = $(this).attr("placeholder");
            var element_label_name = $(this).attr("label-name");
            var telephone_pattern = $(this).attr("pattern");
            var error_msg_value = "";
            var error_msg_class = "";
            var input_class = $(this);
            var datepicker_language = "";
            var datepicker_class = "";
            var error_msg = $(this);
            var date_time_picker = $(this);
            var responsive_class = "";

            var attrs = this.attributes;
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "label-name") {
                    if (element_label_name == "" || element_label_name == null) {
                        parent_label_attributes = "Label Name";
                    } else {
                        parent_label_attributes = element_label_name;
                    }
                } else if (elem.name == "placeholder") {
                    if (element_placeholder == "" || element_placeholder == null) {
                        if (element_label_name == "" || element_label_name == null) {
                            parent_label_attributes = "Label Name";
                        } else {
                            parent_label_attributes = element_label_name;
                        }
                    } else {
                        attributes_collection += ' ' + element_name + '="' + element_value + '"';
                        parent_label_attributes = "";
                    }
                } else if (elem.name == "style-options") {
                    parent_attr_colle = element_value;
                } else if (elem.name == "responsive") {
                    responsive_class = " responsive-width ";
                } else if (elem.name == "textbox-class") {
                    input_class = " " + $(input_class).attr("textbox-class") + " ";
                } else if (elem.name == "error-msg") {
                    error_msg_value = $(error_msg).attr("error-msg");
                } else if (elem.name == "error-msg-page-onload") {
                    if (elem.value == "hide") {
                        error_msg_class = " col-opacity-0 ";
                    }
                } else if (elem.name == "data-timepicker") {
                    date_time_picker = $(date_time_picker).attr("data-timepicker");
                    if (date_time_picker == "false") {
                        $(".datepicker").css("height", "310px");
                    } else if (date_time_picker == "true") {
                        $(".datepicker").css("height");
                    } else {
                        $(".datepicker").css("height", "310px");
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                } else if (elem.name == "type") {
                    if (elem.value == "phone") {
                        if (telephone_pattern == "" || telephone_pattern == null) {
                            attributes_collection += ' ' + element_name + '="' + element_value + '"' + ' pattern="^[+]?[0-9]{9,12}$"';
                        } else {
                            attributes_collection += ' ' + element_name + '="' + element_value + '"';
                        }
                    } else if (elem.value == "date") {
                        datepicker_class += " datepicker-here ";
                        datepicker_language = "data-language='en'";
                        attributes_collection += ' ' + element_name + '="text"';
                    } else {
                        attributes_collection += ' ' + element_name + '="' + element_value + '"';
                    }
                } else {
                    if (date_time_picker == "false") {
                        $(".datepicker").css("height", "310px");
                    } else if (date_time_picker == "true") {
                        $(".datepicker").css("height", "400px");
                    } else {
                        $(".datepicker").css("height", "310px");
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }

            });
            $(this).replaceWith("<div class='krag-textbox " + parent_attr_colle + responsive_class + "' ><textarea class='krag-textarea-type-1 " + input_class + datepicker_class + responsive_class + "' " + attributes_collection + " " + datepicker_language + " required /></textarea><label class='textbox-label'>" + parent_label_attributes + "</label></div><span class='krag-input-filed-msg-incorrect vertical_horizontal_align_left" + error_msg_class + "'>" + error_msg_value + "</span>");
        });

        $("krag-textbox").each(function() {
            var attributes_collection = "";
            var parent_attr_colle = "";
            var parent_label_attributes = "";
            var element_placeholder = $(this).attr("placeholder");
            var element_label_name = $(this).attr("label-name");
            var telephone_pattern = $(this).attr("pattern");
            var error_msg_value = "";
            var error_msg_class = "";
            var input_class = $(this);
            var datepicker_language = "";
            var datepicker_class = "";
            var error_msg = $(this);
            var date_time_picker = $(this);
            var responsive_class = "";

            var attrs = this.attributes;
            $.each(attrs, function(i, elem) {
                var element_name = elem.name;
                var element_value = elem.value;
                if (elem.name == "label-name") {
                    if (element_label_name == "" || element_label_name == null) {
                        parent_label_attributes = "Label Name";
                    } else {
                        parent_label_attributes = element_label_name;
                    }
                } else if (elem.name == "placeholder") {
                    if (element_placeholder == "" || element_placeholder == null) {
                        if (element_label_name == "" || element_label_name == null) {
                            parent_label_attributes = "Label Name";
                        } else {
                            parent_label_attributes = element_label_name;
                        }
                    } else {
                        attributes_collection += ' ' + element_name + '="' + element_value + '"';
                        parent_label_attributes = "";
                    }
                } else if (elem.name == "style-options") {
                    parent_attr_colle = element_value;
                } else if (elem.name == "responsive") {
                    responsive_class = " responsive-width ";
                } else if (elem.name == "textbox-class") {
                    input_class = " " + $(input_class).attr("textbox-class") + " ";
                } else if (elem.name == "error-msg") {
                    error_msg_value = $(error_msg).attr("error-msg");
                } else if (elem.name == "error-msg-page-onload") {
                    if (elem.value == "hide") {
                        error_msg_class = " col-opacity-0 ";
                    }
                } else if (elem.name == "data-timepicker") {
                    date_time_picker = $(date_time_picker).attr("data-timepicker");
                    if (date_time_picker == "false") {
                        $(".datepicker").css("height", "310px");
                    } else if (date_time_picker == "true") {
                        $(".datepicker").css("height");
                    } else {
                        $(".datepicker").css("height", "310px");
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                } else if (elem.name == "type") {
                    if (elem.value == "phone") {
                        if (telephone_pattern == "" || telephone_pattern == null) {
                            attributes_collection += ' ' + element_name + '="' + element_value + '"' + ' pattern="^[+]?[0-9]{9,12}$"';
                        } else {
                            attributes_collection += ' ' + element_name + '="' + element_value + '"';
                        }
                    } else if (elem.value == "date") {
                        datepicker_class += " datepicker-here ";
                        datepicker_language = "data-language='en'";
                        attributes_collection += ' ' + element_name + '="text"';
                    } else {
                        attributes_collection += ' ' + element_name + '="' + element_value + '"';
                    }
                } else {
                    if (date_time_picker == "false") {
                        $(".datepicker").css("height", "310px");
                    } else if (date_time_picker == "true") {
                        $(".datepicker").css("height", "400px");
                    } else {
                        $(".datepicker").css("height", "310px");
                    }
                    attributes_collection += ' ' + element_name + '="' + element_value + '"';
                }

            });
            $(this).replaceWith("<div class='krag-textbox " + parent_attr_colle + responsive_class + "' ><input class='" + input_class + datepicker_class + responsive_class + "' " + attributes_collection + " " + datepicker_language + " required /><label class='textbox-label'>" + parent_label_attributes + "</label></div><span class='krag-input-filed-msg-incorrect vertical_horizontal_align_left" + error_msg_class + "'>" + error_msg_value + "</span>");
        });

        $(".krag-textbox").find("input").focus(function() {
            $(this).parent().addClass("primary-style");
            $(this).parent().addClass("text-box-no-border");
        });

        $(".krag-textbox").find("input").each(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").removeClass("force-input-valid");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").addClass("force-input-valid");
            }
        });

        $(".krag-textbox").find("input").blur(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
            }
        });

        $(".krag-textbox").find('input[type="date"]').focus(function() {
            $(this).parent().addClass("primary-style");
            $(this).parent().addClass("text-box-no-border");
            $(this).parent().find("label").addClass("force-input-valid");
        });

        $(".krag-textbox").find('input[type="date"]').blur(function() {
            $(this).parent().addClass("primary-style");
            $(this).parent().addClass("text-box-no-border");
            $(this).parent().find("label").addClass("force-input-valid");
        });

        $(".krag-textbox").find('input[type="email"]').blur(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").removeClass("force-input-valid");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").addClass("force-input-valid");
            }
        });

        $(".krag-textbox").find('input[type="url"]').blur(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").removeClass("force-input-valid");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").addClass("force-input-valid");
            }
        });

        $(".krag-textbox").find('input[type="phone"]').blur(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").removeClass("force-input-valid");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").addClass("force-input-valid");
            }
        });

        $(".krag-textbox").find('input[type="number"]').blur(function() {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").removeClass("force-input-valid");
            } else {
                $(this).parent().removeClass("primary-style");
                $(this).parent().removeClass("text-box-no-border");
                $(this).parent().find("label").addClass("force-input-valid");
            }
        });

        $(".krag-textbox").find('input[type="number"], input[type="phone"]').on("keypress keyup blur", function(e) {
            $(this).val($(this).val().replace(/^[a-zA-Z]+$/, ""));
            if ((e.which < 48 || e.which > 57)) {
                e.preventDefault();
            }
        });

        (function(window, $) {

            $(function() {

                $('.krag-button.ripple').on('click', function(event) {
                    event.preventDefault();

                    var $div = $('<div/>'),
                        btnOffset = $(this).offset(),
                        xPos = event.pageX - btnOffset.left,
                        yPos = event.pageY - btnOffset.top;



                    $div.addClass('ripple-effect');
                    var $ripple = $(".krag-button.ripple-effect");

                    $ripple.css("height", $(this).height());
                    $ripple.css("width", $(this).height());
                    $div
                        .css({
                            top: yPos - ($ripple.height() / 2),
                            left: xPos - ($ripple.width() / 2),
                            background: $(this).data("ripple-color")
                        })
                        .appendTo($(this));

                    window.setTimeout(function() {
                        $div.remove();
                    }, 2000);
                });

            });

        })(window, jQuery);

        (function(window, $) {

            $(function() {

                $('.krag-button.ripple-outlined').on('click', function(event) {
                    event.preventDefault();

                    var $div = $('<div/>'),
                        btnOffset = $(this).offset(),
                        xPos = event.pageX - btnOffset.left,
                        yPos = event.pageY - btnOffset.top;



                    $div.addClass('ripple-effect-outlined');
                    var $ripple = $(".krag-button.ripple-effect-outlined");

                    $ripple.css("height", $(this).height());
                    $ripple.css("width", $(this).height());
                    $div
                        .css({
                            top: yPos - ($ripple.height() / 2),
                            left: xPos - ($ripple.width() / 2),
                            background: $(this).data("ripple-color")
                        })
                        .appendTo($(this));

                    window.setTimeout(function() {
                        $div.remove();
                    }, 2000);
                });

            });

        })(window, jQuery);

        (function(window, $) {

            $(function() {

                $('.krag-button.ripple-text').on('click', function(event) {
                    event.preventDefault();

                    var $div = $('<div/>'),
                        btnOffset = $(this).offset(),
                        xPos = event.pageX - btnOffset.left,
                        yPos = event.pageY - btnOffset.top;



                    $div.addClass('ripple-effect-text');
                    var $ripple = $(".krag-button.ripple-effect-text");

                    $ripple.css("height", $(this).height());
                    $ripple.css("width", $(this).height());
                    $div
                        .css({
                            top: yPos - ($ripple.height() / 2),
                            left: xPos - ($ripple.width() / 2),
                            background: $(this).data("ripple-color")
                        })
                        .appendTo($(this));

                    window.setTimeout(function() {
                        $div.remove();
                    }, 2000);
                });

            });

        })(window, jQuery);

    };
    $.fn.elements();
});