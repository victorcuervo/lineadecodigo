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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4RMHT2T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypCmI%2BPgGe0RhPk9kAULvevNksBeW7eChJzaDAj4cgAiEAogOi17AJJRwrTdVfUkyJiwkzA37HG603oS5xOOgSNHUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkK46OUrb1Z861LFircA1am8MCbPGmIRRJFpJP8xZV78zY8C9wUOHga9HJ7eTv%2FBj%2FHtaR4VyVeuwe%2FsBtHPh4BD1YVvXQmIbeAJtSmsJkJxMmBxtmhjrXSwSMOG0VhWKx%2FppR%2BISrkfcuRFszBpnoGoKRfUIL1KPDicTD3KBRLwCLUHIFEsAAlzBUSg6BIRK2mgCt8Tuy77%2BARYAxRW%2B%2FOT%2BZzPZM9pSB376KGzhLiTZPwdJRjeI%2FCU4k4y7YSvIK0YlZvifOXczs%2FooymGuhxqgy8v5qhQjzRX%2BRo47O5FSgVDBf0W3%2Bdch%2FHmFwvud7SR%2Bym5X1NAX%2FbXw3uo1wf5pv6Gcp1GyYXTnwJq%2BriJ%2BexGawf4JyRyhDVXKzjpA6oGvJZgbxxz6WdSBmvonx0YhuNWgZYX3McaZ8tOj269tk5Vf%2FF6n9SiaqoN9jwrgsZMWvgs5TRzP8QF1sJI25HUHehYPuY9E752KcIOw9U50VnKMr2TQbfLG%2FqmEhxUqzXAFw1hP3MX9XX%2BfS4pH9ZGji9jX%2FnlpZxV%2FPrDGWVGlJeRccmXMFfcbWDd%2BFBURtKElDW7zxoAwkUu4c37C%2BbVDdsweqX4V9N046C4f85B7PL%2FffQg8NOJTy38LIkcUBRsC3Jhm8HDBdDMIvz2skGOqUBeyysapRz%2BAib4gdy9v31xwC3oVsRG%2BRgKQq1Dpf9VlVGosqO7aPqX5Y0N7CpJGDHExrRcGeTXlwj2MReTb6PNPuPVSWFVQ2FvzvvbR1ra%2FcOgg9Ctl%2FMRtOkySO39FBb2ge4Zkeo3LQoHLG%2FpxtvpAPwRT4tCULSXXrMXiQ2%2FARhqgULrkO491AeRMLs%2B0s4UhczuPGi5oy831WnVEbsxuwtzH6z&X-Amz-Signature=4bca1dc129cf094e78628c814b85a2ba429d3ea335ea5a2b98e6210aa8a1893d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4RMHT2T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDypCmI%2BPgGe0RhPk9kAULvevNksBeW7eChJzaDAj4cgAiEAogOi17AJJRwrTdVfUkyJiwkzA37HG603oS5xOOgSNHUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkK46OUrb1Z861LFircA1am8MCbPGmIRRJFpJP8xZV78zY8C9wUOHga9HJ7eTv%2FBj%2FHtaR4VyVeuwe%2FsBtHPh4BD1YVvXQmIbeAJtSmsJkJxMmBxtmhjrXSwSMOG0VhWKx%2FppR%2BISrkfcuRFszBpnoGoKRfUIL1KPDicTD3KBRLwCLUHIFEsAAlzBUSg6BIRK2mgCt8Tuy77%2BARYAxRW%2B%2FOT%2BZzPZM9pSB376KGzhLiTZPwdJRjeI%2FCU4k4y7YSvIK0YlZvifOXczs%2FooymGuhxqgy8v5qhQjzRX%2BRo47O5FSgVDBf0W3%2Bdch%2FHmFwvud7SR%2Bym5X1NAX%2FbXw3uo1wf5pv6Gcp1GyYXTnwJq%2BriJ%2BexGawf4JyRyhDVXKzjpA6oGvJZgbxxz6WdSBmvonx0YhuNWgZYX3McaZ8tOj269tk5Vf%2FF6n9SiaqoN9jwrgsZMWvgs5TRzP8QF1sJI25HUHehYPuY9E752KcIOw9U50VnKMr2TQbfLG%2FqmEhxUqzXAFw1hP3MX9XX%2BfS4pH9ZGji9jX%2FnlpZxV%2FPrDGWVGlJeRccmXMFfcbWDd%2BFBURtKElDW7zxoAwkUu4c37C%2BbVDdsweqX4V9N046C4f85B7PL%2FffQg8NOJTy38LIkcUBRsC3Jhm8HDBdDMIvz2skGOqUBeyysapRz%2BAib4gdy9v31xwC3oVsRG%2BRgKQq1Dpf9VlVGosqO7aPqX5Y0N7CpJGDHExrRcGeTXlwj2MReTb6PNPuPVSWFVQ2FvzvvbR1ra%2FcOgg9Ctl%2FMRtOkySO39FBb2ge4Zkeo3LQoHLG%2FpxtvpAPwRT4tCULSXXrMXiQ2%2FARhqgULrkO491AeRMLs%2B0s4UhczuPGi5oy831WnVEbsxuwtzH6z&X-Amz-Signature=da995e26f399905b90ea609d553b9188e157cb896c53fd66f875e4feb6356c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
