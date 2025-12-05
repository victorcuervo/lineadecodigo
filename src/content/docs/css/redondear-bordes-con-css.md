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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635MLKFN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEK7vF6xyAf3PWyZgvbi6NrTfSya2Br5smD7cOvkagzRAiARgf4t4UpgjtzEuBIDHF409E5FRKb0GG9%2BHcxJBB6puyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMp1u83bp3%2BaRtl1C%2BKtwDRmYUPcElABV9zFzxpIbk4GtSZGVmsoR%2BZ9n1X72Sts2%2BJVNltdh%2FivdkQU12JfT8oO1%2BjUTjqKATG6I3YlhYGrSAKbqOW0FKlyg7Ln9atfcH1z1F8J4Ex80Yd897Q2b3L1ER1x%2BFPexEK75RN%2BSd6sSCoKl12sYlORnpsW0Ucig%2BjDoz8PRkLaxU0w42TNpefii1YOahJ%2Fbo%2FxMldc94wq11%2B79J%2Fp%2FxwncFcTfAohUwpfMkfnGBiAjCP9I%2BB9Ci9h3MohTaIU%2BAwazXuiynZIzRPa%2FcUUn2E5LAcZDoIOxcttGCYm%2BkGw2VN%2Bq3O2pA06fdARLsGjsuF%2FQfiOddwNCQXda%2BLNgYILJSzeplOKPd6BVLKzegftl3IBG%2BEd2%2BnuwXdH2Rbdc8xqsVhFlbnuXQGeA%2BaMER7B5T7%2FSugp%2FA%2Fs%2BYAGJpAGKTo7fFMROCto%2Bln12lnw%2BMh4oc4yrQA1ZrJJ1b9Xfn%2B0TfwRT51TT9WFFxMefjO%2F%2BXE4PhqJ9CSgfqV6iaY9Mi9Xm2Q%2F7KrFAwBNkR6mD%2FR%2FgYqwRBWqH3zUDqPZVzqcqNSAfr4QueCkoRjBxrpgMoIZrmyT%2FC7KfIXQx%2FiWVxH46z734CemEMbPlYaFbsg%2Ffx9jMw56rJyQY6pgEy7bjM2O59KIKnUtXRe5u3%2FOwvQg2md8LNK5FHXmT9uxnGtg4JK%2BObV%2FyV5GFYW%2BzhlrhvVmk02uzRwTX3%2BPhY97gqoVQKXZuCHxf9%2FAdbE8M9SjCMnPiBBa%2B9pESfOMrCBaWzomskFalRbekWMD09UQLevXkgp9ZtXA3IvK4VmDo4Pxk0ScDmxcaIA5rHCEnVPYC9kLKnkkMeIG3zcNzTdF65TJNa&X-Amz-Signature=39371cadc60c1cdb06c116f44a319193211a0285194130d9f564aa8b6ede4e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466635MLKFN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEK7vF6xyAf3PWyZgvbi6NrTfSya2Br5smD7cOvkagzRAiARgf4t4UpgjtzEuBIDHF409E5FRKb0GG9%2BHcxJBB6puyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMp1u83bp3%2BaRtl1C%2BKtwDRmYUPcElABV9zFzxpIbk4GtSZGVmsoR%2BZ9n1X72Sts2%2BJVNltdh%2FivdkQU12JfT8oO1%2BjUTjqKATG6I3YlhYGrSAKbqOW0FKlyg7Ln9atfcH1z1F8J4Ex80Yd897Q2b3L1ER1x%2BFPexEK75RN%2BSd6sSCoKl12sYlORnpsW0Ucig%2BjDoz8PRkLaxU0w42TNpefii1YOahJ%2Fbo%2FxMldc94wq11%2B79J%2Fp%2FxwncFcTfAohUwpfMkfnGBiAjCP9I%2BB9Ci9h3MohTaIU%2BAwazXuiynZIzRPa%2FcUUn2E5LAcZDoIOxcttGCYm%2BkGw2VN%2Bq3O2pA06fdARLsGjsuF%2FQfiOddwNCQXda%2BLNgYILJSzeplOKPd6BVLKzegftl3IBG%2BEd2%2BnuwXdH2Rbdc8xqsVhFlbnuXQGeA%2BaMER7B5T7%2FSugp%2FA%2Fs%2BYAGJpAGKTo7fFMROCto%2Bln12lnw%2BMh4oc4yrQA1ZrJJ1b9Xfn%2B0TfwRT51TT9WFFxMefjO%2F%2BXE4PhqJ9CSgfqV6iaY9Mi9Xm2Q%2F7KrFAwBNkR6mD%2FR%2FgYqwRBWqH3zUDqPZVzqcqNSAfr4QueCkoRjBxrpgMoIZrmyT%2FC7KfIXQx%2FiWVxH46z734CemEMbPlYaFbsg%2Ffx9jMw56rJyQY6pgEy7bjM2O59KIKnUtXRe5u3%2FOwvQg2md8LNK5FHXmT9uxnGtg4JK%2BObV%2FyV5GFYW%2BzhlrhvVmk02uzRwTX3%2BPhY97gqoVQKXZuCHxf9%2FAdbE8M9SjCMnPiBBa%2B9pESfOMrCBaWzomskFalRbekWMD09UQLevXkgp9ZtXA3IvK4VmDo4Pxk0ScDmxcaIA5rHCEnVPYC9kLKnkkMeIG3zcNzTdF65TJNa&X-Amz-Signature=c74db893ea9c539cb46ef211ac9f20199d2b9a3cd8659ad9d6c625c33252be0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
