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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSPELEP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqQHxdrC2vLVqLQeXblPHFi9WwmSO%2FJ2u2ZlRPJ70DxwIgWrZQBHpPHgDk0aTnWbA1SVBAh4uq2x8MW1sGrkiqdZwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG4L0xV2MzS%2FUJ9V%2BircA3DuMugPBklBhxQuNgSqugwMhad2jawZGQiAsT14TUzZk2font2Pe%2Fapuw918ohdr7KasBNNq9kl%2F%2B1n%2BhR9UuASwVZrVZV4F3DmZzbFojZ%2BafcELTR2LmXbK134ZFqR82fzLIhQanpolssiufRko2gX%2BHAq4vDRaQaKyRVf8V8qI5CD0UcYySca2GZ%2FrREPg9BgeMG%2BrklDI6DSlHL9Paz%2FJ4tgKfKRnpX2BiWclwsweqvU6wAppta%2BuyuQeRtawJMDsrQVjhTArURv9so7k01heKYWluFF5mHw3smSR0xuoZm5z5RDoSmPCx9eoqWa21ChcSx84HrKwGVFNkwFJ04%2FZwyBzzraMo0a3Nfk9c42v6Qh9447owuTGU6sDnXOxEioDZfa4BqbmjrggJaHOIuK4lt0msQ%2FucKNPvTbyfYe8kpP3ObpfPpD8JRSGEILzQqMz7vn0n1%2BR0wb3JGlxSe7yFYxFAL9rDhrDU2RnCcATxy%2BI3Jq1%2FiKGEt%2FzORX1xRcSDd54VoJo9YMj4AZiIWJ7CIrxeWEnG6O8uLi%2F%2FueEH%2B86IHas%2FwmDWX%2Fdu2t9%2Fa4PaEYdxVVgzDKOvpj4RvP%2BkAPHq0Xm79xtgiP6G0zv1%2FemGwZFIyYn6BwMKKazckGOqUB2haMg27rXDZSn2NVyMAFjBRNCxqOX4T%2Fr2i6n1UAIZ7i0En%2BPEr4IHj1SAo1cNYUlDB8bGDR2qX6kEHIHS9iAcxfApfAwUYFWHbES5fhuL7h55cFY68KZkiHJPl26gZiy6wZzbZEKXeW7FlNZ2R56toBxqTcod1eUK88BYwhUp0ympzlYuoboVuy6jA4gS1zZpDjLOfa%2BV3B1Fx42UIsAey5ya%2BF&X-Amz-Signature=c32ac95f6c94788af0e97611f947ddb9674321c25a2bc26ae9c81e94ca14e8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSPELEP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqQHxdrC2vLVqLQeXblPHFi9WwmSO%2FJ2u2ZlRPJ70DxwIgWrZQBHpPHgDk0aTnWbA1SVBAh4uq2x8MW1sGrkiqdZwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG4L0xV2MzS%2FUJ9V%2BircA3DuMugPBklBhxQuNgSqugwMhad2jawZGQiAsT14TUzZk2font2Pe%2Fapuw918ohdr7KasBNNq9kl%2F%2B1n%2BhR9UuASwVZrVZV4F3DmZzbFojZ%2BafcELTR2LmXbK134ZFqR82fzLIhQanpolssiufRko2gX%2BHAq4vDRaQaKyRVf8V8qI5CD0UcYySca2GZ%2FrREPg9BgeMG%2BrklDI6DSlHL9Paz%2FJ4tgKfKRnpX2BiWclwsweqvU6wAppta%2BuyuQeRtawJMDsrQVjhTArURv9so7k01heKYWluFF5mHw3smSR0xuoZm5z5RDoSmPCx9eoqWa21ChcSx84HrKwGVFNkwFJ04%2FZwyBzzraMo0a3Nfk9c42v6Qh9447owuTGU6sDnXOxEioDZfa4BqbmjrggJaHOIuK4lt0msQ%2FucKNPvTbyfYe8kpP3ObpfPpD8JRSGEILzQqMz7vn0n1%2BR0wb3JGlxSe7yFYxFAL9rDhrDU2RnCcATxy%2BI3Jq1%2FiKGEt%2FzORX1xRcSDd54VoJo9YMj4AZiIWJ7CIrxeWEnG6O8uLi%2F%2FueEH%2B86IHas%2FwmDWX%2Fdu2t9%2Fa4PaEYdxVVgzDKOvpj4RvP%2BkAPHq0Xm79xtgiP6G0zv1%2FemGwZFIyYn6BwMKKazckGOqUB2haMg27rXDZSn2NVyMAFjBRNCxqOX4T%2Fr2i6n1UAIZ7i0En%2BPEr4IHj1SAo1cNYUlDB8bGDR2qX6kEHIHS9iAcxfApfAwUYFWHbES5fhuL7h55cFY68KZkiHJPl26gZiy6wZzbZEKXeW7FlNZ2R56toBxqTcod1eUK88BYwhUp0ympzlYuoboVuy6jA4gS1zZpDjLOfa%2BV3B1Fx42UIsAey5ya%2BF&X-Amz-Signature=9124c755a77e65631221ea0eab3e1944be997ce145bc8969f5ed9d6c6155a3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
