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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUYKATX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi8jUwmBGNsYO2gdrRRvR%2BofWgnae3Jguu2TvTLQuzNAiEA%2FmUDu1H0mmyHc%2FrzHmM7rVSYpTCQYyK7%2FZYQAGIJ6%2FAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi3SOTi4jlj1HHsDCrcA8qAb%2FF5AMgiZZ2cud87lK1DAr3moPIycWnwZxIB0wuZ6fg7P9l%2FceCfP4YOesgNnTsT7wZyFOlqWCYDY1ZN6y5sl03nQO6NdaNvyY8um8IlCYfTeR2jq2aA%2BBnjeeljWNCiBBPkfrcXxwP8nT%2BZVPqWheoN3gM5MEV%2BGDzGZl7lRXxlK1i4crssrOitwfsBPBVaTtZwavEbTAFaTUUoaGzB1%2Bwn%2B%2BOkrnq225XhvonK12k41kPUQ7ysxx8DLT%2Bk5L7CVwBIOYR9Af8v2HsdqqviCNu8LmXM4UZHzAmr4OIpKQGLwaktZnt5Zkjaapj117rEalXo%2Bt7NebDcsHhxXS4gqhbkdDFMaHSv%2BgvHohvCQtHzeSoq6jMwsKepNST6Y4tS7Yuraz8fz9MIMC0soUjWolfIXAANZ7wMrENnQl5FiJgBnl1N%2B%2BCMuEmfkRyQoz6XH2DBNO7EgcfgdwPHCPeEpgaycNGvqskQO2CWViCnav7wkdF%2B2byWPOS4U4RMN87KLpJ%2FYHMp56u8Pw0CVTYUHuvcnKQApG%2B9DOb%2FxBdCahJO%2BrUdfLH%2FinLl90NTwT%2Bopb6vakS9SiwwZtbdqNar%2F4%2F%2FtfjzxctIADJFpd8YNML30cPlXoOKrgEgMN%2BKjMoGOqUBkpTWTKki1V0FpMD%2Bz16WOBtpKWte2ygrQiZ8e9W15TJ3MFwgQ6BfPZBVYJnsiAkybk09v6Zz5fKGcOrtrTfZZBqouIcfX2BEWyStd%2FF0wtUd3DzvpThQpTqq1YqWlDzokfQG%2FVRhMrupX6%2FApk30euI6FSVPJtncoyb%2FCI4J1WSPAp6rwIZg0nkdiNeD%2Fv2yy4HUbVIriHNzH2d9L6kf8Cn1LCir&X-Amz-Signature=afd1df250239ee810206609810941a9b517a1d889ce8f3818458088ae860e8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIUYKATX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi8jUwmBGNsYO2gdrRRvR%2BofWgnae3Jguu2TvTLQuzNAiEA%2FmUDu1H0mmyHc%2FrzHmM7rVSYpTCQYyK7%2FZYQAGIJ6%2FAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi3SOTi4jlj1HHsDCrcA8qAb%2FF5AMgiZZ2cud87lK1DAr3moPIycWnwZxIB0wuZ6fg7P9l%2FceCfP4YOesgNnTsT7wZyFOlqWCYDY1ZN6y5sl03nQO6NdaNvyY8um8IlCYfTeR2jq2aA%2BBnjeeljWNCiBBPkfrcXxwP8nT%2BZVPqWheoN3gM5MEV%2BGDzGZl7lRXxlK1i4crssrOitwfsBPBVaTtZwavEbTAFaTUUoaGzB1%2Bwn%2B%2BOkrnq225XhvonK12k41kPUQ7ysxx8DLT%2Bk5L7CVwBIOYR9Af8v2HsdqqviCNu8LmXM4UZHzAmr4OIpKQGLwaktZnt5Zkjaapj117rEalXo%2Bt7NebDcsHhxXS4gqhbkdDFMaHSv%2BgvHohvCQtHzeSoq6jMwsKepNST6Y4tS7Yuraz8fz9MIMC0soUjWolfIXAANZ7wMrENnQl5FiJgBnl1N%2B%2BCMuEmfkRyQoz6XH2DBNO7EgcfgdwPHCPeEpgaycNGvqskQO2CWViCnav7wkdF%2B2byWPOS4U4RMN87KLpJ%2FYHMp56u8Pw0CVTYUHuvcnKQApG%2B9DOb%2FxBdCahJO%2BrUdfLH%2FinLl90NTwT%2Bopb6vakS9SiwwZtbdqNar%2F4%2F%2FtfjzxctIADJFpd8YNML30cPlXoOKrgEgMN%2BKjMoGOqUBkpTWTKki1V0FpMD%2Bz16WOBtpKWte2ygrQiZ8e9W15TJ3MFwgQ6BfPZBVYJnsiAkybk09v6Zz5fKGcOrtrTfZZBqouIcfX2BEWyStd%2FF0wtUd3DzvpThQpTqq1YqWlDzokfQG%2FVRhMrupX6%2FApk30euI6FSVPJtncoyb%2FCI4J1WSPAp6rwIZg0nkdiNeD%2Fv2yy4HUbVIriHNzH2d9L6kf8Cn1LCir&X-Amz-Signature=250f2aa9693541effa4eb9aac93bb534c2d359760d457cdf44343257187a30ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
