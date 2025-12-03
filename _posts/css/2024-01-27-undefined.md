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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57LYNBF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDTuVA0oF98B3WzhfuzkF5IEBSQtYZN3aFXYlOdCb6L4gIhALUqXwBpiTds%2BzaWbP9NFUvZFK2bY1S4dZhXbf0NxY6OKv8DCCIQABoMNjM3NDIzMTgzODA1IgxITKgqfbRLPPKz5DYq3AOuebdOj0bDr87kzC%2FesUonGAeT2WnV%2Besg1A4toO2emex%2FiieKmdQxFR3Ejq8w36MsGz8jfsJFhmN9hP24QF5V7XCUBNfbwUheA3M2tvEIYicMMQiz7UPL28r3axb%2FND7BIg86CDK1WwIbgtloeNsjJ80H8aT2kGFpWGFQ9LY1BypFULXvUiUQLtKoWbsDIB1VvQi43NEwq7lH%2BsfypbcCUm9Jl5cKivp%2BPyQt5wyQm9ThyvMRfMkevcDU9QK7zwQJMv%2FQWhzWXyjMa1%2FE%2B4v9mxIr4URmnun7CKl1EvF%2Fv5ldTPr0BlE8Hk6t1QOAaKZA8YUbA9tANXPWVyLf6g9FnqKWdWtiPjb5R5C59DP0ixQIqqFlL8zcTFLKaGBXPvGifEMJqMtxnBQT9C8DzdJDLwNhtHITiFv77%2B4nMXhJHMnXHJa2GWliBDab6lDCMc6aQH1MWy9eROpaCB88o8Kr4X5hB8quJfOfPJGzUrRLauaJosFeYiw9FDfKDQo4iCWlD%2Ba5iNG8zyMMrVD8pHfBGuWVp6h2iN%2F0id6E0jxPxJZnsqgI6w2cALKeMW0SvNZYIkZrNrmzF7XicZzthhxHagG9m9yF2Z8asYSyvgLSktf2PjbQwBPZMPvBPjClob7JBjqkAXWF2I7dOzikS3Xbm59j0VHsW3jCIafmoNpmN7z4vpiS%2BCyyfAx0tc1KyBpiUpTKNivFqDufDLiAaUb87CgRaJsx3A2ODfRFtadg7nSkTaVTTU6qsZoY%2FcsiyZlY1L84P6%2FX0xBrbmett2XOe02EGDP%2BQcHVyfYVlkpAnqDblpbiiiAOKV7wcqV%2BGNczrAd0JIksAC5eslSXeuv1Ed5GOwNeLL1H&X-Amz-Signature=02020928f8bb4727b1a2ebf7fe27c4113c4f418835c4c6792d10ef29429e0694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57LYNBF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDTuVA0oF98B3WzhfuzkF5IEBSQtYZN3aFXYlOdCb6L4gIhALUqXwBpiTds%2BzaWbP9NFUvZFK2bY1S4dZhXbf0NxY6OKv8DCCIQABoMNjM3NDIzMTgzODA1IgxITKgqfbRLPPKz5DYq3AOuebdOj0bDr87kzC%2FesUonGAeT2WnV%2Besg1A4toO2emex%2FiieKmdQxFR3Ejq8w36MsGz8jfsJFhmN9hP24QF5V7XCUBNfbwUheA3M2tvEIYicMMQiz7UPL28r3axb%2FND7BIg86CDK1WwIbgtloeNsjJ80H8aT2kGFpWGFQ9LY1BypFULXvUiUQLtKoWbsDIB1VvQi43NEwq7lH%2BsfypbcCUm9Jl5cKivp%2BPyQt5wyQm9ThyvMRfMkevcDU9QK7zwQJMv%2FQWhzWXyjMa1%2FE%2B4v9mxIr4URmnun7CKl1EvF%2Fv5ldTPr0BlE8Hk6t1QOAaKZA8YUbA9tANXPWVyLf6g9FnqKWdWtiPjb5R5C59DP0ixQIqqFlL8zcTFLKaGBXPvGifEMJqMtxnBQT9C8DzdJDLwNhtHITiFv77%2B4nMXhJHMnXHJa2GWliBDab6lDCMc6aQH1MWy9eROpaCB88o8Kr4X5hB8quJfOfPJGzUrRLauaJosFeYiw9FDfKDQo4iCWlD%2Ba5iNG8zyMMrVD8pHfBGuWVp6h2iN%2F0id6E0jxPxJZnsqgI6w2cALKeMW0SvNZYIkZrNrmzF7XicZzthhxHagG9m9yF2Z8asYSyvgLSktf2PjbQwBPZMPvBPjClob7JBjqkAXWF2I7dOzikS3Xbm59j0VHsW3jCIafmoNpmN7z4vpiS%2BCyyfAx0tc1KyBpiUpTKNivFqDufDLiAaUb87CgRaJsx3A2ODfRFtadg7nSkTaVTTU6qsZoY%2FcsiyZlY1L84P6%2FX0xBrbmett2XOe02EGDP%2BQcHVyfYVlkpAnqDblpbiiiAOKV7wcqV%2BGNczrAd0JIksAC5eslSXeuv1Ed5GOwNeLL1H&X-Amz-Signature=463fb3547fd16f6936e8d30e3b4998bb11adcfd75fea172ca4716b256dc51693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

