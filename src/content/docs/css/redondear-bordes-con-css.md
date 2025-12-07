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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PWOS4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSuA5unzBm7trY1U3sK4wgSd2g5tIJ3ZRnlKi%2FSLFhfgIhAISdFYCFEnH7ehuCuTW30EvNCHbFrbdkbaa8NJg7jGLHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwI0vX6AhxAxkyOjUq3AOijtRS3CcVVFQpRzM9nBLk41bCqoXfSR1ALOgrxiTAW4HopM0Kxan96s53PD6WnBfzPJZvXehf3c3Do%2BVoKFWENx6%2Bax5KorDiZ6fla7ptUTQaiZ6Pd8TPZkGrcByVMAZRH80cAQRSRZNNn44GftRJh8ooy7sU01I0pKL4LWFo%2B%2BFzYQ5FUcCp48LzIXbyUc%2FYXSjf%2BjPy%2BPgko9aayLqXTbXo9j63AHzbS3Q3Pw%2Bp6sDYGZpOyJfTlBLVC0LiEx98hiYvRqaIZU1CrSYS3eOQz5ocYgx3D4oIWLPlb3pwx6T%2B6H%2B9uxXiL7atYCdZfooCLrc9GD5uilGGZ11o%2BGinX9ddRJy08tOq9v%2FSr2JZ%2BHF7iWPeYEoPOdTTy0MZILh6RLOMq7qLuZdXp7ZcIpXcBO4LOPnBqKuRkiCNfCAMoQ3TsFyw1Dlo0vN2ouv9rONCPxA0xGPMJOLWKZxPyBYYxNTldK3cbp3zf925WQRVDF%2BfgOM6m8MiIrcBNHkJo69ASZ4pPQht3F9sU6B0DGJfmO46OWuExCszMErND5LxIGLW3hCQ1fG5TscOioLcs2z3ezkrRT0lHM4zzhMAZ6s97JhJOQHPL8UDlFp8tzvPsfdyx4QBT2dxHicuLjD4%2FdLJBjqkAeM4hCLW4sbvmXPOEp4CHCl%2Fy2M9EOBrIFZWfujGEGxnEmfIdQ9lELe5vMBFPCpzIz8J6GLFXHCn3squq%2BO%2B4KHgUOYsoBMkVwhvh8qlRgq%2Bn495fYYJ6yt9%2Byj7XM16BTCtd7TQ31hULrL3kAdrqH1vGqkhvBv8svLhNPniqJ3%2F9llYFZTtf8lnmIeKGKuQmXyCTbRb2lI5uYtSDSXTuhTr4Okp&X-Amz-Signature=9b4e960ff668f01d884ee0d84edd9ddf276e808747934d536c2435a1f5bd70ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PWOS4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSuA5unzBm7trY1U3sK4wgSd2g5tIJ3ZRnlKi%2FSLFhfgIhAISdFYCFEnH7ehuCuTW30EvNCHbFrbdkbaa8NJg7jGLHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwI0vX6AhxAxkyOjUq3AOijtRS3CcVVFQpRzM9nBLk41bCqoXfSR1ALOgrxiTAW4HopM0Kxan96s53PD6WnBfzPJZvXehf3c3Do%2BVoKFWENx6%2Bax5KorDiZ6fla7ptUTQaiZ6Pd8TPZkGrcByVMAZRH80cAQRSRZNNn44GftRJh8ooy7sU01I0pKL4LWFo%2B%2BFzYQ5FUcCp48LzIXbyUc%2FYXSjf%2BjPy%2BPgko9aayLqXTbXo9j63AHzbS3Q3Pw%2Bp6sDYGZpOyJfTlBLVC0LiEx98hiYvRqaIZU1CrSYS3eOQz5ocYgx3D4oIWLPlb3pwx6T%2B6H%2B9uxXiL7atYCdZfooCLrc9GD5uilGGZ11o%2BGinX9ddRJy08tOq9v%2FSr2JZ%2BHF7iWPeYEoPOdTTy0MZILh6RLOMq7qLuZdXp7ZcIpXcBO4LOPnBqKuRkiCNfCAMoQ3TsFyw1Dlo0vN2ouv9rONCPxA0xGPMJOLWKZxPyBYYxNTldK3cbp3zf925WQRVDF%2BfgOM6m8MiIrcBNHkJo69ASZ4pPQht3F9sU6B0DGJfmO46OWuExCszMErND5LxIGLW3hCQ1fG5TscOioLcs2z3ezkrRT0lHM4zzhMAZ6s97JhJOQHPL8UDlFp8tzvPsfdyx4QBT2dxHicuLjD4%2FdLJBjqkAeM4hCLW4sbvmXPOEp4CHCl%2Fy2M9EOBrIFZWfujGEGxnEmfIdQ9lELe5vMBFPCpzIz8J6GLFXHCn3squq%2BO%2B4KHgUOYsoBMkVwhvh8qlRgq%2Bn495fYYJ6yt9%2Byj7XM16BTCtd7TQ31hULrL3kAdrqH1vGqkhvBv8svLhNPniqJ3%2F9llYFZTtf8lnmIeKGKuQmXyCTbRb2lI5uYtSDSXTuhTr4Okp&X-Amz-Signature=e02014cbd91922dfe0d09453328825367a1fce8137c1407958624c2d40209ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
