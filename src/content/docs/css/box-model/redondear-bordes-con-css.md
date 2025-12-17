---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VCFQYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtRkldFDN8CJtERoGZIfcVL6F40udlABYUwmoj2b7IvQIhALQZrZC0bGW0PqSZQQ0c7qQ1HUGOaFNVqcoDCYIL2h7bKv8DCHgQABoMNjM3NDIzMTgzODA1Igycqe8BF%2BDnKH4K5YYq3AM9p9%2FTwHBAziHFEW54cFweFjA4WgkMBqZsNSIpXTee4793GzXgAk9yrrRROzGY4%2Bd9T0ZVThrGLk2R15Wa%2FjlrGWei5t1FlQOZJDKrHjNLEeJd35q7lj8LxsZ4Szgkpysyo76ioXvl6IQWPU5OCgdOC%2Fk81MJgwi7wtoCGXFHDuqWND6%2B%2FQHfL40UY6kkq1ydL8bCOOIyDAJ%2BOdcYkdfRtHeE4aglFe7zd6EzMqbUsZzs2SLQlHWTGiZ8AhAJbDaZsWHwMNAzPqOFzVD1olwdHT2YnmrXT860xIkzBghTV2HtGpzoiguh4eWdPe0JsVdJEwXAIy5BGkLN74HDMBHKpalzWDVIfOJNcVEpr4fhEOl%2Fv3v4EHhjbV7zJPJPEp4f1%2ByJvhoJe1j8kKUg6KVsz1QFZqVu28gc0tB%2F5kQ5rfrtRNqnC6dLzjXkIvXHn%2F4QRT%2BM9HpB76P4wH7cZWhdH3E0zyLfaQP72cSD7TGOen%2FzSK9rswvDGqHxNyEEgdwbZVI7Ai5eria5WyiM8%2BgLKzjKLHyPtEcMRMXNnBROBCGeZE5emmoy8HsRoipCBy6%2F6Acjwq86snA3ahcVKzitu1Jekl5alTuCJ%2Bud%2B6nvvJbZPT0LrXkZurbOe%2BTC4nYnKBjqkAQR5lZrkup7ee7zaKSK5BGsYimzHo1YsjSwQhMlfZnqBH0sVsrbBTXzAP9WbySLu2G5JMJE5BjSIHsd9IoISDiPq8mzidI6RKs9BULJmnf5GQiuhIC6gvaWsTY3zQ4NNI7F1IDsvss0UVGl9LrR3DlD5dwwSFNlDmtIz3Ql3f08DLS7h4sbm63ofjEj0Bgd0jW8lnADx2aAiDKNfCtD454s0leSr&X-Amz-Signature=f16ba5e20341a7c7f73bf5e4ee1a8e61c9a22bb790afb8e1def1eb1e8229c529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VCFQYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtRkldFDN8CJtERoGZIfcVL6F40udlABYUwmoj2b7IvQIhALQZrZC0bGW0PqSZQQ0c7qQ1HUGOaFNVqcoDCYIL2h7bKv8DCHgQABoMNjM3NDIzMTgzODA1Igycqe8BF%2BDnKH4K5YYq3AM9p9%2FTwHBAziHFEW54cFweFjA4WgkMBqZsNSIpXTee4793GzXgAk9yrrRROzGY4%2Bd9T0ZVThrGLk2R15Wa%2FjlrGWei5t1FlQOZJDKrHjNLEeJd35q7lj8LxsZ4Szgkpysyo76ioXvl6IQWPU5OCgdOC%2Fk81MJgwi7wtoCGXFHDuqWND6%2B%2FQHfL40UY6kkq1ydL8bCOOIyDAJ%2BOdcYkdfRtHeE4aglFe7zd6EzMqbUsZzs2SLQlHWTGiZ8AhAJbDaZsWHwMNAzPqOFzVD1olwdHT2YnmrXT860xIkzBghTV2HtGpzoiguh4eWdPe0JsVdJEwXAIy5BGkLN74HDMBHKpalzWDVIfOJNcVEpr4fhEOl%2Fv3v4EHhjbV7zJPJPEp4f1%2ByJvhoJe1j8kKUg6KVsz1QFZqVu28gc0tB%2F5kQ5rfrtRNqnC6dLzjXkIvXHn%2F4QRT%2BM9HpB76P4wH7cZWhdH3E0zyLfaQP72cSD7TGOen%2FzSK9rswvDGqHxNyEEgdwbZVI7Ai5eria5WyiM8%2BgLKzjKLHyPtEcMRMXNnBROBCGeZE5emmoy8HsRoipCBy6%2F6Acjwq86snA3ahcVKzitu1Jekl5alTuCJ%2Bud%2B6nvvJbZPT0LrXkZurbOe%2BTC4nYnKBjqkAQR5lZrkup7ee7zaKSK5BGsYimzHo1YsjSwQhMlfZnqBH0sVsrbBTXzAP9WbySLu2G5JMJE5BjSIHsd9IoISDiPq8mzidI6RKs9BULJmnf5GQiuhIC6gvaWsTY3zQ4NNI7F1IDsvss0UVGl9LrR3DlD5dwwSFNlDmtIz3Ql3f08DLS7h4sbm63ofjEj0Bgd0jW8lnADx2aAiDKNfCtD454s0leSr&X-Amz-Signature=e704c3b2191c66e8bac7abc3c0d7e602047273e3e9afe5a23f011f8facda59b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
