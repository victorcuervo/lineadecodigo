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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3KLJY7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWy4vEWzTry5thdupYDPhaTu7S5vrsMMjKokg%2FTAmCNwIhAMPovPcQ%2BP16i4gJXWU9TQZx34sco73q3ZgoxAHXDF3DKv8DCHIQABoMNjM3NDIzMTgzODA1Igy3yBaF5l1hl6MCd80q3APELT3ob9BSVHJb1QkLNLApEYV%2BMv5jgjIOszhanyekPDlWBl3zzlQ4tehjs82BUjdpOPfnSCq7CdwD0lhygtpHvt3RDoojdR6YhvRPrssHQTHFxSwlYz5s4QfxQt0HfH30YE%2FHpoa6WDYS%2FOcD0Btf4vcCat%2FpjPZe1sCp%2FvmffNRi%2FvmRbhDnaRJYLdAaTtkp4eDVjcWcbxR%2F4nY4QJKfd55qPGBMB0SDQV6Y8s34Gz%2ByjdNWZMV3n5TC1h7X3EIZjzvZoORhnOkOXHB%2Bt9fzSkDX8wI0quYAgDIX24bHRBdRTHEclTOio24uTSaXonw52t6dLXSkNd%2Bpf1%2FV422%2FhNONgHR8wUthjrIGj8ZO%2FjWAJkwHfP8nHo%2B1qkjS4yZZUa7KtssReIeKMJwYn%2FALVn1jM9eIATk7810rGHT%2BIXTWrdM5QOqGoT5XGrG2FXd9bXf9uBsjJqgVivwKPioLiQ8gigouhbyQPzDY3%2BxR5SH52dvwMZej9LAjCJeK7ecTF9%2B%2F7%2FoRkOfOzxYF7IKWNcSvlHiO%2BY89KT6DuwqgdK%2BzDel4GV8Jukaqx%2B9iE7uhDGMeYU143ODWhnhunberop4XaqdqsGc7ycB%2FP%2FibslsI2OaaB2G7rGcT2DCy68%2FJBjqkAQzN%2BUszsve8wrksDydFTlzGqScHBqb%2FqyRwDwAn7cnWFENXtu46AdI%2BHGeteSwYJNJ8OWkrj8xxDsboAfuj2BajQJrNBu0RwocHpudhNs9viqAQl84mIskxOyIGZp9AnbCbNNem62SS%2BhSkmU%2FoiiK0%2B3rBHNZlF2MsRdSU5o%2Fy02NhtQsLcF5jnAp4eKSOCoNGPkhJxU0H3E82XQOb3DKvrEO1&X-Amz-Signature=98d6f442db65790356236230b7342498724ed69c0b7d8b6a2fe8a345db2e5aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3KLJY7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWy4vEWzTry5thdupYDPhaTu7S5vrsMMjKokg%2FTAmCNwIhAMPovPcQ%2BP16i4gJXWU9TQZx34sco73q3ZgoxAHXDF3DKv8DCHIQABoMNjM3NDIzMTgzODA1Igy3yBaF5l1hl6MCd80q3APELT3ob9BSVHJb1QkLNLApEYV%2BMv5jgjIOszhanyekPDlWBl3zzlQ4tehjs82BUjdpOPfnSCq7CdwD0lhygtpHvt3RDoojdR6YhvRPrssHQTHFxSwlYz5s4QfxQt0HfH30YE%2FHpoa6WDYS%2FOcD0Btf4vcCat%2FpjPZe1sCp%2FvmffNRi%2FvmRbhDnaRJYLdAaTtkp4eDVjcWcbxR%2F4nY4QJKfd55qPGBMB0SDQV6Y8s34Gz%2ByjdNWZMV3n5TC1h7X3EIZjzvZoORhnOkOXHB%2Bt9fzSkDX8wI0quYAgDIX24bHRBdRTHEclTOio24uTSaXonw52t6dLXSkNd%2Bpf1%2FV422%2FhNONgHR8wUthjrIGj8ZO%2FjWAJkwHfP8nHo%2B1qkjS4yZZUa7KtssReIeKMJwYn%2FALVn1jM9eIATk7810rGHT%2BIXTWrdM5QOqGoT5XGrG2FXd9bXf9uBsjJqgVivwKPioLiQ8gigouhbyQPzDY3%2BxR5SH52dvwMZej9LAjCJeK7ecTF9%2B%2F7%2FoRkOfOzxYF7IKWNcSvlHiO%2BY89KT6DuwqgdK%2BzDel4GV8Jukaqx%2B9iE7uhDGMeYU143ODWhnhunberop4XaqdqsGc7ycB%2FP%2FibslsI2OaaB2G7rGcT2DCy68%2FJBjqkAQzN%2BUszsve8wrksDydFTlzGqScHBqb%2FqyRwDwAn7cnWFENXtu46AdI%2BHGeteSwYJNJ8OWkrj8xxDsboAfuj2BajQJrNBu0RwocHpudhNs9viqAQl84mIskxOyIGZp9AnbCbNNem62SS%2BhSkmU%2FoiiK0%2B3rBHNZlF2MsRdSU5o%2Fy02NhtQsLcF5jnAp4eKSOCoNGPkhJxU0H3E82XQOb3DKvrEO1&X-Amz-Signature=c8b498d4eb038bc8c08744116712190086d1d4e64e1cb2e41740a31f09985eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
