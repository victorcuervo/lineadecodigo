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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3USGPQH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOppfLUGf1LXJ9AqFFQEOz6bAXEo%2F3AM0gXyDhGnFO8QIhALLVFsjbttBHwuWqm8qC7LPA3%2BMFvhIhnN60GtKy%2BxvlKv8DCH8QABoMNjM3NDIzMTgzODA1IgyzgUrqSAb%2BgmidYNoq3AMwpBfdFXwRh4eOJWR90VxSb5GYproWX%2F6ld03dGvuQEZJnAMcXOy5UGyxelg9CYMALbfDIBfwHJKYLC88UHEGDxORSPqZdCmAlWT3n2RirnbAYJ5HEljlmHZCwj4MrVj3y51DT1FJ1NMBOUWIDi%2ByInsbw36e1IVR5UyrNQkWhrSdh%2FXXwP%2FWEZvSaX6pNTYFZ0cFyrrEj2BOhnwY%2BM%2FbmUPNLz269uU9FSGb%2BvGKfIupFFF7ixHWjSQyDRK5D%2BtaWS1y7c%2B%2BUmHPQihjVfY%2Bgm2vzG0reYg3fsCvWnr8G5W5xl6NgHB40hepkArmj%2FsdLKHqKldRsgVMi13IskGk5dbZfnjUbmFe%2FluOcDm0nZfmeIJF1Q3I7cyLIEZ7QIjBKEAaIj%2Bbif4uuzQ9hzDQ1G5VkVanhLW661LAGRfB4I2w76rOXTtLOEPOcDc1ab6oWUYjHl3uas%2FDhKbg72T8IXDP55wHQvdT2cZ2DMvFzEg6gQwNA%2FtmY33HctrfjKCOPWwTR4%2Bv0CXVKxpFTLNfnXLXHPFvVVXJCSjrsZ2WkEyl%2BQK%2BchSBYZlBr4oyCm23tLtAI%2FeTfTNNMtx5fwdx%2B76oPGI%2BAEhuu0rWGgBaHyyu819Ld%2FLgzMC%2FCOjDI4YrKBjqkAT%2BSY0digtdLetnCEggpcfJ6JM6jcW1G6qkV78qjleZ%2Fk63U6vD%2FaRgdlhBLP7cAnnzr4goTD8Fnayw1374T9LhMC%2BCOSp105FM8gYKvu3mAfemyUg5xiR3WCqA04Hm74LvOidAVLhMd2swAep38jNiOL%2B4Y%2FIb7icq6AwrAkXYgs8myhdGHfuFouzK7WD7fGRmc4xsUgFoYUu65XNikr4asUFRP&X-Amz-Signature=10a91f63cde86ee5d1d5bc5bac33c9c6e10dcf2e52c53c6962caefbaa4632b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3USGPQH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOppfLUGf1LXJ9AqFFQEOz6bAXEo%2F3AM0gXyDhGnFO8QIhALLVFsjbttBHwuWqm8qC7LPA3%2BMFvhIhnN60GtKy%2BxvlKv8DCH8QABoMNjM3NDIzMTgzODA1IgyzgUrqSAb%2BgmidYNoq3AMwpBfdFXwRh4eOJWR90VxSb5GYproWX%2F6ld03dGvuQEZJnAMcXOy5UGyxelg9CYMALbfDIBfwHJKYLC88UHEGDxORSPqZdCmAlWT3n2RirnbAYJ5HEljlmHZCwj4MrVj3y51DT1FJ1NMBOUWIDi%2ByInsbw36e1IVR5UyrNQkWhrSdh%2FXXwP%2FWEZvSaX6pNTYFZ0cFyrrEj2BOhnwY%2BM%2FbmUPNLz269uU9FSGb%2BvGKfIupFFF7ixHWjSQyDRK5D%2BtaWS1y7c%2B%2BUmHPQihjVfY%2Bgm2vzG0reYg3fsCvWnr8G5W5xl6NgHB40hepkArmj%2FsdLKHqKldRsgVMi13IskGk5dbZfnjUbmFe%2FluOcDm0nZfmeIJF1Q3I7cyLIEZ7QIjBKEAaIj%2Bbif4uuzQ9hzDQ1G5VkVanhLW661LAGRfB4I2w76rOXTtLOEPOcDc1ab6oWUYjHl3uas%2FDhKbg72T8IXDP55wHQvdT2cZ2DMvFzEg6gQwNA%2FtmY33HctrfjKCOPWwTR4%2Bv0CXVKxpFTLNfnXLXHPFvVVXJCSjrsZ2WkEyl%2BQK%2BchSBYZlBr4oyCm23tLtAI%2FeTfTNNMtx5fwdx%2B76oPGI%2BAEhuu0rWGgBaHyyu819Ld%2FLgzMC%2FCOjDI4YrKBjqkAT%2BSY0digtdLetnCEggpcfJ6JM6jcW1G6qkV78qjleZ%2Fk63U6vD%2FaRgdlhBLP7cAnnzr4goTD8Fnayw1374T9LhMC%2BCOSp105FM8gYKvu3mAfemyUg5xiR3WCqA04Hm74LvOidAVLhMd2swAep38jNiOL%2B4Y%2FIb7icq6AwrAkXYgs8myhdGHfuFouzK7WD7fGRmc4xsUgFoYUu65XNikr4asUFRP&X-Amz-Signature=08faac26e8a46c81584db6c59cdc4defc5f4d8f0f4440a0a66990b5b19826c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
