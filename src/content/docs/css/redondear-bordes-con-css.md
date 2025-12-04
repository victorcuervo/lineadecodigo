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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDP7EJ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCpZG31gf%2Fl9UejmlZ5HOu%2BAG8wsWFtEbpQ7cHew9lx%2FQIgSvF0CpGJz9pN98cgSO5CiSXjqQz4ixkZyVt4yPoxaLUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJpfL%2BEmhbofkCgpaircA9I4ZbIDtq0hWHvW3aGSlGVM1sNKSJeq8kE4xl4Lr764adEY1ymaLom0%2FRd6B%2B%2BEkLTiGzqK3i2YzL9baqyEXgXNq8ioOl1anOVyT19iKix%2BZzS%2BitOuCjar6ckXWMZgNzprXCbzdQyk5g45Q0tGzGS5R6%2Fm3jqxQp7p%2BLTeYi8iRAIvS%2FRpyE4%2BO%2FvctSh%2FdQVXKVLdnzPsCbzvOzbA4MuOxI%2FY8A5J46CFuToQwxrawfRwhPFg%2BkCf9sxpAg8m34p5sViSpVm7hxs8%2BCIIVaGSYD7H%2F8rgQWB7dFlzFbC%2BYfJorBfACA9cGX19ksv%2Ff57y44YCAJWBqVUT5wIG74MdhDY9tb98Wi7BgzvIn78SC8RvyyeJq%2F9F07xUlK8rQiHFz9o9At%2FgbLPupOMLLXwdOqSkX08xGj%2F8bhdaoZQZp88ytKgE%2FwynMboUy9l%2BmrzL2gVRTPgyjZucyxf1bDf%2Bov864xbAd1Nm8fS22zcXb1tSR%2FQ%2Btjlo8Z7R5ygny3Pl17t37ESzKLSfe57fNPq%2FxAehJE1eY%2Fdpdd2BOb8Q4KO4z9Vmr9cCC%2B9f8%2Fxitnfrfw9qdU9wN4mzw48UM8fNQ%2BCsIuOiLFJw44HdOk0%2FmcKG4Uf4kfsBeQV4MIiVw8kGOqUBvlALHHJkKJDPE3akWvONQzxnZMFxbggULIKgG%2BOOZl0yztJLwucZ7yUXO4YUqi8vJ7vnvKQajYq6O9Lc22Qm3k9RdyIvmbTqDPN%2F2fqy%2B8COCQ1bl5pu%2BfCxcgisToC57hKhoIHENtLH%2FSaO7xsKTrchMxpbw%2BzHB48mESGUozaWL9R8%2FikdRXbvirvbfe6aPVCGTwVseEpXexsofnfV%2FjmqgGry&X-Amz-Signature=9a065b225e780330c50dbfff6f769ff7786d92fd8c484605b7c8bde90f3f0fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDP7EJ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCpZG31gf%2Fl9UejmlZ5HOu%2BAG8wsWFtEbpQ7cHew9lx%2FQIgSvF0CpGJz9pN98cgSO5CiSXjqQz4ixkZyVt4yPoxaLUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJpfL%2BEmhbofkCgpaircA9I4ZbIDtq0hWHvW3aGSlGVM1sNKSJeq8kE4xl4Lr764adEY1ymaLom0%2FRd6B%2B%2BEkLTiGzqK3i2YzL9baqyEXgXNq8ioOl1anOVyT19iKix%2BZzS%2BitOuCjar6ckXWMZgNzprXCbzdQyk5g45Q0tGzGS5R6%2Fm3jqxQp7p%2BLTeYi8iRAIvS%2FRpyE4%2BO%2FvctSh%2FdQVXKVLdnzPsCbzvOzbA4MuOxI%2FY8A5J46CFuToQwxrawfRwhPFg%2BkCf9sxpAg8m34p5sViSpVm7hxs8%2BCIIVaGSYD7H%2F8rgQWB7dFlzFbC%2BYfJorBfACA9cGX19ksv%2Ff57y44YCAJWBqVUT5wIG74MdhDY9tb98Wi7BgzvIn78SC8RvyyeJq%2F9F07xUlK8rQiHFz9o9At%2FgbLPupOMLLXwdOqSkX08xGj%2F8bhdaoZQZp88ytKgE%2FwynMboUy9l%2BmrzL2gVRTPgyjZucyxf1bDf%2Bov864xbAd1Nm8fS22zcXb1tSR%2FQ%2Btjlo8Z7R5ygny3Pl17t37ESzKLSfe57fNPq%2FxAehJE1eY%2Fdpdd2BOb8Q4KO4z9Vmr9cCC%2B9f8%2Fxitnfrfw9qdU9wN4mzw48UM8fNQ%2BCsIuOiLFJw44HdOk0%2FmcKG4Uf4kfsBeQV4MIiVw8kGOqUBvlALHHJkKJDPE3akWvONQzxnZMFxbggULIKgG%2BOOZl0yztJLwucZ7yUXO4YUqi8vJ7vnvKQajYq6O9Lc22Qm3k9RdyIvmbTqDPN%2F2fqy%2B8COCQ1bl5pu%2BfCxcgisToC57hKhoIHENtLH%2FSaO7xsKTrchMxpbw%2BzHB48mESGUozaWL9R8%2FikdRXbvirvbfe6aPVCGTwVseEpXexsofnfV%2FjmqgGry&X-Amz-Signature=00c7c30c9ee9629ead1129d70e2f2070831789d174bf70f464b93e19d45c4154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
