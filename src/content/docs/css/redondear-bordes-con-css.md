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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43UFNNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6blNPxvaFNOj9dVgss8T0vAnLEwtAL%2F9cxSBMNefr%2BAIhALH9%2Bxh59%2FXVMdadumXxltTGkYAH5fDuCTxDSNfJVz2IKv8DCHoQABoMNjM3NDIzMTgzODA1Igyh%2F7TNdrP%2F4ip4TNAq3APdA4yTwq0Qtzw6Z9FEIZHwVDE28kNKeOhoi6RR4XQ7CXASt7%2Bx8c9%2F3F%2BzWVO0lgYGvhNmqwd4Q3khl0KoNf54thekoIap94V%2FE8wd%2FdRdkTzk5qCoPKQXrVs%2Bk09uR2x2Q%2BmUHJiNf5eF6Wv5OvR9IXVSLPtxXy%2BqzNCfbXCzAVLzLshAMMLk3lDQlyYiwyQp0uBhXzGScGajYmMGNAMz7kGChZ4OHGMh62MxdzZX94pJGCPSacnZHADmsqZG6%2BOoWP9kle4tHlSC0NdJoFbF0qpWJmRKdHD2uudT3ULjnGJfF6mCREgJ9RHljc5J0HCFJ8BUZbBGq4NZwDufORMeS%2F6JRhqwtauq9f30DIMrh7a43P8GOojxSsCWjUhXNcZA4GLJUw%2FKnpC2nGKaV%2BCyFc0GI2Ci29EzEaGx4tBuhmHkztywOSQXkLSpE7c1zs0s0BsutcAdcW6FSAIjdK%2FRkpVjA6SstnDtcW1exZov7IF6jZCvHLfpeydKGHJXduFmVTvedCZ09EmP52%2Ba7q4ukxpT40IabRe%2Fj7pNHa1f8ZiIzhYqYJX8RO5JHimH6%2BDOocMD%2F5PN7qfg5y%2F8cNVFeOSKR5E8aZsmF4RoZbz0w0ODZb9t4MGqmPV5%2BTCyxdHJBjqkAVIzMCfvNkKqMiRtAgxm037MVhPo1NWFDuNO38tflnP1UmnLeI9IrULrtYD%2FOiHxRlb%2Bhe63Ggge9v2FKYpVluRsErq2bA6ehcNCCKRofO7RyxGjsP8qWZGjbAOhUNYQgNKP0GVcU6FL5D9VMasbUd4goJ%2BMtRn1dllPkVwnJ8CG%2FJ7%2FYPtMrl1xtrhUC%2B%2Bl9DyTGX01oo2MlaxhEUVyhWPYGBu4&X-Amz-Signature=d635227556d6bd99fc4e0d10a247e7cb257bf4120dbc864a4bad8e3575c9cbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43UFNNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6blNPxvaFNOj9dVgss8T0vAnLEwtAL%2F9cxSBMNefr%2BAIhALH9%2Bxh59%2FXVMdadumXxltTGkYAH5fDuCTxDSNfJVz2IKv8DCHoQABoMNjM3NDIzMTgzODA1Igyh%2F7TNdrP%2F4ip4TNAq3APdA4yTwq0Qtzw6Z9FEIZHwVDE28kNKeOhoi6RR4XQ7CXASt7%2Bx8c9%2F3F%2BzWVO0lgYGvhNmqwd4Q3khl0KoNf54thekoIap94V%2FE8wd%2FdRdkTzk5qCoPKQXrVs%2Bk09uR2x2Q%2BmUHJiNf5eF6Wv5OvR9IXVSLPtxXy%2BqzNCfbXCzAVLzLshAMMLk3lDQlyYiwyQp0uBhXzGScGajYmMGNAMz7kGChZ4OHGMh62MxdzZX94pJGCPSacnZHADmsqZG6%2BOoWP9kle4tHlSC0NdJoFbF0qpWJmRKdHD2uudT3ULjnGJfF6mCREgJ9RHljc5J0HCFJ8BUZbBGq4NZwDufORMeS%2F6JRhqwtauq9f30DIMrh7a43P8GOojxSsCWjUhXNcZA4GLJUw%2FKnpC2nGKaV%2BCyFc0GI2Ci29EzEaGx4tBuhmHkztywOSQXkLSpE7c1zs0s0BsutcAdcW6FSAIjdK%2FRkpVjA6SstnDtcW1exZov7IF6jZCvHLfpeydKGHJXduFmVTvedCZ09EmP52%2Ba7q4ukxpT40IabRe%2Fj7pNHa1f8ZiIzhYqYJX8RO5JHimH6%2BDOocMD%2F5PN7qfg5y%2F8cNVFeOSKR5E8aZsmF4RoZbz0w0ODZb9t4MGqmPV5%2BTCyxdHJBjqkAVIzMCfvNkKqMiRtAgxm037MVhPo1NWFDuNO38tflnP1UmnLeI9IrULrtYD%2FOiHxRlb%2Bhe63Ggge9v2FKYpVluRsErq2bA6ehcNCCKRofO7RyxGjsP8qWZGjbAOhUNYQgNKP0GVcU6FL5D9VMasbUd4goJ%2BMtRn1dllPkVwnJ8CG%2FJ7%2FYPtMrl1xtrhUC%2B%2Bl9DyTGX01oo2MlaxhEUVyhWPYGBu4&X-Amz-Signature=a5848c5be8f6b2ae2285c1f2812c2e677315c0dab710a4d230ab5b29d889c4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
