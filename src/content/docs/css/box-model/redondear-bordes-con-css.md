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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHY3OPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsZXk42FRiVZHWuFZUsQ6k2J%2FTRHwXFErrnZ3bjLx9PwIgEtKWIJuVNFr78Ijvj4n%2FroZ4fiJsqfrPKbXNRtpqzVkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQtY0gYydMQ2uTlcSrcAyyj8EpRBdI1WzII%2BrSImkCT9OiAsQxdtgKBxJPyxiDoY2rsaXHtJmbsV9EP7FQdvIca2IKoUeuniKbRrTMhWLpMhVJimQJFlJmvdO8E7hsDkEgExAAts0%2BAwpf4eZ9r%2BWgUvkGwL%2Bf%2FxMdcNYFgqlky5IDH%2F8X4SOgwvIwGS9T3kJ%2BaDBYqHJuDbeWd%2Fs4xm7L1TtSn6hmt693xOGpPDNUAaraj1EH2AnhPc8lKVqCNsbpjmN3iI9eOVWf9ey3w6OMPdkn%2FqDS1oFNNn5GqlbotA9hQddJKsYnaP%2FPm%2F76a%2BYXVOvNt6UTqtp7Nk83ySX2BT80LJTKeFLLbap%2BxhDEmxwJeAAV7nyzYiVqATFR5AkVfZlteIqaLl9RBhoanHSdc6dfFakPsLjJohflQDp8jbodSYIDx2iW8phpiFIsz%2FtMZmr26vM8QSE9V24yPVMuQeArbFzCkenm5DeRhzlY3vuiwn3mAuKOxyasxvXXfi5ru2F6Y0IVtItCPYNsOJVA4ZcTfIlcQB68r2Aq%2F8INJQzussm2uAuqvPTsrbnJP9f8dyF6t4OF7W6Y0KmUWWKUb1nrGXDhBe%2FJMtrqmKDDwvxzvJuYUJbzhxP7mh0fzJgRXMz9kUP1xCGX1MOatjMoGOqUBnZBOPwhWRd3GKco6iKoDm6by6QTAthZu485ZMPKffZ%2BGmfk6xDG9Fzj5%2Bzprp7CdQz8sasfK%2FxNRBLR%2BX98CUNVgMon81FMT5AcKdcrsBaPCKnJXNC0z%2FYKk5B3E0vzdO%2BDEuryDRYWKCVOOTiWCC8FE6aCqVjK9G4i3VljMnBd1%2BdDRNbHcCNHCkgUbZ%2F9iGxm6QhMYPyIeEXxrJ%2BhTbNyF3ApG&X-Amz-Signature=637370d96909b39e5ed1e37c3787a0fbb058d1563a40c263c68f2af62dc950d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHY3OPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsZXk42FRiVZHWuFZUsQ6k2J%2FTRHwXFErrnZ3bjLx9PwIgEtKWIJuVNFr78Ijvj4n%2FroZ4fiJsqfrPKbXNRtpqzVkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQtY0gYydMQ2uTlcSrcAyyj8EpRBdI1WzII%2BrSImkCT9OiAsQxdtgKBxJPyxiDoY2rsaXHtJmbsV9EP7FQdvIca2IKoUeuniKbRrTMhWLpMhVJimQJFlJmvdO8E7hsDkEgExAAts0%2BAwpf4eZ9r%2BWgUvkGwL%2Bf%2FxMdcNYFgqlky5IDH%2F8X4SOgwvIwGS9T3kJ%2BaDBYqHJuDbeWd%2Fs4xm7L1TtSn6hmt693xOGpPDNUAaraj1EH2AnhPc8lKVqCNsbpjmN3iI9eOVWf9ey3w6OMPdkn%2FqDS1oFNNn5GqlbotA9hQddJKsYnaP%2FPm%2F76a%2BYXVOvNt6UTqtp7Nk83ySX2BT80LJTKeFLLbap%2BxhDEmxwJeAAV7nyzYiVqATFR5AkVfZlteIqaLl9RBhoanHSdc6dfFakPsLjJohflQDp8jbodSYIDx2iW8phpiFIsz%2FtMZmr26vM8QSE9V24yPVMuQeArbFzCkenm5DeRhzlY3vuiwn3mAuKOxyasxvXXfi5ru2F6Y0IVtItCPYNsOJVA4ZcTfIlcQB68r2Aq%2F8INJQzussm2uAuqvPTsrbnJP9f8dyF6t4OF7W6Y0KmUWWKUb1nrGXDhBe%2FJMtrqmKDDwvxzvJuYUJbzhxP7mh0fzJgRXMz9kUP1xCGX1MOatjMoGOqUBnZBOPwhWRd3GKco6iKoDm6by6QTAthZu485ZMPKffZ%2BGmfk6xDG9Fzj5%2Bzprp7CdQz8sasfK%2FxNRBLR%2BX98CUNVgMon81FMT5AcKdcrsBaPCKnJXNC0z%2FYKk5B3E0vzdO%2BDEuryDRYWKCVOOTiWCC8FE6aCqVjK9G4i3VljMnBd1%2BdDRNbHcCNHCkgUbZ%2F9iGxm6QhMYPyIeEXxrJ%2BhTbNyF3ApG&X-Amz-Signature=ffc7c9581b990f69cf78372f6b1be1484f38c8b317e74d6e587314ce53577fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
