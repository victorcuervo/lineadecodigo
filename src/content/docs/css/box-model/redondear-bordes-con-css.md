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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV5MS3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB5p5zsBleuyTadsbl4Egme6Fb3YPxNX8MPBxt1shWxAiEA0Xs10UOigZCkVMF9MbOyyVWvC3AnrLEaDQMe2%2FzGIUIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLAogEJXYOaKrn1tgircA4ChQknoB%2FveFyoZVinAll6aAI1ppkrSoTCTDoXfX%2FeZq9Sed6myN2gHwBF3vGm1269hc8G4ZQLhyX2ewgLcx%2F%2B%2Bzwl3m70LDUOvMppHo%2BNlksOJp5oQsss6vYrzx5R%2BTQb1b%2FWkH9HdEZYwqT5Ha0czDwB4Ud3rjp2Zpab0h49q1bUIgL4kADY5U%2F1roAO6t2JC14uyXoFIjBHzs6CZ0namSaf7EmTyy%2FfjI6GeVO%2FXR0HhAveGQteJWIGxUmwQzIMEZUWCFj9J9nYEAvzl1hsm3wtS51IBY8MeK5cHb%2FB6m7u0KTs%2FCrPK0RnHYTwYIAyutbygev%2FsjTKy%2Fjjq0KLihN7GtF5fGbIgSbyjDjaYdS8FCIMuKxA3cpKVkpj65liO71Twh%2FU61VJ32UmNn9VA4UPduroH%2FJ%2BG%2ByKnk%2B80iky%2BYrojhWtPZXFutw4LS9AZfH1Omo89kes%2Fpen%2BkXQav0lU3pqt2fHRMLMuZw8ReF9HVeaIgvOsF5re%2BPTl6ta3BWywWz%2FNJCXJ4etXmyXfEfrCN7K5%2F9u5Eyz3nNbsFiHOawpSHLBc%2BEc2qHswd7W4C1voq0MhaUtyO1Kn1ye6SAMkEBp7R4VJ0J0Vllbqr1NCLOZVaUDn2iIYMILRicoGOqUBVntPwTdGdJmt%2Fmt6qEWGcgFjB%2BRBMo6UW1D1rAHKNF0DEoxsU9G9EjTkZRMKN3mD626zb2HQwWW3Dl3CDaJoA2tzI1l9mV8dC9Z35VndRSSJuPqjGZX7hmi66FWZoZhTcnPlypXsQLXMV9qL4LRjOFS1va3zfoj5cUp1hk9quMBai2L3itBT%2FO4BZDlrkTVm2f4Mt3tWfiLigZMJ3OVb2f3Yspmn&X-Amz-Signature=5b20b6b1f4079e7cf08aa503455c415fb81f6c827385e0f212b016ffea1d8452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV5MS3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB5p5zsBleuyTadsbl4Egme6Fb3YPxNX8MPBxt1shWxAiEA0Xs10UOigZCkVMF9MbOyyVWvC3AnrLEaDQMe2%2FzGIUIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLAogEJXYOaKrn1tgircA4ChQknoB%2FveFyoZVinAll6aAI1ppkrSoTCTDoXfX%2FeZq9Sed6myN2gHwBF3vGm1269hc8G4ZQLhyX2ewgLcx%2F%2B%2Bzwl3m70LDUOvMppHo%2BNlksOJp5oQsss6vYrzx5R%2BTQb1b%2FWkH9HdEZYwqT5Ha0czDwB4Ud3rjp2Zpab0h49q1bUIgL4kADY5U%2F1roAO6t2JC14uyXoFIjBHzs6CZ0namSaf7EmTyy%2FfjI6GeVO%2FXR0HhAveGQteJWIGxUmwQzIMEZUWCFj9J9nYEAvzl1hsm3wtS51IBY8MeK5cHb%2FB6m7u0KTs%2FCrPK0RnHYTwYIAyutbygev%2FsjTKy%2Fjjq0KLihN7GtF5fGbIgSbyjDjaYdS8FCIMuKxA3cpKVkpj65liO71Twh%2FU61VJ32UmNn9VA4UPduroH%2FJ%2BG%2ByKnk%2B80iky%2BYrojhWtPZXFutw4LS9AZfH1Omo89kes%2Fpen%2BkXQav0lU3pqt2fHRMLMuZw8ReF9HVeaIgvOsF5re%2BPTl6ta3BWywWz%2FNJCXJ4etXmyXfEfrCN7K5%2F9u5Eyz3nNbsFiHOawpSHLBc%2BEc2qHswd7W4C1voq0MhaUtyO1Kn1ye6SAMkEBp7R4VJ0J0Vllbqr1NCLOZVaUDn2iIYMILRicoGOqUBVntPwTdGdJmt%2Fmt6qEWGcgFjB%2BRBMo6UW1D1rAHKNF0DEoxsU9G9EjTkZRMKN3mD626zb2HQwWW3Dl3CDaJoA2tzI1l9mV8dC9Z35VndRSSJuPqjGZX7hmi66FWZoZhTcnPlypXsQLXMV9qL4LRjOFS1va3zfoj5cUp1hk9quMBai2L3itBT%2FO4BZDlrkTVm2f4Mt3tWfiLigZMJ3OVb2f3Yspmn&X-Amz-Signature=e0fc00aedf42879a6abbb651908102f2decf928e0986d4ebc99a6e2b4da33329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
