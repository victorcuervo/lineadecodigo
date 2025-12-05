---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJ36FWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3LFVKQCt7tKl7P1FFbLG7XcjxMiiox8wTizbYymvg7AiBka%2Bwd%2Fuec0TEpA2k9MlKlLIy%2BzNLG3HCQkMFWMPvasCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEE0Vs72xvNrmCphBKtwDU1Sk%2BaFCosm5LSLv9OiUlmq5vgmQc6odjjEl4u%2Bu3gTH%2BatZb%2BDo%2FaoRlQOyr8L%2B2EZbo%2FH%2FjMrcPlORwrAleFk80tLGZLkiw8TgUlPLZQllEKE6s9kI8BQXbtXehq1eEYsgk5ltqVCqWFbF5xcHBj9xv1WtURxH%2BA8FmcsTWJczmBz5c9qEAEaaTJLTa574RLnbAKV1GgZMG6pH4FO295Vuf1nEg1rv1z6OKv0w08Jq95ClGIcgeCpbRoT7yXNjId9Ww7EPcscc0D38PGACt9Zu8Tub57lnz9pczeyX7yJIA8QSNBJTdTOL3EEEYIiZeEwJInLW6SL%2BwG%2BXl3HaWUm%2BVP9hzE%2BmtkP5cj07VZZ9ngm%2BB6RW6O1J9bl7kteTYSMUbnKCqBcRzCBd11NlMisPg1yEIsUiY70QHQvFizyjySz%2FIm6bj0bZq3EA0ehZKRl1BuCOJuqBFb7n7dZvre17ymq1mN3f6z61hAs42qCZufhqcG9PbE7F%2BAVmd5xhq8fzeQQjYroQofFfVC2FJxzg9373dm7iXY1Ndu%2Folc5l6dNkqM5Brb0Pa%2BaOfH2F86FcjIKUOxdQLf87koEPalBP03ZadUZ9u6IJ3gnAldKAX7lsb3g9UOq3OWQw4NPKyQY6pgGXfLRGwcRBh%2BzT0VmIXLhNvCa1IYn3sxncTVUYpIXKLkuv9QmXlYhuFYvPj1C8BMLLD5RDOwAom4seIoMKHcvRhqzRPb3Fg4rfrnGGFDiS9hSQwMxXdDBuULq1OXDoWtdqmMHUTo3PU%2F5iIunXXWVaRLqAiWskbtUPMfHunpCWZjUKBZD9Og9cia4XCq1PfZa9PVOzvq4HBNHT38IwfrlgxfH4TgZW&X-Amz-Signature=8763960ab699cd7ed892db97f72b749020bc93d3d1fde2d9af73036b4281a4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJ36FWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3LFVKQCt7tKl7P1FFbLG7XcjxMiiox8wTizbYymvg7AiBka%2Bwd%2Fuec0TEpA2k9MlKlLIy%2BzNLG3HCQkMFWMPvasCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMEE0Vs72xvNrmCphBKtwDU1Sk%2BaFCosm5LSLv9OiUlmq5vgmQc6odjjEl4u%2Bu3gTH%2BatZb%2BDo%2FaoRlQOyr8L%2B2EZbo%2FH%2FjMrcPlORwrAleFk80tLGZLkiw8TgUlPLZQllEKE6s9kI8BQXbtXehq1eEYsgk5ltqVCqWFbF5xcHBj9xv1WtURxH%2BA8FmcsTWJczmBz5c9qEAEaaTJLTa574RLnbAKV1GgZMG6pH4FO295Vuf1nEg1rv1z6OKv0w08Jq95ClGIcgeCpbRoT7yXNjId9Ww7EPcscc0D38PGACt9Zu8Tub57lnz9pczeyX7yJIA8QSNBJTdTOL3EEEYIiZeEwJInLW6SL%2BwG%2BXl3HaWUm%2BVP9hzE%2BmtkP5cj07VZZ9ngm%2BB6RW6O1J9bl7kteTYSMUbnKCqBcRzCBd11NlMisPg1yEIsUiY70QHQvFizyjySz%2FIm6bj0bZq3EA0ehZKRl1BuCOJuqBFb7n7dZvre17ymq1mN3f6z61hAs42qCZufhqcG9PbE7F%2BAVmd5xhq8fzeQQjYroQofFfVC2FJxzg9373dm7iXY1Ndu%2Folc5l6dNkqM5Brb0Pa%2BaOfH2F86FcjIKUOxdQLf87koEPalBP03ZadUZ9u6IJ3gnAldKAX7lsb3g9UOq3OWQw4NPKyQY6pgGXfLRGwcRBh%2BzT0VmIXLhNvCa1IYn3sxncTVUYpIXKLkuv9QmXlYhuFYvPj1C8BMLLD5RDOwAom4seIoMKHcvRhqzRPb3Fg4rfrnGGFDiS9hSQwMxXdDBuULq1OXDoWtdqmMHUTo3PU%2F5iIunXXWVaRLqAiWskbtUPMfHunpCWZjUKBZD9Og9cia4XCq1PfZa9PVOzvq4HBNHT38IwfrlgxfH4TgZW&X-Amz-Signature=1c17ad181f1a39499c55447fb9b639d0e618cafdadbc2e5adcefcf21b6b5963a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

