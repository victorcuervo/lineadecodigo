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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFLK2JI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz5vFY3sy3MoLZDpjn79Pqc%2FS5%2BI%2BV%2FV2GO%2BBRFzov1AIhANs6jPnbwBFjgvixeUNdsmHb3rJ%2BbMZgkwetwYMOYu%2BsKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrrvQK9smbZrHwmq0q3AMXFM5WSbMKGgbRlOG9bHSWr%2FzjjDEUcXApxvgtW9CWbw3oxGW1K1KhoqymVb7Vjy0oGMzLe1Rnnv%2FX8Pqd0ATOzZqB9FK2V2QHPDT2g4mfF2EpKVoPyS1pg4jf1a05EtHm2OHj0CgK9QfoprrqHWZ15t5dK8k90sp0yJnuB%2BpU%2F6%2B45W%2BhAQQWlBRfX1TSeG1s8SCq9MhOVcnpL2%2BEV2dKfNFhgOYyo5PknJE5H2o1YIClND2MOe9GBBE3z7HaUAeWUlZdtpySh4tI9Ftyis3UbiiZZHBStQb4JaGVoR7f9A1dyVnoyyPV4jbrPUzq7FPynDtZ%2FfeW4WJQ4lc5mOc4yOreEBG%2Fbj64dyz6JPLqm%2F3%2BG1MMpTz2qHCv9kLzpNPKcFe3845fzzoy5Lay2S9AH2qEnjOnAh1g4g9sPnQr%2F%2Fqd%2BebrYIojRBs0LH2EtB8WpKOQMwkhUvztP6HprVNVgnHsMJPqhgJHlK2BS9MTA0rIpP0GDfBkfJfTew832B3UHFHDjZmiKGygmd8mPIXJrGXCwY7o3doDOlcuGWJvwoDTy4rcYb1BAk5FPh%2FiGc6pnWCH%2FNXVcb76zvc5m2IMSvW2HKzcefp5U%2Fc7QYN1R6U5BaYUYSy0aJCDxjC9gN3JBjqkASpXPpngOedHw8%2FOExSu6Qa0m7Y2p4rD6ddSOsjPnaNhWonkk4WRMOnTRYDjkh8wfDbdNPZyoA%2B35fFZxi86OehU1judnaT1hkglyrTex4BAXc8FihmtzdfUBqsn21K7%2BTC6J1o3zEQ0c5Xq9VQ7zYPK5jWF1TQWcFfB7uKgmNDJgGCTVAjJiRUG2gqhFsTMNnLE%2Beqn%2F6Sn9p9dcTAysr%2BmjjGR&X-Amz-Signature=f9d12d557a2c2f73fa59fcb7c1bc13b3e524bf6283f3c4db76d573efeeaf2e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFLK2JI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz5vFY3sy3MoLZDpjn79Pqc%2FS5%2BI%2BV%2FV2GO%2BBRFzov1AIhANs6jPnbwBFjgvixeUNdsmHb3rJ%2BbMZgkwetwYMOYu%2BsKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrrvQK9smbZrHwmq0q3AMXFM5WSbMKGgbRlOG9bHSWr%2FzjjDEUcXApxvgtW9CWbw3oxGW1K1KhoqymVb7Vjy0oGMzLe1Rnnv%2FX8Pqd0ATOzZqB9FK2V2QHPDT2g4mfF2EpKVoPyS1pg4jf1a05EtHm2OHj0CgK9QfoprrqHWZ15t5dK8k90sp0yJnuB%2BpU%2F6%2B45W%2BhAQQWlBRfX1TSeG1s8SCq9MhOVcnpL2%2BEV2dKfNFhgOYyo5PknJE5H2o1YIClND2MOe9GBBE3z7HaUAeWUlZdtpySh4tI9Ftyis3UbiiZZHBStQb4JaGVoR7f9A1dyVnoyyPV4jbrPUzq7FPynDtZ%2FfeW4WJQ4lc5mOc4yOreEBG%2Fbj64dyz6JPLqm%2F3%2BG1MMpTz2qHCv9kLzpNPKcFe3845fzzoy5Lay2S9AH2qEnjOnAh1g4g9sPnQr%2F%2Fqd%2BebrYIojRBs0LH2EtB8WpKOQMwkhUvztP6HprVNVgnHsMJPqhgJHlK2BS9MTA0rIpP0GDfBkfJfTew832B3UHFHDjZmiKGygmd8mPIXJrGXCwY7o3doDOlcuGWJvwoDTy4rcYb1BAk5FPh%2FiGc6pnWCH%2FNXVcb76zvc5m2IMSvW2HKzcefp5U%2Fc7QYN1R6U5BaYUYSy0aJCDxjC9gN3JBjqkASpXPpngOedHw8%2FOExSu6Qa0m7Y2p4rD6ddSOsjPnaNhWonkk4WRMOnTRYDjkh8wfDbdNPZyoA%2B35fFZxi86OehU1judnaT1hkglyrTex4BAXc8FihmtzdfUBqsn21K7%2BTC6J1o3zEQ0c5Xq9VQ7zYPK5jWF1TQWcFfB7uKgmNDJgGCTVAjJiRUG2gqhFsTMNnLE%2Beqn%2F6Sn9p9dcTAysr%2BmjjGR&X-Amz-Signature=e5cbf44d9d6cd45d09bc37cf92b83764c03a8696288af88010f74ef09dcf7920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
