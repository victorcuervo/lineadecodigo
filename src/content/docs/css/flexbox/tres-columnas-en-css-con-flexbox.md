---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYK4HKP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnv4jBCV6rABCKXeGo2XtcL1ITwTnBGJmw8lEQU%2FEgAiBA7ZWt%2BE%2BJgpEtzsqXI1r81Pbd%2B%2BSTSrg6Dry70mqtfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7aU15aRBIPYKLZnTKtwDv4MlhFItIJwQk4oCK4JEUSGrp%2FiQOlbgQgFK7aWOQR2vACYtwUIRhwNEW%2FKERq8dE4egyOw1yRIJPnTJBABAMZehQywl1r4tkuBUCCahFFplOcDprhexcQ34wi9WNnMWOKkOUMF5jJIMFzkoGzWw30GqgzLeW87CfRIq9rn8mXaTgtnW7MFnwvoSgewyJqqm6Kl4R%2BhLVYtFfzab7%2FPKVtNGZie1z9w61wS3khTS8ccJU2Gc%2BDKKuRMzntqGD%2FnSvQvYwsolzKA67tWBtQPrA80VCnykh%2BfcpHjREYlmNHO0sI0X8y3yh05G08gcTcFGbX4xXWonrpQUOPaoAui9gg%2Fokoob%2Bs23NTk9%2BQzkgz%2FWYyrvkWoqyCk0%2FPaiDlJCtIGZ3px1SDenPjxmnvMgp%2BvkzRTdHLc1%2FOt8mpieQOGVNbaAd%2Bc6nNhyUrUU9TWckJcG6oguDKFXdPtL6%2Bu1xd31X%2FpyK5vgYHSDj7scMBSfBk3CKmV16VNLBcv3KV8h%2FBzxVibEaek9%2FjOc%2FRNLxXMZIaLhVfNpTC7CTmYUeBsBqq%2BjgFbZilF78vZ8GVTEWOMm7nvSQLcPsXsauY%2BoE%2FtrnIisAhipSeAMU%2Bakg9jY345t4Iu7jj73%2FGEwgtTSyQY6pgEznvJDa7ybyYCV7A6cLRxa9zTb1lslvDVRSYxAcSronxoi7ZFkQLQpbdKZzcwOg5HHBYwlxkeABI80sMf%2BLSiuOBPEhvdicEftS3bDKO8PluJz0VkAp1MVwsmzIRdX811DEdn35eOwlEEN0jBiFWD37yZJfmpLPgLvw9xHQfVl1fMBlokhSPGSU58w8MnCulIP%2FRWFEX%2FMj8I0599%2B7PUn0bQw89le&X-Amz-Signature=b5d65e06023c99121b5a9ddc3e5f426cbecf32acbd824be94e5efc02051f6f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYK4HKP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVnv4jBCV6rABCKXeGo2XtcL1ITwTnBGJmw8lEQU%2FEgAiBA7ZWt%2BE%2BJgpEtzsqXI1r81Pbd%2B%2BSTSrg6Dry70mqtfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM7aU15aRBIPYKLZnTKtwDv4MlhFItIJwQk4oCK4JEUSGrp%2FiQOlbgQgFK7aWOQR2vACYtwUIRhwNEW%2FKERq8dE4egyOw1yRIJPnTJBABAMZehQywl1r4tkuBUCCahFFplOcDprhexcQ34wi9WNnMWOKkOUMF5jJIMFzkoGzWw30GqgzLeW87CfRIq9rn8mXaTgtnW7MFnwvoSgewyJqqm6Kl4R%2BhLVYtFfzab7%2FPKVtNGZie1z9w61wS3khTS8ccJU2Gc%2BDKKuRMzntqGD%2FnSvQvYwsolzKA67tWBtQPrA80VCnykh%2BfcpHjREYlmNHO0sI0X8y3yh05G08gcTcFGbX4xXWonrpQUOPaoAui9gg%2Fokoob%2Bs23NTk9%2BQzkgz%2FWYyrvkWoqyCk0%2FPaiDlJCtIGZ3px1SDenPjxmnvMgp%2BvkzRTdHLc1%2FOt8mpieQOGVNbaAd%2Bc6nNhyUrUU9TWckJcG6oguDKFXdPtL6%2Bu1xd31X%2FpyK5vgYHSDj7scMBSfBk3CKmV16VNLBcv3KV8h%2FBzxVibEaek9%2FjOc%2FRNLxXMZIaLhVfNpTC7CTmYUeBsBqq%2BjgFbZilF78vZ8GVTEWOMm7nvSQLcPsXsauY%2BoE%2FtrnIisAhipSeAMU%2Bakg9jY345t4Iu7jj73%2FGEwgtTSyQY6pgEznvJDa7ybyYCV7A6cLRxa9zTb1lslvDVRSYxAcSronxoi7ZFkQLQpbdKZzcwOg5HHBYwlxkeABI80sMf%2BLSiuOBPEhvdicEftS3bDKO8PluJz0VkAp1MVwsmzIRdX811DEdn35eOwlEEN0jBiFWD37yZJfmpLPgLvw9xHQfVl1fMBlokhSPGSU58w8MnCulIP%2FRWFEX%2FMj8I0599%2B7PUn0bQw89le&X-Amz-Signature=569d0935fecaa3930f54ae3c64560a2fb94eb02aa147c82df29112f1419e7625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

