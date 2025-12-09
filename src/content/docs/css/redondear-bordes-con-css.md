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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAT6OP6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBgWNfzM5Tsv2ZW43tJnVaGQfjWDkO%2Baf141HjhjgoIAiEAmH%2Fm7JfgfJXkkxvoP4U%2Fq%2FzPobupYD0xQVErd%2BCWoHYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCkDQFsz6QTZ6%2BGUSrcA%2FGQojVG36wn%2FplNXuaam01EHFOodzkvlmEbkdVoDXH9cW31qPUWDHxtKIeKR1a7aF1JsJRJK%2BvPBCvGe1Wx4U7I2LxTtCL4mVrcyMI210XT4fkWTBgCJ1n6IoGJfw5AJzlrp4Bv1a%2BQDB%2Fph%2B98SWGs6%2Fp7uLrnnfHcOnEqg0uzjffHBjfo9CmH4sKyrTaolE2p%2Fe31WG9xuRDV01MHtJIM9LukaahHObwbyh%2B9m0lE%2B4cpihP4mGUCybngxaTSNYC6IHXxEOmXBBSDB09UMXUv5ZOdT1EOcm174iTrCPX3TD7b%2FgeZhorMimKZIcmtOyCO8a%2BtMu1Ob80sMfNBQhRWrXe3z%2F5wOK3p8ceAQMQ2nByAqoH1%2FiyIbv%2Bmhj8y8FAwSmOrJV5T0xEH5DNJJvkXiLDjx3p%2Bhm7dA6BKdaLK2gP4F51%2FmPUekz3C4dAZ6BSKm5s8ktvv%2FOE3RaxyQkVTMJsKAGDhsELx%2FEZTokVQWZBqkJf%2BQpk7PIgLb53i9AIlvkuMYm0DNqiehfny1YiR7ERZ%2Fqe0brdFdbDBmdYUhMUNrJwMPM3N3fqDeChXYBNpLYMR40At3D4JiqUBid958n1qrjKfRgJTAc1sgKnyOVfkT7kOnU%2BwgKg9MJ3E38kGOqUBYukD1xRot%2BxltvclwOO5jSqYkB%2B6jcCvb5FAHs21TVQtA%2BosCFELlnp6GZ%2B0vavOvZ23g5gREgGX6k7UyyHM8wSu6b1hZZa4Y75dOELBVL2WRCsRaQh0OF4wSHpsBth90h%2Bj%2B0o5fSai7YtvdsmllMhkFiNphaWDPcx5xLmSdeVfpAaDyJuU6acwNHpdnSNraycg5kiRu%2BP2gUmFwI%2FYfJqad1hU&X-Amz-Signature=99f98be9356ef781a12cdba930d04ef084daf543b6d5c5dd0bb98a1804f4b964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAT6OP6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBgWNfzM5Tsv2ZW43tJnVaGQfjWDkO%2Baf141HjhjgoIAiEAmH%2Fm7JfgfJXkkxvoP4U%2Fq%2FzPobupYD0xQVErd%2BCWoHYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCkDQFsz6QTZ6%2BGUSrcA%2FGQojVG36wn%2FplNXuaam01EHFOodzkvlmEbkdVoDXH9cW31qPUWDHxtKIeKR1a7aF1JsJRJK%2BvPBCvGe1Wx4U7I2LxTtCL4mVrcyMI210XT4fkWTBgCJ1n6IoGJfw5AJzlrp4Bv1a%2BQDB%2Fph%2B98SWGs6%2Fp7uLrnnfHcOnEqg0uzjffHBjfo9CmH4sKyrTaolE2p%2Fe31WG9xuRDV01MHtJIM9LukaahHObwbyh%2B9m0lE%2B4cpihP4mGUCybngxaTSNYC6IHXxEOmXBBSDB09UMXUv5ZOdT1EOcm174iTrCPX3TD7b%2FgeZhorMimKZIcmtOyCO8a%2BtMu1Ob80sMfNBQhRWrXe3z%2F5wOK3p8ceAQMQ2nByAqoH1%2FiyIbv%2Bmhj8y8FAwSmOrJV5T0xEH5DNJJvkXiLDjx3p%2Bhm7dA6BKdaLK2gP4F51%2FmPUekz3C4dAZ6BSKm5s8ktvv%2FOE3RaxyQkVTMJsKAGDhsELx%2FEZTokVQWZBqkJf%2BQpk7PIgLb53i9AIlvkuMYm0DNqiehfny1YiR7ERZ%2Fqe0brdFdbDBmdYUhMUNrJwMPM3N3fqDeChXYBNpLYMR40At3D4JiqUBid958n1qrjKfRgJTAc1sgKnyOVfkT7kOnU%2BwgKg9MJ3E38kGOqUBYukD1xRot%2BxltvclwOO5jSqYkB%2B6jcCvb5FAHs21TVQtA%2BosCFELlnp6GZ%2B0vavOvZ23g5gREgGX6k7UyyHM8wSu6b1hZZa4Y75dOELBVL2WRCsRaQh0OF4wSHpsBth90h%2Bj%2B0o5fSai7YtvdsmllMhkFiNphaWDPcx5xLmSdeVfpAaDyJuU6acwNHpdnSNraycg5kiRu%2BP2gUmFwI%2FYfJqad1hU&X-Amz-Signature=e6fa49de11811dd50c2c56835db6592eaa11c272d3d16adb221e3712842b968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
