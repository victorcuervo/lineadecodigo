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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUC4CM7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzo656HrXk5vXyUAH%2FvZANsyUbv8kfG3bqCqSgRU1xDwIgHG5%2FEABAA3yKeF6nZlKRB4El%2BZD4xGnHlMmud6LyIXAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKJd37LtW0Y0FSfgSrcA5KPqFTCeXRBT8rdZUpbS8%2FQpOY%2BziE13hBwVAdsdDqF%2B2uKLWdfiIA9f6MAcmA3BK8L15lwKOlX8Zb3ibECItIdA3l6kjJ6D3%2FFwVT%2F2EkaddIfXL6YE0JOUQGdOn7Guz85K1fc3nOAjkdKFth4z6yhrLOq1aOWkZJdCF2F%2Fu3%2FwNd5ZCOcIDKAvYH6qKoILMY9yjzL5hbqbaXtf7lnFlj5CmeMkTdvMVp%2F3rd7LiGTczhbffGJevYyiRGokiIODVBwKcQyBVabDJLF2MEeVKRH2%2FG7NlKvFinkOzvMuQrz21fhT9Mn0ci%2BPgIyYSvENlSL0pjQvAzttZlw4Djlvd2OWtMiE0GOtWTTD11qqYGXZP13erGGAlAGxFkwnbsc1NMxKyVpH2jeIK1Lvs3JfB0O7RbTatsf7bLVZVue7n9pqY%2F34E1LMgvWQ56JL%2B3hiFAnX9ll5IfcgoAe3R%2FjbgM%2Flj2EoTL5xYhQsVE94hxxucaJbvp5WKKVDa4vGCuoRvKX5x9aPq9ivwj7YZkt7Rp3Umn3WbxDdOJhjL%2F931daPyB5KPtfh2Swe1mMB5nkIoOfaP2DtUYHbS%2BNf6JIlr5a7sjMnWA8VJcBk7j9M8OYBiF1pozjtr%2FiEcXaMOSei8oGOqUB1Xfahh%2BJYcc1pL6OyrZcHGq1dYiuhbubdKGDg%2BYHKZz3QmmwKN16d%2FNHq8mORxgV33GJdfwlyKx4TIx2ct5hvjy9Geg5WCjv3yxqw%2FKkKoeOY5fdqQR0ZcSQ81sSPUmgQwYa7TAy45OPfeyfVOLdD%2FzTo2liorH0%2FTFo7CmGlLdWTLVx%2Ff9wSah4JevCtbgbSLV5iRkplxsdFdEx2IU2DpMXiOO%2F&X-Amz-Signature=1b45c5c7ae4a0999f9fd50226dd17df6d43bb8360ba5d5284e24c2799515b9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUC4CM7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzo656HrXk5vXyUAH%2FvZANsyUbv8kfG3bqCqSgRU1xDwIgHG5%2FEABAA3yKeF6nZlKRB4El%2BZD4xGnHlMmud6LyIXAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKJd37LtW0Y0FSfgSrcA5KPqFTCeXRBT8rdZUpbS8%2FQpOY%2BziE13hBwVAdsdDqF%2B2uKLWdfiIA9f6MAcmA3BK8L15lwKOlX8Zb3ibECItIdA3l6kjJ6D3%2FFwVT%2F2EkaddIfXL6YE0JOUQGdOn7Guz85K1fc3nOAjkdKFth4z6yhrLOq1aOWkZJdCF2F%2Fu3%2FwNd5ZCOcIDKAvYH6qKoILMY9yjzL5hbqbaXtf7lnFlj5CmeMkTdvMVp%2F3rd7LiGTczhbffGJevYyiRGokiIODVBwKcQyBVabDJLF2MEeVKRH2%2FG7NlKvFinkOzvMuQrz21fhT9Mn0ci%2BPgIyYSvENlSL0pjQvAzttZlw4Djlvd2OWtMiE0GOtWTTD11qqYGXZP13erGGAlAGxFkwnbsc1NMxKyVpH2jeIK1Lvs3JfB0O7RbTatsf7bLVZVue7n9pqY%2F34E1LMgvWQ56JL%2B3hiFAnX9ll5IfcgoAe3R%2FjbgM%2Flj2EoTL5xYhQsVE94hxxucaJbvp5WKKVDa4vGCuoRvKX5x9aPq9ivwj7YZkt7Rp3Umn3WbxDdOJhjL%2F931daPyB5KPtfh2Swe1mMB5nkIoOfaP2DtUYHbS%2BNf6JIlr5a7sjMnWA8VJcBk7j9M8OYBiF1pozjtr%2FiEcXaMOSei8oGOqUB1Xfahh%2BJYcc1pL6OyrZcHGq1dYiuhbubdKGDg%2BYHKZz3QmmwKN16d%2FNHq8mORxgV33GJdfwlyKx4TIx2ct5hvjy9Geg5WCjv3yxqw%2FKkKoeOY5fdqQR0ZcSQ81sSPUmgQwYa7TAy45OPfeyfVOLdD%2FzTo2liorH0%2FTFo7CmGlLdWTLVx%2Ff9wSah4JevCtbgbSLV5iRkplxsdFdEx2IU2DpMXiOO%2F&X-Amz-Signature=2cb7054cb51b276c258785bb5815df99e8eaa3619aa68c4f6e3b35d0f5ee9429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
