---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBR3FMTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBm5LoRNnby8NFjSCpHFWIdn53VII6UDkWrLsUOpCZHWAiEArAQROVqIptdzGfJT%2FoU5emN5vKvoHlcJEDUE66Goun0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDE1lPs%2FzKEFa%2BKNM1CrcA7VJ2o%2Btn2qWkO39Xb%2Bh8lor55puQuLTYfWogZo8eqgxy%2BRS7WyOQamsk8sF%2FfbpKWIxfTgPmPylD%2B48Yx1uOvyQBqtVSszH2VhqA1zXhrRs9nwQ0lUnso4ERWwvJMUIvh8ZMwXXg8lFOytgtMu1OiCpc9un2%2BKBT3rMHqTo7k3vtMIURHs90eRdXXCdmtpXzhfPnFoiSIYcQhXwNIC8QoVlKruekBSXAkrq%2BZwYZY6yHHBrc0M1NsFlKRdbPmEoNl9D5cn8Seh068VygXemXVS87ckMkvWiDD7Xrd2h22oQCbALu6%2Fe1mIWBWKwAcisPaH%2Fgivb10DO3R2oSS7%2Bejn%2F6u0KwYSkgYCWujsXePb5EHhEaawPDfNtWHVTRqPg5qXzg32XLsyOAD9fKVDsgJHTT%2BR%2FT7zo7tAsfgt%2Ff6cS5KbLgnrA1UsKCH0vBlqsOuDfV1DcDZ0UUnnf5V9m%2BloEtdhcI8m8gYXd1mnMNy9YoBpZcHAoAIG2pdFzedW93HD1TY8FdfcYE88885XDYIkcFieKpMUML51H1cMotUoplDurtxGkZe6NLc%2B%2F%2FNtFbowKgpeTw9WP6vitd%2FYCHxFjj0PTyeGsC4OqtGyGV7ueUfALdlJBY7Snhm34MM33wskGOqUBGksHBqaDh87lP%2FtGkOFcMcjkKOI%2BhRmy%2Fbo2s1qoYtGA0EDIOBGo4jRwivDjGfMNXrhA%2B3aNTXBJzmj2JtcmzcUoY9XQnIqJ7vGhfe2kyHXpvZTrvUKGUHZEbgTpUh73uA6WXXt7vnqHj4%2FNzzOGIvhw%2BHRc9qCAB%2BwwC5%2FmnEfuVMqJFg%2FPOUEQdw3bVhVdsKfdJHYGXU0ZoqXkEVy2GAC1aiqV&X-Amz-Signature=021432ca82323df84ddf70d8b9e8fdb119058c2f32d44a4409a338f6d80f8796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBR3FMTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBm5LoRNnby8NFjSCpHFWIdn53VII6UDkWrLsUOpCZHWAiEArAQROVqIptdzGfJT%2FoU5emN5vKvoHlcJEDUE66Goun0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDE1lPs%2FzKEFa%2BKNM1CrcA7VJ2o%2Btn2qWkO39Xb%2Bh8lor55puQuLTYfWogZo8eqgxy%2BRS7WyOQamsk8sF%2FfbpKWIxfTgPmPylD%2B48Yx1uOvyQBqtVSszH2VhqA1zXhrRs9nwQ0lUnso4ERWwvJMUIvh8ZMwXXg8lFOytgtMu1OiCpc9un2%2BKBT3rMHqTo7k3vtMIURHs90eRdXXCdmtpXzhfPnFoiSIYcQhXwNIC8QoVlKruekBSXAkrq%2BZwYZY6yHHBrc0M1NsFlKRdbPmEoNl9D5cn8Seh068VygXemXVS87ckMkvWiDD7Xrd2h22oQCbALu6%2Fe1mIWBWKwAcisPaH%2Fgivb10DO3R2oSS7%2Bejn%2F6u0KwYSkgYCWujsXePb5EHhEaawPDfNtWHVTRqPg5qXzg32XLsyOAD9fKVDsgJHTT%2BR%2FT7zo7tAsfgt%2Ff6cS5KbLgnrA1UsKCH0vBlqsOuDfV1DcDZ0UUnnf5V9m%2BloEtdhcI8m8gYXd1mnMNy9YoBpZcHAoAIG2pdFzedW93HD1TY8FdfcYE88885XDYIkcFieKpMUML51H1cMotUoplDurtxGkZe6NLc%2B%2F%2FNtFbowKgpeTw9WP6vitd%2FYCHxFjj0PTyeGsC4OqtGyGV7ueUfALdlJBY7Snhm34MM33wskGOqUBGksHBqaDh87lP%2FtGkOFcMcjkKOI%2BhRmy%2Fbo2s1qoYtGA0EDIOBGo4jRwivDjGfMNXrhA%2B3aNTXBJzmj2JtcmzcUoY9XQnIqJ7vGhfe2kyHXpvZTrvUKGUHZEbgTpUh73uA6WXXt7vnqHj4%2FNzzOGIvhw%2BHRc9qCAB%2BwwC5%2FmnEfuVMqJFg%2FPOUEQdw3bVhVdsKfdJHYGXU0ZoqXkEVy2GAC1aiqV&X-Amz-Signature=5b0145369f96216fd876d073a62570002c5104c3c32e6da59a9db17b8faad86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
