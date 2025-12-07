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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNCF34IG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gmHk8UrBHZiE7zMPU3ZOHOTeEfBzbo5%2FAR4ccAf%2BqwIhAJth4K9bkgl4K0Sx4kvgoRfuvsRGMup6cmKx2C9Il8p8KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy57sQAUnZVFF83Wcq3ANVvwZxaSQwuyHv6dbyg0L13TFbt7ii%2FdG9iaHIyOAy5ngmyGmb5Qs89mi%2Fjv8cAxk9%2BdMWWBOtZ4n%2FhVC7MQGJ9Hq%2FDXw0%2F9m0ZldT7rLdNCNdgz1XjAAIM71%2FS4A1rcn11lQDPcnuR7NX2LcHcttrpaOvWFVvT8JMQe2QGZKBSjndgUBoNZXMOtRqtN50M9ihFoYiaVwr%2BZAPboF%2B%2Fq5xKZUwZyoIk0Ajgoid46obYgHNgfN%2BVVUGBiFCqkpHGttKTMjic2hYaYT5RAeNx9HSnMhXbIB24jyIkHGoz%2BZDyJw4E6nm%2F%2Bl2FPGsqZkopNg%2BR629%2B21b1NHnMu8k%2F7oXFB5rKam64D9Je2wPzyScPnFpuERV2%2FY4GtC%2FgM5s4GICm7xI%2FF1HfKRf%2FRiaitDOEbvOvS3kVMpVrHX3H8xig%2FWj6Oco8n5kRIw5mtzzsBnoc8MhzXAUp1zKuApPY5OXXEVdOIJSKhBuhyai5icBa2qEexamlw2xKBhHtGEvvl6oaXXDNZY4TR8JjXKt1EvmZIeKrapIfr2NsGMWBW1vy82GUY0cIj06HrTvJOwuLY7tNEo6THpfBiG9XK5Hm9xqMYO8CgPA8lMGkjCTBci3tah%2FjveQ8AWLNgaLVzCN%2FtLJBjqkAQWyvDeJT9HQfiZdMsRQJ9JQ%2F%2FObcSnT05QikXKdOIs29tq79HdcAf0zb1GMmXuZtEsYKTc5d1jcFueCvWXCzdCQRicysc5nv%2Bk8uNfwR2T5u7q0W1LGRcVpaNBUPCOqiKyq6Cc5RP%2F%2BwTAwTWdOoI1NKwVl94V8G%2FwnqM1IIVqKwMNhUudv3T8IElQXALY98IdrcOoiW0VlzJk7zamvKzc6jqjY&X-Amz-Signature=658a2f8dcaa65e287e9740457f48e3eabaa5164017eaf65ffcffda09cb3b6a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNCF34IG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gmHk8UrBHZiE7zMPU3ZOHOTeEfBzbo5%2FAR4ccAf%2BqwIhAJth4K9bkgl4K0Sx4kvgoRfuvsRGMup6cmKx2C9Il8p8KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy57sQAUnZVFF83Wcq3ANVvwZxaSQwuyHv6dbyg0L13TFbt7ii%2FdG9iaHIyOAy5ngmyGmb5Qs89mi%2Fjv8cAxk9%2BdMWWBOtZ4n%2FhVC7MQGJ9Hq%2FDXw0%2F9m0ZldT7rLdNCNdgz1XjAAIM71%2FS4A1rcn11lQDPcnuR7NX2LcHcttrpaOvWFVvT8JMQe2QGZKBSjndgUBoNZXMOtRqtN50M9ihFoYiaVwr%2BZAPboF%2B%2Fq5xKZUwZyoIk0Ajgoid46obYgHNgfN%2BVVUGBiFCqkpHGttKTMjic2hYaYT5RAeNx9HSnMhXbIB24jyIkHGoz%2BZDyJw4E6nm%2F%2Bl2FPGsqZkopNg%2BR629%2B21b1NHnMu8k%2F7oXFB5rKam64D9Je2wPzyScPnFpuERV2%2FY4GtC%2FgM5s4GICm7xI%2FF1HfKRf%2FRiaitDOEbvOvS3kVMpVrHX3H8xig%2FWj6Oco8n5kRIw5mtzzsBnoc8MhzXAUp1zKuApPY5OXXEVdOIJSKhBuhyai5icBa2qEexamlw2xKBhHtGEvvl6oaXXDNZY4TR8JjXKt1EvmZIeKrapIfr2NsGMWBW1vy82GUY0cIj06HrTvJOwuLY7tNEo6THpfBiG9XK5Hm9xqMYO8CgPA8lMGkjCTBci3tah%2FjveQ8AWLNgaLVzCN%2FtLJBjqkAQWyvDeJT9HQfiZdMsRQJ9JQ%2F%2FObcSnT05QikXKdOIs29tq79HdcAf0zb1GMmXuZtEsYKTc5d1jcFueCvWXCzdCQRicysc5nv%2Bk8uNfwR2T5u7q0W1LGRcVpaNBUPCOqiKyq6Cc5RP%2F%2BwTAwTWdOoI1NKwVl94V8G%2FwnqM1IIVqKwMNhUudv3T8IElQXALY98IdrcOoiW0VlzJk7zamvKzc6jqjY&X-Amz-Signature=174b7cc189ff669200746fe01661a60d523de975c34dca1277ad33947e093d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
