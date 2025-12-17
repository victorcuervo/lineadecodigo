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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JINOJOE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5k%2BdKDbvUXcJxKYiKiWEN4kC4Nmoa%2BP5sb4epjySfkwIhALjy%2FqIXRW30GmlzU8PohXAgDZP2qk45Z3edG84wTRV5Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyZciui%2Bu9Je%2F089xgq3APeiJlIJE7F2iqIN4mwgRii4cbGKW4Mq%2F0%2FjVbaJYvneLglQLaZWA7rQ4r3oBZhtDH6sUXSUTb7ouAvwJYrggC8mWLu0pZThSBqwYSO5iH98zGHV2IRML7Va3mfdK2Od5KIL2uvke9HaytdZ8V7Hmnb1rlveCg1PgfzW4Hr79fnOQcTipeflpAkrwPIEsa%2FRypQ%2BOM9u5X2Ing2ErBc0qkKWD6Mv45QyfXHiz7fI0UedutiOej5pDqWiA0oNwZ%2F8u2nxCXz10DX6HDNLhw0CpVTEqIBrZzkPxCuRh%2BN5lTPzAMUpzVdLr8yTbl3DruU3ioQZk31FU4ajp2k8WPxvdOfThY53efZ39PgKG8zJFrSd7NuxeUxBbES6P6nGzpuWcmExgvSxEab7M%2B9PDDplb%2BkyFOwYVcqQjXsEQ3JWVHb7PNFkpk3r6rZ8ZndlpOpxKlrRKiWUPgsSZ4vDJePdSWVuK%2Ffiit4vw%2FR1k6WHaC82yyDoojWNi0lVN98HdOkZRnyAypp8RBncILQRI1MmQMC%2FAFea6%2FhyzgMOWJs9xCTAEGh2JA%2FZjq2UkKPPPH41kvVaJ8OkQe6K0jpdG02yajS3bpme2txYt6Hk%2FxJoJ2zbDFqmn9GCcpOYSVVrjC24YrKBjqkAStIRibonJ8ROXjSiRYikK561nt0nzafx%2BO7KpeH2Zy%2F6qOMsBIOIWyE%2BFHqSlWFXmmbKCuDojW3UqII2sfjR4d24VRz7r3YNTTRG8MHdX4hQ4tzTnUc3gIZW1nW1hOqzmB0UuxOaYYk3Kc5dZEtt%2FAEIeXg64LmwIVGwMCPeNZS82xH%2BoTLHbS9oicyt%2FDuLdBYVg9S36wTXxPRxYr78DbOuhYn&X-Amz-Signature=f8e52e7aa0935af9045410a9d981e2ab341aff2c21f2fe62afa31afe3422aa88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JINOJOE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5k%2BdKDbvUXcJxKYiKiWEN4kC4Nmoa%2BP5sb4epjySfkwIhALjy%2FqIXRW30GmlzU8PohXAgDZP2qk45Z3edG84wTRV5Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyZciui%2Bu9Je%2F089xgq3APeiJlIJE7F2iqIN4mwgRii4cbGKW4Mq%2F0%2FjVbaJYvneLglQLaZWA7rQ4r3oBZhtDH6sUXSUTb7ouAvwJYrggC8mWLu0pZThSBqwYSO5iH98zGHV2IRML7Va3mfdK2Od5KIL2uvke9HaytdZ8V7Hmnb1rlveCg1PgfzW4Hr79fnOQcTipeflpAkrwPIEsa%2FRypQ%2BOM9u5X2Ing2ErBc0qkKWD6Mv45QyfXHiz7fI0UedutiOej5pDqWiA0oNwZ%2F8u2nxCXz10DX6HDNLhw0CpVTEqIBrZzkPxCuRh%2BN5lTPzAMUpzVdLr8yTbl3DruU3ioQZk31FU4ajp2k8WPxvdOfThY53efZ39PgKG8zJFrSd7NuxeUxBbES6P6nGzpuWcmExgvSxEab7M%2B9PDDplb%2BkyFOwYVcqQjXsEQ3JWVHb7PNFkpk3r6rZ8ZndlpOpxKlrRKiWUPgsSZ4vDJePdSWVuK%2Ffiit4vw%2FR1k6WHaC82yyDoojWNi0lVN98HdOkZRnyAypp8RBncILQRI1MmQMC%2FAFea6%2FhyzgMOWJs9xCTAEGh2JA%2FZjq2UkKPPPH41kvVaJ8OkQe6K0jpdG02yajS3bpme2txYt6Hk%2FxJoJ2zbDFqmn9GCcpOYSVVrjC24YrKBjqkAStIRibonJ8ROXjSiRYikK561nt0nzafx%2BO7KpeH2Zy%2F6qOMsBIOIWyE%2BFHqSlWFXmmbKCuDojW3UqII2sfjR4d24VRz7r3YNTTRG8MHdX4hQ4tzTnUc3gIZW1nW1hOqzmB0UuxOaYYk3Kc5dZEtt%2FAEIeXg64LmwIVGwMCPeNZS82xH%2BoTLHbS9oicyt%2FDuLdBYVg9S36wTXxPRxYr78DbOuhYn&X-Amz-Signature=ff14e12a453ea73a675f39e73eeb830e0370a37df84275326ec07543b1f13cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
