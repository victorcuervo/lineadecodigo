---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLRTNV2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2Ffm7wHCTraINc%2F0dt52uM%2FTWV11ZXeHtzQD9g86HVkAIhAIdNBdkHPZ%2Feph%2BuCfyC5sqz8LTWK48%2FIgkS6zJ7zwiiKv8DCCwQABoMNjM3NDIzMTgzODA1IgzDzumFjNQx7QweN0Mq3AN9U%2FlliGPCoE2TMlMfrX2im7luv%2FfEiOWA6ViTbBMcILLWWbcndMzV62X8QQC4pMfB0E4rfyhPx4cNsEPLUrxUFE5mhaYqbozfGDr9fbRguP5WGtzmGAOZsWSGT07Sv6lDSgx%2FR2p94NK3%2FMsDP1y1ccfhqu4%2F5PbEXo2g%2B1WDIQBWTjcoFhBC3qqb9h8yfHgMvMYUxG7AkKUn%2BwbSq86oQ0B7SK91bcJOtf2NrHDDQju4Zr%2BUWJd3UVmbUBMIaHSv1cXkoToHq0k214gfa05xxagrmajzdowJGl1IrDp1kdj2wjPO1CpNBndhAdQe5Ff2REgkB1L6KdXVvzgEHyTc1Xl8WASiC4VgtDDhcZ7%2FLcxdUx9WeamhHH1lkbUIC5OmiNFxUEmWQh68sEr2cj77F%2BrCLdLrYLn2ard0FoSONqRblZzkdJxkKYUbMfkdyvB8Z7nlz%2B%2FVnIKUcv8e%2FLoT2Y8CEQuxY2KbJb6zKUX86mozSnCbyX84qBEoLPFmkbWtMs3Lng0%2BenDZIP2gjluu7YIQ8fKl8I9Py9BjDqU0%2FCwdvjbAM%2FzmvHQNCMO0T0CHco7C2%2FIMInxhwONviHdCeRX3lhs27GYmlYp7ei61I0XGOdx9oYu7nro3qjCgrsDJBjqkAS8nL45y%2Bt3UU075eZfezuGmZev%2FH8dakbuBvr4FT01Lhj%2FUaY4i3Gz7%2BDsjJbI92NJOX7q%2BKTbw0ScdPaohJGg7UtFS8QB%2BU4IjfaTPSS5X4efzc3AQkrn0gkW4q4FBqX6yzgWVQR%2F8JKXny84GIZ3JHKcHeufk9zERTxOhRev3ol70Lnl4Y5l9L1o5YSVeVMqqqI7oLubdWwK%2BylDqoKlt3xET&X-Amz-Signature=3dfd024999dfcd158a2a02b014a42edb79363b1ede110ca1a10a1e988b29e56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLRTNV2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2Ffm7wHCTraINc%2F0dt52uM%2FTWV11ZXeHtzQD9g86HVkAIhAIdNBdkHPZ%2Feph%2BuCfyC5sqz8LTWK48%2FIgkS6zJ7zwiiKv8DCCwQABoMNjM3NDIzMTgzODA1IgzDzumFjNQx7QweN0Mq3AN9U%2FlliGPCoE2TMlMfrX2im7luv%2FfEiOWA6ViTbBMcILLWWbcndMzV62X8QQC4pMfB0E4rfyhPx4cNsEPLUrxUFE5mhaYqbozfGDr9fbRguP5WGtzmGAOZsWSGT07Sv6lDSgx%2FR2p94NK3%2FMsDP1y1ccfhqu4%2F5PbEXo2g%2B1WDIQBWTjcoFhBC3qqb9h8yfHgMvMYUxG7AkKUn%2BwbSq86oQ0B7SK91bcJOtf2NrHDDQju4Zr%2BUWJd3UVmbUBMIaHSv1cXkoToHq0k214gfa05xxagrmajzdowJGl1IrDp1kdj2wjPO1CpNBndhAdQe5Ff2REgkB1L6KdXVvzgEHyTc1Xl8WASiC4VgtDDhcZ7%2FLcxdUx9WeamhHH1lkbUIC5OmiNFxUEmWQh68sEr2cj77F%2BrCLdLrYLn2ard0FoSONqRblZzkdJxkKYUbMfkdyvB8Z7nlz%2B%2FVnIKUcv8e%2FLoT2Y8CEQuxY2KbJb6zKUX86mozSnCbyX84qBEoLPFmkbWtMs3Lng0%2BenDZIP2gjluu7YIQ8fKl8I9Py9BjDqU0%2FCwdvjbAM%2FzmvHQNCMO0T0CHco7C2%2FIMInxhwONviHdCeRX3lhs27GYmlYp7ei61I0XGOdx9oYu7nro3qjCgrsDJBjqkAS8nL45y%2Bt3UU075eZfezuGmZev%2FH8dakbuBvr4FT01Lhj%2FUaY4i3Gz7%2BDsjJbI92NJOX7q%2BKTbw0ScdPaohJGg7UtFS8QB%2BU4IjfaTPSS5X4efzc3AQkrn0gkW4q4FBqX6yzgWVQR%2F8JKXny84GIZ3JHKcHeufk9zERTxOhRev3ol70Lnl4Y5l9L1o5YSVeVMqqqI7oLubdWwK%2BylDqoKlt3xET&X-Amz-Signature=ef86bc4b21d150a5bc46c8c9d721a6067688e56016b60ff31aa73eba2e1c3a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

