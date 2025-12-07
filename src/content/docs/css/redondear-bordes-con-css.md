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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPL3HPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBrYJWzXMw2mehg2sUrAOH0tPaNCxaYSSFsP%2FecwptgIgOtOCpQe8WC%2Bc5BS4YuvR%2BCYvFMtsBVJUikRsrDzBHO0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIpGm6N2S9vkOtkeSrcAyA%2FEgxDe5WtklWLOaIX6AMGFlVHA7Vjm596iXsJ2Mf6GKao3dIkoevv6ljsokZUkxCL5okPR33ra6prFwJLPfdn6yS462Gwzuc6yyChLqaZVzKylX7TAVPQ5f8Sx4Kozac90YNayDoH6M8Q8iGtrvUe0w88LE0OuSWAwetoMymk28MBQVIigIi6PYO7sWw6aPl60X5XN13FfgGu%2BZY64yFl1nYyvTP%2Bq4iaQppwMccpE1hG6va5Lqu3ZSikg9aCcIhQLY12kXow%2Bj2yBTfD%2BlqmlBzydXnkXSDz4vSHK6GnAq5krd4Fm4N5DavHP%2BiqkLhtjwbhnO4%2F2XMXTjY%2FwmO6SNApTEoZaB0TCxxghXiSlw8WpqLbh3PGhC9dDfi0%2BQJscglU%2B3YAkW0I2gnSHCZZt0OtQ3nkEX%2BIa0IbW3lf3%2Bvy8ZOh9qp8GI7MlqSiPjv2JDNC7ZQdeQUyEWygPc7gIryMB%2BB%2FuAy3qLlWFfTRlXOCeUIWhUN%2BIpQUFhD3HSs%2FP9snezPLNGSFMmhDaWiMe11LOe0pHFQAw7%2BCTsazIXuaKnGJBdqQ80EBlM4DIH8Mzf4h8D63tjw9MVawhJNUn9MD71552pYHP0bh0zrN4L1rHPHEdNE3zcjXMMya1ckGOqUBOp9hamcBu2KLkBdZLWJS7sQ7IxGZbhqAzE1dhRnxj%2FrsB2SeMPDlzRgDNnw%2FHrOMmMHqh9SxzmiteJyRvFzRUYxqCvCJky%2Bm9Mx0sVVKOfGpdMLCMFT2QkcUVLNZ%2BbzcSfgWCwGIecUS%2B7V3HCt04RNkCd4ikKtmXebGR7v8b2f%2Fd%2F34Krz5o%2By53OUNNperupDNye6ZeePimFjnZ5PgKlIzwSai&X-Amz-Signature=da09e4e14a8c248659280f5920ef4f9e24e62ce9662893113fbcec1c9231032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPL3HPI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBrYJWzXMw2mehg2sUrAOH0tPaNCxaYSSFsP%2FecwptgIgOtOCpQe8WC%2Bc5BS4YuvR%2BCYvFMtsBVJUikRsrDzBHO0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIpGm6N2S9vkOtkeSrcAyA%2FEgxDe5WtklWLOaIX6AMGFlVHA7Vjm596iXsJ2Mf6GKao3dIkoevv6ljsokZUkxCL5okPR33ra6prFwJLPfdn6yS462Gwzuc6yyChLqaZVzKylX7TAVPQ5f8Sx4Kozac90YNayDoH6M8Q8iGtrvUe0w88LE0OuSWAwetoMymk28MBQVIigIi6PYO7sWw6aPl60X5XN13FfgGu%2BZY64yFl1nYyvTP%2Bq4iaQppwMccpE1hG6va5Lqu3ZSikg9aCcIhQLY12kXow%2Bj2yBTfD%2BlqmlBzydXnkXSDz4vSHK6GnAq5krd4Fm4N5DavHP%2BiqkLhtjwbhnO4%2F2XMXTjY%2FwmO6SNApTEoZaB0TCxxghXiSlw8WpqLbh3PGhC9dDfi0%2BQJscglU%2B3YAkW0I2gnSHCZZt0OtQ3nkEX%2BIa0IbW3lf3%2Bvy8ZOh9qp8GI7MlqSiPjv2JDNC7ZQdeQUyEWygPc7gIryMB%2BB%2FuAy3qLlWFfTRlXOCeUIWhUN%2BIpQUFhD3HSs%2FP9snezPLNGSFMmhDaWiMe11LOe0pHFQAw7%2BCTsazIXuaKnGJBdqQ80EBlM4DIH8Mzf4h8D63tjw9MVawhJNUn9MD71552pYHP0bh0zrN4L1rHPHEdNE3zcjXMMya1ckGOqUBOp9hamcBu2KLkBdZLWJS7sQ7IxGZbhqAzE1dhRnxj%2FrsB2SeMPDlzRgDNnw%2FHrOMmMHqh9SxzmiteJyRvFzRUYxqCvCJky%2Bm9Mx0sVVKOfGpdMLCMFT2QkcUVLNZ%2BbzcSfgWCwGIecUS%2B7V3HCt04RNkCd4ikKtmXebGR7v8b2f%2Fd%2F34Krz5o%2By53OUNNperupDNye6ZeePimFjnZ5PgKlIzwSai&X-Amz-Signature=5050e8faa298e43343366c866c4a8deacf31fb395f057a4531a4140e46586dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
