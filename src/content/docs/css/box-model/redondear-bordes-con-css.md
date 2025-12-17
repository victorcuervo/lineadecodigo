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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AIVVLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgbHO%2B0eguFSeW8NQYuw%2F7cPh971NRvZFYUajGI%2BSO2wIgaMmp4ibU8lI%2Fm%2FRInF8yyfuhbtkDZcQ1LO%2FIqxxhPEkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTMsOtFDgr3zrNaHCrcA%2B97P%2Fvgo6ojiVyo%2F6256gsMhcSeMdTsxRb%2BunEckbum0VUU8lUfHYKt2roJYWXpAKLWdwGCe9K4POX4lDHN7sAJGNV4XmtbBEgBwdUAYX0gd5DFTqRawNDQLN8SOZR67iwJOk7%2B509B4pMw%2FQh3zsdmEse7N%2Bs%2BOv4v8GNhr%2BdudtY9%2BvFCD5g4dURHSV2jQPm4e%2FMRSNHlWjCQNWm6zZeXVvCULwIEDjtKCg46aZAHfCUyu1xsokct%2F1w%2B1hanK0oImt3z%2BagV1L1JxaWyILsHEiAE1VxpNVIQYS3E7vM64J713egXbOtAsHZ95Iw4gs%2Bm61G0toGSFT5zBxhHnkUt%2B816QVODxAgRrzoJr1YgLKzPk0%2BytqZbNjtg%2FvuW3pGKg6%2FsArsXQ7BwfQI183yas14f0lyjeI4d8BA1FY0WeFLtGXtB%2F2s%2BGuPQetN9o3%2F%2FKX7Nqz%2BUemIXhiv3XGy9kWddJJAnYv6hWdPO49MchLnrcjJsS2ZMe67h5LCw%2Bvbs1X2Rqz5laMhyAzXo%2BEhLAEJ7b8%2BNYIU%2FLtjC72BY7%2ByGrw85QZBklCUr8G23bhrhU84TrhXa2CDOQUeT4RjyRZJTFohT4ZlbyKaRCRK%2F%2F5QgumYzISGVdv9GMO6tjMoGOqUBilc1T%2BcFVyxcNX2K2AVGEQP2D%2FS7bJ1H32fFhiso%2Fmy0LW9A5lSYA%2F68fwUIt7%2FLsqfoBHj8iTYbU1jnGuF9F%2FUgyK4PBABbowKzrLaM7D4t6eWhJ0GdhFHZVQTptwnwzuuM4Q3PUi9z9EL3bnJYhh%2B14CzRCwlVBZklSUXjSI9CoVgT1kTA941mV%2BCyafcdsdxIFFzARpIMMdHIK3mvNIhHRr4O&X-Amz-Signature=97f56f8a9b545e747c5d6acbdfc98b58cb5f229dbc6c285795b55bd21173da86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AIVVLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgbHO%2B0eguFSeW8NQYuw%2F7cPh971NRvZFYUajGI%2BSO2wIgaMmp4ibU8lI%2Fm%2FRInF8yyfuhbtkDZcQ1LO%2FIqxxhPEkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTMsOtFDgr3zrNaHCrcA%2B97P%2Fvgo6ojiVyo%2F6256gsMhcSeMdTsxRb%2BunEckbum0VUU8lUfHYKt2roJYWXpAKLWdwGCe9K4POX4lDHN7sAJGNV4XmtbBEgBwdUAYX0gd5DFTqRawNDQLN8SOZR67iwJOk7%2B509B4pMw%2FQh3zsdmEse7N%2Bs%2BOv4v8GNhr%2BdudtY9%2BvFCD5g4dURHSV2jQPm4e%2FMRSNHlWjCQNWm6zZeXVvCULwIEDjtKCg46aZAHfCUyu1xsokct%2F1w%2B1hanK0oImt3z%2BagV1L1JxaWyILsHEiAE1VxpNVIQYS3E7vM64J713egXbOtAsHZ95Iw4gs%2Bm61G0toGSFT5zBxhHnkUt%2B816QVODxAgRrzoJr1YgLKzPk0%2BytqZbNjtg%2FvuW3pGKg6%2FsArsXQ7BwfQI183yas14f0lyjeI4d8BA1FY0WeFLtGXtB%2F2s%2BGuPQetN9o3%2F%2FKX7Nqz%2BUemIXhiv3XGy9kWddJJAnYv6hWdPO49MchLnrcjJsS2ZMe67h5LCw%2Bvbs1X2Rqz5laMhyAzXo%2BEhLAEJ7b8%2BNYIU%2FLtjC72BY7%2ByGrw85QZBklCUr8G23bhrhU84TrhXa2CDOQUeT4RjyRZJTFohT4ZlbyKaRCRK%2F%2F5QgumYzISGVdv9GMO6tjMoGOqUBilc1T%2BcFVyxcNX2K2AVGEQP2D%2FS7bJ1H32fFhiso%2Fmy0LW9A5lSYA%2F68fwUIt7%2FLsqfoBHj8iTYbU1jnGuF9F%2FUgyK4PBABbowKzrLaM7D4t6eWhJ0GdhFHZVQTptwnwzuuM4Q3PUi9z9EL3bnJYhh%2B14CzRCwlVBZklSUXjSI9CoVgT1kTA941mV%2BCyafcdsdxIFFzARpIMMdHIK3mvNIhHRr4O&X-Amz-Signature=9aaa2d5f66ad7201a6a619274a5b1a05a9b983e51e1b5c55ad558cd69f8dd3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
