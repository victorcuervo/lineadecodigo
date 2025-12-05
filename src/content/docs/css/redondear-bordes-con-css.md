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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWCSQBQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMx%2BzF0o1XLAHYLviGpwK1PrfjrSIXsYcbJIS4FTlywIgcA1TYRJzW2aTMwfL3jpmUYhu75NOaU051VEKh7eqIbAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAfHjPIp81f2te5tRircA0THLlLftnMfz92pipWq%2FZF0kg5KwpdebQebW3C6SQB93w5banfu%2BZmr2dUxRsh8PcM0WAqMa6oPqygYngz4A6pRryr9kw26i%2Bd%2BmzgTjpq6nPsZOMdRq%2BkEVx1EUvp6YVDhPb%2Br93u3%2FX4RjXsvXF%2BjtaHYm9xSXO4JX9wAFFzQsBOvkFJyh5rW9fHr5kkLL%2FM560PYrAjYLIGBGM3Dw3QHG%2FGd7Fwpue9PAB%2FyuQ7E0r%2B%2FeLE9810EYD0%2BfU3MO9webkgKk2p0QItMWvbFaHnItRSkOv8I9jdc%2BJr%2FMZhWtDKU3h%2FxbV7sMfq4iaCc31dg5QRUpx3jTPKdqtdQy4LqBHeUvPx%2FYHhZmdXeeV%2BHuc2hJ8JWURuYwUVALZTRs%2BYtDNm7qa0lv3a03Yqd%2BJpqdaExOIrAZtGnUHu1XqHD4IrOXA1nZfmzU2Kkw8UabvLHR4vaH3i%2BFpZi%2FkMAAQNrj%2FLL%2BlmQAaN0nRcxzaaYCwiLrzbkSMITHIsqVjgQTrJ21xPhE8YhwxAfXiw06bD7SKADUENlHaCcJMDh5s8E%2FhrlyYk%2Fd0WKHpvmJF88wjS6lL3uFw1iTcvMen%2BZrCM8N0fskHoGTpOq3i32yj1lAyUvYWna0chOm7wFMPiuyckGOqUB55JO80R0VrOxkbq22prBogwoPTKaF0MJFq2kI182e2as6zctW5TUabcCBPBcnsOJ1yP0umMaiiUUXlt5zDK3xUsIDMbUzI7950M0tOQTg4Ka8mIok40sp05vm8w6ocPwihGDfEcFIUoSPsaUWO%2BMg5DxvNzjlSCG6BGsnzZPYQX68LxohJBiZxPlMrToE%2BGgFv1WsNuWbXT3XSARK84jPiklLGxZ&X-Amz-Signature=6a311a0b3be010ef8f32e9fa911d21a78cadb923efab0463f093751fa5e9478c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWCSQBQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMx%2BzF0o1XLAHYLviGpwK1PrfjrSIXsYcbJIS4FTlywIgcA1TYRJzW2aTMwfL3jpmUYhu75NOaU051VEKh7eqIbAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAfHjPIp81f2te5tRircA0THLlLftnMfz92pipWq%2FZF0kg5KwpdebQebW3C6SQB93w5banfu%2BZmr2dUxRsh8PcM0WAqMa6oPqygYngz4A6pRryr9kw26i%2Bd%2BmzgTjpq6nPsZOMdRq%2BkEVx1EUvp6YVDhPb%2Br93u3%2FX4RjXsvXF%2BjtaHYm9xSXO4JX9wAFFzQsBOvkFJyh5rW9fHr5kkLL%2FM560PYrAjYLIGBGM3Dw3QHG%2FGd7Fwpue9PAB%2FyuQ7E0r%2B%2FeLE9810EYD0%2BfU3MO9webkgKk2p0QItMWvbFaHnItRSkOv8I9jdc%2BJr%2FMZhWtDKU3h%2FxbV7sMfq4iaCc31dg5QRUpx3jTPKdqtdQy4LqBHeUvPx%2FYHhZmdXeeV%2BHuc2hJ8JWURuYwUVALZTRs%2BYtDNm7qa0lv3a03Yqd%2BJpqdaExOIrAZtGnUHu1XqHD4IrOXA1nZfmzU2Kkw8UabvLHR4vaH3i%2BFpZi%2FkMAAQNrj%2FLL%2BlmQAaN0nRcxzaaYCwiLrzbkSMITHIsqVjgQTrJ21xPhE8YhwxAfXiw06bD7SKADUENlHaCcJMDh5s8E%2FhrlyYk%2Fd0WKHpvmJF88wjS6lL3uFw1iTcvMen%2BZrCM8N0fskHoGTpOq3i32yj1lAyUvYWna0chOm7wFMPiuyckGOqUB55JO80R0VrOxkbq22prBogwoPTKaF0MJFq2kI182e2as6zctW5TUabcCBPBcnsOJ1yP0umMaiiUUXlt5zDK3xUsIDMbUzI7950M0tOQTg4Ka8mIok40sp05vm8w6ocPwihGDfEcFIUoSPsaUWO%2BMg5DxvNzjlSCG6BGsnzZPYQX68LxohJBiZxPlMrToE%2BGgFv1WsNuWbXT3XSARK84jPiklLGxZ&X-Amz-Signature=8d4b7482c01dcbc0a398788046afe4598190bf4ce264876da705627452aef71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
