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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BR46Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FvCRULD71A9%2BkGT7s9%2BOS5z9Db9WvPRGJ%2BqRteu22WwIgIN51ZL7rFYojI1QSVE8oRJA4yuNmWCoqc%2FckNrtJCuoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVmhdIH8MP7H1cwYircA%2BGrKurhulEzXoiC06mW6gKK0tKXSnUEkfwhQzD8Yw0me%2FNbkUrvXJyiBy%2Fms1L%2BS74G6Vezl6Kzr%2FjFEhwwm24iHY9zQg02NfbNTLqhuULVEh%2BBCEqqEQnAn4hOp8w8cF5Hr%2BL9CeddBjItVUiLxxmpu1iR7ijGW6eXXPd%2Bc4CKdgeoURyUROi%2FT%2Ff%2BdTuW1fAjwdtYnrMey3iM0zIXh%2FsJAGtpuFWVZgOWwUlIGM2EFwkpZpAt0%2FI07PP1vjqrmQXuRmdLybC2RL0H%2BIID5Ivy1vPa0mFbLl1HTfQTbKn%2F2%2FAYme2kC5jwmsJEPsBIgEi3b6iAAgBGOz6XYTl%2Ba3DVS%2BSCovHMF8NrtmM6%2BJnCAj7oByarioHT0PQt0%2BpW1l9msGmMWyd%2FmoSLDR7stt69Ld1DyCVL2R9mm6XPvSGD1xI7Ix5JHDhvZ2m0%2BZVguNOKWnFOaDYMp6u%2BmoQNNCxlUbJib%2BLjVzbBNZ8zPhfcj4OuCuTCh3ZL5VxZ8%2FPxr%2FkcgFAtCdZ5UuygpYra%2Fr4Vszl0ZIzAwvunpAi5nCEMiKgKn2n5Khtj12rwuMohagGRdiSjcQikjKvO1FztZlIXvnTzxsAMsSCwFjkkUNZurkz673nAwW4e2835MPHhisoGOqUBG7Tr1559%2Ft6LY9tIBOFyhmJDb9D4aSsdMsptJ%2BpwZn7nVzyM5hDcQ6J3zx%2FE1To7TQ0Y%2FXpXxXb4HEw2PmsYiI2AEM%2FbFo3aZK9GLEoK6n47bA5BAcWyeOtOUrC5%2FMvUdbNrJZEfT6vhj3QBNlMLLDMZ%2BQtFOq%2FxslWz9WF6L%2F9tTmEfsyINM8Z69oDNYTeIZv2yUMUCh0iQgQByR7Kx5pYKxE2B&X-Amz-Signature=4e6d2f525daee9fd3fe721a811eda32c960b4ac51a2fb73eb75da6a56d67bb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BR46Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FvCRULD71A9%2BkGT7s9%2BOS5z9Db9WvPRGJ%2BqRteu22WwIgIN51ZL7rFYojI1QSVE8oRJA4yuNmWCoqc%2FckNrtJCuoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVmhdIH8MP7H1cwYircA%2BGrKurhulEzXoiC06mW6gKK0tKXSnUEkfwhQzD8Yw0me%2FNbkUrvXJyiBy%2Fms1L%2BS74G6Vezl6Kzr%2FjFEhwwm24iHY9zQg02NfbNTLqhuULVEh%2BBCEqqEQnAn4hOp8w8cF5Hr%2BL9CeddBjItVUiLxxmpu1iR7ijGW6eXXPd%2Bc4CKdgeoURyUROi%2FT%2Ff%2BdTuW1fAjwdtYnrMey3iM0zIXh%2FsJAGtpuFWVZgOWwUlIGM2EFwkpZpAt0%2FI07PP1vjqrmQXuRmdLybC2RL0H%2BIID5Ivy1vPa0mFbLl1HTfQTbKn%2F2%2FAYme2kC5jwmsJEPsBIgEi3b6iAAgBGOz6XYTl%2Ba3DVS%2BSCovHMF8NrtmM6%2BJnCAj7oByarioHT0PQt0%2BpW1l9msGmMWyd%2FmoSLDR7stt69Ld1DyCVL2R9mm6XPvSGD1xI7Ix5JHDhvZ2m0%2BZVguNOKWnFOaDYMp6u%2BmoQNNCxlUbJib%2BLjVzbBNZ8zPhfcj4OuCuTCh3ZL5VxZ8%2FPxr%2FkcgFAtCdZ5UuygpYra%2Fr4Vszl0ZIzAwvunpAi5nCEMiKgKn2n5Khtj12rwuMohagGRdiSjcQikjKvO1FztZlIXvnTzxsAMsSCwFjkkUNZurkz673nAwW4e2835MPHhisoGOqUBG7Tr1559%2Ft6LY9tIBOFyhmJDb9D4aSsdMsptJ%2BpwZn7nVzyM5hDcQ6J3zx%2FE1To7TQ0Y%2FXpXxXb4HEw2PmsYiI2AEM%2FbFo3aZK9GLEoK6n47bA5BAcWyeOtOUrC5%2FMvUdbNrJZEfT6vhj3QBNlMLLDMZ%2BQtFOq%2FxslWz9WF6L%2F9tTmEfsyINM8Z69oDNYTeIZv2yUMUCh0iQgQByR7Kx5pYKxE2B&X-Amz-Signature=9dfe8383db454441872933fc902cde1ab1cb9612c50e0267396c2dd57b815148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
