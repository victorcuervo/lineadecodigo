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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLLH5V5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8qN5bxIl83BRjs0TEwORoqt0oCLfUOgADyM%2BdS6AEngIhAP2vQc0JVsKSx0kEBrXkIJ28kAYrUWnfGq1czh9EIFi5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxobeIg2XoczNqYO54q3APeNQNd0fZgKK83in3FmKBBBZfjJCUrLVwBfTlqopLdp9%2FKYxLoRzYdbntH2WpprWk245HVQJHIJVHtWdDennb0W4QfJ3n2Hu0hnk364JNTtd%2B87bpwMBeH3jczAUql536rECM92YtRLtzAebQRKFicMWptN4u2%2BDyrqtIw4ZV3NXgGjL%2FuE0rE2By%2FxEnVDnhGrSCyPFSDoglUoZmX%2FF9xZy5M%2BrdT4YtgyDqtA0rv92cW3SDVfkEG56978i5LFrpJuVe9LQzp%2F%2B7OGJzzFsUJmMzlaAQfcYTjOCi36N6ZRhVZN4DJRJyD0AwLM1FXoOer%2BfJthFoBgI3tY%2FEsHtGOwxN28NVyExejmJ8L7pF7QHaATYxRFEUx%2BtlsSKP0pj6N%2BGQRYT2j0lcwAZ7S7Fx7Z9bmUJ289dlO2TzmXhFX35gLdLBCyJTOzSINIjH7HP2Ttedh1Wi6xjSQG3J0IEhv8e%2FsR05Z8XqnR4gpviLPg5Gtho4QTeDXuuC%2F7Kc7vbfvaAQYQAJNN7jqhkjJP9JcnL8VVzqgQ396UO2lSvwcs1TdpD%2FCfL5nvXEt0hQ3lx467hwaI2yTnVvSkg3NYVpSz3IS0AOaLvN%2FwoALrCQRkxNqgtX%2FP48CyNOk3jDR6YjKBjqkASyC4OuHzB5as3Bo2lj9diTAl6Gz7bEqUM4uTWM2ULAKpy7diXlVZlToGHyLrCxpW0fJ4SHcAbdaji2o4w9FmQckgPgA41tVWefCPJHnWcNo%2BCBbmspIYASHIT2LzEBK%2BZDslAeim8VYEThxmkCfD2Ve3XoP4FKLgWpbmkuwOJek4GJfYhzHHnBZ%2BbFeKZIdLZRgOYIBBeG4eda%2FrbIvkboO6xzX&X-Amz-Signature=a0b98b917f1e8c181389e9cb2f77b66097f5d6617492388efd7a2ec24d671962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLLH5V5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8qN5bxIl83BRjs0TEwORoqt0oCLfUOgADyM%2BdS6AEngIhAP2vQc0JVsKSx0kEBrXkIJ28kAYrUWnfGq1czh9EIFi5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxobeIg2XoczNqYO54q3APeNQNd0fZgKK83in3FmKBBBZfjJCUrLVwBfTlqopLdp9%2FKYxLoRzYdbntH2WpprWk245HVQJHIJVHtWdDennb0W4QfJ3n2Hu0hnk364JNTtd%2B87bpwMBeH3jczAUql536rECM92YtRLtzAebQRKFicMWptN4u2%2BDyrqtIw4ZV3NXgGjL%2FuE0rE2By%2FxEnVDnhGrSCyPFSDoglUoZmX%2FF9xZy5M%2BrdT4YtgyDqtA0rv92cW3SDVfkEG56978i5LFrpJuVe9LQzp%2F%2B7OGJzzFsUJmMzlaAQfcYTjOCi36N6ZRhVZN4DJRJyD0AwLM1FXoOer%2BfJthFoBgI3tY%2FEsHtGOwxN28NVyExejmJ8L7pF7QHaATYxRFEUx%2BtlsSKP0pj6N%2BGQRYT2j0lcwAZ7S7Fx7Z9bmUJ289dlO2TzmXhFX35gLdLBCyJTOzSINIjH7HP2Ttedh1Wi6xjSQG3J0IEhv8e%2FsR05Z8XqnR4gpviLPg5Gtho4QTeDXuuC%2F7Kc7vbfvaAQYQAJNN7jqhkjJP9JcnL8VVzqgQ396UO2lSvwcs1TdpD%2FCfL5nvXEt0hQ3lx467hwaI2yTnVvSkg3NYVpSz3IS0AOaLvN%2FwoALrCQRkxNqgtX%2FP48CyNOk3jDR6YjKBjqkASyC4OuHzB5as3Bo2lj9diTAl6Gz7bEqUM4uTWM2ULAKpy7diXlVZlToGHyLrCxpW0fJ4SHcAbdaji2o4w9FmQckgPgA41tVWefCPJHnWcNo%2BCBbmspIYASHIT2LzEBK%2BZDslAeim8VYEThxmkCfD2Ve3XoP4FKLgWpbmkuwOJek4GJfYhzHHnBZ%2BbFeKZIdLZRgOYIBBeG4eda%2FrbIvkboO6xzX&X-Amz-Signature=f908c28b24e82e7844002f79154a5e029ea246fd89b1db2433fe4ddb92c2721d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
