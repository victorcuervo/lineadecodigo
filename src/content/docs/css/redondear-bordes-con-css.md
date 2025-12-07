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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5AP5EX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE4Ynosy7waaC6wzayi3D%2Br4IHpaX%2FWHw%2FS6aXXu54qQIhAPjmD129l8klolN5snGeCeKAmVIgF8DdoS1YJbKtW4QLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKVl%2FdGwCBy%2BHskYq3AMMjOpzK2TmvhdKgV3wp9%2F1NHisYaBCdCHv4e8Dj029PVejsg3iWDmX%2FZGtvTEeZvOmY8Rg3LaY4fFbNcQxG%2BT9y17hMiMtLqN2y%2BNuZSpDaI3Q8CNZqf3nJG5a6k%2F4533HFBAUT6PBljtvC4kc78%2Bu%2BpQy35zEwoTEulWB5sfPNYCXoo0ViY08f0i4shdpvV%2BJjMehiq66Kk9Kt8LKtaBivhNlzpkHjF%2B89aOrn2KihkzoQnT6qS%2FEZnklNqhEdOvEJ3EP7y5WAj70Q%2Bbuj9xAG6CNeoQRnTp4ftHQC0MjLYdmM3AOQOUbIXV4SnrdVib3D%2BV6Kq%2FnPHne5Y0pmvwda2Ug%2FW2%2F9blbfaXt%2BkYy064EaEnDTx1KAdSQ3oyPv%2B6Da9cpxOzoMwcyz8a7lyJt%2BMsnUY8VcfRs9XBwvoKaTKpL%2FKOa9WOQ9qdrt4032jbOVW%2BZZdjWMijdIBxq8SvMdbGlKRi0r8wowSwbI16RIfascBScPivBM%2FGkiTrLHWCjAynZMePEc4BirdOXPHjDQE0njf5yUbeeKlsQql9NHmBZ0d6HSd9j3PsA8xAj%2FKlcVg1Z0%2FweB8lekyppZPu3mr%2FqUk36pU%2ByhvX9zJM38SSzZjedMshJLYQkEzCj%2FdLJBjqkAaxoIgmuNIzmSjoNJ%2BMEvG6W%2F7vfHAq26ZOZoadh0vyR1A%2BuU2gC%2FeAw3EBsyp6WYB%2BAUzMwgTVQtzCBklqeGWNLdYLum28cIjcx6yVbTGAfLe0R9qLb6LDMavqAwR1AayCmiiAzH5t%2BVlfRSRnHnh0u05EiNCH09HnIFEPAXRXxKCdq%2B7u%2BDxbzTHUtOyjijuYYyQUIMPC5C0l9qJ0wpUHntAne&X-Amz-Signature=cd533ef855f5d97fa00e84ab166806b7004d33738504e692f0b4e7a2b35b70be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT5AP5EX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE4Ynosy7waaC6wzayi3D%2Br4IHpaX%2FWHw%2FS6aXXu54qQIhAPjmD129l8klolN5snGeCeKAmVIgF8DdoS1YJbKtW4QLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKVl%2FdGwCBy%2BHskYq3AMMjOpzK2TmvhdKgV3wp9%2F1NHisYaBCdCHv4e8Dj029PVejsg3iWDmX%2FZGtvTEeZvOmY8Rg3LaY4fFbNcQxG%2BT9y17hMiMtLqN2y%2BNuZSpDaI3Q8CNZqf3nJG5a6k%2F4533HFBAUT6PBljtvC4kc78%2Bu%2BpQy35zEwoTEulWB5sfPNYCXoo0ViY08f0i4shdpvV%2BJjMehiq66Kk9Kt8LKtaBivhNlzpkHjF%2B89aOrn2KihkzoQnT6qS%2FEZnklNqhEdOvEJ3EP7y5WAj70Q%2Bbuj9xAG6CNeoQRnTp4ftHQC0MjLYdmM3AOQOUbIXV4SnrdVib3D%2BV6Kq%2FnPHne5Y0pmvwda2Ug%2FW2%2F9blbfaXt%2BkYy064EaEnDTx1KAdSQ3oyPv%2B6Da9cpxOzoMwcyz8a7lyJt%2BMsnUY8VcfRs9XBwvoKaTKpL%2FKOa9WOQ9qdrt4032jbOVW%2BZZdjWMijdIBxq8SvMdbGlKRi0r8wowSwbI16RIfascBScPivBM%2FGkiTrLHWCjAynZMePEc4BirdOXPHjDQE0njf5yUbeeKlsQql9NHmBZ0d6HSd9j3PsA8xAj%2FKlcVg1Z0%2FweB8lekyppZPu3mr%2FqUk36pU%2ByhvX9zJM38SSzZjedMshJLYQkEzCj%2FdLJBjqkAaxoIgmuNIzmSjoNJ%2BMEvG6W%2F7vfHAq26ZOZoadh0vyR1A%2BuU2gC%2FeAw3EBsyp6WYB%2BAUzMwgTVQtzCBklqeGWNLdYLum28cIjcx6yVbTGAfLe0R9qLb6LDMavqAwR1AayCmiiAzH5t%2BVlfRSRnHnh0u05EiNCH09HnIFEPAXRXxKCdq%2B7u%2BDxbzTHUtOyjijuYYyQUIMPC5C0l9qJ0wpUHntAne&X-Amz-Signature=239bc3b6047ae1a97edc34f7713a86335e37d38b6cb3ca882c7fe97a1d9e4051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
