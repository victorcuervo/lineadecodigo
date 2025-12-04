---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBYTOTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWiFL59fwvcuuUI7twI2JP2q7NjbtoJ0bmKfFxcq4pfAIhAMe9zFeoIo%2BTebDAjRQL5%2FXmqACTKbxrabB7HsHpkC06Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzBcsA52Cy8rtR%2BdWwq3ANLzmIM6PBzyjKpbAoicMJR9VVNaOCOfpWqtR2Zn2kpBgKa12hyVNwPAXNrjkWVtrKMnTNwgTxWNZ6H3eJmwjp9Jfr7OpW5URHKEx4yQ5D1Q%2FdCNx%2BDcHU2aG2%2BlPbqd%2ByztNY46T3WoNkTMGJByIl1X1L9m0xdpClVNrnJgfKhV4z3FTgB%2FJn9ZJT%2F3uyGup42ipRASTj4AKvMIBwtJejotNuyWWRIlTeO33ayfoDgNi7D79bfk8iJGPYFU%2BRHo4J65EwvwzxDqKuSOubhLGuCjEfO3OMc7sTFjtv%2B8NcVRzQaDtsJxJq2OC%2FAwHPN%2Fqj%2BdaGL2p3JPOBwHbeFDRAaRGCW9hwjroJW0u%2B3gaFEox5DIGw41SXQk%2BUfl9WmaLdHIXiKd%2BKBRc0IxqNhsYFHHbi78meFAnisSqqpQmmqQyW8Y9qspgUgnAfggrcOoDmTB6a9AzgY5dK%2BYGoczwW2zOTAjZvulpcK40Fibk3QlL0qnZkhRTAQnUPJtfYTND6yWQrOUCqJwHhgYiFcSj81RmIn1QpXdVpQ1R4QhcSnkwlDap580gm8YCMRNcPC9gU6snPeXnFIPh0SQcvplISMK0rL5K4ydNmzxxxLplpwKTNJJEfVyBv8I2uCBzDLg8bJBjqkAevw9fjNGlF2sqE0If0qdV9X9brDkYwoxcjXFwSH6pcAYxt55DfAhupz6zEEz8gDqgy88hYpLZf0bsrGIouszjb1fxC2axQQ92KteZJHFfs49OStAzPY2X35Pgya%2BoKrTpFUbBUAFBIWPHo8tJPQtqFwuNV0YS%2BzR%2BTrzEyYvFtHNVGKwxw2Qxvo%2FlFuANWmuVjEDYUVT%2B0kBAODgHKbiHQS79UF&X-Amz-Signature=f22f85158680ef97f8d9abcf6588e2cd4cd6549ff7021b4016b60d698d7d3951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBYTOTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDWiFL59fwvcuuUI7twI2JP2q7NjbtoJ0bmKfFxcq4pfAIhAMe9zFeoIo%2BTebDAjRQL5%2FXmqACTKbxrabB7HsHpkC06Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzBcsA52Cy8rtR%2BdWwq3ANLzmIM6PBzyjKpbAoicMJR9VVNaOCOfpWqtR2Zn2kpBgKa12hyVNwPAXNrjkWVtrKMnTNwgTxWNZ6H3eJmwjp9Jfr7OpW5URHKEx4yQ5D1Q%2FdCNx%2BDcHU2aG2%2BlPbqd%2ByztNY46T3WoNkTMGJByIl1X1L9m0xdpClVNrnJgfKhV4z3FTgB%2FJn9ZJT%2F3uyGup42ipRASTj4AKvMIBwtJejotNuyWWRIlTeO33ayfoDgNi7D79bfk8iJGPYFU%2BRHo4J65EwvwzxDqKuSOubhLGuCjEfO3OMc7sTFjtv%2B8NcVRzQaDtsJxJq2OC%2FAwHPN%2Fqj%2BdaGL2p3JPOBwHbeFDRAaRGCW9hwjroJW0u%2B3gaFEox5DIGw41SXQk%2BUfl9WmaLdHIXiKd%2BKBRc0IxqNhsYFHHbi78meFAnisSqqpQmmqQyW8Y9qspgUgnAfggrcOoDmTB6a9AzgY5dK%2BYGoczwW2zOTAjZvulpcK40Fibk3QlL0qnZkhRTAQnUPJtfYTND6yWQrOUCqJwHhgYiFcSj81RmIn1QpXdVpQ1R4QhcSnkwlDap580gm8YCMRNcPC9gU6snPeXnFIPh0SQcvplISMK0rL5K4ydNmzxxxLplpwKTNJJEfVyBv8I2uCBzDLg8bJBjqkAevw9fjNGlF2sqE0If0qdV9X9brDkYwoxcjXFwSH6pcAYxt55DfAhupz6zEEz8gDqgy88hYpLZf0bsrGIouszjb1fxC2axQQ92KteZJHFfs49OStAzPY2X35Pgya%2BoKrTpFUbBUAFBIWPHo8tJPQtqFwuNV0YS%2BzR%2BTrzEyYvFtHNVGKwxw2Qxvo%2FlFuANWmuVjEDYUVT%2B0kBAODgHKbiHQS79UF&X-Amz-Signature=9539f034025db886f0ab79c60f7826b9ad9be8f16560b157d47a0a1fc2910690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

