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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VX5HGY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUA%2BXyWAWqXi6AfVQX5SOc8MoSKwesOQAeVmBodfYFgIhAKvN9iT1T3XF4i7zFu4xN1uUG%2FhH2ZD%2FO%2Bsmu5WxtSi4Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzxWkXBCzuGz4BqwBMq3AOCVj29wHebXiOreo2f2O%2F0eOz3DuvXepdXljLrmnHAgOjjVEs%2B3eVfP%2Bha5AA20JRrhELYHIV8cNoaFtQzeWNiOx3VMK%2BwZBZylxroCEif6MuX3hZ2z7SZTdPnJ%2BK7w%2FOImsAj3AzgP%2FIVDAX1TVbL6uzsFuQmCSJlkUlA4xITIHNcaiALOoOFaCMe%2Bgi1BY%2FaxICuDliCVXo00si1FTtluYDI4dOyHIo5ko03neRFidEX%2FX1GyFd%2BtQfM8w2SgXbYo0qswlytSCuHUOWc1tyF3%2F%2BkgZdp6lMc2GkP4YNMrM0R6eU7fqHV4xIppV7ybxjypknRuycmgL5j%2FiU6rjC6vCL3wBnbFrCzw%2BkAOzxtfHqH8PDlAueDwIB96M8HpxuYFQqWLBcjqYlpNWd5TJxOj3j22ayoRR72x3%2B51sHzZMe%2Bjx2zdG9tCYFmhxt7sMMtazfy5DZbAbgX8M4JuFZT0nd5VbuwlkGeLJYNW17ZPVG%2BdA0Nl8JhRRnxrrSw5PIjHTF%2FdtwlPjION%2FG3bswTdSgm67D6Q3xklFZgiIwqe1JbnO1cI46%2BUxzc07JeyAd7WWlS8PvD6U5K6GNzHlF7JY8GzRK6sc9VGdHIsszdV3uaIcLYPHhE91tmbDCV8cvJBjqkAQluyb3Y1GWgWj3Dkr63ZESx3NSYymxEvHS8NfeYpfpKBcgPvnkAaaDRuU4wqwE7VtkGDFLX4249EObH7dyUkOVeA3HPIMyd2BHnWveUHSJWkhLdxNJd3i3T%2BqIFuuDerPPjteuMMKe1Ppw60WrHnlfzNPSL7PSGds16Q71ie5sKs5RvVnD8uw2Uc%2FPs18cAW9ku8U6x%2BvLV%2B3MeAJOfqE66Pe76&X-Amz-Signature=67bb95050de9656751fcbb1b04d3ee6fa94f6a95230a51a9a9ec274f5f45b693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VX5HGY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUA%2BXyWAWqXi6AfVQX5SOc8MoSKwesOQAeVmBodfYFgIhAKvN9iT1T3XF4i7zFu4xN1uUG%2FhH2ZD%2FO%2Bsmu5WxtSi4Kv8DCGAQABoMNjM3NDIzMTgzODA1IgzxWkXBCzuGz4BqwBMq3AOCVj29wHebXiOreo2f2O%2F0eOz3DuvXepdXljLrmnHAgOjjVEs%2B3eVfP%2Bha5AA20JRrhELYHIV8cNoaFtQzeWNiOx3VMK%2BwZBZylxroCEif6MuX3hZ2z7SZTdPnJ%2BK7w%2FOImsAj3AzgP%2FIVDAX1TVbL6uzsFuQmCSJlkUlA4xITIHNcaiALOoOFaCMe%2Bgi1BY%2FaxICuDliCVXo00si1FTtluYDI4dOyHIo5ko03neRFidEX%2FX1GyFd%2BtQfM8w2SgXbYo0qswlytSCuHUOWc1tyF3%2F%2BkgZdp6lMc2GkP4YNMrM0R6eU7fqHV4xIppV7ybxjypknRuycmgL5j%2FiU6rjC6vCL3wBnbFrCzw%2BkAOzxtfHqH8PDlAueDwIB96M8HpxuYFQqWLBcjqYlpNWd5TJxOj3j22ayoRR72x3%2B51sHzZMe%2Bjx2zdG9tCYFmhxt7sMMtazfy5DZbAbgX8M4JuFZT0nd5VbuwlkGeLJYNW17ZPVG%2BdA0Nl8JhRRnxrrSw5PIjHTF%2FdtwlPjION%2FG3bswTdSgm67D6Q3xklFZgiIwqe1JbnO1cI46%2BUxzc07JeyAd7WWlS8PvD6U5K6GNzHlF7JY8GzRK6sc9VGdHIsszdV3uaIcLYPHhE91tmbDCV8cvJBjqkAQluyb3Y1GWgWj3Dkr63ZESx3NSYymxEvHS8NfeYpfpKBcgPvnkAaaDRuU4wqwE7VtkGDFLX4249EObH7dyUkOVeA3HPIMyd2BHnWveUHSJWkhLdxNJd3i3T%2BqIFuuDerPPjteuMMKe1Ppw60WrHnlfzNPSL7PSGds16Q71ie5sKs5RvVnD8uw2Uc%2FPs18cAW9ku8U6x%2BvLV%2B3MeAJOfqE66Pe76&X-Amz-Signature=ba9ac48b1ee9fcde4eb23cbba6f5840d4f36050680c57b0cf9e1b20c4e105b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
