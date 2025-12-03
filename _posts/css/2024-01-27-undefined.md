---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EY3M76%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLU2dhXC9ZnUmX7JS0KWGvYuTZLbFu%2F28EvX4Cll7hrwIhAIO6YUXK9CoOEDp9Aatq7WFpsKk%2BS7gEVlFMHQCwjs8OKv8DCCoQABoMNjM3NDIzMTgzODA1IgyK1d0PQnBke7ID8Igq3AOKYigpKPj1uaTibQRpgTm4bCxXWultoa8zSX7nzASY0i%2B1AoQ2ZI%2B1lpDzXZYQ%2Bgy9DasX%2Ft12mEKn78MieAG87cHR6zdhWAX4md%2BwARBnpbzNmAcSQJBW%2BL9ee3mEJcRAEtwvRCB2mB05XZxg47OZHH5Tr9RbxnZU9pXcpA7NzA5S2CHuoy6yrcUK05pdPBtXZfvp0D7B8a4ErJpusE4CYVBTst3NyAwhplALAl9xt8d%2BHnLYD6F4pHyOhptjcC%2FJnhKm1mDOvIeqSYsvPbFRXBG7x76baquuiGxpslaX8gAmV7JK2jAOCDNZOh31bFUhkaIa3JiagkmGkjxxQIz7IV1iY5CGb7XClG%2FCTXlnorC%2FcbNEssrHayRvDbTU9PcDmR9LGw%2BPzc9d2hWPSL9OSiMc%2F58vH4WsZcA9rTxaNBo%2FOmgF5Oa9ks6c5ZwVzQ8Eb6pyz7ms36FDQ2owOejnaxu4uzPoaMM%2FcxUOgraYPfGbUc1ZWDSsCaXwHpPb0oy0Tu9Ixjvqur7%2Bd1vjDN4OYcr1FJXbP%2BaeW2IeUooXcctP%2F5Yo0isqbu64RaGzSyn%2F0WPdFGG1q3IXALzQMasZZv0yPrNQwVqWr1lfV84xuQQcC8qo6bYfYBX9DjCY9r%2FJBjqkASRgxUHs2e9T0nKbaeA25UHSr%2B1cduiOGonc74v1%2F7Q28vT6BmSLM73M94zZBv2hyD1Cfy7sh2B8PjZfsbRpIhApoAmcjAU3vgaXfy18xJ2sluCFlzMphyqxQPtPQ9FH43DWqFK5czWTCha7yzgCXl2hViG9oxwJAo0Q1eiZdEo2gwT1DKTTPmZ9sJFfQlynpo%2FGWliiDX3zo3pWZg6dDPRX7ty0&X-Amz-Signature=c6521fc981bbbc1bd00b89f9be06e7ef07ae45694508d0bc85aa99b909a36f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EY3M76%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDLU2dhXC9ZnUmX7JS0KWGvYuTZLbFu%2F28EvX4Cll7hrwIhAIO6YUXK9CoOEDp9Aatq7WFpsKk%2BS7gEVlFMHQCwjs8OKv8DCCoQABoMNjM3NDIzMTgzODA1IgyK1d0PQnBke7ID8Igq3AOKYigpKPj1uaTibQRpgTm4bCxXWultoa8zSX7nzASY0i%2B1AoQ2ZI%2B1lpDzXZYQ%2Bgy9DasX%2Ft12mEKn78MieAG87cHR6zdhWAX4md%2BwARBnpbzNmAcSQJBW%2BL9ee3mEJcRAEtwvRCB2mB05XZxg47OZHH5Tr9RbxnZU9pXcpA7NzA5S2CHuoy6yrcUK05pdPBtXZfvp0D7B8a4ErJpusE4CYVBTst3NyAwhplALAl9xt8d%2BHnLYD6F4pHyOhptjcC%2FJnhKm1mDOvIeqSYsvPbFRXBG7x76baquuiGxpslaX8gAmV7JK2jAOCDNZOh31bFUhkaIa3JiagkmGkjxxQIz7IV1iY5CGb7XClG%2FCTXlnorC%2FcbNEssrHayRvDbTU9PcDmR9LGw%2BPzc9d2hWPSL9OSiMc%2F58vH4WsZcA9rTxaNBo%2FOmgF5Oa9ks6c5ZwVzQ8Eb6pyz7ms36FDQ2owOejnaxu4uzPoaMM%2FcxUOgraYPfGbUc1ZWDSsCaXwHpPb0oy0Tu9Ixjvqur7%2Bd1vjDN4OYcr1FJXbP%2BaeW2IeUooXcctP%2F5Yo0isqbu64RaGzSyn%2F0WPdFGG1q3IXALzQMasZZv0yPrNQwVqWr1lfV84xuQQcC8qo6bYfYBX9DjCY9r%2FJBjqkASRgxUHs2e9T0nKbaeA25UHSr%2B1cduiOGonc74v1%2F7Q28vT6BmSLM73M94zZBv2hyD1Cfy7sh2B8PjZfsbRpIhApoAmcjAU3vgaXfy18xJ2sluCFlzMphyqxQPtPQ9FH43DWqFK5czWTCha7yzgCXl2hViG9oxwJAo0Q1eiZdEo2gwT1DKTTPmZ9sJFfQlynpo%2FGWliiDX3zo3pWZg6dDPRX7ty0&X-Amz-Signature=d56e5b10b7e26f9aed2de97fac1eab6ccfd0676d44fe98eed4a82687ff22cfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

