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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667357D5B5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqhN6wL9vlCX7A0FteiZtWYZ8jNBZnwDKUba2Wi6ZYAIhANcC9J%2F0ekwKPiLERWams5HJdwMFEpydRFxd2XlklbTYKv8DCFUQABoMNjM3NDIzMTgzODA1IgzbiQuOipZuyRGPLHQq3APs5oN6NQBKvtqQNupzCBlPvHg3Y2anwXTXJ58YBvMSgC5E6Il%2BkZTN6QMn5ye8rlXLWSzmDXb7Llm53XyYkrjPYDks%2B3oCTqJxwudh6U6iFPPQKbp21NR4prkcPEcHz4bP3eUa9lh0jzz93J1qO47dQJcUY%2FTopswcmE9tgpfvGzKziR7wdZ%2FYYJcCDnTBDHmQwJmv1eKaT43B6Lk%2BuJAh6dXqOVL4P91k0s1uBIW2hwc%2BwpTiuW5MmX1K6CemOxZFib4amm3SdPNnv7fWCi1vG0TAOGRlWH2qtngOmKHl2Aywc72mPxcZd2nEDn1St1JFoTVRyQOwmXGJbl8mEa%2BmYjwvqNKS2gDjovQGMS263%2BKEhDZstrTW0g%2BHrcLMQPmZ8C6aINDQa2WNk3TThSPJViW%2Bt3UkvQeQwQonzkLMOukHN6CmdM3kWKRix8zSyV%2FRq3CUT7n8fpfbB7JISkSmmuZLT7a2OdT%2BqW5atWSMIK%2FiXoqXx1OPsPdMpSn3WvBDIAtsT2o09hQAH6MQinifIy%2FsjeHA3zOd8iNCkVSq5PCT7apDkMd%2FVSHT6hCbV12%2F7ISoKAkTeAjZZQ5gQTQV4P%2FW1dKXeUlG%2FNiYcEEWPwuRXosdFqlO6JKCrzCwpsnJBjqkAddRtZUvEzZxNbvT%2FvDufwYEWMtS2F9rqFkniOX6H7SzUlicVS%2B1ebU1A1y0RsU3Zz4FisB0NJhXa0EFQh13OIoC99TAMsmPAPzrO8%2FMC6k7g77yazSG5g%2FaGc1g1xf7drRYxF4JRa7R3jjsly0ipUVdMRznE80hfubzJEtM0yHa1hkN%2FoqRTZVP3s1IrhrUb%2FNUxXTpUApxOo48TeqChCziD2CH&X-Amz-Signature=8d2ea465a4bb1456919f94a11809ee9f88602ed00b1a6eca2dfa039bc0e08ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667357D5B5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClqhN6wL9vlCX7A0FteiZtWYZ8jNBZnwDKUba2Wi6ZYAIhANcC9J%2F0ekwKPiLERWams5HJdwMFEpydRFxd2XlklbTYKv8DCFUQABoMNjM3NDIzMTgzODA1IgzbiQuOipZuyRGPLHQq3APs5oN6NQBKvtqQNupzCBlPvHg3Y2anwXTXJ58YBvMSgC5E6Il%2BkZTN6QMn5ye8rlXLWSzmDXb7Llm53XyYkrjPYDks%2B3oCTqJxwudh6U6iFPPQKbp21NR4prkcPEcHz4bP3eUa9lh0jzz93J1qO47dQJcUY%2FTopswcmE9tgpfvGzKziR7wdZ%2FYYJcCDnTBDHmQwJmv1eKaT43B6Lk%2BuJAh6dXqOVL4P91k0s1uBIW2hwc%2BwpTiuW5MmX1K6CemOxZFib4amm3SdPNnv7fWCi1vG0TAOGRlWH2qtngOmKHl2Aywc72mPxcZd2nEDn1St1JFoTVRyQOwmXGJbl8mEa%2BmYjwvqNKS2gDjovQGMS263%2BKEhDZstrTW0g%2BHrcLMQPmZ8C6aINDQa2WNk3TThSPJViW%2Bt3UkvQeQwQonzkLMOukHN6CmdM3kWKRix8zSyV%2FRq3CUT7n8fpfbB7JISkSmmuZLT7a2OdT%2BqW5atWSMIK%2FiXoqXx1OPsPdMpSn3WvBDIAtsT2o09hQAH6MQinifIy%2FsjeHA3zOd8iNCkVSq5PCT7apDkMd%2FVSHT6hCbV12%2F7ISoKAkTeAjZZQ5gQTQV4P%2FW1dKXeUlG%2FNiYcEEWPwuRXosdFqlO6JKCrzCwpsnJBjqkAddRtZUvEzZxNbvT%2FvDufwYEWMtS2F9rqFkniOX6H7SzUlicVS%2B1ebU1A1y0RsU3Zz4FisB0NJhXa0EFQh13OIoC99TAMsmPAPzrO8%2FMC6k7g77yazSG5g%2FaGc1g1xf7drRYxF4JRa7R3jjsly0ipUVdMRznE80hfubzJEtM0yHa1hkN%2FoqRTZVP3s1IrhrUb%2FNUxXTpUApxOo48TeqChCziD2CH&X-Amz-Signature=e3553ae977e4199b1a81dfbfe12d9726238651fad37ce960e1eccced5eaa103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
