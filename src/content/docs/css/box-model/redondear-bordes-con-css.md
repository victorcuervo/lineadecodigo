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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG37DFWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6yw0dFT2hhsEvErVYB0bE1RQg8WpqXaNnBKe9QBMiQIgAgSFwp5SpEPkpgOM3s93sW3ng7w82Htu%2Bf%2FzC28Yu%2Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDV6MWo4ujHUYp1lDCrcA4n5WKOb5AIyOuiOdF9t5m8cRQSHPJ1R5D%2FVB0ZHWQXe2HXGk3%2FPm3Mdi5IICbo7q8EeE%2BoX8lpQJQfEPcz4G7Jvdf%2Fzt%2Fysu8bWBtYJzd2VRwoGp3pRJacudd8tLBtawD802BmrSniBnn8V%2F3GtX02RjRA0iM65tqCsdTWmbz3XAdlEDtJkSzWXh8xyecO13lrquYHXGdSayKN4ZMrvL1l4NOFd8l4zVUAZH31jKak%2FCNmY%2Bxy1dRDr5SJh3mNz%2FdKxJ19vZ1Vka8DNRqEvVilJHKOB0Xqs%2BeytmwVVInmTj%2BBPY1DxgtvBJltwCdAwJbXnmkyZkE4b550lESHw%2FD0a80LeDiCK9AfLIbRmZwq3grJZ0WEFcjBGa2phzoj4GIlPphZp50D1JbUVe8167dutDbHUx7WIC%2BloWBA1ESShXRol1vTPOsWMbJDq8fW42aauHaad%2FPoVZN%2FIi%2F0cpXkX5v0CIUdVpD67itOnXblooPkYcHtqKfsWV161A5AhR5LiXLi0mZIwQwSDNkFlinY%2FyiAEPS0tzJBDNnDMM1N8EOdfl5Dhwf0aj8qF22yHGPP6efZYl1%2B9nIGhnUjdeENshv8zgEOIj85SfzDqKKBzQxiwmJg2CUF8NiU1MIzhisoGOqUBx3B9Pvpt9O78pfHFv%2FiD5oCa6U2YHnkTOR8%2FsgRpHFxW4NV0BCHJwrVHQw4se1lomFsPoqw4DBQg8qQG%2Fhk9fiTJttJPPTgwtLb31eYW9b%2BIWJUM1hZBlnbrUkXw%2F3jzkwdGKuC0JbHcC0kofYT1S%2BY77rybw47XtsgAvg5eiwG9Fxo10JMWrlUs743KvhjbeD4vM%2BePJ%2BOlKO6TMSGves18pVyG&X-Amz-Signature=3a9acdcde1cfef4fdf19eeb43aa29d030f239038cc78f20e078779a8eb92c1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG37DFWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6yw0dFT2hhsEvErVYB0bE1RQg8WpqXaNnBKe9QBMiQIgAgSFwp5SpEPkpgOM3s93sW3ng7w82Htu%2Bf%2FzC28Yu%2Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDV6MWo4ujHUYp1lDCrcA4n5WKOb5AIyOuiOdF9t5m8cRQSHPJ1R5D%2FVB0ZHWQXe2HXGk3%2FPm3Mdi5IICbo7q8EeE%2BoX8lpQJQfEPcz4G7Jvdf%2Fzt%2Fysu8bWBtYJzd2VRwoGp3pRJacudd8tLBtawD802BmrSniBnn8V%2F3GtX02RjRA0iM65tqCsdTWmbz3XAdlEDtJkSzWXh8xyecO13lrquYHXGdSayKN4ZMrvL1l4NOFd8l4zVUAZH31jKak%2FCNmY%2Bxy1dRDr5SJh3mNz%2FdKxJ19vZ1Vka8DNRqEvVilJHKOB0Xqs%2BeytmwVVInmTj%2BBPY1DxgtvBJltwCdAwJbXnmkyZkE4b550lESHw%2FD0a80LeDiCK9AfLIbRmZwq3grJZ0WEFcjBGa2phzoj4GIlPphZp50D1JbUVe8167dutDbHUx7WIC%2BloWBA1ESShXRol1vTPOsWMbJDq8fW42aauHaad%2FPoVZN%2FIi%2F0cpXkX5v0CIUdVpD67itOnXblooPkYcHtqKfsWV161A5AhR5LiXLi0mZIwQwSDNkFlinY%2FyiAEPS0tzJBDNnDMM1N8EOdfl5Dhwf0aj8qF22yHGPP6efZYl1%2B9nIGhnUjdeENshv8zgEOIj85SfzDqKKBzQxiwmJg2CUF8NiU1MIzhisoGOqUBx3B9Pvpt9O78pfHFv%2FiD5oCa6U2YHnkTOR8%2FsgRpHFxW4NV0BCHJwrVHQw4se1lomFsPoqw4DBQg8qQG%2Fhk9fiTJttJPPTgwtLb31eYW9b%2BIWJUM1hZBlnbrUkXw%2F3jzkwdGKuC0JbHcC0kofYT1S%2BY77rybw47XtsgAvg5eiwG9Fxo10JMWrlUs743KvhjbeD4vM%2BePJ%2BOlKO6TMSGves18pVyG&X-Amz-Signature=a97e0dd01883d8e7c45c40311ffc595cbb7521de08a4ba8e55496eec6c72c736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
