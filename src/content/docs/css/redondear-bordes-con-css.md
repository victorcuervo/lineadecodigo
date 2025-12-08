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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOSKGK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfYiP5T4zczCD%2F8RTTXCrOLByU9idnJjn8grYtRkQbuQIhANdlmYErnn771oVYl%2FCke8m0Z5F1YOKWpi9UZ0weRFmrKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzxwiY3mH0Ypgh7%2F0q3AP%2FCYmNA6olUwFlzQKLiEq%2FRojqrBm7bTW%2FOS1j5oFfAW3IBeT46w%2BAhL9M7W7%2Bp2ISAz1fONava5%2BuddTio2rzgS65BaHadQa785euTOpY%2BT2Utfu6jBejC2uQtaubMkUPt6RwuCmKFemsM3id6fpNwasWvo0%2F6lm9hLqNELTGMUcIIm3QXe7nRK2oXqouypHlVCAMOa7Wo88gR1ES8lZlpkJ7ocMgaeT4BwTN91Qm7D27K6PppAftJ5vjUioXsuDLPMSvr%2FfEO%2FQjGoXRadZ1LC2rxUP1Rq29hn5mbLdCgNXTiCMHzlXe%2BcQ%2FAyzi7mdd7mpZO0NMOtdk%2FUty0%2BWuqumQ0zaAoUULaa%2BPwI%2FLNhp7%2BxInNBNBraxTi2R2KzITMI7q0n8iCP1ZhqUcgXNWIpYLInaP0Evw0xPJDk08kgDl0Vxov8BTsedqpcxzn2DvyC4M76n9tpTNhuAYFZxRgdrKDirEbkukA1IAYg2gCcKmisl3P2xAWyk2kPg95f0HC97cVFIU1%2BGBMxiB5hy%2Ba7D2v1gdaOCvduAN0GXJbOqnNeYRhkADd7hTMIKJvk5aPqaRAr7dgK0ErTX7AHDLDz1%2FahRiEXeLPs%2FekFRFJOpNpyHv4WlzvRTuijCf7dnJBjqkAc0ny8PjPn9R7ffnzu1UkpJSLG5p6qjnPy7rjS%2BZiPKo1usSwjm%2BpD2moo7izLqrM%2BH7fEnLTSMSSEMVppv%2FhFVSkRAU5%2Bm25QsgTfJewmUt1CgXoCdXanmgSo3CSSKpFgQi6gds0ki%2BrpA7gNYguJAOgI%2FZZibIybpaObYPJt1qzKRi2iV7enYhjwMM4DWFlZ35ZNI%2Brwu3UZW%2FMmZSCtgm89zm&X-Amz-Signature=49bd00fc63e669aa0a97e3a0813cbd2bee4c45e87941ac3515d5d631b560d4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOSKGK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfYiP5T4zczCD%2F8RTTXCrOLByU9idnJjn8grYtRkQbuQIhANdlmYErnn771oVYl%2FCke8m0Z5F1YOKWpi9UZ0weRFmrKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzxwiY3mH0Ypgh7%2F0q3AP%2FCYmNA6olUwFlzQKLiEq%2FRojqrBm7bTW%2FOS1j5oFfAW3IBeT46w%2BAhL9M7W7%2Bp2ISAz1fONava5%2BuddTio2rzgS65BaHadQa785euTOpY%2BT2Utfu6jBejC2uQtaubMkUPt6RwuCmKFemsM3id6fpNwasWvo0%2F6lm9hLqNELTGMUcIIm3QXe7nRK2oXqouypHlVCAMOa7Wo88gR1ES8lZlpkJ7ocMgaeT4BwTN91Qm7D27K6PppAftJ5vjUioXsuDLPMSvr%2FfEO%2FQjGoXRadZ1LC2rxUP1Rq29hn5mbLdCgNXTiCMHzlXe%2BcQ%2FAyzi7mdd7mpZO0NMOtdk%2FUty0%2BWuqumQ0zaAoUULaa%2BPwI%2FLNhp7%2BxInNBNBraxTi2R2KzITMI7q0n8iCP1ZhqUcgXNWIpYLInaP0Evw0xPJDk08kgDl0Vxov8BTsedqpcxzn2DvyC4M76n9tpTNhuAYFZxRgdrKDirEbkukA1IAYg2gCcKmisl3P2xAWyk2kPg95f0HC97cVFIU1%2BGBMxiB5hy%2Ba7D2v1gdaOCvduAN0GXJbOqnNeYRhkADd7hTMIKJvk5aPqaRAr7dgK0ErTX7AHDLDz1%2FahRiEXeLPs%2FekFRFJOpNpyHv4WlzvRTuijCf7dnJBjqkAc0ny8PjPn9R7ffnzu1UkpJSLG5p6qjnPy7rjS%2BZiPKo1usSwjm%2BpD2moo7izLqrM%2BH7fEnLTSMSSEMVppv%2FhFVSkRAU5%2Bm25QsgTfJewmUt1CgXoCdXanmgSo3CSSKpFgQi6gds0ki%2BrpA7gNYguJAOgI%2FZZibIybpaObYPJt1qzKRi2iV7enYhjwMM4DWFlZ35ZNI%2Brwu3UZW%2FMmZSCtgm89zm&X-Amz-Signature=f83c64c75c279b32758a1967dc8bcfbd8154b3a167068708100b2fc8d70d0d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
