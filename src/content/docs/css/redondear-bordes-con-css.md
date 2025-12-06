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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2L47HV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyif7gDu7D9FWilVHlayqvrUF5h4%2FJsZi97DHS2eOUeAiAcBRzzXUC9aF6uJJMjhC4pSuxpDuiFU9HV57%2F5xoCmFyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIEYx7pFgRPjSxQpQKtwDWe35fsKk88IG1qY5bkiCkbB90jVGqa%2BGzHx43Gr%2F1yOw56gYyJZOa7cMDQuQ8Chgz73WClcJ5RDaursl0VFSDcQA82aSAFoMpdATjTXvYzUPQSxe2S6flwwWlkkarfJBo2f2JH4yFj%2BpB6lAgjfCpH9qupyQ54Vnbk8JVkUfwPF8f%2Fdgj%2Bzya0UyFMrBlsWDxBFqNO7hHeQQv0XKeFXYssnAFIxWSIcVhKZHYkk0PRaoKe%2FMJUY26sfxGIsfOqUGvrNJgFrfuTSTFAuAzFvr3vn%2FJkcC1vJ%2BrB%2BjFYEsCeqePapZqf%2ByU%2F2HDaRprEKYizMKun4S2feIJMWx3Cxd1CI0ZV3pEYYLgakiqaSbOQF7Ya1XLAXj4VLJreRuSnPPPWI0Zi6jmCMtoPB2%2Bpe2jB9FIDNCR%2BVh4smJJhNQwHqcJXdPHXxfzqWd8fqpXd4oREn6KWAvYjMxJ06O6IDSz4KAt%2Fvs4zmIqLTJbu8vp8etS9quxKXHAPhiN%2B9CImd55G7MMeJJ6Dj%2BjKiNzZ6xFBxV3xug7EUXVvKSyhVSwS0j3mvQvvyEoxpUSeboZp0gz6T%2FW7NaqYpLDdg6%2FiJg%2B76VgJhyqkaTe12OjSdbJFBR2uB7eNrBPwtJcbEw78POyQY6pgFiYG8Zoxx4Yfl1rkc%2BP3saWyJnWrPhwsnAgBOZDIrxKjyxE0vY8tLvB0J%2BGB3sQbX4%2FweBdCXmkTDR7tp95dTkOpwSV3v3qDcDvcy%2BmZkxxGFuuSbnYo0vQhVJuqAmqp%2BsF7gldh9TKzENCaxB0hUSvJgdwqE%2BTDD%2B6owyWhobo7e4ME%2BmZedsXfaalmMbRpOja2J64nxbeXmQKCKR0pAyO5izNcTV&X-Amz-Signature=5f81877adf78e2f229066e0041940bcc63650b0bf3324228aa1368c21f346824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2L47HV2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyif7gDu7D9FWilVHlayqvrUF5h4%2FJsZi97DHS2eOUeAiAcBRzzXUC9aF6uJJMjhC4pSuxpDuiFU9HV57%2F5xoCmFyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIEYx7pFgRPjSxQpQKtwDWe35fsKk88IG1qY5bkiCkbB90jVGqa%2BGzHx43Gr%2F1yOw56gYyJZOa7cMDQuQ8Chgz73WClcJ5RDaursl0VFSDcQA82aSAFoMpdATjTXvYzUPQSxe2S6flwwWlkkarfJBo2f2JH4yFj%2BpB6lAgjfCpH9qupyQ54Vnbk8JVkUfwPF8f%2Fdgj%2Bzya0UyFMrBlsWDxBFqNO7hHeQQv0XKeFXYssnAFIxWSIcVhKZHYkk0PRaoKe%2FMJUY26sfxGIsfOqUGvrNJgFrfuTSTFAuAzFvr3vn%2FJkcC1vJ%2BrB%2BjFYEsCeqePapZqf%2ByU%2F2HDaRprEKYizMKun4S2feIJMWx3Cxd1CI0ZV3pEYYLgakiqaSbOQF7Ya1XLAXj4VLJreRuSnPPPWI0Zi6jmCMtoPB2%2Bpe2jB9FIDNCR%2BVh4smJJhNQwHqcJXdPHXxfzqWd8fqpXd4oREn6KWAvYjMxJ06O6IDSz4KAt%2Fvs4zmIqLTJbu8vp8etS9quxKXHAPhiN%2B9CImd55G7MMeJJ6Dj%2BjKiNzZ6xFBxV3xug7EUXVvKSyhVSwS0j3mvQvvyEoxpUSeboZp0gz6T%2FW7NaqYpLDdg6%2FiJg%2B76VgJhyqkaTe12OjSdbJFBR2uB7eNrBPwtJcbEw78POyQY6pgFiYG8Zoxx4Yfl1rkc%2BP3saWyJnWrPhwsnAgBOZDIrxKjyxE0vY8tLvB0J%2BGB3sQbX4%2FweBdCXmkTDR7tp95dTkOpwSV3v3qDcDvcy%2BmZkxxGFuuSbnYo0vQhVJuqAmqp%2BsF7gldh9TKzENCaxB0hUSvJgdwqE%2BTDD%2B6owyWhobo7e4ME%2BmZedsXfaalmMbRpOja2J64nxbeXmQKCKR0pAyO5izNcTV&X-Amz-Signature=4e662f058aee468385ea66a0e38fd911eb9866eb99d443bdace79f3ae0c054be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
