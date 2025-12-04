---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3EB62L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDSBMcA046%2BeNiXBMPZ1e80GWKGvAeMs51z%2B8Fpr0Lp%2FgIgO9p4vG7cahV3ysNG%2FbT6Y518Uak%2FZwiNSznU4%2B1v%2Fo4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAQdQBsghfmFEAgFkSrcA9jtnzCavqMUg1pQVRihhzbIPWxg5lAAUsZI2fQFMdXiH%2BlXRir2SbUsxtBvGUHW1tdgA1o5jq4Kq2pTefVpEBO3DC7C56DuAo6dXk8mEjSPBIF3CaoZ21beuZNfl1egnZUp%2FJdo1XMfLtekouaCw%2FO7cxG1CKABSQv9p2GKHWDRhB32JVi1XGYHKP9avMA9aX2GGjpOKNyu10psR9sspLiDeJiVlx%2FQ%2Blh3EJFWKdJsNqbViw3GWd1lY%2FAi%2Fh0jmSicq9qa1mPKGk57NE9L%2BcXSJFhWoqWt%2BSB7qkQu5LU1FY%2FR2%2BLSLSHGD3%2Bj6yBw1TzBhcYoHoThSg3V5mEgQHtdupgEG70JJiEGGAEm%2Bf3QmyoKxLgwI3r8FF9VNCQ2xOY677XLe6U7q%2BOeuhkgC4NKvUayFRBMAAlkpZTAnjJ0VOBvODHBpIftFuApF21Yxvha8fZpOrh5oCD7IcWSi4jmnNva7Rxy8Q8jk%2BOh%2BI6Pwwk17ltIB5e63C5DTcy6iWqRjl7rQktGABtqMNQwc3Ar7t2u3yZfmE9jTC4n3X4jaKSHB2uyF7e%2FA07giE3GQlXH%2FGXunlRa%2Fzu3yf47jNDl78w%2BTWvkGihHALYEulK06sM1SCAqdv7JAryPMP6Uw8kGOqUBSR4L%2Boa7pQY1woAtcFHSKVnR9YBAnYO%2FiTao25dbs6VrCCGUQGGgJdqPyvZFANjT3d3zcilDTM6CmRw7V5ISuiKMEpfruLAVTAUUqQadS5twHIu5tJJGkpGS85NiPI%2B9XfKItotXaBxBsDw9aoUTJduDE2w74jkPmkc%2BSKvIzOGW%2F0tv8%2FAS5JG0%2FKCoUx9tEt0g8DqJyd9ohNuTzSrF%2BV4%2FTMvj&X-Amz-Signature=2a9b7684baa7287b4a915e0929e47f3197f98b51652da0c48902e7771e1a4212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3EB62L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDSBMcA046%2BeNiXBMPZ1e80GWKGvAeMs51z%2B8Fpr0Lp%2FgIgO9p4vG7cahV3ysNG%2FbT6Y518Uak%2FZwiNSznU4%2B1v%2Fo4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAQdQBsghfmFEAgFkSrcA9jtnzCavqMUg1pQVRihhzbIPWxg5lAAUsZI2fQFMdXiH%2BlXRir2SbUsxtBvGUHW1tdgA1o5jq4Kq2pTefVpEBO3DC7C56DuAo6dXk8mEjSPBIF3CaoZ21beuZNfl1egnZUp%2FJdo1XMfLtekouaCw%2FO7cxG1CKABSQv9p2GKHWDRhB32JVi1XGYHKP9avMA9aX2GGjpOKNyu10psR9sspLiDeJiVlx%2FQ%2Blh3EJFWKdJsNqbViw3GWd1lY%2FAi%2Fh0jmSicq9qa1mPKGk57NE9L%2BcXSJFhWoqWt%2BSB7qkQu5LU1FY%2FR2%2BLSLSHGD3%2Bj6yBw1TzBhcYoHoThSg3V5mEgQHtdupgEG70JJiEGGAEm%2Bf3QmyoKxLgwI3r8FF9VNCQ2xOY677XLe6U7q%2BOeuhkgC4NKvUayFRBMAAlkpZTAnjJ0VOBvODHBpIftFuApF21Yxvha8fZpOrh5oCD7IcWSi4jmnNva7Rxy8Q8jk%2BOh%2BI6Pwwk17ltIB5e63C5DTcy6iWqRjl7rQktGABtqMNQwc3Ar7t2u3yZfmE9jTC4n3X4jaKSHB2uyF7e%2FA07giE3GQlXH%2FGXunlRa%2Fzu3yf47jNDl78w%2BTWvkGihHALYEulK06sM1SCAqdv7JAryPMP6Uw8kGOqUBSR4L%2Boa7pQY1woAtcFHSKVnR9YBAnYO%2FiTao25dbs6VrCCGUQGGgJdqPyvZFANjT3d3zcilDTM6CmRw7V5ISuiKMEpfruLAVTAUUqQadS5twHIu5tJJGkpGS85NiPI%2B9XfKItotXaBxBsDw9aoUTJduDE2w74jkPmkc%2BSKvIzOGW%2F0tv8%2FAS5JG0%2FKCoUx9tEt0g8DqJyd9ohNuTzSrF%2BV4%2FTMvj&X-Amz-Signature=4c04ecb5c1894a2094c8b854216ab619aabc77edd1f0c3c213d4fa4eb8a80769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
