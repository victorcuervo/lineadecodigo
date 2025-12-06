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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FBRJHQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfa8eXigWoXWpuBF1ymrpdfgA6dP9gvfmVAfzhEk0gIAiBIJjCutmnnCzoij%2BItnrpIC82ilvniwWMiNORap5JpOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMMzxJY1FIlwikp74OKtwDtLY3hqhR3%2BKvwDQDI8QXuzXLkOH%2FFgarp4g2QssZHYJCGHPCkaqNfqePKzRh3QX2l6CE9Q0nV%2FVxX3PZmMmkpleXYJ7hj63HtjpXFf0iSCagrVycTz44Tad88iPWlSHVzXXn8OI1g99WRg0OahrxB5H7auqudBM%2Fl6CEp8JgeVO3tumc2Zq%2B4PXYPUQUUuC8jg6MbA7CmMMKKj56sY30MitkOTSotNoSaLsBjs%2BK5RaBKFuYhvqPCZBtwGByg1L0xxUs9amrmVprwnY6SP6thV5QrDXdzcIf%2B2Qs0RSnZSX8froNbH8yRrwyy8IG2UUQ54WnbGCw%2F%2Fz5gx%2FhHhz1a34uv8JcTh4V8Y0KxYoNfm1ruXJi%2Fg7qT3F9dxtcAQS%2BPPGYCDSFsqryt04SBeYkP%2Bupio9Kliw%2BL4hG6X%2BfCAb%2FBY9R7VSp1O1oLyVs6suwkbnIgqMJQO2He7VucCDeXi2tXDmNDnbgu87rXDCi6Mtot8unoXK1SLyUs5%2FlZzTHCcaZm5gbq%2Be6nGFHqLsNRWYvc%2BTqOTLiaPfzmF9kn8HV5Oo2XQsQ8n4xvU9D0Tj1M34BwLsDxuiTlT7j7Tu1PtrmtrbJY4o%2Brj2oCSFcDnnUMJ1Qr01CsmJ6cl8ws8jRyQY6pgGDWsW9CI5wulbpeo%2B4uVS7corKhjC%2BvukjNFfDVfAyo58Y2b65asPc1NtSMl%2BGkhbi56YIkexkYcb7L0Tbpq1kN0Ad3dG9jKFpvKeRYGvFkjxInUESQYcBvU9tlYstaL2uk10zRBzOrH3qJmvNpnUPBVC3ltmmvCTMtbb276Dw2Iv4lBu2WKPqAL%2BP%2Bap%2BOgaGF8h7eC91gS63ra%2BL1YNmm5baRgit&X-Amz-Signature=e2a716aba7e6b8a374e5686c6b7996a8de5e0cde337dec78470da2978ebb571b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FBRJHQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfa8eXigWoXWpuBF1ymrpdfgA6dP9gvfmVAfzhEk0gIAiBIJjCutmnnCzoij%2BItnrpIC82ilvniwWMiNORap5JpOSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMMzxJY1FIlwikp74OKtwDtLY3hqhR3%2BKvwDQDI8QXuzXLkOH%2FFgarp4g2QssZHYJCGHPCkaqNfqePKzRh3QX2l6CE9Q0nV%2FVxX3PZmMmkpleXYJ7hj63HtjpXFf0iSCagrVycTz44Tad88iPWlSHVzXXn8OI1g99WRg0OahrxB5H7auqudBM%2Fl6CEp8JgeVO3tumc2Zq%2B4PXYPUQUUuC8jg6MbA7CmMMKKj56sY30MitkOTSotNoSaLsBjs%2BK5RaBKFuYhvqPCZBtwGByg1L0xxUs9amrmVprwnY6SP6thV5QrDXdzcIf%2B2Qs0RSnZSX8froNbH8yRrwyy8IG2UUQ54WnbGCw%2F%2Fz5gx%2FhHhz1a34uv8JcTh4V8Y0KxYoNfm1ruXJi%2Fg7qT3F9dxtcAQS%2BPPGYCDSFsqryt04SBeYkP%2Bupio9Kliw%2BL4hG6X%2BfCAb%2FBY9R7VSp1O1oLyVs6suwkbnIgqMJQO2He7VucCDeXi2tXDmNDnbgu87rXDCi6Mtot8unoXK1SLyUs5%2FlZzTHCcaZm5gbq%2Be6nGFHqLsNRWYvc%2BTqOTLiaPfzmF9kn8HV5Oo2XQsQ8n4xvU9D0Tj1M34BwLsDxuiTlT7j7Tu1PtrmtrbJY4o%2Brj2oCSFcDnnUMJ1Qr01CsmJ6cl8ws8jRyQY6pgGDWsW9CI5wulbpeo%2B4uVS7corKhjC%2BvukjNFfDVfAyo58Y2b65asPc1NtSMl%2BGkhbi56YIkexkYcb7L0Tbpq1kN0Ad3dG9jKFpvKeRYGvFkjxInUESQYcBvU9tlYstaL2uk10zRBzOrH3qJmvNpnUPBVC3ltmmvCTMtbb276Dw2Iv4lBu2WKPqAL%2BP%2Bap%2BOgaGF8h7eC91gS63ra%2BL1YNmm5baRgit&X-Amz-Signature=02c92d9421f429bcb95a89d59d320c5e664d534b08c210ea7f252fb98bff2d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
