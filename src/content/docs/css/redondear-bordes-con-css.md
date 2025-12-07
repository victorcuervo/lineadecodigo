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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSR5GPVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVTTIMJOB0UqMO5E%2B2U8xd3M8%2BobfC6FpD0CW%2FrMHhJQIgZG1obSZ1WGfI5fy0SiGvzAPD2rBSDm9CTjknotzGs1cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOym%2BO%2Bigc76jYQ90CrcA1iFWMieAlXC4LXBLl5FqaKAXFBKKxeWVX6QM4j2mTDrD5bGF%2F5EI0ejhAZ4%2FAbeT9nrSDT7oxzLyvQRF9b8XsSXWck2vN%2FYd%2BHbVzt4zGY07PXQo%2ByqAyXCkhsCfpbD33NJ0hxXYcObg0Vx9u%2FC0VScGoHUcUwb6ZArgXywG9Eg3H6Po%2FmKX7YxiQt4A2zKuaGew8BZm8RJUHSNcU7IA8TPttEgp0cjyXi3d%2BCUGUxDmYZU6rlGxiOvvcFemdfWbFiCGuG0%2BYbpa520KYYCFhhlT83MHouz25%2FmRUzV1gwzbn5wfunxyGCcHPYJWLlYi1cEz08uuwIbTp4DmNlb2w52oLVZ86vgU8fRTM9LU9m6MXWrpMSulDS2sFSpB2hP6t%2B7ADDcQrL4NF%2FnZuSK3kjJfgIzIDyKxhgkaCuOfs%2BmMap8LUihsD6cMgeNhpGf9qvyTzu9a3sKMGlrRObt6xWkyMhzhghryFoGIs7i5PXkswlzbRaZ22AI8eNTjsLiZcL6cKPz3FuFdppnhOArfgdSLfGpzPsLZhXQJaawqqQEbcciIqqyPUdi%2FSbaJt7WHB3d8VrCKSzSq3VB9d9q90QGCdgMDqLKqlJPMfOSkVdQffRGxcgudrZGgZBIMIua1ckGOqUBfJ%2BSnCGcnk2XTOS1UkL6r6zTfqQ2F%2B6P3BAiNoi6zgEYb1dztoDfVY3dMTbpqMZpZODeA5DIyKrOfNf5GRCYXRACNwg%2BbIlMncnuQ%2FAxcIfu7GLruCh78n%2FDxi9XvQIWjhdrm%2BWJVeIzp%2BDnwRoK4A36PfqBBFVDYMz2CgdC0v1FB0BDm7GBGhZlapxJUfymLUc92xOGr%2F9WYb120HESP%2BkFeeId&X-Amz-Signature=013bdd3f88494a3eeff2a3f01f290f6bd81a5ea84cda0b6d8a8c7cb7eb2938dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSR5GPVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVTTIMJOB0UqMO5E%2B2U8xd3M8%2BobfC6FpD0CW%2FrMHhJQIgZG1obSZ1WGfI5fy0SiGvzAPD2rBSDm9CTjknotzGs1cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOym%2BO%2Bigc76jYQ90CrcA1iFWMieAlXC4LXBLl5FqaKAXFBKKxeWVX6QM4j2mTDrD5bGF%2F5EI0ejhAZ4%2FAbeT9nrSDT7oxzLyvQRF9b8XsSXWck2vN%2FYd%2BHbVzt4zGY07PXQo%2ByqAyXCkhsCfpbD33NJ0hxXYcObg0Vx9u%2FC0VScGoHUcUwb6ZArgXywG9Eg3H6Po%2FmKX7YxiQt4A2zKuaGew8BZm8RJUHSNcU7IA8TPttEgp0cjyXi3d%2BCUGUxDmYZU6rlGxiOvvcFemdfWbFiCGuG0%2BYbpa520KYYCFhhlT83MHouz25%2FmRUzV1gwzbn5wfunxyGCcHPYJWLlYi1cEz08uuwIbTp4DmNlb2w52oLVZ86vgU8fRTM9LU9m6MXWrpMSulDS2sFSpB2hP6t%2B7ADDcQrL4NF%2FnZuSK3kjJfgIzIDyKxhgkaCuOfs%2BmMap8LUihsD6cMgeNhpGf9qvyTzu9a3sKMGlrRObt6xWkyMhzhghryFoGIs7i5PXkswlzbRaZ22AI8eNTjsLiZcL6cKPz3FuFdppnhOArfgdSLfGpzPsLZhXQJaawqqQEbcciIqqyPUdi%2FSbaJt7WHB3d8VrCKSzSq3VB9d9q90QGCdgMDqLKqlJPMfOSkVdQffRGxcgudrZGgZBIMIua1ckGOqUBfJ%2BSnCGcnk2XTOS1UkL6r6zTfqQ2F%2B6P3BAiNoi6zgEYb1dztoDfVY3dMTbpqMZpZODeA5DIyKrOfNf5GRCYXRACNwg%2BbIlMncnuQ%2FAxcIfu7GLruCh78n%2FDxi9XvQIWjhdrm%2BWJVeIzp%2BDnwRoK4A36PfqBBFVDYMz2CgdC0v1FB0BDm7GBGhZlapxJUfymLUc92xOGr%2F9WYb120HESP%2BkFeeId&X-Amz-Signature=4c28f9244f90f20b1fe3bbf74d61ecd70e79501d58b6508d0a5feebe43f2c5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
