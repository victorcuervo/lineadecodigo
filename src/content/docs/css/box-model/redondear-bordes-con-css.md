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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNDHYQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1m2HmCIBnd6rLpxIbxEj%2BHFymYu3EK0EJr%2FuR95oNJwIhANCSx4Z%2BAOCNj307vKaQZ3vx7ul8YV3V6%2BBruxPaHdW1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwAzZhPf1lRcVMtIA4q3APexLFGYDJVRertybtw45qh8Xo1SKf4OtRQFhZ8pM8gA2XAz1905J0pOL5qCaEf0XQVRgrV8E7gVjxMfb%2F400Ph%2FYpsKSuqzCFoPFm5bMhA2Erw5XMt95G9BG%2By1HJAvD5a4bY4qap0solVLHgAbYeBoW465Yt1Bm5FuQLvHsRmWpot92kfy2sKRseKXFugf3tEeGutkjwvwJ71y%2FVN0hRq9F7ZLW3Z05tm7wayBBpO0kq3Q%2F%2BthcY7y2L3%2BvhjPkBVG%2FoIdHITE4neUmVFTKRlzZBxguG081j7wOrwjNcgwZGr2UEwGBA2G22rubgqnbre1F2%2F4oVCilhPXaw0PxXrgPxa4S8%2FOknkCp24exwrRN4Ujy06QLzNoAcXQAJu%2FM4RInGNza6lG5Q3MlYwBJ7tpc6nFYSdsWXqX7Hu3m5Iq6MRh8hbyVzVARL8IfBc0bhTd3diAM%2FeiArCOLF7vyNGeqLG3P%2FvVCzRMLdpdbSRUaniGBWUKCqq%2BIiQOD8raR9DRauWmEg9uYB8lik4Q%2FFPvAtMB%2BspsVU%2BzKPChQ5u22Clb%2FjrBWGPhaoRM4GK3Bdn2KZQy5rpEohKmETb1s1IqCwdfDhofMQSLCsiSCYmjVOo%2FJt0POgNYV1FxzCdxorKBjqkATmd7koqTptjiYzL2mpSWSgmVE5Rl161iRjhvVYeUh0ud8Xfo0S6OWUYIdr0GhVlTem2jAJtfGx%2BBkbGgCiPHj0mYvVjCQIJPLDha9d%2FSulsZklG02ik%2BZU9EddBitqZ7lkpSTP%2BwVh%2BwKNte7WUTSHnpcYcmbVdqTwxyxEkGzxoBi%2FMShE5xUuHc7vn1dvWd%2BbROxf2Q7M8%2B3gnYB1RsManwTNF&X-Amz-Signature=bf73bb9eaf7614308daccf3498bc8c4b8c92171c47f623c835aaa5784042ba0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNDHYQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1m2HmCIBnd6rLpxIbxEj%2BHFymYu3EK0EJr%2FuR95oNJwIhANCSx4Z%2BAOCNj307vKaQZ3vx7ul8YV3V6%2BBruxPaHdW1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwAzZhPf1lRcVMtIA4q3APexLFGYDJVRertybtw45qh8Xo1SKf4OtRQFhZ8pM8gA2XAz1905J0pOL5qCaEf0XQVRgrV8E7gVjxMfb%2F400Ph%2FYpsKSuqzCFoPFm5bMhA2Erw5XMt95G9BG%2By1HJAvD5a4bY4qap0solVLHgAbYeBoW465Yt1Bm5FuQLvHsRmWpot92kfy2sKRseKXFugf3tEeGutkjwvwJ71y%2FVN0hRq9F7ZLW3Z05tm7wayBBpO0kq3Q%2F%2BthcY7y2L3%2BvhjPkBVG%2FoIdHITE4neUmVFTKRlzZBxguG081j7wOrwjNcgwZGr2UEwGBA2G22rubgqnbre1F2%2F4oVCilhPXaw0PxXrgPxa4S8%2FOknkCp24exwrRN4Ujy06QLzNoAcXQAJu%2FM4RInGNza6lG5Q3MlYwBJ7tpc6nFYSdsWXqX7Hu3m5Iq6MRh8hbyVzVARL8IfBc0bhTd3diAM%2FeiArCOLF7vyNGeqLG3P%2FvVCzRMLdpdbSRUaniGBWUKCqq%2BIiQOD8raR9DRauWmEg9uYB8lik4Q%2FFPvAtMB%2BspsVU%2BzKPChQ5u22Clb%2FjrBWGPhaoRM4GK3Bdn2KZQy5rpEohKmETb1s1IqCwdfDhofMQSLCsiSCYmjVOo%2FJt0POgNYV1FxzCdxorKBjqkATmd7koqTptjiYzL2mpSWSgmVE5Rl161iRjhvVYeUh0ud8Xfo0S6OWUYIdr0GhVlTem2jAJtfGx%2BBkbGgCiPHj0mYvVjCQIJPLDha9d%2FSulsZklG02ik%2BZU9EddBitqZ7lkpSTP%2BwVh%2BwKNte7WUTSHnpcYcmbVdqTwxyxEkGzxoBi%2FMShE5xUuHc7vn1dvWd%2BbROxf2Q7M8%2B3gnYB1RsManwTNF&X-Amz-Signature=93bae7ea89e698e1ce3810431bb73e03477fe04ee04e379db02bd1bc81422fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
