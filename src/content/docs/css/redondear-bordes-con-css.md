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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E46BEA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVf2W6Cd9woPpiC%2Bq%2F5vhXaEB0HPNjbjJ07jBMkAiPBAiAJl8J06o%2BMfiBuIavau9CQqNFrx0gLhGCuw6EQtGQghir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9%2B4i7i9lNEHfmP1fKtwDU3tmw%2BRaNCq4yQ%2BSeQ%2BokRUNHwQaRs%2BTJn3gax%2BiauDuw8Wv8rVcJ6MVeyzLA75T2O4H%2F4AdktlYiVH7ULv4mIySNxrp54wiNavhEABUq7UquP7xGh9S6zlGrm2MTebZPmH8Lo020yCXT43y9o6Z8aj0wd9nO16Ds99sri%2BXLKpB6XjAytVznCe49VKc0ZCyGU7fgnAEx6DUeUgLq5lBKkerTXi3aMMWxgQtkWWKbR6u9dW%2B3Jc20rZsur6D71RNd5%2F8KfPLZsLONMB6FHojiFVTZt1oOmRE3P7aMANorz2SLvbSE3GqzTPCM2ELwXihep%2BaJSTyjht%2FYJ6Op8zBpKZB9LUBJmDTSoJ4bwSJdK5Y4IodFxN4pfrIWkIiLs0JwnC%2BiT%2FNl%2Bp7E1HQOWRi6bgKVxyjoxsh0xCXk0h74hBb3SRWhvZgHUZxoMhw39gV1P9PR0tlsWRanmYqIIwo%2FtcvufzETDAYqcVN%2BXVwUygHoNNVa37IXyGKvEuBsGTo8t54bf2e%2FJiqHV04zIZPnHPbTbUXTJq7onrEWxWmNWiUWNuQf8t5pY6M6wLYekxYDemlq3AaV8Dv2xFVyKtaCmhpZQUmr5X9g06kWc1J11p5b5e%2B8IfIFFdgUoAwu6bQyQY6pgFosl3EYrB6%2BolpSSCdWKC%2BZqBq%2FD67Ez0YWtpws%2B9XXmJuMrwenMTSlxE%2FXKBvifsueCJ%2B7D1OlYg7Dk2yOF6DXQVjpwLdmASwoSAAuN470UWjB0%2BmbL5BepYY73JT4mpocxe%2BdJfPUaCfPn5ebVccO7Iy5wdTqf870qu4YZfnpmtZmv8vVlMNI7YiI%2F1Ja3%2BnK9snSucEUwnETpJdG3OlhzgKtsEj&X-Amz-Signature=9fd4d1a01ed7abddf606126b46d261fce29b2ce5b99ebe83a4fe85cebb36af95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662E46BEA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVf2W6Cd9woPpiC%2Bq%2F5vhXaEB0HPNjbjJ07jBMkAiPBAiAJl8J06o%2BMfiBuIavau9CQqNFrx0gLhGCuw6EQtGQghir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9%2B4i7i9lNEHfmP1fKtwDU3tmw%2BRaNCq4yQ%2BSeQ%2BokRUNHwQaRs%2BTJn3gax%2BiauDuw8Wv8rVcJ6MVeyzLA75T2O4H%2F4AdktlYiVH7ULv4mIySNxrp54wiNavhEABUq7UquP7xGh9S6zlGrm2MTebZPmH8Lo020yCXT43y9o6Z8aj0wd9nO16Ds99sri%2BXLKpB6XjAytVznCe49VKc0ZCyGU7fgnAEx6DUeUgLq5lBKkerTXi3aMMWxgQtkWWKbR6u9dW%2B3Jc20rZsur6D71RNd5%2F8KfPLZsLONMB6FHojiFVTZt1oOmRE3P7aMANorz2SLvbSE3GqzTPCM2ELwXihep%2BaJSTyjht%2FYJ6Op8zBpKZB9LUBJmDTSoJ4bwSJdK5Y4IodFxN4pfrIWkIiLs0JwnC%2BiT%2FNl%2Bp7E1HQOWRi6bgKVxyjoxsh0xCXk0h74hBb3SRWhvZgHUZxoMhw39gV1P9PR0tlsWRanmYqIIwo%2FtcvufzETDAYqcVN%2BXVwUygHoNNVa37IXyGKvEuBsGTo8t54bf2e%2FJiqHV04zIZPnHPbTbUXTJq7onrEWxWmNWiUWNuQf8t5pY6M6wLYekxYDemlq3AaV8Dv2xFVyKtaCmhpZQUmr5X9g06kWc1J11p5b5e%2B8IfIFFdgUoAwu6bQyQY6pgFosl3EYrB6%2BolpSSCdWKC%2BZqBq%2FD67Ez0YWtpws%2B9XXmJuMrwenMTSlxE%2FXKBvifsueCJ%2B7D1OlYg7Dk2yOF6DXQVjpwLdmASwoSAAuN470UWjB0%2BmbL5BepYY73JT4mpocxe%2BdJfPUaCfPn5ebVccO7Iy5wdTqf870qu4YZfnpmtZmv8vVlMNI7YiI%2F1Ja3%2BnK9snSucEUwnETpJdG3OlhzgKtsEj&X-Amz-Signature=a8dcf7161f7544d24573fb2386de77a80f236d888838513c7e57b4cd9a4368ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
