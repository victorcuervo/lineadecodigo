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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVFZ54T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERiZNpsdB6Gc0f%2F4HRmnmywKS5YW2eATIAy1aFsfhuJAiEApoUEcnhyhnJ05WL%2Ft6FNhqfTiO3JieaIPiQ9YQ27S60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC79gwX08r%2BhAX3fgyrcA4JJTf1V%2BrH74leWf64oL4bFhFGV2r2z0F2OlgnhZJNH6o8iHynapB3Ui8Mtf6%2BK%2B1XKgD7ZfWXivsUNo7vWkQGjzQ0mk9w0EJg9qHBJf7IxTV%2F9PO3hJr89ij%2BV84gjFLazur3yJPLoin6DmnU3c6qzYDw%2B8eeWC9fjuucKzwp2OSEjUnXeyGRgrg7RCPxwR13C40UuZOFidNe41OEGZ1dnd9WU%2Bo4qokI6r06SBajvMOK2Oo4GZSWwXHqzd3HSmfBLPBxRayre5dHQTos5n2sbSfhjWhsXUoI8DpZDvLQane2M5MkJIC1PgoHPeTW5dermX%2BipooZd3strG2f3wzu5AJkuZmCdwYjZXBLx9nR773JU2jXm7bAy7N%2FC76bput14GwHOxiETog3lgAniDMnDT6wvf8NG0C2rMLHEnDpLiQ1pEa9fCsC7yt%2BHs583VnGNoDi4KgVqfC%2F79yif%2Bbo3SOv6C1knqjty8uzp%2ByrWnafSoZCtmFWYA1Jcn%2FlHYS3QKb%2FN6bTpeQoHySZhNWsl1pI%2B5O975qdJxalhubkb6rum3n8eelRFSL%2BwMQ53YUU9FVebLzhtqZAfpql8o%2F3fp%2FG%2BXfduY%2Bql6BHZpEXc1kWXgJiDnRF%2FQKL5MOKm0MkGOqUB6gIP%2Bno12WGP%2BwvDrDyOevRSy%2BXdingriqG5KD8EojUCv0PB%2BO597BQdJyGDFkg7nO0CIc7L4bbNQBHuz6vfWbujBxdHkzj5nrzOUbPPu%2F5p0F2f6yk%2FMpfxlwuQpxAC1izGot6Hg%2BAO6HArkj%2FfUF%2Bpa6ud1zmmPb8%2BS%2FRowyFO1lEPyYAZxCMYa8B2u1SRBICZuLSORX1dxqZxJ0x9ermWfGt4&X-Amz-Signature=22bd9b0015450229f45097003af8d0dd1b2adee4505901d34d226f819c094d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVFZ54T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERiZNpsdB6Gc0f%2F4HRmnmywKS5YW2eATIAy1aFsfhuJAiEApoUEcnhyhnJ05WL%2Ft6FNhqfTiO3JieaIPiQ9YQ27S60q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC79gwX08r%2BhAX3fgyrcA4JJTf1V%2BrH74leWf64oL4bFhFGV2r2z0F2OlgnhZJNH6o8iHynapB3Ui8Mtf6%2BK%2B1XKgD7ZfWXivsUNo7vWkQGjzQ0mk9w0EJg9qHBJf7IxTV%2F9PO3hJr89ij%2BV84gjFLazur3yJPLoin6DmnU3c6qzYDw%2B8eeWC9fjuucKzwp2OSEjUnXeyGRgrg7RCPxwR13C40UuZOFidNe41OEGZ1dnd9WU%2Bo4qokI6r06SBajvMOK2Oo4GZSWwXHqzd3HSmfBLPBxRayre5dHQTos5n2sbSfhjWhsXUoI8DpZDvLQane2M5MkJIC1PgoHPeTW5dermX%2BipooZd3strG2f3wzu5AJkuZmCdwYjZXBLx9nR773JU2jXm7bAy7N%2FC76bput14GwHOxiETog3lgAniDMnDT6wvf8NG0C2rMLHEnDpLiQ1pEa9fCsC7yt%2BHs583VnGNoDi4KgVqfC%2F79yif%2Bbo3SOv6C1knqjty8uzp%2ByrWnafSoZCtmFWYA1Jcn%2FlHYS3QKb%2FN6bTpeQoHySZhNWsl1pI%2B5O975qdJxalhubkb6rum3n8eelRFSL%2BwMQ53YUU9FVebLzhtqZAfpql8o%2F3fp%2FG%2BXfduY%2Bql6BHZpEXc1kWXgJiDnRF%2FQKL5MOKm0MkGOqUB6gIP%2Bno12WGP%2BwvDrDyOevRSy%2BXdingriqG5KD8EojUCv0PB%2BO597BQdJyGDFkg7nO0CIc7L4bbNQBHuz6vfWbujBxdHkzj5nrzOUbPPu%2F5p0F2f6yk%2FMpfxlwuQpxAC1izGot6Hg%2BAO6HArkj%2FfUF%2Bpa6ud1zmmPb8%2BS%2FRowyFO1lEPyYAZxCMYa8B2u1SRBICZuLSORX1dxqZxJ0x9ermWfGt4&X-Amz-Signature=642ea8eed8125712592647dfaa729035f6cdfaf018f614bc41294e3a2e448403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
