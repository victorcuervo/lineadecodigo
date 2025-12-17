---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CT73UVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUyIo3p2ejW64wcliN9LgLB88LSa%2F8N2c52v1hHXc54AiEAqb%2Bm9jcXwOkBIZmsvcIOzKEFTDLXWO2aDtP%2BXKa4oOUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDH1ayBzShZPHdXVboSrcA9PJC8sdGBKnAjZq9AZs%2BOv%2FNo5FyqS91C%2Fc4a0FutJYtleDT3aj5N1jCmYiuXXULTLneeUwg5eZ4VAOGLezoHENKA8mJ1QQjCx1AeDDR9KUAoY1bPQmgZ2ivqrGBAca20%2FdWltcwJzWaDru5zvzhbNk44%2B2r1UuQsRBS6eEcVdgiimu0BrqbPNnD2DRPcUFPcaCXJzzHxwopp%2BnTvH5%2FIVU2vjxOb4%2BImEDnDAOy4kTvkGHIgwW7df1SWw09sTVUl%2FcXsw3eTAN3UKNADnrk%2FofxpIt7k0L7BuWUWmbQAv8QzivfPnvh4lx1A7KkFMIO12u42g9BvAh2VkR0IXzg%2FtNr59%2BotMGElVfnGf6RyiyWsX%2FoDqJA1sMkV1PfFc4idMS7u3JhxUSA0kN%2BzwPchu%2FLDaSqc5YoWFclchoQ6C7zWPpFmH8nHnx%2FWBhW4mVTDoYEQsCtH%2F9N5Bsj%2BDO9aRSSICUhxJ%2BJvrZov9GdwgP1iGz%2Fgb%2FwBPkGU42Dh4BcdpclFHaCkex0WGqsbqmb7H2Drn80wutUuqIjruV54F7csp9tBuUGAYPl5WmNL7KiCsByR853bnShuCnyP884lI9bt3FlulNygzoZ0HXUWS1vHHHDW6jPHiW7Gn%2FMNbFisoGOqUBYdiPD0Poh85UXtD3d81nnz7qj2H5xKiWTsSjqB8m2vKsR%2BkOAW6Ya%2F1eEgs%2FMV%2FKmUMJ9zL99Xnru59wT3OLW%2B2RHY36SW4KcN5S7bpcZybhlFMyelUd%2FDrdJ0Uw1ZrNsHWRtLDbxMzSCnprbpjw2c%2FNkGlqnON172LB%2FBFrh0aiZNgs56iu81Do24URC4WmkXpvrSEYOcDSo3KrpmiWitZyUgzp&X-Amz-Signature=334e6a5cf9149bdd6844deffdad1b0a43b1450ef441c78c3272d520698ebcbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CT73UVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUyIo3p2ejW64wcliN9LgLB88LSa%2F8N2c52v1hHXc54AiEAqb%2Bm9jcXwOkBIZmsvcIOzKEFTDLXWO2aDtP%2BXKa4oOUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDH1ayBzShZPHdXVboSrcA9PJC8sdGBKnAjZq9AZs%2BOv%2FNo5FyqS91C%2Fc4a0FutJYtleDT3aj5N1jCmYiuXXULTLneeUwg5eZ4VAOGLezoHENKA8mJ1QQjCx1AeDDR9KUAoY1bPQmgZ2ivqrGBAca20%2FdWltcwJzWaDru5zvzhbNk44%2B2r1UuQsRBS6eEcVdgiimu0BrqbPNnD2DRPcUFPcaCXJzzHxwopp%2BnTvH5%2FIVU2vjxOb4%2BImEDnDAOy4kTvkGHIgwW7df1SWw09sTVUl%2FcXsw3eTAN3UKNADnrk%2FofxpIt7k0L7BuWUWmbQAv8QzivfPnvh4lx1A7KkFMIO12u42g9BvAh2VkR0IXzg%2FtNr59%2BotMGElVfnGf6RyiyWsX%2FoDqJA1sMkV1PfFc4idMS7u3JhxUSA0kN%2BzwPchu%2FLDaSqc5YoWFclchoQ6C7zWPpFmH8nHnx%2FWBhW4mVTDoYEQsCtH%2F9N5Bsj%2BDO9aRSSICUhxJ%2BJvrZov9GdwgP1iGz%2Fgb%2FwBPkGU42Dh4BcdpclFHaCkex0WGqsbqmb7H2Drn80wutUuqIjruV54F7csp9tBuUGAYPl5WmNL7KiCsByR853bnShuCnyP884lI9bt3FlulNygzoZ0HXUWS1vHHHDW6jPHiW7Gn%2FMNbFisoGOqUBYdiPD0Poh85UXtD3d81nnz7qj2H5xKiWTsSjqB8m2vKsR%2BkOAW6Ya%2F1eEgs%2FMV%2FKmUMJ9zL99Xnru59wT3OLW%2B2RHY36SW4KcN5S7bpcZybhlFMyelUd%2FDrdJ0Uw1ZrNsHWRtLDbxMzSCnprbpjw2c%2FNkGlqnON172LB%2FBFrh0aiZNgs56iu81Do24URC4WmkXpvrSEYOcDSo3KrpmiWitZyUgzp&X-Amz-Signature=7abdddd9c7511e4485a9437e484811d30ec0e82482c56399737c4f38caee9a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
