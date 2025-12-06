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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI27CAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj65fWY4Mm59stQD38MEdCVj0I%2B3Ks5gNCAeZ2PhBEwIgLogXxJIEUUuvCfS5RsjpmiB%2B%2FkL87f7g6aM7%2FKaRTLYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWQk4Zx4cCuUYyWsCrcAxV9%2FuDtAFHuI1soQ%2FC%2BB5yTr0ncyeesOut2J7Ewmvxc1NCRqmve6tIT3HyyJ8cbuDV4Ck8CTmAP6ehampjmOJIwhVYwuEEYnBAijemX9kE8hp%2B11g68qIerVwnPSHM6nvVK1nh6YGVwdCGmM6ey19W43659FNy1yP12M0mXpgm9gQn4A4Y5OUaTAf1NeWqqWOQBOVRX8LJN0%2FFENZmALbFNftkCRlYJpZPYPAs%2BMGulpyLu5BBvcBhuly%2F9R2lwS7B7Dv3xafZhJqwz8G5c2zTrOghusS7BjK5izN4oRA8vYkOXNZPxsLKpCDE4wyegs2AQoxQT%2BQ%2Bb0HnIVewFbsR%2FGnUhVDdKnWvhpKOXGadngksf9wD9VuaYWr92OzZH5ColxMOeTJ6WK42zhU0sqS5qEN3dC2qBH%2BZEDsnhOXH0SD1fUbAlWS8eD4mEY00%2Fg3ZBYy4WEDflQLUeAm8%2BL1NwO%2Fv07h2%2F4oD22%2BI%2BiVKdMYPjAWYZMXsrDPGekCrlSx2B9Fj7QTSafSJpub5YBNheerySS8owifrDPUN1cEls%2BhW%2F1Ug08dvK4PcLVR9s1DlQogsKKHLhxFp%2BFaM%2FlrHpAssDTjo3CdDV5gQqGG4erUz9BKK2y1E4YeUKMKWm0MkGOqUBXZHj6jfo7aB7GFbdFKvjwdB%2FC6pVCAu4mvluim91%2BAlCea81lqrffRBYFeAsKQQI5kh3rfI1xs5tfIgS2xYiLq6GkJsLEPz%2FRRxYsPRoz%2BfjL1l%2BO3nd1gJ5%2FWRaIikXHPNQ3HsdocDqL8p%2FzAWOjhSnLHsM33CwKr4mCyttmDUdJpEJ8qvGN6OHtpirIYnNHNozsgiKzjoTMksaZmjsVadcR8XE&X-Amz-Signature=aa1bf383915dd1454dd6746794535bfc02e3d3340259de032604644d7cefcdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCI27CAX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj65fWY4Mm59stQD38MEdCVj0I%2B3Ks5gNCAeZ2PhBEwIgLogXxJIEUUuvCfS5RsjpmiB%2B%2FkL87f7g6aM7%2FKaRTLYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIWQk4Zx4cCuUYyWsCrcAxV9%2FuDtAFHuI1soQ%2FC%2BB5yTr0ncyeesOut2J7Ewmvxc1NCRqmve6tIT3HyyJ8cbuDV4Ck8CTmAP6ehampjmOJIwhVYwuEEYnBAijemX9kE8hp%2B11g68qIerVwnPSHM6nvVK1nh6YGVwdCGmM6ey19W43659FNy1yP12M0mXpgm9gQn4A4Y5OUaTAf1NeWqqWOQBOVRX8LJN0%2FFENZmALbFNftkCRlYJpZPYPAs%2BMGulpyLu5BBvcBhuly%2F9R2lwS7B7Dv3xafZhJqwz8G5c2zTrOghusS7BjK5izN4oRA8vYkOXNZPxsLKpCDE4wyegs2AQoxQT%2BQ%2Bb0HnIVewFbsR%2FGnUhVDdKnWvhpKOXGadngksf9wD9VuaYWr92OzZH5ColxMOeTJ6WK42zhU0sqS5qEN3dC2qBH%2BZEDsnhOXH0SD1fUbAlWS8eD4mEY00%2Fg3ZBYy4WEDflQLUeAm8%2BL1NwO%2Fv07h2%2F4oD22%2BI%2BiVKdMYPjAWYZMXsrDPGekCrlSx2B9Fj7QTSafSJpub5YBNheerySS8owifrDPUN1cEls%2BhW%2F1Ug08dvK4PcLVR9s1DlQogsKKHLhxFp%2BFaM%2FlrHpAssDTjo3CdDV5gQqGG4erUz9BKK2y1E4YeUKMKWm0MkGOqUBXZHj6jfo7aB7GFbdFKvjwdB%2FC6pVCAu4mvluim91%2BAlCea81lqrffRBYFeAsKQQI5kh3rfI1xs5tfIgS2xYiLq6GkJsLEPz%2FRRxYsPRoz%2BfjL1l%2BO3nd1gJ5%2FWRaIikXHPNQ3HsdocDqL8p%2FzAWOjhSnLHsM33CwKr4mCyttmDUdJpEJ8qvGN6OHtpirIYnNHNozsgiKzjoTMksaZmjsVadcR8XE&X-Amz-Signature=fe06d40bfb7cdea566d27da5ec115da43ef140cf7c387cddf974a7dd5069505d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
