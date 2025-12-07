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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVN754AV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXUVaG%2BomQEIIlbbZt623AUX7oDS%2FFp0mAQQ48nQxTAiEAuiu0dON%2BUj%2BfjZQ2osULr8VWgERzLY63G%2Beyjj43z6YqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKtGb3W63pu%2FioaircA%2FZX8pKDlQhAFvxQxBX8QFukLqv4yXxhVMrVPP8e9QLHn1MYsR4ScnSIihRkrSJgoxHOCsVI7uQwB%2Bhl9Z4VGbVLfvb%2FCDpoBoHZZ1glMPkdbg3k9LCC%2FJKUCB12YqMDSMUTkLS2OgPo6O5ahY2h%2FcLM1tKjiHASNxyAN1FXSdyDZ7yB7PidkpgwsmEdv4SjdIEF9rQ14yQzvDnUOeIET%2BCCT0OX5ycpBA9mbYhEy%2F72NWdlyZiXYmZ21FSe1FHKt0eBp1kmu1O7bjBfEbDWAg3q6EBzqnx6KL%2BIQ%2FNmQh7d7L4vnLKFaM0ybso7hVhIIc511597cD4ee7rgXHfxKgdK80B9GU7CXJXcj9vS6ZlreTiX%2BTIdr4B5E3CrwUQJzClJZaXBwAZ3M5t%2BiC1ADhoT1bxiqRAweoEkqLsgf9R1RMIyx1nJIJz68tzuDV%2F2%2BznlXkCMUzi6aZUzoAyw%2F%2Fn%2BXEFfyXia4TXPCHRwXlvtLgVndl9fwQeqLHk53KOgt64VrewFxZM3eeqOcamUm8G%2B6k%2Bzkk%2F%2B8W2U8gM%2FH0%2FepoyctqNhdMRcBvaA12xqM%2BJ0OrantqDxbpErDJSOozsx%2FhymZddPrmi0j5KMWee7QqHhIQRQnUJ91NWGMM621skGOqUBAkyj1LGK0G7j0gy5iHu%2FECjFwKTxVaFRdtWU%2BMGRU8l49OhdV2BWy24LXl4%2BuVRv6Sqpgbn94jetRcioM9DHNtutVwZ16mjW7Cd1%2FW5t5zlF57o75GIqI0OkCyF4Y01XBaIySAgpdPWny9rf8oCWs1G0Ho7T4%2F4AS5U%2BvjZMF20qFL1%2FaflouWbmf2SJVrxvzXHQx%2FzcGtwf7Kgz%2FLVCEASjSeTV&X-Amz-Signature=73923128114e26556d2a0add6e021e6b652d5e1530ddbbb6083bae4281589168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVN754AV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXUVaG%2BomQEIIlbbZt623AUX7oDS%2FFp0mAQQ48nQxTAiEAuiu0dON%2BUj%2BfjZQ2osULr8VWgERzLY63G%2Beyjj43z6YqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKtGb3W63pu%2FioaircA%2FZX8pKDlQhAFvxQxBX8QFukLqv4yXxhVMrVPP8e9QLHn1MYsR4ScnSIihRkrSJgoxHOCsVI7uQwB%2Bhl9Z4VGbVLfvb%2FCDpoBoHZZ1glMPkdbg3k9LCC%2FJKUCB12YqMDSMUTkLS2OgPo6O5ahY2h%2FcLM1tKjiHASNxyAN1FXSdyDZ7yB7PidkpgwsmEdv4SjdIEF9rQ14yQzvDnUOeIET%2BCCT0OX5ycpBA9mbYhEy%2F72NWdlyZiXYmZ21FSe1FHKt0eBp1kmu1O7bjBfEbDWAg3q6EBzqnx6KL%2BIQ%2FNmQh7d7L4vnLKFaM0ybso7hVhIIc511597cD4ee7rgXHfxKgdK80B9GU7CXJXcj9vS6ZlreTiX%2BTIdr4B5E3CrwUQJzClJZaXBwAZ3M5t%2BiC1ADhoT1bxiqRAweoEkqLsgf9R1RMIyx1nJIJz68tzuDV%2F2%2BznlXkCMUzi6aZUzoAyw%2F%2Fn%2BXEFfyXia4TXPCHRwXlvtLgVndl9fwQeqLHk53KOgt64VrewFxZM3eeqOcamUm8G%2B6k%2Bzkk%2F%2B8W2U8gM%2FH0%2FepoyctqNhdMRcBvaA12xqM%2BJ0OrantqDxbpErDJSOozsx%2FhymZddPrmi0j5KMWee7QqHhIQRQnUJ91NWGMM621skGOqUBAkyj1LGK0G7j0gy5iHu%2FECjFwKTxVaFRdtWU%2BMGRU8l49OhdV2BWy24LXl4%2BuVRv6Sqpgbn94jetRcioM9DHNtutVwZ16mjW7Cd1%2FW5t5zlF57o75GIqI0OkCyF4Y01XBaIySAgpdPWny9rf8oCWs1G0Ho7T4%2F4AS5U%2BvjZMF20qFL1%2FaflouWbmf2SJVrxvzXHQx%2FzcGtwf7Kgz%2FLVCEASjSeTV&X-Amz-Signature=21467ea8e596526576fca405ecac65e1133015dc5aced0c5a634ee262c9e372e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
