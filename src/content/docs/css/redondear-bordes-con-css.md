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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAJGZYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUw6F%2FRKccW8Zcy7kBWfjO%2FqtxVRRwMayGBarNTCXgMQIgBz4qtR92UthNmzt%2FTLRUckVP4yqXoDU5fEXJfUug0BMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPyy9z7t0uonS5PyrcA3RPY04e4qHf%2FMK0GqxD8YMKzO48YSiJCnDecrL9MfbuWBbaOs%2BdR%2FyGTQrIEOlDEXv7rWJIEAOiscdz9HH%2FOkt9qCN9c5sYSie%2BZv3w40dZhBFVkT37XxxUglhZcRjx8JieUhsSO17QwZEvJCP1J5nYnGIPCSyNhig6PxW5663rb6ChGAf%2B2VHFY%2BEYbGJvCRLHZTTRiRD0GvNBBso5hpSI82CFRZliQ87vXM%2BS9X6A%2BmlTr%2F3NhzpYyOflHw0VkT15JzDpDplNbXuFuDVA%2BOQi4ZorcMV6m0wUjsIFCOicHDJUIIaBBbXXvbZYS0HVYCVOmkr%2FpwTj6D2PVs1fF3%2BzKVHx9fcSB6EP1dqwmwleTEMyj%2BUNDDQ44QdPdPHYHP7tqknB%2Fm1CoKyXaU%2FlIn4BZX1vhmX3L58VmJI3YrMNdXNy5OEscGn52YCWDcs9J57t0%2F4H5PTdbm1B5n14XLtc11ULE7hM9ZeAvafVcyTJncRU%2F7USrTGLNYTKiJZJFGKR3RGpWd1QgDNfRMDddjNR9xZ0%2F5f%2BObdH17RQLuip%2B0b4QzFygKVG29%2BAr%2FPllwQ%2BhpAeWXwIcEoh254ew%2FKY9rNh8jzHhEUzvSbz3q65vz5XUcde4bjyGsDmMOr90skGOqUBNVWj5224cwfwfaiLtwPt4eFR2LmX6xocr3L41L%2Fbu9%2B50kCtXjbiG1GY683jXEVpCQrhI6iwkND67lNacrACiCKpxmNTS9f12RB3pyr6Ib58THX2F%2BWxRm%2B7vtSh1MVfSJAD6Zo1ouxpx0LTns7sA2f5CRLdRB24CRFFf2GEpX1PuLkuDTZJvTz%2BoEszYlPAZymIbQd2mHZ3xHzygd%2BjHJw7OaQq&X-Amz-Signature=0b3fa809fca32a5c7f84518d1be41232c3ff1e0fd444039d6d1d8ab6f394b31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAJGZYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUw6F%2FRKccW8Zcy7kBWfjO%2FqtxVRRwMayGBarNTCXgMQIgBz4qtR92UthNmzt%2FTLRUckVP4yqXoDU5fEXJfUug0BMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuPyy9z7t0uonS5PyrcA3RPY04e4qHf%2FMK0GqxD8YMKzO48YSiJCnDecrL9MfbuWBbaOs%2BdR%2FyGTQrIEOlDEXv7rWJIEAOiscdz9HH%2FOkt9qCN9c5sYSie%2BZv3w40dZhBFVkT37XxxUglhZcRjx8JieUhsSO17QwZEvJCP1J5nYnGIPCSyNhig6PxW5663rb6ChGAf%2B2VHFY%2BEYbGJvCRLHZTTRiRD0GvNBBso5hpSI82CFRZliQ87vXM%2BS9X6A%2BmlTr%2F3NhzpYyOflHw0VkT15JzDpDplNbXuFuDVA%2BOQi4ZorcMV6m0wUjsIFCOicHDJUIIaBBbXXvbZYS0HVYCVOmkr%2FpwTj6D2PVs1fF3%2BzKVHx9fcSB6EP1dqwmwleTEMyj%2BUNDDQ44QdPdPHYHP7tqknB%2Fm1CoKyXaU%2FlIn4BZX1vhmX3L58VmJI3YrMNdXNy5OEscGn52YCWDcs9J57t0%2F4H5PTdbm1B5n14XLtc11ULE7hM9ZeAvafVcyTJncRU%2F7USrTGLNYTKiJZJFGKR3RGpWd1QgDNfRMDddjNR9xZ0%2F5f%2BObdH17RQLuip%2B0b4QzFygKVG29%2BAr%2FPllwQ%2BhpAeWXwIcEoh254ew%2FKY9rNh8jzHhEUzvSbz3q65vz5XUcde4bjyGsDmMOr90skGOqUBNVWj5224cwfwfaiLtwPt4eFR2LmX6xocr3L41L%2Fbu9%2B50kCtXjbiG1GY683jXEVpCQrhI6iwkND67lNacrACiCKpxmNTS9f12RB3pyr6Ib58THX2F%2BWxRm%2B7vtSh1MVfSJAD6Zo1ouxpx0LTns7sA2f5CRLdRB24CRFFf2GEpX1PuLkuDTZJvTz%2BoEszYlPAZymIbQd2mHZ3xHzygd%2BjHJw7OaQq&X-Amz-Signature=e9d693c8a65a6d73dee82fdc19b6073ea884f8d4ab1c42e635c6f5eac466b8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
