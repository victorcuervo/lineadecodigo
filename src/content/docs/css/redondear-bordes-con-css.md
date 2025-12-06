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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5TUYMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCNpGE1kkVmMKAfRZ1yysnNQTh9ikyPobkYSPqOuQ4gIhAMhBGga6s3Dq4dr%2FpY%2FeJEaiO38gWKnpwO81FIcEECxPKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZtyLXPZcfrKjm7WAq3AO%2B4KASwZg%2BPUTjtblMgEvRQzut7%2BAe2IyAZUNa2kheKGPX4w1xfGZJFPlaNN8XxFf5jUFItcbtNXu8rnu%2BOAaxaouw9QX9dF3wvWe30pzXRVyDeyWxIQmur4PtMYVdSIjkJT%2B6klH7EalszQsCWpQgkPZ1PU1yoD0J59BaeSSTB3PRBRzv51LgyIxuNnLv6oti%2BgpGuRf5T3lrKhKyGViSQmPDKMeIjDd7RAmN1fDANlSPTFGHI61kxBQ4Hv9Vtsmn8Akg0in5zpuIztKzeEIDb6j8uM%2BQdDh2XIsghmNvdlpu54IaxWOg0wIltGisypce8WM%2BJab0rNcDpE6efsNCqo9W%2BjUcDqeEezWxzyFNq9y%2F2Yoj3vbuuFPKCV6cwMrzC%2FIYVolKpBjKj9shbJ%2BoC3eJHTVXN%2FMQoWcCgM4jI1ZXJePMXhJ3syefKoDW7kYk%2FEev9h%2BIDX7q%2BrJt7E3I99xiZndLQ5TjMBnw0kolAM7HzFDP3%2FSnezkkA7cGUGQu1mExzn%2BE4%2FM9unGK4jZ1x07rjrmh8F7YqhDJE7PUlLDuXOceNAAv9iAfyzQCnWBBKaGkX7chWK5LuxDQ3lxB0Ri0SciiEEBPNxHpCP02Zz9LB8lEtuykYPcbtjCWyNHJBjqkAWJLAiGTI5dMTvxw5aFHxF7PN0ozlHvjpEM4Om9RSoncgRWz1%2FMUUIbrcbNB3tBHVSNimTcFkIZSERnuU8VvMKaVQyJ48kkeSdfn%2BMDkhvbUMceRZMPylRyEBNMCMKTnPudnHiaBNYBjCZ6%2Bndf5V30utBiBnJ2EGdJhwDm497U96XWHd6Qdv731rA0W6O%2B5olCWgx0rieCiTCx6y%2FnjYaFVTkjc&X-Amz-Signature=5d646705fb31ce0c142eb32e1e7b4124cca2a8a575e000a9ebb2bd7683dc0f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5TUYMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCNpGE1kkVmMKAfRZ1yysnNQTh9ikyPobkYSPqOuQ4gIhAMhBGga6s3Dq4dr%2FpY%2FeJEaiO38gWKnpwO81FIcEECxPKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZtyLXPZcfrKjm7WAq3AO%2B4KASwZg%2BPUTjtblMgEvRQzut7%2BAe2IyAZUNa2kheKGPX4w1xfGZJFPlaNN8XxFf5jUFItcbtNXu8rnu%2BOAaxaouw9QX9dF3wvWe30pzXRVyDeyWxIQmur4PtMYVdSIjkJT%2B6klH7EalszQsCWpQgkPZ1PU1yoD0J59BaeSSTB3PRBRzv51LgyIxuNnLv6oti%2BgpGuRf5T3lrKhKyGViSQmPDKMeIjDd7RAmN1fDANlSPTFGHI61kxBQ4Hv9Vtsmn8Akg0in5zpuIztKzeEIDb6j8uM%2BQdDh2XIsghmNvdlpu54IaxWOg0wIltGisypce8WM%2BJab0rNcDpE6efsNCqo9W%2BjUcDqeEezWxzyFNq9y%2F2Yoj3vbuuFPKCV6cwMrzC%2FIYVolKpBjKj9shbJ%2BoC3eJHTVXN%2FMQoWcCgM4jI1ZXJePMXhJ3syefKoDW7kYk%2FEev9h%2BIDX7q%2BrJt7E3I99xiZndLQ5TjMBnw0kolAM7HzFDP3%2FSnezkkA7cGUGQu1mExzn%2BE4%2FM9unGK4jZ1x07rjrmh8F7YqhDJE7PUlLDuXOceNAAv9iAfyzQCnWBBKaGkX7chWK5LuxDQ3lxB0Ri0SciiEEBPNxHpCP02Zz9LB8lEtuykYPcbtjCWyNHJBjqkAWJLAiGTI5dMTvxw5aFHxF7PN0ozlHvjpEM4Om9RSoncgRWz1%2FMUUIbrcbNB3tBHVSNimTcFkIZSERnuU8VvMKaVQyJ48kkeSdfn%2BMDkhvbUMceRZMPylRyEBNMCMKTnPudnHiaBNYBjCZ6%2Bndf5V30utBiBnJ2EGdJhwDm497U96XWHd6Qdv731rA0W6O%2B5olCWgx0rieCiTCx6y%2FnjYaFVTkjc&X-Amz-Signature=b1dd580fe6a874db8772be427579770edad83a2cd88e37635eeef1802d1de83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
