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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTMNUBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsNWmGxLP2rB49xtv2l0dXlevwT9JbqZPrlDSeCp3tqAiEAoyytwVXK14HaFNYZ%2By9k0F5cGMrUn4frYJQLe0zwvbIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJrDcezb9oomCGPy5yrcA%2FQtoE7kbzpK8DdxXLLIRf%2BYQIWajPI%2FrbjidONauu45BrTie3LVq0wFyE8Z86Z2vevLU7AVrlpA3XisFuY5e2BWXcn5ulE5yXBrDikyj2rtbaxdu3Re2YveH%2BKIpF%2F7OiVT2QiU6j0QSNnlHEzlJS5GbkCt0Y3k6WRRwOGS3gN2EoOM5mrTvgXMeyk8P%2F1GRXQLRqXT3lvy4HTV93if20EnTKxvMGKOWwkMBnxWxxyE7EMZq6v1Ckm8vRXIU1drv6R3T1TtQffjcyjMFTO4I5UFpsI7w1Fx4Wd8A462ffUfayACfnVFKtoBAxsklFaRREVCuLawURE6pepw5wTfNFH%2F%2Fh2H%2FddQZuSZ3oVV3rqvzpUxvl8cAwNKs%2BSUzjw%2F1i2b%2FFHBYmdfdiRDRXS%2FJocOAmZKAN9VReDZu%2F9FWVsTXTKXZfgqE0k5HD9eWuYbxyN7Vin2YuwWif4kiyPpc6Af5XmeNqewhARZjK3BJGsorrytUjIjYTqDyfNTRH8xNjr0Op8kYxdsWBKoDiBcZ1kmTRzl%2FaMhav6ZW1qxKCNSbPK0qpb16%2BG3C%2BiJEya%2FoQQllqgp7xpGgIhLsu8geZ%2BnLLAPL3pMnzmb5Tz%2B0j59EXPZ97GXvhIgF8DKMKfSicoGOqUBaeSsDOjGfFFx9oeh%2Bl2tGxioodvKodnDyMRutswUWNNx4XiQQutQSNqQ8amPYjMhoCWtlxCwGjoxEDkF6Zj4yhMqc9RFSor6nV8KUvyUyvIGJ5zldGbgLUX%2Fd1F2G%2BvPLo4hNreEKFEr7M65W0FesTdVZLEj7agJ01wCiDP1cUl7F42k6Gy1nq4a6Ptx3Ju6OTzsyUENNVl08qyYnCSaac7n3GRk&X-Amz-Signature=3a69996c2fa05831756d312146e3a7dce82450cbb3ae8ce80c5b1714ab5380a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTMNUBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsNWmGxLP2rB49xtv2l0dXlevwT9JbqZPrlDSeCp3tqAiEAoyytwVXK14HaFNYZ%2By9k0F5cGMrUn4frYJQLe0zwvbIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJrDcezb9oomCGPy5yrcA%2FQtoE7kbzpK8DdxXLLIRf%2BYQIWajPI%2FrbjidONauu45BrTie3LVq0wFyE8Z86Z2vevLU7AVrlpA3XisFuY5e2BWXcn5ulE5yXBrDikyj2rtbaxdu3Re2YveH%2BKIpF%2F7OiVT2QiU6j0QSNnlHEzlJS5GbkCt0Y3k6WRRwOGS3gN2EoOM5mrTvgXMeyk8P%2F1GRXQLRqXT3lvy4HTV93if20EnTKxvMGKOWwkMBnxWxxyE7EMZq6v1Ckm8vRXIU1drv6R3T1TtQffjcyjMFTO4I5UFpsI7w1Fx4Wd8A462ffUfayACfnVFKtoBAxsklFaRREVCuLawURE6pepw5wTfNFH%2F%2Fh2H%2FddQZuSZ3oVV3rqvzpUxvl8cAwNKs%2BSUzjw%2F1i2b%2FFHBYmdfdiRDRXS%2FJocOAmZKAN9VReDZu%2F9FWVsTXTKXZfgqE0k5HD9eWuYbxyN7Vin2YuwWif4kiyPpc6Af5XmeNqewhARZjK3BJGsorrytUjIjYTqDyfNTRH8xNjr0Op8kYxdsWBKoDiBcZ1kmTRzl%2FaMhav6ZW1qxKCNSbPK0qpb16%2BG3C%2BiJEya%2FoQQllqgp7xpGgIhLsu8geZ%2BnLLAPL3pMnzmb5Tz%2B0j59EXPZ97GXvhIgF8DKMKfSicoGOqUBaeSsDOjGfFFx9oeh%2Bl2tGxioodvKodnDyMRutswUWNNx4XiQQutQSNqQ8amPYjMhoCWtlxCwGjoxEDkF6Zj4yhMqc9RFSor6nV8KUvyUyvIGJ5zldGbgLUX%2Fd1F2G%2BvPLo4hNreEKFEr7M65W0FesTdVZLEj7agJ01wCiDP1cUl7F42k6Gy1nq4a6Ptx3Ju6OTzsyUENNVl08qyYnCSaac7n3GRk&X-Amz-Signature=ba9f50d4a8e80270256559d0b2a31a609916d2c81c0ec0e024e5f390b4e64338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
