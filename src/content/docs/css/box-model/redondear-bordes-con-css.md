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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYABNIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHFGFgn9CQWaBPbr0%2BMc3Murffe6mSvh4OMZvzAkHBjAiEA2b2QjhqEINSfFJ9lsaHYwcdbGq9JVhdL13J0k4kNeVgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3QQmdK4UXSfffnrSrcA0TULBCmV9eLT%2Bep2eTQpIwhlaBCyic%2BYlzhWAOvcDT8T7Dfr9IV4CTE%2BYBEqIVMBsZpNvOUP5ipHsVWJMZ0yBIEzNI51L1%2FAoX9x75DCglkm5itGWMGPf8ruB34K1ToEjGIbBnH5%2FGknOt%2FLSmEdUB7A2PBRzVAXf15sdGc%2FnDXHu%2F5NKAR6i68QE3I37BqfjxyPgcYh65UUInXreNPTAV%2B5TQR98asoHyE8F%2Fi06BuwG22vytYRKrXU9%2BVPoKdhQ5H7mV%2BMewCNCUA8BrC8%2BFNL7myqrS56nCWfEPBRegHwFUjWv1wBDIpwxkuFzHPJ1XrSjiay2YjgaUbu01AOOdtc4ygpR5%2BymLavhKijsN0b1jQfsqWfBxRlRituZC17LqGgpj1P1Z%2BJxGvwgM7g7juPLxtvq1MoPeN8U86bIweJ7psgrUQrkl6HL5FN7hJw8GKoz%2FIXYTXiYFu2ammY2hCpt3VDsmIDeskklbb%2BlAp3NpCjhvcGZKv2yV86W0Q9bkwWV23GPOxxPHlHYBysDSq7xBytZkKP1UOoXM8nAhA%2Fa6chPq0Z5fj9OhMWR9qZF1a0la%2B%2BtT1YdbelidN%2FaZCn5OPjFPSxiFt%2B5OAOp4ZDivTYZO5su0b8s%2FvMKufi8oGOqUB8tXPnMHb2%2FOdz388kpNpBcDEweZYVrtuhiQPgBrNcNhurcn%2FMN77d%2BsLrmWhl%2FkA3PFEdP%2Bdr7J8rBi9iKpCy410Da2q%2BjSLRwi0hH1Rx1HLK1mYN82z6sTtFjWrgBZ%2BntrnEh%2B89wDRctPCZye%2BusL534SEf2kNJn0wj9KG8dVDvkdFmpm%2BWCfHGkYiZvaNE7LqOIlWdTqRCNFwtQ9lYqZ43v0p&X-Amz-Signature=28a49d5d89b504337b8297bba995dd51f5b0bce89794d38313fb7abcde9c26b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYABNIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHFGFgn9CQWaBPbr0%2BMc3Murffe6mSvh4OMZvzAkHBjAiEA2b2QjhqEINSfFJ9lsaHYwcdbGq9JVhdL13J0k4kNeVgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3QQmdK4UXSfffnrSrcA0TULBCmV9eLT%2Bep2eTQpIwhlaBCyic%2BYlzhWAOvcDT8T7Dfr9IV4CTE%2BYBEqIVMBsZpNvOUP5ipHsVWJMZ0yBIEzNI51L1%2FAoX9x75DCglkm5itGWMGPf8ruB34K1ToEjGIbBnH5%2FGknOt%2FLSmEdUB7A2PBRzVAXf15sdGc%2FnDXHu%2F5NKAR6i68QE3I37BqfjxyPgcYh65UUInXreNPTAV%2B5TQR98asoHyE8F%2Fi06BuwG22vytYRKrXU9%2BVPoKdhQ5H7mV%2BMewCNCUA8BrC8%2BFNL7myqrS56nCWfEPBRegHwFUjWv1wBDIpwxkuFzHPJ1XrSjiay2YjgaUbu01AOOdtc4ygpR5%2BymLavhKijsN0b1jQfsqWfBxRlRituZC17LqGgpj1P1Z%2BJxGvwgM7g7juPLxtvq1MoPeN8U86bIweJ7psgrUQrkl6HL5FN7hJw8GKoz%2FIXYTXiYFu2ammY2hCpt3VDsmIDeskklbb%2BlAp3NpCjhvcGZKv2yV86W0Q9bkwWV23GPOxxPHlHYBysDSq7xBytZkKP1UOoXM8nAhA%2Fa6chPq0Z5fj9OhMWR9qZF1a0la%2B%2BtT1YdbelidN%2FaZCn5OPjFPSxiFt%2B5OAOp4ZDivTYZO5su0b8s%2FvMKufi8oGOqUB8tXPnMHb2%2FOdz388kpNpBcDEweZYVrtuhiQPgBrNcNhurcn%2FMN77d%2BsLrmWhl%2FkA3PFEdP%2Bdr7J8rBi9iKpCy410Da2q%2BjSLRwi0hH1Rx1HLK1mYN82z6sTtFjWrgBZ%2BntrnEh%2B89wDRctPCZye%2BusL534SEf2kNJn0wj9KG8dVDvkdFmpm%2BWCfHGkYiZvaNE7LqOIlWdTqRCNFwtQ9lYqZ43v0p&X-Amz-Signature=31c08593a652e64a4277f6311e4b9cf0833d8807699123fb8d4e375e120811bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
