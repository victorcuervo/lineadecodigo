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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6C2ESH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3BgPis3clIQ31ibvdltJT4WVeuX%2F9k%2B634bIR00hm3gIhAJ%2FfrVe%2FqKbKuIFMPuN2Dck0ALNcAxOIDu%2BR8l5%2BR2ItKv8DCG0QABoMNjM3NDIzMTgzODA1IgyFv3nrIC%2FU2c2K%2FN0q3AOGj3MIheGrlKWp%2FV5mzzE8QPzjz4I3bIGpmxE8BwCgjt6JYTcRa3CRykpiDUELX3EO5uEksYtVzR%2BdwUbmG8fQuJigyeX6LduCSd76zo%2FmUf6zbyqS7XDHnL0vhqNhYzbfWNTzeHsL9P0CJAkkTdC%2Bnu%2FHZwjte04Lo4cGYS7aEbh9RZbJjvV5GHi3qBSHASf7hXUkzG6nuoK8vZTwrQeXOxo14UlonvaHZygbvs2V9gwxLx9diRx30%2B%2FeYrmWIKi0gpcL%2FsmNNO3sNkPrcEaHbzD8heoILVHbdzDmZ5zH93jP7crucnikKw7OWZpB%2FB7lZoj%2FuYS%2F65kvtbuWk4W9VgKycOuD%2FEiPOqqAtiQDEO5nCmrpAySvCL8BTxHNxvZV7syV7eTnMou0XPC%2BTUW59N4wZ16599d4t16rIug1WB%2FmHHXy%2FWkpFtboafElWF0ewI2yI8PMHjlxWkN91qtthu0TeC8d3LoXpiWclfLPUB4qt55mwDRGHglT%2Buyzgxn2a8Po9lpuHg6ZwDeTxikGTImor9SsjxuGhsJKn16dD5FUDG3kxYIJo9ssKmHV7O0xIKtmxOzL0Y1qM5YqDAfC7K9lSDQf6blikoVeCuMDQR4CPLesh4VgIhkrWjDjw87JBjqkAVb4n7brfqJbKRqz9GpxR1r6O8pzOXfLMyeKVIooPWvvKetIquTpzvR%2FdPmkI64aHuTKwVDZG%2Fmo%2FD%2FiFWoVxapumD8lOnPnS9092VF%2F%2B6LNy5KZiDtVg1etKUEyM%2B7HPbOeNBiDTV7VWZfG4d0MOmdc1kpiciQx%2FLAYgCq2Y7p%2FpkYgChgEvm0WGXgCzNRypYVWRZpGa%2BdSLVIVZi2S2BTDzc2e&X-Amz-Signature=8ed8ac047d127ae3cddbcfb490cb8a2aa52f47c7c6755721386eda37fa71a180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6C2ESH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3BgPis3clIQ31ibvdltJT4WVeuX%2F9k%2B634bIR00hm3gIhAJ%2FfrVe%2FqKbKuIFMPuN2Dck0ALNcAxOIDu%2BR8l5%2BR2ItKv8DCG0QABoMNjM3NDIzMTgzODA1IgyFv3nrIC%2FU2c2K%2FN0q3AOGj3MIheGrlKWp%2FV5mzzE8QPzjz4I3bIGpmxE8BwCgjt6JYTcRa3CRykpiDUELX3EO5uEksYtVzR%2BdwUbmG8fQuJigyeX6LduCSd76zo%2FmUf6zbyqS7XDHnL0vhqNhYzbfWNTzeHsL9P0CJAkkTdC%2Bnu%2FHZwjte04Lo4cGYS7aEbh9RZbJjvV5GHi3qBSHASf7hXUkzG6nuoK8vZTwrQeXOxo14UlonvaHZygbvs2V9gwxLx9diRx30%2B%2FeYrmWIKi0gpcL%2FsmNNO3sNkPrcEaHbzD8heoILVHbdzDmZ5zH93jP7crucnikKw7OWZpB%2FB7lZoj%2FuYS%2F65kvtbuWk4W9VgKycOuD%2FEiPOqqAtiQDEO5nCmrpAySvCL8BTxHNxvZV7syV7eTnMou0XPC%2BTUW59N4wZ16599d4t16rIug1WB%2FmHHXy%2FWkpFtboafElWF0ewI2yI8PMHjlxWkN91qtthu0TeC8d3LoXpiWclfLPUB4qt55mwDRGHglT%2Buyzgxn2a8Po9lpuHg6ZwDeTxikGTImor9SsjxuGhsJKn16dD5FUDG3kxYIJo9ssKmHV7O0xIKtmxOzL0Y1qM5YqDAfC7K9lSDQf6blikoVeCuMDQR4CPLesh4VgIhkrWjDjw87JBjqkAVb4n7brfqJbKRqz9GpxR1r6O8pzOXfLMyeKVIooPWvvKetIquTpzvR%2FdPmkI64aHuTKwVDZG%2Fmo%2FD%2FiFWoVxapumD8lOnPnS9092VF%2F%2B6LNy5KZiDtVg1etKUEyM%2B7HPbOeNBiDTV7VWZfG4d0MOmdc1kpiciQx%2FLAYgCq2Y7p%2FpkYgChgEvm0WGXgCzNRypYVWRZpGa%2BdSLVIVZi2S2BTDzc2e&X-Amz-Signature=14ed02c5cec406e507c46e8499796b9e46482a083535de11ff1017b395f93411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
