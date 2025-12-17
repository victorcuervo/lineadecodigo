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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ATFYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkJApa793FgJH%2B26DHaM3gPMCbcKHl369RINOMN0TuzAiBb%2Fqy6ZE7zUZYDDmTjKKVnTDR%2BFeb1%2FXsv18OoSoLPuSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMB2X0vf66KG6CrahyKtwD4mTC0GIPGKhNXqIcaKlfj8kgty9lp79SzjLshsppVvrgPnsEw%2B7MN7rN91cBnm8XdkmNXd6%2Fjmnw6u5%2Fr3W%2Ff5OvoBAaRAVR5l7KFs%2FwSnf3t4saS1eR9tkf9%2FA7acsEMgGXTQPI8JVR6rJq7zJv7PiRLER2q%2FLXUYFOZAz8xOMdEDvIM3AZo9hGYN3ve9WVzZ1mCY3rbl%2FOL8NEHXAW3ANZ6GXTCXJkmr7qP9XRADg0QeFRnPtD1HSwdTyN1CveH5COfiT8hF5xKqymU6WEchAThnMQZqMOvMhvjDQlOAVXSBjaJGzBcOQeUS2v7VcBuMRe8C7JbnQ1ogc9F7HJD9JZ%2FLnDouhd52V2pr2dvqvOOtxvyLaO5DZ6a1rkxgLiRbPAXzvG3wHv88oMHPjFCTXSUKQlcB4vUCL5pACBTySZtTL%2FLGhHWcsx6JbTvMiyfF9Cfj4KPF5reS9YnVmp2b6Dvd%2FABGrRG94k4rTRs3A06hubjuENmhU%2BFiPWaJV6vzsC9qIGpxvQHKvULcU4K%2B%2B0e%2BA3j3N1gPjxIX9Ku%2FjwHoVIbEXM6ntPnqBw82E9s8vjl7t0o%2Ft68NFnTFLM8V9FS94vzEcYVZZ1tapTRpCceMcq%2BDsGudfAX4Mwj%2BGKygY6pgEa%2FEsAihYXG8SqbLH0lLY%2B6IHAIriqTbgviQPCdCNYrSaGcS7XRa89h9vAyAvw7%2FjNOFoY5S9zpDkYUFu%2FPh16cKXLKA0g0qa4oXTK2D%2B3AhzY2de5U36A9ydEZItrKGSUgcAQV0NX8duM%2F10JtG%2BB9y0A7pufBvXtEcS3Wa5OBA9DS2feWOHLh5L50c24DUhYoQ8Se4h3dw3IIOC4yxViVDfB%2BVrc&X-Amz-Signature=f8864ac319c3ea4e9a4a09d2541cc83dc71dd7b299f5508af77e09edeba43d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ATFYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkJApa793FgJH%2B26DHaM3gPMCbcKHl369RINOMN0TuzAiBb%2Fqy6ZE7zUZYDDmTjKKVnTDR%2BFeb1%2FXsv18OoSoLPuSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMB2X0vf66KG6CrahyKtwD4mTC0GIPGKhNXqIcaKlfj8kgty9lp79SzjLshsppVvrgPnsEw%2B7MN7rN91cBnm8XdkmNXd6%2Fjmnw6u5%2Fr3W%2Ff5OvoBAaRAVR5l7KFs%2FwSnf3t4saS1eR9tkf9%2FA7acsEMgGXTQPI8JVR6rJq7zJv7PiRLER2q%2FLXUYFOZAz8xOMdEDvIM3AZo9hGYN3ve9WVzZ1mCY3rbl%2FOL8NEHXAW3ANZ6GXTCXJkmr7qP9XRADg0QeFRnPtD1HSwdTyN1CveH5COfiT8hF5xKqymU6WEchAThnMQZqMOvMhvjDQlOAVXSBjaJGzBcOQeUS2v7VcBuMRe8C7JbnQ1ogc9F7HJD9JZ%2FLnDouhd52V2pr2dvqvOOtxvyLaO5DZ6a1rkxgLiRbPAXzvG3wHv88oMHPjFCTXSUKQlcB4vUCL5pACBTySZtTL%2FLGhHWcsx6JbTvMiyfF9Cfj4KPF5reS9YnVmp2b6Dvd%2FABGrRG94k4rTRs3A06hubjuENmhU%2BFiPWaJV6vzsC9qIGpxvQHKvULcU4K%2B%2B0e%2BA3j3N1gPjxIX9Ku%2FjwHoVIbEXM6ntPnqBw82E9s8vjl7t0o%2Ft68NFnTFLM8V9FS94vzEcYVZZ1tapTRpCceMcq%2BDsGudfAX4Mwj%2BGKygY6pgEa%2FEsAihYXG8SqbLH0lLY%2B6IHAIriqTbgviQPCdCNYrSaGcS7XRa89h9vAyAvw7%2FjNOFoY5S9zpDkYUFu%2FPh16cKXLKA0g0qa4oXTK2D%2B3AhzY2de5U36A9ydEZItrKGSUgcAQV0NX8duM%2F10JtG%2BB9y0A7pufBvXtEcS3Wa5OBA9DS2feWOHLh5L50c24DUhYoQ8Se4h3dw3IIOC4yxViVDfB%2BVrc&X-Amz-Signature=0f93c49d808ebadfd28e0328045af4b34f2654e87a89a30ed0c28683fe98f1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
