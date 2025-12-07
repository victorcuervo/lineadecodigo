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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56XPTPJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMvUcdIMP%2FRk7ndNsrAFfoTieJ2NyumiCdDudepvqKmAIgSexFMqD0y0v%2BM7xJspdqxoLuOOgpDNCUu0AU%2B9E6JQcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC6uWFFsnYjHcpgcCrcA%2FGbEJrHTqu5ubFLFiXBn3onwaylNj9Zdy5Xixd9S1NHan4YshGkr01Zn7d50iEwNpupzH7QlTHodIVauregvg5MNY%2FWh0e84hXwHDJvh%2BC1v5BSXkBwSQTPvunH5w3jI%2FRA5dYPS%2BgjcsZ%2FHzLnc8o4lmHeEMUAy%2FNNmOR6Q3UUZEY%2F5ae%2FfwbSAbv%2B%2B0KsIUtkmXFPiwFPjGTx6d%2FGO2cuAjR4SsDUVpakq2hhEQ2OYgX8Blw5CQ30DvJP2e2gaQ6W59iKh4DZQLc9ZTzfv%2FkPkIHMqM%2FNup%2BFEKhY3LA66KRylv4gtrKBTXaUitU4yyhlPE1%2BnG6DbGdrcrtgy0pqqt9FOXqZ0stENgRSM74QT3fTwbzJOjsDSeBgGzGsPLKynAX2zPS8uKTEZyTbWYjwYkh%2FxNawccCiiWEGiyPgqDP8NqbFeQLxN6mbo5ZQufTpIRpmF%2BusChYoq3vaBpqDFN1fEO3%2FhhAE03K37wUxHGSM8lP0tb7YddKI1cVOjgY%2FZ%2B%2BhwpiAnmv7oLBP8BmZFWwsx37WTNQ6vw%2BE9xTbA3Cap57yFKJKhvPQavN%2BxlzxI%2F7h8k9NbyPAkCD1%2BrKt9qpZwOrdvtVNEnlYF6F%2F42YSmXkQdZqRJ6kDMOyc1MkGOqUB36%2FQjyW%2F55eg%2FNx6Q%2FtKpuvuQQTQ2eBO1ne0Cp3nN04ItOcNjljNB23R1okkxI9T%2BrKRhd4v1myATzn7zzJIf0IuYj9CJWHiKVhzlJ1EFQVslSg4hf5Od5m8DYuU1C6NszkM7p17o21OEBi6Fg1VqBIDDi02L4LDIjnE9AZxh2JOAA2MlqmjlRKkAz3sXCChnQA6tvqQqH8N8e4Vmsf9DIeaA1xc&X-Amz-Signature=0c9ff851b8c7048d4178be5f7de88f1937968157056ea013fd2b9d10822fe7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56XPTPJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T084051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMvUcdIMP%2FRk7ndNsrAFfoTieJ2NyumiCdDudepvqKmAIgSexFMqD0y0v%2BM7xJspdqxoLuOOgpDNCUu0AU%2B9E6JQcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC6uWFFsnYjHcpgcCrcA%2FGbEJrHTqu5ubFLFiXBn3onwaylNj9Zdy5Xixd9S1NHan4YshGkr01Zn7d50iEwNpupzH7QlTHodIVauregvg5MNY%2FWh0e84hXwHDJvh%2BC1v5BSXkBwSQTPvunH5w3jI%2FRA5dYPS%2BgjcsZ%2FHzLnc8o4lmHeEMUAy%2FNNmOR6Q3UUZEY%2F5ae%2FfwbSAbv%2B%2B0KsIUtkmXFPiwFPjGTx6d%2FGO2cuAjR4SsDUVpakq2hhEQ2OYgX8Blw5CQ30DvJP2e2gaQ6W59iKh4DZQLc9ZTzfv%2FkPkIHMqM%2FNup%2BFEKhY3LA66KRylv4gtrKBTXaUitU4yyhlPE1%2BnG6DbGdrcrtgy0pqqt9FOXqZ0stENgRSM74QT3fTwbzJOjsDSeBgGzGsPLKynAX2zPS8uKTEZyTbWYjwYkh%2FxNawccCiiWEGiyPgqDP8NqbFeQLxN6mbo5ZQufTpIRpmF%2BusChYoq3vaBpqDFN1fEO3%2FhhAE03K37wUxHGSM8lP0tb7YddKI1cVOjgY%2FZ%2B%2BhwpiAnmv7oLBP8BmZFWwsx37WTNQ6vw%2BE9xTbA3Cap57yFKJKhvPQavN%2BxlzxI%2F7h8k9NbyPAkCD1%2BrKt9qpZwOrdvtVNEnlYF6F%2F42YSmXkQdZqRJ6kDMOyc1MkGOqUB36%2FQjyW%2F55eg%2FNx6Q%2FtKpuvuQQTQ2eBO1ne0Cp3nN04ItOcNjljNB23R1okkxI9T%2BrKRhd4v1myATzn7zzJIf0IuYj9CJWHiKVhzlJ1EFQVslSg4hf5Od5m8DYuU1C6NszkM7p17o21OEBi6Fg1VqBIDDi02L4LDIjnE9AZxh2JOAA2MlqmjlRKkAz3sXCChnQA6tvqQqH8N8e4Vmsf9DIeaA1xc&X-Amz-Signature=56b70806129bdee2a763754675362edbe62fc05139ac4700c84a35ac8a3363ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
