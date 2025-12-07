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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJZB5RA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonn%2BzuP6er3wLes55ouGYjhjWEHPZuY%2BGYRPyASyYegIgHdMogrxj7EPjOlgcd00407QaG%2Ba8J0Qd3nZWPOsVGAgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3sgAHnr1KXGLc%2FRircA0BCsn4u%2FUKko%2FVRJye6kQ5lsx5wlmW7cdos0pKcYmZobBQFnsTisGXucQ3CpLeGiOlH%2Bih0%2Fa%2B9x%2FIT0fj9GiU%2FTbX5vv4BJEdBTZc7tFUHkObuNBHel29PiaD6aTBdMF483vJwiLwayoXu%2BdWmrzR8LNs7FZCyruPkWizITp6903j2hT2XO%2BxW8FPRavm8fUuei%2B%2FmkGnqDKNFwu%2FTDahxa84bTmTGci5WAh5rXO4luVoL13Kc2VxV3%2F42xyEKaJ8%2FMMP2jqyKaz781w%2B1ZhVtMfRmwadD%2BnnT5hplEJ9oV6HwIq2byYvnE2hVeGeX6KDAXmKtBEcTxsoWEVwk0Tafi4RBVrjYI42EFGFAmakGMV4aWlvyU%2B5Uecmj51H8%2BXFRlSSL%2BT3d5DhzaTb%2F4DK%2B38wqNal27UevBk6wN5ANA58dtQqOPLWOwX%2FUE7wGMW82J0uzAdBqorwzufCOZpolqP6ubZLcrhznpnfAndAzbmjiz5hZ8EzVlAEGdvWzaFO6VWgCuOYbJQanAoFuiDIRWLwvGX7Is8NMEibdG1FGb5xsFaWGUec5%2BP8VLm%2BiRVq2vA9ADMxQR0soJF9TI7Ma50XtbHjHR6XZOJK0iDCWwT6YSFiS%2BNge4NfNMISa1ckGOqUB1Un0S6We4YN6Gu%2BiBhtdBDFCDHNiXOuK3tvsw3ajnGdvB4SaSTWk%2FKsuvNX0%2BtGoO0fCxo5Bn70rQOTjGVc7Hfi9F37t4SB0aMtYGgcWDviGrADtG7o18AnFpU9xnAQwvuGD7LNVs4z%2FOjqZY5CuG5Py%2F8f0g3l6ndwWUS8bSdqhm1HVBEJuW58XjQQCBxEx9%2Fiz0ZsOhB8I2KE2Hg%2FIP%2FtB3%2F59&X-Amz-Signature=39980f2a1cb99e7136b55f277a62bbae1811c82f9bb1e4b7f760b5d1579a7400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJZB5RA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDonn%2BzuP6er3wLes55ouGYjhjWEHPZuY%2BGYRPyASyYegIgHdMogrxj7EPjOlgcd00407QaG%2Ba8J0Qd3nZWPOsVGAgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3sgAHnr1KXGLc%2FRircA0BCsn4u%2FUKko%2FVRJye6kQ5lsx5wlmW7cdos0pKcYmZobBQFnsTisGXucQ3CpLeGiOlH%2Bih0%2Fa%2B9x%2FIT0fj9GiU%2FTbX5vv4BJEdBTZc7tFUHkObuNBHel29PiaD6aTBdMF483vJwiLwayoXu%2BdWmrzR8LNs7FZCyruPkWizITp6903j2hT2XO%2BxW8FPRavm8fUuei%2B%2FmkGnqDKNFwu%2FTDahxa84bTmTGci5WAh5rXO4luVoL13Kc2VxV3%2F42xyEKaJ8%2FMMP2jqyKaz781w%2B1ZhVtMfRmwadD%2BnnT5hplEJ9oV6HwIq2byYvnE2hVeGeX6KDAXmKtBEcTxsoWEVwk0Tafi4RBVrjYI42EFGFAmakGMV4aWlvyU%2B5Uecmj51H8%2BXFRlSSL%2BT3d5DhzaTb%2F4DK%2B38wqNal27UevBk6wN5ANA58dtQqOPLWOwX%2FUE7wGMW82J0uzAdBqorwzufCOZpolqP6ubZLcrhznpnfAndAzbmjiz5hZ8EzVlAEGdvWzaFO6VWgCuOYbJQanAoFuiDIRWLwvGX7Is8NMEibdG1FGb5xsFaWGUec5%2BP8VLm%2BiRVq2vA9ADMxQR0soJF9TI7Ma50XtbHjHR6XZOJK0iDCWwT6YSFiS%2BNge4NfNMISa1ckGOqUB1Un0S6We4YN6Gu%2BiBhtdBDFCDHNiXOuK3tvsw3ajnGdvB4SaSTWk%2FKsuvNX0%2BtGoO0fCxo5Bn70rQOTjGVc7Hfi9F37t4SB0aMtYGgcWDviGrADtG7o18AnFpU9xnAQwvuGD7LNVs4z%2FOjqZY5CuG5Py%2F8f0g3l6ndwWUS8bSdqhm1HVBEJuW58XjQQCBxEx9%2Fiz0ZsOhB8I2KE2Hg%2FIP%2FtB3%2F59&X-Amz-Signature=113e86898e8ac8956706b553e78101b5ecb230b0fe38963d15c295e6b6e222b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
