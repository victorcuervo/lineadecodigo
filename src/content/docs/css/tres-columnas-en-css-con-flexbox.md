---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIPXTXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkhTkUXVvsinxmQdTNIPJh0%2BFUaf0Y7JRgAafLqHV79gIhAP%2FplTHeRmtqLSft9PxtQYJU6H%2BY%2FdnL63lFmM6vHs9OKv8DCDQQABoMNjM3NDIzMTgzODA1Igz8UcvYIIdrVIEhltcq3AMSsvGvlTcF8XO64yhNbUdKRRZki%2BxTiNDmVag0oQ64%2FzIbkJCWqhrcibKZUtw4T7%2Brmt66vQFptOUAMFi%2Bx82zdt64vkiYDWUjmY21kRuNW6%2FzkkG4j1gjxmaW4FNIMSD6AweicXJ7SqwhEmh1D51oqgCaHI1BMy1JYTZUhqA4uBaLBGP1J1PWK4y7oq1mWaShWcE5eLTjfjQhzDJqfyrq60zz6ho4UKhBlxmK1UqQtOwSxDjiBolXjy5RxDVSJVROBqee7l4sByrhwcnENIVOtZxpNj6LqfcJZZU%2BdNGaBBQfTdEiOU%2BXpOnYyIvxXesmGm9xle%2BXWUFsVmPT%2BeV1nXok2p7fE4Ene7m9itznSLMUpXN6vGLNyxuswg7NyHs%2FmpL2cLOUQMJFTxFveTMvkrKD0m3cEBdupV7N8fG2pIqLM33VL1ko1H9rlt%2B9w6R3euyP5hr7Nn%2BX%2FxsMg7BL8%2BRc33YlqKWefDkObHTMKRCtBCR1Lq535Bsoroi0vhdGH004VJileC9ppAOhpzoiZtrnYbKAKiaIecq%2BO8fR7pnL6o4HQe1GUmyzLDvB8kc3kn9%2FvbZ3Y0Wc%2FEpAuaXI0Z0XVxlEb0VGJSn8cOWu7RzLpRnZYpTF7UFlwDCMkcLJBjqkAY8EHk85b69Ed%2BppFL%2FYYzF0jVyWhTk4svb4tfPRInKUZRyeoJUPS3m0TUcdGafJuV5VjaKnlzx%2F3De4pOUV%2FJpUZgXCAwoHYIhBxZJi3FG%2FUOkokc4C2nNWsyGvlx3ei2hT9ww6xVs46IVBWx7b%2B0IkQTGRFp8jpwkc2O88p5Vqs6XMJngX8%2B5o055Wf1dJyTT125NufezEuB%2Ff5QR%2FE9vuxWNy&X-Amz-Signature=d6cdcec09a8804ef9185a501fdf30b489559218aa6f919f4a32cd2014ad16770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIPXTXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkhTkUXVvsinxmQdTNIPJh0%2BFUaf0Y7JRgAafLqHV79gIhAP%2FplTHeRmtqLSft9PxtQYJU6H%2BY%2FdnL63lFmM6vHs9OKv8DCDQQABoMNjM3NDIzMTgzODA1Igz8UcvYIIdrVIEhltcq3AMSsvGvlTcF8XO64yhNbUdKRRZki%2BxTiNDmVag0oQ64%2FzIbkJCWqhrcibKZUtw4T7%2Brmt66vQFptOUAMFi%2Bx82zdt64vkiYDWUjmY21kRuNW6%2FzkkG4j1gjxmaW4FNIMSD6AweicXJ7SqwhEmh1D51oqgCaHI1BMy1JYTZUhqA4uBaLBGP1J1PWK4y7oq1mWaShWcE5eLTjfjQhzDJqfyrq60zz6ho4UKhBlxmK1UqQtOwSxDjiBolXjy5RxDVSJVROBqee7l4sByrhwcnENIVOtZxpNj6LqfcJZZU%2BdNGaBBQfTdEiOU%2BXpOnYyIvxXesmGm9xle%2BXWUFsVmPT%2BeV1nXok2p7fE4Ene7m9itznSLMUpXN6vGLNyxuswg7NyHs%2FmpL2cLOUQMJFTxFveTMvkrKD0m3cEBdupV7N8fG2pIqLM33VL1ko1H9rlt%2B9w6R3euyP5hr7Nn%2BX%2FxsMg7BL8%2BRc33YlqKWefDkObHTMKRCtBCR1Lq535Bsoroi0vhdGH004VJileC9ppAOhpzoiZtrnYbKAKiaIecq%2BO8fR7pnL6o4HQe1GUmyzLDvB8kc3kn9%2FvbZ3Y0Wc%2FEpAuaXI0Z0XVxlEb0VGJSn8cOWu7RzLpRnZYpTF7UFlwDCMkcLJBjqkAY8EHk85b69Ed%2BppFL%2FYYzF0jVyWhTk4svb4tfPRInKUZRyeoJUPS3m0TUcdGafJuV5VjaKnlzx%2F3De4pOUV%2FJpUZgXCAwoHYIhBxZJi3FG%2FUOkokc4C2nNWsyGvlx3ei2hT9ww6xVs46IVBWx7b%2B0IkQTGRFp8jpwkc2O88p5Vqs6XMJngX8%2B5o055Wf1dJyTT125NufezEuB%2Ff5QR%2FE9vuxWNy&X-Amz-Signature=dc8ee28d3893ffee2a2d9c0b58790479cf81d6321626480d412e6c6404d2e573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

