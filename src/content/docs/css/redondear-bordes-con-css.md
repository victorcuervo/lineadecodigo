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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSGQZPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKiBJPO6pUkl8gtyTFK5SZDbObOmK8DYP6K9N%2FU2zgdAiB9fAypVJKowFKxcKbTsGj2bd0m0ClOTDX%2FWwaLbEjQoyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYWMXZuF3BwlvfFBKtwD5QmwljegZ%2FdLQPVUj1%2FVEuT5xB5ri42Ok5zLDWVUZGQFTQHgKybhNuMl7pTkBAKa20390%2BHgu9jA4gdsCBSr2HUqz%2BiOKkMQU1uC2yME5Hz3W%2BUoWYTY0ioFCsRU591Uj3wKWoR%2BdC6Hra6jkgOEBX6s%2FJ4uz7GsscYbDpV9Leti17asfZyTj%2B5zn6rW5j3WMJ3yNDVsuK1BldPR5O7pExGBGH5nrekSNE6pIn6XHgzX5RNOpql4lMTZTaP7By9jLsGrFPnhsX3uy%2F%2B4YpHR%2FX5lFpz5pMNYK7IGjCbwG5RJt51QpR7ReEFIAmcnf9sDiTMxg8CpT6k07Wn4aaomLsGeheAQ%2FD1li%2BMphLGmH0Pvw%2Bz1P2r233j3CX7d992O6TzbElQDV9CXTT0DQEecGAYuE%2B8Y%2FnHyQ38qSFDiJTpqUbRfvNRo0YIM5RVUzxlmGOXwV5a8S6CRJCM85mTei2P5NoBlsP6unfTx%2Bw0RDcLEaWy2F2qHuR8LlEWieriYHy1xqTGikgm4portjzk2dTGRPgjl5e6jeD%2BRbcu9haCDvEjw6iAfBYfq1PiOu1Nn5ktWeYWrLXMh7V9DK7Ui6MxBSaHYyFdlVXQlvgaB1KuFsHg1Wtg7EOC2mBQw8%2BjdyQY6pgHJN1%2F9ItzEbv7PXjNYPbW2LW6Ts4%2BHZi6KR9Oo8UvRj703sSRJm73xx789OdtcU9Jo2xeXHPQg%2BM8AwYtHYtNALGdLfI79bvRnSc64dPIoI8%2Fk42wrpicwlG%2BdLL9beRzTl36Ay4SLtQ%2BMsUzUPVmcMzBdKBOQSZVke6TbIVz4hkZh9jMor3iT6RJDUlC4QyStuPWbUTdE0xyxkjQPQ2O7F1B1DyhZ&X-Amz-Signature=caa4155d20d4b38cad0a2c329a58ec7026b29f77dce7ea54d5d3e47a12559931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSGQZPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKiBJPO6pUkl8gtyTFK5SZDbObOmK8DYP6K9N%2FU2zgdAiB9fAypVJKowFKxcKbTsGj2bd0m0ClOTDX%2FWwaLbEjQoyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYWMXZuF3BwlvfFBKtwD5QmwljegZ%2FdLQPVUj1%2FVEuT5xB5ri42Ok5zLDWVUZGQFTQHgKybhNuMl7pTkBAKa20390%2BHgu9jA4gdsCBSr2HUqz%2BiOKkMQU1uC2yME5Hz3W%2BUoWYTY0ioFCsRU591Uj3wKWoR%2BdC6Hra6jkgOEBX6s%2FJ4uz7GsscYbDpV9Leti17asfZyTj%2B5zn6rW5j3WMJ3yNDVsuK1BldPR5O7pExGBGH5nrekSNE6pIn6XHgzX5RNOpql4lMTZTaP7By9jLsGrFPnhsX3uy%2F%2B4YpHR%2FX5lFpz5pMNYK7IGjCbwG5RJt51QpR7ReEFIAmcnf9sDiTMxg8CpT6k07Wn4aaomLsGeheAQ%2FD1li%2BMphLGmH0Pvw%2Bz1P2r233j3CX7d992O6TzbElQDV9CXTT0DQEecGAYuE%2B8Y%2FnHyQ38qSFDiJTpqUbRfvNRo0YIM5RVUzxlmGOXwV5a8S6CRJCM85mTei2P5NoBlsP6unfTx%2Bw0RDcLEaWy2F2qHuR8LlEWieriYHy1xqTGikgm4portjzk2dTGRPgjl5e6jeD%2BRbcu9haCDvEjw6iAfBYfq1PiOu1Nn5ktWeYWrLXMh7V9DK7Ui6MxBSaHYyFdlVXQlvgaB1KuFsHg1Wtg7EOC2mBQw8%2BjdyQY6pgHJN1%2F9ItzEbv7PXjNYPbW2LW6Ts4%2BHZi6KR9Oo8UvRj703sSRJm73xx789OdtcU9Jo2xeXHPQg%2BM8AwYtHYtNALGdLfI79bvRnSc64dPIoI8%2Fk42wrpicwlG%2BdLL9beRzTl36Ay4SLtQ%2BMsUzUPVmcMzBdKBOQSZVke6TbIVz4hkZh9jMor3iT6RJDUlC4QyStuPWbUTdE0xyxkjQPQ2O7F1B1DyhZ&X-Amz-Signature=80c50dc7f9dd02fcb674f5ad94bddb387f0630d2aaacdde33df23c4033af7dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
