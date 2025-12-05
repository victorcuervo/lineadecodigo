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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDFLTNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeDy9Pu7A7dOHQCDCNhSO%2FaDF785MuEBnvFkfhLRPy2AIhAMoGDtpBEu9grBW7IU7%2F5tIebh149mLAKzDscASGs9itKv8DCFUQABoMNjM3NDIzMTgzODA1IgxlQzDY1B0rLSlU7Mkq3AOvcR3av7%2BEbqvkeha65NPUq6u4SMWPoJO%2FIUAuHxhK6OVMjEVaRCkBDGA2LuTIupBg80Qvb2K8B%2FvlwGSDg3NX9N24hPE%2BL4Xhf3iWgkPNRavI2UPgOFVOPdWpd1gkGSjb%2BQ6iPcDZzj18Gf%2BfdRWNQ0jMHY%2Fnl%2Fdv8znGrebCbpaml5fkOQi4flSFedbbevC6gXKtinwKoXGO77PebDOkfmIvVEGjIidGAC6hZlktlyOhr4s8KjWaIv25uXwS6lwqqCPa%2FW8u0XLu9Dl2E%2F7QuJrSbErEKuGkXBc3%2F%2BqUtibm3bXfytkbhNWjPvZN98nl8AxzxcqJGRwaFFs%2Fsz980cwUCozheNUUFiRqNCb9FSQKSfmKJyHWCTBISO669E8PV2k9INijUC46KhvVGRHn4Og5HaFZI%2B5H%2BtZDpnykT%2BTNUE%2FGDZ17FXp5g3sYEO%2FkYCvUD7s6f9Og%2F2R2LKVCec06MVVCMiW9psib1QhfMTTCY0Pvvhl60a%2BVOedPOF99%2Bwp5tUdb0qDwsz0sz%2BLBc5EpsuJ6E00XvQ0xyM7Ujwg8QC5gDL9rJcmLwBJgroWYD4jy5rMOmwKpMdjnD%2FM2kzSl5Jen0jN5tlC9F3fMqK1Gbf%2FGL%2FdITgKM3DDxsMnJBjqkASlDkhkAuNpxPmLwLYlfQfs7yZe%2BGxkUlkNk%2F4QoMYK5Li6b7xdx27dV%2BnsgByqerqHRilf9ex8zeLhXBs7cFSgFMrMfk9iiVMWt34QazucFAMpqnZv0e9kell%2B5G8omYd2xnY7MXSHEKWGj6a9iTbWcPxSLBv6dLUQF08l%2BYyzjlCRuo5aHYhkpAiXhYxZz16PZSSdDfSezDGR89JiXsvFIUaMu&X-Amz-Signature=cd4866418404896f0eeadc8ba80e19631a63b61446f98b4d5eac3b4d24032fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBDFLTNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeDy9Pu7A7dOHQCDCNhSO%2FaDF785MuEBnvFkfhLRPy2AIhAMoGDtpBEu9grBW7IU7%2F5tIebh149mLAKzDscASGs9itKv8DCFUQABoMNjM3NDIzMTgzODA1IgxlQzDY1B0rLSlU7Mkq3AOvcR3av7%2BEbqvkeha65NPUq6u4SMWPoJO%2FIUAuHxhK6OVMjEVaRCkBDGA2LuTIupBg80Qvb2K8B%2FvlwGSDg3NX9N24hPE%2BL4Xhf3iWgkPNRavI2UPgOFVOPdWpd1gkGSjb%2BQ6iPcDZzj18Gf%2BfdRWNQ0jMHY%2Fnl%2Fdv8znGrebCbpaml5fkOQi4flSFedbbevC6gXKtinwKoXGO77PebDOkfmIvVEGjIidGAC6hZlktlyOhr4s8KjWaIv25uXwS6lwqqCPa%2FW8u0XLu9Dl2E%2F7QuJrSbErEKuGkXBc3%2F%2BqUtibm3bXfytkbhNWjPvZN98nl8AxzxcqJGRwaFFs%2Fsz980cwUCozheNUUFiRqNCb9FSQKSfmKJyHWCTBISO669E8PV2k9INijUC46KhvVGRHn4Og5HaFZI%2B5H%2BtZDpnykT%2BTNUE%2FGDZ17FXp5g3sYEO%2FkYCvUD7s6f9Og%2F2R2LKVCec06MVVCMiW9psib1QhfMTTCY0Pvvhl60a%2BVOedPOF99%2Bwp5tUdb0qDwsz0sz%2BLBc5EpsuJ6E00XvQ0xyM7Ujwg8QC5gDL9rJcmLwBJgroWYD4jy5rMOmwKpMdjnD%2FM2kzSl5Jen0jN5tlC9F3fMqK1Gbf%2FGL%2FdITgKM3DDxsMnJBjqkASlDkhkAuNpxPmLwLYlfQfs7yZe%2BGxkUlkNk%2F4QoMYK5Li6b7xdx27dV%2BnsgByqerqHRilf9ex8zeLhXBs7cFSgFMrMfk9iiVMWt34QazucFAMpqnZv0e9kell%2B5G8omYd2xnY7MXSHEKWGj6a9iTbWcPxSLBv6dLUQF08l%2BYyzjlCRuo5aHYhkpAiXhYxZz16PZSSdDfSezDGR89JiXsvFIUaMu&X-Amz-Signature=61c275484c83aa3814252bf45261908888d1cd99ce7fc322688532806d901778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
