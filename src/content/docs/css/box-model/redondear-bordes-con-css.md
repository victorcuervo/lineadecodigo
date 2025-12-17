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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64RUT7N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNzuMRj5A%2Bu6lsQs5PI%2BLXTI9ZBxT5OGFoQhaFO%2F6FdAIhAIadjW6eKLkWmF6jrQkW15Z%2B%2FuTdlWxVRHiJm%2BldbEDxKv8DCHIQABoMNjM3NDIzMTgzODA1IgyZISIE2NbKLdVEIrcq3AOQ6HeIglOLzya83Zw4kYx%2F1E0cgPwdyTWDTPBZwAZxjSjXjh3lKXOMAuQX04imwC2B8iMcWqvGx1XNTa1HNbzcwuDc9nttkuiUpeacuzM1SbW8o4H2XBSW%2BUxQe9W8OYPvK3mviGtN1Xf4D7OG3o6zFZ5Tzeo52hcrO89X3Y24j4%2FWBlZPl2SPVo0RnvmYVNqUsJxobREOSjZqNPnZJ5tmNmK0Cf21g5uAFX%2FJxPTY3k7cbA0YK5sBkG5NeO%2FIhMmtcHYCfvbxm1moppRTB2XmvPO6Cpy2FLv494vqJ%2BhMhqlQEFh9Op48D3CNnNuzezatYlDOgGOlP2Hrqmw%2FYhXFsHA15ONNkWUvQrO8I91LPyOtqXeX%2BbBcvUA7zZedGieVJGf9iQG9pmh5hZGWPSp%2B6KVUfMN%2FXK64bmnQ%2BkzsVaWg9aRwSVGNcq%2BW%2BHVn7wIlkekqgdubS1f3hQUrUzVOmthRVDMcWCcGFhUQNAOc5cWZ%2FM0SlQDCx2NsRSTx15uFnTIGhPMc2WSG%2FzqtoQxfNfNukK8arMJiGVR%2B6rnJrtded3vKk2pczyVwwjIplxzilSjRb2K4K1cq0S4C%2B2y5VEJAxxFb%2BsK6cxusiGZ46Uh0g0ui3rPQCkfDYzCi%2B4fKBjqkAb%2FMYgJLKfnMdYVLqAvfhDQq1Ys6hxuy2rw%2FmAoZEpznctq5F5KgtAqQVEclH5SuDwi4erNm4A1eD7PlE1c3w3V4%2B7U6ptQ1ez1DKYt4Sq1arUVgSRAXC3aSalLao9NYASjjZ%2FA54AaVbf64RjcXYBo9egA0sB4FZVUx3XdXvtLIA3%2Bz%2Bu%2BLNqG6pMsTNiINv2qD3FP%2Fhu1S%2F%2FIYgmnnZ6k1jBkl&X-Amz-Signature=a3bfac09930f50311b59cd6b8c5fd4052bdcf7156ed86c8979632f7d4f9078d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64RUT7N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNzuMRj5A%2Bu6lsQs5PI%2BLXTI9ZBxT5OGFoQhaFO%2F6FdAIhAIadjW6eKLkWmF6jrQkW15Z%2B%2FuTdlWxVRHiJm%2BldbEDxKv8DCHIQABoMNjM3NDIzMTgzODA1IgyZISIE2NbKLdVEIrcq3AOQ6HeIglOLzya83Zw4kYx%2F1E0cgPwdyTWDTPBZwAZxjSjXjh3lKXOMAuQX04imwC2B8iMcWqvGx1XNTa1HNbzcwuDc9nttkuiUpeacuzM1SbW8o4H2XBSW%2BUxQe9W8OYPvK3mviGtN1Xf4D7OG3o6zFZ5Tzeo52hcrO89X3Y24j4%2FWBlZPl2SPVo0RnvmYVNqUsJxobREOSjZqNPnZJ5tmNmK0Cf21g5uAFX%2FJxPTY3k7cbA0YK5sBkG5NeO%2FIhMmtcHYCfvbxm1moppRTB2XmvPO6Cpy2FLv494vqJ%2BhMhqlQEFh9Op48D3CNnNuzezatYlDOgGOlP2Hrqmw%2FYhXFsHA15ONNkWUvQrO8I91LPyOtqXeX%2BbBcvUA7zZedGieVJGf9iQG9pmh5hZGWPSp%2B6KVUfMN%2FXK64bmnQ%2BkzsVaWg9aRwSVGNcq%2BW%2BHVn7wIlkekqgdubS1f3hQUrUzVOmthRVDMcWCcGFhUQNAOc5cWZ%2FM0SlQDCx2NsRSTx15uFnTIGhPMc2WSG%2FzqtoQxfNfNukK8arMJiGVR%2B6rnJrtded3vKk2pczyVwwjIplxzilSjRb2K4K1cq0S4C%2B2y5VEJAxxFb%2BsK6cxusiGZ46Uh0g0ui3rPQCkfDYzCi%2B4fKBjqkAb%2FMYgJLKfnMdYVLqAvfhDQq1Ys6hxuy2rw%2FmAoZEpznctq5F5KgtAqQVEclH5SuDwi4erNm4A1eD7PlE1c3w3V4%2B7U6ptQ1ez1DKYt4Sq1arUVgSRAXC3aSalLao9NYASjjZ%2FA54AaVbf64RjcXYBo9egA0sB4FZVUx3XdXvtLIA3%2Bz%2Bu%2BLNqG6pMsTNiINv2qD3FP%2Fhu1S%2F%2FIYgmnnZ6k1jBkl&X-Amz-Signature=befc1f8d150db28dd928911d45436976fabf396934470c4078e65a4d5b0962d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
