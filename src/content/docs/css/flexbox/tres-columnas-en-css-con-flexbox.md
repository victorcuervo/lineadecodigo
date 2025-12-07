---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDNGSV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrpIzcaSodoIXeDVOO0RkKHyXvN4F%2BJp8FiAb3EJqUJwIhAJQcPQB6PzUrjplciK8zZqlVYPTnrnLjVropfo0kHszpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMInilg5yezbYkzvoq3APMfBd2ZsOY0%2F3ap4hHQJ3M%2FN4jtm0tlHVFUl6kYdPrYGmTFWe7jikZwJUsFqdDOCggKt9JT2d8VWN5juELTXWXk0fa4kiQctWQrxfhMKVIrFWphM5E9gqI17U8n98RHS3HBHHr5fD9wPTxZZAOoUd3BF0GBlmWuh6JKEN2HcURsVMjz2FaZziltkqRacw209KlcT6HGX4PhcdCHZ2Xt%2Bub33vraXb5YliVSapUAU4KwUh1%2BbO8tn4tHUJ8BNKdv9zxCB6TUCwan%2Bz0YBV7L6Hp%2BFc5Mx5OZpLxLDiWmeM1IKr75kF9aOl%2BYVLKCxpLlOo09oS0RGkoCyyfT7%2BqtR5uCm7Cfkah9FTyUonjqTuxMXh7cx%2FLetynuWz7ZHMWYE3yGB801ACwalJvNVomT9k%2BcZLQPnOVrlEqf8p%2FVRZ4fqZlhpg3o3ZmB8DKaBIeB7CYnVglAlcFpBVTtQWjw4Hkhb%2FuwYbGt6uzkoX1rGhP7BL7M4UW8leotpDej2rCqYqwetHpRnmlCuFTqcOsgNhnnOcSnzsH9k0cw2avuondiETL0KmUq7%2F5%2B%2F%2BfYYt5DFHEA7OMWX%2Bf3QmO2QmCtAIUDZyHEEp3cnWTZibSMkASRYEGgp%2BnTkBzEDgMsDDd%2FdLJBjqkARNZsyvTEe6MexB2F2IA%2FQfLeTV5Bs1zYspU3oC5roIAS2rCNagLGmne3DiDDT%2F7RoKCmBSDYt1T6CEe%2Bx8eo8%2B15onv2bllJC89gAOGTi%2FhIucNLNxy3gJXtJTp2JQ37vyfCc3WsHiqxIs4BmDczb8CuUuXJVv2t37swWJ0Vhk9AJpno3YD4C4qwkPmAAOP%2FCxdN6GcWFMUBLVxn%2F2HZ%2FB5qvfN&X-Amz-Signature=b7712187b4a3be6135c456f566dce62585c5db17fc1c93e3b8d847c45b8b234d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDNGSV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrpIzcaSodoIXeDVOO0RkKHyXvN4F%2BJp8FiAb3EJqUJwIhAJQcPQB6PzUrjplciK8zZqlVYPTnrnLjVropfo0kHszpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMInilg5yezbYkzvoq3APMfBd2ZsOY0%2F3ap4hHQJ3M%2FN4jtm0tlHVFUl6kYdPrYGmTFWe7jikZwJUsFqdDOCggKt9JT2d8VWN5juELTXWXk0fa4kiQctWQrxfhMKVIrFWphM5E9gqI17U8n98RHS3HBHHr5fD9wPTxZZAOoUd3BF0GBlmWuh6JKEN2HcURsVMjz2FaZziltkqRacw209KlcT6HGX4PhcdCHZ2Xt%2Bub33vraXb5YliVSapUAU4KwUh1%2BbO8tn4tHUJ8BNKdv9zxCB6TUCwan%2Bz0YBV7L6Hp%2BFc5Mx5OZpLxLDiWmeM1IKr75kF9aOl%2BYVLKCxpLlOo09oS0RGkoCyyfT7%2BqtR5uCm7Cfkah9FTyUonjqTuxMXh7cx%2FLetynuWz7ZHMWYE3yGB801ACwalJvNVomT9k%2BcZLQPnOVrlEqf8p%2FVRZ4fqZlhpg3o3ZmB8DKaBIeB7CYnVglAlcFpBVTtQWjw4Hkhb%2FuwYbGt6uzkoX1rGhP7BL7M4UW8leotpDej2rCqYqwetHpRnmlCuFTqcOsgNhnnOcSnzsH9k0cw2avuondiETL0KmUq7%2F5%2B%2F%2BfYYt5DFHEA7OMWX%2Bf3QmO2QmCtAIUDZyHEEp3cnWTZibSMkASRYEGgp%2BnTkBzEDgMsDDd%2FdLJBjqkARNZsyvTEe6MexB2F2IA%2FQfLeTV5Bs1zYspU3oC5roIAS2rCNagLGmne3DiDDT%2F7RoKCmBSDYt1T6CEe%2Bx8eo8%2B15onv2bllJC89gAOGTi%2FhIucNLNxy3gJXtJTp2JQ37vyfCc3WsHiqxIs4BmDczb8CuUuXJVv2t37swWJ0Vhk9AJpno3YD4C4qwkPmAAOP%2FCxdN6GcWFMUBLVxn%2F2HZ%2FB5qvfN&X-Amz-Signature=885039a4d25265085ac73187d2ce50fdd3b236fd8c68ef47d28d4ad186fea95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

