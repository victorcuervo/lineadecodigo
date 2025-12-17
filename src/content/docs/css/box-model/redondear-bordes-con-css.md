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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJ5374A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHxRlSy8Cf73hSWqM9cAKR7mtkMRBHbtiN8ydgssx21QIhALw6tetsoaMbBnEvGT9iNZwejJankmwDbxJrVagNj%2BhHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaJFndtsxOs1kqjHIq3AN4LAxDg1OZ2wkB8wVzfG6K3eOSzlo1CWnlJnnBRbE08%2FIZCuOM0R4sbFwKGHasKOWcRworiU8F6108hZWH5TED4H8hkOfVuYT87lwRSy7ZkVPufM4BsIRvRPk5aK2a%2BZIiB6O68ZC%2BIFgR0HY0mP1nfjYYt6EcQeK%2FtvaZaFH2uLOXjd9zG3lDkD2yZyY5UzKzCC6tl8vACXdCZF9WHlEHKy1OV6KBDgMhbhQyg6jCjN9aOAfj5oGtAjkFZJMFO3Twb15p03wrcl0h9Z17bJCS3aul6QKa3opFRD1ZGK%2B2q77YSdn38fXsTH%2BAip2a%2BmK2CGaX7O1xG4w67buEfJbQ5VEYBEKPzIdxI%2FiMwiyYikO7OG44PmF1J8%2FBsqoti%2FWCpux%2FEbcIMRqUSd2IdGrcKlU%2FFaTpx8ZeWEFjL5soruNxzunVbIitsgsy5zyMXlptl7Br6ZTAg161PH8AsS%2B1MWxn6QJzpruATczRZaKP%2BwINULZKvRWS%2FD26Lv9RXUtyxI7I5Bd7dButWcD5qEPPrWJbaf1CHA38uAyhmZFNVwZwDkrXpFzHL9Ea26PYGn9TBa5koN5ceQpQNqGZMNMtmR4IdQ7ssdE7IHVCdxUMatrGsf3zA5cVg9h0sjDSnovKBjqkAW8XdXeXC9sHt2ree7Zxlcp0tAPGsWCjxzSX5ugHtVB4Df4kiThSctksirspRUWa%2F0wDMmVV5R1%2FUYtg%2B2z0c5vYMbvbqNi%2BsQBCsRlcfogEbUrRSDloJz7HRYDsnkSbazLIQgYJcVX76kBSTGtYEPyqKyDfXAaKmT1CGy21rejdBYxKTejqJ8uDo6zvShk2w2cIQ1GecYC3BoEwHkXo%2F7ibSbhY&X-Amz-Signature=a8260a6b8029e57e5faa41a11d01f5f1e16a7920a7b78b4ea51e7a16e2063f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJ5374A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHxRlSy8Cf73hSWqM9cAKR7mtkMRBHbtiN8ydgssx21QIhALw6tetsoaMbBnEvGT9iNZwejJankmwDbxJrVagNj%2BhHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaJFndtsxOs1kqjHIq3AN4LAxDg1OZ2wkB8wVzfG6K3eOSzlo1CWnlJnnBRbE08%2FIZCuOM0R4sbFwKGHasKOWcRworiU8F6108hZWH5TED4H8hkOfVuYT87lwRSy7ZkVPufM4BsIRvRPk5aK2a%2BZIiB6O68ZC%2BIFgR0HY0mP1nfjYYt6EcQeK%2FtvaZaFH2uLOXjd9zG3lDkD2yZyY5UzKzCC6tl8vACXdCZF9WHlEHKy1OV6KBDgMhbhQyg6jCjN9aOAfj5oGtAjkFZJMFO3Twb15p03wrcl0h9Z17bJCS3aul6QKa3opFRD1ZGK%2B2q77YSdn38fXsTH%2BAip2a%2BmK2CGaX7O1xG4w67buEfJbQ5VEYBEKPzIdxI%2FiMwiyYikO7OG44PmF1J8%2FBsqoti%2FWCpux%2FEbcIMRqUSd2IdGrcKlU%2FFaTpx8ZeWEFjL5soruNxzunVbIitsgsy5zyMXlptl7Br6ZTAg161PH8AsS%2B1MWxn6QJzpruATczRZaKP%2BwINULZKvRWS%2FD26Lv9RXUtyxI7I5Bd7dButWcD5qEPPrWJbaf1CHA38uAyhmZFNVwZwDkrXpFzHL9Ea26PYGn9TBa5koN5ceQpQNqGZMNMtmR4IdQ7ssdE7IHVCdxUMatrGsf3zA5cVg9h0sjDSnovKBjqkAW8XdXeXC9sHt2ree7Zxlcp0tAPGsWCjxzSX5ugHtVB4Df4kiThSctksirspRUWa%2F0wDMmVV5R1%2FUYtg%2B2z0c5vYMbvbqNi%2BsQBCsRlcfogEbUrRSDloJz7HRYDsnkSbazLIQgYJcVX76kBSTGtYEPyqKyDfXAaKmT1CGy21rejdBYxKTejqJ8uDo6zvShk2w2cIQ1GecYC3BoEwHkXo%2F7ibSbhY&X-Amz-Signature=e87fdd352fb276a8b93772343ec94182a95bc2b00df58fbe047f468ed94db901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
