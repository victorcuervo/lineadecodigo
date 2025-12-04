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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HLAZ6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC%2BFj3i0VEsb%2BOK7ryNA6LDOiJ8Jsp3IaHlmK6r4tHGVwIhAMHkxq2L581zhGRzDxcMq00SycfrkBi6Ckz0HMXFjvV1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwA4Xc7CYRiV621owYq3AMY2AuanM55mFWAtp7D72%2BwX0pC4Gz8G8c0as7JaNXn5c06oJBFDo8lr3oOIxNfHLRpLr3SP%2BbGKVDxI9vKyl8EQ0blkm37%2FQQ0O7Uf2Mh3oTG%2FWqiulCATl3asW24e%2BPYlE8G02Ldz6u682EVg41Gbta4RQheJWRiOTw%2FkdFUFH7FIivtiWWjxmBnj68O%2FEN%2B2gEaciYIAbktXAhz5EZiEi1sHSDvdn2FYiNgkqprp2Y7%2FbelrTLEhQRfJ6fczcmeb76hE0TGLy3iy2I2C9%2BEfd8md8gbkoIMlMKElfGYdiDCKWaYkHgHyGF1rQTNEWtSufDdyNQ3AhQ8BCo5%2FyEEAUIzD%2F9Z7KJ%2Bh7oTa3H6dKWEdU5txYsii6PK8AD%2FSu8KRGCitcEEtWgi0NO1T%2FMbpr2ef8Mk%2F720m94WyNlfslAB9vdkLY6SguqAFXFgTnJx%2B5xSczO6RMVK8DVY0aXZIwQhXS%2Br8QuqY56fnX6CQ19M0mlePmmlMO0P8INJEHSpMPHedhrBZN55jMryf5bzaIigSBcXwGdcD9%2FZH5yoyscAAs6lyyKTrXsxJz7KIHeSnQqBD6MXrK4tKT5cch0LSA5yjP%2BOBHSolcbMmRyBTEGw%2FNIo9n8AwOAN0yTDu1MPJBjqkASL6MqmPVDUnMDFdI7G8rkg8N6KD124vAdTC8NmgSfxVlse3bwpVPGxLEBbLCGy0%2BvWMyWIxre7O%2BUFFaCy7BthZS6QrtSunM8WPpDSDtqUp6vQz5S8O7b2k1DPrnCSiPssQO2YpleH5tdyo82fA8SWFlnbYoIyGW94Qt%2BsZntKOiWWcBWNbiWwcVHHvk5hzOZk1ibU7PEZCq9hOGLOObKsFNPyN&X-Amz-Signature=f6d7b7044916817161c013e489e043f54015e14fa71b41369e105236f2c40e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HLAZ6N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC%2BFj3i0VEsb%2BOK7ryNA6LDOiJ8Jsp3IaHlmK6r4tHGVwIhAMHkxq2L581zhGRzDxcMq00SycfrkBi6Ckz0HMXFjvV1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwA4Xc7CYRiV621owYq3AMY2AuanM55mFWAtp7D72%2BwX0pC4Gz8G8c0as7JaNXn5c06oJBFDo8lr3oOIxNfHLRpLr3SP%2BbGKVDxI9vKyl8EQ0blkm37%2FQQ0O7Uf2Mh3oTG%2FWqiulCATl3asW24e%2BPYlE8G02Ldz6u682EVg41Gbta4RQheJWRiOTw%2FkdFUFH7FIivtiWWjxmBnj68O%2FEN%2B2gEaciYIAbktXAhz5EZiEi1sHSDvdn2FYiNgkqprp2Y7%2FbelrTLEhQRfJ6fczcmeb76hE0TGLy3iy2I2C9%2BEfd8md8gbkoIMlMKElfGYdiDCKWaYkHgHyGF1rQTNEWtSufDdyNQ3AhQ8BCo5%2FyEEAUIzD%2F9Z7KJ%2Bh7oTa3H6dKWEdU5txYsii6PK8AD%2FSu8KRGCitcEEtWgi0NO1T%2FMbpr2ef8Mk%2F720m94WyNlfslAB9vdkLY6SguqAFXFgTnJx%2B5xSczO6RMVK8DVY0aXZIwQhXS%2Br8QuqY56fnX6CQ19M0mlePmmlMO0P8INJEHSpMPHedhrBZN55jMryf5bzaIigSBcXwGdcD9%2FZH5yoyscAAs6lyyKTrXsxJz7KIHeSnQqBD6MXrK4tKT5cch0LSA5yjP%2BOBHSolcbMmRyBTEGw%2FNIo9n8AwOAN0yTDu1MPJBjqkASL6MqmPVDUnMDFdI7G8rkg8N6KD124vAdTC8NmgSfxVlse3bwpVPGxLEBbLCGy0%2BvWMyWIxre7O%2BUFFaCy7BthZS6QrtSunM8WPpDSDtqUp6vQz5S8O7b2k1DPrnCSiPssQO2YpleH5tdyo82fA8SWFlnbYoIyGW94Qt%2BsZntKOiWWcBWNbiWwcVHHvk5hzOZk1ibU7PEZCq9hOGLOObKsFNPyN&X-Amz-Signature=fdd590f718a1584e59a1659d2a67d8fd115ec8833ba3fa2881b264b31f5b105d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
