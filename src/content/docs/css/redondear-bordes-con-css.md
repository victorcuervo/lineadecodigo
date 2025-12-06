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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW73P4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcr7wiq1EGNuYRkqgPbxFBOs3NvMRVh7BNb4Q7sbhpZwIga%2BHoBvSOEiME41LbGi2lnFHO83Bnp1H5GNQTk%2BjEEdUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCy5Nleu26iFQvHEKSrcA%2FvNsqLlMeU7kX3xKchMRuZZk3ELlowdR8eOgaEmZm9uEJypDxZHEFtSASDbe1ZVw3riPgd5JloduHFt3V4aW0%2BtKFDqdTUXSYTNHd1gPePfCxvnaz2tHWjchNsZGdH%2Fs8AAryNSBf5mNhh1%2BrgD1%2B1XmdHlB9aLax1fCehkOPoiZJtL43vw9CLPcm3bv4t2zg4SdHnubxmCknm%2F63dFVmxbWAW6HWNS3Vo0c9HRckWJx4%2Frn9WLXnpzrI%2B6z9I7jo58W0WEa%2BdzcXcgQ7fDSDxnO9n0vp8Wh%2Fs%2Bb4glXSevu1K8FfnVpeVNRSsG6WhW0cMCLGffkzAlVuJSpXZOBZBeo0TWm0OWXvQL6SGYYtRZx9xphyoTF%2Fwzbue05DfHwjHnCVkWRwrIJ0uihRV6f3aYNyzt5YQDUfXaDR8v6YZaTAUHic0VD3Z0O8SpphbPfkbc3aLbc0F2Qs43L5AzXkFYjQotKQ3H5F1Pdp01oi6jwCyy9mvMVZPYzd7afDh%2B6QwrjPL3vBZw2CoRb2kYoKo2N6iwWcdDaVB598u62fHkRtpZJN2e1KPW8Y8dDdPDrDxdXYLkcKlhuYaOKFdfjHfY2mBVY89pCkcZWypplyD6k%2BJtGa%2F1HF3Ae%2FtyMOa8z8kGOqUB36Byz%2FTEgn0xMpBr15KBsL3Mzr71Bi7qRFrpI9bBxsxQwL7WGZs%2BpIYHNYC74Q41jWNsrWo6LP1t5jbHRMJNKoyzdX8VAvg%2BgJ7fSirrxdHvyXJz%2BksoIN%2B3ZGBg6JYsaoI1k3e7UpecsETWOGYbXLwCHsINwMpYSUQUbw2ASTvfRJCnkjbZfL%2FWaXCh%2FEDF1JNMcZx9fZDUCYlcJBX8%2BnRCE2sk&X-Amz-Signature=35ba2ceaae109301f24358a4a25b4bd299848900c2dc991aa2ccfd0de520249b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDW73P4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcr7wiq1EGNuYRkqgPbxFBOs3NvMRVh7BNb4Q7sbhpZwIga%2BHoBvSOEiME41LbGi2lnFHO83Bnp1H5GNQTk%2BjEEdUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCy5Nleu26iFQvHEKSrcA%2FvNsqLlMeU7kX3xKchMRuZZk3ELlowdR8eOgaEmZm9uEJypDxZHEFtSASDbe1ZVw3riPgd5JloduHFt3V4aW0%2BtKFDqdTUXSYTNHd1gPePfCxvnaz2tHWjchNsZGdH%2Fs8AAryNSBf5mNhh1%2BrgD1%2B1XmdHlB9aLax1fCehkOPoiZJtL43vw9CLPcm3bv4t2zg4SdHnubxmCknm%2F63dFVmxbWAW6HWNS3Vo0c9HRckWJx4%2Frn9WLXnpzrI%2B6z9I7jo58W0WEa%2BdzcXcgQ7fDSDxnO9n0vp8Wh%2Fs%2Bb4glXSevu1K8FfnVpeVNRSsG6WhW0cMCLGffkzAlVuJSpXZOBZBeo0TWm0OWXvQL6SGYYtRZx9xphyoTF%2Fwzbue05DfHwjHnCVkWRwrIJ0uihRV6f3aYNyzt5YQDUfXaDR8v6YZaTAUHic0VD3Z0O8SpphbPfkbc3aLbc0F2Qs43L5AzXkFYjQotKQ3H5F1Pdp01oi6jwCyy9mvMVZPYzd7afDh%2B6QwrjPL3vBZw2CoRb2kYoKo2N6iwWcdDaVB598u62fHkRtpZJN2e1KPW8Y8dDdPDrDxdXYLkcKlhuYaOKFdfjHfY2mBVY89pCkcZWypplyD6k%2BJtGa%2F1HF3Ae%2FtyMOa8z8kGOqUB36Byz%2FTEgn0xMpBr15KBsL3Mzr71Bi7qRFrpI9bBxsxQwL7WGZs%2BpIYHNYC74Q41jWNsrWo6LP1t5jbHRMJNKoyzdX8VAvg%2BgJ7fSirrxdHvyXJz%2BksoIN%2B3ZGBg6JYsaoI1k3e7UpecsETWOGYbXLwCHsINwMpYSUQUbw2ASTvfRJCnkjbZfL%2FWaXCh%2FEDF1JNMcZx9fZDUCYlcJBX8%2BnRCE2sk&X-Amz-Signature=e9c374ac1a44e348fa0e89b19a1d7f91270d883919f4576fbcfe6864b0d92dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
