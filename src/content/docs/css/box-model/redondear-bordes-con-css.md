---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWYUUT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZZxWqN9kY%2FzYyUiHAxljvgk9wMa1z%2FmgfIfbOVTte%2BAIgVpB0rT9IEisW21SvuhVH77%2FEXdn%2BF5%2FCnVXwmwEPX3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Y9X%2BD%2B5aEjpvp%2BSrcA6JS56afuA96QE2JMix05kbIGPYtf17i0%2Fw4rquA%2F%2FmXMabRRBHYy7%2B8h0MhBD8Z%2F0DpaLoRgqClUng4bojoE6xKL67r1TkBGCEqqJvlI4%2FIfizWXsTnVfRBIXqxAji4cO6o91UGkYAvUckn8sEsczawhhcEKGcp5nkkefNdqpQNwrXOTueEmnuqTWSoDcn4AfMTrLWnO%2B8VrRd79%2BHYO%2B4g3jNE7CoqhwWE3RS%2F6EuWduTrd6vbviyioESZC4hVFyGJgkL7C%2BbQoR%2BzV8SpCaw%2BPKaO0Jin1RWR3w81mOBsuALcLbdR9uZiBuFc50gSvixlYoF30EvZhuN6zckP7VmenxCaZ8pCCvi%2BjjXEqYELsq5w%2BfIgQ9ZrUG8xqlzic1Bhi8y%2B7qyD5pOoXRW5MTFLJsDwIAzSUDb%2FQIxDiITZfIxEeceXVCGoPv4Era2HUUswjRg3HXiFSPaaDKhSeypxecofEcaauNlmMlRxPkI5nvCQP3gWhisuNpeErWAoLYejlzlAfWpqGPH5YGoilcNgRKz8sa28q3oKT5PBc%2F1d9e3Hyd0xyqI3Qh4NBlAh4YyW2g%2Fqo1H5DiwPrA%2B3juj%2BF%2BJvGRhHMzhHAGKFVqootWakfe7Lm6LoKdJFMLegi8oGOqUBt%2Bj9tPgTOenfvxYzbFQuf2PNlG4w9PV%2F%2Fgq1uNYGRdc7JOgq58DsfZwYEijJkV7UbRdOzLcgHStMuIHyaggyGDQi8kWhYggvGVmMqjvU4WfZbXQ81YFknQZfLzVW2Rlm2YkS1j938%2BG4pQZ70Qg5e9DyuIr%2FQq7GsGyk0UTlqB%2B8Vk1SEHKINGlXeHvndABVjaLY03KoODKJUVRmP%2FvDRO7RpUHm&X-Amz-Signature=2ac9f86234f9015f4e4f45967ff3ae5ef2c4835110b7c2448132d25a43524f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWYUUT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZZxWqN9kY%2FzYyUiHAxljvgk9wMa1z%2FmgfIfbOVTte%2BAIgVpB0rT9IEisW21SvuhVH77%2FEXdn%2BF5%2FCnVXwmwEPX3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Y9X%2BD%2B5aEjpvp%2BSrcA6JS56afuA96QE2JMix05kbIGPYtf17i0%2Fw4rquA%2F%2FmXMabRRBHYy7%2B8h0MhBD8Z%2F0DpaLoRgqClUng4bojoE6xKL67r1TkBGCEqqJvlI4%2FIfizWXsTnVfRBIXqxAji4cO6o91UGkYAvUckn8sEsczawhhcEKGcp5nkkefNdqpQNwrXOTueEmnuqTWSoDcn4AfMTrLWnO%2B8VrRd79%2BHYO%2B4g3jNE7CoqhwWE3RS%2F6EuWduTrd6vbviyioESZC4hVFyGJgkL7C%2BbQoR%2BzV8SpCaw%2BPKaO0Jin1RWR3w81mOBsuALcLbdR9uZiBuFc50gSvixlYoF30EvZhuN6zckP7VmenxCaZ8pCCvi%2BjjXEqYELsq5w%2BfIgQ9ZrUG8xqlzic1Bhi8y%2B7qyD5pOoXRW5MTFLJsDwIAzSUDb%2FQIxDiITZfIxEeceXVCGoPv4Era2HUUswjRg3HXiFSPaaDKhSeypxecofEcaauNlmMlRxPkI5nvCQP3gWhisuNpeErWAoLYejlzlAfWpqGPH5YGoilcNgRKz8sa28q3oKT5PBc%2F1d9e3Hyd0xyqI3Qh4NBlAh4YyW2g%2Fqo1H5DiwPrA%2B3juj%2BF%2BJvGRhHMzhHAGKFVqootWakfe7Lm6LoKdJFMLegi8oGOqUBt%2Bj9tPgTOenfvxYzbFQuf2PNlG4w9PV%2F%2Fgq1uNYGRdc7JOgq58DsfZwYEijJkV7UbRdOzLcgHStMuIHyaggyGDQi8kWhYggvGVmMqjvU4WfZbXQ81YFknQZfLzVW2Rlm2YkS1j938%2BG4pQZ70Qg5e9DyuIr%2FQq7GsGyk0UTlqB%2B8Vk1SEHKINGlXeHvndABVjaLY03KoODKJUVRmP%2FvDRO7RpUHm&X-Amz-Signature=9e74db70864e2ef7cd2752ce5f2e09f8466bc26645ab6e9a1ec6fd0407169a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
