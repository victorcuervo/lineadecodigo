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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDG4WCV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb4GLy11Kx%2BEwNbqX%2BkgwDh7%2FE8%2BIkaemFiZUm%2F1D4BAiEAis%2FND1IsPy4KW8Egbu0z35Ar2wz1NI%2BIHETWjPkSJmIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOswI2CYW49wrJefeCrcA610kgX8HkWgU1OnB1Csn%2BrEaUV1K3KWLG%2BG3L3qBXU%2FbNgP3kv%2BAumtuA88oycBoDQdjQv4r1xCyqdxSoXOTb17P8%2BjfVs4Z6wxmpkaPkcATUrXJZ47%2FC9X%2FJ3oqw25aoUmlz1s0RCcX9fstYVrVHUVX3XVBm6pKzEf%2F%2FZDowoYg3pDyZo0cHeL4zyQvOGJtAeOG6Z%2F%2BOxEs1P2ZEXU%2F5f5RdLHjDBU17eaJ2%2BGT3mkzUUq134qrNblZeXcmfiG0OcnUKpVMRU6z2aS6s2cXutdq2Wusmi14zKsnDcnMvR7HKCY9iuDegkkmeAnlfCLcuL%2BVLplyWDfVibOfBwFhhLs%2FE27rS8XxU66DXT3nmY5p9mVoQDQfNpN1HrKm7yhYRvnrcrs4bPtDVNYbQpm4R5IJEXZijweikCCh2rZV7PWYuxr0yJWRZAaIAENdgOD3aLuTwaJRM4HPg9MvuqONkGneLcF2MxAtnK82KB2RX8HpWuwE1NzBB1viP3Of6k6MafnkF1DGEJzPNCpNC77UNeTWlOaYeH2pkxKTCJA%2FKanKZd%2By3QGe98YruzqJDyW8Md%2FF6gacxDs4BPwulittUEoENZIz1buHfAg3MZQlk1x4wuZJKLy9y0LYIOQMMefi8oGOqUBz%2B5YLBDnUly8SSeelaKpX0M2tT%2BIFbf209qmTnQ2FjJunxCohDTbK2A4NRn1dAMjwqWJVfnU%2BaWcxLwf5m6ulfPWdBW19Yr5386W54RGUsQMvn6QSql6B%2Fd0kjQKUDLV%2FbrSlYw9zJmTtlWgnyAHkF7d6%2FNglPnLJOAtPDlqNVDH0HDEIywO6JIkFkcBRkPyOIiVrTn90dcVmlfOmwrDJ%2BfTxQLu&X-Amz-Signature=625200bd8d9d751f486d2273b9a95e30097ab6952f103818b8e25a8b21a7fe71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDG4WCV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb4GLy11Kx%2BEwNbqX%2BkgwDh7%2FE8%2BIkaemFiZUm%2F1D4BAiEAis%2FND1IsPy4KW8Egbu0z35Ar2wz1NI%2BIHETWjPkSJmIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOswI2CYW49wrJefeCrcA610kgX8HkWgU1OnB1Csn%2BrEaUV1K3KWLG%2BG3L3qBXU%2FbNgP3kv%2BAumtuA88oycBoDQdjQv4r1xCyqdxSoXOTb17P8%2BjfVs4Z6wxmpkaPkcATUrXJZ47%2FC9X%2FJ3oqw25aoUmlz1s0RCcX9fstYVrVHUVX3XVBm6pKzEf%2F%2FZDowoYg3pDyZo0cHeL4zyQvOGJtAeOG6Z%2F%2BOxEs1P2ZEXU%2F5f5RdLHjDBU17eaJ2%2BGT3mkzUUq134qrNblZeXcmfiG0OcnUKpVMRU6z2aS6s2cXutdq2Wusmi14zKsnDcnMvR7HKCY9iuDegkkmeAnlfCLcuL%2BVLplyWDfVibOfBwFhhLs%2FE27rS8XxU66DXT3nmY5p9mVoQDQfNpN1HrKm7yhYRvnrcrs4bPtDVNYbQpm4R5IJEXZijweikCCh2rZV7PWYuxr0yJWRZAaIAENdgOD3aLuTwaJRM4HPg9MvuqONkGneLcF2MxAtnK82KB2RX8HpWuwE1NzBB1viP3Of6k6MafnkF1DGEJzPNCpNC77UNeTWlOaYeH2pkxKTCJA%2FKanKZd%2By3QGe98YruzqJDyW8Md%2FF6gacxDs4BPwulittUEoENZIz1buHfAg3MZQlk1x4wuZJKLy9y0LYIOQMMefi8oGOqUBz%2B5YLBDnUly8SSeelaKpX0M2tT%2BIFbf209qmTnQ2FjJunxCohDTbK2A4NRn1dAMjwqWJVfnU%2BaWcxLwf5m6ulfPWdBW19Yr5386W54RGUsQMvn6QSql6B%2Fd0kjQKUDLV%2FbrSlYw9zJmTtlWgnyAHkF7d6%2FNglPnLJOAtPDlqNVDH0HDEIywO6JIkFkcBRkPyOIiVrTn90dcVmlfOmwrDJ%2BfTxQLu&X-Amz-Signature=7df2a593060e36c831c55f3917b3c79594d2e1639aaca332ae43d253d4d087f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
