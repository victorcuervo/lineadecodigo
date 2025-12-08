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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVCHTEW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7DSxiaYDFzEjf6hz1wofOWxhlSw8bBpQ%2BinWZliXk4AiEAtMuOvLPiSzQjoqzr%2BG8BtGEFEPdhwYTHBoBI85AfUIsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCQgMGCt2ogbr4BsSrcA5vKToDjvFiYzlKdn23vAZbxu01ksxKVAfQyb0iZn7phZM1QOkOtF4OLMvVHMcycASV9JaDOiyrsxxcjQEwAvrsaun%2F85vP8w7QreqygO%2BCkcb2R43RW6Lorl09SW16Ki3AlmIcKJNr5Kioe3dg8QRPXzNI3JxCe7Kxhx0gdxxSiSh%2BqrHavc1nGZ29glP0%2Fn0WLODhzy06DEo0GEAzmNAWMuyKJXgpUnc7c7U2P3GdlfZHB%2Ff5RwaKdZpPzyoGUYYe%2FiXTJPj4pzSdVCpOGbd%2BJTvwxSx3onOwk3UlSb%2F3OZat2aPLm6Xh5nPgLjGg1Nhv3tvBJJFqZkdt7ZwrK79m0GkXwPq9o8yYJi0YINGCKyvcKbzXUz0O6OYD9HbGqycgAzYTtQNo5uoycI4BIrVRWoDJIEBC%2FREre1PU2o2hAchFrsSNG7dL%2F1yg24YiZAtq%2FzTt2fcKjkfKUTcEtV0K3M4nmkIM%2B%2Bzh3oEX0sQ6vN87BfkePJPNGX9kcFPwuIogNOlIdVgZvs4xvlgJsqdYv8vdqS5B47jYjz06SwmKq%2FZuA227NilvoAF4qH3GFWKazLGPmzvX%2FmsJVe3jWb5QcJJ9kAJzVZpwxa%2BUb5Nl13cPDDDDGLl%2BqPNASMPL02skGOqUB%2F0aEb0XHKjz3dC%2FRHuBLQKhKZmJarx3wbHZa%2BPkWj821vwUbFWbxJKgm3Zq8LLHFN0NT1mjCDLVshuTJ5qVlDPoPjoeyY4WHAPw7my1LfV8jAVLQDwa2u%2BqqaRLLMaX5TRcuYMb7Scj2Kr8sWxZBlcoKa2B7MJI1beha2u%2BHeZzVaRYixYAqFwfuMx2B51AXJ8wX9q2Xi0%2Bt1MAy%2FmLNxknD5C1f&X-Amz-Signature=ca4bf2c84404a6033d0c3964c16073a18d0310ebfbe4adbe5846f81607aa686e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVCHTEW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7DSxiaYDFzEjf6hz1wofOWxhlSw8bBpQ%2BinWZliXk4AiEAtMuOvLPiSzQjoqzr%2BG8BtGEFEPdhwYTHBoBI85AfUIsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCQgMGCt2ogbr4BsSrcA5vKToDjvFiYzlKdn23vAZbxu01ksxKVAfQyb0iZn7phZM1QOkOtF4OLMvVHMcycASV9JaDOiyrsxxcjQEwAvrsaun%2F85vP8w7QreqygO%2BCkcb2R43RW6Lorl09SW16Ki3AlmIcKJNr5Kioe3dg8QRPXzNI3JxCe7Kxhx0gdxxSiSh%2BqrHavc1nGZ29glP0%2Fn0WLODhzy06DEo0GEAzmNAWMuyKJXgpUnc7c7U2P3GdlfZHB%2Ff5RwaKdZpPzyoGUYYe%2FiXTJPj4pzSdVCpOGbd%2BJTvwxSx3onOwk3UlSb%2F3OZat2aPLm6Xh5nPgLjGg1Nhv3tvBJJFqZkdt7ZwrK79m0GkXwPq9o8yYJi0YINGCKyvcKbzXUz0O6OYD9HbGqycgAzYTtQNo5uoycI4BIrVRWoDJIEBC%2FREre1PU2o2hAchFrsSNG7dL%2F1yg24YiZAtq%2FzTt2fcKjkfKUTcEtV0K3M4nmkIM%2B%2Bzh3oEX0sQ6vN87BfkePJPNGX9kcFPwuIogNOlIdVgZvs4xvlgJsqdYv8vdqS5B47jYjz06SwmKq%2FZuA227NilvoAF4qH3GFWKazLGPmzvX%2FmsJVe3jWb5QcJJ9kAJzVZpwxa%2BUb5Nl13cPDDDDGLl%2BqPNASMPL02skGOqUB%2F0aEb0XHKjz3dC%2FRHuBLQKhKZmJarx3wbHZa%2BPkWj821vwUbFWbxJKgm3Zq8LLHFN0NT1mjCDLVshuTJ5qVlDPoPjoeyY4WHAPw7my1LfV8jAVLQDwa2u%2BqqaRLLMaX5TRcuYMb7Scj2Kr8sWxZBlcoKa2B7MJI1beha2u%2BHeZzVaRYixYAqFwfuMx2B51AXJ8wX9q2Xi0%2Bt1MAy%2FmLNxknD5C1f&X-Amz-Signature=5d54465a575e2331d61a74e2dc340224634fbd65dbb1213bd03c4bd1d2a104ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
