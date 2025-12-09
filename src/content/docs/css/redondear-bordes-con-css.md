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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTAH46X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3r4kNk57dk3VpDnkqGDHnJCgf4FOm4BVVxYWLL2ag5QIhALUnrftFBqKjSOZyNbGtbr0aAFw%2BTifKfyXvNBoI0PtrKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBqIMogUbFrIQTglMq3AN1If8a3OlZPsNJ92Afawkj1cDvq4yzhGkOGMTZlfe7uTNgf1HVFuy7mMvLrmlbwQEINPUxHFn3wMTHuMnuGBBT%2F8%2B6CdfEw0GJNufHflN6vb%2BKZ559HVB6oxrYcmF72vPnIoYiWYk6x5KAqWfboBxMavgKaCJywvC4UHIgdYalQWdBwdpYFK9p9sUjQUBvmfcEmFhSrm1SY4zY0lA29CkTcYQKV7uzR%2BlFeik3ubNqndDeg06HY9OxisrBjmj5e%2BoL4OajbF2vTMh0jEFkyu6wuFsT621A89L5UjOv2%2BpiJ6Rdz8iCrJ%2BcW%2Bg2oWqs75Zkio7EXi0q8r8yzaPCkO%2BUGTU97yl7JkivlndP4YBn2N8brfl8HLRlyje0irAfDpjF4FxBXTeyRzJ%2FnOEFDYrPB1xeUgScU23607g7ImcIURrlNDzvWH%2BbOT7%2BcS2PkbkyDsIxhWfjsoROem7URRDUiPFPQonab9MwaH8FM8%2B2%2BQxW09LCmNONc68xwt5nh6YoHJ1WmQ4kkmYfwjthD6KEeShVSsXCi0gHP8%2BN3XoqSEvJ%2BMsJBr8G4k2pXyfemRDfvAJjE%2BGDSwAkjIXImfryCnQLQeHKIQAlyGLfzJQmvVol3xnxUdAFlDIGTTC3w93JBjqkAf7%2FNjTwrZh3q9wkJmkYIGcZpq%2BtQTF3Rs0oz%2BXFgmB3Yqdjcrsv5nunId7kpEOwg%2BAHvAv0%2BXq0yAJnd2hm8DznYMV6EzA9uYSuAS0JYMvg%2FCAqIcCEK1vezZz5oeyXbPF9WgrfqoQSENjbIWbcyUkR4BcwS0ClGtXDrCPbwIuLV50OTPxjt7bfsfq4RJP4%2BpY3AVhpbx28d57YOl%2BxbLITrjqQ&X-Amz-Signature=e1d7ffe58e5aea87d6a7801d86705287190de6846712127a8d7a3355fe040ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTAH46X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3r4kNk57dk3VpDnkqGDHnJCgf4FOm4BVVxYWLL2ag5QIhALUnrftFBqKjSOZyNbGtbr0aAFw%2BTifKfyXvNBoI0PtrKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBqIMogUbFrIQTglMq3AN1If8a3OlZPsNJ92Afawkj1cDvq4yzhGkOGMTZlfe7uTNgf1HVFuy7mMvLrmlbwQEINPUxHFn3wMTHuMnuGBBT%2F8%2B6CdfEw0GJNufHflN6vb%2BKZ559HVB6oxrYcmF72vPnIoYiWYk6x5KAqWfboBxMavgKaCJywvC4UHIgdYalQWdBwdpYFK9p9sUjQUBvmfcEmFhSrm1SY4zY0lA29CkTcYQKV7uzR%2BlFeik3ubNqndDeg06HY9OxisrBjmj5e%2BoL4OajbF2vTMh0jEFkyu6wuFsT621A89L5UjOv2%2BpiJ6Rdz8iCrJ%2BcW%2Bg2oWqs75Zkio7EXi0q8r8yzaPCkO%2BUGTU97yl7JkivlndP4YBn2N8brfl8HLRlyje0irAfDpjF4FxBXTeyRzJ%2FnOEFDYrPB1xeUgScU23607g7ImcIURrlNDzvWH%2BbOT7%2BcS2PkbkyDsIxhWfjsoROem7URRDUiPFPQonab9MwaH8FM8%2B2%2BQxW09LCmNONc68xwt5nh6YoHJ1WmQ4kkmYfwjthD6KEeShVSsXCi0gHP8%2BN3XoqSEvJ%2BMsJBr8G4k2pXyfemRDfvAJjE%2BGDSwAkjIXImfryCnQLQeHKIQAlyGLfzJQmvVol3xnxUdAFlDIGTTC3w93JBjqkAf7%2FNjTwrZh3q9wkJmkYIGcZpq%2BtQTF3Rs0oz%2BXFgmB3Yqdjcrsv5nunId7kpEOwg%2BAHvAv0%2BXq0yAJnd2hm8DznYMV6EzA9uYSuAS0JYMvg%2FCAqIcCEK1vezZz5oeyXbPF9WgrfqoQSENjbIWbcyUkR4BcwS0ClGtXDrCPbwIuLV50OTPxjt7bfsfq4RJP4%2BpY3AVhpbx28d57YOl%2BxbLITrjqQ&X-Amz-Signature=3289d0142030f47cdc38d7239f5db8d3a385c8dff437bf2aca492279a092938d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
