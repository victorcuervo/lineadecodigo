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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMI5AIM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmbWuITi%2FN3O3KF68XhUMwlCDEpeeNPSL2V9EDJnAjMAiEAqrM%2F3hy4JFRQwhtCbLFFsJDSRiFoPbGWyiXIpzHebpAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwhsRSWYOQLRzV9uyrcA%2BNfb%2FdJgu8RTuQW8ozvOw%2BXIxtPv3Sxq4sCNQzLfTwJpx1DnX8EII0UFn8pF3ro34d2dhl2xolJUOHww140JbzqVBSTQV6mW5Jlfqyt5xPOHmB6dVcnQsQRr6NpEC%2FQ%2FBYzO6b6K9ekrARKbVTZpF3wNDUccEcIqQx8OSVU8J0a8Tmg7nWj63MoJ8tCLM67FKRq7ILHZaU%2B7GpY1Lh0RfeCjVnYB%2FGedS2g%2F1SV%2BG6qJLQ5lm3hXum%2Bw3P3NJWVp5Qe%2BpluoOFXL0RvYkK1gA%2FVmewPv82yAXh98IJyBP3axBGU%2Bd5MMENc1%2BREbz87GgLNvd0KEfo%2BeRD4zsikfYgtfBhbAygq%2FjaY1nO%2FzqfMuZMk5MPwn2quu9wsF91J%2F7SOkbdlSUiDG3VYHCKg%2FjxLj77pSYqw6AKBp3MVGFp%2B2Djuo1f3KVr2%2FV4Zg9sTIrHFQzOmcz8RS29rPPPcZMw2ak5DDJpjEIvt22x1nb%2BZMZbk4mplDAu%2FJyWXiT4YEkmPxoFP8A0voHBjbU1Z7aVRRwEAVGPzDJrKKdUWArCF%2FKVwVvyaca8WOXWEyjPC6MHe2%2BGMWA5mnjdJTYAD%2FFh0lfRk8JtBwu6DqGcXCwVwQKqrFVSKuTV3AqvpMLn90skGOqUB1KQQvkVISfW80i9L7VOrBCxj2fc9S3g7bN0hAsA59cQobW5cX2jQ%2BlfcdhRv1f%2Blzwj5z8oH1rAQzOlBecVpZzWSaelYS78XOPz76%2BePqAzcZIrY2vzpEJrc%2FU0CWKXCGCRvnLJgEwFftoeVdcJdA%2Bkc6bLrsGzPhNsRPhcYCfKgpNDEOz6ucZRfYBJllgtETFHLyHkIG%2F9CK%2FVQ9W9CynAtlk7s&X-Amz-Signature=2e4510b8271883110b2198bf49ac7ac5024f5ce6255d4cf56058c262886cddbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMI5AIM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmbWuITi%2FN3O3KF68XhUMwlCDEpeeNPSL2V9EDJnAjMAiEAqrM%2F3hy4JFRQwhtCbLFFsJDSRiFoPbGWyiXIpzHebpAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwhsRSWYOQLRzV9uyrcA%2BNfb%2FdJgu8RTuQW8ozvOw%2BXIxtPv3Sxq4sCNQzLfTwJpx1DnX8EII0UFn8pF3ro34d2dhl2xolJUOHww140JbzqVBSTQV6mW5Jlfqyt5xPOHmB6dVcnQsQRr6NpEC%2FQ%2FBYzO6b6K9ekrARKbVTZpF3wNDUccEcIqQx8OSVU8J0a8Tmg7nWj63MoJ8tCLM67FKRq7ILHZaU%2B7GpY1Lh0RfeCjVnYB%2FGedS2g%2F1SV%2BG6qJLQ5lm3hXum%2Bw3P3NJWVp5Qe%2BpluoOFXL0RvYkK1gA%2FVmewPv82yAXh98IJyBP3axBGU%2Bd5MMENc1%2BREbz87GgLNvd0KEfo%2BeRD4zsikfYgtfBhbAygq%2FjaY1nO%2FzqfMuZMk5MPwn2quu9wsF91J%2F7SOkbdlSUiDG3VYHCKg%2FjxLj77pSYqw6AKBp3MVGFp%2B2Djuo1f3KVr2%2FV4Zg9sTIrHFQzOmcz8RS29rPPPcZMw2ak5DDJpjEIvt22x1nb%2BZMZbk4mplDAu%2FJyWXiT4YEkmPxoFP8A0voHBjbU1Z7aVRRwEAVGPzDJrKKdUWArCF%2FKVwVvyaca8WOXWEyjPC6MHe2%2BGMWA5mnjdJTYAD%2FFh0lfRk8JtBwu6DqGcXCwVwQKqrFVSKuTV3AqvpMLn90skGOqUB1KQQvkVISfW80i9L7VOrBCxj2fc9S3g7bN0hAsA59cQobW5cX2jQ%2BlfcdhRv1f%2Blzwj5z8oH1rAQzOlBecVpZzWSaelYS78XOPz76%2BePqAzcZIrY2vzpEJrc%2FU0CWKXCGCRvnLJgEwFftoeVdcJdA%2Bkc6bLrsGzPhNsRPhcYCfKgpNDEOz6ucZRfYBJllgtETFHLyHkIG%2F9CK%2FVQ9W9CynAtlk7s&X-Amz-Signature=1fc75b5325394e5fa8d723f81a956ca8f7f34bd9fbbab575ac1b293a3b08d458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
