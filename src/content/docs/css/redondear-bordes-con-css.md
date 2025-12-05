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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECHHVC2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgmjJKyRXo69Z1W1e0dDBvNSjqDQw9MJFoGrf22shG6QIhAMgK6HJCESpZqKPlOIv5ZRpcpdcTiITG16RbxN1ULjLVKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1Rp27YUrZLeErUeEq3AO0gj71f%2BH1dOb0diURXHF4DBieUALDN%2Fqf7207uVnFUbKRcw%2BeyaraHNnDM7ztMmzG4RTqFRUkvvEda8EBqyXiDu8zQMCn66dt6ErpYZ%2FMRe%2Fbvo98z7x6QrdMpRxizTlzuMDme6CaMa8Zm0sYZ%2F%2BWoVQPm%2BXk0%2BnD71s8hSKEB92Xf6mEaTQoiPrtCQOP3lnboPE9KBGZhVoLlfzuCREvSmR4gJPQ%2F2PVmcKve5gK3m20xjpZK%2BS9btCxBZ4iewmRptyQ9izS%2B%2B9OOGLsCUrdxbPfSi0%2FY2CzrVcfDbMEKhxj93ClVyLCPdjj8N0vGF%2FJJYB5V%2Bt8Ccy8thEyCXQ0HGMMplRj1NTNb0aVT1kdfeUJFqNYrIsKsA0Oz1AkF1t79ZND1feU6Q9RS72FDT6MF8sGHhEMWzmW%2BuD5EAZytWeF6oJeLPYyYhYWTGFhBCkEVIFoCTET3AXjwPUzXzPLSVaEmSqv3t%2BpixoJJbI8gjV7rkL3TI%2BZS1TbwfavFC9dcmEF1B78Uvsu434EPNKjM63NeFJqJNoa0MfjQDz0w%2BVzWcXt%2Fd1Edre7XXiem%2Ff1qfVe%2Bthsqii0CN%2BVXrFL7TyKxOQqqNW3rFCOuzL%2By2R3M8cwjD1NyeA1%2BTDijMjJBjqkAd%2Fx3T5%2BzYFs6XaxG0H0c3PJ879h%2FFoafJvP9BKemCu%2FiZ6fHxZ2Cgcf0NF4BTkdjUfmkEOGGUNtYrKqG8VSDuK6PhWpjE3fAMCZf%2BuCOhIojBFHW7nEpxE%2B1rnm0nDvwqW%2Fch1mPECkdDnIFJFZZBeczezqjdWmMoOnCVRWLP7%2FIbuPfPnvL8RJj7WppLCL1maYxdW2Nu5aJ5GomFitXhRiVo6%2F&X-Amz-Signature=6ed3a846946d31f649e42944ccf96ba3de294ae21d31f7c9e5dcd12aa2596c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECHHVC2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgmjJKyRXo69Z1W1e0dDBvNSjqDQw9MJFoGrf22shG6QIhAMgK6HJCESpZqKPlOIv5ZRpcpdcTiITG16RbxN1ULjLVKv8DCE8QABoMNjM3NDIzMTgzODA1Igy1Rp27YUrZLeErUeEq3AO0gj71f%2BH1dOb0diURXHF4DBieUALDN%2Fqf7207uVnFUbKRcw%2BeyaraHNnDM7ztMmzG4RTqFRUkvvEda8EBqyXiDu8zQMCn66dt6ErpYZ%2FMRe%2Fbvo98z7x6QrdMpRxizTlzuMDme6CaMa8Zm0sYZ%2F%2BWoVQPm%2BXk0%2BnD71s8hSKEB92Xf6mEaTQoiPrtCQOP3lnboPE9KBGZhVoLlfzuCREvSmR4gJPQ%2F2PVmcKve5gK3m20xjpZK%2BS9btCxBZ4iewmRptyQ9izS%2B%2B9OOGLsCUrdxbPfSi0%2FY2CzrVcfDbMEKhxj93ClVyLCPdjj8N0vGF%2FJJYB5V%2Bt8Ccy8thEyCXQ0HGMMplRj1NTNb0aVT1kdfeUJFqNYrIsKsA0Oz1AkF1t79ZND1feU6Q9RS72FDT6MF8sGHhEMWzmW%2BuD5EAZytWeF6oJeLPYyYhYWTGFhBCkEVIFoCTET3AXjwPUzXzPLSVaEmSqv3t%2BpixoJJbI8gjV7rkL3TI%2BZS1TbwfavFC9dcmEF1B78Uvsu434EPNKjM63NeFJqJNoa0MfjQDz0w%2BVzWcXt%2Fd1Edre7XXiem%2Ff1qfVe%2Bthsqii0CN%2BVXrFL7TyKxOQqqNW3rFCOuzL%2By2R3M8cwjD1NyeA1%2BTDijMjJBjqkAd%2Fx3T5%2BzYFs6XaxG0H0c3PJ879h%2FFoafJvP9BKemCu%2FiZ6fHxZ2Cgcf0NF4BTkdjUfmkEOGGUNtYrKqG8VSDuK6PhWpjE3fAMCZf%2BuCOhIojBFHW7nEpxE%2B1rnm0nDvwqW%2Fch1mPECkdDnIFJFZZBeczezqjdWmMoOnCVRWLP7%2FIbuPfPnvL8RJj7WppLCL1maYxdW2Nu5aJ5GomFitXhRiVo6%2F&X-Amz-Signature=ffe1d81d1f5b94348fd05ffc09d1db0bb0a219de648261cb53882e99a78e23b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
