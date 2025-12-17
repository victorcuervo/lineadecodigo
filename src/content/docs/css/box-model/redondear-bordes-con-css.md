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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424L5O7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG3ZQo%2Bcyv1pDw5yG4UVSdd%2FAkr5zgv8YuNisIXBhGbAiAZ0RTdsLKdYDHbwGE9dpoh27tkboEC%2Bs8NvAlPefIh%2FSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMJ444G257R9xYc1BbKtwDP0S6%2BuOQleV7vHiFjJ%2FAgcVIUhNgmGdtEiWo6j0ZDycmwSOU9Sauq6sJrq7XYCJERGV6NAh%2F%2FhBvugRRTB07hwjNMnrN8AAp3nwppikZVKqB%2FKUQS0vFs4hS5ttNBUPb07pG%2BI%2FBRq7Be2M0q1FlQQCY3E4Qn3jp3jUNEEQmrYNVZqUZjl8ESgibmvhpC1umoYmR%2FruB7fQiT4efIvo12HcM8yKsB9Mq0pPjbF2tNJ9luk3wchOdhNwH32kasNIg%2FNQMM6e0sz0fyekHrQVhH2MEVV%2F1i9JPeRuS9k1xxnVnzH8EbNKnxzKE%2Bl640J6fF5IncPH4o3hEuwtAhlc5y7p07qBcINtR7094iy8ZMZ67CgTyLGtUlJ7KQzKwBUpVDQbvo4SQ%2FCae%2FJ5PqVfS3GWMqudWzr6EImheMe0KFqGKUDJlSkoxDoCC4Nfkra1GR5%2FBpfbtCmC3z323LToyGk6KYshILUNxzywGskfpLcJW1uimkvBO5t1vnN%2BgYZZ2cEQ97nMxr2yA5BbAik3wEymfAOa7U6afmbdbz4NuC8luHK4K5FMqLX6ARhfjPNx%2FQPnIrLvB9600oc5HYJZo7Ua0ce35UU%2FCn4x4BEAI7j8Q0qGxidfS%2FadEBzgw8sWKygY6pgGQCUH2N0ru90zu2zaE1KeZZutJHBJ4ifLJ4cda8yxH6EsyhfnFJhgZSAYP1iUQ0XbGBQGPypY15zEBeqA1%2FTLYbtjyLWsf98VGtlae9o73BpAgW6cIZsJdjnz3H8fLhK9qJhwW2uNExiZ9%2B25JVRC7UWpG%2BLGDPsdWPU9du8%2FJScTQ43e%2BjsjMPc5zFkjQVIQvR%2B791yCCax3vENpTD8AJq9IhzgEy&X-Amz-Signature=c1fd6685e7b698d3bd2c8e5e10c03190fd69a7959af1a8d85369b4ec8c59d5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424L5O7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFG3ZQo%2Bcyv1pDw5yG4UVSdd%2FAkr5zgv8YuNisIXBhGbAiAZ0RTdsLKdYDHbwGE9dpoh27tkboEC%2Bs8NvAlPefIh%2FSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMJ444G257R9xYc1BbKtwDP0S6%2BuOQleV7vHiFjJ%2FAgcVIUhNgmGdtEiWo6j0ZDycmwSOU9Sauq6sJrq7XYCJERGV6NAh%2F%2FhBvugRRTB07hwjNMnrN8AAp3nwppikZVKqB%2FKUQS0vFs4hS5ttNBUPb07pG%2BI%2FBRq7Be2M0q1FlQQCY3E4Qn3jp3jUNEEQmrYNVZqUZjl8ESgibmvhpC1umoYmR%2FruB7fQiT4efIvo12HcM8yKsB9Mq0pPjbF2tNJ9luk3wchOdhNwH32kasNIg%2FNQMM6e0sz0fyekHrQVhH2MEVV%2F1i9JPeRuS9k1xxnVnzH8EbNKnxzKE%2Bl640J6fF5IncPH4o3hEuwtAhlc5y7p07qBcINtR7094iy8ZMZ67CgTyLGtUlJ7KQzKwBUpVDQbvo4SQ%2FCae%2FJ5PqVfS3GWMqudWzr6EImheMe0KFqGKUDJlSkoxDoCC4Nfkra1GR5%2FBpfbtCmC3z323LToyGk6KYshILUNxzywGskfpLcJW1uimkvBO5t1vnN%2BgYZZ2cEQ97nMxr2yA5BbAik3wEymfAOa7U6afmbdbz4NuC8luHK4K5FMqLX6ARhfjPNx%2FQPnIrLvB9600oc5HYJZo7Ua0ce35UU%2FCn4x4BEAI7j8Q0qGxidfS%2FadEBzgw8sWKygY6pgGQCUH2N0ru90zu2zaE1KeZZutJHBJ4ifLJ4cda8yxH6EsyhfnFJhgZSAYP1iUQ0XbGBQGPypY15zEBeqA1%2FTLYbtjyLWsf98VGtlae9o73BpAgW6cIZsJdjnz3H8fLhK9qJhwW2uNExiZ9%2B25JVRC7UWpG%2BLGDPsdWPU9du8%2FJScTQ43e%2BjsjMPc5zFkjQVIQvR%2B791yCCax3vENpTD8AJq9IhzgEy&X-Amz-Signature=2be8d4b88d50b5ddcca15532063e8abeffb01e2ddd34bf684ed37c4827f00635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
