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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQAHQTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9RQq3aUCIUhaZgPmIfzmSAHkZez9UrU6OY4a83hIL9AiEAvR3dZgRlN1%2FP0vK2qCUTTGGMeVWYb5zTul7Xenoulpgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCfutlWj07osqz%2BNYircA8Xe5waIbtq2FRIacWULfAlSnpFeq34%2BuC0Q1BWBs0rcJP8TwqZvnridXPWQEkgQU0R3tqWc7PiDt42auJypf6aYOtUxUkTfv09b6LXephrhdTID%2FrHX%2Bt4gn4oqeRwi%2B%2FMNxE4Mg6rHkQXw9SkqRNM3oP6ZlnOMD%2BP8Qp5Y3lA6dnS8Hnvzrp%2FXcifGDNUL0sJUhTwKvpsW9CUH%2BCmZtwfWH6sCn9Ue50TjJ1Akq8RKHmSQ7WN8fK%2BR2yUnCzCYlIeJlS00hL6L6a92ZnmGfzp1xO9i141mdMaDVIi3Rs%2F9Z0%2FmvGnYXClhcxOUV%2FU4hGlz%2B%2B8wCyZyEaI1pGsurZCX9yLYgVX7zxjtOudATVJpdequ5sJeo7CtEoM0g0xtTbo11j7lnTSbyx9E5%2BB6hYp10%2FANkUrhOi5NPWeOnNl8JKGln2uc0Qpn0Kw%2FJO8sUWEy65Hh1usnbOTbterBFuphFJMAUbuUb8fJHcxiNwJ1eLBiGpMefgfr64HObj8eSFVlOJajviGFzMx1MCCRo6DqGebYK2mED6N%2FjS7q7Q6dvALwvlv4Ma9oa58iOCdUGmDM%2BK6DiQpLn0L6FKdOPlAgEk%2BuYbrHMkKu870kt5BXZEepjFchT8AClCSbMMv7h8oGOqUB%2F%2Bb6PyWUFAG00wFULIZd2%2BSvBEI3QQH8zacNLmkV17ssmKlq%2FYyX4DYXL%2FSX6CdzhHg752KsSQHQ7YFA4h8m810jGslUIqNzCsSOmEnj3tyukdN9m4aANJGU681C5bptn3BWsXmnFQVRZLjwD8zw4rhVVQW4rbwoIFArQ6CO5KCYWGkYIB9p3TG%2F2jXgUT%2FQXhnPUik2vkcuRGNrT%2BURy3MMrGXe&X-Amz-Signature=a5ca4f9f64152436890703a2a8b378df8bf2a0ea6abd641af7670de539ee90eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQAHQTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9RQq3aUCIUhaZgPmIfzmSAHkZez9UrU6OY4a83hIL9AiEAvR3dZgRlN1%2FP0vK2qCUTTGGMeVWYb5zTul7Xenoulpgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCfutlWj07osqz%2BNYircA8Xe5waIbtq2FRIacWULfAlSnpFeq34%2BuC0Q1BWBs0rcJP8TwqZvnridXPWQEkgQU0R3tqWc7PiDt42auJypf6aYOtUxUkTfv09b6LXephrhdTID%2FrHX%2Bt4gn4oqeRwi%2B%2FMNxE4Mg6rHkQXw9SkqRNM3oP6ZlnOMD%2BP8Qp5Y3lA6dnS8Hnvzrp%2FXcifGDNUL0sJUhTwKvpsW9CUH%2BCmZtwfWH6sCn9Ue50TjJ1Akq8RKHmSQ7WN8fK%2BR2yUnCzCYlIeJlS00hL6L6a92ZnmGfzp1xO9i141mdMaDVIi3Rs%2F9Z0%2FmvGnYXClhcxOUV%2FU4hGlz%2B%2B8wCyZyEaI1pGsurZCX9yLYgVX7zxjtOudATVJpdequ5sJeo7CtEoM0g0xtTbo11j7lnTSbyx9E5%2BB6hYp10%2FANkUrhOi5NPWeOnNl8JKGln2uc0Qpn0Kw%2FJO8sUWEy65Hh1usnbOTbterBFuphFJMAUbuUb8fJHcxiNwJ1eLBiGpMefgfr64HObj8eSFVlOJajviGFzMx1MCCRo6DqGebYK2mED6N%2FjS7q7Q6dvALwvlv4Ma9oa58iOCdUGmDM%2BK6DiQpLn0L6FKdOPlAgEk%2BuYbrHMkKu870kt5BXZEepjFchT8AClCSbMMv7h8oGOqUB%2F%2Bb6PyWUFAG00wFULIZd2%2BSvBEI3QQH8zacNLmkV17ssmKlq%2FYyX4DYXL%2FSX6CdzhHg752KsSQHQ7YFA4h8m810jGslUIqNzCsSOmEnj3tyukdN9m4aANJGU681C5bptn3BWsXmnFQVRZLjwD8zw4rhVVQW4rbwoIFArQ6CO5KCYWGkYIB9p3TG%2F2jXgUT%2FQXhnPUik2vkcuRGNrT%2BURy3MMrGXe&X-Amz-Signature=3b217e109b2522de3626b27c7afdc327a1a773763ba536bb42895df2632dfc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
