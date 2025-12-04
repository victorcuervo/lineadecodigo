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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANRRCRM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD4Er0NE%2FBtmyExZZEXLSlgcJkNQoIyPh3%2BXiC2pjj1MAIgQV968VrmWtBsONV8EZA6ybYqdPGOL3USsGc8QAMAO1oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOuL%2FzOLhc%2B0a0Qw0CrcA4cOqFVsKQ9UOcoCDjQPS2CuPYmhw4OT3bnJQIG3NsO44%2FRu3PpIg67BS%2BiBYC5sF7NpIzUvMZS1e39m9gaW7PlOkwHv5F01CjiDBwSHDS%2F6aikj8%2B2ROZ6hjK1OyQLFrfDUS%2FHyXq%2BdlYaQOdxVLXplwT4X5xOziBHbw6qMqMXEB%2FyM%2BN1lx5k6GPqjscMGUdKsnfzhNVEShzzTGjeNGW%2BJsFHnq2wYpBbmpgpeQ65mPC1k4JG0ENGkZ06LGjXD%2BBXN890u%2FqZqYfpjxRu%2F8hSPPuxPf6AtqIrZdz0nhclzfyBEprYmK0u920C%2FVaOMJfAItJez8F5Ncj1TQBH7aYl4vMVj1BTGS2XrExaqVthERz2%2BGfetPKPBzO7cj%2Bb2fQnDsr4Vpem0MW9BXgRpcCLEyWSCNaqGU3R4AlCxWYaDv82iRfRD2lroZigl%2B8nsJS%2BweWt082Vu4vvXTIbD3tqywItWdssNfR%2B4jKYA%2FrV847i68UAp2L7yoCl%2F%2B1cRUdf9bwzjnIgjMbjM6Sfbadvt9U0OitEGKl6XjgVZT94btce50I%2BmpLBUyOws5WqcECnuBJFgCglv0UQgY1B2wkhXE2GJfPv%2BNEvuE64%2FCdyH%2FS5IPlUnkrrQx67AMJPAxskGOqUBzYhCzfd%2B9ulrr8I8ya9RFgvER7kC%2FdYDryWv1wQqVV%2F1YffT0L36ekqG9IwZJza1lkUuvOBvN5Alp7lIcjeJwPteircSGPhBP8n%2Fg7qnm45ZvA2Rf6D2x1hHla%2BGP0rB0goIs%2FFMs0I88IVF%2Fz%2FD8tsFobBzFHwgprySUZWYyZvzH2H%2F2wf%2BoV%2BrLaHc4EdpvEe6%2FUl%2Bq51zF%2BrCXC6JYPWdIm4J&X-Amz-Signature=f70e882ad377669fadd6343653241865f42c0cc0f198a8e1e254c1fd2938be8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANRRCRM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD4Er0NE%2FBtmyExZZEXLSlgcJkNQoIyPh3%2BXiC2pjj1MAIgQV968VrmWtBsONV8EZA6ybYqdPGOL3USsGc8QAMAO1oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOuL%2FzOLhc%2B0a0Qw0CrcA4cOqFVsKQ9UOcoCDjQPS2CuPYmhw4OT3bnJQIG3NsO44%2FRu3PpIg67BS%2BiBYC5sF7NpIzUvMZS1e39m9gaW7PlOkwHv5F01CjiDBwSHDS%2F6aikj8%2B2ROZ6hjK1OyQLFrfDUS%2FHyXq%2BdlYaQOdxVLXplwT4X5xOziBHbw6qMqMXEB%2FyM%2BN1lx5k6GPqjscMGUdKsnfzhNVEShzzTGjeNGW%2BJsFHnq2wYpBbmpgpeQ65mPC1k4JG0ENGkZ06LGjXD%2BBXN890u%2FqZqYfpjxRu%2F8hSPPuxPf6AtqIrZdz0nhclzfyBEprYmK0u920C%2FVaOMJfAItJez8F5Ncj1TQBH7aYl4vMVj1BTGS2XrExaqVthERz2%2BGfetPKPBzO7cj%2Bb2fQnDsr4Vpem0MW9BXgRpcCLEyWSCNaqGU3R4AlCxWYaDv82iRfRD2lroZigl%2B8nsJS%2BweWt082Vu4vvXTIbD3tqywItWdssNfR%2B4jKYA%2FrV847i68UAp2L7yoCl%2F%2B1cRUdf9bwzjnIgjMbjM6Sfbadvt9U0OitEGKl6XjgVZT94btce50I%2BmpLBUyOws5WqcECnuBJFgCglv0UQgY1B2wkhXE2GJfPv%2BNEvuE64%2FCdyH%2FS5IPlUnkrrQx67AMJPAxskGOqUBzYhCzfd%2B9ulrr8I8ya9RFgvER7kC%2FdYDryWv1wQqVV%2F1YffT0L36ekqG9IwZJza1lkUuvOBvN5Alp7lIcjeJwPteircSGPhBP8n%2Fg7qnm45ZvA2Rf6D2x1hHla%2BGP0rB0goIs%2FFMs0I88IVF%2Fz%2FD8tsFobBzFHwgprySUZWYyZvzH2H%2F2wf%2BoV%2BrLaHc4EdpvEe6%2FUl%2Bq51zF%2BrCXC6JYPWdIm4J&X-Amz-Signature=c6631acfdf225570454a6f3ea114b5656f5dc7fbd2ec665cda80573d3bbe674e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
