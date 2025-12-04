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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ATCCG4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCfIijyqj7u9hPfANW6%2BMu0kM276fmuaOQqG59mIxSrJwIgG2qy%2Fh3ONLLe4SMPnzPPePUMKeiYKbqCBobGzAmVryAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHli2g9gPJgIdgl4%2BCrcA3ELYVafovuBYAXT1h5wq%2FFrwiM%2BjaSYW1X%2FNJtILotx7rXW4vLymEuuk%2BaN73nWUPm3KG2mk7Vu0MJJKS%2FDra1yZ3Fyon6MjUT%2BjhsX7tqH4RKn5KIL0mp58ynqz6n3O0X5vO%2FJUtD%2FHMkWKjcouWkE8DIVa65nCa8ZwwL1YA6xhZn1zgM4ul2FbB1mrd8OmDH7Y%2BbWajQW6FC6g0EC4lAZBa8%2BFALF%2FTAiSgBdQSj1UJT%2FpBQSs2uirX2dEB3gfRXYXjavArgPAB1k3GHeykqWsCVedoZ64z82zzIsEQIOOOpv0ThmLXZoQ2PMVRkB0f6RvSs4h%2Fc7OsdZfm0M6dHKV%2BRp8MUcC%2FB%2BkzLepaJYm0v63WRv5RvT%2BgHz5ffm8KgHD%2Bj%2B6aDTKx1bSUmdhzvP%2Bwzw50iywbOuHJslLxwxa6NCEApy8mYDP3W5WgFvsApj2tUAQ%2F99Fsb%2B9Rbr9CPKA46WMeyielTlMsHsNW4QmVh9BUr%2FpKNbZRYbXg8EjuW%2Fp2bnQSYYH4EU5X%2FhPShyjNFB05Hk5YnYjoaqVlpUGC0JUkNw2uGqMnEVY1gE2pK3KevlC7eiot%2FRxnPfWUM0lEV7QFUOPyHPfNcEDOeG4Iipue2N0CraiXC6MLmFxckGOqUB1qY2NwtX%2FLRgkOlTWDGJEEQgyLRQp8ogyN3d9qSw%2FjxwkawHEdKlr%2BSIpca41IbscDudQs2Ck5KXRoPzxjv1IOYbAhOcDfoKa0fo0yZ2FjFFVI%2BMEwkaSikAiLqjg1LH6W7gFI%2FvToYUFqja8%2F3%2Bi5EnOhJ17VXCo5hA7ATgZbWA%2FySEDrs0Unzx%2FnFIGoVc0PtusOm%2FZbDiySrULOMPjrfhXpKp&X-Amz-Signature=062f63bda86769b188fff5cdc657a8c5ee8372691be8b02fce97f1e56b7f5ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ATCCG4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCfIijyqj7u9hPfANW6%2BMu0kM276fmuaOQqG59mIxSrJwIgG2qy%2Fh3ONLLe4SMPnzPPePUMKeiYKbqCBobGzAmVryAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHli2g9gPJgIdgl4%2BCrcA3ELYVafovuBYAXT1h5wq%2FFrwiM%2BjaSYW1X%2FNJtILotx7rXW4vLymEuuk%2BaN73nWUPm3KG2mk7Vu0MJJKS%2FDra1yZ3Fyon6MjUT%2BjhsX7tqH4RKn5KIL0mp58ynqz6n3O0X5vO%2FJUtD%2FHMkWKjcouWkE8DIVa65nCa8ZwwL1YA6xhZn1zgM4ul2FbB1mrd8OmDH7Y%2BbWajQW6FC6g0EC4lAZBa8%2BFALF%2FTAiSgBdQSj1UJT%2FpBQSs2uirX2dEB3gfRXYXjavArgPAB1k3GHeykqWsCVedoZ64z82zzIsEQIOOOpv0ThmLXZoQ2PMVRkB0f6RvSs4h%2Fc7OsdZfm0M6dHKV%2BRp8MUcC%2FB%2BkzLepaJYm0v63WRv5RvT%2BgHz5ffm8KgHD%2Bj%2B6aDTKx1bSUmdhzvP%2Bwzw50iywbOuHJslLxwxa6NCEApy8mYDP3W5WgFvsApj2tUAQ%2F99Fsb%2B9Rbr9CPKA46WMeyielTlMsHsNW4QmVh9BUr%2FpKNbZRYbXg8EjuW%2Fp2bnQSYYH4EU5X%2FhPShyjNFB05Hk5YnYjoaqVlpUGC0JUkNw2uGqMnEVY1gE2pK3KevlC7eiot%2FRxnPfWUM0lEV7QFUOPyHPfNcEDOeG4Iipue2N0CraiXC6MLmFxckGOqUB1qY2NwtX%2FLRgkOlTWDGJEEQgyLRQp8ogyN3d9qSw%2FjxwkawHEdKlr%2BSIpca41IbscDudQs2Ck5KXRoPzxjv1IOYbAhOcDfoKa0fo0yZ2FjFFVI%2BMEwkaSikAiLqjg1LH6W7gFI%2FvToYUFqja8%2F3%2Bi5EnOhJ17VXCo5hA7ATgZbWA%2FySEDrs0Unzx%2FnFIGoVc0PtusOm%2FZbDiySrULOMPjrfhXpKp&X-Amz-Signature=df478de72b5c8b19c3f24be556361ca00b10ac0192c40561de2fe5fab29b5494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
