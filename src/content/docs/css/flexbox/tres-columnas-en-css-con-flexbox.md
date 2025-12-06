---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI625DAE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSDfyk13%2FH83IIO2pBeYKhUXEnPu4rh9Bg17QuTfYUCAIhAIvCLOdEboDjwCc5RwfP8nv0W9E3vgHwvShVFboNJSQSKv8DCHQQABoMNjM3NDIzMTgzODA1Igy%2Ba0lioiRmzEa8MLEq3APtQPe88Kxc%2FKQehFlmuPJiKifCQpFcsxYJtoH1qQUMth37d3gA2IdFRsGpG43kEQE%2Fqj0DS0%2FBhv1%2FADCoVpE2tg5Jo%2BhSIoaz7jcqh5XW2gLLmgFRM3sTu02TOPxWRpirLaaVmTcBcKkBmwNbh1v0faXTbprFOT%2B8I6O8jm5Agy5z6TFzSbbXE%2BfimvgpdszWkC1pf19fF8mDWbjvLWW8H7XSG0AlMQhmJIP30ZuBnVN9DihxWZUFrg2Z57blpKJ6QGZ0VXzqwHPi9Cq%2BX5j74M8vUTgpGW1VnzY4Crsca4lOGBPhkRc7hIZ3Op0KbNfb7xjf1WtCF5HITDQF94Qxw6o4wH6SAnhxFF3Y%2F2%2Ff%2Fh83ZpdGYX5fIf6%2FpPx3M0drViMsg022zaJAXEKkxtLU0GfXmaPuxuxYIgsXAv8BlnYDZdyrBN5lrHYlm0ZITgFvFB6Yp3pd9Zep%2BtvO%2FFzokHOvH%2BOpQ8hOV24OQPOIL2buST5zwmPsGCMbb0UrPaC8MY8T7stiQ1%2FO5ZGT3mYXYLYEDHJyCDKY0ZAZmE8o8su%2BfUAMZw2ph%2Bv3Ef6IOF8pC4719YbTISIPT8fVmhY4QdB%2FwVcDBGC0JoaZcHRFSKQiBFwcBBW3XJejEzCaitDJBjqkAcex9n9Xz4E32twQmmUuSWlDKF7%2BRNTzn1VpeMCTnWvLBAkq6FTIXoJoNMTOUU0B8UuBDPfJAeTMWOZ4HjKSjJwFleUZVsnZcK5Z%2B2rJZ4BKH05p236mkUwY1BZkzNdAVcbkPxZj7S4JVx7QwG0RlXGoJ2rohFrIH1E9HIaOdK%2FMvk8588NuwAbnCGXjjRjMxZlaCdKD5xjp4MZK85svYjDA0eBi&X-Amz-Signature=4ca5c5ac63166c48fd9e3417e67e356caca301be51c29ed7afb8b2ccd3f71e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI625DAE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSDfyk13%2FH83IIO2pBeYKhUXEnPu4rh9Bg17QuTfYUCAIhAIvCLOdEboDjwCc5RwfP8nv0W9E3vgHwvShVFboNJSQSKv8DCHQQABoMNjM3NDIzMTgzODA1Igy%2Ba0lioiRmzEa8MLEq3APtQPe88Kxc%2FKQehFlmuPJiKifCQpFcsxYJtoH1qQUMth37d3gA2IdFRsGpG43kEQE%2Fqj0DS0%2FBhv1%2FADCoVpE2tg5Jo%2BhSIoaz7jcqh5XW2gLLmgFRM3sTu02TOPxWRpirLaaVmTcBcKkBmwNbh1v0faXTbprFOT%2B8I6O8jm5Agy5z6TFzSbbXE%2BfimvgpdszWkC1pf19fF8mDWbjvLWW8H7XSG0AlMQhmJIP30ZuBnVN9DihxWZUFrg2Z57blpKJ6QGZ0VXzqwHPi9Cq%2BX5j74M8vUTgpGW1VnzY4Crsca4lOGBPhkRc7hIZ3Op0KbNfb7xjf1WtCF5HITDQF94Qxw6o4wH6SAnhxFF3Y%2F2%2Ff%2Fh83ZpdGYX5fIf6%2FpPx3M0drViMsg022zaJAXEKkxtLU0GfXmaPuxuxYIgsXAv8BlnYDZdyrBN5lrHYlm0ZITgFvFB6Yp3pd9Zep%2BtvO%2FFzokHOvH%2BOpQ8hOV24OQPOIL2buST5zwmPsGCMbb0UrPaC8MY8T7stiQ1%2FO5ZGT3mYXYLYEDHJyCDKY0ZAZmE8o8su%2BfUAMZw2ph%2Bv3Ef6IOF8pC4719YbTISIPT8fVmhY4QdB%2FwVcDBGC0JoaZcHRFSKQiBFwcBBW3XJejEzCaitDJBjqkAcex9n9Xz4E32twQmmUuSWlDKF7%2BRNTzn1VpeMCTnWvLBAkq6FTIXoJoNMTOUU0B8UuBDPfJAeTMWOZ4HjKSjJwFleUZVsnZcK5Z%2B2rJZ4BKH05p236mkUwY1BZkzNdAVcbkPxZj7S4JVx7QwG0RlXGoJ2rohFrIH1E9HIaOdK%2FMvk8588NuwAbnCGXjjRjMxZlaCdKD5xjp4MZK85svYjDA0eBi&X-Amz-Signature=8a56ec9a06a1c5d713383c17c1a37088295ebd303dd223da864af2001a065bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

