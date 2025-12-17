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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SRB3ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFuMlwQbGSCXA%2BZnXDAB9iJQRmowOmYi480KJFCd6lOAIhAJdJfYa%2F7i42C2Ysnkin0xhzdP2nZLO3hoONCufaDi9KKv8DCHQQABoMNjM3NDIzMTgzODA1Igx5HZmj1N%2BYXcxguSYq3ANDAaxMXguXZYnSQJvkkzJszH8SYklLSby0YBUTkN701dmet6%2B82VLO63irWBSRtLwwyEiPTZZixyMkz5TDCwW3bWzhsSXndBCPmaPrvBOW5fs6mjTFoER3JLnf90nSbustfQoZQcMZIxTuaerg0ApIAnt62SatG%2BIBxP93HvJoOOIKoQnrEPdN49D%2F%2FsAdOpwlKUzFXpU5smVSlpHNaqVLRQP2Gfz8KO1yj56AKqwrUAVllg9LlbUsZLbXb%2F%2FsINSw5jhc%2FlZf4amkjAzOe55Ew6%2Bnz1c0oalfuKFLV7r3EbfXHgFB0Jv%2B%2B%2FncnqzZC5ZLlDqDiyI3S%2BDYJSP2Indtev7btsPtSMQHM3JaCcX%2FUGGsexqEP3NXytkj0HhjRY1sfJYEzYPQGuy3ZN8S2RQY%2FYb9EunGJ%2BMzzvHc2ay3tonm%2FwrVUD7rozJw6nUeKvNUe4eJwXMEcOji97JHN8doTMyB%2FkTHSjOqk76Lf3xICPiNZIHMeOX2P9j74fMU75MmV5JZqxCD6jzbvTfl1VLKuTajmNUsN6LBaLC1V%2BqijrShAI8cwR0JGcXHz6%2Bk1nMt6OhI9r4H8DC4NP2tuagM%2F2XG66xxADK8qNc0im6NF3fkyPHw%2FfBttpDszjCas4jKBjqkAZ2fkoPROO5uriqfrupOW8E9ZoLkEp%2BTSvQN%2BOvDys2QZ14aYGdKaRFm3ELun9nzZxNeUyNHKhwstiwmR5BfktzyZcpYJsI2ExxQ2DvZTjYnPNAMRMtzhpbg3ywFn4g7mqHipPqUPH4eEeqfs1YbDL1w23BUgt8jxIp3mjUwbfESirEep9ZWq9hj9%2B2ej8Fb6%2Bes34j3RujrWtqxDptbjadpta%2F9&X-Amz-Signature=b00c1f13dbc7bd63989f1bcf2823e6a64f5e6f6b7d3580e33ab8d87973dfb449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SRB3ZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFuMlwQbGSCXA%2BZnXDAB9iJQRmowOmYi480KJFCd6lOAIhAJdJfYa%2F7i42C2Ysnkin0xhzdP2nZLO3hoONCufaDi9KKv8DCHQQABoMNjM3NDIzMTgzODA1Igx5HZmj1N%2BYXcxguSYq3ANDAaxMXguXZYnSQJvkkzJszH8SYklLSby0YBUTkN701dmet6%2B82VLO63irWBSRtLwwyEiPTZZixyMkz5TDCwW3bWzhsSXndBCPmaPrvBOW5fs6mjTFoER3JLnf90nSbustfQoZQcMZIxTuaerg0ApIAnt62SatG%2BIBxP93HvJoOOIKoQnrEPdN49D%2F%2FsAdOpwlKUzFXpU5smVSlpHNaqVLRQP2Gfz8KO1yj56AKqwrUAVllg9LlbUsZLbXb%2F%2FsINSw5jhc%2FlZf4amkjAzOe55Ew6%2Bnz1c0oalfuKFLV7r3EbfXHgFB0Jv%2B%2B%2FncnqzZC5ZLlDqDiyI3S%2BDYJSP2Indtev7btsPtSMQHM3JaCcX%2FUGGsexqEP3NXytkj0HhjRY1sfJYEzYPQGuy3ZN8S2RQY%2FYb9EunGJ%2BMzzvHc2ay3tonm%2FwrVUD7rozJw6nUeKvNUe4eJwXMEcOji97JHN8doTMyB%2FkTHSjOqk76Lf3xICPiNZIHMeOX2P9j74fMU75MmV5JZqxCD6jzbvTfl1VLKuTajmNUsN6LBaLC1V%2BqijrShAI8cwR0JGcXHz6%2Bk1nMt6OhI9r4H8DC4NP2tuagM%2F2XG66xxADK8qNc0im6NF3fkyPHw%2FfBttpDszjCas4jKBjqkAZ2fkoPROO5uriqfrupOW8E9ZoLkEp%2BTSvQN%2BOvDys2QZ14aYGdKaRFm3ELun9nzZxNeUyNHKhwstiwmR5BfktzyZcpYJsI2ExxQ2DvZTjYnPNAMRMtzhpbg3ywFn4g7mqHipPqUPH4eEeqfs1YbDL1w23BUgt8jxIp3mjUwbfESirEep9ZWq9hj9%2B2ej8Fb6%2Bes34j3RujrWtqxDptbjadpta%2F9&X-Amz-Signature=f2fd49510e3155e98d4fcd6bef21a79edec5eebd94bab392a9ba1252887fdf3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
