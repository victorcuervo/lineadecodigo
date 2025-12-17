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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4E7YED6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQCWhkUEQNqX7sAnwEBj6Q7lHRkFaFv4d8VhAd8poS8AiEAmGb1v4D6UcC2tYB0LPqiZwuAYhQxTvtMUVtrdbpHkSIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPDA53khxHQfv2oHSircA4UdDWtIEeJeSMrrLcpMJ%2BRsrCqRww7eVdoIH6uzSdSY7jNeJCP84JEfg5Nsoy3QADOU264YxsCNxBczeTwyrt80JDZEv7hoqch7H0XRkSX6IeenZCM%2BW8Z0P196AqdiymoBe%2FY72HB5ZhN%2F7WRoeJJ%2FBBeD9ajhnz4nZlwwsd%2BgHefRYW8UWoHSjq5mw7g%2BTD9Rk8%2F7LH14kp6imJdufT16ozQDejCVwpFenNTIE3539fjfVMMTbOSlpzfTPlHQMTgeOpRW%2BOkHUYlYpAiCJMIyT9TWcYK9XQ0Yykk%2Bfyc5qYzAOCL0Gm8Vae0jQ4sIikZxrePRrLACNYipyPr0Dtzo5GnfBRZQ%2Fb7vrz9BsCLu7whD7XWEEc%2Fio6oKrLOsJti8CdI0a4huMGspv4Cej%2Bx40M3AMFLwCzBQ2147Zl61uXf1ap9xZXj2kBJLRUAasJgybTGrC%2F%2Bo8M46VwUwKTWgi4hK3fyuiffiGXsxjOR%2F3aEGslma79p5A%2BNQ2njYQdtMs2s848Kl4m%2BxduMFRGCmLRcCQUNSHtutYP%2FtgOrMf%2B7ext2jj6JQNE1i7S1ahCOIbUT2oruMuSCnG1He%2FQO6u1R14DJl98xpxPEIdUoQu8KwsQVSA1pVpg5kMJqrisoGOqUBnd0T8q4ztm4NQOjdeZeoysEqAYQSWQMm3C8lZcEYYleKADmW6XIjUdD4XfHc0niEZpsH%2BitN4FOqNLv3FdvDjf2NQS4JMl3FaUR0eGnVzQBbotkH1AVz4TD5V54yg%2BbNbLQFEt%2BRKGWIQhq%2BeU%2F2UmpvCi2rgJ0%2F45AwI%2BxHYNgBf8tnfGUeORHrYa452bInrQ2y4c7xt8hYx7daZamfv920eFuy&X-Amz-Signature=4e926047682b4cbe60aac2b38109cb4cbe26db6a5cecbe16f65be37a42f2c25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4E7YED6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQCWhkUEQNqX7sAnwEBj6Q7lHRkFaFv4d8VhAd8poS8AiEAmGb1v4D6UcC2tYB0LPqiZwuAYhQxTvtMUVtrdbpHkSIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPDA53khxHQfv2oHSircA4UdDWtIEeJeSMrrLcpMJ%2BRsrCqRww7eVdoIH6uzSdSY7jNeJCP84JEfg5Nsoy3QADOU264YxsCNxBczeTwyrt80JDZEv7hoqch7H0XRkSX6IeenZCM%2BW8Z0P196AqdiymoBe%2FY72HB5ZhN%2F7WRoeJJ%2FBBeD9ajhnz4nZlwwsd%2BgHefRYW8UWoHSjq5mw7g%2BTD9Rk8%2F7LH14kp6imJdufT16ozQDejCVwpFenNTIE3539fjfVMMTbOSlpzfTPlHQMTgeOpRW%2BOkHUYlYpAiCJMIyT9TWcYK9XQ0Yykk%2Bfyc5qYzAOCL0Gm8Vae0jQ4sIikZxrePRrLACNYipyPr0Dtzo5GnfBRZQ%2Fb7vrz9BsCLu7whD7XWEEc%2Fio6oKrLOsJti8CdI0a4huMGspv4Cej%2Bx40M3AMFLwCzBQ2147Zl61uXf1ap9xZXj2kBJLRUAasJgybTGrC%2F%2Bo8M46VwUwKTWgi4hK3fyuiffiGXsxjOR%2F3aEGslma79p5A%2BNQ2njYQdtMs2s848Kl4m%2BxduMFRGCmLRcCQUNSHtutYP%2FtgOrMf%2B7ext2jj6JQNE1i7S1ahCOIbUT2oruMuSCnG1He%2FQO6u1R14DJl98xpxPEIdUoQu8KwsQVSA1pVpg5kMJqrisoGOqUBnd0T8q4ztm4NQOjdeZeoysEqAYQSWQMm3C8lZcEYYleKADmW6XIjUdD4XfHc0niEZpsH%2BitN4FOqNLv3FdvDjf2NQS4JMl3FaUR0eGnVzQBbotkH1AVz4TD5V54yg%2BbNbLQFEt%2BRKGWIQhq%2BeU%2F2UmpvCi2rgJ0%2F45AwI%2BxHYNgBf8tnfGUeORHrYa452bInrQ2y4c7xt8hYx7daZamfv920eFuy&X-Amz-Signature=e125d5ea5e2e5b1a963fa970dc96c297cd432fc17c47c5479bdb60acaac24e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
