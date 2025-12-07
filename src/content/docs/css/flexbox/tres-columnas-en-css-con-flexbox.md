---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JYP2UW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7lFM6tzDnZ70C2ebAyahmyupOuBG4l%2B3vIrhQN6yI0AiAYIcCbmH%2BeWwPDhVimnNfEzM5jjPYn8cRuaaCKni2G9SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5MsX9bRqXrU%2BJZuKtwDsOwZhPaycRLle7RNZKYVDdg%2FjySUKWb1Gcm9buoRFM9DP8UdMKcrACrpxJOh3xLKpWRccswcBJNvttahveFJ%2F2tSAvEzWdbtCiXvJdp9PGkfO3bxQbMQzkZwqm3CVOWrXsU%2BL%2BfK8BoNuKVo8XGQD1bvJ8vzIrb3Asl1cxp2ny8tcqjem4mTkxLOFsP%2Bx2NVQHwR6lkgUf7yAwhfWTcKS4uvw6aUN1SCO%2BGikZaC3lXpqdRSLbMdeM%2FANk4SAkmo%2B4f7pZJsiHx3tN4a%2BtSYIWVw%2FtFPMXKvIbTap%2FsRATWqnMkNE1zuL5XIFnWfpmvvNXJStk99Rc29asAyJI8jES1dF4q%2BnrlWrC8mEZBeLNhQX9KsgpWyRdnPhLYheMic0UWqD13p0665x7e7L8fEY%2FiH1sLHoGrCIAmY812dqSMcd7p4EQvV0G02IhBUsCeTmFboVIXyvJeV%2BWTx6ztko2ccxu8lPPc9FgwHiLkuuuOlU8VCewijm2fnTqcn%2BPOfv%2BCJXcVRyhHVvK3sIo8krR8Kbismgue8GYuKU3VSllrz5o5GUcDFUMJb98%2FxBVRx%2FKG723RbQOJ9Sx7zwzs0IJ7oeN%2FMBK3TAnEVCwI%2BLRFLy5Xqz3jQnGJrrPwwsf7SyQY6pgHwpVtaSsjuChPFMUqYU5KzkYgkeqf8hkiMhxHjvbgwiMjVMvu0DiWora1UkGD4Gx91I8cDp4Wx31gQbNW0DMaSr0aDDiUol0wA5pxQOZq5c9wsjVrd%2Fo6zrONNGBnQ8PFFtEImZfGNUCGGk%2BXS%2FO8kNbXhyzkEOWCTOdvvpEvgKpDG1ecNXKG4dXCc2zT2CISHJKwIGy35oJwYkzu9%2Bb1NFQuGIPZ5&X-Amz-Signature=e98602aab0d924132f14e897d876375f6783ec93c55464fdc1a7cddefc65eb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JYP2UW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7lFM6tzDnZ70C2ebAyahmyupOuBG4l%2B3vIrhQN6yI0AiAYIcCbmH%2BeWwPDhVimnNfEzM5jjPYn8cRuaaCKni2G9SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5MsX9bRqXrU%2BJZuKtwDsOwZhPaycRLle7RNZKYVDdg%2FjySUKWb1Gcm9buoRFM9DP8UdMKcrACrpxJOh3xLKpWRccswcBJNvttahveFJ%2F2tSAvEzWdbtCiXvJdp9PGkfO3bxQbMQzkZwqm3CVOWrXsU%2BL%2BfK8BoNuKVo8XGQD1bvJ8vzIrb3Asl1cxp2ny8tcqjem4mTkxLOFsP%2Bx2NVQHwR6lkgUf7yAwhfWTcKS4uvw6aUN1SCO%2BGikZaC3lXpqdRSLbMdeM%2FANk4SAkmo%2B4f7pZJsiHx3tN4a%2BtSYIWVw%2FtFPMXKvIbTap%2FsRATWqnMkNE1zuL5XIFnWfpmvvNXJStk99Rc29asAyJI8jES1dF4q%2BnrlWrC8mEZBeLNhQX9KsgpWyRdnPhLYheMic0UWqD13p0665x7e7L8fEY%2FiH1sLHoGrCIAmY812dqSMcd7p4EQvV0G02IhBUsCeTmFboVIXyvJeV%2BWTx6ztko2ccxu8lPPc9FgwHiLkuuuOlU8VCewijm2fnTqcn%2BPOfv%2BCJXcVRyhHVvK3sIo8krR8Kbismgue8GYuKU3VSllrz5o5GUcDFUMJb98%2FxBVRx%2FKG723RbQOJ9Sx7zwzs0IJ7oeN%2FMBK3TAnEVCwI%2BLRFLy5Xqz3jQnGJrrPwwsf7SyQY6pgHwpVtaSsjuChPFMUqYU5KzkYgkeqf8hkiMhxHjvbgwiMjVMvu0DiWora1UkGD4Gx91I8cDp4Wx31gQbNW0DMaSr0aDDiUol0wA5pxQOZq5c9wsjVrd%2Fo6zrONNGBnQ8PFFtEImZfGNUCGGk%2BXS%2FO8kNbXhyzkEOWCTOdvvpEvgKpDG1ecNXKG4dXCc2zT2CISHJKwIGy35oJwYkzu9%2Bb1NFQuGIPZ5&X-Amz-Signature=7787ee53a117493815554df788188dec1c1fd279360332066f068b96369f2c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

