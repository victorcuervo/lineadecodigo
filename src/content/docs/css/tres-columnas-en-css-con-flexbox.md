---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3NLP47%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCXAuHfSerjy%2BGqx6EoKTKAVlMCTZFQ3By18fzCnEvU7wIhALo3x%2FqSDLdiV7%2BWRHw1dtK%2B6AslI9zMbIHsw29FhaWrKv8DCDYQABoMNjM3NDIzMTgzODA1IgzYk5gyqyA9I%2BSAAvIq3AMn9WGHX2k5NvYiJs8e7WQeYRTMiXyElCRMSmwId12H1Ucdg0UJSSh52MQauXnXguHw3htj2r6SPeCw3SoHQ7dXtDnL0CexCpIWZI7Rn9hr0S9WKZCXNMNSlSDfrF2DkLvQC6U3cec5cTtTx5Ltz4x1ooxX%2Bou3i6hEdJC4y86K7IcxhafZBO7KnzaMpPWnJawMj8BscNb84Gw%2BKMwtgDyqOvPAUtpfbb7orUAyGlCe5EFm0blmPjWgw3pqbs7baAD9CQ2%2FkjYS28Wv3F6vAUFAX9hYn%2BqxG%2Bf9ltvcP3%2Bmuk3zfLo6bFQgx1zZxlYxkyn9LAZWOyrF3QEib3lKPf3uRvJP2vDSU3ZH5AWRfRZ206sRwAed%2BYiprOlEKAABFzG%2F2QDhs1ZAiGyl7i8I7NDrWtD%2FnM6%2B%2BbhdM9PH4z8deZYlSGGZM3mGMitJUwWU3mPXvBANrkgl%2BxYNAdceQpSxS1e3thyGcjw6FGsjIaNPX4Tc9XSUvh0onHJTf20rpvVScrDT8BplOD62Qkv1J3SI3uGLzHhO2jElba%2BKHAbt%2FkSN4gt%2BZt0CQ0tGua7uPLz%2FEwI23A%2FScJiVcymHyl3Kn311aoawIOC0Ex9IAW%2BTBlQ5ZEF2qip87uO1EDCJvcLJBjqkASAfd8xrITOy5dVCzkbOjA8QRQY9agvswsck3PuEG55wKE8ST7dhHnYAhP7IfFV6Jxkc0%2FQIf3ltdTmwg0U7iliqfyn%2BU0LnbeeRjftGaLpccsGcxo%2Fy9XInxIMIwZSIhrMjYZUjwdEYf%2FpUs%2Fd2WoLFEdfzjwAt2fWs2pItZCDMjTb4YJY%2F6dVpLIkxCQ3TrNrKJz3mFlbgOGGwgVrorzHWGlIT&X-Amz-Signature=610c5a90e7297f8052978e95fa404cc5ee02b822c455bb444493435aa5a53dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3NLP47%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCXAuHfSerjy%2BGqx6EoKTKAVlMCTZFQ3By18fzCnEvU7wIhALo3x%2FqSDLdiV7%2BWRHw1dtK%2B6AslI9zMbIHsw29FhaWrKv8DCDYQABoMNjM3NDIzMTgzODA1IgzYk5gyqyA9I%2BSAAvIq3AMn9WGHX2k5NvYiJs8e7WQeYRTMiXyElCRMSmwId12H1Ucdg0UJSSh52MQauXnXguHw3htj2r6SPeCw3SoHQ7dXtDnL0CexCpIWZI7Rn9hr0S9WKZCXNMNSlSDfrF2DkLvQC6U3cec5cTtTx5Ltz4x1ooxX%2Bou3i6hEdJC4y86K7IcxhafZBO7KnzaMpPWnJawMj8BscNb84Gw%2BKMwtgDyqOvPAUtpfbb7orUAyGlCe5EFm0blmPjWgw3pqbs7baAD9CQ2%2FkjYS28Wv3F6vAUFAX9hYn%2BqxG%2Bf9ltvcP3%2Bmuk3zfLo6bFQgx1zZxlYxkyn9LAZWOyrF3QEib3lKPf3uRvJP2vDSU3ZH5AWRfRZ206sRwAed%2BYiprOlEKAABFzG%2F2QDhs1ZAiGyl7i8I7NDrWtD%2FnM6%2B%2BbhdM9PH4z8deZYlSGGZM3mGMitJUwWU3mPXvBANrkgl%2BxYNAdceQpSxS1e3thyGcjw6FGsjIaNPX4Tc9XSUvh0onHJTf20rpvVScrDT8BplOD62Qkv1J3SI3uGLzHhO2jElba%2BKHAbt%2FkSN4gt%2BZt0CQ0tGua7uPLz%2FEwI23A%2FScJiVcymHyl3Kn311aoawIOC0Ex9IAW%2BTBlQ5ZEF2qip87uO1EDCJvcLJBjqkASAfd8xrITOy5dVCzkbOjA8QRQY9agvswsck3PuEG55wKE8ST7dhHnYAhP7IfFV6Jxkc0%2FQIf3ltdTmwg0U7iliqfyn%2BU0LnbeeRjftGaLpccsGcxo%2Fy9XInxIMIwZSIhrMjYZUjwdEYf%2FpUs%2Fd2WoLFEdfzjwAt2fWs2pItZCDMjTb4YJY%2F6dVpLIkxCQ3TrNrKJz3mFlbgOGGwgVrorzHWGlIT&X-Amz-Signature=f3ef4f80ffcd89c249686ffce290bff50c0e470b427fd5e37be2eec1589eb28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

