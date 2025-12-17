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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRKQFKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BwENgz37dzBZAyL20t%2BmH2wJWbGIbXLIijGUH%2BB4mIAiEAkh6%2B6xm%2BAw6Wm3OAzMeuIWeLil%2FuYagPSAAJBDVSPksq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDObU4%2FNVTuQQiADNVircA2O9l7JFaw8mxFfGCyWwLK1DVwgRsiKwD08zjQYx2lUk%2FykqNA4zDNgCRTsqTPWlj4%2FLIq5%2BkXhhj6NHfONEyNFlpxSwn97%2BKwKYFLQnEObnivmVsxSoj0%2FqT0fTrvDCJ3hZ2NTGboB36QLfyVyUpe1mpn6MEgJlHeRY4Z1IRkdmWrN4C1jmO7AnPmL%2BA%2F1irI%2BrA8NRuc5hDQOkrBrdbVf4zUdagPrh92XOg2tqsDxZfJIk0C8Ll0DaNkOsf8lXiqkJYMCcJsKBj3mUZfrtSdLUr20mk597K0aZGunNdJK1r%2FGoZjvV8i6sKOUf%2BtphEINwEog1O0VJom0VoS40jI9Di2YWOPvEffcb%2FKA4TBim6xHN2T%2BKo4cCNlZ7ugvX%2FWsPTn0X%2BrwqNEpbq1I39cb%2BlSNvd3NBxK6o31ukME%2BEEmIkujRQkn4pRcydSavpOmrdrYy9NF06FqWK%2F1AUS%2FLkqrkN2yoZvi6nQnDUKWL8slsmULNhT%2Fg32dK2pvQo8qmsDikA3go4rZDL7e8358XLUpeqHYtSlmK1JYBOA4Xxju%2B0h241u1qc1Aw%2FB0K75l441K5bbPxAnIqI9KlSUjKfcG0wPP2S8ZtaepD7iaisLqb1TbCwfgAL0hQBMKfwicoGOqUBt%2FDRFuoprzoGs4Uq9DA6%2BSaDyan1aK8L0ATaaRd1gp3LNhPliuD56Hg%2BbfrZA3BEz86JTyOMYeC5QRQtYxMTmlFGXVP47t4BINXAQTFw8tykeVFlDxv6EwuEoIJTe%2F5%2BH%2B2RKsNg9V6Aj82CbOTccPmU6C%2FXYQukJuSJ2oWUVG32Q3j%2FRt1gq9O4n8gBOdk1rPX0fkb3zTSYT0eZ3sA2UDYJ2M1p&X-Amz-Signature=08548af73b48a45ae2a09f9b54a853704b3340601ffa81268ff5cfc90580f7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZRKQFKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BwENgz37dzBZAyL20t%2BmH2wJWbGIbXLIijGUH%2BB4mIAiEAkh6%2B6xm%2BAw6Wm3OAzMeuIWeLil%2FuYagPSAAJBDVSPksq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDObU4%2FNVTuQQiADNVircA2O9l7JFaw8mxFfGCyWwLK1DVwgRsiKwD08zjQYx2lUk%2FykqNA4zDNgCRTsqTPWlj4%2FLIq5%2BkXhhj6NHfONEyNFlpxSwn97%2BKwKYFLQnEObnivmVsxSoj0%2FqT0fTrvDCJ3hZ2NTGboB36QLfyVyUpe1mpn6MEgJlHeRY4Z1IRkdmWrN4C1jmO7AnPmL%2BA%2F1irI%2BrA8NRuc5hDQOkrBrdbVf4zUdagPrh92XOg2tqsDxZfJIk0C8Ll0DaNkOsf8lXiqkJYMCcJsKBj3mUZfrtSdLUr20mk597K0aZGunNdJK1r%2FGoZjvV8i6sKOUf%2BtphEINwEog1O0VJom0VoS40jI9Di2YWOPvEffcb%2FKA4TBim6xHN2T%2BKo4cCNlZ7ugvX%2FWsPTn0X%2BrwqNEpbq1I39cb%2BlSNvd3NBxK6o31ukME%2BEEmIkujRQkn4pRcydSavpOmrdrYy9NF06FqWK%2F1AUS%2FLkqrkN2yoZvi6nQnDUKWL8slsmULNhT%2Fg32dK2pvQo8qmsDikA3go4rZDL7e8358XLUpeqHYtSlmK1JYBOA4Xxju%2B0h241u1qc1Aw%2FB0K75l441K5bbPxAnIqI9KlSUjKfcG0wPP2S8ZtaepD7iaisLqb1TbCwfgAL0hQBMKfwicoGOqUBt%2FDRFuoprzoGs4Uq9DA6%2BSaDyan1aK8L0ATaaRd1gp3LNhPliuD56Hg%2BbfrZA3BEz86JTyOMYeC5QRQtYxMTmlFGXVP47t4BINXAQTFw8tykeVFlDxv6EwuEoIJTe%2F5%2BH%2B2RKsNg9V6Aj82CbOTccPmU6C%2FXYQukJuSJ2oWUVG32Q3j%2FRt1gq9O4n8gBOdk1rPX0fkb3zTSYT0eZ3sA2UDYJ2M1p&X-Amz-Signature=7e5451cc19beb6100b06906832c27747977cc54876a228acff7fb08a22597077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
