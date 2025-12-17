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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3ZEOLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6lYwmLoAD8WvqOphNV4PXgVAS4cAFxUi%2BLJw0e1GV2QIgOFtPIKHUCbAfLvv9cmN9Le8%2BuhFN63nBo30%2BhWu29u8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKVd7s9mB8nBfH5ExCrcAwnD6vTIeDIAIQpHSJzX3Uk2i7EVxnab6rUV9ackIiMLIxBp7IelMKZvMmxmqBQU7dDbf0bpXe43F4VUavslKcgSGS814Ku6XYzO1fnh7Iy4U3i%2FfMecmDCfr5%2F4vlJ%2FBEkm4DpGC17unVb12kPpe3HmIf5724jaPcGU%2B614RUQX3lbTPMypVIr0jZf%2FcXCQLJa7Ezl%2FaW0TLLGuJC8Oh5aHF0V50cMoM5EyY6swnO%2FM5%2FOqmn%2FyVy%2FagVRi8iEm2J3Q4Tp9NXXl1J2U922kBifNfnBG7RRY%2Bw4zcnfHZwNUVtTTTCWGmNka8S4qt0y7MO7A1Id1FMekVJMg6uVeBMHyIaKHhrB8XXIFqYTOIiK9STF6cTkfM%2FYtJmAxhNR8mhZE7hYQc1zGxFxQVZe3rdvDw4M2Jq7RXcxvRQudAp%2Ff1%2Byvsrgvaqj2Vi%2BLcwjzw8nVd1V6eWvSR4NM1yZne%2Fc9H9scFtCSt13jYt%2BYBSQZV%2B8Ht1OltmDbZ6tzBPkMRgf7ZRavtoIiUY%2Bijd67hKki%2FHZH9lKJI0pvLRFT%2FI%2FHskSC82tzNxagoGY0p80q83P0zy0E3WWuxsT45tEESVWM3qFj0AqCTHtCGRRGUUvHSJ4BaZgzn%2BWa6OAdMITRicoGOqUB68l7qXUnSo3JvCOIPaHO4sFoiDNIOvS9HKCPangendRUkAwJoxVqUkEO4kjiQsOU93T5LGQ76sfsPP06%2BBigM%2BLGA6HdKGv%2F0M%2BHHc5aI6jpT4ra2Ee461zIISPVbtaVVvNE9FEloEQLXU%2Bz0tME8YvsygsukzrMBO5j53agEDdm3B5s0KDoyGuXF6X45zMVf7A1Ui5KsRj6U5kTb377UpY0ADEM&X-Amz-Signature=fdf43c24f298bbe850e182188078132efd3ad11d5b2d6df73809028538ce033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3ZEOLR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6lYwmLoAD8WvqOphNV4PXgVAS4cAFxUi%2BLJw0e1GV2QIgOFtPIKHUCbAfLvv9cmN9Le8%2BuhFN63nBo30%2BhWu29u8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKVd7s9mB8nBfH5ExCrcAwnD6vTIeDIAIQpHSJzX3Uk2i7EVxnab6rUV9ackIiMLIxBp7IelMKZvMmxmqBQU7dDbf0bpXe43F4VUavslKcgSGS814Ku6XYzO1fnh7Iy4U3i%2FfMecmDCfr5%2F4vlJ%2FBEkm4DpGC17unVb12kPpe3HmIf5724jaPcGU%2B614RUQX3lbTPMypVIr0jZf%2FcXCQLJa7Ezl%2FaW0TLLGuJC8Oh5aHF0V50cMoM5EyY6swnO%2FM5%2FOqmn%2FyVy%2FagVRi8iEm2J3Q4Tp9NXXl1J2U922kBifNfnBG7RRY%2Bw4zcnfHZwNUVtTTTCWGmNka8S4qt0y7MO7A1Id1FMekVJMg6uVeBMHyIaKHhrB8XXIFqYTOIiK9STF6cTkfM%2FYtJmAxhNR8mhZE7hYQc1zGxFxQVZe3rdvDw4M2Jq7RXcxvRQudAp%2Ff1%2Byvsrgvaqj2Vi%2BLcwjzw8nVd1V6eWvSR4NM1yZne%2Fc9H9scFtCSt13jYt%2BYBSQZV%2B8Ht1OltmDbZ6tzBPkMRgf7ZRavtoIiUY%2Bijd67hKki%2FHZH9lKJI0pvLRFT%2FI%2FHskSC82tzNxagoGY0p80q83P0zy0E3WWuxsT45tEESVWM3qFj0AqCTHtCGRRGUUvHSJ4BaZgzn%2BWa6OAdMITRicoGOqUB68l7qXUnSo3JvCOIPaHO4sFoiDNIOvS9HKCPangendRUkAwJoxVqUkEO4kjiQsOU93T5LGQ76sfsPP06%2BBigM%2BLGA6HdKGv%2F0M%2BHHc5aI6jpT4ra2Ee461zIISPVbtaVVvNE9FEloEQLXU%2Bz0tME8YvsygsukzrMBO5j53agEDdm3B5s0KDoyGuXF6X45zMVf7A1Ui5KsRj6U5kTb377UpY0ADEM&X-Amz-Signature=df3768711813b5d6c61916a36d8e1c34785077f5027b107dc4de72e683689097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
