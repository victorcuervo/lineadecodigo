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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z43RG7WH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEb38QjHkSmlJ%2FDAAUXGja8P0r%2BvtT1qZ%2B8KPkZ1zKwyAiEAltsGkXywRjlQP1XGZ2ovfgPlcmAYRPYdM86Kmp5tBpIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqrPS90Qw8alsqNIircAyeh6o%2B3ZfDzQzFzoJWS36l0IwFgbg2B%2BuOQv%2Feeq5TPKe5XtEXnnV2z%2FiPsSkU1my3J4LPBlVrsUbmf55STGW2bZqveaAElqUDelFTv8PpS%2Br0NLXpgdbrHQ9x9Z8xpzqTVLLuzjihaYSJzNYknjruShSs8rwXorLdbyaav1RueTgpJQB%2BZg3TUiHZwdpc7ozFeiaF1PAgfVJLZ%2FCeuETa1UnhBQtmawmL4ue9G3fXJD3Eu3VwerDc6S77HtNuBq%2BeTx%2Bdcrv4yd2CO1BnGdPv2OSWXXTxCWVs5D7NizUIANwl6hDnqa4cLvqL81sb6aVlFJTnAhCJEdwogFUzSo800eWNM%2BARGNWRxx9deOtOOWz5M94UAwy2h87Z2weP54%2FopAxb%2BS%2FWUhPfPkRikBm9fF3dCM39iP0glP6JlKTZfMLTwOB4y74wDzPPQn8Vq7UHaUW9nhTa3Uf0kGfyX5gCmK%2FiChbK7uAswZ3xINX%2F8VJ0Z1bW6PfYC1h0%2Fe5fZuqdsSQvYzVDcDLrulMoHapYjF%2FjgOKItAoXJnO2%2F5NOH%2FEpgxY7dDrTsqSWqQQS85ZyUNg3PBgV1BPM6sSvmXxfStpq8gUYwMevLZKU2M2ULrL0i7bH1ZfYRl6IVMKui1MkGOqUBoIbXbCYlzl0WRaNkxLgFn6L9bsfMHCdEYlz13t%2BRcM6DgJ2380YBJWeUxOlmIKAmff2KK3gZD6a%2FJ6IoCjPYHZHQfNVYW6Qwm%2BxGRa0S7a%2FIJK%2BLSwoFoKjXN8tTdc%2BZwbFCs0%2FOxs8k0dN051iGOP8GDIKO%2FROSZqS7DmgzwJythbHc3tZp0PcES5Mr65e%2FdHO3Dqhp8m1I2QbfT%2FKWqMQZBM3m&X-Amz-Signature=a5cc8aa4449617d280940f471414030c5f72bde635d4c7606e1416e1d7832382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z43RG7WH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEb38QjHkSmlJ%2FDAAUXGja8P0r%2BvtT1qZ%2B8KPkZ1zKwyAiEAltsGkXywRjlQP1XGZ2ovfgPlcmAYRPYdM86Kmp5tBpIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqrPS90Qw8alsqNIircAyeh6o%2B3ZfDzQzFzoJWS36l0IwFgbg2B%2BuOQv%2Feeq5TPKe5XtEXnnV2z%2FiPsSkU1my3J4LPBlVrsUbmf55STGW2bZqveaAElqUDelFTv8PpS%2Br0NLXpgdbrHQ9x9Z8xpzqTVLLuzjihaYSJzNYknjruShSs8rwXorLdbyaav1RueTgpJQB%2BZg3TUiHZwdpc7ozFeiaF1PAgfVJLZ%2FCeuETa1UnhBQtmawmL4ue9G3fXJD3Eu3VwerDc6S77HtNuBq%2BeTx%2Bdcrv4yd2CO1BnGdPv2OSWXXTxCWVs5D7NizUIANwl6hDnqa4cLvqL81sb6aVlFJTnAhCJEdwogFUzSo800eWNM%2BARGNWRxx9deOtOOWz5M94UAwy2h87Z2weP54%2FopAxb%2BS%2FWUhPfPkRikBm9fF3dCM39iP0glP6JlKTZfMLTwOB4y74wDzPPQn8Vq7UHaUW9nhTa3Uf0kGfyX5gCmK%2FiChbK7uAswZ3xINX%2F8VJ0Z1bW6PfYC1h0%2Fe5fZuqdsSQvYzVDcDLrulMoHapYjF%2FjgOKItAoXJnO2%2F5NOH%2FEpgxY7dDrTsqSWqQQS85ZyUNg3PBgV1BPM6sSvmXxfStpq8gUYwMevLZKU2M2ULrL0i7bH1ZfYRl6IVMKui1MkGOqUBoIbXbCYlzl0WRaNkxLgFn6L9bsfMHCdEYlz13t%2BRcM6DgJ2380YBJWeUxOlmIKAmff2KK3gZD6a%2FJ6IoCjPYHZHQfNVYW6Qwm%2BxGRa0S7a%2FIJK%2BLSwoFoKjXN8tTdc%2BZwbFCs0%2FOxs8k0dN051iGOP8GDIKO%2FROSZqS7DmgzwJythbHc3tZp0PcES5Mr65e%2FdHO3Dqhp8m1I2QbfT%2FKWqMQZBM3m&X-Amz-Signature=3439c1b0addb104cc39a8ec7ec1ee662d2eb98d5ea0991a561d31ce7463ce257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
