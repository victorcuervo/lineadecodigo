---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVFX5LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FcCiNEqWrFDUC1uau504nmxOz%2FyZURuDDnOYHY2e3AiB4SwxakyJ3WllhSFbCmA9bny29NvYdp3iHvwJxu4rgBCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbUGvsgdCA2bQJ9scKtwDPPX49bHsrJAdAEQKs9blyYAl1FgMCFmRC6Rxv7sWAkYwubOeMc2pjJIsSEK%2Bf2B%2BOu1RY%2FvmNNzSlo7lhK117oRQ07Ah%2FL2RIXWdy3hMHlXH8awoDYAY09Y0f%2FwzQKXuxOzfldV9f0LhIQCIeZHQX1FRjWImepMOtEOzpcpF9yz8Syjn0clz27x1mOe25f3EwRdOHf6VMCmppKD8vi95XgpBID4X2tGGZ%2BWynm8ng4%2BVIhwr9MQRzUkdsqQAsyI0E7Onk7gpMH0nnkTSksLCsK6E2uFTZda0fdE4LfFOG8hJSwXai7C2uZ%2FjIq9Z%2BjA%2Bs1tZW7aStj3kYRDS7kDqQS1%2Br8F68q3NaU%2FBQS0AAuySNiupNwZs7m%2B7roQskLVk8FJxDmr%2BjkLysUPm4x6MHX4E475KZAos%2FBbmVr1%2FYyEue0ndbj%2FIKF2CMbbinWh%2FlCYLsI3o4scgpCwOsb5V90UYQIl69UiSnXMtXb97dixepY9DShkgFD71dZUq38D0dFyLMOBw5swMow19th4JzFLEv5CMfQjAgv7neJaXb3ffO6wybkCrOAbVneRdCValhhvlWWHiroKA4xrm0NtTHelWdeRB%2Bmb%2BUuhrbLLF0jxGuk%2F0JUF7zl6VqLIwq87KyQY6pgFamLgjUiiHvfG9zVXkY8rbDK5wGVGMEebGpIao8ooWa6J1OCZPFLl1UhilUTyr4qz0HHXpQPveAfy4y%2F5vyUfRE5DtUtIxUUabi6st3PiMk%2BJjr6meuBn7oYZQDjGHWEGKTvw92oSSpKPJLc5uXQZ4Cy5ce%2Bc3BXgU9RxXbR8FIAbaeSPRBX8X6ppvplvwhDRTc7Q49IqOrRz96vSbeq8l7f2Nmd7c&X-Amz-Signature=19627c955a5bc6a87b3db777f2419def96d0a9b04a9876544ab2280dcfae9c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QVFX5LM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv%2FcCiNEqWrFDUC1uau504nmxOz%2FyZURuDDnOYHY2e3AiB4SwxakyJ3WllhSFbCmA9bny29NvYdp3iHvwJxu4rgBCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbUGvsgdCA2bQJ9scKtwDPPX49bHsrJAdAEQKs9blyYAl1FgMCFmRC6Rxv7sWAkYwubOeMc2pjJIsSEK%2Bf2B%2BOu1RY%2FvmNNzSlo7lhK117oRQ07Ah%2FL2RIXWdy3hMHlXH8awoDYAY09Y0f%2FwzQKXuxOzfldV9f0LhIQCIeZHQX1FRjWImepMOtEOzpcpF9yz8Syjn0clz27x1mOe25f3EwRdOHf6VMCmppKD8vi95XgpBID4X2tGGZ%2BWynm8ng4%2BVIhwr9MQRzUkdsqQAsyI0E7Onk7gpMH0nnkTSksLCsK6E2uFTZda0fdE4LfFOG8hJSwXai7C2uZ%2FjIq9Z%2BjA%2Bs1tZW7aStj3kYRDS7kDqQS1%2Br8F68q3NaU%2FBQS0AAuySNiupNwZs7m%2B7roQskLVk8FJxDmr%2BjkLysUPm4x6MHX4E475KZAos%2FBbmVr1%2FYyEue0ndbj%2FIKF2CMbbinWh%2FlCYLsI3o4scgpCwOsb5V90UYQIl69UiSnXMtXb97dixepY9DShkgFD71dZUq38D0dFyLMOBw5swMow19th4JzFLEv5CMfQjAgv7neJaXb3ffO6wybkCrOAbVneRdCValhhvlWWHiroKA4xrm0NtTHelWdeRB%2Bmb%2BUuhrbLLF0jxGuk%2F0JUF7zl6VqLIwq87KyQY6pgFamLgjUiiHvfG9zVXkY8rbDK5wGVGMEebGpIao8ooWa6J1OCZPFLl1UhilUTyr4qz0HHXpQPveAfy4y%2F5vyUfRE5DtUtIxUUabi6st3PiMk%2BJjr6meuBn7oYZQDjGHWEGKTvw92oSSpKPJLc5uXQZ4Cy5ce%2Bc3BXgU9RxXbR8FIAbaeSPRBX8X6ppvplvwhDRTc7Q49IqOrRz96vSbeq8l7f2Nmd7c&X-Amz-Signature=d9165cd71d38080b9c07a464280919c61648876feb281998ac9202835bed5d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

