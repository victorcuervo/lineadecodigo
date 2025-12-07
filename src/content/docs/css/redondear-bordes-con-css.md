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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KY736L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKNIX7olprPWP1YgK8I4oJ0Horfns02ufbQNynvzyYAQIgXt4xbto0qZAALY9ULP0jBgtJtU%2FWRnJZ8UzO0t4kr6kqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYFJ0fqTGb85GcVSCrcA52vb9k6Vej75%2BIHv2goPKe94GFmr6fZX4PaKG92JJRGLQwpGDH2ON%2BO3uHDVHT1z5adGjwF6Mdx2gkgtIYrj1tOmNTgNVe8BicSwXYRmOE%2BOreBna5qMgm3evjtTY8tKPFa2y9JaNGcPLAkoHn%2Bn0mIYv%2Bbw4iKkUEGY3zn6tsn81QSxeXGEOAVYvMKOu0YSWR%2BRfD9XbLc8jbt4n82BZmRW3KnEtG9BHeXZq4o%2BR%2FV%2Fpyxxwy9Hbgv992EQN6%2Bdm%2FbsHukQHBTCerpJc9jxuTLkrFYwWzM0s%2F5FqAf9DlsolyXttkItAmCPkKzMCDHxHVxceB4gFX54mduypDCiwolwdpqzYydx0Aw%2FcZznyGNf8zbsca6zNXjM9Ku8c8EU1oCr5yqEFqWSOOys13fIob176%2FW835U6opi0gdUg5DRou%2BGrZHr5NjJRDkd03ennBHeCRG0g1XGWiw66%2FOM5VA5tpTTT7b7DSFDSV77HJxoe7xirKsYz5ksXxQVmEA6aW%2B%2BVDVb10zUwq1X%2Fq1Wh01%2FoyGf39R%2FRV4F7eojcDYe1twyIVLdW%2FZ3V4pJRbNMnc%2FTvI%2BX%2FCAqYUuktmq3MbQJsIBsQ4vBE3blc91Ywcu4FCY8Rda3K9INHb1FMPyo18kGOqUBk2vqGfMH7M88fZc1O%2FAklAn5CrnJOetc%2FFmABjGZ2tpriXC8syPupzfh%2FOkrQJFsngUlIREVxe2OexEv8%2FxTndvZbV%2FDZlN3rYyjn79yDE0WMXstPbQpIhb%2F%2FdBQg0EVkEtc3jo5B2jHVEuZOEx4tgf9flJXELZGf%2BD2QnXln56kqG9zK0zp4vks6euWXCtMbk4iaOi6KoSWwmCRopVniH7pByIU&X-Amz-Signature=a62f0713da064b8d8b0df9abab53937b08726c116b6421a1e3294031dac6975a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KY736L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKNIX7olprPWP1YgK8I4oJ0Horfns02ufbQNynvzyYAQIgXt4xbto0qZAALY9ULP0jBgtJtU%2FWRnJZ8UzO0t4kr6kqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYFJ0fqTGb85GcVSCrcA52vb9k6Vej75%2BIHv2goPKe94GFmr6fZX4PaKG92JJRGLQwpGDH2ON%2BO3uHDVHT1z5adGjwF6Mdx2gkgtIYrj1tOmNTgNVe8BicSwXYRmOE%2BOreBna5qMgm3evjtTY8tKPFa2y9JaNGcPLAkoHn%2Bn0mIYv%2Bbw4iKkUEGY3zn6tsn81QSxeXGEOAVYvMKOu0YSWR%2BRfD9XbLc8jbt4n82BZmRW3KnEtG9BHeXZq4o%2BR%2FV%2Fpyxxwy9Hbgv992EQN6%2Bdm%2FbsHukQHBTCerpJc9jxuTLkrFYwWzM0s%2F5FqAf9DlsolyXttkItAmCPkKzMCDHxHVxceB4gFX54mduypDCiwolwdpqzYydx0Aw%2FcZznyGNf8zbsca6zNXjM9Ku8c8EU1oCr5yqEFqWSOOys13fIob176%2FW835U6opi0gdUg5DRou%2BGrZHr5NjJRDkd03ennBHeCRG0g1XGWiw66%2FOM5VA5tpTTT7b7DSFDSV77HJxoe7xirKsYz5ksXxQVmEA6aW%2B%2BVDVb10zUwq1X%2Fq1Wh01%2FoyGf39R%2FRV4F7eojcDYe1twyIVLdW%2FZ3V4pJRbNMnc%2FTvI%2BX%2FCAqYUuktmq3MbQJsIBsQ4vBE3blc91Ywcu4FCY8Rda3K9INHb1FMPyo18kGOqUBk2vqGfMH7M88fZc1O%2FAklAn5CrnJOetc%2FFmABjGZ2tpriXC8syPupzfh%2FOkrQJFsngUlIREVxe2OexEv8%2FxTndvZbV%2FDZlN3rYyjn79yDE0WMXstPbQpIhb%2F%2FdBQg0EVkEtc3jo5B2jHVEuZOEx4tgf9flJXELZGf%2BD2QnXln56kqG9zK0zp4vks6euWXCtMbk4iaOi6KoSWwmCRopVniH7pByIU&X-Amz-Signature=6c7f543485066a4e35dbc3f8d8be3d196219b45839e55a0fca5e286e8ab5c343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
