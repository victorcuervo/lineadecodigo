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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2FS4U3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzDTKDoiPpr%2F7pEbFUGMfoNMwKuZ1U0f5uonK%2FtNn%2BNAiBrOewVZRLg7e3PXwfDiSokuQrZi91QpmOc9lzFKD51Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMenne1PYI%2FZSpdGXXKtwDf%2B4HtcdrUFsp5THbtKG166WpiZ1bO1eH2aKfDrJsDA8nR%2BqzYsNDAb06jjYth50LzCcyQsacJMG9MgV%2FzCh7qb2sdbwmdoIVqDyFzD8HcygAgve62xiZtIYWeAlHkx0%2BMABU6na8KaQ8pgCjTw2SYhEfr15J74K%2FnaKLpI107rFDye9%2BUM0oiqboDeR%2F438vHs9vQRbkuLANweXuYNvBNSwkO3G8WDRNiKX451ljT0Z3onSgiRyZNh%2BuZ%2BL6xllFks0%2BHaekWMEEtNMdb0ujl18R%2BXLvUnsycUXtLBhonb71cekUuAJAHyzIHDthXZmWA%2Fp6NZtc2w7V4n5Y%2FJEPYPMNgELssjiVSx7AEzu8U%2FwWHWanjiLi1nZz%2Fne2ZNxmy7hbqvx2%2FqGVX%2BiXWObQDCkDBFdubocLV69IKbr1lX6VNDGgQlWpnWbOJ4XQwjPUojqEcwQE9raYLMhlSr2d%2F9dMWUmqScP477e3O3HBu6CVSip1TnLNsv1njmwyfhrkGkGP2Qhap9sw0SfvOXiESk3ebGGnWI7q0jSKfwPYjVxAQZ3KmlE5tMBIuUgQHB66oj8e7Rq16LF2dCbPB7yoOhY0JjIXP3s2L9Q4WWIyaNQGUGUArRZtKQcWibYwk8zRyQY6pgEmNFJS6%2FY9HdLXqnAFS%2F0a14QD5QO%2FjSxnQT9JXwfKMx2oFW6zvg20RD5e58KmeDvRMXokSx8wgt91%2F55PxU5fIWVfUvVxj1%2F%2BkrBLP%2Bm7sg%2F6sSWZO5mC49tmIlGtv6ua70dLasuRMVuc9sCxzhiCKPHAdghYPP0ewk2YBXtThlV9knijtJ9Yx9ZIoa2jglxY6kriimjpSIvCPeimv9CXWVPKfEpN&X-Amz-Signature=b0b35ab34e5a6c2e986e9df3a63f060ec32f913e403c31132de1477775915955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2FS4U3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzDTKDoiPpr%2F7pEbFUGMfoNMwKuZ1U0f5uonK%2FtNn%2BNAiBrOewVZRLg7e3PXwfDiSokuQrZi91QpmOc9lzFKD51Fir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMenne1PYI%2FZSpdGXXKtwDf%2B4HtcdrUFsp5THbtKG166WpiZ1bO1eH2aKfDrJsDA8nR%2BqzYsNDAb06jjYth50LzCcyQsacJMG9MgV%2FzCh7qb2sdbwmdoIVqDyFzD8HcygAgve62xiZtIYWeAlHkx0%2BMABU6na8KaQ8pgCjTw2SYhEfr15J74K%2FnaKLpI107rFDye9%2BUM0oiqboDeR%2F438vHs9vQRbkuLANweXuYNvBNSwkO3G8WDRNiKX451ljT0Z3onSgiRyZNh%2BuZ%2BL6xllFks0%2BHaekWMEEtNMdb0ujl18R%2BXLvUnsycUXtLBhonb71cekUuAJAHyzIHDthXZmWA%2Fp6NZtc2w7V4n5Y%2FJEPYPMNgELssjiVSx7AEzu8U%2FwWHWanjiLi1nZz%2Fne2ZNxmy7hbqvx2%2FqGVX%2BiXWObQDCkDBFdubocLV69IKbr1lX6VNDGgQlWpnWbOJ4XQwjPUojqEcwQE9raYLMhlSr2d%2F9dMWUmqScP477e3O3HBu6CVSip1TnLNsv1njmwyfhrkGkGP2Qhap9sw0SfvOXiESk3ebGGnWI7q0jSKfwPYjVxAQZ3KmlE5tMBIuUgQHB66oj8e7Rq16LF2dCbPB7yoOhY0JjIXP3s2L9Q4WWIyaNQGUGUArRZtKQcWibYwk8zRyQY6pgEmNFJS6%2FY9HdLXqnAFS%2F0a14QD5QO%2FjSxnQT9JXwfKMx2oFW6zvg20RD5e58KmeDvRMXokSx8wgt91%2F55PxU5fIWVfUvVxj1%2F%2BkrBLP%2Bm7sg%2F6sSWZO5mC49tmIlGtv6ua70dLasuRMVuc9sCxzhiCKPHAdghYPP0ewk2YBXtThlV9knijtJ9Yx9ZIoa2jglxY6kriimjpSIvCPeimv9CXWVPKfEpN&X-Amz-Signature=ae15c6f0cd9290b3a4b5d30f0358b0c47509cfedf6675014c96579d5bc50bc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
