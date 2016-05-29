var EnterKey = 13;

$(document).ready(function () {

    // remove todos
    $(".list").on('click', '.remove', function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

        // change todo/done
    $(".list").on('click', '.todo-label', function (e) {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).css("text-decoration", "line-through");
            $(this).css("color", "#999999");

        } else {
            $(this).css("text-decoration", "none");
            $(this).css("color", "#000000");
        }
    });


    //add class
    $(".list").ready(function () {
        $(".todo-label").click(function () {
            $(this).toggleClass("done");
        });
    });

    //Remove done
    $('.clear-done').click(function () {
        $(".delCheck:checked").closest("div").remove();
        $(".todo-all").attr("unchecked");
    });


    //Select all
    $('.todo-all').click(function () {
        var c = this.checked;
        $(':checkbox').prop('checked', c);
        $(".delCheck:checked").closest("div").css("text-decoration", "line-through").css("color", "#999999");

    });



    // add todos on 'Enter' press
    $('#new-todo').on('keypress', (function (e) {
        if (e.which === EnterKey) {
            // trim and read input
            inputValue = $.trim($("input").val());
            if (inputValue !== "") {
                $(".list").prepend("<div class='todo'><label class='todo-label'><input type='checkbox' class='delCheck'/>" + inputValue + "</label><a href='#' class='remove'>x</a></div>");
            }
            $("input").val(this.defaultValue);
        }
    }));

});


$(function () {
    $(".todo-label").dblclick(function () {
        var OriginalContent = $(this).text();
        $(this).addClass("cellEditing");
        $(this).html("<input type='checkbox' value='" + OriginalContent + "' />");
        $(this).children().first().focus();
        $(this).children().first().keypress(function (e) {
            if (e.which == 13 ) {
                var newContent = $(this).val();
                $(this).parent().text(newContent);
                $(this).parent().removeClass("cellEditing");
            }


        });
        $(this).children().first().blur(function () {
            $(this).parent().text(OriginalContent);
            $(this).parent().removeClass("cellEditing");
        });
    });
});
