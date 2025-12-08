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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSHRXYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmqH%2BAM8NmzJZXQaUQPNIjR52J1tSjAwnwDsh%2FqRiGAIgJ19mL92CTpipnqFpnu61mtDXI5VZEZIBySOpExPUxVYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg3GL01qib11QvSxSrcAzbp2TPtMoFM7mg%2Fc87DLJhXQrlMNK5K6Ykp%2FjTkU8CkloqQSTEeorXhgxw%2FyCd%2BhYIMeDhtDZ2EOKLdTcD6DCxiNTTUO%2B4n9yD%2BX5HP39yomf%2BRAMgZ4DDCYbG48upWjdz%2F8GgPoC1ldfn1jMEMS6ZG3PnWKTpwnAzDZG5nuwKJV4Xk4OrOJPBdm3nqF5XNAe4kxMcdiZKPfUr0yvF570v7YVQZG5IPCeXgKnOzmb0IxzPbiEdr9ozn8oiUvZ5E1W1su562KomC2h4hFIlx0lRAaoK7ZgW%2BzvcBAbR66oV8aMmEJCdVMlnoMsOVa0VsIxH2zn6dsEFsIuwVrgRxVLV8ygVy8Fn3d5ESJEyh8cKlEHd%2BS8GV0iD0qCYD%2BnJIqEjR3RiwBD9aVC4PPiwuFRDsbw1RWCzK8mkOMRAy73%2FKUo%2BCITV6AL%2BM309Hh%2BOv52dOy%2FNHyw8Dkfcc2ipn8hVlf0OFLOVv0mWFOlkTFR1wvqbQc4ew8iFAUBh4BLP4BEYw56gdLnQSdBAdXgMPKuJm0qvH9q00uy0SR9W9lW%2B8gZuee74ady0hivVThepJ%2FvElTPTINa6MhNwdM9wu9gixllc7XFQs42ASAqD2b3tsxHheyMYHYa8vJV2RMO3t2ckGOqUB664reGj377xmAze%2Bn%2F7OW3%2BIqZqw3fNVkPZ7dM4RzYjRrKF8QgzKcnDxyPpE1F1sfqr7MyFQHwD5f%2FEJSwCgUHrJsVmw7KtFrG5Ri2Nic84BWeC6yrMKTldl76iRPUMMSGUB9FXsHtXBz0r55%2FWO3raieYqyVJezyaNSx8eQhv4PUuhmfTI0ccVed7Dn6mi4T%2BVZV%2FnlGFea3rDwQj3aTAB4BrVy&X-Amz-Signature=b62b79d5dbe36cdef191370b46e86230efe0b7b89bd4803c228fdae6cff6914b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSHRXYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmqH%2BAM8NmzJZXQaUQPNIjR52J1tSjAwnwDsh%2FqRiGAIgJ19mL92CTpipnqFpnu61mtDXI5VZEZIBySOpExPUxVYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg3GL01qib11QvSxSrcAzbp2TPtMoFM7mg%2Fc87DLJhXQrlMNK5K6Ykp%2FjTkU8CkloqQSTEeorXhgxw%2FyCd%2BhYIMeDhtDZ2EOKLdTcD6DCxiNTTUO%2B4n9yD%2BX5HP39yomf%2BRAMgZ4DDCYbG48upWjdz%2F8GgPoC1ldfn1jMEMS6ZG3PnWKTpwnAzDZG5nuwKJV4Xk4OrOJPBdm3nqF5XNAe4kxMcdiZKPfUr0yvF570v7YVQZG5IPCeXgKnOzmb0IxzPbiEdr9ozn8oiUvZ5E1W1su562KomC2h4hFIlx0lRAaoK7ZgW%2BzvcBAbR66oV8aMmEJCdVMlnoMsOVa0VsIxH2zn6dsEFsIuwVrgRxVLV8ygVy8Fn3d5ESJEyh8cKlEHd%2BS8GV0iD0qCYD%2BnJIqEjR3RiwBD9aVC4PPiwuFRDsbw1RWCzK8mkOMRAy73%2FKUo%2BCITV6AL%2BM309Hh%2BOv52dOy%2FNHyw8Dkfcc2ipn8hVlf0OFLOVv0mWFOlkTFR1wvqbQc4ew8iFAUBh4BLP4BEYw56gdLnQSdBAdXgMPKuJm0qvH9q00uy0SR9W9lW%2B8gZuee74ady0hivVThepJ%2FvElTPTINa6MhNwdM9wu9gixllc7XFQs42ASAqD2b3tsxHheyMYHYa8vJV2RMO3t2ckGOqUB664reGj377xmAze%2Bn%2F7OW3%2BIqZqw3fNVkPZ7dM4RzYjRrKF8QgzKcnDxyPpE1F1sfqr7MyFQHwD5f%2FEJSwCgUHrJsVmw7KtFrG5Ri2Nic84BWeC6yrMKTldl76iRPUMMSGUB9FXsHtXBz0r55%2FWO3raieYqyVJezyaNSx8eQhv4PUuhmfTI0ccVed7Dn6mi4T%2BVZV%2FnlGFea3rDwQj3aTAB4BrVy&X-Amz-Signature=2747cd7b34462fa7b4aedc8f91f6a0d8a4cbecd8fcaf473a73b6a15eeb5bcc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
