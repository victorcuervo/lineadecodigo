---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANJEH4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIRanmIlx9JyBqKyMjNEUnlUQVqx6xx1xdGTgP8fYkLgIgRnTVCM4Y45hnlyUh1rC%2B2zVUxRIU69Fnjy626JetZAEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt6mEpba2%2FFGpVK0CrcA8nJ1hr8ty9CEeQ4tnfynrRgfQDZQN5YkRykaRK65b7Eotd%2BNdPda6c%2F3GofVa6L5JcqXSg%2FTzk216DzbrP5PsFhi9M5pxJHL7w7AON0ovjCNUIi9tWioDDueteZIS%2BeNQQoD4kRBFRWPD44%2FeOET2sSJnuPvH%2BnPudZn4vGU0Ayel9J42yLTgYq5JggquthmH%2BuQTUYEIkdu0A%2BFFPKWB9nZSacybRafz59fYlGDXkRzEf1OxRKZ3C%2B%2FPkiLW%2BpCUu110uCB0x0V9C37U7j5iVIVaIOq67psF1ofY1bKIXklUhSGquIbI9eNmUsfwH55uavpyXUZl00XUnZFo6szDGNtgYcjYIAbGNV60o1PUKmTqCld1lkGzqwVIUw4AkXrRtQ59BWA%2Btj70%2BF6K0pPB5AGZIyfv%2FgJsxJx3J581%2BsbndvSYXvMy4EOb9JOBwI08W%2B7EWaqp80D4gH1bX1HQIBfCAktHunqoH%2BS%2Bn6vXucK2cXgie0rFoEa8cuhkPSQGFSgnhtm1eniwAnTTyy2Trh4irIQTgV2L6%2BeOJclnohP%2FzISXjdp65dcI8kLcAgw2lnToi1YHTe%2FW7vA2ZXdRzkM6LNfaJb5MAihxLIllEiPPzHxn6smNrsB1DGMIii1MkGOqUBuH9%2BxMnjlQ04Tmm9hQ2T5mwUgBzk9jP7KsV1k2fCVwmz85%2BORU45cI4kb8BwXrpNUbyKp%2BDarLWw0mohsOnSL18hrj%2FAp%2F5JVC2QARYTVkBBnc0knuYE3U8DotOFU5SKvlU8FwC9xdICZUW12sKkE6CdusOGmHxmJnZ%2BCsDm4BMkxiL4EvZv0R0VZ3OraEZCX%2FTzNmkd34aeUtwvh9Q7h0nYdo%2B2&X-Amz-Signature=a129b94cec4abf435dad211b47adb0a49d155451cbe64274132c20aa9f4a1cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTANJEH4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIRanmIlx9JyBqKyMjNEUnlUQVqx6xx1xdGTgP8fYkLgIgRnTVCM4Y45hnlyUh1rC%2B2zVUxRIU69Fnjy626JetZAEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt6mEpba2%2FFGpVK0CrcA8nJ1hr8ty9CEeQ4tnfynrRgfQDZQN5YkRykaRK65b7Eotd%2BNdPda6c%2F3GofVa6L5JcqXSg%2FTzk216DzbrP5PsFhi9M5pxJHL7w7AON0ovjCNUIi9tWioDDueteZIS%2BeNQQoD4kRBFRWPD44%2FeOET2sSJnuPvH%2BnPudZn4vGU0Ayel9J42yLTgYq5JggquthmH%2BuQTUYEIkdu0A%2BFFPKWB9nZSacybRafz59fYlGDXkRzEf1OxRKZ3C%2B%2FPkiLW%2BpCUu110uCB0x0V9C37U7j5iVIVaIOq67psF1ofY1bKIXklUhSGquIbI9eNmUsfwH55uavpyXUZl00XUnZFo6szDGNtgYcjYIAbGNV60o1PUKmTqCld1lkGzqwVIUw4AkXrRtQ59BWA%2Btj70%2BF6K0pPB5AGZIyfv%2FgJsxJx3J581%2BsbndvSYXvMy4EOb9JOBwI08W%2B7EWaqp80D4gH1bX1HQIBfCAktHunqoH%2BS%2Bn6vXucK2cXgie0rFoEa8cuhkPSQGFSgnhtm1eniwAnTTyy2Trh4irIQTgV2L6%2BeOJclnohP%2FzISXjdp65dcI8kLcAgw2lnToi1YHTe%2FW7vA2ZXdRzkM6LNfaJb5MAihxLIllEiPPzHxn6smNrsB1DGMIii1MkGOqUBuH9%2BxMnjlQ04Tmm9hQ2T5mwUgBzk9jP7KsV1k2fCVwmz85%2BORU45cI4kb8BwXrpNUbyKp%2BDarLWw0mohsOnSL18hrj%2FAp%2F5JVC2QARYTVkBBnc0knuYE3U8DotOFU5SKvlU8FwC9xdICZUW12sKkE6CdusOGmHxmJnZ%2BCsDm4BMkxiL4EvZv0R0VZ3OraEZCX%2FTzNmkd34aeUtwvh9Q7h0nYdo%2B2&X-Amz-Signature=42fda231343e3c6a267fc4c9799c447a98584d868f7a94581dc6692a52984453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

