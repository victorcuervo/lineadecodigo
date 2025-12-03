---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJMMRD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICBnHF%2FLr0wCRL6kQG1lAcCq5v%2FTiOtYoFm4RSLGbju3AiEAuQKQBHzKE54aXzHdvhMMqN8kabJ8BckO1RiWFDMpL2gq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF1EvKZj9giH%2BZPMgircA%2BZRtYMsUhKZ%2BqhMHSbFQuzr85OAwLMbB4cd%2FhuC3kviE9szwXpmvwecgsE1vxPJjDOlMvkJpNsDVsEIA3AmtIngFo%2B6Udtzlg50xvgEE1RoGJ6yiUnJ6t%2FeE1StZE8I3pnWfpBiUjP32cvdA9ZhoPReJO%2BkDoZbdTqHgWdOTV3oihC2HW2ODDiwRxSrD3fzm6AVJlGFUsVMYdBVL990wY2NgyGiBef35EBZfwM707TApFDEcNPK%2Blh1oMuDq3nznWd0XES%2FdusEz1VH6YU5qwuSnfcbv81dE5jaDcJwHbxQl9va5llSonPJx9tSZw8uYPQGzCZnlR7RRF5PBCe7Y%2FJ1jumL7n3ibnwzrk15obYWC1R%2Bdu73CG3mjkhvsbtDkoxXCV6yrgf0OVqwmV62BvZNEvHx7%2F9zTiZ1Gagqco2LFOd8ZpsvFPI844lka0S4tu5MikTtX%2FRyqA20beK6QRopGJRzX6zx2oF09jOs3U459OPUjug5v28hGlgqXoFB2xeVhm55mCKYTdSDVHGqM1PV5FGNvAe5%2F56DU%2FDL81baWkQuR%2BNOk3X2ojNJkWi2ufQUIue7fPcfPwCz6di1xraFeakW6I13u0ieDWq5oeXBwmAAG9bpzIMbmZcBMKiSwskGOqUBtq3SGIzAjo9LZFC6cutirl97GtumNFCFhEYZHL6Ea9oFU9o6TvC2nTqYLdlYNCgb7rguQq7aLmrERFzffWr%2BVCKUMhpF1jA6lVR6SCurwaD7FR%2BVHp27jgFps%2BBf437gPJDbVDIdVreMirDiMY6ui73Mietu%2FcJvjEiMTJJXYJS9b%2Beahr1z3xFI4cPAwNVs7bzGhnqOptfQ1CQALO5jrVyLW%2Bss&X-Amz-Signature=1304f42869eb7fa0c052ff4eb7ef078d2a6fd8cdf53b0a0d0717b848e16c7800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJMMRD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICBnHF%2FLr0wCRL6kQG1lAcCq5v%2FTiOtYoFm4RSLGbju3AiEAuQKQBHzKE54aXzHdvhMMqN8kabJ8BckO1RiWFDMpL2gq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF1EvKZj9giH%2BZPMgircA%2BZRtYMsUhKZ%2BqhMHSbFQuzr85OAwLMbB4cd%2FhuC3kviE9szwXpmvwecgsE1vxPJjDOlMvkJpNsDVsEIA3AmtIngFo%2B6Udtzlg50xvgEE1RoGJ6yiUnJ6t%2FeE1StZE8I3pnWfpBiUjP32cvdA9ZhoPReJO%2BkDoZbdTqHgWdOTV3oihC2HW2ODDiwRxSrD3fzm6AVJlGFUsVMYdBVL990wY2NgyGiBef35EBZfwM707TApFDEcNPK%2Blh1oMuDq3nznWd0XES%2FdusEz1VH6YU5qwuSnfcbv81dE5jaDcJwHbxQl9va5llSonPJx9tSZw8uYPQGzCZnlR7RRF5PBCe7Y%2FJ1jumL7n3ibnwzrk15obYWC1R%2Bdu73CG3mjkhvsbtDkoxXCV6yrgf0OVqwmV62BvZNEvHx7%2F9zTiZ1Gagqco2LFOd8ZpsvFPI844lka0S4tu5MikTtX%2FRyqA20beK6QRopGJRzX6zx2oF09jOs3U459OPUjug5v28hGlgqXoFB2xeVhm55mCKYTdSDVHGqM1PV5FGNvAe5%2F56DU%2FDL81baWkQuR%2BNOk3X2ojNJkWi2ufQUIue7fPcfPwCz6di1xraFeakW6I13u0ieDWq5oeXBwmAAG9bpzIMbmZcBMKiSwskGOqUBtq3SGIzAjo9LZFC6cutirl97GtumNFCFhEYZHL6Ea9oFU9o6TvC2nTqYLdlYNCgb7rguQq7aLmrERFzffWr%2BVCKUMhpF1jA6lVR6SCurwaD7FR%2BVHp27jgFps%2BBf437gPJDbVDIdVreMirDiMY6ui73Mietu%2FcJvjEiMTJJXYJS9b%2Beahr1z3xFI4cPAwNVs7bzGhnqOptfQ1CQALO5jrVyLW%2Bss&X-Amz-Signature=37606e23c18be738fa979990044c591c1aa4ab93bd39609a6040a4fe6761a60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

