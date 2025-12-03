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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV44T2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMLoSqrWjQ5Zo%2FNUwFhGjM97ajgv2tiP%2BW25sU41cw5gIhAJYoTgGhZJxChskJ%2FeEjqQThu8ICw2NDDUlvBI8yO3PbKv8DCDkQABoMNjM3NDIzMTgzODA1Igy4papgz5PcoHg45Pgq3ANPwjC9f2NOYgpVHyp%2B4iWaCEVg%2BInEI034ej9zEUL4cBwkN%2BhFAOYSS6%2BQBQO2s64VJtzu26ZPQIl3Ru2UBE3%2FlUp5GD1H6G%2BuL2vgHW9YCg%2BrwfdZ7%2BaerokTYUy7E4fhugmZW7gm6k5ng4UX3fK974DRpayO38NcVwUliv1CfktOmjSjq%2BXXW8FK6ay6StFP1NYSuZIfNs%2BOHqyQk%2FY9u%2BLeut0XbNkPeT1LEHMrzVjSChehSf4ooBldz%2FQgyXMzXweTO5VbgpcBuqG4JhMCkhKu27tuFK4xgdiax29xrvoMborDJYjxzLvBS4%2BKrrMWJwtwShIOpxsiWPHxanHBItyjNegJZLKYxDpilijoWUpaub2sdi3W2CJX7aGgEfAT4YkInW%2FipMJSchKQBa4PxlUuci9Ox0Z4wGGMxKLbplK9iRu2XhWmCI4NwQSn18fLdI2KFPL7Np2VJzGKWl7rQeqkxv9LGCO4dIUMROE0CiDyTWmE4lOHqk6G1%2By1eLbVNupbbtWwYaN16GtfHjPkfFqiiRcaB%2FV8avxi0hHjTP4MmlNg1lOhAbcPw3ykjcLiQBSGFQlZp6tnkwML%2FJt6RcYV9zoiRELm3hfu90ITYEwLsCmuZ%2BU7DXTHKDDplMPJBjqkARIySEJ%2FDSD0iGnP2%2BfbaiLA%2BMAdlV7w8iczY71aefjLuTMtuWRnXfo0t1xK4HSqywojFL09rzdINIsJRaiebMzEBVbPDHnGOrJ0HMVxPs%2FHgKtpxyWmnKLoGB82uXkIsk7FP7VO6d9IJ7iDQbqY7H3p%2Fjonv7ylOUvEpDPpsQb7JtNXKStn9WPvGTe1JqXXoLZE9JQ%2F1UTuLMrtXWfx6iH3%2Bzu%2B&X-Amz-Signature=69173306847673f954c632306d0303fcaa79d2e51a5e85bcc1920621292513e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV44T2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMLoSqrWjQ5Zo%2FNUwFhGjM97ajgv2tiP%2BW25sU41cw5gIhAJYoTgGhZJxChskJ%2FeEjqQThu8ICw2NDDUlvBI8yO3PbKv8DCDkQABoMNjM3NDIzMTgzODA1Igy4papgz5PcoHg45Pgq3ANPwjC9f2NOYgpVHyp%2B4iWaCEVg%2BInEI034ej9zEUL4cBwkN%2BhFAOYSS6%2BQBQO2s64VJtzu26ZPQIl3Ru2UBE3%2FlUp5GD1H6G%2BuL2vgHW9YCg%2BrwfdZ7%2BaerokTYUy7E4fhugmZW7gm6k5ng4UX3fK974DRpayO38NcVwUliv1CfktOmjSjq%2BXXW8FK6ay6StFP1NYSuZIfNs%2BOHqyQk%2FY9u%2BLeut0XbNkPeT1LEHMrzVjSChehSf4ooBldz%2FQgyXMzXweTO5VbgpcBuqG4JhMCkhKu27tuFK4xgdiax29xrvoMborDJYjxzLvBS4%2BKrrMWJwtwShIOpxsiWPHxanHBItyjNegJZLKYxDpilijoWUpaub2sdi3W2CJX7aGgEfAT4YkInW%2FipMJSchKQBa4PxlUuci9Ox0Z4wGGMxKLbplK9iRu2XhWmCI4NwQSn18fLdI2KFPL7Np2VJzGKWl7rQeqkxv9LGCO4dIUMROE0CiDyTWmE4lOHqk6G1%2By1eLbVNupbbtWwYaN16GtfHjPkfFqiiRcaB%2FV8avxi0hHjTP4MmlNg1lOhAbcPw3ykjcLiQBSGFQlZp6tnkwML%2FJt6RcYV9zoiRELm3hfu90ITYEwLsCmuZ%2BU7DXTHKDDplMPJBjqkARIySEJ%2FDSD0iGnP2%2BfbaiLA%2BMAdlV7w8iczY71aefjLuTMtuWRnXfo0t1xK4HSqywojFL09rzdINIsJRaiebMzEBVbPDHnGOrJ0HMVxPs%2FHgKtpxyWmnKLoGB82uXkIsk7FP7VO6d9IJ7iDQbqY7H3p%2Fjonv7ylOUvEpDPpsQb7JtNXKStn9WPvGTe1JqXXoLZE9JQ%2F1UTuLMrtXWfx6iH3%2Bzu%2B&X-Amz-Signature=5c4adb9fe109321a9158cd875faadef61a3f490bf3b923ca2c2b7d69459c7924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
