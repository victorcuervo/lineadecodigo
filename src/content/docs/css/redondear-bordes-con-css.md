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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR5AGQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BkTBGptgh0KFSBiGnsS0bBzp0vDe8H%2BtDfJa29jrrLQIhAKaYp0q90VjdcXafBO6rSY9buBPmQ5lXQ%2FyjxzKcFkWoKv8DCHQQABoMNjM3NDIzMTgzODA1IgyITQJC6BD1F3D730Qq3AN0eixlCXFmv3h0rwuZSlQYI5P0YPnbfjo5DRKX4fTgOVJdmxufukUJ%2BClFcNEcAcsHitNol%2Br5UtgjskyPYmYtkfWdk6rpnHG0zv9V4Q42Lzm2A7bCD5K82Q8CpJ4G1c7YswBfrnHN9CJl9P%2FrPQcv7FUoNWxkpc5y9vGup%2BXzacACYJ0SnCWAhdCcejkHqRV9rdI%2B2ck8xyuK8BU0bH%2BmcpWNwe5iZZtvy6DA7kPMQgo18SF9S9DDtTCyWz4vumr2Eh98y8MSu59a8LtYsyQTfHjQ9ZoLIfx1r5wDmWqo%2FWaZfNCjom3bMqrApioyYirHTB40Vfeo%2F%2F%2FJxZPyBgFdqteEVMuNcI27I3FtBc0AGzU5c9cKagNdECyC2z8zg8gxvOqPJfGSPx3SmHgpHYMoV0Zi2wzrvoMHh4MC1kgxOpXnqgfYfUBK%2FEow3ut9nkEOk2HAc%2FwDl%2Fp610%2BoXyRgu2bzx7ox0W%2FZftEP4n7hJipxPsVicTrq1qIS1iWfSe7r5p0dPOHb8tvqKUDEP75wM7kqWBHBooDUqjZ2mi34K9nLf2Aa1bXqYQ9C%2BX%2Byhh%2FbHIp5EZMsgE27lAju3V8xWdy9MjCsnb3uczcYdDPKmH5lOsiLewXGSSbiOTDZptDJBjqkAVw42JEsDYT80qz75%2B2uyuXcqnQEWffLeRD%2BoOjglDT9YKcm8g9G5IdUFC6MPf2p%2BhkP8h0dPEQMcUYlroiS0saHpkIkTZrHZ1QWpntFV27RsepXN3I9a9aKOaYvHHWvLrAHZkI2y9mQAsOaNZe1sBbYgDO3azrH7Q6z09IG1eKXDl8cJtlkUB%2BuKIvU828vpfD1hhG%2F16Bqy%2BpGqZsYHj3ZmNSo&X-Amz-Signature=d229fae87195b932f1bd3365600d4ef2c6220d40f309aa18b6b13a553ae8b945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRR5AGQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BkTBGptgh0KFSBiGnsS0bBzp0vDe8H%2BtDfJa29jrrLQIhAKaYp0q90VjdcXafBO6rSY9buBPmQ5lXQ%2FyjxzKcFkWoKv8DCHQQABoMNjM3NDIzMTgzODA1IgyITQJC6BD1F3D730Qq3AN0eixlCXFmv3h0rwuZSlQYI5P0YPnbfjo5DRKX4fTgOVJdmxufukUJ%2BClFcNEcAcsHitNol%2Br5UtgjskyPYmYtkfWdk6rpnHG0zv9V4Q42Lzm2A7bCD5K82Q8CpJ4G1c7YswBfrnHN9CJl9P%2FrPQcv7FUoNWxkpc5y9vGup%2BXzacACYJ0SnCWAhdCcejkHqRV9rdI%2B2ck8xyuK8BU0bH%2BmcpWNwe5iZZtvy6DA7kPMQgo18SF9S9DDtTCyWz4vumr2Eh98y8MSu59a8LtYsyQTfHjQ9ZoLIfx1r5wDmWqo%2FWaZfNCjom3bMqrApioyYirHTB40Vfeo%2F%2F%2FJxZPyBgFdqteEVMuNcI27I3FtBc0AGzU5c9cKagNdECyC2z8zg8gxvOqPJfGSPx3SmHgpHYMoV0Zi2wzrvoMHh4MC1kgxOpXnqgfYfUBK%2FEow3ut9nkEOk2HAc%2FwDl%2Fp610%2BoXyRgu2bzx7ox0W%2FZftEP4n7hJipxPsVicTrq1qIS1iWfSe7r5p0dPOHb8tvqKUDEP75wM7kqWBHBooDUqjZ2mi34K9nLf2Aa1bXqYQ9C%2BX%2Byhh%2FbHIp5EZMsgE27lAju3V8xWdy9MjCsnb3uczcYdDPKmH5lOsiLewXGSSbiOTDZptDJBjqkAVw42JEsDYT80qz75%2B2uyuXcqnQEWffLeRD%2BoOjglDT9YKcm8g9G5IdUFC6MPf2p%2BhkP8h0dPEQMcUYlroiS0saHpkIkTZrHZ1QWpntFV27RsepXN3I9a9aKOaYvHHWvLrAHZkI2y9mQAsOaNZe1sBbYgDO3azrH7Q6z09IG1eKXDl8cJtlkUB%2BuKIvU828vpfD1hhG%2F16Bqy%2BpGqZsYHj3ZmNSo&X-Amz-Signature=f237737290828f7c752b1a4d58a1b086f032b7c76532cbc89c184a78e707ce6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
