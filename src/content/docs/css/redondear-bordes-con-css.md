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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6S2IJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkgNhveHY6nMqt2Bo%2BmKeDip6xvdt1PyPWbxSX4UixkwIhANpc5%2BjziOHyl1v0OqLnPnWREAGRZzLUKL%2Bu1bmQrXhcKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO2sf5k88QzrlVZs0q3APyyvI84%2BIVh9X%2F5jZoOJqskQx4XkfW4fdAxwe%2B8PmaNyfZEjXZTGClEMU4tUsToCF2Bv7u0ui78EdrmS8fjcqYKu25KO%2BNkhabIX3DyX2iiMsLkqwAOY%2B7Yopgwsftu%2F%2Fyb6eJxyVbrUH82QFQXFqIKJcWJixMRaCq4fo3xQzApf5zY%2BRqJB4mxnuIvaNLYTUPjH4gRMlOlrJTXVU3DCcnii1he3RajH%2F7gj953E7ASV8g5ht0E9DhJPs%2FSHq17ivvqbKV2wuOtQ7VLGDjTkVy%2BmhuEH81SGV6Gn6C6iuCidK%2BcRtAL8wICBKI1qI3KaKu1Dw3kuoAAk8qzQkaksbUoyUp2xGGdZ9VA6IMUDII3%2FUmUImg2o408dfoG6JuXimENL3aL17fVpgARYNkAOypLWaDv2NVo69S0lYB%2BbdLLb9%2FWm%2FRzal3rAEmWBbYB3Ezi0L4RcJuy0MOq0WL8KqxVxGfCwhLwsEEpMvu%2BsIzEB4cWZdJWhHQFPYko5O7SHM5f%2FjZL0k3svF0T0padLFnnlwRrn5JV07MwRSLE5Vm989wNW3aXqrOcPFntBwWltT8%2BoHxY4Jlet0M8KYrU688xrVZ2%2FEtFho5O3rKuEXRqVkRbamGc%2FHqAoz3yDDqx9fJBjqkAev%2BdIC%2FZ8UsO9%2FkChYMETVgM8p9R84JLixEpmJFcI%2FiaZkAuRwlUE0TugRGgbm4xWdve4WLiidtExMFwN3wWlPqG6LT5ZceDE7%2B8RWCLS3aTzmhs8Bsd7fHxfR06XWh4Fg8%2FxW183XJyP4pnp9C%2F5J5khEWPmPbUvoi%2FYpBy%2BjA8Y6%2FvaeEYrsrYpRFWfPUS9PeY9%2B8288FJWwbJMu1a2IjFGa8&X-Amz-Signature=462202674faf69d727e2a787286d74965b83bdb0e1e611f97f0ace853dd7e4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF6S2IJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkgNhveHY6nMqt2Bo%2BmKeDip6xvdt1PyPWbxSX4UixkwIhANpc5%2BjziOHyl1v0OqLnPnWREAGRZzLUKL%2Bu1bmQrXhcKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO2sf5k88QzrlVZs0q3APyyvI84%2BIVh9X%2F5jZoOJqskQx4XkfW4fdAxwe%2B8PmaNyfZEjXZTGClEMU4tUsToCF2Bv7u0ui78EdrmS8fjcqYKu25KO%2BNkhabIX3DyX2iiMsLkqwAOY%2B7Yopgwsftu%2F%2Fyb6eJxyVbrUH82QFQXFqIKJcWJixMRaCq4fo3xQzApf5zY%2BRqJB4mxnuIvaNLYTUPjH4gRMlOlrJTXVU3DCcnii1he3RajH%2F7gj953E7ASV8g5ht0E9DhJPs%2FSHq17ivvqbKV2wuOtQ7VLGDjTkVy%2BmhuEH81SGV6Gn6C6iuCidK%2BcRtAL8wICBKI1qI3KaKu1Dw3kuoAAk8qzQkaksbUoyUp2xGGdZ9VA6IMUDII3%2FUmUImg2o408dfoG6JuXimENL3aL17fVpgARYNkAOypLWaDv2NVo69S0lYB%2BbdLLb9%2FWm%2FRzal3rAEmWBbYB3Ezi0L4RcJuy0MOq0WL8KqxVxGfCwhLwsEEpMvu%2BsIzEB4cWZdJWhHQFPYko5O7SHM5f%2FjZL0k3svF0T0padLFnnlwRrn5JV07MwRSLE5Vm989wNW3aXqrOcPFntBwWltT8%2BoHxY4Jlet0M8KYrU688xrVZ2%2FEtFho5O3rKuEXRqVkRbamGc%2FHqAoz3yDDqx9fJBjqkAev%2BdIC%2FZ8UsO9%2FkChYMETVgM8p9R84JLixEpmJFcI%2FiaZkAuRwlUE0TugRGgbm4xWdve4WLiidtExMFwN3wWlPqG6LT5ZceDE7%2B8RWCLS3aTzmhs8Bsd7fHxfR06XWh4Fg8%2FxW183XJyP4pnp9C%2F5J5khEWPmPbUvoi%2FYpBy%2BjA8Y6%2FvaeEYrsrYpRFWfPUS9PeY9%2B8288FJWwbJMu1a2IjFGa8&X-Amz-Signature=e3a6d1683c706cf5b4c3e844052f1d6d59e770b554afd03f27410f5b747d3a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
