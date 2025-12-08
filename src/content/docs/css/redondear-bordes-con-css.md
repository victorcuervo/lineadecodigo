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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMOSW3G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJMJRrQiEvKuIECVxfK%2Fu3J6gdGgy33mZmN59AXPhZTAiBYR5YEYb7VNttjKjPtiTN%2Bc%2Ba0xAg91fEw8iPqG28rxiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxYZnYvZPWiMsmRo0KtwD8P1Nsyv7cnYM8HGJ%2BrVJvOU3tEJWilX4%2BYdg8OVguCUmG7POj6zeGpYxL86F8rwpx0Zd0uvzFwoh0rXDgHJbWDCf0XynyLJHLJeGrK1yHU6sIJeFelw1J6KnXYpmYSs%2BUff8zktKaubmlqQupLIy2n7nVPRdx3kJF915cP8Yk1eIl7VDIWOv2ysCNGH%2FDQLZ0ZE1Yk98rGQOwG0oMuEiRJ%2FAeR%2BW%2FXjBeM7MjoZLq5ToMyzNUKYtfvRel3soZtaaULoqDf5FYVLZ10pFVSbo7jyLO9lVvpyXSmo%2B9PtqD08JrA7SuvfT3QFPiBRSjopfZRN32nWnwu%2BmMYDz39CC7EqsC4%2BcEhT5TGMKMXDmqQFHMW%2BD8jltCkYi2ZID5JtgMxcXZpSUGH5M8o%2F7dgX9yaiAsNStPq5WAmII11qaWt6kNLAS%2B%2BLUAhkZkXktS%2Fq%2Bq5cOSIY7GaTuNooSlGKEkAJRLVQYbOnI%2B%2BiBxczg3f%2Fvaktiyg8QcS4Ve%2BBKwyAnrxe5XyePa1E0k%2BaJe6ZEOwDj2QzKyobyQTWvA4Atu4a6pYjYZ9eGOJW07fvY%2FvMj%2BU4vX21Vsl0r%2BvmXqXNDdojXHdjEK%2F0eW4wqYsR%2FWNt%2Buu4ESgikp6LNtzgwiJDbyQY6pgHzbZ5tTgQ1mujHGzEyyYhgJt2mAPl%2BnwlvrKy6ffEiWswOQMhN4jNWvTWDx0os3iJ6Bd6sYzsGEn6danzdVHFT782n9giYsMAdeDM%2Fe2GJiiGVf9UhgEpd3HQrVy5ZBDLkcCSjtYOypW5aoyAs10afQqEprc5AI0oBp2difq0TbtUr7noRxwKbn4VFdEZuBoP80RnuDTGgyV8%2B8srmyp%2FcK6wMSScY&X-Amz-Signature=c618a05eff413ff220686cbc6b516ef7bf7ee35171c5d2ed1f39649fba5a2bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMOSW3G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJMJRrQiEvKuIECVxfK%2Fu3J6gdGgy33mZmN59AXPhZTAiBYR5YEYb7VNttjKjPtiTN%2Bc%2Ba0xAg91fEw8iPqG28rxiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxYZnYvZPWiMsmRo0KtwD8P1Nsyv7cnYM8HGJ%2BrVJvOU3tEJWilX4%2BYdg8OVguCUmG7POj6zeGpYxL86F8rwpx0Zd0uvzFwoh0rXDgHJbWDCf0XynyLJHLJeGrK1yHU6sIJeFelw1J6KnXYpmYSs%2BUff8zktKaubmlqQupLIy2n7nVPRdx3kJF915cP8Yk1eIl7VDIWOv2ysCNGH%2FDQLZ0ZE1Yk98rGQOwG0oMuEiRJ%2FAeR%2BW%2FXjBeM7MjoZLq5ToMyzNUKYtfvRel3soZtaaULoqDf5FYVLZ10pFVSbo7jyLO9lVvpyXSmo%2B9PtqD08JrA7SuvfT3QFPiBRSjopfZRN32nWnwu%2BmMYDz39CC7EqsC4%2BcEhT5TGMKMXDmqQFHMW%2BD8jltCkYi2ZID5JtgMxcXZpSUGH5M8o%2F7dgX9yaiAsNStPq5WAmII11qaWt6kNLAS%2B%2BLUAhkZkXktS%2Fq%2Bq5cOSIY7GaTuNooSlGKEkAJRLVQYbOnI%2B%2BiBxczg3f%2Fvaktiyg8QcS4Ve%2BBKwyAnrxe5XyePa1E0k%2BaJe6ZEOwDj2QzKyobyQTWvA4Atu4a6pYjYZ9eGOJW07fvY%2FvMj%2BU4vX21Vsl0r%2BvmXqXNDdojXHdjEK%2F0eW4wqYsR%2FWNt%2Buu4ESgikp6LNtzgwiJDbyQY6pgHzbZ5tTgQ1mujHGzEyyYhgJt2mAPl%2BnwlvrKy6ffEiWswOQMhN4jNWvTWDx0os3iJ6Bd6sYzsGEn6danzdVHFT782n9giYsMAdeDM%2Fe2GJiiGVf9UhgEpd3HQrVy5ZBDLkcCSjtYOypW5aoyAs10afQqEprc5AI0oBp2difq0TbtUr7noRxwKbn4VFdEZuBoP80RnuDTGgyV8%2B8srmyp%2FcK6wMSScY&X-Amz-Signature=e2a581c6a92aebf1365b46d0f9248d33d732ffa67e86588687c249073eae549b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
