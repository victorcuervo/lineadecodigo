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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPXZWVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBRHbXrVAFHAUeIBJ9lP3oVFEdtk8W1EWIi2wQMm6hKAiA5JGhlpR0SNbbSd2CzrUo%2BTusdzzFTrhFLPmWv2Z6IVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZszfpmHKkw%2Bos%2F52KtwDu0VIrR1TRpAjLY5tQFoWaWxGJtiCWiZmdlVqfZHFLgHEN4CoUeK00HYk0UC%2FyA3T5tQ2eH6nfoGsKrFSMUM7qKzoiJ9YF3zjpglXcKU7HjNyM5z3HXKpxkpdhZRvh0hBmgoEGbA2nH1CcCMhb%2BHWMbuCNO2vKai8bI9zVVTwHZpZKOzr69N%2BAFt4h3yRo4qQHDqzKmLL0lrqIMkgEiY0W7HyCn27mIGRuOK0%2F%2FxhAbd7NDTlPkrh409UIrj95JITnzjxVYTzpHW%2BW6iQPGF0uQH0HPCyhzqPVB0rzxUWNyEl9spoGYTWUEmMUaktfkJzotREZhZaME5K7rgOrpCq3cHGiPeUAnoLisJz0NI%2F7bUdx0R6X27NFwPg7mcjEgts7BV9FmOMT%2BHvtzr4mmLxbWS3PipTfVOiHgLI86kheLBgtzrJZAueoSzLBaWbGr3pMWGGgYJx3NCwfCRDaoJn3TctQg79tVb3Ypj6ldeZFFD6pUtIF4Hui5ufAbLo0A%2FydaR4gu%2FMfVVHsJ7E5WFgn2Gr2LeGpzDSkZr2K%2FJ9UHmgYh9btC%2BONUwrmIUbLjgwNTYTuDB7z0ccrvOFW8LusMse3k1fRtqR9A9x%2FUxca8G9DqUVgNJjPzy7Hgow9s2IygY6pgHaTwavwWT0Pvohc%2FE2AoCCkQzqlnZbPPxzBxm5oBTauLYvlVShW13GHHeUr8Wv2N06tk4kVSQHD7BXnQ2r8sFC%2FMGi0s4VX9lJBk68LBQ3iVoGg1pSJPgS2LU7vw9ikj8VTuwjmAj5iu0K2OATiX9TDBm3%2FytvZampcjeVsMfctn5Vmy3%2FesUsWL1VhPGVFhSv22pbJrWr5p8ko5ax9gm85ETObVGe&X-Amz-Signature=9185f2ebd8b6934ec72c06115e347894d80700c0664e5137efc13ad25fd9c05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPXZWVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBRHbXrVAFHAUeIBJ9lP3oVFEdtk8W1EWIi2wQMm6hKAiA5JGhlpR0SNbbSd2CzrUo%2BTusdzzFTrhFLPmWv2Z6IVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZszfpmHKkw%2Bos%2F52KtwDu0VIrR1TRpAjLY5tQFoWaWxGJtiCWiZmdlVqfZHFLgHEN4CoUeK00HYk0UC%2FyA3T5tQ2eH6nfoGsKrFSMUM7qKzoiJ9YF3zjpglXcKU7HjNyM5z3HXKpxkpdhZRvh0hBmgoEGbA2nH1CcCMhb%2BHWMbuCNO2vKai8bI9zVVTwHZpZKOzr69N%2BAFt4h3yRo4qQHDqzKmLL0lrqIMkgEiY0W7HyCn27mIGRuOK0%2F%2FxhAbd7NDTlPkrh409UIrj95JITnzjxVYTzpHW%2BW6iQPGF0uQH0HPCyhzqPVB0rzxUWNyEl9spoGYTWUEmMUaktfkJzotREZhZaME5K7rgOrpCq3cHGiPeUAnoLisJz0NI%2F7bUdx0R6X27NFwPg7mcjEgts7BV9FmOMT%2BHvtzr4mmLxbWS3PipTfVOiHgLI86kheLBgtzrJZAueoSzLBaWbGr3pMWGGgYJx3NCwfCRDaoJn3TctQg79tVb3Ypj6ldeZFFD6pUtIF4Hui5ufAbLo0A%2FydaR4gu%2FMfVVHsJ7E5WFgn2Gr2LeGpzDSkZr2K%2FJ9UHmgYh9btC%2BONUwrmIUbLjgwNTYTuDB7z0ccrvOFW8LusMse3k1fRtqR9A9x%2FUxca8G9DqUVgNJjPzy7Hgow9s2IygY6pgHaTwavwWT0Pvohc%2FE2AoCCkQzqlnZbPPxzBxm5oBTauLYvlVShW13GHHeUr8Wv2N06tk4kVSQHD7BXnQ2r8sFC%2FMGi0s4VX9lJBk68LBQ3iVoGg1pSJPgS2LU7vw9ikj8VTuwjmAj5iu0K2OATiX9TDBm3%2FytvZampcjeVsMfctn5Vmy3%2FesUsWL1VhPGVFhSv22pbJrWr5p8ko5ax9gm85ETObVGe&X-Amz-Signature=b435c89660af7c97e76f05b74b5987f5a3239f77f53b1b2ea52de9d4c9dc7dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
