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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRNFNDM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC51bCIMPit9RKFemT9jAfau4eCKZBS53RxjZdHZYR9UQIgfCKUln2VsqSpt2VDcQxeZwm%2BanAo%2FMx%2BgUJ72PWBlWQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKf3C80y%2B%2BJ0eUxqFSrcA1DMmJ1J1fpbjKKE2w1Z73NBaHOpW8kFMmI7Vy%2BM9CXTMfJXtnw8SkKfRvPCQsNoLB6PifPdUUxOVwQmDGazxp2JxeaSsKOV%2FJJYcT2KpxddOeRjyckRRVchWXizXPu3oRu98c4i1xInF6ApvCXHsJfXc8jQS%2BedqGyQEw3pjFlNnzIsliPb08GrOIw1PrWj6JDh696%2FN88hoSFCEfhDcP0MOfVU8nHm2sWaQ3j7Yow4Qvo91l%2BumoIrREqyP3D5TbVfZXgGAmybynh9aqS8R8%2FsRgXAXwzPZYeEtCEgLY0Ka%2FAm4Z5ilInAJRC7Lura%2BErYRy%2BsxF7IQeaNO2X0M3nKC7%2FHnzQ%2BdfQJOSxwNe4XAbX6BsXxRg7p0TlR0hYSdu1pLtIF7%2F951VwfBO4pkLYwH2bEJca3QJGffhCbcW28wwrmIhkzRAE1c6A%2BBpagt%2Bgwk%2BRF%2FCoKpdIkAyHXacqmSoIbrbxH39vCT33sD6rRqkHsEp1HGaD0Ytw3%2FAObuWeHoiVL9HJgYCn8WNmQh%2FuyjiSNb1ucTEbECsUrX0wzenanVxdUZDxhXOIHCr93o%2Bf7XRib0CfDoPlam8sWu8AD23N6ZRp8je68PczdkQg2vKiJW67abt%2Br5eKJMMKixskGOqUBlhCeckLubFLYy7mstoqiFX6Wtx5iu9DCPVT1ihfqQLIIMu1b3s%2Bb089YWN0fuNobbxVW8UbrNx4Gm5uPxyo8TUkpAa4RIbrCD0IwfwS9KnXuHcaOtn3qebxlRzEfPiNbSISItWoSoARpxw3hGDgJPhtr6tKK6Yg8UZ%2FtGbmdOvIDm8iDFnMDMVfM7iDY6%2F2X9ejbVrpACDQZP8UxrejtXCMS5VqW&X-Amz-Signature=451cdcd383c525f539a211abdbfb9e48165526cd24df2d811150d5f7a26457bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRNFNDM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC51bCIMPit9RKFemT9jAfau4eCKZBS53RxjZdHZYR9UQIgfCKUln2VsqSpt2VDcQxeZwm%2BanAo%2FMx%2BgUJ72PWBlWQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKf3C80y%2B%2BJ0eUxqFSrcA1DMmJ1J1fpbjKKE2w1Z73NBaHOpW8kFMmI7Vy%2BM9CXTMfJXtnw8SkKfRvPCQsNoLB6PifPdUUxOVwQmDGazxp2JxeaSsKOV%2FJJYcT2KpxddOeRjyckRRVchWXizXPu3oRu98c4i1xInF6ApvCXHsJfXc8jQS%2BedqGyQEw3pjFlNnzIsliPb08GrOIw1PrWj6JDh696%2FN88hoSFCEfhDcP0MOfVU8nHm2sWaQ3j7Yow4Qvo91l%2BumoIrREqyP3D5TbVfZXgGAmybynh9aqS8R8%2FsRgXAXwzPZYeEtCEgLY0Ka%2FAm4Z5ilInAJRC7Lura%2BErYRy%2BsxF7IQeaNO2X0M3nKC7%2FHnzQ%2BdfQJOSxwNe4XAbX6BsXxRg7p0TlR0hYSdu1pLtIF7%2F951VwfBO4pkLYwH2bEJca3QJGffhCbcW28wwrmIhkzRAE1c6A%2BBpagt%2Bgwk%2BRF%2FCoKpdIkAyHXacqmSoIbrbxH39vCT33sD6rRqkHsEp1HGaD0Ytw3%2FAObuWeHoiVL9HJgYCn8WNmQh%2FuyjiSNb1ucTEbECsUrX0wzenanVxdUZDxhXOIHCr93o%2Bf7XRib0CfDoPlam8sWu8AD23N6ZRp8je68PczdkQg2vKiJW67abt%2Br5eKJMMKixskGOqUBlhCeckLubFLYy7mstoqiFX6Wtx5iu9DCPVT1ihfqQLIIMu1b3s%2Bb089YWN0fuNobbxVW8UbrNx4Gm5uPxyo8TUkpAa4RIbrCD0IwfwS9KnXuHcaOtn3qebxlRzEfPiNbSISItWoSoARpxw3hGDgJPhtr6tKK6Yg8UZ%2FtGbmdOvIDm8iDFnMDMVfM7iDY6%2F2X9ejbVrpACDQZP8UxrejtXCMS5VqW&X-Amz-Signature=dd10407144d92cd5d5fb28b2fd89a5a875abad0fb8e96f4cdfa2d735fd7dd67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
