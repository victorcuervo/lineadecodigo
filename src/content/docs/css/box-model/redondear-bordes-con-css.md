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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POSB3NV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjiiqa%2F%2FoJJaqjR%2FGia9w1i%2FL420Px%2BEcfNpTfsp24gIhAPXCWe8SaSYISqJDFQE46AhEqriV%2FJ3uefcF0KAl6GOKKv8DCHcQABoMNjM3NDIzMTgzODA1Igw5wOR0PVL5QUiRf4oq3ANaW1jeiwoGlqfoaDd2klkX1vLmxYnJvK7UYfkFCsFFz%2BEYalNKKQc0aPkyEzJo6earHgoPY%2FsA2z%2Fzffzg2erny20PSn7jMLM9X1BaCchcUznuB4VFqhG3zat4ip1N4zPKToMWBhrolDtPravaB%2Ffdjt%2Fsr95t9V37oocyGhhVLxeubByo0y%2FxbqrYliq9ys8dH17x4ZpM9cXdosNFaGuAvqSsEUVVUpKaOXvXDjoTRkK5JEWLXN8cz6asXXqUHybODna%2B1f8a%2F3l165tAzyG317YdhmWIKQryep8aaXD53XcI6nS2ZyKjj%2Fh6DcMsXKJ5I5AK%2BINjBZJkFnuYRe3Hc3O6OBSeIRSL2HZ7F07zrgkNorUROvOzp%2Bs0Ot00VRingYUXDa8g9qGB3mFoMH5ttx8MwYxSoNxau6oa0cLIvG7%2B8JOK4IDXiXuFqvMWTpncY2IYuIs6t0%2BhwZTFEz54yh9Q84fFyNfoi27OuqkcSB6tgOSgK0xyIq1LK5to6M3EuxLJa%2BsEG%2F6Syaty5iXSmOVt3TH5ap7zH3rlMTCbqvuzSsSIdeZekATtwoQAOjLBEEIeVkeEd8UBtVp9b6qb47OSEIMB8PXSJBe0GeIepWLYbzKdDYlL%2FYcedTDsgonKBjqkAeGYSLBlKnVWmyjKssUlrpVNyALeyu1q6UoTmBubJEpsk785rIaLx2Ihc3AYgoC3uK%2Bg04jE5EZnDusRX9hDIINelLwGVG8cD563rknBHejoRu%2Bl2m02gWzYJ3HZ%2BWTpOELwbTQNgCCP5urbwNjyXkiBHgrUx3i3ZaI4c46Eb21mZfnyQRdgqO7gf4aHd1bkF%2B0xotXMW1qzMjxxzXMSwYhV5Sh5&X-Amz-Signature=b5bf5b73417eec592f1d7c8d7ab8ac3f4e39ac00766b6e8947b4bbeb50399eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662POSB3NV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXjiiqa%2F%2FoJJaqjR%2FGia9w1i%2FL420Px%2BEcfNpTfsp24gIhAPXCWe8SaSYISqJDFQE46AhEqriV%2FJ3uefcF0KAl6GOKKv8DCHcQABoMNjM3NDIzMTgzODA1Igw5wOR0PVL5QUiRf4oq3ANaW1jeiwoGlqfoaDd2klkX1vLmxYnJvK7UYfkFCsFFz%2BEYalNKKQc0aPkyEzJo6earHgoPY%2FsA2z%2Fzffzg2erny20PSn7jMLM9X1BaCchcUznuB4VFqhG3zat4ip1N4zPKToMWBhrolDtPravaB%2Ffdjt%2Fsr95t9V37oocyGhhVLxeubByo0y%2FxbqrYliq9ys8dH17x4ZpM9cXdosNFaGuAvqSsEUVVUpKaOXvXDjoTRkK5JEWLXN8cz6asXXqUHybODna%2B1f8a%2F3l165tAzyG317YdhmWIKQryep8aaXD53XcI6nS2ZyKjj%2Fh6DcMsXKJ5I5AK%2BINjBZJkFnuYRe3Hc3O6OBSeIRSL2HZ7F07zrgkNorUROvOzp%2Bs0Ot00VRingYUXDa8g9qGB3mFoMH5ttx8MwYxSoNxau6oa0cLIvG7%2B8JOK4IDXiXuFqvMWTpncY2IYuIs6t0%2BhwZTFEz54yh9Q84fFyNfoi27OuqkcSB6tgOSgK0xyIq1LK5to6M3EuxLJa%2BsEG%2F6Syaty5iXSmOVt3TH5ap7zH3rlMTCbqvuzSsSIdeZekATtwoQAOjLBEEIeVkeEd8UBtVp9b6qb47OSEIMB8PXSJBe0GeIepWLYbzKdDYlL%2FYcedTDsgonKBjqkAeGYSLBlKnVWmyjKssUlrpVNyALeyu1q6UoTmBubJEpsk785rIaLx2Ihc3AYgoC3uK%2Bg04jE5EZnDusRX9hDIINelLwGVG8cD563rknBHejoRu%2Bl2m02gWzYJ3HZ%2BWTpOELwbTQNgCCP5urbwNjyXkiBHgrUx3i3ZaI4c46Eb21mZfnyQRdgqO7gf4aHd1bkF%2B0xotXMW1qzMjxxzXMSwYhV5Sh5&X-Amz-Signature=7f48181f44aec74211df203acda61b312f3c04873540aec485a32a10cc75bf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
