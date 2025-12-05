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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5NRJHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDertCzxxDF35hJvKV03Qc03xOaTljDuHLse39V99DGTAiEAiwoYMEh2egviAn43UQ5JjklCAom2KHdtplDVXehn3IUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGaQVgxhkL9vsLRe3yrcA6idPGk0fg6Aa%2FrAaS%2F%2Bd5BHhsf4L61UBO0avTSMWSD1KSDtgMxRs0FBIMuaA4R2ubKVvhoDybMLmgzXm%2BxbpdsPycovCZwMzs8JiyuDxbTEAUqxLh61lzAPamez3UbzbMZkIifIO8BJEIGAj25HeGEbf%2FU7hBg88f%2FQVIFsRElL0Oplq60gJkD9I%2BIUZFmF2wC2v53wiq9s3UOPq0Uz3euGQntYfIyHf7HnG8b7X5qIcQrhy7SpXmHlkldmcuKs9JVFDTqJY46qLbTqRe0nRXXfH2Zu1PkAiQmB4OXTq0qBqjGODWGr3r8JzYSQ3Kt9Kxw5SFzc%2B5bBlg4vIgNv5JicvMxA%2BvX%2FAm7dNq8OlLKx0QGJj5ieLmhmaKSZZ2cPh5K1D1APTg5kY8HVUEc8CuilJGQP%2B7ZqjYSCInLq1pMwwqrQ6fQyPb7bUkg6L8H%2BFp6FRw%2BfQm7peTFnQqB6iiQx2BcvYxOcMfg55ICGlS%2BdcTQBUf%2FGkicJL2D4qDESnsSvDaTdm5VDvIHu%2BWWFDwCWckOb6B6UYeH5TbJ7OsUikyRER9YtS7rPg0MugnRUQj%2FPke14GGMUSw3lXxiGSatCc9Vt1tuW3tKmxXBxBozZDOOs7f7kShD1wFUnMJ3my8kGOqUB8taB1vpGsCAI6t07UYU%2Bk%2FYa8WLxU5vje%2BwlbTjmFyLIozyKGzcxxPM%2BVM0qqbi6yEruByavJw1b2QzG6M7N%2Bnq88Wq2HXxlsp8ezmxvnpQpPmc4HJYO%2BAy9o85XiIYO8OJSdTJJkv6T%2FZViwtRUxmfeYIy1ZHUOL1Sn1g7YwTXMisLEu0B02LK69llH7cJpsZpmd5zb3GNy6Zx2rl3tEAEiW5dN&X-Amz-Signature=0cd880b610af7d4fc9d6d2c5b453f9b76f003f529941308c4a84598c1455ca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD5NRJHF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDertCzxxDF35hJvKV03Qc03xOaTljDuHLse39V99DGTAiEAiwoYMEh2egviAn43UQ5JjklCAom2KHdtplDVXehn3IUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGaQVgxhkL9vsLRe3yrcA6idPGk0fg6Aa%2FrAaS%2F%2Bd5BHhsf4L61UBO0avTSMWSD1KSDtgMxRs0FBIMuaA4R2ubKVvhoDybMLmgzXm%2BxbpdsPycovCZwMzs8JiyuDxbTEAUqxLh61lzAPamez3UbzbMZkIifIO8BJEIGAj25HeGEbf%2FU7hBg88f%2FQVIFsRElL0Oplq60gJkD9I%2BIUZFmF2wC2v53wiq9s3UOPq0Uz3euGQntYfIyHf7HnG8b7X5qIcQrhy7SpXmHlkldmcuKs9JVFDTqJY46qLbTqRe0nRXXfH2Zu1PkAiQmB4OXTq0qBqjGODWGr3r8JzYSQ3Kt9Kxw5SFzc%2B5bBlg4vIgNv5JicvMxA%2BvX%2FAm7dNq8OlLKx0QGJj5ieLmhmaKSZZ2cPh5K1D1APTg5kY8HVUEc8CuilJGQP%2B7ZqjYSCInLq1pMwwqrQ6fQyPb7bUkg6L8H%2BFp6FRw%2BfQm7peTFnQqB6iiQx2BcvYxOcMfg55ICGlS%2BdcTQBUf%2FGkicJL2D4qDESnsSvDaTdm5VDvIHu%2BWWFDwCWckOb6B6UYeH5TbJ7OsUikyRER9YtS7rPg0MugnRUQj%2FPke14GGMUSw3lXxiGSatCc9Vt1tuW3tKmxXBxBozZDOOs7f7kShD1wFUnMJ3my8kGOqUB8taB1vpGsCAI6t07UYU%2Bk%2FYa8WLxU5vje%2BwlbTjmFyLIozyKGzcxxPM%2BVM0qqbi6yEruByavJw1b2QzG6M7N%2Bnq88Wq2HXxlsp8ezmxvnpQpPmc4HJYO%2BAy9o85XiIYO8OJSdTJJkv6T%2FZViwtRUxmfeYIy1ZHUOL1Sn1g7YwTXMisLEu0B02LK69llH7cJpsZpmd5zb3GNy6Zx2rl3tEAEiW5dN&X-Amz-Signature=d2d094cb1b36d78a2e05a7e24587f30b789d420cf2432b5262aeaeff890f84a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
