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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTBTVWA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEdFVsw2oDGRFTu%2BTz9%2FZ7fIPQoXbi8sfLcdOD40jDg2AiBESrH%2Bt9%2FLrcIF7lv081idbwq2HRJ5Wc6YgmeE1clEvyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMjr5QJm3Ok9vGV7p6KtwDBYhQKdR4NwbPXjjfxRozmVRGl4NGe62%2FFB0cnV%2BBBwuyUs3DuoJ2NR4Z74N%2FbIcqYhfUTpHVjoIAR4gArwGYVyoGbnh1NAr7MheWBtDetnQpIp3h1VTTbSPufoAxotira0xZRtsc3PJgENpSiu5NQAObM9Z5xZYtltqIZeGQEEnubLbZwVDvTVBiNAC0W%2Fxfbisvn7ukF95P9hWWK07krQfXhqumA4M5Razq6CinyG5Yisaj4XdVzQXS%2FxgWz1uoUkaXoF1OvOO8fS2697neiXQ3Dirrd38JdiJe6aDUO%2BMEpTXNbxnyr7KqEAVhspQOwujPlsF7kWfNnIZY5Bz4ctBGooJrHDUbLKF4DgMPu9NRmdl%2FoDc7Zas3y5YdlerlPcttPBLWVA5L6tmSlzLtn6Y83NwodZ%2BMownDRgELWYE8j7nzyL%2FohReid6sS3SMb1zbizjZV7hi2QDe%2Frjy8vK69wdbmNTS%2FK0Prpy87RPanNFuX5r9FtdS%2FffMD9GkDVp4fEGue%2BKuOYWdqNaINhuF9oUkOXenb1O%2Fd81hRMp6%2Bq2Xv2ZJ%2F2DrO8m8LNqNvQK%2BIuJs57fwgBaYNOE7FpIdlLMWlnX2xMXorJSmRgsscZEB82ASAvMObyJ4wzJa%2ByQY6pgHMqUnmItX9tsIYPfGzihzEV%2F%2BtwvfK6h7crYpxny2P1wUU0Ya5oV9PImoHUDNfCA12QPbkR0POUWOMNqcBqSvpIXrDB3SlBvRdZQJkI2G5NsFVfdS37AeLJluhZ2FEELU43bc%2FQ44dmv16Z0jMVmIeJwZqaVfTO7kFcErmZZKSklPBc2KoQbVH6Sb47U07WdfAC5ctvjfSINohOS4iviMZ%2BU1bH5Fp&X-Amz-Signature=5df365f58a916e0ca2abe1225eff59a5ede5e729a904b8522c7c748f0902c6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTBTVWA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEdFVsw2oDGRFTu%2BTz9%2FZ7fIPQoXbi8sfLcdOD40jDg2AiBESrH%2Bt9%2FLrcIF7lv081idbwq2HRJ5Wc6YgmeE1clEvyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMjr5QJm3Ok9vGV7p6KtwDBYhQKdR4NwbPXjjfxRozmVRGl4NGe62%2FFB0cnV%2BBBwuyUs3DuoJ2NR4Z74N%2FbIcqYhfUTpHVjoIAR4gArwGYVyoGbnh1NAr7MheWBtDetnQpIp3h1VTTbSPufoAxotira0xZRtsc3PJgENpSiu5NQAObM9Z5xZYtltqIZeGQEEnubLbZwVDvTVBiNAC0W%2Fxfbisvn7ukF95P9hWWK07krQfXhqumA4M5Razq6CinyG5Yisaj4XdVzQXS%2FxgWz1uoUkaXoF1OvOO8fS2697neiXQ3Dirrd38JdiJe6aDUO%2BMEpTXNbxnyr7KqEAVhspQOwujPlsF7kWfNnIZY5Bz4ctBGooJrHDUbLKF4DgMPu9NRmdl%2FoDc7Zas3y5YdlerlPcttPBLWVA5L6tmSlzLtn6Y83NwodZ%2BMownDRgELWYE8j7nzyL%2FohReid6sS3SMb1zbizjZV7hi2QDe%2Frjy8vK69wdbmNTS%2FK0Prpy87RPanNFuX5r9FtdS%2FffMD9GkDVp4fEGue%2BKuOYWdqNaINhuF9oUkOXenb1O%2Fd81hRMp6%2Bq2Xv2ZJ%2F2DrO8m8LNqNvQK%2BIuJs57fwgBaYNOE7FpIdlLMWlnX2xMXorJSmRgsscZEB82ASAvMObyJ4wzJa%2ByQY6pgHMqUnmItX9tsIYPfGzihzEV%2F%2BtwvfK6h7crYpxny2P1wUU0Ya5oV9PImoHUDNfCA12QPbkR0POUWOMNqcBqSvpIXrDB3SlBvRdZQJkI2G5NsFVfdS37AeLJluhZ2FEELU43bc%2FQ44dmv16Z0jMVmIeJwZqaVfTO7kFcErmZZKSklPBc2KoQbVH6Sb47U07WdfAC5ctvjfSINohOS4iviMZ%2BU1bH5Fp&X-Amz-Signature=ba7a9564067ea7047627b4739b99cede343894f034f73f009916320eee1ed3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

