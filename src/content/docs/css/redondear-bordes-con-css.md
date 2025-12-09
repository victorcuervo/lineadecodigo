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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZXIH7W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUd1g7bySuRvSf8OL%2FBOgpyVplESDKPk0R0ntkE85AswIgWFUAvUmpV04iHCtqvefkO3zE3TtXjOwJm6UO0QQgd24qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiZq0FN4fFNcA8i3SrcAwUcoonw33D4jPCP1T8%2FQd7qwLkwRgK1n%2FpHIgLQCF3SYJ1hAJJ%2Fw2U%2FMnY1IhVcV3bypimv4fqHx3FIqQyYpFQHT5SmuHu%2FyS495cDQr%2BPfRZ8hnTbsTidwSzpnJRHr3McFdzjVFOPq4wuxNat5abpaWwg0SobIHCXq%2Bp2ouHmZXkI4yWSHwXVjyaSbvqMRXmtdRzuy1GOn0ofhFNReQ4rCRqzzupVdWncvAam29AStedySvEbthKDTH4dqU6MNa4YHsM4mrxBhrV0B8bvXIWAfIgptCYslFVcQ1FcO1WY99hdrqbQurIgrDzo5FtpjE5H3XstQvbr%2FizRGEXgPkXZZLMZreNCTjXgRvYTI%2Fq%2BNmow6ptzCq2h%2Fc5Xb217rm3N4tzZrVb%2BfiVDHJbeVZRO9kMu2AJZ3iLBq9M9uWhhnPH2371zNZ2fJJT3Z6WVogqYZomnEb%2B1yNo9CvWDzz2Sa0S7V0xtu4NkOnexy0mMzHRdFTvmmbl0mjivwzseNIdK5XeZwpx8iPcMktDw7JAj%2F%2FKg8mY%2BR3D801BDMgBL15WTDffQvzNZGTu2bWQJ2lc%2F6snK%2FFBgxqyH8mLykeBeh%2BCDp2jIZ7Md03wfrdAxjQvJz8kUyFA%2FO1351MLyP3skGOqUB4cel2CO8wm7CO2oSlzSuyg42bBM4Zcq7u%2FHdbihEH5YHFnSRu7A4gD2ZLhedx7S%2FD91zuA7BVo8xlUSz%2FexzDQiIVhOye6RSt%2BL4JWKgujNKI76D2GvEsRY5HewgcBgM3%2FGgx83VRs%2FAtwT3fWNqP92h%2FjQ%2Ffdz5wu9KvC5hAgw54svKBb7bVd55eJKqQgCpDVTKy0aG6yK9ASTijDg1t70%2BwCCE&X-Amz-Signature=3f754706e3aad7dffe4ac51bce006d1636417152f079c5242ee3fbef578527ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZXIH7W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUd1g7bySuRvSf8OL%2FBOgpyVplESDKPk0R0ntkE85AswIgWFUAvUmpV04iHCtqvefkO3zE3TtXjOwJm6UO0QQgd24qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiZq0FN4fFNcA8i3SrcAwUcoonw33D4jPCP1T8%2FQd7qwLkwRgK1n%2FpHIgLQCF3SYJ1hAJJ%2Fw2U%2FMnY1IhVcV3bypimv4fqHx3FIqQyYpFQHT5SmuHu%2FyS495cDQr%2BPfRZ8hnTbsTidwSzpnJRHr3McFdzjVFOPq4wuxNat5abpaWwg0SobIHCXq%2Bp2ouHmZXkI4yWSHwXVjyaSbvqMRXmtdRzuy1GOn0ofhFNReQ4rCRqzzupVdWncvAam29AStedySvEbthKDTH4dqU6MNa4YHsM4mrxBhrV0B8bvXIWAfIgptCYslFVcQ1FcO1WY99hdrqbQurIgrDzo5FtpjE5H3XstQvbr%2FizRGEXgPkXZZLMZreNCTjXgRvYTI%2Fq%2BNmow6ptzCq2h%2Fc5Xb217rm3N4tzZrVb%2BfiVDHJbeVZRO9kMu2AJZ3iLBq9M9uWhhnPH2371zNZ2fJJT3Z6WVogqYZomnEb%2B1yNo9CvWDzz2Sa0S7V0xtu4NkOnexy0mMzHRdFTvmmbl0mjivwzseNIdK5XeZwpx8iPcMktDw7JAj%2F%2FKg8mY%2BR3D801BDMgBL15WTDffQvzNZGTu2bWQJ2lc%2F6snK%2FFBgxqyH8mLykeBeh%2BCDp2jIZ7Md03wfrdAxjQvJz8kUyFA%2FO1351MLyP3skGOqUB4cel2CO8wm7CO2oSlzSuyg42bBM4Zcq7u%2FHdbihEH5YHFnSRu7A4gD2ZLhedx7S%2FD91zuA7BVo8xlUSz%2FexzDQiIVhOye6RSt%2BL4JWKgujNKI76D2GvEsRY5HewgcBgM3%2FGgx83VRs%2FAtwT3fWNqP92h%2FjQ%2Ffdz5wu9KvC5hAgw54svKBb7bVd55eJKqQgCpDVTKy0aG6yK9ASTijDg1t70%2BwCCE&X-Amz-Signature=26dbd60b8b1b4b91074302b39264faec3226a6e78b006d5938d7eb5d2387fcf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
