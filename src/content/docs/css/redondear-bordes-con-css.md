---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4BM35I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAwypz0UqklKAm%2F9tVOUTkRYjwuhRI1pyRlQsdMk1RjaAiEA9RSND8c87biqEUItYqEkrkkKVFho3xYYO0mZWxPUFxUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBZ1zxYhZ9u6Mb2TiCrcAxNsRtoTqMmGFpTFkbpV4uoz2LuJLgXNRLVqd2m17pLciku8600vrq6aun2YcfIlIE%2FdwEOApMnYgqeTgAiYVUJcaG2aQvbjolA2NGKRd5tipmGUHVM1R5piHbzzrtTrNeuiIbmPasZs85smrv91CuAl86bxcaZ6QAUqU%2BMYSMz8rTwIOfZekSiZ5ENGZVLgWwzR1KyV7NIU1U7PnHlKwKUttRjGVRv%2BaA9Q1mGADR3MgE5KWoJ0cFHDklsm3BWWIoromCmhF1qskLs4kb9K%2BV4JBgGiWoKIIX8Mq%2BQii6ouZZZz13aBPoi6oNJak13beCmue%2FCw4xCaakkVqvmXzMS5J2FQdZYeG6vtp%2Bmh6dzOFmmWcwQsxndr59FY65pAgovkvimhpAxi1MeydPESit29px3ugE%2B%2BMqlGs%2BehVhhYZ%2BPMS7R5uum4HYp6VSjVtPTpM46NJEJ426bYc95kpxXSiXHW%2BiN2zBb6gVBf4COIErPV4VtRG2vbJN7k2ZfYqus4PWZ%2FO%2Bo3RMlN03s30zycYOSUF8%2Br1po14uZKVAUV4%2BGFd4RPRNJUj9aWE5Xx7HwIYJVSoN9tsi%2FFalE86n52e2XYfChlDbzBRGXe934MvNuqmHuqCy8OGuGyMMf3wskGOqUBm6bBBhX8a00dffUbE0x%2FUclfyhvDpTfd8roQOgWNcELIxEq3%2BhCxcukacWXL1H8q4So2ICIdnNVpDg58z48RBlyReEW%2B5n9knuJEg9%2FUu%2F4fTHuA9JUWsBjueGDIC77Ougkl5VMm7L6lGSNyOOFfKZklx%2FrPX7%2B06dD4RnfC%2BdZFrDAuKMWGHT3DSRBHXhziLWw%2BwQZJtZmEeZL33F4niCdBizRg&X-Amz-Signature=b17201cd26add785aba19521ea8ececf67329cbe08028bcdbdeda4ef98ab9f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4BM35I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAwypz0UqklKAm%2F9tVOUTkRYjwuhRI1pyRlQsdMk1RjaAiEA9RSND8c87biqEUItYqEkrkkKVFho3xYYO0mZWxPUFxUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBZ1zxYhZ9u6Mb2TiCrcAxNsRtoTqMmGFpTFkbpV4uoz2LuJLgXNRLVqd2m17pLciku8600vrq6aun2YcfIlIE%2FdwEOApMnYgqeTgAiYVUJcaG2aQvbjolA2NGKRd5tipmGUHVM1R5piHbzzrtTrNeuiIbmPasZs85smrv91CuAl86bxcaZ6QAUqU%2BMYSMz8rTwIOfZekSiZ5ENGZVLgWwzR1KyV7NIU1U7PnHlKwKUttRjGVRv%2BaA9Q1mGADR3MgE5KWoJ0cFHDklsm3BWWIoromCmhF1qskLs4kb9K%2BV4JBgGiWoKIIX8Mq%2BQii6ouZZZz13aBPoi6oNJak13beCmue%2FCw4xCaakkVqvmXzMS5J2FQdZYeG6vtp%2Bmh6dzOFmmWcwQsxndr59FY65pAgovkvimhpAxi1MeydPESit29px3ugE%2B%2BMqlGs%2BehVhhYZ%2BPMS7R5uum4HYp6VSjVtPTpM46NJEJ426bYc95kpxXSiXHW%2BiN2zBb6gVBf4COIErPV4VtRG2vbJN7k2ZfYqus4PWZ%2FO%2Bo3RMlN03s30zycYOSUF8%2Br1po14uZKVAUV4%2BGFd4RPRNJUj9aWE5Xx7HwIYJVSoN9tsi%2FFalE86n52e2XYfChlDbzBRGXe934MvNuqmHuqCy8OGuGyMMf3wskGOqUBm6bBBhX8a00dffUbE0x%2FUclfyhvDpTfd8roQOgWNcELIxEq3%2BhCxcukacWXL1H8q4So2ICIdnNVpDg58z48RBlyReEW%2B5n9knuJEg9%2FUu%2F4fTHuA9JUWsBjueGDIC77Ougkl5VMm7L6lGSNyOOFfKZklx%2FrPX7%2B06dD4RnfC%2BdZFrDAuKMWGHT3DSRBHXhziLWw%2BwQZJtZmEeZL33F4niCdBizRg&X-Amz-Signature=e58050d6348626363165508596296bd522972b6bd928d154e66f9a8ea0d257a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
