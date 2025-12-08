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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKO5IRI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyiHmDRF0uyw5nJRXuJaaNEmdZN%2F03j32Y4M6u6MvYQAiEAm4QTuVTIZlZys%2FrptYcnCUPH%2FB6BFlihD6trs0m%2F92YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFQ1Azo8VW8EEWA6CrcA%2FErd515rs%2BQTS3bezMU9%2FPb8eVFaX0XhPPCOjgVthkz4SVrNGhaLQw%2Fb11QxtiiogHdoUKsoTwnfEaQKXacotRvwzdzANux4mJQ750jWglH0wGjwMkHjrtSI%2FcofoPdiJDMdK1oohCrbZ9I1h7QS60yTnGfzbmmVu9HsPD0EhfUIOE%2B2O8XMptzMFDYdbvonuGA3kMCHe8G30Ejibn4joNnMsotR0OrudkE3mX4YeyYC6QOYiV4lpeWtt5wMtaelXvnqYUBPM1n4A175qnMNFXtc1xENm32Qv1ozLUU%2FfPhuS4k70jkEub5caZBLrd00luL2%2Fw871lTeelT%2FpD9Srs8pTzgqZL%2B%2FmH7tMggoh3Pboy%2FbeqbR3MEz8dKrfEAJtfGVJGVc0QGWCAPKy0GA%2F5VGVKaTY0R2aePQZvoV3Xkdf6yx4xFmzkL5Ssu7OXL6KAVQTTQxG8%2BMcAYOjh1tRrM4gB%2B2PvUG0vBRigkQa%2F6BtnGaXXRcDNaRF4ggSXlc5htMk93SkKrxxV%2Bj3Sp0NBfrYHul0jGasavm7FuZD82GvBtI1bMGHPi8vEu3koa9%2F%2B1B4xzcWKKHU2l2aGYe%2F8UV6dn5mSaBGTgw7u5CK%2B0LDvmssi1%2F3Lr1E4GMMah3ckGOqUB0afT7OVrQ3qEQJU9UdevUYmS4fqHMBiE7%2BaPrz7djfb3XUYILRNlMe3bB%2BPC2T%2B3QPSzHKnSmDwpz8cV3KBqHB1NcNqJuFc%2BSPNe%2BafenYG6QahFJerAAzC40TIj6cdnZy6haMyL%2FB2kWQFC1MybLhfZFspwg%2FbvFYHW9VSasUjurNJxN9Ad7sRE16nYj8Q%2Ft8njpmAOtTfO5nRwdk1GX%2FKRm7K9&X-Amz-Signature=6b498dadcda8769e7984b6ccd37df8d833d3379f1fceaabbca175753fdbf8a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKO5IRI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyiHmDRF0uyw5nJRXuJaaNEmdZN%2F03j32Y4M6u6MvYQAiEAm4QTuVTIZlZys%2FrptYcnCUPH%2FB6BFlihD6trs0m%2F92YqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFQ1Azo8VW8EEWA6CrcA%2FErd515rs%2BQTS3bezMU9%2FPb8eVFaX0XhPPCOjgVthkz4SVrNGhaLQw%2Fb11QxtiiogHdoUKsoTwnfEaQKXacotRvwzdzANux4mJQ750jWglH0wGjwMkHjrtSI%2FcofoPdiJDMdK1oohCrbZ9I1h7QS60yTnGfzbmmVu9HsPD0EhfUIOE%2B2O8XMptzMFDYdbvonuGA3kMCHe8G30Ejibn4joNnMsotR0OrudkE3mX4YeyYC6QOYiV4lpeWtt5wMtaelXvnqYUBPM1n4A175qnMNFXtc1xENm32Qv1ozLUU%2FfPhuS4k70jkEub5caZBLrd00luL2%2Fw871lTeelT%2FpD9Srs8pTzgqZL%2B%2FmH7tMggoh3Pboy%2FbeqbR3MEz8dKrfEAJtfGVJGVc0QGWCAPKy0GA%2F5VGVKaTY0R2aePQZvoV3Xkdf6yx4xFmzkL5Ssu7OXL6KAVQTTQxG8%2BMcAYOjh1tRrM4gB%2B2PvUG0vBRigkQa%2F6BtnGaXXRcDNaRF4ggSXlc5htMk93SkKrxxV%2Bj3Sp0NBfrYHul0jGasavm7FuZD82GvBtI1bMGHPi8vEu3koa9%2F%2B1B4xzcWKKHU2l2aGYe%2F8UV6dn5mSaBGTgw7u5CK%2B0LDvmssi1%2F3Lr1E4GMMah3ckGOqUB0afT7OVrQ3qEQJU9UdevUYmS4fqHMBiE7%2BaPrz7djfb3XUYILRNlMe3bB%2BPC2T%2B3QPSzHKnSmDwpz8cV3KBqHB1NcNqJuFc%2BSPNe%2BafenYG6QahFJerAAzC40TIj6cdnZy6haMyL%2FB2kWQFC1MybLhfZFspwg%2FbvFYHW9VSasUjurNJxN9Ad7sRE16nYj8Q%2Ft8njpmAOtTfO5nRwdk1GX%2FKRm7K9&X-Amz-Signature=2184ca8ff7866429feabcb232196598c6ca6d948b89b5cc467173e8b6056b7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
