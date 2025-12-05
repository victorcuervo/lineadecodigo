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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTEUAL2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEljXuchBFi4LAduImCZAlYZg%2BR05twN9hDkRokbpvE3AiBvs9bSKiYjZuLjRo3AslL30NszvpW%2F6oFfRa6wTtjqoyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMslOC9JHVnZrPCIHRKtwDJeTRXTbe%2BAWPOHvuO7FlQ0tXA9%2BHhgjhT3G1rN8qWzpovDU8bGYQfLWpn80m%2FbHrwzNAJGtZjGPZ5egofDIBZmczZ%2FeYzLA0Fnclm5MmceVDHIh11SH7omeQFv%2BWxBqA6FNfIKkOJYdp2kFzgLcjuKtYtG6k16BwKTl%2BeHXHpSjNUe33O4xG5pEbJEG4qasM8jY46SiK%2BP%2B%2FKfdNcO5Vm5hOzZzElSm3NTYc3b%2F9qUZpxX3y34lGgFyTKRxISoO4lCijo4ykvMtM%2Bg18aniAx3WUL9QFg8ZoJsR9ty8yC830WEDSV1vI75oKNWND%2FVy6I0buwzoDDb97G2VkRilMfZS1Y3vAYkIJMt7lgmhjQ0Dy2HenOBgiQxaUs2QQm1i5zh9yH0C0cXf2hoZkKcJPXKoMfHk%2FGA44kNI8OpgR97GEe41u5YkuVjGNv3lCkWq7MZyDMbyLo6qKP%2FkyY84P0asB7z7AtFLrWkJt7NZV7%2Fe1kkTm1o3oGKvsrYpIdDazTsWc%2BhI7qZJMbbU%2FbREHGhUt9h4TMV%2BJ1FMm8hBV%2FxKAAc2EA1Sc1wULfa%2Boc6Fr4xGQFY3dXtmnoGq4%2FH3h%2Bq%2BOvVqdA%2Bhe%2FviDCvU5wEefPF2Zowc9JhJ3hrkwtIzIyQY6pgFwPRQS4BvTNGcewp4YbzybLUIElL1klDJUnP6eInYPBHdocQDYlcVN42mcNiBjrQ5tVXcB9ThW2pft9p0MqBBGvbPqDW7w491qrl5l7WE4x%2F14jYaOdUvhH8MEQYtrCBNA%2BGY9KHj9gzZ7MXzZ8XywIQ5t5d1q3JtAfpVgmIc%2BW2o%2BxkgQELUJ%2BQV%2F6YR2U4LrdBJzM2Ln6iU7EnhjENMiev6r1%2Bbp&X-Amz-Signature=107e3d21fe83e7b1fdfee27a2031924e76b142435d9d765d20e5b040ca719340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTEUAL2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEljXuchBFi4LAduImCZAlYZg%2BR05twN9hDkRokbpvE3AiBvs9bSKiYjZuLjRo3AslL30NszvpW%2F6oFfRa6wTtjqoyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMslOC9JHVnZrPCIHRKtwDJeTRXTbe%2BAWPOHvuO7FlQ0tXA9%2BHhgjhT3G1rN8qWzpovDU8bGYQfLWpn80m%2FbHrwzNAJGtZjGPZ5egofDIBZmczZ%2FeYzLA0Fnclm5MmceVDHIh11SH7omeQFv%2BWxBqA6FNfIKkOJYdp2kFzgLcjuKtYtG6k16BwKTl%2BeHXHpSjNUe33O4xG5pEbJEG4qasM8jY46SiK%2BP%2B%2FKfdNcO5Vm5hOzZzElSm3NTYc3b%2F9qUZpxX3y34lGgFyTKRxISoO4lCijo4ykvMtM%2Bg18aniAx3WUL9QFg8ZoJsR9ty8yC830WEDSV1vI75oKNWND%2FVy6I0buwzoDDb97G2VkRilMfZS1Y3vAYkIJMt7lgmhjQ0Dy2HenOBgiQxaUs2QQm1i5zh9yH0C0cXf2hoZkKcJPXKoMfHk%2FGA44kNI8OpgR97GEe41u5YkuVjGNv3lCkWq7MZyDMbyLo6qKP%2FkyY84P0asB7z7AtFLrWkJt7NZV7%2Fe1kkTm1o3oGKvsrYpIdDazTsWc%2BhI7qZJMbbU%2FbREHGhUt9h4TMV%2BJ1FMm8hBV%2FxKAAc2EA1Sc1wULfa%2Boc6Fr4xGQFY3dXtmnoGq4%2FH3h%2Bq%2BOvVqdA%2Bhe%2FviDCvU5wEefPF2Zowc9JhJ3hrkwtIzIyQY6pgFwPRQS4BvTNGcewp4YbzybLUIElL1klDJUnP6eInYPBHdocQDYlcVN42mcNiBjrQ5tVXcB9ThW2pft9p0MqBBGvbPqDW7w491qrl5l7WE4x%2F14jYaOdUvhH8MEQYtrCBNA%2BGY9KHj9gzZ7MXzZ8XywIQ5t5d1q3JtAfpVgmIc%2BW2o%2BxkgQELUJ%2BQV%2F6YR2U4LrdBJzM2Ln6iU7EnhjENMiev6r1%2Bbp&X-Amz-Signature=0df812813a58875dd8111188571699ef724e79488aaaeab51902a5a78bd4ee07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
