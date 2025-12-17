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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAWQR75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFekmyeHfxL%2BC5v7ubttEmRuVbni1jrMoTrybLTMDycdAiEAnl31ZS5drcIKSer6W%2FGslKNjpG3e7o%2B7TpBOSk1uf1Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFOoUsdhfrcy62L9OCrcA7LrfG5Z%2FGXS5BJq%2FIk3%2BfHzvxNuAwqHD4YDUEc%2FeL40%2Fl4NY0aFfDA1psZ0%2BROiA6q%2FUHV2ITVJL2omuYY%2Bi3Yun4re47gYBU7dY%2B6dBzxQm8ba6QCB8WsvpPjqKvnee6pBG%2FIP%2F6MQAJeLu5nlIeesNJUvb4xXw63p%2BDpGP04FWtLN6vC%2FJUx0oMRnn8X6kZXNELli7ufk1WlaLURwvkgn1IZ25IgQGY28ZSe0ljq1ziTnWase%2BT5G5QbL3ex6006iBVdd0853ssTRUBN6BMpYVSdHAJesEZOorxRVfzNXC2GsJ14WBIr%2FlPV7SDRINJMRiy%2Fu6uM6DRXui8w7pwFx%2FZIOaqNfildbUCCmNcA81ix5KbU7aSOrYMOIJk5yIGKi8Ucvwm7FXDo%2F%2Fu3V7to6KgZdBvJi3hIHRwk9f3wMXNXGRsmRE8ZarwQaBHqkIYRKVLuqbReL09CT9BXHB8XSRGVZQIUGP2OuYSsZMKhtbZdFkVFPKqeaH8dJj4%2BKWBGxyHNXyMcThCTKqG6LgHRVD2bhiPeytfcpQmtBtS61wtimR8P7mJRhlpnR1IO%2FHT3RXIbBHgiHE47f1haSGBckZ7SUIxidGZDoiRhSoN6L2UNNjMwdbdfK64qrMMDGisoGOqUB%2FjPaiKXwFL7WNQLpCYPbVWgPsjER13Y8GoaGmZ8%2B3sfji5hn%2BlG6YIOAlVXbSiPqEuf7P23sJdwwJuWW1sO12%2FQMwD8VIwJlT8fpYuhCx4k9BYLFm%2BQ5A0kkHNvVGlQ9rHHZcsXML4dw110cCR04KEufZ38Y%2FQQgna48EO%2FeBNJkfNs24wiQQVamo2VEBYtpHDMO5M1LFObX5OkiCx6MElma5MZE&X-Amz-Signature=1697f9c1e3116562747184082d550308c53356a0b15c404cdf30e91c1853d7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAWQR75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFekmyeHfxL%2BC5v7ubttEmRuVbni1jrMoTrybLTMDycdAiEAnl31ZS5drcIKSer6W%2FGslKNjpG3e7o%2B7TpBOSk1uf1Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFOoUsdhfrcy62L9OCrcA7LrfG5Z%2FGXS5BJq%2FIk3%2BfHzvxNuAwqHD4YDUEc%2FeL40%2Fl4NY0aFfDA1psZ0%2BROiA6q%2FUHV2ITVJL2omuYY%2Bi3Yun4re47gYBU7dY%2B6dBzxQm8ba6QCB8WsvpPjqKvnee6pBG%2FIP%2F6MQAJeLu5nlIeesNJUvb4xXw63p%2BDpGP04FWtLN6vC%2FJUx0oMRnn8X6kZXNELli7ufk1WlaLURwvkgn1IZ25IgQGY28ZSe0ljq1ziTnWase%2BT5G5QbL3ex6006iBVdd0853ssTRUBN6BMpYVSdHAJesEZOorxRVfzNXC2GsJ14WBIr%2FlPV7SDRINJMRiy%2Fu6uM6DRXui8w7pwFx%2FZIOaqNfildbUCCmNcA81ix5KbU7aSOrYMOIJk5yIGKi8Ucvwm7FXDo%2F%2Fu3V7to6KgZdBvJi3hIHRwk9f3wMXNXGRsmRE8ZarwQaBHqkIYRKVLuqbReL09CT9BXHB8XSRGVZQIUGP2OuYSsZMKhtbZdFkVFPKqeaH8dJj4%2BKWBGxyHNXyMcThCTKqG6LgHRVD2bhiPeytfcpQmtBtS61wtimR8P7mJRhlpnR1IO%2FHT3RXIbBHgiHE47f1haSGBckZ7SUIxidGZDoiRhSoN6L2UNNjMwdbdfK64qrMMDGisoGOqUB%2FjPaiKXwFL7WNQLpCYPbVWgPsjER13Y8GoaGmZ8%2B3sfji5hn%2BlG6YIOAlVXbSiPqEuf7P23sJdwwJuWW1sO12%2FQMwD8VIwJlT8fpYuhCx4k9BYLFm%2BQ5A0kkHNvVGlQ9rHHZcsXML4dw110cCR04KEufZ38Y%2FQQgna48EO%2FeBNJkfNs24wiQQVamo2VEBYtpHDMO5M1LFObX5OkiCx6MElma5MZE&X-Amz-Signature=d2b5a8546ed6107a98e789e575b2c7e356549d855594d3684c91a62efeaa42b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
