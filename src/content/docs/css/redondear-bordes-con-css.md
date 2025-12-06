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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUORNE6E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNAY2isVwC1KKWXVZsBj%2BSTf8YYb3Y6S6ArPAgM0diwAiEAqCybndNcySP%2FvRtThRg%2FrzNGM918K5EIYJl8hxm2JM4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEAGilXrOwrIWsjZjSrcA5mQ63elPjVoq4JHbTSA16l8A2OXG8ULKuptc%2Bcs8c702DnkK6JyLQnZ5UCoRgEmlajDEcD9bdAFhD6LGAGeUoBkFOBWJTnmhlSw69NkVrxQZWJHWdUOybHmvBIISCTO44HkEF4Tqn%2F2ySDbO7hj8QwB41qDdP5AyRKi2zCrTwYUIqke19Y5k8FGxN%2Fw%2FWcFnv3MRIIxPxUHuCBcHMnNp0cjWNUYvvWU13EpiPaW%2BDC7TT3E%2F2KPb5RFBtYkgRzHD%2BQ%2B2g%2FAkpr%2FiAWaAw6GIy6RJWOPXvblbGe4thfFK00kuA79YZDxvFJgqVmZbZpkHnlaw6bii6Zsii6NjtC2fp3%2BPA2IRFPsvaVCxGZ0pWwtoi4CAaCMIjHzQjGnwj2M3NWfTrzAQ8Cy5OxC1jbxkS4Pu2vQNY3gLOQcfZFrIqdVQPA3dS2%2FMup63LWxWbGMX%2B%2BIMhlBRp8zDUI9Yr%2Ftte%2FQHbRJX3Y8DQFvqd56KUpZSmdiAxojaafVkXANuS6js8LEZCyjORWjsEE3ZHicpT8ejW0Z%2BLeq0KjpDMqHUS0v8qwD0t%2BxodW1SK1zJf6C2BUXvVgtOXBaFnk5uL%2BVcAwNwnRXazi3GeOyzJ1poTjYwvat8CmgaWLolhSJMMzK0ckGOqUBHUiXVKaBITsYSQ7CCLUnkXWVmRTFMA3S0bod%2BZJVWFIZb6y1HZ7CW2SHqBBGxVlcsB%2F6ydrfZnrO8XDu72Ba6TzcB0C3smmQXmNnFYTm8YMjsxuNy3ewVLb8QTeEibaNggOqIrgdB95JfGlmeD%2BURJ9RTf8bCHwDjchp0c6CaFjdceDi7U5YjsseBNbhJ99%2Fm2q%2FNijhO83R31ne88ievK4YTXMn&X-Amz-Signature=e9768f35c9c4fc0f4a04920c5b1ad2319d18a9e4ffbd0e5022e9b7164690c390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUORNE6E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNAY2isVwC1KKWXVZsBj%2BSTf8YYb3Y6S6ArPAgM0diwAiEAqCybndNcySP%2FvRtThRg%2FrzNGM918K5EIYJl8hxm2JM4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEAGilXrOwrIWsjZjSrcA5mQ63elPjVoq4JHbTSA16l8A2OXG8ULKuptc%2Bcs8c702DnkK6JyLQnZ5UCoRgEmlajDEcD9bdAFhD6LGAGeUoBkFOBWJTnmhlSw69NkVrxQZWJHWdUOybHmvBIISCTO44HkEF4Tqn%2F2ySDbO7hj8QwB41qDdP5AyRKi2zCrTwYUIqke19Y5k8FGxN%2Fw%2FWcFnv3MRIIxPxUHuCBcHMnNp0cjWNUYvvWU13EpiPaW%2BDC7TT3E%2F2KPb5RFBtYkgRzHD%2BQ%2B2g%2FAkpr%2FiAWaAw6GIy6RJWOPXvblbGe4thfFK00kuA79YZDxvFJgqVmZbZpkHnlaw6bii6Zsii6NjtC2fp3%2BPA2IRFPsvaVCxGZ0pWwtoi4CAaCMIjHzQjGnwj2M3NWfTrzAQ8Cy5OxC1jbxkS4Pu2vQNY3gLOQcfZFrIqdVQPA3dS2%2FMup63LWxWbGMX%2B%2BIMhlBRp8zDUI9Yr%2Ftte%2FQHbRJX3Y8DQFvqd56KUpZSmdiAxojaafVkXANuS6js8LEZCyjORWjsEE3ZHicpT8ejW0Z%2BLeq0KjpDMqHUS0v8qwD0t%2BxodW1SK1zJf6C2BUXvVgtOXBaFnk5uL%2BVcAwNwnRXazi3GeOyzJ1poTjYwvat8CmgaWLolhSJMMzK0ckGOqUBHUiXVKaBITsYSQ7CCLUnkXWVmRTFMA3S0bod%2BZJVWFIZb6y1HZ7CW2SHqBBGxVlcsB%2F6ydrfZnrO8XDu72Ba6TzcB0C3smmQXmNnFYTm8YMjsxuNy3ewVLb8QTeEibaNggOqIrgdB95JfGlmeD%2BURJ9RTf8bCHwDjchp0c6CaFjdceDi7U5YjsseBNbhJ99%2Fm2q%2FNijhO83R31ne88ievK4YTXMn&X-Amz-Signature=70356b4201403acdfd03a511d076a3a107ab01dba1e85fffc8815e62908f45bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
