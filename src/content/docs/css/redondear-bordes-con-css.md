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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6GIHWG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpzpbTt1SMrTZdQx8ZLX%2BC40jbngGuRpNaTQNQx0KVVAiAVlinxNw%2FkpIqs5YZrIOur4CqPs7fp1CHST3dThOZpwyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMewub%2BC2KfN2bk%2Bu5KtwDlKiXhD22v2LK%2B6gPR0CsAPYdg8DqxZSdHW%2B9a9b9woXwv%2B5zIN3AFNKbNfwrcCZlZzGvMpBaJF4uOfsB113NjQMdSVqdjoyck4%2BESse%2Fk7W52lB5YzdkSa%2BSd0%2BTra%2FAppgHR8zCykz4%2B7NNj1MK%2FW9tvc%2BcLuhlqulOUeqsxpDJMd%2FyW38wHphCNMlSz%2FCc5yOOwKmP819tEiSCCeHtMnSl%2FSkdr9efVs58ukskuYMC4ky5v6vjHmhZqPQ1VMjEyrA05wYEoGELrzTxEZMmYT18yl9CcIYYNl2LT8kBeBGHEVLakfInudRC5ULn1MVaDdvYPlJlDUu5VZmx%2BkFsCkHV1EQFNnRtV77%2B3IK64rTkg%2B7EJNBcXWrsKEuQsaK12Efys%2FUxNA8K%2Bfyay3tROd6jgHNlMwEF0f%2BTfjqpvlk3orRme5mUQw9d4SqR7QM4PTFOYeR48xGW4YziSSmOmMWcWAKGJvnzlPv%2F6KyamL1CVvvk3V6nz78NEMW1FIt0IuC%2FM3IOEPFUFa9wbSadQD8uf6FohRx8OrC7ZcYFDa%2BqPEkcsyUlDFmMb6cP79RZuQL7B8ac0fuyNpR%2BMqy5cUCY0ouS%2FrUCBIBIAiiWukLhjhaUv%2Bc%2FzCrpkdcwhsfXyQY6pgGqgr%2BCS8vtDrH6GsLS8oQpPEHYYvK3IAaEzNpNmaeG%2BzSDKULUDIgYx4bFQrz32y%2F9KERzkyEDUYVhr5G6q4qPRgnyp%2BxSNm3WmYDETQmXByCyNXKIcxH86WaXbKeG7RhImklqTh19V40kIVh2OilZmYAIZmywRm4wUpmLH5Dl6BN4Q1%2B8HoXkQioyW%2FF0HSMyzMwe0knJUA%2BYR8NNt6NCpYjDO8Tc&X-Amz-Signature=9ed4596f2efdfa9bf5c260e294b0301e4da00ea85ceb59163983c4e618263fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI6GIHWG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpzpbTt1SMrTZdQx8ZLX%2BC40jbngGuRpNaTQNQx0KVVAiAVlinxNw%2FkpIqs5YZrIOur4CqPs7fp1CHST3dThOZpwyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMewub%2BC2KfN2bk%2Bu5KtwDlKiXhD22v2LK%2B6gPR0CsAPYdg8DqxZSdHW%2B9a9b9woXwv%2B5zIN3AFNKbNfwrcCZlZzGvMpBaJF4uOfsB113NjQMdSVqdjoyck4%2BESse%2Fk7W52lB5YzdkSa%2BSd0%2BTra%2FAppgHR8zCykz4%2B7NNj1MK%2FW9tvc%2BcLuhlqulOUeqsxpDJMd%2FyW38wHphCNMlSz%2FCc5yOOwKmP819tEiSCCeHtMnSl%2FSkdr9efVs58ukskuYMC4ky5v6vjHmhZqPQ1VMjEyrA05wYEoGELrzTxEZMmYT18yl9CcIYYNl2LT8kBeBGHEVLakfInudRC5ULn1MVaDdvYPlJlDUu5VZmx%2BkFsCkHV1EQFNnRtV77%2B3IK64rTkg%2B7EJNBcXWrsKEuQsaK12Efys%2FUxNA8K%2Bfyay3tROd6jgHNlMwEF0f%2BTfjqpvlk3orRme5mUQw9d4SqR7QM4PTFOYeR48xGW4YziSSmOmMWcWAKGJvnzlPv%2F6KyamL1CVvvk3V6nz78NEMW1FIt0IuC%2FM3IOEPFUFa9wbSadQD8uf6FohRx8OrC7ZcYFDa%2BqPEkcsyUlDFmMb6cP79RZuQL7B8ac0fuyNpR%2BMqy5cUCY0ouS%2FrUCBIBIAiiWukLhjhaUv%2Bc%2FzCrpkdcwhsfXyQY6pgGqgr%2BCS8vtDrH6GsLS8oQpPEHYYvK3IAaEzNpNmaeG%2BzSDKULUDIgYx4bFQrz32y%2F9KERzkyEDUYVhr5G6q4qPRgnyp%2BxSNm3WmYDETQmXByCyNXKIcxH86WaXbKeG7RhImklqTh19V40kIVh2OilZmYAIZmywRm4wUpmLH5Dl6BN4Q1%2B8HoXkQioyW%2FF0HSMyzMwe0knJUA%2BYR8NNt6NCpYjDO8Tc&X-Amz-Signature=ed2291ab00bf8b34ff7417ed47f23665f217fdcdc267e325b8d2fea8cc05c9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
