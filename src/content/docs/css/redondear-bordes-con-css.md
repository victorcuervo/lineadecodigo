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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4FO6WZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQUchXUuybI%2FxJo%2Bbf%2B6AKA8ZFnw84Vxlg4zyD8inuKAiEAs5nQASghzTpoxEtJl0FXELDby6nmDslQKjwl%2BAbxSSsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHscloRj69EyXfT%2ByCrcA8em92qL%2FeW24sRV5qS5TbOBh%2BYZtRFJgqW0FLWVN7LcYa1JKc%2F0dQ6Kh5MkEF2u7FcKCguTHD4YLLBKlxEn6J07eWFE%2BWdq%2B41Jm4d6uD%2F6XhhkaFEelRevSSA3vnD38QcAzk0vHIlqZqmO9lHhlFB6jIrOx5ZDsLV957l7OxePmNBtRuLYC8ylU%2FulrecpJ3dr326P0EiQO5NGhfU%2FGt28XV%2Ft6ZUAPixi3PK0xV%2BNP7UlnqOyUduIaajacHEXYKEB9M46VvjThyzw4OpVgognRxEvy30y4byp9ojyLZ%2Bfuc6aMcIRCFFGsKJq6wdvWSItx3c%2F8Ojmq4W8izUx1l4Gpn4JfOpliGVzytozDXXfnErU9h2A%2FhjJiz9NpEIF2V%2Bsk%2BY8n6apq7sHh9fB5C3atfQaAiYoAK64ESpjZ3NNgFiD4C57WCj0aJ4InGtGLn%2FHhhahb4Bn6I1lAEkOMqlFk8NFXwlemFmGun3T%2BQud5KdmiV6rvXlN%2FtebVTTIBJsa3p5bH1CAQfoJGTL9LlkMoXEDrWr3%2BzXaBCYh6AJLhdL4HD%2Fq50f1gLqUDAX8mHtskFZH8Joy%2FTU4F29IgDkYlp5j7meZZ2Vgt7OIEdbLgB9H0RxoR%2Bpfn2WCMK%2Ba1ckGOqUBIHirNnhvYkFhZC47vt2FI%2F7xptJBc0IiB6zlnUwaz80Hu%2F8gVEDqUnvrSdp9YJeLVUzPsrZ01JNrYUk5zAKTVdVigSk9qD6tdV4jna0tWqYHldYM2orL%2BIGZNlF34hi7l8hkYpoe2iHBDT0BPgv5bDUFizlghjNVKX3K1uDKUUsHORwlSTbk%2FMHPWEgpsIJBEHVbeHmHRatgZ6p7fGc6oTs5IbLX&X-Amz-Signature=407ebf3c76ef7f5f3b93a68d2c3b4089cb5e69d91f7d712adbb43139f2007dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4FO6WZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQUchXUuybI%2FxJo%2Bbf%2B6AKA8ZFnw84Vxlg4zyD8inuKAiEAs5nQASghzTpoxEtJl0FXELDby6nmDslQKjwl%2BAbxSSsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHscloRj69EyXfT%2ByCrcA8em92qL%2FeW24sRV5qS5TbOBh%2BYZtRFJgqW0FLWVN7LcYa1JKc%2F0dQ6Kh5MkEF2u7FcKCguTHD4YLLBKlxEn6J07eWFE%2BWdq%2B41Jm4d6uD%2F6XhhkaFEelRevSSA3vnD38QcAzk0vHIlqZqmO9lHhlFB6jIrOx5ZDsLV957l7OxePmNBtRuLYC8ylU%2FulrecpJ3dr326P0EiQO5NGhfU%2FGt28XV%2Ft6ZUAPixi3PK0xV%2BNP7UlnqOyUduIaajacHEXYKEB9M46VvjThyzw4OpVgognRxEvy30y4byp9ojyLZ%2Bfuc6aMcIRCFFGsKJq6wdvWSItx3c%2F8Ojmq4W8izUx1l4Gpn4JfOpliGVzytozDXXfnErU9h2A%2FhjJiz9NpEIF2V%2Bsk%2BY8n6apq7sHh9fB5C3atfQaAiYoAK64ESpjZ3NNgFiD4C57WCj0aJ4InGtGLn%2FHhhahb4Bn6I1lAEkOMqlFk8NFXwlemFmGun3T%2BQud5KdmiV6rvXlN%2FtebVTTIBJsa3p5bH1CAQfoJGTL9LlkMoXEDrWr3%2BzXaBCYh6AJLhdL4HD%2Fq50f1gLqUDAX8mHtskFZH8Joy%2FTU4F29IgDkYlp5j7meZZ2Vgt7OIEdbLgB9H0RxoR%2Bpfn2WCMK%2Ba1ckGOqUBIHirNnhvYkFhZC47vt2FI%2F7xptJBc0IiB6zlnUwaz80Hu%2F8gVEDqUnvrSdp9YJeLVUzPsrZ01JNrYUk5zAKTVdVigSk9qD6tdV4jna0tWqYHldYM2orL%2BIGZNlF34hi7l8hkYpoe2iHBDT0BPgv5bDUFizlghjNVKX3K1uDKUUsHORwlSTbk%2FMHPWEgpsIJBEHVbeHmHRatgZ6p7fGc6oTs5IbLX&X-Amz-Signature=b7ea564bc5fb0b43bc0a61556d58326c95997359bd24cb07fd0e4026fec0ff23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
