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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6YFVS6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQXc%2Fku1FVFwqsn8za0dOkInmYo7XTP6KtQxi14O9FSAiEA3XntiYdsV4BUAblEBT33l5keDg8iCWTp5t%2BM9gXOMSEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFiu%2F6GTHwOBZFBBircA88GGyqUP2lA4W4MZgCD3athix93OMqhJEr5nypQP5vXTemfBORwTCzi%2F9bwnKEm4m1GXLHS%2BN%2FLSmkTTbGbj5m9d2VXis8WXrdn0kq9wLdzCXXbvNxmbKcYfGG%2Fux6ebN7ibvZOnD9RreU7pPZwxs1%2FrUmb6vhKLxWLJ%2FG9q8lt3Gu7a%2BIIp5To0ynz7x%2FKIXws7GTDrKigt10riSDrBiJBxu9fkJPuzEotAzXVaLvQXIbn37IelQRhqdh1x9r9VuelZ2XluqdPcQBlJg%2BnxLxx0CRaDi0Wh6GzAI1YGrQU2Vw7thioIWL%2BAlNoCkLBLHCgFLpkoR0ldnZc0X%2B2dQ61sgh9V2fkM9z7%2BnwgXN318K%2BN9buDIjrxsE%2Fv%2Baxd2n9kOQdX2KLPzckEMBCCIF%2BM7OeLU1mHX6wJBI7LWF1ElbCrdvRYEwpGJFtK7J2jbRslbLF9tZzQjwYLUP1otNdVjHV9JUVffIkWRRa0%2BVIdWXgTJkNSVrg%2F7yu7hhCOJ3bjvtMZy0Vk1NfSgAi5lUzF1RmvpBpFaRm6kHhrZMgClArBcknRt7qAQLVfhfWdJKqX1PwUZYJfpQlT6FE3McLlyHLN19wIKSIb3jSbFCiT2XczXmqM7%2FMVl94PML2g1MkGOqUBtL9g5dkmynwhUtdpSxZUc02gkhZxBqKWH0DWjwlDZdbWYwKRCLsfYK%2BEjX4PE0iUqQ4xcSwe%2B0DIDQZT5hNlgM%2FH57mnzlE5RllRfCyKY39y2S8gVM03YYDnbvnSDDfON6Kc%2FMafFtt%2Blv22dyUfRyouSMSISrfUb96mTlzL%2FcfooBW%2Ba%2FWDMH185Y2wx49N4WTxt%2Fd2t8PwPZQi4JW9D2Y8GyGJ&X-Amz-Signature=31f116a0d3f39c1a1f41b657f921537b6075be7557aceefc5e9ba3cd561c2842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6YFVS6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQXc%2Fku1FVFwqsn8za0dOkInmYo7XTP6KtQxi14O9FSAiEA3XntiYdsV4BUAblEBT33l5keDg8iCWTp5t%2BM9gXOMSEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFiu%2F6GTHwOBZFBBircA88GGyqUP2lA4W4MZgCD3athix93OMqhJEr5nypQP5vXTemfBORwTCzi%2F9bwnKEm4m1GXLHS%2BN%2FLSmkTTbGbj5m9d2VXis8WXrdn0kq9wLdzCXXbvNxmbKcYfGG%2Fux6ebN7ibvZOnD9RreU7pPZwxs1%2FrUmb6vhKLxWLJ%2FG9q8lt3Gu7a%2BIIp5To0ynz7x%2FKIXws7GTDrKigt10riSDrBiJBxu9fkJPuzEotAzXVaLvQXIbn37IelQRhqdh1x9r9VuelZ2XluqdPcQBlJg%2BnxLxx0CRaDi0Wh6GzAI1YGrQU2Vw7thioIWL%2BAlNoCkLBLHCgFLpkoR0ldnZc0X%2B2dQ61sgh9V2fkM9z7%2BnwgXN318K%2BN9buDIjrxsE%2Fv%2Baxd2n9kOQdX2KLPzckEMBCCIF%2BM7OeLU1mHX6wJBI7LWF1ElbCrdvRYEwpGJFtK7J2jbRslbLF9tZzQjwYLUP1otNdVjHV9JUVffIkWRRa0%2BVIdWXgTJkNSVrg%2F7yu7hhCOJ3bjvtMZy0Vk1NfSgAi5lUzF1RmvpBpFaRm6kHhrZMgClArBcknRt7qAQLVfhfWdJKqX1PwUZYJfpQlT6FE3McLlyHLN19wIKSIb3jSbFCiT2XczXmqM7%2FMVl94PML2g1MkGOqUBtL9g5dkmynwhUtdpSxZUc02gkhZxBqKWH0DWjwlDZdbWYwKRCLsfYK%2BEjX4PE0iUqQ4xcSwe%2B0DIDQZT5hNlgM%2FH57mnzlE5RllRfCyKY39y2S8gVM03YYDnbvnSDDfON6Kc%2FMafFtt%2Blv22dyUfRyouSMSISrfUb96mTlzL%2FcfooBW%2Ba%2FWDMH185Y2wx49N4WTxt%2Fd2t8PwPZQi4JW9D2Y8GyGJ&X-Amz-Signature=9e52536b39020ccc861a04b8dbb4a7a1f1c55aa1868873c4c9804e28e40e1a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
