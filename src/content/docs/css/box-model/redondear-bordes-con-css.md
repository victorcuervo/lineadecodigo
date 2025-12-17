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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBQD7DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4idLUsAArB2nZS0CWlhOEW4%2BvSv9hiGOEiuGV%2BwQcwIhAPGXDknwFpdEUclBYGSPGlDWoRDfklIYTsyr7%2BjCQ5LiKv8DCHsQABoMNjM3NDIzMTgzODA1Igyo8lzCiMcPky9IbXkq3AOteFvgozmDr06PtNzCo0JyUVsB9qIlgyWuUNlauBvBeYFQ5KGKjngt%2FJUpyrMkdR7rbhbnV2N1iUuatiaxqBVN0BMBElptRQvnWAX13gW5eaHBLeCQOfg7aviekDph3kmDmojMlRKSUHys5qpEFek3%2FCMSZj%2FotrOonH%2FuX1dzHoVE9QYmBPZ6CX8C%2FxkDdLL0JYI1A6YF5joewB0HMc9lVkBFJcoZ4zs6PZ5GjgEkRh2zcwcLVHDkWfdUp49pwHqebbnOuyZU89g0YLQmk1%2FsTDDSLCvGk%2BIDkc5vYkbk6AAIs4X%2BwMWBWY%2BQfgT2mPa%2FOqAR4LNVLdPpenRc8JXTD5aXEr7V6gTVfku5q7cbgj3Odbe1%2FOj4MT6DjzlVmV6sxaU9KY7GGA3vQOgVg1xE4Wy3yJDkWkYkcPZN%2BNSldpBYJ%2FPGyl4iMAKjtL4y0fA65064%2BWUgGEWLFBWqYvNuZ8EAVDX2Mex30H3pVSs6yas1NwTiAP4NMxdZJxifpAjvYgJaCncCOI5m%2FCzIbmlJnTAC1m2cg6cIPcf6FhqC%2FEFGmcJ01zRqImDSORYyJgzpEGxubWetf91Fpo54m6nWRSYfSmjtX%2BNEOu8qlWjm9AhEAGg%2F7I8vyuk9XTCH8InKBjqkAfKlAxE52OifcIshDjL%2BUOTRN9gH6GowMUruZlncz7AhPmaXQCk0ACusetu8N4co2nu36M0flR1HX%2F8EquJvvbQlfu8j1DXuIhkOcpMA4vRXJCko2DtoAfor7BUrhjhohmBh65%2BM90EL5vnM9jVgnEZORC7fOEYg7ZLqxu7gQhUMpReVSAxG%2B4d%2FQnreiX79vfrycD1gRUniZSLuGF18iSM8V6zE&X-Amz-Signature=2fe9e7586cdea4bb97d199e6780390511d2b9047cd7b9bd64d540e8577385e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBQD7DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL4idLUsAArB2nZS0CWlhOEW4%2BvSv9hiGOEiuGV%2BwQcwIhAPGXDknwFpdEUclBYGSPGlDWoRDfklIYTsyr7%2BjCQ5LiKv8DCHsQABoMNjM3NDIzMTgzODA1Igyo8lzCiMcPky9IbXkq3AOteFvgozmDr06PtNzCo0JyUVsB9qIlgyWuUNlauBvBeYFQ5KGKjngt%2FJUpyrMkdR7rbhbnV2N1iUuatiaxqBVN0BMBElptRQvnWAX13gW5eaHBLeCQOfg7aviekDph3kmDmojMlRKSUHys5qpEFek3%2FCMSZj%2FotrOonH%2FuX1dzHoVE9QYmBPZ6CX8C%2FxkDdLL0JYI1A6YF5joewB0HMc9lVkBFJcoZ4zs6PZ5GjgEkRh2zcwcLVHDkWfdUp49pwHqebbnOuyZU89g0YLQmk1%2FsTDDSLCvGk%2BIDkc5vYkbk6AAIs4X%2BwMWBWY%2BQfgT2mPa%2FOqAR4LNVLdPpenRc8JXTD5aXEr7V6gTVfku5q7cbgj3Odbe1%2FOj4MT6DjzlVmV6sxaU9KY7GGA3vQOgVg1xE4Wy3yJDkWkYkcPZN%2BNSldpBYJ%2FPGyl4iMAKjtL4y0fA65064%2BWUgGEWLFBWqYvNuZ8EAVDX2Mex30H3pVSs6yas1NwTiAP4NMxdZJxifpAjvYgJaCncCOI5m%2FCzIbmlJnTAC1m2cg6cIPcf6FhqC%2FEFGmcJ01zRqImDSORYyJgzpEGxubWetf91Fpo54m6nWRSYfSmjtX%2BNEOu8qlWjm9AhEAGg%2F7I8vyuk9XTCH8InKBjqkAfKlAxE52OifcIshDjL%2BUOTRN9gH6GowMUruZlncz7AhPmaXQCk0ACusetu8N4co2nu36M0flR1HX%2F8EquJvvbQlfu8j1DXuIhkOcpMA4vRXJCko2DtoAfor7BUrhjhohmBh65%2BM90EL5vnM9jVgnEZORC7fOEYg7ZLqxu7gQhUMpReVSAxG%2B4d%2FQnreiX79vfrycD1gRUniZSLuGF18iSM8V6zE&X-Amz-Signature=af887dfbb6dea97903026dad41d1efb60d00f141e5af01baa23ddcb2e18971cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
