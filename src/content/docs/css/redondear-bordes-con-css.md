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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYD54KTB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGGtZX96eRpCvNp4tBPpf%2Fi5RE76h4rtSO1wIZqkf8rAiEA7NrQqYng9w6rp1uN5yxwOESIi%2Fvgv2ooZwNAWs2Y6V0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbBITTwg3G97OsfIyrcA0B%2FGSFzE62Pl8ZXwDuBhTK4jS2O0t4pegkpdXPUT3SQgjhgbkGnC53ZlanzEBepJzRPqMLZO%2BlKDhPjesWVtrLq1Ad5T4Vgz8k4jcrMPnk5aTBO4W0xuYw6A2fhV9ZqzdYcJ6qJxTgT6vqvE4r1rQ71sqK7rdgHp%2Fd12ikcKN9kzd6jjbqOHQs03TK%2FfoT3S9SKKPe75n7zfpy1CNlU4uODxtiAnvNqYBxcwIc1vDYe9B63gvce%2FceJ3V%2FHJdCmTQm2qMFBctLcEY3tUTvBBmC3FW2aALd2NL2M88DXW4g5nnbEtNpE2GS%2BOp21%2FNHGHaEIEr1aT3Fw2Kld5ivMIDHNZlOxjih9H2K55eP4923OxmkXDiuPEGA2r3eCmXUcTvGEiqTuLIqF1yeSFPhd5wqDlXtr9p1mSIkMBb9rUX7IWXapMIja5Zun4XSiG6l3kHTqGpdi0lU8Dpa4qNOraZyWYRuawjqdX3uz4kWDExl6aSQ9CJoAdVe8Wqr3aJCIuCxbqmJCLUdITe46ZBwD%2BhtWYigVx3gZUveJpTMwOYKyKaWjD%2FNt3rahO5BJIsr55V58UxLOx9UFHpdeI2O1aPrPRPSlTaEUhuMZTmrHiczL7VuBGuTA6Zp1JZMyMPT02skGOqUBx8hSYprM0LCjRG5iDfFABjyQl649fRM%2FljQMrMSqKtFmBgoGd2upiMGs8JZ3rMtcHpxEODzC2bKIF39Sn%2FfwMaXZqoQiK2ukyG%2B6H0es9AXMUR3yJwa6GHDoHpIznU9eAP5Ry4xsYnRvjYWagrcqYnibYbb%2FOxzbdR65zqv4V2f1YIIPbwzZIcyABOyU5FuO%2BAv9K%2B%2Ffx%2By7sfN2YGP5uPvcngA%2B&X-Amz-Signature=18904cb94f3c3b6c6e0ed1b84e88a760cc6b0901a3f3de7825476b19261bc1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYD54KTB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGGtZX96eRpCvNp4tBPpf%2Fi5RE76h4rtSO1wIZqkf8rAiEA7NrQqYng9w6rp1uN5yxwOESIi%2Fvgv2ooZwNAWs2Y6V0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbBITTwg3G97OsfIyrcA0B%2FGSFzE62Pl8ZXwDuBhTK4jS2O0t4pegkpdXPUT3SQgjhgbkGnC53ZlanzEBepJzRPqMLZO%2BlKDhPjesWVtrLq1Ad5T4Vgz8k4jcrMPnk5aTBO4W0xuYw6A2fhV9ZqzdYcJ6qJxTgT6vqvE4r1rQ71sqK7rdgHp%2Fd12ikcKN9kzd6jjbqOHQs03TK%2FfoT3S9SKKPe75n7zfpy1CNlU4uODxtiAnvNqYBxcwIc1vDYe9B63gvce%2FceJ3V%2FHJdCmTQm2qMFBctLcEY3tUTvBBmC3FW2aALd2NL2M88DXW4g5nnbEtNpE2GS%2BOp21%2FNHGHaEIEr1aT3Fw2Kld5ivMIDHNZlOxjih9H2K55eP4923OxmkXDiuPEGA2r3eCmXUcTvGEiqTuLIqF1yeSFPhd5wqDlXtr9p1mSIkMBb9rUX7IWXapMIja5Zun4XSiG6l3kHTqGpdi0lU8Dpa4qNOraZyWYRuawjqdX3uz4kWDExl6aSQ9CJoAdVe8Wqr3aJCIuCxbqmJCLUdITe46ZBwD%2BhtWYigVx3gZUveJpTMwOYKyKaWjD%2FNt3rahO5BJIsr55V58UxLOx9UFHpdeI2O1aPrPRPSlTaEUhuMZTmrHiczL7VuBGuTA6Zp1JZMyMPT02skGOqUBx8hSYprM0LCjRG5iDfFABjyQl649fRM%2FljQMrMSqKtFmBgoGd2upiMGs8JZ3rMtcHpxEODzC2bKIF39Sn%2FfwMaXZqoQiK2ukyG%2B6H0es9AXMUR3yJwa6GHDoHpIznU9eAP5Ry4xsYnRvjYWagrcqYnibYbb%2FOxzbdR65zqv4V2f1YIIPbwzZIcyABOyU5FuO%2BAv9K%2B%2Ffx%2By7sfN2YGP5uPvcngA%2B&X-Amz-Signature=51fa9d92bc350e392df8ab40df52db98f548d107304c5080abdfecf11c743689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
