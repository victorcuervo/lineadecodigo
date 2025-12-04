---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHY5TYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCZxJxfTttvb0MMIEMlRGX6Ln%2FS9%2Fpxa9Y7VFeQi8B9sgIgQPX%2BaUOJm5ptrsv2YQkz2z%2BZtfscjrUNuysEiuDyG8Mq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN2iBgUJWWSPt6zfpSrcA7jxBMBpvjpIJl6qBYvhRr2LsKPl3JUkN5l%2Fj%2FcipcyMoPxEVBmzpJPDGPfwfXUNmTMoitPz%2BUZPkTiM%2BOpjqG%2BqLVuYl5V%2FEVGg06fH5pbLlrqE8UMTQHkO%2BC7rZ6iSow3100Qmcwa4snZ7jyo3hm5ZKJYpsOVrrRbWUTh4UBRlOGX%2FoBPmakphs0xMflftoE%2Bc%2FBIbXLg1IOHsv4GDvULWflYfN%2Bd56wKUrcyHNC0k0hreNRuzOP42n5ccz0ki84cvPBJpWXrL881A9ZruKW%2B%2FA6qUdwDuVAQo0S8nC5RS9W31OMJo5miB0MydD2A4LNze8tyivfx6gKUk9%2Fgx5DE%2BUiHdj6DWNEEjyvGm9eLoiyqgjAV6czgwAUvDS7oMMJrFCCYv%2Bzy2iCyFPgnK0AyTX7Xvo5TtdhHzLaaNWnnHSmlA5iJbInMkXTtUoRvYLXmTCOYSfnH0GSvqYJQhdtI%2FHUoTGm0Tqns5%2FIihtPLXD6PKs571af3WlhFFDT8E3meJTHNELAr2DLwEwyrc594%2BNrUmAMcKPXfl1Cgv32EWCN2FC4S7PnOwvLt5AcVhHuTm8GSoLpauLq9OV0lPbGIUAXPRIx3L6%2FHAiUQ7MJV%2BcHjnBI7WCoKtpW9ZMPeUw8kGOqUBvfyRje1QVN6AMVN8mwDxP1cLU4xVfTf1E8fWploVAm9WvRLv%2Buz9WNbDiQ%2F%2FYkJM9ihWwar%2BpI3Jxjs%2BF60oRz%2Bdm4cA%2FqqEEnXVfMr6PCX7buvCQLuEkQr8eZF6zTDD31n4ihKgmDBV45GdRV2zxK5hoESNQkv5zPMx8kQc2YZwtpUvKrEq%2FasuxSIB8t6zGxhyWgbUJ5d76fcAqOg1h0mKAPZ%2F&X-Amz-Signature=33fdbd4af1ef2cb6d2fe7947bb5dffa386df8f49a31200161ea0d5b7b61fbcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHY5TYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCZxJxfTttvb0MMIEMlRGX6Ln%2FS9%2Fpxa9Y7VFeQi8B9sgIgQPX%2BaUOJm5ptrsv2YQkz2z%2BZtfscjrUNuysEiuDyG8Mq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN2iBgUJWWSPt6zfpSrcA7jxBMBpvjpIJl6qBYvhRr2LsKPl3JUkN5l%2Fj%2FcipcyMoPxEVBmzpJPDGPfwfXUNmTMoitPz%2BUZPkTiM%2BOpjqG%2BqLVuYl5V%2FEVGg06fH5pbLlrqE8UMTQHkO%2BC7rZ6iSow3100Qmcwa4snZ7jyo3hm5ZKJYpsOVrrRbWUTh4UBRlOGX%2FoBPmakphs0xMflftoE%2Bc%2FBIbXLg1IOHsv4GDvULWflYfN%2Bd56wKUrcyHNC0k0hreNRuzOP42n5ccz0ki84cvPBJpWXrL881A9ZruKW%2B%2FA6qUdwDuVAQo0S8nC5RS9W31OMJo5miB0MydD2A4LNze8tyivfx6gKUk9%2Fgx5DE%2BUiHdj6DWNEEjyvGm9eLoiyqgjAV6czgwAUvDS7oMMJrFCCYv%2Bzy2iCyFPgnK0AyTX7Xvo5TtdhHzLaaNWnnHSmlA5iJbInMkXTtUoRvYLXmTCOYSfnH0GSvqYJQhdtI%2FHUoTGm0Tqns5%2FIihtPLXD6PKs571af3WlhFFDT8E3meJTHNELAr2DLwEwyrc594%2BNrUmAMcKPXfl1Cgv32EWCN2FC4S7PnOwvLt5AcVhHuTm8GSoLpauLq9OV0lPbGIUAXPRIx3L6%2FHAiUQ7MJV%2BcHjnBI7WCoKtpW9ZMPeUw8kGOqUBvfyRje1QVN6AMVN8mwDxP1cLU4xVfTf1E8fWploVAm9WvRLv%2Buz9WNbDiQ%2F%2FYkJM9ihWwar%2BpI3Jxjs%2BF60oRz%2Bdm4cA%2FqqEEnXVfMr6PCX7buvCQLuEkQr8eZF6zTDD31n4ihKgmDBV45GdRV2zxK5hoESNQkv5zPMx8kQc2YZwtpUvKrEq%2FasuxSIB8t6zGxhyWgbUJ5d76fcAqOg1h0mKAPZ%2F&X-Amz-Signature=57f53485b71dc6fae52b82ec9ce832055bce9ad8b84fe9c097191045f4fe3be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

