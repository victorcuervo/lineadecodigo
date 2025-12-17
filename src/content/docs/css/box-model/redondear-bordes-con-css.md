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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIMDUI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZYso%2F2sumBkJ71uQGNn5ZEekD96RMoTv%2BIN9DkIN9qQIgASIYfxkjh0W47OY53nhsSfGRmG1cORXRLCSH0TWEX8Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDYqkc4USENZG3PQUyrcAz2HfZtfC16Q7ppJihGYDUaYU76V%2FuLv%2Blnb%2BSgF5nqOF36MmT%2BAO228LhTpb2hw1uZojKw3H5w9vblFJHksE3fTPuDmqHTpwnmZs5L3g2M%2F9SCh3QLee2bIzXI4Pxk6nko%2FmEzrb%2BGKh96IKHKgb2TTnkmt5OhAevQBz3MASGgNLj70f5HRT98SY2f9jVOyGaLi0CCUfj0yS6IHeYBKC9LBrBcrNhjI6x5A8%2FUjjC3hYpv7XbR14cnFEtwkS7OfIKHFu8jCDyvPTpOblftYq8j41zxSELsep%2BTulPl5tgwgI%2BQ%2BC1ethnmjXfg3BAdHMZRy74xmVag5NBmg3KYlhxufqYa7NlsZJKr5Dg6OVJb3YCtrhAx5mXNgHX9hPDqyobof9knS5otno%2BZYPyx5R118ni6xngK3xArcKIgHVZtKGQjwiPrV83s8cespB%2B4OQrD3HCzuA9ekftLAmwb2oTNNgg3otme0YPvCEskSvVd0W85pqyzIJGmsz52zhq2qCC4%2FsPtU8RYVuzYBqiV%2Fi%2BJgKa%2B51q2xrL8nSwfQQgb0jRcJR3zDJD492%2FVzbiw4hCnYBRWwJL6xkuB7UVDoThBRHCVJirKhFh%2BybdKkz525jyzElEW%2F%2BOCKh4GPMMerisoGOqUBFgXKz%2FPnUxHuiutwagB9uD%2BH%2FTgh%2FvzTBXHEdH%2FbDXCi6TPiPjUensT6ktrUkYS8ouPZxct1yEu31AfRKiSVStmiJgH3saVDknKcBVDJ3e5HMGEZwY5FhmSRRZVHB7heWqm8LOAOCRNen6Ze%2FpU5A3z6LQsOGnG6uGza%2B6Aj3%2B2dpNH7vwXCO48gK4EqhEsTN%2BDCP8Ej%2Fb3rpHwihBoEXestnnTM&X-Amz-Signature=8545063b126ba7e9687f595865a216f907be367e06771b6ba6ad497f73f3c553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIMDUI5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZYso%2F2sumBkJ71uQGNn5ZEekD96RMoTv%2BIN9DkIN9qQIgASIYfxkjh0W47OY53nhsSfGRmG1cORXRLCSH0TWEX8Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDYqkc4USENZG3PQUyrcAz2HfZtfC16Q7ppJihGYDUaYU76V%2FuLv%2Blnb%2BSgF5nqOF36MmT%2BAO228LhTpb2hw1uZojKw3H5w9vblFJHksE3fTPuDmqHTpwnmZs5L3g2M%2F9SCh3QLee2bIzXI4Pxk6nko%2FmEzrb%2BGKh96IKHKgb2TTnkmt5OhAevQBz3MASGgNLj70f5HRT98SY2f9jVOyGaLi0CCUfj0yS6IHeYBKC9LBrBcrNhjI6x5A8%2FUjjC3hYpv7XbR14cnFEtwkS7OfIKHFu8jCDyvPTpOblftYq8j41zxSELsep%2BTulPl5tgwgI%2BQ%2BC1ethnmjXfg3BAdHMZRy74xmVag5NBmg3KYlhxufqYa7NlsZJKr5Dg6OVJb3YCtrhAx5mXNgHX9hPDqyobof9knS5otno%2BZYPyx5R118ni6xngK3xArcKIgHVZtKGQjwiPrV83s8cespB%2B4OQrD3HCzuA9ekftLAmwb2oTNNgg3otme0YPvCEskSvVd0W85pqyzIJGmsz52zhq2qCC4%2FsPtU8RYVuzYBqiV%2Fi%2BJgKa%2B51q2xrL8nSwfQQgb0jRcJR3zDJD492%2FVzbiw4hCnYBRWwJL6xkuB7UVDoThBRHCVJirKhFh%2BybdKkz525jyzElEW%2F%2BOCKh4GPMMerisoGOqUBFgXKz%2FPnUxHuiutwagB9uD%2BH%2FTgh%2FvzTBXHEdH%2FbDXCi6TPiPjUensT6ktrUkYS8ouPZxct1yEu31AfRKiSVStmiJgH3saVDknKcBVDJ3e5HMGEZwY5FhmSRRZVHB7heWqm8LOAOCRNen6Ze%2FpU5A3z6LQsOGnG6uGza%2B6Aj3%2B2dpNH7vwXCO48gK4EqhEsTN%2BDCP8Ej%2Fb3rpHwihBoEXestnnTM&X-Amz-Signature=8b290821adc115574e0a992e4208d192dc4541d87ed341b3d3dff665a5103b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
