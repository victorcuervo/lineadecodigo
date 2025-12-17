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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT27NAPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP0HBaV7z7LzdOYiYmFUO6PL2iuvtPFOv%2FaL13lWtytAIhALmFM49qyzzi2qSpyTBlx2fZoS8HNW%2FJBxEHY3GPOEA3Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzP5cDCyTy1QfohdmYq3APuP2hBtDq8v%2B1U5OXWK7Z1jYBfZ55ZzKPmPgj8DZqMe5ZEAnoa%2FFZrhhuqonUMBRJv9oZNQfA5COaxuTljfTi3M5UPutJuZzGKsgdKXWzjiAAr5lDbD9dD2Nez5rE98apoJgGfSe14M%2BKq26znqLvElB90TPTDipbHm10n2fWeo0a1LRs%2BwLKwaF8REjtOf6%2FW9Cv%2FXgrwZExciYrCBiTL0DgdkXdmdkWrdrm0tb3D%2BRuZoyGnNmGDP8E5kZfKsJ9NGJ0z%2B5G1ODayW9e4%2F6EKfsO%2Bbn6ZlsJZrWrCdHDIz5cD9ywNJAel3nEql9v54RzxIlISFVK50wyOGPOEzc4VLrMIZUafE0jHy6HKUrg6FH7Sr1ATeTvcXdwF87Z0831TUOL1LVNZ5pWrkLdRga3ZQL0yvEcOmvoY40zC8IPI5dO6Ck76eP%2FMF9mDyVZNay2tEi390hiKaufoFA61q212Yt87uwHCmoNQri7wS7%2FZ%2B0M5fWsroQsgxuB2xOV5Ja6jsYOl%2BWfKd2B%2BfsuDw0q%2F5i6Da9wcpoNf%2Fv%2BbfpMwrtDnXHSORcKCm2R4ISYKwjrVbdIBobxEqe%2BoE%2BKAu8mrKwNTfIy%2Bu9m7bas8l05ETFz4b3Bhm6G7pSGyAjCfuInKBjqkAcY5Jb%2BuHViOcoi9hiY2IRo5yYHd1Roe1Rd3QRRNVXY%2BoMkkFlzmIw3IKR02s%2BSxLH6IvgHnlRw%2F7ZrIUbIDHOif26kC1LL4R85LCxfcMxvlUqqwp2%2Bnr%2FSN0bkPh8wyXMxSLT2AMgWdgMVLayF9rCT09ny3JTr3T4suxv2JKdAWb2jdjgHAq16SqyZmvDzLD21pfAYJkeQXhh72fwFGx%2BLR9UPI&X-Amz-Signature=35caf22862f7ee32c30ab9dcbb3355b2df02fa05827f09bed20bc9a5190c2f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT27NAPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP0HBaV7z7LzdOYiYmFUO6PL2iuvtPFOv%2FaL13lWtytAIhALmFM49qyzzi2qSpyTBlx2fZoS8HNW%2FJBxEHY3GPOEA3Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzP5cDCyTy1QfohdmYq3APuP2hBtDq8v%2B1U5OXWK7Z1jYBfZ55ZzKPmPgj8DZqMe5ZEAnoa%2FFZrhhuqonUMBRJv9oZNQfA5COaxuTljfTi3M5UPutJuZzGKsgdKXWzjiAAr5lDbD9dD2Nez5rE98apoJgGfSe14M%2BKq26znqLvElB90TPTDipbHm10n2fWeo0a1LRs%2BwLKwaF8REjtOf6%2FW9Cv%2FXgrwZExciYrCBiTL0DgdkXdmdkWrdrm0tb3D%2BRuZoyGnNmGDP8E5kZfKsJ9NGJ0z%2B5G1ODayW9e4%2F6EKfsO%2Bbn6ZlsJZrWrCdHDIz5cD9ywNJAel3nEql9v54RzxIlISFVK50wyOGPOEzc4VLrMIZUafE0jHy6HKUrg6FH7Sr1ATeTvcXdwF87Z0831TUOL1LVNZ5pWrkLdRga3ZQL0yvEcOmvoY40zC8IPI5dO6Ck76eP%2FMF9mDyVZNay2tEi390hiKaufoFA61q212Yt87uwHCmoNQri7wS7%2FZ%2B0M5fWsroQsgxuB2xOV5Ja6jsYOl%2BWfKd2B%2BfsuDw0q%2F5i6Da9wcpoNf%2Fv%2BbfpMwrtDnXHSORcKCm2R4ISYKwjrVbdIBobxEqe%2BoE%2BKAu8mrKwNTfIy%2Bu9m7bas8l05ETFz4b3Bhm6G7pSGyAjCfuInKBjqkAcY5Jb%2BuHViOcoi9hiY2IRo5yYHd1Roe1Rd3QRRNVXY%2BoMkkFlzmIw3IKR02s%2BSxLH6IvgHnlRw%2F7ZrIUbIDHOif26kC1LL4R85LCxfcMxvlUqqwp2%2Bnr%2FSN0bkPh8wyXMxSLT2AMgWdgMVLayF9rCT09ny3JTr3T4suxv2JKdAWb2jdjgHAq16SqyZmvDzLD21pfAYJkeQXhh72fwFGx%2BLR9UPI&X-Amz-Signature=fd8dedcc59dca6e205b480b6df3b38e974f3f2cdd0a9b85f1fde614e85dc1ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
