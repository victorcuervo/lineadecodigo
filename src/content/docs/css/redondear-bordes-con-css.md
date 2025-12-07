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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDLHKBI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELpPPQS8dG5R%2FLQ8T6RNSZ6jB%2FYWmti8Vs1U%2BFhqHAlAiEA98Tqe%2B4GhNsA73GivY1wwTvesW1F3qHbO5QMdWkNROgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo6Ch6NtDsZU%2BXV0ircA04WI9Rqx%2Bf%2BPpEC%2FBDaAFekgVLvZeQvObINiNbRTMMIcdVCN%2F8nWFzWGHnQRaabHyFanuHhj67VrMZI%2B7F%2FnNEx4Dx0gCKjq7N2WVcSeseAqwY4wJsedOOo6Ko5wtDS7zy9q48CSvAtRrbgecRKs2F0RwenWFjBgnbJp4CHdE%2Bygzj7W6KSeBdvXfoYkxTdVpIEB15ohIGvj8SksjuqFgpVnKDK1xDS%2BRpl3Qag%2F9R6rXaDb3TSR3NZTZzGgpb8np0SNjCOQpmEgmmSatd4eNoJhCbwFMdmBHJX8Rx47U9lfz06WkE68p1287GzygJR1%2BPcCdfU99OmeT9xJ%2F9DuoiW75WwASaK4dmKMnB4m0fUoEXJcNVHDS2oBEOvFgucbQGn4Ao9qEg4oejCQw5o%2FV%2BSMMhLeVZGDyntxgw5cbU7B54KPLv9bQLLM6Qkljs2WzA3cpoa7d7pXI%2BL8YOgdBmWOy49FXwB5GXur12O%2B9L1dQpw9T1fviIFtS3CfSQPjPw8VzczmQMEWOdUHI77cVMQPW4zDAb8pSNPgNhHugKuLFPU%2BQKNT4wv%2BMf%2BuT9LjY7h%2FtoCLdizAwGEiql9A6jiQMcBzckqNIpWCe8HE%2FKxx4vLYeEVZo03tPn3MNz90skGOqUBhSByW6g3fKtzpLtItwIGdehKVyk8SYxHbxnp%2FmBt0pbQNsFykh3TwYhnLEXHdGSVtjcxs7w7ojoNL1H2FA5aG1Voq5Q17isBuGPEQMf%2FMCX4qAheLRug7IsxEAexeoqiroqv%2B2%2BxvXxkCalaDY0I9TDBGueLjbnbYpZpiJ55JApUPu3L2HANJdNCEWdHwe2wOR4n%2B9Q79kc4kExzgFG60bAzjAk7&X-Amz-Signature=55082ee9cb2b6c0fc123c32a5ec150b16a23af4f53bac9e90a94cfee7b8f32e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDLHKBI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELpPPQS8dG5R%2FLQ8T6RNSZ6jB%2FYWmti8Vs1U%2BFhqHAlAiEA98Tqe%2B4GhNsA73GivY1wwTvesW1F3qHbO5QMdWkNROgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo6Ch6NtDsZU%2BXV0ircA04WI9Rqx%2Bf%2BPpEC%2FBDaAFekgVLvZeQvObINiNbRTMMIcdVCN%2F8nWFzWGHnQRaabHyFanuHhj67VrMZI%2B7F%2FnNEx4Dx0gCKjq7N2WVcSeseAqwY4wJsedOOo6Ko5wtDS7zy9q48CSvAtRrbgecRKs2F0RwenWFjBgnbJp4CHdE%2Bygzj7W6KSeBdvXfoYkxTdVpIEB15ohIGvj8SksjuqFgpVnKDK1xDS%2BRpl3Qag%2F9R6rXaDb3TSR3NZTZzGgpb8np0SNjCOQpmEgmmSatd4eNoJhCbwFMdmBHJX8Rx47U9lfz06WkE68p1287GzygJR1%2BPcCdfU99OmeT9xJ%2F9DuoiW75WwASaK4dmKMnB4m0fUoEXJcNVHDS2oBEOvFgucbQGn4Ao9qEg4oejCQw5o%2FV%2BSMMhLeVZGDyntxgw5cbU7B54KPLv9bQLLM6Qkljs2WzA3cpoa7d7pXI%2BL8YOgdBmWOy49FXwB5GXur12O%2B9L1dQpw9T1fviIFtS3CfSQPjPw8VzczmQMEWOdUHI77cVMQPW4zDAb8pSNPgNhHugKuLFPU%2BQKNT4wv%2BMf%2BuT9LjY7h%2FtoCLdizAwGEiql9A6jiQMcBzckqNIpWCe8HE%2FKxx4vLYeEVZo03tPn3MNz90skGOqUBhSByW6g3fKtzpLtItwIGdehKVyk8SYxHbxnp%2FmBt0pbQNsFykh3TwYhnLEXHdGSVtjcxs7w7ojoNL1H2FA5aG1Voq5Q17isBuGPEQMf%2FMCX4qAheLRug7IsxEAexeoqiroqv%2B2%2BxvXxkCalaDY0I9TDBGueLjbnbYpZpiJ55JApUPu3L2HANJdNCEWdHwe2wOR4n%2B9Q79kc4kExzgFG60bAzjAk7&X-Amz-Signature=657ae21d2a29db9fe3c29907be5ecd625c6aa1fe442c20dd476ff1fcb4f059d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
