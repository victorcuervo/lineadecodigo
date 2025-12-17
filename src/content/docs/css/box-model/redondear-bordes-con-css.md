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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SGGF4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1TwBdCaiVDWGseneS1pAWwqJS6CT848F1l9dF0niQuQIgZv1fOrlDees9dMju%2BgpKQ7x%2BQLytDZICMCuvaQpXCBoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ4LlBnjEagxOgGDwCrcA%2FIiJDxbhmK08CO3uO8HPls6wnZFsfQjqtkO5HgSrr%2FySV4JOh6Nf014OlfSFnOpKhIxWMKhz0OeDzioAD%2F%2B4lwoabKTKYJ5n87CxiOZKt%2FYi%2FNHyP56cnep6QF0NF8ZqRQXuUcuXRfOOHhAZxRZEQxgcemxMC%2BJ9a6bhKPp5YU%2F1xRocEHmt0Y9mAlOTh%2FNiXi2yCMZjxb4Vlov46hVNl25YlyrTQWAMi2oX9XOUjXxvc81A%2B0GkJbmFSVdZIuXZF6U0E2MsbgUqdpkHNAaKgf5FLlLbrJwdbGuacEscF3z4os9%2F4mLz8Dxdg6UwqJ9sskhMcPYdWR5hEQC3mHb%2BJ8C9SrGEo8kUaniy3moDfs6RZr7TO6kFF2Zz0SwJJnPA3zFqSvr3hcvSw48dJh0A7AEBqBtD6lv%2F%2F8S%2B6%2BFGktHiNKxWtPkHNvCNCp%2BwWGNEit31JXgjsX6hCHzqcfY0yn7COr9tv53uOjANTOrex%2BIpJbdnQ0UJnBJXR4cKez8tqzdF%2BU8KOZ4GJiuJhOXziiCxazLiHS380C5BmCg3274xXQ%2FonTXluEtPS%2Fh8q3wQGfmsG5AyqArU75DuKkIV2l5v3jV4k0fzWC0bBOjPOKvBdaOxM%2Fjba086CS0MN6WiMoGOqUB0sG1i0GYFviaEUiIE5lc5xj7nLc4snSTBn3X0kSb%2B0r8d0OzI7hK884mnLUIi4%2B75cUjKezVMe%2FrPphED12hya0n7m4oOL2dq4sKVDkRp3WQpzaB7%2BhIeRlZCyteaU6kAxOFb%2F4CieTDjGOaq3HtiihvSeA6vdGhGuQy%2FiqcdBG3eQW94YqURNwikh2ClCa3px29HO93fPabQvpCH4pZ%2Beu%2FVX2n&X-Amz-Signature=575fd6280fff11a31f5f0d9c9c5e40720c5448ebbe5b2c89694effb99ca7db54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SGGF4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1TwBdCaiVDWGseneS1pAWwqJS6CT848F1l9dF0niQuQIgZv1fOrlDees9dMju%2BgpKQ7x%2BQLytDZICMCuvaQpXCBoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ4LlBnjEagxOgGDwCrcA%2FIiJDxbhmK08CO3uO8HPls6wnZFsfQjqtkO5HgSrr%2FySV4JOh6Nf014OlfSFnOpKhIxWMKhz0OeDzioAD%2F%2B4lwoabKTKYJ5n87CxiOZKt%2FYi%2FNHyP56cnep6QF0NF8ZqRQXuUcuXRfOOHhAZxRZEQxgcemxMC%2BJ9a6bhKPp5YU%2F1xRocEHmt0Y9mAlOTh%2FNiXi2yCMZjxb4Vlov46hVNl25YlyrTQWAMi2oX9XOUjXxvc81A%2B0GkJbmFSVdZIuXZF6U0E2MsbgUqdpkHNAaKgf5FLlLbrJwdbGuacEscF3z4os9%2F4mLz8Dxdg6UwqJ9sskhMcPYdWR5hEQC3mHb%2BJ8C9SrGEo8kUaniy3moDfs6RZr7TO6kFF2Zz0SwJJnPA3zFqSvr3hcvSw48dJh0A7AEBqBtD6lv%2F%2F8S%2B6%2BFGktHiNKxWtPkHNvCNCp%2BwWGNEit31JXgjsX6hCHzqcfY0yn7COr9tv53uOjANTOrex%2BIpJbdnQ0UJnBJXR4cKez8tqzdF%2BU8KOZ4GJiuJhOXziiCxazLiHS380C5BmCg3274xXQ%2FonTXluEtPS%2Fh8q3wQGfmsG5AyqArU75DuKkIV2l5v3jV4k0fzWC0bBOjPOKvBdaOxM%2Fjba086CS0MN6WiMoGOqUB0sG1i0GYFviaEUiIE5lc5xj7nLc4snSTBn3X0kSb%2B0r8d0OzI7hK884mnLUIi4%2B75cUjKezVMe%2FrPphED12hya0n7m4oOL2dq4sKVDkRp3WQpzaB7%2BhIeRlZCyteaU6kAxOFb%2F4CieTDjGOaq3HtiihvSeA6vdGhGuQy%2FiqcdBG3eQW94YqURNwikh2ClCa3px29HO93fPabQvpCH4pZ%2Beu%2FVX2n&X-Amz-Signature=679cc5572714938b8606fcf6b912bfd3d58c5b6fc1326e79cdca1064486ed117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
