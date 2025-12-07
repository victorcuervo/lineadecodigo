---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPDPMA4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCero8SGH%2BMEN0U5O2CJpJrOlJgjWnlDkvmIn%2B0uJr8AIgUq2MRm%2FY0IzIUISfdVtsdYN5zLhLxMcy0yYTCFJU8swqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVT5nonK%2BSaDycweCrcA5%2Bx7ANF1hZk%2FHltDLiYwQT8x3HkfSvaO3%2BCVffxwu%2FUeR%2Bz%2FHarxTfXcLxBYiTqqKMOksBBaS85CL8swJ38YAV8K7SlzXqqseMaBFJO60%2Fv8XZi7y9fmiwXh4Sut059hdXZCmHi2LbC2ldoxpHn1ifgXclZlPOVeNa%2F8xDFD6RwyldxHtZf3szdt2WIKtQ8g5mgNEW7E3H5ZOEhikd6kaB42TOacwzUjLKDvIqsRUAANB4vcK0t5X02P5dTdgF8X%2BGWF3QGwfrI8A8ymuz0%2FXg6Lv92UdHe73nwe7xKUwV2Fk4UWjtfZLIQZ84G4Lks%2FEt5meBUVRqN9qC8T6AugINd9M4HRw6juODLUTtUYv%2B4jMn3qdL1QEWCPA3hz4JIUUtCO41nXR%2FROKUsmX9zhro8yBafTCyCRJTiMFG3z5igyWTgm%2FKA4kH7QlKVvCX13bbqM5DDKZVyPHS6c6xtzbq3f1KMQKDwTN4%2FM0o%2BCYVlgFt8CTq7nb8lju6lsFYEl1yKKwECJjS9ScexZ%2Bj4XHPlvwqGoRn4eCOCXr9%2FIPCEjmJvPWC4WsWMBanXG4HJLsq8frOBiFHfL3vpaFCOfTvWOJ6nkXtrQGorFMq1o194ug9L4VCVjLj5q8N6MJGa1ckGOqUBF3xqczqmXsm6EV7nJiIT3%2BOxA%2FV9nYHvf5dqM%2Bw2jLWGleDXElIfi0kcbo3QyDEXUDA%2FXha6JNqtHUuMYFxlMaYkBAKgK2vMj7vjg0MgVZQsmAYXiJjo8M5j3xyMcL8wjUbw5xpUg1Yk4XLwJeMbf0JtxZQr9MOF7qT%2FNzHMII1HMeJ3g3U70DZOEMevWHwfgHw6yWrfmC4K322Ue%2Fpr5HkjLfcL&X-Amz-Signature=6ae0f9a2e2249a38528a4c2356a9350004a7e6f9d125b6de04f42c8143a3804e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPDPMA4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCero8SGH%2BMEN0U5O2CJpJrOlJgjWnlDkvmIn%2B0uJr8AIgUq2MRm%2FY0IzIUISfdVtsdYN5zLhLxMcy0yYTCFJU8swqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVT5nonK%2BSaDycweCrcA5%2Bx7ANF1hZk%2FHltDLiYwQT8x3HkfSvaO3%2BCVffxwu%2FUeR%2Bz%2FHarxTfXcLxBYiTqqKMOksBBaS85CL8swJ38YAV8K7SlzXqqseMaBFJO60%2Fv8XZi7y9fmiwXh4Sut059hdXZCmHi2LbC2ldoxpHn1ifgXclZlPOVeNa%2F8xDFD6RwyldxHtZf3szdt2WIKtQ8g5mgNEW7E3H5ZOEhikd6kaB42TOacwzUjLKDvIqsRUAANB4vcK0t5X02P5dTdgF8X%2BGWF3QGwfrI8A8ymuz0%2FXg6Lv92UdHe73nwe7xKUwV2Fk4UWjtfZLIQZ84G4Lks%2FEt5meBUVRqN9qC8T6AugINd9M4HRw6juODLUTtUYv%2B4jMn3qdL1QEWCPA3hz4JIUUtCO41nXR%2FROKUsmX9zhro8yBafTCyCRJTiMFG3z5igyWTgm%2FKA4kH7QlKVvCX13bbqM5DDKZVyPHS6c6xtzbq3f1KMQKDwTN4%2FM0o%2BCYVlgFt8CTq7nb8lju6lsFYEl1yKKwECJjS9ScexZ%2Bj4XHPlvwqGoRn4eCOCXr9%2FIPCEjmJvPWC4WsWMBanXG4HJLsq8frOBiFHfL3vpaFCOfTvWOJ6nkXtrQGorFMq1o194ug9L4VCVjLj5q8N6MJGa1ckGOqUBF3xqczqmXsm6EV7nJiIT3%2BOxA%2FV9nYHvf5dqM%2Bw2jLWGleDXElIfi0kcbo3QyDEXUDA%2FXha6JNqtHUuMYFxlMaYkBAKgK2vMj7vjg0MgVZQsmAYXiJjo8M5j3xyMcL8wjUbw5xpUg1Yk4XLwJeMbf0JtxZQr9MOF7qT%2FNzHMII1HMeJ3g3U70DZOEMevWHwfgHw6yWrfmC4K322Ue%2Fpr5HkjLfcL&X-Amz-Signature=e560ab3a7e012890de1a3dd588ef6aa6f9285e16d8196f3ab336e36ccaa95cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

