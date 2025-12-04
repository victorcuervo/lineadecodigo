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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYBFGQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKMnZ33gkHaX4OZag09iqO9x2hPz5c9LxtLSeQ5%2FIJQAiEA5iR3uyatl8M5Yut5DqSccZHndl8xB9e6lPa2gSy9qQsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDO1h5qt7U4PnwfsSMircA5%2B%2BlQJUneqGVL%2F%2F0HdUNvXW5B72%2ByL%2Fb8jrUiDenMy5ga1xt3Ez4OK7ka5NwzdHHIzG0%2FSc3aHydvKjI4J7xY4HPAWARdrFtx7w0vDPgstxyPCMQOU08SezH67PJXeyVDxzTes8CFVP1%2FDYeiVmqbY%2Bfg2W1CkAg5xn58jkYCRiLAiwxkt%2FTWiaMElz4Me5tMiz693nTiaqEpK9qZ09syFySJ63DBAkRJicmdNatWEDqq2Xo%2F%2BoNcp9b3ZWakTkBYXIUHHFkI9gzdE60YFIMQANHVGnrDOV4Shla8ls0YzyqNvi9nPIylu5CUTDHpdjikF0dnxtAz5X2QMfegcjG6MhaZUQvO%2FwpXa55QeeQ2c84R804LM%2Fmb%2ByYvoo3wvkVgkRhb%2FMr44SSXa3V9Q5X6%2Fa82vjrbA9s19HEDiYFUEDFfORsj9PDkXWxrh79jEH3n3bYNF4Ct6bxLPlxJkV2C0GxyR03NvOh1yqjp79fYnc%2B3NM6FWL4GHwKBOhB%2BFY39pDoEvbU%2FkqnD8lIuTOLxCnmvkyWjKHMrtPWRELgbfnfAT646cWBNc3WOT%2FapKH8Knj5IF7YjZMR9qrT4cULSTZzkXTIeKTCwVATNK33bgD54uspw7%2FXThE%2BMy4MMzzw8kGOqUBl8v6JFxrHHCV8SPAo5YE%2F4Gaq%2BpABHsqjzhSCo8szgIhLyBVVLfRkQG0X8N7sd2BZGfXwnEtAJavs0T7qpoWwbVCSdBEV48zQj%2BNKLq2xeBoVr8k8NFgUyxXXa%2FUrrWheg8PVnyINGy6VoWrBJqXqXX85UUwVwCg426O2Oo60rnCr5ShYBAFIxaDynbCMw9oE%2Fs5cu7X7%2BB9iMBRqMSAuQ9hf8GJ&X-Amz-Signature=58cb39945147a67a5cc917eb940003c05e93e6f38f812ae0aad35bced48bc2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYBFGQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKMnZ33gkHaX4OZag09iqO9x2hPz5c9LxtLSeQ5%2FIJQAiEA5iR3uyatl8M5Yut5DqSccZHndl8xB9e6lPa2gSy9qQsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDO1h5qt7U4PnwfsSMircA5%2B%2BlQJUneqGVL%2F%2F0HdUNvXW5B72%2ByL%2Fb8jrUiDenMy5ga1xt3Ez4OK7ka5NwzdHHIzG0%2FSc3aHydvKjI4J7xY4HPAWARdrFtx7w0vDPgstxyPCMQOU08SezH67PJXeyVDxzTes8CFVP1%2FDYeiVmqbY%2Bfg2W1CkAg5xn58jkYCRiLAiwxkt%2FTWiaMElz4Me5tMiz693nTiaqEpK9qZ09syFySJ63DBAkRJicmdNatWEDqq2Xo%2F%2BoNcp9b3ZWakTkBYXIUHHFkI9gzdE60YFIMQANHVGnrDOV4Shla8ls0YzyqNvi9nPIylu5CUTDHpdjikF0dnxtAz5X2QMfegcjG6MhaZUQvO%2FwpXa55QeeQ2c84R804LM%2Fmb%2ByYvoo3wvkVgkRhb%2FMr44SSXa3V9Q5X6%2Fa82vjrbA9s19HEDiYFUEDFfORsj9PDkXWxrh79jEH3n3bYNF4Ct6bxLPlxJkV2C0GxyR03NvOh1yqjp79fYnc%2B3NM6FWL4GHwKBOhB%2BFY39pDoEvbU%2FkqnD8lIuTOLxCnmvkyWjKHMrtPWRELgbfnfAT646cWBNc3WOT%2FapKH8Knj5IF7YjZMR9qrT4cULSTZzkXTIeKTCwVATNK33bgD54uspw7%2FXThE%2BMy4MMzzw8kGOqUBl8v6JFxrHHCV8SPAo5YE%2F4Gaq%2BpABHsqjzhSCo8szgIhLyBVVLfRkQG0X8N7sd2BZGfXwnEtAJavs0T7qpoWwbVCSdBEV48zQj%2BNKLq2xeBoVr8k8NFgUyxXXa%2FUrrWheg8PVnyINGy6VoWrBJqXqXX85UUwVwCg426O2Oo60rnCr5ShYBAFIxaDynbCMw9oE%2Fs5cu7X7%2BB9iMBRqMSAuQ9hf8GJ&X-Amz-Signature=c391450030c72ef0a143721d6d976865eeef2d4b5d0b417e09f456cb369a5c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
