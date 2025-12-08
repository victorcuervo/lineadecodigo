---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGSMXJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFE3uTNuMoC%2BKpb5MFV4zB6ndIbuUhUqbYIxYCwVLsKAiBI3wD3lq%2FiQRrt81kNhPA7mTwXm7J7Q%2Bma%2Fi31bMH2GCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEo4zhvNxhAEiNu6sKtwDHi7GQaHWe03ReIjiHaVGYuoFhoEdHWfGCkp%2FpB16dDZ9ByEacKhvHdpluzcS%2FZW%2BNpgYBVb76%2F3Nxg7VNxvOhHXnX6I8STOT4vSBBUaZkp0V%2BEL7sKVThZriyUGenwdLBXQrmbNn6pL9s6qUPLjy7h1zJcPIImhdXhaQmH7kNl1%2Fd05J%2FJw4UrkK5MjORK2QdlJIfzrUDiMVD4DCjK5KdCkxSPUgZ3N5bwB3Vuv%2FvCX0to3CnGhQs08ip27n%2FoKy4h2uKM6FIThdtZXRIw2e8QpVVZeA0qs5xuSoxc7M96cPDIRTRIxx3hIIXMv8jyvpru6Nr9x8gC3ZeSicgUbQ6BdnovAZMs%2B%2F58crxPKqXaPpDv%2F4iObUnX0D9Y4Q3NLNSK9H%2Bk3ay2v4LyaB%2FHub1vg79S9Kp2FHa9qC%2BMLZFCh4a6Ei7B0cD1XWfVaQdAct1181bUnUKqFNp63BQv7sb2EQcwCaLVVx99HsVyTrwX5IIpFf2M4%2F%2BMuOhZ%2BhM7t%2FF7ok0ZDzrT2UdAa8FJA9mFDACEl0wDK0vyYk5ZX281EKPIaesAegrxHOFpt1Y0Oj5ndwc%2BIl6r%2Bl0r2L6ezalRuRcaGSjpbYkbmK5TgKpLZwB8VVkl7Je38Zi3MwqofcyQY6pgH3uqIALmu%2BLcCwzf%2BPrvagZf363XUlOCphDci%2FTRtJU0TTn5%2B8Eut9g%2BJEsvBNFd6tOv0w2KqdxfWVmk0i3K82GLqto%2BQmsUg27mneUfDgOzb9vfUEaNwlpxAZ%2FnSMN8Djud8hvgIrphEVjSbXGCXMkhBoMGWRSGDVVJZLOmycR3L9H5sHZkJV9dhQY093NwLdsJNmUJdJx0RsdeyXAu1OELeYe%2BYJ&X-Amz-Signature=c4bb0f0152a54d4793167851bdb284ef22ed09c402f9a659f2e310a85eb84f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGSMXJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFE3uTNuMoC%2BKpb5MFV4zB6ndIbuUhUqbYIxYCwVLsKAiBI3wD3lq%2FiQRrt81kNhPA7mTwXm7J7Q%2Bma%2Fi31bMH2GCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEo4zhvNxhAEiNu6sKtwDHi7GQaHWe03ReIjiHaVGYuoFhoEdHWfGCkp%2FpB16dDZ9ByEacKhvHdpluzcS%2FZW%2BNpgYBVb76%2F3Nxg7VNxvOhHXnX6I8STOT4vSBBUaZkp0V%2BEL7sKVThZriyUGenwdLBXQrmbNn6pL9s6qUPLjy7h1zJcPIImhdXhaQmH7kNl1%2Fd05J%2FJw4UrkK5MjORK2QdlJIfzrUDiMVD4DCjK5KdCkxSPUgZ3N5bwB3Vuv%2FvCX0to3CnGhQs08ip27n%2FoKy4h2uKM6FIThdtZXRIw2e8QpVVZeA0qs5xuSoxc7M96cPDIRTRIxx3hIIXMv8jyvpru6Nr9x8gC3ZeSicgUbQ6BdnovAZMs%2B%2F58crxPKqXaPpDv%2F4iObUnX0D9Y4Q3NLNSK9H%2Bk3ay2v4LyaB%2FHub1vg79S9Kp2FHa9qC%2BMLZFCh4a6Ei7B0cD1XWfVaQdAct1181bUnUKqFNp63BQv7sb2EQcwCaLVVx99HsVyTrwX5IIpFf2M4%2F%2BMuOhZ%2BhM7t%2FF7ok0ZDzrT2UdAa8FJA9mFDACEl0wDK0vyYk5ZX281EKPIaesAegrxHOFpt1Y0Oj5ndwc%2BIl6r%2Bl0r2L6ezalRuRcaGSjpbYkbmK5TgKpLZwB8VVkl7Je38Zi3MwqofcyQY6pgH3uqIALmu%2BLcCwzf%2BPrvagZf363XUlOCphDci%2FTRtJU0TTn5%2B8Eut9g%2BJEsvBNFd6tOv0w2KqdxfWVmk0i3K82GLqto%2BQmsUg27mneUfDgOzb9vfUEaNwlpxAZ%2FnSMN8Djud8hvgIrphEVjSbXGCXMkhBoMGWRSGDVVJZLOmycR3L9H5sHZkJV9dhQY093NwLdsJNmUJdJx0RsdeyXAu1OELeYe%2BYJ&X-Amz-Signature=67e20f39ccaa3978fd144833a264b2cb7190d4e7954ea4f77c76f09875719764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

