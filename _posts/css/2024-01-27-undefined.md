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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6HAFXH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDwLK8Tr5N5QO3jkhgf9k3t%2Fcu3pKMAqa6VKMBtfsFaPQIhAKfxZwf1JvgHPmJYrsC8exg8TsxK9T%2F30FHIYxJivrEIKv8DCCcQABoMNjM3NDIzMTgzODA1IgzXsPTZVwaTbLk%2FtVkq3ANDH0Yt9b98DPAY6mgQS39T9vHD3wOGcAp6BOVrxAGjLWov94Z1yZrttxG2pQk0vHBMo2J5p6uzQLOJCid5G%2FA%2BY7NpkasqNrABEpBk%2BjLF5dbQO9aEYMTVc8aW9hLDoOYU3nEpEUyrTcBXBUqxa81%2BO9m4OCbiQbMtCmcd5NVI3B%2FUl39n8Hb8iH54wIPthkBSbUW37AT5tnXllqfquKDbFT0vqhPnTQ7O2nj4qetuGurgh0jKmCIE1MIlPwa6lO%2FLut48OX2PhYL13Noo%2BBIwWQRvVreMH2hqNoSP6G4hgoc8ZhOHm4rvCfaoGcE1qCfUwnS64GFc1nLsxxoGjj0WzhrhYSPwmr%2FwB%2BlW1lHPOWYBMzRy0o1XGNtbjjPCk3M4e24Malb6Ljj1RQaQA4FPcebX3rLsaWj%2F9nnYW7VPnN5nEp3bIyXzTxioJvIpgRAez0iB9bCDD59Y27pXDAAVH%2BnlIqkYGCi95KI6mHPTJYLfh75IcNcv%2BAQeoR8XoXe1lDlYHV6pZrHLBVYyJta4KU7Gf4N6W4q%2F1a3qr2ZxiTrOvawYZ%2B6xRgXCHQ05VYVwQwAg3KMwwU9dWQKOwlh3zo66p%2ByxC5bPSt62uEDDltfkfjAu2U68ZXNh0TCimr%2FJBjqkAR7rDLowCHBh%2FIEzSeNyDKT0zXCug5rsdifsuBY3Glqipi80YZcKv57saVE7%2FJ63MjIywQF8T02O2nURL23qmoxQATHpoEQuQbzErhyHU7b1pMd9RXBvhYGijn2vycQNHbszbkaPC6FfOLTkkKXxsrKl%2BfmzVKdFYja6zKAS%2FcvgREabMxK%2BwzfBfAaO%2FltOJ7i3hWgACPjwgT7NHCYmUZTspbCb&X-Amz-Signature=6472ee11475dbe1488e64ca3ed90b3930d2111844d6bce090f6a440f8629fab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6HAFXH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDwLK8Tr5N5QO3jkhgf9k3t%2Fcu3pKMAqa6VKMBtfsFaPQIhAKfxZwf1JvgHPmJYrsC8exg8TsxK9T%2F30FHIYxJivrEIKv8DCCcQABoMNjM3NDIzMTgzODA1IgzXsPTZVwaTbLk%2FtVkq3ANDH0Yt9b98DPAY6mgQS39T9vHD3wOGcAp6BOVrxAGjLWov94Z1yZrttxG2pQk0vHBMo2J5p6uzQLOJCid5G%2FA%2BY7NpkasqNrABEpBk%2BjLF5dbQO9aEYMTVc8aW9hLDoOYU3nEpEUyrTcBXBUqxa81%2BO9m4OCbiQbMtCmcd5NVI3B%2FUl39n8Hb8iH54wIPthkBSbUW37AT5tnXllqfquKDbFT0vqhPnTQ7O2nj4qetuGurgh0jKmCIE1MIlPwa6lO%2FLut48OX2PhYL13Noo%2BBIwWQRvVreMH2hqNoSP6G4hgoc8ZhOHm4rvCfaoGcE1qCfUwnS64GFc1nLsxxoGjj0WzhrhYSPwmr%2FwB%2BlW1lHPOWYBMzRy0o1XGNtbjjPCk3M4e24Malb6Ljj1RQaQA4FPcebX3rLsaWj%2F9nnYW7VPnN5nEp3bIyXzTxioJvIpgRAez0iB9bCDD59Y27pXDAAVH%2BnlIqkYGCi95KI6mHPTJYLfh75IcNcv%2BAQeoR8XoXe1lDlYHV6pZrHLBVYyJta4KU7Gf4N6W4q%2F1a3qr2ZxiTrOvawYZ%2B6xRgXCHQ05VYVwQwAg3KMwwU9dWQKOwlh3zo66p%2ByxC5bPSt62uEDDltfkfjAu2U68ZXNh0TCimr%2FJBjqkAR7rDLowCHBh%2FIEzSeNyDKT0zXCug5rsdifsuBY3Glqipi80YZcKv57saVE7%2FJ63MjIywQF8T02O2nURL23qmoxQATHpoEQuQbzErhyHU7b1pMd9RXBvhYGijn2vycQNHbszbkaPC6FfOLTkkKXxsrKl%2BfmzVKdFYja6zKAS%2FcvgREabMxK%2BwzfBfAaO%2FltOJ7i3hWgACPjwgT7NHCYmUZTspbCb&X-Amz-Signature=30ce23796b964b5989a988bfc4194da963f1c910528763ce8aae487d2c5ff5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

