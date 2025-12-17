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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMXP2F6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YaAs04B80oTqmN%2BIBdexGzzNf1%2FASsPpbnqDBQfkhQIhAPjaCObiiUD2ax2d0M6GbOuMdavxZ1t3aNr%2FNUnlGpfnKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy60sCbAZUiwodekZ8q3ANd4FBk2ZX1hwQ5iGDtCeT%2BzZvF00hgytA93VOZOysehcVv6iE3oENpWYpKuilDgG%2B522LbIGEFxjlMbzSkrWIXZ73YYdsjwu9rfpX52qocz83K5RsJtYy933Wy4JrUqV8TUUb55aRAmygLD9ysA06qJcUlXJ%2FIhTHZhd34htkQ3gNvtaMShT9Qbc%2BE%2FqXxMBNh7ghFXAgVYZxnzf27vTnn7ez9Rm72GUaKFtf9PZBpiuGA0%2FUZeYKzpc2YFHj778QBodirgw4nqG5WrwWXfu%2FpIi4HWx%2F44rok4CCLCO%2BSXcAaZKyqwKVf%2F0SxfbeUiy8XGrvRdCLPjJ1slN89kRQF%2F3CDDpmNfYkzaCRhBlZQSVd2M4xnUqR75Bs%2B8PE91mc2r7nwAacP1beZNpLuPdV%2BcXKT84eUTx0Mwxl46k9nPrg2tMPFuM0ebW5XF1SF5tu7lbVSap5I%2BCvSy2SJHvobog%2BDwznKyO9iFWs%2FfdrrZ2%2FDZ4X8KT31rIUt0fi%2BokApC5Ki5z2p%2BWC0BqMyxoCF4u8fUOXSQoViJEJ2gaQBJ0mH3fe1%2BdYmjE2yWB5Gk54PIv0lTkJz8OZHFZs%2BOKqKo3JBQYbwTgyWv2FpI62b0fDx7DF9qY04KiLzOjDvrYzKBjqkAYLxLc%2BK3cmM07ZJ7eq2Z5HJWXHtZAp6RLWaIQfn7fMWu0K0IwxcWCpqs%2BUfL0ZYurKLCjHOaRxIC1FVCFSE0%2FVBVEyaRrLEBq2hOwpWiSBWD6lgIS8HRPcj0N%2BRSNFBKhumEyI0DODdIH1vY3e%2BOQN0Wb20r2BYQh6GVkNjD9vhfgzQFi68zDnsgvIdRUNzfLNexK6PrBWnsx8y9vv%2Bgcfpl2JV&X-Amz-Signature=33f45b0e8efdb3c1726103695905507ed104f0055d414e4f0a17e556cee302d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMXP2F6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1YaAs04B80oTqmN%2BIBdexGzzNf1%2FASsPpbnqDBQfkhQIhAPjaCObiiUD2ax2d0M6GbOuMdavxZ1t3aNr%2FNUnlGpfnKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy60sCbAZUiwodekZ8q3ANd4FBk2ZX1hwQ5iGDtCeT%2BzZvF00hgytA93VOZOysehcVv6iE3oENpWYpKuilDgG%2B522LbIGEFxjlMbzSkrWIXZ73YYdsjwu9rfpX52qocz83K5RsJtYy933Wy4JrUqV8TUUb55aRAmygLD9ysA06qJcUlXJ%2FIhTHZhd34htkQ3gNvtaMShT9Qbc%2BE%2FqXxMBNh7ghFXAgVYZxnzf27vTnn7ez9Rm72GUaKFtf9PZBpiuGA0%2FUZeYKzpc2YFHj778QBodirgw4nqG5WrwWXfu%2FpIi4HWx%2F44rok4CCLCO%2BSXcAaZKyqwKVf%2F0SxfbeUiy8XGrvRdCLPjJ1slN89kRQF%2F3CDDpmNfYkzaCRhBlZQSVd2M4xnUqR75Bs%2B8PE91mc2r7nwAacP1beZNpLuPdV%2BcXKT84eUTx0Mwxl46k9nPrg2tMPFuM0ebW5XF1SF5tu7lbVSap5I%2BCvSy2SJHvobog%2BDwznKyO9iFWs%2FfdrrZ2%2FDZ4X8KT31rIUt0fi%2BokApC5Ki5z2p%2BWC0BqMyxoCF4u8fUOXSQoViJEJ2gaQBJ0mH3fe1%2BdYmjE2yWB5Gk54PIv0lTkJz8OZHFZs%2BOKqKo3JBQYbwTgyWv2FpI62b0fDx7DF9qY04KiLzOjDvrYzKBjqkAYLxLc%2BK3cmM07ZJ7eq2Z5HJWXHtZAp6RLWaIQfn7fMWu0K0IwxcWCpqs%2BUfL0ZYurKLCjHOaRxIC1FVCFSE0%2FVBVEyaRrLEBq2hOwpWiSBWD6lgIS8HRPcj0N%2BRSNFBKhumEyI0DODdIH1vY3e%2BOQN0Wb20r2BYQh6GVkNjD9vhfgzQFi68zDnsgvIdRUNzfLNexK6PrBWnsx8y9vv%2Bgcfpl2JV&X-Amz-Signature=5947ef16c6f727659ef750ac99fe50e0a090770fa493acdee56786776344c23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
