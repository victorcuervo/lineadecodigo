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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SM4QEU7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENWCM6hM2FPstnryfugL6wXT8YDuqcMWtW9C%2FCtD3QfAiBBhLeioamwo1EtI3gU5cG9IW%2FsBFpn8GqdrNSuxC4Rbir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRRZG9nbVw%2FszN%2FO3KtwD00D3nSpu71WL0dLKsd3ferrZWuk0bKvQwhb%2BjaPsaLQgeM5ijvMA160OpQ%2FMWv1sj5Q4dihFqTA73jAtNzrK7P75t%2FLzpMqJGyjXmEFgutdqZm%2Bdfu2GWXgOfvzKLSVjUD9sYEMC6wzVcqIAeGz8tkS4inMGyOxqCcUiIJfJ176TkiJ9JPQ61rn2VZuXRYnQEzRmk7S8nfP8KazOW73U5TxaJNulDgadIGAqfsDfY809CsBLbYLQzpEFa%2BWB3SsSOaLZ8t%2ByjC2uJ8C0uRDNTNXXm%2BvLbScVD%2BtfMOxAGLmbeQsqVJ9BQBSNaWEEFD1iz0e8iXUmsppR1ayV4Xdo0Uz3GkuCZ%2BR977nsFa%2BgXvS6aRfUwWIbeZnRZ7tce5dYqSVKLddcDXg59DavHFP1iIjrj1yM2bXYYzNwoLDpNtlPJDe4C4QjhPLCMBO8TVjJhf56dLnjyb8G9YfHY0qzpiJP14GSDVPAjqWMCAFjKZQrItDrlpmAFb%2Fpk5sBwulQulk0eCb1EB5Cm6P5pMTE7mBZX6nRrkRGvjXxqEPuydvucmmXM2S%2FJ9k8d0f3bj5cbQJm4Oj4enXUCcOEBpYZHAVJtJzWhTqGhQGqd6ThZGvv0%2FZGcAYB2UhQ6bQw7sWKygY6pgGRtxtq%2BhJg%2BujyiZ3IB9RCmpJlOoPnLwDIaaADGVNDHTSahi9AeJEa%2FOM2gRPCRxCJggZEhNAVEi6TuuJy7weINH0lFwFF6DvASKzpGERqorY3j9jOLUbda7rkJCcFGAB34mPRMn%2FQu10sdR1XSK0nFuZMmbUeSO99OV%2FZKOH84j%2BND8msgJp0nYWXcgiAq5gFjFBfUUGg9LhX5ZkCmIvluU%2FCYwdl&X-Amz-Signature=4dc9901b2a30802136610aeda155b0323eeacbf96cce25257c1b62d37fbf294e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SM4QEU7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENWCM6hM2FPstnryfugL6wXT8YDuqcMWtW9C%2FCtD3QfAiBBhLeioamwo1EtI3gU5cG9IW%2FsBFpn8GqdrNSuxC4Rbir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMRRZG9nbVw%2FszN%2FO3KtwD00D3nSpu71WL0dLKsd3ferrZWuk0bKvQwhb%2BjaPsaLQgeM5ijvMA160OpQ%2FMWv1sj5Q4dihFqTA73jAtNzrK7P75t%2FLzpMqJGyjXmEFgutdqZm%2Bdfu2GWXgOfvzKLSVjUD9sYEMC6wzVcqIAeGz8tkS4inMGyOxqCcUiIJfJ176TkiJ9JPQ61rn2VZuXRYnQEzRmk7S8nfP8KazOW73U5TxaJNulDgadIGAqfsDfY809CsBLbYLQzpEFa%2BWB3SsSOaLZ8t%2ByjC2uJ8C0uRDNTNXXm%2BvLbScVD%2BtfMOxAGLmbeQsqVJ9BQBSNaWEEFD1iz0e8iXUmsppR1ayV4Xdo0Uz3GkuCZ%2BR977nsFa%2BgXvS6aRfUwWIbeZnRZ7tce5dYqSVKLddcDXg59DavHFP1iIjrj1yM2bXYYzNwoLDpNtlPJDe4C4QjhPLCMBO8TVjJhf56dLnjyb8G9YfHY0qzpiJP14GSDVPAjqWMCAFjKZQrItDrlpmAFb%2Fpk5sBwulQulk0eCb1EB5Cm6P5pMTE7mBZX6nRrkRGvjXxqEPuydvucmmXM2S%2FJ9k8d0f3bj5cbQJm4Oj4enXUCcOEBpYZHAVJtJzWhTqGhQGqd6ThZGvv0%2FZGcAYB2UhQ6bQw7sWKygY6pgGRtxtq%2BhJg%2BujyiZ3IB9RCmpJlOoPnLwDIaaADGVNDHTSahi9AeJEa%2FOM2gRPCRxCJggZEhNAVEi6TuuJy7weINH0lFwFF6DvASKzpGERqorY3j9jOLUbda7rkJCcFGAB34mPRMn%2FQu10sdR1XSK0nFuZMmbUeSO99OV%2FZKOH84j%2BND8msgJp0nYWXcgiAq5gFjFBfUUGg9LhX5ZkCmIvluU%2FCYwdl&X-Amz-Signature=de8180eccd12c963312212f15da070be474fa4ffc0fa29e8d74d0bbe78601c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
