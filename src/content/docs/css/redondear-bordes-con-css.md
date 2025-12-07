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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S7UCRH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgBVyMzx%2F2r0riEg3QQ1chUWxeFRxfOsf7FbvXt7egQAiEAxSdVANkKKqW0dP9PU5oNEn3pr%2FVl%2FsJvwWdHmvSQyZkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbst32iplTxPpv3%2BCrcAySgJV9wpnfQS0JsfMLLC5Kgip%2Fx%2Bmg09QZ4fVn9SdM1RS7wwqmGzqkHio5f7z%2FvXYK9V7Iy1he9ijunHTUVDy2II69hZF0YTq9IMw27aALesDBH4hZOeJojCyOe%2BK%2FOb5NWkvjlI2XCPKZTF7SskvFYbuX%2FQ1BFOLAe7Wrc11M0IS9Wl8kyLiiN4HtYJmXISHHZvOfsFmwZJwLfnc1kUxFFHt5PEjOh4kguDkoX8b0v%2FQZz4EQiphGcqSD%2Fam8pV7Yt30uX3HdsvdzVbyTVPEO3ZEU68Gopi0KuYX3fToUxA85KmuO8AAUt1xgIST7K1gD8MUF8yepbcencOOlERlSdF8zj9NnuXzOIxUGgLX0bYoOaKwuVs8z%2FvMwO69EEUnUOSMe6zJFiaQIE4nxo9KRaEBYwb0MtvXy%2BV%2BxHGj5Noojlo1dJjTrqXppA%2BIX1CIKZAYEw4UQxsIbMN79rDLPwK4%2FxgO1D6kf2yq0A%2ByVeEhs5aBFTIFwF5vTWAfJbZPZsCeWtTny%2BYVbff1sOx9Foh0wpajrbjK2A%2BFde97c9OtQARnF%2BE0fiNpoRrLHTYmRdfgJaQQIp3DTaSMdYJOij7L4sPG7uHtVaPPhdRsQSwe34R4wf7FoY%2FATYMITH18kGOqUBPYxLK8TUlSX%2BB5TeHpTwi%2FwIVxRqEDITkTjulLzMdTUXmSWPAMOEcP6vpvBOXzzHVPVDg%2FD%2Bp8bTwzLD0aP%2B8rsQLuDVNFu8MfnFUAuCwQxR%2BXFbtEsqLCpFjos9%2FpIjQqrLRPBc66UhR8yPH2ClJozSJJv2V%2B%2BkdpC9oJD6U6NJeOlwM3klmiimKyJV%2BIlSMqK4%2B7xN5fzSrTEuB4U%2FslmOk8%2Fj&X-Amz-Signature=166271451c071e26dceea6842d45b76bf7272fb4d5738092913333399eb16ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S7UCRH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgBVyMzx%2F2r0riEg3QQ1chUWxeFRxfOsf7FbvXt7egQAiEAxSdVANkKKqW0dP9PU5oNEn3pr%2FVl%2FsJvwWdHmvSQyZkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbst32iplTxPpv3%2BCrcAySgJV9wpnfQS0JsfMLLC5Kgip%2Fx%2Bmg09QZ4fVn9SdM1RS7wwqmGzqkHio5f7z%2FvXYK9V7Iy1he9ijunHTUVDy2II69hZF0YTq9IMw27aALesDBH4hZOeJojCyOe%2BK%2FOb5NWkvjlI2XCPKZTF7SskvFYbuX%2FQ1BFOLAe7Wrc11M0IS9Wl8kyLiiN4HtYJmXISHHZvOfsFmwZJwLfnc1kUxFFHt5PEjOh4kguDkoX8b0v%2FQZz4EQiphGcqSD%2Fam8pV7Yt30uX3HdsvdzVbyTVPEO3ZEU68Gopi0KuYX3fToUxA85KmuO8AAUt1xgIST7K1gD8MUF8yepbcencOOlERlSdF8zj9NnuXzOIxUGgLX0bYoOaKwuVs8z%2FvMwO69EEUnUOSMe6zJFiaQIE4nxo9KRaEBYwb0MtvXy%2BV%2BxHGj5Noojlo1dJjTrqXppA%2BIX1CIKZAYEw4UQxsIbMN79rDLPwK4%2FxgO1D6kf2yq0A%2ByVeEhs5aBFTIFwF5vTWAfJbZPZsCeWtTny%2BYVbff1sOx9Foh0wpajrbjK2A%2BFde97c9OtQARnF%2BE0fiNpoRrLHTYmRdfgJaQQIp3DTaSMdYJOij7L4sPG7uHtVaPPhdRsQSwe34R4wf7FoY%2FATYMITH18kGOqUBPYxLK8TUlSX%2BB5TeHpTwi%2FwIVxRqEDITkTjulLzMdTUXmSWPAMOEcP6vpvBOXzzHVPVDg%2FD%2Bp8bTwzLD0aP%2B8rsQLuDVNFu8MfnFUAuCwQxR%2BXFbtEsqLCpFjos9%2FpIjQqrLRPBc66UhR8yPH2ClJozSJJv2V%2B%2BkdpC9oJD6U6NJeOlwM3klmiimKyJV%2BIlSMqK4%2B7xN5fzSrTEuB4U%2FslmOk8%2Fj&X-Amz-Signature=bc61c5d6d30293b096bda5784add22e69b7be87ea0355577fc4de5eaa0bb0d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
