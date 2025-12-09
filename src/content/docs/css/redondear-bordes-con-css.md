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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZAGWGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaKYNr4ekHXeWJF1zd04FdSaSTFY%2FYGF57J0G3iyDaIAiEAi2Nxyu%2FN6qECmovXfC8KR6YHZ1DRzXrhhIhL9C6atCkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOElG4%2FIMgYrbvB%2BDircA8j3Pjd%2BNW1rSwpwfO6K9GWhCMSauskaWyA%2BYQabUdZ9rEFu4SQJvyzKLwBK5Oq%2F9H59d3T0o5cpmpVv0VIN8neSLP2xuGFkQdK%2Bn1EAnOIGLg2rPr415PTQ%2BzVp1IHp6XV%2FgCtzP6KID9R%2FlhD%2Flz6wsQLkWUgujYh9YMGxvPFC7gvgy%2BvoBscvCu6RhzteRMXHSKuvK8lW6B%2Bt2SfLKg%2FpE2iIsnA6VtXbK10dUgQSubPaaKLHMaaXjJE%2FAcHGY6OWKMvaXBnB4B8%2FywYglJmAusJLi%2BWJ2pkEaB6TFZE8v9u4dVEK5xS45g5b0DGVxBNExOz3ej9l8kPGUq%2BF1dIl0LAdk0KRY%2F7PgiqAa8xSruhmdZ7HXQ23qxEm9X8ZJLBPY%2FeKJ0WtZ%2BGl2FfUVP3jPfhA%2BX9UvAnJ7JVleNrMvwRV6HddKI6wXrLLlfhqnnyDJJuUxEWdCuVH9Z0lB2MbBLYg812ZoVSsH9Bn%2BnCwyRrQiGQLfZsvoq2Y%2Fd%2Bj%2BFWtsIfaTbtbsvCZr3RuNKf0KvuD59sOlEpPQMHm2uGTiyShQ83iEzHp65KLpexo6CIl9O5sLvkZnWQnuLkz8aEM4uIeh2RV9JnEGVjMe0f4t4sUkgiA9DS7aDVDMNGH38kGOqUBr0m67ge3CG8X5bhg6wkvjh7ZueAMJDvy7YIRSjbxbyMQbR0AYYrCpzpLGkvm%2BZ%2FAxA65OoTui513CX7aCwHGyorFrghX03yWiGIodGMy%2FC6w5wTWXKbHrMGvyhgzlT1RNr8TVwCwTcC9z1YZmzzkI4a63IdalInacuePYp%2FQoKwO2HY8SJ98Rsgr4dixSnN2JeS8MMm7FJ%2BWINHz9Cq5YrILZKu2&X-Amz-Signature=8b8bcefdd6630862394eefd49092e3bdf401759b7cf6167e9e4cc485758a0268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZAGWGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaKYNr4ekHXeWJF1zd04FdSaSTFY%2FYGF57J0G3iyDaIAiEAi2Nxyu%2FN6qECmovXfC8KR6YHZ1DRzXrhhIhL9C6atCkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOElG4%2FIMgYrbvB%2BDircA8j3Pjd%2BNW1rSwpwfO6K9GWhCMSauskaWyA%2BYQabUdZ9rEFu4SQJvyzKLwBK5Oq%2F9H59d3T0o5cpmpVv0VIN8neSLP2xuGFkQdK%2Bn1EAnOIGLg2rPr415PTQ%2BzVp1IHp6XV%2FgCtzP6KID9R%2FlhD%2Flz6wsQLkWUgujYh9YMGxvPFC7gvgy%2BvoBscvCu6RhzteRMXHSKuvK8lW6B%2Bt2SfLKg%2FpE2iIsnA6VtXbK10dUgQSubPaaKLHMaaXjJE%2FAcHGY6OWKMvaXBnB4B8%2FywYglJmAusJLi%2BWJ2pkEaB6TFZE8v9u4dVEK5xS45g5b0DGVxBNExOz3ej9l8kPGUq%2BF1dIl0LAdk0KRY%2F7PgiqAa8xSruhmdZ7HXQ23qxEm9X8ZJLBPY%2FeKJ0WtZ%2BGl2FfUVP3jPfhA%2BX9UvAnJ7JVleNrMvwRV6HddKI6wXrLLlfhqnnyDJJuUxEWdCuVH9Z0lB2MbBLYg812ZoVSsH9Bn%2BnCwyRrQiGQLfZsvoq2Y%2Fd%2Bj%2BFWtsIfaTbtbsvCZr3RuNKf0KvuD59sOlEpPQMHm2uGTiyShQ83iEzHp65KLpexo6CIl9O5sLvkZnWQnuLkz8aEM4uIeh2RV9JnEGVjMe0f4t4sUkgiA9DS7aDVDMNGH38kGOqUBr0m67ge3CG8X5bhg6wkvjh7ZueAMJDvy7YIRSjbxbyMQbR0AYYrCpzpLGkvm%2BZ%2FAxA65OoTui513CX7aCwHGyorFrghX03yWiGIodGMy%2FC6w5wTWXKbHrMGvyhgzlT1RNr8TVwCwTcC9z1YZmzzkI4a63IdalInacuePYp%2FQoKwO2HY8SJ98Rsgr4dixSnN2JeS8MMm7FJ%2BWINHz9Cq5YrILZKu2&X-Amz-Signature=2cc1bdbbd61537a6a745be2452c261d491cfafca69d30aba29edfe419d41a858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
