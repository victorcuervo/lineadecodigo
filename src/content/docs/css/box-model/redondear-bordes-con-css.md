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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEBC3OC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIIH%2BXTmlP%2F06dqZ4DtX35hLgEdR3%2FpdBYV1P74mtOgIgEyIrphSVnFQBD5NebVOy8z%2BLjVt4ghKY7D5B8nbk798q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNTIYKqONfTEHxQdAircA5NyUO475Ziz97S0iGl2o8h5R4LqqN0GYZ3RZlI%2BwggrtsGqP3xGnH5qa2JZ%2BYarPqlvM1gNAM96mUPzx6YjLka2wgJ0q1pNJSB8Fgi1E8fq6ZZat9Lk08N7Bim2YoodxkSdR9GV0JI5OK0tU4KH8VwnndI8k7nGCIsQiuIiW7WkNfhCtq9Y%2BuWJxETNlPecAzwAVoQh6ekTqAM0D3UW3ySk0UPvDX1PDQDsLdx2d4Tx4w3TOk8YO2rsanlsLqQcpeoYJZI4sR2ux9tuEqTBYoMjJz16POB7M2hJ1b5rLQxAjcBwcDjCWj2Bn1IanzFuqSBqD3GjnlNQ22EaMkDQj5g66d8fOrhMX0ff2nRoBiWCrL4CXpqmCATPFXwJP84jJVFiSXFuGFYzvTLNSgXntB%2FSobWJaVjv8a9suEqLACOw3LqdOKfs2Mj2Eo4c8a0TiH7m4uGpzLA1MzU8b%2FP1hrZXiebSTq08rJK5COKekk9U%2FOH0yF5doEj1i4HgiPaukYYM4jbEmsK0IC05Z3Ishx64KPApR%2FUeb2JF4XdXPG%2BnAVpYLMkdetdhA3gAMRgfUV10gtPSEU2pBKHLRe7wieTx%2Bvn%2FZD%2BydFr6qpBQ%2FRZrLrp7glS99cmAit87ML6dicoGOqUB9iwMEQD47dx%2F7c%2BX4If2MJHoZA%2BkHuKHMwXhXITyPuVnewkb8mBxxrF280Ukb0pBb33b%2Foztt3eMhBLyPKAU0BjJI30PT93WHmAliK0mvhHvD76pGhD4WejV6BPDFNEbJydg4FmZSnljw2P5LEOm6SQuZWW7QLq%2BONKSQAnmcc0Z9payrM2%2Bs15y8TpnSDR4aa7lW3XVS2rRKB9D%2Fg2XDX%2B0AO9k&X-Amz-Signature=02028df9ed192204361564cb510202476e2466d2a02421beb799f0f3f6efc71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEBC3OC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIIH%2BXTmlP%2F06dqZ4DtX35hLgEdR3%2FpdBYV1P74mtOgIgEyIrphSVnFQBD5NebVOy8z%2BLjVt4ghKY7D5B8nbk798q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNTIYKqONfTEHxQdAircA5NyUO475Ziz97S0iGl2o8h5R4LqqN0GYZ3RZlI%2BwggrtsGqP3xGnH5qa2JZ%2BYarPqlvM1gNAM96mUPzx6YjLka2wgJ0q1pNJSB8Fgi1E8fq6ZZat9Lk08N7Bim2YoodxkSdR9GV0JI5OK0tU4KH8VwnndI8k7nGCIsQiuIiW7WkNfhCtq9Y%2BuWJxETNlPecAzwAVoQh6ekTqAM0D3UW3ySk0UPvDX1PDQDsLdx2d4Tx4w3TOk8YO2rsanlsLqQcpeoYJZI4sR2ux9tuEqTBYoMjJz16POB7M2hJ1b5rLQxAjcBwcDjCWj2Bn1IanzFuqSBqD3GjnlNQ22EaMkDQj5g66d8fOrhMX0ff2nRoBiWCrL4CXpqmCATPFXwJP84jJVFiSXFuGFYzvTLNSgXntB%2FSobWJaVjv8a9suEqLACOw3LqdOKfs2Mj2Eo4c8a0TiH7m4uGpzLA1MzU8b%2FP1hrZXiebSTq08rJK5COKekk9U%2FOH0yF5doEj1i4HgiPaukYYM4jbEmsK0IC05Z3Ishx64KPApR%2FUeb2JF4XdXPG%2BnAVpYLMkdetdhA3gAMRgfUV10gtPSEU2pBKHLRe7wieTx%2Bvn%2FZD%2BydFr6qpBQ%2FRZrLrp7glS99cmAit87ML6dicoGOqUB9iwMEQD47dx%2F7c%2BX4If2MJHoZA%2BkHuKHMwXhXITyPuVnewkb8mBxxrF280Ukb0pBb33b%2Foztt3eMhBLyPKAU0BjJI30PT93WHmAliK0mvhHvD76pGhD4WejV6BPDFNEbJydg4FmZSnljw2P5LEOm6SQuZWW7QLq%2BONKSQAnmcc0Z9payrM2%2Bs15y8TpnSDR4aa7lW3XVS2rRKB9D%2Fg2XDX%2B0AO9k&X-Amz-Signature=a2fea770a1c770ac8dbf481b24be89804ba10779bd1fb14fb0bbe03a316d4634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
