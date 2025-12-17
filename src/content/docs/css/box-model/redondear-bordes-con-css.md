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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TNYUQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdpsM9tTVVw0fn%2FrcDzOFwgfW37P2MfN6%2B1rLU3WhGgIhAOdCl9gT6ZtnQ3ehZ%2B1crRYfj7y0rCrca5uHrB3LrFijKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBsXNM%2F1sYx16Bq0Mq3APQmWkQn%2BZ5QnrgfxSdK%2Bjaazg004ylV%2BDazL23m7ndYBNRMRwarDAwHqHlek4P0d73uY7g9knn50PzmmO9aEy0Onfr5d3P4O0mL70K8IguyPFrCMa5liT%2BeIb8WELL0u%2BAnb%2Btjfr5juABlpCcnMH%2BmV4Z8smYA7f91SK%2BXe%2Fkmo8UUjMAyScYDw8%2BZQ0Lhe8Zs7n1pt4zXIp0VuZx%2Fh5BNgmcVKPRhSe6vPCpVaK%2BrrPjOXriUDAaYb5FWyzAXnImLe%2B8CkS3X2OdXkGo8Z0ZR2ezRJEIaGtDxOYD1P0eBnKGhQgV5oS2YL2ZuyeHttOeSolBm0LnbOaW2Be2Oeos%2FhTjvW8ywyQeMXrqEa1iUsav6WUQDY7Jw0zqWp%2FtHnJhklXE2kxKE8%2FWzzZ0amT4aXJ0L9naEV2IlKzGR3W5V%2Bl32vR67bFSUdBBp53verbb2Jm3FSZrWfbf2JeTtjvQiSFTmZIFTbLBXRPeM1Rrx9SEsyQSFmH%2F0Zy0A0pa1smAoZAwordSrpK2HQwRXh373Nty%2FrNO%2BQ4Gq2GgLmKBcCXYu4heDzyVu4NaN7aya%2BsdE4bmlzdLZjAcOUOMyt9T9tlAOV4iWt6epWp759VepccjYDeVUfIamesujDDNnovKBjqkAS%2FxJdYP1Db4Ev6tfGrPUvFe%2FQHAV1dXsq6MDYSBrcYa5sY%2F7NV328rF2GqV9JkE46OvuKMlcEP0JhS6r9%2BcNeN39YRmikgkNsqIeP%2BiLcebIC6tCnfd1kNioBFPnJzU%2FKr8iZcZvSblq4D5P4x2yqIVulVJ8C5VcY2fbxfxxZ3uxLYlpy2%2BeqxH1jSZhIi05WzSxwQbCoQgkCQW77muCAZF6mr0&X-Amz-Signature=cf64b981f3ac8d7c2ec3bb85ddde7009676978960925f77adec184e8ed290be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TNYUQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKdpsM9tTVVw0fn%2FrcDzOFwgfW37P2MfN6%2B1rLU3WhGgIhAOdCl9gT6ZtnQ3ehZ%2B1crRYfj7y0rCrca5uHrB3LrFijKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBsXNM%2F1sYx16Bq0Mq3APQmWkQn%2BZ5QnrgfxSdK%2Bjaazg004ylV%2BDazL23m7ndYBNRMRwarDAwHqHlek4P0d73uY7g9knn50PzmmO9aEy0Onfr5d3P4O0mL70K8IguyPFrCMa5liT%2BeIb8WELL0u%2BAnb%2Btjfr5juABlpCcnMH%2BmV4Z8smYA7f91SK%2BXe%2Fkmo8UUjMAyScYDw8%2BZQ0Lhe8Zs7n1pt4zXIp0VuZx%2Fh5BNgmcVKPRhSe6vPCpVaK%2BrrPjOXriUDAaYb5FWyzAXnImLe%2B8CkS3X2OdXkGo8Z0ZR2ezRJEIaGtDxOYD1P0eBnKGhQgV5oS2YL2ZuyeHttOeSolBm0LnbOaW2Be2Oeos%2FhTjvW8ywyQeMXrqEa1iUsav6WUQDY7Jw0zqWp%2FtHnJhklXE2kxKE8%2FWzzZ0amT4aXJ0L9naEV2IlKzGR3W5V%2Bl32vR67bFSUdBBp53verbb2Jm3FSZrWfbf2JeTtjvQiSFTmZIFTbLBXRPeM1Rrx9SEsyQSFmH%2F0Zy0A0pa1smAoZAwordSrpK2HQwRXh373Nty%2FrNO%2BQ4Gq2GgLmKBcCXYu4heDzyVu4NaN7aya%2BsdE4bmlzdLZjAcOUOMyt9T9tlAOV4iWt6epWp759VepccjYDeVUfIamesujDDNnovKBjqkAS%2FxJdYP1Db4Ev6tfGrPUvFe%2FQHAV1dXsq6MDYSBrcYa5sY%2F7NV328rF2GqV9JkE46OvuKMlcEP0JhS6r9%2BcNeN39YRmikgkNsqIeP%2BiLcebIC6tCnfd1kNioBFPnJzU%2FKr8iZcZvSblq4D5P4x2yqIVulVJ8C5VcY2fbxfxxZ3uxLYlpy2%2BeqxH1jSZhIi05WzSxwQbCoQgkCQW77muCAZF6mr0&X-Amz-Signature=a1639cf872c7c33862d7527135ad5f91891ea31ac16541f406d06d9b3ae4d87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
