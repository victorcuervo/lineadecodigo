---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMED6U4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkf3WC1w2GWf%2FOjgdwZslzheCOxgxmM9kBXuQyCi20sAiEAjVn8VquIeWGy46LsDc1xB4JMD8tycNmnuBDUIqoECGoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi67l2jhvDUGZa2kCrcA%2FVnMpeZF5wkDY2AEZ3LgYp3iSA3KrFaq%2F0f%2Bs4Ev0Wdj2NPiyTToBSlMS8Ca9GGQ8xOeUrEhCSNkPNRJxVK4jHaSZHSWoVTVivNtncVEgRujzvYuZfQXw%2FQitrD8p%2FpK2HSAiyHKKNYluT4cRKgezd3zqgY8C%2FFjWuqp7Wiyu4mHf7ryohKc%2FDZ2ByXPyoZ4BGx7N4znMmSqrWWbfWln6VQ2gtSVW2TXnAuXGifWxs%2BxF369%2FdUwy0p4Z1%2FAX%2BAYX%2FwuKsp6UuEzHsgFkYexUPi%2Faus%2FT80OVNTL3B6P31qoQQvlZ09DdOvvZjQTim2ZNIN%2BVcvjdoxpIS0hvEfY5J7XSOrcUy4X1GjAIwfIGNlwq8XOv%2Fk6CphAgJv1tf9HpOoGVjKocG8xJkNMVnBBBmoKVfGTt0soV75bbh12WeuVaov%2BLugA0gxwijLCQvE9wTUErcwzWze0AUOCChjpRrQYmh8YbBH7ioNeFThaxNY3obU8n94b1wEdLM3zOpp7hvh%2ByeWVbq5bX3xiRfHqEmpVqvBVOnqVVBH61wa%2BAJcJ65RzK9wRSpBjHdPKq2PvcfI1EWUbN9RksIdDFBZO1PD9iirXFxby9xpKB1qx3KuBy%2BisjHJxPqsLDpDMMCujMoGOqUB93zUaHt5nt34ktZSBbPqTEO%2FZjAdGcx6T8M9NexilEewIAYQuTzU81VwIsU6C6AofRAl9H640K7vn2YZPH0iq4Hob04XV%2ByqouXkt2QS17ikO4Pfx5kKQCHtQfdbHeZ6DfVb8%2Byq94tVnoW0YudtKXAAqh5aB12hGeKvft50qvGq2uhYJKnd%2BhORWwd%2Blm0LqTIb0MNT1GWpJVCDLR6i5bkrNtQS&X-Amz-Signature=27a958f9c5e8bcc04a9f3a0c4ab09bc600626ddd9d8fc99e690184e8eda728a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEMED6U4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkf3WC1w2GWf%2FOjgdwZslzheCOxgxmM9kBXuQyCi20sAiEAjVn8VquIeWGy46LsDc1xB4JMD8tycNmnuBDUIqoECGoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi67l2jhvDUGZa2kCrcA%2FVnMpeZF5wkDY2AEZ3LgYp3iSA3KrFaq%2F0f%2Bs4Ev0Wdj2NPiyTToBSlMS8Ca9GGQ8xOeUrEhCSNkPNRJxVK4jHaSZHSWoVTVivNtncVEgRujzvYuZfQXw%2FQitrD8p%2FpK2HSAiyHKKNYluT4cRKgezd3zqgY8C%2FFjWuqp7Wiyu4mHf7ryohKc%2FDZ2ByXPyoZ4BGx7N4znMmSqrWWbfWln6VQ2gtSVW2TXnAuXGifWxs%2BxF369%2FdUwy0p4Z1%2FAX%2BAYX%2FwuKsp6UuEzHsgFkYexUPi%2Faus%2FT80OVNTL3B6P31qoQQvlZ09DdOvvZjQTim2ZNIN%2BVcvjdoxpIS0hvEfY5J7XSOrcUy4X1GjAIwfIGNlwq8XOv%2Fk6CphAgJv1tf9HpOoGVjKocG8xJkNMVnBBBmoKVfGTt0soV75bbh12WeuVaov%2BLugA0gxwijLCQvE9wTUErcwzWze0AUOCChjpRrQYmh8YbBH7ioNeFThaxNY3obU8n94b1wEdLM3zOpp7hvh%2ByeWVbq5bX3xiRfHqEmpVqvBVOnqVVBH61wa%2BAJcJ65RzK9wRSpBjHdPKq2PvcfI1EWUbN9RksIdDFBZO1PD9iirXFxby9xpKB1qx3KuBy%2BisjHJxPqsLDpDMMCujMoGOqUB93zUaHt5nt34ktZSBbPqTEO%2FZjAdGcx6T8M9NexilEewIAYQuTzU81VwIsU6C6AofRAl9H640K7vn2YZPH0iq4Hob04XV%2ByqouXkt2QS17ikO4Pfx5kKQCHtQfdbHeZ6DfVb8%2Byq94tVnoW0YudtKXAAqh5aB12hGeKvft50qvGq2uhYJKnd%2BhORWwd%2Blm0LqTIb0MNT1GWpJVCDLR6i5bkrNtQS&X-Amz-Signature=c34752d5323b9cb37eb9e9571ae2f3bde8d2a73f049dcc3e882d516a52dcd324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
