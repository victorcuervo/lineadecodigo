---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OFENEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnPWMWEqZlYSX5%2BpwELlk22Wv1fxc0%2BFOp5qQcNX%2BJ0AiEA3vRa7IksETbqSa1D6RPB4pkjUlh41GA8KKMsuTmshmgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnq9oDw4JKiOSdrFircA8BD3rbyNQ%2B29%2FonQqn0SMpzjshO7eSYLsKHJIyhtRA6UgRiF1z1MSJBXxBj0o9nbky303iWB0ZVEPTru4%2BP8kCTx8E7cu8lREy5wsQnVRVfBal0ntApO1%2FeO7JgFEscE5wx7rNNqx72gQvcg5Pj%2FaUUHb8MH13sVRMbdEmFSHACZ2AWl1K5rFzEEXwjk%2FIRKD%2Bgu8bVgVYab%2F55oHTK64I9oe1XqszTlNWrpwjvUqw8o9G%2BpQBOTkDKm7pjbFWxwiqJdk4eW1KOhjKbuVC6t4TXiJhkdulIEh2h6y5ehjTX2Top2HCLkTdFS5VconcqncMzTSkez2naz88cPjWVeaUVbsvOfDMoQmwy%2BCQI8W69Z6q5niqOwfdWxlHtS7ZNRVB%2B8w3qLiaFC8sTcNJDNuDbevOU7nmGAR0MBFM2KX4%2B9QIpoOiAwlwJVh0MOaiEszDJxXjqqnGIcBejc8miECRfJYTqdw%2BL4Przeq9yN4lDRVGTs3KVza81Mx4i3yun1TxkzBTjd%2Fl4nO1EGYrsqAAQwCcp2cklYO%2FNw6qZGtiOBssUgiinG9hRrhPC60Ok9iIUo6JTz6olaGj0cDMbGFXV5EM9R7yhtyX4xZ65l2zGEv2yUxxpK0IdwIMOMM%2Fc3MkGOqUBkBdj%2BouLPspP26z1XVEeey8gRLAjoiNIWpxptcz3vqNIzm8l1gwMK9fC2ZTDUFYTmlCtakzu5vABFbWbCTVfCbDKKiYRdnOlw%2Ff43JnUMxBf3m%2FFe8%2F4A%2Bqwfv%2Byp9vYV8JrPcuFsJ4AJeGnbUE4ePMssWDYdTV1tzbDW9btthmKM0gwk5I%2FgvZVx%2FKRcBEym5CqdkWXqfHMp8%2F4YTiMCP23PtMQ&X-Amz-Signature=4c0fc64e032ac1ffb2b4cb76d84be34e4d517b5776b48e179138fd743dc5ce60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OFENEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnPWMWEqZlYSX5%2BpwELlk22Wv1fxc0%2BFOp5qQcNX%2BJ0AiEA3vRa7IksETbqSa1D6RPB4pkjUlh41GA8KKMsuTmshmgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnq9oDw4JKiOSdrFircA8BD3rbyNQ%2B29%2FonQqn0SMpzjshO7eSYLsKHJIyhtRA6UgRiF1z1MSJBXxBj0o9nbky303iWB0ZVEPTru4%2BP8kCTx8E7cu8lREy5wsQnVRVfBal0ntApO1%2FeO7JgFEscE5wx7rNNqx72gQvcg5Pj%2FaUUHb8MH13sVRMbdEmFSHACZ2AWl1K5rFzEEXwjk%2FIRKD%2Bgu8bVgVYab%2F55oHTK64I9oe1XqszTlNWrpwjvUqw8o9G%2BpQBOTkDKm7pjbFWxwiqJdk4eW1KOhjKbuVC6t4TXiJhkdulIEh2h6y5ehjTX2Top2HCLkTdFS5VconcqncMzTSkez2naz88cPjWVeaUVbsvOfDMoQmwy%2BCQI8W69Z6q5niqOwfdWxlHtS7ZNRVB%2B8w3qLiaFC8sTcNJDNuDbevOU7nmGAR0MBFM2KX4%2B9QIpoOiAwlwJVh0MOaiEszDJxXjqqnGIcBejc8miECRfJYTqdw%2BL4Przeq9yN4lDRVGTs3KVza81Mx4i3yun1TxkzBTjd%2Fl4nO1EGYrsqAAQwCcp2cklYO%2FNw6qZGtiOBssUgiinG9hRrhPC60Ok9iIUo6JTz6olaGj0cDMbGFXV5EM9R7yhtyX4xZ65l2zGEv2yUxxpK0IdwIMOMM%2Fc3MkGOqUBkBdj%2BouLPspP26z1XVEeey8gRLAjoiNIWpxptcz3vqNIzm8l1gwMK9fC2ZTDUFYTmlCtakzu5vABFbWbCTVfCbDKKiYRdnOlw%2Ff43JnUMxBf3m%2FFe8%2F4A%2Bqwfv%2Byp9vYV8JrPcuFsJ4AJeGnbUE4ePMssWDYdTV1tzbDW9btthmKM0gwk5I%2FgvZVx%2FKRcBEym5CqdkWXqfHMp8%2F4YTiMCP23PtMQ&X-Amz-Signature=f5265515ad4d3b03d066d1e381a1671809c12c60ffaa5e11d4a16f5a7353687f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

