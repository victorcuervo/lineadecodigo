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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFPCMGD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlO9OdVoYwTNF%2BGDDogZZm%2BqIn0v3Jq8V%2FNpW61zDIfQIhAPuB4WPHxYW4J7lV2oM%2FnO0hCxFkaTZso6RqL%2BD0QcS1KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxos4l4Hhz1fXrQkrUq3AMcr3WG0JdkXXV80oJBuHyRLh4x36kQI%2FTgFaT9Ay0KXGImhNVQAtYViwTATPnANiI36OpW%2B6vNK0Ix1KqarWXMhfYMGohNe%2BjNw6Zng3XO8gpjcK8LRFDqo3slUoVanoLeQG1tD%2BMeiNTPEQrxpToSFZmKYUU6Y125sD6rMdAKHmoY%2BpKx2m2JTojMNQ%2FLZ3IgPp%2F7RT59PERYr25dugE4eanpniw6itElFiAJf%2Fq9k2x8XncMZc%2FVt1OL86jU9MEk88uWERYU6NwalV8JkaOstfoT9GotfGMKcRD5%2FURm0A9toMZAQ8MK9AMfTINu2FVVCE6wZyOZmVeTZUFvunZDJhj8q5XGe0vykOosYe7sl0g8pcNjX5CExhvjrANw05moUfoPJnAQPyhCUma5p79pjCJD6kg0QoNaL8U8t%2BzLzi4jf6KBIPv86chvrBDtQo31v6cOv%2FHENkZ1%2FhYEVk8ZLaFRcjIVxAgzbyk9C4xjpmol0o4HtxH7c1CbWb%2BynNnKE%2BSmLVI%2B%2FZGaj75AJZRxN4G5WxPNklhYNr6gF6195zfhlPIpCw43mhoWEUmDC4a4j1DqNbNcn%2F7luoi4GG8TSZFL0y87jU6sUTxRnVQRMEd8m9Fj7B8BQp%2FL%2BjCZodjJBjqkAfMb3iLAcX9kWaX8J%2F80nwDg8dNH9Gn6wbuvQLXJMJRwCQmV72uNkokqnsTDS%2BQVOTqvCz0j0Wo4rDFO3BgLYqunLBaRNxBdYFm6zcRJmGef4AP9%2Bhvzu3tCaqCGZLwxeZBYmjwM0em067%2Bm%2BxXMGALetN2q0ATwG1ghO56HnI%2FlLR821U8xuwF84JtkNdzSvz6owG5fLaaNOiObGVmVvFxlud5W&X-Amz-Signature=d5b39e2c348d4ca13e289b00d77c07505e6f3291c135d8994447c9c4baeb0a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYFPCMGD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlO9OdVoYwTNF%2BGDDogZZm%2BqIn0v3Jq8V%2FNpW61zDIfQIhAPuB4WPHxYW4J7lV2oM%2FnO0hCxFkaTZso6RqL%2BD0QcS1KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxos4l4Hhz1fXrQkrUq3AMcr3WG0JdkXXV80oJBuHyRLh4x36kQI%2FTgFaT9Ay0KXGImhNVQAtYViwTATPnANiI36OpW%2B6vNK0Ix1KqarWXMhfYMGohNe%2BjNw6Zng3XO8gpjcK8LRFDqo3slUoVanoLeQG1tD%2BMeiNTPEQrxpToSFZmKYUU6Y125sD6rMdAKHmoY%2BpKx2m2JTojMNQ%2FLZ3IgPp%2F7RT59PERYr25dugE4eanpniw6itElFiAJf%2Fq9k2x8XncMZc%2FVt1OL86jU9MEk88uWERYU6NwalV8JkaOstfoT9GotfGMKcRD5%2FURm0A9toMZAQ8MK9AMfTINu2FVVCE6wZyOZmVeTZUFvunZDJhj8q5XGe0vykOosYe7sl0g8pcNjX5CExhvjrANw05moUfoPJnAQPyhCUma5p79pjCJD6kg0QoNaL8U8t%2BzLzi4jf6KBIPv86chvrBDtQo31v6cOv%2FHENkZ1%2FhYEVk8ZLaFRcjIVxAgzbyk9C4xjpmol0o4HtxH7c1CbWb%2BynNnKE%2BSmLVI%2B%2FZGaj75AJZRxN4G5WxPNklhYNr6gF6195zfhlPIpCw43mhoWEUmDC4a4j1DqNbNcn%2F7luoi4GG8TSZFL0y87jU6sUTxRnVQRMEd8m9Fj7B8BQp%2FL%2BjCZodjJBjqkAfMb3iLAcX9kWaX8J%2F80nwDg8dNH9Gn6wbuvQLXJMJRwCQmV72uNkokqnsTDS%2BQVOTqvCz0j0Wo4rDFO3BgLYqunLBaRNxBdYFm6zcRJmGef4AP9%2Bhvzu3tCaqCGZLwxeZBYmjwM0em067%2Bm%2BxXMGALetN2q0ATwG1ghO56HnI%2FlLR821U8xuwF84JtkNdzSvz6owG5fLaaNOiObGVmVvFxlud5W&X-Amz-Signature=3d1122b806fa103c276bcfe9ce69d19387bf64f56b82edb28027ff6b7a9b04b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
