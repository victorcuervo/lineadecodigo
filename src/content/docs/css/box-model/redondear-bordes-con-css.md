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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOBCEHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrlkCUHWDiRELdZSjSVHz3dI7GWwTwNzl7oF%2FBass48AiEAuDQJJ5xOu2VSoUVsp9c1%2Bf%2FOu9MBnEIAkc0FouZ9lE0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLMRePMGscVZLS%2Bn0ircA%2BZcbx6V5gOOToYa8GWP8N%2FQy%2BZZ8eqlFfrlQvxyGI67w%2BslqMuV6HJbqf70ndrc9opSJtCKOiGnKRgQNxdRkm%2FPCEoT1QRX%2FawmyrqrV62ME1sw66i%2FL%2FHa0WEldlAmGrzUcqGO2k3SNDDGzXB65Un7X0Ijsv6dG7H4R8jf9DM9VL%2BN%2F9p%2BCcEwDCbrAEAOYcScAPZ6FbqUz7lc1MN8Lfx79inTZPOCr%2F5EGDYTDYugFjkv4GeeYisq1g8ENGX2K%2FzJyeK1Dz83s8xulE1EpmD8RQqzBblgbulHIjnzdYVWB%2F1XTLa1WLeQZF0QEV584unH7iBmbseEv50dNXhU8aeJUrih99zn63R6tnoV0NNmCzPS%2FggVdPBzCtrAJLIQDY1Ys%2FQ0oPBVE88GBXLOT2maxmMo3%2B2E4RcDUr5tm8FfKufb57G5NmPNuV7h%2FazE6jk7cJ5lCipbz%2FhRhxAygNNgW57Zo5ukrgns9Q%2FVNwtHXNinlkp0IdVDPubwd35%2BdKgJ1TRnxlKtU%2FDjoK1YVpD9hNQTVIIG4kV8vztKmqqJclQLFWUGBhAeIx7L7gwCyZSunWnzBIUtLOgLmObIiEA%2Fek0zckZMOp50zQ367EsMuKtRQ4Wig8J7ofpeMO7vicoGOqUB9e3TUwlF3p%2FxM0aXBbaiuXgQ65BSb16MfOHStw23bj6e%2F2frLBiMIx6wFk0F7MIwFcmAbIQngnZ6jaOytelkiHmdIIxcrkpT0HGmwpGh5XfAK5rsHhUPk6xeBbNU6IBpOvoN%2FlW%2FolhpqeKwFVxwyXTB8WVfH3zNYKszryiReMd912N3VIEi%2Ff8EusvdiEP4MrG%2Fz%2BSR71xdifecxUCKH5qdudGA&X-Amz-Signature=36d4209a7cbc6699e83d38cbcee237148362be1775e6330439abf6abd2ee6cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOBCEHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrlkCUHWDiRELdZSjSVHz3dI7GWwTwNzl7oF%2FBass48AiEAuDQJJ5xOu2VSoUVsp9c1%2Bf%2FOu9MBnEIAkc0FouZ9lE0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLMRePMGscVZLS%2Bn0ircA%2BZcbx6V5gOOToYa8GWP8N%2FQy%2BZZ8eqlFfrlQvxyGI67w%2BslqMuV6HJbqf70ndrc9opSJtCKOiGnKRgQNxdRkm%2FPCEoT1QRX%2FawmyrqrV62ME1sw66i%2FL%2FHa0WEldlAmGrzUcqGO2k3SNDDGzXB65Un7X0Ijsv6dG7H4R8jf9DM9VL%2BN%2F9p%2BCcEwDCbrAEAOYcScAPZ6FbqUz7lc1MN8Lfx79inTZPOCr%2F5EGDYTDYugFjkv4GeeYisq1g8ENGX2K%2FzJyeK1Dz83s8xulE1EpmD8RQqzBblgbulHIjnzdYVWB%2F1XTLa1WLeQZF0QEV584unH7iBmbseEv50dNXhU8aeJUrih99zn63R6tnoV0NNmCzPS%2FggVdPBzCtrAJLIQDY1Ys%2FQ0oPBVE88GBXLOT2maxmMo3%2B2E4RcDUr5tm8FfKufb57G5NmPNuV7h%2FazE6jk7cJ5lCipbz%2FhRhxAygNNgW57Zo5ukrgns9Q%2FVNwtHXNinlkp0IdVDPubwd35%2BdKgJ1TRnxlKtU%2FDjoK1YVpD9hNQTVIIG4kV8vztKmqqJclQLFWUGBhAeIx7L7gwCyZSunWnzBIUtLOgLmObIiEA%2Fek0zckZMOp50zQ367EsMuKtRQ4Wig8J7ofpeMO7vicoGOqUB9e3TUwlF3p%2FxM0aXBbaiuXgQ65BSb16MfOHStw23bj6e%2F2frLBiMIx6wFk0F7MIwFcmAbIQngnZ6jaOytelkiHmdIIxcrkpT0HGmwpGh5XfAK5rsHhUPk6xeBbNU6IBpOvoN%2FlW%2FolhpqeKwFVxwyXTB8WVfH3zNYKszryiReMd912N3VIEi%2Ff8EusvdiEP4MrG%2Fz%2BSR71xdifecxUCKH5qdudGA&X-Amz-Signature=d85b4ecd9574e9a59d5bf1b76fa8f6da3c8d91e7717f7e37c0fbfdd7ee5c32f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
