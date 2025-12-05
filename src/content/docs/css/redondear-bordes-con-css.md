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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMWQFXU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZs7U5t6W9bzfb0BCA2YxnxCbNGoHqczgbd4aVnEeEfgIgPc7F0kkrSmo3PXrf%2FZagInNw4qcyIKTDuEF2BM81SZ4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDESGGsB7clQKA%2BYK8yrcA0zV3d89AYpX80XNuJ4vSXrXhRLbIu9CM0IOYmORr4vVBP3H55kTvRGtHJKHJI4edd7G6DYmxha85SjTM4gIpPkVjhfzsgpuyNlZyK6CbQm28K8pdRlittjeLut3geMb7zjUIE0EQrW4fWTFtHEnX3AoAN%2FFLMmT%2BDG8RswxNAVe97lQOvVtWNPHyAp4Ho6EYHx95gN66SHy7qr7KubMsvala8M3ZNXbYWrB0GI3cpa5hmIupoaanuJUZ2YZIokxe4SvBPErG9oLWDo%2BkA8kAsz2H7vSKc3VR1iw%2BJNjvqw%2FbajMy%2Bqvbn2Sx3h5nPto9CrIEauVDKLJFdYxsSYI0k3%2FXUJ6%2B1JmBwvTz0GcAf%2FA4D5P6iShsgEiatrZbs%2FZ8Sl4XNpvskR8d9iUJmSd6G0UxiPyyP0I%2BReoRGnueiqdb1tAmjZ5hyZ1dL0LY%2F9WfkgJ%2BjLhQL%2F9Nwx%2Fs%2B%2BHRTNtvK87cFGYgP05fqwTSHvhjY%2FhA8kUIwCioTDYoHVQ%2FFpHcpvm3LLS6UE5oueHddySxU9MDJnNO6d1UYP5CI6Nn4VPBiGdJVdYoUDptAnrU2Tt%2BVsMNW421k5q%2BmFiqDI5nafnr7D5uGJoMk9DAZcImleO5FPyfM2dUSx5MJmtyckGOqUBpYzTkv3c8VxeT1sX%2B4htGD9y1ke%2FIZ0Kxc3a1uDNYV0rzch4Uz1rwzdivra4iWMkpx0zTb%2BRbkPCvPbeB38w2YkP21jrEhPZXIkVkiEVab3qTZhFxAc92TNRzW22HfxJDYX6tQtzd2w9lEDPGbj5CUMfRt2F7JDrE%2FQZ%2BtCOttiJNeWb1wsRfyF47h4dFdRcKAL2H1yO8ndnEBBmzOAM4p7G0VWz&X-Amz-Signature=e2a5849fd466abb2c1333f10171100bf1d0239e194eb4a9a0321c85bbd0c79f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMWQFXU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZs7U5t6W9bzfb0BCA2YxnxCbNGoHqczgbd4aVnEeEfgIgPc7F0kkrSmo3PXrf%2FZagInNw4qcyIKTDuEF2BM81SZ4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDESGGsB7clQKA%2BYK8yrcA0zV3d89AYpX80XNuJ4vSXrXhRLbIu9CM0IOYmORr4vVBP3H55kTvRGtHJKHJI4edd7G6DYmxha85SjTM4gIpPkVjhfzsgpuyNlZyK6CbQm28K8pdRlittjeLut3geMb7zjUIE0EQrW4fWTFtHEnX3AoAN%2FFLMmT%2BDG8RswxNAVe97lQOvVtWNPHyAp4Ho6EYHx95gN66SHy7qr7KubMsvala8M3ZNXbYWrB0GI3cpa5hmIupoaanuJUZ2YZIokxe4SvBPErG9oLWDo%2BkA8kAsz2H7vSKc3VR1iw%2BJNjvqw%2FbajMy%2Bqvbn2Sx3h5nPto9CrIEauVDKLJFdYxsSYI0k3%2FXUJ6%2B1JmBwvTz0GcAf%2FA4D5P6iShsgEiatrZbs%2FZ8Sl4XNpvskR8d9iUJmSd6G0UxiPyyP0I%2BReoRGnueiqdb1tAmjZ5hyZ1dL0LY%2F9WfkgJ%2BjLhQL%2F9Nwx%2Fs%2B%2BHRTNtvK87cFGYgP05fqwTSHvhjY%2FhA8kUIwCioTDYoHVQ%2FFpHcpvm3LLS6UE5oueHddySxU9MDJnNO6d1UYP5CI6Nn4VPBiGdJVdYoUDptAnrU2Tt%2BVsMNW421k5q%2BmFiqDI5nafnr7D5uGJoMk9DAZcImleO5FPyfM2dUSx5MJmtyckGOqUBpYzTkv3c8VxeT1sX%2B4htGD9y1ke%2FIZ0Kxc3a1uDNYV0rzch4Uz1rwzdivra4iWMkpx0zTb%2BRbkPCvPbeB38w2YkP21jrEhPZXIkVkiEVab3qTZhFxAc92TNRzW22HfxJDYX6tQtzd2w9lEDPGbj5CUMfRt2F7JDrE%2FQZ%2BtCOttiJNeWb1wsRfyF47h4dFdRcKAL2H1yO8ndnEBBmzOAM4p7G0VWz&X-Amz-Signature=c54a6bfa464bd9b0cae908e0770c46c4049fa695ff7f3d7c766c496adfe42d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
