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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXK5OBA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa2IEO2uIAVT4vHvMDVd%2F0HgfYMumMAbVR7rBUYjhxaAiEAxG2DSDf5PRV2OUvrWDpuH3ethrMgfrevye5cgmYEYnAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDsRaLygwNtDmjKwUircA92vb%2BQpd30vpePrChuG6EQ94y3%2ByI4L8g1Zv6s%2BEmbB0hl4vgELTyWO3XH%2BZPrc0njThFgTEOgrPQehRfmwO5Wc3ZaC5u5EUiBqM%2BmGZ9JhaZmoHSP94bjjQoBRJaf2eYnUexIfeHRuWq5YbyJC0lELF9rrRtoDqLQXCRMy5hKl2Go6ly0r5vb16QdimOhTmOUsESi%2Fu33n1ti3KsOj2t9LT4Ig6xW0Rujo0POoVqSQYrO1k8owsuHIbyFdTDQHHK1sLsG0tgpb5uWEOXNnaNvnq5aalI62L9VcRaH1zhnpJBlPjPM%2FNewYTm4eB3BfONRe9yMNrnZnzT2F2EnaNhgPtIxArXHOjPx%2FdvUqoQoK10apX5YpNSJCtQSxzdlzSbwW2jvMstc50pM5KWx9Y2IMtgxbuqSugBZhUWI%2B3GO7D4ef%2FyUL8s2mzLlJOgJ8l3cdi1nxAAV30N9mT41J%2BgxBfbH5DaTeVj0JwnqwRLXUnhZv3CP%2FdlHeL0ag%2FWZMMlA8QGenrGVcv75FCGYvijC%2F3BrZxQOzjt%2Fz%2FIWsdg0EVZSBr0J1Z22VUd3f71t5EXjIM1IsiK4VN1fu%2Bd5AAvi4UpuybZVCP4XToogLpTFSwMu0EudLC6LZJmxRMPbD0ckGOqUBkKXLHoZtfVeZg8Jkmf75LlfMsvfuVWkhflHxmFjOCmQQPt5PEKzP5KZxQMJBTgagxxc6jzoaTSxDSPh59qmHL9Ugd2yh12mOjAktC7JJqajw0EEvLnysLmaUquBvIy4VYPDaaEi%2FLx0fN2ojzP%2BiOwNPQOxMyA6dYqKoz%2F%2B%2F5nQXaUlMvgeYk1WUSx%2Fa3%2FUF4BLwAMwFJ9PI2rPVqWkwgoG2ocbF&X-Amz-Signature=d84ca8e852a5e8ea2f41fd57776c75e0799c734a245b69699be6055dfaecfd24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXK5OBA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa2IEO2uIAVT4vHvMDVd%2F0HgfYMumMAbVR7rBUYjhxaAiEAxG2DSDf5PRV2OUvrWDpuH3ethrMgfrevye5cgmYEYnAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDsRaLygwNtDmjKwUircA92vb%2BQpd30vpePrChuG6EQ94y3%2ByI4L8g1Zv6s%2BEmbB0hl4vgELTyWO3XH%2BZPrc0njThFgTEOgrPQehRfmwO5Wc3ZaC5u5EUiBqM%2BmGZ9JhaZmoHSP94bjjQoBRJaf2eYnUexIfeHRuWq5YbyJC0lELF9rrRtoDqLQXCRMy5hKl2Go6ly0r5vb16QdimOhTmOUsESi%2Fu33n1ti3KsOj2t9LT4Ig6xW0Rujo0POoVqSQYrO1k8owsuHIbyFdTDQHHK1sLsG0tgpb5uWEOXNnaNvnq5aalI62L9VcRaH1zhnpJBlPjPM%2FNewYTm4eB3BfONRe9yMNrnZnzT2F2EnaNhgPtIxArXHOjPx%2FdvUqoQoK10apX5YpNSJCtQSxzdlzSbwW2jvMstc50pM5KWx9Y2IMtgxbuqSugBZhUWI%2B3GO7D4ef%2FyUL8s2mzLlJOgJ8l3cdi1nxAAV30N9mT41J%2BgxBfbH5DaTeVj0JwnqwRLXUnhZv3CP%2FdlHeL0ag%2FWZMMlA8QGenrGVcv75FCGYvijC%2F3BrZxQOzjt%2Fz%2FIWsdg0EVZSBr0J1Z22VUd3f71t5EXjIM1IsiK4VN1fu%2Bd5AAvi4UpuybZVCP4XToogLpTFSwMu0EudLC6LZJmxRMPbD0ckGOqUBkKXLHoZtfVeZg8Jkmf75LlfMsvfuVWkhflHxmFjOCmQQPt5PEKzP5KZxQMJBTgagxxc6jzoaTSxDSPh59qmHL9Ugd2yh12mOjAktC7JJqajw0EEvLnysLmaUquBvIy4VYPDaaEi%2FLx0fN2ojzP%2BiOwNPQOxMyA6dYqKoz%2F%2B%2F5nQXaUlMvgeYk1WUSx%2Fa3%2FUF4BLwAMwFJ9PI2rPVqWkwgoG2ocbF&X-Amz-Signature=445fbf8763fa5bba2ae43a318065f26c131eb2a39cace47543136f7eeaa0efce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
