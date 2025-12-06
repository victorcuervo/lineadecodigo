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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRKSE7EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSeA7Ja%2BIOzZNgs7xx6enjvuUqHwpD6%2BKBsHi0VqN%2BAIgGbRKkARO8kBjUU%2BAce9C7ihOaJVTeOE7KFbIXMwO7p0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCHHzg76YUaxaB%2Bv6CrcA5jX4N7AlCmRMa4ED7YvmByGz17UbPOZglIQt2yc7yZp02thkZdaM450cEnbUeCsJx8aH5XKqEz9AHhA%2BKdc1sgBO0tS%2B33G73Bg4iuBIY%2FbWmMiLumj1h%2BKWBGako4pcXQ%2F%2F67O3DCjn1goP0X2b0BE9IV7OHw5dLAkqZlRp04upfegzlxtFyKBHK0G5lcRQERJyUDgxhOmlD36HgEc3RnUvcl3yUoAlVrgSUuB5VE9oG3ly6sxbZEVhye1loWTTKe7EfHQhmQsHH8xSPOwKBevZoUvl1MkON8MA%2Fi2QOHpRTK37oUsOiF%2FKB0%2F7gKW2%2BuopiQ5m9TfHsr2OAyRargYvGMQuUG%2BLqs677%2FG1%2FjjliuQf5%2BlV%2BPwi4dk5r%2F0%2FYaNVqRusv0CLKbG3RrhQCarolzwzKGyekCVbGqTaSzqTo1sF2JapAwlSouTKVXWRb%2BhIWxBKoR6q9Y8qGuEHSbXBuJbi%2FjYWcUslquP2VesH5IY6W1UFYugGj%2BnbhVtCp8M5wSNSHk9ADN9xB6PgDuZRzBTcgWFOPJPNc%2BhnILsIbavNv7%2FTZ4JfaE3RguhJTabnBceOFPB47b0qDRXgCHMM4KxTN1wotLi0K9uy%2Fwosi2GSSZqSAyw0FmyMJ%2FezskGOqUBEiujK5KfHFAgtYcQyXjRyfR7UPihCeEvHDPslxHNd7AXlng6ytu%2Fy1%2Fg%2BanTYabdMYOY7RJBespdY8TsmlsKX6vVa85QKB07W6Ve7zc6QrjVOp%2BLPh49Ogvbt4XE6ph%2BXuqtMn0Xr6NMm%2BbbMd59wSnn36Vk54EWcWr3GozeqnaWCU0evXi7xHNkzCSkJDeTL%2B3IMBFmoQGyUp7gjrVgw1pqDxtY&X-Amz-Signature=12885c91a392c5f2d29197c009c8c6f356d7e1135e13007a3136cba6d0c01c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRKSE7EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSeA7Ja%2BIOzZNgs7xx6enjvuUqHwpD6%2BKBsHi0VqN%2BAIgGbRKkARO8kBjUU%2BAce9C7ihOaJVTeOE7KFbIXMwO7p0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCHHzg76YUaxaB%2Bv6CrcA5jX4N7AlCmRMa4ED7YvmByGz17UbPOZglIQt2yc7yZp02thkZdaM450cEnbUeCsJx8aH5XKqEz9AHhA%2BKdc1sgBO0tS%2B33G73Bg4iuBIY%2FbWmMiLumj1h%2BKWBGako4pcXQ%2F%2F67O3DCjn1goP0X2b0BE9IV7OHw5dLAkqZlRp04upfegzlxtFyKBHK0G5lcRQERJyUDgxhOmlD36HgEc3RnUvcl3yUoAlVrgSUuB5VE9oG3ly6sxbZEVhye1loWTTKe7EfHQhmQsHH8xSPOwKBevZoUvl1MkON8MA%2Fi2QOHpRTK37oUsOiF%2FKB0%2F7gKW2%2BuopiQ5m9TfHsr2OAyRargYvGMQuUG%2BLqs677%2FG1%2FjjliuQf5%2BlV%2BPwi4dk5r%2F0%2FYaNVqRusv0CLKbG3RrhQCarolzwzKGyekCVbGqTaSzqTo1sF2JapAwlSouTKVXWRb%2BhIWxBKoR6q9Y8qGuEHSbXBuJbi%2FjYWcUslquP2VesH5IY6W1UFYugGj%2BnbhVtCp8M5wSNSHk9ADN9xB6PgDuZRzBTcgWFOPJPNc%2BhnILsIbavNv7%2FTZ4JfaE3RguhJTabnBceOFPB47b0qDRXgCHMM4KxTN1wotLi0K9uy%2Fwosi2GSSZqSAyw0FmyMJ%2FezskGOqUBEiujK5KfHFAgtYcQyXjRyfR7UPihCeEvHDPslxHNd7AXlng6ytu%2Fy1%2Fg%2BanTYabdMYOY7RJBespdY8TsmlsKX6vVa85QKB07W6Ve7zc6QrjVOp%2BLPh49Ogvbt4XE6ph%2BXuqtMn0Xr6NMm%2BbbMd59wSnn36Vk54EWcWr3GozeqnaWCU0evXi7xHNkzCSkJDeTL%2B3IMBFmoQGyUp7gjrVgw1pqDxtY&X-Amz-Signature=eea3bf1030eb1face6f740c198f3b67685a420909e6eb49a6d8e141d28bf83f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
