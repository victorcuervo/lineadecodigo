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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQ5ESQW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pH3CsBBE3ekOePrBJOfyVAsO4zUx5mD4rGROcTt4qAiAdJ5WWRQfjOnH%2BOJv52aleqsNEeFfhGAwQZFGnm2e%2BviqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNyKk3e60muXQZfOKtwDbSCH8FB08uWDfEzZ2DDJkzu%2BxhegQryZpw1w1CFTdQmR6WGNRu%2BVx5VebIzn4jRUpmX251BPt48LNHdyloa31kQgN8hxtJSMdfykUyju8vyRc9eDwFpkVT7gi7O5puj8EB7uXssQkZdqXlE%2BmdKqrpwpo8gJ7YhS8d2BzjxSmwIY%2B9kn3L%2BIoK6ujIBsUau9pkOJ8bENfqSerwckr1WNRQjsjN%2FtaSEwEjEJVHrYO1%2Ft6mnSA6NG1sJz%2Fjqe3Qjb%2Fe%2FEXDwTFoeymH1FBbwRKCFZBSDPmo4ijAuJgDYcZ%2BntEOysUpXlrmJmT8e0BSbEuqrFL5dwXnFxEU9eZWfjV0Cff4u78k2Fd8pIKxyz15dfL2J8q6Pm%2FjVAawU9xqSN7ye2hhA2sry43lPV0MhzH8Blutu2JxiMZuxVQ7znhqfCkCHkcXcKCoJo0T9%2BOSnvEShHrfyIyUL2XnmQcJmh5KlBdns6VEX2ls7j5NbRS%2B%2FSyo0Kb9md8BJVfzsIqfGvw4C5opXV7E%2FfaPowNyRDuLsNuYvtmMajQ8J6ttd7hi4A93pwsXrKXnxTy5C9q9G1MWcdyOOFcGRo0MwjniIuBikh%2BriE%2BN6zzENTQq4xu84DOM4eFXnqHaM5nSQw3f3SyQY6pgEHV0RhWRug%2B572IPIhEjrDUo%2B9X%2F2Gxp6tXyKACIYV2YFmd0t8raI%2BqPSzlhD96KKktuCO6jzImqHFcR8zsjO7vItHCLCBXq2ZobnqeXjZbfCNR5bXWv1kpCFiKGndxhVlbVuLAKo5VPVrBcm7e9zJ%2BuaPzjHpl1OZEfv5OOVU%2BppOm3CdsyiYuMnNkln9Ht91wP0EQEM0aCZtnvZ2HWruINvn56tJ&X-Amz-Signature=539fa392600dd324a3d1b4fcb8439b9d779860a4684b831bbbdeafb3d060d69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTQ5ESQW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3pH3CsBBE3ekOePrBJOfyVAsO4zUx5mD4rGROcTt4qAiAdJ5WWRQfjOnH%2BOJv52aleqsNEeFfhGAwQZFGnm2e%2BviqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnNyKk3e60muXQZfOKtwDbSCH8FB08uWDfEzZ2DDJkzu%2BxhegQryZpw1w1CFTdQmR6WGNRu%2BVx5VebIzn4jRUpmX251BPt48LNHdyloa31kQgN8hxtJSMdfykUyju8vyRc9eDwFpkVT7gi7O5puj8EB7uXssQkZdqXlE%2BmdKqrpwpo8gJ7YhS8d2BzjxSmwIY%2B9kn3L%2BIoK6ujIBsUau9pkOJ8bENfqSerwckr1WNRQjsjN%2FtaSEwEjEJVHrYO1%2Ft6mnSA6NG1sJz%2Fjqe3Qjb%2Fe%2FEXDwTFoeymH1FBbwRKCFZBSDPmo4ijAuJgDYcZ%2BntEOysUpXlrmJmT8e0BSbEuqrFL5dwXnFxEU9eZWfjV0Cff4u78k2Fd8pIKxyz15dfL2J8q6Pm%2FjVAawU9xqSN7ye2hhA2sry43lPV0MhzH8Blutu2JxiMZuxVQ7znhqfCkCHkcXcKCoJo0T9%2BOSnvEShHrfyIyUL2XnmQcJmh5KlBdns6VEX2ls7j5NbRS%2B%2FSyo0Kb9md8BJVfzsIqfGvw4C5opXV7E%2FfaPowNyRDuLsNuYvtmMajQ8J6ttd7hi4A93pwsXrKXnxTy5C9q9G1MWcdyOOFcGRo0MwjniIuBikh%2BriE%2BN6zzENTQq4xu84DOM4eFXnqHaM5nSQw3f3SyQY6pgEHV0RhWRug%2B572IPIhEjrDUo%2B9X%2F2Gxp6tXyKACIYV2YFmd0t8raI%2BqPSzlhD96KKktuCO6jzImqHFcR8zsjO7vItHCLCBXq2ZobnqeXjZbfCNR5bXWv1kpCFiKGndxhVlbVuLAKo5VPVrBcm7e9zJ%2BuaPzjHpl1OZEfv5OOVU%2BppOm3CdsyiYuMnNkln9Ht91wP0EQEM0aCZtnvZ2HWruINvn56tJ&X-Amz-Signature=fb291c56f8d58c52b4f41e7461fde339c9fc6035b2b80aed555110641d420cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
