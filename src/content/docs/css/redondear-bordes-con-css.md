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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTIFELP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2puYOD5e1Dcs55SLNXrIPdWBl6jGhgPY0jtB1VL%2FLVwIhAJEi0jWwleTvT9PCTYd8l%2BlC4WOe9PL1pU14g6BNWAC%2BKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMJu6hOcpW%2FRyMDbkq3ANiiiSiyA9WK9F72XLjOTIRT1shniAk8TzZdUrFGo88%2Fh6LZLYUxwmx4QPa9yoDJShzATG5x9ZZGhGwBY90yZpkBXhtT5ez1ijVPl8e8ne7kTfwMVLqdGmmJLCMLr0D08D7w9WTrhtE9Q4g8NBoyBRvMSfOoQrfRmumltR1KTZBAKfMvbYcrf37kTSgJMOLxegjmtXtqSeiP37qoATxnQtUjudeenEextwnoNs4m1FpCbvhaerLY%2FWjH3%2FOJBZ8wIjPXCUgV97A%2BH3M0UkLp68TOW1fRKqBuOI1sdeAjwgbWAIglmc%2BO%2FJUXpzv5W1J9JWUR40jS1v4py5uI4ZITyFpOPfucLAHUApAQy3XFf4nXMNqlg1MAaLqtCvcfSSm5QtT89SjgzY8tRNEC2BO8Y0ScpGjFqoPlRe134ILDZXylnLWRHz%2Bo9rv55CKF8c5lR%2F5zH63Z%2F7VBFVDXyfx9%2FE%2FwUjJB75mCdf9J2B358v5uEiTBDX89G2ULxvVMcabY5BhOcRdyzQTwCvbm8AhAvzcbnZ9Y5mG1LdcmuE935kndABTLUIotAg4RWtzb4Sg%2BKCScj45LLAXWmZU41Ws0NnBFziNqBOjrTaDOMM3d1Zrf%2BgTU%2FE3zFL5MaoiozDandTJBjqkAbqXISOeriiMlUcAAH2qqpDKRz5u88yVi7mMc60s%2B2ldQvanRig1ldYO%2FVLDyCqnBEX9OrNsrqmUv5npsusekzEW5s06UGYS0MqNeQy92%2FXHaH9cjkV9vpCv13T5nflxqp9hB8di5Amyu%2BtYnQC8JVYlQtVyfjU02aouPj4tBuaK3PktNo0egEQw5x3Xzz9IEOBAk7o9W4W7mfxam9jqqNTNH1U8&X-Amz-Signature=a0d9ed9099b74a410150f9b4184cbda8202207d13ab560b5cd5cbfde01c51cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTIFELP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2puYOD5e1Dcs55SLNXrIPdWBl6jGhgPY0jtB1VL%2FLVwIhAJEi0jWwleTvT9PCTYd8l%2BlC4WOe9PL1pU14g6BNWAC%2BKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMJu6hOcpW%2FRyMDbkq3ANiiiSiyA9WK9F72XLjOTIRT1shniAk8TzZdUrFGo88%2Fh6LZLYUxwmx4QPa9yoDJShzATG5x9ZZGhGwBY90yZpkBXhtT5ez1ijVPl8e8ne7kTfwMVLqdGmmJLCMLr0D08D7w9WTrhtE9Q4g8NBoyBRvMSfOoQrfRmumltR1KTZBAKfMvbYcrf37kTSgJMOLxegjmtXtqSeiP37qoATxnQtUjudeenEextwnoNs4m1FpCbvhaerLY%2FWjH3%2FOJBZ8wIjPXCUgV97A%2BH3M0UkLp68TOW1fRKqBuOI1sdeAjwgbWAIglmc%2BO%2FJUXpzv5W1J9JWUR40jS1v4py5uI4ZITyFpOPfucLAHUApAQy3XFf4nXMNqlg1MAaLqtCvcfSSm5QtT89SjgzY8tRNEC2BO8Y0ScpGjFqoPlRe134ILDZXylnLWRHz%2Bo9rv55CKF8c5lR%2F5zH63Z%2F7VBFVDXyfx9%2FE%2FwUjJB75mCdf9J2B358v5uEiTBDX89G2ULxvVMcabY5BhOcRdyzQTwCvbm8AhAvzcbnZ9Y5mG1LdcmuE935kndABTLUIotAg4RWtzb4Sg%2BKCScj45LLAXWmZU41Ws0NnBFziNqBOjrTaDOMM3d1Zrf%2BgTU%2FE3zFL5MaoiozDandTJBjqkAbqXISOeriiMlUcAAH2qqpDKRz5u88yVi7mMc60s%2B2ldQvanRig1ldYO%2FVLDyCqnBEX9OrNsrqmUv5npsusekzEW5s06UGYS0MqNeQy92%2FXHaH9cjkV9vpCv13T5nflxqp9hB8di5Amyu%2BtYnQC8JVYlQtVyfjU02aouPj4tBuaK3PktNo0egEQw5x3Xzz9IEOBAk7o9W4W7mfxam9jqqNTNH1U8&X-Amz-Signature=8d2de106144645b0819d10c82742aff99eb081899805911299c5bf0bd6854385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
