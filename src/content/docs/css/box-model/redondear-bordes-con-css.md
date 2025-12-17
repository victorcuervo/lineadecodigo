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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Q64IB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGKzKeLcPLP72Ejh8RDbXaV%2F3NGS4ce%2FlKZI2CL6AfcQIhANGjevZvqe10sTzJK%2BUXSjRJueBy3GiAjcp%2FGRyWpDqfKv8DCHcQABoMNjM3NDIzMTgzODA1Igw3NBYYVs6VQYtww2wq3ANL3uBBjxBkLfhIc3DGOnsmGQ3WgjdeZZeSJzt%2B9Vzgbb6clUcSzWfhmoyOBx5NP%2BSZ4pahQd8vBWxanpANlOpfl3%2F2kKG%2BW2YAbX5aTdRNALTFLanvRg0apog%2F9sY4jEKM9Mlai46elmuG57d80OMLdwpMC8okyL4xR46jm0yEWqklcLlNj5VYSYeWFwehwsL14yX4TzHQPniNbUlqIBpRAkt%2FSZVTB%2F6YX3EyUZHGRmK%2F5VujjHAwSrRsdq23cyxzOZY1UHHC1DxOwOSv0w5AWmFCI7TbjfHEdWq1YYVyoDMpDPOaP6WMdsy9Ft%2FNu8OgM45MAmhCh3lRqZRlIGeCoYMmk4tKX13L91unf91nNdSb5mxKEYngVw1LvZOANyvm%2BcYniPcNenNn01bE684uTR9t%2Br50bk4FqUPk8UwGJ%2F8C9gZ6qLQ5za7VhgKhTshoLi6JEJUNoZNFRVIvGk79Tscxcoe3HyqZPwyCoVfM6lnlMETS2Tm0YQCtYzY8%2FxeU4Jo77tivNzc9HdNpudROldCysT5wfK%2FpHKhO0QAtQWE4FWhZe2l50A6VYY3lfApQq0Plt7oTJujn2beIBHAudqn0LiQ6m7EqSAjkiSullIXfblVMLtORZfJU0zCZgonKBjqkAcMEVGMS1GWxVESCfzvOJbx2v9frNkb7lMzT9dyF4CmFBAGWMa5XIXXKlLezs8nKXrCx3KpwcgNe%2BmK%2BJDFONdv2DBoYsLBuzK7UhOgTCtV4IsSfqthIP1PgXnz9QIDWKnVD3%2BqbAfiXUJ2Iyw%2BZ7Acv8R1leNXCShIc7czvOtSwwB8KYMRawUba7q7Bdn3eeNpHli%2FY1rk0aEcg%2BWIbP%2B%2FL1dMO&X-Amz-Signature=ac9de807333060a2e4b6ea1f01c4ab7aaf299a4c57064abbc097cd7ab9d45b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Q64IB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGKzKeLcPLP72Ejh8RDbXaV%2F3NGS4ce%2FlKZI2CL6AfcQIhANGjevZvqe10sTzJK%2BUXSjRJueBy3GiAjcp%2FGRyWpDqfKv8DCHcQABoMNjM3NDIzMTgzODA1Igw3NBYYVs6VQYtww2wq3ANL3uBBjxBkLfhIc3DGOnsmGQ3WgjdeZZeSJzt%2B9Vzgbb6clUcSzWfhmoyOBx5NP%2BSZ4pahQd8vBWxanpANlOpfl3%2F2kKG%2BW2YAbX5aTdRNALTFLanvRg0apog%2F9sY4jEKM9Mlai46elmuG57d80OMLdwpMC8okyL4xR46jm0yEWqklcLlNj5VYSYeWFwehwsL14yX4TzHQPniNbUlqIBpRAkt%2FSZVTB%2F6YX3EyUZHGRmK%2F5VujjHAwSrRsdq23cyxzOZY1UHHC1DxOwOSv0w5AWmFCI7TbjfHEdWq1YYVyoDMpDPOaP6WMdsy9Ft%2FNu8OgM45MAmhCh3lRqZRlIGeCoYMmk4tKX13L91unf91nNdSb5mxKEYngVw1LvZOANyvm%2BcYniPcNenNn01bE684uTR9t%2Br50bk4FqUPk8UwGJ%2F8C9gZ6qLQ5za7VhgKhTshoLi6JEJUNoZNFRVIvGk79Tscxcoe3HyqZPwyCoVfM6lnlMETS2Tm0YQCtYzY8%2FxeU4Jo77tivNzc9HdNpudROldCysT5wfK%2FpHKhO0QAtQWE4FWhZe2l50A6VYY3lfApQq0Plt7oTJujn2beIBHAudqn0LiQ6m7EqSAjkiSullIXfblVMLtORZfJU0zCZgonKBjqkAcMEVGMS1GWxVESCfzvOJbx2v9frNkb7lMzT9dyF4CmFBAGWMa5XIXXKlLezs8nKXrCx3KpwcgNe%2BmK%2BJDFONdv2DBoYsLBuzK7UhOgTCtV4IsSfqthIP1PgXnz9QIDWKnVD3%2BqbAfiXUJ2Iyw%2BZ7Acv8R1leNXCShIc7czvOtSwwB8KYMRawUba7q7Bdn3eeNpHli%2FY1rk0aEcg%2BWIbP%2B%2FL1dMO&X-Amz-Signature=812705f5a2468ef774c6f83cc0f178b35e98aa9843b481719e5edbc2a7e1a00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
