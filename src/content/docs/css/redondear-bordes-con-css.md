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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHMJOJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBsSQFhfLJ%2BeAmofpIzLS42NC0OuSpTR6PAu%2Bo6OPhZ4AiEA%2FQMyVsv7xwC5f67eVhuVK8vZ4ZwTwFhdFHDP8fxKeiMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLV%2FBxxDw5c6yxKglCrcAyCOnYqeMLP8mcqVidcDnO4N6cbMwflwZK4D8gQOphyl2dnHW4h1IgPiVMkULCfzQYwGDx8fcEVhUzGLzwvXYXYvf7hdQ2WrEun0ThHYgTkllNWXgh4mXTlDnc3dIS1YIXUWNscXU1yvTODztga%2FsHP6nn%2F9IYew6BhhgO%2Fh5H0TOxQ8bSb55lHCrb0pu89k0LMyNQ5LYgcBvMw0F704%2BsrNN8%2BrkbQFG8savHkTz7%2BoZU5IFqAgQFFkCP3ONT6FoxBxDp4fh6EiWnv3VViLNJnsdHD9%2BOC%2BnbENlIJ4jJ6MOCTNGNic0qGz872rdhc88qxcimKX34w4Z59%2FxmKpFoEvyVkUc7Z56EdkPmMVa50r%2B%2BMHYPcPtztFevWT0sM%2Fwti6CYdMKzomxbpaw3%2F30DoBGA0vv7w9LKTRi%2FuKPi9PGqUsXaAKlUy9enVShMqF3HSfJfQTOwfT427ont%2FC9qoKwvyy%2BFFJCDVve2LfBP4V%2BAfs9ZUUbjEP2YV31oUwnmrmrVB8jifE34B3TGx9u%2BAIBA4dyBQDXktyIlmWtujVHRbYRMssj5IeRi%2Bv36Y%2FMpmtDE%2BoblVmMjfUIoNKuU2%2B88pKfWJs9SqosOFv2ucU5oWHl1nWqfyS9QGoMOXTw8kGOqUBHZsOz%2FQSGXx6Rd5vwJ2T5GgGRR%2B%2BUSXKhC5WRMegQP4I0dryPSbYT2F4eerAfpwt%2BcsBERx%2BJC3rPu%2BNETMTFpxtjxc5KJYeXNTqjV61Id0XBxQQ%2BjGDa%2BUdrOvRO%2F%2BTg2oKf3xGwRTNU1qIp5rCckj%2B6tUx6IutBEJ5KlBMFFrTxn86jx5eLl6Fv0RDthv52Th773avDdUX5f%2FhK1D2la6wKfVE&X-Amz-Signature=cfff4020007d137d5f3bc9396c282406d766d0a63681a191812d38366c2814be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHMJOJ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBsSQFhfLJ%2BeAmofpIzLS42NC0OuSpTR6PAu%2Bo6OPhZ4AiEA%2FQMyVsv7xwC5f67eVhuVK8vZ4ZwTwFhdFHDP8fxKeiMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLV%2FBxxDw5c6yxKglCrcAyCOnYqeMLP8mcqVidcDnO4N6cbMwflwZK4D8gQOphyl2dnHW4h1IgPiVMkULCfzQYwGDx8fcEVhUzGLzwvXYXYvf7hdQ2WrEun0ThHYgTkllNWXgh4mXTlDnc3dIS1YIXUWNscXU1yvTODztga%2FsHP6nn%2F9IYew6BhhgO%2Fh5H0TOxQ8bSb55lHCrb0pu89k0LMyNQ5LYgcBvMw0F704%2BsrNN8%2BrkbQFG8savHkTz7%2BoZU5IFqAgQFFkCP3ONT6FoxBxDp4fh6EiWnv3VViLNJnsdHD9%2BOC%2BnbENlIJ4jJ6MOCTNGNic0qGz872rdhc88qxcimKX34w4Z59%2FxmKpFoEvyVkUc7Z56EdkPmMVa50r%2B%2BMHYPcPtztFevWT0sM%2Fwti6CYdMKzomxbpaw3%2F30DoBGA0vv7w9LKTRi%2FuKPi9PGqUsXaAKlUy9enVShMqF3HSfJfQTOwfT427ont%2FC9qoKwvyy%2BFFJCDVve2LfBP4V%2BAfs9ZUUbjEP2YV31oUwnmrmrVB8jifE34B3TGx9u%2BAIBA4dyBQDXktyIlmWtujVHRbYRMssj5IeRi%2Bv36Y%2FMpmtDE%2BoblVmMjfUIoNKuU2%2B88pKfWJs9SqosOFv2ucU5oWHl1nWqfyS9QGoMOXTw8kGOqUBHZsOz%2FQSGXx6Rd5vwJ2T5GgGRR%2B%2BUSXKhC5WRMegQP4I0dryPSbYT2F4eerAfpwt%2BcsBERx%2BJC3rPu%2BNETMTFpxtjxc5KJYeXNTqjV61Id0XBxQQ%2BjGDa%2BUdrOvRO%2F%2BTg2oKf3xGwRTNU1qIp5rCckj%2B6tUx6IutBEJ5KlBMFFrTxn86jx5eLl6Fv0RDthv52Th773avDdUX5f%2FhK1D2la6wKfVE&X-Amz-Signature=3c9d2bb989ec7fdaa608c42be75fe225a5563829bd270f06c81ebe254225e4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
