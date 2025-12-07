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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTPU6BY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkk9l%2B5Yfnh3TV%2F6sNha%2FYEi3uAkYaKO%2FSUbRIp5LW9AiALWifQTPBPXuXJ7cRo3bHjA83yc92VoJkt9qQ1zyMTzyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqC7JsSo0wpcEQKcNKtwD1EXm2e34Px%2FXr5DGa6K301ymeelu1jL3L2HqowPWI%2B4TXe5zm4lyqlPlcKKkj32AIqMWJQCdSubefLMxJ0sevRaIVMz2khDWsDLOo0KTojuet3QFIREiStsqsDBDX2tmT%2BdcUngGaJ%2FQttkMlcJcD33tjorheg%2BifawGWw1YDFMR%2F18c3mTrC0m3shuarTyg1tZmomG23AvQtXdwWYFkqwFv9n%2Bm%2B4M7IyiUzR7CS3aheFZYD23iRd6WkFpNt2TalE3ydqqB7pj1ZB4J0SmxCDTog51g6KJkgN82lysxKF8o3EVlC0lCZZZQeTeyzn2jdDTZARwQinvTt7hgLD2PUs48SxfoEZBa%2FlrZrNox7uPahNeUVN0cA64iYJCGyP66fBaAIcwQzobB9yKXmCzFH%2FKYvH6eUMWr50hEZeFRGXFW0DBjsrRB1iuKZx5ukvngvtgQDA3tBb%2BtlzxNREV3Hx2aA1oPTrRYcyKQ5jH0rtR6pAIRlwSLqCY2QN02Jfq0YJ4si5yYTNcVLZuNiD62IJHOp%2F5k41tOJvmjPcP17DNhJJ94ErYpiBp%2BOC1wSsjIlLBQ%2F05C8j9Z57ZcxC0lO5lit0ey4Tc5hYO1BgbGhsrFcC4i6Vk%2BLmWcYEYwoKDUyQY6pgF4aeJMdjqjo3w%2Bpx8x5EaoH7RGc6qRIjGSKxnqJET2VEBsiNczOESlpx2YhQDyMMmAAVKwhzcRQbuysukas1RYsdrPLac1fy%2B7656r3vyvNTAP5D56zwtIdn%2B6eozWd%2FcPpqcAvXAh865ngwgU%2BT15fnGOmPDEWunhoLGSF7BmxkUmHn9OS9wPz2%2B8uX0JmfPWE0lNKddHWuM2GdtFjPXwyfWw4AeR&X-Amz-Signature=bbedad4e16aab2e0e4d2b210bf8ca2a606ad4aeb8120e1c2022add4ad3059ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTPU6BY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkk9l%2B5Yfnh3TV%2F6sNha%2FYEi3uAkYaKO%2FSUbRIp5LW9AiALWifQTPBPXuXJ7cRo3bHjA83yc92VoJkt9qQ1zyMTzyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqC7JsSo0wpcEQKcNKtwD1EXm2e34Px%2FXr5DGa6K301ymeelu1jL3L2HqowPWI%2B4TXe5zm4lyqlPlcKKkj32AIqMWJQCdSubefLMxJ0sevRaIVMz2khDWsDLOo0KTojuet3QFIREiStsqsDBDX2tmT%2BdcUngGaJ%2FQttkMlcJcD33tjorheg%2BifawGWw1YDFMR%2F18c3mTrC0m3shuarTyg1tZmomG23AvQtXdwWYFkqwFv9n%2Bm%2B4M7IyiUzR7CS3aheFZYD23iRd6WkFpNt2TalE3ydqqB7pj1ZB4J0SmxCDTog51g6KJkgN82lysxKF8o3EVlC0lCZZZQeTeyzn2jdDTZARwQinvTt7hgLD2PUs48SxfoEZBa%2FlrZrNox7uPahNeUVN0cA64iYJCGyP66fBaAIcwQzobB9yKXmCzFH%2FKYvH6eUMWr50hEZeFRGXFW0DBjsrRB1iuKZx5ukvngvtgQDA3tBb%2BtlzxNREV3Hx2aA1oPTrRYcyKQ5jH0rtR6pAIRlwSLqCY2QN02Jfq0YJ4si5yYTNcVLZuNiD62IJHOp%2F5k41tOJvmjPcP17DNhJJ94ErYpiBp%2BOC1wSsjIlLBQ%2F05C8j9Z57ZcxC0lO5lit0ey4Tc5hYO1BgbGhsrFcC4i6Vk%2BLmWcYEYwoKDUyQY6pgF4aeJMdjqjo3w%2Bpx8x5EaoH7RGc6qRIjGSKxnqJET2VEBsiNczOESlpx2YhQDyMMmAAVKwhzcRQbuysukas1RYsdrPLac1fy%2B7656r3vyvNTAP5D56zwtIdn%2B6eozWd%2FcPpqcAvXAh865ngwgU%2BT15fnGOmPDEWunhoLGSF7BmxkUmHn9OS9wPz2%2B8uX0JmfPWE0lNKddHWuM2GdtFjPXwyfWw4AeR&X-Amz-Signature=541a27b3f0f0539a9979f91a6cdf033a57174b0f3a1a93a894b0ec23fbaf2bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
