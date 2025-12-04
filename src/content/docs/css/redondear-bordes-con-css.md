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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SEHXFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQChJ6Zzl6QS%2FxwJCuo5p9CVjuva41WMbMN9nwYh%2FCNGYgIgf3%2FyKj%2Ba8GaRgVelym1ZfB%2BHV45GsiCNJ6lrzg4h1H4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDE9SerSQGI1Evu%2FaiSrcA9luT5GbhVrJ%2FPbumHC3Snevvuo7qNuJWXp7f5qeSB%2FT%2BzzzKx8kKllqiD5rrJpnSbuzCK5s%2Fgp25h67G%2F6OXZvPjD%2FMmS6ZA6clhNF4FjVpuhKwmNGTJ8wswXDDQfvv1cs16CW2LQsV1VMNI5zzJhYSpgmq4q14GZeCJodtnpcQpwIRUY%2Ba0DPUqg22eOC2FSiVNSnmXWcIqiCCAtPU5ydJcHRJgYl65sHx12hl6UnKmYBvw4LktFm3qY%2FFkL98vvvkggP3pwSX1sgm3cXzyqp71qsLIDtb8ae6Z%2BgJonJpQhlIuz2htkT27qtlV1OkjTTCxRcYtvZJPLgDAkueiLH8o2rUSLdORBVTUQHuii8rnrvaT1S8f6Pbqnr2cJ16nYrY6Q%2FD%2BC1tAOo7dbntfCE3tCdITHsTJBUmU10tbLraiSsGKlB21jzofDWeUUNW8IJUIVjiBixBwLIqJEcuq8bXyti9Bke%2F7gqAEWDK7YcmdmmmlS5e16y1YguvPcPzY4NXETW6Y5QI0LMRFxvAA%2FfMJAC%2BTqosoppQU9p2Ogs0YAEwPKRKQ9rTiRab2QSpFtRfhI3%2B7QS4M6MxqC3MGcnb6vSsXFFnKkwDf2v0LWpkQh35tANxboL0ubD2MLGVw8kGOqUBrBZ3L79SKc9kNmY2tUcTePXI98lZfwQrMqx2sjMCBB0oQtw%2FzUTGypHl8pBNKuekQ0a2J6VIvesNINFsy6j9NIlRfrh7xeNkblyaDoSEZzMr0sdr9QLxVhCmnjA9pnDRxjxgsUPY93oqIVqDTdGeSjiAYvAu59XIGFTQQYjS0tuQH4tIWhgtfVfMmilqfo%2F%2Bt9wV4VbJAAjgYPWC9eCW%2FDwT1jVA&X-Amz-Signature=062adf5fbad4a9d46e419e530496db531e5a0d8505aafcaf44d41f82e6a6dc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SEHXFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQChJ6Zzl6QS%2FxwJCuo5p9CVjuva41WMbMN9nwYh%2FCNGYgIgf3%2FyKj%2Ba8GaRgVelym1ZfB%2BHV45GsiCNJ6lrzg4h1H4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDE9SerSQGI1Evu%2FaiSrcA9luT5GbhVrJ%2FPbumHC3Snevvuo7qNuJWXp7f5qeSB%2FT%2BzzzKx8kKllqiD5rrJpnSbuzCK5s%2Fgp25h67G%2F6OXZvPjD%2FMmS6ZA6clhNF4FjVpuhKwmNGTJ8wswXDDQfvv1cs16CW2LQsV1VMNI5zzJhYSpgmq4q14GZeCJodtnpcQpwIRUY%2Ba0DPUqg22eOC2FSiVNSnmXWcIqiCCAtPU5ydJcHRJgYl65sHx12hl6UnKmYBvw4LktFm3qY%2FFkL98vvvkggP3pwSX1sgm3cXzyqp71qsLIDtb8ae6Z%2BgJonJpQhlIuz2htkT27qtlV1OkjTTCxRcYtvZJPLgDAkueiLH8o2rUSLdORBVTUQHuii8rnrvaT1S8f6Pbqnr2cJ16nYrY6Q%2FD%2BC1tAOo7dbntfCE3tCdITHsTJBUmU10tbLraiSsGKlB21jzofDWeUUNW8IJUIVjiBixBwLIqJEcuq8bXyti9Bke%2F7gqAEWDK7YcmdmmmlS5e16y1YguvPcPzY4NXETW6Y5QI0LMRFxvAA%2FfMJAC%2BTqosoppQU9p2Ogs0YAEwPKRKQ9rTiRab2QSpFtRfhI3%2B7QS4M6MxqC3MGcnb6vSsXFFnKkwDf2v0LWpkQh35tANxboL0ubD2MLGVw8kGOqUBrBZ3L79SKc9kNmY2tUcTePXI98lZfwQrMqx2sjMCBB0oQtw%2FzUTGypHl8pBNKuekQ0a2J6VIvesNINFsy6j9NIlRfrh7xeNkblyaDoSEZzMr0sdr9QLxVhCmnjA9pnDRxjxgsUPY93oqIVqDTdGeSjiAYvAu59XIGFTQQYjS0tuQH4tIWhgtfVfMmilqfo%2F%2Bt9wV4VbJAAjgYPWC9eCW%2FDwT1jVA&X-Amz-Signature=f136198e202281c2a6b73ee8b83bee2cbba1491f95bb1c0eadf493b0cc87225f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
