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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5IKKIB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC79l1sdQ7%2BijCb2kaqhRPB1NDxaKNAnKyK7DxbRr%2BMJwIgeWSpmLwZCyF6wZXYffm1udaZ3FBWRd4hPmCeiRkzjDQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHSGDzUkyT9E5sEqPCrcA387eqOIJdqiQUS3JPhqZxfKNiho2CIH%2FINKzjHCzXh9QeZ0lKtBM3l%2F5T4FBBYcPq5EWwaB8Ktewapukg3oc2m4ytZpzJO2esC5wJscjdHAvuXPl%2FH3KTPDotlKz19dNKUK9MHUgGVIfw8MpntkZ2Lj%2Foih72J4kranFBzTvlhjPExtWz%2F2wc116rDiyJ6oCDBt%2F99jqLu%2Fl15mW770T4%2BUz4YGFeu5ZbkxGUUK7%2FZQDgKd5hFdJas8BTrKsnduJ7heOTjbvCnwsZDWk4vcfyO0zzkPhNV1zaqF8iOaaOLf6KqGZ9SDY1nuKFgWdvj4PfcDir0FiHOaOjAjjJEVENtIdYfP72rQEoWTE26TvCZxBhU%2BIpmu805rliLCJEhiufnIXjrWR9v97IAyQ5SsZ%2FErlfUPKcB2up2iou%2B%2Fb74mN0W9kVu7qnHpzviq7q1Ttd1VcGoJkHYKsnK2zJtCCHfDx%2Bpn8RI5aFi231%2BS2g6X0afvClaXloeZRns2lkM9K0%2B6NmM6g9drd3jk2AGsfQpCYXamXMXbE%2B3RXyv623GiXnQMHBfspEGtAeTQHq0yEaJH9FkRYSjV%2FXOZcX8IjCu%2FZ9Q1ca53R9IdXN6LgGeMbPwiVOVsmDR45hTFMILF0ckGOqUBNGtOWXZ3bp52eYutluAkPICkD%2Fr%2BVudnxyL7vGR0Dzh9Vlt1fPuqiDPOZbUIwMUDDO4MBBiEnyi6uRmG0CaCJsZqwG2oS0aArWq%2BJtabCe3laVC6Zn6CtsFXSuqQO4oi4PaJIgEW3nZbt4YZoPrtDcndKJa8vngba8rXfVR6ZKVzU2ERYj2%2BvMA3RBftOYtsGgH5qS0%2FzIMmsAoobQ2ukka%2BzNFo&X-Amz-Signature=77d7c393195516497bd819b695994bdad9ff13f8520f6af58913272fb22d7784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5IKKIB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC79l1sdQ7%2BijCb2kaqhRPB1NDxaKNAnKyK7DxbRr%2BMJwIgeWSpmLwZCyF6wZXYffm1udaZ3FBWRd4hPmCeiRkzjDQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHSGDzUkyT9E5sEqPCrcA387eqOIJdqiQUS3JPhqZxfKNiho2CIH%2FINKzjHCzXh9QeZ0lKtBM3l%2F5T4FBBYcPq5EWwaB8Ktewapukg3oc2m4ytZpzJO2esC5wJscjdHAvuXPl%2FH3KTPDotlKz19dNKUK9MHUgGVIfw8MpntkZ2Lj%2Foih72J4kranFBzTvlhjPExtWz%2F2wc116rDiyJ6oCDBt%2F99jqLu%2Fl15mW770T4%2BUz4YGFeu5ZbkxGUUK7%2FZQDgKd5hFdJas8BTrKsnduJ7heOTjbvCnwsZDWk4vcfyO0zzkPhNV1zaqF8iOaaOLf6KqGZ9SDY1nuKFgWdvj4PfcDir0FiHOaOjAjjJEVENtIdYfP72rQEoWTE26TvCZxBhU%2BIpmu805rliLCJEhiufnIXjrWR9v97IAyQ5SsZ%2FErlfUPKcB2up2iou%2B%2Fb74mN0W9kVu7qnHpzviq7q1Ttd1VcGoJkHYKsnK2zJtCCHfDx%2Bpn8RI5aFi231%2BS2g6X0afvClaXloeZRns2lkM9K0%2B6NmM6g9drd3jk2AGsfQpCYXamXMXbE%2B3RXyv623GiXnQMHBfspEGtAeTQHq0yEaJH9FkRYSjV%2FXOZcX8IjCu%2FZ9Q1ca53R9IdXN6LgGeMbPwiVOVsmDR45hTFMILF0ckGOqUBNGtOWXZ3bp52eYutluAkPICkD%2Fr%2BVudnxyL7vGR0Dzh9Vlt1fPuqiDPOZbUIwMUDDO4MBBiEnyi6uRmG0CaCJsZqwG2oS0aArWq%2BJtabCe3laVC6Zn6CtsFXSuqQO4oi4PaJIgEW3nZbt4YZoPrtDcndKJa8vngba8rXfVR6ZKVzU2ERYj2%2BvMA3RBftOYtsGgH5qS0%2FzIMmsAoobQ2ukka%2BzNFo&X-Amz-Signature=f27c288d7e8106b3f0f61e8481eb0388d18b1120d531defa53d84dad2a9433e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
