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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2ACZUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPYfDVZQ4RkjoY3JdNv1qIuyWl7Y2fwLqgejf2YeGqkAiEAyKSkG4xWpoAaiMBSwCx2V2M9H3n%2B4Fv4Vf%2B0HJit64Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAdCvWdJpGuT%2FacTsSrcA3CkLt7rr1GlEmBkNnj2G%2FGFn6rD4nzUIiL0jAJcTtj5%2BipPcsANMo%2FXoyTMn7%2BUX3arSjZis5iDK07Oz0d3qw0feMgNZEQSA4cGN0Vas6eAzI6sHni8izVVI75xZ55ZpFY0ooNchNTpAJPaRe%2Fwayh7P0ddpCpfX%2BY2BnmZcDK%2BlSWmaqfNNVOlYN1DhnDUISQg76ySgO2l6hGDFyYtlkOkbQNjXgf4ZnBN9x6OwNl%2BiO6vUkhy%2B2BBmwH0y6XvdVxdVH84UMjIYwuqHD%2F9BSVnKGggvHy3smaMHTN9cb8V6Md5GKSrt26DfwVVlchSG3mMaAB1Nv8phbhAG2s0ZHYne945RiDG8TCYVKopcN4u13PlJYrhEeGZmlwIOsYq5%2FndMya6tT%2FjT5COrSo%2BIlnR6tRMSS8JA6EkUW82iMYRNt8Br0pBbIZ8kZ7vbHuGwi7vRJ5bvM%2B%2B9Me483%2F3vTHA93wB2ZY79O8mdQvLzRfefNr40TO2V4VxbpXUmrT%2BsilqXEq6oIcd6AZz2TReCHeJXp9mvRIXcOYF7WOCWdPM5JLH%2Flq9A2vxQffxLeZ4pzezE6OtxgmFkq8aqh5A%2FIAPaL007ZaitG%2Bg1kIM1EED7aPbJD2FbD3Uq%2BvAMObFisoGOqUBvCqhWlye80gLjqRyybIZj6LnDnKOhx8YOQdPDuQlzF4h5Vlrk%2Bu9mx1vgkPHjV031mq4w4dqt%2Fdel3lDgl%2BgEUqiXYWJRvztgVLnz03%2FbozYW5i%2FGkxtH7MwE52%2B%2BJUzG4KwacCBfBQ9nwoh3FnK4DkApPV7edcaG4bRSfSMD9wM5trr9GOqbbtmq%2FTN4%2FL0DgGCV81pdiXs%2F%2BxaULZeuGJd5WHK&X-Amz-Signature=9146adf0a3954ba0ad58f7faefa4b71445704b728af4c9548f690c6f419b1889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2ACZUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPYfDVZQ4RkjoY3JdNv1qIuyWl7Y2fwLqgejf2YeGqkAiEAyKSkG4xWpoAaiMBSwCx2V2M9H3n%2B4Fv4Vf%2B0HJit64Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAdCvWdJpGuT%2FacTsSrcA3CkLt7rr1GlEmBkNnj2G%2FGFn6rD4nzUIiL0jAJcTtj5%2BipPcsANMo%2FXoyTMn7%2BUX3arSjZis5iDK07Oz0d3qw0feMgNZEQSA4cGN0Vas6eAzI6sHni8izVVI75xZ55ZpFY0ooNchNTpAJPaRe%2Fwayh7P0ddpCpfX%2BY2BnmZcDK%2BlSWmaqfNNVOlYN1DhnDUISQg76ySgO2l6hGDFyYtlkOkbQNjXgf4ZnBN9x6OwNl%2BiO6vUkhy%2B2BBmwH0y6XvdVxdVH84UMjIYwuqHD%2F9BSVnKGggvHy3smaMHTN9cb8V6Md5GKSrt26DfwVVlchSG3mMaAB1Nv8phbhAG2s0ZHYne945RiDG8TCYVKopcN4u13PlJYrhEeGZmlwIOsYq5%2FndMya6tT%2FjT5COrSo%2BIlnR6tRMSS8JA6EkUW82iMYRNt8Br0pBbIZ8kZ7vbHuGwi7vRJ5bvM%2B%2B9Me483%2F3vTHA93wB2ZY79O8mdQvLzRfefNr40TO2V4VxbpXUmrT%2BsilqXEq6oIcd6AZz2TReCHeJXp9mvRIXcOYF7WOCWdPM5JLH%2Flq9A2vxQffxLeZ4pzezE6OtxgmFkq8aqh5A%2FIAPaL007ZaitG%2Bg1kIM1EED7aPbJD2FbD3Uq%2BvAMObFisoGOqUBvCqhWlye80gLjqRyybIZj6LnDnKOhx8YOQdPDuQlzF4h5Vlrk%2Bu9mx1vgkPHjV031mq4w4dqt%2Fdel3lDgl%2BgEUqiXYWJRvztgVLnz03%2FbozYW5i%2FGkxtH7MwE52%2B%2BJUzG4KwacCBfBQ9nwoh3FnK4DkApPV7edcaG4bRSfSMD9wM5trr9GOqbbtmq%2FTN4%2FL0DgGCV81pdiXs%2F%2BxaULZeuGJd5WHK&X-Amz-Signature=e46c2e8dcc3047e6cdeb414a6a191f1809a0bf727725687fdc4b951ed3e7f815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
