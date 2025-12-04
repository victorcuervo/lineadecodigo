---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINZBZBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICkC1vUi7bDDOgD4gSndDECAVXlosejZ%2B28c6iDMXm25AiBYmEwwnpVQwvqltj2Cn1zCnXWomqxLAa8VW4m9o%2FiBBCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMBD9URIAScGNXySQYKtwDz%2FqZ7U3oIE96BPJANZxuyyCeXNs2UmrXiINUR4rCi4rubaiXtlf4291UplbK6%2B3mmif5WurTCRq7IyEFaLmmyf2U03rk5MqnxDMpLMzzirsWRfQSiE9AgKfSGQeaZI5Q5PaZz98if78ojIYvobatF4xG%2FFPIxMMm1W%2BzlEQRkWqiaICzKQLvwufD1yovvl4XDfWMRsN78%2FFz1BNPp13jr1FbQZzkFtoFI3GbHU6bKEXXQitaPHSEIxH1IQBk%2B0d0tpRB9JSE1jXHEfGrBWWt2CAt3f9g3z6oR%2F6I%2BiEk95MHebMzvxOLnuh6XWEzCkWv9zMOETg36J555LZtjCbEeHdgkrUrUp%2B4GnIgchIroUJ13RTCF7m0AZTqoXYmBHVowmjsBry0X4HboTM3QOCPAKs3vzYb%2Fm1O0x0bRHsc%2FHXFt9L%2BdF8trM6SjO%2FMSi%2FilKco8oI%2Bar%2BkzwKzjjvjCVeuXqnpgLbZy%2Bwk1%2FJ0z0FaQ1kvmXcqvnlf%2FbDQgWE6vocQxAGLOrHXE4YstdarJYp5%2F8IBUfSKWt9d5TO8fHxcZWeUWyhjV%2BO9kojS%2BdxCHtcz50OQ7%2BOAmuMCbCnMW4ldYYHCF2Imv8sYKAC1JQO%2B1IJnOmDiUPxpYHswt%2FLDyQY6pgHc1bJ5hzY8zvUeKT18ZtR7sHvKRPLL5mpdzQ3yV6WojHu3PK1A86iZfGmeO6GM9qvVd2y%2FTaI9JsM0buR9ePceqKBGvS3DYsD06INWcH5kNdyM4p1KAxWkIeQYF61dtkeuXV957sl5zXyxinSYXabJXSqmczPkNGY17sAOQUZ2dsJPIjWzUCA9gr77RMu5861KphlKNXq%2Bs3F66CoiNestM2%2B8lQlg&X-Amz-Signature=67cf456b961725a1cc9fda2c3f31b2a92ef757d59e961bfa2856124e56f47106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINZBZBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICkC1vUi7bDDOgD4gSndDECAVXlosejZ%2B28c6iDMXm25AiBYmEwwnpVQwvqltj2Cn1zCnXWomqxLAa8VW4m9o%2FiBBCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMBD9URIAScGNXySQYKtwDz%2FqZ7U3oIE96BPJANZxuyyCeXNs2UmrXiINUR4rCi4rubaiXtlf4291UplbK6%2B3mmif5WurTCRq7IyEFaLmmyf2U03rk5MqnxDMpLMzzirsWRfQSiE9AgKfSGQeaZI5Q5PaZz98if78ojIYvobatF4xG%2FFPIxMMm1W%2BzlEQRkWqiaICzKQLvwufD1yovvl4XDfWMRsN78%2FFz1BNPp13jr1FbQZzkFtoFI3GbHU6bKEXXQitaPHSEIxH1IQBk%2B0d0tpRB9JSE1jXHEfGrBWWt2CAt3f9g3z6oR%2F6I%2BiEk95MHebMzvxOLnuh6XWEzCkWv9zMOETg36J555LZtjCbEeHdgkrUrUp%2B4GnIgchIroUJ13RTCF7m0AZTqoXYmBHVowmjsBry0X4HboTM3QOCPAKs3vzYb%2Fm1O0x0bRHsc%2FHXFt9L%2BdF8trM6SjO%2FMSi%2FilKco8oI%2Bar%2BkzwKzjjvjCVeuXqnpgLbZy%2Bwk1%2FJ0z0FaQ1kvmXcqvnlf%2FbDQgWE6vocQxAGLOrHXE4YstdarJYp5%2F8IBUfSKWt9d5TO8fHxcZWeUWyhjV%2BO9kojS%2BdxCHtcz50OQ7%2BOAmuMCbCnMW4ldYYHCF2Imv8sYKAC1JQO%2B1IJnOmDiUPxpYHswt%2FLDyQY6pgHc1bJ5hzY8zvUeKT18ZtR7sHvKRPLL5mpdzQ3yV6WojHu3PK1A86iZfGmeO6GM9qvVd2y%2FTaI9JsM0buR9ePceqKBGvS3DYsD06INWcH5kNdyM4p1KAxWkIeQYF61dtkeuXV957sl5zXyxinSYXabJXSqmczPkNGY17sAOQUZ2dsJPIjWzUCA9gr77RMu5861KphlKNXq%2Bs3F66CoiNestM2%2B8lQlg&X-Amz-Signature=9e46501f437a27aec8ccea5aa1e176248423db0387573b1acbefb549ea4e0635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
