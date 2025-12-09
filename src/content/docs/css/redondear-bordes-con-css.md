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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHNWAS3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FT6mBIDJR3cLM5w%2FAexHLiB81ikJ05Xy6Q%2FyEJpjkNAIhAPGkWAZkkpVS7vT%2F2JkMXwcQmhPGsmYClL2GRQLN%2Fm5wKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGU%2FnIoa%2BJuamYKfsq3ANCt%2BN3%2B1ZbesOljMFgPtiiURd%2FEKw6mKyPNBxeUTJjrkotPBFlv23gM03jjkwhwlQLbI0b9UFhRnz9ih%2F5tPtyjrxVXWpaZXU4KE%2BaRrF0%2BsZ1FoG1D8Uby9DYhuVhfpFkpL5JDUGKzWH9Ln3eM%2BGAsj6ThSWS75HNCj2JMee0nmR2czrYUCXfqZGUBjVxiUIu2aUlPrlISOpnHn3AKPHgsjzvGZzlXNdRsXBYZ%2FpUE67sx57Daa%2Btvqmd9Pz%2BYRqWepOXLD5%2BIkhL8eXkKIMusZFjhcZo2%2B7nMz9P0zeUvLQnfdR5vIbs3Zu%2BGGzmg4pAkPgjwxzJyOtByAjq9HkQToPuA55tJsyFJRm%2BSwOgDzlBVyJeoBxlmUvBBGtJNVVGthRQ4gtQitkYsjmRX9V1TxmPCFtyv1B%2FuLmIB1f8zpkzynkNPUcobeiZP1UCUvlPOOcEKarY5jTa5VgBaxX6ikcN41YT6Xn5XshA07%2BVG4v5USRLw0q4tD8YF8J2RDjJxTnVPZFNCo5e72eJCuvRxc7mtV%2BsHDIfszMg0qzQFuIv%2BqmHsmJ2QYICqOameNtkZ9YZOh4ZR3kC47QaNgMO916AEbHlV9jwNigSh%2F3dNzDfzkV2DWyOBCOrEDDspN%2FJBjqkAUJxKgiTOeNuZgqHG9zIsjnUmkg4plpLA%2FhmjJNOBKJWxFVXeOzK15uIk400qNpD514rFcpHcmh5CZhX2NAm4FGtDgafM9TMb2yctflrcC2t7ASOmznaKYJbBmuNrE10sE%2Fal1ACVo229dFy4lbeLvRn61cKinRF%2BQ0iBojQ67plwdjs9kL39So5mxo22yd49Lcp634TeIfYQhAvAaLO9qFB%2FMHt&X-Amz-Signature=112062d5a8fe1fc72f7a9d7beb3046ee1893c2c97e841e3cf1d49fc267cf067f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHNWAS3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FT6mBIDJR3cLM5w%2FAexHLiB81ikJ05Xy6Q%2FyEJpjkNAIhAPGkWAZkkpVS7vT%2F2JkMXwcQmhPGsmYClL2GRQLN%2Fm5wKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGU%2FnIoa%2BJuamYKfsq3ANCt%2BN3%2B1ZbesOljMFgPtiiURd%2FEKw6mKyPNBxeUTJjrkotPBFlv23gM03jjkwhwlQLbI0b9UFhRnz9ih%2F5tPtyjrxVXWpaZXU4KE%2BaRrF0%2BsZ1FoG1D8Uby9DYhuVhfpFkpL5JDUGKzWH9Ln3eM%2BGAsj6ThSWS75HNCj2JMee0nmR2czrYUCXfqZGUBjVxiUIu2aUlPrlISOpnHn3AKPHgsjzvGZzlXNdRsXBYZ%2FpUE67sx57Daa%2Btvqmd9Pz%2BYRqWepOXLD5%2BIkhL8eXkKIMusZFjhcZo2%2B7nMz9P0zeUvLQnfdR5vIbs3Zu%2BGGzmg4pAkPgjwxzJyOtByAjq9HkQToPuA55tJsyFJRm%2BSwOgDzlBVyJeoBxlmUvBBGtJNVVGthRQ4gtQitkYsjmRX9V1TxmPCFtyv1B%2FuLmIB1f8zpkzynkNPUcobeiZP1UCUvlPOOcEKarY5jTa5VgBaxX6ikcN41YT6Xn5XshA07%2BVG4v5USRLw0q4tD8YF8J2RDjJxTnVPZFNCo5e72eJCuvRxc7mtV%2BsHDIfszMg0qzQFuIv%2BqmHsmJ2QYICqOameNtkZ9YZOh4ZR3kC47QaNgMO916AEbHlV9jwNigSh%2F3dNzDfzkV2DWyOBCOrEDDspN%2FJBjqkAUJxKgiTOeNuZgqHG9zIsjnUmkg4plpLA%2FhmjJNOBKJWxFVXeOzK15uIk400qNpD514rFcpHcmh5CZhX2NAm4FGtDgafM9TMb2yctflrcC2t7ASOmznaKYJbBmuNrE10sE%2Fal1ACVo229dFy4lbeLvRn61cKinRF%2BQ0iBojQ67plwdjs9kL39So5mxo22yd49Lcp634TeIfYQhAvAaLO9qFB%2FMHt&X-Amz-Signature=fea4397f107c1aeb14e18b74c3caaad86ae93b4eccd5c40e2e1d5ed2485eb069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
