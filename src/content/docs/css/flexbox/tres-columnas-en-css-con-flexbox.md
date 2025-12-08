---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2VRBIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEwGKNPPszPrjIOqbNPUIAkUaTcWw3JJsp%2F6RCCVAMfAiBG9PMYncmQmxOPdCdySGaD8xda6eK9wxMbkT88odb4nSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRZH0OsEaS2FAP9sKtwDUCuv8CP59bSxmTynUCxCN9zbrN2KAibZ8yQAQx8hVjEjKrOLSda%2BnB4OfOb%2BRm5NxrqnNdRR8pJeglpRhEroZNAXkD8OEbLSchm%2BD6F0uAOryx38H6Tv5fdxBqKHxn%2B1kFjSJH1agE4hDqkmHK5CM0cncmYNJSUXmqpSbjCA%2BXZbPBLq%2FEq2X7V9rt6%2Bw2an%2FMqhm9AsDd4dwtWdFGujKauguFGlm6DOMnO3E7IScnySpjsgO09j5PRbmSVhah4AA32G84Qs1IzRw30fnAGXObLkdauB2VtTE9NTC6h2AXngdtv5BVydIKtHYe4MfCqZzPTz%2FvKSzogh9OvlS3MCVzMh4xFWDQTJLICILwbVfCcQfdke7PXFms4kX1sDnwSKqTwj%2BKSr9Rm3PWQpM2hPlHrwnLX2mkDwXaHHiFnamfsHzEv4Ux9zoIU2irMnSLSaA3Oy5I7Cd9WtpIzTjHa8I1bwsRNmKmVWpa0Vjc1%2B%2BDkI75zc%2FQezTz8LKc5Ls7tdtAu0ow162WBkc%2FpJnwkF6MriBRoWvIX6e1pRXld0uM4dQiNMC4gTPGeBAN8J9Jq4iuM02Wthcqe5u9cDoLI2tFl8zEesvasYMWk9NggQFTFmZHwr9mYqC5wJsIAwuaHYyQY6pgGfuUzbdcD4dA642h3zIELnDSgVYnzFeFN%2FXWi7qgFJaSOiXG76tSMw2QRHjCsNBNt0%2BajboQzebZ9BPfUpzZrhcrx2IHI%2BIPAylX8eQJ%2FXmzG3zOm49agd%2F2pxACCT1GGu8EImA6jrMTfyS9aSl15OU71lVbho6wxfKQ3XcRJqq0uFN166XdmXxTw35JkJS4jy%2FOy%2FqnF15HDdCFPQOwUHitqh0%2Fhm&X-Amz-Signature=a78927364c339eccd5c6981a8cfbcc45b2cf37fbda0608ab279dc21084e38e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2VRBIP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEwGKNPPszPrjIOqbNPUIAkUaTcWw3JJsp%2F6RCCVAMfAiBG9PMYncmQmxOPdCdySGaD8xda6eK9wxMbkT88odb4nSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRZH0OsEaS2FAP9sKtwDUCuv8CP59bSxmTynUCxCN9zbrN2KAibZ8yQAQx8hVjEjKrOLSda%2BnB4OfOb%2BRm5NxrqnNdRR8pJeglpRhEroZNAXkD8OEbLSchm%2BD6F0uAOryx38H6Tv5fdxBqKHxn%2B1kFjSJH1agE4hDqkmHK5CM0cncmYNJSUXmqpSbjCA%2BXZbPBLq%2FEq2X7V9rt6%2Bw2an%2FMqhm9AsDd4dwtWdFGujKauguFGlm6DOMnO3E7IScnySpjsgO09j5PRbmSVhah4AA32G84Qs1IzRw30fnAGXObLkdauB2VtTE9NTC6h2AXngdtv5BVydIKtHYe4MfCqZzPTz%2FvKSzogh9OvlS3MCVzMh4xFWDQTJLICILwbVfCcQfdke7PXFms4kX1sDnwSKqTwj%2BKSr9Rm3PWQpM2hPlHrwnLX2mkDwXaHHiFnamfsHzEv4Ux9zoIU2irMnSLSaA3Oy5I7Cd9WtpIzTjHa8I1bwsRNmKmVWpa0Vjc1%2B%2BDkI75zc%2FQezTz8LKc5Ls7tdtAu0ow162WBkc%2FpJnwkF6MriBRoWvIX6e1pRXld0uM4dQiNMC4gTPGeBAN8J9Jq4iuM02Wthcqe5u9cDoLI2tFl8zEesvasYMWk9NggQFTFmZHwr9mYqC5wJsIAwuaHYyQY6pgGfuUzbdcD4dA642h3zIELnDSgVYnzFeFN%2FXWi7qgFJaSOiXG76tSMw2QRHjCsNBNt0%2BajboQzebZ9BPfUpzZrhcrx2IHI%2BIPAylX8eQJ%2FXmzG3zOm49agd%2F2pxACCT1GGu8EImA6jrMTfyS9aSl15OU71lVbho6wxfKQ3XcRJqq0uFN166XdmXxTw35JkJS4jy%2FOy%2FqnF15HDdCFPQOwUHitqh0%2Fhm&X-Amz-Signature=260703d6d0b196ceced4f8cbb69031373531bb785090560c31d4b5a21020eb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

