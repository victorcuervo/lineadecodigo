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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=e649a31f71ea02fcc07555b4d1597825c6380435f1cf11c231444513bfa43dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=8e37324b422bc54de420a9968adddd49fcd274336a2591849156a9b2a3e01d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
