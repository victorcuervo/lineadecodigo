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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY2URKE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FkIipe%2BrwgAA1AU9SY8L5F5uzRon%2BYGmWu0FiOQ0qxAiBQON6Zm8VkEB5keJmW6548fhUZGcVyMy0nVeK5neKl1Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMK1QP6qDn%2Bi3L3k80KtwDa02s%2FBK8cxa2USTgsOOgnj4Ge2jPDqMk3LEqPoqHgfYp%2BexsbfssBQfDOLFuVKYBXJPrmBdbRQEn4FD3vq0G8vGIRG4nDEJCpZdTRtGgz%2BWGOBYMRK%2F%2F2FzbDtlBF%2BUXcDtXfaFL004lx3SD%2B2BkN4UR4%2FmTJ95T5GXzWCy07D5VHGGspT0fYKRpKQEW5nMFLRhIJnDiT%2BKuKPBgJnGtLqEgbbPUaFCzyy7QXP6xQKpjfHd%2FXrZnyBc0369fY32335BPQGtH4Dv1L3bgYJxZI5uc7f9bYjc9fjKY93RqYQdTyGMuauUYB0RpEo8PVLUhgU9l3Ai7Om2Tht%2B6DVj4UBGcb74jNXe0lLBcXAPNuv0mh%2F1MCt1nmbBR%2B575JUldT7ApKAjsmMfdbCtlUd%2FVGaxC2BVkDaKk2UH6r5zK5buagi2ugO5gadpDSfxcZfL7QQWh98DjT%2BD7Vs5WsIkRppDDhUyJwvtaSr5nYzPGm9%2Bd9olRxUHJ7C7%2F1GcIgWGwHV8Raa%2BT47iwysWXuDQEcblDtdJWjU3esOAgF%2BOt7m4M7MaYwvEt1ASdSgkOSLy996cetAw5158q6dhXrXPiFdBk%2BhMv0qWhQZGGAOOjudUzqJ4yundSOdK20Scw3YOJygY6pgEKMlXrCFO4S%2BUg5smtq1r%2F7%2Fyr5U9Mntc6l0q6SD2urbFTvk1S2CY1YOivsTbb7AZakDLG%2F6CcstMN1H%2FrVfcJ46ABrBWGqafaY3YoOgIo0AkNAXz%2FmLOP0rpi5PvnE4r7VewqzRywzit0sZwjl5CTROldb97IhaMTnUOPTVBTGZ%2FBn73s9sJ6TQAX2dfZjbPkxiu1aIpVi7ZCQCTvqzN80AS45JiZ&X-Amz-Signature=b77bb08d065f6eea8029983823aeedee0b619e07972ef4e6846fd30c068c838b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY2URKE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FkIipe%2BrwgAA1AU9SY8L5F5uzRon%2BYGmWu0FiOQ0qxAiBQON6Zm8VkEB5keJmW6548fhUZGcVyMy0nVeK5neKl1Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMK1QP6qDn%2Bi3L3k80KtwDa02s%2FBK8cxa2USTgsOOgnj4Ge2jPDqMk3LEqPoqHgfYp%2BexsbfssBQfDOLFuVKYBXJPrmBdbRQEn4FD3vq0G8vGIRG4nDEJCpZdTRtGgz%2BWGOBYMRK%2F%2F2FzbDtlBF%2BUXcDtXfaFL004lx3SD%2B2BkN4UR4%2FmTJ95T5GXzWCy07D5VHGGspT0fYKRpKQEW5nMFLRhIJnDiT%2BKuKPBgJnGtLqEgbbPUaFCzyy7QXP6xQKpjfHd%2FXrZnyBc0369fY32335BPQGtH4Dv1L3bgYJxZI5uc7f9bYjc9fjKY93RqYQdTyGMuauUYB0RpEo8PVLUhgU9l3Ai7Om2Tht%2B6DVj4UBGcb74jNXe0lLBcXAPNuv0mh%2F1MCt1nmbBR%2B575JUldT7ApKAjsmMfdbCtlUd%2FVGaxC2BVkDaKk2UH6r5zK5buagi2ugO5gadpDSfxcZfL7QQWh98DjT%2BD7Vs5WsIkRppDDhUyJwvtaSr5nYzPGm9%2Bd9olRxUHJ7C7%2F1GcIgWGwHV8Raa%2BT47iwysWXuDQEcblDtdJWjU3esOAgF%2BOt7m4M7MaYwvEt1ASdSgkOSLy996cetAw5158q6dhXrXPiFdBk%2BhMv0qWhQZGGAOOjudUzqJ4yundSOdK20Scw3YOJygY6pgEKMlXrCFO4S%2BUg5smtq1r%2F7%2Fyr5U9Mntc6l0q6SD2urbFTvk1S2CY1YOivsTbb7AZakDLG%2F6CcstMN1H%2FrVfcJ46ABrBWGqafaY3YoOgIo0AkNAXz%2FmLOP0rpi5PvnE4r7VewqzRywzit0sZwjl5CTROldb97IhaMTnUOPTVBTGZ%2FBn73s9sJ6TQAX2dfZjbPkxiu1aIpVi7ZCQCTvqzN80AS45JiZ&X-Amz-Signature=57751ebfc2c7c90696be90eec8d22fd278622124d780c94ac4f4d313316d9dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
