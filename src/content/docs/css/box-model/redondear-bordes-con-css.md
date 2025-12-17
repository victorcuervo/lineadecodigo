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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C726B6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2a%2FdncVkh6b1CSyE98vOIEb7XxJ8TTnOxrmxNkXzN2AIgWeiarBd2tAvo%2FZIPGLfZ2HhXZwnHHfdBlVsZxypPpdMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHa4nZhT97PqucCcuCrcA%2BqkIvEZIw0YcazK3THtS2QOCXg2yK3CxLEEjwiXfO4tdNF0FAiphk6nxYQW%2BqMJnfwelMe3dAA6zA5FZ5JBAaJpZ9hPVy0myZ4iwGVsz7DerrRwTYBl6QEy0TfZvgpZ2GIlZ17YItoVn%2FPuXExcpArE53QczXPYHmT6qHTq6ap4Bdh8mAFaJ1A5cZFULzv2dLxZbZUy5mUJDs7j%2BL5o98j6zqSbvU65E45L8gwgTdGFae3Uhxrur%2BqbViPQFBgMV1SGIuAPsbQh0%2F8DEiEAbDhDotGudJGDc%2BNnZON8hHOJZsxi6HXd4D2ZI6J778zAg4VNrVns%2FtTaXZ05phOE9KRzDcy2aeQRHPNZENywAwvjEpTg%2BchkPMe0G0GWRsWwvJxqhlHfEa9udOYNxLBGUiA%2BPB3UP71ZBMCbzUjvHqfXx3h7YvcgKN9%2BbrwUADWlpepGnUtFQK6vpPH5Kee0R4qsVzJa18UKqC0btxd60C0tJgoAznxOFWUFDE%2FyIbq%2FAGiF0bLdG%2Fm6Ng%2BytuMMAvY38zj5c6f1jDxgnY9eH%2Bbydqj3HE%2BsVtGEquuaIjETc0%2B%2BkOEQd0QNaAj5t0IYG4fml5w72o5JxonRKf%2FnGiCmG5KxoZ0a4cNPXimXMM2gi8oGOqUBWSMXo4B8iNU%2FSirPrODEiO3CQy5epha%2F3NYJE22qCdDac8KitoNW%2BBUgXGqPBez58mq7WjZs1eXCjR721jWIBFw6pSKE0NgWNmwX6yA0Qi5sdOJ0py37DupKMOECxmp8BkldYZvYrVkI9heaC6R6Ox71NX8gHsVRGjhRHWmiTnLA4R4W9Q1M100AxjiZ7VI%2FjiD%2FIjJrYVLWUebM%2BNAxP7Ci%2FNSb&X-Amz-Signature=df9b42ad4e1ee882978760c0a69b6183961e79f5fc672820235a8c58738d49b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C726B6V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2a%2FdncVkh6b1CSyE98vOIEb7XxJ8TTnOxrmxNkXzN2AIgWeiarBd2tAvo%2FZIPGLfZ2HhXZwnHHfdBlVsZxypPpdMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHa4nZhT97PqucCcuCrcA%2BqkIvEZIw0YcazK3THtS2QOCXg2yK3CxLEEjwiXfO4tdNF0FAiphk6nxYQW%2BqMJnfwelMe3dAA6zA5FZ5JBAaJpZ9hPVy0myZ4iwGVsz7DerrRwTYBl6QEy0TfZvgpZ2GIlZ17YItoVn%2FPuXExcpArE53QczXPYHmT6qHTq6ap4Bdh8mAFaJ1A5cZFULzv2dLxZbZUy5mUJDs7j%2BL5o98j6zqSbvU65E45L8gwgTdGFae3Uhxrur%2BqbViPQFBgMV1SGIuAPsbQh0%2F8DEiEAbDhDotGudJGDc%2BNnZON8hHOJZsxi6HXd4D2ZI6J778zAg4VNrVns%2FtTaXZ05phOE9KRzDcy2aeQRHPNZENywAwvjEpTg%2BchkPMe0G0GWRsWwvJxqhlHfEa9udOYNxLBGUiA%2BPB3UP71ZBMCbzUjvHqfXx3h7YvcgKN9%2BbrwUADWlpepGnUtFQK6vpPH5Kee0R4qsVzJa18UKqC0btxd60C0tJgoAznxOFWUFDE%2FyIbq%2FAGiF0bLdG%2Fm6Ng%2BytuMMAvY38zj5c6f1jDxgnY9eH%2Bbydqj3HE%2BsVtGEquuaIjETc0%2B%2BkOEQd0QNaAj5t0IYG4fml5w72o5JxonRKf%2FnGiCmG5KxoZ0a4cNPXimXMM2gi8oGOqUBWSMXo4B8iNU%2FSirPrODEiO3CQy5epha%2F3NYJE22qCdDac8KitoNW%2BBUgXGqPBez58mq7WjZs1eXCjR721jWIBFw6pSKE0NgWNmwX6yA0Qi5sdOJ0py37DupKMOECxmp8BkldYZvYrVkI9heaC6R6Ox71NX8gHsVRGjhRHWmiTnLA4R4W9Q1M100AxjiZ7VI%2FjiD%2FIjJrYVLWUebM%2BNAxP7Ci%2FNSb&X-Amz-Signature=a6486e02d93c840f86871521ce555a3c831dab720bdc3b176a3e3f464ad1ad78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
