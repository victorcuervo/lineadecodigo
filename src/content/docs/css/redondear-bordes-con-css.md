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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFDOBPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQDID6Fs%2B6lp5zEaU%2Bwt3ULheAMeougqcYMX4TvrtO2gIhANr%2FyarIwBrdnEPyV4VGkPNrrPWGtFi%2BJ7667tss0znoKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrO0UG351l3uQIVtEq3AMuCH3mEIxcLlCUCps%2BI5B3n2lAkC7K1vS7XJ%2FnW8qSA%2FQOOBsfD4M47BiavNn5M6eMxuNgHBkRMI4D6%2FxIlwEUvV7ACHlHBv8GkaJPyrqDvKVhiLHyx0wElWAZRM4WJdC%2BrHdKwHqPmGVSHV%2FKG7nnWuEjQ8DbyD3DxoKX3Pw9b9QzuwU0vlJCvCBguI3QoDepCE8UyALN11%2BDLxC0mG%2BEESQsv6HdE%2FXd84WON7WWYK4ASYEnXEH4bK3Elmu6KPKtteLELecAW%2F7dt5k9MHO9uQTCbjqgtHGt%2Bxgyqk1bSdoSrF5y8XpDiQ0qd4sNs6PJm4xzlpNYfWGOUWU7%2BU28AaLh%2F1S8tJ%2Bd9ugQBHfxaMhkaE9r8X6W7r29oC0ZaQNlvmnuIxYQfrzct7kKW5it53y1znpEpCDdAzXztSw2zotW90o43c0Mf28ZHr4cbiAu8He0PSdd3B%2BcKVPmL8UYNzLfhmITJjn5KTqqhcJ1%2BCynDmexVHhFa%2BJqRdyLVfEf3luX1ctn5PqSGxGuFjOFRYhtHQ505PZ0MTp6W2TxVFMdOqvJReIOr817dSEv7lRVBv65gdDBRQE6WFV8O%2BIfpt%2B2Ci5SYFwLRdPsDs0B7IBGeXYsTWA%2BaO3ZkjDBh9zJBjqkAXYeiSylFDhuTCsrrW7EBkWs4S4Q90pjnVR6AtleVUvQiIdBOZXACyBNvO0LMFIcOAnvSqXGfRwNP2arnfEfYwiHSnQTYU%2F9RRErr1lV6xB%2Fp2HCHhwzhasbqyJBJ092%2F5%2BK4Ov8iwV43EwN%2B2bMPuKoJarATy03hR5sZCc4N%2FBj4NAOfV25ny0as8%2F4%2FluTZGxcrQ3yKAfqfAAahGZNNuDvwYWB&X-Amz-Signature=cec022c00d1d74eeb51f523d94ee51c3aad24397df74c6ed08ccf5c9be55f9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFDOBPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQDID6Fs%2B6lp5zEaU%2Bwt3ULheAMeougqcYMX4TvrtO2gIhANr%2FyarIwBrdnEPyV4VGkPNrrPWGtFi%2BJ7667tss0znoKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrO0UG351l3uQIVtEq3AMuCH3mEIxcLlCUCps%2BI5B3n2lAkC7K1vS7XJ%2FnW8qSA%2FQOOBsfD4M47BiavNn5M6eMxuNgHBkRMI4D6%2FxIlwEUvV7ACHlHBv8GkaJPyrqDvKVhiLHyx0wElWAZRM4WJdC%2BrHdKwHqPmGVSHV%2FKG7nnWuEjQ8DbyD3DxoKX3Pw9b9QzuwU0vlJCvCBguI3QoDepCE8UyALN11%2BDLxC0mG%2BEESQsv6HdE%2FXd84WON7WWYK4ASYEnXEH4bK3Elmu6KPKtteLELecAW%2F7dt5k9MHO9uQTCbjqgtHGt%2Bxgyqk1bSdoSrF5y8XpDiQ0qd4sNs6PJm4xzlpNYfWGOUWU7%2BU28AaLh%2F1S8tJ%2Bd9ugQBHfxaMhkaE9r8X6W7r29oC0ZaQNlvmnuIxYQfrzct7kKW5it53y1znpEpCDdAzXztSw2zotW90o43c0Mf28ZHr4cbiAu8He0PSdd3B%2BcKVPmL8UYNzLfhmITJjn5KTqqhcJ1%2BCynDmexVHhFa%2BJqRdyLVfEf3luX1ctn5PqSGxGuFjOFRYhtHQ505PZ0MTp6W2TxVFMdOqvJReIOr817dSEv7lRVBv65gdDBRQE6WFV8O%2BIfpt%2B2Ci5SYFwLRdPsDs0B7IBGeXYsTWA%2BaO3ZkjDBh9zJBjqkAXYeiSylFDhuTCsrrW7EBkWs4S4Q90pjnVR6AtleVUvQiIdBOZXACyBNvO0LMFIcOAnvSqXGfRwNP2arnfEfYwiHSnQTYU%2F9RRErr1lV6xB%2Fp2HCHhwzhasbqyJBJ092%2F5%2BK4Ov8iwV43EwN%2B2bMPuKoJarATy03hR5sZCc4N%2FBj4NAOfV25ny0as8%2F4%2FluTZGxcrQ3yKAfqfAAahGZNNuDvwYWB&X-Amz-Signature=d1a8740d1b43c18c8678e0a83c1080c0297eea5db13603fbc5be23faa3a4ad26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
