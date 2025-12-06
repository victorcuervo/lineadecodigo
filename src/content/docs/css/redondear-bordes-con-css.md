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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77W53IX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKJ56YbRgdyzrcQQS6rgfZWOC%2F%2FGgAApd5I9PsnhH7fAiEA2sjpWZ19iXhFJa6SaaKqYetEhqTfkAHZJsMos891OfUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE2gRPb0GlcMOl5ceircAwTnjebp9Udz3tWFfDQFHORqTDbv07EKlSJjQpH4gqgf5M50E%2BEdwuukUpsmwXpdI8NiNIbsksjs0tKhExRRmp%2F0KKrkBPkYoxiU1pzhgc5zyl%2FetE%2FMU2U6x0zUHqy7zYk8hRQG%2BD522J47%2FZSPRWbuRotrf0I4BhDabvvEW3h8swtcB0VXc3D5RXTvtblIq8BoZV7G4TW5HusuDKSZfsZcmT%2BmdvfCttFytOc3gYN581qYHavAUkHSH%2FxsXwRHeeYw%2Bfxk93aNvfw2GuqDFFGbN5pLJ7i4DWq26T2NuAve9VIKcyp6HiVxH8Z3hEwfioWM0MjjoNGJbAOREVXBIs5QdzXQj5zbvx4Tr7Bcd9EMshGs%2FDpX%2BmMmG0YTJPsEXPpB%2BdyOoiHqzDcqbCp2STvidtTqWTEhsNPKL6Cm3iyiwEjBdIgGRZ7rKk0zH%2B0QVtWt48GEtQXL%2BNBGBamHafEITU2UvJZ6c9mc7kxDt%2FwEhiQWutsphnjWCvwBhUT6oxKL1vNBWbNgqAiqbt1aT8%2BPRm%2BHaR8f6oedQSBfVFb7yqgWxvRcBavb8HkQyc7nvXZ%2Fux3SFQkku2UG6GIBjNXhA1fe68lnJSSV7qV8oMarGQLn2DKz7UBen6yqMJLezskGOqUBvb38PXDq%2BMto%2FrQ83Qn%2BGCogH%2BLKKO7gfmDE7gn0GqFM4Smv%2BApvZAP4b8swvRzaiE6mk2vjfePcnZPtVz%2FJINBukTVpar3KgRVOATXq4wBBkiuV3yHQkaEVx5eRe5rhqp8B7oPNd2YaGON6%2BrD2q39kTCCtvptFeekr2pNwRMeZxgxlZLH4Nc8lKcrQ3y71fqXildCI7tOcXrqPTLfCVJCKqT%2Fk&X-Amz-Signature=a66d68f842ba615c6c6209c0d5c24cfc55c62a6153037f4153c3146480f3b18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77W53IX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKJ56YbRgdyzrcQQS6rgfZWOC%2F%2FGgAApd5I9PsnhH7fAiEA2sjpWZ19iXhFJa6SaaKqYetEhqTfkAHZJsMos891OfUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE2gRPb0GlcMOl5ceircAwTnjebp9Udz3tWFfDQFHORqTDbv07EKlSJjQpH4gqgf5M50E%2BEdwuukUpsmwXpdI8NiNIbsksjs0tKhExRRmp%2F0KKrkBPkYoxiU1pzhgc5zyl%2FetE%2FMU2U6x0zUHqy7zYk8hRQG%2BD522J47%2FZSPRWbuRotrf0I4BhDabvvEW3h8swtcB0VXc3D5RXTvtblIq8BoZV7G4TW5HusuDKSZfsZcmT%2BmdvfCttFytOc3gYN581qYHavAUkHSH%2FxsXwRHeeYw%2Bfxk93aNvfw2GuqDFFGbN5pLJ7i4DWq26T2NuAve9VIKcyp6HiVxH8Z3hEwfioWM0MjjoNGJbAOREVXBIs5QdzXQj5zbvx4Tr7Bcd9EMshGs%2FDpX%2BmMmG0YTJPsEXPpB%2BdyOoiHqzDcqbCp2STvidtTqWTEhsNPKL6Cm3iyiwEjBdIgGRZ7rKk0zH%2B0QVtWt48GEtQXL%2BNBGBamHafEITU2UvJZ6c9mc7kxDt%2FwEhiQWutsphnjWCvwBhUT6oxKL1vNBWbNgqAiqbt1aT8%2BPRm%2BHaR8f6oedQSBfVFb7yqgWxvRcBavb8HkQyc7nvXZ%2Fux3SFQkku2UG6GIBjNXhA1fe68lnJSSV7qV8oMarGQLn2DKz7UBen6yqMJLezskGOqUBvb38PXDq%2BMto%2FrQ83Qn%2BGCogH%2BLKKO7gfmDE7gn0GqFM4Smv%2BApvZAP4b8swvRzaiE6mk2vjfePcnZPtVz%2FJINBukTVpar3KgRVOATXq4wBBkiuV3yHQkaEVx5eRe5rhqp8B7oPNd2YaGON6%2BrD2q39kTCCtvptFeekr2pNwRMeZxgxlZLH4Nc8lKcrQ3y71fqXildCI7tOcXrqPTLfCVJCKqT%2Fk&X-Amz-Signature=6433edd6c3d03c73ec0a4b99c6bef5e06e4fd7d4b7bfc75d35a1729942deab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
