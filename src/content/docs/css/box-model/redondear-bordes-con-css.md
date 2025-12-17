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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV5M56L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGeW3ETl1blDnVq0%2FPROvvg%2Fud9KcfFZ6gxcKCn8AxwwIgJt7RAFmGtj23eDT37nS%2F4Qu28TPoCmTP08mrbjbi99Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvS5qMy4cLEQOGyWCrcA63AQRYyBLDPYm9EiA%2F4E63Yj0cj8nc3u%2BmKMSMTMHVYynVkq%2FcH%2Fj9sSsdc8QL0MQxvB4J9ZQHB6Y5yGDTl8qL3T8MsNrim3cHtZRIFnDkHvw1E%2Fx%2F9mDPR0Gjwibz2E0iKUdkqp4OZjZJ9Crmchbm2ksxmQAw0%2B76RvgipknLatpBkVAt2zpfMe8k2pf1iNzC96SazScR%2Fqu6rqnrHGLqXQzd2UcA%2BqxzqTkU8edhyoBU1rEDE%2F0COfUeVmchjC8%2B9iVwAhqZCtzCnfznv5OsBEjnNHoTSjrf2nTmIUnaASO%2BR%2BNFFmJ%2F%2B4EF5W8vIasENQrr4DlZzS06ZqnX44tNg1gScr%2F0GAtQ6j6%2Bh7YjxRVU4%2FIFxK7cjYIOiFDL3hANpc13BD7BwQ9YB2lEu9z6zGwKXDqXcJM7dBeBiqGXDvu1qAUjRj5wdu2beXoGCpzngM33Ug2QOYSZWKvode8ZMsa5EQMTTP%2Fp8vg8YMd6a6XgipwxgOwKaeYJULY4BcnAiqaPy4%2B2W5ZxHVL8acMXn3qeeOFtk14lgdjtVW3UM%2FAqXqrzNgx07RMq4Al%2FCHQYE62fYDtfLu6SieDC4dN9cx4NFKdt4eaEYSuwwPtxM688dyuCTNrsqJBeSMPaOisoGOqUBEUcsg9KsHa0hr3CjR0KTxqlJ2Xsx1P2zfDJOvrFemhmNRT6dSPgmUTkF1XLrjVsi2DBDM%2Br40C%2FsurrCKVpoPOv6thew0gZpwmNPeR4V1LmvlSwHk1nMV0z%2BRFvXDIxgze44NBC0jDir0GmGc1fXzc6NdjrIuwzAO%2FBNyERdc%2BZ48FROXi4kfCYZmo45nwUiY4p7M5Zi9nCqvOz5vCj3VXGFLd6Y&X-Amz-Signature=497bcd632e36eb205541b366c4f8413f2a793476fb3132c122404f812f2320f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV5M56L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGeW3ETl1blDnVq0%2FPROvvg%2Fud9KcfFZ6gxcKCn8AxwwIgJt7RAFmGtj23eDT37nS%2F4Qu28TPoCmTP08mrbjbi99Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFvS5qMy4cLEQOGyWCrcA63AQRYyBLDPYm9EiA%2F4E63Yj0cj8nc3u%2BmKMSMTMHVYynVkq%2FcH%2Fj9sSsdc8QL0MQxvB4J9ZQHB6Y5yGDTl8qL3T8MsNrim3cHtZRIFnDkHvw1E%2Fx%2F9mDPR0Gjwibz2E0iKUdkqp4OZjZJ9Crmchbm2ksxmQAw0%2B76RvgipknLatpBkVAt2zpfMe8k2pf1iNzC96SazScR%2Fqu6rqnrHGLqXQzd2UcA%2BqxzqTkU8edhyoBU1rEDE%2F0COfUeVmchjC8%2B9iVwAhqZCtzCnfznv5OsBEjnNHoTSjrf2nTmIUnaASO%2BR%2BNFFmJ%2F%2B4EF5W8vIasENQrr4DlZzS06ZqnX44tNg1gScr%2F0GAtQ6j6%2Bh7YjxRVU4%2FIFxK7cjYIOiFDL3hANpc13BD7BwQ9YB2lEu9z6zGwKXDqXcJM7dBeBiqGXDvu1qAUjRj5wdu2beXoGCpzngM33Ug2QOYSZWKvode8ZMsa5EQMTTP%2Fp8vg8YMd6a6XgipwxgOwKaeYJULY4BcnAiqaPy4%2B2W5ZxHVL8acMXn3qeeOFtk14lgdjtVW3UM%2FAqXqrzNgx07RMq4Al%2FCHQYE62fYDtfLu6SieDC4dN9cx4NFKdt4eaEYSuwwPtxM688dyuCTNrsqJBeSMPaOisoGOqUBEUcsg9KsHa0hr3CjR0KTxqlJ2Xsx1P2zfDJOvrFemhmNRT6dSPgmUTkF1XLrjVsi2DBDM%2Br40C%2FsurrCKVpoPOv6thew0gZpwmNPeR4V1LmvlSwHk1nMV0z%2BRFvXDIxgze44NBC0jDir0GmGc1fXzc6NdjrIuwzAO%2FBNyERdc%2BZ48FROXi4kfCYZmo45nwUiY4p7M5Zi9nCqvOz5vCj3VXGFLd6Y&X-Amz-Signature=cc137bb9c7dc9ce6c00810d12cee8a8965f5708617125c3be9ed418ec19b2b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
