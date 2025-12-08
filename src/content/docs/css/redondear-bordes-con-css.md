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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSFCYTK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyH8d7gDUWLCytNItmTqdyKl0t1Aup4jsRPUpTX0K5jAiA3ZxR2o4h89Hd6Q8kNnCaGPhVmRgVaeLGW9zF%2Ft7pmIiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCkw0%2BgdjSm846CT3KtwDCg6FuwUIy0mSu4FgGoJ1ATHoD23n3HSXPTDD%2BRk%2FEOpnB7skVo%2BbEtQ59jiYbj1ALGiV8BtPlr1s1%2FtxCEc%2B4yqcG3rln9I8K1rbuwf%2BodiTxFuf7sqxJvMSEYryIGazVDKAZWzMpVfHqkFClM%2B6fuwiqhFh7g0MxtSWtRFYwIBhHgzsZDkxmdK7U2XAn7nJlg4jDHj8lqlfVmjvR0bcOvPkMrp1p7w4Y6%2Fm3j7B0ZNNa7Qs7tLJMKmJuRcjswDX1DqX%2FXx0d53vlv60VcC98vK%2FLR4x%2Fn%2BAVjEmNXCpw3xoGFmwwHe8hpyIvMHq1p5M5rv2b35XSeSchSGJBzvRyakxPwJGBy70UeL0l9tI71D%2FjK0wHGIpADcAyxGhqiU9GaQJz39%2BnqcLR44Gc81V5ShRUZzuyAwO3McZfxDv1h75jj0%2FWEnXVoR8KPWJT3LX5uXJq00LirCeUPdXxAvSGsHeIbbngIdCMkiqdM31He7DLdNlWzNs0ibICSPuWgb8BgwZGGNFqHo6OvBqChtRhtH0ia1cwSTPxGTsk4bLsT47YpMom3XaSYvJaBOmBzvrHBZb%2BoqcWf%2FVFP1WoiK8D0DTQYOxuPXIEv33gayl4W0wDXOKGmYMoZhTfzIwhcPdyQY6pgFslG5BCl4Ty5gJ4FF1csXsDFoRaT26J5h1kmjsGJsPgVwaNF78FiPbsqp4tTrllq1RQEdKfczoqsaRsbFC89ryKU992iL2yxJ5BlyRH7%2BHKkisvRGbwK0cEwqgLTVET8BowDWFTBlzzmyGawybvcfjX%2BJXjx5s319W2wTz%2FBcjVXhyh%2BBqrsuEH7b3uBdoP26EIlI2GYMVidIgmYG2CkKnTz%2BQhO6j&X-Amz-Signature=063e46c0a8e64266286d6b4c730d0819989bf2ec8641dadac9b07079479726ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSFCYTK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyH8d7gDUWLCytNItmTqdyKl0t1Aup4jsRPUpTX0K5jAiA3ZxR2o4h89Hd6Q8kNnCaGPhVmRgVaeLGW9zF%2Ft7pmIiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCkw0%2BgdjSm846CT3KtwDCg6FuwUIy0mSu4FgGoJ1ATHoD23n3HSXPTDD%2BRk%2FEOpnB7skVo%2BbEtQ59jiYbj1ALGiV8BtPlr1s1%2FtxCEc%2B4yqcG3rln9I8K1rbuwf%2BodiTxFuf7sqxJvMSEYryIGazVDKAZWzMpVfHqkFClM%2B6fuwiqhFh7g0MxtSWtRFYwIBhHgzsZDkxmdK7U2XAn7nJlg4jDHj8lqlfVmjvR0bcOvPkMrp1p7w4Y6%2Fm3j7B0ZNNa7Qs7tLJMKmJuRcjswDX1DqX%2FXx0d53vlv60VcC98vK%2FLR4x%2Fn%2BAVjEmNXCpw3xoGFmwwHe8hpyIvMHq1p5M5rv2b35XSeSchSGJBzvRyakxPwJGBy70UeL0l9tI71D%2FjK0wHGIpADcAyxGhqiU9GaQJz39%2BnqcLR44Gc81V5ShRUZzuyAwO3McZfxDv1h75jj0%2FWEnXVoR8KPWJT3LX5uXJq00LirCeUPdXxAvSGsHeIbbngIdCMkiqdM31He7DLdNlWzNs0ibICSPuWgb8BgwZGGNFqHo6OvBqChtRhtH0ia1cwSTPxGTsk4bLsT47YpMom3XaSYvJaBOmBzvrHBZb%2BoqcWf%2FVFP1WoiK8D0DTQYOxuPXIEv33gayl4W0wDXOKGmYMoZhTfzIwhcPdyQY6pgFslG5BCl4Ty5gJ4FF1csXsDFoRaT26J5h1kmjsGJsPgVwaNF78FiPbsqp4tTrllq1RQEdKfczoqsaRsbFC89ryKU992iL2yxJ5BlyRH7%2BHKkisvRGbwK0cEwqgLTVET8BowDWFTBlzzmyGawybvcfjX%2BJXjx5s319W2wTz%2FBcjVXhyh%2BBqrsuEH7b3uBdoP26EIlI2GYMVidIgmYG2CkKnTz%2BQhO6j&X-Amz-Signature=f9e3446c31f7f7973d8ee4c4ac7872c8663c94def4b854ff9f170dff298ab89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
