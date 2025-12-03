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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFUDRYK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCVvmApDPu%2B5sGAIsoWoG7Au2w%2BlcZlKaUCZtkSbnHD0AIgRfUMDAxnHvZREiDuPi1596uGUiL%2Fi%2BiiV0BHaX%2BLCP4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLtgCrFtRcyMzKSqyyrcA5pYKuZwQI56yAW%2BFrhU3%2Bu%2F2bx6qs5Euj%2FkmTQSdv1lFhKkf77RFYdAT1S2K5hx7g4DWB6a8F6oR0aWiS25GToZus4vi3vj%2FII%2FnxrM3W2LnP4VHxLtu4PKj6XodPvefRmFyeSr2LnKDoJ8iJZVsJL5Aex5IB28COT3YqZMbqxjACbUdwh2ud171P8BUUAHePTkfQo955DHlrQNU2zMX%2BgladrEGzPzPYM7SSKLr%2BZri5Z40IMPABe6OVQBSiAEg5ya1zBq1eG4SC3X4R44iE7NkfLbVzC38Vkqnn%2FnIEVMO%2BYb4Teny%2FB4NRFKUoVLfi150nqWkZOLhAmrHquu%2B9fqUMfHV2%2BeEiIPA%2BY6qxmIhgq8aActixuE922RkZnNWeI%2BPvp2pb6CkzUs3tiYL%2B9iklSwsXALtOW7BUpsmpRuOTdQIayKE9vngopxmzxHL8QRaRf61rJPNDWjjDdywfu9YgtmUyS0lRaC%2FvUl01%2Bg85pUH12lm51JNl%2FnCYZL0gzyM%2BWQ8XKqmAOU3ehikGuFQ0rEXD1fJ35IOVkarYeG61hdHKaGwxpBYQpRYQs77559mkPB%2BZLnt3pqB%2FTOk9v3HcErZJhbzuP4ncZHHAMmBMWZTsLIdBHbObNBMPv4wskGOqUBxtAL2hLmnPnFcHEaWY%2By6c3jq59KDhGzxUgl3cPM5jHvw3NJ3vbEU8z5CPzwRcB5dPLjdPK1jabIKFupLtSR7i9lugYv3k86S10Hf%2BVcMk8DQFf8bR4rdpVkBzeQ4zM0jvoX8aptt%2FfW0Yago6m1c6lO8r%2BCiC%2FkBGDR9YgPDiAcleq2Ruldaz036jsxrWCxFM3w7U3XVB38zRHIwMkknUEWNHsJ&X-Amz-Signature=70644070d67ec5bbfa62103dbc2f6bed4e9cc738fa58aca00d2f06879423c373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFUDRYK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCVvmApDPu%2B5sGAIsoWoG7Au2w%2BlcZlKaUCZtkSbnHD0AIgRfUMDAxnHvZREiDuPi1596uGUiL%2Fi%2BiiV0BHaX%2BLCP4q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLtgCrFtRcyMzKSqyyrcA5pYKuZwQI56yAW%2BFrhU3%2Bu%2F2bx6qs5Euj%2FkmTQSdv1lFhKkf77RFYdAT1S2K5hx7g4DWB6a8F6oR0aWiS25GToZus4vi3vj%2FII%2FnxrM3W2LnP4VHxLtu4PKj6XodPvefRmFyeSr2LnKDoJ8iJZVsJL5Aex5IB28COT3YqZMbqxjACbUdwh2ud171P8BUUAHePTkfQo955DHlrQNU2zMX%2BgladrEGzPzPYM7SSKLr%2BZri5Z40IMPABe6OVQBSiAEg5ya1zBq1eG4SC3X4R44iE7NkfLbVzC38Vkqnn%2FnIEVMO%2BYb4Teny%2FB4NRFKUoVLfi150nqWkZOLhAmrHquu%2B9fqUMfHV2%2BeEiIPA%2BY6qxmIhgq8aActixuE922RkZnNWeI%2BPvp2pb6CkzUs3tiYL%2B9iklSwsXALtOW7BUpsmpRuOTdQIayKE9vngopxmzxHL8QRaRf61rJPNDWjjDdywfu9YgtmUyS0lRaC%2FvUl01%2Bg85pUH12lm51JNl%2FnCYZL0gzyM%2BWQ8XKqmAOU3ehikGuFQ0rEXD1fJ35IOVkarYeG61hdHKaGwxpBYQpRYQs77559mkPB%2BZLnt3pqB%2FTOk9v3HcErZJhbzuP4ncZHHAMmBMWZTsLIdBHbObNBMPv4wskGOqUBxtAL2hLmnPnFcHEaWY%2By6c3jq59KDhGzxUgl3cPM5jHvw3NJ3vbEU8z5CPzwRcB5dPLjdPK1jabIKFupLtSR7i9lugYv3k86S10Hf%2BVcMk8DQFf8bR4rdpVkBzeQ4zM0jvoX8aptt%2FfW0Yago6m1c6lO8r%2BCiC%2FkBGDR9YgPDiAcleq2Ruldaz036jsxrWCxFM3w7U3XVB38zRHIwMkknUEWNHsJ&X-Amz-Signature=7d281ed16056e23be4055c6bf33582a0c5893e1a46025e57de6de61d36a18972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
