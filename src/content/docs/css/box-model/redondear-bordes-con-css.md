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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVOZBHV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Jl8m2YQh7LIhzkYoT2aq1tmFpRD11o8%2F5SnpZpDayAIgVvQQO94pOPyi%2FgIYRilTrwBBtMu82ntYaQguwkM0hPAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMbgW4UZupKQgV1pDircA0n6pFcVRPsff93y5iS8WUh2eBJtrSUFjG52Bz386L7Inz0Uv2k79LDVdBWwgIKggoz396JVAwAfWee2fEbobrINe1bMMM85CP6XTdi3%2FL4Xgj2%2FMCDOsNGKxNGZ1KiakoD8RJ3qMb5j6syL9cZFgHOB5JKENn6VOmnxBaxSUfEQNUXUvFSu8E5ADs5ZGu7IgdZEA870T%2BB%2F4kZIkBhqnVdzsh%2B3v5gwGljB3SyhJ9HCPaNN8jJA6do3YtFwWVzZDhT5rrgFX3QcgE%2FiAU8LsX0CGINlw2UlRuH0jgHUD0umzSjAAfFF5wp3ykfo9TUd8t8cOY8U%2Fc9Affi0uzWSKxL2vAAIpG8rnNOTVyFmwSzmhZNNmkdBxzB3Sb1E%2BkL5eUc0Z4UUcnD4Q%2BgmAnIHDLHLT4AiskSbxigXm8dot4PxbdmOQW%2FDluBHUU20PVNFUnIQDujnu6yoMXE%2F3Or69hviFFGCiJ7YiO29HvvtQOYsShR9C%2FH6Vc%2BKIowgrB905PIBthmByq%2FlzMh8bSORtXNWhjeFgonwJaNAa0XWv8NPx%2FApI6r0Uhmo4D6udayBrGO%2FCRScxISoklWMFzgsyvJm297P2flw5tK04vaX3t2bYaIVuTbBo2qhZFHZMLaDicoGOqUByGHW5v0ONAJr71bhjq%2FL3RUVo7hGk4zES9gKwIK3oV9IfUsMsTAyrPi2h2pGjLb5WOiy04ZjkJcVg5g3iVbLAFmk0BtUJ31jK%2Bfcdr%2FPpAmZLKIDrNhS6rARj6UPz71HnqSedHDr%2FyJKOtgJvq46IH%2FSmZpiP2s3cBW0U8QWGxJFB%2F%2B6GVKbTSdolMeLzW2UR2hCXgKTVRkx1%2FqrugRwT2jft%2Fu%2B&X-Amz-Signature=aa680430234590a8188d442dca29f7e2bb2aed22e425bc1456a1634f4a95f94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVOZBHV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Jl8m2YQh7LIhzkYoT2aq1tmFpRD11o8%2F5SnpZpDayAIgVvQQO94pOPyi%2FgIYRilTrwBBtMu82ntYaQguwkM0hPAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMbgW4UZupKQgV1pDircA0n6pFcVRPsff93y5iS8WUh2eBJtrSUFjG52Bz386L7Inz0Uv2k79LDVdBWwgIKggoz396JVAwAfWee2fEbobrINe1bMMM85CP6XTdi3%2FL4Xgj2%2FMCDOsNGKxNGZ1KiakoD8RJ3qMb5j6syL9cZFgHOB5JKENn6VOmnxBaxSUfEQNUXUvFSu8E5ADs5ZGu7IgdZEA870T%2BB%2F4kZIkBhqnVdzsh%2B3v5gwGljB3SyhJ9HCPaNN8jJA6do3YtFwWVzZDhT5rrgFX3QcgE%2FiAU8LsX0CGINlw2UlRuH0jgHUD0umzSjAAfFF5wp3ykfo9TUd8t8cOY8U%2Fc9Affi0uzWSKxL2vAAIpG8rnNOTVyFmwSzmhZNNmkdBxzB3Sb1E%2BkL5eUc0Z4UUcnD4Q%2BgmAnIHDLHLT4AiskSbxigXm8dot4PxbdmOQW%2FDluBHUU20PVNFUnIQDujnu6yoMXE%2F3Or69hviFFGCiJ7YiO29HvvtQOYsShR9C%2FH6Vc%2BKIowgrB905PIBthmByq%2FlzMh8bSORtXNWhjeFgonwJaNAa0XWv8NPx%2FApI6r0Uhmo4D6udayBrGO%2FCRScxISoklWMFzgsyvJm297P2flw5tK04vaX3t2bYaIVuTbBo2qhZFHZMLaDicoGOqUByGHW5v0ONAJr71bhjq%2FL3RUVo7hGk4zES9gKwIK3oV9IfUsMsTAyrPi2h2pGjLb5WOiy04ZjkJcVg5g3iVbLAFmk0BtUJ31jK%2Bfcdr%2FPpAmZLKIDrNhS6rARj6UPz71HnqSedHDr%2FyJKOtgJvq46IH%2FSmZpiP2s3cBW0U8QWGxJFB%2F%2B6GVKbTSdolMeLzW2UR2hCXgKTVRkx1%2FqrugRwT2jft%2Fu%2B&X-Amz-Signature=5a103a7c44c0e66cecf476afdd0ffbf5ae9c896ee0419ce9c58a11c9b40bf02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
