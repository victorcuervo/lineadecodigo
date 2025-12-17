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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIQRWDD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqMMAWZ0b1bkaVVkGmBl7fzaLuRO%2B279d1drwDtLldogIgDDDWyChBx71YZ8nAfgs%2BVlVaitQz66PC96jALASUpwcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHi%2B7CS0nG4LwpkXVyrcA3xiJ3Lg%2FetmVGqy3QDN%2FA3LQcaU1Xhl%2FYNLgXSmu05yqF66Q8hxhdJfA36D%2B93rWZqsizKMGcG2cQT3vtVsfBeIwrIsjV1fatEHtRlS0LRAd%2BBOP8wsiDhKM%2FiMYthnAIuTlW%2FOdmSJJQppwkP9KMSA%2Fqhk6TTV89CL8YWA9ON4bamlywcirLXAz4sQm3bD0KvtvaAIAGUephDetmq%2F3oA5qjyxRgKi9SKA6cUrB60gqhOz9ygpw%2B7qSsz2FGx5ud6kFACFsjHWKSCBIR%2BBCvYG6MHTpT8sFEavHo4%2B7oMm7CsMqVDl%2BgEdB3WhJoIhZH%2BmZaElmfrSmu0iAp%2FjHw4uflfiW2qotAYgp06aQOA%2Bquvs58M9pli30vvIdlMFLJvz8yEqQ0R0T8OFay%2BxEhbk7rNqGt%2FVMfAiFBFoKpdhFSMjF68%2FDIcSI0CW3D1N0BE96HYchVXjgUiQyymKNCJxCSHYPjTAp87mdHLOV3HB2gzwWLh%2FxlAX83UG76Xs5ERZRXQv0BbM9MQOKG2u207ncrqiSkGOuwdJzUJebAJFbIJlibvCk0qXu1ey2STMYU8YpshNGiW9%2B3zEki39MBJDtGLYTcZCalwdKI1xDVIKhlfwEI6ZV%2BB955x%2BMJ%2BDicoGOqUB5juR5NjLaAH7AyYIteJe0JToBDxSaV7nMyy9yssuajsdy986DGAcaaf7is9tw4vxVsxW5pcld3TsnalUdPMAyDzI4bZLutbqL6Y4NaOA2C5Rgrj5vUe20TvEtemBZVdtOQx3qnsvGHc4EXflmJaXudZpQLPgMOKWSbxDiyO0y6OqRrtroolFhnL%2F6TH07MiLAHT1sIClP21jQ%2BEucFl%2BBawWdgML&X-Amz-Signature=90b485077f61e1d5d4a1ba5de369da67fa6e507dc92a5faa259192f916768b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIQRWDD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqMMAWZ0b1bkaVVkGmBl7fzaLuRO%2B279d1drwDtLldogIgDDDWyChBx71YZ8nAfgs%2BVlVaitQz66PC96jALASUpwcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHi%2B7CS0nG4LwpkXVyrcA3xiJ3Lg%2FetmVGqy3QDN%2FA3LQcaU1Xhl%2FYNLgXSmu05yqF66Q8hxhdJfA36D%2B93rWZqsizKMGcG2cQT3vtVsfBeIwrIsjV1fatEHtRlS0LRAd%2BBOP8wsiDhKM%2FiMYthnAIuTlW%2FOdmSJJQppwkP9KMSA%2Fqhk6TTV89CL8YWA9ON4bamlywcirLXAz4sQm3bD0KvtvaAIAGUephDetmq%2F3oA5qjyxRgKi9SKA6cUrB60gqhOz9ygpw%2B7qSsz2FGx5ud6kFACFsjHWKSCBIR%2BBCvYG6MHTpT8sFEavHo4%2B7oMm7CsMqVDl%2BgEdB3WhJoIhZH%2BmZaElmfrSmu0iAp%2FjHw4uflfiW2qotAYgp06aQOA%2Bquvs58M9pli30vvIdlMFLJvz8yEqQ0R0T8OFay%2BxEhbk7rNqGt%2FVMfAiFBFoKpdhFSMjF68%2FDIcSI0CW3D1N0BE96HYchVXjgUiQyymKNCJxCSHYPjTAp87mdHLOV3HB2gzwWLh%2FxlAX83UG76Xs5ERZRXQv0BbM9MQOKG2u207ncrqiSkGOuwdJzUJebAJFbIJlibvCk0qXu1ey2STMYU8YpshNGiW9%2B3zEki39MBJDtGLYTcZCalwdKI1xDVIKhlfwEI6ZV%2BB955x%2BMJ%2BDicoGOqUB5juR5NjLaAH7AyYIteJe0JToBDxSaV7nMyy9yssuajsdy986DGAcaaf7is9tw4vxVsxW5pcld3TsnalUdPMAyDzI4bZLutbqL6Y4NaOA2C5Rgrj5vUe20TvEtemBZVdtOQx3qnsvGHc4EXflmJaXudZpQLPgMOKWSbxDiyO0y6OqRrtroolFhnL%2F6TH07MiLAHT1sIClP21jQ%2BEucFl%2BBawWdgML&X-Amz-Signature=95690dc4e8e211738af5192affa0f7f46499fd51c0e7de9d2d4af8648ed17f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
