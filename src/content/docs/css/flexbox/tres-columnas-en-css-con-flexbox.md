---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNBLL2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCLdeg5iTaQ33ohrHIKnx9NJ9%2BNoOGhPS1tRN5LGh8hAiA7pmF7GgU7%2FKO%2BuCmYwgJFeYQwrmgi34XNW9t3LXjEgSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbcXDTV6KSv5dqAabKtwDJy%2FDZEQXh54UOOttHuA0iXa3V7VUgQQT2mPiZs%2FWqukzqbmVzEfWqeK8gDsLNJBLKyIVnuEGElFQPLKdzqC4Hth6Bwl2t%2BgiEcaGPTeqWx3Bu1KbsqvH9%2Fp0T4Zpfk22FdXGuhcKRHXF2oYEZHTtuRHeUvELfjjP5fMNIOs28l745tB1b7bsxiv0R6LfN9WSxlvcEhKpQQAqRoejTSAWJyDj0j1XjEQfkoFuTu2tlSDFfScuwkjfiprAvgZ7icbm54E3MzF%2BeGpNSLsFKUflepLxuAM2QoUiTM9HL8zekkTww82z%2F3AN36faxnK7tBlDOM00eY1I0j4dwaKWNCqBCYMV4ccYuMDIOlMF3YcNYzajOpXFBmsOFu8xZeev38ebARisXkoNbhu12Xr0OHG%2FUIj4pWVyoGANArIoenq7d6pfISbD9GLDACPyiOZquQE0PFKaOTx%2BNrPTzNzJuT4yzrROEpPzz8GQhNvviTEuZa3idKkohHtd%2FMciSZOikrctGeF1i8jo83yCU5bc9WA9OWxuf11RqTo0DTkdQZEMIM%2FpFRaX%2FEvUCPKlekjql4h4%2BKZZmI08HN%2FlfxNxUC9v6K1kMzMftAKI3wU0DrnJYy2XkF8DHMOwUQlYW%2F0w5KbQyQY6pgHexBupwYY9CzrhSg3AAW35vygBXgZA7oi%2F8wp6l1PI203UxbwsQD8hNow%2FMtKU2gdCi%2FHa48JrPM7Kh3nicvHpbUKUyC5wNMlpUzQl29J7qhqvMon9rujxPizyKsKwfE1fJ67imMFbufy%2FPueCeQ3UcK8Z4h7wQJq89Fgv4h5BjpdrygBg7%2BNtr3mR2gRzKLJjne9vDumFQrTwmSxjLmd2Me9a49WK&X-Amz-Signature=cb86033d85fe3762d29c60252d6fe67c22188682e625568d8dc502a5e9f388d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNBLL2A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCLdeg5iTaQ33ohrHIKnx9NJ9%2BNoOGhPS1tRN5LGh8hAiA7pmF7GgU7%2FKO%2BuCmYwgJFeYQwrmgi34XNW9t3LXjEgSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbcXDTV6KSv5dqAabKtwDJy%2FDZEQXh54UOOttHuA0iXa3V7VUgQQT2mPiZs%2FWqukzqbmVzEfWqeK8gDsLNJBLKyIVnuEGElFQPLKdzqC4Hth6Bwl2t%2BgiEcaGPTeqWx3Bu1KbsqvH9%2Fp0T4Zpfk22FdXGuhcKRHXF2oYEZHTtuRHeUvELfjjP5fMNIOs28l745tB1b7bsxiv0R6LfN9WSxlvcEhKpQQAqRoejTSAWJyDj0j1XjEQfkoFuTu2tlSDFfScuwkjfiprAvgZ7icbm54E3MzF%2BeGpNSLsFKUflepLxuAM2QoUiTM9HL8zekkTww82z%2F3AN36faxnK7tBlDOM00eY1I0j4dwaKWNCqBCYMV4ccYuMDIOlMF3YcNYzajOpXFBmsOFu8xZeev38ebARisXkoNbhu12Xr0OHG%2FUIj4pWVyoGANArIoenq7d6pfISbD9GLDACPyiOZquQE0PFKaOTx%2BNrPTzNzJuT4yzrROEpPzz8GQhNvviTEuZa3idKkohHtd%2FMciSZOikrctGeF1i8jo83yCU5bc9WA9OWxuf11RqTo0DTkdQZEMIM%2FpFRaX%2FEvUCPKlekjql4h4%2BKZZmI08HN%2FlfxNxUC9v6K1kMzMftAKI3wU0DrnJYy2XkF8DHMOwUQlYW%2F0w5KbQyQY6pgHexBupwYY9CzrhSg3AAW35vygBXgZA7oi%2F8wp6l1PI203UxbwsQD8hNow%2FMtKU2gdCi%2FHa48JrPM7Kh3nicvHpbUKUyC5wNMlpUzQl29J7qhqvMon9rujxPizyKsKwfE1fJ67imMFbufy%2FPueCeQ3UcK8Z4h7wQJq89Fgv4h5BjpdrygBg7%2BNtr3mR2gRzKLJjne9vDumFQrTwmSxjLmd2Me9a49WK&X-Amz-Signature=840ed9ba1eccd8d3708c99ed2e8ff04e80ce528577230df8396f180075c9fe8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

