---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBTUIRJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnFv7jh%2BEHXDYriPVAbLJ8oziO5YRHf6ntOEKTS2%2FtUAiEAk2%2FOWEpBAQu0fqaoNoJk4mWK16BImfnKvoqXg%2FPx9oIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyqIMdRCPTl0KSXaircA1laLX5a0XXIa%2FwbhaLof4AVejVgSpPsZm%2FLfnSopyQOQXCRDyRQSH8HAgf%2BY%2BT9jtUqpTYVfaRjqQhgvDw%2FIul4W63t6nCBoWePErpyBDNRr%2FE%2BpGcxTCoHt2p%2BlBofwLAIoTaMADCdXwqyAlol5VNYfOylLLp%2FtwyCDIe3CmHV4j%2BdF75FbehhqT09qaExzMhw4e1a4BSemzFR%2BVO6c3gyLNlVU1Ism7FWC4QlmZjUeG%2F%2BYgxu8M6DYfRYWcK1fz4ZnJyC630Ogd0KN9H01w1%2FNnTzHQCkZxeHAYiEQxN19hNf241w5kmfps5EWNSE6sL0JxA2MI8kL0X5%2FH8%2FICQc1HR9sl%2BvLCpy1uYN0Z2p0lcXQFvdVhICZNYqYcflDFkcRmjW2SftGFGWsVtRuSN2pnvxdJK%2FWPCZVB40ryKt9VPFwVEsxAA%2BTzxlvMu2t0XAdXfvhfB2kWCZb%2BAu3qkljji02iXR70NOZEBRN7oVGQn%2F7Tebj0rg%2FfqeEXQcDgBow5EA%2BDr7LwfgMEiQ9k4n345lCt9XHf%2BHjHuO81X6SaTZF0lxbvXozh5HFXDUDoYVSYS9hrtMFB%2FJfpm1WoQkNfRZOlXUbgXf5G%2FadHGK6r%2FkJqYDQIWjA3UcMJ%2Bc1MkGOqUBxBuP45RkCxBPc7ebioMcrtxYzK7eENkMoS2mFK23mv7qFt6kGLRQZFrXQDTIRsTL1DHFuqXde88EB5P%2F7gV8hohFrHfNMlVFd8SV18kldD4GgspnJDwkGXnDQT9xTOiLU4XL1SaALf0aceRAP6NY49LhxrQ6jKaDhJwTCyjmk4geFNupF6Sl%2BVOwe2MwHX%2BPSYN5%2Fsr4UZ6ofgRfLCqzEUABKsab&X-Amz-Signature=3dea73fc1515337f2186ade2bafda356e3e064039faa1adf22f81930525ef625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBTUIRJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnFv7jh%2BEHXDYriPVAbLJ8oziO5YRHf6ntOEKTS2%2FtUAiEAk2%2FOWEpBAQu0fqaoNoJk4mWK16BImfnKvoqXg%2FPx9oIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyqIMdRCPTl0KSXaircA1laLX5a0XXIa%2FwbhaLof4AVejVgSpPsZm%2FLfnSopyQOQXCRDyRQSH8HAgf%2BY%2BT9jtUqpTYVfaRjqQhgvDw%2FIul4W63t6nCBoWePErpyBDNRr%2FE%2BpGcxTCoHt2p%2BlBofwLAIoTaMADCdXwqyAlol5VNYfOylLLp%2FtwyCDIe3CmHV4j%2BdF75FbehhqT09qaExzMhw4e1a4BSemzFR%2BVO6c3gyLNlVU1Ism7FWC4QlmZjUeG%2F%2BYgxu8M6DYfRYWcK1fz4ZnJyC630Ogd0KN9H01w1%2FNnTzHQCkZxeHAYiEQxN19hNf241w5kmfps5EWNSE6sL0JxA2MI8kL0X5%2FH8%2FICQc1HR9sl%2BvLCpy1uYN0Z2p0lcXQFvdVhICZNYqYcflDFkcRmjW2SftGFGWsVtRuSN2pnvxdJK%2FWPCZVB40ryKt9VPFwVEsxAA%2BTzxlvMu2t0XAdXfvhfB2kWCZb%2BAu3qkljji02iXR70NOZEBRN7oVGQn%2F7Tebj0rg%2FfqeEXQcDgBow5EA%2BDr7LwfgMEiQ9k4n345lCt9XHf%2BHjHuO81X6SaTZF0lxbvXozh5HFXDUDoYVSYS9hrtMFB%2FJfpm1WoQkNfRZOlXUbgXf5G%2FadHGK6r%2FkJqYDQIWjA3UcMJ%2Bc1MkGOqUBxBuP45RkCxBPc7ebioMcrtxYzK7eENkMoS2mFK23mv7qFt6kGLRQZFrXQDTIRsTL1DHFuqXde88EB5P%2F7gV8hohFrHfNMlVFd8SV18kldD4GgspnJDwkGXnDQT9xTOiLU4XL1SaALf0aceRAP6NY49LhxrQ6jKaDhJwTCyjmk4geFNupF6Sl%2BVOwe2MwHX%2BPSYN5%2Fsr4UZ6ofgRfLCqzEUABKsab&X-Amz-Signature=df710609055f7d25bb1a728f58ff3daf11d486827309ba60d6467370b9958ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

