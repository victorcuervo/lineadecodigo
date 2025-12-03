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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DVKWC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1GmqRDWc3rjTeIJsHTjPrEfzKYHcknfEd1OPH%2BKACawIgYonShhzqPlDP9LR70bxpt%2Bmg6FMQ4cX%2BxEF%2F0tQUEVEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCvhd3zaKTcfi%2FLZySrcA8gewD86OKxztbEz6IYbAv%2Fghk7BWlLiTQ%2BTh6wmykbGY%2FwokoDyXke3HK%2Fx7De4q9d%2FM2Zq6juxcU6E1lt%2BYu8VGG2zQe7%2Bj8Qf34R0FrXrUfiO%2B%2FzQs8iM8KqgkzT%2FmZnuKVMoiMVtcn2wfYgaLzQxSle6wi0jTk7VRkn39hFCCBWh5zu5KUoOyHy1s0Z3W1K%2FfeZDNtzC3OdlyRu4vWdhQUCq95tUrZzckqnzSHGd%2BXPosC3EjmaGVJAHazvt6P%2BMongUMuyrXP5uPiVR9q5Bq23DVLgyVj%2Bs636ZK1ZnyIUtQotPL44y%2BJJsnJMOMZpggz1QMllJI%2BcMsQM9cwRl4Z34eC2VrqMcyf2K4IcSl%2FYn5iabrTeI07uBuFNQcYl70jK8kvI%2F%2FfvBq1VmuQfO7SG723v7IJEa%2FZnnBWASfohL79Wcl10Ix5pqtXnkDwx777r%2FK%2BqNmsWN%2FVhkUhynz7gkIeFfm2G%2FF9gAsgbOD7Ii3vV672dynLKO6b7SvQOTprrJyi4S8Ek7LdiIOBD%2BP1PnZR5D6biZcZw7UcGEHci9Ftp8%2BjNMqpflPBH3RntzQVfemjZMQzvLrBshHHwqFd0PWvuHHVvpOLkjW2UzZkfqmKjvA4w5aeR%2BMMX3wskGOqUBeHJ%2FEMWcKvF5oC72AzM%2FewQ6M1TWNPo5pn0hWfT2OuZLAP%2BJUW3ZsRIfAVpRe2JWku%2FDfPgBWfAbH8%2BFsudkgq0KAn%2FHdHcc5qY13ln2RMKIQyWnBo5paL1yVc%2Bfh%2FPN4%2BtexoDUaYiNWspb0zqRRdBie1pbvnT7OOXMyUTzqdwmInQ8XyGNaU51Gv6UI4IIuHYrE7ZkRZz%2F%2FTn0TXwfeGOlEs5P&X-Amz-Signature=3dfe80b801fcff39d8c04bb72405ebab49af1da45bdeed56758f3c07c93d2b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DVKWC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC1GmqRDWc3rjTeIJsHTjPrEfzKYHcknfEd1OPH%2BKACawIgYonShhzqPlDP9LR70bxpt%2Bmg6FMQ4cX%2BxEF%2F0tQUEVEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDCvhd3zaKTcfi%2FLZySrcA8gewD86OKxztbEz6IYbAv%2Fghk7BWlLiTQ%2BTh6wmykbGY%2FwokoDyXke3HK%2Fx7De4q9d%2FM2Zq6juxcU6E1lt%2BYu8VGG2zQe7%2Bj8Qf34R0FrXrUfiO%2B%2FzQs8iM8KqgkzT%2FmZnuKVMoiMVtcn2wfYgaLzQxSle6wi0jTk7VRkn39hFCCBWh5zu5KUoOyHy1s0Z3W1K%2FfeZDNtzC3OdlyRu4vWdhQUCq95tUrZzckqnzSHGd%2BXPosC3EjmaGVJAHazvt6P%2BMongUMuyrXP5uPiVR9q5Bq23DVLgyVj%2Bs636ZK1ZnyIUtQotPL44y%2BJJsnJMOMZpggz1QMllJI%2BcMsQM9cwRl4Z34eC2VrqMcyf2K4IcSl%2FYn5iabrTeI07uBuFNQcYl70jK8kvI%2F%2FfvBq1VmuQfO7SG723v7IJEa%2FZnnBWASfohL79Wcl10Ix5pqtXnkDwx777r%2FK%2BqNmsWN%2FVhkUhynz7gkIeFfm2G%2FF9gAsgbOD7Ii3vV672dynLKO6b7SvQOTprrJyi4S8Ek7LdiIOBD%2BP1PnZR5D6biZcZw7UcGEHci9Ftp8%2BjNMqpflPBH3RntzQVfemjZMQzvLrBshHHwqFd0PWvuHHVvpOLkjW2UzZkfqmKjvA4w5aeR%2BMMX3wskGOqUBeHJ%2FEMWcKvF5oC72AzM%2FewQ6M1TWNPo5pn0hWfT2OuZLAP%2BJUW3ZsRIfAVpRe2JWku%2FDfPgBWfAbH8%2BFsudkgq0KAn%2FHdHcc5qY13ln2RMKIQyWnBo5paL1yVc%2Bfh%2FPN4%2BtexoDUaYiNWspb0zqRRdBie1pbvnT7OOXMyUTzqdwmInQ8XyGNaU51Gv6UI4IIuHYrE7ZkRZz%2F%2FTn0TXwfeGOlEs5P&X-Amz-Signature=08fb36f036f4c154ae3e6c60e15351beed4d223600ac819bc7253a809a4d9bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
