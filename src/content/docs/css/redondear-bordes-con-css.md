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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF62BEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNJuiBdGY5IHOKfIos5n7jPf9GNaa77BDldmJhn1cwIhAMbP8cR5JtSzOr5HTTNxB6k5ZyhbR9OK5jxzXAp2eM%2FVKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1j0NGlciauE5lZhwq3AMLE0rlg0FU2pr%2FvrkCnlgVyNh8JSpK6jlTnqNW65o6%2BZW5n5cYILWPRZtuO7JiiYJDwFMESVztwnnNv9mbIsyrx7FAoHtTKKJ5Kn0QI6I68mX%2FVRBGGhUTbn781EweyBMXrf%2FbXbdQlCpQt1jnXxj4HMzaNdO5TKJgOoHf5Ht4%2Bhl47tJmOR8CrrPvosmatPBwe4OYw1YodDYuFJAlSIkXXpvpeWxrdpsjxU0OVxp1kt%2BryAy7Wv62RfklaQxO5gk6k6pM73%2F74b%2BTuwKVRDCVX1Az9KO1VxmN7eKdj93Uz3XLRakJ4XpRyWZjxmoTPXnw0vSHXg5lF8xNf8Usnpa7I8ILMBJ%2BCFcInL3TJdmqzjDaoY3Eeq3e53HGhDUOeQOX2e2gcvfTZOjBOJg%2Bcp43XyihMod7SwUZ0puhP7p0nYEvV%2B0lObj2wFrfPtgK7xn%2BJlBCiEDtj6aaU1KCLxobybFypgSN0DkBk0f4CBx%2FjwRwQ%2BupHCIPqbCBt0q0VAsljYIZwEWmynqxDiXqa%2FYphbyKEUNcwn2Hh95UbVZgg6rk88pY43cqhony80f4fsJkItSUMC1LNKWuEOTRGVLUvr0o%2BlNHnU3i3cPiyHxn%2Fdv0Pfb9ARpzAL0StDC8jMjJBjqkAcrgjLrX8cNVI94nRaMGwd3%2F%2BLl55emepg78jBVRRr49pviZphWH0f8amtFo5KjVxFa3v2iI3nogMpsJDc5%2BmYOI%2BAyzIiN%2FzzQxTnyhKDovSsD7%2FOhJ%2BFklbRTz7VlTpQZNpWXYfioydAVFQiNJYOrtaHx%2ByZeAglSAamM5acSrkO5KOIBVOZzrUL2RBeoXTjmjGDY3%2BrDcsRI9bSqSda8tpc0v&X-Amz-Signature=3d2f486f66fe2fa205eb9fdf43d108e030b5f4805efd30215ef930788bf38269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XF62BEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPLNJuiBdGY5IHOKfIos5n7jPf9GNaa77BDldmJhn1cwIhAMbP8cR5JtSzOr5HTTNxB6k5ZyhbR9OK5jxzXAp2eM%2FVKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1j0NGlciauE5lZhwq3AMLE0rlg0FU2pr%2FvrkCnlgVyNh8JSpK6jlTnqNW65o6%2BZW5n5cYILWPRZtuO7JiiYJDwFMESVztwnnNv9mbIsyrx7FAoHtTKKJ5Kn0QI6I68mX%2FVRBGGhUTbn781EweyBMXrf%2FbXbdQlCpQt1jnXxj4HMzaNdO5TKJgOoHf5Ht4%2Bhl47tJmOR8CrrPvosmatPBwe4OYw1YodDYuFJAlSIkXXpvpeWxrdpsjxU0OVxp1kt%2BryAy7Wv62RfklaQxO5gk6k6pM73%2F74b%2BTuwKVRDCVX1Az9KO1VxmN7eKdj93Uz3XLRakJ4XpRyWZjxmoTPXnw0vSHXg5lF8xNf8Usnpa7I8ILMBJ%2BCFcInL3TJdmqzjDaoY3Eeq3e53HGhDUOeQOX2e2gcvfTZOjBOJg%2Bcp43XyihMod7SwUZ0puhP7p0nYEvV%2B0lObj2wFrfPtgK7xn%2BJlBCiEDtj6aaU1KCLxobybFypgSN0DkBk0f4CBx%2FjwRwQ%2BupHCIPqbCBt0q0VAsljYIZwEWmynqxDiXqa%2FYphbyKEUNcwn2Hh95UbVZgg6rk88pY43cqhony80f4fsJkItSUMC1LNKWuEOTRGVLUvr0o%2BlNHnU3i3cPiyHxn%2Fdv0Pfb9ARpzAL0StDC8jMjJBjqkAcrgjLrX8cNVI94nRaMGwd3%2F%2BLl55emepg78jBVRRr49pviZphWH0f8amtFo5KjVxFa3v2iI3nogMpsJDc5%2BmYOI%2BAyzIiN%2FzzQxTnyhKDovSsD7%2FOhJ%2BFklbRTz7VlTpQZNpWXYfioydAVFQiNJYOrtaHx%2ByZeAglSAamM5acSrkO5KOIBVOZzrUL2RBeoXTjmjGDY3%2BrDcsRI9bSqSda8tpc0v&X-Amz-Signature=addf0b1ea7806d3f63c1cceebdaf6fff1c4c0e7e8789178139c2b58c55c8c6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
