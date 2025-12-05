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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNB2GYN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPc38Hh6vVbvzb0MNoSJThsvDTz%2Fajlr2gfsFqBbH2AIgCV5puRPWipxwF0Ylx6dw%2B3RdWnhRWZfU3ivLRCwXthgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOQBK7RMdwqA5QrOByrcA43Ob1xtzBz8qmkuBU9HiF7jS5279IS0UQXnWr4UtfKXRlJiXmI4IMjob%2BG1exIfOrQ6wysFSfQ8oIvHMGNTxWVe0ydVWuL1NJ0VVeIFqtbdHBHqqFqR3P8VIzCkgIi9nOtoSvYgSYhX4KDgvJ5nN2QzCIBX1qLAMl4gkrqyc6BwFnAcMnB2%2F%2Bli%2BHao5VKUHFcR1QD7gJUBMBkwAoJr4eDTo1xRVSbiu8nYWAQ6lT0Oo%2BIZaXNOeMFhiy%2BDSx6Q4XPGd%2BKIXDO0v%2FUHiEgOIWfQrvhHkbX1xoZfH8ybks24rJtwTSsMVgZx4CEVS6fGd0zECkB8lQcHIgFtdG5Wtvup6DxKYwlhl2KmfbyFvAFD048WAEA07boYJ6aV3j4Tt1kTffRtRPVfmJXvCCZI5Co1hMnlkC3GNF%2Fi7QYEOuIMLgz0%2BVTceKCNTl0B0LRVPZaiOUev0kVCQa1LlvkaQlETOCKGwy98E5W5WwPuNlzGzI0QyIahnInbYheyN1qyLOo2tb8fz4UGhpYQv5%2Fo3XFt%2B7qPJkczdjq9bMRxELMoqdvFG0zVTrfkala19Xga1nyqcrNvWNElNOKFAfOw9XmWiZsUWYkQ%2BULCRCl2mvnBOZ79V2Utp1DBlrqxMJ7ty8kGOqUByUr6oSnnXcUzH7GJ8Yma70fAQFQUd%2F%2Bhjm6J2bR2y0WeWFJS6seooKmYs73jzkh%2BsTnFxtNurAVxjzLX%2B2hJDNfIc%2B6ddgrT6Mmru31gPQX8%2BgMl0QJkL01SBEEfmyxmKyX93ZZhW%2FsJzR8wI%2BsujtlAKCq3tBsZceSWPao3dp%2Fiyuk0zATFMsaD4bgCCAgoGh%2FNBLH%2FLW0uBaCzW3Xtg6YG%2BvkI&X-Amz-Signature=71ad1111025836024d5b9020342ba4d867dafdde5a7ca8f8d1037c7542f9208f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNB2GYN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPc38Hh6vVbvzb0MNoSJThsvDTz%2Fajlr2gfsFqBbH2AIgCV5puRPWipxwF0Ylx6dw%2B3RdWnhRWZfU3ivLRCwXthgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOQBK7RMdwqA5QrOByrcA43Ob1xtzBz8qmkuBU9HiF7jS5279IS0UQXnWr4UtfKXRlJiXmI4IMjob%2BG1exIfOrQ6wysFSfQ8oIvHMGNTxWVe0ydVWuL1NJ0VVeIFqtbdHBHqqFqR3P8VIzCkgIi9nOtoSvYgSYhX4KDgvJ5nN2QzCIBX1qLAMl4gkrqyc6BwFnAcMnB2%2F%2Bli%2BHao5VKUHFcR1QD7gJUBMBkwAoJr4eDTo1xRVSbiu8nYWAQ6lT0Oo%2BIZaXNOeMFhiy%2BDSx6Q4XPGd%2BKIXDO0v%2FUHiEgOIWfQrvhHkbX1xoZfH8ybks24rJtwTSsMVgZx4CEVS6fGd0zECkB8lQcHIgFtdG5Wtvup6DxKYwlhl2KmfbyFvAFD048WAEA07boYJ6aV3j4Tt1kTffRtRPVfmJXvCCZI5Co1hMnlkC3GNF%2Fi7QYEOuIMLgz0%2BVTceKCNTl0B0LRVPZaiOUev0kVCQa1LlvkaQlETOCKGwy98E5W5WwPuNlzGzI0QyIahnInbYheyN1qyLOo2tb8fz4UGhpYQv5%2Fo3XFt%2B7qPJkczdjq9bMRxELMoqdvFG0zVTrfkala19Xga1nyqcrNvWNElNOKFAfOw9XmWiZsUWYkQ%2BULCRCl2mvnBOZ79V2Utp1DBlrqxMJ7ty8kGOqUByUr6oSnnXcUzH7GJ8Yma70fAQFQUd%2F%2Bhjm6J2bR2y0WeWFJS6seooKmYs73jzkh%2BsTnFxtNurAVxjzLX%2B2hJDNfIc%2B6ddgrT6Mmru31gPQX8%2BgMl0QJkL01SBEEfmyxmKyX93ZZhW%2FsJzR8wI%2BsujtlAKCq3tBsZceSWPao3dp%2Fiyuk0zATFMsaD4bgCCAgoGh%2FNBLH%2FLW0uBaCzW3Xtg6YG%2BvkI&X-Amz-Signature=b68e55f05b820b728f8cb0ca3980abe93d9466368c7b1f63c5603a977b2f858f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
