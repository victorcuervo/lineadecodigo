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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H3ZGJS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb1uLGj8ck0KDlIMqwU%2F3X3RVHNhKQ6Tslvvu%2Fx4t8fAiBTCnbUz1wtidTxLEmCuFCYnweF3rb6Pqkc50iO6G2cgyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYv4yczY3CVCanh3WKtwD5CXg9QBYVvaL9Dtpry3xbkRFhMyof9aOM2XqYGlbvqaJUwBtRBFDwOduMGhDfitj49ouA%2FltwoXOVznmk3T4Y5ecwNmvoWMs8TZgtR9ZT4DISXLZmgP36NMTXtvtzNcyjM%2Bf9R7Vw%2FvkK014FyVS%2F%2FhmIYa7gY8YyE9vZf4ws4ZxzPBsqB9N4cvmwZMKqzXBItZsym3OBpwGkQ%2Fc8pR02Wg1kbHfHXfce5WG%2Bm3D4qqLLWByIGheP0ge4ZVMp6%2Bb6VODX8QVdMcUH%2F7XicHIrpR4iAGaZUc59eTSPrBizYYPyMucF8U8oMPvZtLwtieBtOUVnuw8P9981sPCck9ezqEf7K8kXPlScIzNKBK7E3fH4FnzxayoIhu77q7GQx3y1eVFNdTIXPc36yyyRqPyCAPAiKB%2FVGtl%2BVe8Q9bVl1pRlJQ2LAqNAC1I2wxUyKA0PilC5PSp8Z%2B4eW%2FlMCZcURbAY9s5yklR8j%2BhYSnoyG8C5bPmQuflzaJqSB%2Fk3zhIwk2IjjHk3FlwvmVh0Yg94tocPMPOVibZmVsZq62FliCtdxL8yCcekdUfxB4jARqEBXd%2F5LBXaM6spQgEJa4rSFvYr54BG4%2BIt2AbdIp1c66hYFUJXqrct74tG4Iw6%2B3ZyQY6pgEcLdBHAEr%2BWH%2B4ZcVgiuW9qAFane9C8vFTAMuWFZeIIhCp5GdoM7SAB9aB7Hx2t511SOWL1%2FqpRdpXAgxk6aKBF%2BPUTI5DKV2XEwQRR97zQlO1MIIMDC3yU4ApbJLxjtHTHoTpBWoudTGmazO0H2Ysv27xL4kSKXvMUPdCKzp0ghR9gJHTItrKe%2FJkq2gvT5lvqd6Z5nFzTGH2h1fIisELnOcAq9rP&X-Amz-Signature=93d9a77cff6c00979d14bcbc34e8637b112ce3370e3d9e516199a61823b6a340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643H3ZGJS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb1uLGj8ck0KDlIMqwU%2F3X3RVHNhKQ6Tslvvu%2Fx4t8fAiBTCnbUz1wtidTxLEmCuFCYnweF3rb6Pqkc50iO6G2cgyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYv4yczY3CVCanh3WKtwD5CXg9QBYVvaL9Dtpry3xbkRFhMyof9aOM2XqYGlbvqaJUwBtRBFDwOduMGhDfitj49ouA%2FltwoXOVznmk3T4Y5ecwNmvoWMs8TZgtR9ZT4DISXLZmgP36NMTXtvtzNcyjM%2Bf9R7Vw%2FvkK014FyVS%2F%2FhmIYa7gY8YyE9vZf4ws4ZxzPBsqB9N4cvmwZMKqzXBItZsym3OBpwGkQ%2Fc8pR02Wg1kbHfHXfce5WG%2Bm3D4qqLLWByIGheP0ge4ZVMp6%2Bb6VODX8QVdMcUH%2F7XicHIrpR4iAGaZUc59eTSPrBizYYPyMucF8U8oMPvZtLwtieBtOUVnuw8P9981sPCck9ezqEf7K8kXPlScIzNKBK7E3fH4FnzxayoIhu77q7GQx3y1eVFNdTIXPc36yyyRqPyCAPAiKB%2FVGtl%2BVe8Q9bVl1pRlJQ2LAqNAC1I2wxUyKA0PilC5PSp8Z%2B4eW%2FlMCZcURbAY9s5yklR8j%2BhYSnoyG8C5bPmQuflzaJqSB%2Fk3zhIwk2IjjHk3FlwvmVh0Yg94tocPMPOVibZmVsZq62FliCtdxL8yCcekdUfxB4jARqEBXd%2F5LBXaM6spQgEJa4rSFvYr54BG4%2BIt2AbdIp1c66hYFUJXqrct74tG4Iw6%2B3ZyQY6pgEcLdBHAEr%2BWH%2B4ZcVgiuW9qAFane9C8vFTAMuWFZeIIhCp5GdoM7SAB9aB7Hx2t511SOWL1%2FqpRdpXAgxk6aKBF%2BPUTI5DKV2XEwQRR97zQlO1MIIMDC3yU4ApbJLxjtHTHoTpBWoudTGmazO0H2Ysv27xL4kSKXvMUPdCKzp0ghR9gJHTItrKe%2FJkq2gvT5lvqd6Z5nFzTGH2h1fIisELnOcAq9rP&X-Amz-Signature=1c674e436ecfcb94ca6151f82314a58de3ea7695de2269a5c51a832b3b231d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
