---
title: Descargar una imagen de un mapa de imágenes
description: "Uso de mapas, áreas enlazables y el atributo download en HTML5 para poder descargar una imagen de un mapa de imágenes al pulsar sobre ella."
lastUpdated: 2023-02-14
author: victor_cuervo
---

El uso del elemento [`area`](https://w3api.com/HTML/area/) nos sirve para optimizar la carga y la visualización de imágenes mostrando varias imágenes en una y generando áreas enlazables. En este artículo vamos a ver cómo podemos descargar una imagen de un mapa de imágenes utilizando [código HTML5](https://lineadecodigo.com/categoria/html5/). Es decir, que cuando se pinche sobre un área enlazable se descargue la imagen asociada a dicho área.


### Caso de uso para descargar una imagen de un mapa de imágenes.


El poder descargar una imagen de un mapa de imágenes utilizando [código HTML5](https://lineadecodigo.com/categoria/html5/) nos va servir para **crear galerías de imágenes** que estén muy optimizadas ya que descargamos una única imagen con todas las imágenes. Esto nos será útil para entornos en los que la descarga de elementos sea un handicap, como puede ser el caso de uso de dispositivos móviles.


Pero ahora lo que haremos será el poder descargar de forma individual cada una de esas imágenes una vez que el usuario pulse sobre una imagen en cuestión. Siendo en este momento en el único en el que realmente se descarga la imagen en concreto.


De forma visual vamos a recurrir a un mapa de imágenes con los logos de los [navegadores web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/). Esto representará la galería de imágenes:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/191e483d-f785-44a5-99ee-9dd8ea0eca5e/area-con.navegadores.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOCZC7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC9aA1NRjoJO91%2FqW%2F547TxbZFFslyVLtYVIrHlYlU%2FmgIgIc9%2F3srbHBGT3ESuBnrzbuokDdd4ejh7c2A%2Fkjmyeqoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPoCWEgYbJ7289xeASrcAxCV2QmyIKdhfytYz3fZtk2h%2FpFi6A2N4L%2BNyhizCnyzSIEZWUeRrMi%2BrTIhdZ9QVmGqs8pW35c0rolEqzEggwcrbN%2FboGLG3wSQq7EBjyQl%2BklBD6AxpH6Fn5w1utHksgFjPU12FUmRy2YVW2Sm72BiLZ7eMn4UKwRA2lEpIaqTrrBqZeeD5fK7roDtfxXh1nYAUcok2YSykCZT6lO8xu2Ngw6XJEL2cj8srqXYprXDlflyG1vUht2VaKNZuUsu69DsiDbkJuVqPkvsE7K6MpmaoRx7TtNCWcgq5gXm4SmfFJvsmhytwVpKq%2B2bWHst4Owr6107xc8JiNQ9Seniw3xxWhJ%2Fi0ugVp4ubTs85jMaet%2FAnvtmBSzstcTKm4YQ%2FgJubIbD3%2FqfvLZ1AZGxcdlORGesBuv78rMQA9KLbmgzEKCT9yP6eGPoBsNq%2BDVqZv1kEg9yLAfNuxJ74pS6P996FlSt3hAT2k3BHbMtPhDNso5uaQsKK9vpYXXcgr98YIIqh9dSIhJLmtZaTmsFXSnYij7S3GbmBFTjxGAzu2nbL5uGbzgW9ECOpwXQxMWpJXq3Sse6MQKYT95VBehXJNW6giAh%2FMq0IvvKQ6BhhNM7IHCS2qhr3W9Nu2T3MJC0w8kGOqUBQkZ4Fq7m7er75Z5LC2htj50%2FR%2Bw3aM2queiOUaTuf%2ByLpX6ey11c%2B9yyG%2Ba5LKMk%2Fno%2FL5Mz3Ctxmy7x0HVfsTwUgN36fx9zQNl6s%2BzB6FpvnnaX8wSelKSKT7HM9%2F5fl9WnDNAuPpxK99AwRXYYgo4C9AhmJdW6NI21QTXVyT7zFRuTn6XpKi%2F6Et83lBMRrDAV4mBGy1lYd7FS6eiSE0uryQta&X-Amz-Signature=28e5e06fa7ed235f390204d3284a112f327f79a3378a3f0c6206c35b761c041f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


El funcionamiento será el que cuando pulsemos sobre un logo en concreto se descargará dicha imagen.


### Creando el mapa con la imagen


Lo primero que haremos para poder descargar una imagen de un mapa de imágenes utilizando [código HTML5](https://lineadecodigo.com/categoria/html5/)  será crear un mapa con la imagen en el cual insertemos las partes enlazables. Para ello, lo primero será insertar una imagen con el fichero que contenga todas las imágenes mediante un elemento [`img`](https://www.w3api.com/HTML/img/):


```html
<img src="navegadores.png" alt="Navegadores" usemap="#navegadores" width="821" height="152"  />
```


Ademas, mediante la propiedad usemap vamos a decirle cual es el id que contiene el mapa de imágenes representado mediante un elemento [`map`](https://www.w3api.com/HTML/map/). Vemos que en este caso el mapa se llama “navegadores”. Así que pasamos a definir el mapa con el elemento [`map`](https://www.w3api.com/HTML/map/).


```html
<map id="navegadores" name="navegadores">
</map> 
```


El elemento [`map`](https://www.w3api.com/HTML/map/) es muy sencillo y lo que tiene es que tienes que indicar mediante el atributo [`id`](https://www.w3api.com/HTML/id/) cual es el nombre que le damos y que sirve para asociarlo a la imagen anteriormente definida.


### Definiendo áreas enlazables


Siguiendo con el ejemplo de descargar una imagen de un mapa de imágenes utilizando [código HTML5](https://lineadecodigo.com/categoria/html5/) nos tocará definir cuales son las diferentes áreas o partes que nos podemos encontrar en la imagen y que representarán los elementos enlazables. Estas áreas se definen mediante el elemento [`area`](https://w3api.com/HTML/area/).


Para ello tenemos que controlar el atributo [`shape`](https://w3api.com/HTML/area/shape/) que indica la forma que tiene el área, ya sea un rectángulo, un círculo o un polígono y el atributo [`coords`](https://w3api.com/HTML/area/coords/) que contiene las coordenadas que forman los vértices del área que hayamos definido.


De esta manera si queremos trabajar con áreas que sean rectángulos para marcar las diferentes posiciones de nuestro mapa con logos de navegadores, hará que definamos el siguiente [código en HTML](https://lineadecodigo.con/categoria/html/):


```html
<map id="navegadores" name="navegadores">
  <area shape="rect" coords="0,0,157,147" alt="Internet Explorer">
  <area shape="rect" coords="164,0,321,147" alt="Firefox">
  <area shape="rect" coords="340,0,497,147" alt="Google Chrome">
  <area shape="rect" coords="507,0,664,147" alt="Safari">
  <area shape="rect" coords="659,0,816,147" alt="Opera">
</map> 
```


Ya tendremos nuestras áreas definidas dentro del mapa asociado a la imagen.


### Código para poder descargar una imagen de un mapa de imágenes 


El siguiente paso es el más interesante para nuestro ejemplo, ya que es cuando vamos a añadir el código necesario para poder realizar la descarga de la imagen cuando pulsen sobre el logo. Para ello vamos a añadir dos atributos nuevos, por un lado [`href`](https://w3api.com/HTML/area/href/) que nos servirá para enlazar con el fichero que contenga la imagen en concreto y otro que será [`download`](https://w3api.com/HTML/area/download/). El atributo [`download`](https://w3api.com/HTML/area/download/) nos sirve para indicar que cuando se pulse sobre un enlace lo que se le indique al navegador es que tiene que empezar una descarga del fichero en vez de mostrarlo en pantalla. Dicho atributo puede funcionar solo o asociándolo el nombre que queremos que tenga el fichero que nos vamos a descargar.


Por consiguiente el código que nos queda para los áreas será el siguiente:


```html
<map id="navegadores" name="navegadores">
  <area shape="rect" coords="0,0,157,147" href="explorer.png" alt="Internet Explorer" download="internet-explorer.png">
  <area shape="rect" coords="164,0,321,147" href="firefox.png" alt="Firefox" download="firefox.png">
  <area shape="rect" coords="340,0,497,147" href="google-chrome.png" alt="Google Chrome" download="google-chrome.png">
  <area shape="rect" coords="507,0,664,147" href="safari.png" alt="Safari" download="safari.png">                
  <area shape="rect" coords="659,0,816,147" href="opera.png" alt="Opera" download="opera.png">
</map> 
```


Hay que tener mucho cuidado ya que si este código lo pones en una página web que cargues dentro de tu [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) en local no va a funcionar. Y esto es importante ya que el atributo [`download`](https://w3api.com/HTML/area/download/) solo nos va a funcionar si lo utilizas en una página web que esté disponble a través de un servidor web.


De esta manera ya habremos terminado de desarrollar nuestro código para descargar una imagen de un mapa de imágenes utilizando [código HTML5](https://lineadecodigo.com/categoria/html5/), lo que te permitirá realizar diseños mucho más eficientes para la descarga en móviles o entornos de poco caudal de datos.

