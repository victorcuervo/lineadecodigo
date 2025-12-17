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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPKMF6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVYFrIUHJFv2AvsO8UcroITTCdzitbXqfDF4r9xr4W7QIhANsh0Atv5FVojQjOpwvCP6b2ekpT6p3NkFbUCm2Bo6ELKv8DCHoQABoMNjM3NDIzMTgzODA1Igwozq%2FReFRG4GAJnKEq3AOdN3wV4QD7X%2F%2FZewMDfjqX0mtmAoEoYvRQHv2TGlGh1%2FqCzfKzHWurlcHQp%2FwzC3fbb%2F8NISToG8Q4nfSJIMIFZD023ms1etGe87gFiIx8rsl1H6DRPLs9S36AVHRoy44nm4zwYc71q6bY2L%2FlXuqGITQ6Rg5eHFRcwc67RJKSIVDhnTSedXd2YSjKezp9Mw5F%2BpcKDo6NHpz7Anz5r16oNVBy6uXv1xq1D3%2BlqtTscCR0j9eYltuAKIG8hedcGDG67rQneLzI%2FeJT4yOCYjwghAU5brg7WBfzHPOG%2BM0yek2loHttjODf%2FrbmnVXOkNwO4RSSAV4PVVLGkLTPx%2BTim7sAAQOem2zlQS%2BC7p4lbRjijVztqTFRl0jEaC8sycklCTxBTi0ftW%2BYoa8KXklDNExE7MW%2BfpuOlInJZqN0UZr%2FcdfgF16O9Dfst9QJDVt19EFf1ylpGHMgf9C%2Bkd11mNJkjBsPwx7v%2BR%2FYDY81rOIrkhAuFuabxWOftHjsVrFMd49vp%2FqJP3D6GaKwOKH1BgrbkGaDotWYQapGR4HOdRQEpgBxEtEFA7OK3ZzgtSTb1kwLz5NuxGoFeW2%2B9jKcS3tySKnWUmat341MARZdTlKSqGUJRxJtQ4fb7jCX0onKBjqkARGU5Vxu4GefOXEuLcuPU6Yx6m4ZvJG3lFqsTTUfF5HkHJaxqRM2yAXs1BDhWcx2IRlY55jafIfEWC%2BGHWXQ9FI3cxB4%2BtVbTjy%2BDkIVKMEbj7olNIgqO3ZjKB7Y%2BqOHfJncZ3vqBoL8fWBHrIQs9Qr6bwJn61mIEjbK%2F1JsvvX9J5bzXpOcN%2FQhlOhvKBNopqUIfh4dDDdT9mlevde3%2FhnShM0p&X-Amz-Signature=bfc0a7b0bf3003baa35298574d7d4efbb9b3e4081650827d33c353c5d41e9213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPKMF6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVYFrIUHJFv2AvsO8UcroITTCdzitbXqfDF4r9xr4W7QIhANsh0Atv5FVojQjOpwvCP6b2ekpT6p3NkFbUCm2Bo6ELKv8DCHoQABoMNjM3NDIzMTgzODA1Igwozq%2FReFRG4GAJnKEq3AOdN3wV4QD7X%2F%2FZewMDfjqX0mtmAoEoYvRQHv2TGlGh1%2FqCzfKzHWurlcHQp%2FwzC3fbb%2F8NISToG8Q4nfSJIMIFZD023ms1etGe87gFiIx8rsl1H6DRPLs9S36AVHRoy44nm4zwYc71q6bY2L%2FlXuqGITQ6Rg5eHFRcwc67RJKSIVDhnTSedXd2YSjKezp9Mw5F%2BpcKDo6NHpz7Anz5r16oNVBy6uXv1xq1D3%2BlqtTscCR0j9eYltuAKIG8hedcGDG67rQneLzI%2FeJT4yOCYjwghAU5brg7WBfzHPOG%2BM0yek2loHttjODf%2FrbmnVXOkNwO4RSSAV4PVVLGkLTPx%2BTim7sAAQOem2zlQS%2BC7p4lbRjijVztqTFRl0jEaC8sycklCTxBTi0ftW%2BYoa8KXklDNExE7MW%2BfpuOlInJZqN0UZr%2FcdfgF16O9Dfst9QJDVt19EFf1ylpGHMgf9C%2Bkd11mNJkjBsPwx7v%2BR%2FYDY81rOIrkhAuFuabxWOftHjsVrFMd49vp%2FqJP3D6GaKwOKH1BgrbkGaDotWYQapGR4HOdRQEpgBxEtEFA7OK3ZzgtSTb1kwLz5NuxGoFeW2%2B9jKcS3tySKnWUmat341MARZdTlKSqGUJRxJtQ4fb7jCX0onKBjqkARGU5Vxu4GefOXEuLcuPU6Yx6m4ZvJG3lFqsTTUfF5HkHJaxqRM2yAXs1BDhWcx2IRlY55jafIfEWC%2BGHWXQ9FI3cxB4%2BtVbTjy%2BDkIVKMEbj7olNIgqO3ZjKB7Y%2BqOHfJncZ3vqBoL8fWBHrIQs9Qr6bwJn61mIEjbK%2F1JsvvX9J5bzXpOcN%2FQhlOhvKBNopqUIfh4dDDdT9mlevde3%2FhnShM0p&X-Amz-Signature=7e3393efc0886c49de2e0fa6065ddd8220ec84246d6ca1fe878eb42714afafee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
