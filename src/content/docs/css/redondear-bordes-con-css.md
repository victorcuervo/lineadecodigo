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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETR7CA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUS95q7ONgwhAfCdl949xDTalS4kH7v3Yl4OvbTl7c6AiEAp020sfwALuX243eemSnujUx0fM6H1bjz21WLldrq%2BIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAQJAVikDFvmTvIbtSrcA8woyuFTadGMlxpJomN2JN6X%2BGuJTCAVpFa9GocQLgCoyxKr5EoLM2clJ8sMGhJJ1DTrcG6aSoThScIB7hZat5%2Fdt5DDt1vt%2BLGnYZv0ofIbvCYz1qFCTUXn6QPAP%2BW5u0f4rlyG3X%2FzonUR5v8pHmew8rU4v3ShrxmUG6DGnYFgZuDO2u04w2cndFMN1%2Bc%2BnMe41tO4S9n%2FOU4q0Tixm4z%2BueWxI8boWtbnub9GUloXo9oU26pSB5RA1bgc2P438hr01fQ6d4ihs9c42lrWWLs7X2jv798GWQ908p611KGJEPmR4oIkPqX84HuHy4mtvCJ%2F7Z2zMOdyeZuFiVqu9hg7%2F5j%2B%2BiStHTxpB3bkxbjFfuS3gxwWxS7LjeqK3Zy6a2tuEu4IkNiB%2B44EZPTWILEm6Cbxqwyj2V75CUL4rM%2FdcfSq3GwUzYm4QVAjtgZUpZTZSz4klcO9%2Fjn%2Bkg9NNDuh9wRayAUCiPBnToBkcRplkwNK9yuHKJqrhKVLuEJCcBLkPezJIkudaJ5dRUDl0aEwH%2Bx0QHxtPYlzAi%2F8yYgA3zUK2sqicLM%2B6Xwpm%2BwCjSGSgS3%2FawvdYmpKAn%2F0bVi%2B0QBIE6HqHdKma2upNFt3BReOeXYfKQBJreb9MPOryckGOqUBrp2TVBwKrWXX9j8kRpcjnOEy5Zl8LSyPc2JvMgEsZs8oHqtqABA3LJiUZC%2BAauJxYWapaVmamHSwhz6VQNRl4EaRjqwCff2HMy7rT4k2%2FxC4%2BXigtadVytWNRGz4rBYerc2xsNH%2FiCA3mIVGXW1XBNPLzLJ%2B6uyJRxdrdh7tpt%2BG2%2BB5pTz%2B496T6kIzwriiDTbY%2BYxWHFw2VI327STV5Lk8KFYE&X-Amz-Signature=fda342809f4e7b6285398a73aa7f876d9d2824d3950c19764fff2b6c6ea2dcdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETR7CA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUS95q7ONgwhAfCdl949xDTalS4kH7v3Yl4OvbTl7c6AiEAp020sfwALuX243eemSnujUx0fM6H1bjz21WLldrq%2BIEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAQJAVikDFvmTvIbtSrcA8woyuFTadGMlxpJomN2JN6X%2BGuJTCAVpFa9GocQLgCoyxKr5EoLM2clJ8sMGhJJ1DTrcG6aSoThScIB7hZat5%2Fdt5DDt1vt%2BLGnYZv0ofIbvCYz1qFCTUXn6QPAP%2BW5u0f4rlyG3X%2FzonUR5v8pHmew8rU4v3ShrxmUG6DGnYFgZuDO2u04w2cndFMN1%2Bc%2BnMe41tO4S9n%2FOU4q0Tixm4z%2BueWxI8boWtbnub9GUloXo9oU26pSB5RA1bgc2P438hr01fQ6d4ihs9c42lrWWLs7X2jv798GWQ908p611KGJEPmR4oIkPqX84HuHy4mtvCJ%2F7Z2zMOdyeZuFiVqu9hg7%2F5j%2B%2BiStHTxpB3bkxbjFfuS3gxwWxS7LjeqK3Zy6a2tuEu4IkNiB%2B44EZPTWILEm6Cbxqwyj2V75CUL4rM%2FdcfSq3GwUzYm4QVAjtgZUpZTZSz4klcO9%2Fjn%2Bkg9NNDuh9wRayAUCiPBnToBkcRplkwNK9yuHKJqrhKVLuEJCcBLkPezJIkudaJ5dRUDl0aEwH%2Bx0QHxtPYlzAi%2F8yYgA3zUK2sqicLM%2B6Xwpm%2BwCjSGSgS3%2FawvdYmpKAn%2F0bVi%2B0QBIE6HqHdKma2upNFt3BReOeXYfKQBJreb9MPOryckGOqUBrp2TVBwKrWXX9j8kRpcjnOEy5Zl8LSyPc2JvMgEsZs8oHqtqABA3LJiUZC%2BAauJxYWapaVmamHSwhz6VQNRl4EaRjqwCff2HMy7rT4k2%2FxC4%2BXigtadVytWNRGz4rBYerc2xsNH%2FiCA3mIVGXW1XBNPLzLJ%2B6uyJRxdrdh7tpt%2BG2%2BB5pTz%2B496T6kIzwriiDTbY%2BYxWHFw2VI327STV5Lk8KFYE&X-Amz-Signature=4e2062b4f5c1d79b9b23e3c9a4e79f1d95417769ff0deb1dfedb93147cbdad76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
