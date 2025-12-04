---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJNV52N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCZ0KOYFzKSkV9aJB6V9eUYN62hEnQrxWrd0zT0lt%2F5hgIhANWKKOo3JsesnYuSDAzEhtEOMRn%2F9Pr0F4FPJZb1TumOKv8DCDoQABoMNjM3NDIzMTgzODA1Igzvu%2BU714MGd1v4d%2Fgq3APZI%2FYqw0SxdtjfeHQSM9Qr32mHgMBvGHzhNMVZyeav4Jy%2BteNkCvMYDXN7nBFzSm5xmtUp3reJRXZ7cvXXDIV7Gr9d8rlqfp%2B77b%2FLlLq8AUWGghE87pQYm9%2B6%2BLvszf3Z09i78GzkP8xjM786A2N5bUKSQbP8ZvMyguyN8gvF24ud%2BBRs%2FiqvqD3OEjfVa1%2BwH%2BAo6XH5hICFcI0c%2Fq3F2D3VYgDwz%2Fnufn9DCYQa%2FKmK%2BbE%2BrgdmjgFhpgoA2JMk%2BqKLn4Qh7CfVHbRM%2BppgGL445PerTqZnkxlE38KF1ZDbHMtD9l8I%2BhmmfIGUOcwDn1AiQqumBH8D%2BD4cIzZg4S00VTWh82jQ4phzDY%2BaP2WGwzhT5ykv5PBNoe65BuVhGjGBKPidjugKW4FWLTLkcpaAqH4ZYJ3isKhiykhhN6hF%2BXXi9fW6PibHLMxaTMVXT6%2FCmAs7obZwg5gg0VfjY57h1iFQOfToxgEU%2FmYstyA2JiOkUAkxWe%2B5309axo1M%2F43L6tgqzU57QaecpfZRvCRsGBn%2FuNd0jRQl2QnvQ%2BYOpthUvtYdXyDH1tHFhI6jLv0%2FZWZxHloZyRZyIR25dMtQxKiB111wKOyRvcHSESamTZ%2BKYk%2B4tHoipzCTtMPJBjqkAc8nDLeaaNJlhSBMzt1JlcpoBXpzabP94WgEOm5Xea1VGPDUsxr%2F7OJXCBqvqKKUMqU%2Bf9W%2B6JjFFUBZWnXxcVny23oHzC53dYXg6IIRyzZrxTcJ9diGK3pU24ZnOxlgs9JuWozoP5%2BQp7x%2BKlKKfyGJm6k%2B3EcJyYbKZ%2Fv%2F92WDd3hib5C34USOOAi%2Fekhtpp%2BfwUFQGw62zod%2FkL%2B5b%2F%2FOQ446&X-Amz-Signature=0fb75fcec76a65124f3aa04d69262141dfa79dd639b44f4332b07c43f0e504b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJNV52N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCZ0KOYFzKSkV9aJB6V9eUYN62hEnQrxWrd0zT0lt%2F5hgIhANWKKOo3JsesnYuSDAzEhtEOMRn%2F9Pr0F4FPJZb1TumOKv8DCDoQABoMNjM3NDIzMTgzODA1Igzvu%2BU714MGd1v4d%2Fgq3APZI%2FYqw0SxdtjfeHQSM9Qr32mHgMBvGHzhNMVZyeav4Jy%2BteNkCvMYDXN7nBFzSm5xmtUp3reJRXZ7cvXXDIV7Gr9d8rlqfp%2B77b%2FLlLq8AUWGghE87pQYm9%2B6%2BLvszf3Z09i78GzkP8xjM786A2N5bUKSQbP8ZvMyguyN8gvF24ud%2BBRs%2FiqvqD3OEjfVa1%2BwH%2BAo6XH5hICFcI0c%2Fq3F2D3VYgDwz%2Fnufn9DCYQa%2FKmK%2BbE%2BrgdmjgFhpgoA2JMk%2BqKLn4Qh7CfVHbRM%2BppgGL445PerTqZnkxlE38KF1ZDbHMtD9l8I%2BhmmfIGUOcwDn1AiQqumBH8D%2BD4cIzZg4S00VTWh82jQ4phzDY%2BaP2WGwzhT5ykv5PBNoe65BuVhGjGBKPidjugKW4FWLTLkcpaAqH4ZYJ3isKhiykhhN6hF%2BXXi9fW6PibHLMxaTMVXT6%2FCmAs7obZwg5gg0VfjY57h1iFQOfToxgEU%2FmYstyA2JiOkUAkxWe%2B5309axo1M%2F43L6tgqzU57QaecpfZRvCRsGBn%2FuNd0jRQl2QnvQ%2BYOpthUvtYdXyDH1tHFhI6jLv0%2FZWZxHloZyRZyIR25dMtQxKiB111wKOyRvcHSESamTZ%2BKYk%2B4tHoipzCTtMPJBjqkAc8nDLeaaNJlhSBMzt1JlcpoBXpzabP94WgEOm5Xea1VGPDUsxr%2F7OJXCBqvqKKUMqU%2Bf9W%2B6JjFFUBZWnXxcVny23oHzC53dYXg6IIRyzZrxTcJ9diGK3pU24ZnOxlgs9JuWozoP5%2BQp7x%2BKlKKfyGJm6k%2B3EcJyYbKZ%2Fv%2F92WDd3hib5C34USOOAi%2Fekhtpp%2BfwUFQGw62zod%2FkL%2B5b%2F%2FOQ446&X-Amz-Signature=6bae033f2e7c62db75ec174651d365224a232ebabd5980dd6e40c6e609c3aedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
