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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WDHJTQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjmgLm1bj%2F7TzOfJyjST%2Fog9rVAnnEV%2FWtYOMZTOP13AiB07HdsI0aNGP2CuAQGNZhX50vBulxWhWbj6LjlA%2BNQsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkqnh0GRTU21TDSIbKtwDo7V1t8j5UM4XBQs4fr%2FetGm8TJhznpDP6k%2FVx7eEBJL5pha%2Fx8fw7hJeexmepS7mhV1SZ%2BdHmJTRb%2FpMg7qz7KRdKYgXXscZwCXyBj7iFlggxeWjTNizeyFVFSyJwxS%2F8QsCUU0J3S6g%2Bf7R20jWCnQAqUue7%2F39huVarGkbt1tvhKjuKmu5ApTEpQ2di4B8fl7QzYadcA1n5LXO4deNtnHAF%2BBxs81dko1j00W3pvz%2BUoJnoNw48FyG7ffNB%2BxWQMsJzRl%2BcBbg3i6rn4XQtWiLMlOuhGW47ajdpjqIC%2BaIXRNZ1XoZCajuLRN%2B%2FGzFAlFB8UaQd%2B9E%2FBdAEK9y%2BvywgQZckkz9%2BkDqgQ03HCCGGNtJIkvrl9ql4ckx3LRqplURooQySl3B21mcicZbY87d0HpMXVR27LbZimQyylzOSG8AjPw70ca2OXMsW9CjRHv1AkHv1%2Fxn4KVwV%2FW7SQV0GR0O7nWMKQYvM754sBFnfPx4%2Fz33qG8XeO%2BiSHkI%2BHiNToIEcDvAliFoMkKaY2J56W2ikaP1YWhDOGaFZpoWsn0bzLflCaQiG0%2BATHc1KJHf1GJL4ucMhqF2zyuiOv0vom2RoX1ubBK47APVFwaVUo9AJDGcLfg%2FH3gwitGJygY6pgEFXWRsc%2FD0LhYd5Y4vLSouY62pbKbUcG0REn4%2F5GuxnBM2hDMw8VAYpJK56iEFIxEMHr6953ZOsxIfDyxXuFaDKsfW2NRZ%2BVHKZK72DS54PwJpxAjwa4KEgGQeuX%2Bj4RFskVB3vX0zaySm1voUPjuSQB4kIXJ7zLM3qodDbc%2B1dxGt%2Fw6rCHsgi9REuG6dtnVT6aFH8qu9C7bLhwL4%2B3W3VReosml9&X-Amz-Signature=49d175a88fe3c3a8332330c34ac49fa4b2435c0d8ed73dd2ebbd900a41d60d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WDHJTQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjmgLm1bj%2F7TzOfJyjST%2Fog9rVAnnEV%2FWtYOMZTOP13AiB07HdsI0aNGP2CuAQGNZhX50vBulxWhWbj6LjlA%2BNQsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkqnh0GRTU21TDSIbKtwDo7V1t8j5UM4XBQs4fr%2FetGm8TJhznpDP6k%2FVx7eEBJL5pha%2Fx8fw7hJeexmepS7mhV1SZ%2BdHmJTRb%2FpMg7qz7KRdKYgXXscZwCXyBj7iFlggxeWjTNizeyFVFSyJwxS%2F8QsCUU0J3S6g%2Bf7R20jWCnQAqUue7%2F39huVarGkbt1tvhKjuKmu5ApTEpQ2di4B8fl7QzYadcA1n5LXO4deNtnHAF%2BBxs81dko1j00W3pvz%2BUoJnoNw48FyG7ffNB%2BxWQMsJzRl%2BcBbg3i6rn4XQtWiLMlOuhGW47ajdpjqIC%2BaIXRNZ1XoZCajuLRN%2B%2FGzFAlFB8UaQd%2B9E%2FBdAEK9y%2BvywgQZckkz9%2BkDqgQ03HCCGGNtJIkvrl9ql4ckx3LRqplURooQySl3B21mcicZbY87d0HpMXVR27LbZimQyylzOSG8AjPw70ca2OXMsW9CjRHv1AkHv1%2Fxn4KVwV%2FW7SQV0GR0O7nWMKQYvM754sBFnfPx4%2Fz33qG8XeO%2BiSHkI%2BHiNToIEcDvAliFoMkKaY2J56W2ikaP1YWhDOGaFZpoWsn0bzLflCaQiG0%2BATHc1KJHf1GJL4ucMhqF2zyuiOv0vom2RoX1ubBK47APVFwaVUo9AJDGcLfg%2FH3gwitGJygY6pgEFXWRsc%2FD0LhYd5Y4vLSouY62pbKbUcG0REn4%2F5GuxnBM2hDMw8VAYpJK56iEFIxEMHr6953ZOsxIfDyxXuFaDKsfW2NRZ%2BVHKZK72DS54PwJpxAjwa4KEgGQeuX%2Bj4RFskVB3vX0zaySm1voUPjuSQB4kIXJ7zLM3qodDbc%2B1dxGt%2Fw6rCHsgi9REuG6dtnVT6aFH8qu9C7bLhwL4%2B3W3VReosml9&X-Amz-Signature=f8fb5714a9c4ee549beeee40fa01b35c093cf5ecf19118ff090de97260393f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
