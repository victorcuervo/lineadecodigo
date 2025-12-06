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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXDSWUS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq57zksazu8ElbYVsY4Ly2m1eOYWFyqMQECSYBcb8aEgIhAKKP6uTazogI5bWfXG1u%2Bf8sKBg01wca5ENnGMbGjyoTKv8DCG0QABoMNjM3NDIzMTgzODA1IgxFKp%2BP4PWw26dS7Z4q3APJkQtpgqvedDSPFfxNo1QuyFddjt3afIoEvXw3bkcw0WkCTvTCH42sbET8bOpHSSmL8ocgmWe2TzYa4tbBr9ERXM17NX7Q%2F1oKlX7se%2F6Tyu8F%2FzW0ubl%2F6%2FIGzIHFhGi9emastq0nDByIA7AKYi8mvpWk%2BaSIa%2FVJ%2FQ%2BjgdFc9qeGoqqJHREvG2UNe%2BTyJc5XjvRnPQ9B3PRTcUbRDsHOCBgeDzijtjOgdbjFL%2BeJg3NTD3wraobee%2BJo86MYQUhQVBwPRrO7gDscBUqBaaWsRMB%2BNEEjxA4uHXgQLg7gIvcQMdWqBZRdw6ZWBlCAYj%2Fv7lJryXIOCHT%2FvdJ0qh1WpfIe0bc7MqKMg4DX6va4ZX2pb%2F0K3mo3bpvhTZrQq1vDzDxPId52jHB3tkUyDT9x5vnSbe3t325xXbtnwwye7c3HO1%2FRqPRJG21TylO7sMobf6bqIsKQPnI5Qnuz6ORX1ztS%2FHgjmxhvMp%2BwaJoVRejJfTM1LuR8sCUcN%2B7bb7LZOjNY5RfqTmLxSB6FBuA6wB0YET5GWxCQK0f9S3Zh%2BaIpsJn9cta9P1z4CkoIGXWOjYDmeroWLntY7CpLQPAnAglVJCHY4lEIXI4Gks5Gm936JHGcsaJ1PKg84TDr3c7JBjqkAX1HNWT0%2B2CDKTk%2FFshMlmLAxOmbOHlErROWCDxo%2B3VnN6hGQULIzlwEkQcY6PAFamo6MZIkWd3vBNzPAlbBFXbcBNzXxnRk%2FBtzFNueZ3B%2B2Y%2FfjyM6i78Y4b5uMQuwRwI32ADBWIxOyaIdVBZeWSjjPaGFu6nitkzhtRG49KeRP1vSZ%2FpHfIYFnGhmKDlau4UXAuho8ECRqG7CqNzmquyREKmK&X-Amz-Signature=8fbdba3ee9982fa868ec940de6e6e2cd67491233afa237c58df77a242be7ad7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXDSWUS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq57zksazu8ElbYVsY4Ly2m1eOYWFyqMQECSYBcb8aEgIhAKKP6uTazogI5bWfXG1u%2Bf8sKBg01wca5ENnGMbGjyoTKv8DCG0QABoMNjM3NDIzMTgzODA1IgxFKp%2BP4PWw26dS7Z4q3APJkQtpgqvedDSPFfxNo1QuyFddjt3afIoEvXw3bkcw0WkCTvTCH42sbET8bOpHSSmL8ocgmWe2TzYa4tbBr9ERXM17NX7Q%2F1oKlX7se%2F6Tyu8F%2FzW0ubl%2F6%2FIGzIHFhGi9emastq0nDByIA7AKYi8mvpWk%2BaSIa%2FVJ%2FQ%2BjgdFc9qeGoqqJHREvG2UNe%2BTyJc5XjvRnPQ9B3PRTcUbRDsHOCBgeDzijtjOgdbjFL%2BeJg3NTD3wraobee%2BJo86MYQUhQVBwPRrO7gDscBUqBaaWsRMB%2BNEEjxA4uHXgQLg7gIvcQMdWqBZRdw6ZWBlCAYj%2Fv7lJryXIOCHT%2FvdJ0qh1WpfIe0bc7MqKMg4DX6va4ZX2pb%2F0K3mo3bpvhTZrQq1vDzDxPId52jHB3tkUyDT9x5vnSbe3t325xXbtnwwye7c3HO1%2FRqPRJG21TylO7sMobf6bqIsKQPnI5Qnuz6ORX1ztS%2FHgjmxhvMp%2BwaJoVRejJfTM1LuR8sCUcN%2B7bb7LZOjNY5RfqTmLxSB6FBuA6wB0YET5GWxCQK0f9S3Zh%2BaIpsJn9cta9P1z4CkoIGXWOjYDmeroWLntY7CpLQPAnAglVJCHY4lEIXI4Gks5Gm936JHGcsaJ1PKg84TDr3c7JBjqkAX1HNWT0%2B2CDKTk%2FFshMlmLAxOmbOHlErROWCDxo%2B3VnN6hGQULIzlwEkQcY6PAFamo6MZIkWd3vBNzPAlbBFXbcBNzXxnRk%2FBtzFNueZ3B%2B2Y%2FfjyM6i78Y4b5uMQuwRwI32ADBWIxOyaIdVBZeWSjjPaGFu6nitkzhtRG49KeRP1vSZ%2FpHfIYFnGhmKDlau4UXAuho8ECRqG7CqNzmquyREKmK&X-Amz-Signature=a6b34543a925587697605868361ec3e1f42642522ecb63661126abd6cdd6d978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
