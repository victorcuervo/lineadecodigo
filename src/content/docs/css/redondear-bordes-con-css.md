---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXSIAJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFe1Oqi8hijENUnjngqAxdgQkfXGlUp554rPnTGpH%2BshAiBrStGT4mAnE158ywFtnXdCXuGi1eGxLICpn1KfIXTZ1ir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMiuREE0NsX%2Fwaqm2RKtwDN%2F%2FtErPKp1%2FApdtIZuitGJ2%2F9RN%2FG%2F2PKW%2FnfVShNJGZjGdMwhWKJ4tTDIgODp0jkggctRkWkizeYiOj2G4pISOJQcgIVMKSN2GVDVFJn8Ms5rMqEZIeapjLTK9lJ5m5gOJqqmQmlDLfLGyTZiZ32sLxfyHPSjw2UXjGIYX1gC6Yrg9a1rZ0gSGece1yzOO3sMWgFbX%2FqRKB3vpzIiPVGdQ9GG4BO5CQxkz1KlJScU951fktSbH0Yc2NT1aL%2Bqtlvw7SsQdBi3FqwDfhLURhiDNlcFc8LeluOzU5gamras7%2Br77UaxkxxiWPPCjD%2B9AqJ4MeC0pymlMv4LPywK96IS2suFicAQqjJdJimurxchQxWFXcWLXTmGpUJAntZHyfo%2FEacpZjzvHJ%2FMcay48VShkxPlkom3AsM6RNWrqSQgmo%2FbK4uspuTZWGZ2PMEwSAsx%2F8fjRH5zMjYV27q14OzGaY%2BU15NWyPiBHoYFmUDgsIyuta63xAvtVo714P9c%2FOw8isMzLc7yo%2BQQVSKuzL3kwSLtTa45jDXCxzTh3qg%2B%2F%2FpeuCAQZY5zXtGILQ5%2B00iYUBVaqnVm5HANG6SUMKyf7MnA38KlL1Anf7f6pjuhpMZHwvax7ERq4VeVswz%2BbFyQY6pgFJrztJ4LyvNdWa6oRTgTveroX58DvaM%2B%2FtB4Jd09rxPr7maUpA%2FqG4Q29Pjd58MNDO2UrEZxHEGzsEUNa%2Bir7F7GBa%2BHe%2BQ%2Bf4tIFatNON2BIRKwoKwk%2BIMBgaZx9rwEM%2FISTkiJW16KZ3C7aRjRxLb%2BHC%2BkCBfH%2FtpjVNHXD7iJM9F1NeIbrIE2lat8K1N9Zfpchh2Oybq1Hpr03hNPkqWp3HyE1%2F&X-Amz-Signature=e6dd6372f5b883ce8c00bea6e21341f7643c9f35544e813b0219137bde1898de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXSIAJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFe1Oqi8hijENUnjngqAxdgQkfXGlUp554rPnTGpH%2BshAiBrStGT4mAnE158ywFtnXdCXuGi1eGxLICpn1KfIXTZ1ir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMiuREE0NsX%2Fwaqm2RKtwDN%2F%2FtErPKp1%2FApdtIZuitGJ2%2F9RN%2FG%2F2PKW%2FnfVShNJGZjGdMwhWKJ4tTDIgODp0jkggctRkWkizeYiOj2G4pISOJQcgIVMKSN2GVDVFJn8Ms5rMqEZIeapjLTK9lJ5m5gOJqqmQmlDLfLGyTZiZ32sLxfyHPSjw2UXjGIYX1gC6Yrg9a1rZ0gSGece1yzOO3sMWgFbX%2FqRKB3vpzIiPVGdQ9GG4BO5CQxkz1KlJScU951fktSbH0Yc2NT1aL%2Bqtlvw7SsQdBi3FqwDfhLURhiDNlcFc8LeluOzU5gamras7%2Br77UaxkxxiWPPCjD%2B9AqJ4MeC0pymlMv4LPywK96IS2suFicAQqjJdJimurxchQxWFXcWLXTmGpUJAntZHyfo%2FEacpZjzvHJ%2FMcay48VShkxPlkom3AsM6RNWrqSQgmo%2FbK4uspuTZWGZ2PMEwSAsx%2F8fjRH5zMjYV27q14OzGaY%2BU15NWyPiBHoYFmUDgsIyuta63xAvtVo714P9c%2FOw8isMzLc7yo%2BQQVSKuzL3kwSLtTa45jDXCxzTh3qg%2B%2F%2FpeuCAQZY5zXtGILQ5%2B00iYUBVaqnVm5HANG6SUMKyf7MnA38KlL1Anf7f6pjuhpMZHwvax7ERq4VeVswz%2BbFyQY6pgFJrztJ4LyvNdWa6oRTgTveroX58DvaM%2B%2FtB4Jd09rxPr7maUpA%2FqG4Q29Pjd58MNDO2UrEZxHEGzsEUNa%2Bir7F7GBa%2BHe%2BQ%2Bf4tIFatNON2BIRKwoKwk%2BIMBgaZx9rwEM%2FISTkiJW16KZ3C7aRjRxLb%2BHC%2BkCBfH%2FtpjVNHXD7iJM9F1NeIbrIE2lat8K1N9Zfpchh2Oybq1Hpr03hNPkqWp3HyE1%2F&X-Amz-Signature=78c15867e381cc778def655bb7eae47c28943a1de1fe72ec3118c23facfebdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
