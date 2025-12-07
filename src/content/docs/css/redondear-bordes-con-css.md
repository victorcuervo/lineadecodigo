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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSONTXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeyh2ryxzC8lwysz%2FKQExBFQQiGPOy6WyDIT%2BkKqlbOAiEAjvFqTXi9H8kuvWDgBt5qVabKsfPu%2BKjPptT7KRPOhL4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhof9BbEpyGXK9dqyrcA3KgP3ATnHfSX0kHV7YTS7qWE7zsgQmjzd9gFrvAtJ0E6Oq2tNawTh3eURLXRzZ%2BOnX%2BXG0OSldOmWe75cOfmxXe9CzcbrCBCuI4s0iGWS2NIcNu87HRs3219f2JfIyhxU3aQ8OiTpN%2FUuK5%2FvyssU4W3VnueN5OHG7P0pnpUrIj3D2Wea7ayg0wUtksWkWR1Qg7v2aoStrisXPECoh%2FDQq%2BZUaRMQKHR6wXR4K5fZHl258FcPlJ%2Bjk1Yh4yBM7tRi68n8JqAz2MWftPL8RbmKSUij%2B4Tfyv5TWW0%2FRfgFz7UrgXZBTxRqoNUctcIC5jvFJxVttT4QfsOtu%2FslZcf7sY%2FNEOk53WhTcvTPOSKW3GaqHNgurwd9w5eHh49vYLbH57UO4IrD7OBaRXRpD%2FIewb%2Bnoni6JLIVMdVKydq%2BcNTrzIfB98Q5CcHv3SGT%2BKNzrHCWi9AwhLY4WOzS%2FZRJCSjFw1YUpXO%2BwnA%2FKfJq73QrmEemZAEMgI8qUg21wLQFOgR5%2BPIykDmg9sgm%2BFsAA6AWwhqi9ZzLQlGlw1TPug9BRTJSUuKR8aye3704KydqE2TQMprUA%2BhO6xmUx2xIxTIf8vS2ErOSAdNQjVqcwvXQNUXWiZnjKIG7VlMK271skGOqUB%2B1DGuTJ%2BPv0UqfdvC1rquM%2Fxkc1wHPt7CR%2FQej%2FGt080EB88EfW7gxSQeRAjBwcg1WARc92DRWNhxZ04835jhvswEc%2BPpmoq7fA%2BKR%2BIYJzChX7nkRBZvDxEgbeU3qPyhz%2FSr6txqafswjWY8pDGROFdMd24zZCrREGFqRmszTPc23czYq%2Btle%2F02Z61XFclXG0E8ifB287wwot3hI7X7CL51zIX&X-Amz-Signature=40cbfa7c576d2214fb2ee5417f86f3947cb360d2d8f28f3484862f38281a3dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSONTXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeyh2ryxzC8lwysz%2FKQExBFQQiGPOy6WyDIT%2BkKqlbOAiEAjvFqTXi9H8kuvWDgBt5qVabKsfPu%2BKjPptT7KRPOhL4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhof9BbEpyGXK9dqyrcA3KgP3ATnHfSX0kHV7YTS7qWE7zsgQmjzd9gFrvAtJ0E6Oq2tNawTh3eURLXRzZ%2BOnX%2BXG0OSldOmWe75cOfmxXe9CzcbrCBCuI4s0iGWS2NIcNu87HRs3219f2JfIyhxU3aQ8OiTpN%2FUuK5%2FvyssU4W3VnueN5OHG7P0pnpUrIj3D2Wea7ayg0wUtksWkWR1Qg7v2aoStrisXPECoh%2FDQq%2BZUaRMQKHR6wXR4K5fZHl258FcPlJ%2Bjk1Yh4yBM7tRi68n8JqAz2MWftPL8RbmKSUij%2B4Tfyv5TWW0%2FRfgFz7UrgXZBTxRqoNUctcIC5jvFJxVttT4QfsOtu%2FslZcf7sY%2FNEOk53WhTcvTPOSKW3GaqHNgurwd9w5eHh49vYLbH57UO4IrD7OBaRXRpD%2FIewb%2Bnoni6JLIVMdVKydq%2BcNTrzIfB98Q5CcHv3SGT%2BKNzrHCWi9AwhLY4WOzS%2FZRJCSjFw1YUpXO%2BwnA%2FKfJq73QrmEemZAEMgI8qUg21wLQFOgR5%2BPIykDmg9sgm%2BFsAA6AWwhqi9ZzLQlGlw1TPug9BRTJSUuKR8aye3704KydqE2TQMprUA%2BhO6xmUx2xIxTIf8vS2ErOSAdNQjVqcwvXQNUXWiZnjKIG7VlMK271skGOqUB%2B1DGuTJ%2BPv0UqfdvC1rquM%2Fxkc1wHPt7CR%2FQej%2FGt080EB88EfW7gxSQeRAjBwcg1WARc92DRWNhxZ04835jhvswEc%2BPpmoq7fA%2BKR%2BIYJzChX7nkRBZvDxEgbeU3qPyhz%2FSr6txqafswjWY8pDGROFdMd24zZCrREGFqRmszTPc23czYq%2Btle%2F02Z61XFclXG0E8ifB287wwot3hI7X7CL51zIX&X-Amz-Signature=fdf1d3851d128eafd1cd948b0e04f8074a4f774be0d27e02048a7e4db85ad263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
