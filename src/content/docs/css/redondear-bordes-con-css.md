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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPZHIXH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGgmWgpp0Ha6cYfMk2wT7I0zI9mRHwfTcfGtpcE5ThciAiEA4%2BET2mM1Vc2uLkfJ%2BJ5HGqvbJdGrCWpwVpPMIIwQV4Mq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAJ2hm2PLIRKNe%2FyHircA%2BM0o%2FEIvVNjQOMKBaro6bozVSNjNizEg7lxoPScIcnxf8tNSXHLM2bcvKgfSX4XG%2FkkHmHFLiSz8RTnKW9gl2x6w38%2BhQIcBnR8RKmqppMASZb7bQFVkZ3C%2FkvXgRdvFHkxt%2BStCQ7mSYmnheiN0aFcqpkYuYJqOG%2BUAELK4GIbSGSrsI563veAwl%2BfetXA2uUhgi5FLmNWvkPspb%2Bt2zmtvF657bMvohfzXyd73YcEMiKujTMCm5cr0h2DkiV58bM2hmVtDfA8CsOA4OqKS8W0Vumy%2Bv5slQFgSung6He1EgSkttMda4a2yf9q9GYbjYqV8YCeVRKy5eIFVQkcST1FIVhM2Q5QFgFA67sSb3i%2FGDfg6%2BqBdBwu4O1mqAMFmlRopP9jwbyHUlTiqWeOKSO%2F1%2B76zE66SGZFo7H%2By1m2yDvbO2hAthZJ1bpMy0caQHa6rsh0JgIopcFmm%2Bj5OlLeNM0S1j9NgZjiPhq0jnLbe2s3ZhHRL5kFGUYr7LfTk2ViVKjwzo7wbFg2itQTSaWZSevxCpgmUKxbYe%2B0k8HZ6pDLCZMdutQlYISlyb3jd7q4boI%2FXSX0gHvrE55%2FotAMWkPZyGuf5r0TJxCfXNQIkuc2uSpeSbxY1RLuMMzzw8kGOqUBGLNHhIeRzfdMt1RemGGLwGoP41hrLUzAJK%2BO4UPTv%2Bfa6D8tUJXFhwQ%2B5PByfAKVANh4Nh07Hfzjf9mIMp0gtdtSgnRO3IP7QclKyYSBZ5%2B7ChFj1I3H3ryxL112s32JM6VLIIecHWU8JIhpvGwJkh97v9XbC4UnFw2ngseCxvkLt6X%2FZFX9bKasyhziR8WVEOLLhbnmvxugjnFW4NnOTh2KbZUz&X-Amz-Signature=f4aadb32475be07e37adef2c102b6bda695be0de374e085e256d6cb3eb68493f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TPZHIXH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGgmWgpp0Ha6cYfMk2wT7I0zI9mRHwfTcfGtpcE5ThciAiEA4%2BET2mM1Vc2uLkfJ%2BJ5HGqvbJdGrCWpwVpPMIIwQV4Mq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAJ2hm2PLIRKNe%2FyHircA%2BM0o%2FEIvVNjQOMKBaro6bozVSNjNizEg7lxoPScIcnxf8tNSXHLM2bcvKgfSX4XG%2FkkHmHFLiSz8RTnKW9gl2x6w38%2BhQIcBnR8RKmqppMASZb7bQFVkZ3C%2FkvXgRdvFHkxt%2BStCQ7mSYmnheiN0aFcqpkYuYJqOG%2BUAELK4GIbSGSrsI563veAwl%2BfetXA2uUhgi5FLmNWvkPspb%2Bt2zmtvF657bMvohfzXyd73YcEMiKujTMCm5cr0h2DkiV58bM2hmVtDfA8CsOA4OqKS8W0Vumy%2Bv5slQFgSung6He1EgSkttMda4a2yf9q9GYbjYqV8YCeVRKy5eIFVQkcST1FIVhM2Q5QFgFA67sSb3i%2FGDfg6%2BqBdBwu4O1mqAMFmlRopP9jwbyHUlTiqWeOKSO%2F1%2B76zE66SGZFo7H%2By1m2yDvbO2hAthZJ1bpMy0caQHa6rsh0JgIopcFmm%2Bj5OlLeNM0S1j9NgZjiPhq0jnLbe2s3ZhHRL5kFGUYr7LfTk2ViVKjwzo7wbFg2itQTSaWZSevxCpgmUKxbYe%2B0k8HZ6pDLCZMdutQlYISlyb3jd7q4boI%2FXSX0gHvrE55%2FotAMWkPZyGuf5r0TJxCfXNQIkuc2uSpeSbxY1RLuMMzzw8kGOqUBGLNHhIeRzfdMt1RemGGLwGoP41hrLUzAJK%2BO4UPTv%2Bfa6D8tUJXFhwQ%2B5PByfAKVANh4Nh07Hfzjf9mIMp0gtdtSgnRO3IP7QclKyYSBZ5%2B7ChFj1I3H3ryxL112s32JM6VLIIecHWU8JIhpvGwJkh97v9XbC4UnFw2ngseCxvkLt6X%2FZFX9bKasyhziR8WVEOLLhbnmvxugjnFW4NnOTh2KbZUz&X-Amz-Signature=98ac3f73b97e6eaeaf7ad17a92f51e502b0f217e7187aa428952c243b58f8d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
