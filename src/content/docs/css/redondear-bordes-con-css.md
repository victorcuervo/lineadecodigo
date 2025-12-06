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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKERNQQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc1%2BsAVGHJZc%2Bvw5BPGdgvGIt61NWRpZsKkV6YEDTA5AiEAvlQr2QrINzPuplhO8AV8J57waHCGO0ltjD0hR0wku8oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPuIhdD9fhcD1TB7PCrcA8srhPXiHXlG5dTmECduLA3OVmzGhxcyc5M5cCzPkek9kwIWar6v04IV%2BzsyPB3RIkegqgdvPlL0J5nP3QSa0FXhjHL9E%2Fqm3I%2BRr4txGKo76e5zt2UFGgKWfRoMEw9PLIwJCsRxtlxh9RTbDd8Xf9GGU%2FfJYjtTUCoRPP08jnUPkBPnkcunTxJzaYkxEUFOoLptJHm209CBnTSSbaT5j%2BCfMj7Fs%2F2gfSOKkohb2Huf6cyetAHL3e%2F7yZvxpElb%2FNHqKYkXulOapAnjpjmSxdY0b6pSEVkeehwCjqZqya3jqLKNZDxNaVfcM8Baa6EcGij7clhn3eHiSgw%2BegnWe02pzyby3SuFxCpllWNumLFLCPEwp1hHgPeZ91BNXOCOAeFZ85DB%2Frxd4mbvfv7%2FJShWw8P2Drt6plWwKasDvwSqFMYS%2BkVX6q6H7407lgXGuSin1paXEOWfeMYkFn%2Brv8p9047ZBd4mQ3LvxLgb8VIR6wIOXcQTaGFuJwds%2FUQcpnCgUFGyOq3NE%2Bs43wUgLbJK32L3vTKJGZZfVEXiPc6Qzxfu%2BqFEGyVMTlGAz9pm%2FgpLZD2qZEmtrl%2BajTKcLAXxg9cGJ80GY8vcmH2rJ64F5z5YZLD5lkNRiMeXMLfL0ckGOqUBOJpmvJbTGhPik7o28mOKM0TDupgRHXECt44f1SI6J8Lq0X6bp%2FZMLujXHl0qsadbXck0PAy0jkRvzVlqnQ4YNPg203dxtIHmpnniJfpH9UpFmj%2By0fLbFgRpiWN6fPcpPqKI2wKgz8RnI4I94VJ3Snynue2O6RXbu8cznnhcnQKu8KQJpNEkS4JyHQg3xO%2BWPBIGeZyjPOz5uglkMkfldtDtR6dN&X-Amz-Signature=c668eafe7b300ac0897fc76feaaf6a167c7db5768375963f92057ba761578c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKERNQQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc1%2BsAVGHJZc%2Bvw5BPGdgvGIt61NWRpZsKkV6YEDTA5AiEAvlQr2QrINzPuplhO8AV8J57waHCGO0ltjD0hR0wku8oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPuIhdD9fhcD1TB7PCrcA8srhPXiHXlG5dTmECduLA3OVmzGhxcyc5M5cCzPkek9kwIWar6v04IV%2BzsyPB3RIkegqgdvPlL0J5nP3QSa0FXhjHL9E%2Fqm3I%2BRr4txGKo76e5zt2UFGgKWfRoMEw9PLIwJCsRxtlxh9RTbDd8Xf9GGU%2FfJYjtTUCoRPP08jnUPkBPnkcunTxJzaYkxEUFOoLptJHm209CBnTSSbaT5j%2BCfMj7Fs%2F2gfSOKkohb2Huf6cyetAHL3e%2F7yZvxpElb%2FNHqKYkXulOapAnjpjmSxdY0b6pSEVkeehwCjqZqya3jqLKNZDxNaVfcM8Baa6EcGij7clhn3eHiSgw%2BegnWe02pzyby3SuFxCpllWNumLFLCPEwp1hHgPeZ91BNXOCOAeFZ85DB%2Frxd4mbvfv7%2FJShWw8P2Drt6plWwKasDvwSqFMYS%2BkVX6q6H7407lgXGuSin1paXEOWfeMYkFn%2Brv8p9047ZBd4mQ3LvxLgb8VIR6wIOXcQTaGFuJwds%2FUQcpnCgUFGyOq3NE%2Bs43wUgLbJK32L3vTKJGZZfVEXiPc6Qzxfu%2BqFEGyVMTlGAz9pm%2FgpLZD2qZEmtrl%2BajTKcLAXxg9cGJ80GY8vcmH2rJ64F5z5YZLD5lkNRiMeXMLfL0ckGOqUBOJpmvJbTGhPik7o28mOKM0TDupgRHXECt44f1SI6J8Lq0X6bp%2FZMLujXHl0qsadbXck0PAy0jkRvzVlqnQ4YNPg203dxtIHmpnniJfpH9UpFmj%2By0fLbFgRpiWN6fPcpPqKI2wKgz8RnI4I94VJ3Snynue2O6RXbu8cznnhcnQKu8KQJpNEkS4JyHQg3xO%2BWPBIGeZyjPOz5uglkMkfldtDtR6dN&X-Amz-Signature=d542d7ccc3d27f59dcab7684af9343a4da83ef7880c5b0be7fb69d6484909b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
