---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5E3IA6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCLoc53xPMh0ssY8BbqO5727oELyaA9kTCFVYJSp%2FME8gIgeNHjlZyH9gcpMfJ6X6rwyKCTFVEUGv4FHyi6e7DsWlMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDALgoqy15ABB8fDVgSrcAwNwAIL2H3TRBuqatPH%2FoxevD22hMsToLjINMSwonLNwD8oHLb0SThhFHDDL27WtF51zFujGeIyAQhu%2FU70KrEz1JzoPosP73ncFX5ckoQUOint%2FUsbEe8pd4J46bzwt%2FVZg%2F%2BFMin5cZYgAzVfRtC%2FtJGv5qJ3ydrLP6VBB%2FPegsMQbwxNPymnBxDYCQE9ulPpBZDEd5NOSm%2B7iaDPweiDLq%2FX2806yutOIeWtsIGhmdtv%2B9%2BVVibyuGtaFdxEbtN2WTAV%2FczZ4%2BbBQagyNkfTHnpLF4bTeDJb%2F6PajJ7dMIF2lYpSvrtmK3bCTRV7y8NGHulT4ku8eCKrBcND%2BuJsUrz1jZsuWkZgDKzFiaq97za4miUvtxrNuYrX92zCF3CDq6fkIjOpv9grpxCbkVCOky3dRXU8lrx%2BUJmfSkP692RfjuDvdIRtX08LPS%2BG%2F68T4iX2BKVwY8VD7gCR1QUfE%2FPuesWt5U7VQ%2FhKls5Y0ywqUYC7ohpcPzxaY1p%2B5l92K%2FUYuIQthqUEovXM67hNKSCMVrpYHmSST8KlPyiPuJCWDKymEYGbV9XWMNv8z6VUHw5NZKHd934CtJpVYZzNGPDm7oydHS%2FU6WUrD8b%2FyS38Zz5ZNbQF1jahyML60w8kGOqUB%2BwkMgvyqAU3n80Jjp3oWWthVEW4U6IUlXwYPPYuXeNWUlBgIE4icr91jR7vV6zsIEuujZxaZeh%2FiWjkZoS5XVRMBi%2FNKWKKzsL57VThlVLPfJd%2BcWol7e7%2BJK9zC5NX5IvEYbF9BwTnt9wfbz2pX3KHoTBJuSjvKOtjXkSpc5XBPfxH7VuIGVtUK2RrhS%2F0B%2FUQzhlO4chZwSjGnLeL7SjQXE1pc&X-Amz-Signature=e99d9e23a1a81eb23f940ad78b5636736711134025c12032c479eb766f4effcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5E3IA6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCLoc53xPMh0ssY8BbqO5727oELyaA9kTCFVYJSp%2FME8gIgeNHjlZyH9gcpMfJ6X6rwyKCTFVEUGv4FHyi6e7DsWlMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDALgoqy15ABB8fDVgSrcAwNwAIL2H3TRBuqatPH%2FoxevD22hMsToLjINMSwonLNwD8oHLb0SThhFHDDL27WtF51zFujGeIyAQhu%2FU70KrEz1JzoPosP73ncFX5ckoQUOint%2FUsbEe8pd4J46bzwt%2FVZg%2F%2BFMin5cZYgAzVfRtC%2FtJGv5qJ3ydrLP6VBB%2FPegsMQbwxNPymnBxDYCQE9ulPpBZDEd5NOSm%2B7iaDPweiDLq%2FX2806yutOIeWtsIGhmdtv%2B9%2BVVibyuGtaFdxEbtN2WTAV%2FczZ4%2BbBQagyNkfTHnpLF4bTeDJb%2F6PajJ7dMIF2lYpSvrtmK3bCTRV7y8NGHulT4ku8eCKrBcND%2BuJsUrz1jZsuWkZgDKzFiaq97za4miUvtxrNuYrX92zCF3CDq6fkIjOpv9grpxCbkVCOky3dRXU8lrx%2BUJmfSkP692RfjuDvdIRtX08LPS%2BG%2F68T4iX2BKVwY8VD7gCR1QUfE%2FPuesWt5U7VQ%2FhKls5Y0ywqUYC7ohpcPzxaY1p%2B5l92K%2FUYuIQthqUEovXM67hNKSCMVrpYHmSST8KlPyiPuJCWDKymEYGbV9XWMNv8z6VUHw5NZKHd934CtJpVYZzNGPDm7oydHS%2FU6WUrD8b%2FyS38Zz5ZNbQF1jahyML60w8kGOqUB%2BwkMgvyqAU3n80Jjp3oWWthVEW4U6IUlXwYPPYuXeNWUlBgIE4icr91jR7vV6zsIEuujZxaZeh%2FiWjkZoS5XVRMBi%2FNKWKKzsL57VThlVLPfJd%2BcWol7e7%2BJK9zC5NX5IvEYbF9BwTnt9wfbz2pX3KHoTBJuSjvKOtjXkSpc5XBPfxH7VuIGVtUK2RrhS%2F0B%2FUQzhlO4chZwSjGnLeL7SjQXE1pc&X-Amz-Signature=0bdbbffa6828471308184bdb89d1dd3745a54722061412e91ed85db9a39ad01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
