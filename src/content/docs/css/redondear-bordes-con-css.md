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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOURDBPC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4iEyGvawPag3OHOYSH1%2B60FCfonn2kGP5xkaRSfl2AIgAaMPAqdeYdCmBjywZ0vVMTl8sKwYzsxi8ViEv2cLM1oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu5TjZscpm0YbUE%2ByrcAz6GFg3XEv%2BRbMFNZ%2BLg5IZw1CqTh6djGc%2F4%2FYenuBCOJ48kng2rUVsrz%2FcWKOa7bOFGcbsN6yVOSF2xQSXAYShc5%2BW9yyuYyT1Q9Y2QFE4FC2IghOliymdQJv5AjVttmMhWVpNN%2Bom3AzXqW%2BGRXViNA4Lggdxo%2FpWUKPAorrLJtsUGH4rdAvJngCkXMR1Clv3cTDiZlFBx2GgUsRyJkfTbNTS0FTurOqDGPe80BeJ4qLGPxD91mZU2aWluY2iztzDxLUYT4%2F90EyM7gt9ZBh3Egh5khn5Rab0YLqR58d3CqWyd4ga0JwrPKF7n3%2FryR8zwGh%2Ba7%2BvzGicksq6T5bAdYpSfH0pICwFv9l%2B8J6RWsdhkaPDUs6ZDUGkNs%2B%2BdfbFVGiXae6QCbm%2FHjsyDfNNmTh6ULQMDJvy92aWh%2BUVpr2U2KROzVrj%2BSDyofReKWnB3H%2FWQOY8Ux08loqaS09NLcsBqpFclE0K3f2dVfHYAG0suLuA5JSn1AIvFzpKojQ8NO1yr0YNFZwCQRDT4zbXsPgVZPRBFmK6esTOAxEx1SlkwYPx%2Fq61H7KcFfuIuR4XV9%2BEU4BluBK6WojOiwpCWR6GNzNZy7lXq5DcyHWiE5Y9fUbcUtd8%2Fo0sGMI251skGOqUBKRM1kv1ZcPpDJtGckt9Wu%2BX9FSbQvHWGpGJ%2FT4dnQU%2Bn8iyoYo5RBfxPEKA%2FXLFm8vTLkTDF71aBEbVSknDQWKHGcH4M99dqrCKaK1pBxxbKmf%2FrxBkLqa5kHQy0UyHTxhh3xl8lXjGOSWfrzuiIc7YJQY9hfQNKvweEJuPfVkrWuld%2BKh2WDD1iwVV6BTniUcwqI6CYLAegN%2BM9qDrhC5OBn59Z&X-Amz-Signature=98f8adf86f34d41ed69510ab805a2e0facae774e1ab2d836f810a2b6cd01ffa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOURDBPC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4iEyGvawPag3OHOYSH1%2B60FCfonn2kGP5xkaRSfl2AIgAaMPAqdeYdCmBjywZ0vVMTl8sKwYzsxi8ViEv2cLM1oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu5TjZscpm0YbUE%2ByrcAz6GFg3XEv%2BRbMFNZ%2BLg5IZw1CqTh6djGc%2F4%2FYenuBCOJ48kng2rUVsrz%2FcWKOa7bOFGcbsN6yVOSF2xQSXAYShc5%2BW9yyuYyT1Q9Y2QFE4FC2IghOliymdQJv5AjVttmMhWVpNN%2Bom3AzXqW%2BGRXViNA4Lggdxo%2FpWUKPAorrLJtsUGH4rdAvJngCkXMR1Clv3cTDiZlFBx2GgUsRyJkfTbNTS0FTurOqDGPe80BeJ4qLGPxD91mZU2aWluY2iztzDxLUYT4%2F90EyM7gt9ZBh3Egh5khn5Rab0YLqR58d3CqWyd4ga0JwrPKF7n3%2FryR8zwGh%2Ba7%2BvzGicksq6T5bAdYpSfH0pICwFv9l%2B8J6RWsdhkaPDUs6ZDUGkNs%2B%2BdfbFVGiXae6QCbm%2FHjsyDfNNmTh6ULQMDJvy92aWh%2BUVpr2U2KROzVrj%2BSDyofReKWnB3H%2FWQOY8Ux08loqaS09NLcsBqpFclE0K3f2dVfHYAG0suLuA5JSn1AIvFzpKojQ8NO1yr0YNFZwCQRDT4zbXsPgVZPRBFmK6esTOAxEx1SlkwYPx%2Fq61H7KcFfuIuR4XV9%2BEU4BluBK6WojOiwpCWR6GNzNZy7lXq5DcyHWiE5Y9fUbcUtd8%2Fo0sGMI251skGOqUBKRM1kv1ZcPpDJtGckt9Wu%2BX9FSbQvHWGpGJ%2FT4dnQU%2Bn8iyoYo5RBfxPEKA%2FXLFm8vTLkTDF71aBEbVSknDQWKHGcH4M99dqrCKaK1pBxxbKmf%2FrxBkLqa5kHQy0UyHTxhh3xl8lXjGOSWfrzuiIc7YJQY9hfQNKvweEJuPfVkrWuld%2BKh2WDD1iwVV6BTniUcwqI6CYLAegN%2BM9qDrhC5OBn59Z&X-Amz-Signature=d6a019c55b2cf23b3990104bcfd8c1dcce2f70c814f7795895043be42241a2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
