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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUQVLNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrKfUaea35WMVP6vqwvfdIfzlRzirxExkucfNFaJ%2FNAiBOS5QID3sLQB9uRVaw7YKMLt9rAvHmFYD%2F4PnORUpStCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGdKagEgq3bEMeIxKtwDEM6xe8L%2FtznO%2BUcz0643OAP1uHuG0%2Fo0EvNcGQd6Ao5FE6Wk26eBHpa%2F18cyDDZsbIDo%2B3iqtdgla%2FqrdruRsIjj4FcW6oVRmVYhNzv964sOfbC5GAx7cC8MGnhv6ZBLUVWW%2F5M2LgAxxLaa8B8KF1VvgMowJnDtm0RGM4Wu5%2BS0dsjRbZ999OdAujIF5NpUNNLFSUSMx4kIO4WhYYl%2FGijlHM3Km5ND0eszvqgDtySb40GGdUA0QL0Vm%2Fp0%2BH0p75JIHGc8yKIl5Zxcatq3XMxsjokqp%2FKGb%2Byl%2F3fPfLggWQHM1%2BJwAaDH3wRtIzh%2BIkk%2F%2F1sN0M9J2jyopM9Lt1evicLgDeHZm0NM7Tv2vX2AMMoG23md1Ss1zZL81mR2xg0UX%2B8j3sWveimjR4acA7oS%2Fao1NVjBvkycR3%2FQ4rfeuXifsPMJM5N3L4px6JzBgXFepBnRH9q3AvEj5SRoArqu7Td7qSySarfpA7OZDneCE1k4LXNawMWBr9qXEEIRWCgsAHjvZfN8QsdjOMXe%2BktKDt6kVXfMgrC7Xbg34HfOzrL%2BTPAQ%2B8QMU9wc6JoV5wv%2FqgjWLMQfqKUVxeR6QjboDG5oux2gQ7wf2%2FX5qi%2FLF6W5WUPdzssj8dAwoP3SyQY6pgGLgwoQ9zkGOClsmCnKtUjvvZseygf7Us0L3hCP%2BkjYC4eO%2FSZspBGtN8pFGcLrxYBIQGeJakHgPRC4l4f0Mwu8Y3wRBHwoxnee10Z5mljmXwTfhSwXO1WS04ZzIJAlZFx0%2BKtZgSAwLVywLeHOBbc81qelwN%2BEsMG9iU8C%2BRajd22hHArjK3VAe5%2FJOxR2ie48%2BepbKjP2%2F4Jvsu6EhgDHB5%2BvygG8&X-Amz-Signature=9bda0bce268e7b2d36e69b1632641c4b6bbac3d9322563ef1f11907e368ee945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUQVLNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrKfUaea35WMVP6vqwvfdIfzlRzirxExkucfNFaJ%2FNAiBOS5QID3sLQB9uRVaw7YKMLt9rAvHmFYD%2F4PnORUpStCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGdKagEgq3bEMeIxKtwDEM6xe8L%2FtznO%2BUcz0643OAP1uHuG0%2Fo0EvNcGQd6Ao5FE6Wk26eBHpa%2F18cyDDZsbIDo%2B3iqtdgla%2FqrdruRsIjj4FcW6oVRmVYhNzv964sOfbC5GAx7cC8MGnhv6ZBLUVWW%2F5M2LgAxxLaa8B8KF1VvgMowJnDtm0RGM4Wu5%2BS0dsjRbZ999OdAujIF5NpUNNLFSUSMx4kIO4WhYYl%2FGijlHM3Km5ND0eszvqgDtySb40GGdUA0QL0Vm%2Fp0%2BH0p75JIHGc8yKIl5Zxcatq3XMxsjokqp%2FKGb%2Byl%2F3fPfLggWQHM1%2BJwAaDH3wRtIzh%2BIkk%2F%2F1sN0M9J2jyopM9Lt1evicLgDeHZm0NM7Tv2vX2AMMoG23md1Ss1zZL81mR2xg0UX%2B8j3sWveimjR4acA7oS%2Fao1NVjBvkycR3%2FQ4rfeuXifsPMJM5N3L4px6JzBgXFepBnRH9q3AvEj5SRoArqu7Td7qSySarfpA7OZDneCE1k4LXNawMWBr9qXEEIRWCgsAHjvZfN8QsdjOMXe%2BktKDt6kVXfMgrC7Xbg34HfOzrL%2BTPAQ%2B8QMU9wc6JoV5wv%2FqgjWLMQfqKUVxeR6QjboDG5oux2gQ7wf2%2FX5qi%2FLF6W5WUPdzssj8dAwoP3SyQY6pgGLgwoQ9zkGOClsmCnKtUjvvZseygf7Us0L3hCP%2BkjYC4eO%2FSZspBGtN8pFGcLrxYBIQGeJakHgPRC4l4f0Mwu8Y3wRBHwoxnee10Z5mljmXwTfhSwXO1WS04ZzIJAlZFx0%2BKtZgSAwLVywLeHOBbc81qelwN%2BEsMG9iU8C%2BRajd22hHArjK3VAe5%2FJOxR2ie48%2BepbKjP2%2F4Jvsu6EhgDHB5%2BvygG8&X-Amz-Signature=22e78827731c2438d650378916134e6e732504bd33a351522083c2461cbf80b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
