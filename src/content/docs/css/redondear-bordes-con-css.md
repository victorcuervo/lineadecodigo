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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZKCRO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwi8GsTRGpU9QoFUJyLKnMmGvR1rv19M3pRsuWz9JW4AiA5tnPM1l3p29f6DiWMpQfz%2B0NjEbjd4Qxu7blIj%2BQaQiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCiDgzJ0hIxhLZDdKtwDZNwwCY7cvJPyVlg5ak6%2BHclFyrH2%2BWfykg3dkPoIajzcwbN9c8VZKHVL3Z966Xejt0%2Bxlfb%2FxMmEU7iksPCIhRQDH7OPE6ubzuvJEZsmZokOTNhnjG3Ba%2B4NucBVm0dn215nVU%2FuyX%2BXayKTHi9j4W4o%2Bi4OUx9Hc7vg5tnPk%2BF0%2Bzgc4SRr5qfn9T5We56kxQqxQhsFB97SmCAY5w3RD404lGeVR9nIXsEkrErSSF1NSWVBcbl5dseAQERlkWJVQXsUHzvMlIUEsVJLBXE7YcCaviHDYhbiYKD2dIZujmGSZuKD6MHz403fR3rOQvM3eQPIg%2FtNfvM%2FAdpKo2DAoJnYHDOsbjRT%2BtZ0QpiM6gHKxdNfaVptSXtx5%2F9%2B8qX7XUwQvD4GadibyuMqj7t0Bji%2BRwxe3MzfiIJSlcUJk13l1BNB%2BSEFIImGPTCq07ng0%2FQE3PkOFXkCLYCfnHYacgGQiKATecK6b6fMhRN8jTvkUekXcr%2BYhmUh42yhzlwtV44rJzkf5Kp1XNQER2CL%2FazEzoXkXFGV%2Fpi%2FCp8yvQPgae3%2FpdFFnlo9pggf3xCI3pE1xeqtOvA3Ci1tlOhx1rmLb4MJU%2FtQUSYmrBroIWbp8sAGOMT3cwJybHEwtZrVyQY6pgFjM34dpPBLtjOi%2FfEKs8I1N5sycHMmjbcTW7oXN8o49seskwjFYFT2Kc7e4KW8fAILrj0L8akpt5iZ1TrF3lurMMIyAhysNVWNTI2q%2FRkqvvazJgtVu6fgDUgKYpDuCGhdXklBKSPqynD9JFX45NEOOpEj1SE28z%2FoVxO%2BAfHPjf4gavpHjJU53O3oIrDC3MrT5pFh4fB6C1J5DujU7nAVncrB2LIw&X-Amz-Signature=b9ab83f411f2e929ae3ececc47447ba866d26478d1f6e103c345cbe9a26c26eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZKCRO2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwi8GsTRGpU9QoFUJyLKnMmGvR1rv19M3pRsuWz9JW4AiA5tnPM1l3p29f6DiWMpQfz%2B0NjEbjd4Qxu7blIj%2BQaQiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCiDgzJ0hIxhLZDdKtwDZNwwCY7cvJPyVlg5ak6%2BHclFyrH2%2BWfykg3dkPoIajzcwbN9c8VZKHVL3Z966Xejt0%2Bxlfb%2FxMmEU7iksPCIhRQDH7OPE6ubzuvJEZsmZokOTNhnjG3Ba%2B4NucBVm0dn215nVU%2FuyX%2BXayKTHi9j4W4o%2Bi4OUx9Hc7vg5tnPk%2BF0%2Bzgc4SRr5qfn9T5We56kxQqxQhsFB97SmCAY5w3RD404lGeVR9nIXsEkrErSSF1NSWVBcbl5dseAQERlkWJVQXsUHzvMlIUEsVJLBXE7YcCaviHDYhbiYKD2dIZujmGSZuKD6MHz403fR3rOQvM3eQPIg%2FtNfvM%2FAdpKo2DAoJnYHDOsbjRT%2BtZ0QpiM6gHKxdNfaVptSXtx5%2F9%2B8qX7XUwQvD4GadibyuMqj7t0Bji%2BRwxe3MzfiIJSlcUJk13l1BNB%2BSEFIImGPTCq07ng0%2FQE3PkOFXkCLYCfnHYacgGQiKATecK6b6fMhRN8jTvkUekXcr%2BYhmUh42yhzlwtV44rJzkf5Kp1XNQER2CL%2FazEzoXkXFGV%2Fpi%2FCp8yvQPgae3%2FpdFFnlo9pggf3xCI3pE1xeqtOvA3Ci1tlOhx1rmLb4MJU%2FtQUSYmrBroIWbp8sAGOMT3cwJybHEwtZrVyQY6pgFjM34dpPBLtjOi%2FfEKs8I1N5sycHMmjbcTW7oXN8o49seskwjFYFT2Kc7e4KW8fAILrj0L8akpt5iZ1TrF3lurMMIyAhysNVWNTI2q%2FRkqvvazJgtVu6fgDUgKYpDuCGhdXklBKSPqynD9JFX45NEOOpEj1SE28z%2FoVxO%2BAfHPjf4gavpHjJU53O3oIrDC3MrT5pFh4fB6C1J5DujU7nAVncrB2LIw&X-Amz-Signature=552bd26cdbc12b09380aaba6b73d81bbd7c274ad23b14864916a1129528fe10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
