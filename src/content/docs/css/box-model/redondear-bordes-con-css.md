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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2AHERX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaUpxm8bBzX5tuyrJux4ZpO5K9M1j28GZxqt9UjbyMDAiEApLIu1Vl9KLugKrNEGq7pc%2BMnO9K6tbR0GaQFeHcRjKUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKWb2vZee6NdRJB9WCrcA4KJYMbNbz1EL0oGaJhl3aejnhLfdv0UURklcFl0y9ybNgj4H1B3xDgsEIzz7WEficgxnSr6AUFpoec5b86laDzWa0U00wtmtLWfucJv0Z9w7KC%2BcyhbscY5jAge%2Bf1wLsT9aNghcRCjQFKzGvV%2FA0NCyw5uhk5QEBMG3tJv%2BMfs3qCC1YTeAVCdkd%2BKE0YkaXvxLlLfmnIM16P0n9spv78eFEJcV0gYMuMSdOCkwcsc0UExjnAR3kwiQ6JHw53ItDaxSsfqSclGthkhOmB44KAIPQKC2YippEzAGvGgYZSqlTdQVPZnXjzgd%2FaY494jyeY3p%2B583lG3XGoaEME3douAbvlzrCOuLcmT7BM6iEwZXryhJOJQQUxBpLpAJlELrDBF4enRd5iyMy7TG%2F1zEDYAkz7bbZ907xtQyR9bCuMLhP48iKvFg49eNtlnNre1ghtSFKcielaNnFJJcYDqRiPBgPuVbmMBevwVA3Z9gedyRhS5MaeY9pjAXRCE3vJl9WSoViRABi5QwWZS6oT7mNfEXlQ%2B4nUx%2FvMORKuJ%2BDTLkOhGvlsTvuskYZyEHy8PwshX%2FQ%2BPwnW6udH8QpqznOpoY302zzT5%2FT3JpmP50biGxkHYxMXXJtNZX0W%2BMPDFisoGOqUBBIKb1ig%2BxOAhtotH%2FgRk0jF4%2B%2BsDsd1kFqC7UlyQnYaM1CAKc8V1eGC04HWIdATxpP0unlGHHms5aFBvzEnTsDCZLYklMphpWsBiBZK%2FaOa6XlhG%2BOd%2FjCXu7%2F%2BaX9eW4MqJxcteLRINf3ndu2Oxl65BvOzyiWSqk8xicqvMv2z8MsLllape%2BusdgyxgJNrGFb7p1KZhEIJDVbkHgOpowejouIfX&X-Amz-Signature=f283c14402633881c9e42863c4af049509fe6de4c4af16a2d5b28e50a23659a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2AHERX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaUpxm8bBzX5tuyrJux4ZpO5K9M1j28GZxqt9UjbyMDAiEApLIu1Vl9KLugKrNEGq7pc%2BMnO9K6tbR0GaQFeHcRjKUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKWb2vZee6NdRJB9WCrcA4KJYMbNbz1EL0oGaJhl3aejnhLfdv0UURklcFl0y9ybNgj4H1B3xDgsEIzz7WEficgxnSr6AUFpoec5b86laDzWa0U00wtmtLWfucJv0Z9w7KC%2BcyhbscY5jAge%2Bf1wLsT9aNghcRCjQFKzGvV%2FA0NCyw5uhk5QEBMG3tJv%2BMfs3qCC1YTeAVCdkd%2BKE0YkaXvxLlLfmnIM16P0n9spv78eFEJcV0gYMuMSdOCkwcsc0UExjnAR3kwiQ6JHw53ItDaxSsfqSclGthkhOmB44KAIPQKC2YippEzAGvGgYZSqlTdQVPZnXjzgd%2FaY494jyeY3p%2B583lG3XGoaEME3douAbvlzrCOuLcmT7BM6iEwZXryhJOJQQUxBpLpAJlELrDBF4enRd5iyMy7TG%2F1zEDYAkz7bbZ907xtQyR9bCuMLhP48iKvFg49eNtlnNre1ghtSFKcielaNnFJJcYDqRiPBgPuVbmMBevwVA3Z9gedyRhS5MaeY9pjAXRCE3vJl9WSoViRABi5QwWZS6oT7mNfEXlQ%2B4nUx%2FvMORKuJ%2BDTLkOhGvlsTvuskYZyEHy8PwshX%2FQ%2BPwnW6udH8QpqznOpoY302zzT5%2FT3JpmP50biGxkHYxMXXJtNZX0W%2BMPDFisoGOqUBBIKb1ig%2BxOAhtotH%2FgRk0jF4%2B%2BsDsd1kFqC7UlyQnYaM1CAKc8V1eGC04HWIdATxpP0unlGHHms5aFBvzEnTsDCZLYklMphpWsBiBZK%2FaOa6XlhG%2BOd%2FjCXu7%2F%2BaX9eW4MqJxcteLRINf3ndu2Oxl65BvOzyiWSqk8xicqvMv2z8MsLllape%2BusdgyxgJNrGFb7p1KZhEIJDVbkHgOpowejouIfX&X-Amz-Signature=f6cf42d3add4d6c55a8bfa75a0886d4cabc9239e8514a6edaf98c39fec56482a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
