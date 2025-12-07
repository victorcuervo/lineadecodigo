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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LA5HBZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2F%2BG2hQLCUkDfaGCGhxQRwxb9swvQ2SR53AbR3OR%2FgIhAPhIOSGepqfDxTZ80RAxHYXrp6UxpT%2B408w%2Bl99%2BkrVQKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwalz8b2J%2BqcWJtc6Aq3AO9i4oKwYG6UhEJo2qxXH2VNJXPkQHlQhVZ8eh6QITGfaBrjZ8p8wDAMpGQZgH1mG3DVYv5DTXf8kaeA6CBymPUSLKpg36p2G600CO9CgCA5i7UTdOQQ7iMKlDbX60ODZMq92Z8bc3Ilqk6Cz1xO98GUbkaBMiKZXxPmWVp0OaCP9Eb4fQx62UL4w2ymIEqakilPYq6%2F0kx9NLrXM9jKR5aavvgQUplvACQhMP1j929kCeOdhmg7yGqhkLdUYLpWXA6NlTrJL%2F14OL9Fq2SJVaIHpXs3JWaAzZFI3s3jBVsmmhAl%2BrH%2F45zMmPEuZ1dcIEsXI00ksAB33NxlGe5gHoEIDm8EXymCIQPeouiMUkd7gP1NNF4YzKkYrR90rVQLYxrKE4WCcswtWDPfyakyMW87I0wqFTPcymOoXbFqHq%2FWYzbeKqtUtaWL4J9p0JsuMayu%2Fz1Mxao9gI224%2FK%2BcTA4CVh4GZGXw17ODc5DJEq7F7%2B022anqKMN17pMHeFeMHzEsoHNKa39ZfZX4sA%2B%2Fr92GGr2yiE8a3Qvl4xM6DvAC%2BhN6CI5%2BY9X8OTDo3pF%2BmhUB3oCwsSTGdv4Xv3uWVPO44mBnF4dFrvk2OWlOsyhrx%2FA1ZSHEZDY%2F8k3jC3mdXJBjqkAcMzy6mT5Z5LTk3zZ%2B8dp3kgKF5fRFft4d5shalbep8a0msTtjP7WyDJfbs%2B7Y1rkK%2F2sMa4bGGLUwcD0ZGCRDV09M0C0RblFmEI86dLCssLyX%2FAs0KkDKHosmo7uDbCNyfZ2pG1sNE%2FJYikX3FovS79XWT0RmfKlYYHoEbP9rXHQX6dS%2FzxFxxrPHU9797GCd3nD6%2BYZcZv%2F8vNwtrnVFEnXRJL&X-Amz-Signature=e0ecd70e78b75b885b86b4d421f954a39fcfff9e1970d45fdecb263f6f4422b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LA5HBZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6t%2F%2BG2hQLCUkDfaGCGhxQRwxb9swvQ2SR53AbR3OR%2FgIhAPhIOSGepqfDxTZ80RAxHYXrp6UxpT%2B408w%2Bl99%2BkrVQKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwalz8b2J%2BqcWJtc6Aq3AO9i4oKwYG6UhEJo2qxXH2VNJXPkQHlQhVZ8eh6QITGfaBrjZ8p8wDAMpGQZgH1mG3DVYv5DTXf8kaeA6CBymPUSLKpg36p2G600CO9CgCA5i7UTdOQQ7iMKlDbX60ODZMq92Z8bc3Ilqk6Cz1xO98GUbkaBMiKZXxPmWVp0OaCP9Eb4fQx62UL4w2ymIEqakilPYq6%2F0kx9NLrXM9jKR5aavvgQUplvACQhMP1j929kCeOdhmg7yGqhkLdUYLpWXA6NlTrJL%2F14OL9Fq2SJVaIHpXs3JWaAzZFI3s3jBVsmmhAl%2BrH%2F45zMmPEuZ1dcIEsXI00ksAB33NxlGe5gHoEIDm8EXymCIQPeouiMUkd7gP1NNF4YzKkYrR90rVQLYxrKE4WCcswtWDPfyakyMW87I0wqFTPcymOoXbFqHq%2FWYzbeKqtUtaWL4J9p0JsuMayu%2Fz1Mxao9gI224%2FK%2BcTA4CVh4GZGXw17ODc5DJEq7F7%2B022anqKMN17pMHeFeMHzEsoHNKa39ZfZX4sA%2B%2Fr92GGr2yiE8a3Qvl4xM6DvAC%2BhN6CI5%2BY9X8OTDo3pF%2BmhUB3oCwsSTGdv4Xv3uWVPO44mBnF4dFrvk2OWlOsyhrx%2FA1ZSHEZDY%2F8k3jC3mdXJBjqkAcMzy6mT5Z5LTk3zZ%2B8dp3kgKF5fRFft4d5shalbep8a0msTtjP7WyDJfbs%2B7Y1rkK%2F2sMa4bGGLUwcD0ZGCRDV09M0C0RblFmEI86dLCssLyX%2FAs0KkDKHosmo7uDbCNyfZ2pG1sNE%2FJYikX3FovS79XWT0RmfKlYYHoEbP9rXHQX6dS%2FzxFxxrPHU9797GCd3nD6%2BYZcZv%2F8vNwtrnVFEnXRJL&X-Amz-Signature=9847e9383521532885bd37dae8a9f5b1d1a7e9d2ad2c15fd861c1063aff0eb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
