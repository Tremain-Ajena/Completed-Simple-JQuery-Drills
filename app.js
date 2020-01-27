$(document).ready(function () {
    let btnSubmit = $('#btnSubmit');
    let btnSubmit2 = $('#btnSubmit2');
    let textInput = $('#textInput');

    btnSubmit.click(function () {
        alert('Help Me!');
    });

    btnSubmit2.click(function (event) {
        event.preventDefault();
        textInput.keyup();
        addList();
        // Infomatic();

        alert(textInput.val());
    });

    textInput.keyup(() => {
        if (textInput.val() === "") {
            btnSubmit2.attr('disabled', true);
        } else {
            btnSubmit2.attr('disabled', false);
        }
    });

    function Infomatic() {
        let textHolder = document.createElement('div');
        document.body.appendChild(textHolder);
        let h2 = document.createElement('h2');
        let h2Info = document.createTextNode(textInput.val());
        h2.appendChild(h2Info);
        textHolder.appendChild(h2);
        $('h2').on('mouseover', function () {
            $(this).css('background-color', 'darkorange');
            $(this).css('border-radius', '4px');
        });
    }

    myColor = ['pink', 'orange', 'darkgrey', 'darksalmon', 'darkslategrey', 'orangered', 'palegreen', 'lightcoral'];

    function addList() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let ulInfo = document.createTextNode(textInput.val());
        li.appendChild(ulInfo);
        ul.appendChild(li);
        document.body.appendChild(ul);

        $('li').on('click', function () {
            $(this).css('color', myColor[Math.floor(Math.random() * myColor.length)]);
        });

        $('li').on('dblclick', function () {
            $(this).remove();
        })
    }
});

