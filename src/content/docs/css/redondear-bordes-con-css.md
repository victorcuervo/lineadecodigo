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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4PQ7EU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa37Kekn5RLh1GcIVrg%2BSoIi9ZTeHOoE1VGFoBDFXyvwIhAMgwS5AqPFtAf9Uvpd3DwA5BY%2FPZKzobYsHMJTmNmKWuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCi7DkUvqM2VzUdyAq3ANaneGicasQqTMIZx70r%2Bs4LGxiVu2InzfqnpTl2T4RTBykbMFVrcRwNvGwudgD9ZSrkMSitpet4ebcot%2FM1Q9k1ZidMIYEqKsfyzqGDvq5VUmGeYFlwW%2BnZMdPnKB4wLXnKCYEOlTAenCk0jZzByUL8ZXhDoNFw%2BqToR54BrNLjYOzC2Yq2vP4ToAJHffrBrwp7ZgszeA7kK%2BhzIg8L5%2BLqFyBczhl42Mm20W6ki47YcQzOrQNnIS3AAlXHo4nlpchLWym0brTyJpiBKmbJelB%2F3TjxNVVWmNYJyce96rmtHDWotXZmci%2FQNX9J47zk1UJSGlwkpHeAW8fol4SmF4XaFWtSsYRDoBRVQ8Wf9aJ6dxeolhY3E5UPcfZwJjYBhqNzvZM5x9T%2BhH32trvzJgbn5LaRJKyMwc5VuMWV4lHYtsoeiIVauw9LjHf67sA9ECGzZ4yxbqXO%2BE72EOmSx6%2BZn78Q8tEpVLKwgpaD2W3G7TX%2BEnJezF0YvLXktpihZc7LWV2GCy9HB8AHcw%2B2jhSLeVmad14q25TyTzKQNgk92mVGroJMZNW3WsEgXVqmFOQ6XCMpnT4td8G9JxLQ1%2FAMs5OujXmec%2FK2syXnb%2FydNWencsIBLF8tkG60jCX%2FdLJBjqkAe%2FS9pyqZrsWI0tGMbZEWNGP8h4T020eY%2FWxTQ1xGSCNJ35RXrBNK%2FhQf7V1Fle74y4UmlUR%2BtPYDI3Qgif%2FMxkYr5SUCazDDo94GOQCdXmqlJVyzQGx9Er3smSOKE9vhgcAxahWwHsN7N7IpwoYxt%2FLJA8MtL%2F1L%2BB9DSrUPMNjYDVsA9CKPZ%2BMfYA9ISlCKKN2jCqNsig0lATeJyroRbZ9VkSM&X-Amz-Signature=99905f7935266d3dbf31b36fe17a1e6d9b2f816784c4773ed1cfe0e5c1b8f7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4PQ7EU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa37Kekn5RLh1GcIVrg%2BSoIi9ZTeHOoE1VGFoBDFXyvwIhAMgwS5AqPFtAf9Uvpd3DwA5BY%2FPZKzobYsHMJTmNmKWuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCi7DkUvqM2VzUdyAq3ANaneGicasQqTMIZx70r%2Bs4LGxiVu2InzfqnpTl2T4RTBykbMFVrcRwNvGwudgD9ZSrkMSitpet4ebcot%2FM1Q9k1ZidMIYEqKsfyzqGDvq5VUmGeYFlwW%2BnZMdPnKB4wLXnKCYEOlTAenCk0jZzByUL8ZXhDoNFw%2BqToR54BrNLjYOzC2Yq2vP4ToAJHffrBrwp7ZgszeA7kK%2BhzIg8L5%2BLqFyBczhl42Mm20W6ki47YcQzOrQNnIS3AAlXHo4nlpchLWym0brTyJpiBKmbJelB%2F3TjxNVVWmNYJyce96rmtHDWotXZmci%2FQNX9J47zk1UJSGlwkpHeAW8fol4SmF4XaFWtSsYRDoBRVQ8Wf9aJ6dxeolhY3E5UPcfZwJjYBhqNzvZM5x9T%2BhH32trvzJgbn5LaRJKyMwc5VuMWV4lHYtsoeiIVauw9LjHf67sA9ECGzZ4yxbqXO%2BE72EOmSx6%2BZn78Q8tEpVLKwgpaD2W3G7TX%2BEnJezF0YvLXktpihZc7LWV2GCy9HB8AHcw%2B2jhSLeVmad14q25TyTzKQNgk92mVGroJMZNW3WsEgXVqmFOQ6XCMpnT4td8G9JxLQ1%2FAMs5OujXmec%2FK2syXnb%2FydNWencsIBLF8tkG60jCX%2FdLJBjqkAe%2FS9pyqZrsWI0tGMbZEWNGP8h4T020eY%2FWxTQ1xGSCNJ35RXrBNK%2FhQf7V1Fle74y4UmlUR%2BtPYDI3Qgif%2FMxkYr5SUCazDDo94GOQCdXmqlJVyzQGx9Er3smSOKE9vhgcAxahWwHsN7N7IpwoYxt%2FLJA8MtL%2F1L%2BB9DSrUPMNjYDVsA9CKPZ%2BMfYA9ISlCKKN2jCqNsig0lATeJyroRbZ9VkSM&X-Amz-Signature=658e2b3c2264ee7b1c4b85325bee5ea9bd96613b0ebb212b4b7b58b57f906b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
