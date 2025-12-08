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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGGMFHU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYgLTjcDigKZ8wm5sR%2FxDL6amUXR0N%2BxocIDd8BWP7TgIgLHq8K0l0ccAZBFzhMMe3GopH%2BtFVAkBtquHSLUGdvCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFU2ZO%2FDppb4sce7CrcAxvtjkJ9%2BcBu4KbqWmQ7FzdBuYYdA%2By6abeRdBIw293Uf%2B0%2FgukuQQXBIypgpzxM0NOeKnuzRf9y0vWZnI20G92A31AdoG19Vz3i84KILtfGUj%2BFC5DQ6bbY5hLIl%2FNJDKRbHyev7GXVwL0ru9gKPgx9ODWbPBGReP%2BPVASWGhkgw4kwcF1EAjMGbrEBO1CTS9ii39ezAH4D%2FWKkQVJ3NB3abUGA3HRQ86gBLu%2FgTDoR6Qh5uEotCkCsKeUE9m7ISGcunu7zN7Jz24556MtFeFNXN4ee9Dd2v8hJDaeO0y%2FX8oraHhEYKuc2FRc6Meq2Nm2pHX9E%2BmbKNluBmB7A2Rh1eSmDL1r9P0GRDSUZ62r5thVWmBgY7t8S1tUx2nqeGR4Gp7VjCj%2BvKUxJFYmVT8TVMgRRtlgDNnyRi9Jv03UiD%2F7uSgiL%2FIcW103ipj%2Bd264W%2B7aAFGvdbMbFwrum0jlfoXQBZVNEMCWCYbwl0jJU%2FSz3PwQ33K1Uf6Vdp3wAeDaSvp95Z%2BirgMQn2apIhQCQUzMsO2QyKP87ahHWju3DZhwAZjZ%2BknXkLxLpcnqrkf2n6FP2VwZzkpQm%2FS%2FBcfSYsRhcKIcWlZip6En3Wwbd9xTE5J5kCrByPflXMLez3MkGOqUBbBYqrr%2Fn4r6QaMg19KaqtgBFh3VegvTJMJGvzzE4REN%2F4JwYsPMpBg0UWEDIJ%2FSG0KVyjYb1qekqhsutkhVIYzqonBTJCjd4iI7zk20X7TUbgUGNXg3FgrY7RAfQyRE3Y4Amt5Ek%2FItK%2BLupb53zrZ5IGCwc8m%2FVNsbtepHYXpqbesuCwpqXHSvqJkHSIw66txUzZX3ufZy%2FT8K%2B1%2FOFCY5%2F0MK1&X-Amz-Signature=b361b41d8a54017e7ec024c63467a2ca061310649cc237385d148025aade4af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGGMFHU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYgLTjcDigKZ8wm5sR%2FxDL6amUXR0N%2BxocIDd8BWP7TgIgLHq8K0l0ccAZBFzhMMe3GopH%2BtFVAkBtquHSLUGdvCcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFU2ZO%2FDppb4sce7CrcAxvtjkJ9%2BcBu4KbqWmQ7FzdBuYYdA%2By6abeRdBIw293Uf%2B0%2FgukuQQXBIypgpzxM0NOeKnuzRf9y0vWZnI20G92A31AdoG19Vz3i84KILtfGUj%2BFC5DQ6bbY5hLIl%2FNJDKRbHyev7GXVwL0ru9gKPgx9ODWbPBGReP%2BPVASWGhkgw4kwcF1EAjMGbrEBO1CTS9ii39ezAH4D%2FWKkQVJ3NB3abUGA3HRQ86gBLu%2FgTDoR6Qh5uEotCkCsKeUE9m7ISGcunu7zN7Jz24556MtFeFNXN4ee9Dd2v8hJDaeO0y%2FX8oraHhEYKuc2FRc6Meq2Nm2pHX9E%2BmbKNluBmB7A2Rh1eSmDL1r9P0GRDSUZ62r5thVWmBgY7t8S1tUx2nqeGR4Gp7VjCj%2BvKUxJFYmVT8TVMgRRtlgDNnyRi9Jv03UiD%2F7uSgiL%2FIcW103ipj%2Bd264W%2B7aAFGvdbMbFwrum0jlfoXQBZVNEMCWCYbwl0jJU%2FSz3PwQ33K1Uf6Vdp3wAeDaSvp95Z%2BirgMQn2apIhQCQUzMsO2QyKP87ahHWju3DZhwAZjZ%2BknXkLxLpcnqrkf2n6FP2VwZzkpQm%2FS%2FBcfSYsRhcKIcWlZip6En3Wwbd9xTE5J5kCrByPflXMLez3MkGOqUBbBYqrr%2Fn4r6QaMg19KaqtgBFh3VegvTJMJGvzzE4REN%2F4JwYsPMpBg0UWEDIJ%2FSG0KVyjYb1qekqhsutkhVIYzqonBTJCjd4iI7zk20X7TUbgUGNXg3FgrY7RAfQyRE3Y4Amt5Ek%2FItK%2BLupb53zrZ5IGCwc8m%2FVNsbtepHYXpqbesuCwpqXHSvqJkHSIw66txUzZX3ufZy%2FT8K%2B1%2FOFCY5%2F0MK1&X-Amz-Signature=7a65f2c49a102cae7edb7eca0c4de0c7abf9fe518151b9beb72517559bd2a7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
