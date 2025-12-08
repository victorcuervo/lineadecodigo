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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BU36LJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Edzk26cwZ0pwPU28HBtC7HGiGjfOJXL3enN%2FNDKcXAIhAMPExd2kQAkGy%2FTvBjjfvjPict0JCupgVvI9aUoh1e%2FJKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4kpsbuyMzl1GC4Ycq3ANNsGp%2Bvo2h20VzUxHLM6%2F2aOWpCwF5wbNNsNAAgumZUluh1Po9bqa9C53G3UbqnpUm4cUBsHuUcjejvBiBmY5i%2Fq2egR3gJq4I6eVmlwxhwuQcXjIZLy1DPM%2F4qcjH18ND4y4l7%2FOI7GNdMMT0%2Bn4SFgSTqlW6LWUO5%2BqCPsMT1Wu3xaxgToUaiFOxfY0e2Ssnu%2B6qLEGbY9DJxtqp4cFnmb%2Byv%2BNB6ShIBfjkWsAVe6d5NhIfJORGBYp2NQaSFqM29ZGDzbfeHMCtLR8%2Bt7G1x3weu%2Ffq7CjTIppW2Cjlb3JnUI1iFdFL4Ig5nC3Sml1Gy1ureKsYQj%2BF4EQlTNcvcGJKWEc6cFZftIN8ZJtfy8ISNWHtqrDe2tuBZxh%2B2G8Ndb8o1qTVZEsO%2FZc9cqQ%2FUmoaU%2BKC4ZB18bUMmOFNzRFBxbUeICl7ErdbpgsYacy9iIZZLxBmZjCXlIHKgqiPcVj09EQiHsQIVHohCVXjt%2FsVtz8PbTX5KQczxEX7uWRhNipKEHSl1X1AO4C1HoHmq6VbC5eTAJc%2FMUtX3A7CYQCnvtkk%2B6vNtpTV4a0RtpUZDrNtsR5g0bO8pkFmiipZrZePatQ8Ptu9UPbOtdF7YLu%2BHrVgumlzEGvcCjCW7dnJBjqkAYsKqhLj7xiQITTAvI9ISbdu0Xm9Hj07iQI8foNrffnAfMpVxDGH47yGdpAy5b3I%2BRyl6bHoVXcfAFG%2B5TK1o0sJw20IbmMLjIP9by0BW8C%2Fk7JCpJ3AOj9ql5D%2BOoM0wTlrPg7pO7eH2lAE7xXKJHB6WN65U%2BJb9zjBtgdIOBBHaGAqoBZh29vhGDXI%2FJjfkscJVoHJ%2FO8dbQ8wgPBMT%2FtabYKg&X-Amz-Signature=18988b60cc37b14d87a6851230e6742a0c09461b18fc018564c72e709b3fe0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BU36LJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Edzk26cwZ0pwPU28HBtC7HGiGjfOJXL3enN%2FNDKcXAIhAMPExd2kQAkGy%2FTvBjjfvjPict0JCupgVvI9aUoh1e%2FJKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4kpsbuyMzl1GC4Ycq3ANNsGp%2Bvo2h20VzUxHLM6%2F2aOWpCwF5wbNNsNAAgumZUluh1Po9bqa9C53G3UbqnpUm4cUBsHuUcjejvBiBmY5i%2Fq2egR3gJq4I6eVmlwxhwuQcXjIZLy1DPM%2F4qcjH18ND4y4l7%2FOI7GNdMMT0%2Bn4SFgSTqlW6LWUO5%2BqCPsMT1Wu3xaxgToUaiFOxfY0e2Ssnu%2B6qLEGbY9DJxtqp4cFnmb%2Byv%2BNB6ShIBfjkWsAVe6d5NhIfJORGBYp2NQaSFqM29ZGDzbfeHMCtLR8%2Bt7G1x3weu%2Ffq7CjTIppW2Cjlb3JnUI1iFdFL4Ig5nC3Sml1Gy1ureKsYQj%2BF4EQlTNcvcGJKWEc6cFZftIN8ZJtfy8ISNWHtqrDe2tuBZxh%2B2G8Ndb8o1qTVZEsO%2FZc9cqQ%2FUmoaU%2BKC4ZB18bUMmOFNzRFBxbUeICl7ErdbpgsYacy9iIZZLxBmZjCXlIHKgqiPcVj09EQiHsQIVHohCVXjt%2FsVtz8PbTX5KQczxEX7uWRhNipKEHSl1X1AO4C1HoHmq6VbC5eTAJc%2FMUtX3A7CYQCnvtkk%2B6vNtpTV4a0RtpUZDrNtsR5g0bO8pkFmiipZrZePatQ8Ptu9UPbOtdF7YLu%2BHrVgumlzEGvcCjCW7dnJBjqkAYsKqhLj7xiQITTAvI9ISbdu0Xm9Hj07iQI8foNrffnAfMpVxDGH47yGdpAy5b3I%2BRyl6bHoVXcfAFG%2B5TK1o0sJw20IbmMLjIP9by0BW8C%2Fk7JCpJ3AOj9ql5D%2BOoM0wTlrPg7pO7eH2lAE7xXKJHB6WN65U%2BJb9zjBtgdIOBBHaGAqoBZh29vhGDXI%2FJjfkscJVoHJ%2FO8dbQ8wgPBMT%2FtabYKg&X-Amz-Signature=847f8366e6e7feb1e5680dbe2b563b1c0e9f743ea59fead70535972ff5c5354b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
