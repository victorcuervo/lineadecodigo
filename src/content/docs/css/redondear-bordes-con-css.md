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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTA4LX3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhv%2F6Ykrid8RlkqGklQe7N0ybGJw%2Fqnavr%2FLPuYTmeQAiB30WOpwEnhwU%2FVAqg%2B1OjZsaScPaCX6ljigscoIMHa%2Fyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMO%2FRcsyQhvef3LCxwKtwDuppMCSC5LOSS35Q1UyH%2Fj95c7uH8lsC1LxMaUUdfPt8QE6jfa2E3F73SZDQOr3qIFo%2BhDkM9CnTefU6xgvexJ7H959oPPd4V3mlpP9GJwGIfV5tenP9IBHIxecXQNMNzrJgJ%2FW7sejg2vw1AyiF6%2FSMGmrUozKx6SFpt%2Bg70LXqUkXX3w0FZ51dnpkelks7a%2Bo6P1YkUjGt07zAZnGa3qrdH8n4Jaoh74ihZkVnH2we3tCz%2BevVGmJcyg%2BPPZ%2FVMOPkVSBJMcGWb87R25uhCsKsUe197GulBkK0IdePIFLg5K9Y2KT85bl4oJma0lVuIppzAtqJXVlMPoKNX08%2Fq3Z0bufw%2Fhb0Wi6tUhEuVXcwbe%2B%2FE%2F4eUbfmqKY00mnVSM3WOq4DQddrR5vGOwcOmIbbC8g48s0PAcge348vyXzZwTylkqo22rqbL%2FbM72U%2FnCa%2Bb3i0kl46Y4yyO2y2Kyy7CWPcf8rgn1%2Blon2%2FrfyIXFQy1PllJuR9ogDlCKi4Yz%2BSw2et9jCk12mMsPYGhQcg9Xp1TMm95KqkHvEoSwKHi2RSJjzAa7Bk%2F3ijJP9kf7Ug%2Fc3a7mktDBqgg1PJuuEVtu46DhsVq3LeMCtmyNPmlD02JCEZHWy8TMC0wgYrQyQY6pgGl85RvBgVFqlClt4uCZP8t7Pkft%2FrHLuu9v8ILw7mXvp%2FPqQ2eGgD6DVDRJzH1Juzfbs2EOr7rieMuAwsAXpgoiL72HBc%2FmD8%2B4yUX7R0i6Wdzs1qFWucsxs88EGthIWZo%2FRC7LHE8gI%2BGl830N5dPj8Sxl7p5jEXB0rdAkq0cV83bO%2FcfpyjBYCEDRYUcCfUVRrM2ptg%2B6q6hP3YwNnxa1%2FEQp28j&X-Amz-Signature=50d6410f0830206ba43751e89a0a077ef0fc5879a02d844510963ad2c0500faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTA4LX3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhv%2F6Ykrid8RlkqGklQe7N0ybGJw%2Fqnavr%2FLPuYTmeQAiB30WOpwEnhwU%2FVAqg%2B1OjZsaScPaCX6ljigscoIMHa%2Fyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMO%2FRcsyQhvef3LCxwKtwDuppMCSC5LOSS35Q1UyH%2Fj95c7uH8lsC1LxMaUUdfPt8QE6jfa2E3F73SZDQOr3qIFo%2BhDkM9CnTefU6xgvexJ7H959oPPd4V3mlpP9GJwGIfV5tenP9IBHIxecXQNMNzrJgJ%2FW7sejg2vw1AyiF6%2FSMGmrUozKx6SFpt%2Bg70LXqUkXX3w0FZ51dnpkelks7a%2Bo6P1YkUjGt07zAZnGa3qrdH8n4Jaoh74ihZkVnH2we3tCz%2BevVGmJcyg%2BPPZ%2FVMOPkVSBJMcGWb87R25uhCsKsUe197GulBkK0IdePIFLg5K9Y2KT85bl4oJma0lVuIppzAtqJXVlMPoKNX08%2Fq3Z0bufw%2Fhb0Wi6tUhEuVXcwbe%2B%2FE%2F4eUbfmqKY00mnVSM3WOq4DQddrR5vGOwcOmIbbC8g48s0PAcge348vyXzZwTylkqo22rqbL%2FbM72U%2FnCa%2Bb3i0kl46Y4yyO2y2Kyy7CWPcf8rgn1%2Blon2%2FrfyIXFQy1PllJuR9ogDlCKi4Yz%2BSw2et9jCk12mMsPYGhQcg9Xp1TMm95KqkHvEoSwKHi2RSJjzAa7Bk%2F3ijJP9kf7Ug%2Fc3a7mktDBqgg1PJuuEVtu46DhsVq3LeMCtmyNPmlD02JCEZHWy8TMC0wgYrQyQY6pgGl85RvBgVFqlClt4uCZP8t7Pkft%2FrHLuu9v8ILw7mXvp%2FPqQ2eGgD6DVDRJzH1Juzfbs2EOr7rieMuAwsAXpgoiL72HBc%2FmD8%2B4yUX7R0i6Wdzs1qFWucsxs88EGthIWZo%2FRC7LHE8gI%2BGl830N5dPj8Sxl7p5jEXB0rdAkq0cV83bO%2FcfpyjBYCEDRYUcCfUVRrM2ptg%2B6q6hP3YwNnxa1%2FEQp28j&X-Amz-Signature=0889d6c47322ff8977b8797868fce908a33000b4c623083d05e9ae604e008777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
