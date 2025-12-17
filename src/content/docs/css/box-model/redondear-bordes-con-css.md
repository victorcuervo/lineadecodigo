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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XP5DIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWuDdNej8dyuA3BgZQXh6mmMOtXt54X3UoMhqZBlT%2FVwIhAODeMcZOC0UjyAWxgqxX1BMzOtHZVWOxlJvDe2ZmHoEKKv8DCHgQABoMNjM3NDIzMTgzODA1IgzfFzsy75%2F%2BJSkWxN4q3AOkF6QaPdNYB8YRgvuuZe%2BSUJMqT3heQH%2FSx%2FKcRtDkw05qORN9NsyMQVlLuuVEo4vMYgbuiH7MYVq9C9dBGHm8TjlVumPr3zv9duHBqxmvSjOL9wyR747EX%2FixdjkWM5Q%2FK1e5QffklnL9gY4SmFSd84YLx%2FHBB9JFrFI4JCGDyyfWloIFaGeHwgjwMKE1RrEJsKlJjSqO1rsYJ1lDpAxpZ8GeAT1d1G2rfZtBDzcPswPY%2F83ZgN7bgNHJ5IoAxQMPGnf6qc3b6h%2BdunnzXBnsXoWt%2BAESGjbH3catl8gXtZbIzd6NzvSivvGIJcSF%2FiwT3ZRJu6nXkb6Vr1H%2BjgAT5WsfMu6a6eDryeGeIfoHkl4gxc4NrCsf5H2oRD4xtcGCfCnuDc9cLm1bVZEVE%2FC8c49bfoNjYMvdobGYjKTqUlxmGMY9j%2F%2F7ZamqX8%2BTlaT7TxoWOGXtXYABIPTreU49Aor0ljOmrPejpJho%2Bvi2tGSO4UEeYI8CvyWXXd2svNx2uZIf21p%2FCjJwgcohw9Wove5QCBZMmpcIElatfBgHxp7tAAeHcp0e9vGbvp2Mkkx6GvRR3bTTzV7%2BIfs6Vlx8V9elnFsVxxNlIHyqLKiCRpXzEEEshx89rgIcTTDEnYnKBjqkATDvi55sDYANz7LpaZA39yOMnEYB5NmmeLDS26%2BidrTiFE2R%2F%2Fj3NjWIczRsBJ3l75IrdyQC7Yi1CZo2wYSMST48PTpwdFvZTXhxbiWjZKxjm3rJbIGsppMSQN9RUGXdllpSz3O1LlfOmTK5Snqu02M8xK3zQwMwCjL4P%2Fkx8rBQ3ToI0EMZD%2BuOY4So4vCME79LTM9D4htzhS9eFzdt1lffaB5Z&X-Amz-Signature=18597cfc3c4532d6b7ceb46fcbf4882d872baf2d0d4d0f3c6230e1f28d5d0dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XP5DIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWuDdNej8dyuA3BgZQXh6mmMOtXt54X3UoMhqZBlT%2FVwIhAODeMcZOC0UjyAWxgqxX1BMzOtHZVWOxlJvDe2ZmHoEKKv8DCHgQABoMNjM3NDIzMTgzODA1IgzfFzsy75%2F%2BJSkWxN4q3AOkF6QaPdNYB8YRgvuuZe%2BSUJMqT3heQH%2FSx%2FKcRtDkw05qORN9NsyMQVlLuuVEo4vMYgbuiH7MYVq9C9dBGHm8TjlVumPr3zv9duHBqxmvSjOL9wyR747EX%2FixdjkWM5Q%2FK1e5QffklnL9gY4SmFSd84YLx%2FHBB9JFrFI4JCGDyyfWloIFaGeHwgjwMKE1RrEJsKlJjSqO1rsYJ1lDpAxpZ8GeAT1d1G2rfZtBDzcPswPY%2F83ZgN7bgNHJ5IoAxQMPGnf6qc3b6h%2BdunnzXBnsXoWt%2BAESGjbH3catl8gXtZbIzd6NzvSivvGIJcSF%2FiwT3ZRJu6nXkb6Vr1H%2BjgAT5WsfMu6a6eDryeGeIfoHkl4gxc4NrCsf5H2oRD4xtcGCfCnuDc9cLm1bVZEVE%2FC8c49bfoNjYMvdobGYjKTqUlxmGMY9j%2F%2F7ZamqX8%2BTlaT7TxoWOGXtXYABIPTreU49Aor0ljOmrPejpJho%2Bvi2tGSO4UEeYI8CvyWXXd2svNx2uZIf21p%2FCjJwgcohw9Wove5QCBZMmpcIElatfBgHxp7tAAeHcp0e9vGbvp2Mkkx6GvRR3bTTzV7%2BIfs6Vlx8V9elnFsVxxNlIHyqLKiCRpXzEEEshx89rgIcTTDEnYnKBjqkATDvi55sDYANz7LpaZA39yOMnEYB5NmmeLDS26%2BidrTiFE2R%2F%2Fj3NjWIczRsBJ3l75IrdyQC7Yi1CZo2wYSMST48PTpwdFvZTXhxbiWjZKxjm3rJbIGsppMSQN9RUGXdllpSz3O1LlfOmTK5Snqu02M8xK3zQwMwCjL4P%2Fkx8rBQ3ToI0EMZD%2BuOY4So4vCME79LTM9D4htzhS9eFzdt1lffaB5Z&X-Amz-Signature=a9ac29c01efec28e8f23acbbd629afa5f458cc8cc5924fc2eca2e092e64d82eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
