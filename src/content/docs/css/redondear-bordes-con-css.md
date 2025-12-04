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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUS3BIF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCZ5yBRnKmKkgVdn1HkF06Rj2cdwrRM5nz07WxwXAH1%2BAIgYjKitwX7WcZ5WySAA4mYiGPbUE%2BRokopZVjrovduG%2Fgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD2S%2B%2B2tzz%2Bl8L903ircAzxmUOjCAxYXnZwyOK1KBZyIXn6GBDoGduY%2FavLMnqm68FiXVlAFSE6cQPBmuP4XIpQbd%2FVkOMBqVuNgwvLyNh1SP6AuWr7uLlnSR48sWf1BmzpX6Zks64SWSWKMNRzM8QWo2q5VA1GheBULAKS8t3PmGJO8lq3mdWjzRd%2BoLnSBDM4Ev3tr39PVKMlz9CLLJCxC%2Fgrw2zG13gFz6%2F27LmVMR8dqXNSULdeHO3xo8UbXtc72YZ1ovxHVY%2BH%2FbIW5rpfPcTMVxADIEAgjDcofV%2B%2BTezOFP%2FEUc77tuw7Fjmf7u0LLI2NY2ABc20FjEJ7rDMg8GE9%2F2CBLHdqYzPGJrW68go19wnABmlnZ9525KL0FmbtvZsXpC7tPTODY9pyhp69jb2aK8r9mFEBDfVL7f%2FX%2FMIG%2Fr9G5bYCCaET3YJWYvZm3iu%2FEeoc9YmtOI6iVQkXnGa3q701yzFyl3kU75uYohgnOSAMve6FGwtRkT%2FliuBjJhHqinVJNsUwfgbCuDPtGA9TjutJBelbOie2sTA5Fw2T03t%2F1oLHQpY8gxz%2BsW5QCd7maAbyb3kvR7JgAAmLe0fIGXsP4ChgqOALDJ9Xs8I3UPpcfQZxHqlum9TSCVt3%2FAWMXWPvyym0PMIjKxMkGOqUB7h6TDgODjIFXoUb5dUC76h31MlTPK1JyXdHdbnJwBgcug2V1veuWg7Adgrj%2F4oRpTr%2BrOdUqvEKOWRhU1TkYYP3PwSwitpqHTC%2BNlQSFs4HXUPva%2BPbLssadnJhp7at3d5usY0%2BZGJUzG0rGaCogriHrNqmqLC95h783cQD8By3A9PTQ8Gb%2FBO2m4hb9Z2j7mJrcxKJMqxzKXVOk5Y8AN90VE6uC&X-Amz-Signature=0e7f8b7e7c55cf935707f3aea16cb12d013fcafbaf1b8c2ab46597acb5064cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUS3BIF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCZ5yBRnKmKkgVdn1HkF06Rj2cdwrRM5nz07WxwXAH1%2BAIgYjKitwX7WcZ5WySAA4mYiGPbUE%2BRokopZVjrovduG%2Fgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD2S%2B%2B2tzz%2Bl8L903ircAzxmUOjCAxYXnZwyOK1KBZyIXn6GBDoGduY%2FavLMnqm68FiXVlAFSE6cQPBmuP4XIpQbd%2FVkOMBqVuNgwvLyNh1SP6AuWr7uLlnSR48sWf1BmzpX6Zks64SWSWKMNRzM8QWo2q5VA1GheBULAKS8t3PmGJO8lq3mdWjzRd%2BoLnSBDM4Ev3tr39PVKMlz9CLLJCxC%2Fgrw2zG13gFz6%2F27LmVMR8dqXNSULdeHO3xo8UbXtc72YZ1ovxHVY%2BH%2FbIW5rpfPcTMVxADIEAgjDcofV%2B%2BTezOFP%2FEUc77tuw7Fjmf7u0LLI2NY2ABc20FjEJ7rDMg8GE9%2F2CBLHdqYzPGJrW68go19wnABmlnZ9525KL0FmbtvZsXpC7tPTODY9pyhp69jb2aK8r9mFEBDfVL7f%2FX%2FMIG%2Fr9G5bYCCaET3YJWYvZm3iu%2FEeoc9YmtOI6iVQkXnGa3q701yzFyl3kU75uYohgnOSAMve6FGwtRkT%2FliuBjJhHqinVJNsUwfgbCuDPtGA9TjutJBelbOie2sTA5Fw2T03t%2F1oLHQpY8gxz%2BsW5QCd7maAbyb3kvR7JgAAmLe0fIGXsP4ChgqOALDJ9Xs8I3UPpcfQZxHqlum9TSCVt3%2FAWMXWPvyym0PMIjKxMkGOqUB7h6TDgODjIFXoUb5dUC76h31MlTPK1JyXdHdbnJwBgcug2V1veuWg7Adgrj%2F4oRpTr%2BrOdUqvEKOWRhU1TkYYP3PwSwitpqHTC%2BNlQSFs4HXUPva%2BPbLssadnJhp7at3d5usY0%2BZGJUzG0rGaCogriHrNqmqLC95h783cQD8By3A9PTQ8Gb%2FBO2m4hb9Z2j7mJrcxKJMqxzKXVOk5Y8AN90VE6uC&X-Amz-Signature=f80e55f719c6b39f3bb7220a7cad1ee7727858295751f6c3c958aaa91e8ad255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
