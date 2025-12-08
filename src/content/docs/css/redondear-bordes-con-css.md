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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMSELLS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjEXFelVapWxFvv1THiRf8uL8pF221zq7c8408h2o4dQIgLXuCvZI0Yucrd%2BcllIA6mGyUVK0ijc8LFwDk7I6veJUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9q4eAqTt02qY15qCrcA6NFBU%2BDx%2BCtZiMw%2FYF9OFiWkc94javGMKXF0w6gCwuhSvSTIpL1fwFIeY04N%2Fy7HbTU8JOzzG2VLM1stktf%2BpcTIATEZtjBGkDq6qmeYDnP7jYziRVyQweSv3xCEDPYkXZtTE86dDYw6dD4gBn5y8GLE6IqIKqTjgPO0zvIAB5K%2FGVjv3drp4aB1kyXNcOpjsMTDP7wNDZKNdLrsCMDNxUhhaZ3yt2Ltl%2Fz3%2B6%2FLqJBXpCbxZOfDyioQuPuoE%2Bz4YXDsa%2FHN%2BSt7xN6S14vsYPT7EmKiQxn8cmZudzYnadCRtSF2oo%2FLS1WcTVXj%2BTULBziPOWmI%2FldcIR1ZJ%2FAsFOvpHAx2duzPnYuHvdffqKtCgrniisNzTEMZ6zIxn4wWhnPbs43ppvpCkr%2BS2Jn9JzdJ%2FkaSVTcVPilGvwGaib82vK3GsMqV2wszIodBXNeclQ%2Fw%2FRTwSz%2FohAS5h7Xax0MsUlNTZleWKublf6ttxVX330sqcaIBT5nndhCKCIwavJay3bHXAiftC0Pc0gqdKxWN5559b5pJdiRUMQuKBNGNw4eOKu0FrnPZGDFX6nZK4zHmmHQZUMx8Q8RQ9mB1g8ukOtxaCdcSPLF2bO6dFJs0h3SArr9I5wzoPBGMIHu2ckGOqUB5cxRSBuMH9K81u2WXv6PrjHbDW2jSE07qwU90u%2Fp%2F3qCqTAi8LQfo06jSm5y03EroN47Jqkh%2Btd42sdaAHOz4ztVeq%2FqWNaTLsDDmYZEDzrGygWFsOZfcLThrhsrTLREiPgB%2F0M1xswXxNiw2YSAnk%2F5G%2B0mBVxtpXOuLoNI3DIQ9pl3X%2FNkodT0aU6Rm0wfE9AiEVTJopGf%2Bh69JJgUdW1lmbcZ&X-Amz-Signature=4a3435db962079de20c46737f5fb6b365255c8d3ec009de0fba256bbd58e7287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMSELLS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjEXFelVapWxFvv1THiRf8uL8pF221zq7c8408h2o4dQIgLXuCvZI0Yucrd%2BcllIA6mGyUVK0ijc8LFwDk7I6veJUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9q4eAqTt02qY15qCrcA6NFBU%2BDx%2BCtZiMw%2FYF9OFiWkc94javGMKXF0w6gCwuhSvSTIpL1fwFIeY04N%2Fy7HbTU8JOzzG2VLM1stktf%2BpcTIATEZtjBGkDq6qmeYDnP7jYziRVyQweSv3xCEDPYkXZtTE86dDYw6dD4gBn5y8GLE6IqIKqTjgPO0zvIAB5K%2FGVjv3drp4aB1kyXNcOpjsMTDP7wNDZKNdLrsCMDNxUhhaZ3yt2Ltl%2Fz3%2B6%2FLqJBXpCbxZOfDyioQuPuoE%2Bz4YXDsa%2FHN%2BSt7xN6S14vsYPT7EmKiQxn8cmZudzYnadCRtSF2oo%2FLS1WcTVXj%2BTULBziPOWmI%2FldcIR1ZJ%2FAsFOvpHAx2duzPnYuHvdffqKtCgrniisNzTEMZ6zIxn4wWhnPbs43ppvpCkr%2BS2Jn9JzdJ%2FkaSVTcVPilGvwGaib82vK3GsMqV2wszIodBXNeclQ%2Fw%2FRTwSz%2FohAS5h7Xax0MsUlNTZleWKublf6ttxVX330sqcaIBT5nndhCKCIwavJay3bHXAiftC0Pc0gqdKxWN5559b5pJdiRUMQuKBNGNw4eOKu0FrnPZGDFX6nZK4zHmmHQZUMx8Q8RQ9mB1g8ukOtxaCdcSPLF2bO6dFJs0h3SArr9I5wzoPBGMIHu2ckGOqUB5cxRSBuMH9K81u2WXv6PrjHbDW2jSE07qwU90u%2Fp%2F3qCqTAi8LQfo06jSm5y03EroN47Jqkh%2Btd42sdaAHOz4ztVeq%2FqWNaTLsDDmYZEDzrGygWFsOZfcLThrhsrTLREiPgB%2F0M1xswXxNiw2YSAnk%2F5G%2B0mBVxtpXOuLoNI3DIQ9pl3X%2FNkodT0aU6Rm0wfE9AiEVTJopGf%2Bh69JJgUdW1lmbcZ&X-Amz-Signature=01369419fbf01e663e4b45320ecf1e2010e0920e4ced8ea0ec891f468cebaaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
