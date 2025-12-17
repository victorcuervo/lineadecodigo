---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXCSAFA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoGP3nEJkxYHMxnj7uGqhwQfDRxAvz0pffR5HAfOjKQIgfPSu6emVYE8ai1lxfjLQ%2BdTHgybvoevsQ5MtCSV1BPYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLeMYtaW6OrhlgbW8yrcA9%2B9dgqpXqJ%2B68aCJhMlq9TXEfLd0hjusJ8pqWmyJaqarTWJWwmPf0fFIwqcWr%2FWIOH6cb2VSZeae5%2Fus6ptQ3XsTvTLKRKikCCLZ2ezaA8ovWbKNIwLOk1JXMZ%2BRPUx6E5JT3SFl9yUAL8hmR95AqKQZu%2FMQJHpvk9Kx9ybePWvvu8%2Fwd16bTZwXpEOTosbp2iVlT7pLoEjO2GVS7mCYaFkVA%2BG4oZbjD8HYBKB9x%2BSC3%2FtVge6gqPauolixgoZNGI3ageri3RmfMqC1x16DB2cvrH6dYlF%2F5cZnuoaLo3GWp2NhjRc2Pj%2BGxYfyfyVVVUy%2BXVOCaNSyFMig1cpSeUH6PjJACnGu0p3wEpIsUmPhnym1YXe3Uhmm0ggkpaIy2tPDONUv78rLVjcfCgLntSih91S57GqPJ3xCkE2bla5HrK6k9NWx26s61rnvz%2FktS7fkA3fMS%2FEeH8MGdeOnhrx21G%2B%2FNNHcEFzoANvgopA%2BxXlhTo1Wf4tRTRqvUWbCnH2vS8ISaXdcw0qFzQpnS8RbVxrYI4Mu17NtGupke%2F1GzKSoPR%2FLD7q%2FfJKGCesev20j47QDcSg%2BDd0s1BEkON2T9Z5Z5Et9yz0evUPkWBKiEUFBfbvxJqGRwG0MNzvicoGOqUBv8qc3TN7UmEmaVTSR3kcfF9anTJPUgXm1VNUvLlYWhPnyNKkc1AS64MQ5cDM0WC%2FVcrLlFEm%2B%2BcFqmk4LcgQoB6iKmQS2NfuFvMNn6OvcZBnMtedlb8kAj9V1gndENs4Qa2h4LK%2Fmn%2B7%2FhiEOLYW97JaC0ocVKQTU8lfnf5iD%2BEzSSX04lkz7iCIZAkIDtRSwX%2FQhfIc1MIC9ZrP7C88udaOz3P8&X-Amz-Signature=f76f1787b79119140f8d2dd89d94b163352efb7d76b30a153c4e18eeac041afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXCSAFA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdoGP3nEJkxYHMxnj7uGqhwQfDRxAvz0pffR5HAfOjKQIgfPSu6emVYE8ai1lxfjLQ%2BdTHgybvoevsQ5MtCSV1BPYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLeMYtaW6OrhlgbW8yrcA9%2B9dgqpXqJ%2B68aCJhMlq9TXEfLd0hjusJ8pqWmyJaqarTWJWwmPf0fFIwqcWr%2FWIOH6cb2VSZeae5%2Fus6ptQ3XsTvTLKRKikCCLZ2ezaA8ovWbKNIwLOk1JXMZ%2BRPUx6E5JT3SFl9yUAL8hmR95AqKQZu%2FMQJHpvk9Kx9ybePWvvu8%2Fwd16bTZwXpEOTosbp2iVlT7pLoEjO2GVS7mCYaFkVA%2BG4oZbjD8HYBKB9x%2BSC3%2FtVge6gqPauolixgoZNGI3ageri3RmfMqC1x16DB2cvrH6dYlF%2F5cZnuoaLo3GWp2NhjRc2Pj%2BGxYfyfyVVVUy%2BXVOCaNSyFMig1cpSeUH6PjJACnGu0p3wEpIsUmPhnym1YXe3Uhmm0ggkpaIy2tPDONUv78rLVjcfCgLntSih91S57GqPJ3xCkE2bla5HrK6k9NWx26s61rnvz%2FktS7fkA3fMS%2FEeH8MGdeOnhrx21G%2B%2FNNHcEFzoANvgopA%2BxXlhTo1Wf4tRTRqvUWbCnH2vS8ISaXdcw0qFzQpnS8RbVxrYI4Mu17NtGupke%2F1GzKSoPR%2FLD7q%2FfJKGCesev20j47QDcSg%2BDd0s1BEkON2T9Z5Z5Et9yz0evUPkWBKiEUFBfbvxJqGRwG0MNzvicoGOqUBv8qc3TN7UmEmaVTSR3kcfF9anTJPUgXm1VNUvLlYWhPnyNKkc1AS64MQ5cDM0WC%2FVcrLlFEm%2B%2BcFqmk4LcgQoB6iKmQS2NfuFvMNn6OvcZBnMtedlb8kAj9V1gndENs4Qa2h4LK%2Fmn%2B7%2FhiEOLYW97JaC0ocVKQTU8lfnf5iD%2BEzSSX04lkz7iCIZAkIDtRSwX%2FQhfIc1MIC9ZrP7C88udaOz3P8&X-Amz-Signature=4a00ef419898037f4ce04abe6adbb3355a03dbfbe242f423ae596c16b24f18e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
