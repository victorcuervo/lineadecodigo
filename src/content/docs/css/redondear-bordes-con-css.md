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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R6AIIZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HdeuF9M%2FU0MdWgqmfNPN3MdJ4HNug9Huob0hHaQ8vAIgNjOe9LpgukxvX3iGomJuMP8dViYToYY%2BnnN362cQkPMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA%2FgweE45muVGZJ2oCrcA8dOgld27w58hhvr4wBI2MftllKUTi%2FvPXJkmkrN0pHlcsjJq1Y3bxQgqqc3jdXxxGDs3EPwZFj9KI%2Bq9Tty8ycU0%2BcW7TRM%2BSc%2F4Ffe8f%2FMFSNsfPnozdcobtXRbnaIr1JYvZUnOm7E22KStR3aPKkGCK%2BifwVS2KdHnaqe%2FGnJn2H7%2B8syzbhfMMHC%2F%2FE8rVi9sH9Wfb7A65TL3DPovJY6aAcn2UjqIANL3kWPMxXrZoUFp46fINtmKlCClt5K2IXdaHcVCBtWF5hkFluWZkhEajMMWldtf53X%2B2Ts88EmEDwJLeMHA7LwZRbvBvZ5Kg2AOhphp6XbQtKqr%2FeQZcLhiWeA0iyx3aGZVxFQHqCdbUZhkz2HT%2B2b%2Fuh%2BvLUImte83tkg%2BXzW1vmxEPX%2FmbUzK1D0IUEBRQ3BU1Euk65IrmYGN1EakODzA3Cc1d1iTNzV%2Bz843xFHHrTii9nU%2FJYMCULXR4OJ3HkfSB%2FSKZzPaDWAAsmFhmidOsLRiZlUxxabpeOaHQjI8XTt5fuN89StwaDi0L2mfMv26nwFzs7bBI8Tksac2Y1FX1CPc5hQ1ykDJZ42nKSBJ7eN9xhB8C7t%2FPzqyN2jD42GYwqR5EAi6EPdX6CsjDHYnm6mMLu8z8kGOqUBnKkt7cu3xG8enAFXY0R69TF%2BOY2z04CDqEvLb3lk5OXcFB2Rpu8sKnMBA5UCTQxnBo89ZZoevvudm4TKAXYEROsgHWpp74GV8Eds9iI3uPxKTafH9RnY%2B1b%2FUJff1%2BQXz5unDBdPM0BDGeee7ZCt5hOitwnihtOjJhbzDLVNRFXWZqlpmrwNytO93bpXYnCX7gvjNJGA9xXLFp%2B%2BC6%2B75ASDUJGG&X-Amz-Signature=b94f56b0f85a2fbb96d6b1d25507942a1e4129d2ba412f363ce3110f50b6cb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R6AIIZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7HdeuF9M%2FU0MdWgqmfNPN3MdJ4HNug9Huob0hHaQ8vAIgNjOe9LpgukxvX3iGomJuMP8dViYToYY%2BnnN362cQkPMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA%2FgweE45muVGZJ2oCrcA8dOgld27w58hhvr4wBI2MftllKUTi%2FvPXJkmkrN0pHlcsjJq1Y3bxQgqqc3jdXxxGDs3EPwZFj9KI%2Bq9Tty8ycU0%2BcW7TRM%2BSc%2F4Ffe8f%2FMFSNsfPnozdcobtXRbnaIr1JYvZUnOm7E22KStR3aPKkGCK%2BifwVS2KdHnaqe%2FGnJn2H7%2B8syzbhfMMHC%2F%2FE8rVi9sH9Wfb7A65TL3DPovJY6aAcn2UjqIANL3kWPMxXrZoUFp46fINtmKlCClt5K2IXdaHcVCBtWF5hkFluWZkhEajMMWldtf53X%2B2Ts88EmEDwJLeMHA7LwZRbvBvZ5Kg2AOhphp6XbQtKqr%2FeQZcLhiWeA0iyx3aGZVxFQHqCdbUZhkz2HT%2B2b%2Fuh%2BvLUImte83tkg%2BXzW1vmxEPX%2FmbUzK1D0IUEBRQ3BU1Euk65IrmYGN1EakODzA3Cc1d1iTNzV%2Bz843xFHHrTii9nU%2FJYMCULXR4OJ3HkfSB%2FSKZzPaDWAAsmFhmidOsLRiZlUxxabpeOaHQjI8XTt5fuN89StwaDi0L2mfMv26nwFzs7bBI8Tksac2Y1FX1CPc5hQ1ykDJZ42nKSBJ7eN9xhB8C7t%2FPzqyN2jD42GYwqR5EAi6EPdX6CsjDHYnm6mMLu8z8kGOqUBnKkt7cu3xG8enAFXY0R69TF%2BOY2z04CDqEvLb3lk5OXcFB2Rpu8sKnMBA5UCTQxnBo89ZZoevvudm4TKAXYEROsgHWpp74GV8Eds9iI3uPxKTafH9RnY%2B1b%2FUJff1%2BQXz5unDBdPM0BDGeee7ZCt5hOitwnihtOjJhbzDLVNRFXWZqlpmrwNytO93bpXYnCX7gvjNJGA9xXLFp%2B%2BC6%2B75ASDUJGG&X-Amz-Signature=a72b1b53df1e458953498904f2bc4d6d1573c3bb8ea70d463f9741e8101c8f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
