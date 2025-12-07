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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II526YH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgs7Enkcl219B%2FN6Y2CrHDmxZzXREpQnhNFohvCyCkrgIgHpMU0mssithY1uGdi1L4DnIdcl0BFDWaBoGvOBs2H5QqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZpCMoM9IPp6TTBnircA%2BP0BhAn%2FmzWkDDtt1ebjlwwNEo33%2FIMZ0V2sK1BlBAIRTaa0Biw%2BFe0GC0cgvFKbWA7gBmo15d%2BC%2FrKSm6Rz6WE73i%2FICBwuSv3Kv%2FJOgVj6%2BafYRt7%2Bme2xva8u3rVOu1RIRQC16tVWVD8kTaUE%2FvlqTiUAbHfAtb4nWT80bmPz4D5tlmVGdQSmy35g15hcFY5TkpzhNXza3lbocctKOj2%2BoNRU5vmsTgJHVIjVYQosc3dSlHJAjkaE759nn657o91saZSYAVji2RSeSA27V4O%2B%2FxmtjzFsDZoO%2Bm2T52GwjvDPpiNsmoZyFX96K%2Bf4w9nzF5Etx0Ui4SHIqatjKER73nZ7gScDEsy2XspR8MI81WE7ss8mwaRws%2FTvcXiyPSXDOpOBihYreZj6dMz7m7MIlSwZ1QfFPlLGzFmDxwKQZOYLBmIOyxIUWwi0YYDeNAC0YoIP5Zp5582gEWVuUE5zVYMkNc7yBARa4Drro8lnUd7qgp2Vyr3sIrC1YQNbPsjbhofz7EseUopCrD0aDg7bc3VehRECyPhY79lVTVIqwA85lw760Ee34MxY63QOD50pPP7pBL8dKoXyEl7jZlR9xaqCNG5uS0JUZulPxawBsXvB7JulVZzzXl6MM%2B61skGOqUBNEHPd9qYVJohszYxy1Aql4dHaQkSR%2FO5YQEqAA9UkNBtBKiDI735wbS2G86VIpdytb3ROzIxzJfHXB6WDd3TwgnrAMg9uxAjDs0jmCM5CJ93ybjWlLwVZhVCxH0DLZuvb3XIPC1K2AenICSYZ6AlowOEj52mZqOlOygbkwdL18%2BDAt22i79Dmg%2Fu5ALxhPc%2B%2BIeTwpmxQxKj2E9OXh220iwKqocW&X-Amz-Signature=e8b4563fed8b6ad249b786e61d16ed9a9fd030f07417b64ec79f85183bb958a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662II526YH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgs7Enkcl219B%2FN6Y2CrHDmxZzXREpQnhNFohvCyCkrgIgHpMU0mssithY1uGdi1L4DnIdcl0BFDWaBoGvOBs2H5QqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZpCMoM9IPp6TTBnircA%2BP0BhAn%2FmzWkDDtt1ebjlwwNEo33%2FIMZ0V2sK1BlBAIRTaa0Biw%2BFe0GC0cgvFKbWA7gBmo15d%2BC%2FrKSm6Rz6WE73i%2FICBwuSv3Kv%2FJOgVj6%2BafYRt7%2Bme2xva8u3rVOu1RIRQC16tVWVD8kTaUE%2FvlqTiUAbHfAtb4nWT80bmPz4D5tlmVGdQSmy35g15hcFY5TkpzhNXza3lbocctKOj2%2BoNRU5vmsTgJHVIjVYQosc3dSlHJAjkaE759nn657o91saZSYAVji2RSeSA27V4O%2B%2FxmtjzFsDZoO%2Bm2T52GwjvDPpiNsmoZyFX96K%2Bf4w9nzF5Etx0Ui4SHIqatjKER73nZ7gScDEsy2XspR8MI81WE7ss8mwaRws%2FTvcXiyPSXDOpOBihYreZj6dMz7m7MIlSwZ1QfFPlLGzFmDxwKQZOYLBmIOyxIUWwi0YYDeNAC0YoIP5Zp5582gEWVuUE5zVYMkNc7yBARa4Drro8lnUd7qgp2Vyr3sIrC1YQNbPsjbhofz7EseUopCrD0aDg7bc3VehRECyPhY79lVTVIqwA85lw760Ee34MxY63QOD50pPP7pBL8dKoXyEl7jZlR9xaqCNG5uS0JUZulPxawBsXvB7JulVZzzXl6MM%2B61skGOqUBNEHPd9qYVJohszYxy1Aql4dHaQkSR%2FO5YQEqAA9UkNBtBKiDI735wbS2G86VIpdytb3ROzIxzJfHXB6WDd3TwgnrAMg9uxAjDs0jmCM5CJ93ybjWlLwVZhVCxH0DLZuvb3XIPC1K2AenICSYZ6AlowOEj52mZqOlOygbkwdL18%2BDAt22i79Dmg%2Fu5ALxhPc%2B%2BIeTwpmxQxKj2E9OXh220iwKqocW&X-Amz-Signature=692ffcd5d8773256200b3c77cb4715758a935554c8bc90aae26e5591b5975c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
