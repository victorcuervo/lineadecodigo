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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK6GHBO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvJMgixvJ61yPO17TrJvk7jdWUzaTrqhCSP7WkkSk3RgIgA3psG52dtEyw7vdHdeHTAtPVErR9PWBp0vgAsgxcIgsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGobycDkqoj%2FPHN%2B4yrcA0XDEbUzaeamUtGDunlVpBpZiN887bzsmiJLS7QnFT1dEJ9l0IUSVcv1Ttaml0LrhXZDcxruGj5wBnUgE4X6g%2F9mGD1w0fQ4aQFZd7TZTno3PJztfahzyVkWvM3ez0fSyyuMM36q4Rc%2FSR4Dp%2FDjbly90s9npx72wjvKMmh8q4prr2XIiFNgSQMUhwqluXXPrJxwMjKU7WLIyUPNO%2BZHJCK9wkLMB2uIrHMQXjp%2FeVWzFDLuDdPUohdpHutjW1pUAcPyCfQqBc%2Fsv6j3vZfNvO1n8z778%2BdT1fDB8xDDi8kUNJnycUV04HCd4GUWQd2MAW%2FGLtVQoKItrNx8Ah9GpySNzMV5xQALiulPQhRx0bz88TBkN0pzLrf%2FHjcSo%2Fax98NkkOiz4OLfFVoNiPbwRvp0CkP5pQaW4sDVo7YU1J8VCnuqaZwh9BveucrdYjS%2F8t0PtC%2BPYuYtQp71qTVJmuJGqGkqpc5sjyzZqdpsaGP5B0nIjjylVqUQVpnfYvVpXrKZGEtl6lmuGsNeviik5%2Bj%2ByktAQm4BYgnJ5T9qbqMpvPHGR7evUzB4icX%2FtjqAie1NQMqvZhkZwmmL1lMPDPiD79Bfw5n71SCdi4bet7UtRqSD%2FC6RAEou4qfyMMCa1ckGOqUB66QgCitXublRv4BTEUIPVB3vtRS%2Fr%2BXDu1SGwZcviKurOFBQCKanpk2DKFU03GLNIqlsF1YXQbha5UkyMNqU7m8nO%2BxuYzcoq0LK8BK01yYbwgRgoDIx227ah6QNq%2BWYSKSJxotsdg4kxigbvEQGSPhylQTCE7%2B85xPmWH19fiDdfioXtMQfDgVXWsAI0Bv0A50xVkK1YXEnh%2Bxwhg4FX7mzKy69&X-Amz-Signature=b563b8b9b23c97cfbca1804fd294a32d606037620e0a7b3dbffcea960d73cc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK6GHBO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvJMgixvJ61yPO17TrJvk7jdWUzaTrqhCSP7WkkSk3RgIgA3psG52dtEyw7vdHdeHTAtPVErR9PWBp0vgAsgxcIgsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGobycDkqoj%2FPHN%2B4yrcA0XDEbUzaeamUtGDunlVpBpZiN887bzsmiJLS7QnFT1dEJ9l0IUSVcv1Ttaml0LrhXZDcxruGj5wBnUgE4X6g%2F9mGD1w0fQ4aQFZd7TZTno3PJztfahzyVkWvM3ez0fSyyuMM36q4Rc%2FSR4Dp%2FDjbly90s9npx72wjvKMmh8q4prr2XIiFNgSQMUhwqluXXPrJxwMjKU7WLIyUPNO%2BZHJCK9wkLMB2uIrHMQXjp%2FeVWzFDLuDdPUohdpHutjW1pUAcPyCfQqBc%2Fsv6j3vZfNvO1n8z778%2BdT1fDB8xDDi8kUNJnycUV04HCd4GUWQd2MAW%2FGLtVQoKItrNx8Ah9GpySNzMV5xQALiulPQhRx0bz88TBkN0pzLrf%2FHjcSo%2Fax98NkkOiz4OLfFVoNiPbwRvp0CkP5pQaW4sDVo7YU1J8VCnuqaZwh9BveucrdYjS%2F8t0PtC%2BPYuYtQp71qTVJmuJGqGkqpc5sjyzZqdpsaGP5B0nIjjylVqUQVpnfYvVpXrKZGEtl6lmuGsNeviik5%2Bj%2ByktAQm4BYgnJ5T9qbqMpvPHGR7evUzB4icX%2FtjqAie1NQMqvZhkZwmmL1lMPDPiD79Bfw5n71SCdi4bet7UtRqSD%2FC6RAEou4qfyMMCa1ckGOqUB66QgCitXublRv4BTEUIPVB3vtRS%2Fr%2BXDu1SGwZcviKurOFBQCKanpk2DKFU03GLNIqlsF1YXQbha5UkyMNqU7m8nO%2BxuYzcoq0LK8BK01yYbwgRgoDIx227ah6QNq%2BWYSKSJxotsdg4kxigbvEQGSPhylQTCE7%2B85xPmWH19fiDdfioXtMQfDgVXWsAI0Bv0A50xVkK1YXEnh%2Bxwhg4FX7mzKy69&X-Amz-Signature=d501328b0f05778ab44205dda3ea3820825a12efaa806ccdd74cd60529c232eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
