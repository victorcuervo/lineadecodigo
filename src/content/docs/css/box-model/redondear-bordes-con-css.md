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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655M65XPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERjTnPKIyRHrMxQHWccQ6%2BsfhhzwoYeqxo1Q61QsFwEAiEAlv9JHyfLgjuhAih6dbMucHF4mSHPQnO1waD%2B2yjnMjwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJFQXvLFU%2BAnpXTMjircA0oyU%2Bb8BzDBcLTBTWQ7XCy%2BFiqPVUc49R7OqMN8jUN%2FwJubHbZ2ObcuBIfYEygzUc5pO9mpitOiCOjqlhnkihqUvTE3H8aTNHq6eABCi0%2FI5fdFPPgAHfgB5ICCpTB%2B7w17TlFawQkULtLDQFoZkgk4xToZKGWza7X5%2Bakm1oytRAIA51UpUx2RKZ92W%2BhkY%2F136gggvC%2BIMRqmCGhdnT2lYy4caWUk20iz8LJlAV0XP%2B%2FFh%2FbJY33naMYVgzj6c08U5MnIsYx52K1R2GLovBLTtVsTIV96pJUkUeozhsQejKBf9PIPi%2FURharHHFjJtEKzY33JZpzjB9PHZSoVnJ4gIjp4Vu3T1BiJIXCDYJgBUGAxkBzN%2Fdi2febTqGZ6PzwcAGDVph2hs%2BEBzfDOpATS1MAWcaIsDqTKeMTKkrkQpqM608u7vAN%2Bfskzb9rsRShn5mF7F4ao0vwg%2B4Lh3AdnAsh3SgzgHwIomYp%2BES21rcK7ZOV5e5TUt%2FerVzGhO0vefoQ%2BFuHOHHMPE8sl8uOX8UJlDMu86B5VfWZuXNl8sF4ae3aotFuWMd268uUD22s7p9MJGXuX0GTu%2B4ZNKqYkzEfKyql6NZEt80UX6682KbsXo7dvdPXU3dd6MJ6PisoGOqUB0ehLD%2BZj8rkJYAjwY%2BTI1HSrExHtxZ%2BG%2BQ9yWhPHPI2B73ZeJIM239v4JmcOxfCyd17YfDMwRLvJ2S7ar0s6uLgSLkTQKrZFHiv92wOYDNV5MLams8spw6DB21x4ILUBKmI4kUDHNIhvDCkZbNuvoLv2SpG01aQLRLUeUVOpdqNgjidWrUjDm7XYyC34Xov5ZVz%2BKJlg9eJ8B%2FICThkBJAmSeQRg&X-Amz-Signature=e77a7c6aa098a44aacc407665554fe9f427ba210f8e860f29244a20201a1b887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655M65XPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERjTnPKIyRHrMxQHWccQ6%2BsfhhzwoYeqxo1Q61QsFwEAiEAlv9JHyfLgjuhAih6dbMucHF4mSHPQnO1waD%2B2yjnMjwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJFQXvLFU%2BAnpXTMjircA0oyU%2Bb8BzDBcLTBTWQ7XCy%2BFiqPVUc49R7OqMN8jUN%2FwJubHbZ2ObcuBIfYEygzUc5pO9mpitOiCOjqlhnkihqUvTE3H8aTNHq6eABCi0%2FI5fdFPPgAHfgB5ICCpTB%2B7w17TlFawQkULtLDQFoZkgk4xToZKGWza7X5%2Bakm1oytRAIA51UpUx2RKZ92W%2BhkY%2F136gggvC%2BIMRqmCGhdnT2lYy4caWUk20iz8LJlAV0XP%2B%2FFh%2FbJY33naMYVgzj6c08U5MnIsYx52K1R2GLovBLTtVsTIV96pJUkUeozhsQejKBf9PIPi%2FURharHHFjJtEKzY33JZpzjB9PHZSoVnJ4gIjp4Vu3T1BiJIXCDYJgBUGAxkBzN%2Fdi2febTqGZ6PzwcAGDVph2hs%2BEBzfDOpATS1MAWcaIsDqTKeMTKkrkQpqM608u7vAN%2Bfskzb9rsRShn5mF7F4ao0vwg%2B4Lh3AdnAsh3SgzgHwIomYp%2BES21rcK7ZOV5e5TUt%2FerVzGhO0vefoQ%2BFuHOHHMPE8sl8uOX8UJlDMu86B5VfWZuXNl8sF4ae3aotFuWMd268uUD22s7p9MJGXuX0GTu%2B4ZNKqYkzEfKyql6NZEt80UX6682KbsXo7dvdPXU3dd6MJ6PisoGOqUB0ehLD%2BZj8rkJYAjwY%2BTI1HSrExHtxZ%2BG%2BQ9yWhPHPI2B73ZeJIM239v4JmcOxfCyd17YfDMwRLvJ2S7ar0s6uLgSLkTQKrZFHiv92wOYDNV5MLams8spw6DB21x4ILUBKmI4kUDHNIhvDCkZbNuvoLv2SpG01aQLRLUeUVOpdqNgjidWrUjDm7XYyC34Xov5ZVz%2BKJlg9eJ8B%2FICThkBJAmSeQRg&X-Amz-Signature=a851a19c21e9e646b4674cdf8d18255f518c47a0b7600163b38e6be3e3b64095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
