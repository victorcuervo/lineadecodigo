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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XLDCEM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvzCJuXGvDt2Ur%2FsV%2BhdrrPtzcqhnga6aIUAPWqfkkEAiEA1tmvGNXywrYNCiCg59YSh1k79Qb9xp0heRK86NWAsEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJ9cUxaz7ZNfdTRlVSrcAyn9UDS4jqlt%2BKL%2Fg454EgxVmXrfms6AdCpo4vfipjchuIicLyox1GFFXsoVblSxPbvzyWpLl%2FfnzHNj%2BkiZrnmC0SuW8Q6dXptOQ392Ghs91enkUdGjtJUxTpL4S89TZZruO1t4tgl1YeChOWp4QMgYZW0eYfranJUqe%2FB2TCRIZaNZhpK2GGIXhVeP2Am7f9GSP60svW08bEqeTCK6e%2BfIIm8%2BzzjmLEk4qsULwt2pnKPVL9z%2BJ%2BHjAREdmBsyelEoZ0p%2FtdchZNimYBlVJahMvUHTCznM2%2BLZUf1%2FYmExa4BS7wYLYdreWb9x4QeVMtWEU7M60L%2FVbNxGZNvHxcBS%2F7%2FFqAKpv3rusxUH8XKzqyz5Wox%2FnKOeCRv9Zhm7cZkM7zpaIJ2HqNzOPD2SFWxbCrC%2BIFKV3dSFIHUpLSbL9O%2B%2BGxEWQthgOP%2BkPfa6bNKVqB1Rm2Qf1%2Fa5Yoibj8b2ya1P7xCYLf%2FQ4Klpy1IWkTWuDTbF9xqHRRg3iPpCCCWJNROqnKtJeSNpxhLyYNTzYEJh80vdtXC1Ivqe2D9AYyG4fQxAWyCS9JXR7jPtnLZhxUYrDfzkR4v0UHlaPgqtCynEtbktZyWH4VQo0tU1IukT0nt%2BPYJPR4p3MP6LyMkGOqUBHZXV5yB2kjOTZ9uDFXsRjoqk4swjnxTBjpo7tewsrTlUMG1iLe03gX1rru7rIOtSL3N466WwzzmpAK7enVhpI0FHniAkAmKB9oAUTWfDoj2H2Jz5tesYUvG84vVyg%2BJspbPp97f6KMl%2BmpGKrhcdJ3VmYMrK6bZQNDMm5wgJ0I9mOo%2FDmWfu%2BDdDALyrqrAovHy5NSvX6nJWuPQPPJbYQHeso6xG&X-Amz-Signature=aac93a1fcef1b6be65b74a8f873cf3948a116abd1913d98b93d7d2eac20a4c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XLDCEM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvzCJuXGvDt2Ur%2FsV%2BhdrrPtzcqhnga6aIUAPWqfkkEAiEA1tmvGNXywrYNCiCg59YSh1k79Qb9xp0heRK86NWAsEQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJ9cUxaz7ZNfdTRlVSrcAyn9UDS4jqlt%2BKL%2Fg454EgxVmXrfms6AdCpo4vfipjchuIicLyox1GFFXsoVblSxPbvzyWpLl%2FfnzHNj%2BkiZrnmC0SuW8Q6dXptOQ392Ghs91enkUdGjtJUxTpL4S89TZZruO1t4tgl1YeChOWp4QMgYZW0eYfranJUqe%2FB2TCRIZaNZhpK2GGIXhVeP2Am7f9GSP60svW08bEqeTCK6e%2BfIIm8%2BzzjmLEk4qsULwt2pnKPVL9z%2BJ%2BHjAREdmBsyelEoZ0p%2FtdchZNimYBlVJahMvUHTCznM2%2BLZUf1%2FYmExa4BS7wYLYdreWb9x4QeVMtWEU7M60L%2FVbNxGZNvHxcBS%2F7%2FFqAKpv3rusxUH8XKzqyz5Wox%2FnKOeCRv9Zhm7cZkM7zpaIJ2HqNzOPD2SFWxbCrC%2BIFKV3dSFIHUpLSbL9O%2B%2BGxEWQthgOP%2BkPfa6bNKVqB1Rm2Qf1%2Fa5Yoibj8b2ya1P7xCYLf%2FQ4Klpy1IWkTWuDTbF9xqHRRg3iPpCCCWJNROqnKtJeSNpxhLyYNTzYEJh80vdtXC1Ivqe2D9AYyG4fQxAWyCS9JXR7jPtnLZhxUYrDfzkR4v0UHlaPgqtCynEtbktZyWH4VQo0tU1IukT0nt%2BPYJPR4p3MP6LyMkGOqUBHZXV5yB2kjOTZ9uDFXsRjoqk4swjnxTBjpo7tewsrTlUMG1iLe03gX1rru7rIOtSL3N466WwzzmpAK7enVhpI0FHniAkAmKB9oAUTWfDoj2H2Jz5tesYUvG84vVyg%2BJspbPp97f6KMl%2BmpGKrhcdJ3VmYMrK6bZQNDMm5wgJ0I9mOo%2FDmWfu%2BDdDALyrqrAovHy5NSvX6nJWuPQPPJbYQHeso6xG&X-Amz-Signature=d6b966754b27935ac86792f321ef97acca9ee89cc935ad7cd79f7a567362580f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
