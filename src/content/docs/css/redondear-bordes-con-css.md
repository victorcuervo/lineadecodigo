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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOXPUAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlj1gaFBmDMt0vXyHWRM0J42QwaSWLjXRaHucr3lg3gIhAIv3hEV6phnzLCJN3OVpt6PHHOk59WIxrDH3oqQ95B%2F5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlgIVXx%2F0%2BNzYZ0GUq3ANlsqcURhjDKGopUGGPDxgmaY%2Fzb8iuRu37qHNAzkfu80Ou4z3M4KKhQCi4cihBlf0%2Fd0tlPoJTLvulFmKib7kMw1SFIKENW6pGPL7rtNWNMeDhVZOl1Pd%2Fz6hLt980S1ywnig8n%2FiaIgcN3TerwrLtwADVUKgqJqrUIMOHl5IEOjN1lN1L0dfeTSHju0iCrkd%2FXpQV6Sk0dFn60V0fCzGOgiwvwQUyR95ZDwCZZeOnC1e6v4Rl3hjfdtt6QenjVVTo01ZIawH566KAr8XLGx8gIJA7unAsWyR6YEAzt1ACdFsWKaD9ZAAqX1QypB8JjWkps2HN3piz074i4xczbwRUK43BTEZTQRpZuGDp4l%2Bz1e9hy7b2gPIgdeQTQgiQ2ue1yaG4N9H7%2BzhhoYyXFbrkuJ7imCC1EKJp9I4E2pxgTJweHAPrEeFKsD%2FJJoecCVjI07mC3kbA%2FLY0whel%2FqRUSG0S0TpjX6DjWuR98H9AFRHZMBOE4wozA1I5%2Fmw600idvU5jfyYMKdQSJ%2Bja7gGMmPL7C1yEooRYtbOKUVnJyFm9QY8pcJ4xPKMvW4K%2FuBrhc%2B5OLBb7b7A2UZODhm91IG9zPG%2Bz3zoCzZkAggIQLB3JCI4JPxBb%2FoRr4zDc%2FdLJBjqkATX4Pg0LYKtLiN%2BO3Vno6%2FK17HtwalTtqIS%2BOLbGjBlUTjyAuyx7Hq7DSpE2024T9BctGoDyd9bxFmGk5uUtbC95XXqz1idjDeIY8I4s1rYpbBt2r%2F52p7HnYvVrtgRkuhRVAR5%2FM%2Fa%2BmtiUC9ky040Z2FH6xm91TAmUslNGZxhVoSPoMIycyN8E6vzR%2FMmrule886UIF7TW7KwDbFzCP0ZaXYKc&X-Amz-Signature=df17ac8bbc1cacdf5711cd3c796417e70fd12355bee2ebd71c3fedc5800c83bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOXPUAK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlj1gaFBmDMt0vXyHWRM0J42QwaSWLjXRaHucr3lg3gIhAIv3hEV6phnzLCJN3OVpt6PHHOk59WIxrDH3oqQ95B%2F5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlgIVXx%2F0%2BNzYZ0GUq3ANlsqcURhjDKGopUGGPDxgmaY%2Fzb8iuRu37qHNAzkfu80Ou4z3M4KKhQCi4cihBlf0%2Fd0tlPoJTLvulFmKib7kMw1SFIKENW6pGPL7rtNWNMeDhVZOl1Pd%2Fz6hLt980S1ywnig8n%2FiaIgcN3TerwrLtwADVUKgqJqrUIMOHl5IEOjN1lN1L0dfeTSHju0iCrkd%2FXpQV6Sk0dFn60V0fCzGOgiwvwQUyR95ZDwCZZeOnC1e6v4Rl3hjfdtt6QenjVVTo01ZIawH566KAr8XLGx8gIJA7unAsWyR6YEAzt1ACdFsWKaD9ZAAqX1QypB8JjWkps2HN3piz074i4xczbwRUK43BTEZTQRpZuGDp4l%2Bz1e9hy7b2gPIgdeQTQgiQ2ue1yaG4N9H7%2BzhhoYyXFbrkuJ7imCC1EKJp9I4E2pxgTJweHAPrEeFKsD%2FJJoecCVjI07mC3kbA%2FLY0whel%2FqRUSG0S0TpjX6DjWuR98H9AFRHZMBOE4wozA1I5%2Fmw600idvU5jfyYMKdQSJ%2Bja7gGMmPL7C1yEooRYtbOKUVnJyFm9QY8pcJ4xPKMvW4K%2FuBrhc%2B5OLBb7b7A2UZODhm91IG9zPG%2Bz3zoCzZkAggIQLB3JCI4JPxBb%2FoRr4zDc%2FdLJBjqkATX4Pg0LYKtLiN%2BO3Vno6%2FK17HtwalTtqIS%2BOLbGjBlUTjyAuyx7Hq7DSpE2024T9BctGoDyd9bxFmGk5uUtbC95XXqz1idjDeIY8I4s1rYpbBt2r%2F52p7HnYvVrtgRkuhRVAR5%2FM%2Fa%2BmtiUC9ky040Z2FH6xm91TAmUslNGZxhVoSPoMIycyN8E6vzR%2FMmrule886UIF7TW7KwDbFzCP0ZaXYKc&X-Amz-Signature=dbfaeab40e82bb9b2f1c9484ec3884f1c531c570c4d1cbf0eef79c6a3660f144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
