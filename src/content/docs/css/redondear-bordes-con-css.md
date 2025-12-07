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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD5YGLL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5iZPYFjBseGI%2BGzt%2FYH%2BmFx9GJ1shRJJJLrkp2JtggIhAJJ7395E5lJcilK82DHhoohu4kOOr%2F0yGGTON74FlW4xKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9vw4OEST4IusyR2Mq3AOPoJmjA9s9U%2BM6MgqC0NewtvJwa74g%2Fz5ryzSHII%2B43An3ZN4Dl877IKEoDrVB7KGlDo63Y6Ib35LZWV958%2BQcRz2WgsYvcEnli1ZAR3q41TW98cUKZQggCYneJjr445VJrkWsaAaLRhMq8wmGyUaAfm07uu2z57nGZcXuTSnMD5C%2Fs1oK%2BrX7IDXaRat3EtjyqDDKPPmPg43H0SCCKiJ%2BXgFwuBy2zlATdx1w5oO6HEvVTpiU96TpkosrRl74%2BMS1qoVd76i%2BzezMBlmj%2FhIyGuf0VQGis%2F%2F9FRQ1hwKH8AXwJ2F9IZHTS8wNSoHNsR5sLdj3iNt%2F32wmMyAyhYwIxgmxD%2BY1Lp6uYmHiNGqLxnr1V03TAAsCx3ouNwx461EmR4nTPkrPWKaOB3ddtrWAMbkbWc4E2vYZjO6o7sZR4MiTHDU9zm2zFTP0%2B8sXFgGWsaR9w4bFES%2FLCO44G90DegmQj1DCvIjUZSRwletyl3OXmZ4A6boKshuLMoiBes%2F1fkiz8sFh2vQ6jO0dLBxuvZi91qWzHRZ0J8HK7uisjr%2FCS0HslDuVo991En700xTX6HfF6Ef7gycpBQe2H2rLZY2hhZcPYa8sPHutFqQyxleHpeEdIf2b5W7gKDD6v9bJBjqkAfRCi%2BrHllXWTdfKWOXqw0fYLAZb88beI9xQeJAU9etWqdDmc3l7gDKc5eEQNve1x5ycZuq9tdHl0dWGKh2w0EAX21Mh8YOSnKl1163MGBq%2FOxc7eCF2KhmkZg7UK56IxCBl4jyR4eXnP18ebYwKCytEVMbiicrsAFVBx6JxcEDdOB7Se9q8ah5zh7VJIF0CZulDyng7NdFlS7GJ%2FmDnJoUI75jt&X-Amz-Signature=1a1849f5eb087b790373ec4c346b676cd69d4eb461deef04021b603ea87c72b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXD5YGLL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5iZPYFjBseGI%2BGzt%2FYH%2BmFx9GJ1shRJJJLrkp2JtggIhAJJ7395E5lJcilK82DHhoohu4kOOr%2F0yGGTON74FlW4xKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9vw4OEST4IusyR2Mq3AOPoJmjA9s9U%2BM6MgqC0NewtvJwa74g%2Fz5ryzSHII%2B43An3ZN4Dl877IKEoDrVB7KGlDo63Y6Ib35LZWV958%2BQcRz2WgsYvcEnli1ZAR3q41TW98cUKZQggCYneJjr445VJrkWsaAaLRhMq8wmGyUaAfm07uu2z57nGZcXuTSnMD5C%2Fs1oK%2BrX7IDXaRat3EtjyqDDKPPmPg43H0SCCKiJ%2BXgFwuBy2zlATdx1w5oO6HEvVTpiU96TpkosrRl74%2BMS1qoVd76i%2BzezMBlmj%2FhIyGuf0VQGis%2F%2F9FRQ1hwKH8AXwJ2F9IZHTS8wNSoHNsR5sLdj3iNt%2F32wmMyAyhYwIxgmxD%2BY1Lp6uYmHiNGqLxnr1V03TAAsCx3ouNwx461EmR4nTPkrPWKaOB3ddtrWAMbkbWc4E2vYZjO6o7sZR4MiTHDU9zm2zFTP0%2B8sXFgGWsaR9w4bFES%2FLCO44G90DegmQj1DCvIjUZSRwletyl3OXmZ4A6boKshuLMoiBes%2F1fkiz8sFh2vQ6jO0dLBxuvZi91qWzHRZ0J8HK7uisjr%2FCS0HslDuVo991En700xTX6HfF6Ef7gycpBQe2H2rLZY2hhZcPYa8sPHutFqQyxleHpeEdIf2b5W7gKDD6v9bJBjqkAfRCi%2BrHllXWTdfKWOXqw0fYLAZb88beI9xQeJAU9etWqdDmc3l7gDKc5eEQNve1x5ycZuq9tdHl0dWGKh2w0EAX21Mh8YOSnKl1163MGBq%2FOxc7eCF2KhmkZg7UK56IxCBl4jyR4eXnP18ebYwKCytEVMbiicrsAFVBx6JxcEDdOB7Se9q8ah5zh7VJIF0CZulDyng7NdFlS7GJ%2FmDnJoUI75jt&X-Amz-Signature=c1881f992130e00dfd7c46a9a2fd93c01e309a4af662943a274cd00dea15bdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
