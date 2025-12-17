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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LBCOZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEkc4KwQilb80iYudTFsbx5tRmQpZ2RqTZKCLMw2b34AiBxFfbznjqK3Wifp6MnjJxDMKpiDkCHeCU1twl3XJsfaSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2Oo3Ei6YV5MiVIDvKtwDH8ngq%2BKUtGSe9wpKMyYIMWvBbi4jkuyeUKInmzZbyXeaC98yDN3YT9R%2FnS1pZLKn30RX80wI2Os4FGu4%2By05UOt9pO%2BE0qgkbpNNdHm8sg3Wf5gAZ7bqQxDRrqt5DRhZba3BJN3xTlWOyvSXWnIguwWL%2F85vPk2Si44yAyVvzOl7PfQzynoWp%2BLtjDTBT4ZZEyoZm3CvbSRdvG06fYoor3PTcxnSKkjU5Dat5jdveeAPFr%2FCoFusmwgsK0RiwsvbqXT4mdLQh04m7aFxtZuI3Yk1KfIVS9JabG5luuYu3RxgGwrwXHRDm9DJ6PKfGwU6DF8xofqdntF0ggZWZ%2Fh3%2FumaFtVJAWxq7cYBmp3Bu77CbM6I99w%2F48ok5xZ3d5%2FOLw0myQba350mJ6HeIpwVIMEDWTUnS96hXoN%2BGcFoctQ97Zlh%2FeLCWYaqR4KNPsxHNueXzAU%2BzLvyQAmYKkenMY9SOasqJihkWSSJdz03uHV1kMPwzrnAdqlM2N6LLPwYHg8GGQacSnMvsddXdh6jmYF19WcHxt2SwBDwSCkXxWD2DwpqENpu6qz0t%2BFHWG9XU22sCmQH%2F34w3%2ByjsZCCEYYCmgwtqKJ3Xxf7hTW2m6RoFpjORQ1HPkWzsLwwsLiJygY6pgGBtUIbPfx0xbouOe7Nm%2FAS5pJcSKCse6h1y71BRu6%2BokWPTRrRvEPuR%2F8wG4BBTeTObqJvKUgBgVEgphj18teqhXQ4jDmr5Qw4qFKHWwWmM1nTDGdtp2XVdVu9EySel0GithOXqv3QfTvzPca5D3TohNCNR5iiwwGDwQNcjbAukS66qulwKe4FqHHcMP76OPjsK7wintVP2iAU5ENkgiii6HFYdohI&X-Amz-Signature=cdded5b73aa04d3b8cd4ee4d423080fc1bd646a7e3367198615cd04c71f69477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635LBCOZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEkc4KwQilb80iYudTFsbx5tRmQpZ2RqTZKCLMw2b34AiBxFfbznjqK3Wifp6MnjJxDMKpiDkCHeCU1twl3XJsfaSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2Oo3Ei6YV5MiVIDvKtwDH8ngq%2BKUtGSe9wpKMyYIMWvBbi4jkuyeUKInmzZbyXeaC98yDN3YT9R%2FnS1pZLKn30RX80wI2Os4FGu4%2By05UOt9pO%2BE0qgkbpNNdHm8sg3Wf5gAZ7bqQxDRrqt5DRhZba3BJN3xTlWOyvSXWnIguwWL%2F85vPk2Si44yAyVvzOl7PfQzynoWp%2BLtjDTBT4ZZEyoZm3CvbSRdvG06fYoor3PTcxnSKkjU5Dat5jdveeAPFr%2FCoFusmwgsK0RiwsvbqXT4mdLQh04m7aFxtZuI3Yk1KfIVS9JabG5luuYu3RxgGwrwXHRDm9DJ6PKfGwU6DF8xofqdntF0ggZWZ%2Fh3%2FumaFtVJAWxq7cYBmp3Bu77CbM6I99w%2F48ok5xZ3d5%2FOLw0myQba350mJ6HeIpwVIMEDWTUnS96hXoN%2BGcFoctQ97Zlh%2FeLCWYaqR4KNPsxHNueXzAU%2BzLvyQAmYKkenMY9SOasqJihkWSSJdz03uHV1kMPwzrnAdqlM2N6LLPwYHg8GGQacSnMvsddXdh6jmYF19WcHxt2SwBDwSCkXxWD2DwpqENpu6qz0t%2BFHWG9XU22sCmQH%2F34w3%2ByjsZCCEYYCmgwtqKJ3Xxf7hTW2m6RoFpjORQ1HPkWzsLwwsLiJygY6pgGBtUIbPfx0xbouOe7Nm%2FAS5pJcSKCse6h1y71BRu6%2BokWPTRrRvEPuR%2F8wG4BBTeTObqJvKUgBgVEgphj18teqhXQ4jDmr5Qw4qFKHWwWmM1nTDGdtp2XVdVu9EySel0GithOXqv3QfTvzPca5D3TohNCNR5iiwwGDwQNcjbAukS66qulwKe4FqHHcMP76OPjsK7wintVP2iAU5ENkgiii6HFYdohI&X-Amz-Signature=a610e2228e7bf619dddba32450161c2ba43e75fa9eae747f68106a433b8b6d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
