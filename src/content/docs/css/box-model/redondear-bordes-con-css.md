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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMER77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFso44TgjNg0fmoChEW26h4loTldXyARIFRRpYsYYJh7AiEA7qMBpfmzUTbZxnfQcGNohAiR9h4EIZbrlkeZfHI5c9cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL1zTPwSbS4zbjwzBircA5S9y%2FRSOQO%2F90pw4VWG9pbkka0m%2Fbc2YaQDvwk9Pu37lp9QfesgaZjNzxZC5ZcAugZbfmU7gnzCjbax8uSrFdsb1U1nTsayA5surzWnXjDc8h4soJO21pTq5xya93R6hEn6h17wsUWqDjC42%2B4z0z992KJkpyIs7V5YNLkLduTPZYfVc8IpAqjr8aJchr5MkIpcCyZ2i6puZFfMZgWkcAhIR6mr5vOI6umvAVQQn0c2SSNItDkw1iVjXIAi2euTkTPp74k0djWYCjxS%2BzDQ5IJoqxS%2FyIdfg4iEzKpt3e4Q%2BFcQmaBPsjJWPLt%2BTUz8ojuJKsucrnXNeuMYkEHAXVHL3khPgr%2Brh%2F1nL%2BH3K7fyfUpAqtKKWmgKyUDlt%2F%2FcnDHY7unuxXCf%2BGwZ6TFjfK0h8HzGf%2FiyjZPUp8LhEzkzb835VKBOU8MDw44LQUAeVwpdNp6%2BvJuz6sT%2FMgd7i70n%2Bx8MFp31K68DR1reIzdWH2r006fPTLPXIqV%2BZk%2F2SmO9sx9CqGiJQ%2F0wv2BtVFlrKqzFWjmaRFDh%2FK7OqgS1peD%2Bp36s8Mnqg1zpx2i9gvWAzny64mMzQATKEo%2BtxgObJJOktC2%2BGTGvHHQLZCc7omIG1mhjct7gWpgjMObeh8oGOqUBdPpa56AuA5jPN1NChEXusMZcPwavrk8pOQ62Vd7EOxDv1xB30Ziio421ejpp0GwSyhjlCuu13XFxeMIJNDXijS4qGq58XGuLXXba1hNNnK7pe8%2FdYrgFWYNM9jk9sQcaKrHgc1xjMoA13JdP2Dtov4QZkQNLuUEIB%2FUjTnnVgS6Hf8t2qinWLJ%2FMDiIlPlsiQJ%2B8XCFSmo8z%2Bg8cLAOK3I2PQKrF&X-Amz-Signature=f17a8bb3aa0eb87f0133bf82c25890429399a53d9e5ee7d42883f06043586a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMER77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFso44TgjNg0fmoChEW26h4loTldXyARIFRRpYsYYJh7AiEA7qMBpfmzUTbZxnfQcGNohAiR9h4EIZbrlkeZfHI5c9cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL1zTPwSbS4zbjwzBircA5S9y%2FRSOQO%2F90pw4VWG9pbkka0m%2Fbc2YaQDvwk9Pu37lp9QfesgaZjNzxZC5ZcAugZbfmU7gnzCjbax8uSrFdsb1U1nTsayA5surzWnXjDc8h4soJO21pTq5xya93R6hEn6h17wsUWqDjC42%2B4z0z992KJkpyIs7V5YNLkLduTPZYfVc8IpAqjr8aJchr5MkIpcCyZ2i6puZFfMZgWkcAhIR6mr5vOI6umvAVQQn0c2SSNItDkw1iVjXIAi2euTkTPp74k0djWYCjxS%2BzDQ5IJoqxS%2FyIdfg4iEzKpt3e4Q%2BFcQmaBPsjJWPLt%2BTUz8ojuJKsucrnXNeuMYkEHAXVHL3khPgr%2Brh%2F1nL%2BH3K7fyfUpAqtKKWmgKyUDlt%2F%2FcnDHY7unuxXCf%2BGwZ6TFjfK0h8HzGf%2FiyjZPUp8LhEzkzb835VKBOU8MDw44LQUAeVwpdNp6%2BvJuz6sT%2FMgd7i70n%2Bx8MFp31K68DR1reIzdWH2r006fPTLPXIqV%2BZk%2F2SmO9sx9CqGiJQ%2F0wv2BtVFlrKqzFWjmaRFDh%2FK7OqgS1peD%2Bp36s8Mnqg1zpx2i9gvWAzny64mMzQATKEo%2BtxgObJJOktC2%2BGTGvHHQLZCc7omIG1mhjct7gWpgjMObeh8oGOqUBdPpa56AuA5jPN1NChEXusMZcPwavrk8pOQ62Vd7EOxDv1xB30Ziio421ejpp0GwSyhjlCuu13XFxeMIJNDXijS4qGq58XGuLXXba1hNNnK7pe8%2FdYrgFWYNM9jk9sQcaKrHgc1xjMoA13JdP2Dtov4QZkQNLuUEIB%2FUjTnnVgS6Hf8t2qinWLJ%2FMDiIlPlsiQJ%2B8XCFSmo8z%2Bg8cLAOK3I2PQKrF&X-Amz-Signature=4df92e3c67cfbf06b4245f3502f0dd3904822943abf7cbb98f06504f79811afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
