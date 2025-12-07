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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADRB4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN98fhVNjbrDhnikT%2BQyl7O0BvriovkOKp2U5riU%2FPgQIgbUb02UW5ZagjsO2GGKJsHqE0hGrzM59sdxjoq7hnVLYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPSEdSEz%2BMEkMfTTSrcAzNn0i%2F%2BsXQDluIwFSE2xqJP0a7qpJ8%2F7DaTI%2FvkeW80zUFyjDyfPbupNlgktQQYBKUzFiVpbV18rEQohkoGtRZzsHv%2BC5%2Ff6BIaG89QW%2FYc%2B0CG%2BSGNtF6hJcWmFv2L7JdongYErc0q9%2F%2Bbmfe5QLZk3zK6ERb5sJHvjmxNmTcJMxH3V2Tp5DmETi6sFsehk6LgqHrjgJQUCSEyOLzo6XEH2xqusawr01pkDgmqjuevOSSsta6bvKw6wXoRhrgXmx07H0UeFripNPqfeMLcrxjojATi%2BHQvSqYkpg2%2FovRIVWe0%2BVi6I%2Frg7Yi1pIxs9u%2BNhtZ%2Fuvw8Ajr2AXOzPkzW%2F4GieiubXKNwAUsrF8Vb5x3lpxs8e2E0nU1bSyRrunNBPtmDeNEaXsu28gr6asyhVM5UKwsB4G6yNWLU41KOpxfSfzjGY9zh8SntvLMR8TObE9NLQ%2FiwNjhjnd0NE3JhL%2BNg852sTc6TCbD0R%2BZod7HvCKome0RC0Yx%2FzLbIdHIhtZwWsUi%2FvRp1ENxBNOLlMoM5b9FBcn6pjomou0aalCHuBKbGPIxjaqDqiZnU1YHeKseDmCf53AQ5fB4Q7C9RE7L%2B9W1jflVMPJ1Z66JR4Sr1nBIRWxq%2FHfgrMNz90skGOqUBPLytIi792pZunWaCWSiNrZwFAvk%2FGdjLyh6oUALIK1GFsx1I%2FxpTOHKIEl3TQEwkqbxqfG5P8lCxgAwLAjyWdNgU%2BZUoEZFtEHiTOigcUUyf9vcu9h8%2FCPUVsOJCF9HQ4x8%2FBWvcX2pHLrT6ooy56OM5XpvLXTbGncBJvNAwjvkqSkX%2BWMiwwwBFdg9T1tza9cJH4My%2BkA4VfHEwgiK%2B%2BwqezRxN&X-Amz-Signature=75c3d33ded3cf362d1705f54a81e2ff654ba75574d785d8be686dbf3b7eaf255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNADRB4E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN98fhVNjbrDhnikT%2BQyl7O0BvriovkOKp2U5riU%2FPgQIgbUb02UW5ZagjsO2GGKJsHqE0hGrzM59sdxjoq7hnVLYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPSEdSEz%2BMEkMfTTSrcAzNn0i%2F%2BsXQDluIwFSE2xqJP0a7qpJ8%2F7DaTI%2FvkeW80zUFyjDyfPbupNlgktQQYBKUzFiVpbV18rEQohkoGtRZzsHv%2BC5%2Ff6BIaG89QW%2FYc%2B0CG%2BSGNtF6hJcWmFv2L7JdongYErc0q9%2F%2Bbmfe5QLZk3zK6ERb5sJHvjmxNmTcJMxH3V2Tp5DmETi6sFsehk6LgqHrjgJQUCSEyOLzo6XEH2xqusawr01pkDgmqjuevOSSsta6bvKw6wXoRhrgXmx07H0UeFripNPqfeMLcrxjojATi%2BHQvSqYkpg2%2FovRIVWe0%2BVi6I%2Frg7Yi1pIxs9u%2BNhtZ%2Fuvw8Ajr2AXOzPkzW%2F4GieiubXKNwAUsrF8Vb5x3lpxs8e2E0nU1bSyRrunNBPtmDeNEaXsu28gr6asyhVM5UKwsB4G6yNWLU41KOpxfSfzjGY9zh8SntvLMR8TObE9NLQ%2FiwNjhjnd0NE3JhL%2BNg852sTc6TCbD0R%2BZod7HvCKome0RC0Yx%2FzLbIdHIhtZwWsUi%2FvRp1ENxBNOLlMoM5b9FBcn6pjomou0aalCHuBKbGPIxjaqDqiZnU1YHeKseDmCf53AQ5fB4Q7C9RE7L%2B9W1jflVMPJ1Z66JR4Sr1nBIRWxq%2FHfgrMNz90skGOqUBPLytIi792pZunWaCWSiNrZwFAvk%2FGdjLyh6oUALIK1GFsx1I%2FxpTOHKIEl3TQEwkqbxqfG5P8lCxgAwLAjyWdNgU%2BZUoEZFtEHiTOigcUUyf9vcu9h8%2FCPUVsOJCF9HQ4x8%2FBWvcX2pHLrT6ooy56OM5XpvLXTbGncBJvNAwjvkqSkX%2BWMiwwwBFdg9T1tza9cJH4My%2BkA4VfHEwgiK%2B%2BwqezRxN&X-Amz-Signature=3da22c5a5f28468b1adfda3446de241f80c0945966f5a5a9d1d34b7d598500f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
