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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWACSGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCC4ieJUD5nSCVhfphTMMCltG%2F68MFk7YSqdJrW39yBYwIhAN%2BwBA6%2Ftjvf%2FN7CjApTSlOt6yd2rGcRLkbouXiIerjhKv8DCCwQABoMNjM3NDIzMTgzODA1IgzBKTBkB9D1D%2B3oQmsq3AP60b5lcso7GESJ4VpJYoltp7vDpzU9DtGYB1kJHG5oUTp3ze0dLD2jtkiTIWt9nAiQ%2BPJoPiJPgtndpBKnhqZtFpCh0LpTQDH7cSOpf6Fv7q3BDusd4%2B4vs3TPIXWZ7G%2B%2Blil9jC41hGbexIVJclX98YodiztTlrcN0qlQNNdu1Qcx%2FkSzlF2Nnm4XQ82kWMIlRfvzK2ThMwyZSQA%2Bth0GKEudqGpDi7g0EXlSKu6jJnpbvWAwDrY2Z%2BtjLM4mPQMAtYR%2B6aWWqhlgxwn68sn9Z2Q0IwxD1cVY18eFZU0%2FtYFxh0EFoMaBwdWeTzybTJusUXJwFMnS6pjWFCs3z7X433G5hWqtO9EYrtqZZHV6C1DmgqA9p7pYGwKx91NmDfLVR62tO0PT5mqBC4LzHKsFdOn%2FijX6zQOIkgXD1AZG8USZRSZWcA8kV3QVUhDQxaM%2FcIOGGiz%2BBmbK9MniicOCsfDERlUTQ8hTBmovKxguddeTA2KFC0EC5%2BRDa4%2BR0DGOXc8CNIwc4VYN2IvsUP%2BTO1G5eTqlP8labgpjFf7X2%2Bp7eQONG4gZm5HrZt9PTUwhsv7EMlzy6yZGKkfsPUVdNSLFI%2BxMZYXc%2F0aLZp3ksmgTsP%2FpeDiN92QmyTD9rsDJBjqkAaaDIA16mOW8hnJSWdspAN%2F784Ilh5O%2BbcUPD8ECHjxsWrm6fDqsKbjaQSyiUA5Cw7srb2%2FSiEdnPocx0c22Bs3puZK1hM9bab1O1tSA00wdTbLDWWjYTy9fKU79ITlEsPd%2FKwi4dKVDUK%2FArEVwoJPXqvfDAjwYDOPqWSMW7RBa4JwVH7xLeJvxhCPxOV0RmSGGLgOpl1nsPjcRS7IbPea%2BwnNW&X-Amz-Signature=423f39c98ed9765a014b7b41097e74d16f746f9e5ffdccedeac6e815fa873917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWACSGC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCC4ieJUD5nSCVhfphTMMCltG%2F68MFk7YSqdJrW39yBYwIhAN%2BwBA6%2Ftjvf%2FN7CjApTSlOt6yd2rGcRLkbouXiIerjhKv8DCCwQABoMNjM3NDIzMTgzODA1IgzBKTBkB9D1D%2B3oQmsq3AP60b5lcso7GESJ4VpJYoltp7vDpzU9DtGYB1kJHG5oUTp3ze0dLD2jtkiTIWt9nAiQ%2BPJoPiJPgtndpBKnhqZtFpCh0LpTQDH7cSOpf6Fv7q3BDusd4%2B4vs3TPIXWZ7G%2B%2Blil9jC41hGbexIVJclX98YodiztTlrcN0qlQNNdu1Qcx%2FkSzlF2Nnm4XQ82kWMIlRfvzK2ThMwyZSQA%2Bth0GKEudqGpDi7g0EXlSKu6jJnpbvWAwDrY2Z%2BtjLM4mPQMAtYR%2B6aWWqhlgxwn68sn9Z2Q0IwxD1cVY18eFZU0%2FtYFxh0EFoMaBwdWeTzybTJusUXJwFMnS6pjWFCs3z7X433G5hWqtO9EYrtqZZHV6C1DmgqA9p7pYGwKx91NmDfLVR62tO0PT5mqBC4LzHKsFdOn%2FijX6zQOIkgXD1AZG8USZRSZWcA8kV3QVUhDQxaM%2FcIOGGiz%2BBmbK9MniicOCsfDERlUTQ8hTBmovKxguddeTA2KFC0EC5%2BRDa4%2BR0DGOXc8CNIwc4VYN2IvsUP%2BTO1G5eTqlP8labgpjFf7X2%2Bp7eQONG4gZm5HrZt9PTUwhsv7EMlzy6yZGKkfsPUVdNSLFI%2BxMZYXc%2F0aLZp3ksmgTsP%2FpeDiN92QmyTD9rsDJBjqkAaaDIA16mOW8hnJSWdspAN%2F784Ilh5O%2BbcUPD8ECHjxsWrm6fDqsKbjaQSyiUA5Cw7srb2%2FSiEdnPocx0c22Bs3puZK1hM9bab1O1tSA00wdTbLDWWjYTy9fKU79ITlEsPd%2FKwi4dKVDUK%2FArEVwoJPXqvfDAjwYDOPqWSMW7RBa4JwVH7xLeJvxhCPxOV0RmSGGLgOpl1nsPjcRS7IbPea%2BwnNW&X-Amz-Signature=41cb9cba66e0f7edb98b6dc30c5bfaf8c863fbfb776ae4bf16710d5d052db08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

