---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFNWI5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPnUDCUU%2FNki5eQcviXWvjMA%2F5YimkMCAHsnDn%2FDUKQIhAPm5wojq6ob9uFyTRYi7VupCqe35oG0jHJ2AAgPp2OCcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAi%2F3BiNP4Xry4kwoq3ANTMzznwcnCWUkLL9MwhYHEXtFOGPpgrYq6a6MIaWNJFLfHvcRTOmbeiR02DWVUnK0GoOJ%2BB5UPbcm%2BOJp%2F8CF2TneqfxcIx%2BQTqXgoXdacaVvzR5YcX1riWtv3Sjc5s%2F%2FdEaHyiU1DYPWuE9D%2FFZZ5CQwJK2OkcIkryDeUiZ6dT2F6jy8N2Er8YrbT5nf2ZU7CuqQdKuTvgDyi89ha2628ypCcE0HJrXubojbwNSGtfM1s0wRGvdHS5VZk0eqIbGJGFiyzsnSxqomNJqC7DgdpJ2oLF8pQ%2BCmkIz8CVsJb0PiGfY%2FwUAhPxUyyG1zV28AzCQtj%2FaSXCsx%2Bi2HF8PRWjEiRj9RLg4DRsrsM%2B6eEAgQH8RXifl4i3sc0vLDHACp52%2BfZFfo1oRAQZBYLMjli9szt2IVnC8ikCjIukfOlE5WvXVBLtSy0OQeOqDGgEFsaaY%2Fxau5aOaTxrWms3nxya4D5UITt8H19focOhxdEioYcSfCyWcjkB6CW3ObjKU7Lu3wZrEYHkH3Xm69FPwcmqE%2FDuuqMX2AzoqOVmKZkAc8HybH%2FhnV1nPnmZ09P3TkQ%2Fu%2FFAkcmLAL2D%2B8eTf4DZcE3ZHsGIsZW3GjtyuGqK6MEM9QZdtXRZrGnmjDXptDJBjqkAX%2FXLbweqgM5pmX7gjUGrGtIJomPjmnUhnLluWj2ocC%2BXO2DkOIuWaPYf%2FFcJwQAPfvWEYriszXsxLZ8OkGZsHUL0Udq5zAFxbPzeO%2F3A44110zEMQKyIG9PWthtg8tsoSxvTbSxcYUiC6aYHJIBatu%2BmqG6VN6J6%2F7uxYqsZf26RGf5zOGVQ9jnkIrPCAG11XdRsz%2FWP6IOHUSfcAKLm7Htyzva&X-Amz-Signature=c51120fb477078a5a46180173991c19512dcfdc97c8cfe652f41b4c4e0e24154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZFNWI5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPnUDCUU%2FNki5eQcviXWvjMA%2F5YimkMCAHsnDn%2FDUKQIhAPm5wojq6ob9uFyTRYi7VupCqe35oG0jHJ2AAgPp2OCcKv8DCHUQABoMNjM3NDIzMTgzODA1IgzAi%2F3BiNP4Xry4kwoq3ANTMzznwcnCWUkLL9MwhYHEXtFOGPpgrYq6a6MIaWNJFLfHvcRTOmbeiR02DWVUnK0GoOJ%2BB5UPbcm%2BOJp%2F8CF2TneqfxcIx%2BQTqXgoXdacaVvzR5YcX1riWtv3Sjc5s%2F%2FdEaHyiU1DYPWuE9D%2FFZZ5CQwJK2OkcIkryDeUiZ6dT2F6jy8N2Er8YrbT5nf2ZU7CuqQdKuTvgDyi89ha2628ypCcE0HJrXubojbwNSGtfM1s0wRGvdHS5VZk0eqIbGJGFiyzsnSxqomNJqC7DgdpJ2oLF8pQ%2BCmkIz8CVsJb0PiGfY%2FwUAhPxUyyG1zV28AzCQtj%2FaSXCsx%2Bi2HF8PRWjEiRj9RLg4DRsrsM%2B6eEAgQH8RXifl4i3sc0vLDHACp52%2BfZFfo1oRAQZBYLMjli9szt2IVnC8ikCjIukfOlE5WvXVBLtSy0OQeOqDGgEFsaaY%2Fxau5aOaTxrWms3nxya4D5UITt8H19focOhxdEioYcSfCyWcjkB6CW3ObjKU7Lu3wZrEYHkH3Xm69FPwcmqE%2FDuuqMX2AzoqOVmKZkAc8HybH%2FhnV1nPnmZ09P3TkQ%2Fu%2FFAkcmLAL2D%2B8eTf4DZcE3ZHsGIsZW3GjtyuGqK6MEM9QZdtXRZrGnmjDXptDJBjqkAX%2FXLbweqgM5pmX7gjUGrGtIJomPjmnUhnLluWj2ocC%2BXO2DkOIuWaPYf%2FFcJwQAPfvWEYriszXsxLZ8OkGZsHUL0Udq5zAFxbPzeO%2F3A44110zEMQKyIG9PWthtg8tsoSxvTbSxcYUiC6aYHJIBatu%2BmqG6VN6J6%2F7uxYqsZf26RGf5zOGVQ9jnkIrPCAG11XdRsz%2FWP6IOHUSfcAKLm7Htyzva&X-Amz-Signature=451897d06ac149d210607786a523094648a3cb91fc09a895e4d5f0c90bf54547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
