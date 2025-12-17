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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U26GRJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ta%2ByQvVuAcK3F2hrrK7r74w8Ol2d41x%2B%2F%2Bk%2FUbm5DgIgfJ38m8jTzrsaJOny7G7Hj%2FqbgUbfONM9gj7ZlvFmtVMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGixAc5Jg2miE299XircA4iz%2BabgtvzJCEqJncJetKNEw7hN79eaKVGOUGJ7MN5Lw6P1JYlhQzzfGgwqsmWfnmVD7gJ9VcG%2B1m6onhoTP1fIziYvD4QM4k962WWfyZcaZCp8EyrZ2p1eDna4LfPjvnns2L6iUsLwDhJNF5q4l8J%2FPDclNLS9VpJbiT6cTUCs1U%2BmhW1Z0QCv5Ui5PRreWfgT1C5X%2BPnhFu3lCi50OBhiW6QsmXzztAeBNP4nkxiaTztZVFWje9VC930Ms6uJHS0k4Z7rID6y1ecv92iSL2FRDvxZdpm%2Bdmn9U15H5K7fBwQT8%2FMCBj7%2BrNfPc0c0ItK%2F7SabIurUkdDe5BkDZfQbLp%2BE%2BOPOXMQgnrtCRVjJ86qoghjKAKvqfFr7BnLchBDfjGERLQ2o5D47zGexP5mf7AY0acmxy4egoof%2B6lgZ%2FEtL%2FCJpoE5V8mqlmJq7yqMuk2jG1MCwYmIgdiOjHjySsLfg2hYNZUfDBQI7vObFbWw8k07F7K3hihIh7CbcJqL4W3AEzcgHucMsLWW0a0HjE5E2DQoqStFld19a2oMd%2BsrBH5HM39BRd4n%2FSY1%2B%2FVcLGRSSvTBcYH06M9xxu4AGk8rg2jcLaM9M7vfZ6%2BaWCpbDzsSAey5fsQfJMLmWiMoGOqUBUSfLgaYQbCfVdRK6bvsFhzLRropQP8h%2BC4Bl6JAWyYQLd4US3yM0l5yzjtsPAO9lT2vGlWXGxBtfHRm6Ufha0DxXSSfa3YOAi1O%2FagSNR2JQicRSX92OSADZx7JJqb3DIIXG%2F05K71EoMZu9bb2Va8szz6Zk2IeJeJi63UiXzPBpQAZA8%2Fn9csKgUJaWv27jNrNMFNfhYRZ5keop19H4qG7m8D7r&X-Amz-Signature=8e2c6cfcbe3d35685b1e950162c01bd2d236ac312a82b9c411e6d96baee411c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U26GRJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Ta%2ByQvVuAcK3F2hrrK7r74w8Ol2d41x%2B%2F%2Bk%2FUbm5DgIgfJ38m8jTzrsaJOny7G7Hj%2FqbgUbfONM9gj7ZlvFmtVMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGixAc5Jg2miE299XircA4iz%2BabgtvzJCEqJncJetKNEw7hN79eaKVGOUGJ7MN5Lw6P1JYlhQzzfGgwqsmWfnmVD7gJ9VcG%2B1m6onhoTP1fIziYvD4QM4k962WWfyZcaZCp8EyrZ2p1eDna4LfPjvnns2L6iUsLwDhJNF5q4l8J%2FPDclNLS9VpJbiT6cTUCs1U%2BmhW1Z0QCv5Ui5PRreWfgT1C5X%2BPnhFu3lCi50OBhiW6QsmXzztAeBNP4nkxiaTztZVFWje9VC930Ms6uJHS0k4Z7rID6y1ecv92iSL2FRDvxZdpm%2Bdmn9U15H5K7fBwQT8%2FMCBj7%2BrNfPc0c0ItK%2F7SabIurUkdDe5BkDZfQbLp%2BE%2BOPOXMQgnrtCRVjJ86qoghjKAKvqfFr7BnLchBDfjGERLQ2o5D47zGexP5mf7AY0acmxy4egoof%2B6lgZ%2FEtL%2FCJpoE5V8mqlmJq7yqMuk2jG1MCwYmIgdiOjHjySsLfg2hYNZUfDBQI7vObFbWw8k07F7K3hihIh7CbcJqL4W3AEzcgHucMsLWW0a0HjE5E2DQoqStFld19a2oMd%2BsrBH5HM39BRd4n%2FSY1%2B%2FVcLGRSSvTBcYH06M9xxu4AGk8rg2jcLaM9M7vfZ6%2BaWCpbDzsSAey5fsQfJMLmWiMoGOqUBUSfLgaYQbCfVdRK6bvsFhzLRropQP8h%2BC4Bl6JAWyYQLd4US3yM0l5yzjtsPAO9lT2vGlWXGxBtfHRm6Ufha0DxXSSfa3YOAi1O%2FagSNR2JQicRSX92OSADZx7JJqb3DIIXG%2F05K71EoMZu9bb2Va8szz6Zk2IeJeJi63UiXzPBpQAZA8%2Fn9csKgUJaWv27jNrNMFNfhYRZ5keop19H4qG7m8D7r&X-Amz-Signature=a5bea25dde897a3f2b6183e60b51124b3f0ab8d047ce4a67c90443cf7e97e6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
