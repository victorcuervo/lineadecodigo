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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4ODDPR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW4%2B8Q1sT6TQb2UyB%2Bz1loUfPFkp4MF2zIMRN4quX1eQIgQnJNznQNmg0Gdvu8%2FEC%2BzLH8POglkxQqEwNoZ9p0gRgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDM%2BmKY5xO2r1iIyqpCrcAwlLT32WWDvJaBYnuVKdsGma%2B5OXNsUeDNvEO5JI%2FveamLkGaUXsLytHKKd3jeqGfTRfJRuJfv0DnpPVfqO%2BgkXU1vT1aOtDhCN5%2FbZLIbthQDwWjLun8VoetETzaLRqh6Yfqta%2BOMb5RB5e9HYwKK5QOAZr14kneYCivQDEVV8Qbs5%2B8qyi3RFS8YSH1bazQ9LWrF7XO66ALhToHCtzdIrpeKFPyziMg7Q0Mpk8D5xe42pO3OmqBRuskGkfAKPNmR8MhKuMswUVGmwYd9KRVM%2F9fWvkUBM9fPOI9G6yQZIVhJepFTbha1CZRk4Yi7SxPQ%2BJBT5g1%2FNybdzSZpK%2BD8yCI841362pk6vIcYT8sH46g7BAxInbnH2ZOEDrEvsJCq%2Bh1aA%2Brw09cYa1F2GJhZFxUYpl7DZ%2FXrFy0Bga9QUfza%2Bsq%2BiBDkpVYfXjGx5RixqG3yLLX%2FuQiqE3rgeQloNQdloe8RhGpE6xApFWo4lJmLij1AaNTaSs6UwGbS0SFdde6rGGeM1ZEf9AeVKx75IDn1SLDaCbsKaV6iD4LKE%2BlI%2FZnCEwOp1Asa08hjTgfJgDXxxCviviHiemcRPn2zJjjgvSp9WND%2BWFGV491V%2B15EyGO8ikRAUme1FgMP2yiMoGOqUBOMeRheB3etGZJTL%2FT8F79GmJ%2FikeyAr9imVwKFJ0IU1i%2BLK7TPENjTmONOCIQBpbPZQ9OGuBkn3rcB6G8eZZxGYwkEC7GsgsPziC59iPBUuj6qY%2BKbc1UFE88N%2BBQFIt00zL7298H1LkTNjclhjbxYuek5g94oBj4Dj9NEzjjIZyuTrSTtunbAEQCUNcVCttpyUP0ekIEfYSFxND2FejFuF%2BpEJT&X-Amz-Signature=5a112f282861f4c7a568f1da29a3971ed0bab09f073872cc2e52e99847f3b080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4ODDPR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW4%2B8Q1sT6TQb2UyB%2Bz1loUfPFkp4MF2zIMRN4quX1eQIgQnJNznQNmg0Gdvu8%2FEC%2BzLH8POglkxQqEwNoZ9p0gRgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDM%2BmKY5xO2r1iIyqpCrcAwlLT32WWDvJaBYnuVKdsGma%2B5OXNsUeDNvEO5JI%2FveamLkGaUXsLytHKKd3jeqGfTRfJRuJfv0DnpPVfqO%2BgkXU1vT1aOtDhCN5%2FbZLIbthQDwWjLun8VoetETzaLRqh6Yfqta%2BOMb5RB5e9HYwKK5QOAZr14kneYCivQDEVV8Qbs5%2B8qyi3RFS8YSH1bazQ9LWrF7XO66ALhToHCtzdIrpeKFPyziMg7Q0Mpk8D5xe42pO3OmqBRuskGkfAKPNmR8MhKuMswUVGmwYd9KRVM%2F9fWvkUBM9fPOI9G6yQZIVhJepFTbha1CZRk4Yi7SxPQ%2BJBT5g1%2FNybdzSZpK%2BD8yCI841362pk6vIcYT8sH46g7BAxInbnH2ZOEDrEvsJCq%2Bh1aA%2Brw09cYa1F2GJhZFxUYpl7DZ%2FXrFy0Bga9QUfza%2Bsq%2BiBDkpVYfXjGx5RixqG3yLLX%2FuQiqE3rgeQloNQdloe8RhGpE6xApFWo4lJmLij1AaNTaSs6UwGbS0SFdde6rGGeM1ZEf9AeVKx75IDn1SLDaCbsKaV6iD4LKE%2BlI%2FZnCEwOp1Asa08hjTgfJgDXxxCviviHiemcRPn2zJjjgvSp9WND%2BWFGV491V%2B15EyGO8ikRAUme1FgMP2yiMoGOqUBOMeRheB3etGZJTL%2FT8F79GmJ%2FikeyAr9imVwKFJ0IU1i%2BLK7TPENjTmONOCIQBpbPZQ9OGuBkn3rcB6G8eZZxGYwkEC7GsgsPziC59iPBUuj6qY%2BKbc1UFE88N%2BBQFIt00zL7298H1LkTNjclhjbxYuek5g94oBj4Dj9NEzjjIZyuTrSTtunbAEQCUNcVCttpyUP0ekIEfYSFxND2FejFuF%2BpEJT&X-Amz-Signature=58cac5e8628cb9a6fc8f8fb76040cd91dce7f93c65b354d2eb95a2b4a85e7db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
