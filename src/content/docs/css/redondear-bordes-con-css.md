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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHTB6W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8dEw%2FYYOEFwA6%2BelDTVw%2F5yXKAUKFBgJJs10UR9LvnAiB%2Fq%2Fsv7%2FyvWl2GEijxQiyHO6Kr2pypi%2BMyMIHvMUmnkyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMSXhGdT19umTTocZpKtwDZzVp%2FqFXGAmlxePt%2FlK1DxJse2as6DRJ%2FwQ%2BEDmxdD20HZ56mSaoZ8heB0JwB3akMUlbge8QvEB0MyESOWoWYOLbrKdBtwY6Rg4ZpW2xKD%2Bpnk571nJ%2FoRAkcm8tdxnckleOWbxhO8F7Z1jFdweM9rWGP9VxcWUQBKN2nMcmjT%2Bzzr26d22xdn5Q73QBQWP8aGl0tVlLF7PSfDVsQmaE5X%2FXKVLUjVGdMUUAettr%2FUmeqV9JRe2Xkq1HnVuFZ9R2QE9JQw08txzRdW1EP%2FBaR9p%2FdP2bNfPJv28uyr%2Bu%2F04W37YUss8a%2BEa29ArGx2ioSGSlCsBfwSlNL09IUgN1L%2FMpGzJwLN1hquJLFMcCITrwe2BohRG47Fx6JFCLRm3abt05N8y2JGeeG%2F9iF%2BkrETB65sU1ipb3lDZ%2FmuxpsX6qKd7DlldY7S35SOTKSRsA3Tonvi1KPUEGS30CgOM5l5ZDbFrlKrOstkzZYo2OZsV4rmxfi79J5fprEoFiyMuLk%2FROkWGUl2QfgIT9poMPPSpAOAAVvs9BLAQgsVzUxQqE2plDI77IseSdsLnQrf5mOBEBNvMHzo3Hbv6okGZpm0EcLabvpISG0Kr50voh5mLQBFuoP5kryM5nngswxtvGyQY6pgEMD236Eelkud%2FyNreBLLtQy%2BEsM%2Bp5TIDV9qKsZXfeJpmkiEYBUzQQ5ayrkW1eXS58jNmH7hcT9WuSvI1ERhYiGDNxPHT0sua2c0skdbyK2sK4rw2amM5KX1zFixowVCFX3uI1oxiTD3ZEQMAghu1nV%2B0kH9jqksri56tUBqk1atNq%2Bk66X89pk07zc4YPGKQnPpXY%2BXs%2B7JzPh5rX8N3cSSjO0ig%2F&X-Amz-Signature=cac2ebd5f72a315825fabb0f2a3d0f782db5f7012fcc0593ab0052b558252f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHTB6W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8dEw%2FYYOEFwA6%2BelDTVw%2F5yXKAUKFBgJJs10UR9LvnAiB%2Fq%2Fsv7%2FyvWl2GEijxQiyHO6Kr2pypi%2BMyMIHvMUmnkyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMSXhGdT19umTTocZpKtwDZzVp%2FqFXGAmlxePt%2FlK1DxJse2as6DRJ%2FwQ%2BEDmxdD20HZ56mSaoZ8heB0JwB3akMUlbge8QvEB0MyESOWoWYOLbrKdBtwY6Rg4ZpW2xKD%2Bpnk571nJ%2FoRAkcm8tdxnckleOWbxhO8F7Z1jFdweM9rWGP9VxcWUQBKN2nMcmjT%2Bzzr26d22xdn5Q73QBQWP8aGl0tVlLF7PSfDVsQmaE5X%2FXKVLUjVGdMUUAettr%2FUmeqV9JRe2Xkq1HnVuFZ9R2QE9JQw08txzRdW1EP%2FBaR9p%2FdP2bNfPJv28uyr%2Bu%2F04W37YUss8a%2BEa29ArGx2ioSGSlCsBfwSlNL09IUgN1L%2FMpGzJwLN1hquJLFMcCITrwe2BohRG47Fx6JFCLRm3abt05N8y2JGeeG%2F9iF%2BkrETB65sU1ipb3lDZ%2FmuxpsX6qKd7DlldY7S35SOTKSRsA3Tonvi1KPUEGS30CgOM5l5ZDbFrlKrOstkzZYo2OZsV4rmxfi79J5fprEoFiyMuLk%2FROkWGUl2QfgIT9poMPPSpAOAAVvs9BLAQgsVzUxQqE2plDI77IseSdsLnQrf5mOBEBNvMHzo3Hbv6okGZpm0EcLabvpISG0Kr50voh5mLQBFuoP5kryM5nngswxtvGyQY6pgEMD236Eelkud%2FyNreBLLtQy%2BEsM%2Bp5TIDV9qKsZXfeJpmkiEYBUzQQ5ayrkW1eXS58jNmH7hcT9WuSvI1ERhYiGDNxPHT0sua2c0skdbyK2sK4rw2amM5KX1zFixowVCFX3uI1oxiTD3ZEQMAghu1nV%2B0kH9jqksri56tUBqk1atNq%2Bk66X89pk07zc4YPGKQnPpXY%2BXs%2B7JzPh5rX8N3cSSjO0ig%2F&X-Amz-Signature=c7b73d72011c7d50eb0c46353a7ba907a4e2e55d591b3e57835215a3afdcd048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
