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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SK2HF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ5Ej1Jt2aw7yXrpZG9NSiruSKch7wd0YsX2dFihxcZQIhAPmJW6Sxyut%2B8mHe27QIWZxLD7C9LBu0LqQyP24n5x9mKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIpLbp7IG8qdk9bhcq3AM7KoLmAmMEGATAQELMVMG9GaCrFaGwfCfQedT6clMPV72e6ZZcAY6BWEXZkLpo2K74ertayOn5jPvxMl3iBQzr0qvNmfnoTXe2H1XCxfRo59pnO6IGZF8JRrl7RtZCuOIs%2BoejFv7He%2FEJL9rZlmx1XCokG4TgWbu8pf97SXV0mGBnzaOgCuie2K7seTj1ahFZj6c4s98UxOJfILkSF4HT9nC1yWemdZMCKR1uZgma3YQMQkw4922ZOPMV7CVrRLaUH5QlPWM50ErtcqQVyXRilq9GWrzyizoQFB1D2nFX7PEh7s906L%2FbpsbVd%2FNDutNuHvgBbB5aGiFpkRMtINdsy2HsLAFKi%2B6zC8%2B5D08RuFLm8qFB%2BTnGdlSttglgmNqSNs%2FQQPJkuGV4nGcQQpt%2FoUOY3nP1gsiuXU76IMi3p%2F6hqvsFZBebzrsPbAwPNdrhhGz%2FauBLu5w2bOdPUonf%2BaF8SkgPgwijS%2FWoJggkWsemcFmEWSNqIMOzyjU0nl4RMeO9DFXFiDfEhYg1tqXVjP77CcUwYmlVejhtek0OfWSNTGh3cZgCUjnAERkuqgzSMxw4A%2Bb7M8H7ZbgaO2iOK7bBfwWQRhikU75jOS6nRPlALevrrPKDZ%2Fwo%2BTCrndTJBjqkATa26PyKUKriRftHsmahwfVV1rNZ6SgejpSDtNm7YHgZDaKVhZWSotFFOLgH1CDOF7HpKC2z6AXh5aRk6UhTmq1axS8zYpKYK4dsxzIYN%2F2CsZMy0O7%2FjwtFucMyjRH8FH0muMoyMVz25XVVFGr%2BHtNKRo%2F1d2Fupl8Gl4mQj7yExYf3UHmv7u2v20x5bDGfkCsBjJRj0FR4kytI7knN%2FxzR5IUf&X-Amz-Signature=52d1eacd3b00a4f2676c8085ea58c9ae43978a388d13c6f93d9f3069400ddaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SK2HF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ5Ej1Jt2aw7yXrpZG9NSiruSKch7wd0YsX2dFihxcZQIhAPmJW6Sxyut%2B8mHe27QIWZxLD7C9LBu0LqQyP24n5x9mKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIpLbp7IG8qdk9bhcq3AM7KoLmAmMEGATAQELMVMG9GaCrFaGwfCfQedT6clMPV72e6ZZcAY6BWEXZkLpo2K74ertayOn5jPvxMl3iBQzr0qvNmfnoTXe2H1XCxfRo59pnO6IGZF8JRrl7RtZCuOIs%2BoejFv7He%2FEJL9rZlmx1XCokG4TgWbu8pf97SXV0mGBnzaOgCuie2K7seTj1ahFZj6c4s98UxOJfILkSF4HT9nC1yWemdZMCKR1uZgma3YQMQkw4922ZOPMV7CVrRLaUH5QlPWM50ErtcqQVyXRilq9GWrzyizoQFB1D2nFX7PEh7s906L%2FbpsbVd%2FNDutNuHvgBbB5aGiFpkRMtINdsy2HsLAFKi%2B6zC8%2B5D08RuFLm8qFB%2BTnGdlSttglgmNqSNs%2FQQPJkuGV4nGcQQpt%2FoUOY3nP1gsiuXU76IMi3p%2F6hqvsFZBebzrsPbAwPNdrhhGz%2FauBLu5w2bOdPUonf%2BaF8SkgPgwijS%2FWoJggkWsemcFmEWSNqIMOzyjU0nl4RMeO9DFXFiDfEhYg1tqXVjP77CcUwYmlVejhtek0OfWSNTGh3cZgCUjnAERkuqgzSMxw4A%2Bb7M8H7ZbgaO2iOK7bBfwWQRhikU75jOS6nRPlALevrrPKDZ%2Fwo%2BTCrndTJBjqkATa26PyKUKriRftHsmahwfVV1rNZ6SgejpSDtNm7YHgZDaKVhZWSotFFOLgH1CDOF7HpKC2z6AXh5aRk6UhTmq1axS8zYpKYK4dsxzIYN%2F2CsZMy0O7%2FjwtFucMyjRH8FH0muMoyMVz25XVVFGr%2BHtNKRo%2F1d2Fupl8Gl4mQj7yExYf3UHmv7u2v20x5bDGfkCsBjJRj0FR4kytI7knN%2FxzR5IUf&X-Amz-Signature=4247bd89d66ad7e0c46c927a9a9251ab42ed411ede6bccd5e2aa90c05d5beeaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
