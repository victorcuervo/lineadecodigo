---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7CNKK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUYRwfiSuec3HW16SdLYmZ4SoFttzSXk0zvEDEGj6nwIhAOxq65J%2FkMzf2PxqUTgm2YVUlVDk4eKnUR4csCKMA5xaKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQyWOFOSsV1WaSGcEq3AOn%2FKwV4n%2BAmEW5ZXl752nAuA21%2FPNuvlDG2XYhecNBgkj2o62Qmq%2F3OfFx1M%2Fs146JGIJMUVw40keZVESBj0KwLXus0F%2Fed57W8Qmo2JE69gac3HgB%2FzKTKut%2BoPbUVGhGTsSGtql52oxRDHrd2FWaAmaOJ1dJ%2BMyrwm%2FJWFK925iO29%2BkW50g%2BPoHm3fhcdk6sP5eRoQHnEISTfKy5oZ9WIi0EA6JtGlNMnEVdcZ%2FTww%2FtYpXWIvCPvIZuHP3nozxh4x9am2VQACNErGxYtHYrLvr9GxOvG9Dx1uVXnF4YOkXfZ%2BTtA4BWn60u5F29FJ9zEwidSZ0DVfOguMeC20aQWzHG2%2FlSu8G8b0hClnv065sAYOLskKzVqWkyWnNAddiKq14ytPaDcc0h4ufdxCd0ZZvLSlyig%2FeHQ1GJGPcqI7HnBGDB71%2Fwkp4Fn4Zfl4kHdqOnLj0KLTI2KlM6kxYnzZBzSWsokAsxN%2BA3aVAyd8zcYB4qwHWCiW9RQLAciYo2qLD41PiM9Bbqewv7TK9hw4fKbtM6jnMct3jWvYQD3i6%2B8mc%2FhTGmZRN980q9UTABTzeBpFOmXgKueRifdajRsYnafq2RUv%2B4o8FYSyAPEZkp70rNt8r02latjCmvM%2FJBjqkATA7iXIhVDiXabjsdSTRe9t2Ul%2BX3CyVjHosgXhq6bjUkUr6v3qUG0q%2FL2NMAgTh%2FPIf678cAwBnsi3TRGLLaHEEcOdHrmfe3WvHPOn81d3CioGxYtTrUjU2haEV7Dvh4RDclb6ZxDNZTailwaXPnEebM79fjoZg9v2T%2F4wn3Qim5xyle%2B4svLmbzdpHWAx%2BFfebkuw%2FLWNrG0AJFXPFOXi6dqFz&X-Amz-Signature=004065888cdacefc9539183874b2e012eae4a593c5727f0489ba024444f3d4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2I7CNKK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUYRwfiSuec3HW16SdLYmZ4SoFttzSXk0zvEDEGj6nwIhAOxq65J%2FkMzf2PxqUTgm2YVUlVDk4eKnUR4csCKMA5xaKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQyWOFOSsV1WaSGcEq3AOn%2FKwV4n%2BAmEW5ZXl752nAuA21%2FPNuvlDG2XYhecNBgkj2o62Qmq%2F3OfFx1M%2Fs146JGIJMUVw40keZVESBj0KwLXus0F%2Fed57W8Qmo2JE69gac3HgB%2FzKTKut%2BoPbUVGhGTsSGtql52oxRDHrd2FWaAmaOJ1dJ%2BMyrwm%2FJWFK925iO29%2BkW50g%2BPoHm3fhcdk6sP5eRoQHnEISTfKy5oZ9WIi0EA6JtGlNMnEVdcZ%2FTww%2FtYpXWIvCPvIZuHP3nozxh4x9am2VQACNErGxYtHYrLvr9GxOvG9Dx1uVXnF4YOkXfZ%2BTtA4BWn60u5F29FJ9zEwidSZ0DVfOguMeC20aQWzHG2%2FlSu8G8b0hClnv065sAYOLskKzVqWkyWnNAddiKq14ytPaDcc0h4ufdxCd0ZZvLSlyig%2FeHQ1GJGPcqI7HnBGDB71%2Fwkp4Fn4Zfl4kHdqOnLj0KLTI2KlM6kxYnzZBzSWsokAsxN%2BA3aVAyd8zcYB4qwHWCiW9RQLAciYo2qLD41PiM9Bbqewv7TK9hw4fKbtM6jnMct3jWvYQD3i6%2B8mc%2FhTGmZRN980q9UTABTzeBpFOmXgKueRifdajRsYnafq2RUv%2B4o8FYSyAPEZkp70rNt8r02latjCmvM%2FJBjqkATA7iXIhVDiXabjsdSTRe9t2Ul%2BX3CyVjHosgXhq6bjUkUr6v3qUG0q%2FL2NMAgTh%2FPIf678cAwBnsi3TRGLLaHEEcOdHrmfe3WvHPOn81d3CioGxYtTrUjU2haEV7Dvh4RDclb6ZxDNZTailwaXPnEebM79fjoZg9v2T%2F4wn3Qim5xyle%2B4svLmbzdpHWAx%2BFfebkuw%2FLWNrG0AJFXPFOXi6dqFz&X-Amz-Signature=2b27d3aae64b3f6e26d862c2b35336c87e71349de98b47b9d807a8029b514c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

