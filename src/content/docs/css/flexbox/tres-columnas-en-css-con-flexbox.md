---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDT2HTU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB40rsP6Gt8pcd%2FVlYh7YZsgrpwQDRj8Ap26YfDP9VGCAiEAxjXnmimunyNEd9l%2BhPbitZFXAh6Z2C0dioPDpjTfRTcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOQGf%2F77beAiZ61circA9SFrPtnF1e3Q8Y5FNouDU2i3vBc%2BCO4I3wfQrsDp0fcBagQNb0PMEe7fnpIkfdBgkyji%2FL0A11AhU4Rpajwn9KbFL55HjF6A4VCK%2BkW%2FCX5SYqknLZoXBYRhAAWpTvFAcT0h4iWgYMBJYfM%2FRRs%2FQwsSyNX8g39Fc8QeyHf%2FHt7Ndui%2F85BfXiclPaetd5DQQBbU8DsdFsils%2FjDC%2BrQhLGbAPIHdLMTrMI3c%2BNhnButntdUbyq%2BRo4I863Q9wOuK47%2BeCMnGGIr4sTchzFMIsqxCtkmR1LTOWkOqkFjUTLh%2FeyU327Paw8ExIG6ZJqmUcls%2FEAy2Kn6uO4611Oo03pF%2B0OdOGjtDf2KVMiLicqPnxS8CZJqjCERZlTQ6%2F%2Bi7EW6R%2FyZthkqj0WaAq5PiMBzCE0Tymzr8YVWDm3oESfO1WWGNf%2FDz9CKP29YBwphbOLsohSTcpx9h1oHCljhG7mbPImck0xVnjWsmvdEVMu21sRECGZqbxNfPBzeAlyiK4H8tNg%2BynrHLfvblqI4abpOt6Ix4%2BDUvEtXm3vaJAILqWvJYfnzjIrcfIVcZhG%2FWsitETFhEQDC2RnenVO09lyboeN8r3eSb7LLC3nPdoIm5XxnaOU27HxhyZhMKrC3ckGOqUBVgkMkD9jldXzZMqF%2FyLlE15J1cJJhQSTXmQAjEydTw7SnxSdpAKzG2aRFZdA9YRNhXQ81tB2oyxM4zaJE0m4jMjg1IKXDxzvpc2VZDW7cPBDKK1RKEo0BjI8TwGeI%2F0hFF2Aey3JQghulSWgq7ZpPXYm6CJiiHWyOqk4Tyyaq4PvZtoAQ8DNGF3nIi1Dk%2FQVtdDcMYuNIKDuTua3OvolFadhqib%2F&X-Amz-Signature=0d66a41a32eb1bc1073935e56d701d193eead990541c3d8c059453a564c9905d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDT2HTU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB40rsP6Gt8pcd%2FVlYh7YZsgrpwQDRj8Ap26YfDP9VGCAiEAxjXnmimunyNEd9l%2BhPbitZFXAh6Z2C0dioPDpjTfRTcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOQGf%2F77beAiZ61circA9SFrPtnF1e3Q8Y5FNouDU2i3vBc%2BCO4I3wfQrsDp0fcBagQNb0PMEe7fnpIkfdBgkyji%2FL0A11AhU4Rpajwn9KbFL55HjF6A4VCK%2BkW%2FCX5SYqknLZoXBYRhAAWpTvFAcT0h4iWgYMBJYfM%2FRRs%2FQwsSyNX8g39Fc8QeyHf%2FHt7Ndui%2F85BfXiclPaetd5DQQBbU8DsdFsils%2FjDC%2BrQhLGbAPIHdLMTrMI3c%2BNhnButntdUbyq%2BRo4I863Q9wOuK47%2BeCMnGGIr4sTchzFMIsqxCtkmR1LTOWkOqkFjUTLh%2FeyU327Paw8ExIG6ZJqmUcls%2FEAy2Kn6uO4611Oo03pF%2B0OdOGjtDf2KVMiLicqPnxS8CZJqjCERZlTQ6%2F%2Bi7EW6R%2FyZthkqj0WaAq5PiMBzCE0Tymzr8YVWDm3oESfO1WWGNf%2FDz9CKP29YBwphbOLsohSTcpx9h1oHCljhG7mbPImck0xVnjWsmvdEVMu21sRECGZqbxNfPBzeAlyiK4H8tNg%2BynrHLfvblqI4abpOt6Ix4%2BDUvEtXm3vaJAILqWvJYfnzjIrcfIVcZhG%2FWsitETFhEQDC2RnenVO09lyboeN8r3eSb7LLC3nPdoIm5XxnaOU27HxhyZhMKrC3ckGOqUBVgkMkD9jldXzZMqF%2FyLlE15J1cJJhQSTXmQAjEydTw7SnxSdpAKzG2aRFZdA9YRNhXQ81tB2oyxM4zaJE0m4jMjg1IKXDxzvpc2VZDW7cPBDKK1RKEo0BjI8TwGeI%2F0hFF2Aey3JQghulSWgq7ZpPXYm6CJiiHWyOqk4Tyyaq4PvZtoAQ8DNGF3nIi1Dk%2FQVtdDcMYuNIKDuTua3OvolFadhqib%2F&X-Amz-Signature=eae60373b300d992f1e1a8ffabfe257cb3979a6f86dc902d5dc21bc42ccf28ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

