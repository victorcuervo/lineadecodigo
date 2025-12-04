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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3O5KV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAHufeBEvp7j5P5spVsg93RArK1PeoT2pUoSR333JuuvAiEAhR5ir75WBwVOmPtTiCKYTVGyum6lkAcU53%2BjHV%2BYF5wq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD%2BBkNLPGWBbEfPJHCrcA%2FxVZXhjqmrMYoWQbsi0CG2mPylJlJh87VeTayzBKoFEK4rV%2BLYXJUP9is8L66QoiJhtIaGlnUoWqp0Q0R%2BaNpvwXC8nWwuDIE6E0jYcDdhsKFd8x6rgXXa04Si%2Bvlx4uzIQZ55UN9%2F2oHYjaPrrYEoAa4Dt0NrRQuqa5uPJf1CAiR9xliG65NgGHWubMR%2BeWaFInBad8ksnJkmrNXvr7uyz%2BbcFwHEK0iu%2BzaOvl8NUB4FEs5upuavXAcmPpa3Kz3MoC9frP9rRClgEdjnZf%2Fz2WwpJ%2BU1oeYRZuwdxyM4%2B%2FanLD%2BXFIuI9K4A112KzLe2V2Ur4%2BHaSMxAlQJtkxMItvsTROkTeeFlgqE0CEVT2kLD7wXzj%2FJHO7RLqr5wgODsU4SDI69YBGlawXlgaHceTiSSBZ6%2F6V8GNwt1uQ0dOh7pszTY2G2DhxHkdPttcdF7XR3Q2zm2TigwcDL52cVQKnWBFoDjusX8teoWx6PxOoiKQ09K%2FjSzcwvQXDwrEoTrrvl5YGSnFLBK2rshTyqykT31wkxmv9LxrxkrHKJxN1SODak0tMWNZYRFxKoohT26kgqy6aPjTzW3HkF%2Blxx3bVj7TQ7C2CjuoBzOxeRdIcN%2FaK5qXrO%2Fc1u1bMOS0w8kGOqUBaC6V%2BvOpGUbruo8eQsN9TqEb3Mj5%2BpMgDPWavSlydqxXV2UxITGBVtfGjh3hbYtc0znkuntRpl%2FKtqhDzX64Qd%2B3%2Bg00VkWu7an7MIeC0ma2q9nN3i7M5IohcFyuneewD5ivxNC5rLDqz6IShCmn3d6POFocsIB5VL3i09T35Ur1CCnIKXx8ZFEgHiZz0cdEzm41k0oafkw4PrAmQRJEES0hoR%2BM&X-Amz-Signature=3c749d4a48941ec2cef89ed30bb1657da2e02524ef4273a0c1d7e1a9060d8777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3O5KV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAHufeBEvp7j5P5spVsg93RArK1PeoT2pUoSR333JuuvAiEAhR5ir75WBwVOmPtTiCKYTVGyum6lkAcU53%2BjHV%2BYF5wq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD%2BBkNLPGWBbEfPJHCrcA%2FxVZXhjqmrMYoWQbsi0CG2mPylJlJh87VeTayzBKoFEK4rV%2BLYXJUP9is8L66QoiJhtIaGlnUoWqp0Q0R%2BaNpvwXC8nWwuDIE6E0jYcDdhsKFd8x6rgXXa04Si%2Bvlx4uzIQZ55UN9%2F2oHYjaPrrYEoAa4Dt0NrRQuqa5uPJf1CAiR9xliG65NgGHWubMR%2BeWaFInBad8ksnJkmrNXvr7uyz%2BbcFwHEK0iu%2BzaOvl8NUB4FEs5upuavXAcmPpa3Kz3MoC9frP9rRClgEdjnZf%2Fz2WwpJ%2BU1oeYRZuwdxyM4%2B%2FanLD%2BXFIuI9K4A112KzLe2V2Ur4%2BHaSMxAlQJtkxMItvsTROkTeeFlgqE0CEVT2kLD7wXzj%2FJHO7RLqr5wgODsU4SDI69YBGlawXlgaHceTiSSBZ6%2F6V8GNwt1uQ0dOh7pszTY2G2DhxHkdPttcdF7XR3Q2zm2TigwcDL52cVQKnWBFoDjusX8teoWx6PxOoiKQ09K%2FjSzcwvQXDwrEoTrrvl5YGSnFLBK2rshTyqykT31wkxmv9LxrxkrHKJxN1SODak0tMWNZYRFxKoohT26kgqy6aPjTzW3HkF%2Blxx3bVj7TQ7C2CjuoBzOxeRdIcN%2FaK5qXrO%2Fc1u1bMOS0w8kGOqUBaC6V%2BvOpGUbruo8eQsN9TqEb3Mj5%2BpMgDPWavSlydqxXV2UxITGBVtfGjh3hbYtc0znkuntRpl%2FKtqhDzX64Qd%2B3%2Bg00VkWu7an7MIeC0ma2q9nN3i7M5IohcFyuneewD5ivxNC5rLDqz6IShCmn3d6POFocsIB5VL3i09T35Ur1CCnIKXx8ZFEgHiZz0cdEzm41k0oafkw4PrAmQRJEES0hoR%2BM&X-Amz-Signature=97206a336d46d8f5c1a3968394b1fb6e027f1cb005f50aa6599c9ad03ee6aedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
