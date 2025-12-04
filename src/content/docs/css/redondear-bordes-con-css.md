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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP62SYA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDIOz8n7mC3SrDdpWhaUcTsnrUvR4h5owx41pEykT9jsgIhAPzDZKuhC6nCTtNffLIviDx5KIEaRZ2MwCKjOykxZHG9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxyHeo2EPOlEVSKutUq3ANNpjcHDL%2FxwVICT9nmAzDNQy5lnTRBkhP6OMEzqOh%2B0DgsqTTdbMv0ET8wFOL05PTrqHqbIkNvDjdcQoQGesibL6KMhTIMgqFpnA4R%2FM6dCaZx6wSh6oWn7I%2BDydtrf5rrnGd0voof%2B92u3ejIjs%2FtYwvHh7Js6zVT3eRBjsvRAThQCvT%2FWRARqsWCK8UrDbY3HzM5rtiL97gnErhDPN%2FhorLgFiEBPc%2B1AnzNdo0Cmnd581yU36%2F2yk3C5KzMCPxkj%2FdR1KE%2Bwf%2B59l54u8hV%2F7d7tuMui62TiL%2BDLHvvqlu18y0aPDD0tdX%2Bxfy7V6ukjeiNyKnGGIx8cBCzyHWC4tNoZiPepN2xNBA4sB5LJ98p7K4xmCcsetUJmW6qaZKrS5Ry4RNDuxXE25FaR7DCraqbeRhofiMS7nbHWAc1Z5lN5n8cQimgW%2Fp%2BgKJ1%2Flq0gRZRTPCv%2FhRMycPMgv7%2BWh2FKRBrMYc3RWMbmqJPw6hevLuAWDIVBT8zuOO7fOFT1hPDnBy3Yl4ySsXcaBStYA1ClmGugu8aUdB74MMwiAr0C3RwB8zwselJVcfOWcQQC2Bpn3Lo9wXdfwnOJFihWXgo%2FKnOh9oNd3qo%2Bk5EUOMIyf4iJK82SEtBzDDHrcTJBjqkAeIE%2BRAVfaZ4%2BjTT%2BeApATe8PZix0TWp9%2BlFI746tHJMXaSydH4b2jbDhYojc131z423KuYhaGCx8bmAASOHEZENbx8AGAKOk0nT9tqDaU64Zs2dZlZqT%2Fi5dn7%2BeL23Q0lht3ey5ifKqaEFiQQ80aCw3T3Q9ZV%2FFBj1bX4r0zMX3qNscZR0IJZekv7%2F%2BaKDUvUQ9xLKZKUpSAIdqgvynJKlRXgK&X-Amz-Signature=3b37fb42ab8ec4a126f67c7dbe3310deece97804df6ec38ee3632a59cd517823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP62SYA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDIOz8n7mC3SrDdpWhaUcTsnrUvR4h5owx41pEykT9jsgIhAPzDZKuhC6nCTtNffLIviDx5KIEaRZ2MwCKjOykxZHG9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxyHeo2EPOlEVSKutUq3ANNpjcHDL%2FxwVICT9nmAzDNQy5lnTRBkhP6OMEzqOh%2B0DgsqTTdbMv0ET8wFOL05PTrqHqbIkNvDjdcQoQGesibL6KMhTIMgqFpnA4R%2FM6dCaZx6wSh6oWn7I%2BDydtrf5rrnGd0voof%2B92u3ejIjs%2FtYwvHh7Js6zVT3eRBjsvRAThQCvT%2FWRARqsWCK8UrDbY3HzM5rtiL97gnErhDPN%2FhorLgFiEBPc%2B1AnzNdo0Cmnd581yU36%2F2yk3C5KzMCPxkj%2FdR1KE%2Bwf%2B59l54u8hV%2F7d7tuMui62TiL%2BDLHvvqlu18y0aPDD0tdX%2Bxfy7V6ukjeiNyKnGGIx8cBCzyHWC4tNoZiPepN2xNBA4sB5LJ98p7K4xmCcsetUJmW6qaZKrS5Ry4RNDuxXE25FaR7DCraqbeRhofiMS7nbHWAc1Z5lN5n8cQimgW%2Fp%2BgKJ1%2Flq0gRZRTPCv%2FhRMycPMgv7%2BWh2FKRBrMYc3RWMbmqJPw6hevLuAWDIVBT8zuOO7fOFT1hPDnBy3Yl4ySsXcaBStYA1ClmGugu8aUdB74MMwiAr0C3RwB8zwselJVcfOWcQQC2Bpn3Lo9wXdfwnOJFihWXgo%2FKnOh9oNd3qo%2Bk5EUOMIyf4iJK82SEtBzDDHrcTJBjqkAeIE%2BRAVfaZ4%2BjTT%2BeApATe8PZix0TWp9%2BlFI746tHJMXaSydH4b2jbDhYojc131z423KuYhaGCx8bmAASOHEZENbx8AGAKOk0nT9tqDaU64Zs2dZlZqT%2Fi5dn7%2BeL23Q0lht3ey5ifKqaEFiQQ80aCw3T3Q9ZV%2FFBj1bX4r0zMX3qNscZR0IJZekv7%2F%2BaKDUvUQ9xLKZKUpSAIdqgvynJKlRXgK&X-Amz-Signature=8c5aba0d9ab37aa059fb6e9524d810387174892213e263afb2557d8e07f2584f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
