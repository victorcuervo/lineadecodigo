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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSVVDMM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOrxPCZ4r3R36Omji79PbFhSlcnmA1p6vd8lzuKV1CCAiEA0NcWTFCzdA8lgA1F%2FyORUf1OoAoNZBUM5%2BLEDvN6YTkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM6VzPHqS5IQADSnLSrcAzbPe8Rx6YkWxT9T1oAI4PPXqbj%2B9V9t%2B6jUPK6tFlLmkkGDH%2BdqyDusmEvDjcbRUv0vtsp7K4yxmObqxYrQv42AmcVCX4MX5CBXTQSrPyV0%2B89%2FQx4tlIpp8vsI8fQHwc6g72lVqhtjL9xA3W2%2B7dumGZOdDfK8qbmXo1dJdlxwjkJW4JXZjs%2BMrkO0ws7GdWG2YGtJxIvt8Q3U%2BKWbazXgZunAaHRdJKYdA89ymkVdcxPzzOLb1%2B9c7Jv%2BY%2BI0T%2B5BRcdo39okNHXm%2BnxCcn2pr5A0SeS%2FS9eLBMrMeO%2Fx5hGLJ%2BO%2F4AU%2Fs5MGj07rT7EfG0pFCfGHBPF%2B51KnWTYZESWZwGDdJtBSvYSFyoVg4LNqh%2FECcgdSHuhnbmi%2B6UKL0rVSjz432KAEpTG8ovxVvPD1HPgrDGqbu7EsMaUulqu2Vq83JR3uw5NEG6nawQO5jwDRjOxigLGhHtV8fks%2FGciKvAgF6oIROMC1apBWhdwExWKbukLKZBkEhg4XyFIVCmA4IVc%2BOrXiX2eQXBgnORQom68qQb4g0wuX1wlokzsEcYW%2Ft7%2BipkuRoQiZ%2FDa%2BN6Ip0y40NCIr87HXBjeWb1Dk5lbqT0LPZPPfYuO63xj2wES6gjihqvDVMKbpiMoGOqUBizOU6aoCJhp9OsdEvWa%2BHYv7%2BXGO4RXlgsHjRpiJ1qZYgrfd%2BeeUkSarGZuWBraw8B663lhyyrB%2BpaJq9UoShngLhUL%2B9xhoMUJnRejxkX2fuf8wQf7Ox7FhabMEr%2BfWJmowBKrjFazn9rhvTIzr8%2FH6jqiWEMT2DV14At9ffoOAVlborStRhyQE6wiwPbUpAym0WZPMCgKc5n0l8NEsUcdQkqBK&X-Amz-Signature=14804906a683a687853df7260d99eb49e436c20396467e295b5aeb5799d59ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSVVDMM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOrxPCZ4r3R36Omji79PbFhSlcnmA1p6vd8lzuKV1CCAiEA0NcWTFCzdA8lgA1F%2FyORUf1OoAoNZBUM5%2BLEDvN6YTkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM6VzPHqS5IQADSnLSrcAzbPe8Rx6YkWxT9T1oAI4PPXqbj%2B9V9t%2B6jUPK6tFlLmkkGDH%2BdqyDusmEvDjcbRUv0vtsp7K4yxmObqxYrQv42AmcVCX4MX5CBXTQSrPyV0%2B89%2FQx4tlIpp8vsI8fQHwc6g72lVqhtjL9xA3W2%2B7dumGZOdDfK8qbmXo1dJdlxwjkJW4JXZjs%2BMrkO0ws7GdWG2YGtJxIvt8Q3U%2BKWbazXgZunAaHRdJKYdA89ymkVdcxPzzOLb1%2B9c7Jv%2BY%2BI0T%2B5BRcdo39okNHXm%2BnxCcn2pr5A0SeS%2FS9eLBMrMeO%2Fx5hGLJ%2BO%2F4AU%2Fs5MGj07rT7EfG0pFCfGHBPF%2B51KnWTYZESWZwGDdJtBSvYSFyoVg4LNqh%2FECcgdSHuhnbmi%2B6UKL0rVSjz432KAEpTG8ovxVvPD1HPgrDGqbu7EsMaUulqu2Vq83JR3uw5NEG6nawQO5jwDRjOxigLGhHtV8fks%2FGciKvAgF6oIROMC1apBWhdwExWKbukLKZBkEhg4XyFIVCmA4IVc%2BOrXiX2eQXBgnORQom68qQb4g0wuX1wlokzsEcYW%2Ft7%2BipkuRoQiZ%2FDa%2BN6Ip0y40NCIr87HXBjeWb1Dk5lbqT0LPZPPfYuO63xj2wES6gjihqvDVMKbpiMoGOqUBizOU6aoCJhp9OsdEvWa%2BHYv7%2BXGO4RXlgsHjRpiJ1qZYgrfd%2BeeUkSarGZuWBraw8B663lhyyrB%2BpaJq9UoShngLhUL%2B9xhoMUJnRejxkX2fuf8wQf7Ox7FhabMEr%2BfWJmowBKrjFazn9rhvTIzr8%2FH6jqiWEMT2DV14At9ffoOAVlborStRhyQE6wiwPbUpAym0WZPMCgKc5n0l8NEsUcdQkqBK&X-Amz-Signature=b8ea458cd0ba7e134047d769415edc5153292ab408f1df45e6d4234926705186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
