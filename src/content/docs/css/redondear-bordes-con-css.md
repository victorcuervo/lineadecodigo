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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=0ee32dfa62cfacadfd99ce11168826f550ec0841a80b9149bb473b3bccaf4728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=2325c970cc5e003b3223f3500c1f420a6a1bd5d70be34480e132e8a09dc9972f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
