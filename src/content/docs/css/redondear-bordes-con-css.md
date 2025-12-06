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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V56FPXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf9x%2FLMM0UnsawlNBY2GHtZf900wLykwz9lDwrWTK7uAIgbl7Oh2pQFF7cpNxoO8t7ponGjLRmJi9PlT00Qap7al0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC3p4iHLp5wP33UMyircA99ZcNgfHJCihtuqZp8iyle6Js6KX7jqwyeRS%2FlBX0RSQI7GQopwg2%2Fb8IGA4BNRbW6lEACfbOcygMU0Jg260VcMiPMq4NDdTf2t43P0jsY7qSPkkDa0iCeHG6rjMm%2FfXvtj2MmvxdrqbpS2i81vf9pJT2tkZ5pR0kH1JODrJ8n0RhbdbfJPGuW457g1XxSMLfMobWoehQtSF1t1JSmj%2Fkiboj4hyHy%2FqQmFMIlVxuKxchY3TozFMQ8dsuRQIlAusdFxl7Nwm2m0V2nc7UwVyvWn2q%2Btlg0Kd8euGc8EhJidj38Fn4gKXUQx0dnkj7l32E49f0CEPiFFhGmw0F%2B6p1LJj93wrJz2OH79kDYhT0gWp%2BOxKR4uyIK8DKhd0FlouAbAQLzgXWgvOHPNH3fwcviCFI6YXS9uCi3HcQfjaJHuaccysMeo1WWTHDId4IHZhtRugRsy1Z1w3HsLT4dPWHTTG9%2FkZkfJAtwwhYbP8ZlAWFTzbEsLt0c1K9k4deldeKAqdWEKQXgjEIQfjzZZGrxnK%2BM1714G3HrSEjdefE937eCJxrVnkwre3DweMQH4QEoDwEKg80LjhOErH6VtOt8rinm3e2gRbF2kKpB6EdIQA79WsrwFSl7%2BoEVUMIa20ckGOqUBMSSnOPlzHs4uZ50ueirD3SWlovcs66IPJElt69e6eIgwh%2By%2BU3qDvZer62aYt7MbF6gN3VzW%2BSFA7ogf7GglmLyqOtNr6YzDdS8urxT1sgvcznrqbbExQmdyaVHlTuc9SyQvJZSaFaNGEUaXhblzlG7DV3BCIszk1%2FwA0cDXnBk9jZPTmUXKM%2Bk3vFJIPOSNETFUCBld3LhhR2Qmlq9tiXUqHrl9&X-Amz-Signature=57bf0f6c66cbe983d108313f2a93e301c90b15f0e6c5bf250882451537d567f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V56FPXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf9x%2FLMM0UnsawlNBY2GHtZf900wLykwz9lDwrWTK7uAIgbl7Oh2pQFF7cpNxoO8t7ponGjLRmJi9PlT00Qap7al0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC3p4iHLp5wP33UMyircA99ZcNgfHJCihtuqZp8iyle6Js6KX7jqwyeRS%2FlBX0RSQI7GQopwg2%2Fb8IGA4BNRbW6lEACfbOcygMU0Jg260VcMiPMq4NDdTf2t43P0jsY7qSPkkDa0iCeHG6rjMm%2FfXvtj2MmvxdrqbpS2i81vf9pJT2tkZ5pR0kH1JODrJ8n0RhbdbfJPGuW457g1XxSMLfMobWoehQtSF1t1JSmj%2Fkiboj4hyHy%2FqQmFMIlVxuKxchY3TozFMQ8dsuRQIlAusdFxl7Nwm2m0V2nc7UwVyvWn2q%2Btlg0Kd8euGc8EhJidj38Fn4gKXUQx0dnkj7l32E49f0CEPiFFhGmw0F%2B6p1LJj93wrJz2OH79kDYhT0gWp%2BOxKR4uyIK8DKhd0FlouAbAQLzgXWgvOHPNH3fwcviCFI6YXS9uCi3HcQfjaJHuaccysMeo1WWTHDId4IHZhtRugRsy1Z1w3HsLT4dPWHTTG9%2FkZkfJAtwwhYbP8ZlAWFTzbEsLt0c1K9k4deldeKAqdWEKQXgjEIQfjzZZGrxnK%2BM1714G3HrSEjdefE937eCJxrVnkwre3DweMQH4QEoDwEKg80LjhOErH6VtOt8rinm3e2gRbF2kKpB6EdIQA79WsrwFSl7%2BoEVUMIa20ckGOqUBMSSnOPlzHs4uZ50ueirD3SWlovcs66IPJElt69e6eIgwh%2By%2BU3qDvZer62aYt7MbF6gN3VzW%2BSFA7ogf7GglmLyqOtNr6YzDdS8urxT1sgvcznrqbbExQmdyaVHlTuc9SyQvJZSaFaNGEUaXhblzlG7DV3BCIszk1%2FwA0cDXnBk9jZPTmUXKM%2Bk3vFJIPOSNETFUCBld3LhhR2Qmlq9tiXUqHrl9&X-Amz-Signature=97d49083d15c9aaed5045251d8cbbf750c5bdf401041f4db676e0e040dbb430c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
