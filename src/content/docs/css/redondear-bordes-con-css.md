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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVTCYOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRuj8MQhDATb8jEPktHlbyohTVg%2FTnz4Ci9n7uI1Pp%2BAiEAjbZV5mFLkWEL5bc1VTKqqPvTjUUhZgEwlYQa0UbaBBkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCNT5zbHXzv4Yy0SlCrcAxdJoWtf2kjtG9aWQ9CgEzrI3e7WSti%2FfI8Yj73JQRB5HUyIKaRHFIZ9I2j%2BKBAZilWpms8Dg1uXyROY3aVhMMiJIZm5pgASFJNCaCOHA1VkiIKSvANyUhPcGcEwikPworvTgBbEpf1gFMf%2FOO0E1d81KA55c0D0C%2B6JqAoelBOMWziff8Mlumtc8CJ7d6sCn%2FBvchVMIrEjhHL%2B%2BBc%2Fs70xVqoEL0yuUwoVtJ6FwNikqpMurKnlqGoxUIu%2Fzvx33Rg%2FtNeq7Wi6H%2BRg%2FUZFi0yA1EkoAQHO%2BGNQ1bwRY8LsEH3F%2B6ujXdHvQS6Y35aybcQ%2By9mZ5HMm6%2FjViamHliLrKc7dLoEiD8jWPnK0WhQKecx3MGSBXXefduET15ry8%2BQYwkZrWHHWJPJH%2FuDryI%2F3vsVXkjUwAqFn28OXqgjlt1S0VHpV9A9avVse0IIrR3BL%2FC9OM%2BNuiTg0ZJIiNtuvgYJ96WTmMjOh2tIFzCaT2w2%2Fli5nSQtN46m1zXeTxl7V5gN0hl7OplXHiaoF5%2FscFVY6yjXnioq%2F4vP4q9CSuCDXUjkrVvfa%2FNvH0L6CUXskAblz%2Ba8LxHNNP0TBgFWPTSA%2B%2BeCwepvpiB%2FDtnfwdy17fFXGoTh6vm%2FRMKem0MkGOqUBHZx1XiXloFgV4haQ9tWZxjl9o%2FNRfqBe3T3q4LAYiSNcoaGsLoEAGtVNhsxrHM%2BqzuPAr%2BupD2UtL1TUxcRhO1hWLijh28lkfXlswAWehyaQY2GoyF5Ysb3nWNTx3%2BMsKIb8XyvIn3ufDPxOaTMfkTAe4dm0KTPrrBHNSzv9wxcKVUos4q3jWbpR1wZ2ljQbtZso4ZBH2PMnGWKllP6NrnQRA1Fn&X-Amz-Signature=3ffba0848b8c695051ba67fd2a3b8baf0d85813c0f5d0e234e52367b69c8907e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVTCYOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRuj8MQhDATb8jEPktHlbyohTVg%2FTnz4Ci9n7uI1Pp%2BAiEAjbZV5mFLkWEL5bc1VTKqqPvTjUUhZgEwlYQa0UbaBBkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCNT5zbHXzv4Yy0SlCrcAxdJoWtf2kjtG9aWQ9CgEzrI3e7WSti%2FfI8Yj73JQRB5HUyIKaRHFIZ9I2j%2BKBAZilWpms8Dg1uXyROY3aVhMMiJIZm5pgASFJNCaCOHA1VkiIKSvANyUhPcGcEwikPworvTgBbEpf1gFMf%2FOO0E1d81KA55c0D0C%2B6JqAoelBOMWziff8Mlumtc8CJ7d6sCn%2FBvchVMIrEjhHL%2B%2BBc%2Fs70xVqoEL0yuUwoVtJ6FwNikqpMurKnlqGoxUIu%2Fzvx33Rg%2FtNeq7Wi6H%2BRg%2FUZFi0yA1EkoAQHO%2BGNQ1bwRY8LsEH3F%2B6ujXdHvQS6Y35aybcQ%2By9mZ5HMm6%2FjViamHliLrKc7dLoEiD8jWPnK0WhQKecx3MGSBXXefduET15ry8%2BQYwkZrWHHWJPJH%2FuDryI%2F3vsVXkjUwAqFn28OXqgjlt1S0VHpV9A9avVse0IIrR3BL%2FC9OM%2BNuiTg0ZJIiNtuvgYJ96WTmMjOh2tIFzCaT2w2%2Fli5nSQtN46m1zXeTxl7V5gN0hl7OplXHiaoF5%2FscFVY6yjXnioq%2F4vP4q9CSuCDXUjkrVvfa%2FNvH0L6CUXskAblz%2Ba8LxHNNP0TBgFWPTSA%2B%2BeCwepvpiB%2FDtnfwdy17fFXGoTh6vm%2FRMKem0MkGOqUBHZx1XiXloFgV4haQ9tWZxjl9o%2FNRfqBe3T3q4LAYiSNcoaGsLoEAGtVNhsxrHM%2BqzuPAr%2BupD2UtL1TUxcRhO1hWLijh28lkfXlswAWehyaQY2GoyF5Ysb3nWNTx3%2BMsKIb8XyvIn3ufDPxOaTMfkTAe4dm0KTPrrBHNSzv9wxcKVUos4q3jWbpR1wZ2ljQbtZso4ZBH2PMnGWKllP6NrnQRA1Fn&X-Amz-Signature=6e8a422e2f9e9d90664ea2a3134b0b884518159d5369fd96ad8cc4db8b8fbcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
