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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWZ6FIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCyXivebbLG45i19yUCL7b9lrcAHPsX2hWysi5sPdxpBgIgOAO5rwdX1Bm8HUH3ejzgo5Qzwrn3c6lHgp2BJbXGkrsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDF9Si1swwPWqdoCDeircA%2FfEK7%2BmAuIJbJsysm%2F%2FDu08dw%2FxmpETlPpUiXJA3V22WOb8j7s5EmdPRRKrtmjYdHfH0uUCOSIeUum9xLOULm9BN4NiMdUKjya4ZFJEl%2B%2FR%2FhZapWP0S8hIiR58eTS4uPPO5D3VkqZ6psNBouN1doRGDoOjyuZ5BElZHaVn7nyUd0UrkjS6V26agjbJeV9sQwBYwgvVPe0nSr7WU6kOLYWB0PyUKchHCdQKe76Nat1Br0SPH2F3bmO2n0aPVYNaixRNdiO0YGx7zSynbddUmH8I%2F2ipOqOUcs49IjifgwL2YzgUZAaHP1RIIUC71fP%2Bh3rJywI8Ccb2u2s5Oz9IHq2SUfHYhfTL01sHZ0asKCFeW%2BRF1hF4kDRoxXtQdLq%2B%2FIOb5QnsNoyZSLOEofTQImizrx7u83b4u7LycdK%2Bl8RfXw7oAcIWGUL0z%2FG9PCaQeAehBUgH9RNlto0uMCTwQzXKMtsMdULEuI8W12dpIBulHFI3OW4pJxCLg5X0Eh1LzCnFzdoUtmptjkWvyPtZtNMVCA0iAEYES43%2B5HJYR2lYu%2BuD%2BaAVR27kM2hpftXUBjbek1b0SJ1rLZJ%2BwGNhsVx0LEhI%2Bs0W3UV7XPqUW%2FxLsubYTws1HWu%2F1ozKMNqExskGOqUBJR2Uw0arLNgX55PX2ozDd3ACiMaMyEWOkSGKNNIoGlKvIskRcjiSFWBZeYqqO3QuXCYFxc4LuIhf70fyqeAIZQFXKv3kv%2F8hkJ%2B%2Bm%2BsrcwfUM35oll2PBXcuHVXNSOhAc3DRtfJISJa9Fkv1Cns20cxrkLu8aKAaECTwIg2o%2FipP1wc2LBzf%2FT%2BB7vLxAlJYuo%2BF6kdayhhe6sSHgR7wjZ9n%2Bki7&X-Amz-Signature=b512414f6f72d815fdcd0944e4ddb35e781f7933f81fe077b406a31bff1333a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWZ6FIK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCyXivebbLG45i19yUCL7b9lrcAHPsX2hWysi5sPdxpBgIgOAO5rwdX1Bm8HUH3ejzgo5Qzwrn3c6lHgp2BJbXGkrsq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDF9Si1swwPWqdoCDeircA%2FfEK7%2BmAuIJbJsysm%2F%2FDu08dw%2FxmpETlPpUiXJA3V22WOb8j7s5EmdPRRKrtmjYdHfH0uUCOSIeUum9xLOULm9BN4NiMdUKjya4ZFJEl%2B%2FR%2FhZapWP0S8hIiR58eTS4uPPO5D3VkqZ6psNBouN1doRGDoOjyuZ5BElZHaVn7nyUd0UrkjS6V26agjbJeV9sQwBYwgvVPe0nSr7WU6kOLYWB0PyUKchHCdQKe76Nat1Br0SPH2F3bmO2n0aPVYNaixRNdiO0YGx7zSynbddUmH8I%2F2ipOqOUcs49IjifgwL2YzgUZAaHP1RIIUC71fP%2Bh3rJywI8Ccb2u2s5Oz9IHq2SUfHYhfTL01sHZ0asKCFeW%2BRF1hF4kDRoxXtQdLq%2B%2FIOb5QnsNoyZSLOEofTQImizrx7u83b4u7LycdK%2Bl8RfXw7oAcIWGUL0z%2FG9PCaQeAehBUgH9RNlto0uMCTwQzXKMtsMdULEuI8W12dpIBulHFI3OW4pJxCLg5X0Eh1LzCnFzdoUtmptjkWvyPtZtNMVCA0iAEYES43%2B5HJYR2lYu%2BuD%2BaAVR27kM2hpftXUBjbek1b0SJ1rLZJ%2BwGNhsVx0LEhI%2Bs0W3UV7XPqUW%2FxLsubYTws1HWu%2F1ozKMNqExskGOqUBJR2Uw0arLNgX55PX2ozDd3ACiMaMyEWOkSGKNNIoGlKvIskRcjiSFWBZeYqqO3QuXCYFxc4LuIhf70fyqeAIZQFXKv3kv%2F8hkJ%2B%2Bm%2BsrcwfUM35oll2PBXcuHVXNSOhAc3DRtfJISJa9Fkv1Cns20cxrkLu8aKAaECTwIg2o%2FipP1wc2LBzf%2FT%2BB7vLxAlJYuo%2BF6kdayhhe6sSHgR7wjZ9n%2Bki7&X-Amz-Signature=81e29cfc46a0f62dc04511dac11e004a77c47b29471413fa8cc37f7ca89cc49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
