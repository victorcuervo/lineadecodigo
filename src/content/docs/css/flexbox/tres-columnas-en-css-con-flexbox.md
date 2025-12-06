---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLN3DV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeWR4EwbONyDpMFgB4DuDisEMIzjn2TxW7pnp5BR7AiAiEApf89i3w3Nv5VjQyMoDWFtPJ2GanLL6dh3m4BMCMCQMkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFMPwO3d7PkeCgfYQircA1reymTk6MfZtsGVL8oKilMhRYVstNNbrE92btm8Le%2Fxx%2F98Gxlc9Vr8Btfoaz5GbzNQ0YMY3xLuH70arQeDv0orFGaAo84UoEhMCRullu2p5mT0R66D1hg6%2BXicJyllBu%2BvjnIEnVxNoSwE%2FkwIeyLsoexwzNV9Jxl8kucnmiJduOaDSvy27nKQ9QqtSHBXRy8fjkm9V6sdZgfC66EXsdNZ2frSUVIBMW3WEHq5TbG7m%2FWx%2Bmb70AHwtUexWlr7hU6U6nk2RJnmHQj8G1UPv0Gt68sFwLJXPMWDJ9OoVHm7gWhalBtQNtxKGTe15MpeK4Jks2UHPzXa6%2FHaSVO3UCIu4a9wsSnakffue8%2Bgc018FKy0jHoXaoVloiG2unHXajc%2F6s0YLH2fRvYi1qB3Q4BZVJTX21RrkOtf8%2B7gpL6FRq3J6ITVmJz0CXgHpKmpKbgJqs%2B9aU%2BV6NonE3tsQ1unzWYHjspV%2B0z4yY3pJ0I4AjPv0zYXY4Gs8RPNECx9VGMpT2QNYSBzuu46cpsXDb%2Bt1p9wpyQcC8Z1GH3Q1LGaMfL3oYdQ%2FnYORE47CK3ozJ%2B%2BRCojCzcHBWiMalnBPtZgD7o%2F0uXrqpt%2FGQBoBugIqXNqL5KMPwzAGiikMMHK0ckGOqUBGG6tFYdkZ5T3bqVInO8j6siqQONGF546SqSjixYe0ZqSIAsar352lQR%2Fcx8KbpdIrBr5CUAMHkI723zaovV07AYeN8Bdz%2FSgQQF5BhOM4IpqZuy2UFTCTtcUQCuLW%2BNXJ9FbY5nC6UgRKkqKbg8ppEGza6tKN4vr7wdoulxSBXGsnqhujN8j4eIm13IW4ZLTWJeL39lanKV9f9Rcj%2FVGjrUIk7PI&X-Amz-Signature=ccc28aa5b3f363a553623a7199048ccd83b778f9f221b29b063a89109a0eeda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLN3DV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeWR4EwbONyDpMFgB4DuDisEMIzjn2TxW7pnp5BR7AiAiEApf89i3w3Nv5VjQyMoDWFtPJ2GanLL6dh3m4BMCMCQMkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFMPwO3d7PkeCgfYQircA1reymTk6MfZtsGVL8oKilMhRYVstNNbrE92btm8Le%2Fxx%2F98Gxlc9Vr8Btfoaz5GbzNQ0YMY3xLuH70arQeDv0orFGaAo84UoEhMCRullu2p5mT0R66D1hg6%2BXicJyllBu%2BvjnIEnVxNoSwE%2FkwIeyLsoexwzNV9Jxl8kucnmiJduOaDSvy27nKQ9QqtSHBXRy8fjkm9V6sdZgfC66EXsdNZ2frSUVIBMW3WEHq5TbG7m%2FWx%2Bmb70AHwtUexWlr7hU6U6nk2RJnmHQj8G1UPv0Gt68sFwLJXPMWDJ9OoVHm7gWhalBtQNtxKGTe15MpeK4Jks2UHPzXa6%2FHaSVO3UCIu4a9wsSnakffue8%2Bgc018FKy0jHoXaoVloiG2unHXajc%2F6s0YLH2fRvYi1qB3Q4BZVJTX21RrkOtf8%2B7gpL6FRq3J6ITVmJz0CXgHpKmpKbgJqs%2B9aU%2BV6NonE3tsQ1unzWYHjspV%2B0z4yY3pJ0I4AjPv0zYXY4Gs8RPNECx9VGMpT2QNYSBzuu46cpsXDb%2Bt1p9wpyQcC8Z1GH3Q1LGaMfL3oYdQ%2FnYORE47CK3ozJ%2B%2BRCojCzcHBWiMalnBPtZgD7o%2F0uXrqpt%2FGQBoBugIqXNqL5KMPwzAGiikMMHK0ckGOqUBGG6tFYdkZ5T3bqVInO8j6siqQONGF546SqSjixYe0ZqSIAsar352lQR%2Fcx8KbpdIrBr5CUAMHkI723zaovV07AYeN8Bdz%2FSgQQF5BhOM4IpqZuy2UFTCTtcUQCuLW%2BNXJ9FbY5nC6UgRKkqKbg8ppEGza6tKN4vr7wdoulxSBXGsnqhujN8j4eIm13IW4ZLTWJeL39lanKV9f9Rcj%2FVGjrUIk7PI&X-Amz-Signature=a6005b2061621b383e887aa1acdcbb556f36951cbdb98838e94fb321a199ae60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

