---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFNWI5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPnUDCUU%2FNki5eQcviXWvjMA%2F5YimkMCAHsnDn%2FDUKQIhAPm5wojq6ob9uFyTRYi7VupCqe35oG0jHJ2AAgPp2OCcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAi%2F3BiNP4Xry4kwoq3ANTMzznwcnCWUkLL9MwhYHEXtFOGPpgrYq6a6MIaWNJFLfHvcRTOmbeiR02DWVUnK0GoOJ%2BB5UPbcm%2BOJp%2F8CF2TneqfxcIx%2BQTqXgoXdacaVvzR5YcX1riWtv3Sjc5s%2F%2FdEaHyiU1DYPWuE9D%2FFZZ5CQwJK2OkcIkryDeUiZ6dT2F6jy8N2Er8YrbT5nf2ZU7CuqQdKuTvgDyi89ha2628ypCcE0HJrXubojbwNSGtfM1s0wRGvdHS5VZk0eqIbGJGFiyzsnSxqomNJqC7DgdpJ2oLF8pQ%2BCmkIz8CVsJb0PiGfY%2FwUAhPxUyyG1zV28AzCQtj%2FaSXCsx%2Bi2HF8PRWjEiRj9RLg4DRsrsM%2B6eEAgQH8RXifl4i3sc0vLDHACp52%2BfZFfo1oRAQZBYLMjli9szt2IVnC8ikCjIukfOlE5WvXVBLtSy0OQeOqDGgEFsaaY%2Fxau5aOaTxrWms3nxya4D5UITt8H19focOhxdEioYcSfCyWcjkB6CW3ObjKU7Lu3wZrEYHkH3Xm69FPwcmqE%2FDuuqMX2AzoqOVmKZkAc8HybH%2FhnV1nPnmZ09P3TkQ%2Fu%2FFAkcmLAL2D%2B8eTf4DZcE3ZHsGIsZW3GjtyuGqK6MEM9QZdtXRZrGnmjDXptDJBjqkAX%2FXLbweqgM5pmX7gjUGrGtIJomPjmnUhnLluWj2ocC%2BXO2DkOIuWaPYf%2FFcJwQAPfvWEYriszXsxLZ8OkGZsHUL0Udq5zAFxbPzeO%2F3A44110zEMQKyIG9PWthtg8tsoSxvTbSxcYUiC6aYHJIBatu%2BmqG6VN6J6%2F7uxYqsZf26RGf5zOGVQ9jnkIrPCAG11XdRsz%2FWP6IOHUSfcAKLm7Htyzva&X-Amz-Signature=30fb50711162cb0f28ed188c8c045180c00cc71f68fad780442e809216b55580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFNWI5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPnUDCUU%2FNki5eQcviXWvjMA%2F5YimkMCAHsnDn%2FDUKQIhAPm5wojq6ob9uFyTRYi7VupCqe35oG0jHJ2AAgPp2OCcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAi%2F3BiNP4Xry4kwoq3ANTMzznwcnCWUkLL9MwhYHEXtFOGPpgrYq6a6MIaWNJFLfHvcRTOmbeiR02DWVUnK0GoOJ%2BB5UPbcm%2BOJp%2F8CF2TneqfxcIx%2BQTqXgoXdacaVvzR5YcX1riWtv3Sjc5s%2F%2FdEaHyiU1DYPWuE9D%2FFZZ5CQwJK2OkcIkryDeUiZ6dT2F6jy8N2Er8YrbT5nf2ZU7CuqQdKuTvgDyi89ha2628ypCcE0HJrXubojbwNSGtfM1s0wRGvdHS5VZk0eqIbGJGFiyzsnSxqomNJqC7DgdpJ2oLF8pQ%2BCmkIz8CVsJb0PiGfY%2FwUAhPxUyyG1zV28AzCQtj%2FaSXCsx%2Bi2HF8PRWjEiRj9RLg4DRsrsM%2B6eEAgQH8RXifl4i3sc0vLDHACp52%2BfZFfo1oRAQZBYLMjli9szt2IVnC8ikCjIukfOlE5WvXVBLtSy0OQeOqDGgEFsaaY%2Fxau5aOaTxrWms3nxya4D5UITt8H19focOhxdEioYcSfCyWcjkB6CW3ObjKU7Lu3wZrEYHkH3Xm69FPwcmqE%2FDuuqMX2AzoqOVmKZkAc8HybH%2FhnV1nPnmZ09P3TkQ%2Fu%2FFAkcmLAL2D%2B8eTf4DZcE3ZHsGIsZW3GjtyuGqK6MEM9QZdtXRZrGnmjDXptDJBjqkAX%2FXLbweqgM5pmX7gjUGrGtIJomPjmnUhnLluWj2ocC%2BXO2DkOIuWaPYf%2FFcJwQAPfvWEYriszXsxLZ8OkGZsHUL0Udq5zAFxbPzeO%2F3A44110zEMQKyIG9PWthtg8tsoSxvTbSxcYUiC6aYHJIBatu%2BmqG6VN6J6%2F7uxYqsZf26RGf5zOGVQ9jnkIrPCAG11XdRsz%2FWP6IOHUSfcAKLm7Htyzva&X-Amz-Signature=c9ff84b6a7e729280863b853c7870f89f66d999c6d85afc5e4f8a5e2dc17d8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

