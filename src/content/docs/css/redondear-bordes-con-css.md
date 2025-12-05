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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4CQEBO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQWT3X6PTRQIcm9AmTZaSQRbeE5uBoPHHIc6OjL2dJvAiEAlmB0L92%2FxlAQVA%2BHMceWt6KT1jsvVtFZ3Lo1wpMqoWsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBrrhLYJ51Fmma%2FAwyrcA3ZAdjet3Mi2UVGVTSTjEZdJYqzqrSfjHciUbDKIyS2Q3c3FTVOkBqnWs%2FdkxA5YksereN1YeER7UskOH7yOyFWq7dOu0P6NXBZIyHj3DUg%2BVIYkExGBLd6LB%2FWdQRWpPf0nBj0vLak9zLCYxwvvZ5yAmj7gYaK4tXsZJTMAGXpVF46rtX18h%2B2catok6v6Jb%2FM7ZQPZb8p%2F1JgAlD6mli5faMlqL6csItC1pxJCESVEyiZvzU4EdASd%2FqhG4vWJE%2BXHbUlGMOne%2Baxlz1S8cmFntcot5q3KaYwNPGf7vABzCjvvciuMfQGnHLk8Bgxe%2FoKFngeWwNV2ckyTZOuvXN1KKy4rOWAsG1KcPPZTx9v0kUOJyvFu7oh4N1AGgpRNGyFelYwqOvZm8KxX6%2Fnle%2BQZIjBCNsbFyaJoH8d9%2FY1bLSeo4bem8cLD5ao4YMDdfJ30%2FPpa1L5G3XWC1wAolZ7177UpPqLtM%2Bl%2FS7tUn%2FGjQMOU%2FCOuDD96LhlMT3aB%2Fj7YOUrWHdDx0LOPm910%2FnNUOoPh7Oah0ULBaXmYCYaHT88ap%2B5%2BY1eOFZWrDdwsHjbEN4JwTKmIHUju%2FQDOI2WMzmsUgbOplm3fccFp%2FJvjM6BX0WdDx6jNXeIdMLHQyskGOqUBWXwOwglQyFT82%2BHNyY2s4DIBl2th8eVZmRyqU74YDKccP%2BqAvLMHlaUu2NTlVV5JF50K5mkVzLDWq66nyR%2FIt1Q%2BFYdF%2BF2sCFLlF992paXV6ghPRN5EM9hDygg8epnW%2B1ce1Q1Q%2B615qaWHUiy5ZPFQYnBvABhspevYHrEPyaU%2BuNpjxBNHjIcOkmZCAuKVcqxkh5iZZDQVGuxlzhXmoJbMzYzu&X-Amz-Signature=0ad721ebd1889b0383f38c6bf5f74d44358d713c45550e71033d6bc5a60f7940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4CQEBO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQWT3X6PTRQIcm9AmTZaSQRbeE5uBoPHHIc6OjL2dJvAiEAlmB0L92%2FxlAQVA%2BHMceWt6KT1jsvVtFZ3Lo1wpMqoWsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBrrhLYJ51Fmma%2FAwyrcA3ZAdjet3Mi2UVGVTSTjEZdJYqzqrSfjHciUbDKIyS2Q3c3FTVOkBqnWs%2FdkxA5YksereN1YeER7UskOH7yOyFWq7dOu0P6NXBZIyHj3DUg%2BVIYkExGBLd6LB%2FWdQRWpPf0nBj0vLak9zLCYxwvvZ5yAmj7gYaK4tXsZJTMAGXpVF46rtX18h%2B2catok6v6Jb%2FM7ZQPZb8p%2F1JgAlD6mli5faMlqL6csItC1pxJCESVEyiZvzU4EdASd%2FqhG4vWJE%2BXHbUlGMOne%2Baxlz1S8cmFntcot5q3KaYwNPGf7vABzCjvvciuMfQGnHLk8Bgxe%2FoKFngeWwNV2ckyTZOuvXN1KKy4rOWAsG1KcPPZTx9v0kUOJyvFu7oh4N1AGgpRNGyFelYwqOvZm8KxX6%2Fnle%2BQZIjBCNsbFyaJoH8d9%2FY1bLSeo4bem8cLD5ao4YMDdfJ30%2FPpa1L5G3XWC1wAolZ7177UpPqLtM%2Bl%2FS7tUn%2FGjQMOU%2FCOuDD96LhlMT3aB%2Fj7YOUrWHdDx0LOPm910%2FnNUOoPh7Oah0ULBaXmYCYaHT88ap%2B5%2BY1eOFZWrDdwsHjbEN4JwTKmIHUju%2FQDOI2WMzmsUgbOplm3fccFp%2FJvjM6BX0WdDx6jNXeIdMLHQyskGOqUBWXwOwglQyFT82%2BHNyY2s4DIBl2th8eVZmRyqU74YDKccP%2BqAvLMHlaUu2NTlVV5JF50K5mkVzLDWq66nyR%2FIt1Q%2BFYdF%2BF2sCFLlF992paXV6ghPRN5EM9hDygg8epnW%2B1ce1Q1Q%2B615qaWHUiy5ZPFQYnBvABhspevYHrEPyaU%2BuNpjxBNHjIcOkmZCAuKVcqxkh5iZZDQVGuxlzhXmoJbMzYzu&X-Amz-Signature=a1acddeee47f2e84331eaa93c159f1923cd6f8b380e49991d7fb1d1855d7988c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
