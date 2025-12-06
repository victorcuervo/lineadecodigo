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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEHVJ4I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkkWLgtUVM7rAgGoRcnjCn47m1icP5ehgGVnqnuDUfMAiACYkZDoQ284nAfQyUFXzt5Xft2LWEufIjfwd8zcj0cuir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMElFOPJqNGYROc4vjKtwDZwY7SRA9bfb5q5EHlgZyO00DMrAlCQuTnjiL%2FTwNg3iLUZALZQXL6D3SkhGLmL26MeEq2Wd%2FMRYZULlla8JcPSUjJO1eqn4ZAk1MobTgM32K5s8Er0CbZ0Eg%2FFSKLYlJ6SmhIi2fWAMb7DLTvQ9NophyoDok12ClHPBzpCUhQVIdN5eYxQbfdqyHsTctAwoJ04HtVA6tZmPUtnFzeev6ZYle3ogyc9VzyMZqlndr%2B0A2fBUg6CAlm6uF6UCAGpaCPt%2BvQ9XXsc%2F21N1ZZ6GvwtsXZQTPzWR61NPxKbYYeUTazjfwa37GSfAy5B31LlJN2oCwgEcxQ1tF6ZTpS7cFB1UD3hca65LTsU2W1yUDiWLXaonpZx2hMrevptVTfXYoTaUtsa9NpDckSdUXFJU1UoG7Mpj2WiYhJkMZfaW38Ctkp9VHZdMNqydwzHDU%2FaZOaXev7IPxq3gs3SUiE3PzNIQvWudrcyK4GutD%2BEU8FzjILHNVKFDTKSzyYPO4WDcg801HGLEr%2F9iOBdf4E0iSLWywO5Mk7ji6Uxt%2Bk25K3J7WO5yvDSFWdi5uvq9BUoZQnQEsnlEmrnV6hElDhNuKF%2Fi4VY%2B%2BVDVNYKqSw96FvbZVh0RIwd6tqA%2BtyQwwh7DRyQY6pgFHRKF71esvR4t8NYeeMXgrK2r7nXBeMBKbjiCBWcZ9XKSHk%2FQPYqtCewovAjoPn2Yms11iqF9XjLPZiePm8EuwnuGDmTwp1WIb%2BKsvdGvSWtNqBg7V4FKEORWHoeXhCVYQw8K4JPYa2YhNWc9RIgnYaiEVg8mOwemEoSYiLoSoWzwcV2vRfEd%2BgA3nET48G8u33URlpg5w9YZ7l8TDB82I%2BqT4wLkZ&X-Amz-Signature=c00c39b7d1233e595f9d29eef4ebef7208b592a823f07ea18ea629d666f38c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFEHVJ4I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkkWLgtUVM7rAgGoRcnjCn47m1icP5ehgGVnqnuDUfMAiACYkZDoQ284nAfQyUFXzt5Xft2LWEufIjfwd8zcj0cuir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMElFOPJqNGYROc4vjKtwDZwY7SRA9bfb5q5EHlgZyO00DMrAlCQuTnjiL%2FTwNg3iLUZALZQXL6D3SkhGLmL26MeEq2Wd%2FMRYZULlla8JcPSUjJO1eqn4ZAk1MobTgM32K5s8Er0CbZ0Eg%2FFSKLYlJ6SmhIi2fWAMb7DLTvQ9NophyoDok12ClHPBzpCUhQVIdN5eYxQbfdqyHsTctAwoJ04HtVA6tZmPUtnFzeev6ZYle3ogyc9VzyMZqlndr%2B0A2fBUg6CAlm6uF6UCAGpaCPt%2BvQ9XXsc%2F21N1ZZ6GvwtsXZQTPzWR61NPxKbYYeUTazjfwa37GSfAy5B31LlJN2oCwgEcxQ1tF6ZTpS7cFB1UD3hca65LTsU2W1yUDiWLXaonpZx2hMrevptVTfXYoTaUtsa9NpDckSdUXFJU1UoG7Mpj2WiYhJkMZfaW38Ctkp9VHZdMNqydwzHDU%2FaZOaXev7IPxq3gs3SUiE3PzNIQvWudrcyK4GutD%2BEU8FzjILHNVKFDTKSzyYPO4WDcg801HGLEr%2F9iOBdf4E0iSLWywO5Mk7ji6Uxt%2Bk25K3J7WO5yvDSFWdi5uvq9BUoZQnQEsnlEmrnV6hElDhNuKF%2Fi4VY%2B%2BVDVNYKqSw96FvbZVh0RIwd6tqA%2BtyQwwh7DRyQY6pgFHRKF71esvR4t8NYeeMXgrK2r7nXBeMBKbjiCBWcZ9XKSHk%2FQPYqtCewovAjoPn2Yms11iqF9XjLPZiePm8EuwnuGDmTwp1WIb%2BKsvdGvSWtNqBg7V4FKEORWHoeXhCVYQw8K4JPYa2YhNWc9RIgnYaiEVg8mOwemEoSYiLoSoWzwcV2vRfEd%2BgA3nET48G8u33URlpg5w9YZ7l8TDB82I%2BqT4wLkZ&X-Amz-Signature=408221bbc11f0836a5fb2eda22cbf910b03e955bae16dac798beb350921def88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
