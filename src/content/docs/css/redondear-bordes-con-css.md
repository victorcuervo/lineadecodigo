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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PH3ALP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG34onkvxjyeiYZEvZTIhN4OkHC%2FbpNW3kj3AXJfXbCFAiARpPIMKuQOiIHrxOiiYCnVDSpDEZwc07N3%2F8EKxXcFQCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9euizkbQY4ZbdQ%2FwKtwDc5lINdTI5FrZNugam1hQy8K5%2F5%2Bp%2BJqIJYJ%2FixtsjQNXjLLGUEgwxBqgalVdwZx6vn2fdvwryjdpdl%2FKzO7Duz9EJt80V5rions032YP5hykAjwts8e8xn0e2Yt1Zq09msoWvoZAFjw7Lwy%2FRYQE9YCmXLLCJTApdIE8RzUF%2BthjjVK3IMn%2FRzM%2BAKapL9XGhpY8svxWNz3g6dUi8ttFCIWgADJIQxPFOaosNpEd0yzlsasLESAupH6QXs17mqXj51ovj8kSTGWTIPPS5MUsWmMX3JlUkQjcXUwVN7OJpRiEVhs5Fi4FoWgDgcBxtickwky7vdOi6KJDeaU1d%2BBrxNMiM22%2B8wdsKtBM1Cetc8T%2FKgi%2F74eLgxxcqzQcf1s3tBokG8Z3YdUgZ3OfH80uGWTaT%2FCnB2SIBSnJ8zLNF1IR5KeXST84PwLGL6ONEDNLjYrssTBB7lhlyOJHdFiIB0%2FF%2F4qy4ULJTq1BHplhT550b4FtlOIwaWPTj%2BTHnypCyctHY6%2Fmjciu%2BxOLZx8%2Btd5ihw1lagzbSqQPHPUAYPAHnicb29ciwTPy8pfolqX%2FCCjdEoOHMbQjH64AE4XLYUJbqhBz1Wh9CzhmPYA1WpwLVPyMTYa4kTWxrWIw%2F%2F3SyQY6pgFv%2BUeZtCSBaaADERnPJgBA1JReWCMGjuTIxmneupyAjaEitNcsVufWG1eSZx%2By5CUfb%2Frpz%2Fo1342GHCNoe4CcL2XYPUewLiJ5BNIjnmFF2uXwLwNhh8Ys2kbm0PL5V8vCoYqbqcfTek%2BVpHLD8gI1DsXtP8q40PHjGqBlTKhGGi%2FFrQp5wC5QW0RKNDjp01eA4uuJ%2FhOejiS2Kogjf1YxluQHms0I&X-Amz-Signature=50f21dedbde156bde5d844ca5a8e52c0af77b332415d8c2b6e5fc6619f815046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PH3ALP3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG34onkvxjyeiYZEvZTIhN4OkHC%2FbpNW3kj3AXJfXbCFAiARpPIMKuQOiIHrxOiiYCnVDSpDEZwc07N3%2F8EKxXcFQCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9euizkbQY4ZbdQ%2FwKtwDc5lINdTI5FrZNugam1hQy8K5%2F5%2Bp%2BJqIJYJ%2FixtsjQNXjLLGUEgwxBqgalVdwZx6vn2fdvwryjdpdl%2FKzO7Duz9EJt80V5rions032YP5hykAjwts8e8xn0e2Yt1Zq09msoWvoZAFjw7Lwy%2FRYQE9YCmXLLCJTApdIE8RzUF%2BthjjVK3IMn%2FRzM%2BAKapL9XGhpY8svxWNz3g6dUi8ttFCIWgADJIQxPFOaosNpEd0yzlsasLESAupH6QXs17mqXj51ovj8kSTGWTIPPS5MUsWmMX3JlUkQjcXUwVN7OJpRiEVhs5Fi4FoWgDgcBxtickwky7vdOi6KJDeaU1d%2BBrxNMiM22%2B8wdsKtBM1Cetc8T%2FKgi%2F74eLgxxcqzQcf1s3tBokG8Z3YdUgZ3OfH80uGWTaT%2FCnB2SIBSnJ8zLNF1IR5KeXST84PwLGL6ONEDNLjYrssTBB7lhlyOJHdFiIB0%2FF%2F4qy4ULJTq1BHplhT550b4FtlOIwaWPTj%2BTHnypCyctHY6%2Fmjciu%2BxOLZx8%2Btd5ihw1lagzbSqQPHPUAYPAHnicb29ciwTPy8pfolqX%2FCCjdEoOHMbQjH64AE4XLYUJbqhBz1Wh9CzhmPYA1WpwLVPyMTYa4kTWxrWIw%2F%2F3SyQY6pgFv%2BUeZtCSBaaADERnPJgBA1JReWCMGjuTIxmneupyAjaEitNcsVufWG1eSZx%2By5CUfb%2Frpz%2Fo1342GHCNoe4CcL2XYPUewLiJ5BNIjnmFF2uXwLwNhh8Ys2kbm0PL5V8vCoYqbqcfTek%2BVpHLD8gI1DsXtP8q40PHjGqBlTKhGGi%2FFrQp5wC5QW0RKNDjp01eA4uuJ%2FhOejiS2Kogjf1YxluQHms0I&X-Amz-Signature=6b27aa74046311a20e9f2dccea32c9590e0d6b2cebee4d90a22e7dc29126a862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
