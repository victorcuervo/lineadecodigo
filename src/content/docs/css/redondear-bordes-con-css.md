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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RMV2FV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC087C8dymD8%2BMI%2FsbDeUQequ0ct4PKNBFfhJwnZC7zygIgX6YEVFS%2B2UWKSsGp%2FlIZajlRwoLr90rEmsnW%2B2LkOc8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt2%2Fjjo%2F5D16yCuAyrcAx%2BBY%2BWJWAPMkNCRSCobmyZgjQsCrPG89Jsw9Kgys9t%2F1wYXN0%2BssouVgleyghDmFxYBF6Y3MX7YbYmQpoJHwm74umP%2BNqRmqxtp3mje8qsWtZaw7ryLngeVLqwITK7jbTKwDUdyuIa2RbOorRxZA90V%2Bne7UFC5VUD%2FExxBN50m%2BfVXQkJsjjvYie512mgP3uEpLItwP8FY%2FSvtwC4SgJoFVsW9TtIqem1INuVoCwHQOtUzWk4NZLNuYqT%2B87lD054O7RGu1ZVBz1x4tvlq09T%2FjXAgeaXf3qR%2FnD2d5jRU8S5zSeTWOvngDgdM2CYCh0V%2BcZ3YzhtBQMpz2kQdTy7TwVkNqIsVfzQqM4iGldebxcr965Kgx9V9gA2RPmnnL96Uuo9OG%2FhT0ewcqZBCAguhemO%2B7eaCDW1IZZ%2FOpQp81WLTVVbisD4J%2FTZ8Sd5NBE0nCVPpRzbjUFNulbODxud%2FQ6clYttk3NRjNc7u5HkpjxRFOVChdj9VXm4mwh8f7UVW39hNR6eCQZH%2FclMB6FCPFkmdNF4qyRioxeed2fKIVR6Yu65Zi2Eny2ArXjpL9H93tLgcqgW4YR%2FpOpvt0VI8qYwlkUlj88VKm0rE34JfpZso5tzzTbXIP5M3MIii3ckGOqUBbIZHFRn3Pj5m6UcacuJzMLD0ga%2B77DkIgkfnqvRCamB8O%2FZjTYR7JoP7zimCYlzuuchsDIb%2BSKBvKpIsV9m2EDAdFmLup6SzdTVW%2BZu3aJSNZDFxAD%2F6kY%2BsyDgXxmb%2Fs05l2pChX55ltY5L5Nv93WVmJSwzb3lfJjkAAABbYb8l2Xo3x8wYvetJOwJQe81hqNoBUdaebdQN7XTu9zDRB79FKn7G&X-Amz-Signature=6fe43c045fb521415025204b92f82b96b0edc1adc7151758caef0ff93bc39baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2RMV2FV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC087C8dymD8%2BMI%2FsbDeUQequ0ct4PKNBFfhJwnZC7zygIgX6YEVFS%2B2UWKSsGp%2FlIZajlRwoLr90rEmsnW%2B2LkOc8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt2%2Fjjo%2F5D16yCuAyrcAx%2BBY%2BWJWAPMkNCRSCobmyZgjQsCrPG89Jsw9Kgys9t%2F1wYXN0%2BssouVgleyghDmFxYBF6Y3MX7YbYmQpoJHwm74umP%2BNqRmqxtp3mje8qsWtZaw7ryLngeVLqwITK7jbTKwDUdyuIa2RbOorRxZA90V%2Bne7UFC5VUD%2FExxBN50m%2BfVXQkJsjjvYie512mgP3uEpLItwP8FY%2FSvtwC4SgJoFVsW9TtIqem1INuVoCwHQOtUzWk4NZLNuYqT%2B87lD054O7RGu1ZVBz1x4tvlq09T%2FjXAgeaXf3qR%2FnD2d5jRU8S5zSeTWOvngDgdM2CYCh0V%2BcZ3YzhtBQMpz2kQdTy7TwVkNqIsVfzQqM4iGldebxcr965Kgx9V9gA2RPmnnL96Uuo9OG%2FhT0ewcqZBCAguhemO%2B7eaCDW1IZZ%2FOpQp81WLTVVbisD4J%2FTZ8Sd5NBE0nCVPpRzbjUFNulbODxud%2FQ6clYttk3NRjNc7u5HkpjxRFOVChdj9VXm4mwh8f7UVW39hNR6eCQZH%2FclMB6FCPFkmdNF4qyRioxeed2fKIVR6Yu65Zi2Eny2ArXjpL9H93tLgcqgW4YR%2FpOpvt0VI8qYwlkUlj88VKm0rE34JfpZso5tzzTbXIP5M3MIii3ckGOqUBbIZHFRn3Pj5m6UcacuJzMLD0ga%2B77DkIgkfnqvRCamB8O%2FZjTYR7JoP7zimCYlzuuchsDIb%2BSKBvKpIsV9m2EDAdFmLup6SzdTVW%2BZu3aJSNZDFxAD%2F6kY%2BsyDgXxmb%2Fs05l2pChX55ltY5L5Nv93WVmJSwzb3lfJjkAAABbYb8l2Xo3x8wYvetJOwJQe81hqNoBUdaebdQN7XTu9zDRB79FKn7G&X-Amz-Signature=acc6049098aeae7d1cee2c529eb726148a83bf4626949fc8eecfdf923492f3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
