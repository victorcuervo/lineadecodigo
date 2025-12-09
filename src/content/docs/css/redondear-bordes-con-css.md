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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ILJGVK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaE%2Fqs4l6tTCsj0eFObSOJGGdQuMJEKJUr3eVcApSybAiEAj6IlKCPaxN5f6o3lduzgPIrqUiYs4q8b8%2B3EfPAU5RIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBoMVkKpiSYrJjIGCrcA5Q4d0j1LjCNBw2b7hu7ntxjzndAH5co4%2Fk4Vj92xDNqUiAUZEkW0RjdQBM8oL0DsN%2Frvs8iyVgZuq1T%2BotAh0yniytoIU33Yril0p2D2kagvmwfDAz3t7npEAiV0%2F7ZnNvCUim%2BhikYP2QjPdgFzwxJ6xPWDHgEOKwOah8XXLtQEm9IYtLgEEtAFOc4HuAm%2B%2BbWrJ53VZh6gDJ84rZl%2FhMqEefHRf6aiTcpdOHiZcfGIwxt%2BXfM9kCLeg507DX7Esz6ZOPTrJyOsImh2aMqVX8AHwi9Gx%2BO1XLduagQlDmUJPMOKfsJ8aIFYCikhKE2UkcZwZt6OWZMSLIR23SeIugtpRMdReINMQL1%2BgnPqSUSdA9M3V0vJCm2b37tz%2BDYf9cHmxv7ee8GlQSUv%2FI%2BXG%2FwEP%2FrdvSH88HnS2of%2FXrTkWGIMQyTchtwUZjwRYLwse9ayI4%2FLh5vH7%2FQazqXAyF1hFjp3rPr8e2FW%2FDYzDK0WlcBGRRpMRFOaM3eNRlLcPGlr%2BJFwAsH2d9BRYGQAgfGuKlh95iKM3MSF5gwyAN8FoTd6sS7KZFrDfbZi7Mo5kVgsJpDS5N3kQB2TTKR11eIBU7oaQaRTcvDYESCjO8qGkjK%2F9OFX%2BAPlmbSMI2l38kGOqUB3Yc0HJMtnfQSWr%2Bm2Whso83ltLwSkKObS8G3jdHSxN9y3tJDPmejp1k7dRwT7GMcf4tn7wnl8JOXfG4haPaM%2BJ6gkD41FL8tovAtU3iU375HMDW7C5NBqspZ27a%2BJlaDUY4IFU%2BkBT7em1LUxvWy%2BYgPj%2FPfl%2BIIYZUfWCeunsUesNF0qP2aBeSBn2tqKf0mxoPijA7jq9FcDOzBAdtH2bWb19ci&X-Amz-Signature=edf3b5d7ae8dac11fb8e29bbe18bcd63569bfa4431c09ce45dee805c38f4f195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ILJGVK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaE%2Fqs4l6tTCsj0eFObSOJGGdQuMJEKJUr3eVcApSybAiEAj6IlKCPaxN5f6o3lduzgPIrqUiYs4q8b8%2B3EfPAU5RIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBoMVkKpiSYrJjIGCrcA5Q4d0j1LjCNBw2b7hu7ntxjzndAH5co4%2Fk4Vj92xDNqUiAUZEkW0RjdQBM8oL0DsN%2Frvs8iyVgZuq1T%2BotAh0yniytoIU33Yril0p2D2kagvmwfDAz3t7npEAiV0%2F7ZnNvCUim%2BhikYP2QjPdgFzwxJ6xPWDHgEOKwOah8XXLtQEm9IYtLgEEtAFOc4HuAm%2B%2BbWrJ53VZh6gDJ84rZl%2FhMqEefHRf6aiTcpdOHiZcfGIwxt%2BXfM9kCLeg507DX7Esz6ZOPTrJyOsImh2aMqVX8AHwi9Gx%2BO1XLduagQlDmUJPMOKfsJ8aIFYCikhKE2UkcZwZt6OWZMSLIR23SeIugtpRMdReINMQL1%2BgnPqSUSdA9M3V0vJCm2b37tz%2BDYf9cHmxv7ee8GlQSUv%2FI%2BXG%2FwEP%2FrdvSH88HnS2of%2FXrTkWGIMQyTchtwUZjwRYLwse9ayI4%2FLh5vH7%2FQazqXAyF1hFjp3rPr8e2FW%2FDYzDK0WlcBGRRpMRFOaM3eNRlLcPGlr%2BJFwAsH2d9BRYGQAgfGuKlh95iKM3MSF5gwyAN8FoTd6sS7KZFrDfbZi7Mo5kVgsJpDS5N3kQB2TTKR11eIBU7oaQaRTcvDYESCjO8qGkjK%2F9OFX%2BAPlmbSMI2l38kGOqUB3Yc0HJMtnfQSWr%2Bm2Whso83ltLwSkKObS8G3jdHSxN9y3tJDPmejp1k7dRwT7GMcf4tn7wnl8JOXfG4haPaM%2BJ6gkD41FL8tovAtU3iU375HMDW7C5NBqspZ27a%2BJlaDUY4IFU%2BkBT7em1LUxvWy%2BYgPj%2FPfl%2BIIYZUfWCeunsUesNF0qP2aBeSBn2tqKf0mxoPijA7jq9FcDOzBAdtH2bWb19ci&X-Amz-Signature=cbba30aacc5239cae4f7cba6b8eb36c7270db9f9659a7ceddd807997c5e3cc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
