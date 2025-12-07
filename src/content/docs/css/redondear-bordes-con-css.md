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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXNOEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOwUhMzFDQQzkQGBL4LV%2BWPsqZAnPquSMgSC8j6yDgtAiEAh%2F1Ol0A%2BEYoRdvvCXeTncJuKddrVp07kzNSNlMzCptQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr6E%2F%2FwwbXR7sOHTircA4B6O6qtXeHz9PrLEjcuPVA6AsuKq1nLPjrBx6MK31hiDOirp%2F3wzuAHGpdlDZzTUWYmPq%2FeqIpZiAd7ys8JXFr%2F%2BgmkujthChLX6wX0h6YBdj5Rh2I1GPNJ6DP07yE%2FmiO6X0MzItS3nrpA%2BtpPv1qxqXETw0mF%2BMBxjx0U2xL9MYiJnuSvKGT3QlchffoN6bm7QLYGk8vCvYyGyDUVEGfLsXFkiJEYW%2FfMz9iaAKjqLYtAM5zzMHq8OpDuy4SCB4XadrfbCIvsEPVy35EKqxU3jc9%2F470YI1PNXPOgIpr5T9yxtMak56CgvPcZ2F%2Bf%2FsxiR9J7bdcmqZk81vOXmtPOwioFnTR5ff2tW1LO29q11zQoV0%2F33PmbKAMxUee3C4jSOJSXzlPHRML4h58jzyrsTNkvVJx5HF%2F9byYMCJavMfSz0ac%2F3U%2BSMNwKnuBLlPx891XMzoJE0k5728v6XOBNO53XNIq9lXlk6yxIzCTHLj6iwjXOSRnNVUNIOemipkhf7hzxi89FQ7t3jV40iOlQzoKjaG4%2Bun56LPayMmerN7MWO3M%2FwcIHNtW9IL%2BDgAxaf5fWBm8BjmK%2FfKVd8AVPqyplgG09tGJ8dUS6n8SiopQAePqgSa4BzSlRMLvH18kGOqUBG%2FPxrKJ%2BFFENDyuM3rp8pE0wgyxA8gARLfbU3djmyjNkdaWQYJmhKTyR%2B3kmTisu5bW6KulY5WUnPDMbVbBQM2woGg0QQrUbvUnQ0NbmMm6JMcNQ6dHoOdp6aE0R6OAXnawbRITomg6KP9JLbokVhqdlq8xdSaPPIMQGYjPUADufCd5iog3y%2B9XSlQDF0FkxytWqg7scxc6wOKdabOnkQbuCwkL3&X-Amz-Signature=66b0172f72867376ef228eaeadf2393c3b25ce2565da905f6a948b88c0b66bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BXNOEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOwUhMzFDQQzkQGBL4LV%2BWPsqZAnPquSMgSC8j6yDgtAiEAh%2F1Ol0A%2BEYoRdvvCXeTncJuKddrVp07kzNSNlMzCptQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr6E%2F%2FwwbXR7sOHTircA4B6O6qtXeHz9PrLEjcuPVA6AsuKq1nLPjrBx6MK31hiDOirp%2F3wzuAHGpdlDZzTUWYmPq%2FeqIpZiAd7ys8JXFr%2F%2BgmkujthChLX6wX0h6YBdj5Rh2I1GPNJ6DP07yE%2FmiO6X0MzItS3nrpA%2BtpPv1qxqXETw0mF%2BMBxjx0U2xL9MYiJnuSvKGT3QlchffoN6bm7QLYGk8vCvYyGyDUVEGfLsXFkiJEYW%2FfMz9iaAKjqLYtAM5zzMHq8OpDuy4SCB4XadrfbCIvsEPVy35EKqxU3jc9%2F470YI1PNXPOgIpr5T9yxtMak56CgvPcZ2F%2Bf%2FsxiR9J7bdcmqZk81vOXmtPOwioFnTR5ff2tW1LO29q11zQoV0%2F33PmbKAMxUee3C4jSOJSXzlPHRML4h58jzyrsTNkvVJx5HF%2F9byYMCJavMfSz0ac%2F3U%2BSMNwKnuBLlPx891XMzoJE0k5728v6XOBNO53XNIq9lXlk6yxIzCTHLj6iwjXOSRnNVUNIOemipkhf7hzxi89FQ7t3jV40iOlQzoKjaG4%2Bun56LPayMmerN7MWO3M%2FwcIHNtW9IL%2BDgAxaf5fWBm8BjmK%2FfKVd8AVPqyplgG09tGJ8dUS6n8SiopQAePqgSa4BzSlRMLvH18kGOqUBG%2FPxrKJ%2BFFENDyuM3rp8pE0wgyxA8gARLfbU3djmyjNkdaWQYJmhKTyR%2B3kmTisu5bW6KulY5WUnPDMbVbBQM2woGg0QQrUbvUnQ0NbmMm6JMcNQ6dHoOdp6aE0R6OAXnawbRITomg6KP9JLbokVhqdlq8xdSaPPIMQGYjPUADufCd5iog3y%2B9XSlQDF0FkxytWqg7scxc6wOKdabOnkQbuCwkL3&X-Amz-Signature=9ed44d1203bde019789d3f7eeb1022964c1ec7c6c781f2d8dce919399b868fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
