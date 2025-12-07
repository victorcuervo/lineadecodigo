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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXWCQ5X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARVEbZqkGMzQRiuCsK3QD6x2OIiaE7yAv6YOUo9wYoPAiEAjw%2FDEiPU0%2FX7%2FfJuOkwUr%2Fl2tV%2Bs8102ZSsl%2F8xMVbcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDINmJ76TSjOZ22TircA2FKII%2F4KBKAa1EiAooazyvo7%2BULcL0Ggm38JWlWX8A9NjXsvn0hmWwX9sAVKwLPWw8E8CscB5NUFYTB5ZBE9X8Qg4rpGywgW%2FYdeLbAqWFV3wj5TPylxblqCjW6o6jYfoDC0bSLou1OBaTTDipVnnLMq%2FKAe%2FgvlvX%2Bfz0AnjJ%2BX9cchzGkWyxm2NxVBFVMQFw1QXZPh%2BoQfduD%2F4%2FmSd6CeOsxUpAZHydNoRi5lM6cffEqI2%2F9oCwmMbh3oX4643gNfdfuA%2F%2FxBiT%2F0OL5z4PEi2o6rb%2BmS7doNfxZzb8moAQaMxznKH4IURk1QbFgQ75qRCE7i8f1ZgUg7dQ5NsGF%2B0HAXrCx93gfBk0BoGOFmX95dU88iHWWF4iX0bMrN3mJ91MzGk6gDSDlV24vNWuHhnfNkZRMhqShr%2FyrL1EAQGdxaUYu%2BCsTWE5%2FxnAeGyRCwMv%2Bsdn94CRz%2FJpdms8INoUBM4ZdMBwGFAxcsIcAI5MvXSD0oL4L8G8%2FZnkYpedNwT2nDqkcaaiv4VYDG%2Br%2FK8Ofmd4A%2FpTBBPAuUq5Y87DfS9ZmHpLDnZbFqe%2BoDgl4JMwpecfbpRe4pPoGJrwcyvqit8KZpmtbnpi9OCNBBDj05YeTjf1S74h2MNf90skGOqUBYMO9JI5W%2BBExwdKIP7kqt9f2079%2F7ZKR7hlMorD%2FcuUueUBX0H3gTdy3dDW1t2yiS3U%2Fjnc6oSOH5o7maBnF20NNUu41wervqU%2B55KNZm29K0WdJNmlsbnC9QqeSxBCIlZ2G%2BZFL6AwEeHChJnS5moJW9U6sd4%2B3IYAjblKAq2FfVxrd8uEKHrKPbWs9aptj7iTIzaXMCXlUSRkKrM%2FlYHpE%2B1QV&X-Amz-Signature=66c5d9ce6e7bc7b2e1a17e34f72a5919e191c6b3a2c1ad5a5a3b5505858a8d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXWCQ5X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARVEbZqkGMzQRiuCsK3QD6x2OIiaE7yAv6YOUo9wYoPAiEAjw%2FDEiPU0%2FX7%2FfJuOkwUr%2Fl2tV%2Bs8102ZSsl%2F8xMVbcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDINmJ76TSjOZ22TircA2FKII%2F4KBKAa1EiAooazyvo7%2BULcL0Ggm38JWlWX8A9NjXsvn0hmWwX9sAVKwLPWw8E8CscB5NUFYTB5ZBE9X8Qg4rpGywgW%2FYdeLbAqWFV3wj5TPylxblqCjW6o6jYfoDC0bSLou1OBaTTDipVnnLMq%2FKAe%2FgvlvX%2Bfz0AnjJ%2BX9cchzGkWyxm2NxVBFVMQFw1QXZPh%2BoQfduD%2F4%2FmSd6CeOsxUpAZHydNoRi5lM6cffEqI2%2F9oCwmMbh3oX4643gNfdfuA%2F%2FxBiT%2F0OL5z4PEi2o6rb%2BmS7doNfxZzb8moAQaMxznKH4IURk1QbFgQ75qRCE7i8f1ZgUg7dQ5NsGF%2B0HAXrCx93gfBk0BoGOFmX95dU88iHWWF4iX0bMrN3mJ91MzGk6gDSDlV24vNWuHhnfNkZRMhqShr%2FyrL1EAQGdxaUYu%2BCsTWE5%2FxnAeGyRCwMv%2Bsdn94CRz%2FJpdms8INoUBM4ZdMBwGFAxcsIcAI5MvXSD0oL4L8G8%2FZnkYpedNwT2nDqkcaaiv4VYDG%2Br%2FK8Ofmd4A%2FpTBBPAuUq5Y87DfS9ZmHpLDnZbFqe%2BoDgl4JMwpecfbpRe4pPoGJrwcyvqit8KZpmtbnpi9OCNBBDj05YeTjf1S74h2MNf90skGOqUBYMO9JI5W%2BBExwdKIP7kqt9f2079%2F7ZKR7hlMorD%2FcuUueUBX0H3gTdy3dDW1t2yiS3U%2Fjnc6oSOH5o7maBnF20NNUu41wervqU%2B55KNZm29K0WdJNmlsbnC9QqeSxBCIlZ2G%2BZFL6AwEeHChJnS5moJW9U6sd4%2B3IYAjblKAq2FfVxrd8uEKHrKPbWs9aptj7iTIzaXMCXlUSRkKrM%2FlYHpE%2B1QV&X-Amz-Signature=9b4031077dfb13c7bf6bcc40df0901f199ba0a9b9c9d646c79e07e9de972f904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
