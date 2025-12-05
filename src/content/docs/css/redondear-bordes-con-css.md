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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDASZPO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcJ3OLovKgBOOiW9QyOJDm1b6D%2Bko36%2FtY%2B3g4NpIrnAiAd%2FFpJaU6p0CntoHG0BZHyc1nlMNrce6gyf9N6hfGVWCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BqWR2UPG0hfoxyZ9KtwDk2yYbkvhIF8jpQMHGVXzAnOwjP9%2BWrxjdjZS1ghiSbvMBlDdD4uW40rZPqmCzTUrTE5khIkcd0Mtr%2BBGAQ6vwTCvnUm6ycmve3mH5mBfpbmqmudHOVAviiM5sgjoev4syCKqJHQJtBMvIaUAlq9Heo6ZU5mx9fqFvdZQvk5hMFXNIJ4QUxRrqM%2BInHmhRzOg2WQ0gTJmsgQV9JFWaWl7%2FTwC3D9gjcJ1Da9dS5vWim9lv0CFbUG2MUodAMBnb8yPh3GL2p9XshMWKC4dIzKOk4m4q7o9dx8nPpacxZikOSacGOYaNx2WayoM%2FaKBpsMPH5q1IxPtDxbt83F%2FExZJHy9FLOmKSV1%2F7d2V6afKK%2BUk7pmks9xrvWlvK%2BUPLZcZvYHPcAhIknZwP43xsb0RvcZOFCQe2ilvhzdVNCVCWdTrtP6s5%2F9BbH2zedrRJP0CGmeLPwwtLJETLJijkwc7a7R3XOOrZoCddx0JzbA7o%2FLgGMZ63L4hF31fuJjO3syc1DC4DWipENhQZN8j0eEcLZWX%2B3lmujdPl8INoTfBdWjMkmSX2PkVqOorYpkmPzDKE%2FR84a%2FcpvTpf12axqWia9Ba7BOpWlpHpd5VEgpZ%2BBmX9Y1Ac1mJMcIQaXAw56rJyQY6pgHD0nYSJXHwjDsO%2F6MYjrLC19%2BO6PMdDlO32PsCujVnAv%2FHAc87KpTulN5c6CJN%2FqpkskU1P1NhMFKDVttokptuHmI6r2J4OEjCGoznskrzV9Dl%2BK7l68FAHQjx6WXyiR%2BXTyep%2FhFmQ4BhcjDSfnb%2F4KY9zWF5JilsepwNZeQM1XcQaORqWXmvBAs5KRnxG0TpqFPx5rMP%2BKTfH6dvxv7JrE2Ozclf&X-Amz-Signature=83a1c6f314e7c735ea5032afbe4936ffb48bdce545416dba6410fa84b64a1138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDASZPO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcJ3OLovKgBOOiW9QyOJDm1b6D%2Bko36%2FtY%2B3g4NpIrnAiAd%2FFpJaU6p0CntoHG0BZHyc1nlMNrce6gyf9N6hfGVWCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BqWR2UPG0hfoxyZ9KtwDk2yYbkvhIF8jpQMHGVXzAnOwjP9%2BWrxjdjZS1ghiSbvMBlDdD4uW40rZPqmCzTUrTE5khIkcd0Mtr%2BBGAQ6vwTCvnUm6ycmve3mH5mBfpbmqmudHOVAviiM5sgjoev4syCKqJHQJtBMvIaUAlq9Heo6ZU5mx9fqFvdZQvk5hMFXNIJ4QUxRrqM%2BInHmhRzOg2WQ0gTJmsgQV9JFWaWl7%2FTwC3D9gjcJ1Da9dS5vWim9lv0CFbUG2MUodAMBnb8yPh3GL2p9XshMWKC4dIzKOk4m4q7o9dx8nPpacxZikOSacGOYaNx2WayoM%2FaKBpsMPH5q1IxPtDxbt83F%2FExZJHy9FLOmKSV1%2F7d2V6afKK%2BUk7pmks9xrvWlvK%2BUPLZcZvYHPcAhIknZwP43xsb0RvcZOFCQe2ilvhzdVNCVCWdTrtP6s5%2F9BbH2zedrRJP0CGmeLPwwtLJETLJijkwc7a7R3XOOrZoCddx0JzbA7o%2FLgGMZ63L4hF31fuJjO3syc1DC4DWipENhQZN8j0eEcLZWX%2B3lmujdPl8INoTfBdWjMkmSX2PkVqOorYpkmPzDKE%2FR84a%2FcpvTpf12axqWia9Ba7BOpWlpHpd5VEgpZ%2BBmX9Y1Ac1mJMcIQaXAw56rJyQY6pgHD0nYSJXHwjDsO%2F6MYjrLC19%2BO6PMdDlO32PsCujVnAv%2FHAc87KpTulN5c6CJN%2FqpkskU1P1NhMFKDVttokptuHmI6r2J4OEjCGoznskrzV9Dl%2BK7l68FAHQjx6WXyiR%2BXTyep%2FhFmQ4BhcjDSfnb%2F4KY9zWF5JilsepwNZeQM1XcQaORqWXmvBAs5KRnxG0TpqFPx5rMP%2BKTfH6dvxv7JrE2Ozclf&X-Amz-Signature=f7080c013a201afa99f066b515038e71602e295e06e9cd755902131802457609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
