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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5R2FOT6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICA493OKyRBQgadiRCmlIvtFMkM0Gi4AQFKAQG2h8YhWAiEAvbuwNHww5pEIvRNKKo1UjMP0FYwALfMhWG2OkpxcEEwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIedKdrJPD1XzKy40yrcAwFU1scWhaG2XCmqCjuh4%2BBILS%2BxvcDEKmRLvCHW8rUszV5KE6PVGVgHs2PYwUv4dOqN29c9J%2BBnckzVR579sqeE1MyXyDY1FVoUV8Ra%2BFwlrkEIdP3%2Fe%2F38fSQySwAPcEYrJaRBHPEtDFXBmdwq7%2FFMzO440jPgt1brsoQ1fDUuteDV%2FJHJv6DVh5jZvtJVhUi9eGJf2GvYSHKLX9vC5%2B5STrvkRq4%2BIuGbXwSxlV%2B5NeUMK%2F3bcfp%2BGB5CdzWZa46PNyeggObttJ2ehslpbS0IQM9007G1FvGPRNIkGt8%2BpTcTxdn75TMl4ee5J7yI4kP1qPzgUvU%2BF2tJo%2FDS3lAmqTur%2BvhJW%2FEc8t8uzHD1n3r2uQFdwC0QIAQalcJiC7h4HDjRYe82nv3wHM2eVO3Rd2fiWCOCwRK2bVetz4I%2F9xHJ8EtzIoIVQDJlc1UM7JLb0OYPo%2BZW0lFvBPwwwlubNTA6CpNVrOrAyBcliGBhVsM6EvZ1pJKJ%2B%2BlV2%2FcoCTrnDh2sDcUYqtTbDcH1BTDNw5Ox%2BpAfDr303OKflI%2FwPl%2BCg2eQJUvOHDRb3YQbo3bIWiac8COg%2BUHrtHSPYGyBCirSx2PJk%2Bo4BAkIjM9HHkWws47B0g9IM0%2BlMIzUw8kGOqUBRGwqKglFLtyD8nnFe2xlnlTU%2B82%2BHV4%2FTQS%2BC72SI3kdz0xupryfVyHz5OAe6uxm7Fnu6lx5flr5VLxwGS%2FMnv6j8oZZEbmSP2cFu8h9mYrknqIv7W3KsmMf9em4bKCByOepg1eLmd5qoTtGoW1wHN4x%2B9D%2BOl4SwHlw%2FTcsggyGQxbdAmYGPyx2KjGX2lIbH1Eg0QbmltGeI9q0XIEJjg8uxOLP&X-Amz-Signature=cf12367166a610496524fc287a819bac53de34c296c20e6e4720092c50dfddbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5R2FOT6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICA493OKyRBQgadiRCmlIvtFMkM0Gi4AQFKAQG2h8YhWAiEAvbuwNHww5pEIvRNKKo1UjMP0FYwALfMhWG2OkpxcEEwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIedKdrJPD1XzKy40yrcAwFU1scWhaG2XCmqCjuh4%2BBILS%2BxvcDEKmRLvCHW8rUszV5KE6PVGVgHs2PYwUv4dOqN29c9J%2BBnckzVR579sqeE1MyXyDY1FVoUV8Ra%2BFwlrkEIdP3%2Fe%2F38fSQySwAPcEYrJaRBHPEtDFXBmdwq7%2FFMzO440jPgt1brsoQ1fDUuteDV%2FJHJv6DVh5jZvtJVhUi9eGJf2GvYSHKLX9vC5%2B5STrvkRq4%2BIuGbXwSxlV%2B5NeUMK%2F3bcfp%2BGB5CdzWZa46PNyeggObttJ2ehslpbS0IQM9007G1FvGPRNIkGt8%2BpTcTxdn75TMl4ee5J7yI4kP1qPzgUvU%2BF2tJo%2FDS3lAmqTur%2BvhJW%2FEc8t8uzHD1n3r2uQFdwC0QIAQalcJiC7h4HDjRYe82nv3wHM2eVO3Rd2fiWCOCwRK2bVetz4I%2F9xHJ8EtzIoIVQDJlc1UM7JLb0OYPo%2BZW0lFvBPwwwlubNTA6CpNVrOrAyBcliGBhVsM6EvZ1pJKJ%2B%2BlV2%2FcoCTrnDh2sDcUYqtTbDcH1BTDNw5Ox%2BpAfDr303OKflI%2FwPl%2BCg2eQJUvOHDRb3YQbo3bIWiac8COg%2BUHrtHSPYGyBCirSx2PJk%2Bo4BAkIjM9HHkWws47B0g9IM0%2BlMIzUw8kGOqUBRGwqKglFLtyD8nnFe2xlnlTU%2B82%2BHV4%2FTQS%2BC72SI3kdz0xupryfVyHz5OAe6uxm7Fnu6lx5flr5VLxwGS%2FMnv6j8oZZEbmSP2cFu8h9mYrknqIv7W3KsmMf9em4bKCByOepg1eLmd5qoTtGoW1wHN4x%2B9D%2BOl4SwHlw%2FTcsggyGQxbdAmYGPyx2KjGX2lIbH1Eg0QbmltGeI9q0XIEJjg8uxOLP&X-Amz-Signature=d22d260ccbd884f6bc07570f789f23381dda7141da42544450c580fee5bde5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
