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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZUURY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAEqxWJ00yHKDLS5Hr3l6yDcFFvKEzhXCyUU1I7x2B1QIgVMjJ0j%2BRVRKL%2FvKxty09X2ws%2BWssqoWjnK%2F0j2cSR2Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKEGBlIf3wZ2qtcpWircA%2Fs1cndScK8c04WN0UaCWM5vxwV%2FsOHAdWVOsX41OUdlipg%2F%2B07vduTYED%2Fynd3vz%2BruJwCO2Uv9%2Fsoh0oD6g1Qc%2FsP34czs9SguH2a3yF7eT2%2FmVkCtUdHhY4H0xwgyG2KrUDnT4sPKtxF%2BCUV1WjYR50ihEOypUx5qVn97o1csk0%2BNFFeNNnytTYE9dMNP%2FEXlz%2FO9pQtdJS%2FQVGQl7bEcot37GYAPOWXoNI1fW7UsPplNGK%2BSfOGdDzP%2B%2FUvHgb%2FCeOj10z2lVx89ygXlh9bsNVXVNuAvZrbRQxwWbL6DyXkHvUNE9x2Hw0AiPTlIukX6vSbwAO9YME6Jc%2F%2BSgdMCdbYvuF%2BDUV%2FagCDTbYGTehBj8cymgLpHs0fBN8RTdn2TQ3XamOI4tAn70d0ewbIfwHA0QATMH%2F1KsAH9r5TWU8EGtYnxOUjswTD7xfOWTJUWgwaYoLpTk9QEzHyGoiT9un9MMiyO0f8LsBrJRkZ0nbnWXFCEoMl3Z2MbOWNL66%2FjRWxnDwyaa3oGi9JVpjgiZHoHAvunB2%2ByMuAc9IWwjYakl4AZRXeBYx3XwyUmBMTs2E3HUI9KBMK3Er1Ops83v2P0iAEFDuoycz9en6Jlj2rY6WDY059iVVI%2FMNyqisoGOqUB4tATmR2gWhafRBAM7xZDwGtnVSL40ei4HNZabJLcqZsvUOq5KfuV4ix%2B%2BAQkmSvwDh37Z6z7OXq55BcXAYTOHCS0faKeqRl%2Fr5mSWGwLgRbUneKRGLGSUxUwPfPVy%2BOME%2BV4fzW6nDuQopdyrpcCT%2F1ua4sV%2Bc93ocb4da7knDW3m3mGIjiWVD%2BLnc4CiUJJMCebD2XngHg1%2BXYMl3qw%2BbQneahx&X-Amz-Signature=2c302ce5db0b3738d0166d2674c48d37900e96ffe50959e5a0416ef381dd1109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZUURY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAEqxWJ00yHKDLS5Hr3l6yDcFFvKEzhXCyUU1I7x2B1QIgVMjJ0j%2BRVRKL%2FvKxty09X2ws%2BWssqoWjnK%2F0j2cSR2Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKEGBlIf3wZ2qtcpWircA%2Fs1cndScK8c04WN0UaCWM5vxwV%2FsOHAdWVOsX41OUdlipg%2F%2B07vduTYED%2Fynd3vz%2BruJwCO2Uv9%2Fsoh0oD6g1Qc%2FsP34czs9SguH2a3yF7eT2%2FmVkCtUdHhY4H0xwgyG2KrUDnT4sPKtxF%2BCUV1WjYR50ihEOypUx5qVn97o1csk0%2BNFFeNNnytTYE9dMNP%2FEXlz%2FO9pQtdJS%2FQVGQl7bEcot37GYAPOWXoNI1fW7UsPplNGK%2BSfOGdDzP%2B%2FUvHgb%2FCeOj10z2lVx89ygXlh9bsNVXVNuAvZrbRQxwWbL6DyXkHvUNE9x2Hw0AiPTlIukX6vSbwAO9YME6Jc%2F%2BSgdMCdbYvuF%2BDUV%2FagCDTbYGTehBj8cymgLpHs0fBN8RTdn2TQ3XamOI4tAn70d0ewbIfwHA0QATMH%2F1KsAH9r5TWU8EGtYnxOUjswTD7xfOWTJUWgwaYoLpTk9QEzHyGoiT9un9MMiyO0f8LsBrJRkZ0nbnWXFCEoMl3Z2MbOWNL66%2FjRWxnDwyaa3oGi9JVpjgiZHoHAvunB2%2ByMuAc9IWwjYakl4AZRXeBYx3XwyUmBMTs2E3HUI9KBMK3Er1Ops83v2P0iAEFDuoycz9en6Jlj2rY6WDY059iVVI%2FMNyqisoGOqUB4tATmR2gWhafRBAM7xZDwGtnVSL40ei4HNZabJLcqZsvUOq5KfuV4ix%2B%2BAQkmSvwDh37Z6z7OXq55BcXAYTOHCS0faKeqRl%2Fr5mSWGwLgRbUneKRGLGSUxUwPfPVy%2BOME%2BV4fzW6nDuQopdyrpcCT%2F1ua4sV%2Bc93ocb4da7knDW3m3mGIjiWVD%2BLnc4CiUJJMCebD2XngHg1%2BXYMl3qw%2BbQneahx&X-Amz-Signature=0e4ad7a02f9718858fcc0dc64d2a2096bb631400fe3b66ade2ee5df2b4ddd180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
