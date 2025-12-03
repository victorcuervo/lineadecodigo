---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLTRSYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJFMEMCHxj%2F9HncQ8%2FpXD9iuxemfXZLWblpdD8XJzmy%2FRImxXYCIDhc0jHpG8n%2FoNxpGdpPEC7kFTfQj2jIP0UgXTSvHN7JKv8DCDkQABoMNjM3NDIzMTgzODA1IgzRQ1FzKZRoPovRlVwq3APx3KqhSMGRY6MFeQba66%2FzLyO5KGMERd8EOMH2HnJ73npkJ9WZ7QKWZN7MZD4eGYJu6T%2FSvNSRCUOV6edZ6ap3UyYZWCrxkrWjRrYQyIG0N1fBeOHPmK7I7YkNM%2F7OcCsz1p2eT3P5H396smIIYu%2FvZP%2BbqDewOs%2FQkAXUpjqTD7Im4%2BKY4YFSGYnwKD30HYrcLfeqA3ozn%2BoWwpqZkYMeMRm9xz6bpPw2hA%2By8gLZ%2BQ4MqVMyH89ds8E1M%2FPU4qHpfFHIV6xRrLxS96eJ7lfDfRGKhTAruyumU02eCLbPLJEjDzHPQbkQk5wV%2BkdSlgOL54DtU5Ja6S9mR5JnL2Ed%2FHHm1Gj32%2FKu6WxB49FyXOg%2FmyxH6PIeiN7jCp16MKWIcGFCCmfxNup9DO%2Bs%2B6DOL1ViGAZ2%2FcCMuTcWhhmN3Cam7VSDW9QqG3I%2FozCj%2FAK2y%2Btgsv8KtDD3Sxd6Pch9C6YN%2BqKsNfCumit7tV4UAfjCy45FTtTv%2F9xn7cOR33N5tMIu8feFJlDg1Uqd7%2BSx3SuVTUjpNmVCSdoLInN9uz1vcyL4JgJgE1stE134r7hDLFN14Jj6oWtzv0hO7unq%2B9thPZXaEVFfjg7ht%2F5pWXuHj4s%2BXAYHLRHHjzDTlcPJBjqnAa6uEKMMVkRmQWJ%2FBilKfNdbWbj7hKyPpxWcq%2FDQvgSE8c3%2FKBy9jsW4vMYRcJhd%2FMesKqt%2FcxLilxAUyz68V07vaRE2Sxc%2B62kBAk1DjZrGReU%2Ftb%2BJXXZL5um22PqU9tfT3qJG9LpxwZObIa%2BMoaVUtEhl%2F%2FUGqE28MXSggCe2BtJ%2BQupS%2BXT1qfCU0oWJfm8T7YtAmKf%2BNhZnw1scGkuiPK%2FnV2mT&X-Amz-Signature=91df5b23cd31cdc2670ae6d466d16de6e045a2ff912fd69d71fb2ed65779d3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLTRSYH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJFMEMCHxj%2F9HncQ8%2FpXD9iuxemfXZLWblpdD8XJzmy%2FRImxXYCIDhc0jHpG8n%2FoNxpGdpPEC7kFTfQj2jIP0UgXTSvHN7JKv8DCDkQABoMNjM3NDIzMTgzODA1IgzRQ1FzKZRoPovRlVwq3APx3KqhSMGRY6MFeQba66%2FzLyO5KGMERd8EOMH2HnJ73npkJ9WZ7QKWZN7MZD4eGYJu6T%2FSvNSRCUOV6edZ6ap3UyYZWCrxkrWjRrYQyIG0N1fBeOHPmK7I7YkNM%2F7OcCsz1p2eT3P5H396smIIYu%2FvZP%2BbqDewOs%2FQkAXUpjqTD7Im4%2BKY4YFSGYnwKD30HYrcLfeqA3ozn%2BoWwpqZkYMeMRm9xz6bpPw2hA%2By8gLZ%2BQ4MqVMyH89ds8E1M%2FPU4qHpfFHIV6xRrLxS96eJ7lfDfRGKhTAruyumU02eCLbPLJEjDzHPQbkQk5wV%2BkdSlgOL54DtU5Ja6S9mR5JnL2Ed%2FHHm1Gj32%2FKu6WxB49FyXOg%2FmyxH6PIeiN7jCp16MKWIcGFCCmfxNup9DO%2Bs%2B6DOL1ViGAZ2%2FcCMuTcWhhmN3Cam7VSDW9QqG3I%2FozCj%2FAK2y%2Btgsv8KtDD3Sxd6Pch9C6YN%2BqKsNfCumit7tV4UAfjCy45FTtTv%2F9xn7cOR33N5tMIu8feFJlDg1Uqd7%2BSx3SuVTUjpNmVCSdoLInN9uz1vcyL4JgJgE1stE134r7hDLFN14Jj6oWtzv0hO7unq%2B9thPZXaEVFfjg7ht%2F5pWXuHj4s%2BXAYHLRHHjzDTlcPJBjqnAa6uEKMMVkRmQWJ%2FBilKfNdbWbj7hKyPpxWcq%2FDQvgSE8c3%2FKBy9jsW4vMYRcJhd%2FMesKqt%2FcxLilxAUyz68V07vaRE2Sxc%2B62kBAk1DjZrGReU%2Ftb%2BJXXZL5um22PqU9tfT3qJG9LpxwZObIa%2BMoaVUtEhl%2F%2FUGqE28MXSggCe2BtJ%2BQupS%2BXT1qfCU0oWJfm8T7YtAmKf%2BNhZnw1scGkuiPK%2FnV2mT&X-Amz-Signature=4571222e1f57d547067e5421326d13f03a0de77f744bdb3019f6ffeea4d8fc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
