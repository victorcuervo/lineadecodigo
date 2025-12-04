---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKFQ6VS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHi02bkQmWr%2FUgS1%2FGGgNuTnvpcoYw%2FBrbOVoT6WE1o4AiEAjTqIdGKkhq0iZWNgUJ6zSgrminz7KLj3bxQiRlUmZQgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFLZYZW6KCmqAuVYVircA0C38d%2FxbUNip6CD%2BcEq198aHHtDoHcx%2B6L%2B7ReCvvzhGrIKF9WIIOhmX6IF0AP00JVHNb9GSXFdiJOVnY%2BrI%2BWIRU503NFtMw3dVywEPQYe%2F8t6exOnRcr2PoqZvMutZ2ITek5m%2FDzUecbT0tCpoTWTLb6P8mB2Y5ZZsVJrJrAtnBwq%2FU8dLRcG1ojCZ8jK5MAGFF4tvBMDiEuzEzTCjjeeoTRPcJIjLpEYnh6XtA5k6utUwO%2Fde3CMY%2FIazoPA0kAAHTv4uY1PqUQnD3lhqJ8lNOhvH7ThkbctnXAwu5SSGnmJAobqdRcbSYJqSw9iGRQPpwcbQjaSm5wREqYTpmav6ApLEvTw%2FQfW0vREmkSJCoq1mES93wTjzP6BSgjJlRBVwMHAh%2B%2BnwsEALKs4LiujEedVUZodSOT6ixyz7rls3m1Po06ztOg1wydGoNSu0L2klDq5LYqzz%2FVQT3wNmHWA%2F8i5Z04IcS2Bt0PKyPiKHDAybbQsDeDVlveNpBZJu4xlT6S9bt0TaR9CPVJITnDUveJQxx5Wtz1FsuB%2B7mCZwjvH2krtVCk6JqYTafAWYpI6ix9ar0Tfc4m3vIHkXaE0u%2ByZSAa%2Bkv6ubW75W8K0IM687gaZYPFA%2FKQNMLfyw8kGOqUBncpzDtt9dwJQpqkyM8UcIvqPrUBmqC1nWcT3ksKqkqJSGg48TALhFYP7FGKjZV8S2nkkH8B0%2BE2YhaIhDhz9F3AUuXp%2BbZiyW06Tndg88QQHaquVwZrkX8jATLmuMs5EhnsJv9Xko0k7lNcfSmymakDb5K72Uis2MYssJiLt1jRZU4d%2FjSPEU%2BZBUszi4qKv3YGv%2FRsn%2Fx1rDUYdtR7AmFqQsrGu&X-Amz-Signature=c7ce1e5e266356dbb3d6fd26c2733989f8b15fd0f1e639ee9c933f234bb34912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKFQ6VS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHi02bkQmWr%2FUgS1%2FGGgNuTnvpcoYw%2FBrbOVoT6WE1o4AiEAjTqIdGKkhq0iZWNgUJ6zSgrminz7KLj3bxQiRlUmZQgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFLZYZW6KCmqAuVYVircA0C38d%2FxbUNip6CD%2BcEq198aHHtDoHcx%2B6L%2B7ReCvvzhGrIKF9WIIOhmX6IF0AP00JVHNb9GSXFdiJOVnY%2BrI%2BWIRU503NFtMw3dVywEPQYe%2F8t6exOnRcr2PoqZvMutZ2ITek5m%2FDzUecbT0tCpoTWTLb6P8mB2Y5ZZsVJrJrAtnBwq%2FU8dLRcG1ojCZ8jK5MAGFF4tvBMDiEuzEzTCjjeeoTRPcJIjLpEYnh6XtA5k6utUwO%2Fde3CMY%2FIazoPA0kAAHTv4uY1PqUQnD3lhqJ8lNOhvH7ThkbctnXAwu5SSGnmJAobqdRcbSYJqSw9iGRQPpwcbQjaSm5wREqYTpmav6ApLEvTw%2FQfW0vREmkSJCoq1mES93wTjzP6BSgjJlRBVwMHAh%2B%2BnwsEALKs4LiujEedVUZodSOT6ixyz7rls3m1Po06ztOg1wydGoNSu0L2klDq5LYqzz%2FVQT3wNmHWA%2F8i5Z04IcS2Bt0PKyPiKHDAybbQsDeDVlveNpBZJu4xlT6S9bt0TaR9CPVJITnDUveJQxx5Wtz1FsuB%2B7mCZwjvH2krtVCk6JqYTafAWYpI6ix9ar0Tfc4m3vIHkXaE0u%2ByZSAa%2Bkv6ubW75W8K0IM687gaZYPFA%2FKQNMLfyw8kGOqUBncpzDtt9dwJQpqkyM8UcIvqPrUBmqC1nWcT3ksKqkqJSGg48TALhFYP7FGKjZV8S2nkkH8B0%2BE2YhaIhDhz9F3AUuXp%2BbZiyW06Tndg88QQHaquVwZrkX8jATLmuMs5EhnsJv9Xko0k7lNcfSmymakDb5K72Uis2MYssJiLt1jRZU4d%2FjSPEU%2BZBUszi4qKv3YGv%2FRsn%2Fx1rDUYdtR7AmFqQsrGu&X-Amz-Signature=6b36000fd72e8e458a2a2413e771ee5b265b53e842f4b3189835d05b2aa5ff57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
