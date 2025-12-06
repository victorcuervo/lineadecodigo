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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZXRHHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPw%2BvWO9BLd7oh%2F4uu6yFRdSoE35dHLmMfNovzUsDv4AiAA7XI2I966bgiPlGXz5mcpNtuegf7UTM0lvpTOq2oX2yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F1L4OFqr63GsDPwqKtwDylq8XM7MgGzZZwI32c4PnyRlJ6FGnKqhLW1%2FEVPcsIqix30XzGcVmqIh9q9Lvf6eA34%2F6SMuKTswr9hQWKOyZvcboPd7KYStyXlfW2sUCNP3QORz3mGisc84emev3XWsyEbs0mRjqwlas7Tx097Z2e%2BiIvrHtVH3CuLZVrLUEp2Gvr9rhiR34eZ1I4qjNoORL0iTnx%2Fei0GtiFXrVfvSJsu7ArWK0aVLuZH9nHTMwxOKmkhJQWtPOYN3R%2FxAqRZNs0lfBjG%2BzeScdbUAo1s%2BP%2F7f7GSjtgXAl9OqIsIK1NVQ8lThCBnUte%2FuG7gY969wO%2FJFYSehexwd7GOLiCWDPk0YL8VKCkWuXBgPlfKt6VzlZalRer%2BoVycDkrIGUoLuuLBUnCqdQfGAdCkaHmHyTUbGZAaKWMFiAHPUyW8kWC%2FI4uFVbWHEOil6PvRYXcEv1q5BvNnfPDFETf9Su0yk12p68yvB1QdnzLc21gLHFGYK0cN9jTyEuMd%2FVvVjnpL80ZIAjXNLYzvgUzICoX1ltfrqHl%2Fzd2VAFId2qM6jm4JQYuT6JZk0R%2B3ma%2F1%2BGMH7aSkFKuxM3wrpTK1gSV%2Bf9M3N0GMhS4kvt6uLi%2Fci2vyf9wUotoCUoHq6IjIwhf3SyQY6pgF7fmIS09eXoivbaCYdnTpK7OS7qSN%2Fd9X%2FEIk%2FTXI7UDFEIpLXMMDAQgqEHgcZ9FEn2pFOtrKsA14GXb%2Byp5c0DBToHAXSAOH7xjIbAH4OLZlaMsOLj9Ml0nfgM1QVusTNu79Rk4eVLRKqlixcuS9ciF4oL63fK6jgVvopjFlH%2BAvseUnfep4IHD5dO4Q%2BdLpsr91xadrMtmA6i8P2U%2BZ%2Fzvde1rRe&X-Amz-Signature=05af329c837c8214da8c1eca7849013bef0d75a194767efbe7111f7724f7cee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZXRHHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPw%2BvWO9BLd7oh%2F4uu6yFRdSoE35dHLmMfNovzUsDv4AiAA7XI2I966bgiPlGXz5mcpNtuegf7UTM0lvpTOq2oX2yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F1L4OFqr63GsDPwqKtwDylq8XM7MgGzZZwI32c4PnyRlJ6FGnKqhLW1%2FEVPcsIqix30XzGcVmqIh9q9Lvf6eA34%2F6SMuKTswr9hQWKOyZvcboPd7KYStyXlfW2sUCNP3QORz3mGisc84emev3XWsyEbs0mRjqwlas7Tx097Z2e%2BiIvrHtVH3CuLZVrLUEp2Gvr9rhiR34eZ1I4qjNoORL0iTnx%2Fei0GtiFXrVfvSJsu7ArWK0aVLuZH9nHTMwxOKmkhJQWtPOYN3R%2FxAqRZNs0lfBjG%2BzeScdbUAo1s%2BP%2F7f7GSjtgXAl9OqIsIK1NVQ8lThCBnUte%2FuG7gY969wO%2FJFYSehexwd7GOLiCWDPk0YL8VKCkWuXBgPlfKt6VzlZalRer%2BoVycDkrIGUoLuuLBUnCqdQfGAdCkaHmHyTUbGZAaKWMFiAHPUyW8kWC%2FI4uFVbWHEOil6PvRYXcEv1q5BvNnfPDFETf9Su0yk12p68yvB1QdnzLc21gLHFGYK0cN9jTyEuMd%2FVvVjnpL80ZIAjXNLYzvgUzICoX1ltfrqHl%2Fzd2VAFId2qM6jm4JQYuT6JZk0R%2B3ma%2F1%2BGMH7aSkFKuxM3wrpTK1gSV%2Bf9M3N0GMhS4kvt6uLi%2Fci2vyf9wUotoCUoHq6IjIwhf3SyQY6pgF7fmIS09eXoivbaCYdnTpK7OS7qSN%2Fd9X%2FEIk%2FTXI7UDFEIpLXMMDAQgqEHgcZ9FEn2pFOtrKsA14GXb%2Byp5c0DBToHAXSAOH7xjIbAH4OLZlaMsOLj9Ml0nfgM1QVusTNu79Rk4eVLRKqlixcuS9ciF4oL63fK6jgVvopjFlH%2BAvseUnfep4IHD5dO4Q%2BdLpsr91xadrMtmA6i8P2U%2BZ%2Fzvde1rRe&X-Amz-Signature=5bc50dc7f0af709b347eab21b8d040a262c08db702fc6a12fde09140cf1d81cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
