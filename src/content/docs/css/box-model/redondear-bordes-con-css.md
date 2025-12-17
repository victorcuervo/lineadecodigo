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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVNWFKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUNU7v5dPVV6u97tkTaN3FobKO1U1bpe1nbwd3Z%2F%2FXLAiEAzsiB4PooXzgAzxf7eKbe5eHPx1rvDOiiPQRBSMTnybQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMBHSw6j10ScUccU3ircA7a3Jl3%2BGKRb8LKmslFrEDnwxMMZw%2FMcrZCz3WkgxMa9BwO%2F2dYFrhWXLYKIsBOERuFheQj8M1F%2F0Sdl6JrJD7gpCemTXoyq2Y53t7nTAKZMBhPgv0dZoah7tazm%2B4wjHYVTNkoMXGSFfsHRnV%2Ffb0hohUEZRDjrSe74HI2UWo9evhS97filWlT%2B6WPN1QZX71wHJJFMF%2BlRSl%2FYpe0%2BGy5BDq815n7ZG2jN2vLwFx6Jf3kjBRgqY34CQl54PnX7SREhSg6BWJNNk0syMmQ0dONdwMNK1CjTvypUxnjeNppu9RqRU5m4%2BLVMbh80O8kN91DlLLXgZEyqdrQ5kIgE6BqqxWZYulMzt0yGz6LqOS42GUkG9%2F%2B5gjc%2Ft%2BR6AZc26QZ%2F87vOTZX14ujIVjyr7gAhA%2BR3MfNn1pPEBNlGkrRzDgIHIVB3BOg1Tm127mB2Fz7in8AgFMjj1QxMq1T6cIbPr4kMHlMIcPcXcVGpzmjrVR1bYGlj3E5iz%2BGZmQa8F56D2MUWWTlfYSfH1ZL4bo18ibvQ8CCNJ5NSfRqLXa3r3Cg9808J8hxOt%2BJ%2Fm%2F1733rHjSDvKeXts%2FjmYsXZ4zOrEyBfoCijmfSl2OPsJA0kXzDobmhUnWOs6R%2BFMPveh8oGOqUBBmzdXi08PttFqmWFuHsdM0Hgh4aiZgPatyr8MrGOwtMhhwX4FYUSSJDAeEOoM3Ot1ibvlwaeQcR1L6%2BRlOBQw%2FTJ3h7VUgcwxbLg1Q7%2FYdmi4SEYP0ZUU8AIyvqq1q7FdEOQX7cK1BiJusfmWVeIt2iW2FAmMw0gMp7IIh7OB%2FQqGuvmzTWW5xKLvDjdEMcxI2ss%2B6pk%2F%2BuxVIje56NIkU0S8Bty&X-Amz-Signature=c77af8833ac1eb9c2a05af14cafb1b8aaa64ffd129d4e82fe6c62e0898279170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVNWFKT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUNU7v5dPVV6u97tkTaN3FobKO1U1bpe1nbwd3Z%2F%2FXLAiEAzsiB4PooXzgAzxf7eKbe5eHPx1rvDOiiPQRBSMTnybQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMBHSw6j10ScUccU3ircA7a3Jl3%2BGKRb8LKmslFrEDnwxMMZw%2FMcrZCz3WkgxMa9BwO%2F2dYFrhWXLYKIsBOERuFheQj8M1F%2F0Sdl6JrJD7gpCemTXoyq2Y53t7nTAKZMBhPgv0dZoah7tazm%2B4wjHYVTNkoMXGSFfsHRnV%2Ffb0hohUEZRDjrSe74HI2UWo9evhS97filWlT%2B6WPN1QZX71wHJJFMF%2BlRSl%2FYpe0%2BGy5BDq815n7ZG2jN2vLwFx6Jf3kjBRgqY34CQl54PnX7SREhSg6BWJNNk0syMmQ0dONdwMNK1CjTvypUxnjeNppu9RqRU5m4%2BLVMbh80O8kN91DlLLXgZEyqdrQ5kIgE6BqqxWZYulMzt0yGz6LqOS42GUkG9%2F%2B5gjc%2Ft%2BR6AZc26QZ%2F87vOTZX14ujIVjyr7gAhA%2BR3MfNn1pPEBNlGkrRzDgIHIVB3BOg1Tm127mB2Fz7in8AgFMjj1QxMq1T6cIbPr4kMHlMIcPcXcVGpzmjrVR1bYGlj3E5iz%2BGZmQa8F56D2MUWWTlfYSfH1ZL4bo18ibvQ8CCNJ5NSfRqLXa3r3Cg9808J8hxOt%2BJ%2Fm%2F1733rHjSDvKeXts%2FjmYsXZ4zOrEyBfoCijmfSl2OPsJA0kXzDobmhUnWOs6R%2BFMPveh8oGOqUBBmzdXi08PttFqmWFuHsdM0Hgh4aiZgPatyr8MrGOwtMhhwX4FYUSSJDAeEOoM3Ot1ibvlwaeQcR1L6%2BRlOBQw%2FTJ3h7VUgcwxbLg1Q7%2FYdmi4SEYP0ZUU8AIyvqq1q7FdEOQX7cK1BiJusfmWVeIt2iW2FAmMw0gMp7IIh7OB%2FQqGuvmzTWW5xKLvDjdEMcxI2ss%2B6pk%2F%2BuxVIje56NIkU0S8Bty&X-Amz-Signature=5d47a114cc3b1f8dcc059046da7d4342139039d1efe33484a19508054571bb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
