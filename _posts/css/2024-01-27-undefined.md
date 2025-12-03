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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDI7VMN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIB6hAfGB35HFFcDhMfvgfODQW3AxWSEYBtBw%2FXaDcc9FAiEAs2FZjN1zTVNDXcyuvVc9gWP4bjmG%2BqnLqDZsPOUi83Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEJ0IbcguvP4KJfqISrcA7iT24kWRqghErDLRvsvJLpSowQdx4ocaioMQ2aJ4YpUq6pYndv12u56aAjnXGHtEk7mGl1mUCRnAtzrFsFmqy4ooCzLejeC1y%2FKZiq7qkZZYPbXgd3fnd%2B9wcgN8XMPgZHwfgfj4A%2FGJrNgi1%2Far%2BQRvO%2FqCA1qVl4jQq%2BhdlPxWLuEOx32nmNKLG1vugttRgFMQBxISbVJ5RYW6j6HJHbGrYugTcrYVzDcO9Hk%2FQfOgE96%2BREOU9vpJrdwmSJecqXt2IG2EdLmzCEYSFWP%2FWeT9baIF6AauJi0PB%2B6JTLzOiu12ZRZHx13Uaa8ovYfRNesBDcd%2Bo5%2FvxjGK32s3DfcDsrzH7ZbSxTEUDADxQ1VrdwhQHptMcUWcnmz4XZBIJbtRuj%2F%2BJCrqCM%2BIZ1x1clAJIovLeN5cKxp5mhl3JwOMcPmXfC4Qoj5zsvsdXH4n6CHwLGAWQTkN2UxN2%2Ba2lHqUY%2FNVQ26HzaVzTKUbTZevpIqglSrx%2BtBuP5x6ISHp7uQoASR5f76SrMt8QabYisfKz9h3Nam84i2vwLpPBp5fmkpjQ1InEg%2F65Yhdi7FuE3xwNFfjK8s2ntcUBXrnEBVKqxGsUlEFJAI7Ona4Vv3KQr6cObaTDqCvND4MLO5v8kGOqUBLlt4ZSSMzZGkHkjrSWL7obKJJVfUTiUic2F2xNzp%2FKuWDWJZORAWk2dTYwWzfayCOKyUbb%2BtrVO6g9wc3ESEmEukNn3r19uKi8rxOt3iiONJhf%2BWI%2FL2UbcSZ1K45TnxJCvHkPdJ83x2Osd3wGbcpjfE7kA1ebLNb3Knq%2B%2BDD85ZmXrevkabzw%2F6p0uC2CSsi3tUncUtnnvbX0G3FBs1tONJbsZk&X-Amz-Signature=4f998db0dfcddcd8bd33ad32bff6bba800867b99f75287d3b476d1c26f1ba146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDI7VMN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIB6hAfGB35HFFcDhMfvgfODQW3AxWSEYBtBw%2FXaDcc9FAiEAs2FZjN1zTVNDXcyuvVc9gWP4bjmG%2BqnLqDZsPOUi83Aq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDEJ0IbcguvP4KJfqISrcA7iT24kWRqghErDLRvsvJLpSowQdx4ocaioMQ2aJ4YpUq6pYndv12u56aAjnXGHtEk7mGl1mUCRnAtzrFsFmqy4ooCzLejeC1y%2FKZiq7qkZZYPbXgd3fnd%2B9wcgN8XMPgZHwfgfj4A%2FGJrNgi1%2Far%2BQRvO%2FqCA1qVl4jQq%2BhdlPxWLuEOx32nmNKLG1vugttRgFMQBxISbVJ5RYW6j6HJHbGrYugTcrYVzDcO9Hk%2FQfOgE96%2BREOU9vpJrdwmSJecqXt2IG2EdLmzCEYSFWP%2FWeT9baIF6AauJi0PB%2B6JTLzOiu12ZRZHx13Uaa8ovYfRNesBDcd%2Bo5%2FvxjGK32s3DfcDsrzH7ZbSxTEUDADxQ1VrdwhQHptMcUWcnmz4XZBIJbtRuj%2F%2BJCrqCM%2BIZ1x1clAJIovLeN5cKxp5mhl3JwOMcPmXfC4Qoj5zsvsdXH4n6CHwLGAWQTkN2UxN2%2Ba2lHqUY%2FNVQ26HzaVzTKUbTZevpIqglSrx%2BtBuP5x6ISHp7uQoASR5f76SrMt8QabYisfKz9h3Nam84i2vwLpPBp5fmkpjQ1InEg%2F65Yhdi7FuE3xwNFfjK8s2ntcUBXrnEBVKqxGsUlEFJAI7Ona4Vv3KQr6cObaTDqCvND4MLO5v8kGOqUBLlt4ZSSMzZGkHkjrSWL7obKJJVfUTiUic2F2xNzp%2FKuWDWJZORAWk2dTYwWzfayCOKyUbb%2BtrVO6g9wc3ESEmEukNn3r19uKi8rxOt3iiONJhf%2BWI%2FL2UbcSZ1K45TnxJCvHkPdJ83x2Osd3wGbcpjfE7kA1ebLNb3Knq%2B%2BDD85ZmXrevkabzw%2F6p0uC2CSsi3tUncUtnnvbX0G3FBs1tONJbsZk&X-Amz-Signature=031ac57748ccecc0cf03e7eed91355ba0960b3c746fcbf76cbb78abb7d5e584d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

