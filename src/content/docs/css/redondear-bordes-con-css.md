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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHAIWDB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC0R1sXYgSshidYtc50yJNEyi7wWXOeylaY%2Fs2u5TCwAiAzH62XM23gh6%2B42zeLc3Xy5Vym2H1Rzu%2Fx03PnC%2FfHpSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMrjGL7XmuPd9ojc0eKtwDDewUbuohIyN75WcUFiRp2usmYOZ5AvXwjhGz8nbAIyDpG74bUvpG0gQbJWqzOENq9r%2BwhmgHRhqYE4lVvhOTY51dvDNqXgH2AAJrWoADz7ZQrTcvCPe1THg7I61QXQs0xWytOiQtIJ7uO6tq08mdLjHf8AE1rygXwrl77EvxxvZ4YvRcSh2ABpoKY1lW9%2BLhQCnQ2F66udoJqLnls2fJuy89SAiEt3FXBXOxM0x4D5rV7zwnsZlltQQjBYZh3zlg0nQ5uvAcAaYeRvUuWe7zLtU6QGome277xaUyIDm%2BDJ5k4ItNk9%2Be%2BK%2BPvFnKtQy2WfiBcFCXANgE92eUch%2BusuHLUj8fEt69ri9lgcmrvRkqxQDBDxyo5Q%2BKsQzfgrdstTh7%2F2HTUBHxDFuXhTcKHr7WWCKDxazySNcHUXdHirpL2A7RLqigELwMzuBsFwy%2FRSVO5tqTPtDd%2Bo2P64%2FeISWIAMHfNY6cinGzxcxl2cNLvuMS6PNSarNRTX19wllcXpgb1KSbSXJZ8EibQmfhhADoYSsMXZ4zIx4s4MxEnT1Q%2BmMBHZJZLCHLgIHi0%2FFb4LAVUzY%2B%2FV%2FDgROEgR9Q2OVF3HFMjMJGendmt0KKeo0ObK9K4Mb9TeTMwUUwnMbNyQY6pgEFb2pHyWBaBj45jQI4peJUTULPZQzN6xH4h4tu%2FWFqC%2Bv5vthxSb3tKZIbs0SkRrkyYgZn%2Fl94F4pzAQqn%2F8H175GLSLjpnfTa%2B24jreDXYnuE%2Flqhxz%2BhtP1Q6nzB25cCq3d0kC8dYgXlwc7%2BO3mAUwidl2X1FfY7meBOFLDunjVNQHXUHUCghpBzNQqRH%2BDuJt0P7L8IiPdSezKF3sY1ftLAuLcu&X-Amz-Signature=1e910dc4f35d3667f990c886331b1ff9db4d3391f1fe3ce7d8fedd63a66d25bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHAIWDB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICC0R1sXYgSshidYtc50yJNEyi7wWXOeylaY%2Fs2u5TCwAiAzH62XM23gh6%2B42zeLc3Xy5Vym2H1Rzu%2Fx03PnC%2FfHpSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMrjGL7XmuPd9ojc0eKtwDDewUbuohIyN75WcUFiRp2usmYOZ5AvXwjhGz8nbAIyDpG74bUvpG0gQbJWqzOENq9r%2BwhmgHRhqYE4lVvhOTY51dvDNqXgH2AAJrWoADz7ZQrTcvCPe1THg7I61QXQs0xWytOiQtIJ7uO6tq08mdLjHf8AE1rygXwrl77EvxxvZ4YvRcSh2ABpoKY1lW9%2BLhQCnQ2F66udoJqLnls2fJuy89SAiEt3FXBXOxM0x4D5rV7zwnsZlltQQjBYZh3zlg0nQ5uvAcAaYeRvUuWe7zLtU6QGome277xaUyIDm%2BDJ5k4ItNk9%2Be%2BK%2BPvFnKtQy2WfiBcFCXANgE92eUch%2BusuHLUj8fEt69ri9lgcmrvRkqxQDBDxyo5Q%2BKsQzfgrdstTh7%2F2HTUBHxDFuXhTcKHr7WWCKDxazySNcHUXdHirpL2A7RLqigELwMzuBsFwy%2FRSVO5tqTPtDd%2Bo2P64%2FeISWIAMHfNY6cinGzxcxl2cNLvuMS6PNSarNRTX19wllcXpgb1KSbSXJZ8EibQmfhhADoYSsMXZ4zIx4s4MxEnT1Q%2BmMBHZJZLCHLgIHi0%2FFb4LAVUzY%2B%2FV%2FDgROEgR9Q2OVF3HFMjMJGendmt0KKeo0ObK9K4Mb9TeTMwUUwnMbNyQY6pgEFb2pHyWBaBj45jQI4peJUTULPZQzN6xH4h4tu%2FWFqC%2Bv5vthxSb3tKZIbs0SkRrkyYgZn%2Fl94F4pzAQqn%2F8H175GLSLjpnfTa%2B24jreDXYnuE%2Flqhxz%2BhtP1Q6nzB25cCq3d0kC8dYgXlwc7%2BO3mAUwidl2X1FfY7meBOFLDunjVNQHXUHUCghpBzNQqRH%2BDuJt0P7L8IiPdSezKF3sY1ftLAuLcu&X-Amz-Signature=af87950c65333e61238ac5c9fae13221e577e15078678c003d31ff36f7e570d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
