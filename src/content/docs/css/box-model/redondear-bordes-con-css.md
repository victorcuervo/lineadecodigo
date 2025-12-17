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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3S2ZP5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkqY9FjjsIWmGdvCN%2FLX6BUxkfrVhOv%2FXp9G0fm3lf5AiAT%2FoVtGXJB%2FMXCubqCNZ7iCrNvMCgUDX2rL8cCel2epCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtr1laZVD%2BQQKTrRqKtwDSECKWjhuSaerSv2uKaRbOM%2Fah%2F25Xt4CWm%2FCCqsyV60qSTRyIdQMUFu8yI2%2Bgd3XNFXuGI0Z4D2SLEr6QUU5cwnloGBVrna6rNQP7fv5Wpp7kX%2FZtEdt56s5mtv2wVXFFrk2IuWsg2ufbVQTYe6XGgV0n7rMLh2m80H5CFTR5odWigJf7e1qI8CgANPRq63zdhuNEY74SOW5Zau6s%2Bay0oZdSQFIqhTDQPTPKNrPo94zmUsyrG21q65m8xb%2Fq0165aA1KAZVty03tbgdoN92UHdbRc19AaBDDX9%2BnAfD3ubYMpoIb%2BjzYwxEBLKFPC3PblDUBFs1cZG3lS%2F0%2BoDLOfXaEhq8GAGkLy0jmoQ1dsQHSuSCF36Rp3mAYFKpMYBAPEQlQSnVuH4YRNaOERxLEfb7EOEiyOEAoE%2FvrKgBMKAcdMlpr9Plx0a9%2Bs%2FaR%2BnqgKvCIGjMX1HkcZcmj4pdE%2B1Wo52%2FwQAfl7QV2Lf0b8hI1VgpxnuK0bCxpd7Sb%2F3D%2FcW%2FpsydLvUmuKI2A9ih57YuP692Ma4jwhXvhLXY%2FnQRVgC21jM6S%2F8FsnZKso7TpK3uGSWVHz%2Bw4vbXetcK93MhCZ%2BN8fY4KGxQhcd9wG9KgvpHwGymUcgXk8sw1J2JygY6pgH%2BOl3mC2jzFX%2FBSuRFbDjPEsb%2FHyJIKHhh54HJwNC0wJRmftT0OseP9kEfpA4a6jUG0jZ9D73ueCaOO5xtDCPlDHYKmwraC6ScXj%2BP8DpgU%2Fp%2F%2BTeKT56dXqyapVOcU%2B7QW2hsMetTIAzagphSXF6gQVbi%2FSv3AthQfv3fJkUmjQPQSD65GjOlvc1oFNAcPNV1OaHRAdYhgJ4CMZXxBUtdHgb4O8RL&X-Amz-Signature=d18fccf99eec10be2881d86d4b6d9de72db63702796a4eba004bcb3a9538931c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3S2ZP5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkqY9FjjsIWmGdvCN%2FLX6BUxkfrVhOv%2FXp9G0fm3lf5AiAT%2FoVtGXJB%2FMXCubqCNZ7iCrNvMCgUDX2rL8cCel2epCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMtr1laZVD%2BQQKTrRqKtwDSECKWjhuSaerSv2uKaRbOM%2Fah%2F25Xt4CWm%2FCCqsyV60qSTRyIdQMUFu8yI2%2Bgd3XNFXuGI0Z4D2SLEr6QUU5cwnloGBVrna6rNQP7fv5Wpp7kX%2FZtEdt56s5mtv2wVXFFrk2IuWsg2ufbVQTYe6XGgV0n7rMLh2m80H5CFTR5odWigJf7e1qI8CgANPRq63zdhuNEY74SOW5Zau6s%2Bay0oZdSQFIqhTDQPTPKNrPo94zmUsyrG21q65m8xb%2Fq0165aA1KAZVty03tbgdoN92UHdbRc19AaBDDX9%2BnAfD3ubYMpoIb%2BjzYwxEBLKFPC3PblDUBFs1cZG3lS%2F0%2BoDLOfXaEhq8GAGkLy0jmoQ1dsQHSuSCF36Rp3mAYFKpMYBAPEQlQSnVuH4YRNaOERxLEfb7EOEiyOEAoE%2FvrKgBMKAcdMlpr9Plx0a9%2Bs%2FaR%2BnqgKvCIGjMX1HkcZcmj4pdE%2B1Wo52%2FwQAfl7QV2Lf0b8hI1VgpxnuK0bCxpd7Sb%2F3D%2FcW%2FpsydLvUmuKI2A9ih57YuP692Ma4jwhXvhLXY%2FnQRVgC21jM6S%2F8FsnZKso7TpK3uGSWVHz%2Bw4vbXetcK93MhCZ%2BN8fY4KGxQhcd9wG9KgvpHwGymUcgXk8sw1J2JygY6pgH%2BOl3mC2jzFX%2FBSuRFbDjPEsb%2FHyJIKHhh54HJwNC0wJRmftT0OseP9kEfpA4a6jUG0jZ9D73ueCaOO5xtDCPlDHYKmwraC6ScXj%2BP8DpgU%2Fp%2F%2BTeKT56dXqyapVOcU%2B7QW2hsMetTIAzagphSXF6gQVbi%2FSv3AthQfv3fJkUmjQPQSD65GjOlvc1oFNAcPNV1OaHRAdYhgJ4CMZXxBUtdHgb4O8RL&X-Amz-Signature=45325d323269e5280ff0a5e3b99fb679be57910a07c1fc28efd3964399457d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
