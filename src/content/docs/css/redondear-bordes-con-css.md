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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTUBSL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOZLiqNGalIeDv7AyZjzgQoCrKrYEecD8mf4TzvHjOIQIhAMeHoW17o8VppGPvzciVYAQaSfRsWjXpjUovWshIxYkOKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHEFwOf0g8wm1r6UYq3AOY1szUDDh8d0tykexXWBLVvE8XW%2FgvNa9xiIuvOdo25CqbQ9LfE8nGBXrCgn2w7CQ21Ua1Hoc0t4gt5Px4nE42S5uY1%2FC%2BWy6meTrunJFL26aCmtsIaPNx8NRfzsspDo%2BFhvkHNUzAsrGdJ84bwCwCfmIOp6zKK7W19Vv%2Ba%2BYFfhpzXIQbsh%2BIwDOkhN0g5%2BgHZ%2B4hMCpO33N90K3tp6CYgBQ9rvrK6xOHvqjOL8FDaqKGele62ram8YQBUSqsZUzfQkeVbwCdDPov%2FZMUJH93zAekv4lF48RDH5enp5%2BiA3G%2BdFpYhqGWutD1JK2SVhOpIcmLls%2F1gDFSEDMrjokDYstxsmtEmsURCN%2FL%2FN1JC8lJRL5nFJUjY%2FP4vhgK2YiOnRduc2RBis%2BrzkN4VO9S37DDj92rtlCI9tMFe36gtCQ3vTltsaI3MWWrIwvtMkk9o38nYQ5UU%2F8ZUT03WT5fk6QJ0C6Bq749%2F6tCGpQ%2BlsYZOE%2Fu32A3Je8ow8C8VcAkT6aRBp8R9HjuawFBmtSqDtyOvNz4YViSrwWTgTjGfbpbTiXnfyZYlPfXZSDezGZ%2FFSHjfwIFRpoxkMTn4rPyiKbToJz0bS%2FdnwDwZwPljTJbG3LrZAe9hVnTkDDllNnJBjqkAZAS1pvONsmMSPU7zKDAPHol0vE0ieKBlxyoIDqMOFsZgAgX8WGYbcZ0W%2BIjYLmCYbt94dOkkqc4hr4QTgOihWshTT8Xq%2BKkNyPGFtfO2bVF%2FaYaWCZz7aQbrC7NEK%2F3ln3tpyFRNCQx2qRsWf%2BbkxbdKqPrc1wkKovIioLyJkBg1aN0kVbynbIhGDAfIi7t6lbcsSs12K%2FIw5lXOnLlCMfI2xW%2F&X-Amz-Signature=d6ff16d26e093c793379dd786097f64c24d8db89c70dbf50649f8e882b75c0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTUBSL6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOZLiqNGalIeDv7AyZjzgQoCrKrYEecD8mf4TzvHjOIQIhAMeHoW17o8VppGPvzciVYAQaSfRsWjXpjUovWshIxYkOKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHEFwOf0g8wm1r6UYq3AOY1szUDDh8d0tykexXWBLVvE8XW%2FgvNa9xiIuvOdo25CqbQ9LfE8nGBXrCgn2w7CQ21Ua1Hoc0t4gt5Px4nE42S5uY1%2FC%2BWy6meTrunJFL26aCmtsIaPNx8NRfzsspDo%2BFhvkHNUzAsrGdJ84bwCwCfmIOp6zKK7W19Vv%2Ba%2BYFfhpzXIQbsh%2BIwDOkhN0g5%2BgHZ%2B4hMCpO33N90K3tp6CYgBQ9rvrK6xOHvqjOL8FDaqKGele62ram8YQBUSqsZUzfQkeVbwCdDPov%2FZMUJH93zAekv4lF48RDH5enp5%2BiA3G%2BdFpYhqGWutD1JK2SVhOpIcmLls%2F1gDFSEDMrjokDYstxsmtEmsURCN%2FL%2FN1JC8lJRL5nFJUjY%2FP4vhgK2YiOnRduc2RBis%2BrzkN4VO9S37DDj92rtlCI9tMFe36gtCQ3vTltsaI3MWWrIwvtMkk9o38nYQ5UU%2F8ZUT03WT5fk6QJ0C6Bq749%2F6tCGpQ%2BlsYZOE%2Fu32A3Je8ow8C8VcAkT6aRBp8R9HjuawFBmtSqDtyOvNz4YViSrwWTgTjGfbpbTiXnfyZYlPfXZSDezGZ%2FFSHjfwIFRpoxkMTn4rPyiKbToJz0bS%2FdnwDwZwPljTJbG3LrZAe9hVnTkDDllNnJBjqkAZAS1pvONsmMSPU7zKDAPHol0vE0ieKBlxyoIDqMOFsZgAgX8WGYbcZ0W%2BIjYLmCYbt94dOkkqc4hr4QTgOihWshTT8Xq%2BKkNyPGFtfO2bVF%2FaYaWCZz7aQbrC7NEK%2F3ln3tpyFRNCQx2qRsWf%2BbkxbdKqPrc1wkKovIioLyJkBg1aN0kVbynbIhGDAfIi7t6lbcsSs12K%2FIw5lXOnLlCMfI2xW%2F&X-Amz-Signature=5d6825cc4abd33562c61b5627c8280a109fe91bf8bbfe123c98c6988afec9208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
