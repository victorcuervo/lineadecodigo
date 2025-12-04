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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTYGLVN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDsR0pY7wQmTsmDGNiMqCto4WFHYbveReQMFPInkhJDsQIhAPGb04nXLpYgBOg3bPBhw0eiRsvQ4fcVgMIpbEewN6PAKv8DCEAQABoMNjM3NDIzMTgzODA1IgzF%2FVilaB2XUwmbAzsq3AMEZ3hTDMIWQps2yDcwQl4ramrGn6BEPSdTxk%2FVQKDr9zTLO%2FWMbFgr7KOX2TNiJ493SaEj%2FZB4k4xwTwwoZcei03LJ9F2kxc5aGKECwZTAacXhfJwj05jSD4MTS%2B3TwS2yWRFG09S6Zpk4ZMbRgVyquSVlsj%2Bg9YsZiOlqS450Au3vP3eWsR20lMVbgb9LZOWCeZfJYed4EkRNl5AAaFkj%2FCxYLbS%2BwW15XN2JaLIkXWYoJjOXWKv%2FI24DxAMsvkn1bGAnzaOujn%2FRuf8jl%2BdNZYvfOF4dbfx8dKNXTkfVXTd%2FtYcDYDxI%2FV41WDE%2FZ8pMFK%2Fc6jH6Dso8itkMpv%2BCnZUKw80IUuYkEE7gJlBemGXicRsqcVJT4rBjZ8Riu2Ccl2BTlCZ5eIe3zarsjOjq103GnztwJOSiCcfWRimzHzfKaQlNbA2yTgGTYoVuO%2FIrnzsIu%2BB1Wg%2B9xNye32EKgd6dOxQSlsHomlj6Y1%2FFyICBzoEvBtnVgJOL2YxLZ2q45h7JltanYOrpgo9a5Sv6yacXacsk1i%2F%2FSvBbjbxssV0SQyYsir8w%2FXlPAA0A%2FIWYHYX7iw4tgbt3cJTrqXWpPjelRtb4A8vOAr1vqSM%2B8e7Ci%2FZ6uXjXyAHfeTC358TJBjqkAbyJPr5Di7rF8WzdhvVZQkYeR2Bw2rTfruJ0xLgW7uuXSpFIcSv8CK3sWgB4%2FpR42ZfRl3WjMhTQqlJhhkHBTk1l1It7KwV1PMR8kxnJqf9kKGH7LPns4mH%2FbeIZJkWnyqv%2FEMW%2F2dxKAkqzLSYFYnmdnB0IiwpyZmA8DuGEtLWPL3gDMpxbNKShGVwyzuPK91Yejkq3EAvU9QgVPjF59zcr4coP&X-Amz-Signature=ec5d7005235e23012ff11c3bce8e580ed29def924b1b8fb924cc8b81db41f8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTYGLVN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDsR0pY7wQmTsmDGNiMqCto4WFHYbveReQMFPInkhJDsQIhAPGb04nXLpYgBOg3bPBhw0eiRsvQ4fcVgMIpbEewN6PAKv8DCEAQABoMNjM3NDIzMTgzODA1IgzF%2FVilaB2XUwmbAzsq3AMEZ3hTDMIWQps2yDcwQl4ramrGn6BEPSdTxk%2FVQKDr9zTLO%2FWMbFgr7KOX2TNiJ493SaEj%2FZB4k4xwTwwoZcei03LJ9F2kxc5aGKECwZTAacXhfJwj05jSD4MTS%2B3TwS2yWRFG09S6Zpk4ZMbRgVyquSVlsj%2Bg9YsZiOlqS450Au3vP3eWsR20lMVbgb9LZOWCeZfJYed4EkRNl5AAaFkj%2FCxYLbS%2BwW15XN2JaLIkXWYoJjOXWKv%2FI24DxAMsvkn1bGAnzaOujn%2FRuf8jl%2BdNZYvfOF4dbfx8dKNXTkfVXTd%2FtYcDYDxI%2FV41WDE%2FZ8pMFK%2Fc6jH6Dso8itkMpv%2BCnZUKw80IUuYkEE7gJlBemGXicRsqcVJT4rBjZ8Riu2Ccl2BTlCZ5eIe3zarsjOjq103GnztwJOSiCcfWRimzHzfKaQlNbA2yTgGTYoVuO%2FIrnzsIu%2BB1Wg%2B9xNye32EKgd6dOxQSlsHomlj6Y1%2FFyICBzoEvBtnVgJOL2YxLZ2q45h7JltanYOrpgo9a5Sv6yacXacsk1i%2F%2FSvBbjbxssV0SQyYsir8w%2FXlPAA0A%2FIWYHYX7iw4tgbt3cJTrqXWpPjelRtb4A8vOAr1vqSM%2B8e7Ci%2FZ6uXjXyAHfeTC358TJBjqkAbyJPr5Di7rF8WzdhvVZQkYeR2Bw2rTfruJ0xLgW7uuXSpFIcSv8CK3sWgB4%2FpR42ZfRl3WjMhTQqlJhhkHBTk1l1It7KwV1PMR8kxnJqf9kKGH7LPns4mH%2FbeIZJkWnyqv%2FEMW%2F2dxKAkqzLSYFYnmdnB0IiwpyZmA8DuGEtLWPL3gDMpxbNKShGVwyzuPK91Yejkq3EAvU9QgVPjF59zcr4coP&X-Amz-Signature=f6a41e7494f6d562e58174ac408c739b8bb90dba4906e68ba1cbe5b517f495e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
