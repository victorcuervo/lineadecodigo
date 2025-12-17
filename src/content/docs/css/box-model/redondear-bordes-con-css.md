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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAKKRKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNYWEtQbnzYZyjkciSbZEwPTlSM06u0r8DaBicePyPQIhALY9p9aqSYFGlaM3Mcbu6i9ulAjUQ553H3DiZ8lijNrBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcwoZrkteSya4C%2Fm4q3AM7oVeHNGMkNQVmIoL6g01M3kvUBGa2kH0JeZoCPSVMyjFPqEzq6g3EX%2BQi3DQrmOz92Nhj3bdYPZ%2B0iJXWL%2BFif%2BU0duCP5Nrt9kGFKfXA%2BgdlL1T%2FQrO1qYMMCtqI7%2B7ADS%2BQ5qW%2Fw29F8ABdfXhdFx7mkVv7IbMmTv79MuqAOKekjj0bxv%2BK%2ButshyYekXpXXFg%2BajtcvDi694GdzFTvm25ktlwVxMaa4Q8%2FZM4FP4ViiiD%2FEleUZ8RkKWuh9v5K8vpNmMLa%2BiiMMpnH7FB0gBkvANfePfe5fH5csLOsxWcl5uooFG18wQMuTMuH8wGZyhfk1XA%2FGnkEYmtxVpGgGQ0YcL6QvYrVidgGou7eui%2Fvd58vJnwqtSempJ0uwDNNeQQlCbuocdNQsgt4mt12tMXSBCRNP5oEcPQNh%2BAx2quBE39KZBs%2FVES9X%2BopsGQZ2iLr%2FOPA4OPxVRGPA7X3m9kCq59sE%2B1fIsq7V%2Fc6K1yB39UyOsOU7B77lM%2FKgr2uALtOqVAdWJhZJzHcbC9IbdMrtMG559ySYZxUIXE7MQA4UkUxT7nJhbhT1J%2FLUVDDHjqdzAUMrmTALf6YWmgZNDFZiygrbuoIZNreyd3VrdWFT%2Fi0gMLnnFWuizDtoIvKBjqkASiMLSiTXc%2BXPE18qN9qQqv7gVLqv1iqopCxdSRwX4bt5XazWtfDdrXauKnnoWsqE3UXykCM%2B7hXSVpoFL0LhnRmVSsacS6yAbEZiH1EJWbwCG0vmTg1E%2FAIU42SmFH39sc%2BJoOnmtsmhMyBDgBZC7g3Uk4OSw%2F0tOIAsr8J322PY30GqnNYAdX%2BB%2Fyjzer0STG2i2hWOD7DUYwo6m8WfUZIjnk8&X-Amz-Signature=93568711d539585d6827237cf7d9bb20dcff2812b995152259ca9da6ab9b030b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAKKRKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNYWEtQbnzYZyjkciSbZEwPTlSM06u0r8DaBicePyPQIhALY9p9aqSYFGlaM3Mcbu6i9ulAjUQ553H3DiZ8lijNrBKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcwoZrkteSya4C%2Fm4q3AM7oVeHNGMkNQVmIoL6g01M3kvUBGa2kH0JeZoCPSVMyjFPqEzq6g3EX%2BQi3DQrmOz92Nhj3bdYPZ%2B0iJXWL%2BFif%2BU0duCP5Nrt9kGFKfXA%2BgdlL1T%2FQrO1qYMMCtqI7%2B7ADS%2BQ5qW%2Fw29F8ABdfXhdFx7mkVv7IbMmTv79MuqAOKekjj0bxv%2BK%2ButshyYekXpXXFg%2BajtcvDi694GdzFTvm25ktlwVxMaa4Q8%2FZM4FP4ViiiD%2FEleUZ8RkKWuh9v5K8vpNmMLa%2BiiMMpnH7FB0gBkvANfePfe5fH5csLOsxWcl5uooFG18wQMuTMuH8wGZyhfk1XA%2FGnkEYmtxVpGgGQ0YcL6QvYrVidgGou7eui%2Fvd58vJnwqtSempJ0uwDNNeQQlCbuocdNQsgt4mt12tMXSBCRNP5oEcPQNh%2BAx2quBE39KZBs%2FVES9X%2BopsGQZ2iLr%2FOPA4OPxVRGPA7X3m9kCq59sE%2B1fIsq7V%2Fc6K1yB39UyOsOU7B77lM%2FKgr2uALtOqVAdWJhZJzHcbC9IbdMrtMG559ySYZxUIXE7MQA4UkUxT7nJhbhT1J%2FLUVDDHjqdzAUMrmTALf6YWmgZNDFZiygrbuoIZNreyd3VrdWFT%2Fi0gMLnnFWuizDtoIvKBjqkASiMLSiTXc%2BXPE18qN9qQqv7gVLqv1iqopCxdSRwX4bt5XazWtfDdrXauKnnoWsqE3UXykCM%2B7hXSVpoFL0LhnRmVSsacS6yAbEZiH1EJWbwCG0vmTg1E%2FAIU42SmFH39sc%2BJoOnmtsmhMyBDgBZC7g3Uk4OSw%2F0tOIAsr8J322PY30GqnNYAdX%2BB%2Fyjzer0STG2i2hWOD7DUYwo6m8WfUZIjnk8&X-Amz-Signature=86dcbbb15ad97ff22db30cef7bef0d30f8206deaef0b7f5fb051270dece2d420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
