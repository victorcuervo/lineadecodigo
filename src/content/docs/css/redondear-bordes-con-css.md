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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYA34LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg7xbsSVJqsX7gJDbiXtXJMVGbBi7urbKmDgo7E9%2FVjAiEAojZZvHsQXLPixvglokyoTu6d0E87moC3rnHGfgLJ%2FhMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJb3xb67hyhotJqSyrcA4%2FGalLw8rmuCxT3SsVPwRf9LsxuwWgaeRpij%2BmyuZB5836G6i8%2BkCO%2FHnvD3X25ZiHPxFk%2FQu9PX5QQnUeu%2BwTbx9%2BZWFipyBYeMDOje15Fo4h6Qp3xIPCcDgDDcn6QogzU6W3sab1MjJum3wVX9x%2FjbR5q51CX%2FJbgVBu0%2BBpkEzK%2ByUadP%2Bnh4ELz6TkJ0Yo%2B6HIqGhoi2ePX444WVb7KBBkAbZcgyUsahREeIt3juXBu8srYOp6szaPKzEEZNb%2B94hz%2Flk2R3JFc1Q%2BPTifNO1UgD3b8kAWOv%2BQ%2Bn9OoeDLL0IeDZ05MleWh9WTbmIl4KV2ZU%2BtFCPaRX%2FXKUNBewG%2Bf39y5sK6a%2B2W%2FDiP9eGYWItiArF0r%2FXuW8c%2B%2FKyC7Xcg9iONI0YaNYBV07nZtevci%2Bz2Rh6ABtafp2%2FhbgKG1cZ2rTfcl2x%2Fp059JfZNJI3OEfZxt%2Bf5m9Sf1pKw%2BdUmXBsncYyiQep0qaop97q73tFtmXDOfkkgxYarmQ5URopqvc3VLvbrIOS8T52dv2DO1JczYOAaApCRSea4AvDa9qN7mkLBi%2FVKhciJqVmBOkGn6emJewuOQ0KcozItllvCTNCgOdFuP7fWrwzviK72TRC5NyxelTHXaMLaZ1ckGOqUBZRuJcEQrMCPrdmu4sHAH4Ml1pi4SnNkmJ1y9tphg4KVkBoOCplsfrRpMJdOQ6g8xljS1aFs0ryDWZkvQ%2BmhwH8glb0Nrg77SyHDV3AK9Z1%2BMxUyCRnDIilfgFPUPcCrUbYcTG01EPHvHxZ7874F5GwcpnWgBHvp5Jpp9B4%2F%2F7ErieO5Q9LY7%2B%2BPTj4ZP3gs9%2BYnQEvFlUx7O2InFw9Wk%2BFsrLczt&X-Amz-Signature=849e404e9ccf5b4372ee7ec589a322fcc830680837c5da7bc40406d860c6ecc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYA34LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg7xbsSVJqsX7gJDbiXtXJMVGbBi7urbKmDgo7E9%2FVjAiEAojZZvHsQXLPixvglokyoTu6d0E87moC3rnHGfgLJ%2FhMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJb3xb67hyhotJqSyrcA4%2FGalLw8rmuCxT3SsVPwRf9LsxuwWgaeRpij%2BmyuZB5836G6i8%2BkCO%2FHnvD3X25ZiHPxFk%2FQu9PX5QQnUeu%2BwTbx9%2BZWFipyBYeMDOje15Fo4h6Qp3xIPCcDgDDcn6QogzU6W3sab1MjJum3wVX9x%2FjbR5q51CX%2FJbgVBu0%2BBpkEzK%2ByUadP%2Bnh4ELz6TkJ0Yo%2B6HIqGhoi2ePX444WVb7KBBkAbZcgyUsahREeIt3juXBu8srYOp6szaPKzEEZNb%2B94hz%2Flk2R3JFc1Q%2BPTifNO1UgD3b8kAWOv%2BQ%2Bn9OoeDLL0IeDZ05MleWh9WTbmIl4KV2ZU%2BtFCPaRX%2FXKUNBewG%2Bf39y5sK6a%2B2W%2FDiP9eGYWItiArF0r%2FXuW8c%2B%2FKyC7Xcg9iONI0YaNYBV07nZtevci%2Bz2Rh6ABtafp2%2FhbgKG1cZ2rTfcl2x%2Fp059JfZNJI3OEfZxt%2Bf5m9Sf1pKw%2BdUmXBsncYyiQep0qaop97q73tFtmXDOfkkgxYarmQ5URopqvc3VLvbrIOS8T52dv2DO1JczYOAaApCRSea4AvDa9qN7mkLBi%2FVKhciJqVmBOkGn6emJewuOQ0KcozItllvCTNCgOdFuP7fWrwzviK72TRC5NyxelTHXaMLaZ1ckGOqUBZRuJcEQrMCPrdmu4sHAH4Ml1pi4SnNkmJ1y9tphg4KVkBoOCplsfrRpMJdOQ6g8xljS1aFs0ryDWZkvQ%2BmhwH8glb0Nrg77SyHDV3AK9Z1%2BMxUyCRnDIilfgFPUPcCrUbYcTG01EPHvHxZ7874F5GwcpnWgBHvp5Jpp9B4%2F%2F7ErieO5Q9LY7%2B%2BPTj4ZP3gs9%2BYnQEvFlUx7O2InFw9Wk%2BFsrLczt&X-Amz-Signature=667ec74855edfaa8a1cd9e6bab2d662ee1886e585322aa76696e777a45187be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
