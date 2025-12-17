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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU55GTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfRona170E8uOptuIdTTnWvyanwbgxDSNufGDVOzUtiAiEA2mXmuKIGks6icVJFMy3osnZzUSfOTluNyh5NNucyxPYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqjzfchK25MVk18%2BCrcA7eSKzRkCur8vM04dLu3zkRPl1GtZaJWrofb%2FbYqKPgWSxsEIrwL7ZhMx6xHn3rwv8WKBieM6JflRnURERvupeRX1090aMhzcLW8NoSFvKJcEMYBo8wmOjxjpsgupNC7SSplpzSJop2QlcYh8%2B9U8pjIMkWhzl2epgC9Nc2Ly7m5ArvefPRpf%2B58Rwl12yejGkzuT%2Biddm%2BbY3eh4LwnKgnpKxB%2Fnv%2F5kYxAnffNoGCU0OWAD17HUQ1AwoBjzcR4K1pdBLyqE2fJrNiSNnl2YkY50BwxplA4PsEKJIj2pkucHvysxIlEcQSOb2xMzXHfPxN5oboB30k6e8oyF1kZAkEqKFyn%2F%2B7jnYNld%2BWPsOyFpO9EI5CFdjimnuw7o%2FzPNXQMvCbBtLFvc%2F7YA%2BGD1VT1rVrPmszn2XefegEhxVPWxPy8DeSe1oCx2kFZkucBG9bCys4g5nLjI4espvu0i%2Bc4UGwme8ctIrVZr4NwUycQ05Pimcwv08Q6M8q1PZKNDw8LTH%2FR4z9ybRA6cPb7vv1%2Foupi4A65rcSDin7hPdiAMt4EHcCwfNAbOtkFPazXdWGO4PsLHJJHe9cktjl2FhJnHlHCSZr3MigA1bp%2B0RoC7Hm3N25979OIdLrGMIWAi8oGOqUBhXWk59AXNcY%2BLC7MgYoRnQAvtxKNXWN9vjTs3Q3c7XGvS05guAw%2FU4YXEhxvGRIyFb0fZXM466Oe4%2BF8JZW9z0x5r%2FQZOmion4HDQxUIgdFDaxGVJHnxTzwIhww1TX2iHOwBclTTuuJphADKxotvXvIefiZocS85eOv0KqHQrmwJSrcv2B7buyxYIY%2BWUQJoynLLC3cxD%2FE1gY84U%2FTON%2BkW05uk&X-Amz-Signature=be073340ff86719890713ffc0246fd6ec12a8129e1a54a6410eab7c048728a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU55GTA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfRona170E8uOptuIdTTnWvyanwbgxDSNufGDVOzUtiAiEA2mXmuKIGks6icVJFMy3osnZzUSfOTluNyh5NNucyxPYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqjzfchK25MVk18%2BCrcA7eSKzRkCur8vM04dLu3zkRPl1GtZaJWrofb%2FbYqKPgWSxsEIrwL7ZhMx6xHn3rwv8WKBieM6JflRnURERvupeRX1090aMhzcLW8NoSFvKJcEMYBo8wmOjxjpsgupNC7SSplpzSJop2QlcYh8%2B9U8pjIMkWhzl2epgC9Nc2Ly7m5ArvefPRpf%2B58Rwl12yejGkzuT%2Biddm%2BbY3eh4LwnKgnpKxB%2Fnv%2F5kYxAnffNoGCU0OWAD17HUQ1AwoBjzcR4K1pdBLyqE2fJrNiSNnl2YkY50BwxplA4PsEKJIj2pkucHvysxIlEcQSOb2xMzXHfPxN5oboB30k6e8oyF1kZAkEqKFyn%2F%2B7jnYNld%2BWPsOyFpO9EI5CFdjimnuw7o%2FzPNXQMvCbBtLFvc%2F7YA%2BGD1VT1rVrPmszn2XefegEhxVPWxPy8DeSe1oCx2kFZkucBG9bCys4g5nLjI4espvu0i%2Bc4UGwme8ctIrVZr4NwUycQ05Pimcwv08Q6M8q1PZKNDw8LTH%2FR4z9ybRA6cPb7vv1%2Foupi4A65rcSDin7hPdiAMt4EHcCwfNAbOtkFPazXdWGO4PsLHJJHe9cktjl2FhJnHlHCSZr3MigA1bp%2B0RoC7Hm3N25979OIdLrGMIWAi8oGOqUBhXWk59AXNcY%2BLC7MgYoRnQAvtxKNXWN9vjTs3Q3c7XGvS05guAw%2FU4YXEhxvGRIyFb0fZXM466Oe4%2BF8JZW9z0x5r%2FQZOmion4HDQxUIgdFDaxGVJHnxTzwIhww1TX2iHOwBclTTuuJphADKxotvXvIefiZocS85eOv0KqHQrmwJSrcv2B7buyxYIY%2BWUQJoynLLC3cxD%2FE1gY84U%2FTON%2BkW05uk&X-Amz-Signature=9174e4a121252120f79d7ce8a893445849a2d62f696ac394b0101eb3a2fa4287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
