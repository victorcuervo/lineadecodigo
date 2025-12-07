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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRCWNA7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzJIixVGvaqjTGVAzHiOKAYL1F9lL58eyu0xyWztZ5vAiAkDAUwbb0jEXOs09M%2FC%2FzSJQpzCILkZa0gz6N215jlVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXTXS5nAesZ7m3jKtwDgpF9MsLK%2Budsui5zWdKVaWugziDIF%2FJLnzh15mMa%2Bz3CcoGvYAvlw15KCyTdbfb%2FLOuZYi4o37d61Ym%2FJ%2FK3dH%2BxLvCDCuukXr8KHNjdgTqpDQ9Ow%2FBUZBmvlXu90Xxc3bgCwm882BQaQxlDaCgKyr31jGxoZWvCNVQqm5sQ8%2Bx0YxeQZR6%2FeY5SJowVpe1erAroqFiqfArZz2GkJrEpDfKvr76q8XxSYiKMeK7OHodzli9StL67sNKcsEq2XN0Ci6Tgar%2BU4ezUc2xSLHKgKc4Z7DrxAtLrRNMTE5%2Bp7ysjbpksPo1a%2Bmy7bmUgUqu9pPg%2BktWT0fEY51Nb%2FT4pqY2S9%2Fq%2FesXh7i3v9ZuqHb0V%2Fl0RH5XEKjH0LTBJ0q4jap91frMas80t%2FJAT5hGdWz19z4%2F2Qpyy6aMjyVlEj2EP6YWm%2Bkhy4bahSyde0aTZZACOZR1tcMgd02puOf%2FuDyP%2FZ7vqvxp%2F6EEr1UYyj0D%2FGMYwPlA5Av%2BjvjI0CbJue5JsxYZ5j76wlxmncGrKnR9%2B1dqdmQWiiKRR1eEj%2FcUcNtjJJWqhPYk%2B%2BbimdyeyoE0oQDLhGI21Ury%2B%2F71pS6tumD%2FVZoD2ZMd6g25ayzlv9O9Lu41i%2FA5DB9ow9ZnVyQY6pgHwp69n8GnEuKEABd8sijKTIUShwA1A28yFQ%2BAD%2B7MLg5%2Bfp%2FOqAjBRaWH6xyU5VH9hLoKllGaysCkjnuwe3sl58fE2D1GwJo7sUVHFVjpQRWkBCTenk4mQ2O9IW6mBwk2Pl9fgSn87XoAJ226S6YOaCP0Gt00guJvrCUi%2BxXCFGcBkrHYGRCGOHKQkVfd2UHAzzhMachIsCucR14If7cPrP%2F9Kk9t4&X-Amz-Signature=f77e360f348e74ba1c46f86338aa3407aac57ef267b3844b670c616d844e63a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRCWNA7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzJIixVGvaqjTGVAzHiOKAYL1F9lL58eyu0xyWztZ5vAiAkDAUwbb0jEXOs09M%2FC%2FzSJQpzCILkZa0gz6N215jlVyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYgXTXS5nAesZ7m3jKtwDgpF9MsLK%2Budsui5zWdKVaWugziDIF%2FJLnzh15mMa%2Bz3CcoGvYAvlw15KCyTdbfb%2FLOuZYi4o37d61Ym%2FJ%2FK3dH%2BxLvCDCuukXr8KHNjdgTqpDQ9Ow%2FBUZBmvlXu90Xxc3bgCwm882BQaQxlDaCgKyr31jGxoZWvCNVQqm5sQ8%2Bx0YxeQZR6%2FeY5SJowVpe1erAroqFiqfArZz2GkJrEpDfKvr76q8XxSYiKMeK7OHodzli9StL67sNKcsEq2XN0Ci6Tgar%2BU4ezUc2xSLHKgKc4Z7DrxAtLrRNMTE5%2Bp7ysjbpksPo1a%2Bmy7bmUgUqu9pPg%2BktWT0fEY51Nb%2FT4pqY2S9%2Fq%2FesXh7i3v9ZuqHb0V%2Fl0RH5XEKjH0LTBJ0q4jap91frMas80t%2FJAT5hGdWz19z4%2F2Qpyy6aMjyVlEj2EP6YWm%2Bkhy4bahSyde0aTZZACOZR1tcMgd02puOf%2FuDyP%2FZ7vqvxp%2F6EEr1UYyj0D%2FGMYwPlA5Av%2BjvjI0CbJue5JsxYZ5j76wlxmncGrKnR9%2B1dqdmQWiiKRR1eEj%2FcUcNtjJJWqhPYk%2B%2BbimdyeyoE0oQDLhGI21Ury%2B%2F71pS6tumD%2FVZoD2ZMd6g25ayzlv9O9Lu41i%2FA5DB9ow9ZnVyQY6pgHwp69n8GnEuKEABd8sijKTIUShwA1A28yFQ%2BAD%2B7MLg5%2Bfp%2FOqAjBRaWH6xyU5VH9hLoKllGaysCkjnuwe3sl58fE2D1GwJo7sUVHFVjpQRWkBCTenk4mQ2O9IW6mBwk2Pl9fgSn87XoAJ226S6YOaCP0Gt00guJvrCUi%2BxXCFGcBkrHYGRCGOHKQkVfd2UHAzzhMachIsCucR14If7cPrP%2F9Kk9t4&X-Amz-Signature=c8369f1ae971faa2a64de6a56ea55b9d978d955d95c04823d41407c4b3e61664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
