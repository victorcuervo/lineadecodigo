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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPXCHFXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqJupWA%2F4u%2FV2crRr2k32O82LwSatRkpQzkw%2BGA7bCiAiEArnPfqGZcNLAvsD05oHMQHmoVIOq1faQqktkH2L%2Bbhh8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIQDfcl%2Fta9fWttQbSrcA1W0Qq6coUwuCk%2FKIMX3IzEM8T3xJTLZ3Id5g3KyVo1%2BJ0vTCtUttVqNHgbvRAPCawJ0S5%2BmFX8BKMfr%2F8yNbtt%2BQIkDXjUPZP%2BhuTln%2F8n2bXbu6btCGBJ%2Bs%2FeQ7JArYcCfFzaqesNPjfJ3mcxOt%2BbhAS3yYk1j1li3MkmuaLzQXD0NiPQK%2B4tm9bQz0Uue55Xms6JYcD6MTjU2JPVbw2nrJYJCQHTgLa7W8SHuKYvgK9pmD5JetBqeBExTxuYq2am2hRThIWr%2FKy7sLAxkbsMqprZ4p%2FtaOnUlmAqp6jXw1oaLJ4ngiaShS9Hwge60HmptJ1pI1EuYNRrGCtlRBKpXHem2%2FAlTPTbk0rqXc6tk3eMx2oJpV1c%2BycgpuAugVz1okyhrYgxUjFfsha967m8xFuxsXCQ%2BJv%2BW7%2BvPvCeMV27pNBtlAC0DRZ7nJ9NWlv2WtEY6yNDe5cu0dj6Y3K1JeV8a3ajn34dEzvsNgQtoLpK%2BCHkV8p%2BKhM%2BdzmY0XsoCEFgT0ygDjk5hyux0zmZ8Eu6sS1wZHJYvnexLRrNd%2BU9L5XUWJLfrECNBVw5ichfshUpWDmrwG1f7ScAd%2BlgQmyrlFMsWSjXQmc7GjMXTUFfKccRxJ8hM0IwhMLym0MkGOqUBqwEFYC4sXyqSy4ZAuwObs4uXTzOuIJuXLe2oVFF1tbCg%2FeKeLFSYAH9Gch4OAeI%2BGDZgoTENoi7ZFixhmZ%2FnRJctiIGb9D%2Fg%2BPirRC6YfzMN1Uc4zAKPhcz7shOamB5cJ5SzgiY9GGSQcJpTWmvg%2BVUfs20u2GzfIIMG4Ew6f1bonTlorOZ2o%2Fa%2FdjK6FB1G1wia55WtD02NKguQFz0Ypqgezk0m&X-Amz-Signature=a0bcff9d6b4db72e94d0179ac026704209854b4710b8231c915c9815c996b66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPXCHFXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqJupWA%2F4u%2FV2crRr2k32O82LwSatRkpQzkw%2BGA7bCiAiEArnPfqGZcNLAvsD05oHMQHmoVIOq1faQqktkH2L%2Bbhh8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIQDfcl%2Fta9fWttQbSrcA1W0Qq6coUwuCk%2FKIMX3IzEM8T3xJTLZ3Id5g3KyVo1%2BJ0vTCtUttVqNHgbvRAPCawJ0S5%2BmFX8BKMfr%2F8yNbtt%2BQIkDXjUPZP%2BhuTln%2F8n2bXbu6btCGBJ%2Bs%2FeQ7JArYcCfFzaqesNPjfJ3mcxOt%2BbhAS3yYk1j1li3MkmuaLzQXD0NiPQK%2B4tm9bQz0Uue55Xms6JYcD6MTjU2JPVbw2nrJYJCQHTgLa7W8SHuKYvgK9pmD5JetBqeBExTxuYq2am2hRThIWr%2FKy7sLAxkbsMqprZ4p%2FtaOnUlmAqp6jXw1oaLJ4ngiaShS9Hwge60HmptJ1pI1EuYNRrGCtlRBKpXHem2%2FAlTPTbk0rqXc6tk3eMx2oJpV1c%2BycgpuAugVz1okyhrYgxUjFfsha967m8xFuxsXCQ%2BJv%2BW7%2BvPvCeMV27pNBtlAC0DRZ7nJ9NWlv2WtEY6yNDe5cu0dj6Y3K1JeV8a3ajn34dEzvsNgQtoLpK%2BCHkV8p%2BKhM%2BdzmY0XsoCEFgT0ygDjk5hyux0zmZ8Eu6sS1wZHJYvnexLRrNd%2BU9L5XUWJLfrECNBVw5ichfshUpWDmrwG1f7ScAd%2BlgQmyrlFMsWSjXQmc7GjMXTUFfKccRxJ8hM0IwhMLym0MkGOqUBqwEFYC4sXyqSy4ZAuwObs4uXTzOuIJuXLe2oVFF1tbCg%2FeKeLFSYAH9Gch4OAeI%2BGDZgoTENoi7ZFixhmZ%2FnRJctiIGb9D%2Fg%2BPirRC6YfzMN1Uc4zAKPhcz7shOamB5cJ5SzgiY9GGSQcJpTWmvg%2BVUfs20u2GzfIIMG4Ew6f1bonTlorOZ2o%2Fa%2FdjK6FB1G1wia55WtD02NKguQFz0Ypqgezk0m&X-Amz-Signature=0ac05f0c11b1ee8f67095192bc4e1014453a9541a8300816211a671cf4e478a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
