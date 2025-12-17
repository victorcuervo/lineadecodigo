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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYZX6GG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqTD4oHDGlcnMik8jkMhvSUZ7BG78cTgUkNephbUpp4AiEAvXQMSbYEVFYRGI0BjgFGVuhhIAyNVh301i22uCj4ObEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDInG5DPIVd0Sc9bCJircA%2Bi8Qcjl8au2RS8Pv7%2BmC6u783IyzsTsMKsMqnbaC95a9dY86PkT2LxUviOEtc7el7WIXEEG7aBHshWUJLGrH7sKMPKEGSlHEgDpXjy2cjMSJD8XoNCQwLp60UPzEDbeBKy%2FZResbBKooUD5kSnoyPC6p0k2XZAhyAqBAhVbHL7nFkK7g8mD5n7qdmbs7suQu6ZkC1ibct3VnR%2Bf99hkhTKqP%2BOb0q%2FtlAwL7IRTUttKyyZ23aeHBPSq5tNDhRgC246iPi2XsyAfO49Mb2o4RnnH3dxe75H8FtJ3u%2BK98auUuJB16i06reK21nbExhCEFuVNBpL1s09dfHnjYH6N%2Bnoi6tvZd4m1ueglVMhFubNeNQtycN%2FOiQYZvr9ENtsAZycbXh%2BQcJhP%2BsAuAfQYXtoH7MbP99hJlbfbW%2F2kRlywwHpscn42CtF7kDX1NmW78QY5go3Q8Q4vtu7YucYGVC1TrhCdzWsR2V4zvP%2BEc5iS8RlkW1QJFHbcSvW7S%2FbGO6%2FaVa10dOE%2B4vR4eBLN9nLB7PqlCcw3vkElHtdkbL7rW0uWGv44cS3ID8tjIlDCfW3vnavBXNHLNHyqMDv8mjNOaVhLbbqJDTxocB9JDQnC1EA915%2FCroWuwYBGMNCdicoGOqUByRBEDaHz59pXJh1LLLbsqj5qs52U4OBsmW%2F5W5wA9uu1KrR2d544ebTixnXh9QbW0oeQvPD1GTd4M2S1D7cIrGiwMin2qErEj8z6DRge8S9lmA9Wzmr379DHv5ydVll%2BWTB53Y1dw%2B7Uid9GsrbjuXz7cIAEcZaIXvyh9NIPux0dculBh4P2%2F9O7OnWnWHpsRg4dkjIxRUXyu4f1PGeQqNWWw1Ps&X-Amz-Signature=16989606e161e04910998f98af5492b644b844653cd2dc30fa2c64b84ab7a523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYZX6GG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqTD4oHDGlcnMik8jkMhvSUZ7BG78cTgUkNephbUpp4AiEAvXQMSbYEVFYRGI0BjgFGVuhhIAyNVh301i22uCj4ObEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDInG5DPIVd0Sc9bCJircA%2Bi8Qcjl8au2RS8Pv7%2BmC6u783IyzsTsMKsMqnbaC95a9dY86PkT2LxUviOEtc7el7WIXEEG7aBHshWUJLGrH7sKMPKEGSlHEgDpXjy2cjMSJD8XoNCQwLp60UPzEDbeBKy%2FZResbBKooUD5kSnoyPC6p0k2XZAhyAqBAhVbHL7nFkK7g8mD5n7qdmbs7suQu6ZkC1ibct3VnR%2Bf99hkhTKqP%2BOb0q%2FtlAwL7IRTUttKyyZ23aeHBPSq5tNDhRgC246iPi2XsyAfO49Mb2o4RnnH3dxe75H8FtJ3u%2BK98auUuJB16i06reK21nbExhCEFuVNBpL1s09dfHnjYH6N%2Bnoi6tvZd4m1ueglVMhFubNeNQtycN%2FOiQYZvr9ENtsAZycbXh%2BQcJhP%2BsAuAfQYXtoH7MbP99hJlbfbW%2F2kRlywwHpscn42CtF7kDX1NmW78QY5go3Q8Q4vtu7YucYGVC1TrhCdzWsR2V4zvP%2BEc5iS8RlkW1QJFHbcSvW7S%2FbGO6%2FaVa10dOE%2B4vR4eBLN9nLB7PqlCcw3vkElHtdkbL7rW0uWGv44cS3ID8tjIlDCfW3vnavBXNHLNHyqMDv8mjNOaVhLbbqJDTxocB9JDQnC1EA915%2FCroWuwYBGMNCdicoGOqUByRBEDaHz59pXJh1LLLbsqj5qs52U4OBsmW%2F5W5wA9uu1KrR2d544ebTixnXh9QbW0oeQvPD1GTd4M2S1D7cIrGiwMin2qErEj8z6DRge8S9lmA9Wzmr379DHv5ydVll%2BWTB53Y1dw%2B7Uid9GsrbjuXz7cIAEcZaIXvyh9NIPux0dculBh4P2%2F9O7OnWnWHpsRg4dkjIxRUXyu4f1PGeQqNWWw1Ps&X-Amz-Signature=5bb02a69701c27a40644476df38efecfe29b54cb4d60779606c958e06e8f5052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
