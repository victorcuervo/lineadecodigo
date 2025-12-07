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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELGRVLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOj8zVYgyt2Mp5MaXHIJ3k7uS4yfgo3E1Zp1vlxEk3AiBySwtL%2FEJ3piq6K6G4gVT9R0LALIsDtNJ6avdk87GYJCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuekzQQzjBvdd83VlKtwD87Mvh1CWmqxWBOn3sqyz6bMPb9XCRbBEeMk0pTt63QwGRG1Ky%2B4sZPfk3Dg9IrhK%2F3D7h%2FqqItHLBJbeXOX1X3dIaUSBY%2FouHPWWrvCn1G44cw2%2FlIhpQCTzX6VOSvvlFWld3L0GhfHfLjtnFtTiCmvG3nuTCl90QclhMaZUKJczgAREEkUMP45dzpGtMbdjSAdE38qbXTT%2F%2BZmNQtHIwzpA%2Bi%2Fq9nAl7pQ4t6lh72Nixk8de7HX%2BIpFsNbuP1zHluNMNUrN1BSAt%2Be6wBb34oJSzcTPN9Nl6iOhBGg66SjZvp9Jc5fMm2kE%2Fm5Ko6r6nEklyNGxeNeXuTkAKfPBPEN5nWXjcCmUuoe5c2%2FbxDpDxnkRpcp5eVYSeP2ovD1v27V1D3S%2FWipiUo8NXPj99wWPeR6Hi70dsfbwk3lmgqptjd6nrx6XGBTFcTDa%2F%2FFK1Qvuq5j57KblDYGd%2BqWqTPHxR69HBjkYnBsF1t93ggkDIrWWjt%2FWsPXlwJF7PVWMidAzWFZSCfFDvOgIDksbwtf0sL9AIoWUKTrD0490u2iEmOBVfDXTzVdZXmb9lERqGAPv69XPNiYnWP3pEQmLpI2kkt7UZRwMvT7u%2BMm5%2FSJp8aMwErV%2F2znMeG8wp7fWyQY6pgF62qXDEEbLprv4KlnA%2BrhHeD7KKfbrrYepKzZYdt73Uo8HsQxjmXaBmqGaR9hFexSaWXcCpEdG54SVwee0jhWfwqryClBejD%2BbE%2BRyVGhYCc%2FqUyrpZyYg8sDe%2F77zdxoDsZ%2BseJqXYEHUqQZ0CQaE3Q%2FzLiu1Ws7GLSZrawmhRyVS%2Bwk7%2Bkaw7CWf8khMpMSs5d8BoO3qpRYi81Aszx%2BSmdy5NQ%2Bg&X-Amz-Signature=de0597bc685cc658b1c2bf4b2ac4603c2b5dac1346fcba79b9222b524e6d368b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELGRVLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOj8zVYgyt2Mp5MaXHIJ3k7uS4yfgo3E1Zp1vlxEk3AiBySwtL%2FEJ3piq6K6G4gVT9R0LALIsDtNJ6avdk87GYJCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuekzQQzjBvdd83VlKtwD87Mvh1CWmqxWBOn3sqyz6bMPb9XCRbBEeMk0pTt63QwGRG1Ky%2B4sZPfk3Dg9IrhK%2F3D7h%2FqqItHLBJbeXOX1X3dIaUSBY%2FouHPWWrvCn1G44cw2%2FlIhpQCTzX6VOSvvlFWld3L0GhfHfLjtnFtTiCmvG3nuTCl90QclhMaZUKJczgAREEkUMP45dzpGtMbdjSAdE38qbXTT%2F%2BZmNQtHIwzpA%2Bi%2Fq9nAl7pQ4t6lh72Nixk8de7HX%2BIpFsNbuP1zHluNMNUrN1BSAt%2Be6wBb34oJSzcTPN9Nl6iOhBGg66SjZvp9Jc5fMm2kE%2Fm5Ko6r6nEklyNGxeNeXuTkAKfPBPEN5nWXjcCmUuoe5c2%2FbxDpDxnkRpcp5eVYSeP2ovD1v27V1D3S%2FWipiUo8NXPj99wWPeR6Hi70dsfbwk3lmgqptjd6nrx6XGBTFcTDa%2F%2FFK1Qvuq5j57KblDYGd%2BqWqTPHxR69HBjkYnBsF1t93ggkDIrWWjt%2FWsPXlwJF7PVWMidAzWFZSCfFDvOgIDksbwtf0sL9AIoWUKTrD0490u2iEmOBVfDXTzVdZXmb9lERqGAPv69XPNiYnWP3pEQmLpI2kkt7UZRwMvT7u%2BMm5%2FSJp8aMwErV%2F2znMeG8wp7fWyQY6pgF62qXDEEbLprv4KlnA%2BrhHeD7KKfbrrYepKzZYdt73Uo8HsQxjmXaBmqGaR9hFexSaWXcCpEdG54SVwee0jhWfwqryClBejD%2BbE%2BRyVGhYCc%2FqUyrpZyYg8sDe%2F77zdxoDsZ%2BseJqXYEHUqQZ0CQaE3Q%2FzLiu1Ws7GLSZrawmhRyVS%2Bwk7%2Bkaw7CWf8khMpMSs5d8BoO3qpRYi81Aszx%2BSmdy5NQ%2Bg&X-Amz-Signature=bf908955c70119ee4c9dad49e16754c807e3e607b53d64e006be42e9d13194dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
