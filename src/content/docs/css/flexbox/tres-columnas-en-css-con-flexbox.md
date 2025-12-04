---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJOAQ3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCP3W%2BefK3omIxN8yCdqOqI%2FftMK%2FPyxkoUaLZcDWOByAIhAMFhFpF0SWmtIn17iV8b%2F0dIwEE2uzAll67LOoyxxWwqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzFUYD0u%2B5ORgboPI4q3AN5WEzLoAxTNoIjceOF8IJnge6dpZ21O0%2FYlZ9YVnbIynmjDPjp5ybe3AAYfUOw04Yp0vYnsKS8hUemcgaP4rLy75M7rUIOiRUxH%2BMXiJjinAehhlPIw3ofJTzjgMe%2BLw%2FaqLLVZYXtpGdJNTOne8Lgv3xpkCa9N%2B6SYyAbID59RGZTIrI%2BfZAG%2Fj7NBNJn%2BtR62cxO01v9rHLBhF3o4OtyCMewIHwDMvh0976ZMLqn7NorG71oLwFuWQiR4lOwWR1usKH6dfcnIY4GxYvLV3fikVaxLAAtRh9MOBMZlhKqJcoPEPcOqpioHJ94jEvxBLmBUdjZ5HWOQYuvF%2BfIgba367YEZYwlO21%2Bz6BRADk1O%2BhBmBZPGxbZPRTV4Cmznm19myF0N8xrelN%2FUFW8V07CvXZUjJ7WTu6JLYcEmJ9yoZKwDqjZBXb5mF8U6Eyx1%2F8fFI4UL2LQvewVeJEG96ruVfckL3DwAmjNDVnNrAiFJ%2B7fTy9tVK%2BNGlVpnnGlU4isT0IeCPug9%2BbNiigKbqqOYoODSi1YimKJqLBYxz2EkKeiYUHfRlb9ylOw8L7sz5RC5d%2Bp4kADEyzGEzPPMb6ROUUfKumDICek2pZm9BBMpaD1WvqeLpZsZ2kOKjDZ5sXJBjqkAfJKZ%2BTmuLQMqBZYOFmqw7B7COQc%2FFv%2BwzbVHXH6qfMB6wZEw0P0okdVoRaJvaU12GvTiB2q%2BNwwiJ3X7jxHt4R3Z8fqDRtR4gyOlnebKe2jO7a%2FPbxOBGFyHeS1JN4gQNv%2Fc00%2FogVlx2t9c35coviWKR4t3%2FIVPKZmru6b4qzcxlLnj3DKOgzU%2FkxWL5wlTNIiSw09MHmjuDxXbkEczgiNIfsA&X-Amz-Signature=2283897cc99111fbc77eee52e7799ce5ee31761ab2a123d002d6d659aad45114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJOAQ3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCP3W%2BefK3omIxN8yCdqOqI%2FftMK%2FPyxkoUaLZcDWOByAIhAMFhFpF0SWmtIn17iV8b%2F0dIwEE2uzAll67LOoyxxWwqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzFUYD0u%2B5ORgboPI4q3AN5WEzLoAxTNoIjceOF8IJnge6dpZ21O0%2FYlZ9YVnbIynmjDPjp5ybe3AAYfUOw04Yp0vYnsKS8hUemcgaP4rLy75M7rUIOiRUxH%2BMXiJjinAehhlPIw3ofJTzjgMe%2BLw%2FaqLLVZYXtpGdJNTOne8Lgv3xpkCa9N%2B6SYyAbID59RGZTIrI%2BfZAG%2Fj7NBNJn%2BtR62cxO01v9rHLBhF3o4OtyCMewIHwDMvh0976ZMLqn7NorG71oLwFuWQiR4lOwWR1usKH6dfcnIY4GxYvLV3fikVaxLAAtRh9MOBMZlhKqJcoPEPcOqpioHJ94jEvxBLmBUdjZ5HWOQYuvF%2BfIgba367YEZYwlO21%2Bz6BRADk1O%2BhBmBZPGxbZPRTV4Cmznm19myF0N8xrelN%2FUFW8V07CvXZUjJ7WTu6JLYcEmJ9yoZKwDqjZBXb5mF8U6Eyx1%2F8fFI4UL2LQvewVeJEG96ruVfckL3DwAmjNDVnNrAiFJ%2B7fTy9tVK%2BNGlVpnnGlU4isT0IeCPug9%2BbNiigKbqqOYoODSi1YimKJqLBYxz2EkKeiYUHfRlb9ylOw8L7sz5RC5d%2Bp4kADEyzGEzPPMb6ROUUfKumDICek2pZm9BBMpaD1WvqeLpZsZ2kOKjDZ5sXJBjqkAfJKZ%2BTmuLQMqBZYOFmqw7B7COQc%2FFv%2BwzbVHXH6qfMB6wZEw0P0okdVoRaJvaU12GvTiB2q%2BNwwiJ3X7jxHt4R3Z8fqDRtR4gyOlnebKe2jO7a%2FPbxOBGFyHeS1JN4gQNv%2Fc00%2FogVlx2t9c35coviWKR4t3%2FIVPKZmru6b4qzcxlLnj3DKOgzU%2FkxWL5wlTNIiSw09MHmjuDxXbkEczgiNIfsA&X-Amz-Signature=b27d18cf7ed706e790852a242e287e1b9bd88b2d1a2e12255209289c22a84e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

