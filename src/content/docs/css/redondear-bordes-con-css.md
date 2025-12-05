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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJVXBBO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8jUx3C16ZDelggV3vrtYX0VNYH7pfIp%2B4rgAveSUBCAiBaKS7Usq0pQ1zOMOM3x2hBqTlgO8M2cnzzqiGUgZyyhSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMe4In34VaTbkH%2BFu%2BKtwDyRnY0YlUg%2F9VnQ%2FyDq%2FUgYADdfWebk0X2SUx3Ie8MT3b8Xz9DqbGr9P0ReEaKL9RySAUI73oOGTPQu6dr0eiIfNo4Vk97N3Rc9OP7RV%2BnBOpCulWp2D3u7PlDRHzWRaztv%2Bq%2F4ZXNyazsIoad4kYNm%2FcfUNNV6jdvzHL7NOe2cClPqSE4SkPmJTtuvV2XvXzDr9wlFjz9AxedQiBQVh%2FaKVDORjCscGNjXPXnuBHHf%2Ffc3x5Praqo6qVxuc%2B06i43eeRVcw6jAYMEzM9Z41bNN5FGL5fihfEuFTXuLN5mcfNpKd8kKmA4BGNgdmMHYS6BU5FTWkABd%2FUat%2FoHBEn0LGpQshktXyDTexx2leENSYQqQ8wy954F%2Bws5ajR72%2BWP7sZROPYTc9fKci6iTerAEboBhXwRtSNGpDW7aj1iSBGAICGMLC0WrMLI2j3KLrdVBuOZR5y%2FpqZoT4SsfpSE4JepqUGVc6zExZyINa%2FlbNSxQyTeEK7eJuodZgQRXdl8JqG65%2BCyEKoQXReHwMkbLYkgq%2BilgmsJpNTCF3xQ4FaSJQRriPgEzh1niq%2BskXa3FJ%2BsJvOHrmHzr5wamEdfz86G1K1mtdguQh6JLbSxtXwOS3AgtUVoeD%2B6WMws6jKyQY6pgFV66XmuV2iHwg8eUVY9TDuQGgO8Fx3Am7bwLddSRuw6C8AL0ZWi804sR57cM8jySPmAlsmAgNLmPxSrP28LZEg0QC1fQI1lL8B7GP60zGNPKmCAR1dIL1NM%2B3jYUdLdhfg%2FdjxNzFHDkIUd1SvwQ5MZ6fXqbjWvSuiRCk7YyIOs7r3dsGa29pbaMShV5uYjIbvZeP5nB%2FakLPkgIgnGTfPhXcSIVz9&X-Amz-Signature=80230a4e6d58cc6054a30775419b3a99c919025fb25426b0c1729925a30b8fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJVXBBO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8jUx3C16ZDelggV3vrtYX0VNYH7pfIp%2B4rgAveSUBCAiBaKS7Usq0pQ1zOMOM3x2hBqTlgO8M2cnzzqiGUgZyyhSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMe4In34VaTbkH%2BFu%2BKtwDyRnY0YlUg%2F9VnQ%2FyDq%2FUgYADdfWebk0X2SUx3Ie8MT3b8Xz9DqbGr9P0ReEaKL9RySAUI73oOGTPQu6dr0eiIfNo4Vk97N3Rc9OP7RV%2BnBOpCulWp2D3u7PlDRHzWRaztv%2Bq%2F4ZXNyazsIoad4kYNm%2FcfUNNV6jdvzHL7NOe2cClPqSE4SkPmJTtuvV2XvXzDr9wlFjz9AxedQiBQVh%2FaKVDORjCscGNjXPXnuBHHf%2Ffc3x5Praqo6qVxuc%2B06i43eeRVcw6jAYMEzM9Z41bNN5FGL5fihfEuFTXuLN5mcfNpKd8kKmA4BGNgdmMHYS6BU5FTWkABd%2FUat%2FoHBEn0LGpQshktXyDTexx2leENSYQqQ8wy954F%2Bws5ajR72%2BWP7sZROPYTc9fKci6iTerAEboBhXwRtSNGpDW7aj1iSBGAICGMLC0WrMLI2j3KLrdVBuOZR5y%2FpqZoT4SsfpSE4JepqUGVc6zExZyINa%2FlbNSxQyTeEK7eJuodZgQRXdl8JqG65%2BCyEKoQXReHwMkbLYkgq%2BilgmsJpNTCF3xQ4FaSJQRriPgEzh1niq%2BskXa3FJ%2BsJvOHrmHzr5wamEdfz86G1K1mtdguQh6JLbSxtXwOS3AgtUVoeD%2B6WMws6jKyQY6pgFV66XmuV2iHwg8eUVY9TDuQGgO8Fx3Am7bwLddSRuw6C8AL0ZWi804sR57cM8jySPmAlsmAgNLmPxSrP28LZEg0QC1fQI1lL8B7GP60zGNPKmCAR1dIL1NM%2B3jYUdLdhfg%2FdjxNzFHDkIUd1SvwQ5MZ6fXqbjWvSuiRCk7YyIOs7r3dsGa29pbaMShV5uYjIbvZeP5nB%2FakLPkgIgnGTfPhXcSIVz9&X-Amz-Signature=0874ecfad477cf52dc59434ebb93bc8679c2dff36208f421ba4f35848f8aa446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
