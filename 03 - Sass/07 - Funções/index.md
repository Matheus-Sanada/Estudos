## FUNÇÕES NO SASS

- Função de cor -> mix()


### CRIANDO UMA FUNCTION


@function colorPrimary($background-color) {
    @if (lightness ($background-color) > 50) {

        @return black;

    }

    @else {
        @return white;
    }

}

@mixin background-color-mixin ($colorPrimary) {background-color: $color;
    color: colorPrimary($color);
    
}

#social_media {
    @include background-color-mixin(black)
}





















































