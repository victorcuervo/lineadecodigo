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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDASZ2RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQk7khaQCgJapLpoZ5YxCiDSMEWPiBBtxdggLeicHQAiA7J0VWlipcYMaFlP%2FUtdbWdq7qZAge4pyoPuwQ%2BF8nSSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGU90Em6V8evmtGycKtwDXabMEW5rDIQw%2F7py5oZek%2FJSRaj%2BqS%2BBZ5mLnOjfMG5OKfl%2B18Ot9f4eobUePDFTFR8hBriVb9ad4%2FeaMjAAbQgcOmtOsVv%2BLsG6dW6%2BXSFL3Md9IDYTq6rLHBmuKccfwSZbzOYOdgSpxBX1H57fjyRCER9RuNPgzbtiaC0K1%2FXbi2RsfDQCSbO7LuUgFYXLeYP04jNT9c9%2ByisQHloYGDWkl%2BiasDQIXMGB8X00vJUjVXJFsrYRgCfxPvZ9Jozla38G1G57WoCw25kw1%2BBLlDiVHXXoaweb5EdixjvFzPzW%2BltNDG%2BWruiRjn5FqJYXU6H1d7QphKIkAvkbh96AS%2BHR17NTfUd0McaXgo%2FczJt0KztWC1YUvwROjflhLlqjrGCD7H7b%2BmMI1uZ8ryZh8VE%2B0LYTwN6q4w1YeuPtONTqo7owk4wuRXO2TfDDmaFNuxvR1DFwU7UP%2Bf8kj33cpPBfzy%2Bo5bNBWahEggN5IYFyicnX77W%2BOwBVR8T8xJaJGhXTN%2BfK1zvwMm2wbJ88bZvs8m9XOK%2BRIwz4qGQT5AFSiAP5%2F1xoACFTfYcAsY94ggk2PeGEhQ2G9vyK3OcvuoiEj8XATmEoaeuO8Ss6oNe%2B3nhXzrAP6%2F1LyfAwxKHYyQY6pgEFAcEQDNHhO7to3GpwGUWShAkPZpLDgOdUf5AhnQZrA%2BKsQj16nDvkxX6dr3DLpXJN3GXon5Nt7VBOt4eEVZGXS2c82e%2BPRhrgPfoZ9FDlZBNdwMFaGOCgl8hTAW7CHbhaJ2trgrdEAKwvuwUT11qpkFE7Q52OxeacIOfGPmz5K5nnnhi2Eq8Nn4JU6JG08RIo%2FoKsJ5LtdFPZpIKETKDCXY%2BWUChi&X-Amz-Signature=45f5c12314e6ab99662ffe459b2a7210e8de9f4ab31a22f5daa7f930fee780db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDASZ2RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSQk7khaQCgJapLpoZ5YxCiDSMEWPiBBtxdggLeicHQAiA7J0VWlipcYMaFlP%2FUtdbWdq7qZAge4pyoPuwQ%2BF8nSSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGU90Em6V8evmtGycKtwDXabMEW5rDIQw%2F7py5oZek%2FJSRaj%2BqS%2BBZ5mLnOjfMG5OKfl%2B18Ot9f4eobUePDFTFR8hBriVb9ad4%2FeaMjAAbQgcOmtOsVv%2BLsG6dW6%2BXSFL3Md9IDYTq6rLHBmuKccfwSZbzOYOdgSpxBX1H57fjyRCER9RuNPgzbtiaC0K1%2FXbi2RsfDQCSbO7LuUgFYXLeYP04jNT9c9%2ByisQHloYGDWkl%2BiasDQIXMGB8X00vJUjVXJFsrYRgCfxPvZ9Jozla38G1G57WoCw25kw1%2BBLlDiVHXXoaweb5EdixjvFzPzW%2BltNDG%2BWruiRjn5FqJYXU6H1d7QphKIkAvkbh96AS%2BHR17NTfUd0McaXgo%2FczJt0KztWC1YUvwROjflhLlqjrGCD7H7b%2BmMI1uZ8ryZh8VE%2B0LYTwN6q4w1YeuPtONTqo7owk4wuRXO2TfDDmaFNuxvR1DFwU7UP%2Bf8kj33cpPBfzy%2Bo5bNBWahEggN5IYFyicnX77W%2BOwBVR8T8xJaJGhXTN%2BfK1zvwMm2wbJ88bZvs8m9XOK%2BRIwz4qGQT5AFSiAP5%2F1xoACFTfYcAsY94ggk2PeGEhQ2G9vyK3OcvuoiEj8XATmEoaeuO8Ss6oNe%2B3nhXzrAP6%2F1LyfAwxKHYyQY6pgEFAcEQDNHhO7to3GpwGUWShAkPZpLDgOdUf5AhnQZrA%2BKsQj16nDvkxX6dr3DLpXJN3GXon5Nt7VBOt4eEVZGXS2c82e%2BPRhrgPfoZ9FDlZBNdwMFaGOCgl8hTAW7CHbhaJ2trgrdEAKwvuwUT11qpkFE7Q52OxeacIOfGPmz5K5nnnhi2Eq8Nn4JU6JG08RIo%2FoKsJ5LtdFPZpIKETKDCXY%2BWUChi&X-Amz-Signature=547fa8fd126a4297a43f8d2bda05872989355c2baed3b9591eada7f387414528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
