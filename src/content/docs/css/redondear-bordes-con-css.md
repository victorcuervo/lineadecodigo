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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4IHJS5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslCjL7dTiLHUBOLgkP4MXV%2BI%2FyCM%2B5YX5kGmoXSE3rAIgAcUvsrapBEwvBfcBvf245e5MLukyJmnM1tlWznPSnCUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxrpqtDEb93AuBHOSrcAwnI4wND%2FgwPA34QYntNoCmjLMbX5tTCfoQJ%2B0g6kTGYqnIFecweX1KC8sfequ1eMOdC3%2BEceZOXM1VgZlzAIvQ%2BzjJrECKmywARyfMf3vzPodhSK6r7YYByXX4jO%2BT7KmHni2mxHjPLeOdDtyBFs9H3rFgNKnn4bodVIh4%2Bu%2Fg5tXBYd%2Fo%2FAAEHizCc0ffBMg9%2B2aWK%2F%2BdFUvpVZeW%2Brdk33cNwvZcfHV574LAb7j5RKYQlYy7txO4r8DwRr49Yk4fmWCES1%2FTIoA5i%2BAI%2Br5sFlPhKE0%2BdLs8zPAywmHdsMMNkNjcNCWDYo7QWwh%2BSG2aeOtzyaiFVWGJ0n6a9kC15Sv8NI%2B3RAzdl14YXBNMCwU%2B0euMv6xa8AefzsRnEH5xD9YvnOVD3hoidsdLSWdzsj8Lw8%2BwoCSH6eox0npqi7EwYv%2BNW7pwmPVcXOtoQgcZsxS1%2FaBVqhp1q7%2BcdRWOAnKAACFZNGcg4yEdcvPKk%2F%2FfF3pkCns0WoNe4HG%2F09dpYMroLvc%2B3sj4mT1cSX0jEyw4JlkeZDNtQdkmT9azXOiqCsbKfZ2qcC2aGdVBn3brJNhB5lIf%2B2qZhKVkrzMmYtK%2FflEBWcJKCa3hQTzXzlnDxyBGnVVDDXFO1MJHu2ckGOqUBUSM6M0UPNatqEkODB%2BFn9EMaj%2FuirtKGKE%2BDtYMmtp88mKukTAR51LKsIn%2FXT4eaRaT%2FyG32fMzo%2BIVHy7%2B2PAZYaGlO4%2BF6KQhNxpA6S7oMWhxVkEbAmHvD%2FkUytaLYF9gTrrOkqaG4pU9xN7HyHAMGhHAEL%2FnHyqAU%2Bi3WOw%2BBqVRRxCWnvvZz%2FG7ZcL4ITAQ80gZydze7K7wX1B5djhmcgaAF&X-Amz-Signature=7cec735ea8989b4d438db5df8babf0fa520240260918a7e2c822193dd9619db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H4IHJS5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDslCjL7dTiLHUBOLgkP4MXV%2BI%2FyCM%2B5YX5kGmoXSE3rAIgAcUvsrapBEwvBfcBvf245e5MLukyJmnM1tlWznPSnCUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxrpqtDEb93AuBHOSrcAwnI4wND%2FgwPA34QYntNoCmjLMbX5tTCfoQJ%2B0g6kTGYqnIFecweX1KC8sfequ1eMOdC3%2BEceZOXM1VgZlzAIvQ%2BzjJrECKmywARyfMf3vzPodhSK6r7YYByXX4jO%2BT7KmHni2mxHjPLeOdDtyBFs9H3rFgNKnn4bodVIh4%2Bu%2Fg5tXBYd%2Fo%2FAAEHizCc0ffBMg9%2B2aWK%2F%2BdFUvpVZeW%2Brdk33cNwvZcfHV574LAb7j5RKYQlYy7txO4r8DwRr49Yk4fmWCES1%2FTIoA5i%2BAI%2Br5sFlPhKE0%2BdLs8zPAywmHdsMMNkNjcNCWDYo7QWwh%2BSG2aeOtzyaiFVWGJ0n6a9kC15Sv8NI%2B3RAzdl14YXBNMCwU%2B0euMv6xa8AefzsRnEH5xD9YvnOVD3hoidsdLSWdzsj8Lw8%2BwoCSH6eox0npqi7EwYv%2BNW7pwmPVcXOtoQgcZsxS1%2FaBVqhp1q7%2BcdRWOAnKAACFZNGcg4yEdcvPKk%2F%2FfF3pkCns0WoNe4HG%2F09dpYMroLvc%2B3sj4mT1cSX0jEyw4JlkeZDNtQdkmT9azXOiqCsbKfZ2qcC2aGdVBn3brJNhB5lIf%2B2qZhKVkrzMmYtK%2FflEBWcJKCa3hQTzXzlnDxyBGnVVDDXFO1MJHu2ckGOqUBUSM6M0UPNatqEkODB%2BFn9EMaj%2FuirtKGKE%2BDtYMmtp88mKukTAR51LKsIn%2FXT4eaRaT%2FyG32fMzo%2BIVHy7%2B2PAZYaGlO4%2BF6KQhNxpA6S7oMWhxVkEbAmHvD%2FkUytaLYF9gTrrOkqaG4pU9xN7HyHAMGhHAEL%2FnHyqAU%2Bi3WOw%2BBqVRRxCWnvvZz%2FG7ZcL4ITAQ80gZydze7K7wX1B5djhmcgaAF&X-Amz-Signature=502988f2756946420eec23d2bb6dd02caa248eafc1ef5bbdf8fbb2f2892c5684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
