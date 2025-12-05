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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GGTVA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTYHcbiJlwChxz%2FaYbx1Pw%2Fj3HdF608PnpGVLl0%2FqSgIhAMGWYjbVAVW5Pbhyeq2u%2FeAuMvRPrUUvJQEbdK329AJTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyTe0n65WlnFVHht6wq3AMk%2F%2BqApekQ6JL4FmgqgGVprKFKtR8lol1Fqu0sLF9u6R5vKz4QetuTc73xjpDqlxYdVRTXtGpO%2Ba0UtjuZv38LB%2BtQJGVdl4sMGuIaiJukZ86Vd3V3sAPjI0BXBxn8w8J8hELwhU1wq6vVZUfdES2ljZW6x4T1%2BjduMyWOBr%2BIneKqoSOfo3D5m3yNFfE0ShJbq9GaXH52APinv6veWB1yFS7A%2Fn2rkpMSpSA8SWf2rYeBcqZatxnAz%2B6oJtxdmXVlKRQTzNhUTQpBcRQmL98X6m4H1VIdetnOB5EQ8s9D07o6JRaiB9vGxtVqge9ZZuC%2Fq%2FeqUm9kAlGj8Ygt8u4LJws9j2HeD04C1r%2FHghRGLOHgCjyaCmBusnqQawOUSXadiBdcPbQ14BcQT0qJCg7jKSynUOaL6dDFf3F8gvLfCzN3LsrYhR5iDUDsjpfwqytAy%2B4D3x13KQ6%2FYZwGs23cWHIFkNRWPvoP6HgQnHKoCLD1pEC7RscMNFQHlDGPyJsUsPGSPoXsAuX2JyAAu6RaWPgi%2BG0%2BQL%2B2NzqQaHYWW5zmyHq6ID3ZsUbejHsoHTnSByVE3zGId9a07qsw9PVa7qqdPbD4pGgo6pYImQ6e6iDdy3bjwvSICWqdHzCejMjJBjqkAW7j1JeZNR4DhdrHfSIkpUxYBdfQQKYbu2W3w2b2J2sXTQLnWZ2cKsDAg6HSDKSRMAO%2FqpGMoaDeFcL4HoPZ3oWKt1pPj9p2zh%2BR8uNW032kMVhJDMkulxth6GT49aKndALKnGkEcRgQSmfo5PDpQ%2BfM3fubWfdgeO244kHT%2FxlEb790sMKwBh0wYuVYMOffLsbv3tBNuO7TZcVEWdbGNJmSSqQG&X-Amz-Signature=e8ca2bb6726f1ddc1bb856ef0c1f0e9d0cebb6c5f5ae400312b9c834026b03b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GGTVA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTYHcbiJlwChxz%2FaYbx1Pw%2Fj3HdF608PnpGVLl0%2FqSgIhAMGWYjbVAVW5Pbhyeq2u%2FeAuMvRPrUUvJQEbdK329AJTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyTe0n65WlnFVHht6wq3AMk%2F%2BqApekQ6JL4FmgqgGVprKFKtR8lol1Fqu0sLF9u6R5vKz4QetuTc73xjpDqlxYdVRTXtGpO%2Ba0UtjuZv38LB%2BtQJGVdl4sMGuIaiJukZ86Vd3V3sAPjI0BXBxn8w8J8hELwhU1wq6vVZUfdES2ljZW6x4T1%2BjduMyWOBr%2BIneKqoSOfo3D5m3yNFfE0ShJbq9GaXH52APinv6veWB1yFS7A%2Fn2rkpMSpSA8SWf2rYeBcqZatxnAz%2B6oJtxdmXVlKRQTzNhUTQpBcRQmL98X6m4H1VIdetnOB5EQ8s9D07o6JRaiB9vGxtVqge9ZZuC%2Fq%2FeqUm9kAlGj8Ygt8u4LJws9j2HeD04C1r%2FHghRGLOHgCjyaCmBusnqQawOUSXadiBdcPbQ14BcQT0qJCg7jKSynUOaL6dDFf3F8gvLfCzN3LsrYhR5iDUDsjpfwqytAy%2B4D3x13KQ6%2FYZwGs23cWHIFkNRWPvoP6HgQnHKoCLD1pEC7RscMNFQHlDGPyJsUsPGSPoXsAuX2JyAAu6RaWPgi%2BG0%2BQL%2B2NzqQaHYWW5zmyHq6ID3ZsUbejHsoHTnSByVE3zGId9a07qsw9PVa7qqdPbD4pGgo6pYImQ6e6iDdy3bjwvSICWqdHzCejMjJBjqkAW7j1JeZNR4DhdrHfSIkpUxYBdfQQKYbu2W3w2b2J2sXTQLnWZ2cKsDAg6HSDKSRMAO%2FqpGMoaDeFcL4HoPZ3oWKt1pPj9p2zh%2BR8uNW032kMVhJDMkulxth6GT49aKndALKnGkEcRgQSmfo5PDpQ%2BfM3fubWfdgeO244kHT%2FxlEb790sMKwBh0wYuVYMOffLsbv3tBNuO7TZcVEWdbGNJmSSqQG&X-Amz-Signature=e74fd143a17e0b9de203255b6b19e3393ec9beb7b8bcbd177dd2e4cdd0919f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
