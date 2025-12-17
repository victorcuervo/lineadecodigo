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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NTZWFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpKqUXZPNiMBKNqWoakApdFafAy42mVAXPiFFXp6pMAIgWoOZt0YQ8Qf3o0WMnwQwkaNM9EXiPAr0vQU09KrYBBEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYQ9LKRNIReo%2BcrNyrcA9XuCCMDVMixkiTH%2BOLXxcikjDuVhDfofKOkTNC0KZ%2BIdblPqEJ4vuRWP6BL6Wq4V826Q0bWkcnWThACQzsMafjFkHFG4SyyohTXyXh%2FPVvJhX26SBm3%2B15vv%2FZsXFfEpH3kg2BQM%2BLHrKi4gdj1TF%2F9ORqgMahgieTBljKt2R0H%2B2iUKqJYhXOJ%2FLSg4wRCgIzgKnRsKm6iI0vdfH%2F%2FCy7IpL0%2B45yqlHn386oruCiRtSvKRje2oD08dtNCtqTBNyv7VpjrlfxmN%2By%2FQpkIW87aI8T9jRrablq%2FKScLj4YvoS87BhQA%2FJeW4BSk5wOYos21LDOyZCy4lTuuUL5QVZo4zTorUIU2ka6HjZGUhcgZLe5WTN%2Bg1DEnkyXqelRa4MsvIRrbo5f7pX8zMXFA1IugJ75R8xVEOpxR7M9fVMa1FaSfAvekOoJwvDXdvnrwq1RlqFWzemn6YwI9c3iAWTpsS1bnuLw%2Flj76gAnyHJxNg6sUc0LSpZAJUFvOLquv38w%2FBWmPMp7%2FbPf2QHZ%2BQKXBvG4rbK0pk8xeJ0zOjhohPZXrSCHDUxs%2BdA3QqkkHFWT9PFU7qiua%2B%2BMFgtEq38Gftev%2BPuJ5VaFPf2NWZWF%2FYBXVtFS8ramBDll5MKWBi8oGOqUBxapN1ysWk10mmpFQOrc7kNJ0HE%2FIPKhj%2BHd7cgcMhpQuN7kXjyhuXtsVW7eV2v2UJ3PxOQ%2B%2BWDnTz%2FF7%2FZwNhhEgknjPI3YRIqa345y%2F27qwAUv%2BcPDy9oKwiDpZClbxw%2BIpgpDgQA%2F0br4GfKmMe5CgrAix%2F2%2B3nmhYG6w1MRav2d%2FsAfG1XoYFOiWgqMbSOlPjD9W6VoycQGZ7lcCDGt%2B3JOrS&X-Amz-Signature=184fe491f05a0999fdfae9264c7028c38845dd6ee51f9f53d4627c8acd86c848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NTZWFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpKqUXZPNiMBKNqWoakApdFafAy42mVAXPiFFXp6pMAIgWoOZt0YQ8Qf3o0WMnwQwkaNM9EXiPAr0vQU09KrYBBEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYQ9LKRNIReo%2BcrNyrcA9XuCCMDVMixkiTH%2BOLXxcikjDuVhDfofKOkTNC0KZ%2BIdblPqEJ4vuRWP6BL6Wq4V826Q0bWkcnWThACQzsMafjFkHFG4SyyohTXyXh%2FPVvJhX26SBm3%2B15vv%2FZsXFfEpH3kg2BQM%2BLHrKi4gdj1TF%2F9ORqgMahgieTBljKt2R0H%2B2iUKqJYhXOJ%2FLSg4wRCgIzgKnRsKm6iI0vdfH%2F%2FCy7IpL0%2B45yqlHn386oruCiRtSvKRje2oD08dtNCtqTBNyv7VpjrlfxmN%2By%2FQpkIW87aI8T9jRrablq%2FKScLj4YvoS87BhQA%2FJeW4BSk5wOYos21LDOyZCy4lTuuUL5QVZo4zTorUIU2ka6HjZGUhcgZLe5WTN%2Bg1DEnkyXqelRa4MsvIRrbo5f7pX8zMXFA1IugJ75R8xVEOpxR7M9fVMa1FaSfAvekOoJwvDXdvnrwq1RlqFWzemn6YwI9c3iAWTpsS1bnuLw%2Flj76gAnyHJxNg6sUc0LSpZAJUFvOLquv38w%2FBWmPMp7%2FbPf2QHZ%2BQKXBvG4rbK0pk8xeJ0zOjhohPZXrSCHDUxs%2BdA3QqkkHFWT9PFU7qiua%2B%2BMFgtEq38Gftev%2BPuJ5VaFPf2NWZWF%2FYBXVtFS8ramBDll5MKWBi8oGOqUBxapN1ysWk10mmpFQOrc7kNJ0HE%2FIPKhj%2BHd7cgcMhpQuN7kXjyhuXtsVW7eV2v2UJ3PxOQ%2B%2BWDnTz%2FF7%2FZwNhhEgknjPI3YRIqa345y%2F27qwAUv%2BcPDy9oKwiDpZClbxw%2BIpgpDgQA%2F0br4GfKmMe5CgrAix%2F2%2B3nmhYG6w1MRav2d%2FsAfG1XoYFOiWgqMbSOlPjD9W6VoycQGZ7lcCDGt%2B3JOrS&X-Amz-Signature=a2fb1696bab7e78dcb73286adf727495f61e7b8e244872de609e3a9e7f71beb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
