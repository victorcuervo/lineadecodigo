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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGH3KZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL0t0A5o1MLLJSHm5I7M0VHM6irHP3ngnKtWLB0i48ngIgaf2fNpLTm2ZIRnZqB%2B2aLydU%2B45aV2%2BcBPBUxiEFH78qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZLArVKYg32IQA91yrcA5ZFaPn8y1WNwMZPZflry3FBPFu1ps2lOPXSmWmLh3jLcvKjJgTlYHeJLqFhT0N6%2BUQXRC3HAzSYaAH0XKmPZ92p5zKWiF5r2hY02Ul9uVd4iM7JDZZFzBc6PXUQaQkgWi1hiAwZtwKpXC3XE2MEORmbFoefZ2jxeW8ywII9EqLtaukZGVHtU0%2FM%2FldSVIPPza1arw227EitXmh6D%2Blgu%2Bq6i4QPoxcVgwCoFz%2F7TjoFnuuGNJu20iT0q3EACW%2BHFncuqlhc7H2pVsrTThtREFNB091cRuFYKd0Lw%2FLlbLiADJQzJFNsMKClxjMqJHvPG1V4SUINX4ovVKEftKaZgTy6fb2UKQuo%2B7ikiCx6FcTNT5CwtcC7DrKP06RJLgYJNk2Db8hEWpLI87BPuxXf4Y8ZBtJoKd8D0i%2BdgEupo5Gv7G2b5K8iU2u0wvQrwDSW0rf03t5kjQyDiM0JjDAGt4SrZcJnqf6Ko%2Bkwqb58HwyqY9o4yHnCes0yIYl7Q19r8y%2BBLHBvTEmMH2rD%2FkfyEouklybdcK%2FxzucpTAYOUiloo06qkf3WpJvzXp6JSI%2FqHy7AJYpTYKwZE%2F6cZKuFs5d2W4EwvfnuwHcCkdr1MWULqFoyfIZ3WDN4AVCiMKGa1ckGOqUBtjoRrFls3NHLWdZRzOBPvxkvcD6oqYqyu8BDob1eqKE8JeM%2FHt9C90ahh2Hzy8fsZpjfTVdyGoazpUuWrPyal2MYbKrdRGn6TKM29KNRroTZhWVDr8z9qX7P%2BtIFdb8PB5nKPqThkVKx22qlRpFvO%2Bi%2Bx4l9lK%2B7JbFmJwKflHBN3rT9cDm9Z98ahq884zbc83crwOhBCEY6HcQ902c%2Fd6VYKjRj&X-Amz-Signature=24bb911ce6b2b68b81cd52ec7269e3d0884b87929a5432e6e999ba547534022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGH3KZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL0t0A5o1MLLJSHm5I7M0VHM6irHP3ngnKtWLB0i48ngIgaf2fNpLTm2ZIRnZqB%2B2aLydU%2B45aV2%2BcBPBUxiEFH78qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZLArVKYg32IQA91yrcA5ZFaPn8y1WNwMZPZflry3FBPFu1ps2lOPXSmWmLh3jLcvKjJgTlYHeJLqFhT0N6%2BUQXRC3HAzSYaAH0XKmPZ92p5zKWiF5r2hY02Ul9uVd4iM7JDZZFzBc6PXUQaQkgWi1hiAwZtwKpXC3XE2MEORmbFoefZ2jxeW8ywII9EqLtaukZGVHtU0%2FM%2FldSVIPPza1arw227EitXmh6D%2Blgu%2Bq6i4QPoxcVgwCoFz%2F7TjoFnuuGNJu20iT0q3EACW%2BHFncuqlhc7H2pVsrTThtREFNB091cRuFYKd0Lw%2FLlbLiADJQzJFNsMKClxjMqJHvPG1V4SUINX4ovVKEftKaZgTy6fb2UKQuo%2B7ikiCx6FcTNT5CwtcC7DrKP06RJLgYJNk2Db8hEWpLI87BPuxXf4Y8ZBtJoKd8D0i%2BdgEupo5Gv7G2b5K8iU2u0wvQrwDSW0rf03t5kjQyDiM0JjDAGt4SrZcJnqf6Ko%2Bkwqb58HwyqY9o4yHnCes0yIYl7Q19r8y%2BBLHBvTEmMH2rD%2FkfyEouklybdcK%2FxzucpTAYOUiloo06qkf3WpJvzXp6JSI%2FqHy7AJYpTYKwZE%2F6cZKuFs5d2W4EwvfnuwHcCkdr1MWULqFoyfIZ3WDN4AVCiMKGa1ckGOqUBtjoRrFls3NHLWdZRzOBPvxkvcD6oqYqyu8BDob1eqKE8JeM%2FHt9C90ahh2Hzy8fsZpjfTVdyGoazpUuWrPyal2MYbKrdRGn6TKM29KNRroTZhWVDr8z9qX7P%2BtIFdb8PB5nKPqThkVKx22qlRpFvO%2Bi%2Bx4l9lK%2B7JbFmJwKflHBN3rT9cDm9Z98ahq884zbc83crwOhBCEY6HcQ902c%2Fd6VYKjRj&X-Amz-Signature=7aa8135a8686bdf6316f25b8f2ef07da28e014e312049b0b77fdc0467323e71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
