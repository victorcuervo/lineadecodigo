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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4PKUDL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE30LW4AnctbPjOSh1xs0BOv6r3ro7mGOL%2Fe6cT54EUAiEAuRGZERIjCNjMIWuYUJe8CZVtjf2ncTLqaP3blqe0cfkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F6hAmkRyGDUxZmjCrcA0%2FKcRzJblt7ibri8yxARm98hDyoiUqULOJ6FpYJtV1TAND4mu3FG8Dvq3L%2BJyWy4Wev1NMRPtUQ6YtaaQWYuNspBOh8f6YPsNPl7wgkyhUb3%2BDasj%2Bw7Rd5kJyqx4hgqeIrnXnmIgs0xGHiMoZNw8jtKxtexPxxba8FktBk0HIdpA4uQcXjBtg5T4nMxcyFceBw46R8c2vf4VN3LsJh5W6qtBLgSCyY5DyPbJYkmTl0XJbmivifZzpUA%2FXgfz4bshKDYaHf7Mg9itzfxv20pMuzChPV1T2UVeZHb%2FFTNebdccxA8g%2F52tLnbS0IcBrRaSTGG4JQela%2FuaVwfdG5jM9jzoRb262i5CDme%2B6%2FvzCV4V9RKQXIa8sWXgZOvYB3mGIipq4zd94%2FTpHFvdI%2BpSJVWQwAxkcd8rjFAdQBH45c%2BxSisp%2FeADekFvOPFWsq2ntp7fH%2Bc71iCQG%2BcoSLKtKHp4BLLGWEUzN%2BIeukXp05hbCBvFMq34KiPVgqv4GIPWaenC4Z%2BTIHCg107E9bfXnShX6QvLPSZ51o1KF%2BIOKlV3HLCJXT%2FqeLcsNFQ%2BNgUcEv530%2BlK%2BbNhcc4x1s9p0v%2FAwxWW3J5RuyK8OibsZrKl22021CZwRKQLz4MP%2Bj1MkGOqUBcf1vHdgqE%2FZmTpcjB6cB110b1uj6jdWEreG%2FQFsMB9DWFlI84tLnOtzo7kE336yBYKg43rReyl3t9f7OKBVtOBL%2FXHyTwjRYbePsg%2FfC5YK3jop0kjoVqeI1fMcDbR7xX2ZYqEsh2ibChNlkRnBZiShixVHgoa6hJWc2B0PRguR6BIu4O7jJfnuevrUh%2FItzOKbdRXUKCElj0O5MAcX3F1c1VW5I&X-Amz-Signature=29ba8594593489f3a15f71a48ed2ec10739c8b3447cc015c2c236450de6f7758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4PKUDL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE30LW4AnctbPjOSh1xs0BOv6r3ro7mGOL%2Fe6cT54EUAiEAuRGZERIjCNjMIWuYUJe8CZVtjf2ncTLqaP3blqe0cfkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F6hAmkRyGDUxZmjCrcA0%2FKcRzJblt7ibri8yxARm98hDyoiUqULOJ6FpYJtV1TAND4mu3FG8Dvq3L%2BJyWy4Wev1NMRPtUQ6YtaaQWYuNspBOh8f6YPsNPl7wgkyhUb3%2BDasj%2Bw7Rd5kJyqx4hgqeIrnXnmIgs0xGHiMoZNw8jtKxtexPxxba8FktBk0HIdpA4uQcXjBtg5T4nMxcyFceBw46R8c2vf4VN3LsJh5W6qtBLgSCyY5DyPbJYkmTl0XJbmivifZzpUA%2FXgfz4bshKDYaHf7Mg9itzfxv20pMuzChPV1T2UVeZHb%2FFTNebdccxA8g%2F52tLnbS0IcBrRaSTGG4JQela%2FuaVwfdG5jM9jzoRb262i5CDme%2B6%2FvzCV4V9RKQXIa8sWXgZOvYB3mGIipq4zd94%2FTpHFvdI%2BpSJVWQwAxkcd8rjFAdQBH45c%2BxSisp%2FeADekFvOPFWsq2ntp7fH%2Bc71iCQG%2BcoSLKtKHp4BLLGWEUzN%2BIeukXp05hbCBvFMq34KiPVgqv4GIPWaenC4Z%2BTIHCg107E9bfXnShX6QvLPSZ51o1KF%2BIOKlV3HLCJXT%2FqeLcsNFQ%2BNgUcEv530%2BlK%2BbNhcc4x1s9p0v%2FAwxWW3J5RuyK8OibsZrKl22021CZwRKQLz4MP%2Bj1MkGOqUBcf1vHdgqE%2FZmTpcjB6cB110b1uj6jdWEreG%2FQFsMB9DWFlI84tLnOtzo7kE336yBYKg43rReyl3t9f7OKBVtOBL%2FXHyTwjRYbePsg%2FfC5YK3jop0kjoVqeI1fMcDbR7xX2ZYqEsh2ibChNlkRnBZiShixVHgoa6hJWc2B0PRguR6BIu4O7jJfnuevrUh%2FItzOKbdRXUKCElj0O5MAcX3F1c1VW5I&X-Amz-Signature=d6217fd37b53cb2b1c8eda76b4348bae4f9c1f7cb3421d89329ae87c34c9ba93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
