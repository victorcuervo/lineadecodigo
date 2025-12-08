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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFJV4DG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqfNTo%2Bc%2FrPSwhgAOXA24KjDcWq0IzXLg9VIXiyJ7IAiBQOxt%2BXQ%2Fesdz%2FIsh3BSBJViDrNmZZx1xqxK4%2B%2FRwyriqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkidzzclUxWnwC%2FtKtwDBk%2BCX5QhrR7naTEfqmxA706S0PY8U8YTjArLGCkcJuwVsWne0CNKksovYW3AeL3OJg2%2BIlQXPp132%2BFMBhJ17C1VajkfenNqR1S5nBeKdiPJZQZbpOGykepqHPAXEamB2ymsbqTVX%2Fbiaj4tWYXvowXp%2FKT%2BolZUYaIax2zFafFFCipLWL%2FY7s6n4UEhObvyoOZfgprZXXsg53tglNkBBOlQDnInGz6Uz4HsK7HGdbMm9V0JjD0%2FBaGmkOgRzrKDkY4zmjWble1zX%2Fg5Wp9kbAnPYdVs720TQHbx%2B6oYvoc2NGOX9vurMP3GkhhzNjke8qtAu5fJ1i7rrRkxLz1reTXKP6YkpfVYBNY2If8anm8f6tibbpMtvI9eE%2Fg0c3GM43jN3kTh3TCh4jbxknCFDkmrHf7LOOsnFxyew3HWYr3yEXvz2DMbnWE38CQwINZVebX%2BDoE%2BXul3N8JE4zMA8Gs57%2B1OzfflFirOgXZo3%2B0Iz3L8hbLONhUnLAsHjdSeiBjgPotXu%2B95OWGEeLju7QwTR6JXuf1W9WGLKaGtH2621xwhHNsntQD8HOxrETR5Fcfa8seFse5qygTtVadM%2BdhhDz9HmNWjjKv%2Fm3E102EuZUtJLmU7cEVNfB4w5O3ZyQY6pgEanJLLUAdzAE1gU7%2Bh35rbfY3wsXE8QaHpOv2SS1JpgiX5U9e9WD96ar3g0QJ2UKCNJq1EWq8%2Fm0IAO6TKFG%2FTvZ2XxKzkM96XmFql6gXLSXAuFrF2HdTenLuW%2F2s0ILqtQgJqqpIDj3DNoblsMF8DqQ4Gkr2GVP6spvveOSpHfFD1Mg2OHSnBFh3TQJg4t6I7mEuMM8fZSKOed92PmmHRA4SOyU1%2F&X-Amz-Signature=b6608f187cec696909b3f4d73fcbe2a138c3090e04157d139687ab6138e22031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFJV4DG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKqfNTo%2Bc%2FrPSwhgAOXA24KjDcWq0IzXLg9VIXiyJ7IAiBQOxt%2BXQ%2Fesdz%2FIsh3BSBJViDrNmZZx1xqxK4%2B%2FRwyriqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkidzzclUxWnwC%2FtKtwDBk%2BCX5QhrR7naTEfqmxA706S0PY8U8YTjArLGCkcJuwVsWne0CNKksovYW3AeL3OJg2%2BIlQXPp132%2BFMBhJ17C1VajkfenNqR1S5nBeKdiPJZQZbpOGykepqHPAXEamB2ymsbqTVX%2Fbiaj4tWYXvowXp%2FKT%2BolZUYaIax2zFafFFCipLWL%2FY7s6n4UEhObvyoOZfgprZXXsg53tglNkBBOlQDnInGz6Uz4HsK7HGdbMm9V0JjD0%2FBaGmkOgRzrKDkY4zmjWble1zX%2Fg5Wp9kbAnPYdVs720TQHbx%2B6oYvoc2NGOX9vurMP3GkhhzNjke8qtAu5fJ1i7rrRkxLz1reTXKP6YkpfVYBNY2If8anm8f6tibbpMtvI9eE%2Fg0c3GM43jN3kTh3TCh4jbxknCFDkmrHf7LOOsnFxyew3HWYr3yEXvz2DMbnWE38CQwINZVebX%2BDoE%2BXul3N8JE4zMA8Gs57%2B1OzfflFirOgXZo3%2B0Iz3L8hbLONhUnLAsHjdSeiBjgPotXu%2B95OWGEeLju7QwTR6JXuf1W9WGLKaGtH2621xwhHNsntQD8HOxrETR5Fcfa8seFse5qygTtVadM%2BdhhDz9HmNWjjKv%2Fm3E102EuZUtJLmU7cEVNfB4w5O3ZyQY6pgEanJLLUAdzAE1gU7%2Bh35rbfY3wsXE8QaHpOv2SS1JpgiX5U9e9WD96ar3g0QJ2UKCNJq1EWq8%2Fm0IAO6TKFG%2FTvZ2XxKzkM96XmFql6gXLSXAuFrF2HdTenLuW%2F2s0ILqtQgJqqpIDj3DNoblsMF8DqQ4Gkr2GVP6spvveOSpHfFD1Mg2OHSnBFh3TQJg4t6I7mEuMM8fZSKOed92PmmHRA4SOyU1%2F&X-Amz-Signature=61b65734ba6ff4d9477187531b51ba7626cac154d6a1600706f97931e1fc3908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
