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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BELR6S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpvzkaTx%2FAUU4DlKgMOLKsVN7Kcwad%2B4gjUn35DTcjsAiAW5%2FOG6IoJhVJY3bRjfc5zY8hbVWZzB32o%2FJrqMePXqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BmP4%2B8WlzACgLYQKtwDyRP%2BC4jlU3m0keKuxSORsvxM2%2BUcTtJNpJiH0wW2Kjos5q4%2F1bWCKUdXTnK%2BbUsbRhHRJb5Rkx0TdacTCL6da5BIPA2jFQT6U8D4htQ8wWEX6mlVgVu8Yw%2F4Mh0fpmFXf4JMl6jFB7kw9mnz12WfICQouBMRulJk%2BxW7ZtIhtRSJelmQFGTjfNsYJ9avWETK8uY0Wp2Yem4tUHXu1x9BV%2FF4L%2BiOQ%2FXWkrW8ZaX9dsF3DbZYHwjD7cpK8xoanl%2BC%2B%2BxFl7ofjJNaRtB6yQWdtxcQQrTMV5Uh7bKVB%2F33UY0VQxeFNCYrOSP3RzV5rzaaOQonut30n8939HyaWjTDujtguKqv1y5bcZz63xMQM0xV4I58mApF90UEJ2upVfzQtenSPjGaOuj%2FhoIt3rwAluOAUNol66p3xrO%2FmutBYURVOn7MmwV5HlkZ4oNai1a2Rs5%2B49Y8GDQqTkTs9TqGWnsPoJ0X6UMoubkjyUJ1zMX3LkYUzezRw3UkhobLturZSgspZ%2FIi%2FVOF5tRslZ3XzpChDaxd1cEDogsjq1%2BK%2FGjz%2BASFlVwP1E5khV6xU2gzTIiZA7KbKhAMwZKA8KXggKIjaPcLk5TvugTs8E6PQJTn0kJFBquBfzZ8oxEw6rPcyQY6pgGFs8JspvtEoDJqFWMqRLtD0rBZ6JNqEPme8A3VnE2dUddZw6r6b3%2F40FCJdVq1pf7mE9nzyyKX1T73Q%2BKE13SphMDILnU50RyXmu%2BgdaMJDtdhQVV%2BTjlXoo5Nv6NzXAH2xn8Hi85M5LXpoYsb4nWtf1y0ti6qIuu0uBNjL%2BkRFPXfqYG6OfMCKE5L0gMkdB62Sb4wYmMK6ZtVZmwABNFr4mkWRFrx&X-Amz-Signature=aebb0c179b38b0f4204e9fabafd830307a315a73286fe03157c8c2782a65e7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BELR6S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpvzkaTx%2FAUU4DlKgMOLKsVN7Kcwad%2B4gjUn35DTcjsAiAW5%2FOG6IoJhVJY3bRjfc5zY8hbVWZzB32o%2FJrqMePXqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BmP4%2B8WlzACgLYQKtwDyRP%2BC4jlU3m0keKuxSORsvxM2%2BUcTtJNpJiH0wW2Kjos5q4%2F1bWCKUdXTnK%2BbUsbRhHRJb5Rkx0TdacTCL6da5BIPA2jFQT6U8D4htQ8wWEX6mlVgVu8Yw%2F4Mh0fpmFXf4JMl6jFB7kw9mnz12WfICQouBMRulJk%2BxW7ZtIhtRSJelmQFGTjfNsYJ9avWETK8uY0Wp2Yem4tUHXu1x9BV%2FF4L%2BiOQ%2FXWkrW8ZaX9dsF3DbZYHwjD7cpK8xoanl%2BC%2B%2BxFl7ofjJNaRtB6yQWdtxcQQrTMV5Uh7bKVB%2F33UY0VQxeFNCYrOSP3RzV5rzaaOQonut30n8939HyaWjTDujtguKqv1y5bcZz63xMQM0xV4I58mApF90UEJ2upVfzQtenSPjGaOuj%2FhoIt3rwAluOAUNol66p3xrO%2FmutBYURVOn7MmwV5HlkZ4oNai1a2Rs5%2B49Y8GDQqTkTs9TqGWnsPoJ0X6UMoubkjyUJ1zMX3LkYUzezRw3UkhobLturZSgspZ%2FIi%2FVOF5tRslZ3XzpChDaxd1cEDogsjq1%2BK%2FGjz%2BASFlVwP1E5khV6xU2gzTIiZA7KbKhAMwZKA8KXggKIjaPcLk5TvugTs8E6PQJTn0kJFBquBfzZ8oxEw6rPcyQY6pgGFs8JspvtEoDJqFWMqRLtD0rBZ6JNqEPme8A3VnE2dUddZw6r6b3%2F40FCJdVq1pf7mE9nzyyKX1T73Q%2BKE13SphMDILnU50RyXmu%2BgdaMJDtdhQVV%2BTjlXoo5Nv6NzXAH2xn8Hi85M5LXpoYsb4nWtf1y0ti6qIuu0uBNjL%2BkRFPXfqYG6OfMCKE5L0gMkdB62Sb4wYmMK6ZtVZmwABNFr4mkWRFrx&X-Amz-Signature=7408d8ae7dafddf6f8d45b039ca18fb40340d8c5d6a9b9ac57f6b00e70676a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
