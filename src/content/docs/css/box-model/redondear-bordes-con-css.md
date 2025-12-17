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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV3AILNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClkC%2BNidpaQVAb9YweChQcrnENGxiXYoRF7RMqJK%2FRHAiEAr4r4y7EYUn107JC3eKvri6b2WrVes4NgNyIXWbCF7d4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKd7DajTGuEENHTbrircAx5N2M%2BHtNoYFVPB%2FkUIWJvXTmIqG8OwlRiQQBMOBfjmyAHlt9m5QzbA7%2FMhdyB3dYxrXvX7aX%2BDuiZi9j3kjUKGv73v%2FSzrxaEBdmM%2BIx6alBjQCs3zzncqm9EFsHi9aQGm6LQhRaeYC6xSbY%2B%2F7JovLNDOUsgJFgPtVs5GR13yD5PTm9SPwEus%2FzCJnirS%2Fbk5MnryGELeVUCmzcXPn9G7R7liufqrTAkX%2BVPESt5ggDRVR%2FY9hCApiAc%2Fj8vhPt5UphejcT9tSxr18R1m5WbHRF0fEVsV44rRBy7wyCBBO14LSrOvWQcACbi5ZYg11OkNYU0BZdhK0Wg0m0t%2FT2D%2FyWa%2FHy0hAnmjCODJkGyQ8YaOcEjt3yuW%2BAAPeF7iiofm5GFcF2z1LdZ3zuSSkUBxs4155AoTqvdrqRn9oG93bb5WG0aNFyfyYJF36Ka1MGjt%2FzCFqeZhqkOd1jrNCIEX52uxjS3xgiFFbMoNtl9U8L%2Fpmq7dHx3%2FqNGVHpWzrdOIRWUC0ocSxy3nJMsQ2p02qVxKhGKp9%2F1IoPt0zrcw4VqARwoCsa6SkiyACobqo9%2FbuWH73Ys%2F3Jk%2FjBIH6U88FS7Vx%2BlEzQ92xkbOPmka5wQNu7DK8iTVjeAEMKycicoGOqUByu0XvJ%2FlkUmyfzNlfHIbvbtdknax8LBfXGWMENBACDyaoRCAvdncWXp6rzPIG6CyZWTlDgRsjs3TS9Zq2mf21ipy74gfGuchJWN%2BBUmFx62XtnKMV1wOlrKulu5q9cDgtMCwxNBorGiQg5d83yetxCsu3gen7zvwKUZCHlRWeYAOjvb%2BX6EklUQ4HfSrJlOL4wtYHcdzvaSNt1jBySYwPCMXQ3VG&X-Amz-Signature=fa39807dce43ba97c04bb1c9d2605ae5407087e5235d28899aae77ec819e92b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV3AILNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClkC%2BNidpaQVAb9YweChQcrnENGxiXYoRF7RMqJK%2FRHAiEAr4r4y7EYUn107JC3eKvri6b2WrVes4NgNyIXWbCF7d4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKd7DajTGuEENHTbrircAx5N2M%2BHtNoYFVPB%2FkUIWJvXTmIqG8OwlRiQQBMOBfjmyAHlt9m5QzbA7%2FMhdyB3dYxrXvX7aX%2BDuiZi9j3kjUKGv73v%2FSzrxaEBdmM%2BIx6alBjQCs3zzncqm9EFsHi9aQGm6LQhRaeYC6xSbY%2B%2F7JovLNDOUsgJFgPtVs5GR13yD5PTm9SPwEus%2FzCJnirS%2Fbk5MnryGELeVUCmzcXPn9G7R7liufqrTAkX%2BVPESt5ggDRVR%2FY9hCApiAc%2Fj8vhPt5UphejcT9tSxr18R1m5WbHRF0fEVsV44rRBy7wyCBBO14LSrOvWQcACbi5ZYg11OkNYU0BZdhK0Wg0m0t%2FT2D%2FyWa%2FHy0hAnmjCODJkGyQ8YaOcEjt3yuW%2BAAPeF7iiofm5GFcF2z1LdZ3zuSSkUBxs4155AoTqvdrqRn9oG93bb5WG0aNFyfyYJF36Ka1MGjt%2FzCFqeZhqkOd1jrNCIEX52uxjS3xgiFFbMoNtl9U8L%2Fpmq7dHx3%2FqNGVHpWzrdOIRWUC0ocSxy3nJMsQ2p02qVxKhGKp9%2F1IoPt0zrcw4VqARwoCsa6SkiyACobqo9%2FbuWH73Ys%2F3Jk%2FjBIH6U88FS7Vx%2BlEzQ92xkbOPmka5wQNu7DK8iTVjeAEMKycicoGOqUByu0XvJ%2FlkUmyfzNlfHIbvbtdknax8LBfXGWMENBACDyaoRCAvdncWXp6rzPIG6CyZWTlDgRsjs3TS9Zq2mf21ipy74gfGuchJWN%2BBUmFx62XtnKMV1wOlrKulu5q9cDgtMCwxNBorGiQg5d83yetxCsu3gen7zvwKUZCHlRWeYAOjvb%2BX6EklUQ4HfSrJlOL4wtYHcdzvaSNt1jBySYwPCMXQ3VG&X-Amz-Signature=865ef1a46284eb732e1b18bdcfb1d1b895a100fae0e15ffa9592bb36704680e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
