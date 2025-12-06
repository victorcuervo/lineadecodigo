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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5AB4AC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4QGBZTGAkehT96ch1W4rWpJQOAJlb2hDBfatxAxxYgIhAPhuyJIQuAQzmcCD7GLWwP1Tg5sUP0ger1HtgK2nLJX1Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxiRDul5zAou4gm3FMq3AOBWpfmRfR8EBlQD%2FOF9VnLpq3WmPJpXjVL5KyBwcWDmdJvOpzxeTUcN8bLBTvaVAFXuletr7JkETzz2Qv3vP1TL6VwWSFlzdFcZKx%2FqB6C32FVRR4ELc4fMtpl1l5Pk5ILp%2FivJ%2BF6FpmbGmPZG2oOANWvJUF1Ntzhz7ewx7GZi8vhaWp0L9RGmrL4pvJ5COu5y8dP%2FXbTDaVxTJ519aeeB5dRDncK2NishtqNheImCeQ49%2BbWULJCfxXarKuVJptIj7ZM5VUz%2BQ%2Bt94eZBzS7BpEXglnYE5S6O%2BPYEToH5oNfyAqjBwHW24fidj%2FWK03LFYdTkvPJVPclojZeY6qXoQEsmbcbxiAtBIKd9tUP3QpE7zj%2Fdz%2Bvv5kBH9lK4RSfj54zV92RaJeKLsq7pgj3NkCLmKY8YaILigBZ7ZlNGI8JHECzD9d5QXvB4CPB6Us4dTrDHNDbz6auPBE5AEuYc%2BQ%2F4RFh%2BGWAkZt26Bv70iMuKJL1NO8MQ9G2P3Brc6gWVqtUAgbyr%2FCIMU5wKXkJ4WsRdgnlRJVkVtGZ6VeH3FyTNOgtcII1TS2QEHcspw2%2FkkehLmadkhuszbMIhHDN3M8Xs1k3C%2FfSNHCHa9I4GAD6Od6%2B339igR5PSDCWvM%2FJBjqkAYuRVPq2XlMzszDNpBCYWF0%2BBX9LRkNt3kuSSMNAxBXBN8%2FKh4AE8BhkxhBsDvX05n52TEGC6cowTORnBm5APFRQ7rkBHoxKQIe67m7gXJ6dlrcA9GcLca3BTFp2WwpmRcOzsAsL17TuBfimkI6o1PaHpPhMSsS4%2FyoRoiEmXMqTWaFew4PVvtSo5mJ4JkmwBF2WSwzexb58Qql9tIbNqwY27XD4&X-Amz-Signature=c7c2ca79d8309cc7b6a64a6064040b4d0dbbf4039ae93f86483865043cc86aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5AB4AC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt4QGBZTGAkehT96ch1W4rWpJQOAJlb2hDBfatxAxxYgIhAPhuyJIQuAQzmcCD7GLWwP1Tg5sUP0ger1HtgK2nLJX1Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxiRDul5zAou4gm3FMq3AOBWpfmRfR8EBlQD%2FOF9VnLpq3WmPJpXjVL5KyBwcWDmdJvOpzxeTUcN8bLBTvaVAFXuletr7JkETzz2Qv3vP1TL6VwWSFlzdFcZKx%2FqB6C32FVRR4ELc4fMtpl1l5Pk5ILp%2FivJ%2BF6FpmbGmPZG2oOANWvJUF1Ntzhz7ewx7GZi8vhaWp0L9RGmrL4pvJ5COu5y8dP%2FXbTDaVxTJ519aeeB5dRDncK2NishtqNheImCeQ49%2BbWULJCfxXarKuVJptIj7ZM5VUz%2BQ%2Bt94eZBzS7BpEXglnYE5S6O%2BPYEToH5oNfyAqjBwHW24fidj%2FWK03LFYdTkvPJVPclojZeY6qXoQEsmbcbxiAtBIKd9tUP3QpE7zj%2Fdz%2Bvv5kBH9lK4RSfj54zV92RaJeKLsq7pgj3NkCLmKY8YaILigBZ7ZlNGI8JHECzD9d5QXvB4CPB6Us4dTrDHNDbz6auPBE5AEuYc%2BQ%2F4RFh%2BGWAkZt26Bv70iMuKJL1NO8MQ9G2P3Brc6gWVqtUAgbyr%2FCIMU5wKXkJ4WsRdgnlRJVkVtGZ6VeH3FyTNOgtcII1TS2QEHcspw2%2FkkehLmadkhuszbMIhHDN3M8Xs1k3C%2FfSNHCHa9I4GAD6Od6%2B339igR5PSDCWvM%2FJBjqkAYuRVPq2XlMzszDNpBCYWF0%2BBX9LRkNt3kuSSMNAxBXBN8%2FKh4AE8BhkxhBsDvX05n52TEGC6cowTORnBm5APFRQ7rkBHoxKQIe67m7gXJ6dlrcA9GcLca3BTFp2WwpmRcOzsAsL17TuBfimkI6o1PaHpPhMSsS4%2FyoRoiEmXMqTWaFew4PVvtSo5mJ4JkmwBF2WSwzexb58Qql9tIbNqwY27XD4&X-Amz-Signature=4d0fb69f0a06398732f3cd4755c182b5ab19be9f4d583052578c51a4ff4f0a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
