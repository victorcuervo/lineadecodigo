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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3LSEPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwc9VhyYd566vkEcx%2BK3NochvzoUY1yQE3TCpEtGo87AiEAiKxDmaJqWKkkzmlHJpr8q7MCeSNaTtv3aNxKQgDMwM0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEf9BAcNxSfbdn1sjSrcA7EbMwDkEeaj9NiOy1b0u%2F%2BW7fAjARx1MRTXhKVruVfcEYanaqJgoAyp4Topj9A68%2FqyfUBgFlMVwxebbZWD34hrJEBLE3yiDJF%2Fm4hcqdUX8tWflv2mxHU4Ticj4nMIUUopja8XBGeAs%2BSCiH0KwbXUFf0vqjDcQWBmf0Dhl7AZbO3CnBz1Jm4%2B%2FPHAvz0KJ1bWSXX4jTkPRz0HDt5Inuv8H9ZPMmHylsb9Dn865DFIJw%2BwQk9qBFUSRkhkHX2CPdjKadxlR1xAG9bfm7CnvCX6xof984Wwl9RCrcFYqPSgS5nN6GsSoLAjmzf4gDqy0XqGfrdwjgbnewU4XlKG7bVatTKIPDgt8%2F9uAb1WC9wz4BgPTVas9GY2x2aQYWpcXIMdszfrTrNyT5bpRuhNTw3KiEjoeMntLXjiATF495ZUqa3ve2zH%2FFmD6W%2FlWIKiNG4xpf2o6xmCdlnGCDWwjkVe%2FnbICkGYEyUDs0VT0FJIxCcVLfLoIORV0px%2FkEun5v9wh6wE%2FdYKKTDQbCNs0nXt6pRe%2B57nkrdNV5Vx46%2BMkFHl%2F82vKBZorbTuCLaW%2FTxmuPsi1%2FStCzL2u0K1XVB4BV9mqYy%2FYAc4bUcwhrbsS%2FLUFzphCaJq2kbNMLiXiMoGOqUBhkN5Vza%2F0%2B8v%2BEmrAY%2BZMA0NpeeoA8PDJoLnf0FB%2BGDH%2BVAARrzTZgCbHVIQBITZNrxKqc1oTPHStOjowX3cxOmsr4CszG9w3atvdEniIfZ4E4vuI2wlMoTYjW7OkzCx29kQV7dIF4Ml6IURPqqzGtkUV4N%2Bxq8684WoFoDiVE8uj8tcf6zDF0oifCxro%2F5mXaHgglY0a6rgt3u%2FWsz3tNXnpPYT&X-Amz-Signature=79e47600355e0efc69ed22703197fd639e2df63e7740d7d7d869f42f6d7b253c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3LSEPA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwc9VhyYd566vkEcx%2BK3NochvzoUY1yQE3TCpEtGo87AiEAiKxDmaJqWKkkzmlHJpr8q7MCeSNaTtv3aNxKQgDMwM0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEf9BAcNxSfbdn1sjSrcA7EbMwDkEeaj9NiOy1b0u%2F%2BW7fAjARx1MRTXhKVruVfcEYanaqJgoAyp4Topj9A68%2FqyfUBgFlMVwxebbZWD34hrJEBLE3yiDJF%2Fm4hcqdUX8tWflv2mxHU4Ticj4nMIUUopja8XBGeAs%2BSCiH0KwbXUFf0vqjDcQWBmf0Dhl7AZbO3CnBz1Jm4%2B%2FPHAvz0KJ1bWSXX4jTkPRz0HDt5Inuv8H9ZPMmHylsb9Dn865DFIJw%2BwQk9qBFUSRkhkHX2CPdjKadxlR1xAG9bfm7CnvCX6xof984Wwl9RCrcFYqPSgS5nN6GsSoLAjmzf4gDqy0XqGfrdwjgbnewU4XlKG7bVatTKIPDgt8%2F9uAb1WC9wz4BgPTVas9GY2x2aQYWpcXIMdszfrTrNyT5bpRuhNTw3KiEjoeMntLXjiATF495ZUqa3ve2zH%2FFmD6W%2FlWIKiNG4xpf2o6xmCdlnGCDWwjkVe%2FnbICkGYEyUDs0VT0FJIxCcVLfLoIORV0px%2FkEun5v9wh6wE%2FdYKKTDQbCNs0nXt6pRe%2B57nkrdNV5Vx46%2BMkFHl%2F82vKBZorbTuCLaW%2FTxmuPsi1%2FStCzL2u0K1XVB4BV9mqYy%2FYAc4bUcwhrbsS%2FLUFzphCaJq2kbNMLiXiMoGOqUBhkN5Vza%2F0%2B8v%2BEmrAY%2BZMA0NpeeoA8PDJoLnf0FB%2BGDH%2BVAARrzTZgCbHVIQBITZNrxKqc1oTPHStOjowX3cxOmsr4CszG9w3atvdEniIfZ4E4vuI2wlMoTYjW7OkzCx29kQV7dIF4Ml6IURPqqzGtkUV4N%2Bxq8684WoFoDiVE8uj8tcf6zDF0oifCxro%2F5mXaHgglY0a6rgt3u%2FWsz3tNXnpPYT&X-Amz-Signature=78f7e60073f2ee23f4408c3771d4f8aa6486c62e56d66f22bcb6fbb679ef656e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
