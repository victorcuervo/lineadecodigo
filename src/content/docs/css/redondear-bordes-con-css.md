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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O626YNF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcd3aAbW8yYBTuah7gRh1V%2FQ5qpRo6tPeg8zIcfryYdAIhAMiOIC3J922F%2BKBs0Lj2Lx9%2FgWlPUGLdpji6UUWsHpAUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1oYeE0k1YHBN4ud4q3AMCXV93LjDNBIMrJU3JjqfBnJtoGL%2BfzJuHt66dBrwz97X3%2BLbyITkJq5eeebwGKxBYPrzRsCar0W6BbcoDFxG9v59K0GPOV0Vt28IduRdArYGDMfJFAs62wc7RR32NuY2b%2BP8pAHw3b2ghvBnTSgTzxY%2FsLqzVjFKop8tZrHCi6yEIRKndyGLkC0ZKkmDin%2BF2JXo96zwLfmYAenvXjlZmqr5hfwpCitZxQfnd2OeGUVI8nkD7S2LZM9L4u%2F8S8ZZuOJYr0w3LQsLxDQ8EkDXENqSIWhsdBFWtDp99E5l18Rma6nRTbEziog1dVK3mWPVUPcH%2BcZFkdmla6zZC9hLXLJs99IDUhWU4R0wM7ft1BxzB7DxoL8foXnz%2ByTuNGRaTx%2BzvxiMM1DGJkR90mPH3xsHSWcHEr0W3sKHKHlfYQuRitn8WBLiTKOvHcVcKfACJ3eml3q8E6fvq32dF2BfGRIZDr3oPolLZ57bO7nXY1MICWXBabugvfUYVBtRKWO%2FZwuPCmuj2Nfti2tOIYyBhs0LlaLlOi9AlOu90sgKNEjMSTfz5FhpDM2CQ96aLhOOGbVShZz8i5M1aqd152hAhB7Plu1QXI0mMRzuNByJEEcBAEjCzrO2RHkue%2FTD4od3JBjqkAQLNKW21G5kMHLEzFmqRciwGlfv%2F5MtqxSWZ4lIgq2xOJMBf56HsvMlG5RUFe%2BNo7sfvZTtb3GC3E1H0thYYuOSlBs%2FKVPVQurxRzO6SmMp7OBHCysXF8tp3Xje0PAogK9CzWIHkZ2iEkddgB6iVVc2mGNc8Rm0kcKllOkrJtEF5%2BYUHPWJHmwUXKN%2FuGZ3mjJVJugsCI%2BUvIH%2F4Ys9F%2F6dI8l6T&X-Amz-Signature=557bd76fba3a80339bc6ce78a7e08aac64bc8a50d604cbb05f20f94b93be6804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O626YNF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcd3aAbW8yYBTuah7gRh1V%2FQ5qpRo6tPeg8zIcfryYdAIhAMiOIC3J922F%2BKBs0Lj2Lx9%2FgWlPUGLdpji6UUWsHpAUKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1oYeE0k1YHBN4ud4q3AMCXV93LjDNBIMrJU3JjqfBnJtoGL%2BfzJuHt66dBrwz97X3%2BLbyITkJq5eeebwGKxBYPrzRsCar0W6BbcoDFxG9v59K0GPOV0Vt28IduRdArYGDMfJFAs62wc7RR32NuY2b%2BP8pAHw3b2ghvBnTSgTzxY%2FsLqzVjFKop8tZrHCi6yEIRKndyGLkC0ZKkmDin%2BF2JXo96zwLfmYAenvXjlZmqr5hfwpCitZxQfnd2OeGUVI8nkD7S2LZM9L4u%2F8S8ZZuOJYr0w3LQsLxDQ8EkDXENqSIWhsdBFWtDp99E5l18Rma6nRTbEziog1dVK3mWPVUPcH%2BcZFkdmla6zZC9hLXLJs99IDUhWU4R0wM7ft1BxzB7DxoL8foXnz%2ByTuNGRaTx%2BzvxiMM1DGJkR90mPH3xsHSWcHEr0W3sKHKHlfYQuRitn8WBLiTKOvHcVcKfACJ3eml3q8E6fvq32dF2BfGRIZDr3oPolLZ57bO7nXY1MICWXBabugvfUYVBtRKWO%2FZwuPCmuj2Nfti2tOIYyBhs0LlaLlOi9AlOu90sgKNEjMSTfz5FhpDM2CQ96aLhOOGbVShZz8i5M1aqd152hAhB7Plu1QXI0mMRzuNByJEEcBAEjCzrO2RHkue%2FTD4od3JBjqkAQLNKW21G5kMHLEzFmqRciwGlfv%2F5MtqxSWZ4lIgq2xOJMBf56HsvMlG5RUFe%2BNo7sfvZTtb3GC3E1H0thYYuOSlBs%2FKVPVQurxRzO6SmMp7OBHCysXF8tp3Xje0PAogK9CzWIHkZ2iEkddgB6iVVc2mGNc8Rm0kcKllOkrJtEF5%2BYUHPWJHmwUXKN%2FuGZ3mjJVJugsCI%2BUvIH%2F4Ys9F%2F6dI8l6T&X-Amz-Signature=0db5544af6be2acd65583725f45fca4ce005cbc256320883b98337dcf21798e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
