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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2MV4DO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDrxoCL7Abwyw470d4DYzvT1DXbpuA1nQKVygoB3QwhtgIgO0ogdEj69KaK20RXrKHO1X2CXW95eFF%2BubKf3nqi%2BdIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDL0KaThsPelEqieBeSrcA8jENJtRp3w2phr2iWmVbL8y2URlBzNlR7Rl8wpuYutd957Nysl3KUcTPF%2B49W0T8%2FoX%2BoVhb8kYbwCqundtUAK14zBypJkXxT6N%2BtL9BMh6wfZEN9%2BJXWoakdbVgRVI5Hn%2FfUXW%2FrV0pK8K2r1euaoW3u1psZc0vvp8Cie9jcu4nwyrK2ZBhbGZQfJTVrESRpgObiGvERP8CfusIvWVU1M4pMzx%2FxP9letMX41ysze%2BjFrxWdhgShW3lresdEXPQXlg2sdZUrig5cOv%2FEMvGJlELeUhXCkyQU0RdHjiJRck3JVcbZLzp1Sul1opSjMxBINjKkZ2xRBwQAS6y1ALHOxVuppu3mkvUeIO2Ss2cPlcf7t8nvki9eqsChBrIVatzoMp3%2BaT2pQX417LYI3jqQz%2BpYxYuDhObjgcK5IS29xWNgpH4TN791O8wT%2B7XDS8pxKFTvmBk23mWIxHcFKB112flS91YhKtYHiesWDpY6yQAksC%2Fo26ZWs23bPvbVvuhoCZIc5KmmbA43fsbhkn2lPGw57S%2BVSZVudN%2FaB6YTQFazo2rM4rIqw8dxaKnVtgSOwzB0mXR1qIaB7PR6p0AtI4p6ZAtycyLNNGfsf5SK5qlG5gDJC76TpZQYHBMN7AwckGOqUBLbWDmURmMDm5%2BEzRrUeSRBYvkK7KvTOk2GdQ6EuSZv5L7mv7dj7OBxk1MwcFr%2FVtsJ26zsuit7ZYx%2BiJu45mFWGdCwL2YjcXaTvs8Cdgp%2BcieguDYbdbs%2FJPM8C0CtcuEAlq613F0e%2FcVTIven%2FNGhIjHK0tGlOhP3uNbiKuiw6Cax6%2Fp9T5z25HZwi4OW%2F9gVo1SwcRH5VoLt%2BuULQGFK5cWh1p&X-Amz-Signature=d3a24d8ca0e5043b175f9db8c8eae1ec151dd695c85aee0c60e69c3e2a1ce5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF2MV4DO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDrxoCL7Abwyw470d4DYzvT1DXbpuA1nQKVygoB3QwhtgIgO0ogdEj69KaK20RXrKHO1X2CXW95eFF%2BubKf3nqi%2BdIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDL0KaThsPelEqieBeSrcA8jENJtRp3w2phr2iWmVbL8y2URlBzNlR7Rl8wpuYutd957Nysl3KUcTPF%2B49W0T8%2FoX%2BoVhb8kYbwCqundtUAK14zBypJkXxT6N%2BtL9BMh6wfZEN9%2BJXWoakdbVgRVI5Hn%2FfUXW%2FrV0pK8K2r1euaoW3u1psZc0vvp8Cie9jcu4nwyrK2ZBhbGZQfJTVrESRpgObiGvERP8CfusIvWVU1M4pMzx%2FxP9letMX41ysze%2BjFrxWdhgShW3lresdEXPQXlg2sdZUrig5cOv%2FEMvGJlELeUhXCkyQU0RdHjiJRck3JVcbZLzp1Sul1opSjMxBINjKkZ2xRBwQAS6y1ALHOxVuppu3mkvUeIO2Ss2cPlcf7t8nvki9eqsChBrIVatzoMp3%2BaT2pQX417LYI3jqQz%2BpYxYuDhObjgcK5IS29xWNgpH4TN791O8wT%2B7XDS8pxKFTvmBk23mWIxHcFKB112flS91YhKtYHiesWDpY6yQAksC%2Fo26ZWs23bPvbVvuhoCZIc5KmmbA43fsbhkn2lPGw57S%2BVSZVudN%2FaB6YTQFazo2rM4rIqw8dxaKnVtgSOwzB0mXR1qIaB7PR6p0AtI4p6ZAtycyLNNGfsf5SK5qlG5gDJC76TpZQYHBMN7AwckGOqUBLbWDmURmMDm5%2BEzRrUeSRBYvkK7KvTOk2GdQ6EuSZv5L7mv7dj7OBxk1MwcFr%2FVtsJ26zsuit7ZYx%2BiJu45mFWGdCwL2YjcXaTvs8Cdgp%2BcieguDYbdbs%2FJPM8C0CtcuEAlq613F0e%2FcVTIven%2FNGhIjHK0tGlOhP3uNbiKuiw6Cax6%2Fp9T5z25HZwi4OW%2F9gVo1SwcRH5VoLt%2BuULQGFK5cWh1p&X-Amz-Signature=266f608565caf82779c3ad3d3acfa849587bb80016f02f268dd2f830bd6ae5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

