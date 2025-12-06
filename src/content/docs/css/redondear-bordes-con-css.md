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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMD7UJS5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY5P8iAFtag4EQWCJEUv6Cn5XV1Aadw0m2kBhMp10rQIgSg96YeuioSLgELdHXWPtSNrGy5pXtsIzlkn34DQ3j%2Foq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMG2mduz%2B9E5%2Fs%2F8KyrcA2cnOpA6Tw%2FAx3ZTS9LfQ75Z7qcNgDX4HMOoGpehv0XOytUvtItFK3uwfqnyzJGqN0OP1xH2C9iJk7oq2p0JbSy7pQMfMZA8VCC%2BpOKMsTfHi7M157eMn%2FKnqYGVWp4sLwXop%2BKmPu7NwbeKufEUgC%2FdY2L2sJ6DHgb%2Fx7yeDH8W6pwQzGCLfe6jycOgyAzjIuEp2pbyQJFlGJ0tPRPk%2Fh9KHXRT%2FvDp7Fb5iyRx3pB5ChkBOoeSbvLbdUoFN7i1yUBZO%2FKnu3ouceFW9l4h71zc9bfefMOw26b5RG%2BGeXNUcZ5FSNky232IjeSX4%2FvDGimQb6dTFdlIDH93RWcM5BJHjqzcKN10cq8ePt2Mllnoe45hBO1zR7P1xr8y4JVH2rLdHGaBFHUaejYrfb08UADfu2oD1o6Xjjl82S6umdeRxDKoGvGetVJBoTKzpzV8JlqF7J2n%2F03kXWiyTT5qN83LR4UJ4P4%2BlTyILVcFHWENMVlEOoFwxaE6qgOtLxguByVMRY%2F8Gv2eq%2F1HNYEb5r%2F9zIaXmLBd%2B%2F2mVLX6%2F1Ygoi5o6rxugMj3oopwg6QNFkRUtKV3%2BkO2o1PXr%2BYRouIVlwxeocZHlYbfmmxiHkQpbIyINE7mHP%2F3KcqRMJXH0ckGOqUBXRlqCeaL6Vbp3Oua6%2FAJNb2gdn5%2B1FNe0WaIbFHHou%2FiqIyMkSdQFDIg7MBxbQ1JkW48QW8wqFl4bX8P%2FsQ5W5cRSeDXvoZAQGtoOJkeqxS%2FdqtK6mWSdaweZN0dUHE507%2F4Y1jxfLXmpW%2BeRcV9vx80quhWp2l3GVnkRCFHPCgOJlzo6tivJE%2BBsp2%2BqKR0gVU4qRY3Jy66%2FqK4INoVAYeEbQPk&X-Amz-Signature=c90a3ebea90aac8c6b5fc1ef113edcaeb2009b1b9e5129b4035384db00e6fb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMD7UJS5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY5P8iAFtag4EQWCJEUv6Cn5XV1Aadw0m2kBhMp10rQIgSg96YeuioSLgELdHXWPtSNrGy5pXtsIzlkn34DQ3j%2Foq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMG2mduz%2B9E5%2Fs%2F8KyrcA2cnOpA6Tw%2FAx3ZTS9LfQ75Z7qcNgDX4HMOoGpehv0XOytUvtItFK3uwfqnyzJGqN0OP1xH2C9iJk7oq2p0JbSy7pQMfMZA8VCC%2BpOKMsTfHi7M157eMn%2FKnqYGVWp4sLwXop%2BKmPu7NwbeKufEUgC%2FdY2L2sJ6DHgb%2Fx7yeDH8W6pwQzGCLfe6jycOgyAzjIuEp2pbyQJFlGJ0tPRPk%2Fh9KHXRT%2FvDp7Fb5iyRx3pB5ChkBOoeSbvLbdUoFN7i1yUBZO%2FKnu3ouceFW9l4h71zc9bfefMOw26b5RG%2BGeXNUcZ5FSNky232IjeSX4%2FvDGimQb6dTFdlIDH93RWcM5BJHjqzcKN10cq8ePt2Mllnoe45hBO1zR7P1xr8y4JVH2rLdHGaBFHUaejYrfb08UADfu2oD1o6Xjjl82S6umdeRxDKoGvGetVJBoTKzpzV8JlqF7J2n%2F03kXWiyTT5qN83LR4UJ4P4%2BlTyILVcFHWENMVlEOoFwxaE6qgOtLxguByVMRY%2F8Gv2eq%2F1HNYEb5r%2F9zIaXmLBd%2B%2F2mVLX6%2F1Ygoi5o6rxugMj3oopwg6QNFkRUtKV3%2BkO2o1PXr%2BYRouIVlwxeocZHlYbfmmxiHkQpbIyINE7mHP%2F3KcqRMJXH0ckGOqUBXRlqCeaL6Vbp3Oua6%2FAJNb2gdn5%2B1FNe0WaIbFHHou%2FiqIyMkSdQFDIg7MBxbQ1JkW48QW8wqFl4bX8P%2FsQ5W5cRSeDXvoZAQGtoOJkeqxS%2FdqtK6mWSdaweZN0dUHE507%2F4Y1jxfLXmpW%2BeRcV9vx80quhWp2l3GVnkRCFHPCgOJlzo6tivJE%2BBsp2%2BqKR0gVU4qRY3Jy66%2FqK4INoVAYeEbQPk&X-Amz-Signature=87e5320086720198700546e9e52cfe2b7ff818c70ca3baeccb84c428203c35ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
