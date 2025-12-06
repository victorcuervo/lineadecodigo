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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIGEMP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAucUkBDMW6Qb%2BZL7cwRJvf9oauLMmHb%2FXGrbRCLRWI4AiEAhvlknxk8BDpHoF1Kz3XcRqiin3FMrWkCNicZk06jVl0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEn837eM2qSGKWh3cCrcA2YRdqeELg2%2B5b9fRq0U%2Fzfk90d21SG8MoAIxOMzSbF9ee5mvTGYwJIbkeH2R1h0JiH9AG3UKqUKoZfDYbM2JPsra%2BE9GrkcG%2BbvHoRR9qAcLQudBgwAA%2FQjO5nZImSFIFXFyeXjc8EgEuxPWZQTC61WuyuRtHU3tRaw4Qj1m%2BXmZfOktJBch4%2BJ%2BrawWCkQRM5JZZn%2Bt9H%2Fl%2BMCyV3%2Foim%2FknKGuv7if2zXuLQ58dZQuuLDAcHPzVtAdwKMkXlMBBSPa6DEg%2FtZievvRdpHcbzrnSFwvijGCan4Jis2mPKFVCVREML5KXqLoDFaGT9dA%2BYtS2m4lYErHAn0%2FH3mws37VwsJ5Pc1q1kXiw02DhhPd6ukhpEYnCx1g4RCbtAZyIB2AGUaIhVv%2FV3f9RCK7zdBgLN2aHLFPyPQJvqD2yHbim4yoqpYwiTRqhnkOl1EF8Stf96K0hb1BGBmxbc8P%2B2SME1T%2B%2FIT0Evw61FpL7DSL81nnm6k%2FHNEkwt1LPsw8UTEumErVFDaCvx%2BclpvMOxeqw0qGMDjluaHxZvPYXbTyvdLS1LwPmNWbtcOyGx0T%2FF9qlIJYJG%2B9PIQvG3Aza3fxygiVhGVsQOBeHZm%2FcGf9A4AG2WkKICq6lnQMIDT0skGOqUBuZ414%2Fz1AHbXzjNccsEz%2F295rsIEniv9YtNS0xlYAYbngUXDv28T4mw7pk2kjz0ayBa5wAfLkXUzOgkqhFbF2CkQ2SlZnX8f2g6qvrlGGX818S5%2Fwkz3yIt8KTlHsY7pzvt3aiHF5oYTvevfHsbETY%2BU%2FQ6Wn8jsA0e6l4BxvJ59OvGV2xTNHnubxn%2BMYuRE7eEl2nfIKnY3VfGEmUZxSDSCFYOo&X-Amz-Signature=3391ab7c6f36fa67e1d6a9c46440d885b3ff0a432a8614a592277544f97a3066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XIGEMP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAucUkBDMW6Qb%2BZL7cwRJvf9oauLMmHb%2FXGrbRCLRWI4AiEAhvlknxk8BDpHoF1Kz3XcRqiin3FMrWkCNicZk06jVl0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEn837eM2qSGKWh3cCrcA2YRdqeELg2%2B5b9fRq0U%2Fzfk90d21SG8MoAIxOMzSbF9ee5mvTGYwJIbkeH2R1h0JiH9AG3UKqUKoZfDYbM2JPsra%2BE9GrkcG%2BbvHoRR9qAcLQudBgwAA%2FQjO5nZImSFIFXFyeXjc8EgEuxPWZQTC61WuyuRtHU3tRaw4Qj1m%2BXmZfOktJBch4%2BJ%2BrawWCkQRM5JZZn%2Bt9H%2Fl%2BMCyV3%2Foim%2FknKGuv7if2zXuLQ58dZQuuLDAcHPzVtAdwKMkXlMBBSPa6DEg%2FtZievvRdpHcbzrnSFwvijGCan4Jis2mPKFVCVREML5KXqLoDFaGT9dA%2BYtS2m4lYErHAn0%2FH3mws37VwsJ5Pc1q1kXiw02DhhPd6ukhpEYnCx1g4RCbtAZyIB2AGUaIhVv%2FV3f9RCK7zdBgLN2aHLFPyPQJvqD2yHbim4yoqpYwiTRqhnkOl1EF8Stf96K0hb1BGBmxbc8P%2B2SME1T%2B%2FIT0Evw61FpL7DSL81nnm6k%2FHNEkwt1LPsw8UTEumErVFDaCvx%2BclpvMOxeqw0qGMDjluaHxZvPYXbTyvdLS1LwPmNWbtcOyGx0T%2FF9qlIJYJG%2B9PIQvG3Aza3fxygiVhGVsQOBeHZm%2FcGf9A4AG2WkKICq6lnQMIDT0skGOqUBuZ414%2Fz1AHbXzjNccsEz%2F295rsIEniv9YtNS0xlYAYbngUXDv28T4mw7pk2kjz0ayBa5wAfLkXUzOgkqhFbF2CkQ2SlZnX8f2g6qvrlGGX818S5%2Fwkz3yIt8KTlHsY7pzvt3aiHF5oYTvevfHsbETY%2BU%2FQ6Wn8jsA0e6l4BxvJ59OvGV2xTNHnubxn%2BMYuRE7eEl2nfIKnY3VfGEmUZxSDSCFYOo&X-Amz-Signature=b365a8e23061e7ab641c25ec45ba340c7cb7916076c60e3da641e7f86ae9267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
