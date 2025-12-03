---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2DF7Y2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCJ5u%2BM0CSHSdHeWrJq7M0J6igHiiHNx%2FdlEQoYj4FyXgIhAPIIW2aDY6IiTTv6sg1HFt13KJF%2F%2FV%2BrLzo%2FPWk07S%2F2Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxnnssNjjIYvpXNjHIq3ANoMnKteButTWilSAmA%2FMbCLTFvv5KVVVOivCLUfmpU6M%2BoIOLDGGpB0GGvdVPL62dYPNZlMxit2C7caxJu8FKtnC97Cdwhv%2FcpigReWRF7fFHD%2FmNXSqg%2BIYpUYShOke10UAcngp3DPcV60eFH8eFanfz1b3E7fIa%2F417At0lumqmRYtq8KlxA52SdkREel1T%2FHZu%2F2cRWg6yRzSCnoKywj%2FsdBlI56FiJr2jYo6OAJVYhlNz4nyaFD0h2MoNEcxr768n4FZRc%2FwFlRR0Q%2B273OUWpYcz6digJRF61LwrAVOuugf3ZYku8r9p5ptfecolbiroGNJTEtcA0CUPR9kaRta3YUr0%2Bo7QMJo5FbUcf0%2FPYbBOFidX4AkqRw8zSG%2BGoiqxb7OcZBnAeU5nVDfsb7kAhPDmgZXq4zDYnKUhrxw15eVNY3wlXy1cXiT1y7npsyUHsdq27fpw4b5QgdtoW4sYvqEgbwDKBveyiJa5ueG%2FrY3fbG34rESCSbO6E4uxtSYl%2BreyepqpCBpdPk1e%2FRx%2BSDhUuu1cB%2F2YciIavVDXq2n0IUQGbeHBsrG4xv4AzGVtQYWp%2B8eWV%2B%2Bw36gPKquqRN7f2nj2X%2FUE27aAN4R3z3I5a%2Fgv3rpLjHzDYvcLJBjqkAQ8Xk2Uy%2Bm3oKsvuin1Y5CZPJXINkfKU4l21CA6%2FTX2QO28U%2FDKVjVqvwJ4zNM%2FzdlQydCfl1Hwjd0ASsh84c%2B%2BYZ9T%2FcCdxlpSJ0Urcqy2BbBdqmgpEPA2GiYMkZYl2%2BzBkrboq14leljq3hURkuIAlhw6EFs1qR6cL5wCRNmcZETik0rYiuiDU8i0sdZWrNUa4uK00uiX8%2FD03hEF9OdcqKrh5&X-Amz-Signature=871b7e44c266f89a623a5ff67dbee8cdf8f3af1345d474d6d7d5595038c6ffe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2DF7Y2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCJ5u%2BM0CSHSdHeWrJq7M0J6igHiiHNx%2FdlEQoYj4FyXgIhAPIIW2aDY6IiTTv6sg1HFt13KJF%2F%2FV%2BrLzo%2FPWk07S%2F2Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxnnssNjjIYvpXNjHIq3ANoMnKteButTWilSAmA%2FMbCLTFvv5KVVVOivCLUfmpU6M%2BoIOLDGGpB0GGvdVPL62dYPNZlMxit2C7caxJu8FKtnC97Cdwhv%2FcpigReWRF7fFHD%2FmNXSqg%2BIYpUYShOke10UAcngp3DPcV60eFH8eFanfz1b3E7fIa%2F417At0lumqmRYtq8KlxA52SdkREel1T%2FHZu%2F2cRWg6yRzSCnoKywj%2FsdBlI56FiJr2jYo6OAJVYhlNz4nyaFD0h2MoNEcxr768n4FZRc%2FwFlRR0Q%2B273OUWpYcz6digJRF61LwrAVOuugf3ZYku8r9p5ptfecolbiroGNJTEtcA0CUPR9kaRta3YUr0%2Bo7QMJo5FbUcf0%2FPYbBOFidX4AkqRw8zSG%2BGoiqxb7OcZBnAeU5nVDfsb7kAhPDmgZXq4zDYnKUhrxw15eVNY3wlXy1cXiT1y7npsyUHsdq27fpw4b5QgdtoW4sYvqEgbwDKBveyiJa5ueG%2FrY3fbG34rESCSbO6E4uxtSYl%2BreyepqpCBpdPk1e%2FRx%2BSDhUuu1cB%2F2YciIavVDXq2n0IUQGbeHBsrG4xv4AzGVtQYWp%2B8eWV%2B%2Bw36gPKquqRN7f2nj2X%2FUE27aAN4R3z3I5a%2Fgv3rpLjHzDYvcLJBjqkAQ8Xk2Uy%2Bm3oKsvuin1Y5CZPJXINkfKU4l21CA6%2FTX2QO28U%2FDKVjVqvwJ4zNM%2FzdlQydCfl1Hwjd0ASsh84c%2B%2BYZ9T%2FcCdxlpSJ0Urcqy2BbBdqmgpEPA2GiYMkZYl2%2BzBkrboq14leljq3hURkuIAlhw6EFs1qR6cL5wCRNmcZETik0rYiuiDU8i0sdZWrNUa4uK00uiX8%2FD03hEF9OdcqKrh5&X-Amz-Signature=9cff7ca8590a944b85d82d322f62dcf89e8170ee029583b91a68ddeeead16f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

