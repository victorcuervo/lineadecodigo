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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSILUP2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY7IxZHDBxh7%2B%2BaWGMWVZE3kcvEVOI8GwVh0U4D25ZqAiA9GRI2T90MmNYTf7VK35ydVyYzzzHew%2B81%2BvjFXcrF%2Bir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqRk49oqqhC2Syk4IKtwDkufyiVLuCpeh2bqWpWtXuX0aF6MrQWBU3IRJFgp%2B5o3NOwW%2F%2FmHUj6DtV6BFbQ7LMup%2FC66kXr6qj9f2LyA%2BojQak6ZEh%2F%2FuDdqGMXjJE8l4osIaMEtcpRD2w%2BBXAe5TOwxxvqlw%2FIJcpTf1S%2FmyeZq9iSoe%2F56h0P%2B4NlmCpns2v%2BU76AQ7DPrgbAj62QjZvjkXDhfoV8%2FsdywTCW9eZA0C5wW%2FpkkhovWQma%2FCEiRpbLut8A2dzVVjPJvkNPSAxUj6KPT05zzDX4IEwVl5g4U7DMBxzgX9hYWjgA5pJ7LU6SWxUhB7190Fck%2BjzPLQKUCpoCnNOJu5UZVgyGcGwFpp%2FF99V24jFN%2BsfOduk231CWiYlzr2q3m%2BP1mOSR3Z6VzGFsqsygZbegrCMLX9K93jKJ6F7lfgWwL95CC6x24PmMQXSvn27rXce%2BBUQZ16DsfBed3fnVsiDACzCAbh9nytKoYOFhYbtYD9D818FRP%2BbYZDkPHW9bgA8ZaSqFc0PSt7dti7ydZpvkY2ozWdGwpp2NhIyhQthZu1nghmjwDxCB5CzdWbngNOSWGP5A3lUVr9bqS5QmqSKDktrmsPCmryq6lFJ3k%2Bm2rniTP6vntBBysOV0mocjJ4DDMwrpyJygY6pgHW8PufzGZPRgcj2jAivBMragwrT%2BE6U4FHAZw46%2FNpdvW9SOMG1wZtjnFlUnUp0vDHpmdbx8KkHTmVAIg0GLP9D91z13WO5glJ9PtEPsWa2t0AhoHkZj%2B2dS6FCBXhnzDDNT3KkpMHui0kIBq253HTLwb8lqAPQh4g3n%2Fk%2F%2FywLAqgmM4RrCLO2em15KjGkuXQp29J5cvjfA4ZVD5OTxlrw7F%2BXLMI&X-Amz-Signature=cd6d30aa138455d00628816fa1bac5bbca2c9380e2ea38ff3aa29b4129efbd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSILUP2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY7IxZHDBxh7%2B%2BaWGMWVZE3kcvEVOI8GwVh0U4D25ZqAiA9GRI2T90MmNYTf7VK35ydVyYzzzHew%2B81%2BvjFXcrF%2Bir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMqRk49oqqhC2Syk4IKtwDkufyiVLuCpeh2bqWpWtXuX0aF6MrQWBU3IRJFgp%2B5o3NOwW%2F%2FmHUj6DtV6BFbQ7LMup%2FC66kXr6qj9f2LyA%2BojQak6ZEh%2F%2FuDdqGMXjJE8l4osIaMEtcpRD2w%2BBXAe5TOwxxvqlw%2FIJcpTf1S%2FmyeZq9iSoe%2F56h0P%2B4NlmCpns2v%2BU76AQ7DPrgbAj62QjZvjkXDhfoV8%2FsdywTCW9eZA0C5wW%2FpkkhovWQma%2FCEiRpbLut8A2dzVVjPJvkNPSAxUj6KPT05zzDX4IEwVl5g4U7DMBxzgX9hYWjgA5pJ7LU6SWxUhB7190Fck%2BjzPLQKUCpoCnNOJu5UZVgyGcGwFpp%2FF99V24jFN%2BsfOduk231CWiYlzr2q3m%2BP1mOSR3Z6VzGFsqsygZbegrCMLX9K93jKJ6F7lfgWwL95CC6x24PmMQXSvn27rXce%2BBUQZ16DsfBed3fnVsiDACzCAbh9nytKoYOFhYbtYD9D818FRP%2BbYZDkPHW9bgA8ZaSqFc0PSt7dti7ydZpvkY2ozWdGwpp2NhIyhQthZu1nghmjwDxCB5CzdWbngNOSWGP5A3lUVr9bqS5QmqSKDktrmsPCmryq6lFJ3k%2Bm2rniTP6vntBBysOV0mocjJ4DDMwrpyJygY6pgHW8PufzGZPRgcj2jAivBMragwrT%2BE6U4FHAZw46%2FNpdvW9SOMG1wZtjnFlUnUp0vDHpmdbx8KkHTmVAIg0GLP9D91z13WO5glJ9PtEPsWa2t0AhoHkZj%2B2dS6FCBXhnzDDNT3KkpMHui0kIBq253HTLwb8lqAPQh4g3n%2Fk%2F%2FywLAqgmM4RrCLO2em15KjGkuXQp29J5cvjfA4ZVD5OTxlrw7F%2BXLMI&X-Amz-Signature=26dbf1be092ef004700cf7ca975a3d09ef5dab5e8ee67fb70c57eac72ec587bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
