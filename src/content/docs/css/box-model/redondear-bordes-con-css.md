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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MBDZGWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2Tz5BxyTdPg4ZfJ7WeWbXzX2HRU54WJrpe28nst5emAiEA1b76b4D3S%2F7x84DbAashKW2jLIAA0KASgcQCRLsOigcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDESTs94n8nJw75Eq%2ByrcA3VNUO5fW72%2BAWy04wjqLtEFL%2B5dl7IquDzyGR5%2FTB%2B6rM1K%2F7HrZGZo3%2FDDsGb4kQHSs%2FHZX0KSB%2FHe4vOSjUkwnPB2tVADaJWPFuNTKVtBrCjUHKmwqtRREwY4Xwk8CB937OX%2BwVX%2FbrVg4mBmi2MO9vNmjDLsSr9JenLNSEeizJeKJPkSD7iDCWLIWe4UWWfobBWsIZ5IsPQFGKmL%2FEw0S7i7Z1P0FA6HBQUPqv0U38WcRnNqVKqEYHSjjcZUXnmeWslP4e37%2B5fD1iCjmPQq9p7NDcmn6k%2FEGRVrQydQ%2Frjbxq3nmYnzmownVzQU%2F8ItiAHLMWkG3SipsUA%2BxBcJ9OvXsdPnTruQlkyeQZ3qIl2yKkkQa4EvGXXPrn3BYAPeWGEpgnEFxLirssZC%2FX%2FqCea0wIRsvSERHkH%2Btz7WpzA4cC1vGp2No0rWMPxOtHLxFzdZjHKGTtHasJHcMsvgM4%2BPcVNy9ROw%2Bd7xQu3S5KKi862eJiz9L455ZPaTuoTAd2F0TqN75EhkASR%2BgJqFt9EajnrNzCHglU7rwm%2BNEfC%2F2%2FmfWY0TAdDShHHs%2BNb1030D3FXLOWwioG2CHxn%2FK6CHMo5flopwqkspaT3nQK%2BBrT9T69FlSpzfMLf7h8oGOqUB6vmmqynZx2%2BV%2Bm27xMALUHV97En4pMHGyLhWry3Wb9GHYRk3e%2F7h8iMoKfYmhe9NaIpAqlfOSaJambNaJbeGl%2FeAnrMJ5RoQDpTeTUdPP3fqnVYU5YGOw3MdF73MbUfB%2FOEvjvNzdXEgDWikthIytsIwex2PS6L4biwk06gqS%2FitkOP1g8zMp3hiktEabEiicPLTVSAYy3nrfvXzMUU%2BHUMgUx74&X-Amz-Signature=80a426d3333d3acf1dd4bdce901b33708e8b424d993da32ef26caf852683c70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MBDZGWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2Tz5BxyTdPg4ZfJ7WeWbXzX2HRU54WJrpe28nst5emAiEA1b76b4D3S%2F7x84DbAashKW2jLIAA0KASgcQCRLsOigcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDESTs94n8nJw75Eq%2ByrcA3VNUO5fW72%2BAWy04wjqLtEFL%2B5dl7IquDzyGR5%2FTB%2B6rM1K%2F7HrZGZo3%2FDDsGb4kQHSs%2FHZX0KSB%2FHe4vOSjUkwnPB2tVADaJWPFuNTKVtBrCjUHKmwqtRREwY4Xwk8CB937OX%2BwVX%2FbrVg4mBmi2MO9vNmjDLsSr9JenLNSEeizJeKJPkSD7iDCWLIWe4UWWfobBWsIZ5IsPQFGKmL%2FEw0S7i7Z1P0FA6HBQUPqv0U38WcRnNqVKqEYHSjjcZUXnmeWslP4e37%2B5fD1iCjmPQq9p7NDcmn6k%2FEGRVrQydQ%2Frjbxq3nmYnzmownVzQU%2F8ItiAHLMWkG3SipsUA%2BxBcJ9OvXsdPnTruQlkyeQZ3qIl2yKkkQa4EvGXXPrn3BYAPeWGEpgnEFxLirssZC%2FX%2FqCea0wIRsvSERHkH%2Btz7WpzA4cC1vGp2No0rWMPxOtHLxFzdZjHKGTtHasJHcMsvgM4%2BPcVNy9ROw%2Bd7xQu3S5KKi862eJiz9L455ZPaTuoTAd2F0TqN75EhkASR%2BgJqFt9EajnrNzCHglU7rwm%2BNEfC%2F2%2FmfWY0TAdDShHHs%2BNb1030D3FXLOWwioG2CHxn%2FK6CHMo5flopwqkspaT3nQK%2BBrT9T69FlSpzfMLf7h8oGOqUB6vmmqynZx2%2BV%2Bm27xMALUHV97En4pMHGyLhWry3Wb9GHYRk3e%2F7h8iMoKfYmhe9NaIpAqlfOSaJambNaJbeGl%2FeAnrMJ5RoQDpTeTUdPP3fqnVYU5YGOw3MdF73MbUfB%2FOEvjvNzdXEgDWikthIytsIwex2PS6L4biwk06gqS%2FitkOP1g8zMp3hiktEabEiicPLTVSAYy3nrfvXzMUU%2BHUMgUx74&X-Amz-Signature=ff16f4bb742f6d775f810893dd2d20d4043aaadec1cfdb49c5aa49664a6230d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
