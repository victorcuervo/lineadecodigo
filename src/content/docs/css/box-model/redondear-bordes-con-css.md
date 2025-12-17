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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFNDEE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTYlNDAJP%2FP6JPUX9xw6tgy8ffim0L6JqAujY3B7C3MAiBewPN%2FsvfFFk4c67fAYFwWv%2FqrPJzKepKWkyDFXDwbvSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM5%2Brj7i4txNtuGmU1KtwD6A76lur0Ui7Rdw1qjpXnIjNX%2FN8GD5pMrBw%2BhYEZ0zMopcNOVR1b8%2Fs1TtUQfzkiKcBGKVB8oH1YpI%2FTw1aB%2FLvDmxmzJoeEXVXLPZ8loEHmjss88k4u%2FTc7rH6li0RQDk98SjCrxmYQWttIUkVl68Vn4%2Fbc2%2FfJM7LYK7IB5ATmmzwr2hTPYDUAzWPDgzCPWeXcYBY8t5E8fnWFWP3DUJQOtOn0%2FDdkfoT%2Btdaus9%2FDmYdp6dlJh3LCHhztgZxCpQ%2FD5zyKZCp7Sujs7GuIpBv5RZp%2B8ntitCgV7H7g1ohQDEZJQ%2F6gbKyBzGqp4rWIuf6fDbdqVilRZV6%2BD%2F1msz3QpE20yP7sHPuFuLkilr5w1JM5LgWzBH77jj99h1z%2BV%2BzGiBuVO1rsNRiu33CJqDxubXmh15oBzlRFkkjEjk%2ByUbgMG2k%2BQaumhCMk1E0FkvTrnq2n2pFnu00nItAaXVuzTBLqeMpTC3Uloymu%2FHeqiC4tT9IqGmpv6Xw%2BfQZ1srWMCqs9%2FNZM8sIeSOAZyE6bRQqRVttFZk4sWfUMlsFAoKmC8fHGNULDL2%2BbQuWu%2Fvpjck%2F00ykUzmXX7gytgriDDfQRIuqXZlMoIDk9Xw52ObsKBy8KFCfpD%2FEwuMaKygY6pgGGD2eeb5C7wKHlL1zCbCzVuO6RlzT9JScM0dZd2wW3C2%2Bk%2FmeuMaWuDdGgVZcqKUfd5YKJ%2FJlSAT86wiX3b3WYT4s%2FNGPjJ9LueXXRYhIZa8FIxg%2FRDCX%2Bqa%2F5jEFP1gJlXw%2Bv9uQWYj6h9X5osBhN5xJbeGAKQ%2Bnq0Qt6ERKw7hHDe6YQVKcaOrS6qO4%2BG7SFivtWSJEtFVLLpSzhzQnT5RuYRqMz&X-Amz-Signature=eb0f38f046bafa3c0d1b61014bf0358f2d07f5a33007e0d4b5a58f9293860e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFNDEE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTYlNDAJP%2FP6JPUX9xw6tgy8ffim0L6JqAujY3B7C3MAiBewPN%2FsvfFFk4c67fAYFwWv%2FqrPJzKepKWkyDFXDwbvSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM5%2Brj7i4txNtuGmU1KtwD6A76lur0Ui7Rdw1qjpXnIjNX%2FN8GD5pMrBw%2BhYEZ0zMopcNOVR1b8%2Fs1TtUQfzkiKcBGKVB8oH1YpI%2FTw1aB%2FLvDmxmzJoeEXVXLPZ8loEHmjss88k4u%2FTc7rH6li0RQDk98SjCrxmYQWttIUkVl68Vn4%2Fbc2%2FfJM7LYK7IB5ATmmzwr2hTPYDUAzWPDgzCPWeXcYBY8t5E8fnWFWP3DUJQOtOn0%2FDdkfoT%2Btdaus9%2FDmYdp6dlJh3LCHhztgZxCpQ%2FD5zyKZCp7Sujs7GuIpBv5RZp%2B8ntitCgV7H7g1ohQDEZJQ%2F6gbKyBzGqp4rWIuf6fDbdqVilRZV6%2BD%2F1msz3QpE20yP7sHPuFuLkilr5w1JM5LgWzBH77jj99h1z%2BV%2BzGiBuVO1rsNRiu33CJqDxubXmh15oBzlRFkkjEjk%2ByUbgMG2k%2BQaumhCMk1E0FkvTrnq2n2pFnu00nItAaXVuzTBLqeMpTC3Uloymu%2FHeqiC4tT9IqGmpv6Xw%2BfQZ1srWMCqs9%2FNZM8sIeSOAZyE6bRQqRVttFZk4sWfUMlsFAoKmC8fHGNULDL2%2BbQuWu%2Fvpjck%2F00ykUzmXX7gytgriDDfQRIuqXZlMoIDk9Xw52ObsKBy8KFCfpD%2FEwuMaKygY6pgGGD2eeb5C7wKHlL1zCbCzVuO6RlzT9JScM0dZd2wW3C2%2Bk%2FmeuMaWuDdGgVZcqKUfd5YKJ%2FJlSAT86wiX3b3WYT4s%2FNGPjJ9LueXXRYhIZa8FIxg%2FRDCX%2Bqa%2F5jEFP1gJlXw%2Bv9uQWYj6h9X5osBhN5xJbeGAKQ%2Bnq0Qt6ERKw7hHDe6YQVKcaOrS6qO4%2BG7SFivtWSJEtFVLLpSzhzQnT5RuYRqMz&X-Amz-Signature=69ccd2cc272781ec0b0d3a267543d45526ff326b0171b5715d52fc4bedfd5d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
