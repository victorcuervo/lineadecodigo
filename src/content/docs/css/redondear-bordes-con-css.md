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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6ZTRUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4izqEssXVeyiPKXdPYNNoI77oIwMkCHASa4RXjC%2BN%2FQIhAOmwSeILe3RDq%2FJvRh7%2ByhgPxRxXwLN0Jl0LKiYj6abqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynuTbEEc%2F92M5P12sq3AMXniZ9aUoXSAQtJcuvM23iff17SewzpySMbtmOdfOS7nPNyDLOWbCF3Cz9Qo2AySNVZggKiDmyymYKHd4c%2FUfZdEInXqCwHKsSufTM51RmS0%2BxQxQ%2BUuSV7polDISGd2DHrFzOw%2BL7aXroTGWfDZwpHtBx%2BUHeBNU2FRqG%2BgJwOdrFiUxz02PuhlyNPE%2FWcXb2tDs6k6WGNP49E2jVX3TNY1OAn7%2BvkTTSzaIhprNIEvM7FD%2BZO8c0YpwRZS2fzOwnTZThocu8lbADFYniuYT5lCP8UwtcLxGYH%2Bcj3h4IpjBHki9rS3MIM4nTGWoEVR3QgUDzRdXjVAQUI2Ks2MXgyT1GYWLhYjZSuIfCdI%2FUWmrWv0OEVkYlVDFcO2bFzJOmZ2vO9sSB5Az5x86DjKiAMNbQ863x8T8w4UontOtRlYIYaY2IZKuSusyaWZiIJfqWFPC80lT8OqSTC0ZrOCE0P%2F9MJ3U8fgvLqKUYtGi7AAvBr0F5n5OJ3O%2B9nbTwgSDbGUQ6Aua5bk3qODGsKGTfis%2BIpU0g9U7EamJT7Iiv%2BQijX2SdRrbzp%2Bhq%2FB7kWJOq4LxzGVHOGx1hyPCbaHGjxtMMIDwoxKTeH6Uf1w22OKPu%2F52U%2FB%2FLRlElAzDhhNjJBjqkAR3tWSGkncx1HtlgBgSfFKqN3I6lWPXe1X2Ik%2Bu5RUerLMkxUXmSDFh3ik8OAaBfOqj35SZWu1kCdeKKuYiT727uRYa7SPaZEENodkcd2AKtA7WB2LhShorBBhM77ZN178b%2F0%2BaPCFm0u5qluGXp1%2F5Tl%2BMTSHj8p4ZGpSdppGC8IwYYFPvi86p7h5GvJSyFXopUck%2B%2BkzjCt4dq%2FP5hkzn%2Fus4m&X-Amz-Signature=f870f5a1096b575f5303586b513092710f935c04cdfa1960135a96ebf2156c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6ZTRUA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4izqEssXVeyiPKXdPYNNoI77oIwMkCHASa4RXjC%2BN%2FQIhAOmwSeILe3RDq%2FJvRh7%2ByhgPxRxXwLN0Jl0LKiYj6abqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynuTbEEc%2F92M5P12sq3AMXniZ9aUoXSAQtJcuvM23iff17SewzpySMbtmOdfOS7nPNyDLOWbCF3Cz9Qo2AySNVZggKiDmyymYKHd4c%2FUfZdEInXqCwHKsSufTM51RmS0%2BxQxQ%2BUuSV7polDISGd2DHrFzOw%2BL7aXroTGWfDZwpHtBx%2BUHeBNU2FRqG%2BgJwOdrFiUxz02PuhlyNPE%2FWcXb2tDs6k6WGNP49E2jVX3TNY1OAn7%2BvkTTSzaIhprNIEvM7FD%2BZO8c0YpwRZS2fzOwnTZThocu8lbADFYniuYT5lCP8UwtcLxGYH%2Bcj3h4IpjBHki9rS3MIM4nTGWoEVR3QgUDzRdXjVAQUI2Ks2MXgyT1GYWLhYjZSuIfCdI%2FUWmrWv0OEVkYlVDFcO2bFzJOmZ2vO9sSB5Az5x86DjKiAMNbQ863x8T8w4UontOtRlYIYaY2IZKuSusyaWZiIJfqWFPC80lT8OqSTC0ZrOCE0P%2F9MJ3U8fgvLqKUYtGi7AAvBr0F5n5OJ3O%2B9nbTwgSDbGUQ6Aua5bk3qODGsKGTfis%2BIpU0g9U7EamJT7Iiv%2BQijX2SdRrbzp%2Bhq%2FB7kWJOq4LxzGVHOGx1hyPCbaHGjxtMMIDwoxKTeH6Uf1w22OKPu%2F52U%2FB%2FLRlElAzDhhNjJBjqkAR3tWSGkncx1HtlgBgSfFKqN3I6lWPXe1X2Ik%2Bu5RUerLMkxUXmSDFh3ik8OAaBfOqj35SZWu1kCdeKKuYiT727uRYa7SPaZEENodkcd2AKtA7WB2LhShorBBhM77ZN178b%2F0%2BaPCFm0u5qluGXp1%2F5Tl%2BMTSHj8p4ZGpSdppGC8IwYYFPvi86p7h5GvJSyFXopUck%2B%2BkzjCt4dq%2FP5hkzn%2Fus4m&X-Amz-Signature=f002643e8a11c28476f32b6c7151d1e4e84bc2766e5b428f4be5407c181ef82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
