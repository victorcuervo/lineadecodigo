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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU3PTWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7%2FUNKx%2BvfUF0vE6NDxJdckHvksODDNa9TdwHqvLP8rAiAMo6FgJhcMIr17fLHeX09wlfbr2tn6HcyJdQHBUufUxyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREKf0egyEwrCDL59KtwD0DpPl9ZBYKrJJ5a%2BOQjWBdiRS0t2Xp0h%2FKah%2FNg5LjF4OAS3KRV7UAaZCkQTXuUEKwCjTca%2F6JSu7Ry8Q%2B0%2FScGrmsnF9JLh9I8nlvAlgG7dHPpXLBbZHG4evhLQ7oHzDdl6jJUsF415cuaGBC2onXKd5CIk7021YeBmTiEvsqTFOGTSKPwQ8lZcFaAZAEB5ItJS8KFyha8mQkh7Ka4h%2B9bYGSwldq2GBAExYr0%2F7yFU2Upv%2BPqiVfOlgHwxSRX5XtImP4bZyTrIf%2FbKQYGLekiXQNj4%2ByV8HrzNqLXlPIqdzxU9Nm6kE8c9UkSJ7srngLZrXuR9JWhN13XF1ctEt5xDQQKYFLPmBiEQWuN7uxY4zJz71056XcNbnJ41SOnIwq2yjI%2BYKN2Zvvq4qdB2caZU1AFvL9pnGB1uyBPQ%2BwoXgWNn4TpQqG7%2FbWrY5WMoyZEbHH1qfPupOfFMFpmPVPLGrkbutbfSVHn73JnvJcNQIljXNnhlXKrPv0oGSB2kw1hupuj5UPfQcaJaDel2vLIpUKQaaY%2FpxII%2BEsOjL%2BxXqZHjpg397IdxqwErdM8uPeH2V%2BqnHXtIQOo8DKwZ2BrlJg7Bpwy2CCvP33PPfuOgIl%2F8VGhAZWu84ckwv6HdyQY6pgFX%2BW7Ej6OiSYSt2x2iTKedp5HsVTJqVEPIB%2F47YQXA3OleRorJhYotBB%2Fzq1pCdqjJOs1yW4qqPz787j7bkvfVyqxCsmphCB%2BFY58sNkiVy5x24umBrZrbwwk0o%2BEBzZB5LAHLLO4Sf%2FAKTA9ODKdWjR6zohnDJdl5jFD1RZBsTQrD7unZmMbCFeAvvJC04dzXjKqLVb%2BTR%2FqnVNjWYillEoddFH%2FL&X-Amz-Signature=1ef02c9f21cc989c8cb958dc7879c86f7b7a75ecb67931e62107548854f8d76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU3PTWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7%2FUNKx%2BvfUF0vE6NDxJdckHvksODDNa9TdwHqvLP8rAiAMo6FgJhcMIr17fLHeX09wlfbr2tn6HcyJdQHBUufUxyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREKf0egyEwrCDL59KtwD0DpPl9ZBYKrJJ5a%2BOQjWBdiRS0t2Xp0h%2FKah%2FNg5LjF4OAS3KRV7UAaZCkQTXuUEKwCjTca%2F6JSu7Ry8Q%2B0%2FScGrmsnF9JLh9I8nlvAlgG7dHPpXLBbZHG4evhLQ7oHzDdl6jJUsF415cuaGBC2onXKd5CIk7021YeBmTiEvsqTFOGTSKPwQ8lZcFaAZAEB5ItJS8KFyha8mQkh7Ka4h%2B9bYGSwldq2GBAExYr0%2F7yFU2Upv%2BPqiVfOlgHwxSRX5XtImP4bZyTrIf%2FbKQYGLekiXQNj4%2ByV8HrzNqLXlPIqdzxU9Nm6kE8c9UkSJ7srngLZrXuR9JWhN13XF1ctEt5xDQQKYFLPmBiEQWuN7uxY4zJz71056XcNbnJ41SOnIwq2yjI%2BYKN2Zvvq4qdB2caZU1AFvL9pnGB1uyBPQ%2BwoXgWNn4TpQqG7%2FbWrY5WMoyZEbHH1qfPupOfFMFpmPVPLGrkbutbfSVHn73JnvJcNQIljXNnhlXKrPv0oGSB2kw1hupuj5UPfQcaJaDel2vLIpUKQaaY%2FpxII%2BEsOjL%2BxXqZHjpg397IdxqwErdM8uPeH2V%2BqnHXtIQOo8DKwZ2BrlJg7Bpwy2CCvP33PPfuOgIl%2F8VGhAZWu84ckwv6HdyQY6pgFX%2BW7Ej6OiSYSt2x2iTKedp5HsVTJqVEPIB%2F47YQXA3OleRorJhYotBB%2Fzq1pCdqjJOs1yW4qqPz787j7bkvfVyqxCsmphCB%2BFY58sNkiVy5x24umBrZrbwwk0o%2BEBzZB5LAHLLO4Sf%2FAKTA9ODKdWjR6zohnDJdl5jFD1RZBsTQrD7unZmMbCFeAvvJC04dzXjKqLVb%2BTR%2FqnVNjWYillEoddFH%2FL&X-Amz-Signature=82950f396811b9085374b2daa8f3a1a4f31941b8ce2a765db9cc39a027bd1b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
