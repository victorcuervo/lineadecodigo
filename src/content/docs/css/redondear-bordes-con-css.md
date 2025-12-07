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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADIIG4G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILEmyaWGsVzICy6l%2FMgvq%2FFiqDQpA%2Fc0qyLx0oj7hagIhAIWhoDjKJSrMsyb%2BPB4OKbjnxXlvT1EyNtKDLgry3kFLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2FW9JybcTx2jjXm4q3AM4zyhIDc0EhHZHm6Ka0XCV8ayaFLazPp76KEXxRNlZ6lfxGhBQZvqgqybiA6we0WN%2FJmjWp%2FTn8Kt%2BearsNgF15g7XhkYG0eeDhyOJpHWWhFzKV9XBXYzRwYdTORWDrSlmQ9TWB1letKNY8XHvSR%2FVHe0Ocnjl9Tt%2Bol4J9l38zk6Ok7Q6Z6CNLDwhbaLrWSbfkM2LRxAyc88LbYnUN8XPfUnYpG2iCIVEE0k%2Fh7Sh2G75roTbSGgAro7jWYfWZa%2BhI9MjK3wecIaL255cZGtJS2IRt%2FwDNTnNbmD2PsMSOvuGOhRP%2B1sR%2B2J2jwShcvpHfuq9m1jnYrHs3fNL5jkWU9gxnn9NBmDs%2F3b%2BWgOE97RdRZuJGQMkAkGShATiVnPOzH9sWw%2Bqw48iZtWOjBB4CmxhuvE%2Bx2jyjquTnojmxWXB4bF4uElPnTkE0vVTh7uszVngihdol23UI42OqZZ3aSh3MSWq7PyNHuz7w%2BIld55OQ0SpB0OdXZU4mZx1x3Pk6EtrTeDbyrSUAeN86LD8Q4XZqIn8y0bagyv9LUafs965ap7Pz5Gas0u0wnQ98499oNEyo%2FsumRY8MJ3GHyaZQY0pJfQFFKG5hv0CBZFIMkrHUmtZaE0%2FxZozHTDKmdXJBjqkAbXacaHA%2FYzs6g1zZ%2BRrhSL2opo49QUuva2a4uczBhHxgNWylyiHxye5y558kgx3d%2BNKJ8bCuD1MvbJIVIqkeKdSy8OVQD5YsmVQqUKya4NA%2Fg09g2vXwS0cCmYjqspLDlro%2B%2Fr8%2FFApLExPpNPuuThkjbBKNIDaus2IQwzlUE2txmE2LQFxp3vp3ZFfiEJUWXDX4l49Db8pnSLGchKp09yYkKQ4&X-Amz-Signature=9a8f5b1736b22dcb6cad1e1b44e059130bde0f46a25cd9b26dceaf8c237ba22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADIIG4G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILEmyaWGsVzICy6l%2FMgvq%2FFiqDQpA%2Fc0qyLx0oj7hagIhAIWhoDjKJSrMsyb%2BPB4OKbjnxXlvT1EyNtKDLgry3kFLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs%2FW9JybcTx2jjXm4q3AM4zyhIDc0EhHZHm6Ka0XCV8ayaFLazPp76KEXxRNlZ6lfxGhBQZvqgqybiA6we0WN%2FJmjWp%2FTn8Kt%2BearsNgF15g7XhkYG0eeDhyOJpHWWhFzKV9XBXYzRwYdTORWDrSlmQ9TWB1letKNY8XHvSR%2FVHe0Ocnjl9Tt%2Bol4J9l38zk6Ok7Q6Z6CNLDwhbaLrWSbfkM2LRxAyc88LbYnUN8XPfUnYpG2iCIVEE0k%2Fh7Sh2G75roTbSGgAro7jWYfWZa%2BhI9MjK3wecIaL255cZGtJS2IRt%2FwDNTnNbmD2PsMSOvuGOhRP%2B1sR%2B2J2jwShcvpHfuq9m1jnYrHs3fNL5jkWU9gxnn9NBmDs%2F3b%2BWgOE97RdRZuJGQMkAkGShATiVnPOzH9sWw%2Bqw48iZtWOjBB4CmxhuvE%2Bx2jyjquTnojmxWXB4bF4uElPnTkE0vVTh7uszVngihdol23UI42OqZZ3aSh3MSWq7PyNHuz7w%2BIld55OQ0SpB0OdXZU4mZx1x3Pk6EtrTeDbyrSUAeN86LD8Q4XZqIn8y0bagyv9LUafs965ap7Pz5Gas0u0wnQ98499oNEyo%2FsumRY8MJ3GHyaZQY0pJfQFFKG5hv0CBZFIMkrHUmtZaE0%2FxZozHTDKmdXJBjqkAbXacaHA%2FYzs6g1zZ%2BRrhSL2opo49QUuva2a4uczBhHxgNWylyiHxye5y558kgx3d%2BNKJ8bCuD1MvbJIVIqkeKdSy8OVQD5YsmVQqUKya4NA%2Fg09g2vXwS0cCmYjqspLDlro%2B%2Fr8%2FFApLExPpNPuuThkjbBKNIDaus2IQwzlUE2txmE2LQFxp3vp3ZFfiEJUWXDX4l49Db8pnSLGchKp09yYkKQ4&X-Amz-Signature=64ff8b2a97d80bddb4ac8c1ce1b64a74532cbdc3b45a1723403778f63fe6bf9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
