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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y34AVLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZDll0EGkpPrj%2B9odT0O2XLrjx1P1kWjUZrP6cVVzzfwIgWFUzWfdEQomPXgpFHAAuq8rDOoxlRG0tKQ4qdOLXk3AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjVJL60aiYcNHKerircAx1xsq5Uqx9Uik7%2Bv8t5PZ2q%2FcsR4h5rBQBHbXj1hGxpazquo1LR2rSrPtjAsCxKF%2FspZwSMEtHnki5MmoLWLwSm2HogkQOU4iR1gi%2BAlH2NwgznF5xxQlIMHAEOPEsOCZyCem3T90s8iRa44R6kzzcazXy1Uf8tRa0Lx5INwRqw6Wle5Pia5LbQJnRS7%2BSRjFav1RmCVqNaQNONTVLvtdLygMevlRGCvmOAT6N8C0GgD9SMIB%2BFOeChKa%2F8qmUVK5LW5fFTwZg0ZQMAV3SCIdm0zkCew7TkOKwjmbw7cjQDGcIlfo%2FpYpdgJ1l7jeBX9nHZaroaZ1TBRkVDNzcY%2F9TARYoyGsiJPgP3f%2BECHGl9PQCzyCFqrlmF4A7C1MrEBQ5SQj4mMfVDncXuH%2FjVZe9ZTUk08zp8OZkCmyyMMVoE%2FDPdLuaEQczpruJI0Vw6gXghxK%2FW2Xmi8thZP7ZUqvtvX7cpt1hIu1O5CeXR5oge%2BM7OMoTSc8UIZCPAonRUYoHiuESUPwLhstoxyYSDlGUIeVZrZvH3PBK9faw2Y6dsRwesq%2Bn62mwpPjthj9CfNYXDrzbc1lFHgUlp4pu%2Fc0Dhiyqzec1lb%2FrVltjtWkwQ4XlIL4jjjc%2FVNKDUMJ2gi8oGOqUBsYvB5DlLiy%2FDpCPgkb%2BqJdNkMja3x%2ByE4X3YWGoP5TNFS9ApuS3HjS%2FI4dn2f%2F4jytsFtVmZ4d4OiZJlOAvjXeuxcLhMgQzV2Asjxwrue7VEMLF9OGkPiIS%2FG2HR7lAd9WEoH%2FAoehd5qCCburRPxcNN8mPrUWuF%2BkD%2FQTTqF9qcCimKJp0ffSiZegi5hoeI1P%2Bg9xOGg%2FNWWoZL7p7G%2F6k8Xjxo&X-Amz-Signature=242da184ab8af12d149a4549145154a1be5f64e936760e095dca2499bb763afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y34AVLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZDll0EGkpPrj%2B9odT0O2XLrjx1P1kWjUZrP6cVVzzfwIgWFUzWfdEQomPXgpFHAAuq8rDOoxlRG0tKQ4qdOLXk3AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjVJL60aiYcNHKerircAx1xsq5Uqx9Uik7%2Bv8t5PZ2q%2FcsR4h5rBQBHbXj1hGxpazquo1LR2rSrPtjAsCxKF%2FspZwSMEtHnki5MmoLWLwSm2HogkQOU4iR1gi%2BAlH2NwgznF5xxQlIMHAEOPEsOCZyCem3T90s8iRa44R6kzzcazXy1Uf8tRa0Lx5INwRqw6Wle5Pia5LbQJnRS7%2BSRjFav1RmCVqNaQNONTVLvtdLygMevlRGCvmOAT6N8C0GgD9SMIB%2BFOeChKa%2F8qmUVK5LW5fFTwZg0ZQMAV3SCIdm0zkCew7TkOKwjmbw7cjQDGcIlfo%2FpYpdgJ1l7jeBX9nHZaroaZ1TBRkVDNzcY%2F9TARYoyGsiJPgP3f%2BECHGl9PQCzyCFqrlmF4A7C1MrEBQ5SQj4mMfVDncXuH%2FjVZe9ZTUk08zp8OZkCmyyMMVoE%2FDPdLuaEQczpruJI0Vw6gXghxK%2FW2Xmi8thZP7ZUqvtvX7cpt1hIu1O5CeXR5oge%2BM7OMoTSc8UIZCPAonRUYoHiuESUPwLhstoxyYSDlGUIeVZrZvH3PBK9faw2Y6dsRwesq%2Bn62mwpPjthj9CfNYXDrzbc1lFHgUlp4pu%2Fc0Dhiyqzec1lb%2FrVltjtWkwQ4XlIL4jjjc%2FVNKDUMJ2gi8oGOqUBsYvB5DlLiy%2FDpCPgkb%2BqJdNkMja3x%2ByE4X3YWGoP5TNFS9ApuS3HjS%2FI4dn2f%2F4jytsFtVmZ4d4OiZJlOAvjXeuxcLhMgQzV2Asjxwrue7VEMLF9OGkPiIS%2FG2HR7lAd9WEoH%2FAoehd5qCCburRPxcNN8mPrUWuF%2BkD%2FQTTqF9qcCimKJp0ffSiZegi5hoeI1P%2Bg9xOGg%2FNWWoZL7p7G%2F6k8Xjxo&X-Amz-Signature=cf8329a287b3a90e9e96ff47e94797c0ce06054fa71db18b889e9e34f889afc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
