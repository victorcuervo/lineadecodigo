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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644QRDQUP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2e0FXgzHBhafMmgj4KoFioiZhInKYPGD0ElFEtDmsUAiAuaKF5Ur1M%2FFCWbvRt9wXV3l%2BXEuZ02S%2BFOA5BRtT2Nyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMeSBhwEkB50EKQzX0KtwDjU2mZvjlgFYsHrazCmD6Z7lq0C1eaB6K%2BX7Kdou4F%2FJr3zoyXzD%2FBrBhFVanSrLHBhCnKiEu4qPOor1v%2F%2FZf0%2FWNo%2FyHIx%2FQKgyCEby0pZLwb479bAk9JercnfZz1rKCH1c%2BI9WnUU3KJYH%2BAcXMYQJvy0slMweCjIgyeX%2F1jf2LTNuRGsG4U9drIUfXKs7jFQ%2Bgf06QJQrRvo1YP%2BJ4I7eF4w8tWVTwNxPXUBFWoJrpNGus7J1ddHdesSXVSgI3kAH8G9GI9P3omHhADeeD100%2F8BlK%2B4aPoc3cxWCPCr4gTySGZvyzv3dWpvVB5dmwgktDJcwI62%2Fc28dMDg%2FMoT2OQ%2BSBYqNfvwNLzZBS7ZBBYuLu%2F3siqR53aGkimE13d%2FMSoLl%2FjB248Recf3uvObjFiNQFbHahlB13awXn5DucebZv0ZoGHzihIHgZUZIzXwIQpQeVSWkch7r2ZiwYB5s6bRywPdkoKBn3mOHA2DKwN64mqtNqU74im3op1kCFvb%2Fk1OF0xYY7fiFnVV8SYH%2BrRAotu71IGDiQCVECK4MEyeDjrBLJKWSI99Or09OTaDLfIhyus28uVPoslpM9RsKlAy%2Bw58c7h8C%2FQIn4kV9KUmtcqGwInKkSO8wwxZ2JygY6pgEuGOSrm2liT%2FxsxUBLcNgYid3mIojfIebJeADCUa3LStg4%2Fy7%2FzoL0XrLG5HMqpKrWhjJ3zp6sNn98WTOllNDQITsXxsU5YJCllX%2BZE8PD1Tu7cGgcE5SBFt%2FkknnqvBsYMNSKSNeD%2BE4AzxUZp4ZiZMRfsb6M9URS4%2B%2Fb7n9h1AkUvRmpud8bw8mjxLH6OsPKRtLtQ8K2g5ZVok7Y%2FP3xIrp8GFXC&X-Amz-Signature=97a20e7a8f21e825853a6f83bf8bf169393c88dd575dd1922d32ac4eb1fe4301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644QRDQUP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2e0FXgzHBhafMmgj4KoFioiZhInKYPGD0ElFEtDmsUAiAuaKF5Ur1M%2FFCWbvRt9wXV3l%2BXEuZ02S%2BFOA5BRtT2Nyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMeSBhwEkB50EKQzX0KtwDjU2mZvjlgFYsHrazCmD6Z7lq0C1eaB6K%2BX7Kdou4F%2FJr3zoyXzD%2FBrBhFVanSrLHBhCnKiEu4qPOor1v%2F%2FZf0%2FWNo%2FyHIx%2FQKgyCEby0pZLwb479bAk9JercnfZz1rKCH1c%2BI9WnUU3KJYH%2BAcXMYQJvy0slMweCjIgyeX%2F1jf2LTNuRGsG4U9drIUfXKs7jFQ%2Bgf06QJQrRvo1YP%2BJ4I7eF4w8tWVTwNxPXUBFWoJrpNGus7J1ddHdesSXVSgI3kAH8G9GI9P3omHhADeeD100%2F8BlK%2B4aPoc3cxWCPCr4gTySGZvyzv3dWpvVB5dmwgktDJcwI62%2Fc28dMDg%2FMoT2OQ%2BSBYqNfvwNLzZBS7ZBBYuLu%2F3siqR53aGkimE13d%2FMSoLl%2FjB248Recf3uvObjFiNQFbHahlB13awXn5DucebZv0ZoGHzihIHgZUZIzXwIQpQeVSWkch7r2ZiwYB5s6bRywPdkoKBn3mOHA2DKwN64mqtNqU74im3op1kCFvb%2Fk1OF0xYY7fiFnVV8SYH%2BrRAotu71IGDiQCVECK4MEyeDjrBLJKWSI99Or09OTaDLfIhyus28uVPoslpM9RsKlAy%2Bw58c7h8C%2FQIn4kV9KUmtcqGwInKkSO8wwxZ2JygY6pgEuGOSrm2liT%2FxsxUBLcNgYid3mIojfIebJeADCUa3LStg4%2Fy7%2FzoL0XrLG5HMqpKrWhjJ3zp6sNn98WTOllNDQITsXxsU5YJCllX%2BZE8PD1Tu7cGgcE5SBFt%2FkknnqvBsYMNSKSNeD%2BE4AzxUZp4ZiZMRfsb6M9URS4%2B%2Fb7n9h1AkUvRmpud8bw8mjxLH6OsPKRtLtQ8K2g5ZVok7Y%2FP3xIrp8GFXC&X-Amz-Signature=69926ece377ed180148bf32414e15035e98d0c5904edced350de3861936e516f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
