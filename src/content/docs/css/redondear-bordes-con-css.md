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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLTANRL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX82ma2fZ10bi9k6%2BEvsl2u5QS8W4P3xkNvr8CsMFGOAiEAq968ORnlZ45CjEGQg5RTefqBe%2B85yJc0q9Z5NHryX2cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7Bgq1ibC4kYhAyFCrcAzU96IBgzeYOPIFEMLOGGlRncYYtJtG0LoxTrYQ%2Fjytke73VjPsieRd5oaT62hiLSkyBpdPZUueVx6i8UokhHqtMpwCUVXinzqvg5tc5LIIEVmq4T08b5f%2FCpAFEdjTpfRqAcqobp21E8O3wfVfGsT0HG1tsqnMM0x4GkRFQOThpZiQWcxa70tRFZXs2aAMYrnHElj%2BsTewrPQJEFCedSt%2FK0I8zshOwW3nZpyDAAKs6Ww%2Bgt96nVnhBEMCqni8caWpCVe23xt29%2F74OUQufOe3BZgnQR7wRazJ8oWLuvMSEv9UGTU5c9hZUQTywiszF5c%2BPsOQtsIVuQP3si7UvPz4fKGtxvEPJGbKNQ5R5CMV5rnwZpBBXScxAvSNH6aImBPr1KPcSLAx%2BZau%2Fb%2F8oRem52%2B6OoT%2BxTfZmAeuvVwBVOvxXktwJTJ0qZF9xH3o3XewS%2FSzGGp20JDk5oLVRL6ysCdDUbPujoIqtGNjxfuueUsFFJI6dZzO7UTwV6HJG7OVn60xX13GtW%2B%2FqYjyvT8hehGKabakGngOzWR%2B3MG2hFlxR3v6Z%2BQBSQ8G7M8th9tIgSD71q6CvgbZv7mjbSydcAuoZ78%2FsJOcyadQlCcXTXDKnE1vxgsbdPqVMMKP90skGOqUBJP4JnnasJ9deAED1Ut14TgLYesyyDDyWrhx5FY%2Ff3SsEYOF5WzMdTGz0aVfodQbGhWF8eyJeQ14IqoZMNtk44r%2FTJWKJdT0rFmz7wC30dAmxEPuzYPPgtWrHHgwx%2FvE5gP0V4pTDaOY%2Bn3JIGuQmeFNfPsqk9hgWe2B7xnjvvHLUxPUNPajfJcEO5E7kdqkmXN1mkgZMHFill684AoX6eCRvkPv8&X-Amz-Signature=39626316cce5a2a8b75a4b63a1798963bca00463283da3c2e5f744233b37c8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLTANRL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX82ma2fZ10bi9k6%2BEvsl2u5QS8W4P3xkNvr8CsMFGOAiEAq968ORnlZ45CjEGQg5RTefqBe%2B85yJc0q9Z5NHryX2cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7Bgq1ibC4kYhAyFCrcAzU96IBgzeYOPIFEMLOGGlRncYYtJtG0LoxTrYQ%2Fjytke73VjPsieRd5oaT62hiLSkyBpdPZUueVx6i8UokhHqtMpwCUVXinzqvg5tc5LIIEVmq4T08b5f%2FCpAFEdjTpfRqAcqobp21E8O3wfVfGsT0HG1tsqnMM0x4GkRFQOThpZiQWcxa70tRFZXs2aAMYrnHElj%2BsTewrPQJEFCedSt%2FK0I8zshOwW3nZpyDAAKs6Ww%2Bgt96nVnhBEMCqni8caWpCVe23xt29%2F74OUQufOe3BZgnQR7wRazJ8oWLuvMSEv9UGTU5c9hZUQTywiszF5c%2BPsOQtsIVuQP3si7UvPz4fKGtxvEPJGbKNQ5R5CMV5rnwZpBBXScxAvSNH6aImBPr1KPcSLAx%2BZau%2Fb%2F8oRem52%2B6OoT%2BxTfZmAeuvVwBVOvxXktwJTJ0qZF9xH3o3XewS%2FSzGGp20JDk5oLVRL6ysCdDUbPujoIqtGNjxfuueUsFFJI6dZzO7UTwV6HJG7OVn60xX13GtW%2B%2FqYjyvT8hehGKabakGngOzWR%2B3MG2hFlxR3v6Z%2BQBSQ8G7M8th9tIgSD71q6CvgbZv7mjbSydcAuoZ78%2FsJOcyadQlCcXTXDKnE1vxgsbdPqVMMKP90skGOqUBJP4JnnasJ9deAED1Ut14TgLYesyyDDyWrhx5FY%2Ff3SsEYOF5WzMdTGz0aVfodQbGhWF8eyJeQ14IqoZMNtk44r%2FTJWKJdT0rFmz7wC30dAmxEPuzYPPgtWrHHgwx%2FvE5gP0V4pTDaOY%2Bn3JIGuQmeFNfPsqk9hgWe2B7xnjvvHLUxPUNPajfJcEO5E7kdqkmXN1mkgZMHFill684AoX6eCRvkPv8&X-Amz-Signature=8d895aeaf53cd43b510c48f28765b73c3f85ae75a79aef99b101c8ad4c296671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
