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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AXN6SD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBwql50eSFBx9c%2FG0LYh6ITIw1FYHYRRrxueS4hOsM0AiEA8tD6jt0y%2BMUzTed%2FyZTO0sEOeuM7Mfj6zz4xhGDKlQsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5ewcGpCnLqu3kmyircA3%2FdAGdc51oyR1T8Yzf2jtLckdBI3kUEeFikMOeP1suBn5ErqA%2BUFUhRni0lzmXOnlD1Awz36EA8T6vZHDSTbaoruNmRyc0DR4FYgKQCRROfFzFNK9TXjA%2FS11%2BoDc2bwBE0N0Y56ZoBMhqk4SCRpc9Vq0hpfTpXRxXOsn4zJkRQY0LIArlmQCgCs58klKsuHen78dr7zYGvCjc9Af6Xie%2BCd68cSgEgeCPRex1JXv8HO5wSZaj%2FxBsSnEF0bma64FGQ5j5DGimGWKVYzxJfiZx12iPCAKw4aqx901ImkWilPPho82Ed4ZqFuJVfBTObNPrVPLhk7UDVMP5iJV06W3ZZ8jyviLgd6adKepzttcsQK3vIJt4z45kOGdxHT%2B7Da2cXqi3e6i1tKDxR21qEUpvHU%2F6MqWfeAxO%2F2F5XxRXPhbb1P54xIKFeDE5x4IPaPYaEcSyuApQmM6H%2B1VU8b7DjbDNNR%2B4qSTijqlhaz7caXZkA4OE9ZXfo5X%2FqcYSBaMT4EwjSy5fSmf1YqiDdo0Beo7mIrG83G94TLyCdDWwaTZgU7yRNzaPl1U47AmQBDewFD6I68SPatHAo9lxK912r3lJKQLdb5rzHoyY1qA9KIyab08PzJ6eIS3SzMM602ckGOqUB5n52RBzZSAU1wtPamK0BSVvd8ESAZTDAWVUyHM2ZxoS8CekmWiVfzEdQv9IV34mkb1FfN61RUcHeHXQGKBJVcJ87KQS6yh1yXP0hxNS2FsluLmqebVL4E6WDT%2B%2BeU1W%2B4mpPBEff4jUjiLTbLOUPkge5b4PeN1EwYpoRxEIxnIX8NLsrw6ZSISHIQy2zYLI%2B5DQYnaGIa1IrBGplf4uRHt876H27&X-Amz-Signature=28f680da9f0388779d4219581e99cac5580c7d0261e386125c808088ba0ba241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AXN6SD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBwql50eSFBx9c%2FG0LYh6ITIw1FYHYRRrxueS4hOsM0AiEA8tD6jt0y%2BMUzTed%2FyZTO0sEOeuM7Mfj6zz4xhGDKlQsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5ewcGpCnLqu3kmyircA3%2FdAGdc51oyR1T8Yzf2jtLckdBI3kUEeFikMOeP1suBn5ErqA%2BUFUhRni0lzmXOnlD1Awz36EA8T6vZHDSTbaoruNmRyc0DR4FYgKQCRROfFzFNK9TXjA%2FS11%2BoDc2bwBE0N0Y56ZoBMhqk4SCRpc9Vq0hpfTpXRxXOsn4zJkRQY0LIArlmQCgCs58klKsuHen78dr7zYGvCjc9Af6Xie%2BCd68cSgEgeCPRex1JXv8HO5wSZaj%2FxBsSnEF0bma64FGQ5j5DGimGWKVYzxJfiZx12iPCAKw4aqx901ImkWilPPho82Ed4ZqFuJVfBTObNPrVPLhk7UDVMP5iJV06W3ZZ8jyviLgd6adKepzttcsQK3vIJt4z45kOGdxHT%2B7Da2cXqi3e6i1tKDxR21qEUpvHU%2F6MqWfeAxO%2F2F5XxRXPhbb1P54xIKFeDE5x4IPaPYaEcSyuApQmM6H%2B1VU8b7DjbDNNR%2B4qSTijqlhaz7caXZkA4OE9ZXfo5X%2FqcYSBaMT4EwjSy5fSmf1YqiDdo0Beo7mIrG83G94TLyCdDWwaTZgU7yRNzaPl1U47AmQBDewFD6I68SPatHAo9lxK912r3lJKQLdb5rzHoyY1qA9KIyab08PzJ6eIS3SzMM602ckGOqUB5n52RBzZSAU1wtPamK0BSVvd8ESAZTDAWVUyHM2ZxoS8CekmWiVfzEdQv9IV34mkb1FfN61RUcHeHXQGKBJVcJ87KQS6yh1yXP0hxNS2FsluLmqebVL4E6WDT%2B%2BeU1W%2B4mpPBEff4jUjiLTbLOUPkge5b4PeN1EwYpoRxEIxnIX8NLsrw6ZSISHIQy2zYLI%2B5DQYnaGIa1IrBGplf4uRHt876H27&X-Amz-Signature=588353a0cb4fe40f4ed7d726598c0e377efcd03d46537196284ef1b893eb6485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
