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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SFOYQI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58zhV6A6D9JsDyYee0si%2F%2FQDF2ypCBYxkYk2iJc5ytQIhANJJ2%2BMD4IzAWnefjILT2hhT6owrOk1aY6Ir3kMwPgHfKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhxL8YnMbAZTmps8q3AO%2FkySSqoRJ9fu6VWKvlIJlbmAJo3g%2FEwlz1yRc%2BjLfFIBr46KimjlJ20eyxM9CN9ILjKxxQalZ8Zz6BwYDE9Pkt9KdEPvhV8YN%2FmIvxvhmtaBxpO5ct8iUy1P7lXlHXaG3q68wbEDNLn6t7jgs8xOcvfMazUFc0tkVlIq%2Bi0Wu99zwFnYmDU%2BcRc44R8yuRL456nPTLQ6d9kGig%2Bnlyqrtwpfa1SykbbbO9oy7AB8dkvBLkOBYe2JZVSeZ2zuMAPhXJw8HE0eJwxfYo5cgqACXerxyo6jLCnrnU4ssZepz%2B7Nr694erMpKX6Sy5l2df0aFZNPtvsUh%2Bq7DA0YuPUotvfkgoZmn14HvE2V%2BgOaKQ2yVzFkcLnnlxdn4OGuYSYnQHoIwaKItAyTsMzpdu9dGdlH%2FI%2FhRH3PtiexHGfdhZW0eAfxmn7FAjXfpATb9BCHj1My8lJsgURtVbDAxKZdE67sqlfZope5g%2FUNg6AHCxuNogOSg%2FpBElN3KqbQGs8agIs%2FyG5hOpqj0jfSZUTPbbINzBkCu7R89sWtAvJix%2FrH1pZLIcKfbCeoI4lTFhfCdtHIBJzlgjv5m1DcTNDzD5kPhWLQDtlMwKztjsW5pciL8pb7USv87bei4azDt7dnJBjqkAS18mpe4N7s99kwBQXiZ6Xx773fUJjRVpcO9UrOmJtFdod0%2F6fjiW%2BCX707S2dYJ4n%2BNa0kGnZUEuj7xMHfLq8r6u%2FFNs9A6%2BbHh22dPbQswxniGHAX%2BqcC3AAAQlJAdE03Ci9SDi2Y78se5gvrh6ilFoYN3z6Gnmsynphc9L19Cocl%2F9i%2BsVYsj%2BWCPiCpbIB2Fqq6BxBU%2BElGv3YozVDRFmJU8&X-Amz-Signature=d7fdd411b010ccfc47a364652c76b2c22e575e04af40d71d8d3c3b18284d8478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SFOYQI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58zhV6A6D9JsDyYee0si%2F%2FQDF2ypCBYxkYk2iJc5ytQIhANJJ2%2BMD4IzAWnefjILT2hhT6owrOk1aY6Ir3kMwPgHfKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEhxL8YnMbAZTmps8q3AO%2FkySSqoRJ9fu6VWKvlIJlbmAJo3g%2FEwlz1yRc%2BjLfFIBr46KimjlJ20eyxM9CN9ILjKxxQalZ8Zz6BwYDE9Pkt9KdEPvhV8YN%2FmIvxvhmtaBxpO5ct8iUy1P7lXlHXaG3q68wbEDNLn6t7jgs8xOcvfMazUFc0tkVlIq%2Bi0Wu99zwFnYmDU%2BcRc44R8yuRL456nPTLQ6d9kGig%2Bnlyqrtwpfa1SykbbbO9oy7AB8dkvBLkOBYe2JZVSeZ2zuMAPhXJw8HE0eJwxfYo5cgqACXerxyo6jLCnrnU4ssZepz%2B7Nr694erMpKX6Sy5l2df0aFZNPtvsUh%2Bq7DA0YuPUotvfkgoZmn14HvE2V%2BgOaKQ2yVzFkcLnnlxdn4OGuYSYnQHoIwaKItAyTsMzpdu9dGdlH%2FI%2FhRH3PtiexHGfdhZW0eAfxmn7FAjXfpATb9BCHj1My8lJsgURtVbDAxKZdE67sqlfZope5g%2FUNg6AHCxuNogOSg%2FpBElN3KqbQGs8agIs%2FyG5hOpqj0jfSZUTPbbINzBkCu7R89sWtAvJix%2FrH1pZLIcKfbCeoI4lTFhfCdtHIBJzlgjv5m1DcTNDzD5kPhWLQDtlMwKztjsW5pciL8pb7USv87bei4azDt7dnJBjqkAS18mpe4N7s99kwBQXiZ6Xx773fUJjRVpcO9UrOmJtFdod0%2F6fjiW%2BCX707S2dYJ4n%2BNa0kGnZUEuj7xMHfLq8r6u%2FFNs9A6%2BbHh22dPbQswxniGHAX%2BqcC3AAAQlJAdE03Ci9SDi2Y78se5gvrh6ilFoYN3z6Gnmsynphc9L19Cocl%2F9i%2BsVYsj%2BWCPiCpbIB2Fqq6BxBU%2BElGv3YozVDRFmJU8&X-Amz-Signature=6186bb8dc1d6bdebd9e11e2d3e102925fc8fed69177c9b40636d57e6cd51a070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
