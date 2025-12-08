---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBYBTJP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1NtwiSMayGXN%2BvoJJZQ0xjR6tdLL1P%2FDGDc7IPHNtTAiACw9d6Vp8qmkjzyqWP%2FC51ctv8VCUuwk3SLtThatrrBCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhVPtEoKe76C6c4vKtwDjP33QteePd1Y0DQrYjQzOEgxGB63oasmSHeGZme5NP6NboFX%2F%2Bm%2FabOC4eH5y7Av%2FJHMWE7CsmVhz6%2FaEuaOCyhMo%2BYdlfV19Bi4%2FK3PKm3gS3pxaAiwuJL%2FzmEScq%2B9oNaEw8Xmy6gP4F46lR1wYx1RJVzlvUvQsFrV03gGgNjBkB8DNRrXh7EW79ngyoY%2B0I0fOucxVVFOIyFhth0FQFbMPYX%2F%2BzyPitxn7z1CX%2FdNoIc%2BBMsb83VUKE738DqhehtP3SaOC%2FFJrY8N6oyTzV0sBf4NvcG6jBmFJI66fpD8wYc%2FkO1nERr40qZCPI69micnd%2B0QT%2B6aEK%2FH9%2BUW6o1P6WeFMdqjppjioUrDnU%2FKyDBxtW8lRe2hhj8eWVBBPvm56vzxKWJTb3PYY6Djk6aU6n4cCss5hOTJ5%2FwbnEwSJXEuotiZEU7%2B39CS5ZTzEaLIOR9DaEw3CoTc8Re9F%2FZAfE7uL60cgMnWL1xlF9XNTlq9LWrQoVft1C6lfvARs0LevgY8DaD7Z61WwZVbrTXwXhhU7OB6VccU40z%2FTwBrR6dtBoQbkQoNK7JGuxnW4lvUJNDr1G%2Bh5KU7pJtPBFAitUuE87e8XwvFn0oCEjprfM1oJtKtxugrlBEwy5TZyQY6pgGU4U%2BNKA7b4o8oZsb6CkUwwRp%2F9ncNNPF5njTUEJVaAehYZNOQ%2FYbLQwSFh0LO7VU3SFkr5ybPxWR0S7lXh2hS6jKnWO4DwLbpY52%2FymyaAjQylPtPucbNj5yS%2F32YJbWbIPhGiHPNKAWqcdl1hUSgiFI2%2BRPLTLUgU2ldmBpDBUA5LqsZdCBKvY0RWYJ5e0cowg1k%2FmIttz89n6snP%2FMLN4lQeQ4J&X-Amz-Signature=5db5649a73729ffb724dc4ffbe0134adf8173aca31c86efbc97df7cb2d00c63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBYBTJP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1NtwiSMayGXN%2BvoJJZQ0xjR6tdLL1P%2FDGDc7IPHNtTAiACw9d6Vp8qmkjzyqWP%2FC51ctv8VCUuwk3SLtThatrrBCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhVPtEoKe76C6c4vKtwDjP33QteePd1Y0DQrYjQzOEgxGB63oasmSHeGZme5NP6NboFX%2F%2Bm%2FabOC4eH5y7Av%2FJHMWE7CsmVhz6%2FaEuaOCyhMo%2BYdlfV19Bi4%2FK3PKm3gS3pxaAiwuJL%2FzmEScq%2B9oNaEw8Xmy6gP4F46lR1wYx1RJVzlvUvQsFrV03gGgNjBkB8DNRrXh7EW79ngyoY%2B0I0fOucxVVFOIyFhth0FQFbMPYX%2F%2BzyPitxn7z1CX%2FdNoIc%2BBMsb83VUKE738DqhehtP3SaOC%2FFJrY8N6oyTzV0sBf4NvcG6jBmFJI66fpD8wYc%2FkO1nERr40qZCPI69micnd%2B0QT%2B6aEK%2FH9%2BUW6o1P6WeFMdqjppjioUrDnU%2FKyDBxtW8lRe2hhj8eWVBBPvm56vzxKWJTb3PYY6Djk6aU6n4cCss5hOTJ5%2FwbnEwSJXEuotiZEU7%2B39CS5ZTzEaLIOR9DaEw3CoTc8Re9F%2FZAfE7uL60cgMnWL1xlF9XNTlq9LWrQoVft1C6lfvARs0LevgY8DaD7Z61WwZVbrTXwXhhU7OB6VccU40z%2FTwBrR6dtBoQbkQoNK7JGuxnW4lvUJNDr1G%2Bh5KU7pJtPBFAitUuE87e8XwvFn0oCEjprfM1oJtKtxugrlBEwy5TZyQY6pgGU4U%2BNKA7b4o8oZsb6CkUwwRp%2F9ncNNPF5njTUEJVaAehYZNOQ%2FYbLQwSFh0LO7VU3SFkr5ybPxWR0S7lXh2hS6jKnWO4DwLbpY52%2FymyaAjQylPtPucbNj5yS%2F32YJbWbIPhGiHPNKAWqcdl1hUSgiFI2%2BRPLTLUgU2ldmBpDBUA5LqsZdCBKvY0RWYJ5e0cowg1k%2FmIttz89n6snP%2FMLN4lQeQ4J&X-Amz-Signature=5b003fa0cd2b3938ea94f9f46f5bedc6bfe0e6dcbe567ec6a3e110b17aefa804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

