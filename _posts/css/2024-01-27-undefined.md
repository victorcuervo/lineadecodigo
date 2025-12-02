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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KML7S7H%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDWyIJrJOr4jgHuJ2f80UtzaHaseN7zqpIVJGNkozYJKQIhAIEN86u7yf61Mc4e%2FmRGpnWFzadDLr2%2BWlIlwKABb4K%2FKv8DCCAQABoMNjM3NDIzMTgzODA1Igycytwic%2BoEHrQRQnwq3AM3h6YMZQ%2BjLiOIF96BYqFClpSvICSVkc5kBBvdY5l7ZC7CngWtB8ZBSJVh7QbGfrUvVMLV9c%2FGMOT48Oo4YU%2BkN3lAdRbRoGpdq93%2BggSKF4dqBBvU4VSXDx0RDmOZyaks7oq2%2F98FruNEnCLkL%2Bkw%2BWlVnDyPwhj3QkOLYFZGQ2S8Rz4Xwa9txgFqtmDm0uyXe8sGNtKRQpXRkwjsXbcW0xTJPEIoOoQp%2FFvhXIPZEbIMZATtAV9aC4qKP%2B1WofzGKKUkgdMl0Z2Ho6KWS35%2Fs1eE3wWBdNtA5xGPfsXt5YwjM3QgAwD%2FIOZa6mJd3dZrt%2FLsJ9yBBBZxuk4YXg4V4KL6p6Y3J7DUaT1cIBST0d%2F4iFXMlVqhUE4pyF75ouqPlVjso6rs3ema9KVGX%2Bh0%2FA6KP7cDd%2BAPaXI5wzCY3cwTOmjI%2FBWgh4G9uIo0V1Z7BVLut6%2FI6tMyWGv9Zzj4MR66mCutJwVSGfRg1AKmChM%2FCMHzLnTMjevDFeVuAOUW1VjX6y0Vt0Q%2Bv4%2BD0mommQsT2nynwp8GPHDrBWt7tdYbeyLA4aYORcitt8hb3XenchPzIFVYxIJrdidcj6qWeN3UepbSiy7J6S9FIO%2BcY%2FIx4RkxX4n%2F4WI26TDL5L3JBjqkARrB6g%2BV5PrNtw5rT3lIYHuQpQ7FurAqHY0gPDAawTAzNdjH7%2BVAwQkEjJn2mrvUpKIdE2PQ3GsETpKsiV3CQTsflTFbKmBeuYVbTz%2F8qq6%2Feadw6zbkP1TCRQYJUmAqApwCOY3Z2%2FIL5G6r3DQsBSZ2rOjE7FKBGss71sbjXvcyxNckhUZmCoDeqPpSsvHtZY6t3uEk4VI%2BfG8CCgH5ZjRZRU8r&X-Amz-Signature=0e15b23d9235ba6beebc144653215ca3c6ede1c0fa3090c59fa434bc0c08ca40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KML7S7H%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDWyIJrJOr4jgHuJ2f80UtzaHaseN7zqpIVJGNkozYJKQIhAIEN86u7yf61Mc4e%2FmRGpnWFzadDLr2%2BWlIlwKABb4K%2FKv8DCCAQABoMNjM3NDIzMTgzODA1Igycytwic%2BoEHrQRQnwq3AM3h6YMZQ%2BjLiOIF96BYqFClpSvICSVkc5kBBvdY5l7ZC7CngWtB8ZBSJVh7QbGfrUvVMLV9c%2FGMOT48Oo4YU%2BkN3lAdRbRoGpdq93%2BggSKF4dqBBvU4VSXDx0RDmOZyaks7oq2%2F98FruNEnCLkL%2Bkw%2BWlVnDyPwhj3QkOLYFZGQ2S8Rz4Xwa9txgFqtmDm0uyXe8sGNtKRQpXRkwjsXbcW0xTJPEIoOoQp%2FFvhXIPZEbIMZATtAV9aC4qKP%2B1WofzGKKUkgdMl0Z2Ho6KWS35%2Fs1eE3wWBdNtA5xGPfsXt5YwjM3QgAwD%2FIOZa6mJd3dZrt%2FLsJ9yBBBZxuk4YXg4V4KL6p6Y3J7DUaT1cIBST0d%2F4iFXMlVqhUE4pyF75ouqPlVjso6rs3ema9KVGX%2Bh0%2FA6KP7cDd%2BAPaXI5wzCY3cwTOmjI%2FBWgh4G9uIo0V1Z7BVLut6%2FI6tMyWGv9Zzj4MR66mCutJwVSGfRg1AKmChM%2FCMHzLnTMjevDFeVuAOUW1VjX6y0Vt0Q%2Bv4%2BD0mommQsT2nynwp8GPHDrBWt7tdYbeyLA4aYORcitt8hb3XenchPzIFVYxIJrdidcj6qWeN3UepbSiy7J6S9FIO%2BcY%2FIx4RkxX4n%2F4WI26TDL5L3JBjqkARrB6g%2BV5PrNtw5rT3lIYHuQpQ7FurAqHY0gPDAawTAzNdjH7%2BVAwQkEjJn2mrvUpKIdE2PQ3GsETpKsiV3CQTsflTFbKmBeuYVbTz%2F8qq6%2Feadw6zbkP1TCRQYJUmAqApwCOY3Z2%2FIL5G6r3DQsBSZ2rOjE7FKBGss71sbjXvcyxNckhUZmCoDeqPpSsvHtZY6t3uEk4VI%2BfG8CCgH5ZjRZRU8r&X-Amz-Signature=7f55d3de32fff4eedeff6955d14d3100597a89f8dcf6bd22e97e14daa70d775f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

