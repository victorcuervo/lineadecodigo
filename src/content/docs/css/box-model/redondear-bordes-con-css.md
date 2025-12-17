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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VDS7WJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTtd%2FEd3lXtcY7VhlVFsbxw49onuh4zDspB3SCNSWiAIhAJR752ZV%2FT6np5Y%2FRDL%2Fu5Sk1bWT8vaF2fTdwMucfTvWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdoOfl3mRpTzEGzycq3APerYZ93mGrB%2FAP%2FqFXepHVSKec5tBr%2BAXrihov4nU6A3plZvV71xp4QunOdmE7rhG7941ElQHBro%2BxdPgdhYJVS91x5nOiI9BFwHHemnGThWrDmwuPhzpFQR9ADVCVA97Dr3zcfI%2F7otiXHiuAauK8gjzWjm8PCEiKE05TvXJNomFDumAFAPkKiSo2HnJMmty5Ui8tdb56461xXLsNiDDcrZQ0AvLMnxxPE2tvhN85NZFHG3eEsDZUPomERI3erS1ChyCpTRaxszBnfz8jE57w5YfCejQNrb0XURHFyXDgUUaFsaaP%2Bl5EJSJa3S%2FgEWeN5YMd22wiZDP0NJPWVB0kdj%2BH9mDdl3OCS5cSEj%2BQ0J27hq0qRerN4jMsCymLnM0zH8jIfyL%2BI71cbZudUmdRQDkYJ3EBltc47pNotQ9VqxJyo684XM6UZV1vlQmgt3GLk%2BDQWB0CYqgTvC77UCPmrKsPe9SzKFzU9w2ixlkF0r%2Fel4iSWLSTsiJaDxy0A%2FCRn4bvh5LoDxeSl0xff%2FKT4Xjiu9GalEbxXbHXIjzvcjRu9Tz1ktKE7vwsOjNAs9xA1DplXB8DZ0k2mO7owV8IVL%2BWHFxGW%2Fpz1gwHPBwM%2Bnb1q0aeQ35mzWiWSjCrn4vKBjqkAZXcSBBt5dHB93E%2Bv7Q6%2BAiFdEPUh7Exe8j%2FXwuTTU2jyv69PlU5umJpwaTF%2BWdcn6GQoaifIKpDZ6UiGAKxnBbr4%2FOyemYDi6y%2FA5KhcZKpUsiPDThd70%2Fnlv19hue5f2w%2FDmGtmgixwGV1ULMe%2FujqaTd7WXToHUENRWHUTFJooschvfRv7nJQQ%2FePoC7y5PkK2SBL%2Fl1APViuxQaWvb7ozeJF&X-Amz-Signature=123c01e20d3c081a929e05cf2a1c993ae83e349b83b4ad575b97c2460e7c50f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VDS7WJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTtd%2FEd3lXtcY7VhlVFsbxw49onuh4zDspB3SCNSWiAIhAJR752ZV%2FT6np5Y%2FRDL%2Fu5Sk1bWT8vaF2fTdwMucfTvWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdoOfl3mRpTzEGzycq3APerYZ93mGrB%2FAP%2FqFXepHVSKec5tBr%2BAXrihov4nU6A3plZvV71xp4QunOdmE7rhG7941ElQHBro%2BxdPgdhYJVS91x5nOiI9BFwHHemnGThWrDmwuPhzpFQR9ADVCVA97Dr3zcfI%2F7otiXHiuAauK8gjzWjm8PCEiKE05TvXJNomFDumAFAPkKiSo2HnJMmty5Ui8tdb56461xXLsNiDDcrZQ0AvLMnxxPE2tvhN85NZFHG3eEsDZUPomERI3erS1ChyCpTRaxszBnfz8jE57w5YfCejQNrb0XURHFyXDgUUaFsaaP%2Bl5EJSJa3S%2FgEWeN5YMd22wiZDP0NJPWVB0kdj%2BH9mDdl3OCS5cSEj%2BQ0J27hq0qRerN4jMsCymLnM0zH8jIfyL%2BI71cbZudUmdRQDkYJ3EBltc47pNotQ9VqxJyo684XM6UZV1vlQmgt3GLk%2BDQWB0CYqgTvC77UCPmrKsPe9SzKFzU9w2ixlkF0r%2Fel4iSWLSTsiJaDxy0A%2FCRn4bvh5LoDxeSl0xff%2FKT4Xjiu9GalEbxXbHXIjzvcjRu9Tz1ktKE7vwsOjNAs9xA1DplXB8DZ0k2mO7owV8IVL%2BWHFxGW%2Fpz1gwHPBwM%2Bnb1q0aeQ35mzWiWSjCrn4vKBjqkAZXcSBBt5dHB93E%2Bv7Q6%2BAiFdEPUh7Exe8j%2FXwuTTU2jyv69PlU5umJpwaTF%2BWdcn6GQoaifIKpDZ6UiGAKxnBbr4%2FOyemYDi6y%2FA5KhcZKpUsiPDThd70%2Fnlv19hue5f2w%2FDmGtmgixwGV1ULMe%2FujqaTd7WXToHUENRWHUTFJooschvfRv7nJQQ%2FePoC7y5PkK2SBL%2Fl1APViuxQaWvb7ozeJF&X-Amz-Signature=805984bc06f6d4989f19f855b2dbe9a3714f4509c24c074e174a51c74d14cb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
