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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFYHHOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuoV626CHThyXPY17aLuXH%2F%2BTPazlSJQuESbXb%2B2sHmAiEA0bu0qktkYGhLfx0x%2Bg4YJgifqb0QDwihBzpg8a%2B15Bsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLAHNSmH0sQkyoQkDCrcAwIFRKo4STkesQ62zrh%2BH%2FmOCvvZFSCdgX57AftLb5dXZXY1SnV37bVbApE5DRtWUOgN3vqR6eOgDi576RU9YAbFsu50FVmiXfUFV9K0xC2G6tBuniahlanAigUqqPLDH9TVf6JwfeIKM%2Fb9B0HolQmjBlG7E%2FrgEVr79bfrqmEujOl1DJ9hcxv91sAmEmql1zcRUwmZaSviOorHCHEfJyDDz4Kc%2BdyMGwd9t4Do5ueSnWTx3AuKDTwxSoAHW83BWvRUZXNEEsfky%2BBcJDq%2BJ0hQdkKOAcrtIiHnIdFPkZwmf8OU%2BiXI01YaFzkfMr8oo0%2BeXzSwz2ob3Io059sg0smHCGfUeTeYXOxO2xeszHalhYiSU21ZM8p2Azw7gH8K1RJn8y44G2Vt34AdUbjkmufu%2FKdDzf8XHjvr2uj1q%2Ff%2FJIq51RyN6bYPVeEuaNyKcIOqnmXjVecR8Rc0R29rbgp6s8ZpDqErzcRDGtVroGLN7sJbibGt6bG1ms1GoFuflSQGdT%2B%2Be80pD5zX6Q1EsOUgR4Yv%2F%2F1doaaq%2Bso1%2BlADuF4FYmcT8QdRPmc8DKOxoEGIkJzG5skC5VDQcL7XQe%2BX8A0rAB81v1A7%2BuFKWMOR8NX09uCPQF5eQeUyMKDL0ckGOqUB%2Figlp1%2B6BTE4Jq5ESAgYGbexqqU9LADkKJmKPYkdtEWhEvAv03jnJgwlcxV2siPjjg38BkxLtha6xaTvABU1evSpnpvw1rPsCuAY1FHgfozNYgC%2Fq4CylKpY7QGqCLwA6k40M9mOxKFnPyhTUSNdYtVxTn7Q%2FaHZIotmUQZ0d2c4f9tNAp7zZOGLmL%2BPFpFXRzLvitBvIalaARI12%2FQmUtC3XAtl&X-Amz-Signature=61aa882a31823df47e74cc1ea4f49396420bed5335df30244d2c91ce3975fe2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFYHHOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuoV626CHThyXPY17aLuXH%2F%2BTPazlSJQuESbXb%2B2sHmAiEA0bu0qktkYGhLfx0x%2Bg4YJgifqb0QDwihBzpg8a%2B15Bsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLAHNSmH0sQkyoQkDCrcAwIFRKo4STkesQ62zrh%2BH%2FmOCvvZFSCdgX57AftLb5dXZXY1SnV37bVbApE5DRtWUOgN3vqR6eOgDi576RU9YAbFsu50FVmiXfUFV9K0xC2G6tBuniahlanAigUqqPLDH9TVf6JwfeIKM%2Fb9B0HolQmjBlG7E%2FrgEVr79bfrqmEujOl1DJ9hcxv91sAmEmql1zcRUwmZaSviOorHCHEfJyDDz4Kc%2BdyMGwd9t4Do5ueSnWTx3AuKDTwxSoAHW83BWvRUZXNEEsfky%2BBcJDq%2BJ0hQdkKOAcrtIiHnIdFPkZwmf8OU%2BiXI01YaFzkfMr8oo0%2BeXzSwz2ob3Io059sg0smHCGfUeTeYXOxO2xeszHalhYiSU21ZM8p2Azw7gH8K1RJn8y44G2Vt34AdUbjkmufu%2FKdDzf8XHjvr2uj1q%2Ff%2FJIq51RyN6bYPVeEuaNyKcIOqnmXjVecR8Rc0R29rbgp6s8ZpDqErzcRDGtVroGLN7sJbibGt6bG1ms1GoFuflSQGdT%2B%2Be80pD5zX6Q1EsOUgR4Yv%2F%2F1doaaq%2Bso1%2BlADuF4FYmcT8QdRPmc8DKOxoEGIkJzG5skC5VDQcL7XQe%2BX8A0rAB81v1A7%2BuFKWMOR8NX09uCPQF5eQeUyMKDL0ckGOqUB%2Figlp1%2B6BTE4Jq5ESAgYGbexqqU9LADkKJmKPYkdtEWhEvAv03jnJgwlcxV2siPjjg38BkxLtha6xaTvABU1evSpnpvw1rPsCuAY1FHgfozNYgC%2Fq4CylKpY7QGqCLwA6k40M9mOxKFnPyhTUSNdYtVxTn7Q%2FaHZIotmUQZ0d2c4f9tNAp7zZOGLmL%2BPFpFXRzLvitBvIalaARI12%2FQmUtC3XAtl&X-Amz-Signature=8a94a5d7911b8c3258b0ee80e7cfdbd8c22a1f326a7b8695a672e0c547eacd02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
