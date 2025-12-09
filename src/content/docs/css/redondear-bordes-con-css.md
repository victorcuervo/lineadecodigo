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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSMSUPE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzulMYPPjam30S6sh6Ne4HAunLyhU6wQ249aRg3A0d%2BwIgcCLsXhWhc1F7dlnaQT8DWYope0%2FPgzoh3HclWRdsIkoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyyYuF%2B0pu%2Fow2MCSrcAzN3ccjaMi4zwjX2%2Bp%2BYioH9LahCrEM4mW3uyzG%2F5Fva4cJl0Mc0chXyWm60MACoxGLUH8iDSlZI1vauPMCc%2F%2BDOcpBczFGsbkKHSVNKfT7B6SkNSgDEpSbj%2Fw7%2FsexQoPfNfuT9tlKr6sQJOMpLwDpW9Oh2SKFXADhA2aGxT8PTHTjzqF3uPrreH1NFimjkVygVhiPPad0Yf%2FFsCs3bb7NLWRPIFGD90r0ulpBlVgCSZxQ%2BmcPjT1ABFyoqj9xBRAPcvKpqrdntR1tip8i4gF6lFcctJTAL1%2FHuoKVQBLJhH%2Bqx2KfL9pMON%2FoEZSyrj5Si9mJWDstrvCQtiIfgvXUCDujNWdNTy49cIAkp5ZsOEOydLN%2FmYrGsqE7weN%2BPoDMxIfPhWCxyLgIRROOuHNayOTFUDWN9zFlqj3Djdkzk7ocnzySHSA8%2Fkzz%2BC3cCC395ayjI5wfRxUBQE2ZZZTCWGwY53STq1XGj6olOV11fxjjZ8%2BQPIYIpLXT873cVYcoY96FyVkOJsAbwWg9RqBxty2k0%2BNWEpcOMxP21acSnDUFUFfXvxDsIFcALTpEscHpEIykOBvWB%2BTAuxNY59C8rQZoDPh6F8mkbBn8KMtGd0PKQF5aYkR2ASQM7MO7p3ckGOqUBqsmTZ%2BfXybSC1oRr6yGSnMXqaeqXCshwpX7h0OAIma522piNEwtzLhuE5IjoqBLxYoIemXsL%2Bq9vqDvIrTzMurZqm2zXNayCFmh7pzjATCjin4ZBTXulWmA%2FFa5eLq6dJ788TQmhb2Ki1Fyv63KpjfMkjBcBAzqEmDIy6HJNbUjW1bFWNVwhJaaUBebhClVWgljSuYKL4p2o5%2BMahZbd3qf0k%2BgJ&X-Amz-Signature=9ec7c2c0032b96afe59a82fd909d2c623b7a117e1a19bfab75005f26c7340737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDSMSUPE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzulMYPPjam30S6sh6Ne4HAunLyhU6wQ249aRg3A0d%2BwIgcCLsXhWhc1F7dlnaQT8DWYope0%2FPgzoh3HclWRdsIkoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyyYuF%2B0pu%2Fow2MCSrcAzN3ccjaMi4zwjX2%2Bp%2BYioH9LahCrEM4mW3uyzG%2F5Fva4cJl0Mc0chXyWm60MACoxGLUH8iDSlZI1vauPMCc%2F%2BDOcpBczFGsbkKHSVNKfT7B6SkNSgDEpSbj%2Fw7%2FsexQoPfNfuT9tlKr6sQJOMpLwDpW9Oh2SKFXADhA2aGxT8PTHTjzqF3uPrreH1NFimjkVygVhiPPad0Yf%2FFsCs3bb7NLWRPIFGD90r0ulpBlVgCSZxQ%2BmcPjT1ABFyoqj9xBRAPcvKpqrdntR1tip8i4gF6lFcctJTAL1%2FHuoKVQBLJhH%2Bqx2KfL9pMON%2FoEZSyrj5Si9mJWDstrvCQtiIfgvXUCDujNWdNTy49cIAkp5ZsOEOydLN%2FmYrGsqE7weN%2BPoDMxIfPhWCxyLgIRROOuHNayOTFUDWN9zFlqj3Djdkzk7ocnzySHSA8%2Fkzz%2BC3cCC395ayjI5wfRxUBQE2ZZZTCWGwY53STq1XGj6olOV11fxjjZ8%2BQPIYIpLXT873cVYcoY96FyVkOJsAbwWg9RqBxty2k0%2BNWEpcOMxP21acSnDUFUFfXvxDsIFcALTpEscHpEIykOBvWB%2BTAuxNY59C8rQZoDPh6F8mkbBn8KMtGd0PKQF5aYkR2ASQM7MO7p3ckGOqUBqsmTZ%2BfXybSC1oRr6yGSnMXqaeqXCshwpX7h0OAIma522piNEwtzLhuE5IjoqBLxYoIemXsL%2Bq9vqDvIrTzMurZqm2zXNayCFmh7pzjATCjin4ZBTXulWmA%2FFa5eLq6dJ788TQmhb2Ki1Fyv63KpjfMkjBcBAzqEmDIy6HJNbUjW1bFWNVwhJaaUBebhClVWgljSuYKL4p2o5%2BMahZbd3qf0k%2BgJ&X-Amz-Signature=4ea9a0a5c6c45d17c97adf558be60a920b1df6c966e541f91bbeb047121ec684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
