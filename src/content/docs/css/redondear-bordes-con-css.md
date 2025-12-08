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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6SRIRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzVnAZ9pGqGGR40GZKjm%2B6arQPCdGi3vRe9YkXW86aIAiEAt5Dao7n43yBclweEQDnBJMizp%2FvOu4nFk9BL0fVuav4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAr2Ewwrja5qCROxyrcAw02EVLGS4yRYZacF3njbtrtEi6UplEa86%2Bz137%2FpAxx5vWpMb%2Fdts1wOky9CDAeY0aTTz6PMDlXHEefqR3ZEmkUkvFsXywZSvlh6FHfmlkq%2FiycPIL6S08FbGCCc3uOCPIFN%2BpefK7laT36GQGWfVfdmAMxVGIK6KW3t05T0ZJGXZQQ1G%2FYmoJSrU84jx05wN7rvt14tYPmnXekuauIhd04sKFQKig31xWZfwy7j%2FtO34eN5nMHlucsJto1MWKVEM%2FOAr4sA3SoUawdd3fF3aji027YsdfJ%2BB%2FEM6zju%2FelFD6GB5t0PKND6jnk4xPIR3fObUeEyv%2BpayHrNOLhHlcVOcsjjEuHRNGWNK%2FgMSvvuvLPoPJ3XXGve6lHisnhmv4OnBsCH%2FzRn0aYUsgMoI8oyzFlcU7Msjb%2FFnXZWCkKncngx8fog4s5p9u8%2BW6YyIv%2FoH%2Fz5K4rZuSTdE5yHuu%2FlGpvYlbfm%2BceAChtS%2BJo%2F%2Bibj5G6iajLbfSX83yaFx%2BX05UXTqIfasiZZA3JyFxHU83EUATjaumAonsY4Wng%2Fo6au29bOa6OitLOU74WPBnNHieB245%2BOxz8DLSrhGgwxI6yrKg1DeB9Kg5G9PIW2DCCyN8XNCSQ77wLMNGh3ckGOqUB5ZvHahlVx5qFZ6iIC04bQyTXIZYgfpbxTJxGplrcJjogj%2BunW4VpFgmOEJxT5Hn7vbd5jn1wSyplsBSZe3Ox8z01GjdJ9HlaTesc%2FE318wMBmW9q5ABVNXDzJEikxoY8%2Bw5W0%2BhYFSgr%2BjW8oWhAt46a5MGPN8%2FPFr2mgKa260aFx8JnB90rCzC0MFWMVtQwWj91z4aGytLQQ4n1fM4RRFgCLhS1&X-Amz-Signature=97f990439b38e035036411b003c8887a8b4c8ff5299cb15ad639eca99b4c8704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6SRIRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzVnAZ9pGqGGR40GZKjm%2B6arQPCdGi3vRe9YkXW86aIAiEAt5Dao7n43yBclweEQDnBJMizp%2FvOu4nFk9BL0fVuav4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAr2Ewwrja5qCROxyrcAw02EVLGS4yRYZacF3njbtrtEi6UplEa86%2Bz137%2FpAxx5vWpMb%2Fdts1wOky9CDAeY0aTTz6PMDlXHEefqR3ZEmkUkvFsXywZSvlh6FHfmlkq%2FiycPIL6S08FbGCCc3uOCPIFN%2BpefK7laT36GQGWfVfdmAMxVGIK6KW3t05T0ZJGXZQQ1G%2FYmoJSrU84jx05wN7rvt14tYPmnXekuauIhd04sKFQKig31xWZfwy7j%2FtO34eN5nMHlucsJto1MWKVEM%2FOAr4sA3SoUawdd3fF3aji027YsdfJ%2BB%2FEM6zju%2FelFD6GB5t0PKND6jnk4xPIR3fObUeEyv%2BpayHrNOLhHlcVOcsjjEuHRNGWNK%2FgMSvvuvLPoPJ3XXGve6lHisnhmv4OnBsCH%2FzRn0aYUsgMoI8oyzFlcU7Msjb%2FFnXZWCkKncngx8fog4s5p9u8%2BW6YyIv%2FoH%2Fz5K4rZuSTdE5yHuu%2FlGpvYlbfm%2BceAChtS%2BJo%2F%2Bibj5G6iajLbfSX83yaFx%2BX05UXTqIfasiZZA3JyFxHU83EUATjaumAonsY4Wng%2Fo6au29bOa6OitLOU74WPBnNHieB245%2BOxz8DLSrhGgwxI6yrKg1DeB9Kg5G9PIW2DCCyN8XNCSQ77wLMNGh3ckGOqUB5ZvHahlVx5qFZ6iIC04bQyTXIZYgfpbxTJxGplrcJjogj%2BunW4VpFgmOEJxT5Hn7vbd5jn1wSyplsBSZe3Ox8z01GjdJ9HlaTesc%2FE318wMBmW9q5ABVNXDzJEikxoY8%2Bw5W0%2BhYFSgr%2BjW8oWhAt46a5MGPN8%2FPFr2mgKa260aFx8JnB90rCzC0MFWMVtQwWj91z4aGytLQQ4n1fM4RRFgCLhS1&X-Amz-Signature=898b4881352551cd982c0d8644bf538c484da9142fbf0153d647ca9a8deacc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
