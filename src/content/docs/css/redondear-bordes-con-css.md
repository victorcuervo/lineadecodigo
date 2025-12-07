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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZD7JS4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9Us5XqKmL5m6TbiUdYrsVqzAvo2Zoc5jagb%2BUEnYtAIhAO5P6rGT4W4%2Bt7Eb9bj19%2FePuXC1TH7kgR7l9I5DhaAqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKpvNCVfzDY7aL50q3AOhRNdjiFHML%2BSQlbz8ISLoeMhS%2BtxqM%2BQSLDQ%2B1lnzduFNv4rkj3IvnlwLy9iIuLbsGg98eYO2I2eILPgTy6eAnuetiSVF9NWeQ%2FWXQHDRQ3NZFpDwseRItEn13UM4mDsWi4waezcjz5Wc9%2FKOVqAaRGUAvAo591E5OshvC8N6SmA%2BEqLrgDqWuPVATsJRNYRrT21LybWiC7grgm%2FZK80fb9A%2FknULxme4eGtb486FpFEsPOxq01sfRQjOs%2Bw2hgjIPL070rBOPJrhOrRujg7T8WjR2m7UTgPuPSA8hpU4BZABeYOKwIOWoTSAzL2Tqg3m6LlEMbrtXkfRe0rCY7%2Fh6WyWiQCH2qoWIoO%2B%2FUZdeQREQhO1jDhXeLYRajl3YhHZ3qQmnXHoEDVKZ6VuddVfF01FWPFnscCQVczwL%2F1pBtnHsSAmSvD%2FwyrJ%2Fvm4pGLpUsRiPQetuGBQiB8iK1iYqAiZsm2KTswagPPgTwrzNQ9nmZdjU3yvz8ESRIT5ba386IcxmXAGBe3FYhZfcT4lUXuwP%2FmEoY7hw%2BGOELfDvFpC%2BsImIGBpti%2Buup1aCZwfTljUUOBrYhacCA3erdYWbgGaNEyUR0Og1OnOBX50lrpp1RqN4MfPZzQPyjD9o9TJBjqkAVPHviUYfHBqo0ate3guq5F%2BJAYUcqtpC8uvYxgLeRK46WwuDP4nskrQP3YaabNn2MYqJkPRDBPRmvp2I3APabJNC%2Fgnllqw98GqdDjWY5IRSXryqJsEa42ZoLO3UPZCWXXkp6ksDSytW6sxZo%2BOEHW2X0VO%2F2%2FpK%2FUvVGcWvpjeJ%2BtjmRNOi2%2BviwvJNRTfyoUHctV0aivVVA4Wy8%2FXSEc2EW9%2F&X-Amz-Signature=8f95c7f17cbae01d1bd9c8e1d266059e95eeccba4868440a5f6bbfc84d0a8d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZD7JS4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9Us5XqKmL5m6TbiUdYrsVqzAvo2Zoc5jagb%2BUEnYtAIhAO5P6rGT4W4%2Bt7Eb9bj19%2FePuXC1TH7kgR7l9I5DhaAqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUKpvNCVfzDY7aL50q3AOhRNdjiFHML%2BSQlbz8ISLoeMhS%2BtxqM%2BQSLDQ%2B1lnzduFNv4rkj3IvnlwLy9iIuLbsGg98eYO2I2eILPgTy6eAnuetiSVF9NWeQ%2FWXQHDRQ3NZFpDwseRItEn13UM4mDsWi4waezcjz5Wc9%2FKOVqAaRGUAvAo591E5OshvC8N6SmA%2BEqLrgDqWuPVATsJRNYRrT21LybWiC7grgm%2FZK80fb9A%2FknULxme4eGtb486FpFEsPOxq01sfRQjOs%2Bw2hgjIPL070rBOPJrhOrRujg7T8WjR2m7UTgPuPSA8hpU4BZABeYOKwIOWoTSAzL2Tqg3m6LlEMbrtXkfRe0rCY7%2Fh6WyWiQCH2qoWIoO%2B%2FUZdeQREQhO1jDhXeLYRajl3YhHZ3qQmnXHoEDVKZ6VuddVfF01FWPFnscCQVczwL%2F1pBtnHsSAmSvD%2FwyrJ%2Fvm4pGLpUsRiPQetuGBQiB8iK1iYqAiZsm2KTswagPPgTwrzNQ9nmZdjU3yvz8ESRIT5ba386IcxmXAGBe3FYhZfcT4lUXuwP%2FmEoY7hw%2BGOELfDvFpC%2BsImIGBpti%2Buup1aCZwfTljUUOBrYhacCA3erdYWbgGaNEyUR0Og1OnOBX50lrpp1RqN4MfPZzQPyjD9o9TJBjqkAVPHviUYfHBqo0ate3guq5F%2BJAYUcqtpC8uvYxgLeRK46WwuDP4nskrQP3YaabNn2MYqJkPRDBPRmvp2I3APabJNC%2Fgnllqw98GqdDjWY5IRSXryqJsEa42ZoLO3UPZCWXXkp6ksDSytW6sxZo%2BOEHW2X0VO%2F2%2FpK%2FUvVGcWvpjeJ%2BtjmRNOi2%2BviwvJNRTfyoUHctV0aivVVA4Wy8%2FXSEc2EW9%2F&X-Amz-Signature=d0a2fb97aeeeda23351c24f2c27ff1f0e352200d00d519b6d4a3931638b63e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
