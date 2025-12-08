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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5S2XZQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXDkYf6MT2CXqzafdAs2yBTF67wft6uhcTx0Pia%2FGPLAiAXH5zIwqHSeKam9l9wYmHvHpJDa7BTZizvyaSUlDluSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdm3T1foq%2Bnq3ncWPKtwDqmAT6IK3qj4Y8CMLDwwN0k1%2Foz4pwuR76FJy1ZmZ4jaKYpYxFEngeH5%2BWYYjPOqb8e9YQh4nqfVHi4%2BoigJFH%2BgMAXCnicnwI0xGCc4IWlM7LH9wEo5FLAtlDKeWigcqqAllD0zRwnK%2B2DQEKf01ySGCFMVAYSaOcZlX2jvDsr21oi5bYvLhaNNnHeK75pl4VlvcxsgiLBkQWwjx2hHuIe7S%2FSYyXJwRw%2BgD2zlZ13naMu2EFnlVWu9SfUy5WhpJQFOkafASULqqNxyfsjjWNRrfc3ZsYB32aQBc7oY7Y6SotHzPlh35qrMjsPEMMTu5hgn4RVj1npgcs6Vb6n9ziic9D2Svi5ix6BCxVhF7qDfK8d90fONy%2BOoCTxMsgZC%2Fen6RM1ngNevcXuMAQjYWBcFvVAEJ5gwLT8bDGsfyg3q62GCTsyQJQ5kr8aMvbSOSPOyaDcuNLLkPT7kvyuWz2kWM8tEmAXYC3u8C6XIxEqBWTBL0HWHVM15Uev2jVjcXxMIvIPOovgdlj2IrAbTsxdrPDHfiSaABxk6%2BLO1fnqyySpL3%2BXFrNbz%2B3nPNsr06kBPOfwHv8KtmexSR2sO%2FA%2FDXUvZqT5WJEFM5dwniP8Tvb%2Bw%2BFR0WoEjmT%2BYwu4DdyQY6pgENzRAJp8gE6rWtOlZpoTxEinS3gvAMzWnkqwWUPK72VHkHelNLV33Z7ZUw2%2BFZPddfidibQ%2FQkjVCSm%2BvkR6J5FkDbFYh5ZvIHYVdoqjuvbbrWYwu0kTRAveRLbHO5%2F3TEF%2BYnGM8T8Qo6kAjfcLjlqvynIdKgyVFHdEs9r2r6K8RI02vX52pkqURrMjRaZroM8wh18AsC8237csuMNi6expfR%2BU%2BK&X-Amz-Signature=e4df07350ae33bbaeeb8a1cd08d39eecc19caa28dcd189a5d274e9e81fe46910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5S2XZQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXDkYf6MT2CXqzafdAs2yBTF67wft6uhcTx0Pia%2FGPLAiAXH5zIwqHSeKam9l9wYmHvHpJDa7BTZizvyaSUlDluSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdm3T1foq%2Bnq3ncWPKtwDqmAT6IK3qj4Y8CMLDwwN0k1%2Foz4pwuR76FJy1ZmZ4jaKYpYxFEngeH5%2BWYYjPOqb8e9YQh4nqfVHi4%2BoigJFH%2BgMAXCnicnwI0xGCc4IWlM7LH9wEo5FLAtlDKeWigcqqAllD0zRwnK%2B2DQEKf01ySGCFMVAYSaOcZlX2jvDsr21oi5bYvLhaNNnHeK75pl4VlvcxsgiLBkQWwjx2hHuIe7S%2FSYyXJwRw%2BgD2zlZ13naMu2EFnlVWu9SfUy5WhpJQFOkafASULqqNxyfsjjWNRrfc3ZsYB32aQBc7oY7Y6SotHzPlh35qrMjsPEMMTu5hgn4RVj1npgcs6Vb6n9ziic9D2Svi5ix6BCxVhF7qDfK8d90fONy%2BOoCTxMsgZC%2Fen6RM1ngNevcXuMAQjYWBcFvVAEJ5gwLT8bDGsfyg3q62GCTsyQJQ5kr8aMvbSOSPOyaDcuNLLkPT7kvyuWz2kWM8tEmAXYC3u8C6XIxEqBWTBL0HWHVM15Uev2jVjcXxMIvIPOovgdlj2IrAbTsxdrPDHfiSaABxk6%2BLO1fnqyySpL3%2BXFrNbz%2B3nPNsr06kBPOfwHv8KtmexSR2sO%2FA%2FDXUvZqT5WJEFM5dwniP8Tvb%2Bw%2BFR0WoEjmT%2BYwu4DdyQY6pgENzRAJp8gE6rWtOlZpoTxEinS3gvAMzWnkqwWUPK72VHkHelNLV33Z7ZUw2%2BFZPddfidibQ%2FQkjVCSm%2BvkR6J5FkDbFYh5ZvIHYVdoqjuvbbrWYwu0kTRAveRLbHO5%2F3TEF%2BYnGM8T8Qo6kAjfcLjlqvynIdKgyVFHdEs9r2r6K8RI02vX52pkqURrMjRaZroM8wh18AsC8237csuMNi6expfR%2BU%2BK&X-Amz-Signature=76ff29669354aa8c30e0dd5fe5a5a20fec210019bc49e90307ab0473dab61d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
