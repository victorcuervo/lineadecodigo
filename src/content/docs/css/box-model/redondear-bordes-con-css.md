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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBPL6UY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnaTZO6SsCmZzLr6PNMSAAeedRYf8rznL3adT8bhKPwIgU5WQ3sSQLKuuLt1MiQX47kRk198qPECTn0fh19H%2B9vgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1uHwBat4gXgQ%2BSDircA8zqYqqS0gWAUKI7Z1yfQvBoJbqAXP0q7lPgU8FXbOCgydUThdW%2FDS%2BRIDSxhJybqdAWUC%2FTfPHrrpiAabDt8%2FjbdimWBgi%2FEaUTp70gKHBN77f4TrhaczAzLHjxEAHwZ3WesBdrbsbF1DzeUWmH7DtsVruTXnQXY2GnC47jWRDIgC0XVbOVDmDt8HE3Y70wJIU5vwobwcNwbXHISkiOlfQXW0yLyERCaYsaxYyhaWMZyCBygmua0IktQoetRX1SnJqKdXuJRxHcniU7v9wvmJxziImTaA7%2BthKoRuilUDUY2rX%2BdzU3M7VXDfKBMj8FsPWQgFfWL%2BiLjXm1V0xcgeVQi1rIYo7aSF%2F%2FTI3igYLTALJCPW9AXMPLmF%2BlDVwdE5gVzb4qboiY9Vbb%2BecivmdQse%2BZBsMZjC4eWGLKyyhPr%2BmhHYs78kbll7unnCToq48QXi8ySm5L51L1I4H9s2VAxzniOxSp%2B4Lrqp%2BPjDImpbL1IHw5Bm8%2B3ia2NJRdJCGs9ehTal6o6aGmMLPvoSdksZxVVt07NzJg%2FTS1McLB1CpCDaJdtLNLTA1v40gjC71Bzl68nToqsoV3XCJdrNasm6pyYf%2BANkCxEG2KcCEHunkiwUEkMegaNwNcMO2Bi8oGOqUB1JB5HtT%2B%2BCFobHpUPB517CXBv1x2wN9q41vxc5xt3yDK9AIowuZoSTjxaW1R2hzz1K3iQf35iby8ywIizmTfwmLoIOD2JF8eJI6tKqXBCkWIVaHFAY3S0IJzO2%2BnIhtkT17mDSanUA7mY2XoYoRxP9eOpV%2FICrKBEYHDAVQCkvyAVr%2F8%2BxxUy8SzvW4s8764kf5wh%2Bk0tKfdRcIdYWN9VQ5AbXBa&X-Amz-Signature=dfb6d776c3723b2f7304e4c5ffca9385045a402a6b6cedd9c9d18e762ba2eae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBPL6UY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjnaTZO6SsCmZzLr6PNMSAAeedRYf8rznL3adT8bhKPwIgU5WQ3sSQLKuuLt1MiQX47kRk198qPECTn0fh19H%2B9vgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1uHwBat4gXgQ%2BSDircA8zqYqqS0gWAUKI7Z1yfQvBoJbqAXP0q7lPgU8FXbOCgydUThdW%2FDS%2BRIDSxhJybqdAWUC%2FTfPHrrpiAabDt8%2FjbdimWBgi%2FEaUTp70gKHBN77f4TrhaczAzLHjxEAHwZ3WesBdrbsbF1DzeUWmH7DtsVruTXnQXY2GnC47jWRDIgC0XVbOVDmDt8HE3Y70wJIU5vwobwcNwbXHISkiOlfQXW0yLyERCaYsaxYyhaWMZyCBygmua0IktQoetRX1SnJqKdXuJRxHcniU7v9wvmJxziImTaA7%2BthKoRuilUDUY2rX%2BdzU3M7VXDfKBMj8FsPWQgFfWL%2BiLjXm1V0xcgeVQi1rIYo7aSF%2F%2FTI3igYLTALJCPW9AXMPLmF%2BlDVwdE5gVzb4qboiY9Vbb%2BecivmdQse%2BZBsMZjC4eWGLKyyhPr%2BmhHYs78kbll7unnCToq48QXi8ySm5L51L1I4H9s2VAxzniOxSp%2B4Lrqp%2BPjDImpbL1IHw5Bm8%2B3ia2NJRdJCGs9ehTal6o6aGmMLPvoSdksZxVVt07NzJg%2FTS1McLB1CpCDaJdtLNLTA1v40gjC71Bzl68nToqsoV3XCJdrNasm6pyYf%2BANkCxEG2KcCEHunkiwUEkMegaNwNcMO2Bi8oGOqUB1JB5HtT%2B%2BCFobHpUPB517CXBv1x2wN9q41vxc5xt3yDK9AIowuZoSTjxaW1R2hzz1K3iQf35iby8ywIizmTfwmLoIOD2JF8eJI6tKqXBCkWIVaHFAY3S0IJzO2%2BnIhtkT17mDSanUA7mY2XoYoRxP9eOpV%2FICrKBEYHDAVQCkvyAVr%2F8%2BxxUy8SzvW4s8764kf5wh%2Bk0tKfdRcIdYWN9VQ5AbXBa&X-Amz-Signature=9dd541dd2adfe4fe7f92ccbfa7cf50f6846867a109ddbd4b6dc1fd6baf55b6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
