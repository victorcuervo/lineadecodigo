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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQYP4GS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL3YoFeNO7c8m3l0I0RYtwWNQNXV0%2BV7Ph%2F9gzCSB8zAiEA4WuLz8%2Frk%2BEL85QIwZIbOz%2FZyku%2FUWneuJRWSBb7R%2B0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAVh3N0RwB36dIfa3CrcA63W0h4C60E22UEwZpvZ2%2FRMV8h0HmMRFOTUeEF5NuAMTtjTybaZRJm2gQ%2B40B5%2BtQyyoQmDf7TBZayqIzbuebxBGTh8OKiqzuOTn2B7iJrHlxNTvp2KRhirpPuxZsu%2FyXrsPi7hOcUqbDgjMZNH6w9KFqS3KqoJwgLxq2fYd8%2B08cQKaMsMluHqBDV%2BQvlHZtcI78grDE%2Bc86IXxRt%2BA02Xp5u%2BO%2BAh%2FmrIL0n2FXvIuFLujvTrfjeG88vBHGK2j%2FMxbA%2BrynVTo2V8OcMmzLbykz50yOBXWnDhe3FzHSn7dGaWZjUD8Bc9sxW5ITDXYJqZGj9oxw5Ad14RtROH62k%2FSLmrnUWTQBtfA4%2BVlMeEUZyqhBWVVbQd%2Bwhm4o8UjV2YgLmtfX730xwbglZoU0q%2BhOvABwmRmZu8HDt0qua8JfNoW1HpmbYdBg7WBAgTQg4iHqCm%2Fjeh3gyCIrYRdsqzLOs6jdQRDglegnjaINyk%2B1oxBDWma1SLD%2Bkc%2FPa62jE7kwSG2iWhHfTihskVv7bV%2BEuUHRKO72ybIxDYKglD10rNhr5NkRbqwMchVRyC4FiBjNJUgYFCiz0H0n1hkfBLhUPMVk3icW4XEDHT2%2BTYbfNTL2WmowFOmlisMKvzy8kGOqUBcFCyaL%2Bly39qKZkhbnoBZZtGaO9yiXC62kfWMC2kxU5f25vEkP9IVO%2BPVQdAsvgQamxH7S8CvlR8%2FVaInhy8yxCU1tZSIN0kIfzenSIPfXZxYfljswC%2BVHWK3pplMypwvQywHv5GbzlMhS1r2FwCtMO7VKRp%2FkrShyVof7Z5fl2UvzzbIDyKtFa5sk1%2FWAsVMHzlNp3rL3hX4DGz1DJZr2h5r3Np&X-Amz-Signature=b0ce482d33d69fbccfe5235902df57e111eb5971f50cd5971699edea8e91bb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQYP4GS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL3YoFeNO7c8m3l0I0RYtwWNQNXV0%2BV7Ph%2F9gzCSB8zAiEA4WuLz8%2Frk%2BEL85QIwZIbOz%2FZyku%2FUWneuJRWSBb7R%2B0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAVh3N0RwB36dIfa3CrcA63W0h4C60E22UEwZpvZ2%2FRMV8h0HmMRFOTUeEF5NuAMTtjTybaZRJm2gQ%2B40B5%2BtQyyoQmDf7TBZayqIzbuebxBGTh8OKiqzuOTn2B7iJrHlxNTvp2KRhirpPuxZsu%2FyXrsPi7hOcUqbDgjMZNH6w9KFqS3KqoJwgLxq2fYd8%2B08cQKaMsMluHqBDV%2BQvlHZtcI78grDE%2Bc86IXxRt%2BA02Xp5u%2BO%2BAh%2FmrIL0n2FXvIuFLujvTrfjeG88vBHGK2j%2FMxbA%2BrynVTo2V8OcMmzLbykz50yOBXWnDhe3FzHSn7dGaWZjUD8Bc9sxW5ITDXYJqZGj9oxw5Ad14RtROH62k%2FSLmrnUWTQBtfA4%2BVlMeEUZyqhBWVVbQd%2Bwhm4o8UjV2YgLmtfX730xwbglZoU0q%2BhOvABwmRmZu8HDt0qua8JfNoW1HpmbYdBg7WBAgTQg4iHqCm%2Fjeh3gyCIrYRdsqzLOs6jdQRDglegnjaINyk%2B1oxBDWma1SLD%2Bkc%2FPa62jE7kwSG2iWhHfTihskVv7bV%2BEuUHRKO72ybIxDYKglD10rNhr5NkRbqwMchVRyC4FiBjNJUgYFCiz0H0n1hkfBLhUPMVk3icW4XEDHT2%2BTYbfNTL2WmowFOmlisMKvzy8kGOqUBcFCyaL%2Bly39qKZkhbnoBZZtGaO9yiXC62kfWMC2kxU5f25vEkP9IVO%2BPVQdAsvgQamxH7S8CvlR8%2FVaInhy8yxCU1tZSIN0kIfzenSIPfXZxYfljswC%2BVHWK3pplMypwvQywHv5GbzlMhS1r2FwCtMO7VKRp%2FkrShyVof7Z5fl2UvzzbIDyKtFa5sk1%2FWAsVMHzlNp3rL3hX4DGz1DJZr2h5r3Np&X-Amz-Signature=79f41b69e4bd1649ea99cdabcca50b2c56d6341d1cd2dfb0d3d1982e0cc44ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
