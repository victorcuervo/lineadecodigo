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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVLKQMA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbh2rbsSHJDl4Ye1nOCQzWLovrl5vxrcuFjXOsq1%2Fh9QIhAKkIPOxDJv2Mg8JQYS9S4etcBwhQsdYe988v%2FQ8RxIqpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZBUsUntrUVPO%2Fxrgq3APqtcK2A%2BNgl0qIzKO2txCTxC9VfW8LuFb3d5swwvEeNUqd9yfTUMpoMr%2FRGzHOzJ6WHen%2F5naGytoNhzJ8r4pVcsZkFkMD%2F6q1ssbHucdEc%2BoD%2FCh%2BUk47q72Ym%2BLnq%2BhrIngWa381f3%2BjYAhrOLXsQp8vtKO9p5M4WP377v9Thy6KZH2kfpPVPh9i%2F1hS3zfLrKesoDEbLDvSie551jZT3SBW%2BWxMqF2BtSKurveQeYbwbvv%2FEDU9SHHlxwP2pHJi5RcmZb%2BteL9G9z3VIjTfU%2FHdaw7gdhRoSTlbG6GwxxwQ24LuRM5z7rTgihrzDq2JLLq7gWlBZ4qoe4HCTJkBD9Qlh6Bv8%2F0RX%2B%2FMyFs4Ga8m82nHoRQtADwNsv8t6WpxszBhO2Ii%2Fvuj55vz%2BlCW93FAyyI1w5vWyp%2FX0ZeIBsZczF8vE9rPjHbFzBor31EO%2FskB32%2F%2BcMOlSRTJY8BmgGWKjNw09qOEB3cb4aVIvpvq6jaHzp2s%2BZWtOwv1p9BJysvycmspkac9mqcwIvaJ1ZxlaJxRTvSAezyGhvzAr9Zg5%2BffYA%2BGPHfCeanMze4VRzp4t3J%2F1g68IU7rBUyD5ZBR6z%2BZx5jkjlAaeE6SL%2FSN7uDA9nurVxopvDDV%2F4rKBjqkAUGT43pwDQkPheDs9%2F33CgIH%2FZ29K7GV2YyujgFFmv%2FicWT%2FAeCM4ZtVAM6Ci5PWCAMJib%2FU1Ge7DC%2Bks7F%2Bzt7vh9QxDschJvNFWJThVNGVBxEEQmOC5YgCWauA4Ct6SwQZcn8EZb%2FYuN8JJ6iAhxtR8LeSAkrK%2FC60Y03Zbi5OIonAjmcjgaR%2BDVym%2FBtjkX0pCZ2qtOXNSrAgJJAGAc%2BwRGMn&X-Amz-Signature=af45adf788f11e320eaf46e324e683e987d3c3833fefaa6ce10240a455e6c575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVLKQMA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbh2rbsSHJDl4Ye1nOCQzWLovrl5vxrcuFjXOsq1%2Fh9QIhAKkIPOxDJv2Mg8JQYS9S4etcBwhQsdYe988v%2FQ8RxIqpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZBUsUntrUVPO%2Fxrgq3APqtcK2A%2BNgl0qIzKO2txCTxC9VfW8LuFb3d5swwvEeNUqd9yfTUMpoMr%2FRGzHOzJ6WHen%2F5naGytoNhzJ8r4pVcsZkFkMD%2F6q1ssbHucdEc%2BoD%2FCh%2BUk47q72Ym%2BLnq%2BhrIngWa381f3%2BjYAhrOLXsQp8vtKO9p5M4WP377v9Thy6KZH2kfpPVPh9i%2F1hS3zfLrKesoDEbLDvSie551jZT3SBW%2BWxMqF2BtSKurveQeYbwbvv%2FEDU9SHHlxwP2pHJi5RcmZb%2BteL9G9z3VIjTfU%2FHdaw7gdhRoSTlbG6GwxxwQ24LuRM5z7rTgihrzDq2JLLq7gWlBZ4qoe4HCTJkBD9Qlh6Bv8%2F0RX%2B%2FMyFs4Ga8m82nHoRQtADwNsv8t6WpxszBhO2Ii%2Fvuj55vz%2BlCW93FAyyI1w5vWyp%2FX0ZeIBsZczF8vE9rPjHbFzBor31EO%2FskB32%2F%2BcMOlSRTJY8BmgGWKjNw09qOEB3cb4aVIvpvq6jaHzp2s%2BZWtOwv1p9BJysvycmspkac9mqcwIvaJ1ZxlaJxRTvSAezyGhvzAr9Zg5%2BffYA%2BGPHfCeanMze4VRzp4t3J%2F1g68IU7rBUyD5ZBR6z%2BZx5jkjlAaeE6SL%2FSN7uDA9nurVxopvDDV%2F4rKBjqkAUGT43pwDQkPheDs9%2F33CgIH%2FZ29K7GV2YyujgFFmv%2FicWT%2FAeCM4ZtVAM6Ci5PWCAMJib%2FU1Ge7DC%2Bks7F%2Bzt7vh9QxDschJvNFWJThVNGVBxEEQmOC5YgCWauA4Ct6SwQZcn8EZb%2FYuN8JJ6iAhxtR8LeSAkrK%2FC60Y03Zbi5OIonAjmcjgaR%2BDVym%2FBtjkX0pCZ2qtOXNSrAgJJAGAc%2BwRGMn&X-Amz-Signature=d91c8645a680e1e2150c400f7ac2895572b5b3f71f95748b272cf01d6d83ff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
