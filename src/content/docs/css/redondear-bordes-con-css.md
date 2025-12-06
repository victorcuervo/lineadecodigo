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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVXFTOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUZ60eNBGpmHkc%2FoeeNB9VYKtmzdCoqh9Fv2dUC0hqKAIhAI8sHzTYOyTvV41g5GZ0XMoyFAlM6hx7V%2B6Yq2K0zzLUKv8DCHoQABoMNjM3NDIzMTgzODA1IgyjfTA8HgtcSK0eqNkq3AN78OQmErRYcXD1PWLkXckE4XRYY%2Bjhy9I5Ubu1WyitFxpJZo20AzJ%2BJKlVkbwgJ0ZfVL07tp0Fmr2AtrinuVeeHWWA3lX0WpWq6mP4K0zpovQzKajzu%2B0YTVVTmD90eZ4%2BWgWES5UVNSym7S7F7t4uigia3ndiZ5jQGlYUSTqbIfPaEA5Z%2F2A4jHKtaa4PmhNlbr3gkewO9%2FToTTLOiIzu7rE6Vo3N0tBWK3QRMFB0vlfQw79WKvUfXxUQPnxPlr2ca9aStKlcC4WL%2BotPLoAfbMnicsA8yATq1IbpKulffZtH%2BQt5WghjsydjLjg%2Bmxoude9uxtRrmFw6VRU1y%2BWHnddKXQ8KBgMD6O78%2FSm90OrON2xfjKgxYXdl5GctJigtPgi1naHeeEbKLIabWD4U1Jxl9No%2BNAmahJIoU0hfhTxsEdxUhBUhJ6agYznR1FHB0exllc4LorS39MVuY2rilYTbI4u12ZxNMqNIbXVa22B6hV8cD7wFlXqFrpHTlFQBilwNTIetVTGHTwQqtXOsS%2FawSTv2yaLzQcEl49pysikld%2BIz1%2FAxqsRo5Pw%2BhEm%2BeKFWgexxMvjfO0nbQuRBs%2B%2B7WtEhlUqiWhmvS3GsuZkudTJBxqcuMy3YNDCWyNHJBjqkAaC5zmyQ4TOWBv0j%2FILxAUoS6KfhDE9IootN3NL2q%2FjDqr8ycam9S0AZvcfm0oAUG1QgWzEM3ehSQ6MOayYuNFG8nbEoOhJbe0hx5LXzz8QBbpeo1CuymUdxdaGvkH4%2FDkIu14aPvIjfVw7%2BlTlNN1dYcFj%2BXY48K%2Fl5ohSf9Qmxiia5MLCt9Apo%2Fm6ylEKT4tYFNp%2BMInSx8INnne1Pp0GZBWVt&X-Amz-Signature=8cb72ced99f47cc050caa11af6ac5c76793f3dfea808c416a4030aa61a57e439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVXFTOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUZ60eNBGpmHkc%2FoeeNB9VYKtmzdCoqh9Fv2dUC0hqKAIhAI8sHzTYOyTvV41g5GZ0XMoyFAlM6hx7V%2B6Yq2K0zzLUKv8DCHoQABoMNjM3NDIzMTgzODA1IgyjfTA8HgtcSK0eqNkq3AN78OQmErRYcXD1PWLkXckE4XRYY%2Bjhy9I5Ubu1WyitFxpJZo20AzJ%2BJKlVkbwgJ0ZfVL07tp0Fmr2AtrinuVeeHWWA3lX0WpWq6mP4K0zpovQzKajzu%2B0YTVVTmD90eZ4%2BWgWES5UVNSym7S7F7t4uigia3ndiZ5jQGlYUSTqbIfPaEA5Z%2F2A4jHKtaa4PmhNlbr3gkewO9%2FToTTLOiIzu7rE6Vo3N0tBWK3QRMFB0vlfQw79WKvUfXxUQPnxPlr2ca9aStKlcC4WL%2BotPLoAfbMnicsA8yATq1IbpKulffZtH%2BQt5WghjsydjLjg%2Bmxoude9uxtRrmFw6VRU1y%2BWHnddKXQ8KBgMD6O78%2FSm90OrON2xfjKgxYXdl5GctJigtPgi1naHeeEbKLIabWD4U1Jxl9No%2BNAmahJIoU0hfhTxsEdxUhBUhJ6agYznR1FHB0exllc4LorS39MVuY2rilYTbI4u12ZxNMqNIbXVa22B6hV8cD7wFlXqFrpHTlFQBilwNTIetVTGHTwQqtXOsS%2FawSTv2yaLzQcEl49pysikld%2BIz1%2FAxqsRo5Pw%2BhEm%2BeKFWgexxMvjfO0nbQuRBs%2B%2B7WtEhlUqiWhmvS3GsuZkudTJBxqcuMy3YNDCWyNHJBjqkAaC5zmyQ4TOWBv0j%2FILxAUoS6KfhDE9IootN3NL2q%2FjDqr8ycam9S0AZvcfm0oAUG1QgWzEM3ehSQ6MOayYuNFG8nbEoOhJbe0hx5LXzz8QBbpeo1CuymUdxdaGvkH4%2FDkIu14aPvIjfVw7%2BlTlNN1dYcFj%2BXY48K%2Fl5ohSf9Qmxiia5MLCt9Apo%2Fm6ylEKT4tYFNp%2BMInSx8INnne1Pp0GZBWVt&X-Amz-Signature=aa5e1053187e9dff51962fab98aacc0f98851004deca20fa8bd9b1cfe2c522da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
