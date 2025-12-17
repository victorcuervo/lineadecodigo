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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYI7HQMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPf7Jq9uRhlP6Q9BXBwSaBtrPWC2UivjjVxsD%2BVq4j3AiEAkN2zQGMeFE9xb9qXUvZONEy%2BWruYYiI744En3I2kHWsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWI6PfTxPwqz8St6SrcAwpcuJnFFWs7TXB%2Be5VVqVPw39A5Os6kuyiuAreGR8MHSuJIW5IhkJKo2qODzvy89bC1v2ukA%2FwPA7XQGqg8vznVzroq54GEOjgAeE8DsakIBubh8iQgUVy6eB1TbtkYfR%2BjbwoLhAp%2BF0sDd3PmvF%2Bizx3b9nBcn%2F6PNzPAoUkWS0Qd5T27ZMkT6CVtkI0rX7HOPXshiPATXltvcMb99oUu2RHH%2BVKQ%2FCqJjbJ2xHFnOripuRd35%2Fs7cjzJ237EWNPmyXYQ%2Fy8vZNHJLkH4BfQr4X0jw1wRK9CQ0NAPESIdnkzwE53zc9MrD0mAv7TwaapSa8fsO3cvQq4nGbNHBJN33tUYxPUJQKCnPdtvwBVY2zxTaRTn%2BToNKECNOKD0zfw39d6mzv3oDVKMK8kE8fMFGsbQrBiAFpc%2FPj0WY7pBaY9NiPtb6ZvbvFUDRKSjpazqeMjx19JoKCtFqSmOHDjl6FfZ1fKN1FFU%2FKPFOUrcwSMaZR%2BbYmgH3vHvMNLs4GFk5VR4sHiCxAChhFlL80AsiUzKVn3C%2FkBHp7Qq2AMKPNM%2B6%2FbV3hL63S8yZj921on54qjR6Bzw8A%2BUTW3u%2FpgjD022qEg%2FA0yYO2oYgYIYD0xKWnCe%2Bb%2FTQ97TMIqujMoGOqUBfI5IcDAOPjmZE9hFgey53T80QdU0kRGVN95xIFul%2BNTfSJua%2BwIHyLOLpvSgw%2FDpJ55VskOBhs%2FYJch8mjdL%2FQ9s6TO683SqXQYTvjCUKwXv%2FfUqESnrW6afTz6EKNc6UqSxgw%2FNHogNr9U4A%2F96IMZDZk%2BMpv19%2F5Sq%2Fai0wriRYnD2TmoiD8L47bKZeaCqbVHlvDWNjixmNRjgbRNnS6UtnooU&X-Amz-Signature=6e1afe4d4e7665aaeb558418369b7c243a32f369f898105fab9c591cfefc7b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYI7HQMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPf7Jq9uRhlP6Q9BXBwSaBtrPWC2UivjjVxsD%2BVq4j3AiEAkN2zQGMeFE9xb9qXUvZONEy%2BWruYYiI744En3I2kHWsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWI6PfTxPwqz8St6SrcAwpcuJnFFWs7TXB%2Be5VVqVPw39A5Os6kuyiuAreGR8MHSuJIW5IhkJKo2qODzvy89bC1v2ukA%2FwPA7XQGqg8vznVzroq54GEOjgAeE8DsakIBubh8iQgUVy6eB1TbtkYfR%2BjbwoLhAp%2BF0sDd3PmvF%2Bizx3b9nBcn%2F6PNzPAoUkWS0Qd5T27ZMkT6CVtkI0rX7HOPXshiPATXltvcMb99oUu2RHH%2BVKQ%2FCqJjbJ2xHFnOripuRd35%2Fs7cjzJ237EWNPmyXYQ%2Fy8vZNHJLkH4BfQr4X0jw1wRK9CQ0NAPESIdnkzwE53zc9MrD0mAv7TwaapSa8fsO3cvQq4nGbNHBJN33tUYxPUJQKCnPdtvwBVY2zxTaRTn%2BToNKECNOKD0zfw39d6mzv3oDVKMK8kE8fMFGsbQrBiAFpc%2FPj0WY7pBaY9NiPtb6ZvbvFUDRKSjpazqeMjx19JoKCtFqSmOHDjl6FfZ1fKN1FFU%2FKPFOUrcwSMaZR%2BbYmgH3vHvMNLs4GFk5VR4sHiCxAChhFlL80AsiUzKVn3C%2FkBHp7Qq2AMKPNM%2B6%2FbV3hL63S8yZj921on54qjR6Bzw8A%2BUTW3u%2FpgjD022qEg%2FA0yYO2oYgYIYD0xKWnCe%2Bb%2FTQ97TMIqujMoGOqUBfI5IcDAOPjmZE9hFgey53T80QdU0kRGVN95xIFul%2BNTfSJua%2BwIHyLOLpvSgw%2FDpJ55VskOBhs%2FYJch8mjdL%2FQ9s6TO683SqXQYTvjCUKwXv%2FfUqESnrW6afTz6EKNc6UqSxgw%2FNHogNr9U4A%2F96IMZDZk%2BMpv19%2F5Sq%2Fai0wriRYnD2TmoiD8L47bKZeaCqbVHlvDWNjixmNRjgbRNnS6UtnooU&X-Amz-Signature=1282fe3757ad1a6341a5c78984a409962eb304c2ebb96ce359c896f04e8a6b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
