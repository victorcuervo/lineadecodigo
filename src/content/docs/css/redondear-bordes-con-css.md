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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI24SC2M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1Xln2I4O2CG2bu1CCtOfwuHcf8TLeBFejzMTckjxQQCIBHZrDYz9o171hKR86%2BSg9DKaZ6J4MsAoRXHJg0%2Fx4O8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyR1tBcr2Sh%2BAjzt44q3APhba0U1o0FlnDwGBTJGF%2B6UKwdRpxc9r3OHSVE2PbTz0BHQWXgNdyD4QWHL0zudPe59zAohFM8rSr3iZkNRi00LoV8CSbMbCHTa52ROsuOJ%2FBH42O8Xmyf4U%2BDFXBH6obegrlZvo4p3ZEBSqDMk1QH5xfprcYiQ6fc8vhkZdkAnZasj3UfjuZ0z1DYlC6Rdoy9gHTdhghHY8AukVuqXSLobNNDHlV7KXzcnCEz5FPm%2FphgFQJkmMvsW%2BFKrBAl8BIvpEDzGcZlq1j%2F3i2Wws7fICOyN1t2p5nbgDKhrZRr80dkT4XPvixdFzjAwZTnWsBFzXm%2BnEuC09ZskiJepqWwd3YmXyhdQD4NUp7V3AQza0XLSQq9rTAz5gKTjl8%2BrZmdjYzNHcbjh9zxMNO%2FyRUUMiu3bhsuAYHuza8LpVqeLys9HqFRvclnwCf4ai9bxd64J4AGEXIVNncOC1DpeJGxEz7NWO7bJafbUjXyjF5ZZPoJlOh7th0kWFJD%2FxnXtVUag7%2FGuSULmjs7UZdgvse9rFUb1NY1Gg%2Fvw3Wyfd%2FnqtMXLRAPwlKilGVHrBYNcGO%2Bd4SsxxALbEW12e8WAqmlSptjQ3UgzRq0euhPpS9ug4h4DadNwSJEHuJvYDC888vJBjqnAdIMDTBmVuuuoI8n3GqHsoig%2Bl%2FeLa15jamf5raDRaPBNPBrZmucj6aWNk0w9JXi07TKP3asldTdkLhbF8vc%2B0p1owHmkVbJ6UMA1Pvi3pbssAabjDWV9xUWNEGBihLvJS8%2FfXmZSdXer1ZRZDA02%2FWDMcdhC%2BM11Yeu9He9OoXVR65Xml7ZUIRGrEJXVWmR1cExVqLK7dfICHYOSoTMqiz0asPFd8oV&X-Amz-Signature=c1efe6d5b6b635dcc8d43cbecba83f1014e56ae010f1f9115d65a2703b502d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI24SC2M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1Xln2I4O2CG2bu1CCtOfwuHcf8TLeBFejzMTckjxQQCIBHZrDYz9o171hKR86%2BSg9DKaZ6J4MsAoRXHJg0%2Fx4O8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyR1tBcr2Sh%2BAjzt44q3APhba0U1o0FlnDwGBTJGF%2B6UKwdRpxc9r3OHSVE2PbTz0BHQWXgNdyD4QWHL0zudPe59zAohFM8rSr3iZkNRi00LoV8CSbMbCHTa52ROsuOJ%2FBH42O8Xmyf4U%2BDFXBH6obegrlZvo4p3ZEBSqDMk1QH5xfprcYiQ6fc8vhkZdkAnZasj3UfjuZ0z1DYlC6Rdoy9gHTdhghHY8AukVuqXSLobNNDHlV7KXzcnCEz5FPm%2FphgFQJkmMvsW%2BFKrBAl8BIvpEDzGcZlq1j%2F3i2Wws7fICOyN1t2p5nbgDKhrZRr80dkT4XPvixdFzjAwZTnWsBFzXm%2BnEuC09ZskiJepqWwd3YmXyhdQD4NUp7V3AQza0XLSQq9rTAz5gKTjl8%2BrZmdjYzNHcbjh9zxMNO%2FyRUUMiu3bhsuAYHuza8LpVqeLys9HqFRvclnwCf4ai9bxd64J4AGEXIVNncOC1DpeJGxEz7NWO7bJafbUjXyjF5ZZPoJlOh7th0kWFJD%2FxnXtVUag7%2FGuSULmjs7UZdgvse9rFUb1NY1Gg%2Fvw3Wyfd%2FnqtMXLRAPwlKilGVHrBYNcGO%2Bd4SsxxALbEW12e8WAqmlSptjQ3UgzRq0euhPpS9ug4h4DadNwSJEHuJvYDC888vJBjqnAdIMDTBmVuuuoI8n3GqHsoig%2Bl%2FeLa15jamf5raDRaPBNPBrZmucj6aWNk0w9JXi07TKP3asldTdkLhbF8vc%2B0p1owHmkVbJ6UMA1Pvi3pbssAabjDWV9xUWNEGBihLvJS8%2FfXmZSdXer1ZRZDA02%2FWDMcdhC%2BM11Yeu9He9OoXVR65Xml7ZUIRGrEJXVWmR1cExVqLK7dfICHYOSoTMqiz0asPFd8oV&X-Amz-Signature=c1a7d0ffb20a1331c2d8954203d74aec5834b1603e266557466c74806b2928c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
