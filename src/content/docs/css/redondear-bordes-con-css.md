---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI2UIEK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCGaNzpp5xEnjFLl6Hpjl526OW6UOR4A9bbCxDgbaZ0XAIgeWuRqtmz0UAKrfGePCfDQKqacNIvMk1SMvZC03SEi9sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDS5ne8FY%2FXWgkf%2BhyrcA8iIwbGBXnP3Yax%2F1MjYr%2B%2FeTwUf7F%2BfNG%2Bb6%2BlWzHtKrSGcxyJnchfGzS3jyfpBtzFfXH5ylujRkrflNXo4BX6UVpQfNDahVMRr6f7c1qbOrl8ZZSFawhvwfgaaAOqxqgGlipi20p83xWssFkUz6ieVqaHw1ekyYKZPvQYiA8CwH6d%2FbedF3JO8x6HsNDlf6zuLtAUv2f708H3L5oRh6nHsl6r5m0UZ90yNf6U%2BWU1Msqz09yzWiydpNFRInhRLYEbqVB7JXrTxyd6xO3hS%2Fb%2BEMPevelAb6kHurjYUbpj8Dh%2FgsMS2liktoaX8HHY2LdHezSeao9FM0BVHQE2EP2ZjQXUoTgf1H8H7fCPiXE1zfn%2BoAorxP%2Fj7A0h1GYVijiKJ1LPUk8ouOXC1wH3dMS7179TnD9Q91IGZB2WFJ1FBshryxey%2Be11SncLyb3hSDEneUqJd%2BM2h6AKFi%2F%2FXka4Jwz6zqf14qQj0KoW4L9U1AnY7WvjzOJofEVHX1JYwhJP8IWtpHSlQuYnsRkGEbac8cirLso4peUYOuxONFXn%2FEtdIcRrb4POFlkPU1jnUcd%2FcoxeA1DdhWGN9bEy5keRAwqSgl7CrBegHarrwa8voPWHBcOpn7xsgSx7QMI3JxckGOqUB8WVVLWJRvRVjFRcy%2BwsWg%2FH6pymHibmgiFvChYs%2B0wjfEE1o9CC6KzITb0oiBX2PDoNJg8N64x6XW3vu10yUEUZ0hZJlNqAMmc5dQyJzQHk%2BVBSHpTF6uA3%2FRlY4MTLCIUv9XgEwMJk9iKROSQQ4o5NStDMaYx79d6eJaj0aeeEosre3pbwlhWJhai5ALPApZS0USCHLQGBZHyE8BiKLG23hgeIU&X-Amz-Signature=d79865a8d15beea1634ccdd2afff14c64eedc61364cf76fa712d661567689105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFI2UIEK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCGaNzpp5xEnjFLl6Hpjl526OW6UOR4A9bbCxDgbaZ0XAIgeWuRqtmz0UAKrfGePCfDQKqacNIvMk1SMvZC03SEi9sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDS5ne8FY%2FXWgkf%2BhyrcA8iIwbGBXnP3Yax%2F1MjYr%2B%2FeTwUf7F%2BfNG%2Bb6%2BlWzHtKrSGcxyJnchfGzS3jyfpBtzFfXH5ylujRkrflNXo4BX6UVpQfNDahVMRr6f7c1qbOrl8ZZSFawhvwfgaaAOqxqgGlipi20p83xWssFkUz6ieVqaHw1ekyYKZPvQYiA8CwH6d%2FbedF3JO8x6HsNDlf6zuLtAUv2f708H3L5oRh6nHsl6r5m0UZ90yNf6U%2BWU1Msqz09yzWiydpNFRInhRLYEbqVB7JXrTxyd6xO3hS%2Fb%2BEMPevelAb6kHurjYUbpj8Dh%2FgsMS2liktoaX8HHY2LdHezSeao9FM0BVHQE2EP2ZjQXUoTgf1H8H7fCPiXE1zfn%2BoAorxP%2Fj7A0h1GYVijiKJ1LPUk8ouOXC1wH3dMS7179TnD9Q91IGZB2WFJ1FBshryxey%2Be11SncLyb3hSDEneUqJd%2BM2h6AKFi%2F%2FXka4Jwz6zqf14qQj0KoW4L9U1AnY7WvjzOJofEVHX1JYwhJP8IWtpHSlQuYnsRkGEbac8cirLso4peUYOuxONFXn%2FEtdIcRrb4POFlkPU1jnUcd%2FcoxeA1DdhWGN9bEy5keRAwqSgl7CrBegHarrwa8voPWHBcOpn7xsgSx7QMI3JxckGOqUB8WVVLWJRvRVjFRcy%2BwsWg%2FH6pymHibmgiFvChYs%2B0wjfEE1o9CC6KzITb0oiBX2PDoNJg8N64x6XW3vu10yUEUZ0hZJlNqAMmc5dQyJzQHk%2BVBSHpTF6uA3%2FRlY4MTLCIUv9XgEwMJk9iKROSQQ4o5NStDMaYx79d6eJaj0aeeEosre3pbwlhWJhai5ALPApZS0USCHLQGBZHyE8BiKLG23hgeIU&X-Amz-Signature=87bc32195a5f2e228820313404b4b7a1d7b0f2ea4193863467fac0df46831cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
