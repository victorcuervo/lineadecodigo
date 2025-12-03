---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DAKUKP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICAHx%2B2c0R1fLpL1FBG8DmDdd2g9E1XRfYYmPgGmrszWAiEAosxBTp%2B%2BJah5xwgJejjTCxtGkgC8ZtkSlWU0KGtIEQIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKU%2Fbw2ZInj2DrTksCrcA%2FVtcQ2Xexe2q5hKcJar9Tk3lQTfl5sLhM7GcwYpmi%2BrXQXWLpOaq8RbdyMR8%2FWG6iQ9UG1nsXq4Y7OXJGV4b5jLLXm3AaKtze77URFdsFFkuJbZidRIalP4g3PuX%2F29IbLHMpIVBTsQUAsyuKm8vrZ1efPueSaLdp2XHPeMUPu0KZjckbQkUlMsa60uEAWT%2Fmzahu9nSGDkrDWHMXpwHNvmE8V3yz5vsAzoVowPEKGQos%2Ffna9VTQtS4jbCyfoK4uycFdOhc23%2BYHHJ3JHBOPm4%2BpEJDVg%2F6zTaST1GoHvz865zmYdEEnNk03Nk9dP1YpTat2kZUMyv%2BoUnendjfZsaNFAK4Hbuqcr3bgnqJdNk3vDb%2FUjdVhbpTGQOXPQsjKmz4jl9iwGrWp6qQzkrr%2FGoWDyK83cKxCHCtqoHSx%2B1ic%2Fk%2F6u%2BhNeEFJPr96P8HKRYE8iJg6NP3Hz2f0knPem7DXO1aZ2UyHAS3NE03DeubwD65Nmh%2FGEoMXQYq%2FQTZONzY5JkrA%2BBMHXJklP2H8Aryh5qRWDT9mDRz4pfu6WU8YmNJ1LvkWWOY7XjGcb28qFjOFWz4Z2p43NXI62wErYnH%2By%2F3CDgW6LWT%2B4tEbsqUcUJJJkYgqqvopnKMJ%2FdwskGOqUBX0mpXhANaagIoC4ShNeN3qZcidvm6Y6EHo1bKGDT9YaAQlegdXDo9xyGC%2FTwLQ66KDz3yyy9MtgfBQiSw9FDWiD0tUQHHKW8wi%2FQbwb%2FKtuH4W61iF4Clza6E640sD44VWaadQUO6gYLwBHm2aNB%2BMKBohVIqnN8TDjhbmD%2BRouS1koAGx5YqAOlwqe4NavjK8ZirtsBF5%2FCBDJRU2uu97cUXIRU&X-Amz-Signature=ffdc162f805f9d473fffe9d827a57391f7c3c9980fc54b62f7f6ad9377ad49f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DAKUKP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICAHx%2B2c0R1fLpL1FBG8DmDdd2g9E1XRfYYmPgGmrszWAiEAosxBTp%2B%2BJah5xwgJejjTCxtGkgC8ZtkSlWU0KGtIEQIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKU%2Fbw2ZInj2DrTksCrcA%2FVtcQ2Xexe2q5hKcJar9Tk3lQTfl5sLhM7GcwYpmi%2BrXQXWLpOaq8RbdyMR8%2FWG6iQ9UG1nsXq4Y7OXJGV4b5jLLXm3AaKtze77URFdsFFkuJbZidRIalP4g3PuX%2F29IbLHMpIVBTsQUAsyuKm8vrZ1efPueSaLdp2XHPeMUPu0KZjckbQkUlMsa60uEAWT%2Fmzahu9nSGDkrDWHMXpwHNvmE8V3yz5vsAzoVowPEKGQos%2Ffna9VTQtS4jbCyfoK4uycFdOhc23%2BYHHJ3JHBOPm4%2BpEJDVg%2F6zTaST1GoHvz865zmYdEEnNk03Nk9dP1YpTat2kZUMyv%2BoUnendjfZsaNFAK4Hbuqcr3bgnqJdNk3vDb%2FUjdVhbpTGQOXPQsjKmz4jl9iwGrWp6qQzkrr%2FGoWDyK83cKxCHCtqoHSx%2B1ic%2Fk%2F6u%2BhNeEFJPr96P8HKRYE8iJg6NP3Hz2f0knPem7DXO1aZ2UyHAS3NE03DeubwD65Nmh%2FGEoMXQYq%2FQTZONzY5JkrA%2BBMHXJklP2H8Aryh5qRWDT9mDRz4pfu6WU8YmNJ1LvkWWOY7XjGcb28qFjOFWz4Z2p43NXI62wErYnH%2By%2F3CDgW6LWT%2B4tEbsqUcUJJJkYgqqvopnKMJ%2FdwskGOqUBX0mpXhANaagIoC4ShNeN3qZcidvm6Y6EHo1bKGDT9YaAQlegdXDo9xyGC%2FTwLQ66KDz3yyy9MtgfBQiSw9FDWiD0tUQHHKW8wi%2FQbwb%2FKtuH4W61iF4Clza6E640sD44VWaadQUO6gYLwBHm2aNB%2BMKBohVIqnN8TDjhbmD%2BRouS1koAGx5YqAOlwqe4NavjK8ZirtsBF5%2FCBDJRU2uu97cUXIRU&X-Amz-Signature=20f7c9fb31e9ae681874bfb9156dd50d307905105ffb40a910e8cf71fb2d57b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
