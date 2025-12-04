---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBBJ26Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIH7dYqTJ69vk0IxCWK4CMBx9htLL5vnfKSo6V%2F4nYTpTAiB6eKki9Ishema5TZOG1o8lY%2BfZE7qk%2FZaW69%2F15xRDjyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMH9YfL3xgpHvOxAmyKtwDwA6xx0FwhtTTZ1qutSC1pKPMoYupxjG3xAOmXugqiwmYug6Z5bFZTKOs5HEPyvOl0WgnJ%2B82ICCmbLMK2iz%2BMKsgLjGMEg%2Fth3ZW1SsQEw64Ule5EKVlcc70YsiGhMFIxP%2FU%2F7NY5GI3uykHhVPzPSwD%2FPT6Nvq59sIAuc0CGLcw6nCBZRvVFsCS0qTQZaC3JQ2UM7x8wDecctjL8ME%2BoMjQz9UOBbtzuUycPTC0Nc12wX%2Bnyrgv5Jnx3k0HKyDqlzJOgBA1LxMYRBGHfXZjDzZVLy802FbJoIvIGo%2BPBxR4%2BADOT0bvme6Au1zgytda2aPWz%2Byi1OUWy2NrOjpwhM052hjH6YvQmv%2FfIRlykYnJhHFHACBprklrK7j57Bf1AYLXfNBk4PgsMyL61iWmZUSL2m%2FQ1ueJYxazljVq0GSFXCvBU1H61Feel65n%2FLVgWVLyD6oVycV34%2BE9jzExhVBktwOWkCmC5bms7iqjhT4CRB%2F9X2z616njwIOKj25g%2FpMfiF6NsgsdtwRVwh8AFZ6qDMDI0ZAeniMMEosLCVV1EVUQ6OoyCQxyvHGLF7Z9nvbcLZICOQaSQ0d6v%2B0QCyUxATXCUdv2EP8e%2F5RkgMBeytxPplnF8oq8I0Mw%2BK3EyQY6pgEiKD1w2vaIlkpAsugGoUkvaSZy65dUgwgVjTPA2Hjaf5Do3bfed9sBbdfVCm%2B4l7CSGXYFKeHZQz%2BfjjMGqgYRJW09I%2FQ9rJp1M6WWmSkruQaJuNrjJB5fuZelVfwUe%2FNJkqcxAQoYFtWWVEE5EPO%2FRI9qM1tEMHK5jm%2FQNjgccDxTWtzzaXp3JzBVuPga%2BgiwP%2F%2B%2B%2BKpnHLxmb0SQQHGnuFakalSn&X-Amz-Signature=5643358e8c4e755ed77536d41985ae19351ccfac6ffcf3a5e8557bb0837cb27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBBJ26Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIH7dYqTJ69vk0IxCWK4CMBx9htLL5vnfKSo6V%2F4nYTpTAiB6eKki9Ishema5TZOG1o8lY%2BfZE7qk%2FZaW69%2F15xRDjyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMH9YfL3xgpHvOxAmyKtwDwA6xx0FwhtTTZ1qutSC1pKPMoYupxjG3xAOmXugqiwmYug6Z5bFZTKOs5HEPyvOl0WgnJ%2B82ICCmbLMK2iz%2BMKsgLjGMEg%2Fth3ZW1SsQEw64Ule5EKVlcc70YsiGhMFIxP%2FU%2F7NY5GI3uykHhVPzPSwD%2FPT6Nvq59sIAuc0CGLcw6nCBZRvVFsCS0qTQZaC3JQ2UM7x8wDecctjL8ME%2BoMjQz9UOBbtzuUycPTC0Nc12wX%2Bnyrgv5Jnx3k0HKyDqlzJOgBA1LxMYRBGHfXZjDzZVLy802FbJoIvIGo%2BPBxR4%2BADOT0bvme6Au1zgytda2aPWz%2Byi1OUWy2NrOjpwhM052hjH6YvQmv%2FfIRlykYnJhHFHACBprklrK7j57Bf1AYLXfNBk4PgsMyL61iWmZUSL2m%2FQ1ueJYxazljVq0GSFXCvBU1H61Feel65n%2FLVgWVLyD6oVycV34%2BE9jzExhVBktwOWkCmC5bms7iqjhT4CRB%2F9X2z616njwIOKj25g%2FpMfiF6NsgsdtwRVwh8AFZ6qDMDI0ZAeniMMEosLCVV1EVUQ6OoyCQxyvHGLF7Z9nvbcLZICOQaSQ0d6v%2B0QCyUxATXCUdv2EP8e%2F5RkgMBeytxPplnF8oq8I0Mw%2BK3EyQY6pgEiKD1w2vaIlkpAsugGoUkvaSZy65dUgwgVjTPA2Hjaf5Do3bfed9sBbdfVCm%2B4l7CSGXYFKeHZQz%2BfjjMGqgYRJW09I%2FQ9rJp1M6WWmSkruQaJuNrjJB5fuZelVfwUe%2FNJkqcxAQoYFtWWVEE5EPO%2FRI9qM1tEMHK5jm%2FQNjgccDxTWtzzaXp3JzBVuPga%2BgiwP%2F%2B%2B%2BKpnHLxmb0SQQHGnuFakalSn&X-Amz-Signature=4e9a94f1c371589adca7ed16f5e37fd9304f630deef4536501d32b584dcc7a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
