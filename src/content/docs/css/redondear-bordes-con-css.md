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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTMRFKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGN4xM8E863B%2FZjVPPJ79%2Fa2uF2toqJWKBw9Sc351dAiEAwdfcoinewI9aD9XiNdKw37iR614EyJFG1WWtZbgfzDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuUUiMy5feD4Q87NCrcAwyvctNL0BxZ56w2MNwLW7%2BpzDyguZFjrgaAhNb%2BUDelkoSK3R8Ugi6r2WWUWfrapliufiAyz9VHxvMoDrLgjK4ralftBnJ73BeVK0fOD2cC2pJ00EG%2BlPqY7GcPOFMy7o7Z6otXhUr91T67L106%2B%2Bo3TfPsSN18ynI%2F2VPTdfv1oQ2Zmoo8a0pXPXmXpj3KFL2boqIfiYSNYYeoiCvr9lgK0Rt4NfdaER1WI8h%2BwETodItT%2FBOAk8bndz16AbuN%2BQFSh3pLiocfXDGjqxmKVz3s1MjBc6K8rTcMSQrfr8E06S7m9E8RgMMENcC8H33MdPKdX6hGA59J6rq%2FmgTd8DtHQ4chhFOB7%2B8xwQC52QobCsukYtWRb0Q%2FkMBSm3sr5ns9A4lcOImNs%2BSsZpvE3Lwzz95R855cHTvR%2BTUftQz7YVH2Aom2NnaHC0SkN%2F1WSR2OhgNwr6vgqXj1NH0YIfBzvRwOJXjPOzSzPu4p%2FgCHKk%2FTWUlMez0HaSSgQSiYVbSxHtP8S%2FE9ATnzfJZwQDb6GDpuSlKSBcnDfl9gVhbOANCh3%2FntAbSKQNkDoEJrzgxHB5oh%2Bkpmy4naMkQnsJyl6rsWBH6w33r1YBiE%2FZWrwxlZOnkZ0oJpyhaHMID%2B0skGOqUBOvbVeYSl%2F8qiMhGZJ%2BsWBX6vDWJZ1pYVrrC%2FKVZcXEBaNL4IN4YEO7gOOy2bz6wF0oq4udqU%2BwkT2zI0oD6cceAIvSDgiQo%2FKuxJcuUapJOLtuoaQomUTBoQE5xK0RgtfG%2Bqq4UeGDnSCJeug6JnxW3NCuDZ9LrECqntGQtBb4FG1fSZf%2F4ctprEIkVg5ugL7dwhowwBStyn74PJ8fWLnV042ZTF&X-Amz-Signature=1cb57480084b6b40ebafcd0d0ad250961e534fdda51190c9bcbecf97bfe3c3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTMRFKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGN4xM8E863B%2FZjVPPJ79%2Fa2uF2toqJWKBw9Sc351dAiEAwdfcoinewI9aD9XiNdKw37iR614EyJFG1WWtZbgfzDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuUUiMy5feD4Q87NCrcAwyvctNL0BxZ56w2MNwLW7%2BpzDyguZFjrgaAhNb%2BUDelkoSK3R8Ugi6r2WWUWfrapliufiAyz9VHxvMoDrLgjK4ralftBnJ73BeVK0fOD2cC2pJ00EG%2BlPqY7GcPOFMy7o7Z6otXhUr91T67L106%2B%2Bo3TfPsSN18ynI%2F2VPTdfv1oQ2Zmoo8a0pXPXmXpj3KFL2boqIfiYSNYYeoiCvr9lgK0Rt4NfdaER1WI8h%2BwETodItT%2FBOAk8bndz16AbuN%2BQFSh3pLiocfXDGjqxmKVz3s1MjBc6K8rTcMSQrfr8E06S7m9E8RgMMENcC8H33MdPKdX6hGA59J6rq%2FmgTd8DtHQ4chhFOB7%2B8xwQC52QobCsukYtWRb0Q%2FkMBSm3sr5ns9A4lcOImNs%2BSsZpvE3Lwzz95R855cHTvR%2BTUftQz7YVH2Aom2NnaHC0SkN%2F1WSR2OhgNwr6vgqXj1NH0YIfBzvRwOJXjPOzSzPu4p%2FgCHKk%2FTWUlMez0HaSSgQSiYVbSxHtP8S%2FE9ATnzfJZwQDb6GDpuSlKSBcnDfl9gVhbOANCh3%2FntAbSKQNkDoEJrzgxHB5oh%2Bkpmy4naMkQnsJyl6rsWBH6w33r1YBiE%2FZWrwxlZOnkZ0oJpyhaHMID%2B0skGOqUBOvbVeYSl%2F8qiMhGZJ%2BsWBX6vDWJZ1pYVrrC%2FKVZcXEBaNL4IN4YEO7gOOy2bz6wF0oq4udqU%2BwkT2zI0oD6cceAIvSDgiQo%2FKuxJcuUapJOLtuoaQomUTBoQE5xK0RgtfG%2Bqq4UeGDnSCJeug6JnxW3NCuDZ9LrECqntGQtBb4FG1fSZf%2F4ctprEIkVg5ugL7dwhowwBStyn74PJ8fWLnV042ZTF&X-Amz-Signature=39f294e18c29f911c25765bed81be9e266512f31c0eeb738f14aa47875cb8f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
