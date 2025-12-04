---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHPHBLJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDoTWsZ7BrJLNRMvC62MB0OJcPxdlXcd0ssYPkLyUDOpwIgc7t4WID9bHX%2F53uKu9QQcSer7QwodgAfIPBe5hggPlEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFgotlgXrAVXsWymVSrcA%2F0H4oIhW%2BAuLol99E%2FMyqVpnsi9NaOeAl3z08DxTNI9Eir6ZV4g7sax5dFDL2bqz%2F3Wm3HYCoZVWGZJDBjDTOTIVrlgMFiICLCd4VTrLMYbaACTH%2Bd7%2B9LoeTxhN3p%2BPRBEuZ4XNLVwpEf6NODWEDoIktZMcum46E%2FSgRKjIaXPEYYCcG0PRxruGNL%2BoRystpS%2FsKKgrSxfOEBx2T83N3EClpnc%2BPYt4tm23kyD%2F0Hg%2FzFoVAq83I8ejQbO8nG0s7eq%2B572%2Fo5kVLnIgEw4O9%2FE0ibH0n19yg7U%2BbvK%2FvsQzd5jy3LuRyxzycK9fRiJIgUEduryNqIp9cnfSBKMTPg%2FOxhj40RPF%2Bx4y%2FRRdlF9MBVaTTY7h4Yn03TahwkPBJK3mAFNYjAjQv5v3OgSYT2gVskNg71o8nsfYLax5sTeCUNl39xyelq4ex3QTRbdr3hD7Si%2FOFeSRfzh%2FiF5nKBye%2FPs0jA%2BCdn8xVb%2FlchbSIcGpMS7ghlgMsNrnjRL7NkPkHmvCR52lo%2BWFaRon6SKwnmeo8oSq0w1VuBJ1kco5%2B6qFc%2Bn8vJQKAOBB1x8CprP7sQQLSCus%2Br0oTq4qtSb%2Bk0QavVaPZI%2Bvk4mUmHWkzEUet4ZNNx2nT5%2BMMHKxMkGOqUBObJVMd2LnmCrIAIVERnthsFyFifJbCrB2%2BfCHOuKPJD7Kn8tyq4hWr3tEYER3xmzBdAzOj%2FpyKiEbOasOOEUul6iePKprRX3TXcNT%2F3OG1CznVDgPKYbZ7wcjs%2FclQ%2BwwduND56blX3arVu%2BJqSHKyFcRqDdIfw30oPWLqVX1CUcCL%2BWMrr65IJTyJFE7LDL8CkhFIX%2FNribRDanLNFb87pCqMbN&X-Amz-Signature=c4885103309fb0d0f6b8986d04184e496735aab29bfbb42947072fb8dd6351ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHPHBLJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDoTWsZ7BrJLNRMvC62MB0OJcPxdlXcd0ssYPkLyUDOpwIgc7t4WID9bHX%2F53uKu9QQcSer7QwodgAfIPBe5hggPlEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFgotlgXrAVXsWymVSrcA%2F0H4oIhW%2BAuLol99E%2FMyqVpnsi9NaOeAl3z08DxTNI9Eir6ZV4g7sax5dFDL2bqz%2F3Wm3HYCoZVWGZJDBjDTOTIVrlgMFiICLCd4VTrLMYbaACTH%2Bd7%2B9LoeTxhN3p%2BPRBEuZ4XNLVwpEf6NODWEDoIktZMcum46E%2FSgRKjIaXPEYYCcG0PRxruGNL%2BoRystpS%2FsKKgrSxfOEBx2T83N3EClpnc%2BPYt4tm23kyD%2F0Hg%2FzFoVAq83I8ejQbO8nG0s7eq%2B572%2Fo5kVLnIgEw4O9%2FE0ibH0n19yg7U%2BbvK%2FvsQzd5jy3LuRyxzycK9fRiJIgUEduryNqIp9cnfSBKMTPg%2FOxhj40RPF%2Bx4y%2FRRdlF9MBVaTTY7h4Yn03TahwkPBJK3mAFNYjAjQv5v3OgSYT2gVskNg71o8nsfYLax5sTeCUNl39xyelq4ex3QTRbdr3hD7Si%2FOFeSRfzh%2FiF5nKBye%2FPs0jA%2BCdn8xVb%2FlchbSIcGpMS7ghlgMsNrnjRL7NkPkHmvCR52lo%2BWFaRon6SKwnmeo8oSq0w1VuBJ1kco5%2B6qFc%2Bn8vJQKAOBB1x8CprP7sQQLSCus%2Br0oTq4qtSb%2Bk0QavVaPZI%2Bvk4mUmHWkzEUet4ZNNx2nT5%2BMMHKxMkGOqUBObJVMd2LnmCrIAIVERnthsFyFifJbCrB2%2BfCHOuKPJD7Kn8tyq4hWr3tEYER3xmzBdAzOj%2FpyKiEbOasOOEUul6iePKprRX3TXcNT%2F3OG1CznVDgPKYbZ7wcjs%2FclQ%2BwwduND56blX3arVu%2BJqSHKyFcRqDdIfw30oPWLqVX1CUcCL%2BWMrr65IJTyJFE7LDL8CkhFIX%2FNribRDanLNFb87pCqMbN&X-Amz-Signature=1197bbfc37fcd7a8478b144634747d1c40f69747d64cb0d8cc0cc927d2c26ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

