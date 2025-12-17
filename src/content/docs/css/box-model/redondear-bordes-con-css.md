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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4B6EY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDfo4cs5D08YvMSMHtqGgaGl7j90O373IQRtvOfJjLvAiAhyYQoSHsQcwPMQ27pvJyUcs7Ffk0P8gkT0crhrynH8CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI414DMvnw1bFWg4UKtwDX2qMzt221QrIGRKJlSi8i1dQtJ5aRcUAyMQztTW7FAN2bqnA7Oc3oE%2FlsuSg2IzkIvjdY7P%2FCtfDZTNAzEgGfEdvr%2FDIaF8Uoua7%2FrkzpM4EyRhOI089gyy6tXpgUMtqzFs%2F9PfrWzOfh6qxzePCAIz89%2BiA5J5lhBD6Dk5Dr61Um8n9OmXXn%2BUYb5JqtGRafySWDApkHRWuyi2%2FfPUrxdFE4yvvtmIKRFkWgUJPHNNZz7u5YP%2BSItfWnOofyok%2FKajtNPpVBlckxGHdwChxeGslgK0u%2Bvsd%2B%2BPt3V540oqEEi80hgpX5sSMLu0GoK83%2BhrsIuIRYIxa%2FokD1S6WpD0KLjGQ3bOHCed0OJnZV7AAL1P5ZEdJKtZYgeYhjETVAn%2Bf0WGc6xGXMiWCW6Ls569IkCWlBlkPOGvk%2FDQTmkUSwLYQoC%2BrKzo6QM5qFKuNu6%2FhzzyMPXpAtTbPrcD6UlbBRI9CEiEZeOQff0Rqf5O9d7r45CuU1en2jS9QvBWeejSsbCRPThgQ1uA6EwzeKv%2F1vixjYCKOD8jITfJY9v2zMRcT9Qno60ZOYaHi5WAbOGfXI5jv%2FFW45ehGQKusvNnyGRywkcRTxGC3PvQZCkQeNtfDAj3GZYnRE10wsq6MygY6pgEzxN4xAu8HmRr4Y5MArU%2Fawjup35m7NKITS08BPEkr6nMoRkKUHAGh6Cc%2B%2FoQXHSjtv39r8dKPn8adalnuVvLl%2Fj6ElgcZPE6JuZcNhGC17aVtSW7gxH%2F%2BKfIyGN%2F0JXCIdZrrjF%2BlpAsBWRTFXVbk6U0c0UU2eoFWD6yW%2F9PfFEEqqHkWXVIYAmFJXzNy0f26QR0nCQdXb2kuAuSddeFidZSTnwIA&X-Amz-Signature=e80ca453e7ad8d6ebe271c4b739522376908bf188bdb27b84eca50bc4dfebde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4B6EY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDfo4cs5D08YvMSMHtqGgaGl7j90O373IQRtvOfJjLvAiAhyYQoSHsQcwPMQ27pvJyUcs7Ffk0P8gkT0crhrynH8CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI414DMvnw1bFWg4UKtwDX2qMzt221QrIGRKJlSi8i1dQtJ5aRcUAyMQztTW7FAN2bqnA7Oc3oE%2FlsuSg2IzkIvjdY7P%2FCtfDZTNAzEgGfEdvr%2FDIaF8Uoua7%2FrkzpM4EyRhOI089gyy6tXpgUMtqzFs%2F9PfrWzOfh6qxzePCAIz89%2BiA5J5lhBD6Dk5Dr61Um8n9OmXXn%2BUYb5JqtGRafySWDApkHRWuyi2%2FfPUrxdFE4yvvtmIKRFkWgUJPHNNZz7u5YP%2BSItfWnOofyok%2FKajtNPpVBlckxGHdwChxeGslgK0u%2Bvsd%2B%2BPt3V540oqEEi80hgpX5sSMLu0GoK83%2BhrsIuIRYIxa%2FokD1S6WpD0KLjGQ3bOHCed0OJnZV7AAL1P5ZEdJKtZYgeYhjETVAn%2Bf0WGc6xGXMiWCW6Ls569IkCWlBlkPOGvk%2FDQTmkUSwLYQoC%2BrKzo6QM5qFKuNu6%2FhzzyMPXpAtTbPrcD6UlbBRI9CEiEZeOQff0Rqf5O9d7r45CuU1en2jS9QvBWeejSsbCRPThgQ1uA6EwzeKv%2F1vixjYCKOD8jITfJY9v2zMRcT9Qno60ZOYaHi5WAbOGfXI5jv%2FFW45ehGQKusvNnyGRywkcRTxGC3PvQZCkQeNtfDAj3GZYnRE10wsq6MygY6pgEzxN4xAu8HmRr4Y5MArU%2Fawjup35m7NKITS08BPEkr6nMoRkKUHAGh6Cc%2B%2FoQXHSjtv39r8dKPn8adalnuVvLl%2Fj6ElgcZPE6JuZcNhGC17aVtSW7gxH%2F%2BKfIyGN%2F0JXCIdZrrjF%2BlpAsBWRTFXVbk6U0c0UU2eoFWD6yW%2F9PfFEEqqHkWXVIYAmFJXzNy0f26QR0nCQdXb2kuAuSddeFidZSTnwIA&X-Amz-Signature=647ebec0c4376b0c73c351b8b8a84ba1c2ef580e1baf8171ad3d14aa3241e46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
