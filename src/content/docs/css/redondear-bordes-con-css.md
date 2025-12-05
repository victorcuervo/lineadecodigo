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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4W7F5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B6meNXH0pj3nvNpWJaJtGvpcE4B2acKnj%2FgolsY3nkAiBdFHIbDTiSwZGMdqs%2F%2B9WKZEqou5v5Pw5RnTNX%2FqSPRCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQkjlnknzmPma1U5rKtwDGUfRx7NCJwQdqVtzAPPIsS%2Bvq%2B76wXF1jBdjTkZnv%2Fq2MTPLlsiFODdTKBsftIPaodZBWSfGZlbGF3D08qhVtHkBKQlTvAmI77BsmXlKGD965X3DjaEpAKlfXsQ6RZQX5HWe1ZJ1%2B4meWnKJfAO2qbiLWxHc%2FnlH640jsHMCBd46c%2FlveiIiuPWe7wS1TFu49d6s8l%2B7GTa3JfjQJnoENLC4riyIYVbbDnhy9ChBTigJAg8Sd2JXhR0P5%2FdCaB3%2Fj9Yy3qW8SjL6hMmfU2O%2FlZuGvvPJDG9r3RdAS4qBxxqLcA00avR3LIA1OvreP9%2BSX6ahfjNYF8SGbBO%2FkWvM4wO2uajdrLMPSGcD5eMp%2BnMrhcOEOrerWVxIfOGIQ5SUvxUMdsADGTOf8W1yXbNtcvNVuoBU1cT5BA9GdyMSjkxFZuF6KCdzX767PpHTS9iheaVV9OcnHe38xjXe%2BIsPMurw0buMkN3hxulSlleCbSk1UoKz0qojfrtsNhFDbfbY2uOwKk8ZEPQbhGQMwnC9dRw3Va7PKwPoJBnK3gRqO%2BnzKkI361CwPXUndSjEE3Mw8l0Grx212w8tcNm9UDqaHWbs7QJy%2BH2XMO1pYpTGqLHQruIDImWVcb1I%2BSQwmMjKyQY6pgFwFt9rnYoGcoyUcrCQu3uva5FISaMlICXiao2VEALtzGye0WaL8GzEV5PTs0e39%2BrrL21MSIFhVHJjedosPt6dfjnv0l8ED9AF8BrmOHCIYInTWIlDoW%2BbJEq2nlxcG%2BSo%2FHT3y%2FhqrZ7kzv%2Fk%2BEmi%2FwJ5Nzqsok38qVZYzp1hbasPpqYeSAjFxmnqGt8Wk5WQ3rVB92C1fbvkgdL8pRfSl1QiojGq&X-Amz-Signature=20863904f1c0aa2849e183395ca1cf081a3a07a13dc92b1e947c06f6e0d73613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4W7F5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B6meNXH0pj3nvNpWJaJtGvpcE4B2acKnj%2FgolsY3nkAiBdFHIbDTiSwZGMdqs%2F%2B9WKZEqou5v5Pw5RnTNX%2FqSPRCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQkjlnknzmPma1U5rKtwDGUfRx7NCJwQdqVtzAPPIsS%2Bvq%2B76wXF1jBdjTkZnv%2Fq2MTPLlsiFODdTKBsftIPaodZBWSfGZlbGF3D08qhVtHkBKQlTvAmI77BsmXlKGD965X3DjaEpAKlfXsQ6RZQX5HWe1ZJ1%2B4meWnKJfAO2qbiLWxHc%2FnlH640jsHMCBd46c%2FlveiIiuPWe7wS1TFu49d6s8l%2B7GTa3JfjQJnoENLC4riyIYVbbDnhy9ChBTigJAg8Sd2JXhR0P5%2FdCaB3%2Fj9Yy3qW8SjL6hMmfU2O%2FlZuGvvPJDG9r3RdAS4qBxxqLcA00avR3LIA1OvreP9%2BSX6ahfjNYF8SGbBO%2FkWvM4wO2uajdrLMPSGcD5eMp%2BnMrhcOEOrerWVxIfOGIQ5SUvxUMdsADGTOf8W1yXbNtcvNVuoBU1cT5BA9GdyMSjkxFZuF6KCdzX767PpHTS9iheaVV9OcnHe38xjXe%2BIsPMurw0buMkN3hxulSlleCbSk1UoKz0qojfrtsNhFDbfbY2uOwKk8ZEPQbhGQMwnC9dRw3Va7PKwPoJBnK3gRqO%2BnzKkI361CwPXUndSjEE3Mw8l0Grx212w8tcNm9UDqaHWbs7QJy%2BH2XMO1pYpTGqLHQruIDImWVcb1I%2BSQwmMjKyQY6pgFwFt9rnYoGcoyUcrCQu3uva5FISaMlICXiao2VEALtzGye0WaL8GzEV5PTs0e39%2BrrL21MSIFhVHJjedosPt6dfjnv0l8ED9AF8BrmOHCIYInTWIlDoW%2BbJEq2nlxcG%2BSo%2FHT3y%2FhqrZ7kzv%2Fk%2BEmi%2FwJ5Nzqsok38qVZYzp1hbasPpqYeSAjFxmnqGt8Wk5WQ3rVB92C1fbvkgdL8pRfSl1QiojGq&X-Amz-Signature=2b89047aa423c53038f4e472aee5ed22d8d94c93bf0932db2131590de7d0d12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
