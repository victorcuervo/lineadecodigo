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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONK4QU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6MrvHQ%2F90ZjcJTMCN9i7uQNaEFcXkZHb9oEUVYBE9CgIgf60pA2jBKnmcOHa%2BBYU00tylGNSzzkti2zq%2Bfg7e58QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSOlZmTUnp51aLY1yrcAyOFrvYi2E0OCCjLjuzbY6Sy8zAm4fURgXDZyQw6RNqhceFDHr9YVqBAsv8d7QP%2BWMjhorKXYvYakozo7DMKhPafqE7jfg2FGB7LaS91aW0P4n88kSZjIz%2FrQB%2FPr2xBB5jeQC86c95k2hjujOBsVamoHQmQ58AktbUVTGPgN0IcJbhfPq18LgjXmCbKa9DbaS25lapT7EEsnbd2kVEtqgF7GKVp9gUCeIIn5FEpJV36zgpFGgXbgBsMzNKuzKbbTFTS1r8QkW08ha2yIhN2AIXjlqRkRRv%2FHN%2FYlaTdXIW%2FWgeOJvjzwtsyIh4uhLdyo8F1RwCzHbTjSebVgZzRJuUQD%2FVaiYRlfdcR74Ewz%2FBQJqQaFD2DrGNjv2eIZRhkO3Cb0Xp7FETiGGqMWVTU9G3mETO8t7DM8KiHzGEMxR8VgrBVWgpyLZJGTPf2im4bE4XT09bVNzY%2FVv5kDqzZSmipQ8vwLRf%2Fjrpm808xwgE5SNNBmsZlCmJ1Si2q2q1tmDFfyO%2BuLIMyRPb6BMht8cxOh21vgDkZaPn0D8BEz3kZNzerCuh73D5B8nrr6hDz8buXG%2FAPKDN7NuYMfnYq%2BNJQLWX7LK%2FMNjNfhGqkrh7s7HDXmeDPLzBEZcuKMK3I18kGOqUBr9IROdv6DNDhhO0cJIFI%2BH00m8eW5VtAHS7OiV0MT1AW%2FDWLE%2FKCJ%2FJMkUWzFKfCRL5Ky5crtviBd37Wci78N3UhsJM6dG0swXLS3ytYsSH7Lucbjbui%2FKD7tTGjBVSVmyurxFFUrq4F0TGOV8oMHLd6nSoVIYuqlV0HBkxaqPTy5Zsr3fThzUN57DTIs8Wd72UrHXTt99BYaeqVBImHbLV40mXe&X-Amz-Signature=fbebc723b6093caf488ff73c23a4114763b8678ea9e39515aa870363c799f9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONK4QU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6MrvHQ%2F90ZjcJTMCN9i7uQNaEFcXkZHb9oEUVYBE9CgIgf60pA2jBKnmcOHa%2BBYU00tylGNSzzkti2zq%2Bfg7e58QqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSOlZmTUnp51aLY1yrcAyOFrvYi2E0OCCjLjuzbY6Sy8zAm4fURgXDZyQw6RNqhceFDHr9YVqBAsv8d7QP%2BWMjhorKXYvYakozo7DMKhPafqE7jfg2FGB7LaS91aW0P4n88kSZjIz%2FrQB%2FPr2xBB5jeQC86c95k2hjujOBsVamoHQmQ58AktbUVTGPgN0IcJbhfPq18LgjXmCbKa9DbaS25lapT7EEsnbd2kVEtqgF7GKVp9gUCeIIn5FEpJV36zgpFGgXbgBsMzNKuzKbbTFTS1r8QkW08ha2yIhN2AIXjlqRkRRv%2FHN%2FYlaTdXIW%2FWgeOJvjzwtsyIh4uhLdyo8F1RwCzHbTjSebVgZzRJuUQD%2FVaiYRlfdcR74Ewz%2FBQJqQaFD2DrGNjv2eIZRhkO3Cb0Xp7FETiGGqMWVTU9G3mETO8t7DM8KiHzGEMxR8VgrBVWgpyLZJGTPf2im4bE4XT09bVNzY%2FVv5kDqzZSmipQ8vwLRf%2Fjrpm808xwgE5SNNBmsZlCmJ1Si2q2q1tmDFfyO%2BuLIMyRPb6BMht8cxOh21vgDkZaPn0D8BEz3kZNzerCuh73D5B8nrr6hDz8buXG%2FAPKDN7NuYMfnYq%2BNJQLWX7LK%2FMNjNfhGqkrh7s7HDXmeDPLzBEZcuKMK3I18kGOqUBr9IROdv6DNDhhO0cJIFI%2BH00m8eW5VtAHS7OiV0MT1AW%2FDWLE%2FKCJ%2FJMkUWzFKfCRL5Ky5crtviBd37Wci78N3UhsJM6dG0swXLS3ytYsSH7Lucbjbui%2FKD7tTGjBVSVmyurxFFUrq4F0TGOV8oMHLd6nSoVIYuqlV0HBkxaqPTy5Zsr3fThzUN57DTIs8Wd72UrHXTt99BYaeqVBImHbLV40mXe&X-Amz-Signature=4f0a231b6d2d8a92359d4305b95b8f038fe047dbf87b5006ee56acdd1f4ec0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
