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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAXUHSQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakK1HJ1LhZBnyla7jZcfth%2FD4g51u0GMouKrq8C7pBwIgDcDTVVFNcaa3yWonNoAjxOgJa%2BCDvHA%2BVUO9jdu3lOEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw5YLCcmx%2BdCWz%2FTyrcA%2B5xX1ZYJrmOOqao9EEsgp62P4SrLGmhCDzS7lkny47GmlraGat3ttIDvtBTr6Lvnf%2B0VOjDG36aAP4qnsVMOnrJeQQlg0oODIWbHzq8j0nTOONcTsFHgM46vhdVrMlHAoXRAJJGYVwUDSO6dVB4Midsj%2FhE6576dZ%2F3%2FvpEZoY6uObyIjUxIqeueTCpI%2B8x8s3P9da%2BHHPcpsSmIO7kTopRbeJMkRQzywkyYAtptGUA8nQAarE31sXGUbNpw2unPqxM5H529%2B5U8Ao1OaXVuJ94vIxYcSUjYQQMuiqozKkIQfWQoHbUh5PDvLP06ttJ5VPVhoYUDyo4mezYofEdOEeDLkexaxPnj0vvZ7SQhk7%2B%2B3Mds%2FXbbyKjuAmhO73iLMDnArfSNtLroaerPuXR00Fa8sPk5HnSu9q4wLFvjaYiptDIs2K8YkxDBorG5Hod3w5C0WxO4yEmfvtgGJd0mWE6X16AW2LdR%2B9m%2FzGFU4sXNCkwNQjcbu4UWMs3nsl7fj2LfhTEgWkA3JMZB7PfW3waddWLkV3W9%2BrWcqEZbeZjPXn3xbDHJEMGC1VKKkIIGvKRTltwCsB6lyfrLiCboW4GJInWAcXvuuucbtPLjyE9hHPw9%2FuWI1g3eirDMOu01skGOqUB5c34RGFPuokvP6uiMAmIMDaKxxcd2pcmxEVSkTACNPa3GA3xJdWTiihdHTjWR5Jh0SHV5MLcd7e0nVYFdzL416DYY%2FIg0WpL%2B3%2BzoFKaG5u3GWhkDC8SsN7JSbxCdXVK6xNn%2BL2GWw7Vna73%2F6KeaCv4XnDld6dC3%2F7YE9RoBvAi7gDnjO0lIxmSh0BnCm%2F5bH3gsZP9MJVwjkTR0iMIdiJgJlwc&X-Amz-Signature=38bfe1517d905df7593a613809cec9ca3f3843bb496178b189526d08bc0c4dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAXUHSQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakK1HJ1LhZBnyla7jZcfth%2FD4g51u0GMouKrq8C7pBwIgDcDTVVFNcaa3yWonNoAjxOgJa%2BCDvHA%2BVUO9jdu3lOEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw5YLCcmx%2BdCWz%2FTyrcA%2B5xX1ZYJrmOOqao9EEsgp62P4SrLGmhCDzS7lkny47GmlraGat3ttIDvtBTr6Lvnf%2B0VOjDG36aAP4qnsVMOnrJeQQlg0oODIWbHzq8j0nTOONcTsFHgM46vhdVrMlHAoXRAJJGYVwUDSO6dVB4Midsj%2FhE6576dZ%2F3%2FvpEZoY6uObyIjUxIqeueTCpI%2B8x8s3P9da%2BHHPcpsSmIO7kTopRbeJMkRQzywkyYAtptGUA8nQAarE31sXGUbNpw2unPqxM5H529%2B5U8Ao1OaXVuJ94vIxYcSUjYQQMuiqozKkIQfWQoHbUh5PDvLP06ttJ5VPVhoYUDyo4mezYofEdOEeDLkexaxPnj0vvZ7SQhk7%2B%2B3Mds%2FXbbyKjuAmhO73iLMDnArfSNtLroaerPuXR00Fa8sPk5HnSu9q4wLFvjaYiptDIs2K8YkxDBorG5Hod3w5C0WxO4yEmfvtgGJd0mWE6X16AW2LdR%2B9m%2FzGFU4sXNCkwNQjcbu4UWMs3nsl7fj2LfhTEgWkA3JMZB7PfW3waddWLkV3W9%2BrWcqEZbeZjPXn3xbDHJEMGC1VKKkIIGvKRTltwCsB6lyfrLiCboW4GJInWAcXvuuucbtPLjyE9hHPw9%2FuWI1g3eirDMOu01skGOqUB5c34RGFPuokvP6uiMAmIMDaKxxcd2pcmxEVSkTACNPa3GA3xJdWTiihdHTjWR5Jh0SHV5MLcd7e0nVYFdzL416DYY%2FIg0WpL%2B3%2BzoFKaG5u3GWhkDC8SsN7JSbxCdXVK6xNn%2BL2GWw7Vna73%2F6KeaCv4XnDld6dC3%2F7YE9RoBvAi7gDnjO0lIxmSh0BnCm%2F5bH3gsZP9MJVwjkTR0iMIdiJgJlwc&X-Amz-Signature=ac22a68c4819861bcf068c82f770fb35e4e485fee80a681a1af416c93513aca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
