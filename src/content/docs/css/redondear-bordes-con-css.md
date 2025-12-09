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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCAU4YA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9kg3R%2FUagJixQ5AD9Jbd3PnjZ7x%2FOmKKIqeZwUGrR1AiEAie7c%2B%2FKHFfe0KLm9v51%2FwLTVaWryVBkBgeyzpM0QzGgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0kj5rSPc3Thq3QdCrcA1H%2BwEL%2FGiUwkMRN4WUFp4L%2FAvN8yYtMXktH2qZZxsy%2FOBDehVBFi0N0s%2BIoTPIsUQQJnE6WJxY5bprGJ%2FRVM9qmQfrJrpE%2FJnRu51jrVTEdi6%2FIXttHU%2BUSSmVrM%2BfTpQ6agVNCtTHac90eYJCA04gLmfnchGF%2B%2FlvYFXCg56Y6tQWObcZ0Lbls8Vc%2B7RaEIGhPGbK%2BYrd3jkWfk2gJvsGgWD9yATk6D7Rdhb%2Ft%2FvUBAgtoUNDSqFWy535YXSdVxi%2FFS6RrkfvLeT%2BQlmdaN5%2F%2F5KD62v91gus%2BsA0LCP4Nk33rhEY48ajASsh3domGJApJADupk1xhMFeqCh3kbkRq4EoJgsztVyIVc08rvMNIAqD8UxaYzV40B9fuZkc%2FSOOO1oiEEyZDm97dnE0%2BQtINfIAgsO7Mhufv3pqtBnYFzkBS0wcYcpM2IBDNPtDK6QfHrVnKsg2UV%2BdhC6WSfLy8ybI1zS2ennjQgWtAbz1aELt8YnODrOSAlOb5rUEPlAIPdXz%2F1ep8bAcfkTUXfQuQj2cBLLIFdaLr47k1Ym7isEX4Pj9lRklp12m7XdxE%2FjS%2F6sJUoBrmVfzSV61lRHrRQf6k3FppJ5%2Fsb3xuOxzsEoda%2B20h4KsQ77KkMO%2FD38kGOqUBd%2B8euYGY5lL0inXAY6L2MrqWGLSldAscMKqR7%2FwKGBpOIQp%2BqWijl5fLxvjWK70uS8b%2BeA58y6yTfVXe5xaSqgTsDGX3CIH5%2BbTLMUDyHt%2BLFrUzA9iDyT7w%2F3bs6suEKvBY2005z6aeNim%2FoNuUFO5%2FpJb3qhOMz6iisdzfa18YCcLxktfnhJCKYsveVyl2irSaZiZg6wwIeoKLbpbE%2BdDTspa5&X-Amz-Signature=934deeacf4c3a08a62b06d57dc8a5a379b15eac299e58826427319e67d44a816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCAU4YA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9kg3R%2FUagJixQ5AD9Jbd3PnjZ7x%2FOmKKIqeZwUGrR1AiEAie7c%2B%2FKHFfe0KLm9v51%2FwLTVaWryVBkBgeyzpM0QzGgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0kj5rSPc3Thq3QdCrcA1H%2BwEL%2FGiUwkMRN4WUFp4L%2FAvN8yYtMXktH2qZZxsy%2FOBDehVBFi0N0s%2BIoTPIsUQQJnE6WJxY5bprGJ%2FRVM9qmQfrJrpE%2FJnRu51jrVTEdi6%2FIXttHU%2BUSSmVrM%2BfTpQ6agVNCtTHac90eYJCA04gLmfnchGF%2B%2FlvYFXCg56Y6tQWObcZ0Lbls8Vc%2B7RaEIGhPGbK%2BYrd3jkWfk2gJvsGgWD9yATk6D7Rdhb%2Ft%2FvUBAgtoUNDSqFWy535YXSdVxi%2FFS6RrkfvLeT%2BQlmdaN5%2F%2F5KD62v91gus%2BsA0LCP4Nk33rhEY48ajASsh3domGJApJADupk1xhMFeqCh3kbkRq4EoJgsztVyIVc08rvMNIAqD8UxaYzV40B9fuZkc%2FSOOO1oiEEyZDm97dnE0%2BQtINfIAgsO7Mhufv3pqtBnYFzkBS0wcYcpM2IBDNPtDK6QfHrVnKsg2UV%2BdhC6WSfLy8ybI1zS2ennjQgWtAbz1aELt8YnODrOSAlOb5rUEPlAIPdXz%2F1ep8bAcfkTUXfQuQj2cBLLIFdaLr47k1Ym7isEX4Pj9lRklp12m7XdxE%2FjS%2F6sJUoBrmVfzSV61lRHrRQf6k3FppJ5%2Fsb3xuOxzsEoda%2B20h4KsQ77KkMO%2FD38kGOqUBd%2B8euYGY5lL0inXAY6L2MrqWGLSldAscMKqR7%2FwKGBpOIQp%2BqWijl5fLxvjWK70uS8b%2BeA58y6yTfVXe5xaSqgTsDGX3CIH5%2BbTLMUDyHt%2BLFrUzA9iDyT7w%2F3bs6suEKvBY2005z6aeNim%2FoNuUFO5%2FpJb3qhOMz6iisdzfa18YCcLxktfnhJCKYsveVyl2irSaZiZg6wwIeoKLbpbE%2BdDTspa5&X-Amz-Signature=8409c16e4fa9e03c92de2966af613a9553a6b2f0a77779a7bf740828dd8a6ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
