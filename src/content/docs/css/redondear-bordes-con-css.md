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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXDZYLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1Ric27n7fe9QjyOlMwHyFrPd0sJA7%2F8qEYznFWP1vwIgOF2Qk1KqrxXm0YzmG0zrElV5dMQHs9Sbf3sz1wjDlTUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS2XPC0vOiO6cz1cSrcA5zDVzjzbQkJBZBITxHvTHVbAaGpNSEQfMf01bbxd%2BaGGrj3xohvvzDiPCeU7dnKzFxAsuhHC5WzkED%2BhzTgMC0Abqjh9LvMvDjDSyrwDLC%2Fsk10MLo5HDbIesvNgCC7LFdCQgZaAHhcv8JmvUZzBUzqfk9MH72zjzo5A%2FXT2uMGV027guJZT7mtOaVO%2BiHl4fjjvhEsjEz5rMn8e5%2BEj3DmZs6vpNQUyBZiz03AuQ4ZKzGcKsAVrgduor03NgziVPV62SLhI8bHxAya3kRqsFH91kS4u1cNC%2FT2nY%2BRjbLgHPySc4Zdm%2F4CEj5OsEfdtyCwvxX6iWxKdnFVDGi%2BQk8VcZKEWRV4u3UmQPRQQ02YpgbgIl4c8EyxTLAmlxUB9IQLH%2F6uaw%2BTcujjM0BunMoEYGGnQHnWpIEM17Z5K0FyFQOkdJcLK%2FXWe3MmHW8udT6mipJPNgOgSlQpWe4CWW9hyKldoo1kRL9Kx1EV8yl31%2BMuA20WN9nRvZg88BeN163jPAYZaV1oJTVFVaXB3dGydX%2BIWBao52D9Hj0fhXYQyBn7t13DLvhNweWqaYNAo3a%2FWqqYvaSR1N4hmpQm2uDEylTnUZbAess%2BeExVPUfvzjpKfQocqnOV4amRMPvG18kGOqUBdPVrvvFWGrFjyiDNSVF1eaqHOgFtPh5YNsvRtaOpRVxkUbvyZSHH37nycKDAxSpTDWD1iTWvUov2V3dwmVW95lsOB1gWeAEwG4hR%2BAAILgLPc%2F1RKDhECeHHjApdgZawmWv1X387VU1oHB4fwqmlVSTZ2VbEume3cLVkW0DiTyn9ujz67Fa2O8OaBkig9KqcwN5Tvq7PZhmDUwgx83pKjFQnVnCQ&X-Amz-Signature=21a6ed07f00050bab4b9a0c6f42db2825c35bba514c4c2ddf1e661f0c7251027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXDZYLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1Ric27n7fe9QjyOlMwHyFrPd0sJA7%2F8qEYznFWP1vwIgOF2Qk1KqrxXm0YzmG0zrElV5dMQHs9Sbf3sz1wjDlTUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS2XPC0vOiO6cz1cSrcA5zDVzjzbQkJBZBITxHvTHVbAaGpNSEQfMf01bbxd%2BaGGrj3xohvvzDiPCeU7dnKzFxAsuhHC5WzkED%2BhzTgMC0Abqjh9LvMvDjDSyrwDLC%2Fsk10MLo5HDbIesvNgCC7LFdCQgZaAHhcv8JmvUZzBUzqfk9MH72zjzo5A%2FXT2uMGV027guJZT7mtOaVO%2BiHl4fjjvhEsjEz5rMn8e5%2BEj3DmZs6vpNQUyBZiz03AuQ4ZKzGcKsAVrgduor03NgziVPV62SLhI8bHxAya3kRqsFH91kS4u1cNC%2FT2nY%2BRjbLgHPySc4Zdm%2F4CEj5OsEfdtyCwvxX6iWxKdnFVDGi%2BQk8VcZKEWRV4u3UmQPRQQ02YpgbgIl4c8EyxTLAmlxUB9IQLH%2F6uaw%2BTcujjM0BunMoEYGGnQHnWpIEM17Z5K0FyFQOkdJcLK%2FXWe3MmHW8udT6mipJPNgOgSlQpWe4CWW9hyKldoo1kRL9Kx1EV8yl31%2BMuA20WN9nRvZg88BeN163jPAYZaV1oJTVFVaXB3dGydX%2BIWBao52D9Hj0fhXYQyBn7t13DLvhNweWqaYNAo3a%2FWqqYvaSR1N4hmpQm2uDEylTnUZbAess%2BeExVPUfvzjpKfQocqnOV4amRMPvG18kGOqUBdPVrvvFWGrFjyiDNSVF1eaqHOgFtPh5YNsvRtaOpRVxkUbvyZSHH37nycKDAxSpTDWD1iTWvUov2V3dwmVW95lsOB1gWeAEwG4hR%2BAAILgLPc%2F1RKDhECeHHjApdgZawmWv1X387VU1oHB4fwqmlVSTZ2VbEume3cLVkW0DiTyn9ujz67Fa2O8OaBkig9KqcwN5Tvq7PZhmDUwgx83pKjFQnVnCQ&X-Amz-Signature=1f5a03a67b48b62b02fbe1ed04a2c4abd3bebf19c4a2b71fb79fc75d33ac22d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
