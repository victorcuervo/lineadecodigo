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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQ3X47Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNwDOnfkU3Fte3albwfn6XwPDbDGBpagjhsvUBGWBDnAiEA5X%2BhTe02jGCMxpbn%2FXOuby35QGQsKIa9ypDz%2FZJwGT0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP%2BsDg0ixrqMML0OECrcA3OoY7oShLD3aVTkSZPUDHop4FQ87pWseyIxHYDGO%2FG6YWu1SzBhygxY%2BGXuGRxGT4VyPR0msvhOZjwsC93RuTQpMP9Pdu%2FNoZZpdgY7QCzzgk3HQzzQjAwFyK8HxqH9FGhm%2FiC1sNnb61uekw58i%2FjGWHAck0u4tECXeldF0hKruJ5SeRe2k3bqp%2BIqXdvwACNAYPzPjsMB54WO%2B1gAXPB64ehcElNSs5TFAsHizM7oApPVuS%2F0a%2Fjv0GMUX7yS%2B9Y2NFSy5H9skdOC%2BRexNMMSm8oDic%2FgA%2FJmUnOOhEARdAcs9T75%2FadgeOb%2FOaFKt1uJIsIB04Aku0hlOUD3du52KASHcKj%2F34DlUw%2F3XSw0kWd64xxyyttDEwrULAEaTSNkCfHq3pGmbof%2FMMqhALhyGnHNWOiF%2BGI085WcsU154y%2FvgP8d24i%2BkSkztmX8gK3jtHDlihxJDF9PGiOu53pOIqd7RwmyKsrjtN2ejg0wYVBaKUIGbWG4I%2Fwnfue0QOM95atkxkNfVZIyDC7I6irw%2BGIdCLoQLMdsI6G8wexv2BO6c%2FFjMlV2agfch8rU9mSktgCJrHUVaPmZJWfLq8d545IirldNpLxDGvoPurqluLE3pEgseSmzBclHMP%2BqisoGOqUBwTIsAaLxtl7yioZJhfQ1ebNzvuPcF2BDCzCyueUCJCntL%2FbE86wdiFHphu2evR6977PQEXEvLXzI69EmtuUR4hMlZAf05zLzdjGbK2RkaDnGc6GBj1gNFcTCicPfM1ER31AP%2BV9wnX%2BCyNbToCsaWq7tU4tpV7E9jALMxRXqxZfVQOE7QcuJmsQzG5qwRwg5XamgrBbclmteEHLzwwX2XCZS6V4g&X-Amz-Signature=93a1aa551c48e961f4d75161ba908f150181d9b8cfd19d77388811fe7c9b88bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQ3X47Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNwDOnfkU3Fte3albwfn6XwPDbDGBpagjhsvUBGWBDnAiEA5X%2BhTe02jGCMxpbn%2FXOuby35QGQsKIa9ypDz%2FZJwGT0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP%2BsDg0ixrqMML0OECrcA3OoY7oShLD3aVTkSZPUDHop4FQ87pWseyIxHYDGO%2FG6YWu1SzBhygxY%2BGXuGRxGT4VyPR0msvhOZjwsC93RuTQpMP9Pdu%2FNoZZpdgY7QCzzgk3HQzzQjAwFyK8HxqH9FGhm%2FiC1sNnb61uekw58i%2FjGWHAck0u4tECXeldF0hKruJ5SeRe2k3bqp%2BIqXdvwACNAYPzPjsMB54WO%2B1gAXPB64ehcElNSs5TFAsHizM7oApPVuS%2F0a%2Fjv0GMUX7yS%2B9Y2NFSy5H9skdOC%2BRexNMMSm8oDic%2FgA%2FJmUnOOhEARdAcs9T75%2FadgeOb%2FOaFKt1uJIsIB04Aku0hlOUD3du52KASHcKj%2F34DlUw%2F3XSw0kWd64xxyyttDEwrULAEaTSNkCfHq3pGmbof%2FMMqhALhyGnHNWOiF%2BGI085WcsU154y%2FvgP8d24i%2BkSkztmX8gK3jtHDlihxJDF9PGiOu53pOIqd7RwmyKsrjtN2ejg0wYVBaKUIGbWG4I%2Fwnfue0QOM95atkxkNfVZIyDC7I6irw%2BGIdCLoQLMdsI6G8wexv2BO6c%2FFjMlV2agfch8rU9mSktgCJrHUVaPmZJWfLq8d545IirldNpLxDGvoPurqluLE3pEgseSmzBclHMP%2BqisoGOqUBwTIsAaLxtl7yioZJhfQ1ebNzvuPcF2BDCzCyueUCJCntL%2FbE86wdiFHphu2evR6977PQEXEvLXzI69EmtuUR4hMlZAf05zLzdjGbK2RkaDnGc6GBj1gNFcTCicPfM1ER31AP%2BV9wnX%2BCyNbToCsaWq7tU4tpV7E9jALMxRXqxZfVQOE7QcuJmsQzG5qwRwg5XamgrBbclmteEHLzwwX2XCZS6V4g&X-Amz-Signature=13e17925e4b9a9cd6bbb02dbf58adca8de2b562f036fb99d72d6b157d2ff7576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
