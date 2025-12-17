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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYTNU2DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXgUxs2arUkQCSJD%2BlFO9UeFFAFP5aZPAr1AomjI%2FSXAiEAxiwKFzd0XYbpxzo1ksAvbHSah0QYdQKQxbqj%2F6aLnJ8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRuMTqbvX6xYbFZlyrcA2uUIGewvtybFWZbc%2FWQdFdjhgJrMmSEWdTYdXL02J5B%2BvjDev6WKyAvHFG5Tl35f9Yp%2FPVW2HtsuU08tKtSdElDqaW4sO%2Bw9sLVZRigi9YNDW3u61x4Nm77zPBIZesWiWTmE0h0%2Bnaim7SKL6fJnF6WNaXB7gi908Y09JXaIwQHpnadAuoQcJEP0csrx%2Foql%2BGkDrew2mBEV7rYFyW0FKoiMxafbkJ588j3utSCqFCG3Yw04ro1uSRzgGUMcPS%2FgUAaKJZyZp290h6PanSIBI7KMVGlPsDvEq%2B2XkESo%2BNs%2FCzlUFvxu%2F0aWfcBXfyqJG28AuRaWk%2F7%2FEAtrq8dDTxtr9RgKaTQgHyb0Kwis1%2Bx3e6WlBnhTFP5s%2FSTMl4568Byex9iFYBGlLcom%2Fzt%2FK7F%2BKWWeX2UrQZEElNaIEbkuCmJ7HRWLO7G21NK39xVRwgBzkyqZ0SnSCOsrms3SOMkntP7cZR7tI4uCR5OlA%2Ba6xVUyFJuLjPIG7iQnRlypV0PcadMDDXanC06NmYYcgkoqcUZZM4cuQ8rDpozdwbA7F8kbYj%2B99qTMkQW8vWH86olvGpmAU5E%2F32bV34KJIokZn%2BvQQL%2BcEoz%2BXqYQSABjfOQ0D904cw5PuQnMNyfi8oGOqUBJ%2FX%2B8S5rkkD%2BknjiaiETmKLQgk61fhfegKDSrx%2FmWnKI76qYcA0ko%2Fsn%2F9JCsJaL7M5U6dXMxZnZRoFj5I3yqGhUTLRR4y%2BdUdKNzmgymqKM8rNBz91BuJ1HKrHrexMiXKvm8aoeqnRkZmSA3t7q6cmqWOKx4apD6fJz8Vi5VRP%2FcUauyT%2B6MJ1koewc7nYbL1MmumKm6nw26DwAaxz1%2FK2u737U&X-Amz-Signature=cdf7ef529635d6222299ff387b82950849687f8809f22b842f498dd1ae0963a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYTNU2DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXgUxs2arUkQCSJD%2BlFO9UeFFAFP5aZPAr1AomjI%2FSXAiEAxiwKFzd0XYbpxzo1ksAvbHSah0QYdQKQxbqj%2F6aLnJ8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRuMTqbvX6xYbFZlyrcA2uUIGewvtybFWZbc%2FWQdFdjhgJrMmSEWdTYdXL02J5B%2BvjDev6WKyAvHFG5Tl35f9Yp%2FPVW2HtsuU08tKtSdElDqaW4sO%2Bw9sLVZRigi9YNDW3u61x4Nm77zPBIZesWiWTmE0h0%2Bnaim7SKL6fJnF6WNaXB7gi908Y09JXaIwQHpnadAuoQcJEP0csrx%2Foql%2BGkDrew2mBEV7rYFyW0FKoiMxafbkJ588j3utSCqFCG3Yw04ro1uSRzgGUMcPS%2FgUAaKJZyZp290h6PanSIBI7KMVGlPsDvEq%2B2XkESo%2BNs%2FCzlUFvxu%2F0aWfcBXfyqJG28AuRaWk%2F7%2FEAtrq8dDTxtr9RgKaTQgHyb0Kwis1%2Bx3e6WlBnhTFP5s%2FSTMl4568Byex9iFYBGlLcom%2Fzt%2FK7F%2BKWWeX2UrQZEElNaIEbkuCmJ7HRWLO7G21NK39xVRwgBzkyqZ0SnSCOsrms3SOMkntP7cZR7tI4uCR5OlA%2Ba6xVUyFJuLjPIG7iQnRlypV0PcadMDDXanC06NmYYcgkoqcUZZM4cuQ8rDpozdwbA7F8kbYj%2B99qTMkQW8vWH86olvGpmAU5E%2F32bV34KJIokZn%2BvQQL%2BcEoz%2BXqYQSABjfOQ0D904cw5PuQnMNyfi8oGOqUBJ%2FX%2B8S5rkkD%2BknjiaiETmKLQgk61fhfegKDSrx%2FmWnKI76qYcA0ko%2Fsn%2F9JCsJaL7M5U6dXMxZnZRoFj5I3yqGhUTLRR4y%2BdUdKNzmgymqKM8rNBz91BuJ1HKrHrexMiXKvm8aoeqnRkZmSA3t7q6cmqWOKx4apD6fJz8Vi5VRP%2FcUauyT%2B6MJ1koewc7nYbL1MmumKm6nw26DwAaxz1%2FK2u737U&X-Amz-Signature=591c30fd16527cc3dc578914299499ea6a3a12895a7d013d59681dab3f40bb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
