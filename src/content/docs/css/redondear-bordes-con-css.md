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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSASXDM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNUy%2F8fC5kh%2B3C9qLKvUCSsn8VxDGxVqFXCZa3%2Fos%2F9AiEA3wwfZXjPA7dcylZMdE06AiVaIklFKuErDFyy6QoRiGMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIruECIsI5mSEqkwdircA129SDNwsueRKDXkYmYAjnUuuannwegBDfsnwpaIpddHhx8Dqn8bMPuNSs4sCpmpmTgU5FG4Lx6DKOYbP2tTgrQ39FY7bOL%2FBtD688wseSySx5H7l%2Fe7%2FPbDmbpbW9WqJ%2B4iN6bM5kknHkjlQSKoTwXdyJ4DVvhSCWPovC4O2mrca8HIBt47ltrzitlgsOBK70IOQZ0Z%2FrnAYa%2Fmhv8OX9qqYZdfsPVLveFV3cldE36W6GRVyUT528%2BoDZPrCbMuRxV1jPJEWcM6yFc6OrxuMu5AgWJeNw01T%2FrD1TMxNloLwZ6sB0B1V4IfiHNd854%2B29jt%2BEd4a09JnK5iaV%2FJSGthioy2nr837lPZS7eeC89qwk9cO0PafdOPwZ8Fd8g3c%2BXvAGyTPeqpJ3GbuHvEhzdHp%2BGMe8%2F0VRa1l0RRFewqvvwEng3lygR%2FQczG3Xb4OCNVMrK7DxcCUDw0Hkr%2FwctS%2FiglSh3dkjXRfm0vOaxPXU6LK3t%2FvAGL4V1fIf2iRs8ndvH%2F81MJ7QwfwczeDeuNdbMOExStN5qpQU1IDWKUHR8%2FsqXppbYVVb26pkVOdrEDS%2F5sn83cMPdUVQBxbs%2F24yLOH2YVpPmLycVES%2F58Ct8cKhqqbbryoPuBMJjI18kGOqUB%2Fh9qfH3z6nMAKpNn2w5C1AfAPx2m9oDvC7JTW2C1ZPZB6yF%2FW4PSxJU4RpIHaD371mfHG%2FGPVqTSEDzU%2F1tpbdIa%2BAyAXlBYs%2F2V1ah4d5axNXb1u5a44oPowF9MpG5REU%2Fk%2Fa%2Ba4Tw6GAIeKqNbFt9fJJkNbQjz1NdE0qB%2Bor%2BNb%2BMAZPJxtOWOPVOAlVvZ0FdCQjTtSer4XTuMoY6VKiwE9Exb&X-Amz-Signature=b88d6c15be8a65f3fee5ad656932644b834990b4d3aa6e631cf82de7f97b223a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSASXDM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNUy%2F8fC5kh%2B3C9qLKvUCSsn8VxDGxVqFXCZa3%2Fos%2F9AiEA3wwfZXjPA7dcylZMdE06AiVaIklFKuErDFyy6QoRiGMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIruECIsI5mSEqkwdircA129SDNwsueRKDXkYmYAjnUuuannwegBDfsnwpaIpddHhx8Dqn8bMPuNSs4sCpmpmTgU5FG4Lx6DKOYbP2tTgrQ39FY7bOL%2FBtD688wseSySx5H7l%2Fe7%2FPbDmbpbW9WqJ%2B4iN6bM5kknHkjlQSKoTwXdyJ4DVvhSCWPovC4O2mrca8HIBt47ltrzitlgsOBK70IOQZ0Z%2FrnAYa%2Fmhv8OX9qqYZdfsPVLveFV3cldE36W6GRVyUT528%2BoDZPrCbMuRxV1jPJEWcM6yFc6OrxuMu5AgWJeNw01T%2FrD1TMxNloLwZ6sB0B1V4IfiHNd854%2B29jt%2BEd4a09JnK5iaV%2FJSGthioy2nr837lPZS7eeC89qwk9cO0PafdOPwZ8Fd8g3c%2BXvAGyTPeqpJ3GbuHvEhzdHp%2BGMe8%2F0VRa1l0RRFewqvvwEng3lygR%2FQczG3Xb4OCNVMrK7DxcCUDw0Hkr%2FwctS%2FiglSh3dkjXRfm0vOaxPXU6LK3t%2FvAGL4V1fIf2iRs8ndvH%2F81MJ7QwfwczeDeuNdbMOExStN5qpQU1IDWKUHR8%2FsqXppbYVVb26pkVOdrEDS%2F5sn83cMPdUVQBxbs%2F24yLOH2YVpPmLycVES%2F58Ct8cKhqqbbryoPuBMJjI18kGOqUB%2Fh9qfH3z6nMAKpNn2w5C1AfAPx2m9oDvC7JTW2C1ZPZB6yF%2FW4PSxJU4RpIHaD371mfHG%2FGPVqTSEDzU%2F1tpbdIa%2BAyAXlBYs%2F2V1ah4d5axNXb1u5a44oPowF9MpG5REU%2Fk%2Fa%2Ba4Tw6GAIeKqNbFt9fJJkNbQjz1NdE0qB%2Bor%2BNb%2BMAZPJxtOWOPVOAlVvZ0FdCQjTtSer4XTuMoY6VKiwE9Exb&X-Amz-Signature=39b46baeebb4da6743e2874b6258815664fe0bd00973e71c8a15386238c8328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
