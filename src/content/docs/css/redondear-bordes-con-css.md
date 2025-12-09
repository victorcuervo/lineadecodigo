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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYQWRJT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiHDvDRssdgivKdQWJe7zDhjkzIqY0tlohDR8xrOLYPAiEA2EKzMr1bMvA4TGyqaT9II%2B5RYLhMpsD4kxhfa9XJtrcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEd48SZJ59UiDqahCrcA7GdHLATlsF6H6EKDUN3zC048cn4ONV8rJa2Udv20Q0r6S7brdppmfOK3OqWR9%2FjhI3aivySTCdHkXDlAn9CUkuMGE6g2k%2FerAbdRfZ8gDnvi31jgSyh5yTNXI%2B1r9N4urLjFE13FjI9nmb8BW852tgFDccJ0E775ejh7dk9fmTPmgLU3TtwoOvUVqGvFNBxts3WgdqE6ODgM9aUNhk3ZRJqcfj7lNKN9wwzRGGM9y4rQknPTx4QSG6geNh9%2FlwOAE4sUPQ%2BAEBl4OqN89LfTCQazNp6pBBbtPPTj7QTKr47XwXcHf4y3aSR6FtM0Sz4P20TV7vtH081qPXmsxHe9PGXV1DbRwTrJwMKqcw7Av%2FoLuE%2FLCKPJwEEW%2BMcjDWYEI7XEqMilQxjfF%2FuDCzzGdmcupAkbhWpXJRjyNU4cX0MuLADbHL9dn%2BXx27%2Fkjw6TT41iwnCv6J6SOA%2BkmJpkCiZEmSIF%2Bq8VffaOezK7LbkcWzz5I%2FmCC%2F2yNzptF%2BAKMK%2BEy17KuI386YQUot2neMnnRpb5hM46B%2FZDF7NqsniijL1n3l44ayjjMhCAbIFAgTnaG%2BV7Eq3f%2F6a1%2BuDqDpkIp6lUGKS8zdBuOjRUVsgjKkLLEEMhlYvI%2Ba0MI3E38kGOqUB3caj3fOzmuH6nnbX5ZIbdBktpqG6lKyckoLtW8t%2B35ZpmQQP5DHqlL6%2BCWb%2BoGh%2BDZAqlViLlSslOXpWQzVqtSUcr%2BSvYKBs9AOcQpoi14aUgU1t%2Bg4XyDUoFQc2dMEwFhua1z%2BQs5LfyWd%2FeYk58deGJCaRdu09TlNDNdzGhYb0gKxaMzNPwVC5mnXfj%2Bgvn8aiZVo9ZF6ffYCCPkCsGmULeX%2BG&X-Amz-Signature=d5037bcc6c2bf419670eb20ffdc52ec5828d08c8fb2217ca3cd2117fa8dacd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYQWRJT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiHDvDRssdgivKdQWJe7zDhjkzIqY0tlohDR8xrOLYPAiEA2EKzMr1bMvA4TGyqaT9II%2B5RYLhMpsD4kxhfa9XJtrcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEd48SZJ59UiDqahCrcA7GdHLATlsF6H6EKDUN3zC048cn4ONV8rJa2Udv20Q0r6S7brdppmfOK3OqWR9%2FjhI3aivySTCdHkXDlAn9CUkuMGE6g2k%2FerAbdRfZ8gDnvi31jgSyh5yTNXI%2B1r9N4urLjFE13FjI9nmb8BW852tgFDccJ0E775ejh7dk9fmTPmgLU3TtwoOvUVqGvFNBxts3WgdqE6ODgM9aUNhk3ZRJqcfj7lNKN9wwzRGGM9y4rQknPTx4QSG6geNh9%2FlwOAE4sUPQ%2BAEBl4OqN89LfTCQazNp6pBBbtPPTj7QTKr47XwXcHf4y3aSR6FtM0Sz4P20TV7vtH081qPXmsxHe9PGXV1DbRwTrJwMKqcw7Av%2FoLuE%2FLCKPJwEEW%2BMcjDWYEI7XEqMilQxjfF%2FuDCzzGdmcupAkbhWpXJRjyNU4cX0MuLADbHL9dn%2BXx27%2Fkjw6TT41iwnCv6J6SOA%2BkmJpkCiZEmSIF%2Bq8VffaOezK7LbkcWzz5I%2FmCC%2F2yNzptF%2BAKMK%2BEy17KuI386YQUot2neMnnRpb5hM46B%2FZDF7NqsniijL1n3l44ayjjMhCAbIFAgTnaG%2BV7Eq3f%2F6a1%2BuDqDpkIp6lUGKS8zdBuOjRUVsgjKkLLEEMhlYvI%2Ba0MI3E38kGOqUB3caj3fOzmuH6nnbX5ZIbdBktpqG6lKyckoLtW8t%2B35ZpmQQP5DHqlL6%2BCWb%2BoGh%2BDZAqlViLlSslOXpWQzVqtSUcr%2BSvYKBs9AOcQpoi14aUgU1t%2Bg4XyDUoFQc2dMEwFhua1z%2BQs5LfyWd%2FeYk58deGJCaRdu09TlNDNdzGhYb0gKxaMzNPwVC5mnXfj%2Bgvn8aiZVo9ZF6ffYCCPkCsGmULeX%2BG&X-Amz-Signature=e2cb4ad59ed1df82713212afd5f53a88b3586b8f96d5451c7b1f9f7f1b4a4b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
