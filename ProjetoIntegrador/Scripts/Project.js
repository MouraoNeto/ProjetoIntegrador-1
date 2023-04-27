﻿$(document).ready(function () {
    $("#btnSave").click(function () {

        var url = '/Home/CreateForm'

        $.ajax({
            method: "POST",
            url: url,
            data: $("#ProjectForm").serialize()
        })

    })

    $(".btn").on('click', function (e) {

        var option = e.target.dataset.index;

        var url = '/Home/ControllerMethod'

        var data = {
            Option: option
        }

        $.ajax({
            method: "POST",
            url: url,
            data: data,
            complete: function () {

            },
            error: function (xhr, ajaxOptions, thrownError) {
                bootstrapNotify('<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Não foi possível carregar a listagem de tipos, tente novamente.', "danger", "top");

            },
            success: function (response) {
                $("#Form").html(response);
            }
        })
    });
});