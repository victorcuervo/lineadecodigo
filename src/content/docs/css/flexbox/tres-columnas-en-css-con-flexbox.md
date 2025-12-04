---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3L3LOSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAgH0lW9GHP8Mudy21CWEz6Lq6A4d6OfamuQpHpuEGrAiAQTP0qCaoHkAqm56chNIHLYgVosenZjLkmJJnCBKxh9ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMnONvxMDFC1uAjZyLKtwD3l97JrJKCOiQw4VpCS12fam4pAx6jbgaRPgLqStt6IivZhGn1l450ShPejf6ltok0kSRYFzF1UhKYCAd%2BPDMU7L57MPmkskm7SNDLVEos28SsO3H2I3EkSSpEGVSg6w7XIT34YsFY5qQEcrRg9h7En5v%2BmsjfSC4BrvtBIMQUlNCBqY7kBb5qlQOnYiUrkq5GHCRYczxTAxxO%2F8KrQx%2FMMHfpAV%2FwB8Ze10FS17RCTMvqxLi%2FIeXWcDZHKn1sCtQntKqcZi%2FwrQY9uxpu%2FHXnhNwSF3P6o8sHXLIqbyFPM2l8toWNmO%2FDCKZEfNNJPo2ZMLod1nlZUikiaTVBQ%2Bt2WHuCQhRjgAlorHsenyVExhCpvsxaR0%2FkyfBiZXM2hm%2B9vlXmF0yRQE1ZKl8ziyBpYszmNlBnP5RzgYTUsMNhV%2FxAm6xMhBTcIiDyr%2Fu7gj0a1WsU39Si2R9HNs65RY9QHFnw%2B1wxgJaVHYKCdSJtEuI6%2Bnm5xZgA4%2FpA64UAS5RhiX7vtj1lvTcre7djbaclrc324y2aLC4YVH93ZWqO75p7z6zR4kM9jaKKqo13vtbDbh%2F560KmaTBS0bF76%2FF6bnDV7GFpws2sBf6iGu80TgJxG5Dn9POd21k4zAwidzGyQY6pgG9W7U36jho9fzHbO63h2woUVFSpwE8XLh0ltmReZCXhUx1wrjDkMsK4Q1NTQ%2FoD9yOz79Au%2BV%2FZX%2FrLAeSGO9P4VkCoB8wvnaa6RWAy3TgDGY9wcnVj7n6dPt1Y04jrfspXdApDQ4tpLTZ37VJJ4x4WbUn55mTOYGfqspBBMvqWQPzgoUa%2BYkrs4NReefviD5fXqles%2BM%2B7UTSc69hK1vZzzonz1ea&X-Amz-Signature=96832a006a75efa1501e33ca5c4d80b61fafe2d5be95f32f60c862a398fe8cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3L3LOSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAgH0lW9GHP8Mudy21CWEz6Lq6A4d6OfamuQpHpuEGrAiAQTP0qCaoHkAqm56chNIHLYgVosenZjLkmJJnCBKxh9ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMnONvxMDFC1uAjZyLKtwD3l97JrJKCOiQw4VpCS12fam4pAx6jbgaRPgLqStt6IivZhGn1l450ShPejf6ltok0kSRYFzF1UhKYCAd%2BPDMU7L57MPmkskm7SNDLVEos28SsO3H2I3EkSSpEGVSg6w7XIT34YsFY5qQEcrRg9h7En5v%2BmsjfSC4BrvtBIMQUlNCBqY7kBb5qlQOnYiUrkq5GHCRYczxTAxxO%2F8KrQx%2FMMHfpAV%2FwB8Ze10FS17RCTMvqxLi%2FIeXWcDZHKn1sCtQntKqcZi%2FwrQY9uxpu%2FHXnhNwSF3P6o8sHXLIqbyFPM2l8toWNmO%2FDCKZEfNNJPo2ZMLod1nlZUikiaTVBQ%2Bt2WHuCQhRjgAlorHsenyVExhCpvsxaR0%2FkyfBiZXM2hm%2B9vlXmF0yRQE1ZKl8ziyBpYszmNlBnP5RzgYTUsMNhV%2FxAm6xMhBTcIiDyr%2Fu7gj0a1WsU39Si2R9HNs65RY9QHFnw%2B1wxgJaVHYKCdSJtEuI6%2Bnm5xZgA4%2FpA64UAS5RhiX7vtj1lvTcre7djbaclrc324y2aLC4YVH93ZWqO75p7z6zR4kM9jaKKqo13vtbDbh%2F560KmaTBS0bF76%2FF6bnDV7GFpws2sBf6iGu80TgJxG5Dn9POd21k4zAwidzGyQY6pgG9W7U36jho9fzHbO63h2woUVFSpwE8XLh0ltmReZCXhUx1wrjDkMsK4Q1NTQ%2FoD9yOz79Au%2BV%2FZX%2FrLAeSGO9P4VkCoB8wvnaa6RWAy3TgDGY9wcnVj7n6dPt1Y04jrfspXdApDQ4tpLTZ37VJJ4x4WbUn55mTOYGfqspBBMvqWQPzgoUa%2BYkrs4NReefviD5fXqles%2BM%2B7UTSc69hK1vZzzonz1ea&X-Amz-Signature=ccb059beeaa4465b0286664c318a13ee9cb877666ad08c28d376c095497d803e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

