---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXOOGNN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5Wai5TtP%2BW1i4de%2BbGkMcc1alYLbIzrHAXJCbnEJRAIhAIJhk6OzUNq7SJ6FCpjfJ1emdt1%2Fo3X11NRsfIXSzwfiKv8DCFUQABoMNjM3NDIzMTgzODA1IgyzRqlXgWI61YYkNdwq3ANuhneOv6bG2pklxXfg3dTkR0k6b%2FukhMyReyjGo8nCVu09jKyjFMGSujjr0R5mMz5nDJO97YEnjHowChNByJIFC%2BIpadWp5JxEjNnFDkOmVnpmrdxhYfAymeHMtUnnRlCoQm8K%2B%2F7cGge4K2ALnSDFs0FjF83BQG50JyQ8G3lyT9qOydQzURGwM3luU6KOpH03DWv3jfl5sdxk3kDOy%2FlQnaF1gvdrBPWPxvMBtXJtKSFqm07EpgGxhSsMYc%2BWzXXC%2FOAhqHurr2mkziHqzoi7j3V%2FVsa%2BYMQVBrYjLgogJ3Bb0Ic7gDJ104lYwMrcA9eFVTkftEiFTG6ygPagBY4jQ5xxEvY5yuDlOSEaZ9TN3nAzRCR48MBXI2evAcaPKz0FoPyJSL6FAfDyWg4oaf6jy3V7dfbYHApxECtbwwPnK4p8y6Ya2MUUf7rP8cgk72%2FpPjBvC6ZVkrCRlw3HtfbHmHUkOnOBamd5%2BvjaF78OTxnQqGuxyYRibF1pQPDVkEp6eiyUpr489xUmrlbN%2FdZ7ADYIyscCITyl2AB5DIGQHjm08puAkn8CCeZhgXglnJSC5rAf0b9vNs87PyzS4lnkB7EejjD68x%2BUIzNzGuWEuilXd0vkEK5FhB%2Bo3zCZrcnJBjqkAf7hDgkUi8Te7hQvV24D3gT1jxmZGWU%2FgwwaSCBv7RXSg7HIRj2Ro8ZrXF8PD5sK3qp7MhJda93id4mRLrbnJIuqu1nZaQeI36Gh1ib3VL7f%2FUO%2FlD8Zic3pkvwQWod%2FuslMD1pmty8lr7%2BY2bRCBer40DRlCxKOfZ%2Biynpgg1gj%2BqXpdEioZM%2FTRnXMNqMstZGeyyaD6B8mG%2B3695D561x63SAJ&X-Amz-Signature=a7a6080acccb136878b1b1547f09b55afb6e6cd96e0150912c809e524abe62ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXOOGNN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK5Wai5TtP%2BW1i4de%2BbGkMcc1alYLbIzrHAXJCbnEJRAIhAIJhk6OzUNq7SJ6FCpjfJ1emdt1%2Fo3X11NRsfIXSzwfiKv8DCFUQABoMNjM3NDIzMTgzODA1IgyzRqlXgWI61YYkNdwq3ANuhneOv6bG2pklxXfg3dTkR0k6b%2FukhMyReyjGo8nCVu09jKyjFMGSujjr0R5mMz5nDJO97YEnjHowChNByJIFC%2BIpadWp5JxEjNnFDkOmVnpmrdxhYfAymeHMtUnnRlCoQm8K%2B%2F7cGge4K2ALnSDFs0FjF83BQG50JyQ8G3lyT9qOydQzURGwM3luU6KOpH03DWv3jfl5sdxk3kDOy%2FlQnaF1gvdrBPWPxvMBtXJtKSFqm07EpgGxhSsMYc%2BWzXXC%2FOAhqHurr2mkziHqzoi7j3V%2FVsa%2BYMQVBrYjLgogJ3Bb0Ic7gDJ104lYwMrcA9eFVTkftEiFTG6ygPagBY4jQ5xxEvY5yuDlOSEaZ9TN3nAzRCR48MBXI2evAcaPKz0FoPyJSL6FAfDyWg4oaf6jy3V7dfbYHApxECtbwwPnK4p8y6Ya2MUUf7rP8cgk72%2FpPjBvC6ZVkrCRlw3HtfbHmHUkOnOBamd5%2BvjaF78OTxnQqGuxyYRibF1pQPDVkEp6eiyUpr489xUmrlbN%2FdZ7ADYIyscCITyl2AB5DIGQHjm08puAkn8CCeZhgXglnJSC5rAf0b9vNs87PyzS4lnkB7EejjD68x%2BUIzNzGuWEuilXd0vkEK5FhB%2Bo3zCZrcnJBjqkAf7hDgkUi8Te7hQvV24D3gT1jxmZGWU%2FgwwaSCBv7RXSg7HIRj2Ro8ZrXF8PD5sK3qp7MhJda93id4mRLrbnJIuqu1nZaQeI36Gh1ib3VL7f%2FUO%2FlD8Zic3pkvwQWod%2FuslMD1pmty8lr7%2BY2bRCBer40DRlCxKOfZ%2Biynpgg1gj%2BqXpdEioZM%2FTRnXMNqMstZGeyyaD6B8mG%2B3695D561x63SAJ&X-Amz-Signature=c1a5c07712fda7fca7021fd6a36dd9dfc5bb2ed9f22dd2e4c0a71877c82edf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

