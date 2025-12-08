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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPL5PFQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZygkZrv2WS8cVNFmcu2UROk3kYF1ovGCST4hm2LBfbQIgd73lBv8jq1mdIYo2HXKU7LecX40eiwOsP4Q6wtZj6DkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFna%2Feeladd8dSEJaSrcA7fey1LVVqYMDR2ux%2FjUD4qoqx6QX%2F%2BsUOOI2dtzPmvX3XfkXGKN%2F22qAF9yw0EyVQT6eBLJLwwz87gByARto21hy9zq8%2FlGmVRzZ%2FP1syi5CkLc9IrpEe9Ey8bTgD81b8OYCKnoRdqO3lVHznE%2BFFqWd2TfVtbYvxlLYeaanWmtVZY4iNo9hcUGBhIY%2Fwao08AOGfkvSFgpNVSfqwfbWR84A4p97mcHit0xRd7VF%2BvFkskS%2FM%2BEIEGzzpBJbCMJRgEH3xq6RJiq3AXOx%2FMJb08S4ioHd%2BTfomsfGYreOGvpIxPw%2Bq2CK%2BJ6flPzJ%2FPJzm8gHwxjmoG7%2Fipa6UKKWWhaOP0z3VP90v3sd%2FSpFc9daMC0d4NAKJBpocYIvyrVyKanpSiE%2B%2FRFd5sGXhML5fLA%2FMJkr7ZQNEcMv1Bvu9nx2sk2hszSg0eDgpojvAz0v%2BKjU6pKGJYDePsUkn7TjYSXMNkA9Wgit9CQof2N5K1rYM3jISWRRl2l%2FHorF%2FymsJ1dlnVxPKE%2F97%2B4YFyd2elsXk0d449Va8ewSYN%2B1lNRu%2FarugoNmq%2B7xUagb7zc9TEapj57m0AZczORTVRIuMk3A3K03WswyhSoxuG58F1MClPUA3RZRZ4nFlFmMPmU2ckGOqUB%2Fa5tHu5ekpmokwtC6Wc0tvvfNZEfTMr0v5DpKzo6u7CkpNc8R4Bp08mZv0dUJ6BVTdkW5E0tavEz%2BfwbMrN7rtKVi9evk%2B6f7B4eMtmAc2nWjzHvXsfo0kynS%2F%2FhZWL2%2BUPTzEkc10SSLpbDy%2FpdnYPlBpKwjVgqJZfcrYV%2Bx6hj3Mi5KFVX%2BMrzUEbZueAA5rRn85hY4lsnKX9KXSfEdtYm8Mk8&X-Amz-Signature=253ae07ccee9034ee4e2fd0b33beecdc3790f7e7c79cf859d1f5a323fbe08376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBPL5PFQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZygkZrv2WS8cVNFmcu2UROk3kYF1ovGCST4hm2LBfbQIgd73lBv8jq1mdIYo2HXKU7LecX40eiwOsP4Q6wtZj6DkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFna%2Feeladd8dSEJaSrcA7fey1LVVqYMDR2ux%2FjUD4qoqx6QX%2F%2BsUOOI2dtzPmvX3XfkXGKN%2F22qAF9yw0EyVQT6eBLJLwwz87gByARto21hy9zq8%2FlGmVRzZ%2FP1syi5CkLc9IrpEe9Ey8bTgD81b8OYCKnoRdqO3lVHznE%2BFFqWd2TfVtbYvxlLYeaanWmtVZY4iNo9hcUGBhIY%2Fwao08AOGfkvSFgpNVSfqwfbWR84A4p97mcHit0xRd7VF%2BvFkskS%2FM%2BEIEGzzpBJbCMJRgEH3xq6RJiq3AXOx%2FMJb08S4ioHd%2BTfomsfGYreOGvpIxPw%2Bq2CK%2BJ6flPzJ%2FPJzm8gHwxjmoG7%2Fipa6UKKWWhaOP0z3VP90v3sd%2FSpFc9daMC0d4NAKJBpocYIvyrVyKanpSiE%2B%2FRFd5sGXhML5fLA%2FMJkr7ZQNEcMv1Bvu9nx2sk2hszSg0eDgpojvAz0v%2BKjU6pKGJYDePsUkn7TjYSXMNkA9Wgit9CQof2N5K1rYM3jISWRRl2l%2FHorF%2FymsJ1dlnVxPKE%2F97%2B4YFyd2elsXk0d449Va8ewSYN%2B1lNRu%2FarugoNmq%2B7xUagb7zc9TEapj57m0AZczORTVRIuMk3A3K03WswyhSoxuG58F1MClPUA3RZRZ4nFlFmMPmU2ckGOqUB%2Fa5tHu5ekpmokwtC6Wc0tvvfNZEfTMr0v5DpKzo6u7CkpNc8R4Bp08mZv0dUJ6BVTdkW5E0tavEz%2BfwbMrN7rtKVi9evk%2B6f7B4eMtmAc2nWjzHvXsfo0kynS%2F%2FhZWL2%2BUPTzEkc10SSLpbDy%2FpdnYPlBpKwjVgqJZfcrYV%2Bx6hj3Mi5KFVX%2BMrzUEbZueAA5rRn85hY4lsnKX9KXSfEdtYm8Mk8&X-Amz-Signature=1cb27429522608f28e724c1562abb2d00caf2966a0195c225f33f676d5205c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
