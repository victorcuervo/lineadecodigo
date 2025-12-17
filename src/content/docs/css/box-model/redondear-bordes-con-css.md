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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DGGLFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2xRED250dFR7EDMeC1m%2FnkeWYFxLUcU0lATF3XqLg6AiBUF6mG7694KK8gRa54pzNkITysMZUGMCFOR88GxvqKJyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMUJyDpHiCKOdFcv48KtwDSKiWcK9rd1UzJoVgnE66TzWjo%2BAHSUNdpv87ja5OwqLz2kdnzzkz1cx0IhaLPZsrVEdrzBqhL5jofsNgmOXN2e5XskavnXPJXWEnYWgInSmac7kgL33CKTdUI7%2FEfAIahvrcuwK5%2FCee21iAnleGKUVpsoVogkZurOIIo7ju%2BiD2vucO%2Bo7Ba%2FDv4dG7h2ognq4vDWEVyf%2FQsKMciEWVesfHD9%2BVFyQbUEJIA%2B3NRvXHQPDw9Y68XDg4FXy9E%2Btwc%2FDx3FAjeAmaPpKKh9kSgetGWFPzr6T9nCDod%2BazoCNn7qvciMy61xr6iTblQ%2F2iexwtpGjc8VcpqeCnPKx%2BqqpMObtpyZnD%2FNy5iC7J2yuBkF1gIAOMh03vw8YhdCP3tPZymEKJUvypCtqeL6eKbXztayYXId631uG86LPIazJMdCW%2FFDlqWGETHFsnhRTfd5wqEw1%2FYO%2BGY8EPBnATLgoDKjuMDQZE1MjuUuPMrTmioqS3IxQZ31WbbWcsayfnZQO9OssEeKxmkX%2BK6Nbw7DRgZy%2BiU9AIUmAYX1WFw9oQy5CwRjRyjnaBnNOoJE7moyEqFy0M4Ykqz8njZL7cTiuxXIogk7mpc7pgOBs3BnZPkovo0BV3h5ecudQw0beJygY6pgHzTCtjAXK%2BMkOZUyh0Q6Hp91diI83vSQmEhJlZ9U92nIZKToy56JzcFBXImcno8BhDyttBPePx5btcfBtRfYZ50NmBrWyT8v3ivjzRfJuzcKcwy4P9DxW0rKHYmdtgt0z6SJ%2BhmodZtrGUc%2BFNcIPLWxaDvm21sPEENsvmJX0MM8g0qQPAFCfrcHuVr%2By75h7M0BL1ZLIzLfAcVKXLjjhTM1lb%2BCft&X-Amz-Signature=a3d290fe47763005bd6ce02c7e71fbb664c7d914521c4c84d1fe209a036f5444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624DGGLFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2xRED250dFR7EDMeC1m%2FnkeWYFxLUcU0lATF3XqLg6AiBUF6mG7694KK8gRa54pzNkITysMZUGMCFOR88GxvqKJyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMUJyDpHiCKOdFcv48KtwDSKiWcK9rd1UzJoVgnE66TzWjo%2BAHSUNdpv87ja5OwqLz2kdnzzkz1cx0IhaLPZsrVEdrzBqhL5jofsNgmOXN2e5XskavnXPJXWEnYWgInSmac7kgL33CKTdUI7%2FEfAIahvrcuwK5%2FCee21iAnleGKUVpsoVogkZurOIIo7ju%2BiD2vucO%2Bo7Ba%2FDv4dG7h2ognq4vDWEVyf%2FQsKMciEWVesfHD9%2BVFyQbUEJIA%2B3NRvXHQPDw9Y68XDg4FXy9E%2Btwc%2FDx3FAjeAmaPpKKh9kSgetGWFPzr6T9nCDod%2BazoCNn7qvciMy61xr6iTblQ%2F2iexwtpGjc8VcpqeCnPKx%2BqqpMObtpyZnD%2FNy5iC7J2yuBkF1gIAOMh03vw8YhdCP3tPZymEKJUvypCtqeL6eKbXztayYXId631uG86LPIazJMdCW%2FFDlqWGETHFsnhRTfd5wqEw1%2FYO%2BGY8EPBnATLgoDKjuMDQZE1MjuUuPMrTmioqS3IxQZ31WbbWcsayfnZQO9OssEeKxmkX%2BK6Nbw7DRgZy%2BiU9AIUmAYX1WFw9oQy5CwRjRyjnaBnNOoJE7moyEqFy0M4Ykqz8njZL7cTiuxXIogk7mpc7pgOBs3BnZPkovo0BV3h5ecudQw0beJygY6pgHzTCtjAXK%2BMkOZUyh0Q6Hp91diI83vSQmEhJlZ9U92nIZKToy56JzcFBXImcno8BhDyttBPePx5btcfBtRfYZ50NmBrWyT8v3ivjzRfJuzcKcwy4P9DxW0rKHYmdtgt0z6SJ%2BhmodZtrGUc%2BFNcIPLWxaDvm21sPEENsvmJX0MM8g0qQPAFCfrcHuVr%2By75h7M0BL1ZLIzLfAcVKXLjjhTM1lb%2BCft&X-Amz-Signature=7a450fed7befdf936c807ab8e748d3e3f939982afd67a926b012528ff82daca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
