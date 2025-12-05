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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWPKRC3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBRzh8ad1EwBhXb8PBhPEi8Vk7FJwuuXXLZGmmfmywnAIgfqwOKUXMwyE8%2FwRRpzenWi8EU15amtJHA7kd6IW0Bcwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLF2pm2CRzyqUgBM6ircAxM38WrxUqNWK7SgJixgHB3OvgEmZHvRvpjD%2FVY0dTRYcBleRcrm00jxuP9OmkSrH0xhcGxOWyHnaqvLONefExp%2Brc0DBjlMwBy%2Ff5gkuNLjoAhc8vG7NZhkdrPyM3sQUp5SPdOiEF5F%2FiMn2Wyvy9e3fP%2BgzH%2FSb%2B5%2BporfNZst%2FCosNDfj9W7zKKWDTH6r3%2BcMLLQzZ3UgcztzXYGbC2cEY8riGaTDAkOGasde5SwaQOioGh7xGmeIpgquZpyxGDv5OuRl7Ub18tur7gNB1%2BbT2ksaXuvP7H0GzmMe1iXjYjz6TYoIzut1TB6C8UcKaA4rGPV556De9W9Yd%2BTdHH55rdZtsg2beIZW5tkI5og8F0ty6gqVvWOB%2Fu5jHhmL5I1XKgnP9TxlXj6zEHIWXVGVZ8GZF6IUcwPdyBjY8iMRH%2FqAyG5ZF6g24bYYeVYDVbjDzf7OrUN5VgX%2FdqE8HBoPOu3O8KekwftWUQzEVUDq%2BlEuPvFeYJ7eYSZTVLi2rzSBKRIqyYJ2bpvC4h4DY7drjiaQOjCks%2BxR8qbltGkvpVwkPdkcPHXIcGRyXxsnmBsiHCFlwRlumvkVn4tq%2BNG5%2Bsl79VPje5NnbibBqIWsbwJtr217UXi5RsPbMNvGyskGOqUBT0452gycpBoEtq3A3c3I9k458JHzM%2Bu5%2BLAmjbEe7ysqH4%2F7DJ8zLzOK523sXvELsLoxmaxLDeucWP0DFE6cnjZmj5ykNyBpinoMtbosEc0B6NS9cjSMWUj0%2B%2Bw9WrgT7CPSRN%2BW2yD5a6yP3gv%2BSUkXtEKr2fPh%2FZ8VGswltd6AdDxWoShc2knb4IAU09L8FnJEIAZU8R8UbS9Ic%2BdxssQsVRlu&X-Amz-Signature=98af2ff77ee2f174f1c159f7dd4ca58008336ab58af0cc99ba615ff03dd975e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWPKRC3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBRzh8ad1EwBhXb8PBhPEi8Vk7FJwuuXXLZGmmfmywnAIgfqwOKUXMwyE8%2FwRRpzenWi8EU15amtJHA7kd6IW0Bcwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLF2pm2CRzyqUgBM6ircAxM38WrxUqNWK7SgJixgHB3OvgEmZHvRvpjD%2FVY0dTRYcBleRcrm00jxuP9OmkSrH0xhcGxOWyHnaqvLONefExp%2Brc0DBjlMwBy%2Ff5gkuNLjoAhc8vG7NZhkdrPyM3sQUp5SPdOiEF5F%2FiMn2Wyvy9e3fP%2BgzH%2FSb%2B5%2BporfNZst%2FCosNDfj9W7zKKWDTH6r3%2BcMLLQzZ3UgcztzXYGbC2cEY8riGaTDAkOGasde5SwaQOioGh7xGmeIpgquZpyxGDv5OuRl7Ub18tur7gNB1%2BbT2ksaXuvP7H0GzmMe1iXjYjz6TYoIzut1TB6C8UcKaA4rGPV556De9W9Yd%2BTdHH55rdZtsg2beIZW5tkI5og8F0ty6gqVvWOB%2Fu5jHhmL5I1XKgnP9TxlXj6zEHIWXVGVZ8GZF6IUcwPdyBjY8iMRH%2FqAyG5ZF6g24bYYeVYDVbjDzf7OrUN5VgX%2FdqE8HBoPOu3O8KekwftWUQzEVUDq%2BlEuPvFeYJ7eYSZTVLi2rzSBKRIqyYJ2bpvC4h4DY7drjiaQOjCks%2BxR8qbltGkvpVwkPdkcPHXIcGRyXxsnmBsiHCFlwRlumvkVn4tq%2BNG5%2Bsl79VPje5NnbibBqIWsbwJtr217UXi5RsPbMNvGyskGOqUBT0452gycpBoEtq3A3c3I9k458JHzM%2Bu5%2BLAmjbEe7ysqH4%2F7DJ8zLzOK523sXvELsLoxmaxLDeucWP0DFE6cnjZmj5ykNyBpinoMtbosEc0B6NS9cjSMWUj0%2B%2Bw9WrgT7CPSRN%2BW2yD5a6yP3gv%2BSUkXtEKr2fPh%2FZ8VGswltd6AdDxWoShc2knb4IAU09L8FnJEIAZU8R8UbS9Ic%2BdxssQsVRlu&X-Amz-Signature=4e516700dd40145502a31b79856fcafd9589793b383d245db708cdffcce57333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
