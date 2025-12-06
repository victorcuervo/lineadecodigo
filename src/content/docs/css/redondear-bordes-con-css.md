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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5BRC6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwNaR5OAuxXzpf9wdjKOhSLsJqMM%2Fbv29bk3gP75uqAiEApRr6o2IdfeNvE7T1kRi2kaGdadrEz0gAHpZ0rj6IkK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEYNDqaHzaw0vbCpFCrcA7eOBX7f%2BtpTxPu6trjxxbVg3esloAZgJM%2Ffl9nMgbH3PCAu1OSvs6hPiCBvijXv3eULWne3sPtn2SCO%2BUX48kqx9RqBKLLH6EVqmW0QOKQo3kDROB7%2FlG7V81bhgSOAKQhMRW5jxpUyAyLxDzfEkscHUZpKVWOYMqYt5YwPPUiLR4M%2FAcdiyxGCU5WPwLLNKWQ9r4ceaQxy29JOz7p320Thz7s5IGh2qtfpRr5INiTgLZN2%2Bh18vQZcOXoLOChG1sPBQabWwOZ2AfWWHy1MRV9ygO7l4qNGVom17IZ40FJ1nJII9V3ufyvjO%2BUhl2r4jfi4g8xnlgEnxYEdqb86TMPHPWv3uRbXpQkVbfGdnyg%2FfyMGU17sITwx5ltdagJxv%2FH4c2LUqfM7APsxxuq%2FBc%2F3iePEeZKy%2BZlyOhbzmA6ui7LPb3Eei%2BS2H4Bf7i5B0eTciluoUlCuTbxWiMyvWfREJfD%2Fcon%2FyyazWWVl01iHl0GITs1si8Ys81II7ets0xfDPZ4inhGbJ2%2BcaVvdhkeQHY6EbkXsZ0%2Bd4EPCRkaUxjVwUgqysY173QKrhh7ekZ%2FHqqO4E6GIcjQxkJQ45dO%2Fu0SpF5YKxMJ9diHzeuHDDbMF2o33Ghqaa1t7MJvK0ckGOqUB3WkHGinb4NZCzNF1YDxDSVVntJi8wAXcQyH69%2FY7DECoW1ZBwdnfQWZgxDmjNJd6F0uzQZAK9c%2FGCUC%2FIpXGDoVBykZ3HtmzEd5zrNuD7YtO7A38ppymh1HkV85MAjqk3x21H61NEPDbJvcwK2dZlSttPFzGD%2FnnCla0ETTkIPQsf1yPPqcpImoHNgr9IQIu%2FxBHS17SDEelSs8LqSP2vNuouTSl&X-Amz-Signature=9cb18be927dfd051daf029e439431944043b774ccd753f3446c9d08bc39a489a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5BRC6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwNaR5OAuxXzpf9wdjKOhSLsJqMM%2Fbv29bk3gP75uqAiEApRr6o2IdfeNvE7T1kRi2kaGdadrEz0gAHpZ0rj6IkK4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEYNDqaHzaw0vbCpFCrcA7eOBX7f%2BtpTxPu6trjxxbVg3esloAZgJM%2Ffl9nMgbH3PCAu1OSvs6hPiCBvijXv3eULWne3sPtn2SCO%2BUX48kqx9RqBKLLH6EVqmW0QOKQo3kDROB7%2FlG7V81bhgSOAKQhMRW5jxpUyAyLxDzfEkscHUZpKVWOYMqYt5YwPPUiLR4M%2FAcdiyxGCU5WPwLLNKWQ9r4ceaQxy29JOz7p320Thz7s5IGh2qtfpRr5INiTgLZN2%2Bh18vQZcOXoLOChG1sPBQabWwOZ2AfWWHy1MRV9ygO7l4qNGVom17IZ40FJ1nJII9V3ufyvjO%2BUhl2r4jfi4g8xnlgEnxYEdqb86TMPHPWv3uRbXpQkVbfGdnyg%2FfyMGU17sITwx5ltdagJxv%2FH4c2LUqfM7APsxxuq%2FBc%2F3iePEeZKy%2BZlyOhbzmA6ui7LPb3Eei%2BS2H4Bf7i5B0eTciluoUlCuTbxWiMyvWfREJfD%2Fcon%2FyyazWWVl01iHl0GITs1si8Ys81II7ets0xfDPZ4inhGbJ2%2BcaVvdhkeQHY6EbkXsZ0%2Bd4EPCRkaUxjVwUgqysY173QKrhh7ekZ%2FHqqO4E6GIcjQxkJQ45dO%2Fu0SpF5YKxMJ9diHzeuHDDbMF2o33Ghqaa1t7MJvK0ckGOqUB3WkHGinb4NZCzNF1YDxDSVVntJi8wAXcQyH69%2FY7DECoW1ZBwdnfQWZgxDmjNJd6F0uzQZAK9c%2FGCUC%2FIpXGDoVBykZ3HtmzEd5zrNuD7YtO7A38ppymh1HkV85MAjqk3x21H61NEPDbJvcwK2dZlSttPFzGD%2FnnCla0ETTkIPQsf1yPPqcpImoHNgr9IQIu%2FxBHS17SDEelSs8LqSP2vNuouTSl&X-Amz-Signature=16721910886791c9402f7bbf4be385e5b9ec81769181f08a90e2fd6ea0535a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
