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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7CDSJL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPJG4YFE3jxuG28w8axgBLr1xEuWVEdWL5kiBgptDdkAiEA1ziAYinqzLYOPpPuSGXggvSV67VDHj1EwHubqRIZAcIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCEmKf9jgg2CoSg2XircA9eFFuh6b%2BjiZnPwld%2BvgNMAN07p2h49IVZpKgAENMEEFJNnGqIsCoOQo9og98Sz0x3Ew29uI2e%2BkUJbqPLmp72dOlszz%2FnAcHR5xXQmdOZ1ZSAfDYQSbEMVhloRnV3TzbDiG%2BIBTU379ONNXZnLn42FpSWBr0Dc1WU9brjR9rBnZd5bQV3fnCcVc%2FcISKCe68bEoN8mBKAFPA3gUfBSRrPdUWL9kDCDBuOFg27JDkZtff22oVgv%2BBvnmgo%2FUf9Qsgcid8iGEUBBzFYLSXD2TiN3SmyaGc3iShb3oVLMh7u2T8SrjMN3rvsZyIWZJdA%2BnxkuUYSQmbOglK1hpno1ow1RcNmkrMxLr%2BkhZSzFziIToO2XyrJYjXWoDBpmne%2BgGZqZrwK%2B%2Fs4cwy6mlgChHQ1S0cnvcQg7aH29fD10aaJTuBL6AHyCVOhPKgq2phDnyHDPtOZH0oT9fmJU1jgUz3KCSjIYiWZfTqlVudm4GYuZy53oG%2Bjn50xQEBGByZIAad%2FNhMXc4vGn35zYPbOBFeE3ccw0c2GSliSf7E4HTt%2BaP%2Bq9rCnGJSMzxONN6knm%2BxOVsp%2BKeQs%2Bx6rwi8E8xrtj4rc%2BPOK0IyTFMhwPPzzTj31HtirYIhXjMqwtMK%2BLzckGOqUBVrCO8vgzjvVigktPDuSTIXast4yZwL7qbG1wDnBFhPT3rkRKYLyyFAEwC9MpAXDBJTwL46p7G5vLvnP0Q3CZHItgrGHWnQb06g41a%2FSNBfok89aeRTPgJbMQlzBaDhQ6uLDd7FlPcvhaw9P16X9rAQ6fZyG9hrGVYxW022CvlRIGvtBOILDyB32sKmlWR5kCNPQ2D1MU67g89yyIsinXBnUSo5Xa&X-Amz-Signature=06bccb7b32f06220b7cebd8bb6dc1afeab30f5425975d90f6aa690ec8ec3814a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7CDSJL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPJG4YFE3jxuG28w8axgBLr1xEuWVEdWL5kiBgptDdkAiEA1ziAYinqzLYOPpPuSGXggvSV67VDHj1EwHubqRIZAcIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCEmKf9jgg2CoSg2XircA9eFFuh6b%2BjiZnPwld%2BvgNMAN07p2h49IVZpKgAENMEEFJNnGqIsCoOQo9og98Sz0x3Ew29uI2e%2BkUJbqPLmp72dOlszz%2FnAcHR5xXQmdOZ1ZSAfDYQSbEMVhloRnV3TzbDiG%2BIBTU379ONNXZnLn42FpSWBr0Dc1WU9brjR9rBnZd5bQV3fnCcVc%2FcISKCe68bEoN8mBKAFPA3gUfBSRrPdUWL9kDCDBuOFg27JDkZtff22oVgv%2BBvnmgo%2FUf9Qsgcid8iGEUBBzFYLSXD2TiN3SmyaGc3iShb3oVLMh7u2T8SrjMN3rvsZyIWZJdA%2BnxkuUYSQmbOglK1hpno1ow1RcNmkrMxLr%2BkhZSzFziIToO2XyrJYjXWoDBpmne%2BgGZqZrwK%2B%2Fs4cwy6mlgChHQ1S0cnvcQg7aH29fD10aaJTuBL6AHyCVOhPKgq2phDnyHDPtOZH0oT9fmJU1jgUz3KCSjIYiWZfTqlVudm4GYuZy53oG%2Bjn50xQEBGByZIAad%2FNhMXc4vGn35zYPbOBFeE3ccw0c2GSliSf7E4HTt%2BaP%2Bq9rCnGJSMzxONN6knm%2BxOVsp%2BKeQs%2Bx6rwi8E8xrtj4rc%2BPOK0IyTFMhwPPzzTj31HtirYIhXjMqwtMK%2BLzckGOqUBVrCO8vgzjvVigktPDuSTIXast4yZwL7qbG1wDnBFhPT3rkRKYLyyFAEwC9MpAXDBJTwL46p7G5vLvnP0Q3CZHItgrGHWnQb06g41a%2FSNBfok89aeRTPgJbMQlzBaDhQ6uLDd7FlPcvhaw9P16X9rAQ6fZyG9hrGVYxW022CvlRIGvtBOILDyB32sKmlWR5kCNPQ2D1MU67g89yyIsinXBnUSo5Xa&X-Amz-Signature=6b8c18d762c70d64c126151750eda5e74afc2a6faa6ca701030f92ca1a2bf6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
