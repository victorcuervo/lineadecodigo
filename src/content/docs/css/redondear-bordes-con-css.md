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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGS76J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4D7alCW7qvwMwi6BGIadfLg%2BdXHyxXVO6UJlXrg4uuwIgJFzptXhXepyEPehF4hVOe54HXNo4rj7HLF8tMZ6B%2FMQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE12I7q5zNnD3VfBCrcAz9nJjJB8TK814Pz67m8MFxvEzZ8LTIKVkAzSYvK0f92vacx7z%2FsLQvUvxGtgIyfi91Jedr2IbeLN8QpQDU1kOUx8bI9X6iNDO%2B7Z%2BmP2J6ZHUP5417qvbYK8ZAAlhwh593bLDuzVLviWxUKz2NNNlEcG6dVCc3VOul373FTKxmzR9iCfS9GT0dgtvfn6fYpbQsLWNeGWwlb2QAjXsXXDj%2F2Cv4uG6SDjqlzM%2FxeMBNkemqOkXKvWc4NVPDxrxdBEm4ogLUcZzYWgKlySMQ5F3%2BAMAAwWlCnQtnyIr6smkYr25kFCBwMSqBsPCNUi25yVZS5E3aArY3HH25ZjiMa551m0%2Fg4moK9gWuJGnYVIT1I6HiHgMqcCAmKcsTXNEcbL7QWTlNPg6D1z%2FrmqpksKFE1Q32twrVV6A6nuiOY9UGJVHPkqgOuKRbShM16S7W6jvHRDFqDJ9GWCn6VccqHwYmKbZ2S%2FuepKBhf%2BlG2fMRohA%2BOyMKjAUTEgcDAWtdvcPDTCsNr0ME2Xqz53LKVtt0Em%2FDjd3DBOlEw8MVajnodir%2FMg86zj4dPrUYGjp%2Bh9P7IZK3CsYaxSg4BLwso422Nq8EQtATKm0hY3mIshY6nbQQmozFy6lt02dfLMO691skGOqUBMOT%2Friaq2joOTKN4Zj8gUFRFQbQ%2BW55cwLZ4AOZ2z%2B%2FZgqn6zawgWLRuNfmXhlq%2BJ85UCdkMrmvWBK52Q3XfvafgRByC0IS5CRCRLnhQ08G%2FjOxp78aY6G7y%2F7zVHv%2F5bzXR3ZOW%2BiXi4blvFugMogjzjHbohoXfDtlEnfY2GwjJHiBJhBtelFzkSEkBujuYzE%2B%2Fyddiw9ODWGwhMTAAri2Cymlg&X-Amz-Signature=fad90bbef47ca06825b3a13cfc39cb219db75293f4a273f4b7428e8326b7a292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TGS76J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4D7alCW7qvwMwi6BGIadfLg%2BdXHyxXVO6UJlXrg4uuwIgJFzptXhXepyEPehF4hVOe54HXNo4rj7HLF8tMZ6B%2FMQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE12I7q5zNnD3VfBCrcAz9nJjJB8TK814Pz67m8MFxvEzZ8LTIKVkAzSYvK0f92vacx7z%2FsLQvUvxGtgIyfi91Jedr2IbeLN8QpQDU1kOUx8bI9X6iNDO%2B7Z%2BmP2J6ZHUP5417qvbYK8ZAAlhwh593bLDuzVLviWxUKz2NNNlEcG6dVCc3VOul373FTKxmzR9iCfS9GT0dgtvfn6fYpbQsLWNeGWwlb2QAjXsXXDj%2F2Cv4uG6SDjqlzM%2FxeMBNkemqOkXKvWc4NVPDxrxdBEm4ogLUcZzYWgKlySMQ5F3%2BAMAAwWlCnQtnyIr6smkYr25kFCBwMSqBsPCNUi25yVZS5E3aArY3HH25ZjiMa551m0%2Fg4moK9gWuJGnYVIT1I6HiHgMqcCAmKcsTXNEcbL7QWTlNPg6D1z%2FrmqpksKFE1Q32twrVV6A6nuiOY9UGJVHPkqgOuKRbShM16S7W6jvHRDFqDJ9GWCn6VccqHwYmKbZ2S%2FuepKBhf%2BlG2fMRohA%2BOyMKjAUTEgcDAWtdvcPDTCsNr0ME2Xqz53LKVtt0Em%2FDjd3DBOlEw8MVajnodir%2FMg86zj4dPrUYGjp%2Bh9P7IZK3CsYaxSg4BLwso422Nq8EQtATKm0hY3mIshY6nbQQmozFy6lt02dfLMO691skGOqUBMOT%2Friaq2joOTKN4Zj8gUFRFQbQ%2BW55cwLZ4AOZ2z%2B%2FZgqn6zawgWLRuNfmXhlq%2BJ85UCdkMrmvWBK52Q3XfvafgRByC0IS5CRCRLnhQ08G%2FjOxp78aY6G7y%2F7zVHv%2F5bzXR3ZOW%2BiXi4blvFugMogjzjHbohoXfDtlEnfY2GwjJHiBJhBtelFzkSEkBujuYzE%2B%2Fyddiw9ODWGwhMTAAri2Cymlg&X-Amz-Signature=e639cf3bb27b89c077641d650b111b186d502d997981c36037df4e13958d2415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
