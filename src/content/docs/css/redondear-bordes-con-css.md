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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJOJYOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdqeWHQtshpanpaEviL62JybiztlHltfNfnowiTxsJaAIhAMzQEn7Ae3UMXDYVSUOvSXZoKBXr8oDykmGL3cEgj%2Bi8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxSjKwq%2FWrCpstSM18q3ANIRFah3cuX8%2Btb2x1cbd%2Bj7xM8qJWfSRiN986LjOvhD3IVtOdcMAL%2BgapJckdDb%2B0S%2B28l9yCcgLsrFzW38ZE%2BIycrojRgwmayyUHKIjRBP7eK5dEf%2FbRJsHIflHxcCQM4ZKiAK8LyXxra6RUz8GmGlxMfesGo8Vt0w%2BJlbRsz8hm0Sqw5RiK5ecb2%2BdZqZOsjDnHx0CigUghxRQt2KUen3RiyVrTxw0gcH0TlgqYipcMmjUwddiTvi50EXcwlocOyHqu%2FLUpwTvEhXgO26vJ%2FBLsdAZI3MMbHw%2BkF6C5%2BbUB7A7Z7gpP3FmXPOFK7%2F51DFfF3%2FW8l1Byen1Z9Dwry8OthzlnMBH20kjVEmrPfBcmd1J0Bpcqj%2BOWukymHMSllcCfmK0JS1g3DkSg2TmQv01Yw9cfkK3WBcJHuyED9Phw8OQkFUt5SZDUfPTNsBL%2FQSzIbe0bgu2R91TMN0dm%2Fa%2FMVNAVwObMt2OyZpwcFA2eg1X5wJECb3ygjlhOgY51R5gYKmUyPhHczO7sp221zRvnKNW1fgemTIUlorin%2FG5epEbvWXxQ3Fl0iYAgXHfw2hAMbFvQoa93m1TL%2FVFEd2fdGOs5LRrdMYq7gnJQCF5WEAsd%2B84Lh0yasNjD29MvJBjqkAWSmdJJPzBkw746WDmvQMM14LsvgRDK%2BTGuY47Ow9IyXT0T%2F9UO2UR18mrlj1TklccpZYyuYgcfhFSJ4Wr%2BA4CcwhQ19kd3OqS7y4j7hD%2ByPX68Ld%2FcWJejcahhcK%2BY6kPWokkZAboET6F2zD1azjPmlSjSj2EpDHzjh2dkL7BXNo%2BjfW4GPnpt5CiaOcIDaE8cX9dF6oReoUpSBfnFyXcm%2BDFeC&X-Amz-Signature=7a2f3f4ca5027edacf2b876e9b6be5c447b974b8a381f95e8b4179dd7a272eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJOJYOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdqeWHQtshpanpaEviL62JybiztlHltfNfnowiTxsJaAIhAMzQEn7Ae3UMXDYVSUOvSXZoKBXr8oDykmGL3cEgj%2Bi8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgxSjKwq%2FWrCpstSM18q3ANIRFah3cuX8%2Btb2x1cbd%2Bj7xM8qJWfSRiN986LjOvhD3IVtOdcMAL%2BgapJckdDb%2B0S%2B28l9yCcgLsrFzW38ZE%2BIycrojRgwmayyUHKIjRBP7eK5dEf%2FbRJsHIflHxcCQM4ZKiAK8LyXxra6RUz8GmGlxMfesGo8Vt0w%2BJlbRsz8hm0Sqw5RiK5ecb2%2BdZqZOsjDnHx0CigUghxRQt2KUen3RiyVrTxw0gcH0TlgqYipcMmjUwddiTvi50EXcwlocOyHqu%2FLUpwTvEhXgO26vJ%2FBLsdAZI3MMbHw%2BkF6C5%2BbUB7A7Z7gpP3FmXPOFK7%2F51DFfF3%2FW8l1Byen1Z9Dwry8OthzlnMBH20kjVEmrPfBcmd1J0Bpcqj%2BOWukymHMSllcCfmK0JS1g3DkSg2TmQv01Yw9cfkK3WBcJHuyED9Phw8OQkFUt5SZDUfPTNsBL%2FQSzIbe0bgu2R91TMN0dm%2Fa%2FMVNAVwObMt2OyZpwcFA2eg1X5wJECb3ygjlhOgY51R5gYKmUyPhHczO7sp221zRvnKNW1fgemTIUlorin%2FG5epEbvWXxQ3Fl0iYAgXHfw2hAMbFvQoa93m1TL%2FVFEd2fdGOs5LRrdMYq7gnJQCF5WEAsd%2B84Lh0yasNjD29MvJBjqkAWSmdJJPzBkw746WDmvQMM14LsvgRDK%2BTGuY47Ow9IyXT0T%2F9UO2UR18mrlj1TklccpZYyuYgcfhFSJ4Wr%2BA4CcwhQ19kd3OqS7y4j7hD%2ByPX68Ld%2FcWJejcahhcK%2BY6kPWokkZAboET6F2zD1azjPmlSjSj2EpDHzjh2dkL7BXNo%2BjfW4GPnpt5CiaOcIDaE8cX9dF6oReoUpSBfnFyXcm%2BDFeC&X-Amz-Signature=e651412b4bd2a9027aa4d00d422cf4dde28266bfa1e359b53f4b25b9a7adc4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
