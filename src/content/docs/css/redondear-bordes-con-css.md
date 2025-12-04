---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3KOXZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCLiwbC%2FYprEC61N6lvDxQLKiZaIiCcs0GcMK%2BHiLHcngIhAMtq%2BFNIzAKCIzCEkxlBx8%2ButjAbA52ORvvZ9pNodcPCKv8DCDsQABoMNjM3NDIzMTgzODA1Igyw6EwFsHYeeCpEUwwq3APFou%2FlnL8JKQedLrhxtRyJ42%2Blgw4fQqhwQ43W%2FLQddrln%2BWN%2BW%2FOePc%2FD4F0XhJBAnFYLB9LY4wA1pSMVGgMg3pF2nN54HYF0iYJZ%2FNvHzYvegvO3HQ%2B0t0OmqvAd%2B1T8LTGQIC3Czt%2BFntaR1b8xdZGj3GU7WoavtX7%2FhjfirGfMMqP5tFim2wf3%2FM0koZtT4xPKnTuJ5cKktg2RPXhxYlt2%2BGdy6iH7xGNmhuGkQLI%2B2X6GHdr070YArnaLlOx4g%2Fe6VomB8ad3IlbEAmFI%2BxaiguBAYoihqiq4uinygcVdJQNNFR1w%2FPisIJo1XsXqyEkxU8V8B3cpZU7ZCtvYUIN2s9YBhibBxeoGhosdWjj5VJCkph7QN6x1gzGdYrFq6x14IEuQN4%2FTLO5ScsAEm%2BON35p6WP9EI0KI6UHWaUjIBfYd4vuxYyrhPmtmIgqJ51XRKSBKO%2FEVsC23OiqIAkXV84lV0Mg%2BqEMz%2FFJ5Myam5N4uw9MU02NT3f6CeLAbQUzeRDboHk0OUqNj2wRptjPBDmH%2BicGiO2MAlzC%2Fz%2BqHCWSQB7RYmYvob%2FtzHNBzdPuOIJWvyIwAElkXsiqVzm6xWACEbEMjCdGRzoX17M8EK37lLA2Ey0QYqTDr08PJBjqkAZrPjcEdpHrzoXBA%2F1wj16sHEi9FB%2Fv87eLIK8p3DIgiOjaUYZ0%2FZ6VETclPAOh%2FNdVTgaMEVtL4SRWHiYdIQP1SwHRY8xAl6ZwbO0bpy4tuOD8N%2Fujoli2%2FeOLVFCvE9ICQDZfAfO5R1LD1DZzPrv1%2Fglfld5RZtMirxqkBUBb%2B4VcHTNBGRLEyKvfj%2FYbyD%2FiS%2FnpltKtt2ItmjcgFiVBMQaN%2B&X-Amz-Signature=035281075dd6a937a6743ee7dc0e505afe486e25d70c9729e434a0e562a450a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3KOXZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCLiwbC%2FYprEC61N6lvDxQLKiZaIiCcs0GcMK%2BHiLHcngIhAMtq%2BFNIzAKCIzCEkxlBx8%2ButjAbA52ORvvZ9pNodcPCKv8DCDsQABoMNjM3NDIzMTgzODA1Igyw6EwFsHYeeCpEUwwq3APFou%2FlnL8JKQedLrhxtRyJ42%2Blgw4fQqhwQ43W%2FLQddrln%2BWN%2BW%2FOePc%2FD4F0XhJBAnFYLB9LY4wA1pSMVGgMg3pF2nN54HYF0iYJZ%2FNvHzYvegvO3HQ%2B0t0OmqvAd%2B1T8LTGQIC3Czt%2BFntaR1b8xdZGj3GU7WoavtX7%2FhjfirGfMMqP5tFim2wf3%2FM0koZtT4xPKnTuJ5cKktg2RPXhxYlt2%2BGdy6iH7xGNmhuGkQLI%2B2X6GHdr070YArnaLlOx4g%2Fe6VomB8ad3IlbEAmFI%2BxaiguBAYoihqiq4uinygcVdJQNNFR1w%2FPisIJo1XsXqyEkxU8V8B3cpZU7ZCtvYUIN2s9YBhibBxeoGhosdWjj5VJCkph7QN6x1gzGdYrFq6x14IEuQN4%2FTLO5ScsAEm%2BON35p6WP9EI0KI6UHWaUjIBfYd4vuxYyrhPmtmIgqJ51XRKSBKO%2FEVsC23OiqIAkXV84lV0Mg%2BqEMz%2FFJ5Myam5N4uw9MU02NT3f6CeLAbQUzeRDboHk0OUqNj2wRptjPBDmH%2BicGiO2MAlzC%2Fz%2BqHCWSQB7RYmYvob%2FtzHNBzdPuOIJWvyIwAElkXsiqVzm6xWACEbEMjCdGRzoX17M8EK37lLA2Ey0QYqTDr08PJBjqkAZrPjcEdpHrzoXBA%2F1wj16sHEi9FB%2Fv87eLIK8p3DIgiOjaUYZ0%2FZ6VETclPAOh%2FNdVTgaMEVtL4SRWHiYdIQP1SwHRY8xAl6ZwbO0bpy4tuOD8N%2Fujoli2%2FeOLVFCvE9ICQDZfAfO5R1LD1DZzPrv1%2Fglfld5RZtMirxqkBUBb%2B4VcHTNBGRLEyKvfj%2FYbyD%2FiS%2FnpltKtt2ItmjcgFiVBMQaN%2B&X-Amz-Signature=a220d42b1a541224ab277a40415569ba927b180c01615a345db80ab56f1cb3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
