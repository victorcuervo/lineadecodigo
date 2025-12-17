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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQBBY3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Fs3vXiSCr%2BadUubjkAnguqjPfgkUiym0m7OCxoqIOwIgVsjy4BeIvfjjS8FsaMxeB6RTH8bON6g4sAfzRBRD1mcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLD8AO%2BF3yIB%2FHpzzSrcA7SzPWL0ISsYc5pUql0N56WuZ%2BRnzKA7cxlZNbRJkUBGpZwpImB%2FaKd7nGeSo13dnAaN7YvaI8mTRwA4vyPs8LrKnFvVHE0euCuz6UUUsZY8Z%2BhGn2Ll%2BRTC50QoDv876z4yq%2BSVmm8xEakw8Vo8DXJxIMei1MApYfk7uvUgoX%2F4e%2FmNFrjI6YutM7yLW2zEHcxj3hwU8869lEMdphYoBePll0mzPPFt8rgU3PrAtNrvdPo%2FSMKs5h0flTgTVOi1P66TsOkW3ow4P6SKNXIilApCvAGeTwphaVSw%2Fumd8%2FA7kHjv5F2%2BqIYDzBhbS5aYyMCxh8%2FHri2O3yJ%2F%2BtlCe3lUwRxY2vwtKU%2BX%2F9DgIT7JVVbPfc95f48%2F4Y4tX0D%2Bk1WZ8WUgLi8J5udqhTOQt3P7KTnbsfqeZJhcb8Pe5NXd0aouKKLUYEtWtZRDQgWSdc7XARfFEPoyZIuNUlDxUP45msWhyCFB6HlwOUqlOS1cMMTekF%2FMv%2BtrFPm8ohx8BR8CZPLEEUpauuWsOjQnJ8m0GcsdKb3YtkfPQi9HwlOkl0o9ELirtoKiPUeC12Q%2FOrxOgzO%2BIS7fu2lxaTUpRRkcr0TZEsAzElELrdygTpg2qssQKHN%2FzB3cZELvMIeDicoGOqUBiFh650%2FQ1uk3jmFiVqTHBjcW2G9az%2FG3KGm98XyNIdWQb6fZHQ7SLq0omYOz6YUHYBJAS3VHEXy4%2BjQF%2F0YgJ30BOSwMQW3Mt6tSMqiCI7I7wo3oL2foF%2BWloO4XzE7Kg1hxMGmg5l8znGhnmZIZv1RHEmpINBxVaFZfjG7wTmjE%2BeMjMov7oIeq7h1P7iGYs6SOWRQMJ8zwRsBTuXunjNcRbeNT&X-Amz-Signature=6bcff5681daf8175c868d7ca0c47d4db4826e4d623fc4e7c2739685d394222ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQBBY3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Fs3vXiSCr%2BadUubjkAnguqjPfgkUiym0m7OCxoqIOwIgVsjy4BeIvfjjS8FsaMxeB6RTH8bON6g4sAfzRBRD1mcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLD8AO%2BF3yIB%2FHpzzSrcA7SzPWL0ISsYc5pUql0N56WuZ%2BRnzKA7cxlZNbRJkUBGpZwpImB%2FaKd7nGeSo13dnAaN7YvaI8mTRwA4vyPs8LrKnFvVHE0euCuz6UUUsZY8Z%2BhGn2Ll%2BRTC50QoDv876z4yq%2BSVmm8xEakw8Vo8DXJxIMei1MApYfk7uvUgoX%2F4e%2FmNFrjI6YutM7yLW2zEHcxj3hwU8869lEMdphYoBePll0mzPPFt8rgU3PrAtNrvdPo%2FSMKs5h0flTgTVOi1P66TsOkW3ow4P6SKNXIilApCvAGeTwphaVSw%2Fumd8%2FA7kHjv5F2%2BqIYDzBhbS5aYyMCxh8%2FHri2O3yJ%2F%2BtlCe3lUwRxY2vwtKU%2BX%2F9DgIT7JVVbPfc95f48%2F4Y4tX0D%2Bk1WZ8WUgLi8J5udqhTOQt3P7KTnbsfqeZJhcb8Pe5NXd0aouKKLUYEtWtZRDQgWSdc7XARfFEPoyZIuNUlDxUP45msWhyCFB6HlwOUqlOS1cMMTekF%2FMv%2BtrFPm8ohx8BR8CZPLEEUpauuWsOjQnJ8m0GcsdKb3YtkfPQi9HwlOkl0o9ELirtoKiPUeC12Q%2FOrxOgzO%2BIS7fu2lxaTUpRRkcr0TZEsAzElELrdygTpg2qssQKHN%2FzB3cZELvMIeDicoGOqUBiFh650%2FQ1uk3jmFiVqTHBjcW2G9az%2FG3KGm98XyNIdWQb6fZHQ7SLq0omYOz6YUHYBJAS3VHEXy4%2BjQF%2F0YgJ30BOSwMQW3Mt6tSMqiCI7I7wo3oL2foF%2BWloO4XzE7Kg1hxMGmg5l8znGhnmZIZv1RHEmpINBxVaFZfjG7wTmjE%2BeMjMov7oIeq7h1P7iGYs6SOWRQMJ8zwRsBTuXunjNcRbeNT&X-Amz-Signature=b98962c79136911fb8b3c7a18949cc60f5c378a04c1dcfa69e4b410269ef4a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
