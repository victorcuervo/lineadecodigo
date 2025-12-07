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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAJ7LCW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FL0E7FcNDdRN5Dx1hpiJkREsweaqseq6vHSIOlkPbnAiAAygJS7vfMRTL%2BPU%2FItkPlqOa%2FnxyAV1tckijSP1gLoSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNJwHaTjItJZksRDKtwDKXw9DqkjvwXVu3uyQuKbo%2FAYMrqnM7tRZGxtMbDRV%2F6KzqsZyBvhALXos7SrH%2BGpHPk4o3hkawJLMxtoxWIwQH6iFkaw1yjd%2Bn6lJSg2qfgICcymVYudY%2BH%2BycI5YIWIOIzvC9HRK1goK%2BFNkNc5trsGWGGUwOqOh9Y%2Ftc%2FR44mu1dHbE0gjrqBd0%2BSvN1kiDZk%2FEu4uNgILTEpZQkNFF%2BkF6w8Sn4lRxUyQbuIzh1fKmqKD%2Ftjy6onmI0hdssMY6eWoL4f2jxxNte6%2B9X8eDUhEMkKGdVGmwb7ynCuZjXXhpNICf2DHIuPMybCF20GRuZ3Sohu2g2XH0En7l1lkWZO3MfLVScEDOeoIEi77epB1oaEQaYch2jIuJfjt70cZwEQbL3IdzZz0xKQZZkhSpYyQ42o3Q0y8O7ZJmifU2FFOSDLD1mdC3zTlJZXZ%2FlMkoROuFVeKyEMNkv%2F21Lmq05r%2Bi%2BnXVjQ0qPjcEb7RSbF5RwlBwS6aBOysgweHRBB7DH%2B4zWCVlP9DVABaQmURFSi6RnA5E8WyJbqi9%2FRaC0FZTcjP1hhie2WpJVEUjGARFZ4g9nKdaF8nvb4KLE8q2zIGJStXDWnbYQhadSy7oLQMowmklfB%2BzdmpMg0wrv7SyQY6pgH25jZXp6%2FTWYpcQuDI90UP0MAtTnomFoCYZdgMx5xNO3LKufDJRXTVmrdTfdhIksfAPH0CuoQUrVIoDtQadffuUj%2BsGixuPEnGNpQlGdRSGQo7TnjkClGNXwuZqNoeUD9DKeZPFYOqdA2t%2Fbaw%2BYz01Mn6ljVUqK2d3kqMTYbdV1IFU4Q9y%2BZadZz%2BS2HA9QFWXGjSRbEZdqJS%2BDI0OJPFRua6xfCQ&X-Amz-Signature=dfdb26c5c865f2f4479b3649b64f2a362763a77abeca34e003194254bd65ed92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EAJ7LCW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FL0E7FcNDdRN5Dx1hpiJkREsweaqseq6vHSIOlkPbnAiAAygJS7vfMRTL%2BPU%2FItkPlqOa%2FnxyAV1tckijSP1gLoSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNJwHaTjItJZksRDKtwDKXw9DqkjvwXVu3uyQuKbo%2FAYMrqnM7tRZGxtMbDRV%2F6KzqsZyBvhALXos7SrH%2BGpHPk4o3hkawJLMxtoxWIwQH6iFkaw1yjd%2Bn6lJSg2qfgICcymVYudY%2BH%2BycI5YIWIOIzvC9HRK1goK%2BFNkNc5trsGWGGUwOqOh9Y%2Ftc%2FR44mu1dHbE0gjrqBd0%2BSvN1kiDZk%2FEu4uNgILTEpZQkNFF%2BkF6w8Sn4lRxUyQbuIzh1fKmqKD%2Ftjy6onmI0hdssMY6eWoL4f2jxxNte6%2B9X8eDUhEMkKGdVGmwb7ynCuZjXXhpNICf2DHIuPMybCF20GRuZ3Sohu2g2XH0En7l1lkWZO3MfLVScEDOeoIEi77epB1oaEQaYch2jIuJfjt70cZwEQbL3IdzZz0xKQZZkhSpYyQ42o3Q0y8O7ZJmifU2FFOSDLD1mdC3zTlJZXZ%2FlMkoROuFVeKyEMNkv%2F21Lmq05r%2Bi%2BnXVjQ0qPjcEb7RSbF5RwlBwS6aBOysgweHRBB7DH%2B4zWCVlP9DVABaQmURFSi6RnA5E8WyJbqi9%2FRaC0FZTcjP1hhie2WpJVEUjGARFZ4g9nKdaF8nvb4KLE8q2zIGJStXDWnbYQhadSy7oLQMowmklfB%2BzdmpMg0wrv7SyQY6pgH25jZXp6%2FTWYpcQuDI90UP0MAtTnomFoCYZdgMx5xNO3LKufDJRXTVmrdTfdhIksfAPH0CuoQUrVIoDtQadffuUj%2BsGixuPEnGNpQlGdRSGQo7TnjkClGNXwuZqNoeUD9DKeZPFYOqdA2t%2Fbaw%2BYz01Mn6ljVUqK2d3kqMTYbdV1IFU4Q9y%2BZadZz%2BS2HA9QFWXGjSRbEZdqJS%2BDI0OJPFRua6xfCQ&X-Amz-Signature=a0212f33958e8a54b077ba1f287d7dfc1b96073fa9263c101dc404bfbc5a8dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
