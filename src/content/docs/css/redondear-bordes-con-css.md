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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ILOORQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSvkPNEeB%2BOJoydLRur7rthsBc5RzpsST327tuZezeuAIgEUBiNUl3q2jMypqRO%2FSxPQ5sPE4haVM70p6Rqucv4%2FQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCRPclIG7eOfXSkOircA6fLFTcKNe6RQ2AUBUHing30SKpRCYNlJ6iulqcENkerhDqBWbSH1yrp4NrHGzls88Bp6O%2BfTRdhPFBc%2BFBVhXugW%2Fu4zrTSwiIQUzczeFBtmaFy4isVImpookdn%2FmQpECRHo%2B2ufShfUlOTAZnd9i%2Bb7HR4ZL17QmeSIm6%2F2eD2IoFNWCMSXXjevjrD%2BsSFG9ArNLfdmnbhagrwswDr6BGeoChqMLw%2BVaY6bSyWcxM9skozRuK%2BYIDvZ%2BLgGZsRUMRNrdK0eaF0UKsnVhz1bKEhPOAoVhMfOnIFrEMJg1sIfbDLyMZ4BmwmxqI81iuqHNiQBTTIwtiTkB0OBtjx2goyv3VM05w4jm9DFq6tTCouEggLFPk1E0T24yMhNXqr33KktBOlHD1fmf3Jd%2F7i7JOgsox%2FGAgz9w5Zdr4KOSL1zhV%2FQdjFDG2qNnsnmGQAcCosQt%2BPj1Bntw6EJkvp1feRLbl2txcNqFIqRZuFuJnjMYewsAeCu%2FQy9MzEmcPDHmE8uhm%2F9N3Bxgn4PQ7DcNA6Y%2Bfrockt1vw0GA7oKtbWcHiRFb9BXz2FDRvian0QBW7Bh3GQzYvULI6t4LbRZ3WQyXLCaZ4Hdt9axrDOafIJVReHKDtqYTnP%2FcQ6MImH38kGOqUB88rVMchf6NcmFWcQrKF3fneOu5B46oK5yalu9A4n9ohoGs1mQXxMeePI5CcHZ%2BZkLGmcyv2IVTL3BbZdkHiMYjpLkCW6ffy%2FRqhX3GbhQq4K1smriikMgO7On8gJqSfA3vK95X8guvlqgYgVJ5HJz3bTVAf%2B8Ww954yIOmx53TVEc9Wp5WsOSAeQ2wlQoYM0L%2BPDb73WKGDKAUjsiqp%2F7cuYL1DO&X-Amz-Signature=b37585f756c7275e1006e817faa8486a20c5369d5ae5a23fe36cd36b075589e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ILOORQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSvkPNEeB%2BOJoydLRur7rthsBc5RzpsST327tuZezeuAIgEUBiNUl3q2jMypqRO%2FSxPQ5sPE4haVM70p6Rqucv4%2FQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCRPclIG7eOfXSkOircA6fLFTcKNe6RQ2AUBUHing30SKpRCYNlJ6iulqcENkerhDqBWbSH1yrp4NrHGzls88Bp6O%2BfTRdhPFBc%2BFBVhXugW%2Fu4zrTSwiIQUzczeFBtmaFy4isVImpookdn%2FmQpECRHo%2B2ufShfUlOTAZnd9i%2Bb7HR4ZL17QmeSIm6%2F2eD2IoFNWCMSXXjevjrD%2BsSFG9ArNLfdmnbhagrwswDr6BGeoChqMLw%2BVaY6bSyWcxM9skozRuK%2BYIDvZ%2BLgGZsRUMRNrdK0eaF0UKsnVhz1bKEhPOAoVhMfOnIFrEMJg1sIfbDLyMZ4BmwmxqI81iuqHNiQBTTIwtiTkB0OBtjx2goyv3VM05w4jm9DFq6tTCouEggLFPk1E0T24yMhNXqr33KktBOlHD1fmf3Jd%2F7i7JOgsox%2FGAgz9w5Zdr4KOSL1zhV%2FQdjFDG2qNnsnmGQAcCosQt%2BPj1Bntw6EJkvp1feRLbl2txcNqFIqRZuFuJnjMYewsAeCu%2FQy9MzEmcPDHmE8uhm%2F9N3Bxgn4PQ7DcNA6Y%2Bfrockt1vw0GA7oKtbWcHiRFb9BXz2FDRvian0QBW7Bh3GQzYvULI6t4LbRZ3WQyXLCaZ4Hdt9axrDOafIJVReHKDtqYTnP%2FcQ6MImH38kGOqUB88rVMchf6NcmFWcQrKF3fneOu5B46oK5yalu9A4n9ohoGs1mQXxMeePI5CcHZ%2BZkLGmcyv2IVTL3BbZdkHiMYjpLkCW6ffy%2FRqhX3GbhQq4K1smriikMgO7On8gJqSfA3vK95X8guvlqgYgVJ5HJz3bTVAf%2B8Ww954yIOmx53TVEc9Wp5WsOSAeQ2wlQoYM0L%2BPDb73WKGDKAUjsiqp%2F7cuYL1DO&X-Amz-Signature=c8ee5ff4507768ac65c5fbcd50609aecd69aef13cdf92e58f4d21ef51540e644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
