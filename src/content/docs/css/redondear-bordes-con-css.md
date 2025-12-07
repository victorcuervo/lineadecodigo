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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7FDZAF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErewb%2FB5mRMFKIYkm6ql40UG1R4tjB3vTkU5K0cyJB4AiEA2Nm6MehQmH%2FrNWaFtONyLswoqQxThMi3ITbvE%2FYw1zgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKm1WURSuW36XmPpzSrcA69o3F3JfEm5PMs2Dud40OzKRG89Jja%2FT1TrIe%2Fm0rOL2moOuFHMyqaAwL3cuGaLk%2Bn5DadJoezL2wlpFsTahrjLHORdvCbRkwGmwHPrvyPgVrSBZjFtDZ1nHEuig%2BXbcgZ2Oy05HCHX9%2FJ9y2mwYTiwr%2BpMyXxyspeS6BAUmGQLJVTSM3DIX2S%2BjCGV%2F2k9h6VGGckWTrIGbBFtdMEHZFNRfgTON1ubKITY7twZFjr8KYFbKlWHenWmawOD8a0wZs6sfGCkq6wjMP69P7wRbErbYj3FrMRnYG%2FWQ6Nd19u%2Bg8vSYTIDtASEChBevNEDby7qjByFLiWZGnTil8XMz6jJBqcQjrxPv1uoJFmhUElyN53bGuoxezxHguy5wpqfJJrXCf3fl6%2ByyfoydpuUoawDNw4B2evqiYnZoYrz%2Bu8kk9afW0Jic5aOkt7iar7QZOReNXWCK1UngK%2Bm%2FqbGSzaJo46nMmNWwZTkanUG3GIlFgbL0q5MUGgoalOCM%2FuRcSVExPlTTp6o24Zsp4XHyjF5wc2vu%2BO0jTLqVpvkacH64THeREbTaCFtcktTdekURvW%2Fo%2BMAzgHmez3xchp%2B%2FxZuq9PJqClvYC6RTqYQGkZuwLdR%2Fhr9tr%2BjLS5ZMOuh1MkGOqUBhHFCaHGr%2Fe%2Bl2KugSJUKUaz32qtXLY2j%2BFcykOZVql%2BLfx3x5Loeyq41b2V6Hl%2BHKrY1EjzKOPR2Re%2F%2F%2F4hPFoIfd4TqbuXHtgcKret2W9V%2FDd7909EMFZHyzYNiU48pbptjGIoc6wMks7SWhewSiduS6BM7cCvWx1oH%2B9DbWlIisqt2Lf%2FT0dOBOx0I6US73Qon6EnEvbCnka8HJ%2FO1uUpBK6bl&X-Amz-Signature=de0441f01f6cf8b2d302fe33b4433911e98695462dddd3daf4d5d7459ecf34da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX7FDZAF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErewb%2FB5mRMFKIYkm6ql40UG1R4tjB3vTkU5K0cyJB4AiEA2Nm6MehQmH%2FrNWaFtONyLswoqQxThMi3ITbvE%2FYw1zgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKm1WURSuW36XmPpzSrcA69o3F3JfEm5PMs2Dud40OzKRG89Jja%2FT1TrIe%2Fm0rOL2moOuFHMyqaAwL3cuGaLk%2Bn5DadJoezL2wlpFsTahrjLHORdvCbRkwGmwHPrvyPgVrSBZjFtDZ1nHEuig%2BXbcgZ2Oy05HCHX9%2FJ9y2mwYTiwr%2BpMyXxyspeS6BAUmGQLJVTSM3DIX2S%2BjCGV%2F2k9h6VGGckWTrIGbBFtdMEHZFNRfgTON1ubKITY7twZFjr8KYFbKlWHenWmawOD8a0wZs6sfGCkq6wjMP69P7wRbErbYj3FrMRnYG%2FWQ6Nd19u%2Bg8vSYTIDtASEChBevNEDby7qjByFLiWZGnTil8XMz6jJBqcQjrxPv1uoJFmhUElyN53bGuoxezxHguy5wpqfJJrXCf3fl6%2ByyfoydpuUoawDNw4B2evqiYnZoYrz%2Bu8kk9afW0Jic5aOkt7iar7QZOReNXWCK1UngK%2Bm%2FqbGSzaJo46nMmNWwZTkanUG3GIlFgbL0q5MUGgoalOCM%2FuRcSVExPlTTp6o24Zsp4XHyjF5wc2vu%2BO0jTLqVpvkacH64THeREbTaCFtcktTdekURvW%2Fo%2BMAzgHmez3xchp%2B%2FxZuq9PJqClvYC6RTqYQGkZuwLdR%2Fhr9tr%2BjLS5ZMOuh1MkGOqUBhHFCaHGr%2Fe%2Bl2KugSJUKUaz32qtXLY2j%2BFcykOZVql%2BLfx3x5Loeyq41b2V6Hl%2BHKrY1EjzKOPR2Re%2F%2F%2F4hPFoIfd4TqbuXHtgcKret2W9V%2FDd7909EMFZHyzYNiU48pbptjGIoc6wMks7SWhewSiduS6BM7cCvWx1oH%2B9DbWlIisqt2Lf%2FT0dOBOx0I6US73Qon6EnEvbCnka8HJ%2FO1uUpBK6bl&X-Amz-Signature=9a097db6215d0a39b98935b5453634e3ce6edf92b85bf3b788458589f90a76f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
