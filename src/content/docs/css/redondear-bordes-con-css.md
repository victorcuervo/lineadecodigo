---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVABABC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmIzncAFpmv2IeHvsjNvly1ueh8wxDif0VZSB0f5dE%2FAiEA7tJqpS37S2cBasV7Fiusry2FYxPBuFQRkLjl%2BtYNkNsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAO9BeWXgXr1BbX8UyrcA4bU5Oi4yZCq1PkxSJQe0vLLKSwclwMBQuToQNWo4pBR5XG4IYxJ1kgrHB3nF0noQ5b22aVCZKF%2BfZaespvF2qHe9CJvVyjtELeeLgymp3qDnH%2B7BX6HVMHOpgh5CG57BfAWEjJJ9JfGLP%2BEBdbuiJt%2B%2F9KCt1%2F1w0XT16RkhRLBGFF7nt5wSTiy7A7%2BVtzRGqeAVCXRhD1YoPickvcTMI5EshG2EsU0u1fuv1%2FLEbh4kjS4Cm4uiMGDSlH0pJiz7pIkG4gDWDCID90B1zxf0KtOyNaDcYl%2Ft1y%2BdiiMsilGeLirKwcG1nL%2FEg0hassf09lrY2QIcrbtveyhxovl%2BV0D%2FKzSc4npGT%2FCDlvoeg32hg9zNp8HvOfv1VbwWJUhQczA3Xxa4%2BXX7o93%2FpP7vvOv3yERL6gJ1FUx1ncR8CrlbEAgFflqgZ88z0QKHZ8WWAoBwYJmVv0NggLdpqgcskM4lBWLzIGnivj8OpM2J4DrCndCewfnFM1yPCbhqbOSYJKx97uUyMnyBVqPcYFMfvI%2B0dNI8McDHy1AD6N53hZMu028YE2%2Bagalwt%2FB9CLHJOrgKl3RE%2Fy387W%2FNxi4%2Bw79D2ZfVyYraVqzlID9KFmFLNhKVrJl%2Ff4w0%2F9CMJf1y8kGOqUBh7sBMgUCD5oLMGXxCfE%2B0BfiKw%2BLw%2BPzs5eVW1f3u%2Fopog7ztDCmzizYLudxDsqiBYCI4dFKco21B1PzL5JbLUa4vCPpSStUKthLBKxHv1VDo2ckoY0c6WojBWl1EFN5yAzUmrTA797JewiOlgUQTJ5KHsKCBIHC%2FZln1%2BXyZmFqwxavtHRBuK5cK1puGAX3C%2BN1H1k%2F7tRFO2i6eGAH8RxVlFGw&X-Amz-Signature=b42fc078bb4dc324873f6e5472b1a46d0788ebf43cc30014cd97a110bcf5d163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVABABC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmIzncAFpmv2IeHvsjNvly1ueh8wxDif0VZSB0f5dE%2FAiEA7tJqpS37S2cBasV7Fiusry2FYxPBuFQRkLjl%2BtYNkNsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAO9BeWXgXr1BbX8UyrcA4bU5Oi4yZCq1PkxSJQe0vLLKSwclwMBQuToQNWo4pBR5XG4IYxJ1kgrHB3nF0noQ5b22aVCZKF%2BfZaespvF2qHe9CJvVyjtELeeLgymp3qDnH%2B7BX6HVMHOpgh5CG57BfAWEjJJ9JfGLP%2BEBdbuiJt%2B%2F9KCt1%2F1w0XT16RkhRLBGFF7nt5wSTiy7A7%2BVtzRGqeAVCXRhD1YoPickvcTMI5EshG2EsU0u1fuv1%2FLEbh4kjS4Cm4uiMGDSlH0pJiz7pIkG4gDWDCID90B1zxf0KtOyNaDcYl%2Ft1y%2BdiiMsilGeLirKwcG1nL%2FEg0hassf09lrY2QIcrbtveyhxovl%2BV0D%2FKzSc4npGT%2FCDlvoeg32hg9zNp8HvOfv1VbwWJUhQczA3Xxa4%2BXX7o93%2FpP7vvOv3yERL6gJ1FUx1ncR8CrlbEAgFflqgZ88z0QKHZ8WWAoBwYJmVv0NggLdpqgcskM4lBWLzIGnivj8OpM2J4DrCndCewfnFM1yPCbhqbOSYJKx97uUyMnyBVqPcYFMfvI%2B0dNI8McDHy1AD6N53hZMu028YE2%2Bagalwt%2FB9CLHJOrgKl3RE%2Fy387W%2FNxi4%2Bw79D2ZfVyYraVqzlID9KFmFLNhKVrJl%2Ff4w0%2F9CMJf1y8kGOqUBh7sBMgUCD5oLMGXxCfE%2B0BfiKw%2BLw%2BPzs5eVW1f3u%2Fopog7ztDCmzizYLudxDsqiBYCI4dFKco21B1PzL5JbLUa4vCPpSStUKthLBKxHv1VDo2ckoY0c6WojBWl1EFN5yAzUmrTA797JewiOlgUQTJ5KHsKCBIHC%2FZln1%2BXyZmFqwxavtHRBuK5cK1puGAX3C%2BN1H1k%2F7tRFO2i6eGAH8RxVlFGw&X-Amz-Signature=57bf69fcc3404f141c5f0401873e27132e3d1eb017924bba512fab5728f32f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
