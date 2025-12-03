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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALLXLUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDG9hT4vBh3iCGUfbGyr2l8J%2F4OVIlY2O%2Be4yeU4GQkywIhALPlur17CPiJlGsQ%2FxxEuf2Y9b6JSUeziyyQoUgUuvbFKv8DCC8QABoMNjM3NDIzMTgzODA1IgxQvw45FfxFjJFQgSsq3APZEn%2BnpNt8hik7F5EE1LrauM4mR6zLPku%2FftjasEj7f%2FHKTa3Wtw7oyJZFvMA8w0zVPPquQ%2BO5J5kTsNlLNUi6UlMbuhvGoB62lrd%2BCRIeaTXLq8vvi0ePXlRtV5qmOFUvimj%2FEqq2dMPCtS8yV%2FUD6I8BWxzdb4r5kYhh5LB4%2FyJ9pQk%2FJeKD1u58E9Fm8vpFFh%2BlO4XLUNG1ySd9EbFFs9SwzEtgLtA5hxhc3McR9BtfzfNgsgPXRgTqK6D8prgV5U3%2FtJuHXJbNtWWLlCvV1j5Ec5Zb6TzxhvckvmouZYY96P9AsdfEbRiEI0ODQUAWGGuz8rTmBf2zD9c%2FjsTlQIkBLmkFianAAuGMtY6uiw54fjgYvN52Wh9R4hWpZC%2FL8kEn3FKD5RY%2BQ%2FH629U2DPyV3QXWuabPKuzqV2Wz22%2BAG2o2lVKgLLo3KtwgDy9Cs5R1T1Af2p7LWodg12fwyxFa3lO8ENmRb8FRcdxsGJRi7jLWKLWAmmPuZU5BElLqqQ4dA8tEUdyWKsb78CGAVhFHO244WiftK%2B5%2BWgapoiJjolOz7ButvXnHEL8IpWCzETFMUJ7vebGbjG1z8pelIjm46TRNvvTW9TZTlzA216R%2BE%2Ffh7vdWkja%2F8jCWh8HJBjqkAegnX9D7nEBfTA8pLznXZWOHYlpcefWrDJosr%2BLV%2FjQC2Rg0dQvxI7ZA0%2B%2FfbWqvrxhKAOwStcoZs4WFdyqskM7cU9l8kvjNyqLAbYoW%2BBh2GRC88il2Owz3GpVG7HAdkFrBYVlMn%2FBtFrR%2BG7UL44pqDomP%2BTuWV5%2FW%2BifWUXUKFef4LN2ghGXqxgBgRIT8SopIG8JUmeCNwMvQ4F4tBoI9KazC&X-Amz-Signature=811a344918a38ac4f3400cf73e81fad208828708bfb86265a33196e618960813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALLXLUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDG9hT4vBh3iCGUfbGyr2l8J%2F4OVIlY2O%2Be4yeU4GQkywIhALPlur17CPiJlGsQ%2FxxEuf2Y9b6JSUeziyyQoUgUuvbFKv8DCC8QABoMNjM3NDIzMTgzODA1IgxQvw45FfxFjJFQgSsq3APZEn%2BnpNt8hik7F5EE1LrauM4mR6zLPku%2FftjasEj7f%2FHKTa3Wtw7oyJZFvMA8w0zVPPquQ%2BO5J5kTsNlLNUi6UlMbuhvGoB62lrd%2BCRIeaTXLq8vvi0ePXlRtV5qmOFUvimj%2FEqq2dMPCtS8yV%2FUD6I8BWxzdb4r5kYhh5LB4%2FyJ9pQk%2FJeKD1u58E9Fm8vpFFh%2BlO4XLUNG1ySd9EbFFs9SwzEtgLtA5hxhc3McR9BtfzfNgsgPXRgTqK6D8prgV5U3%2FtJuHXJbNtWWLlCvV1j5Ec5Zb6TzxhvckvmouZYY96P9AsdfEbRiEI0ODQUAWGGuz8rTmBf2zD9c%2FjsTlQIkBLmkFianAAuGMtY6uiw54fjgYvN52Wh9R4hWpZC%2FL8kEn3FKD5RY%2BQ%2FH629U2DPyV3QXWuabPKuzqV2Wz22%2BAG2o2lVKgLLo3KtwgDy9Cs5R1T1Af2p7LWodg12fwyxFa3lO8ENmRb8FRcdxsGJRi7jLWKLWAmmPuZU5BElLqqQ4dA8tEUdyWKsb78CGAVhFHO244WiftK%2B5%2BWgapoiJjolOz7ButvXnHEL8IpWCzETFMUJ7vebGbjG1z8pelIjm46TRNvvTW9TZTlzA216R%2BE%2Ffh7vdWkja%2F8jCWh8HJBjqkAegnX9D7nEBfTA8pLznXZWOHYlpcefWrDJosr%2BLV%2FjQC2Rg0dQvxI7ZA0%2B%2FfbWqvrxhKAOwStcoZs4WFdyqskM7cU9l8kvjNyqLAbYoW%2BBh2GRC88il2Owz3GpVG7HAdkFrBYVlMn%2FBtFrR%2BG7UL44pqDomP%2BTuWV5%2FW%2BifWUXUKFef4LN2ghGXqxgBgRIT8SopIG8JUmeCNwMvQ4F4tBoI9KazC&X-Amz-Signature=d6bb29f0088cbd7758f4a2fba24e2d29180926708e69139f59c4fe4fbf86eda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

