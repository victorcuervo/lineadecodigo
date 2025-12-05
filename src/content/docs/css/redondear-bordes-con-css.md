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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6MN2M6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARwxhG5VV9HEdYP4GJDwEW8Ot5ZrpVcIOkqiwuInxwtAiEAkO49P009aSIxvS8pO5KzxE7%2F6QTT9lm%2B3taUgrQVLz8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKRBuzEjuozusgWOFSrcA070Hqsq%2BbvaosUeJnjkBSLtTcKV13JVi3%2FsI6bQdludlCu3tNKKgCNXQOoqM0asTqH2114MoITiOYpec3XPUxqtFA3hx64bsN6pGl1fUz5RYHuszBDchjCqWgFRH57vQuA8t8%2B7Wr4kVbNTuosQCAoM5C4e4orQ8sw%2BfxS5Bg9Ea2HAsirqxHRSTAiipvJiFJYwAEMtBGqnzDaAS0FnDXmqxAGL3Lrb3PtCPSy5LVpX2ZgnkH2UGrUK05nkpJ9akouJC7Dq1xzGjxbIPwAshyY2ehzcfFkX3BnAs%2FfUHogtFhBRQQfnRyBVVL9VMc2%2FmfhDPGK4seihpDOUq13%2BvO4GVgwqRGJd%2BvCIhguLxjpQnXuZPrxYPAjLXKomm%2BrilLLrMOrUvT0EJAhlOMezgb2580uJrlHIH1C5p9gXYAeKhL51B6zksfWdfRJfxYLeg49TnVaaOVzqHq6xTbF9eDvz6P1uCpkPqm0Luu2TiCW%2FTERvpyftxHbP4voBUm4zWa%2BM%2BB0SXzR0kCvCoxUx8rOzeaU51ENOYtp8IEH2padaY7hhgcAyK2w7GCG3kOUjEYUJRtNELoUIpnQzheHmJSLZml4uMq9nRjS9%2FvGweXwaCXL5QvoWFx%2BOkCxCMImvyckGOqUB3yDbC%2BOUOR7vifbNoibfy%2BSDYA4qdxV05KVe7gX%2Fmqvx%2FF3mQ8uzG6p%2FpW0qCGnKG2aviMTdvZK%2BxoazSuGKxI6J07ZPozxrHfFtECt4WOcw%2ByE0e5D8905eKZgh7OoHETOarCgMxt3iRE2su64rq%2BHHaolLwwZiwrbNRjH8hG1EK3dlEQwEJX5d4oBH40hHj35%2BbxBD7mwkQ%2FQQXwl%2FxIdcot1m&X-Amz-Signature=bcb20934a2a390fad50593c45347a52ed0393f4596634cbad12a717efc1c2715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6MN2M6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARwxhG5VV9HEdYP4GJDwEW8Ot5ZrpVcIOkqiwuInxwtAiEAkO49P009aSIxvS8pO5KzxE7%2F6QTT9lm%2B3taUgrQVLz8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKRBuzEjuozusgWOFSrcA070Hqsq%2BbvaosUeJnjkBSLtTcKV13JVi3%2FsI6bQdludlCu3tNKKgCNXQOoqM0asTqH2114MoITiOYpec3XPUxqtFA3hx64bsN6pGl1fUz5RYHuszBDchjCqWgFRH57vQuA8t8%2B7Wr4kVbNTuosQCAoM5C4e4orQ8sw%2BfxS5Bg9Ea2HAsirqxHRSTAiipvJiFJYwAEMtBGqnzDaAS0FnDXmqxAGL3Lrb3PtCPSy5LVpX2ZgnkH2UGrUK05nkpJ9akouJC7Dq1xzGjxbIPwAshyY2ehzcfFkX3BnAs%2FfUHogtFhBRQQfnRyBVVL9VMc2%2FmfhDPGK4seihpDOUq13%2BvO4GVgwqRGJd%2BvCIhguLxjpQnXuZPrxYPAjLXKomm%2BrilLLrMOrUvT0EJAhlOMezgb2580uJrlHIH1C5p9gXYAeKhL51B6zksfWdfRJfxYLeg49TnVaaOVzqHq6xTbF9eDvz6P1uCpkPqm0Luu2TiCW%2FTERvpyftxHbP4voBUm4zWa%2BM%2BB0SXzR0kCvCoxUx8rOzeaU51ENOYtp8IEH2padaY7hhgcAyK2w7GCG3kOUjEYUJRtNELoUIpnQzheHmJSLZml4uMq9nRjS9%2FvGweXwaCXL5QvoWFx%2BOkCxCMImvyckGOqUB3yDbC%2BOUOR7vifbNoibfy%2BSDYA4qdxV05KVe7gX%2Fmqvx%2FF3mQ8uzG6p%2FpW0qCGnKG2aviMTdvZK%2BxoazSuGKxI6J07ZPozxrHfFtECt4WOcw%2ByE0e5D8905eKZgh7OoHETOarCgMxt3iRE2su64rq%2BHHaolLwwZiwrbNRjH8hG1EK3dlEQwEJX5d4oBH40hHj35%2BbxBD7mwkQ%2FQQXwl%2FxIdcot1m&X-Amz-Signature=9094e0f42bbee171b5659476a26c9fcce5a58b823eb58f339c952aeceaa722a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
