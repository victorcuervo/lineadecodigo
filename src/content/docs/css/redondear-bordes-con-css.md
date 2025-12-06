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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAD5RUC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyDDjyDOb7OOafRr4RHVuJwKNK4lHcY7ift3DQijSRVgIgSeAudhZzs%2BEjaLHbpkgMQUHSKEmdlVh7nb5%2BkuWZ2Wgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPztaSKZASwgKN91aircA8tedFDl%2BgOt2agz2wwhyybxzJcYkJEbjQKtPNBoyIm%2BExIn%2Bre52va1wmZnYTm6m3tUDfDhFiFHu4N7on%2FRWGBPgMPAHlXGQxhbD0c%2B0Wxf4d%2Bq%2Bx1%2FzHlVb8NxeOpLARKEDtDOBP3jCzPp4tMVXol%2FLInAxP2SigemMIQCDTDMUPlQLzCsodhMuQ4meeM7b7tO7YPfucmSHOpud2P%2BGsV%2FzApIC5EqGkkmM9dptkxMPPzW29V%2Fd9nvi90B3SkhfyG%2BrTl2pgMvlD4DGraAbOcaLAMqFnvdGotNmrUgE4MC0y79OIkifeWjQHp6piTdKtS4XISVWelJcMM%2FDe%2FRF%2B9bDkCuvDnE9%2BZD102eOVU1psy%2FzkQqDvdY66KjCM2HtXmVXOx%2FiwcYWMqftzxQhEUM9WZZmIQEX5NLdustuYIF8anTDug61XLdYOJS%2FPkHXVgAm16qWjFjmFZdmnx0onMxq%2Bd7W%2FXlZ9Ex7y%2BNS1HCl63MZYB8vMkW36f%2BxQlyk29AXn2yYf4IPdrDkou4Fp57WboSzYIT%2BqxbJ%2BsgOK9A8g7cGzA0M02S0ofMPbrrmpcaMVrnEY31HPW4oPNUBArF%2BXKxLDqzOQZQ%2B%2FxZ8F25PgrH8vVPafQGGVuVMKKm0MkGOqUBs76aHemgDm%2BKxpeUlSxD7KmqGBtg01mO%2Ftppq14mMBTNdxWxKV9Otyio%2FnzWvtSn5L%2FamTtlL4bHYhakS0f7yXR%2FjR6Qkv7kSdwQflBKNj68kibLg%2Fv%2FriMjZwGGohdyftMLA12%2FnVDCTutbHFec3tS%2BKAhoh0yUAAGFsPD3Ei0xgFFRdTiXWPG7ucKF8tgUEXQxmPpjBJgvmEN0DfNcCOCaU91D&X-Amz-Signature=1916253061ceba247fca23cc677a5b141ee8e90fd6e6a30893a1b05c6d98ea65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAD5RUC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyDDjyDOb7OOafRr4RHVuJwKNK4lHcY7ift3DQijSRVgIgSeAudhZzs%2BEjaLHbpkgMQUHSKEmdlVh7nb5%2BkuWZ2Wgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPztaSKZASwgKN91aircA8tedFDl%2BgOt2agz2wwhyybxzJcYkJEbjQKtPNBoyIm%2BExIn%2Bre52va1wmZnYTm6m3tUDfDhFiFHu4N7on%2FRWGBPgMPAHlXGQxhbD0c%2B0Wxf4d%2Bq%2Bx1%2FzHlVb8NxeOpLARKEDtDOBP3jCzPp4tMVXol%2FLInAxP2SigemMIQCDTDMUPlQLzCsodhMuQ4meeM7b7tO7YPfucmSHOpud2P%2BGsV%2FzApIC5EqGkkmM9dptkxMPPzW29V%2Fd9nvi90B3SkhfyG%2BrTl2pgMvlD4DGraAbOcaLAMqFnvdGotNmrUgE4MC0y79OIkifeWjQHp6piTdKtS4XISVWelJcMM%2FDe%2FRF%2B9bDkCuvDnE9%2BZD102eOVU1psy%2FzkQqDvdY66KjCM2HtXmVXOx%2FiwcYWMqftzxQhEUM9WZZmIQEX5NLdustuYIF8anTDug61XLdYOJS%2FPkHXVgAm16qWjFjmFZdmnx0onMxq%2Bd7W%2FXlZ9Ex7y%2BNS1HCl63MZYB8vMkW36f%2BxQlyk29AXn2yYf4IPdrDkou4Fp57WboSzYIT%2BqxbJ%2BsgOK9A8g7cGzA0M02S0ofMPbrrmpcaMVrnEY31HPW4oPNUBArF%2BXKxLDqzOQZQ%2B%2FxZ8F25PgrH8vVPafQGGVuVMKKm0MkGOqUBs76aHemgDm%2BKxpeUlSxD7KmqGBtg01mO%2Ftppq14mMBTNdxWxKV9Otyio%2FnzWvtSn5L%2FamTtlL4bHYhakS0f7yXR%2FjR6Qkv7kSdwQflBKNj68kibLg%2Fv%2FriMjZwGGohdyftMLA12%2FnVDCTutbHFec3tS%2BKAhoh0yUAAGFsPD3Ei0xgFFRdTiXWPG7ucKF8tgUEXQxmPpjBJgvmEN0DfNcCOCaU91D&X-Amz-Signature=8641acad83ff14d93f3b9bdac737721e71f35bf60c6c8659ea9379e4ca87ad33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
