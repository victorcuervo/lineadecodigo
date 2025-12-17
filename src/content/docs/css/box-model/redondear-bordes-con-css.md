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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXDU3DZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDabZ%2FYEXqlUs5%2F1wmuhZDO16o3QTjcN2YGsWZFtM6fjAiBSj0wTDwXyabwr8bK2p2%2F3x0gD%2B1mRzUEXBG9uk4CARSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMSXxBpDsDXNzdTVeGKtwDHaKUeeOYE%2B3oFnYCrY4X1MQ1GCQvfWTz4EizMl5uoGPmUsplMV4mwR5WmpvWoUQPuNakYg3apAfYzLH4sxbrCRiL2K9USUwGdMDCcMATtf1S0W5izJ6Mm094Jfz7cLVQyVR2BLsENGPGCyPlH%2FcLiaJb0f0aRZ3vADJqgglWQvx5vQPun%2BHgKaVH08jYjRJJQstevkS8o4OPfWCY5HJqG4Gmf%2FY0P1KRsA4tcCYlvKVJWvqnXtVt2F4ta12t32e6p%2FFSe%2B2aRE9eCUp2t3M81I7OyE%2BuxARj7XcwM%2FLw1cW2WCnVKmW6H8svrlp8nQ2jpyKThgvEyYbLkjuw8E412%2F9Yw3mquaEhFSkEDs6SUamBSRGTDUUD7LQ88el2Pbeen5Zx2ABXECPhe%2B%2BT6x3BwXF9ryNnWmPlk8dMj13xUD1fkVT%2Bk8e3sPQApNtf8v0VvzvW9Vmnvu6gjegjqW4saFRQd5xeTi37SmBsywiRqj17x9kB38sh4s1Tq%2B6GLRQdnc0aJlZP24HQbr2J8zSZCY8GnEImVvLEE8jvm%2FKql21zv0%2BQmGXiFydVuHjlofsk8bjhZoaX3n0T1B2%2F01o9IVEiV10sE0sbrRjhAvB2vJOgffJxsOeWruibxZkwyY6KygY6pgHIyFLgvgac7ZCBnPd2MtVykuqyBxBYXf3Mtf5mlVXxhf%2BrFgME7%2FtUa4OPaRzHCEYcZLdIaAj%2BbyKyLCTDyxvrMHZAG6r3lVLCcX9%2BOHR2E60K9DyAaP9bxEO4eJrXpoxxSdKHRJahdOiwfFrAqOE4sT3yjRDKzO2%2BXBnFRXAiIXEPtx1ILIfRKkoD5tAcr5dAY5T8U%2FRrsY1emik%2B74z67xJGSZEk&X-Amz-Signature=95776888d9af1616d9a2a29f70d7acc0524e61d001078a0748db2688cd4dcd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXDU3DZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDabZ%2FYEXqlUs5%2F1wmuhZDO16o3QTjcN2YGsWZFtM6fjAiBSj0wTDwXyabwr8bK2p2%2F3x0gD%2B1mRzUEXBG9uk4CARSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMSXxBpDsDXNzdTVeGKtwDHaKUeeOYE%2B3oFnYCrY4X1MQ1GCQvfWTz4EizMl5uoGPmUsplMV4mwR5WmpvWoUQPuNakYg3apAfYzLH4sxbrCRiL2K9USUwGdMDCcMATtf1S0W5izJ6Mm094Jfz7cLVQyVR2BLsENGPGCyPlH%2FcLiaJb0f0aRZ3vADJqgglWQvx5vQPun%2BHgKaVH08jYjRJJQstevkS8o4OPfWCY5HJqG4Gmf%2FY0P1KRsA4tcCYlvKVJWvqnXtVt2F4ta12t32e6p%2FFSe%2B2aRE9eCUp2t3M81I7OyE%2BuxARj7XcwM%2FLw1cW2WCnVKmW6H8svrlp8nQ2jpyKThgvEyYbLkjuw8E412%2F9Yw3mquaEhFSkEDs6SUamBSRGTDUUD7LQ88el2Pbeen5Zx2ABXECPhe%2B%2BT6x3BwXF9ryNnWmPlk8dMj13xUD1fkVT%2Bk8e3sPQApNtf8v0VvzvW9Vmnvu6gjegjqW4saFRQd5xeTi37SmBsywiRqj17x9kB38sh4s1Tq%2B6GLRQdnc0aJlZP24HQbr2J8zSZCY8GnEImVvLEE8jvm%2FKql21zv0%2BQmGXiFydVuHjlofsk8bjhZoaX3n0T1B2%2F01o9IVEiV10sE0sbrRjhAvB2vJOgffJxsOeWruibxZkwyY6KygY6pgHIyFLgvgac7ZCBnPd2MtVykuqyBxBYXf3Mtf5mlVXxhf%2BrFgME7%2FtUa4OPaRzHCEYcZLdIaAj%2BbyKyLCTDyxvrMHZAG6r3lVLCcX9%2BOHR2E60K9DyAaP9bxEO4eJrXpoxxSdKHRJahdOiwfFrAqOE4sT3yjRDKzO2%2BXBnFRXAiIXEPtx1ILIfRKkoD5tAcr5dAY5T8U%2FRrsY1emik%2B74z67xJGSZEk&X-Amz-Signature=bfe73285c438735afd5f05e0982b2dea89a8b8e523c678cc3c31abd535f3295f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
