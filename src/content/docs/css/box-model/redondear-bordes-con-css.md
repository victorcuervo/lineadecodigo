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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NW4NRG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmiNeWIbJRCTGXEkLzm5mku48vBiplyXBRpW5WubgH5AiALEqxUxROw4fYFD5NOx3uOkYkDjupGFM6ljotQtQHH1Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM3jSNe3f%2FMwl17Zm4KtwDDP6R05XfpbY3kD89sYH4aIT2yby4b5AT7Sw90eW1vrrxMRTmoqOVa520wYbKdlLxHrOyDHxh4CASS5OJD0su%2BEASxxzl6ei7fIc0V6w4NSyXbitMg0rJblrY8LkPhDX%2FmLkyve0DZzbZSMVDbc42d3BszjSZnQH4bLni4JP9%2FMgzSm691cVypjI24OIHzO8VDq0mQE7plPFJ6b%2FkLpPvMG4vJls9pm44rvRyeJZNRW8v%2BttTNQFM6Sr2%2BuAm6GaDAXBvYi8lXNp7RC0CLiX8%2BeOQFm4QVRoA5KpKlmorDhW7I7paiFpeok4GcBYaPnrWXozjRz05x%2F%2FoRwEO6%2BNkbxGM5KItxuy5YyeAMKHqFd7ALtj11fL8x9JA9GiL1ViCuvhs9hL9Q7YzR8jDaLqaPxeM%2BXd8m%2BnfpfuuYYkE0l%2FimpMcBsAVuD1OVZy3zfFD7wxp%2BL6SfsgPB8XkS8ULzl8imz%2BqqBC1iBS%2FGp%2BY2cF9KBTwnSvYfoy1oESd1MTO%2BK7x7r22HSkw92ui%2BUYSpjUg%2FaYPhPmWWyCFYgu42cAASuf%2FCUSfJ5IaMnyaUwTkKEzVAPlJdqwEeF0s0%2FMJ93z8go%2FANZ8nPUEPn9G3ayANldHIyOehfoi22O4w67GIygY6pgF53zx%2BEcCJSsJeNoIZDc5%2B32841lsCgoLAafy1dxf%2BvQUKsm%2BEuxDUtDkzR2rF7zjk68sE%2FEchSI1qkYc%2F%2Ft%2FnASM3arITOf3uxh7%2FiO4rf7aoN6FFb8oGESCoUd%2FDittBbwgTyCmOUj3h4kJDosssReqDzjnksivKeRYJKUfHhgJCKmAJ78gPKRvQmUSbuF89irNgmpnkhgWUruvzseLI%2BuazxEXU&X-Amz-Signature=78cc1f28b3d4dc694bf538bfcbbaadb8ec94ff805753704c5e47c9ea8affb95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6NW4NRG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmiNeWIbJRCTGXEkLzm5mku48vBiplyXBRpW5WubgH5AiALEqxUxROw4fYFD5NOx3uOkYkDjupGFM6ljotQtQHH1Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM3jSNe3f%2FMwl17Zm4KtwDDP6R05XfpbY3kD89sYH4aIT2yby4b5AT7Sw90eW1vrrxMRTmoqOVa520wYbKdlLxHrOyDHxh4CASS5OJD0su%2BEASxxzl6ei7fIc0V6w4NSyXbitMg0rJblrY8LkPhDX%2FmLkyve0DZzbZSMVDbc42d3BszjSZnQH4bLni4JP9%2FMgzSm691cVypjI24OIHzO8VDq0mQE7plPFJ6b%2FkLpPvMG4vJls9pm44rvRyeJZNRW8v%2BttTNQFM6Sr2%2BuAm6GaDAXBvYi8lXNp7RC0CLiX8%2BeOQFm4QVRoA5KpKlmorDhW7I7paiFpeok4GcBYaPnrWXozjRz05x%2F%2FoRwEO6%2BNkbxGM5KItxuy5YyeAMKHqFd7ALtj11fL8x9JA9GiL1ViCuvhs9hL9Q7YzR8jDaLqaPxeM%2BXd8m%2BnfpfuuYYkE0l%2FimpMcBsAVuD1OVZy3zfFD7wxp%2BL6SfsgPB8XkS8ULzl8imz%2BqqBC1iBS%2FGp%2BY2cF9KBTwnSvYfoy1oESd1MTO%2BK7x7r22HSkw92ui%2BUYSpjUg%2FaYPhPmWWyCFYgu42cAASuf%2FCUSfJ5IaMnyaUwTkKEzVAPlJdqwEeF0s0%2FMJ93z8go%2FANZ8nPUEPn9G3ayANldHIyOehfoi22O4w67GIygY6pgF53zx%2BEcCJSsJeNoIZDc5%2B32841lsCgoLAafy1dxf%2BvQUKsm%2BEuxDUtDkzR2rF7zjk68sE%2FEchSI1qkYc%2F%2Ft%2FnASM3arITOf3uxh7%2FiO4rf7aoN6FFb8oGESCoUd%2FDittBbwgTyCmOUj3h4kJDosssReqDzjnksivKeRYJKUfHhgJCKmAJ78gPKRvQmUSbuF89irNgmpnkhgWUruvzseLI%2BuazxEXU&X-Amz-Signature=f0fd13733a41aeaff45d5a5849297432c2bbd446c75640cd376200d91c8438f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
