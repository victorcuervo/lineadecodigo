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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZXPNMK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyWSFVtaqNL9Ze21jIADje868FMK8buAXYAxJkZKp2QIgG7bc3dF96l%2Fx5K%2FmUCQmGK%2FlZrf0jW4SJDVXlZY3b70q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYkFBMpKID4MbwYYSrcA8lCT7aG%2Btgflm%2F7WfMGy74Lk6iUbx%2Fcr1sYXm24tSGKkrge6%2F2G7YkXryZF9E717wERc79JvcyA9WDLZFetbBfTZyQJ86fGgjED6Pjh%2B2yrWR2BjBl%2FTUzlNalfOBTyRFAMMNg4nM6SIJUmto4fGu005glUrT7rmAzvkSgaaqvmnQ8BD2pDxVjyqPlc9Smev3Z%2BacTor1GJyvQkNPMHulLu1O8MGzt2SsOsaSQyP1%2FWiK0yixyyBuvN7hUmZO1tgHyufuCSKxlYcMj9H7Ft%2F6f85%2FTLHFZ7vdFFGHZPiqqC%2BPYyf4X5A%2FgoxDEMJ4TtROgIcsXABLIDZlhNyRCamNIM3TprGMFsbN94eUJgZ0pMxhw47s7XCRYqwLYv1nck2w8QuOcpNkYgCYJJZwCLnWb3OBeldQw0aVXiV4mZxvVXLg01SgQum%2BMoBJN%2FoJ5b74x81wrkVmvjY9Q8%2Fr2tIMXVRFPcTOzJavs3GzuJ7DLyL%2F86P3ZiNgO%2Fyi9eA11CWkivWh%2F6lEoTyHtW%2Blf%2FG9%2FYaYqMj2SAkPsL3sh0VOy0uQ%2BZ54607EhBkyInyd8fWqL53mvQ2xzDMpssaav%2FxYbG6N3xsBL6y%2FJcKbjiAryJ894DRCgOApTSmdoFMIrH0ckGOqUBeDnBcyHPQeZwN4O6dyIBje4dI3%2F7amninPo4mXq4sLELCSERGJ6UjPJm%2Biv%2BBVgTuvjvXQVvxRjzBeyTWBG%2F9gBXtolTkk4mzTE7dofztnPnvSDrJIeifJXp36EvOIqVFjro8uTWrDzy56gAGvRK5ZF%2BpZr9yjduMSP6Cyjr8Kwgcwh5%2BkmtqyWOtJX0MZyOY8ik0Zi1X1zAPUeUIyeqXmpDkdSc&X-Amz-Signature=9f60bb3893d4e67b04409bcf43e70e969a78afdefc19bc60d1605ddeee60eb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZXPNMK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyWSFVtaqNL9Ze21jIADje868FMK8buAXYAxJkZKp2QIgG7bc3dF96l%2Fx5K%2FmUCQmGK%2FlZrf0jW4SJDVXlZY3b70q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYkFBMpKID4MbwYYSrcA8lCT7aG%2Btgflm%2F7WfMGy74Lk6iUbx%2Fcr1sYXm24tSGKkrge6%2F2G7YkXryZF9E717wERc79JvcyA9WDLZFetbBfTZyQJ86fGgjED6Pjh%2B2yrWR2BjBl%2FTUzlNalfOBTyRFAMMNg4nM6SIJUmto4fGu005glUrT7rmAzvkSgaaqvmnQ8BD2pDxVjyqPlc9Smev3Z%2BacTor1GJyvQkNPMHulLu1O8MGzt2SsOsaSQyP1%2FWiK0yixyyBuvN7hUmZO1tgHyufuCSKxlYcMj9H7Ft%2F6f85%2FTLHFZ7vdFFGHZPiqqC%2BPYyf4X5A%2FgoxDEMJ4TtROgIcsXABLIDZlhNyRCamNIM3TprGMFsbN94eUJgZ0pMxhw47s7XCRYqwLYv1nck2w8QuOcpNkYgCYJJZwCLnWb3OBeldQw0aVXiV4mZxvVXLg01SgQum%2BMoBJN%2FoJ5b74x81wrkVmvjY9Q8%2Fr2tIMXVRFPcTOzJavs3GzuJ7DLyL%2F86P3ZiNgO%2Fyi9eA11CWkivWh%2F6lEoTyHtW%2Blf%2FG9%2FYaYqMj2SAkPsL3sh0VOy0uQ%2BZ54607EhBkyInyd8fWqL53mvQ2xzDMpssaav%2FxYbG6N3xsBL6y%2FJcKbjiAryJ894DRCgOApTSmdoFMIrH0ckGOqUBeDnBcyHPQeZwN4O6dyIBje4dI3%2F7amninPo4mXq4sLELCSERGJ6UjPJm%2Biv%2BBVgTuvjvXQVvxRjzBeyTWBG%2F9gBXtolTkk4mzTE7dofztnPnvSDrJIeifJXp36EvOIqVFjro8uTWrDzy56gAGvRK5ZF%2BpZr9yjduMSP6Cyjr8Kwgcwh5%2BkmtqyWOtJX0MZyOY8ik0Zi1X1zAPUeUIyeqXmpDkdSc&X-Amz-Signature=41066abfe6773d9c2468c14e7392cc862e1bbb26011197f264cf06813f725a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
