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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJ6L2QW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWe0I5zvAxm9bFzS3pINKLgriq16Q7PTOjNv3aDOOuyAiAMiIsuwMkOHvFga6Qewf3sZJ3ZRFw3DYj55jJBQwz42iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfV2XYCjjin%2BRMmQKtwDmLhXgV%2FWlREkf2YgMp00Xy2v99trk%2F70Wx%2Bi6h1EueW0VTPzyz4kKhrRkC39SvjyhHEm7ptDv7IPUTbO45XRFGTiO3S9CsrOVp%2BPK3sL4Ws0dVS3eE1lwdmItFkrfNlUyv7gP6PWPwguKdV0lIYzBza2sS6JQnUeU5i%2F%2BtrV%2Bt8iLXItTYB7jKPaHCScvEsywc%2BIcHnF9g89Sqq%2FlpxHcrhqYwUHykwLI0N%2BW%2Bbfj5en14ltJckT2V7rObkLPrxDUFekjOLSYHd4DTZ0n0EHsRw1eeKoNA9PADZYOM%2FQaym785zQiJvhEbN9ysd%2Fb0U5GL5g3MTn%2BMa80Gwt5mEXRbrkbhHMhT9TzxAbdHO7UOmft5MyZCyi2QJKSxsWTPkViFVczS92YYLJco1S9R4y2XwxDtuk5sHzQt7RvWtlQyzIDdjUZ5U8smfQVHRKXE2zlD1fm62pX9afoZDjueKUd7kCa84lt8LLHnLJ6KYc%2FhpRnzqUd8nr5gN6lOo1quR0Y2H5mKe2Rqv4mq2BWiaZiGWazLlB6ZKp%2B%2FzQIbx3fCpTGTdehk4oSoMM7tzGuSeOlU6Kv4%2FciuofzPDrVMh4fNiu23RABfefa3mHHC5zmf4nL5RDdERs7p%2FxhxwwkfTayQY6pgHkVrSkKM3JjHsHHxgMQ7bP7GH7rXRbOXHp0asV4PLHDVIZrxIVfTrvj%2Bh6DN%2B6nu%2F6%2FAS1G9p%2FvBKWJ2kSekGEzH%2FF4CFx6Pf30AV7L9iPCrL%2FDGayJMw5u%2FglnBSOW%2FXjJeZfPgCeaPqQsisXbUnSlNo4Oxb%2BUeyqzDU5Y0hNAUIZIasJRwiWKC6YNlgLidjbgkol%2FLOQiAZjZFocDZljRPxQkaQX&X-Amz-Signature=0650d20651a9b7acb2937d82d5213bdba94186246e085ef1fc16a2921b8b7e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJ6L2QW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWe0I5zvAxm9bFzS3pINKLgriq16Q7PTOjNv3aDOOuyAiAMiIsuwMkOHvFga6Qewf3sZJ3ZRFw3DYj55jJBQwz42iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfV2XYCjjin%2BRMmQKtwDmLhXgV%2FWlREkf2YgMp00Xy2v99trk%2F70Wx%2Bi6h1EueW0VTPzyz4kKhrRkC39SvjyhHEm7ptDv7IPUTbO45XRFGTiO3S9CsrOVp%2BPK3sL4Ws0dVS3eE1lwdmItFkrfNlUyv7gP6PWPwguKdV0lIYzBza2sS6JQnUeU5i%2F%2BtrV%2Bt8iLXItTYB7jKPaHCScvEsywc%2BIcHnF9g89Sqq%2FlpxHcrhqYwUHykwLI0N%2BW%2Bbfj5en14ltJckT2V7rObkLPrxDUFekjOLSYHd4DTZ0n0EHsRw1eeKoNA9PADZYOM%2FQaym785zQiJvhEbN9ysd%2Fb0U5GL5g3MTn%2BMa80Gwt5mEXRbrkbhHMhT9TzxAbdHO7UOmft5MyZCyi2QJKSxsWTPkViFVczS92YYLJco1S9R4y2XwxDtuk5sHzQt7RvWtlQyzIDdjUZ5U8smfQVHRKXE2zlD1fm62pX9afoZDjueKUd7kCa84lt8LLHnLJ6KYc%2FhpRnzqUd8nr5gN6lOo1quR0Y2H5mKe2Rqv4mq2BWiaZiGWazLlB6ZKp%2B%2FzQIbx3fCpTGTdehk4oSoMM7tzGuSeOlU6Kv4%2FciuofzPDrVMh4fNiu23RABfefa3mHHC5zmf4nL5RDdERs7p%2FxhxwwkfTayQY6pgHkVrSkKM3JjHsHHxgMQ7bP7GH7rXRbOXHp0asV4PLHDVIZrxIVfTrvj%2Bh6DN%2B6nu%2F6%2FAS1G9p%2FvBKWJ2kSekGEzH%2FF4CFx6Pf30AV7L9iPCrL%2FDGayJMw5u%2FglnBSOW%2FXjJeZfPgCeaPqQsisXbUnSlNo4Oxb%2BUeyqzDU5Y0hNAUIZIasJRwiWKC6YNlgLidjbgkol%2FLOQiAZjZFocDZljRPxQkaQX&X-Amz-Signature=1d4b8c900f6e112fbe1ed35be8153a43881a8d0dc2407320cfa1765b06126890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
