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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTPWKV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQjBueq3pBRvjuPmlEs67vLbG8vIBuQghlzHH3QQbUVAiAvi0ZtRD2hD56GEtNsrUBMIdCXD0YhBMXGYB%2FA%2BTrsuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4TWK1Js0orkk68h2KtwDOPdT2lWzGfSG73IxeeB6pNUny3uwmxxb6geaxflNOe%2FGuIrpY1Kb7%2FoXeAxpTB7X8O%2F%2BSdzLAP4r7BpZa4BuvAQkK%2F9cY8rRiFHXF2zUG8R%2FxAA71SU45%2FmN2F4mCCCJ7T3FVeC7H34uTcyH4yGE1cAZZ6rIpLBGua8FIw1w3a04OxmFQ%2BJQl9Zpx1qe8mZsdbYpaf3X5CBQVsUs0e5ymu7zrcZG72qKfKssOyI1LgJV6Xf%2BcI6QnBmXwrQL5UFdi5WHq7d%2FuyXqXWxBVSBanuWSCmUIu0sIbguAsW%2FgfO%2FK7ad2YiVvfZuqL%2BUD%2BoAxjEYYWXWj2aaJHXQb73egnapdRVCXYJqDZUL0EDtLnp%2B4TqlRGcIInjHw0TaN3TzzztTY56m0gpcqpVqTSa56%2FWqT%2FcGt8eDaS2AL5HpDywLEgJ2wOIp%2FFDSFKpFG%2BDh88zB9Vy%2F%2Fh0xEc6vMJD%2FA6VBwBLKus2zcwJMLcO7UeXNJqtc%2FcpUpN9Dap9n5L7%2FXWZ1OVdwFrvzcD4Kh06NAwzHGHh3bprgmt6QnfULSOYqcxkhgdFEYqWTpK%2BrSEGTMh7fcG3muhPgX%2BHRkbyCMFxSqTnMw8Wp07fknXG0NRMNZSGFngqE%2FC6RT5s0wxqbQyQY6pgHAf1ugPzwwaCZWUAMnVqtaBZIUhbk1OpblPuZaX7K8ycFaCZIGILmORUotw7BLJ8XamhNrEusrdSoEp88l3mr4a1wZqKJvdpjcEvJOiqZwpljk9rI296ikTRzvJP0z44f0GNcGF08pyfGPnvAJrdhfk9jRIjVrmWGRNtLC8x8ULT7Xiv91tKhLjMGRUpA1O8rcfhD1Z%2F6SHD8ogrdbDs9k0ZCX9dwE&X-Amz-Signature=19f7bcc4fe419fcc921bf0b4b2b322de364a22f4ae0fe4bb0350cc3f54a9b092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTPWKV3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQjBueq3pBRvjuPmlEs67vLbG8vIBuQghlzHH3QQbUVAiAvi0ZtRD2hD56GEtNsrUBMIdCXD0YhBMXGYB%2FA%2BTrsuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4TWK1Js0orkk68h2KtwDOPdT2lWzGfSG73IxeeB6pNUny3uwmxxb6geaxflNOe%2FGuIrpY1Kb7%2FoXeAxpTB7X8O%2F%2BSdzLAP4r7BpZa4BuvAQkK%2F9cY8rRiFHXF2zUG8R%2FxAA71SU45%2FmN2F4mCCCJ7T3FVeC7H34uTcyH4yGE1cAZZ6rIpLBGua8FIw1w3a04OxmFQ%2BJQl9Zpx1qe8mZsdbYpaf3X5CBQVsUs0e5ymu7zrcZG72qKfKssOyI1LgJV6Xf%2BcI6QnBmXwrQL5UFdi5WHq7d%2FuyXqXWxBVSBanuWSCmUIu0sIbguAsW%2FgfO%2FK7ad2YiVvfZuqL%2BUD%2BoAxjEYYWXWj2aaJHXQb73egnapdRVCXYJqDZUL0EDtLnp%2B4TqlRGcIInjHw0TaN3TzzztTY56m0gpcqpVqTSa56%2FWqT%2FcGt8eDaS2AL5HpDywLEgJ2wOIp%2FFDSFKpFG%2BDh88zB9Vy%2F%2Fh0xEc6vMJD%2FA6VBwBLKus2zcwJMLcO7UeXNJqtc%2FcpUpN9Dap9n5L7%2FXWZ1OVdwFrvzcD4Kh06NAwzHGHh3bprgmt6QnfULSOYqcxkhgdFEYqWTpK%2BrSEGTMh7fcG3muhPgX%2BHRkbyCMFxSqTnMw8Wp07fknXG0NRMNZSGFngqE%2FC6RT5s0wxqbQyQY6pgHAf1ugPzwwaCZWUAMnVqtaBZIUhbk1OpblPuZaX7K8ycFaCZIGILmORUotw7BLJ8XamhNrEusrdSoEp88l3mr4a1wZqKJvdpjcEvJOiqZwpljk9rI296ikTRzvJP0z44f0GNcGF08pyfGPnvAJrdhfk9jRIjVrmWGRNtLC8x8ULT7Xiv91tKhLjMGRUpA1O8rcfhD1Z%2F6SHD8ogrdbDs9k0ZCX9dwE&X-Amz-Signature=c262c7f42454a1ff8c4e03c590230761d14b69448900a2cca7c6ced3f1b4eb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
