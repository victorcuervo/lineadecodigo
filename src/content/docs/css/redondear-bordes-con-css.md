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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDTNWNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe51LrjOknon8QrPZae%2F2tKznlp%2FIKdjO79g0FcrTa0AiEAqv8sG3rWTJ3ns4LUMs6hR8eiyE5Y6H%2F7zePETzTYY5Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLzr0py4d%2FeMjA5bWyrcA7YmY9ZtklUO6mLhKY88d3suZQP%2BgUehsqCfs0wjhmDwSFHxpicIYnB2BvsF5%2Fh3Mp2aoBTDBHvgMqF285e523v27fJt4AtMKSsEZTrNcDFcfzUxc51O%2BYhkjkz5gnGDNR88w1a3B19HCtoX4DDDq8RDDYvioKKFauFksb%2Fpz2J3GAVcYwgWVgzJTK9EVYZwp%2BpvckM7i3zOb0dUnjrVSQoAgB5YfxFPUQHp0aQkrs4RYDD%2FCuAjXnoBaOmvxxWML%2BuV%2FPl8aqL60uHQxunawEaKA9Fn0I%2BlkGJldK%2FqsXbyiv%2Fy28ZQ2uZi4lwK6v8nb9fsCwT5Usg6%2F8XT9NSWfHatqAoz09ylge%2BHv%2FqiborBQhC12x22D%2FkaGcZxA6GFpH033pnwQf0QVQ%2BWCbOZ80dI74EwxfiQPsbOossd2mCkXxKKEeZiplWgJ0q%2BehcIf2TWJ8dukL7yuAJw6ixi2rFWgm%2BGwCd8w4myKycZzAPDelDiClgLHAyla8TNOmN6c8sffG7P16T8Xa%2FMRD9bXxyan2sHfBRrzM27N6Y2DrTUsvKNeBDrFDsLLe6svZRCRTCRwGKV99mfzIOVvZnjpMzGLrt51S9FzjZgHCCd3p6FtggVsOh93ynAmEtmMM%2BuyckGOqUB4K%2Bp0L9VFso524hYv4Dg%2F9K1FrUsInKqvcjGxxscAluyw%2FfDXP6J%2BxVmgXuHslp43kIP4AGgPYday0JehR9pOD3Otc7HtDWTl%2BwbbMqdtq%2BtKsK8vhxGVX8u1MrLNFOi%2BYw4gEuUUoT8wWZtms4BYXEkWKAxQ4wyDB1owZI9pIPPgToMP0xJO1PjbHvfCMuOR%2BtIuQWYubJHSMBJ65fg0915nm%2BB&X-Amz-Signature=c55bff5776927d4689ed9de8b85f077b39f2c48967f2f8dce4e284b911ee84d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDTNWNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe51LrjOknon8QrPZae%2F2tKznlp%2FIKdjO79g0FcrTa0AiEAqv8sG3rWTJ3ns4LUMs6hR8eiyE5Y6H%2F7zePETzTYY5Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLzr0py4d%2FeMjA5bWyrcA7YmY9ZtklUO6mLhKY88d3suZQP%2BgUehsqCfs0wjhmDwSFHxpicIYnB2BvsF5%2Fh3Mp2aoBTDBHvgMqF285e523v27fJt4AtMKSsEZTrNcDFcfzUxc51O%2BYhkjkz5gnGDNR88w1a3B19HCtoX4DDDq8RDDYvioKKFauFksb%2Fpz2J3GAVcYwgWVgzJTK9EVYZwp%2BpvckM7i3zOb0dUnjrVSQoAgB5YfxFPUQHp0aQkrs4RYDD%2FCuAjXnoBaOmvxxWML%2BuV%2FPl8aqL60uHQxunawEaKA9Fn0I%2BlkGJldK%2FqsXbyiv%2Fy28ZQ2uZi4lwK6v8nb9fsCwT5Usg6%2F8XT9NSWfHatqAoz09ylge%2BHv%2FqiborBQhC12x22D%2FkaGcZxA6GFpH033pnwQf0QVQ%2BWCbOZ80dI74EwxfiQPsbOossd2mCkXxKKEeZiplWgJ0q%2BehcIf2TWJ8dukL7yuAJw6ixi2rFWgm%2BGwCd8w4myKycZzAPDelDiClgLHAyla8TNOmN6c8sffG7P16T8Xa%2FMRD9bXxyan2sHfBRrzM27N6Y2DrTUsvKNeBDrFDsLLe6svZRCRTCRwGKV99mfzIOVvZnjpMzGLrt51S9FzjZgHCCd3p6FtggVsOh93ynAmEtmMM%2BuyckGOqUB4K%2Bp0L9VFso524hYv4Dg%2F9K1FrUsInKqvcjGxxscAluyw%2FfDXP6J%2BxVmgXuHslp43kIP4AGgPYday0JehR9pOD3Otc7HtDWTl%2BwbbMqdtq%2BtKsK8vhxGVX8u1MrLNFOi%2BYw4gEuUUoT8wWZtms4BYXEkWKAxQ4wyDB1owZI9pIPPgToMP0xJO1PjbHvfCMuOR%2BtIuQWYubJHSMBJ65fg0915nm%2BB&X-Amz-Signature=4e6cf1210af9d03bcc3c092053dd6499fd73e984c327ff110aba376d72de61da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
