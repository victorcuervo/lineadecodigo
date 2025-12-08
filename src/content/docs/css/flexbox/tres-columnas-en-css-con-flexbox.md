---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQFJKBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmwu2vZnVy4DALaMfKvU5wfCwzGvnSuSUNrxZQly7bkAIgPaDNz4wR9uaQMnPGcRXvnjb%2FdSaFj2SnHMrOV9VtS0AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN02cJjKy04DVI6BlSrcAzbqWPKKoVltbIRdLHyHEWUC55RhELzVjh9L1KBqnfVtkKsylQx2FKYmtwLOz01GUMwxfG33F%2FoqtgvZVU%2BQFn5fx%2BtYJ6d7GEJ3k3nK%2F3w9Xy12dJwNSMuj0gVcuvHCVcPU5mNO8Lhy9hhqTpVHTtFTEKEm9VAJTmQIls%2FxA3t%2BX5gS%2FzIG9hVXNy8zMHqXNITfa8boWnD508q%2FeEZ7ioYMZChkCPx%2B%2B4XNxXzUOMaRBIh7vWFRs9b9IoVoo2bEh3YMsZbj1kDGD1%2BAmPFrG%2FvYXmmr%2FKr3PRLC01LGHF5wvV1ksYDGiwdSkpWJrH80a5tLppA5joOrSjd3Lwo9lPLoPUsA0JAGTxWUic5DS8hBtsXQfy%2BIM4kDYpLUjPyEN39Zcn4FdbDjhHBOactVRUDzlARfxxuHr%2BHwMbHv%2BeoTcD4SVLyX1Dk5StDUA%2FE7btH96UTlL69UcbzyBqJ91s%2FX%2BEOPQ%2BbVl4WOvkq5QZkVFelzxXZVDpgTF7GHTABCp9VurIc4fclkBWZfvfhANHwR4WR8dr%2BUDMjqNxjtS1HUeL%2BQdMk1MMqFb%2BoFkHzZAf%2Bcjrt0l6Ha1RaVG%2Fx%2FJqdLsnmxGn%2F7d4BOBe23MCY4FYSjpNMH7DV5b4cQMJ7v2MkGOqUB5zEvH2tR0TqrQ%2BHG22uHefXPsVV7CQiXXBxv5W254Qra9IPw8ANjWHQLA0SIGYyyMZseoYAEm5uEccfm6O5z7XQZwUNDWvP7qPRkd%2BjyOfSBF24WbsoNc%2F1aWqklre65C8nHV2wHLS2MSgzkVWYY5JyPV16AOr0mMliAYvk1pwCW3tX6j53WEEh%2Faz4SfAuszel%2BZ%2FWh%2BWNlG0Jiaz4Rv3OXvCgU&X-Amz-Signature=1be9ed20612be491eac305b4bf32a5da3fc52fba72a0f445eb9036196ad02a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQFJKBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmwu2vZnVy4DALaMfKvU5wfCwzGvnSuSUNrxZQly7bkAIgPaDNz4wR9uaQMnPGcRXvnjb%2FdSaFj2SnHMrOV9VtS0AqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN02cJjKy04DVI6BlSrcAzbqWPKKoVltbIRdLHyHEWUC55RhELzVjh9L1KBqnfVtkKsylQx2FKYmtwLOz01GUMwxfG33F%2FoqtgvZVU%2BQFn5fx%2BtYJ6d7GEJ3k3nK%2F3w9Xy12dJwNSMuj0gVcuvHCVcPU5mNO8Lhy9hhqTpVHTtFTEKEm9VAJTmQIls%2FxA3t%2BX5gS%2FzIG9hVXNy8zMHqXNITfa8boWnD508q%2FeEZ7ioYMZChkCPx%2B%2B4XNxXzUOMaRBIh7vWFRs9b9IoVoo2bEh3YMsZbj1kDGD1%2BAmPFrG%2FvYXmmr%2FKr3PRLC01LGHF5wvV1ksYDGiwdSkpWJrH80a5tLppA5joOrSjd3Lwo9lPLoPUsA0JAGTxWUic5DS8hBtsXQfy%2BIM4kDYpLUjPyEN39Zcn4FdbDjhHBOactVRUDzlARfxxuHr%2BHwMbHv%2BeoTcD4SVLyX1Dk5StDUA%2FE7btH96UTlL69UcbzyBqJ91s%2FX%2BEOPQ%2BbVl4WOvkq5QZkVFelzxXZVDpgTF7GHTABCp9VurIc4fclkBWZfvfhANHwR4WR8dr%2BUDMjqNxjtS1HUeL%2BQdMk1MMqFb%2BoFkHzZAf%2Bcjrt0l6Ha1RaVG%2Fx%2FJqdLsnmxGn%2F7d4BOBe23MCY4FYSjpNMH7DV5b4cQMJ7v2MkGOqUB5zEvH2tR0TqrQ%2BHG22uHefXPsVV7CQiXXBxv5W254Qra9IPw8ANjWHQLA0SIGYyyMZseoYAEm5uEccfm6O5z7XQZwUNDWvP7qPRkd%2BjyOfSBF24WbsoNc%2F1aWqklre65C8nHV2wHLS2MSgzkVWYY5JyPV16AOr0mMliAYvk1pwCW3tX6j53WEEh%2Faz4SfAuszel%2BZ%2FWh%2BWNlG0Jiaz4Rv3OXvCgU&X-Amz-Signature=ddad1a317d50cc04af036ef039074474bb974d67266c529445dbeccf10271783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

