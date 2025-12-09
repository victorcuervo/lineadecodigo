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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO46VWX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKJ%2Fb2i9MQwa9G3YyZqt7K6VUGcLvxmJ1V4LDwn%2Bku4wIgauue6jd%2BMpqc3KHPNAyd9GCFIuSQOvN%2Fp3LfZW%2F5zRwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSzAGw8B2BYP%2F7dtircA2gDn94WEovuHRLMQytPbhZcbUq3RcCx9omUQ%2F56m6gt6JbFeYnTPLUolf64BxwiGYUzwpK9C1cnlV0nTacb3T62fmWOG7z60D0Euq%2FsLvyRz1ZsAF%2F6o6dI8uMCVjF1ATSLPq0vvKitZ%2F0V4kYv%2BL6FsYZ1dPowygW8EWvYypR2VBTjpak%2BmjCObss0vcYdps0AW4zHTVk3s2z3qjxmfNr3HgkUopq2m%2BEAn0lnGhhmt3RlD0AjtoAOhi0S3mL5lWZvHU%2Fx45Nl89AghkxiRdRGYtep7E55HUJggff7INTN73%2B3%2F4Wng2MAII%2FR1XNFG%2BDFDpXvTePcnB6lhZEHKp2LLrsRQHyusKN4DaFIdtFPtRybg7g8O6sOWIRLzcGo%2F2QOZjth2q0cU6qBBAOUPvcQvvoVjr0d91J84PUdlj7dwPWr5OD4p9cNOAtd7KA2LXSFjGzmVWduPkfbUi9AVkSrZPPnw11ukGBlBehO5r0o5FEt1oMPnA2ZQvYqeR76KFNDN%2F75T%2FZJmBNHoDeeegjTO9E3O9T1Z81Tai10WAoMShLGpw9hUw2DPTJIkUP2SDtOm8MKjtHLjAl9O%2FBAbKFDnA7XwuqIcomAxH5uEGC6o16d2XP%2Bsz6yJZMnMKTC3ckGOqUBKvjX8nDQJqoRrjp6qTmS8vmTYSsPBqxgkuKLZWjQi%2FxCSqNchs856G0g3REPhBLzbmePYHCXbm%2B97dqk1K%2Ftnu%2FbF0CG9Vpk2eP9JAGxI%2BIQTt6mroXCNOVLpVdePi1aaf%2BIrq9PbX3%2B10B330MqIfWMP2XcQa%2BtfWDvgE6BHM4DL3IVC%2B9UtcN8En%2BeuHJWv54jwbusgNhmez0mT70wf%2Feq5kyD&X-Amz-Signature=060f33ef2be5b9c214a614ba067dafa55bdeb7208f277a4266facbc438683628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO46VWX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKJ%2Fb2i9MQwa9G3YyZqt7K6VUGcLvxmJ1V4LDwn%2Bku4wIgauue6jd%2BMpqc3KHPNAyd9GCFIuSQOvN%2Fp3LfZW%2F5zRwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSzAGw8B2BYP%2F7dtircA2gDn94WEovuHRLMQytPbhZcbUq3RcCx9omUQ%2F56m6gt6JbFeYnTPLUolf64BxwiGYUzwpK9C1cnlV0nTacb3T62fmWOG7z60D0Euq%2FsLvyRz1ZsAF%2F6o6dI8uMCVjF1ATSLPq0vvKitZ%2F0V4kYv%2BL6FsYZ1dPowygW8EWvYypR2VBTjpak%2BmjCObss0vcYdps0AW4zHTVk3s2z3qjxmfNr3HgkUopq2m%2BEAn0lnGhhmt3RlD0AjtoAOhi0S3mL5lWZvHU%2Fx45Nl89AghkxiRdRGYtep7E55HUJggff7INTN73%2B3%2F4Wng2MAII%2FR1XNFG%2BDFDpXvTePcnB6lhZEHKp2LLrsRQHyusKN4DaFIdtFPtRybg7g8O6sOWIRLzcGo%2F2QOZjth2q0cU6qBBAOUPvcQvvoVjr0d91J84PUdlj7dwPWr5OD4p9cNOAtd7KA2LXSFjGzmVWduPkfbUi9AVkSrZPPnw11ukGBlBehO5r0o5FEt1oMPnA2ZQvYqeR76KFNDN%2F75T%2FZJmBNHoDeeegjTO9E3O9T1Z81Tai10WAoMShLGpw9hUw2DPTJIkUP2SDtOm8MKjtHLjAl9O%2FBAbKFDnA7XwuqIcomAxH5uEGC6o16d2XP%2Bsz6yJZMnMKTC3ckGOqUBKvjX8nDQJqoRrjp6qTmS8vmTYSsPBqxgkuKLZWjQi%2FxCSqNchs856G0g3REPhBLzbmePYHCXbm%2B97dqk1K%2Ftnu%2FbF0CG9Vpk2eP9JAGxI%2BIQTt6mroXCNOVLpVdePi1aaf%2BIrq9PbX3%2B10B330MqIfWMP2XcQa%2BtfWDvgE6BHM4DL3IVC%2B9UtcN8En%2BeuHJWv54jwbusgNhmez0mT70wf%2Feq5kyD&X-Amz-Signature=3a496776d1e3bd6fb751efaff7ac9789fbb40c4af8a706830c679b4e03712cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
