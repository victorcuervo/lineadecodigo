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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQR36YTC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzvp87lpOyf2pg15Bp8vzNYO6MrZ3CBbHzivXonYHuQAiBcMF00iiNK%2F5g044lx%2BgLWI50BWtXZcIxumpI7Qh3F5iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl8K3445m0eR2caURKtwDOSY6x39NAzeuTupE6sSXdyryJqsq3E83qGzTb3WGe3PHU30m8eUGPP4nixsE98epI89DD5FQJBSazwSFXiBVsYV0k4sb2P3YeEfyCM2dk9LPdd1A0UVNFE2gkRit4ZF7k7GWlGTwD9dmD1yqP%2BKHurNwuNawJMtTlY5lyNu9ZyYNZck3r8dW4S%2FbLdgViEhDpwMZu3qmKwQrZ9m%2F21HE4DBtNph64Eh9xZ2tJhxJKkU4lsTcXR4Jy0iZBs%2FOSWkG0UXDYHtGSHmFtww4JHPZn8IBehSw%2FN2cDv6xomJEwSyet62A6xE7qPR7YgONQEn6SdDDgZKWwnie17mg21508IW0jU8CRFjgVdsZOIGUCjICNTrhVB6NPrXfV4Q8nF%2Bm6hvICVHbuS3PNP9L3ipmippzVjWx%2FJ3sRrN5tp7OV257Q5Yq0fDVo2QziiqKuJ7HV2CujAJw46NCtrR1sKFh6u760CznAcu%2BE5dvqZRV%2B21vCP61jId3wKvT%2FI%2BaX%2FrUnAVsann4RqllLuNidnL7s1Cl%2BTB1BmNxr0H%2FAOit39JCjpTg20XqtnAMLMvGQroeIfqgkeP0eKXqypuS8XUBSEHrSUPsqIAS30T5HW2%2FlxL8GGjpAYKXHX57grUwvY%2FbyQY6pgGrFuUUYixuw7miFn81JWNPI6%2F3tJCZz6hOOFzquQYXZ7yt3%2BF9Kj1rhi86hMWLHxAsmxbVKV8ECRneeISDwaraZ8ulrBuFfE0zfIZ5cWDnGZo9RyEAFDNnUhjsnxGp94vwwXdGQHBi7vI986mCWMPU0fRtvE9nRMHN483h1RDVvPQLORr1MOuO4ME7v1yVfmwp0hGVQTQoT8%2FLZF1j3qg530LH0Nbe&X-Amz-Signature=f6eee42007175d09f7aa8de55671c2e715e380aa083af5ff0ea7746c05cfa8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQR36YTC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzvp87lpOyf2pg15Bp8vzNYO6MrZ3CBbHzivXonYHuQAiBcMF00iiNK%2F5g044lx%2BgLWI50BWtXZcIxumpI7Qh3F5iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl8K3445m0eR2caURKtwDOSY6x39NAzeuTupE6sSXdyryJqsq3E83qGzTb3WGe3PHU30m8eUGPP4nixsE98epI89DD5FQJBSazwSFXiBVsYV0k4sb2P3YeEfyCM2dk9LPdd1A0UVNFE2gkRit4ZF7k7GWlGTwD9dmD1yqP%2BKHurNwuNawJMtTlY5lyNu9ZyYNZck3r8dW4S%2FbLdgViEhDpwMZu3qmKwQrZ9m%2F21HE4DBtNph64Eh9xZ2tJhxJKkU4lsTcXR4Jy0iZBs%2FOSWkG0UXDYHtGSHmFtww4JHPZn8IBehSw%2FN2cDv6xomJEwSyet62A6xE7qPR7YgONQEn6SdDDgZKWwnie17mg21508IW0jU8CRFjgVdsZOIGUCjICNTrhVB6NPrXfV4Q8nF%2Bm6hvICVHbuS3PNP9L3ipmippzVjWx%2FJ3sRrN5tp7OV257Q5Yq0fDVo2QziiqKuJ7HV2CujAJw46NCtrR1sKFh6u760CznAcu%2BE5dvqZRV%2B21vCP61jId3wKvT%2FI%2BaX%2FrUnAVsann4RqllLuNidnL7s1Cl%2BTB1BmNxr0H%2FAOit39JCjpTg20XqtnAMLMvGQroeIfqgkeP0eKXqypuS8XUBSEHrSUPsqIAS30T5HW2%2FlxL8GGjpAYKXHX57grUwvY%2FbyQY6pgGrFuUUYixuw7miFn81JWNPI6%2F3tJCZz6hOOFzquQYXZ7yt3%2BF9Kj1rhi86hMWLHxAsmxbVKV8ECRneeISDwaraZ8ulrBuFfE0zfIZ5cWDnGZo9RyEAFDNnUhjsnxGp94vwwXdGQHBi7vI986mCWMPU0fRtvE9nRMHN483h1RDVvPQLORr1MOuO4ME7v1yVfmwp0hGVQTQoT8%2FLZF1j3qg530LH0Nbe&X-Amz-Signature=9923a8cca8f5ed90727b88227b0bc4f9cd75289be6273030a7976b2b11f28952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
