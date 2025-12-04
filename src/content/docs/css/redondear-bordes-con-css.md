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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ64Q37%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIC0AEFeBhhZbCHmAVkVYAROhxdT8kZZXSA69w%2F%2FAhrcFAiEA3rwyUMr87RTZWIRUmLhz6oYedOUrxyM1Kq3Spwf6GBoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJ6wY16%2FD3TQ6B7qyyrcA7v66cJhGlwECQfoyTE2MYnciatz3uhJfBHRUeHYzyj2Q5vN1LUrZSo3mkAHAF1Lj9UAMrBBlllMzz9sinErU9ZCp%2FszjDzmjc33OtoBjugNikotoiXBmbWEDsgWq%2FmWbMVl8fpYLeyRMCBuwLcl98wfeyb0tXlM%2FLRt3iZKqWYmnDYliEsOwBpC3iRwXX50dAudK2mstM5dbgW5c%2BVBFqc6TWRPCk86SAZ4rpnF9ivX2OcknvwlolULFuhDgTbP%2BVC76%2BYifJxIJM8aJRCBvsozzoR4ohU4n8Ttul0xYvmHdYJaZBB3a8LWGeCxJuWGF4U9PTb2TW%2BuG9YZsjY6XcYhfzjF8j90drkas8Y%2B4IPBje0s2MUPRz07t8Cw%2FWMl%2Fm5sj2GVG74dJ%2Fb952vLU%2BU7pHF8ewJauVkRZA2VlPovINTzPm9GvSUOdj8UiOa4%2FWFWgtusR0gsSTEbUAX8nj2fxpPAn2QuYpR3HxsMy5LT0fxW1wqtc1%2Fiaaz9NgAQZgSeeHEMVZkRXOXPA%2BTlWs8vEJtzuFV2DG97p0WsOd%2BZyrJC%2BCyEAZOHnr7KwT4hZH7dM9UKuR92u2cSzv13ZBPvagDbvb%2FzycPz8g7VttnM8jC%2FrpX2SVP02TKnMN6DxskGOqUBewykcRwtusiBYF%2F8XK80CkGB4uN7QQXkpzodCLGN4ycDe1fZoqcdvVdpuFFZFHciqJmOYxvXWprlAmEL49icddbisjXYqQ%2B5bp3%2BWT43PM7HwvDMeTQOAp7jLFsFmC1Xd6KQJIfS9SNR4LpzeJEXuiOn4TgJYWwumt5c1z49B4CF%2BPD4FN%2FHq3wSJYmG8S9t2nDCJzynaUezm8A0D5arfAUNwIaK&X-Amz-Signature=2fd78ed22b6ba48f42ba1100977420d1ee8e853a1f868cd24c4e4b407169ee56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZ64Q37%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIC0AEFeBhhZbCHmAVkVYAROhxdT8kZZXSA69w%2F%2FAhrcFAiEA3rwyUMr87RTZWIRUmLhz6oYedOUrxyM1Kq3Spwf6GBoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJ6wY16%2FD3TQ6B7qyyrcA7v66cJhGlwECQfoyTE2MYnciatz3uhJfBHRUeHYzyj2Q5vN1LUrZSo3mkAHAF1Lj9UAMrBBlllMzz9sinErU9ZCp%2FszjDzmjc33OtoBjugNikotoiXBmbWEDsgWq%2FmWbMVl8fpYLeyRMCBuwLcl98wfeyb0tXlM%2FLRt3iZKqWYmnDYliEsOwBpC3iRwXX50dAudK2mstM5dbgW5c%2BVBFqc6TWRPCk86SAZ4rpnF9ivX2OcknvwlolULFuhDgTbP%2BVC76%2BYifJxIJM8aJRCBvsozzoR4ohU4n8Ttul0xYvmHdYJaZBB3a8LWGeCxJuWGF4U9PTb2TW%2BuG9YZsjY6XcYhfzjF8j90drkas8Y%2B4IPBje0s2MUPRz07t8Cw%2FWMl%2Fm5sj2GVG74dJ%2Fb952vLU%2BU7pHF8ewJauVkRZA2VlPovINTzPm9GvSUOdj8UiOa4%2FWFWgtusR0gsSTEbUAX8nj2fxpPAn2QuYpR3HxsMy5LT0fxW1wqtc1%2Fiaaz9NgAQZgSeeHEMVZkRXOXPA%2BTlWs8vEJtzuFV2DG97p0WsOd%2BZyrJC%2BCyEAZOHnr7KwT4hZH7dM9UKuR92u2cSzv13ZBPvagDbvb%2FzycPz8g7VttnM8jC%2FrpX2SVP02TKnMN6DxskGOqUBewykcRwtusiBYF%2F8XK80CkGB4uN7QQXkpzodCLGN4ycDe1fZoqcdvVdpuFFZFHciqJmOYxvXWprlAmEL49icddbisjXYqQ%2B5bp3%2BWT43PM7HwvDMeTQOAp7jLFsFmC1Xd6KQJIfS9SNR4LpzeJEXuiOn4TgJYWwumt5c1z49B4CF%2BPD4FN%2FHq3wSJYmG8S9t2nDCJzynaUezm8A0D5arfAUNwIaK&X-Amz-Signature=e1eccfdee846edb79051255ed14b1149b6ba7dbf34bb98dfd06038bbcb394ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
