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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRLZRB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz7tZSWm16eqDZEZ4IkgErW2mp0Q4NhhGkKuhs5nt6VAiEA%2Blb49vgxxD0BYVf0Xp4T1dT0CcpmBsNixYaXvypsCNgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bzg89SpzYj7x4DbCrcAx3oEGAFzud5R6fxfBfqatxksxOz7M9v39lfoUo18DzAQADIm26Yy98Bh6yJEIZNhG5yC4mkLER1LQMMPttFEIgd3Yvt9Wkwc2zWm4cVdNSB%2B4NDmO6hcdP1dtJThrebTgHeCgxueeOB%2BlOVe3lFYt3b8j6ztFVIktreMUOHqHpmFqimiYLLy95TNcIBKeveMjE%2BjhtDxJH09Nw0jk9HK%2FT2MrtvOPw58I3qnoL%2Fzc28Px%2BlwrO3fFYVanQA2UMbXQe6cDS3IFGfELs03NQtXBCkHnYSjyMFKNOi3uQJGrmuFBAaHCyHsCkbUUO9XJN71ZA8Bws1arIDYi7H7O7mgdKQQF411qI4vzITW6ldBgLuEtiO97EO4ugAGNCyrVd8dj5Ajhtwhigb3OGlYMBVibyZnB8qVwTaib3%2FJWlhn7IT%2Far5JLnn22%2BmKmoqJsZ%2FZoA4P%2FDT6Id%2BfuXZYY%2FqKgBVB7GRPH65g4EoeJ8VaI1oTGy8NxFT%2BGV3BN2YrR4xMkJSUWA7wJetJ2dnZ1gXKITpY%2FFWy2%2BGNRS9Mx7c6hakfUzpYVopbM1vaSIZGCMDzQgjWmKjfbfiDHUX8%2BhKayCtteT9gG80Hl0YOMOM078mHcEkUBouTKbUjlrUMIH%2B0skGOqUBdb%2F9wwZw%2FFRh3cuowQSg2T%2FYoezhI6DRPMSQQl2r9wwVGCYWmSNBsDRqETIN4H2YkaukzfPU%2F1%2BZGXdDacc9%2FX0ZtmONZkrhp4M0%2FYg1kblnYp1kddzd2zRg%2Fd8vxQf6k3oPqwZ6Lm2aQrpH%2BB3yvxqJQl4Uf3uqqBaaL6ku6sJEMDQfdUd9AF7%2FDnK1MUOZOCwXHWuFDl7gtyV%2BKLijP1YggGBM&X-Amz-Signature=9f6b0ff17f667b816d18ce77d5643daed91c5ed5a1360641b45fe90a121acb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRLZRB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz7tZSWm16eqDZEZ4IkgErW2mp0Q4NhhGkKuhs5nt6VAiEA%2Blb49vgxxD0BYVf0Xp4T1dT0CcpmBsNixYaXvypsCNgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bzg89SpzYj7x4DbCrcAx3oEGAFzud5R6fxfBfqatxksxOz7M9v39lfoUo18DzAQADIm26Yy98Bh6yJEIZNhG5yC4mkLER1LQMMPttFEIgd3Yvt9Wkwc2zWm4cVdNSB%2B4NDmO6hcdP1dtJThrebTgHeCgxueeOB%2BlOVe3lFYt3b8j6ztFVIktreMUOHqHpmFqimiYLLy95TNcIBKeveMjE%2BjhtDxJH09Nw0jk9HK%2FT2MrtvOPw58I3qnoL%2Fzc28Px%2BlwrO3fFYVanQA2UMbXQe6cDS3IFGfELs03NQtXBCkHnYSjyMFKNOi3uQJGrmuFBAaHCyHsCkbUUO9XJN71ZA8Bws1arIDYi7H7O7mgdKQQF411qI4vzITW6ldBgLuEtiO97EO4ugAGNCyrVd8dj5Ajhtwhigb3OGlYMBVibyZnB8qVwTaib3%2FJWlhn7IT%2Far5JLnn22%2BmKmoqJsZ%2FZoA4P%2FDT6Id%2BfuXZYY%2FqKgBVB7GRPH65g4EoeJ8VaI1oTGy8NxFT%2BGV3BN2YrR4xMkJSUWA7wJetJ2dnZ1gXKITpY%2FFWy2%2BGNRS9Mx7c6hakfUzpYVopbM1vaSIZGCMDzQgjWmKjfbfiDHUX8%2BhKayCtteT9gG80Hl0YOMOM078mHcEkUBouTKbUjlrUMIH%2B0skGOqUBdb%2F9wwZw%2FFRh3cuowQSg2T%2FYoezhI6DRPMSQQl2r9wwVGCYWmSNBsDRqETIN4H2YkaukzfPU%2F1%2BZGXdDacc9%2FX0ZtmONZkrhp4M0%2FYg1kblnYp1kddzd2zRg%2Fd8vxQf6k3oPqwZ6Lm2aQrpH%2BB3yvxqJQl4Uf3uqqBaaL6ku6sJEMDQfdUd9AF7%2FDnK1MUOZOCwXHWuFDl7gtyV%2BKLijP1YggGBM&X-Amz-Signature=5643bb8ca80eb15dd85261a2a40c2da892b40d02bc9f5a4abd5d852d831b8491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
