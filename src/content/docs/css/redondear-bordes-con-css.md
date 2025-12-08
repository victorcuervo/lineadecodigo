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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJOQCZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BfCpeOCMGtMg7ps68Kk7mIYSVCyOM5VpMjOhjmnzM0AiAZdvyG665IKRV%2BP4totSkmB1JyqbIZMjC%2BIbtqdT4BmSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B1TicdlQgSIloDsLKtwDiy59DCJlV7ALPBBL28MplwjMVmZwt%2F%2Fk3i%2BxFHnAMD9NJUsAMydGQ1u9PoZsiYIv2VDs0Ar8sMzYEeVjAN9bOex%2BFUEkV1rLwOk2igMVYYG4Buw2sMbQDW96wznWh2i12fu9Oa94t2zRn98AFBSxHW8NQ%2BOy9Rah4agpdPrgE0v94Sn8jDsPUdHR8fnEmLkkGobBYDP0sQpKayrDQgr8sQjj15dK3kbuhkKcGeI4vnbKsvo6LQg%2FNPGQ9wg8pX%2FySuHVbyywEylaLnb79bjPQtF1hWn7dDDp5No9CHZ6%2BG%2F%2FhXMP01PTGskt9qBuzngo2koM0GCABohWD6DSw%2B4JG8t62iaHVnUzwKD88vsjHcL1VK72aq0EaJgZ0R4uXG%2FHHu%2FofJBp6gxAOxZYMzV6QxNp9c8ODxA4bOUeaObzhbCMJHmm1QGYW0%2BZfujmxhgSUCgoQb13IMGRE7wPq3RatbA%2BJzf78UkoGFpf2Hza4cVN2xiY6bj4WN81hcvQk4y%2F%2B6jq22x%2BDAkU4O18Av1Vxq1N6qddwrWB%2FhkQ6pc962UWzBNTAyLH8Cm6qr27Seg6%2B%2BI9b%2B3KcTRurpz%2BVP%2BcvOrPT5OoY4rejENtqf6EvonLdSZVzlALJl7%2BbP8w5NDZyQY6pgGcSiW7kYLC0Nb4H0hvfJzfysvRm%2Fxb1FkCO3kV47syuQBYtdUQI0BqCwVCTT8zxIvaaj4%2FKY%2FSLJ3DVRWbyjX4n461hm2uc%2F3iPC3V4JpVkqc2eAHdazBQO5u170KQ9kV15IZk8azaTsXZp2SpAC73r%2FGONQpqD2txbMsVZVZlVu83ka4BV6aqswREybHaN4a53Bv6ENuk9wTt1wivePxP%2BOl6kjBa&X-Amz-Signature=c5cc530e07c61da8cc867cd687c848172e7ef66f1f76145f9c6034ff4194a2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJOQCZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BfCpeOCMGtMg7ps68Kk7mIYSVCyOM5VpMjOhjmnzM0AiAZdvyG665IKRV%2BP4totSkmB1JyqbIZMjC%2BIbtqdT4BmSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B1TicdlQgSIloDsLKtwDiy59DCJlV7ALPBBL28MplwjMVmZwt%2F%2Fk3i%2BxFHnAMD9NJUsAMydGQ1u9PoZsiYIv2VDs0Ar8sMzYEeVjAN9bOex%2BFUEkV1rLwOk2igMVYYG4Buw2sMbQDW96wznWh2i12fu9Oa94t2zRn98AFBSxHW8NQ%2BOy9Rah4agpdPrgE0v94Sn8jDsPUdHR8fnEmLkkGobBYDP0sQpKayrDQgr8sQjj15dK3kbuhkKcGeI4vnbKsvo6LQg%2FNPGQ9wg8pX%2FySuHVbyywEylaLnb79bjPQtF1hWn7dDDp5No9CHZ6%2BG%2F%2FhXMP01PTGskt9qBuzngo2koM0GCABohWD6DSw%2B4JG8t62iaHVnUzwKD88vsjHcL1VK72aq0EaJgZ0R4uXG%2FHHu%2FofJBp6gxAOxZYMzV6QxNp9c8ODxA4bOUeaObzhbCMJHmm1QGYW0%2BZfujmxhgSUCgoQb13IMGRE7wPq3RatbA%2BJzf78UkoGFpf2Hza4cVN2xiY6bj4WN81hcvQk4y%2F%2B6jq22x%2BDAkU4O18Av1Vxq1N6qddwrWB%2FhkQ6pc962UWzBNTAyLH8Cm6qr27Seg6%2B%2BI9b%2B3KcTRurpz%2BVP%2BcvOrPT5OoY4rejENtqf6EvonLdSZVzlALJl7%2BbP8w5NDZyQY6pgGcSiW7kYLC0Nb4H0hvfJzfysvRm%2Fxb1FkCO3kV47syuQBYtdUQI0BqCwVCTT8zxIvaaj4%2FKY%2FSLJ3DVRWbyjX4n461hm2uc%2F3iPC3V4JpVkqc2eAHdazBQO5u170KQ9kV15IZk8azaTsXZp2SpAC73r%2FGONQpqD2txbMsVZVZlVu83ka4BV6aqswREybHaN4a53Bv6ENuk9wTt1wivePxP%2BOl6kjBa&X-Amz-Signature=03df161b6e6bef156d6452feccfd6737c5ce2c8f23faf2f5e06799096967a5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
