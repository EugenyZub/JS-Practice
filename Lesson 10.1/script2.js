window.addEventListener("DOMContentLoaded", function() {

    function mask(event) {
            def.length >= val.length && (val = def);

        matrix = matrix.replace(/[_\d]/g, function(a) {
            return val.charAt(i++) || "_"

        });

        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");

        setCursorPosition(i, this)

    }

        var input = document.querySelector("input");
        input.addEventListener("input", mask, false);
    });
    