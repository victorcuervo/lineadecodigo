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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYIZFCP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6W6znr1EAIstj48qA1cUPWyp%2FLY3B7bv%2BSJlMEGpnHAIhAOCXQFhKyA7fdn20eCJv4GdCmBG9Xvgq%2F6AZMTFjf%2FyOKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRHicslPrfbglLQ1Qq3AMRGqeXlEXQK6JF4hGKqKBghni1ySfDOkPxzMSVqV4bJxwEa%2BQCK7dKJuElP4pwiNPMavfOM0d%2F5TTduqA7fs1sKfzZ6Bks18f5ldFvZjvNa4XuSrXLEhJXB0NYSCcCHAnYtZwC5h0C7gw%2BQ0zGSCbLG2vkFM9R0GumgDMWDG02gkcTdMwMzGuHAUvqE2hr1syN8AO%2BvXney57TOgmZkclwPZdVzrKRSNxaxz3Kl6WJo8misoOf2I1cxKOqUO6JG6oFgua4sB8xBd9sTTSQR3UGeWDuCSffo80BNur02t6mzGhLh%2FUbYbYk1vQ3pIu%2B6os%2BE02ARIBPc%2BYeCn2kSj0zDZynTmYO05N2CVQX79GrnlmSMVqnu8dIP9x60Fiy4hE6eBD4eoxzAyiID2ojfA51XDwHRPK%2B7cflV4Fw5sgEI9pQUHFdRCBcxHZwTkSCxC9DmtVZoIy4iiftZacBQ%2BWqkhv%2BNKtRJ6PqrFVS9J7n9yfXRBnOmfM%2FSlhRilgu9Z%2Bo7K5FxnTSqXNQM86GScNApPTyXbyL2g6UO%2FpcLmODEEJDMHQIsIhZRKXIWqoHnzCaUMB79o%2B7UKW11sRv37N%2FCBnGbY9fLykwrzprjwQcWkoim0pJ9FkOzr1RxTCvn4vKBjqkAV0KpFtHQkHR3JCwMLs6gSjm6HT1tIMgDEfmDHjlb0wtLKANHBv60EXriusj3uhle8F1E6negIs96Qop%2FhRDQ%2Fs4lhFRC0C96W%2FFbalgY%2Fitfc%2BmZJ6LnEzTtSMHo5VkwwOIOlWndLYV6JlmIjSfuOy7V07A80L0MhhI47zzbpxweJqs8N1rbVOaIC4sQov%2FiHwsr7uw1OeyWQOjb3NDRoE2F8fY&X-Amz-Signature=015e5cf9cdf9f809eca86c6b144838eb7cfcda5ba6de28efbf0a725d19ccf9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYIZFCP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6W6znr1EAIstj48qA1cUPWyp%2FLY3B7bv%2BSJlMEGpnHAIhAOCXQFhKyA7fdn20eCJv4GdCmBG9Xvgq%2F6AZMTFjf%2FyOKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRHicslPrfbglLQ1Qq3AMRGqeXlEXQK6JF4hGKqKBghni1ySfDOkPxzMSVqV4bJxwEa%2BQCK7dKJuElP4pwiNPMavfOM0d%2F5TTduqA7fs1sKfzZ6Bks18f5ldFvZjvNa4XuSrXLEhJXB0NYSCcCHAnYtZwC5h0C7gw%2BQ0zGSCbLG2vkFM9R0GumgDMWDG02gkcTdMwMzGuHAUvqE2hr1syN8AO%2BvXney57TOgmZkclwPZdVzrKRSNxaxz3Kl6WJo8misoOf2I1cxKOqUO6JG6oFgua4sB8xBd9sTTSQR3UGeWDuCSffo80BNur02t6mzGhLh%2FUbYbYk1vQ3pIu%2B6os%2BE02ARIBPc%2BYeCn2kSj0zDZynTmYO05N2CVQX79GrnlmSMVqnu8dIP9x60Fiy4hE6eBD4eoxzAyiID2ojfA51XDwHRPK%2B7cflV4Fw5sgEI9pQUHFdRCBcxHZwTkSCxC9DmtVZoIy4iiftZacBQ%2BWqkhv%2BNKtRJ6PqrFVS9J7n9yfXRBnOmfM%2FSlhRilgu9Z%2Bo7K5FxnTSqXNQM86GScNApPTyXbyL2g6UO%2FpcLmODEEJDMHQIsIhZRKXIWqoHnzCaUMB79o%2B7UKW11sRv37N%2FCBnGbY9fLykwrzprjwQcWkoim0pJ9FkOzr1RxTCvn4vKBjqkAV0KpFtHQkHR3JCwMLs6gSjm6HT1tIMgDEfmDHjlb0wtLKANHBv60EXriusj3uhle8F1E6negIs96Qop%2FhRDQ%2Fs4lhFRC0C96W%2FFbalgY%2Fitfc%2BmZJ6LnEzTtSMHo5VkwwOIOlWndLYV6JlmIjSfuOy7V07A80L0MhhI47zzbpxweJqs8N1rbVOaIC4sQov%2FiHwsr7uw1OeyWQOjb3NDRoE2F8fY&X-Amz-Signature=e342d3576fd76f998daedc9ac7cdf0aef440989329533b6c2f1dc62ceb400a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
