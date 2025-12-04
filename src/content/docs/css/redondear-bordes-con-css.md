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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKULBUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGAfm9EEtC0pOWfb19UN0JBvkJJmbf7z8E1zkrWdogKVAiEA2MyAscagflNB8ps3oUDgL3Ab6OrMxg0sHMUAq%2FSZXfAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA%2BD%2FSTP4U4GsxHh3CrcA9Kil47vDkTW%2BtnI3BJPuBswvHeSH5bLHCkbMbjwvCUdp0yVa%2Bdk1jsqH62pQluRUipPZF1BplAsMOpQK2%2BMh4zbEU7dmPwym%2BfowJ5MU1vY6tAvDh%2BHPIZIdOqcjSnQjYVYYR8livBs1cP4xIf%2Bs4C0w68K56kmJoeL7xNACVcA5csEfYwhvuG5FPW3KhDjG2%2FWr313pnC43LVeQQ0VgInQUAQNKHio0lQgXD0iuGS0eyz7ngnDdmZ42JuBedCRK8SJZosX3Dt4KFx6%2F%2FjolXB%2BnsUMQ%2FooZZRJtBouemxlCoTWeel4cU7k1MxwgDSOgUmFkbTOgrfOhHs%2BgAux6nB52jraRe%2BwXNi%2FKPNZ4qrLx63uJ6JfqQ49SKmW4wzSl5QvXeS264gGq2wN8IJBz%2Fx%2BeGj7Hr6O8hTuQxEvHRqFPAE2ZDIZcKNLqub%2FAAlrbvaRzc9cfzdtCvfIYwMDSX8ztKHgccDxexQM1XHFywfqimXdNwYQvJ6tcOvi2tutYZx7Jkjd%2F16Tb9oz%2BjnxjY59PlWGZ4pNcp0GfGsp4bwhnSwFW85GbholXLuSgHkpfLA2OmuuyLwOZBoD%2FGJ5GLs28PaBS07lxz0K%2B9G3MEVrVNErayqTt5KX%2BuOwMLmtxMkGOqUB8%2BnzBcPcmgcF3IxTs5aey3VBwa1ooJp301KFQ%2BMRNH4H%2BPafP35h0940O1CNz5L%2FyLym5YM7yzfz7oWy86%2FnR3ypNS6z98VUHsvOj9vi8l2TpjAABw9R4munahsTXP0QjrDKTkDXNPcdu1gtD4gtv8Effnv3JPIP1cAp3ec%2Bi9ld46imyswvaSrfJjA2O36Apn4GsiXtvKg7dlHeb0%2BiUKy8saus&X-Amz-Signature=fbc19c48d711f18a307d8f235edf354e97b01017332d451fd8644728804eb970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKULBUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGAfm9EEtC0pOWfb19UN0JBvkJJmbf7z8E1zkrWdogKVAiEA2MyAscagflNB8ps3oUDgL3Ab6OrMxg0sHMUAq%2FSZXfAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA%2BD%2FSTP4U4GsxHh3CrcA9Kil47vDkTW%2BtnI3BJPuBswvHeSH5bLHCkbMbjwvCUdp0yVa%2Bdk1jsqH62pQluRUipPZF1BplAsMOpQK2%2BMh4zbEU7dmPwym%2BfowJ5MU1vY6tAvDh%2BHPIZIdOqcjSnQjYVYYR8livBs1cP4xIf%2Bs4C0w68K56kmJoeL7xNACVcA5csEfYwhvuG5FPW3KhDjG2%2FWr313pnC43LVeQQ0VgInQUAQNKHio0lQgXD0iuGS0eyz7ngnDdmZ42JuBedCRK8SJZosX3Dt4KFx6%2F%2FjolXB%2BnsUMQ%2FooZZRJtBouemxlCoTWeel4cU7k1MxwgDSOgUmFkbTOgrfOhHs%2BgAux6nB52jraRe%2BwXNi%2FKPNZ4qrLx63uJ6JfqQ49SKmW4wzSl5QvXeS264gGq2wN8IJBz%2Fx%2BeGj7Hr6O8hTuQxEvHRqFPAE2ZDIZcKNLqub%2FAAlrbvaRzc9cfzdtCvfIYwMDSX8ztKHgccDxexQM1XHFywfqimXdNwYQvJ6tcOvi2tutYZx7Jkjd%2F16Tb9oz%2BjnxjY59PlWGZ4pNcp0GfGsp4bwhnSwFW85GbholXLuSgHkpfLA2OmuuyLwOZBoD%2FGJ5GLs28PaBS07lxz0K%2B9G3MEVrVNErayqTt5KX%2BuOwMLmtxMkGOqUB8%2BnzBcPcmgcF3IxTs5aey3VBwa1ooJp301KFQ%2BMRNH4H%2BPafP35h0940O1CNz5L%2FyLym5YM7yzfz7oWy86%2FnR3ypNS6z98VUHsvOj9vi8l2TpjAABw9R4munahsTXP0QjrDKTkDXNPcdu1gtD4gtv8Effnv3JPIP1cAp3ec%2Bi9ld46imyswvaSrfJjA2O36Apn4GsiXtvKg7dlHeb0%2BiUKy8saus&X-Amz-Signature=eae4f99896f2aa0229c917d863ae10e7cb9d50e351fb5bfb32e8a59bfcc04a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
