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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ5NXJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNda8Bchp2wa3PyXUXja%2FdzQ0xPNFE5ekvgjA15XS5awIgQ1MlvxJd1LCIWrT8SfPTknkEjYf0cUrU%2BDZIy6cmyvYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6Id26wjF6AghQXXSrcAyqrokTUaSzfEFm20jxtkTHGPmfddYK%2F0schiWLspj1HHDP0Ia5OpxdMEmKd7uu2oxrIVrdUo6CeZTHwBZ3CHjyX2ZDvhQTEN5eYMaVDAPkdLae33iRQE7H1jp5U3EebpU5vrxsit5Y8ZbWaO89Vhxw21ZfjoC3rdwNpGtCOvT0zAEz4N3uCx98d6%2BWhN9XIjtrY8CZRYy%2BLN7HiY9G7V89iFN1HURZrquHa3WAROpPEwRTu5%2BfKUF4N3eXiQKDBeT7QcQb1sfrYKDOepw9R8IlcN5LZVBQ4XwXM2fDfoRiUhvo%2BlfmhmIt6sShgpO8o13wlKFH4oC3JhZLFaq35AhtRwG%2F3dlsC9Gy2mzkGSR3ymxGEYDaBRfh2rlX8EdqTnNFcfKQdoG2E3O0kjurux76%2FzDkUp1VkLdw9e7uCl%2FBF%2Bk3f0O9k69%2BcdZCc0Izy5PlxaAekX1BvaY8Nqk3pnrOx4Mx6qjWDywsGupddjkv5vXcrX9ao14N2J06RgtyVGvuJfoEtrezDzwnbuJ%2B%2Brn9TpzwZHVbFeu7Srh7O65fz2QpRwGvzUttf3Bn2%2F9V%2F3y1Jy01blmc%2BgRNq%2FjYcHCkNLFszsWi2%2FWISl%2FYG6dFFWidfF7EobceSR7L6MI6Q28kGOqUB72%2FqXup1gl69Ta4u0EPCpoqKvclMSc2gvcBJWoKKha3esD6PQ7YDfjWoktbdJLCmChQpRS7iUPT1sB8aAaumkX4Q8q38rrorm6UGSwtfmf5I8SjFcH4XR3DmNoVX%2FoOwW5p9wDwcAUi%2BkRCKIOng4FRMZB26ja2d7jhEgqFx4zqUSyZhrG9hKzoJGS0PtVRWrBereOvJC%2B9oru10LEUOA1Xe6qTm&X-Amz-Signature=0f7aa4741ec0f1bf5748f7018c4542c6b949ce840dfe98819831be3ca1310541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ5NXJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNda8Bchp2wa3PyXUXja%2FdzQ0xPNFE5ekvgjA15XS5awIgQ1MlvxJd1LCIWrT8SfPTknkEjYf0cUrU%2BDZIy6cmyvYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6Id26wjF6AghQXXSrcAyqrokTUaSzfEFm20jxtkTHGPmfddYK%2F0schiWLspj1HHDP0Ia5OpxdMEmKd7uu2oxrIVrdUo6CeZTHwBZ3CHjyX2ZDvhQTEN5eYMaVDAPkdLae33iRQE7H1jp5U3EebpU5vrxsit5Y8ZbWaO89Vhxw21ZfjoC3rdwNpGtCOvT0zAEz4N3uCx98d6%2BWhN9XIjtrY8CZRYy%2BLN7HiY9G7V89iFN1HURZrquHa3WAROpPEwRTu5%2BfKUF4N3eXiQKDBeT7QcQb1sfrYKDOepw9R8IlcN5LZVBQ4XwXM2fDfoRiUhvo%2BlfmhmIt6sShgpO8o13wlKFH4oC3JhZLFaq35AhtRwG%2F3dlsC9Gy2mzkGSR3ymxGEYDaBRfh2rlX8EdqTnNFcfKQdoG2E3O0kjurux76%2FzDkUp1VkLdw9e7uCl%2FBF%2Bk3f0O9k69%2BcdZCc0Izy5PlxaAekX1BvaY8Nqk3pnrOx4Mx6qjWDywsGupddjkv5vXcrX9ao14N2J06RgtyVGvuJfoEtrezDzwnbuJ%2B%2Brn9TpzwZHVbFeu7Srh7O65fz2QpRwGvzUttf3Bn2%2F9V%2F3y1Jy01blmc%2BgRNq%2FjYcHCkNLFszsWi2%2FWISl%2FYG6dFFWidfF7EobceSR7L6MI6Q28kGOqUB72%2FqXup1gl69Ta4u0EPCpoqKvclMSc2gvcBJWoKKha3esD6PQ7YDfjWoktbdJLCmChQpRS7iUPT1sB8aAaumkX4Q8q38rrorm6UGSwtfmf5I8SjFcH4XR3DmNoVX%2FoOwW5p9wDwcAUi%2BkRCKIOng4FRMZB26ja2d7jhEgqFx4zqUSyZhrG9hKzoJGS0PtVRWrBereOvJC%2B9oru10LEUOA1Xe6qTm&X-Amz-Signature=a948eb02ecd51d17c702615d8a6b2ec54e9acb43db09b3c69747f59dc547ba2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
