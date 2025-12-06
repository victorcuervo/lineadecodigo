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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JWCEGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4d4NAMGphiuCwv0P3tprJCUAhlQtZxFUKdt%2FqmlGorAiAWWwUavXVbSYn76zkhfBe8ecETAK8jZ0UmHDjPJgMN5ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNOHkTtn7c%2Fw9X%2Ff3KtwDlAAIHB%2Fdcs5PC8Oih1GgNCZKfx74BOK0op7CTFKRaB26MRZ62ZLECXmUog27C03BYurh%2B7UqG3EfEDN8TIfi5sHNeacVztOSbf%2BTg8DCfRExpV82MY9jtOR2jIKPfmZHBUeTa5MQIV6IQIM2D79NYPJHNfXfYx%2BoEikX0Dwg9qq%2Bo5OY2seOZyOtdSIHcOedDCTdPux0Xid%2BwOIKEi21OrxY%2BhJ8lOk364ySnLg4HruVPgOHS0Frap1qJu45SuuONXP8EWaFgqp%2BhXiZ1CJvHEFp7Huvr2RAvp%2BLytnXcwj8wMHH8t7A4jzfTiAmoQGUvocE75XkLPZHwg6sz0SHv2x8SH6AGccBitlovCpqXpoyx2oZ85bKEHXBZb%2FddZqNezigL76y8%2FfJfN92ZOExO5H9rTV05qnNK4YlAyUMJSINscIJ73n2SyttA6KsM4gPMNy1Trr7HAU55gkkR82I7Z1SgeRfvbc2maaW3p424xhyDqsZdigFsmwbNBWaIAnZ%2FOHTZdW%2BUnskTB84W2pTpa3U7TMOcH1vRmIEAGwqN1isTfGs%2FY%2F57CYo4SwKkbdoSNg5AtNaHOtfnmmDgJy12UjJydQgxVnDKO3%2F9QI9ai9xL%2BwtFFPtmvaArSowsabQyQY6pgHj2NMq%2FkpYmkNLDyA5IqvTaOQE%2FrMgYxoLll9NRobmOj8yrybDB3VahQsfIa0JQZD2zwymnoAMJBOSwsU61rQ2YXpV3XT7NRFCOMsHi038FmxgLZxvbkbNvILM1XsijqEeaINRDtrEisqlP3n31NhZRF3gNCAH0GdP%2Fr0K%2F%2BgMVgk8yUkfCRFzPYwpus3mBJM8h4YmxSJM74li7ej2DyN%2F7zzeodMO&X-Amz-Signature=395bbce7ef81d8aad73d952e5c9885b884f2b6c135093ad3c1f40a4cec686ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677JWCEGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4d4NAMGphiuCwv0P3tprJCUAhlQtZxFUKdt%2FqmlGorAiAWWwUavXVbSYn76zkhfBe8ecETAK8jZ0UmHDjPJgMN5ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNOHkTtn7c%2Fw9X%2Ff3KtwDlAAIHB%2Fdcs5PC8Oih1GgNCZKfx74BOK0op7CTFKRaB26MRZ62ZLECXmUog27C03BYurh%2B7UqG3EfEDN8TIfi5sHNeacVztOSbf%2BTg8DCfRExpV82MY9jtOR2jIKPfmZHBUeTa5MQIV6IQIM2D79NYPJHNfXfYx%2BoEikX0Dwg9qq%2Bo5OY2seOZyOtdSIHcOedDCTdPux0Xid%2BwOIKEi21OrxY%2BhJ8lOk364ySnLg4HruVPgOHS0Frap1qJu45SuuONXP8EWaFgqp%2BhXiZ1CJvHEFp7Huvr2RAvp%2BLytnXcwj8wMHH8t7A4jzfTiAmoQGUvocE75XkLPZHwg6sz0SHv2x8SH6AGccBitlovCpqXpoyx2oZ85bKEHXBZb%2FddZqNezigL76y8%2FfJfN92ZOExO5H9rTV05qnNK4YlAyUMJSINscIJ73n2SyttA6KsM4gPMNy1Trr7HAU55gkkR82I7Z1SgeRfvbc2maaW3p424xhyDqsZdigFsmwbNBWaIAnZ%2FOHTZdW%2BUnskTB84W2pTpa3U7TMOcH1vRmIEAGwqN1isTfGs%2FY%2F57CYo4SwKkbdoSNg5AtNaHOtfnmmDgJy12UjJydQgxVnDKO3%2F9QI9ai9xL%2BwtFFPtmvaArSowsabQyQY6pgHj2NMq%2FkpYmkNLDyA5IqvTaOQE%2FrMgYxoLll9NRobmOj8yrybDB3VahQsfIa0JQZD2zwymnoAMJBOSwsU61rQ2YXpV3XT7NRFCOMsHi038FmxgLZxvbkbNvILM1XsijqEeaINRDtrEisqlP3n31NhZRF3gNCAH0GdP%2Fr0K%2F%2BgMVgk8yUkfCRFzPYwpus3mBJM8h4YmxSJM74li7ej2DyN%2F7zzeodMO&X-Amz-Signature=14c3e922e1af497e623fa08318bb6ead32e4a62b2d978e4c595e628ed356220e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
