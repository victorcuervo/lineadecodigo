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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GIRNFP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhiDoChw%2F0hM6Y%2Fi1OOUO1Bov9bP088bx%2BWZgiagpogIgMjuut7109vkOEc2sgpt75H8RGY%2FR4C2GyT1DVT8Mbdoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDO3RDcXP8RZ4Pwt%2BgircAzD5sbJ75Ph%2BwbJjVmgcR77Nyqr1EY6iq1hmKscw1KZf4a%2BgJE9JtI%2BfBvyBKd34vyNg0tZGnJ%2BZyHVy2pqgD9owupgSa3QefugyjbNT5YW2uFxjTgLw8xp%2F87bYI2ovoAr12Biz8GeigyDYqz7MxN6VcuNX%2BsmZlAZB%2B0I1SOIJNuuTkGUcguYhElvW96W18zmFIm4C3W66r0zxFBjcimcmYS748dNRUsEsirx4dFTbqhm%2FGhFQ4cl%2FUQSyfvCbXQbHmHr%2BuE0umR6QGGIzdy5mmGrpZEInmOuC6UydRzR9imZuA6c7mK966OlLPzz378kZhIuGa7EAJVuQglsYtSZP4uOCCdlW4pAKfkZS7Oiu9Iv%2BIZTT1tfKvcQa9ULnKF8Wc5NGCHDoBclf70%2FjiVKXMssHObyzdZlX6sNa%2Fgacc3RjCUYSDJcIZzaCWMy3LPI75d1zb0eF6nkg%2F5hTPqc8PPozBGHYOkAUTWFXYLmSu5qozrI9TB9sRWrDZObxbUpgcezC%2ByhpB0FlDvWz14OfJpUa5MukTGJHX7enmUW%2FvfIz86QyKoTQ8GmAdNEKDQZZlGljOuTqaiZ6sQAH9D815n5Vb3OLGJNTvdZHNPQBf1hnFVT2e8v0pUZ6MI2fz8kGOqUBJ2gQRuZwfBFW%2FtxGyvdRcUvZKMUmwz3OispjAG8d5Qrhu5tb%2Fbiy11gIX%2FqcgxL%2B4kEyi0583YgZMe9Oeqq%2FLJQ4%2F0mFgs%2FGyE1pRZu8XSYPkhAsJjWKopN7EDYA3Tav8oWaSOclTbbM152Nxm5Z5UEUxeyZLGiOVy46KaXtgX7bOQcwVj2KaUFhjmqIxh40BuPTgaBrvRalRubQuc%2BOqbYy1Mef&X-Amz-Signature=c28547325a5d54c64f0d709f3c04d8375520ec275e9d3d9e5d7be0947d6706f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GIRNFP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKhiDoChw%2F0hM6Y%2Fi1OOUO1Bov9bP088bx%2BWZgiagpogIgMjuut7109vkOEc2sgpt75H8RGY%2FR4C2GyT1DVT8Mbdoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDO3RDcXP8RZ4Pwt%2BgircAzD5sbJ75Ph%2BwbJjVmgcR77Nyqr1EY6iq1hmKscw1KZf4a%2BgJE9JtI%2BfBvyBKd34vyNg0tZGnJ%2BZyHVy2pqgD9owupgSa3QefugyjbNT5YW2uFxjTgLw8xp%2F87bYI2ovoAr12Biz8GeigyDYqz7MxN6VcuNX%2BsmZlAZB%2B0I1SOIJNuuTkGUcguYhElvW96W18zmFIm4C3W66r0zxFBjcimcmYS748dNRUsEsirx4dFTbqhm%2FGhFQ4cl%2FUQSyfvCbXQbHmHr%2BuE0umR6QGGIzdy5mmGrpZEInmOuC6UydRzR9imZuA6c7mK966OlLPzz378kZhIuGa7EAJVuQglsYtSZP4uOCCdlW4pAKfkZS7Oiu9Iv%2BIZTT1tfKvcQa9ULnKF8Wc5NGCHDoBclf70%2FjiVKXMssHObyzdZlX6sNa%2Fgacc3RjCUYSDJcIZzaCWMy3LPI75d1zb0eF6nkg%2F5hTPqc8PPozBGHYOkAUTWFXYLmSu5qozrI9TB9sRWrDZObxbUpgcezC%2ByhpB0FlDvWz14OfJpUa5MukTGJHX7enmUW%2FvfIz86QyKoTQ8GmAdNEKDQZZlGljOuTqaiZ6sQAH9D815n5Vb3OLGJNTvdZHNPQBf1hnFVT2e8v0pUZ6MI2fz8kGOqUBJ2gQRuZwfBFW%2FtxGyvdRcUvZKMUmwz3OispjAG8d5Qrhu5tb%2Fbiy11gIX%2FqcgxL%2B4kEyi0583YgZMe9Oeqq%2FLJQ4%2F0mFgs%2FGyE1pRZu8XSYPkhAsJjWKopN7EDYA3Tav8oWaSOclTbbM152Nxm5Z5UEUxeyZLGiOVy46KaXtgX7bOQcwVj2KaUFhjmqIxh40BuPTgaBrvRalRubQuc%2BOqbYy1Mef&X-Amz-Signature=f288a08476bb6bb1a1948983ac19da0f81d01a1523cadba030dcf1e6d7278349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
