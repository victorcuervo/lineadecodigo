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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQF3FW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDoyXVq3y8RuuYdiWfMni7N7DRFITlxp3rniCYNjOImXAiEA%2B01%2B2sUvAfXb63Pc%2Fa%2Fycq4jRu4LyJBUzw%2BbTDjQXZoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAKIf%2FTSn7a2VQxNASrcA735A9rKBzGUr7UcTmSeuel%2FjUOwljTAv5XUIIUWn4GWKhaSuQeo8f%2F%2FYnRhnpN%2BTp8Wj1h7siMo%2FqkJt1CwVeJkPptVlLI3ne8sNqo5LINkUFomDopP6dlnP%2FXvrKjmHLKK0Y1BpeqUgPqNf%2BwHfIfWUTBig%2Fm%2BtanXmFhaybFCAtx9cWMjaIckz5HKLBTklO5me%2BA1uyamYupFfy%2BaLGelfcmW1WAkpF%2BG2ya7ymMWctpsyKkQt3PtihjYegzbnAHjwm2lmTY4SsSgtTtp6%2BMQUEDRgo6YW6THcXHC7MfJ6XYDLlOfM7SKYcoNy%2BuWeIbmJi9fhUioO%2BvR7tLO0LhoG9eJE4C4KVqrlW5yw3wk8V72tquBZdKM44gj1fop44eDYTRO9Q2L%2FrhMlRkfJZfNCjEJqp0UP5RtyhELUlpOmNEJUpGIc1ZPQDldnm0dZ29z6qv5MjjxP12vddnjAOi5gSTjP6XE%2B43%2FR13Bcw%2BzB5%2FOBnGcr%2FGM9aBT218wceWtYcEsIl0pskMD2W0sn7JugJ6%2BTP0OWTYAlgb1ct4023SNIV01MN%2FAXYkqSHUTu2ij0dkRdn%2FZcdbum0XW0SlNv%2FF2zH7zCd1Ii8MYkovx85rvPPi%2BxUT%2FV8C8MK%2BWvskGOqUBL0zdKrblYkwYiW61nzieZVPEIXeP12Wr6zbdaw7ndw2So5jzlHJk9JJQkBAo%2F8MFgFO538WwiwwL%2BJToJy%2B4jCzmoI1Q0Gw2oSAqqttI%2FKs2wqHJ51wqYtIT5FFLXtB3PwUkSwne5HkLUi6AaJELCtx6DDY5esMEt%2BbnnUkLfjcYwe05FAvrcF77IIRj4mmo7W11NQvXBY4vB0Nt%2Bqeuur%2FEXG0w&X-Amz-Signature=e48d95c3b1cc67aeb32e7b69b4ee8cc13295e7a028cd2e1badde2179385d02bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQF3FW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDoyXVq3y8RuuYdiWfMni7N7DRFITlxp3rniCYNjOImXAiEA%2B01%2B2sUvAfXb63Pc%2Fa%2Fycq4jRu4LyJBUzw%2BbTDjQXZoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAKIf%2FTSn7a2VQxNASrcA735A9rKBzGUr7UcTmSeuel%2FjUOwljTAv5XUIIUWn4GWKhaSuQeo8f%2F%2FYnRhnpN%2BTp8Wj1h7siMo%2FqkJt1CwVeJkPptVlLI3ne8sNqo5LINkUFomDopP6dlnP%2FXvrKjmHLKK0Y1BpeqUgPqNf%2BwHfIfWUTBig%2Fm%2BtanXmFhaybFCAtx9cWMjaIckz5HKLBTklO5me%2BA1uyamYupFfy%2BaLGelfcmW1WAkpF%2BG2ya7ymMWctpsyKkQt3PtihjYegzbnAHjwm2lmTY4SsSgtTtp6%2BMQUEDRgo6YW6THcXHC7MfJ6XYDLlOfM7SKYcoNy%2BuWeIbmJi9fhUioO%2BvR7tLO0LhoG9eJE4C4KVqrlW5yw3wk8V72tquBZdKM44gj1fop44eDYTRO9Q2L%2FrhMlRkfJZfNCjEJqp0UP5RtyhELUlpOmNEJUpGIc1ZPQDldnm0dZ29z6qv5MjjxP12vddnjAOi5gSTjP6XE%2B43%2FR13Bcw%2BzB5%2FOBnGcr%2FGM9aBT218wceWtYcEsIl0pskMD2W0sn7JugJ6%2BTP0OWTYAlgb1ct4023SNIV01MN%2FAXYkqSHUTu2ij0dkRdn%2FZcdbum0XW0SlNv%2FF2zH7zCd1Ii8MYkovx85rvPPi%2BxUT%2FV8C8MK%2BWvskGOqUBL0zdKrblYkwYiW61nzieZVPEIXeP12Wr6zbdaw7ndw2So5jzlHJk9JJQkBAo%2F8MFgFO538WwiwwL%2BJToJy%2B4jCzmoI1Q0Gw2oSAqqttI%2FKs2wqHJ51wqYtIT5FFLXtB3PwUkSwne5HkLUi6AaJELCtx6DDY5esMEt%2BbnnUkLfjcYwe05FAvrcF77IIRj4mmo7W11NQvXBY4vB0Nt%2Bqeuur%2FEXG0w&X-Amz-Signature=8b5bc9803723bc4e87b5972bb53553aa22927a5686b6772a8f0981fbc6b10de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

