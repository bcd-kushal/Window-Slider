$(document).ready(function () {
    function controller(a, e) {
        if (confirm_submit("Sure to submit details?") == false) return;
        if (constraintCheck(a, e) == false) return;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            $(".form" + e).submit();
        }, 1600);
    }

    function constraintCheck(end, a) {
        i = 0;
        while (i <= end) {
            if (isEmpty($(".form" + a + " #textarea")[i].value) == true) {
                alert("Empty field detected, please fill in.");
                return false;
            }
            i += 1;
        }
        return true;
    }

    $(".submitForm1").click(function () {
        controller(1, 1);
    });
    $(".submitForm2").click(function () {
        controller(2, 2);
    });
    $(".submitForm3").click(function () {
        controller(1, 3);
    });
    $(".submitForm4").click(function () {
        controller(3, 4);
    });
    $(".submitForm5").click(function () {
        controller(1, 5);
    });
    $(".submitForm6").click(function () {
        controller(1, 6);
    });

    $("#re2").click(function () {
        scrollToSmoothly(0, 1500);
        setTimeout(function () {
            window.location.href = "index_pics.html";
        }, 1600);
    });
    $("#re3").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(function () {
            window.location.href = "index_3b.html";
        }, 1000);
    });
});

function isEmpty(str) {
    if (str.trim() == "") return true;
    return false;
}