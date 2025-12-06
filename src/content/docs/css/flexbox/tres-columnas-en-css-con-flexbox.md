---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3VRBZQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFzfCb2k6STpcEwPAFEGe18CfSCG3SUCNthne1n7FNxgIgLvbqU%2Fa5%2BvlQqrOu4LYan%2B9dfB9%2BKMvNMZFBCb%2BJdwAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKupUj%2BhoolGY%2B%2BwxCrcA9GvEtmWXQbqhZoUi4SdMxvTFEpCMH1FtGF%2FHpWYzEpXrYLA%2BThI6WOMafFIuA%2FCXamYYVC%2B0cmN8DtCbO4pKSf95YfjZUcv6HNfEwdbibaaUYPwh7lP09GpwB9xEC4YrLYi1bVMXMIN0hQWJZ5eT3s1GB1iREF%2FDjEg3YpIvVsUeIeTiw4NP8ewXpD%2FbnjAOfJBwUwXiFSF3GQt4H84Y66jxKQA3sBWPuTnJYtMIRxl2AgSOT8zISy0Eq7ugbHT7GMg2hDjwF9txJFWsJ0%2BRU9e%2BbtROhdWqVk%2F9aObQ%2BIzw7ERnD5%2FPvwMcKCyrzIo5oLrPi%2ByrHQzbxUXu6uXmIggoK%2FZixXHsVwqaIXNtV%2BYE2I7FgjyeJmG%2BjNUwySypzNYXuQ1Qxme8JPz%2BjWaEzXrZLzyt6RQBahiwzW6HsM1Ai6oXok3dL5HS%2FW1Yi%2FyWpJQEWNKtbjro2CxMD%2FrdIOOoqBdYkD5sdo%2FuokB2rXUwWIFiLblhGp5CeroZAD5lo2kdXxGnzIP1lW%2FTNdZYbk86W9BqrWIXuN7dpqRYK4Mjlmu7t0TRB0grMGbTfAn5HiYdgNHThKvV5jT%2FxRVFSplzQ1QrQjwCWlJXppqhDmlG6%2BiJVgzGp30yJhEMPem0MkGOqUBTkU6nI8EUY7yeh5VgP6bAO10nx%2F%2BuRxHTCGzsKItuY%2BcisEtbDT5MiOySh2Keg3uMBTHCZcXRQkUX7iCvUW7uBMHbTjCFva2EGoVxi1y9c%2FFg6nOBHBaLFMm2frky0V88Q9qkKPHNrq9cbySo8gx6WtRiDhLS%2FRILk2VWxEstb2wJZQfBc%2BpBtUNGKDPuv1aMg6CKBdYLaTEn56AVrLOUIk%2B0Ekr&X-Amz-Signature=9f75498d5a640a349cc533936a1d8dcc94fbaa5bc31b25335bcfac2a00fb0ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3VRBZQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFzfCb2k6STpcEwPAFEGe18CfSCG3SUCNthne1n7FNxgIgLvbqU%2Fa5%2BvlQqrOu4LYan%2B9dfB9%2BKMvNMZFBCb%2BJdwAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKupUj%2BhoolGY%2B%2BwxCrcA9GvEtmWXQbqhZoUi4SdMxvTFEpCMH1FtGF%2FHpWYzEpXrYLA%2BThI6WOMafFIuA%2FCXamYYVC%2B0cmN8DtCbO4pKSf95YfjZUcv6HNfEwdbibaaUYPwh7lP09GpwB9xEC4YrLYi1bVMXMIN0hQWJZ5eT3s1GB1iREF%2FDjEg3YpIvVsUeIeTiw4NP8ewXpD%2FbnjAOfJBwUwXiFSF3GQt4H84Y66jxKQA3sBWPuTnJYtMIRxl2AgSOT8zISy0Eq7ugbHT7GMg2hDjwF9txJFWsJ0%2BRU9e%2BbtROhdWqVk%2F9aObQ%2BIzw7ERnD5%2FPvwMcKCyrzIo5oLrPi%2ByrHQzbxUXu6uXmIggoK%2FZixXHsVwqaIXNtV%2BYE2I7FgjyeJmG%2BjNUwySypzNYXuQ1Qxme8JPz%2BjWaEzXrZLzyt6RQBahiwzW6HsM1Ai6oXok3dL5HS%2FW1Yi%2FyWpJQEWNKtbjro2CxMD%2FrdIOOoqBdYkD5sdo%2FuokB2rXUwWIFiLblhGp5CeroZAD5lo2kdXxGnzIP1lW%2FTNdZYbk86W9BqrWIXuN7dpqRYK4Mjlmu7t0TRB0grMGbTfAn5HiYdgNHThKvV5jT%2FxRVFSplzQ1QrQjwCWlJXppqhDmlG6%2BiJVgzGp30yJhEMPem0MkGOqUBTkU6nI8EUY7yeh5VgP6bAO10nx%2F%2BuRxHTCGzsKItuY%2BcisEtbDT5MiOySh2Keg3uMBTHCZcXRQkUX7iCvUW7uBMHbTjCFva2EGoVxi1y9c%2FFg6nOBHBaLFMm2frky0V88Q9qkKPHNrq9cbySo8gx6WtRiDhLS%2FRILk2VWxEstb2wJZQfBc%2BpBtUNGKDPuv1aMg6CKBdYLaTEn56AVrLOUIk%2B0Ekr&X-Amz-Signature=fa1cf7891560212b10f42263cede230e33665c7bb1200d0819856cc798e653b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

