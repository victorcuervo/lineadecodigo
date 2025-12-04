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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJUTS4M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbX%2FVVk78nHjk%2BgAzQygBmLbHRuBNzUFEGZFkQiiNmQIgMNm7ulaGNxJC95t%2FQtX4xiAqHQiAiuToXi7Dynb9P9gq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKW0WI0Y2%2FiMsTw8zSrcA0cQR%2BT%2BDdSNnsCrr6rMiZ2H8iY2YDnyWHruwH5A9WKDSunAadCHX69r7qvw7rQnbswK5ing4GizAAU2UN5To5LOYHVflTVgpywgR02%2FBVZsSd4ag3pBG%2BVOHl8HG43yQ737z2onucA8E%2By7wfZzFdcv7atHIDy%2BcF%2BjzXlK33HzaTZf1QjfNUyPyg60UlX2KhRCzQAZ9LKbDPw0O6wf2BucwIMSll2cSvDvYXbHEnA7c0yuir6JR2w4bxiTONK1WhXqiM9G7sbgBBh6R9I5lfeX6keMiP4j4443r8r5WEM021bFbeowt3Ui1aLIAj%2FcR4RUpU8CTQVrg%2F4izBhELGuEF783COZjx8QGKRMu2S44i5H4zk1zLpmejfyOINKTj3YbJZKRCFJApzJdjLnVyAtx0%2FEJ4ao%2BsF0%2FBOzYdQswA8XfH%2Fu04JB%2Fa8%2B4CwrGaqrKe%2FntTwVoyy1kxMP2xc4fW%2FS9YvWqif1%2F7I5TgH2H6MVR6%2Bdiec8lflWZy%2FLmyz0lhVq6kunYQe4zkNjzHmM9QB2GGCL1Qk3QP%2FNemUEoi%2FVUKYi5IfWYIgZzi%2FucMdDQXzvvTmhFNYXHJo4fXSfU0m8atGAb5OSuJ4wsRa2T%2BZC8eM8TIDOpgyKXMPPbxskGOqUBmAhoK6uXARsAgUgqbNqA%2FzJ%2Fdr9iGLXoD%2FVU5yK8CmEXoD21P2e41UwPheL4AUC85zkhwVbWmOt%2FdgxyJmSsxxgc0wohv2%2FNfBwye7lj9c4afQlSOi7q4AkKkDFPIxZoPsX5HRRoEvAyjkl9FVuxERYQQSCCBxmT%2FQk0px86g8iIyAgN2lRfPMwbEA7mmuJPikgKZpLibZQ2ItpjNgjkrqTHbWBa&X-Amz-Signature=d5259f483a25b6f471bc5f518b1ff2cbba4678f712d20ddbc1753e8cd54dd6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJUTS4M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbX%2FVVk78nHjk%2BgAzQygBmLbHRuBNzUFEGZFkQiiNmQIgMNm7ulaGNxJC95t%2FQtX4xiAqHQiAiuToXi7Dynb9P9gq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKW0WI0Y2%2FiMsTw8zSrcA0cQR%2BT%2BDdSNnsCrr6rMiZ2H8iY2YDnyWHruwH5A9WKDSunAadCHX69r7qvw7rQnbswK5ing4GizAAU2UN5To5LOYHVflTVgpywgR02%2FBVZsSd4ag3pBG%2BVOHl8HG43yQ737z2onucA8E%2By7wfZzFdcv7atHIDy%2BcF%2BjzXlK33HzaTZf1QjfNUyPyg60UlX2KhRCzQAZ9LKbDPw0O6wf2BucwIMSll2cSvDvYXbHEnA7c0yuir6JR2w4bxiTONK1WhXqiM9G7sbgBBh6R9I5lfeX6keMiP4j4443r8r5WEM021bFbeowt3Ui1aLIAj%2FcR4RUpU8CTQVrg%2F4izBhELGuEF783COZjx8QGKRMu2S44i5H4zk1zLpmejfyOINKTj3YbJZKRCFJApzJdjLnVyAtx0%2FEJ4ao%2BsF0%2FBOzYdQswA8XfH%2Fu04JB%2Fa8%2B4CwrGaqrKe%2FntTwVoyy1kxMP2xc4fW%2FS9YvWqif1%2F7I5TgH2H6MVR6%2Bdiec8lflWZy%2FLmyz0lhVq6kunYQe4zkNjzHmM9QB2GGCL1Qk3QP%2FNemUEoi%2FVUKYi5IfWYIgZzi%2FucMdDQXzvvTmhFNYXHJo4fXSfU0m8atGAb5OSuJ4wsRa2T%2BZC8eM8TIDOpgyKXMPPbxskGOqUBmAhoK6uXARsAgUgqbNqA%2FzJ%2Fdr9iGLXoD%2FVU5yK8CmEXoD21P2e41UwPheL4AUC85zkhwVbWmOt%2FdgxyJmSsxxgc0wohv2%2FNfBwye7lj9c4afQlSOi7q4AkKkDFPIxZoPsX5HRRoEvAyjkl9FVuxERYQQSCCBxmT%2FQk0px86g8iIyAgN2lRfPMwbEA7mmuJPikgKZpLibZQ2ItpjNgjkrqTHbWBa&X-Amz-Signature=575c97ce8ea8b5c76e3f9c2545d3b60da2a1db15d69e55ecd41c3ccb93632018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
