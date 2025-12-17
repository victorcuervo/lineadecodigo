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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZCNFV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpz2oC3djdXlAxEfuhVQ%2BM6ID8CI87BVuA2hpdsam9wAiA4bYAjPyJwPJkvJ7OZNnZdHa9a5noiWqgU1tB1DWyAxSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMbiTO4bhBYQxa3aD4KtwDrNRGIt%2BQGkuWWxPxFw15op6%2BjczLixYgQ1aRIPXiop57fHrhvKoiswvDeGqWJiaX4pqR1DiYJCfILQ37X1hj41acXJA2CUe7T%2FzGGA2yLCQnppGV1AtLkXnzzHjXZv7WOgR6KKjLoSCdUZ5oT1uSESVQRg%2FfPlYre6kN93sJu6oSuqRHpFa%2B8VvvaPPEwdOEO9BWukS3pYXGIilRYpKl%2F7lJqPsNaNPSzR5%2BKaKqf8YUp7VxGbkTE8YLqk7DhBGLxtoEYKTb9ToDmVA6DtbKqDDAWj4Bp3Klnv8WX9QBzP2VE%2B4M981rlPu46f1iASOkGE57QelfeEm5UBO%2FwqdF3B%2Bi45Nfva%2FYd6jY7%2Bz6Q7UB80OpLsE1BZznWJRKBG34xtLF%2B1clGkXMN6QPVwHm%2BujwyYCykHBk%2FRwAV1k7o5lXt7xlQS%2FTJYIfS%2BI72oY%2BXMvj5XeZCEW%2BXmvjEr5xm5T4vcnZVcR2yoNwYWpVraU5C2LrwPH9%2B1d45FnSVgHgPaFCJlf2AQCHX7a4CmMADW2iEieYlYoSwcmSRIBMUY98MUQQAfGDRrNFf4Q5lrWD%2BkNKuRoJ6wB8tOipIEOU72oJrc68C12z4tC7XmZa57T1v%2BhlPv3OMjegLsswmOOKygY6pgFfsDYhB3GfHn3ThgOP00BrBylK7YuZW4vUORiaII9DC%2FvyrkrowpJeOAn%2FOKD6Fq4k67wiQ%2F%2FJ1X%2B89nqzTn60isTX069I2QD3qHc0qzOfrUYe%2FAe6TsRptCvLGgqh9qP4MGxkjJI7QDIT4zq7Vtz%2F4e8ZBTTqZUPBamqWbtSN1Fcfx7dgxCSVjO%2FTTnhHJPhFO8wbOJz1U2zCSvb5K1hVWDyYumzR&X-Amz-Signature=4ff08933d27b0012dcb0e968ed75dab9b49a693a6d83e75c236a35ea4a075f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZCNFV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpz2oC3djdXlAxEfuhVQ%2BM6ID8CI87BVuA2hpdsam9wAiA4bYAjPyJwPJkvJ7OZNnZdHa9a5noiWqgU1tB1DWyAxSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMbiTO4bhBYQxa3aD4KtwDrNRGIt%2BQGkuWWxPxFw15op6%2BjczLixYgQ1aRIPXiop57fHrhvKoiswvDeGqWJiaX4pqR1DiYJCfILQ37X1hj41acXJA2CUe7T%2FzGGA2yLCQnppGV1AtLkXnzzHjXZv7WOgR6KKjLoSCdUZ5oT1uSESVQRg%2FfPlYre6kN93sJu6oSuqRHpFa%2B8VvvaPPEwdOEO9BWukS3pYXGIilRYpKl%2F7lJqPsNaNPSzR5%2BKaKqf8YUp7VxGbkTE8YLqk7DhBGLxtoEYKTb9ToDmVA6DtbKqDDAWj4Bp3Klnv8WX9QBzP2VE%2B4M981rlPu46f1iASOkGE57QelfeEm5UBO%2FwqdF3B%2Bi45Nfva%2FYd6jY7%2Bz6Q7UB80OpLsE1BZznWJRKBG34xtLF%2B1clGkXMN6QPVwHm%2BujwyYCykHBk%2FRwAV1k7o5lXt7xlQS%2FTJYIfS%2BI72oY%2BXMvj5XeZCEW%2BXmvjEr5xm5T4vcnZVcR2yoNwYWpVraU5C2LrwPH9%2B1d45FnSVgHgPaFCJlf2AQCHX7a4CmMADW2iEieYlYoSwcmSRIBMUY98MUQQAfGDRrNFf4Q5lrWD%2BkNKuRoJ6wB8tOipIEOU72oJrc68C12z4tC7XmZa57T1v%2BhlPv3OMjegLsswmOOKygY6pgFfsDYhB3GfHn3ThgOP00BrBylK7YuZW4vUORiaII9DC%2FvyrkrowpJeOAn%2FOKD6Fq4k67wiQ%2F%2FJ1X%2B89nqzTn60isTX069I2QD3qHc0qzOfrUYe%2FAe6TsRptCvLGgqh9qP4MGxkjJI7QDIT4zq7Vtz%2F4e8ZBTTqZUPBamqWbtSN1Fcfx7dgxCSVjO%2FTTnhHJPhFO8wbOJz1U2zCSvb5K1hVWDyYumzR&X-Amz-Signature=12c816a8e561bd507c87df1b1fde36300702990bd3b42174bc5c8a1acc3c8f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
