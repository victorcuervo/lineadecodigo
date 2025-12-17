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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4QVLUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnjfeaA9N9zHwWu5udBcooKqbh6eLpJVtVNjgekiL2JAiEA2zJQht3wl419JgT%2BuQRAhxaFXNhfa2eTPJgasOKoIr4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOOxha6ahz041zKVyCrcA48xpjRIwdq%2B69pgD1ZcD7HFBIYPjgYXsFe7oYZvJ843CpEYfpD%2B%2FiH56iyRRawKy1q%2B5h2JLMMa%2BoLqKNec4Vzp2Bc%2FjdXDtZBbza0GArq3X6XSH%2FSKdZ4J6h66hZFym%2Bowfhdpk%2BhDkFUnby4Rd1HASsgrC92ltNW1aqwTc8Yx8qJh7pKFI12SDr2wtI1QUwhjL32A6uxrTGicDw74fiLG1gOX4uY3Cziot5P7pzgu1Sj6YDkEJvQb0mgZfIwG8EqkmHU4We%2B0wcV39ECKiGqg40qWn16SuSkkKRdnl8bjOxrbiB3lK7Wek1GCERTveBJN9M4aYh7gUKJLZz%2Bg2j2ZtHTTsZl6z5t5NKMYqKHwqUwLvzA6hiMEoN7pWNJFiU96ng6KUFlND2CQplBXk3WkKwdq6cAv2CZBzIP99Tdb%2FccrVacg4oC6VDkvNl2OJWJPZZ%2BilIhX92N8g72DerE8A2oMhTKw2F4COAzdRMAH49oyC88xxw4NeEfjXcNcw3lWk1W7vfU320cMi0J9mb3%2BXI8C%2F2GzIQ6miJ%2F%2BMNgGElRZljlyIodlQJFAPpY4KBvQa0Gu%2Fwf4z2iR08BTmp8gxSj22CpwfdrrBcih3XhqQdjaNvi%2BoprioS8CMO7piMoGOqUBEgkm11wv%2BlEkRYNyGFjnbEvOGkVTXzVe74GrVcFnLIA%2FwY8DSlopQnF9gLJqVa5UN7Vi7gDLZXfSPaocOoGmzpx3AS3SXaxeaeugrcM2XJm78rj8%2B76hs3jIdiB6hoF8R7jUSKBn%2FFQ%2BQbbTZHgbzTUorqjBNNYRFyjqHKCMvrcf2bv0ievn7p9QMd3EEhHusI0O4oTGXRza5CBydp42wLR2WM7P&X-Amz-Signature=3c74aa476fab24cb86fb3907d641bf013acf27f51921d84107317cd4960e4330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4QVLUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnjfeaA9N9zHwWu5udBcooKqbh6eLpJVtVNjgekiL2JAiEA2zJQht3wl419JgT%2BuQRAhxaFXNhfa2eTPJgasOKoIr4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOOxha6ahz041zKVyCrcA48xpjRIwdq%2B69pgD1ZcD7HFBIYPjgYXsFe7oYZvJ843CpEYfpD%2B%2FiH56iyRRawKy1q%2B5h2JLMMa%2BoLqKNec4Vzp2Bc%2FjdXDtZBbza0GArq3X6XSH%2FSKdZ4J6h66hZFym%2Bowfhdpk%2BhDkFUnby4Rd1HASsgrC92ltNW1aqwTc8Yx8qJh7pKFI12SDr2wtI1QUwhjL32A6uxrTGicDw74fiLG1gOX4uY3Cziot5P7pzgu1Sj6YDkEJvQb0mgZfIwG8EqkmHU4We%2B0wcV39ECKiGqg40qWn16SuSkkKRdnl8bjOxrbiB3lK7Wek1GCERTveBJN9M4aYh7gUKJLZz%2Bg2j2ZtHTTsZl6z5t5NKMYqKHwqUwLvzA6hiMEoN7pWNJFiU96ng6KUFlND2CQplBXk3WkKwdq6cAv2CZBzIP99Tdb%2FccrVacg4oC6VDkvNl2OJWJPZZ%2BilIhX92N8g72DerE8A2oMhTKw2F4COAzdRMAH49oyC88xxw4NeEfjXcNcw3lWk1W7vfU320cMi0J9mb3%2BXI8C%2F2GzIQ6miJ%2F%2BMNgGElRZljlyIodlQJFAPpY4KBvQa0Gu%2Fwf4z2iR08BTmp8gxSj22CpwfdrrBcih3XhqQdjaNvi%2BoprioS8CMO7piMoGOqUBEgkm11wv%2BlEkRYNyGFjnbEvOGkVTXzVe74GrVcFnLIA%2FwY8DSlopQnF9gLJqVa5UN7Vi7gDLZXfSPaocOoGmzpx3AS3SXaxeaeugrcM2XJm78rj8%2B76hs3jIdiB6hoF8R7jUSKBn%2FFQ%2BQbbTZHgbzTUorqjBNNYRFyjqHKCMvrcf2bv0ievn7p9QMd3EEhHusI0O4oTGXRza5CBydp42wLR2WM7P&X-Amz-Signature=40ec3aa2b36037b670618f941e5cbb88f3309551d7f9dde4cbe4c8910664d839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
