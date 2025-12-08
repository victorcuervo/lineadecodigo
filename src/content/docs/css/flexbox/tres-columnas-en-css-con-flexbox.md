---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5LD4Q7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz7LF7DVWUALfwVc6OpKfWX5hVJb2NJluNRaWFrxYAIgY%2Fiw2HUtT24L%2BfoD9uVjR8u8MxnW%2Fp1NNzC3inUlLpgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJcG%2FPwm8CJEHMlRyrcAwrH9GLwkzM5vLSgKbXvDf%2BbIjvSq9wqRs%2Bo283YMPJqKWF4sCPWY81zqMHabhgYxXJ1Zp%2BvS3L5WKqJ609KzUmpK8R4ZZt3cSBt3A06xq6vaUEC5xMRbuj2qqsL13Yrk10AFVLfNNA0mtoYw4sXeju8AVBfp8atgSpe%2FxtbDAIiVs4vZxKKz8csIRYQCtVkAgavQ88bMinjxVo5uAA3iijWskttacul98OsVuDDLe984203MMC5QdlAuABDlGIUC0L7QKT0Qtat6Mv042Hi8pAqqHGMYlKJwMABjmOZWUvpWGwHEmH3kM5gIi4CNjQnihVkJ3l%2BXH2CN%2F9rz4uK2apgG%2BTK8L%2BYEfyQ%2BOikB2PA4Behbj44xKuz5aTYdi%2By46zuv9bZBLn4wRv%2Fv%2FH5pZRgpQy0WQeDJP6orgVFeAfcDS5J6aZgfaoAItdf6zhV1LKtxBhMPz1dtLpXcw%2FXmVoK8JOkYjRT%2B%2FnAZXfCp7W2uEkGTjdsmPP%2BJ36ksFiv1S8SumaxFZmSdyjN3s5dHwxe1iSGA7w2ujmvKrA5diuk9dwrcG4LL5C8qOGH3XXyjEaN%2Bl9fa9AX3gmpMdZgCLRqVeWE9QRCzvVY7edeV5kGrd3UBs5eP8rGnAmrMJWU2ckGOqUBknmILV3k2v%2BXalw15elQvCaOPxq2YcigAA%2FYxIxUFYKo%2B0%2BvM7Cw10ltqRaEtopZVr%2Bh5jE1zE8ooPfaZRsMOtWBKgPhg%2B43ywsObY6QYtr1SJZ%2FDQZuCJ%2Fsuk9kckW26hhk34L7pTQSFgv%2BnBWzQ21xuMh2G7Z1lfbnGofQrLcW1pYXIXw44q%2BTr4G%2BNfXZN6IxxGhReaTV5FhLWOtje2VCoMUb&X-Amz-Signature=4da7641a5a9ab43fb8fb2fd01d2c8b29f9b74b195965056af12cba2b10996705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5LD4Q7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz7LF7DVWUALfwVc6OpKfWX5hVJb2NJluNRaWFrxYAIgY%2Fiw2HUtT24L%2BfoD9uVjR8u8MxnW%2Fp1NNzC3inUlLpgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJcG%2FPwm8CJEHMlRyrcAwrH9GLwkzM5vLSgKbXvDf%2BbIjvSq9wqRs%2Bo283YMPJqKWF4sCPWY81zqMHabhgYxXJ1Zp%2BvS3L5WKqJ609KzUmpK8R4ZZt3cSBt3A06xq6vaUEC5xMRbuj2qqsL13Yrk10AFVLfNNA0mtoYw4sXeju8AVBfp8atgSpe%2FxtbDAIiVs4vZxKKz8csIRYQCtVkAgavQ88bMinjxVo5uAA3iijWskttacul98OsVuDDLe984203MMC5QdlAuABDlGIUC0L7QKT0Qtat6Mv042Hi8pAqqHGMYlKJwMABjmOZWUvpWGwHEmH3kM5gIi4CNjQnihVkJ3l%2BXH2CN%2F9rz4uK2apgG%2BTK8L%2BYEfyQ%2BOikB2PA4Behbj44xKuz5aTYdi%2By46zuv9bZBLn4wRv%2Fv%2FH5pZRgpQy0WQeDJP6orgVFeAfcDS5J6aZgfaoAItdf6zhV1LKtxBhMPz1dtLpXcw%2FXmVoK8JOkYjRT%2B%2FnAZXfCp7W2uEkGTjdsmPP%2BJ36ksFiv1S8SumaxFZmSdyjN3s5dHwxe1iSGA7w2ujmvKrA5diuk9dwrcG4LL5C8qOGH3XXyjEaN%2Bl9fa9AX3gmpMdZgCLRqVeWE9QRCzvVY7edeV5kGrd3UBs5eP8rGnAmrMJWU2ckGOqUBknmILV3k2v%2BXalw15elQvCaOPxq2YcigAA%2FYxIxUFYKo%2B0%2BvM7Cw10ltqRaEtopZVr%2Bh5jE1zE8ooPfaZRsMOtWBKgPhg%2B43ywsObY6QYtr1SJZ%2FDQZuCJ%2Fsuk9kckW26hhk34L7pTQSFgv%2BnBWzQ21xuMh2G7Z1lfbnGofQrLcW1pYXIXw44q%2BTr4G%2BNfXZN6IxxGhReaTV5FhLWOtje2VCoMUb&X-Amz-Signature=0269028eacefc1b66ba3cd90ee3529dfcef662f829d43820d76d331fac5935eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

