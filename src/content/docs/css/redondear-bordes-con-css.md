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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LQNM2M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvJHaQfVsvMA4dvj2NUA%2Ba%2BBeV4GMJC8Ho4NxPswJYgIgMV31nWX0BMM847txB2KwedOfIIrNlJmWHCfXmNx4q6MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJob7OXjljys8AA%2BOircA1I%2F7VfR4GaJE5V3sweh0EjnUzp5T1Okx46xBqKsLgiSbVZ8OZ0iij9QnQ2LOxc693KLMpIfC%2FRs0HFCrdj5uXFCoyyzyNa3dTsO3tdvB10zvhSow0KEGO%2BH0Ov3JCoR0%2Fcg44jgx6XvKO6jOQm0Uf80zFqlu3rA0zN0Lrway0QPzLJ1xtu0TIsHwhS3PMv%2FUs6OjCUdUz8vIV7NR%2Ba5LYjQ51rtoJEjPZab80oazHMpBG5R2661bCNYng%2Bd1Rqm902%2Bcy%2BmHXbnZ0yxkKRzbZR5S3xOnTM3ly4hFvv7vb3s3XDDQfQ4%2Fyysb2PDrEfgHcOkJ8OJDfGbrKQ52faJN974SMtF%2BxchS9P%2BA3IukUvtuj6OMxt1JwikGW1uwok3pyCUtpnyKvfIQbqcGrygq5%2FvVDoNmZsH2Ik57gfr%2Fx1Ao06lMyrEUhe6F%2B1Ylx5%2FO5QUwxAG2fOcZeUo2U22XamauccnbN3v%2FBiqP09R3dlhslhXNuzP3CNLu1%2BpaMTdX5qm3v%2FB%2B1vV1Xi%2FAv%2Bb4xx377SOLp5WtiDjqsC1wzyDRnWhXyalmyFQFFm0Sdsf991%2BSG4loRvCydsVdF8gyYua6ABqDBfy5smsyXvU5j1sP15Y3%2FvgGa%2BUuYMtMKH90skGOqUBFYN4pbyXb3kBY%2BLF7tnMoliRYrBTCTHPnHlv1acFCpACLdWrUnFKP0oAfGHcs0QkU8skgHThCeSYFyjXth9MAYpWaJbG%2Bx0hbmQ%2BD5QfXrmlzDtOThhx%2Fp55m9GAaaPPUhMXsnXHjG2s1u27fAI4E7pL5KKo5gadTge%2FptD0pWmToydhyXR5hVpHnur%2BmH1P4yD8DHVO4tJOMl9cAo4neqMUa3yx&X-Amz-Signature=ee30c81977bb95e5f39b927895dd1142df95d990b64de5638666a835545fb9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LQNM2M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvJHaQfVsvMA4dvj2NUA%2Ba%2BBeV4GMJC8Ho4NxPswJYgIgMV31nWX0BMM847txB2KwedOfIIrNlJmWHCfXmNx4q6MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJob7OXjljys8AA%2BOircA1I%2F7VfR4GaJE5V3sweh0EjnUzp5T1Okx46xBqKsLgiSbVZ8OZ0iij9QnQ2LOxc693KLMpIfC%2FRs0HFCrdj5uXFCoyyzyNa3dTsO3tdvB10zvhSow0KEGO%2BH0Ov3JCoR0%2Fcg44jgx6XvKO6jOQm0Uf80zFqlu3rA0zN0Lrway0QPzLJ1xtu0TIsHwhS3PMv%2FUs6OjCUdUz8vIV7NR%2Ba5LYjQ51rtoJEjPZab80oazHMpBG5R2661bCNYng%2Bd1Rqm902%2Bcy%2BmHXbnZ0yxkKRzbZR5S3xOnTM3ly4hFvv7vb3s3XDDQfQ4%2Fyysb2PDrEfgHcOkJ8OJDfGbrKQ52faJN974SMtF%2BxchS9P%2BA3IukUvtuj6OMxt1JwikGW1uwok3pyCUtpnyKvfIQbqcGrygq5%2FvVDoNmZsH2Ik57gfr%2Fx1Ao06lMyrEUhe6F%2B1Ylx5%2FO5QUwxAG2fOcZeUo2U22XamauccnbN3v%2FBiqP09R3dlhslhXNuzP3CNLu1%2BpaMTdX5qm3v%2FB%2B1vV1Xi%2FAv%2Bb4xx377SOLp5WtiDjqsC1wzyDRnWhXyalmyFQFFm0Sdsf991%2BSG4loRvCydsVdF8gyYua6ABqDBfy5smsyXvU5j1sP15Y3%2FvgGa%2BUuYMtMKH90skGOqUBFYN4pbyXb3kBY%2BLF7tnMoliRYrBTCTHPnHlv1acFCpACLdWrUnFKP0oAfGHcs0QkU8skgHThCeSYFyjXth9MAYpWaJbG%2Bx0hbmQ%2BD5QfXrmlzDtOThhx%2Fp55m9GAaaPPUhMXsnXHjG2s1u27fAI4E7pL5KKo5gadTge%2FptD0pWmToydhyXR5hVpHnur%2BmH1P4yD8DHVO4tJOMl9cAo4neqMUa3yx&X-Amz-Signature=c134829603c9caf156b802cf28ad0c9a674e57455bb1d7f48ee2b683652fc478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
