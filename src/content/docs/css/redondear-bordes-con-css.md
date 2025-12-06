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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMEBXQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp4b%2FrCSMcY8vfYacqLGk9gBiUvZu5OOW0ID7dOYqi1AIgD%2FrFk5P7caGih1LVpFlfMuxcfxxE3kA%2BCo8u8RlmwCwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKCb%2FnQabAU2qVde4SrcAxjCDJUOesQIFiDLcIXuwrj6JOcrHBzZsOFxNj0EEBrrJci%2Fyyo0%2FCwX7kojTcD4HfE%2F7OJbhmX4sj8SQ5sD4obzs7LXq1hc6U%2FvitPr%2F8hqJ%2BnjZyL%2BlLH%2FoeAy5WesVVr02N4w%2FgF3GqZp7p9jrne%2F6iqdpWlED2O220M7LTZ%2BeAYoV3WDY47Dq3LtcNeMUzgum1LdVHD21nzgHVA3ObPWpmH2mOP7mnmpUkZp%2FXv%2FTJWtql6CMAmpKGJMWnoOhmvJprgqdHpRHlogiZT9QGUrTGM5XIAOFYRo%2FPPHyb43Pzyfb3P4Cgq4VGB5NWcmCuzfhdgqq9ZMsnsDM8nwotOsuGqBM8GGhjvxLcrwyEcoh%2F0hSnirsVqgGPID6SbMiobbRcxqJ88gy42suWR1vPI%2B1FAu0JULu1O3leWoM25%2BP75pMnOYLjx0I9M6wBwNU%2FwOVSw7luHTNCXFkdhA2QaUGdOfiDHnJC1QNokL%2FSKFRpN5zH2jAl9EZkGxvFlnC%2Fh0r0UoGmvPsq04lp0b4fOsmeZ7m8Cn3Nmbn2wTt1yzDzXlDKl6YakgPZqZORDC6gN3%2Ftr%2BWYMdU%2BUfdTklKYXPgxwZQeVHngF8gfbtTI%2FbgOVo0KPnnrmY5XWzMLLezskGOqUB1iHVtbdEZ5jUq5g9MrhL0RQ9kbjVYqvLAtiNChudepbht%2F2MkyNDh07iqdCWJH45vHTQkDQa4GzwbUfGgYmKpjVMYDtkvk9OaYl6Iag8uAwdkFdmBCqbdY0kReik7%2FIHYjw6YsXIKzHQV6YVIpLUZfcOcggJRweOENz1rpvIJ3bOpMwSwBzLxgJPW4lrTIV%2BFX6r20akCPwOeFzVpxHJHUR9jJcg&X-Amz-Signature=4931db344f86ac6e6bdd5ae93f903cd735f4a2c6199b6c67828e29260543990e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMEBXQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp4b%2FrCSMcY8vfYacqLGk9gBiUvZu5OOW0ID7dOYqi1AIgD%2FrFk5P7caGih1LVpFlfMuxcfxxE3kA%2BCo8u8RlmwCwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKCb%2FnQabAU2qVde4SrcAxjCDJUOesQIFiDLcIXuwrj6JOcrHBzZsOFxNj0EEBrrJci%2Fyyo0%2FCwX7kojTcD4HfE%2F7OJbhmX4sj8SQ5sD4obzs7LXq1hc6U%2FvitPr%2F8hqJ%2BnjZyL%2BlLH%2FoeAy5WesVVr02N4w%2FgF3GqZp7p9jrne%2F6iqdpWlED2O220M7LTZ%2BeAYoV3WDY47Dq3LtcNeMUzgum1LdVHD21nzgHVA3ObPWpmH2mOP7mnmpUkZp%2FXv%2FTJWtql6CMAmpKGJMWnoOhmvJprgqdHpRHlogiZT9QGUrTGM5XIAOFYRo%2FPPHyb43Pzyfb3P4Cgq4VGB5NWcmCuzfhdgqq9ZMsnsDM8nwotOsuGqBM8GGhjvxLcrwyEcoh%2F0hSnirsVqgGPID6SbMiobbRcxqJ88gy42suWR1vPI%2B1FAu0JULu1O3leWoM25%2BP75pMnOYLjx0I9M6wBwNU%2FwOVSw7luHTNCXFkdhA2QaUGdOfiDHnJC1QNokL%2FSKFRpN5zH2jAl9EZkGxvFlnC%2Fh0r0UoGmvPsq04lp0b4fOsmeZ7m8Cn3Nmbn2wTt1yzDzXlDKl6YakgPZqZORDC6gN3%2Ftr%2BWYMdU%2BUfdTklKYXPgxwZQeVHngF8gfbtTI%2FbgOVo0KPnnrmY5XWzMLLezskGOqUB1iHVtbdEZ5jUq5g9MrhL0RQ9kbjVYqvLAtiNChudepbht%2F2MkyNDh07iqdCWJH45vHTQkDQa4GzwbUfGgYmKpjVMYDtkvk9OaYl6Iag8uAwdkFdmBCqbdY0kReik7%2FIHYjw6YsXIKzHQV6YVIpLUZfcOcggJRweOENz1rpvIJ3bOpMwSwBzLxgJPW4lrTIV%2BFX6r20akCPwOeFzVpxHJHUR9jJcg&X-Amz-Signature=ea9e80fbb953aa7faf1b1f148cb7fe47941f9ffcbfe8118dacfd6c64fc3aff02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
