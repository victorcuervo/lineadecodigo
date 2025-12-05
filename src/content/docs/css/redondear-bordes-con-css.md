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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRRYGJK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwv5Dsdc46rwhuRyNGqZPjmTvpfNiAplTP00r6MRNTsAIhAMyQGtUivSYoqvrIWuYpuZNMJlfb2Iydm6v2M8k9b6XsKv8DCE8QABoMNjM3NDIzMTgzODA1IgzyVT3lP2znpNXJ1iIq3ANk4fCRoU8gfa6Ae7l2mwM202LjWhBGZunBfdA2x6Pv4tV1HSdDaN70%2F%2BgqAl5tOgmwxQ%2FHW56qz8ugGnzITTcnxaUpOaYh6BzZQ4QJhSYNjbiCqP7JOK%2FuG5fcsA8KZeNtQAI1ARYSRFdd35QuN0RfLzoRSbyTw45%2Bf4XeazJFIpHLt6SEkyfv9TwkuA4z25bdt4xPZUk9D9eNiAPKFeUx10ARTbklH7n0RpkOYLRFgQl6y%2BTn1ZMzoGpIl3JRSlL99r5AgZpapBTJb07dy%2FAQXb3I4lBCjLXglkK7sDpInEPMwsywU18%2Bo6pN0C%2BwRh488T%2BBaemR3tDPNFN3iS%2BzwaoLFQqxvibPsuVDt%2BiBfp61776CiMBbU7Bf2S%2F0gMFn9dk8Ty%2FvYtqS98AMCzPD%2Bj7ZnyAS98yYNvjIqHtyA2jWrJtMSXU2koGt%2FhNyTUZgFTGXqQeDJMF4gjDD%2F5KNPfl5CXB8EhJvapggex3dnEQP4xXzjm6lVyNv7f4Efsj3djooa%2FLPt3X8SPWsb3rR7nknv2sSmrVW%2FD1a%2FGGvSuF5cKn8letJq27ODCQZkNPFMR1gLCxWSm7MQa8vbXgd5sssnJE%2F%2FI%2FO4IQBBGsO06Vv%2FQLYJN2vtWi5SjDJjMjJBjqkAbkTAZvUzDrb6jJNjFmB%2Bqd%2FU5mFRa4Zrd4GIhFU8ee2JPdvPxCw1CXWm%2BHfhzncuivOvkCncX24DgsgE7%2F71ZpaqO4xMWSbnfbsUS3zmiwKGRicKcAjlsPecVpmg3W5urxT9FHhc9zopNyTkLFyXV%2BJPCDBENTilQw%2BKO%2Fq4JT9OP1zZPtBYSgQoQQfnGVIpi3eAHxwKFWnp9GMeGNI6YnVrvPg&X-Amz-Signature=cbdc3c0e89c1743001d00da4d6f759c0b65c7912ff6848a3a1e6d98ed2d34e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRRYGJK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwv5Dsdc46rwhuRyNGqZPjmTvpfNiAplTP00r6MRNTsAIhAMyQGtUivSYoqvrIWuYpuZNMJlfb2Iydm6v2M8k9b6XsKv8DCE8QABoMNjM3NDIzMTgzODA1IgzyVT3lP2znpNXJ1iIq3ANk4fCRoU8gfa6Ae7l2mwM202LjWhBGZunBfdA2x6Pv4tV1HSdDaN70%2F%2BgqAl5tOgmwxQ%2FHW56qz8ugGnzITTcnxaUpOaYh6BzZQ4QJhSYNjbiCqP7JOK%2FuG5fcsA8KZeNtQAI1ARYSRFdd35QuN0RfLzoRSbyTw45%2Bf4XeazJFIpHLt6SEkyfv9TwkuA4z25bdt4xPZUk9D9eNiAPKFeUx10ARTbklH7n0RpkOYLRFgQl6y%2BTn1ZMzoGpIl3JRSlL99r5AgZpapBTJb07dy%2FAQXb3I4lBCjLXglkK7sDpInEPMwsywU18%2Bo6pN0C%2BwRh488T%2BBaemR3tDPNFN3iS%2BzwaoLFQqxvibPsuVDt%2BiBfp61776CiMBbU7Bf2S%2F0gMFn9dk8Ty%2FvYtqS98AMCzPD%2Bj7ZnyAS98yYNvjIqHtyA2jWrJtMSXU2koGt%2FhNyTUZgFTGXqQeDJMF4gjDD%2F5KNPfl5CXB8EhJvapggex3dnEQP4xXzjm6lVyNv7f4Efsj3djooa%2FLPt3X8SPWsb3rR7nknv2sSmrVW%2FD1a%2FGGvSuF5cKn8letJq27ODCQZkNPFMR1gLCxWSm7MQa8vbXgd5sssnJE%2F%2FI%2FO4IQBBGsO06Vv%2FQLYJN2vtWi5SjDJjMjJBjqkAbkTAZvUzDrb6jJNjFmB%2Bqd%2FU5mFRa4Zrd4GIhFU8ee2JPdvPxCw1CXWm%2BHfhzncuivOvkCncX24DgsgE7%2F71ZpaqO4xMWSbnfbsUS3zmiwKGRicKcAjlsPecVpmg3W5urxT9FHhc9zopNyTkLFyXV%2BJPCDBENTilQw%2BKO%2Fq4JT9OP1zZPtBYSgQoQQfnGVIpi3eAHxwKFWnp9GMeGNI6YnVrvPg&X-Amz-Signature=0dcf63430cffd88ec0b4cc228491da34b6ef2e6427d81c2b76aa2befc4087f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
