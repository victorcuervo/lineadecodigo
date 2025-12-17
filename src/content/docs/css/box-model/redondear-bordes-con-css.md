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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YV7NJW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl7V5Ik%2BygXwJkEP7q%2Bos8DWlvG0y%2B3LqHETsEJMSdUAiAgjh5ZVFWbx6jOnwQq%2Fvg0l2tR3ilpT2P5elwC7DPkair%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMWp%2FxltCd7IROpHRJKtwD7P6iNue5JuwRg1lEmfRFg36%2BTnSqM9rO%2F2cpKb34iWBJ9csM8X8Gi33qRgEu5s1P7j6YzafrcLi8KJiEEy4BHADD9tVXfvDAs%2Bx61MJ1AMT8lfdHrFCt3fwhwpff6BuXGLuQ8ZIrupKKHmIAK7Z5tcIjWXAKnCpYK9AZAFar9j%2B52x1eQt%2FtPemBISCuJcd8Yle%2FxdpXUZTZQmXL97nUyXQT08%2Byp8wJnNvPtI30SfP8v%2BAKdlXvwJEn1GDUGGaWKQqDlPteVOAIQE3sNxXzvj1IQBbjjZ5EfU4I%2BtNUi2iecfYdJU2w3J4ZPHtS4ptGXVd9wuOe8NFntXIHEojQwglJ5Njll3WZ52ZzGzuKMSiQL5a3CacLcQT8a10CG4ELftBw9bk2eAQXI0FnjJoDENmigP9je8V%2BDhbyJyI%2BxsIGaJBXIrBQAs%2FI8AxyjdZukHD%2BnSXB6%2Bm5TafjqYHAT5Qzzu1bW6Jlq6t8vYYJD3eJ%2F7XM6gTu6cBaO7ZaNfVE8hzSbAlwntRESj1GJ11j7tNfxOWgSHSf%2FjbOWZ0e7QT7iZQ%2BxcHFPAQkWl11pbKJ6jv0PiSCh6yv5yliUzRmBQtxKFb%2B14XG%2FBSqdSrVs9zuDsMCO1jwO%2B0nUcUw3qqKygY6pgHanZfUXuBZMHBARQ5SHoEJDaS6UdefC%2BNyYOHtz3pq7324b1PiPGq1zYoqp6D6IDaqrvMZvzLCtjC3k%2Fi3FNnlu5pK%2FMBDuuLDP5DrG5ignSopKSnhkQWMYwlkgUuU8ZW9wNu9ubsHNzr%2BTWIdEAUf21hMBfeF1KWhNrKxT%2BBfaLh1dnO%2Bl7z%2BSUTgeSbQKcmVcUprGfImE9hSpwBMD3zcdi6OxFj6&X-Amz-Signature=6653b49265d3ea36ffa72e9e6769732a251e5d243f0cb6a7212583e9fbb91b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YV7NJW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl7V5Ik%2BygXwJkEP7q%2Bos8DWlvG0y%2B3LqHETsEJMSdUAiAgjh5ZVFWbx6jOnwQq%2Fvg0l2tR3ilpT2P5elwC7DPkair%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMWp%2FxltCd7IROpHRJKtwD7P6iNue5JuwRg1lEmfRFg36%2BTnSqM9rO%2F2cpKb34iWBJ9csM8X8Gi33qRgEu5s1P7j6YzafrcLi8KJiEEy4BHADD9tVXfvDAs%2Bx61MJ1AMT8lfdHrFCt3fwhwpff6BuXGLuQ8ZIrupKKHmIAK7Z5tcIjWXAKnCpYK9AZAFar9j%2B52x1eQt%2FtPemBISCuJcd8Yle%2FxdpXUZTZQmXL97nUyXQT08%2Byp8wJnNvPtI30SfP8v%2BAKdlXvwJEn1GDUGGaWKQqDlPteVOAIQE3sNxXzvj1IQBbjjZ5EfU4I%2BtNUi2iecfYdJU2w3J4ZPHtS4ptGXVd9wuOe8NFntXIHEojQwglJ5Njll3WZ52ZzGzuKMSiQL5a3CacLcQT8a10CG4ELftBw9bk2eAQXI0FnjJoDENmigP9je8V%2BDhbyJyI%2BxsIGaJBXIrBQAs%2FI8AxyjdZukHD%2BnSXB6%2Bm5TafjqYHAT5Qzzu1bW6Jlq6t8vYYJD3eJ%2F7XM6gTu6cBaO7ZaNfVE8hzSbAlwntRESj1GJ11j7tNfxOWgSHSf%2FjbOWZ0e7QT7iZQ%2BxcHFPAQkWl11pbKJ6jv0PiSCh6yv5yliUzRmBQtxKFb%2B14XG%2FBSqdSrVs9zuDsMCO1jwO%2B0nUcUw3qqKygY6pgHanZfUXuBZMHBARQ5SHoEJDaS6UdefC%2BNyYOHtz3pq7324b1PiPGq1zYoqp6D6IDaqrvMZvzLCtjC3k%2Fi3FNnlu5pK%2FMBDuuLDP5DrG5ignSopKSnhkQWMYwlkgUuU8ZW9wNu9ubsHNzr%2BTWIdEAUf21hMBfeF1KWhNrKxT%2BBfaLh1dnO%2Bl7z%2BSUTgeSbQKcmVcUprGfImE9hSpwBMD3zcdi6OxFj6&X-Amz-Signature=aa737e977bd78e35fa43f7b6a7ff34d09a00ead1b6aa74ac9d5bbd269bd0a10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
