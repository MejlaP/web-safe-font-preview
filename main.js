$(document).ready(() => {
    $('#text').on('keyup', event => {
        // element .preview changes the HTML to whatever we type to currentTarget(it is textarea)
        $('.preview').html($(event.currentTarget).val())
    })

    $('#font').on('change', event => {
        // element .preview changes CSS property (fontFamily) to value of selected currentTarget(val() is from option value)
        $('.preview').css({
            fontFamily: $(event.currentTarget).val()
        })
    })
    $('#weight').on('change', event => {
        // similar to the above
        $('.preview').css({
            fontWeight: $(event.currentTarget).val()
        })
    })

    $('#size').on('keyup', event => {
        // we will need variable fontSize to specify the unit for the CSS font-size property
        let fontSize = $(event.currentTarget).val() + 'px'
        $('.preview').css({
            fontSize: fontSize
        })
    })
})