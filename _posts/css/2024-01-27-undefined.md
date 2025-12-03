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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSFRFLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFpJQMdarZlrByNKZgLH%2FIGzYFehlBBI6hxawR3xEcMRAiBuGssvcarB2LCHJu1WuBkrEDLL7VuQ%2FhBfFnEmaCw66ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7SPkeD5fWkJWcLwSKtwDAnkxNoCFddgQXj74nz5PV8Z%2FFRuk8cSJVGByk5lg23u7Vt1bwj6MLIGy%2BQeIlf2zZcrwL46bQfsR5%2BVN%2B2VsezDpbm9nIwToQVRC1jplF29ngla4C1wqokAM5MAt7iBFS84NmLZ4So6BzG4gSgOuXAPXuk6LU8iNIFV8B7PU%2Ft6v5eActuSO1rW1EFVDqkbVSBJw6AURSNdp6YeiulMXdUV7J7N061ZUzGJcLTZw1Cq4Nuu0bXeqZsScm7Q3Ra5nxKz2i6dFBMuvuRprQgXszQJ4bp19XbQn1bF6cGpYPnxalRzxGmZHPf159v12QzQLXbkZP%2BFgEmAuMgmhUJzVCYEdlXdyKxf6iJkF0xDJPDgP2s2Os4lywlNg1a7OHX46wXgzJnu4AO5M41CQlmSjleeJHtOCavoNK39b%2BzP7Pm8rHsQLDiKcSXeAvU3ZCyANj4hSLXYxrAkveHap4npqXgvEGeOMguT0FtYrjxsryoqxjEfuuXUHPWShwsrKG%2FoZqRi5AARd51Ck0woWWb2EMsRFf3AdNiXxUbrOQRliQkMfroFf4HuodVUaCPufgbrOIcINWiKxVh5tgu36c1nagvhEahkUGXmBBDBnJrjAR2LTD3kEcOoc%2BQO%2BYowwxMHByQY6pgGCuENXTXiqX2olSheTY2tMWsIt8cJdalXrHgghb6nfGKevSC5qrnauzODJiPgUJzA4qmqsG9JQKegkig6qDL%2B6yeEFaWdoFWKi8G7uAtFO2caToNxByGNztXW1%2FKx90%2BFcst%2FVlMO0Em1rR01dpxP0DXoCoXnA5GgWsG5tlHbvt7fzJ%2Fw%2BBVp8%2FwebgogLCVB4Auo9aW9d2GO7Q0BCPqxoKzKplUKO&X-Amz-Signature=01e62118e3af6dec226a1deb4785f823f326075d54ad68cb52e08c7bc73063f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSFRFLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFpJQMdarZlrByNKZgLH%2FIGzYFehlBBI6hxawR3xEcMRAiBuGssvcarB2LCHJu1WuBkrEDLL7VuQ%2FhBfFnEmaCw66ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM7SPkeD5fWkJWcLwSKtwDAnkxNoCFddgQXj74nz5PV8Z%2FFRuk8cSJVGByk5lg23u7Vt1bwj6MLIGy%2BQeIlf2zZcrwL46bQfsR5%2BVN%2B2VsezDpbm9nIwToQVRC1jplF29ngla4C1wqokAM5MAt7iBFS84NmLZ4So6BzG4gSgOuXAPXuk6LU8iNIFV8B7PU%2Ft6v5eActuSO1rW1EFVDqkbVSBJw6AURSNdp6YeiulMXdUV7J7N061ZUzGJcLTZw1Cq4Nuu0bXeqZsScm7Q3Ra5nxKz2i6dFBMuvuRprQgXszQJ4bp19XbQn1bF6cGpYPnxalRzxGmZHPf159v12QzQLXbkZP%2BFgEmAuMgmhUJzVCYEdlXdyKxf6iJkF0xDJPDgP2s2Os4lywlNg1a7OHX46wXgzJnu4AO5M41CQlmSjleeJHtOCavoNK39b%2BzP7Pm8rHsQLDiKcSXeAvU3ZCyANj4hSLXYxrAkveHap4npqXgvEGeOMguT0FtYrjxsryoqxjEfuuXUHPWShwsrKG%2FoZqRi5AARd51Ck0woWWb2EMsRFf3AdNiXxUbrOQRliQkMfroFf4HuodVUaCPufgbrOIcINWiKxVh5tgu36c1nagvhEahkUGXmBBDBnJrjAR2LTD3kEcOoc%2BQO%2BYowwxMHByQY6pgGCuENXTXiqX2olSheTY2tMWsIt8cJdalXrHgghb6nfGKevSC5qrnauzODJiPgUJzA4qmqsG9JQKegkig6qDL%2B6yeEFaWdoFWKi8G7uAtFO2caToNxByGNztXW1%2FKx90%2BFcst%2FVlMO0Em1rR01dpxP0DXoCoXnA5GgWsG5tlHbvt7fzJ%2Fw%2BBVp8%2FwebgogLCVB4Auo9aW9d2GO7Q0BCPqxoKzKplUKO&X-Amz-Signature=35dff5bdb4616f43fa283ea5f0a56a8f547e9a2d9dcb994697e4d7a9f9b108d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

