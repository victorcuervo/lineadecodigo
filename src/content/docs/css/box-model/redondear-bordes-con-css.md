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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CQ2RKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE8wi5Lfdyr5TypPEV9GWK8fJJdA%2Fe7aKw4%2F02%2Fjlw5QIgWaxHlOxj1S2EnkmNxeKtlSOh6tHo%2FBoIjod7BZQM694qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2CLVJFemEESoNHISrcA%2FkV2i8Zxqx4MTPXr8kVx9xE44QR8LESVdI0TrGQ89y03iwEK74TqcaLVEcIniPvqVgWg0382s8q4I5uDqY26eoRSaHLrWTIqSiShclOVdOk3q%2BGoLLPT3zDGwfB17iRvrvktM0ioIQLeJR30N8F5wVStv8RceDGdpdkmzAAycwVzd3TGwG5mDgfAyku6EkitL27bKkh%2FdvH7Q98G0x7F3isteYRMSu1x8iMBuACrT2TFe2BvbQUp4vo0mX2hxiX2yuxJkZA0qHL2sfg0c479atku29gqZZNHwSxyzuodRrkZxFfaQMNRORXgETKr5BM%2Byrby3ScaAJ3NA5zW9Sq%2FvD5SF4rMWTyyGZQYbUS6YwK8FS6RQOmRMHR0L3Wwwnlc8%2FfuCDiyRzRI%2BWWbTTmo0qZc86T%2BHcWns25f6Sw4w1GosHVgfGEA2p1hSIi0ejPHw2v7QOJJIPa7ieCvL2MD15o5xu%2FivAr3zhJhTTDmUDgZvP6bIqdya3G%2BI3WKC7VHBjaCvzyMlLlA3qibY70bzH06RzSJ%2FKQz9aUwemtQ4%2BqjV5Zwieeavg%2BTjm%2F9SMEoH7u%2FvmxnI8dcrLQa8wb%2FUmG4nxyggg9nkxlvuaPaWnBodK%2B9bk0lYB1tYcJMOqei8oGOqUBNBl3uQC6Bfe%2BrZxr629n9QSnLuu%2BI%2Bc32qXrJAi6nFbcbHtfiACTiJvyhXTGCSH1HZl%2FU4kjcBudaTg%2B8a%2FK%2BUo1Rmid4T8JoFDZammJPg%2B7usuTu%2BzfJp0BuuCMbHIgXgLTbIzYb49Xdy7xiLO1J1%2FeZudhEVBxYma7lZOl9m9iPCHhwGYUo3llQUZWnVH7yunTYE8IxVTwoF29T1nh20zQmfvk&X-Amz-Signature=bc95082579484d5f9519533e06874cdff6cd1565134f166e1a6213584bc4370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CQ2RKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE8wi5Lfdyr5TypPEV9GWK8fJJdA%2Fe7aKw4%2F02%2Fjlw5QIgWaxHlOxj1S2EnkmNxeKtlSOh6tHo%2FBoIjod7BZQM694qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2CLVJFemEESoNHISrcA%2FkV2i8Zxqx4MTPXr8kVx9xE44QR8LESVdI0TrGQ89y03iwEK74TqcaLVEcIniPvqVgWg0382s8q4I5uDqY26eoRSaHLrWTIqSiShclOVdOk3q%2BGoLLPT3zDGwfB17iRvrvktM0ioIQLeJR30N8F5wVStv8RceDGdpdkmzAAycwVzd3TGwG5mDgfAyku6EkitL27bKkh%2FdvH7Q98G0x7F3isteYRMSu1x8iMBuACrT2TFe2BvbQUp4vo0mX2hxiX2yuxJkZA0qHL2sfg0c479atku29gqZZNHwSxyzuodRrkZxFfaQMNRORXgETKr5BM%2Byrby3ScaAJ3NA5zW9Sq%2FvD5SF4rMWTyyGZQYbUS6YwK8FS6RQOmRMHR0L3Wwwnlc8%2FfuCDiyRzRI%2BWWbTTmo0qZc86T%2BHcWns25f6Sw4w1GosHVgfGEA2p1hSIi0ejPHw2v7QOJJIPa7ieCvL2MD15o5xu%2FivAr3zhJhTTDmUDgZvP6bIqdya3G%2BI3WKC7VHBjaCvzyMlLlA3qibY70bzH06RzSJ%2FKQz9aUwemtQ4%2BqjV5Zwieeavg%2BTjm%2F9SMEoH7u%2FvmxnI8dcrLQa8wb%2FUmG4nxyggg9nkxlvuaPaWnBodK%2B9bk0lYB1tYcJMOqei8oGOqUBNBl3uQC6Bfe%2BrZxr629n9QSnLuu%2BI%2Bc32qXrJAi6nFbcbHtfiACTiJvyhXTGCSH1HZl%2FU4kjcBudaTg%2B8a%2FK%2BUo1Rmid4T8JoFDZammJPg%2B7usuTu%2BzfJp0BuuCMbHIgXgLTbIzYb49Xdy7xiLO1J1%2FeZudhEVBxYma7lZOl9m9iPCHhwGYUo3llQUZWnVH7yunTYE8IxVTwoF29T1nh20zQmfvk&X-Amz-Signature=cd3d14f242aad7fc409daae966a23e38a01f7d7c9ac7a60d18510a2be48e62b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
