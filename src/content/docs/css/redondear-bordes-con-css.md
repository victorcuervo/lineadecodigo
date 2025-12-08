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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYS5VKF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa88anXkaTd2MceC4z08FRJ3P1Dvv0hzrwRDuJUTyhTgIhANsFtKgdJ3HWO1y3i%2Bx%2FDoU5KXAml7NcM%2FNymguXZ2DoKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ7Aj86h9C%2FioddcYq3AOfqwU%2BPItH5om6g%2Bd%2FN0GcKbwCsS3vXwNuUlOzgWDWySVyrzmgRd0GOSGd8ZwfUBTQGoU3Y1dWT5qhI%2F0trvrjEDm2ymnCU3cbrqkLpX7FHOGifp468aWL1HPDeNtrkXZt%2BrhD3W6LcEeCS70k9jVQ60%2FIgeGe93jD8dVjIGUs4HjUZK7DaA3eVQ2Y0LsDpKGzlS2GRpM54mdO8hRniynTuF%2FzSxsKuZuWRfnSWCDS7pV8S8Jy96rHkerHTVI0Fber7qRq4XQq%2BHIfZtiL5SZ9ULFu4jCFZ04S0DZ4uL4Qwa7fzZ1SKA9FWy0qpFohf3WDL502e89H43of7IYI5QIi9hpvcWvIoD%2F44EYhd66V7kmgapNBnZvNOpXRVzdKhC4kmzOhr9%2BPIZ6XJ5UqbMwAGW%2F4bnsc%2Bo27VmCHQotAh2iRhgTp1blcUv1jEmzJXcNloRFgzdEGKspDVGrp3lDPBtvm28arjyUGpC8sGXyrMShos5UmLIBGPYoHr%2Fvs9AG%2BXVFSFu%2FEGPG0iKEbN%2BArDAY8C4%2BmBu7pqObPEX8h2Hw5WyS2YynVXZh9WRnLE7oYrlaSG%2BsqOfW%2BWLk%2B5lW736WlLGqfT%2B%2FRcfJQHFRsZJnlEgDuAljrWSksBjCih9zJBjqkAdSaYtSteYDM9v6y9oK0CqEJFQBS%2FbPb9piRjMt1ylS3t7%2FEl13ZYb6Z%2FKdoS47ExqV2vVwmW9AdNEqO3VZfIqzFiPI2TbdTuwFGfaxpcFblEMF8pT5mgZR8EwYGKqyyWxTdjlwLMFocqS6JR8KL%2FyKNnKryOu6eD7sJjVeITX1SoT6boEwVqIwEsQre%2Br6ohG5Kv0AEm5IeHXfWFjYlc6wiFioq&X-Amz-Signature=b9bc1d068f81d9457fcb44c40cb877161f66915cd280684316760ec34db253d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYS5VKF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa88anXkaTd2MceC4z08FRJ3P1Dvv0hzrwRDuJUTyhTgIhANsFtKgdJ3HWO1y3i%2Bx%2FDoU5KXAml7NcM%2FNymguXZ2DoKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ7Aj86h9C%2FioddcYq3AOfqwU%2BPItH5om6g%2Bd%2FN0GcKbwCsS3vXwNuUlOzgWDWySVyrzmgRd0GOSGd8ZwfUBTQGoU3Y1dWT5qhI%2F0trvrjEDm2ymnCU3cbrqkLpX7FHOGifp468aWL1HPDeNtrkXZt%2BrhD3W6LcEeCS70k9jVQ60%2FIgeGe93jD8dVjIGUs4HjUZK7DaA3eVQ2Y0LsDpKGzlS2GRpM54mdO8hRniynTuF%2FzSxsKuZuWRfnSWCDS7pV8S8Jy96rHkerHTVI0Fber7qRq4XQq%2BHIfZtiL5SZ9ULFu4jCFZ04S0DZ4uL4Qwa7fzZ1SKA9FWy0qpFohf3WDL502e89H43of7IYI5QIi9hpvcWvIoD%2F44EYhd66V7kmgapNBnZvNOpXRVzdKhC4kmzOhr9%2BPIZ6XJ5UqbMwAGW%2F4bnsc%2Bo27VmCHQotAh2iRhgTp1blcUv1jEmzJXcNloRFgzdEGKspDVGrp3lDPBtvm28arjyUGpC8sGXyrMShos5UmLIBGPYoHr%2Fvs9AG%2BXVFSFu%2FEGPG0iKEbN%2BArDAY8C4%2BmBu7pqObPEX8h2Hw5WyS2YynVXZh9WRnLE7oYrlaSG%2BsqOfW%2BWLk%2B5lW736WlLGqfT%2B%2FRcfJQHFRsZJnlEgDuAljrWSksBjCih9zJBjqkAdSaYtSteYDM9v6y9oK0CqEJFQBS%2FbPb9piRjMt1ylS3t7%2FEl13ZYb6Z%2FKdoS47ExqV2vVwmW9AdNEqO3VZfIqzFiPI2TbdTuwFGfaxpcFblEMF8pT5mgZR8EwYGKqyyWxTdjlwLMFocqS6JR8KL%2FyKNnKryOu6eD7sJjVeITX1SoT6boEwVqIwEsQre%2Br6ohG5Kv0AEm5IeHXfWFjYlc6wiFioq&X-Amz-Signature=bd4ed1e745be3e3e1d343c56d88bb0c25c460e939f15563241b02a32c0c45f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
