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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4NH6XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7v5Bi8sf24KTPw4kJkM6d9GpthVGEFkbdzkKlzahYxAiEAkuvzrel1sGcgsFqzkn7DezdzAPm%2Brmfcte60EyZl4Lcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIbnqNsFEQasM0Wd7yrcA0SxayuMgQcLM3RXlmko%2BbM4oW90l7avu579BjNTWEAVdXYw2H3hHpjliLoDE6bHO%2FijOquVpZ7zRsUz02FvPYSyIsdiTWsZgTxLO%2BpOLLIfviwkqxUuvzkMMBSGfr7ACCCbKixdTdnFlCgDD4fxtW1sL%2BqRzIv41DRC5eX1JimuEeRFZe3tBqtw263lypMBQxIugMSVUNWJfm6UBk3rxUyShMkQCL9uiMHIm2uhl93t60pQLVL66%2F%2F8pvJkHf%2BeLCd4ZA256YPxUuoeUsEsClsKmjb5MKtDNv9%2BP9aYuAB4VM1DriWnufnxUZrA237XpvzKLl7HXpnaDxivTxAMCM6dJpniuiksxb1pdxHaDVZ86DF3jxamNrcfJyuIcprk4f8fbEcNNB%2FI0GSAVAJ7sLKnB6ClLq1Qri4qxf1rdVVQnCsh%2B6yTZC%2F0KGmVNHirCp9e0ILQvqXgFJ%2BJSLEPxChy260KTQOB9XlN9sr6pFvfAlbht8SQC76MJ2JwEy0LQr3lHuwdyj7gLFpClGq3QAGpYb7wSWOCm8cXWDwa1P3jVWGYMwwR5i5lXydGw6wz64TXiaIf%2F1AOL44xYOVK3aCSH3KN6BdhM%2F8%2FXSg5DQOS0JY0K0%2BPMBexvUp%2BMOfhisoGOqUBt72irYrzXqO6CH7X4ANd2F4BLBgQPhueMYPU8AzeyVcryGXMlWML94LOIdDszV6OosidelqQ6aDvQsJXpN7569mFICFjONxWstTVE6YHcMBpqxLST%2BSaeJoIvH%2BV3OaSXAXMklt9EBv7PiPz2ijLvipYy%2F90EjsHGO%2B3CWe3f9cF4j%2Bsex%2F9Z2ZWNwdHS7AjRnAympVYUpNTWJX2jX8IHtWg4RML&X-Amz-Signature=7f51dc401912a6ca2f87448ed79a893a5f9b11579d6ea766c07354a562b18c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4NH6XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7v5Bi8sf24KTPw4kJkM6d9GpthVGEFkbdzkKlzahYxAiEAkuvzrel1sGcgsFqzkn7DezdzAPm%2Brmfcte60EyZl4Lcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIbnqNsFEQasM0Wd7yrcA0SxayuMgQcLM3RXlmko%2BbM4oW90l7avu579BjNTWEAVdXYw2H3hHpjliLoDE6bHO%2FijOquVpZ7zRsUz02FvPYSyIsdiTWsZgTxLO%2BpOLLIfviwkqxUuvzkMMBSGfr7ACCCbKixdTdnFlCgDD4fxtW1sL%2BqRzIv41DRC5eX1JimuEeRFZe3tBqtw263lypMBQxIugMSVUNWJfm6UBk3rxUyShMkQCL9uiMHIm2uhl93t60pQLVL66%2F%2F8pvJkHf%2BeLCd4ZA256YPxUuoeUsEsClsKmjb5MKtDNv9%2BP9aYuAB4VM1DriWnufnxUZrA237XpvzKLl7HXpnaDxivTxAMCM6dJpniuiksxb1pdxHaDVZ86DF3jxamNrcfJyuIcprk4f8fbEcNNB%2FI0GSAVAJ7sLKnB6ClLq1Qri4qxf1rdVVQnCsh%2B6yTZC%2F0KGmVNHirCp9e0ILQvqXgFJ%2BJSLEPxChy260KTQOB9XlN9sr6pFvfAlbht8SQC76MJ2JwEy0LQr3lHuwdyj7gLFpClGq3QAGpYb7wSWOCm8cXWDwa1P3jVWGYMwwR5i5lXydGw6wz64TXiaIf%2F1AOL44xYOVK3aCSH3KN6BdhM%2F8%2FXSg5DQOS0JY0K0%2BPMBexvUp%2BMOfhisoGOqUBt72irYrzXqO6CH7X4ANd2F4BLBgQPhueMYPU8AzeyVcryGXMlWML94LOIdDszV6OosidelqQ6aDvQsJXpN7569mFICFjONxWstTVE6YHcMBpqxLST%2BSaeJoIvH%2BV3OaSXAXMklt9EBv7PiPz2ijLvipYy%2F90EjsHGO%2B3CWe3f9cF4j%2Bsex%2F9Z2ZWNwdHS7AjRnAympVYUpNTWJX2jX8IHtWg4RML&X-Amz-Signature=8fe4659853ae3bfbfced3815a8baaba54711e83c8397e7cd141b346c2b0f186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
