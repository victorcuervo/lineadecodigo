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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOR7HUIR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbwIBCm2ufbebNxxPzGE%2BzpeAPeE%2F5gQGPTLpJFvGE8AiEA8j2Fk2BtU3yVKfiGqSm0nNPQaONkU9th6Nz4juidqSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKjUNtctKCocfKBkIyrcAzFShccos8me6Y%2B%2FLZvGs73b1oPc%2FqzH2jhpKQPhSkCTDFsjl1fWFmwvSOJ50640QZeIVOO%2BBUiKK3sWQrMRxNxqfat7UDEoyZmpcpH6EcKW%2FypPjqQxI%2BKREjpSP7zjEgS4S%2F6R7MdI96GZZX3AZcM3KRZRpt6M5mLZv%2Bg30yR5VdZBpFfOhSE8%2BZmJPjNO%2FIKkuespDtflG%2FeCR4xc57WFif0nNF6IIib0zeMadq1kg%2F7MR3zoYJoCtSb7FChXHSnf4c0o6oHyGW%2Bz9r2ZqCoyrw3qv%2FJynpnV8qMwr7GLN%2FHxPv%2BL7TesWrfNgNVmD6fFFir2xSb7nFka3Pf1UMls6EmGSFxiXYB89D6C2WmLtXeussDf%2FwIyud9etPKnx92sr2thKTqmHaZH7PZavyWZHuXTHdXeZtqAlkpTOigt2015J%2BM0y%2FS5j6WmGIZe2KfkdJ0p1MzgGHAsEX3zExv6m19YZMOZkXoKeZEs7oliGgGiZuP4rlY8hKqFeH6tk1do1Oa9QuKfHspdQaj%2FL706R8qA5vOJLYA%2FNAcsoKuy%2FCRTkpM0cWxTyEznUFF8CvpTNhq1bi3Gwlz%2Bxxk9KdsTkbccOxFaRJzovpxsXhTd0%2BjdciE6kSJgpLYrMJ7jisoGOqUBxwCBsL1fMez8k7qftyPOaybJ4R%2BEJtu67maS6rMJE%2B%2FdU7i6y6vqXKCfa8GyEsTur%2BN3FTAMCtn9X%2FmJMQFU6coZEPa3m9huHtXvZoTW9B9X%2BpnmdPpavl2PrhZ%2Bo59XpZFgvWfaxroOGE1QJqtaW9tQquX5rJQfaHh%2B3R5fBIq3saaxT35GjK1koSO%2BGL69EMp8Lw7K8coU20HJLGNqc9XyrV8p&X-Amz-Signature=ed7a8c04168d1ccaa084e2e21d595fd3b0e1d1bd682f6be9175a6f8263ecf39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOR7HUIR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbwIBCm2ufbebNxxPzGE%2BzpeAPeE%2F5gQGPTLpJFvGE8AiEA8j2Fk2BtU3yVKfiGqSm0nNPQaONkU9th6Nz4juidqSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKjUNtctKCocfKBkIyrcAzFShccos8me6Y%2B%2FLZvGs73b1oPc%2FqzH2jhpKQPhSkCTDFsjl1fWFmwvSOJ50640QZeIVOO%2BBUiKK3sWQrMRxNxqfat7UDEoyZmpcpH6EcKW%2FypPjqQxI%2BKREjpSP7zjEgS4S%2F6R7MdI96GZZX3AZcM3KRZRpt6M5mLZv%2Bg30yR5VdZBpFfOhSE8%2BZmJPjNO%2FIKkuespDtflG%2FeCR4xc57WFif0nNF6IIib0zeMadq1kg%2F7MR3zoYJoCtSb7FChXHSnf4c0o6oHyGW%2Bz9r2ZqCoyrw3qv%2FJynpnV8qMwr7GLN%2FHxPv%2BL7TesWrfNgNVmD6fFFir2xSb7nFka3Pf1UMls6EmGSFxiXYB89D6C2WmLtXeussDf%2FwIyud9etPKnx92sr2thKTqmHaZH7PZavyWZHuXTHdXeZtqAlkpTOigt2015J%2BM0y%2FS5j6WmGIZe2KfkdJ0p1MzgGHAsEX3zExv6m19YZMOZkXoKeZEs7oliGgGiZuP4rlY8hKqFeH6tk1do1Oa9QuKfHspdQaj%2FL706R8qA5vOJLYA%2FNAcsoKuy%2FCRTkpM0cWxTyEznUFF8CvpTNhq1bi3Gwlz%2Bxxk9KdsTkbccOxFaRJzovpxsXhTd0%2BjdciE6kSJgpLYrMJ7jisoGOqUBxwCBsL1fMez8k7qftyPOaybJ4R%2BEJtu67maS6rMJE%2B%2FdU7i6y6vqXKCfa8GyEsTur%2BN3FTAMCtn9X%2FmJMQFU6coZEPa3m9huHtXvZoTW9B9X%2BpnmdPpavl2PrhZ%2Bo59XpZFgvWfaxroOGE1QJqtaW9tQquX5rJQfaHh%2B3R5fBIq3saaxT35GjK1koSO%2BGL69EMp8Lw7K8coU20HJLGNqc9XyrV8p&X-Amz-Signature=7cf8cfe72dc60b324cd4df21ee0e1c924854f03ea4e2eafb60ee886e571368b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
