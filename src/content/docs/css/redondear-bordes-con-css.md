---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVTXZLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDCzQ4tHYziDykrx%2Fgc4SVY4cO574t1Lp5vhrfMr53YcQIgZE%2BEOviuAzh3FPasfAUSDcn%2BjcpXHKLKjzF3SIVX140q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMbEAH%2BQY%2FXOwKoD%2FSrcA%2Fnzl041lKIGTTlfXiF5xP0vHOIjJj0iPPc9rr5FjP2ZVUXSoVSxlvx58%2Br0ZquI1fpoqkQAxFXMoo%2Btwesby67Pju1M5Hwm2QNnMC2vXBYvuUqT3G5MsCW6X9UVlHAEaKzs1rD1oRuRXxx7CD6Ru9feotAqCyJuJ0NTlEluZnj%2BofnFhzDGxsQI99zN3%2Fp9LOfbmnegYXCA7TagwsNRjT7QYQnCu9SW46fDS4S20akAGt%2F8EL7L28ViwSwWso9tC%2FgQZv13%2BHxD2fkl%2BS3V%2FfdBT9QvWuPRzKaLMFdXgeDTGSNkcUjBQ5j7O9%2FIGupcBaZhzyrQozwtZ0aZ3RFJUukxzz%2BeiuBV2TEm8m7BHBgxUw7q7GdctxIS42javEB97jlqlD2M1dgvFVV2dCPNGSFp12oFYojlH2K9YhGpJoHam8PnCIHsJArwdqZ5Opi2xmIZT4Bmzgj4coNLR8qMKOd9tcv6bwvpc4goWQhZ8BgvC0cLvRHFPCVBVUqkdIWmczuwIRncYMLTQI2L2pWp6IoLvh9%2BAc%2B%2B6AcCGAzHO%2FYjCtNNYKndneszMWLKTurDwGqOwr9Kd%2Fbw6hzI0UPYep7LRm5x21zsLIEyQLb6rcn4aMlkUwofsSG8EgLvMLG9wskGOqUBXqrR%2B0wZtZ9%2FlOAAPxNV1tOdcl2tZnVm8WCY0nzhZ6YYfXWKwFqOYNB%2BNseEnpN7p8dm%2B05eLmVfAjkLB4DO6WAeiXSy9WoZzEQkgt%2BzF1QfN1fAP2IZgEjdZIRWF10ReiqkuENaFcCAay9DNe4%2B5sWwL0PeJYjwAoaDuRxxMYBm8sP%2FKRKTYCfDWPc9CNMTzjwsryzMe5EmH7Sw3lUljo7NXzhI&X-Amz-Signature=e05c76ff0a73f26f0528a58b5a7cd2322ad22bb3f5f018b93600e4e3b44d2875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVTXZLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDCzQ4tHYziDykrx%2Fgc4SVY4cO574t1Lp5vhrfMr53YcQIgZE%2BEOviuAzh3FPasfAUSDcn%2BjcpXHKLKjzF3SIVX140q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMbEAH%2BQY%2FXOwKoD%2FSrcA%2Fnzl041lKIGTTlfXiF5xP0vHOIjJj0iPPc9rr5FjP2ZVUXSoVSxlvx58%2Br0ZquI1fpoqkQAxFXMoo%2Btwesby67Pju1M5Hwm2QNnMC2vXBYvuUqT3G5MsCW6X9UVlHAEaKzs1rD1oRuRXxx7CD6Ru9feotAqCyJuJ0NTlEluZnj%2BofnFhzDGxsQI99zN3%2Fp9LOfbmnegYXCA7TagwsNRjT7QYQnCu9SW46fDS4S20akAGt%2F8EL7L28ViwSwWso9tC%2FgQZv13%2BHxD2fkl%2BS3V%2FfdBT9QvWuPRzKaLMFdXgeDTGSNkcUjBQ5j7O9%2FIGupcBaZhzyrQozwtZ0aZ3RFJUukxzz%2BeiuBV2TEm8m7BHBgxUw7q7GdctxIS42javEB97jlqlD2M1dgvFVV2dCPNGSFp12oFYojlH2K9YhGpJoHam8PnCIHsJArwdqZ5Opi2xmIZT4Bmzgj4coNLR8qMKOd9tcv6bwvpc4goWQhZ8BgvC0cLvRHFPCVBVUqkdIWmczuwIRncYMLTQI2L2pWp6IoLvh9%2BAc%2B%2B6AcCGAzHO%2FYjCtNNYKndneszMWLKTurDwGqOwr9Kd%2Fbw6hzI0UPYep7LRm5x21zsLIEyQLb6rcn4aMlkUwofsSG8EgLvMLG9wskGOqUBXqrR%2B0wZtZ9%2FlOAAPxNV1tOdcl2tZnVm8WCY0nzhZ6YYfXWKwFqOYNB%2BNseEnpN7p8dm%2B05eLmVfAjkLB4DO6WAeiXSy9WoZzEQkgt%2BzF1QfN1fAP2IZgEjdZIRWF10ReiqkuENaFcCAay9DNe4%2B5sWwL0PeJYjwAoaDuRxxMYBm8sP%2FKRKTYCfDWPc9CNMTzjwsryzMe5EmH7Sw3lUljo7NXzhI&X-Amz-Signature=7ca59398fd67357aeaba8bbe89954310c2640486371da0aa90bc869d5944b4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
