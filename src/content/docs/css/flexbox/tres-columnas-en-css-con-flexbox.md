---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636M3NMY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCsh8HbC1nce45YMY5BsiREDquRyVTAQ70TC%2Bx25fkUwIgNHxCEI3g4ZntN59AUwFoALmnP3sdMkrY0ikecpTc%2Fbkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLSEYRh8a8e0FWN3zyrcA6pyEq9ZDV7RaRf%2Bh3aqKIU3eL4Ssktvb9aLSp7VqalereNSYvFBStOjlj4jbdXYI6UHHjfjUHi6VBwiQCMMC8LxWcXnUfyAWlpSRZpBAC4tpXs2Q7gUnhqLIfZtnrPrxfd0xVCM5fMSzMpHDjPBk9t%2BwKBLJd47Xeb9c7c8M5aW1Dg%2BizVSd6QO1ycT%2FP%2FkTCchXrK7hn%2BuaV%2B%2FVj2wSsgVAvpjMhmgqgPB%2BPyNi7jAx4KP%2Fb3Iv9fK%2FDt9Faqe6AaYhbcgVSNp4CmrI1Y96Q0tyANxp8TDS7N9i88zNddZcWK6beNH8uXLWQLgRNTCYXZY%2Bx7tvVR02XB9bRsjKNEv68tpSWKvYV9Ic2lfXVE6WfsPf06bZvid4QAB%2BnvGsuLIc0Gz%2F8WMf%2BhpWTdP4E25FU5MNm9uk9BEGyXAehMnDPlR%2FDEnRxH3REOrD%2FclK%2FrL2It2CxEkNllGtTfYwr5TDTYCtTmVKPEFA0Yt075m12HuNKfB3iMLOY%2FdGfnsSPtn7BE%2BarPGDcsVBR8vFVz8%2B2wePNOFA6rSPtX06oLNWHAFQ%2BoIYBVlguawBVe8itgiWmHwwpKXk1jMReIVrFSqZyUoywfb0sWF7rKSZXRjO1c6tSob7t24C8mQMNfly8kGOqUBmxTAXwCe0gHeBvrFu%2FN57hEqk5ph1WkeNVTunEC80uGN%2Bs%2FNjQr%2BC6wUVs4Mym0j8hp1Sphhhl4YJYxpLr5WvVgHopaPCMgl77GDXN4Zdv4awZtiPsplfze1%2Bds6%2BAC7ZX2KRKcY6kFkDSl85rABu5Go9nTdIQHrunOIdVY1HGQAQKGoFX2ho1qpeJNYbocPMBB35JS05UBMPfWSiW1w85NoUXAq&X-Amz-Signature=2773575f0113c10fda9fdc86aca7d8e84133b9b577df8ee04aeb32f00993c0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636M3NMY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCsh8HbC1nce45YMY5BsiREDquRyVTAQ70TC%2Bx25fkUwIgNHxCEI3g4ZntN59AUwFoALmnP3sdMkrY0ikecpTc%2Fbkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLSEYRh8a8e0FWN3zyrcA6pyEq9ZDV7RaRf%2Bh3aqKIU3eL4Ssktvb9aLSp7VqalereNSYvFBStOjlj4jbdXYI6UHHjfjUHi6VBwiQCMMC8LxWcXnUfyAWlpSRZpBAC4tpXs2Q7gUnhqLIfZtnrPrxfd0xVCM5fMSzMpHDjPBk9t%2BwKBLJd47Xeb9c7c8M5aW1Dg%2BizVSd6QO1ycT%2FP%2FkTCchXrK7hn%2BuaV%2B%2FVj2wSsgVAvpjMhmgqgPB%2BPyNi7jAx4KP%2Fb3Iv9fK%2FDt9Faqe6AaYhbcgVSNp4CmrI1Y96Q0tyANxp8TDS7N9i88zNddZcWK6beNH8uXLWQLgRNTCYXZY%2Bx7tvVR02XB9bRsjKNEv68tpSWKvYV9Ic2lfXVE6WfsPf06bZvid4QAB%2BnvGsuLIc0Gz%2F8WMf%2BhpWTdP4E25FU5MNm9uk9BEGyXAehMnDPlR%2FDEnRxH3REOrD%2FclK%2FrL2It2CxEkNllGtTfYwr5TDTYCtTmVKPEFA0Yt075m12HuNKfB3iMLOY%2FdGfnsSPtn7BE%2BarPGDcsVBR8vFVz8%2B2wePNOFA6rSPtX06oLNWHAFQ%2BoIYBVlguawBVe8itgiWmHwwpKXk1jMReIVrFSqZyUoywfb0sWF7rKSZXRjO1c6tSob7t24C8mQMNfly8kGOqUBmxTAXwCe0gHeBvrFu%2FN57hEqk5ph1WkeNVTunEC80uGN%2Bs%2FNjQr%2BC6wUVs4Mym0j8hp1Sphhhl4YJYxpLr5WvVgHopaPCMgl77GDXN4Zdv4awZtiPsplfze1%2Bds6%2BAC7ZX2KRKcY6kFkDSl85rABu5Go9nTdIQHrunOIdVY1HGQAQKGoFX2ho1qpeJNYbocPMBB35JS05UBMPfWSiW1w85NoUXAq&X-Amz-Signature=3e40a26d1725bdc95fe20683985cdbfcfb21273ea2afbf79116ec9433a362ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

