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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBKU5RF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH1XR5Y%2Fclb4FOXNpzwZ76fItSedqL8SI6f6aEBXEIuwIgBZlpJ4P81eOezeVAykVDIC6cZmwstGMv7MaZXmH2mnkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLyJO%2B5hy1IcsMsjLSrcA1PykXQL4DyaWU4%2B5GsPS26TJG%2BS73x%2BUmQxx1FwAiXulnxOagXnecy1qZwzuiBlaWLPD%2B8g6xMhrTJFAxQOE%2B8co%2B5I%2BaFBz4%2Fxo0obW6wPDI1imGi8RDGjnkWbfnP7Ho20mmOcRpETqC7GvOaEHKr%2BpaqLsbKsW06aMdGnDxwp1iq46Ncr%2FNIMaFuibsRW76sdtXUFqavsGI5m0ZsifKbHagKNCV2LV8dNkHpNaP6Q8wrADV4cRnXuWZWJ7P97Pw3gcKt0dcm9JUB%2FS2m4J11%2Bh7%2B9UsTMXVxYsmiP0CnwQnDY3qcPM4RbkKkdZ8VnEVy%2FhCnuAw0k40oGCrtjTmAht%2BZZ4TAUjuMRsaU9ilLRRy0oFj15F5LqDY3ZiyPIKmGVdhhDWRdK1WWARaBBvjM%2BoDAr2KcVFx3er6ej0rxRwIYC%2B6p5ftj6wXVDj54wxUHomN8aMKQ8GcIU5oh%2FDjFrBE5LJmGhILdUmVgLVOpOwWd7NCI3HDJuDThXy6AKEnEgkYCLffY596UUi7TKYl%2BllqC8MJnVf9229am0odbgVlWpdbwA9l%2Bv0xqLx5ARUwwaLFTGO%2FApV39uQsNYU3VIWYBH5x4YyLvzBMxQ3R%2Fwoi47SsROpWA%2FsDpqMMLG0ckGOqUBODD1Obq3If31iNKScafHmsu9hFfqF4voOlSoZTEmNZiN9fGfiaYObw%2B7UM8ENhOYNrm8ITtU2qtzzDy0lful8CFQRYatPFcyHElLb8qd2jL2u5lmcutgMLTI4Yzwb4vzpl9NHiuX%2BSMCihMwJr1BAvYet4CZeAyg9x3FvJBQ%2FIqm4QVXjDkdJ%2Fw34g1ieSu0nfyTO6cRGGRWDrY%2Bw2OOaidTHU1b&X-Amz-Signature=787074b200d8610dd59a30cdac76508e82f47ffc41a2c031a8edebb5de9fa0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBKU5RF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH1XR5Y%2Fclb4FOXNpzwZ76fItSedqL8SI6f6aEBXEIuwIgBZlpJ4P81eOezeVAykVDIC6cZmwstGMv7MaZXmH2mnkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLyJO%2B5hy1IcsMsjLSrcA1PykXQL4DyaWU4%2B5GsPS26TJG%2BS73x%2BUmQxx1FwAiXulnxOagXnecy1qZwzuiBlaWLPD%2B8g6xMhrTJFAxQOE%2B8co%2B5I%2BaFBz4%2Fxo0obW6wPDI1imGi8RDGjnkWbfnP7Ho20mmOcRpETqC7GvOaEHKr%2BpaqLsbKsW06aMdGnDxwp1iq46Ncr%2FNIMaFuibsRW76sdtXUFqavsGI5m0ZsifKbHagKNCV2LV8dNkHpNaP6Q8wrADV4cRnXuWZWJ7P97Pw3gcKt0dcm9JUB%2FS2m4J11%2Bh7%2B9UsTMXVxYsmiP0CnwQnDY3qcPM4RbkKkdZ8VnEVy%2FhCnuAw0k40oGCrtjTmAht%2BZZ4TAUjuMRsaU9ilLRRy0oFj15F5LqDY3ZiyPIKmGVdhhDWRdK1WWARaBBvjM%2BoDAr2KcVFx3er6ej0rxRwIYC%2B6p5ftj6wXVDj54wxUHomN8aMKQ8GcIU5oh%2FDjFrBE5LJmGhILdUmVgLVOpOwWd7NCI3HDJuDThXy6AKEnEgkYCLffY596UUi7TKYl%2BllqC8MJnVf9229am0odbgVlWpdbwA9l%2Bv0xqLx5ARUwwaLFTGO%2FApV39uQsNYU3VIWYBH5x4YyLvzBMxQ3R%2Fwoi47SsROpWA%2FsDpqMMLG0ckGOqUBODD1Obq3If31iNKScafHmsu9hFfqF4voOlSoZTEmNZiN9fGfiaYObw%2B7UM8ENhOYNrm8ITtU2qtzzDy0lful8CFQRYatPFcyHElLb8qd2jL2u5lmcutgMLTI4Yzwb4vzpl9NHiuX%2BSMCihMwJr1BAvYet4CZeAyg9x3FvJBQ%2FIqm4QVXjDkdJ%2Fw34g1ieSu0nfyTO6cRGGRWDrY%2Bw2OOaidTHU1b&X-Amz-Signature=5d4e8ee5226463ec2ce86916ab2b6cd5b625c7ad1d45d9f34973a84046fee8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
