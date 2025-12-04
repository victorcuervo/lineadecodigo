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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQB6MFM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGFx5%2FtaFBRhtO0KbGOoVjARBdZ8954qJdM4vkg4o64gAiA8u2Q2c6yFCUwNXI0XalspR777aJvcYnsDZuul9bFC5Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMUqMlPM%2FreSGsVFBNKtwD09sat3uk%2Bl7vRtcZYUX3gELAciUUE5owInP3fCqP5OjfXIlCwC1l0SRe2BmTDWWRIUlpMY99LatrLvRwCQpjRwVlEW5CN6epJGmowORXHZBnuX%2BZhER6jbU%2FKeiO4de6OgPdD5MQdG3CNKo2ay8ITi06g8cvJr4YGsPeGnzA%2BwXOTjMY8bqXstCmnXrAvFgDOx04G8FUmdLiy0ieTohne4TPS7VsoA%2FwSDaq6EeZ8dRqxhuoE0xHouue7R2SzqLOSIBh98xlJBzp7vdnBCeXPyVx3Dlgkthco9T1wFUPW538EcJEzDMXsAcRwwKHpJGFRpMiN%2FAbYf67abN%2F%2BaDrGbGehAaBj5iOZgV0psHiXRJO446RE%2B8Vlgw0CplF7BJEi4DF3YyoNvx7t7xtuWqbbxHy4ELi%2F7xN5sW8B4fjVcX%2FP%2FAIlqcEiPVCgbU1XBKKcK%2FUk0PcFFrPYCmX%2BYrWNkpHTHd9w09stZ9PJU%2FHpgbFBJzmxycFAbLBtCzmT41bpePkyM44ZzNsIw2Djdd1og1Pq1xsnv9k5Pyni%2Fj%2FwugdDz3n%2BCRStsfjYuppR7K6ynOadnFC4NIj4XapEV1Hy1frKCcQcKuZ3HXxiDaH3TuCyAwpMrm7nmfhRpIw7ebFyQY6pgEckjF59UjUaI2Ue5ACSp3dkq1R0cQ7PflJ6tf%2Ffsx2v2WXZQpiqInJ1NrOLdrCNMkeWX3%2FBrxWkEqd8wBP8QQH1Q7fNTUcs0CHTd3XdrSGk39GTm%2F1JMKGB0u155oaOP603SHm8zk6B4cT9hvgXFBNxsr17vge17Bh0dIiy6JA3yK%2FvC78iQfOMXK3nhNKopIeo5IPgvOGx1eee84FNnuFjBSU%2B9zY&X-Amz-Signature=6f1e5f4bd049669f11f5591fefde48fda81e0782df92578f6ecf95773b21b6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQB6MFM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGFx5%2FtaFBRhtO0KbGOoVjARBdZ8954qJdM4vkg4o64gAiA8u2Q2c6yFCUwNXI0XalspR777aJvcYnsDZuul9bFC5Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMUqMlPM%2FreSGsVFBNKtwD09sat3uk%2Bl7vRtcZYUX3gELAciUUE5owInP3fCqP5OjfXIlCwC1l0SRe2BmTDWWRIUlpMY99LatrLvRwCQpjRwVlEW5CN6epJGmowORXHZBnuX%2BZhER6jbU%2FKeiO4de6OgPdD5MQdG3CNKo2ay8ITi06g8cvJr4YGsPeGnzA%2BwXOTjMY8bqXstCmnXrAvFgDOx04G8FUmdLiy0ieTohne4TPS7VsoA%2FwSDaq6EeZ8dRqxhuoE0xHouue7R2SzqLOSIBh98xlJBzp7vdnBCeXPyVx3Dlgkthco9T1wFUPW538EcJEzDMXsAcRwwKHpJGFRpMiN%2FAbYf67abN%2F%2BaDrGbGehAaBj5iOZgV0psHiXRJO446RE%2B8Vlgw0CplF7BJEi4DF3YyoNvx7t7xtuWqbbxHy4ELi%2F7xN5sW8B4fjVcX%2FP%2FAIlqcEiPVCgbU1XBKKcK%2FUk0PcFFrPYCmX%2BYrWNkpHTHd9w09stZ9PJU%2FHpgbFBJzmxycFAbLBtCzmT41bpePkyM44ZzNsIw2Djdd1og1Pq1xsnv9k5Pyni%2Fj%2FwugdDz3n%2BCRStsfjYuppR7K6ynOadnFC4NIj4XapEV1Hy1frKCcQcKuZ3HXxiDaH3TuCyAwpMrm7nmfhRpIw7ebFyQY6pgEckjF59UjUaI2Ue5ACSp3dkq1R0cQ7PflJ6tf%2Ffsx2v2WXZQpiqInJ1NrOLdrCNMkeWX3%2FBrxWkEqd8wBP8QQH1Q7fNTUcs0CHTd3XdrSGk39GTm%2F1JMKGB0u155oaOP603SHm8zk6B4cT9hvgXFBNxsr17vge17Bh0dIiy6JA3yK%2FvC78iQfOMXK3nhNKopIeo5IPgvOGx1eee84FNnuFjBSU%2B9zY&X-Amz-Signature=80c559de81202b919d2dcaf46e6b341c454f763c455ae312e9959f24808fa9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
