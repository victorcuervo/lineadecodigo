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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PLPL5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyCnJSh%2Fd%2F9zCg6e2bPW7sTupoy8q%2FoHMif0ZwG8wDPAiACdvJofS9zo1BcMEW1JxyjiEemYq%2FaoSI5drK97nnUlir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM3Tyb1LfkJwSZHSbdKtwDjgR1qqywfh3ftUH52FPpO9HtR00%2BadVIY%2Fh9OWtcYf00nTV3SLcvBq4f6AK%2Fl%2FkB3Nm0sZDextBB8Pz3FxB28MvbPeaChkm4DdRASCeQBLopGMB1mQhZxDc2ioiut%2F4jhMGQuhbE1UUYrWie%2Fh5%2FoJFjjY1g6wpGsAZ8LjSPEscwu8y1LAyvvcahC%2FptY4%2FzGqyBCHPnzDhz9nv%2B9ei5y3558VJ7UoH5j0xQuZan3ZcLIF%2BHRDrsYLFnSQbGDY6g%2BTzDf6si5NCW9rzijM5XtlP8TZwQaHztq6Jn%2BWuWuOAp%2FfcI8fjN3dY0%2BnUaGd5tRiTaON6qgZhavF67Oe3IBRRpdc3iofrCIy%2FUxeEsEwbhrFXoRpNdck4VGfBELOCmkIPSyULwrswjUVkVZZhpJ8Nc2CUmdqdLF7XsxcyERABygMIANEi2Reuk0n7RKAbqVwtIhTu%2BbEHHgppGARei6AMGrsskoIKZgB%2FSOqIwDuMQ9soiciBQKjUx2t5TkD3HVdDYos5hM7k%2BppBgWjp5xKOHbJ0CQBKtPGyycl39IeR%2FV2pPnTVHQNY%2BN8e8EggAz6Gs3U1ruPHf8Pe8PuKXW%2BoVlrpZE1%2Bhg6kq9aglDTymRzXpPwGj7XbFE5IwiNHKyQY6pgGIgqvTWP9TRETD%2BpTkXeUkdmGUhOzQfju8Py2tpPqVyxdeShAI52kjwgF3bzxH8Ukb%2Fss%2Fda0KVp%2FuBxHtfi2u6SipMKujqWTQaEgMptlemiEO6PkwkuFiPVq6TOjIW0kOMl070dKdUrH5D1tmiXhemRlAI%2BzcpuZgl4SSNP2vH8sU601OwXmzKATCJCaNvtFAfEqY9arNT2YaNQ3xi0mDKrwiuwac&X-Amz-Signature=fea27f5b72798185c61ff48d339ebb34085cdc522145d7ae098420c28f6011d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PLPL5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyCnJSh%2Fd%2F9zCg6e2bPW7sTupoy8q%2FoHMif0ZwG8wDPAiACdvJofS9zo1BcMEW1JxyjiEemYq%2FaoSI5drK97nnUlir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM3Tyb1LfkJwSZHSbdKtwDjgR1qqywfh3ftUH52FPpO9HtR00%2BadVIY%2Fh9OWtcYf00nTV3SLcvBq4f6AK%2Fl%2FkB3Nm0sZDextBB8Pz3FxB28MvbPeaChkm4DdRASCeQBLopGMB1mQhZxDc2ioiut%2F4jhMGQuhbE1UUYrWie%2Fh5%2FoJFjjY1g6wpGsAZ8LjSPEscwu8y1LAyvvcahC%2FptY4%2FzGqyBCHPnzDhz9nv%2B9ei5y3558VJ7UoH5j0xQuZan3ZcLIF%2BHRDrsYLFnSQbGDY6g%2BTzDf6si5NCW9rzijM5XtlP8TZwQaHztq6Jn%2BWuWuOAp%2FfcI8fjN3dY0%2BnUaGd5tRiTaON6qgZhavF67Oe3IBRRpdc3iofrCIy%2FUxeEsEwbhrFXoRpNdck4VGfBELOCmkIPSyULwrswjUVkVZZhpJ8Nc2CUmdqdLF7XsxcyERABygMIANEi2Reuk0n7RKAbqVwtIhTu%2BbEHHgppGARei6AMGrsskoIKZgB%2FSOqIwDuMQ9soiciBQKjUx2t5TkD3HVdDYos5hM7k%2BppBgWjp5xKOHbJ0CQBKtPGyycl39IeR%2FV2pPnTVHQNY%2BN8e8EggAz6Gs3U1ruPHf8Pe8PuKXW%2BoVlrpZE1%2Bhg6kq9aglDTymRzXpPwGj7XbFE5IwiNHKyQY6pgGIgqvTWP9TRETD%2BpTkXeUkdmGUhOzQfju8Py2tpPqVyxdeShAI52kjwgF3bzxH8Ukb%2Fss%2Fda0KVp%2FuBxHtfi2u6SipMKujqWTQaEgMptlemiEO6PkwkuFiPVq6TOjIW0kOMl070dKdUrH5D1tmiXhemRlAI%2BzcpuZgl4SSNP2vH8sU601OwXmzKATCJCaNvtFAfEqY9arNT2YaNQ3xi0mDKrwiuwac&X-Amz-Signature=55ebf5186cbe97e3d46a3572c64d9e2105cc63ce68b5d74419a4748ddd707671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
