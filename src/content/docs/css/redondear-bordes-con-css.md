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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVSHG4T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfw%2F%2FFz3AEgZ%2F6FNgYIGsFb2FqwSlPcQ7z8aVx4pckzAiEAyQ5oa4DZAiIueEsKyL52%2FUP54t7vzQXKJttuwyxTQAsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI3U3TpOjBwH%2BUukbCrcA3ZK4VgrfC%2FvMPn4ioVKPZMNoCxh2p1T6T2TqUmFlIClV31RFFCXS78ZW3QbiL6OtFSbLey9wwyEpKOk6%2FM12VigtvoznDOJITVX5xETupwCRsQbXC2xdf0SWjL9XSl3zw95q%2F%2BP2hL%2Fv6goDHGivvhtiifVwSjhib7wLDTSADRyTTRLjwW2OxurBI52aBsPsDZwSxSxjXg4PHxUXJVkcB5oFQbfa9uqiEtKa1WJD%2FHdckqDACL5ohJI5n0%2BIRfQb0KnwMKmGdhqEXXGSdvg2gqnhJOoDnMHUIejnp6TTYKdnLI1GOgpoT8VQPbaGGgi0UHqXbhpQj05ln0aGt1iNFlEgEaY69%2BVJEJxUfAHL%2BXCOyxWeVdnZ%2BYWbyg1aJAuEonwouAvvRoqzadhDzJItCwIl2WDGT%2FqWGfUzWE4GrjK71LzemM1I7XzBHFeWq%2FhR85igNUnO%2BbLcg8nhW8I61zQnbEbE7LM%2FSLG2WVye4IXa902wfM2U4BjsLceRfcFOhBc3kPwiUyLESa9KFOtPTgVaoFknNYVQLfvwEnI30piYEELvtelU0Sohm9dHClzvH%2FooZ6GBtZC05Eq1Nicg04%2FWsZB1ZDalh1d9vTJhM3CKJXLo8OAqUO%2F15FoMJ2K0MkGOqUBRVyi4j1zXbhYHcR5Bxf9rRI%2BnwK61ASiQIDLpyl16oT9LztF8ig%2FXb0AwKOYzEGO%2B4fcrb7yCtoSawnvybeOhItg5AYEJMq1qZuO1VHLzAmyPcRpoRWCj5%2FQvYjREwdRKGpyjtY49CQhARwoikjv9gxnqNaPmXIsqA2mL1KDCqMoOcLB%2BfZ%2B8zHdBIJsX9qbQirCpPejYdfihXUboOmadwIcJ77%2F&X-Amz-Signature=72d45d6c4d9f904b880c4065f203b384c323b082a8b7cbce017f0a3f411184bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVSHG4T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfw%2F%2FFz3AEgZ%2F6FNgYIGsFb2FqwSlPcQ7z8aVx4pckzAiEAyQ5oa4DZAiIueEsKyL52%2FUP54t7vzQXKJttuwyxTQAsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI3U3TpOjBwH%2BUukbCrcA3ZK4VgrfC%2FvMPn4ioVKPZMNoCxh2p1T6T2TqUmFlIClV31RFFCXS78ZW3QbiL6OtFSbLey9wwyEpKOk6%2FM12VigtvoznDOJITVX5xETupwCRsQbXC2xdf0SWjL9XSl3zw95q%2F%2BP2hL%2Fv6goDHGivvhtiifVwSjhib7wLDTSADRyTTRLjwW2OxurBI52aBsPsDZwSxSxjXg4PHxUXJVkcB5oFQbfa9uqiEtKa1WJD%2FHdckqDACL5ohJI5n0%2BIRfQb0KnwMKmGdhqEXXGSdvg2gqnhJOoDnMHUIejnp6TTYKdnLI1GOgpoT8VQPbaGGgi0UHqXbhpQj05ln0aGt1iNFlEgEaY69%2BVJEJxUfAHL%2BXCOyxWeVdnZ%2BYWbyg1aJAuEonwouAvvRoqzadhDzJItCwIl2WDGT%2FqWGfUzWE4GrjK71LzemM1I7XzBHFeWq%2FhR85igNUnO%2BbLcg8nhW8I61zQnbEbE7LM%2FSLG2WVye4IXa902wfM2U4BjsLceRfcFOhBc3kPwiUyLESa9KFOtPTgVaoFknNYVQLfvwEnI30piYEELvtelU0Sohm9dHClzvH%2FooZ6GBtZC05Eq1Nicg04%2FWsZB1ZDalh1d9vTJhM3CKJXLo8OAqUO%2F15FoMJ2K0MkGOqUBRVyi4j1zXbhYHcR5Bxf9rRI%2BnwK61ASiQIDLpyl16oT9LztF8ig%2FXb0AwKOYzEGO%2B4fcrb7yCtoSawnvybeOhItg5AYEJMq1qZuO1VHLzAmyPcRpoRWCj5%2FQvYjREwdRKGpyjtY49CQhARwoikjv9gxnqNaPmXIsqA2mL1KDCqMoOcLB%2BfZ%2B8zHdBIJsX9qbQirCpPejYdfihXUboOmadwIcJ77%2F&X-Amz-Signature=18cb3ef08d70e30d2009d80cbd6a475a55fe1d5b7ec4f46ddcd27b64ff83fabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
