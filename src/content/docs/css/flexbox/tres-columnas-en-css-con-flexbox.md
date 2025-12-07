---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWEJSG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENef9kmTiAILMsgkTqAhLQHWf2BVkGWgOcxZXOVoW2TAiBfGJ%2BtqbPIkvAnEqmuk%2FuT04BAak5zGAB8yvsVTk%2FBriqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUyhSYVCOLy6KI5vKtwDYJagaFqIPxWaLH240OG2GqabCb3KUF73P0a%2BO3ybmHjYdoSGLkwSetF0wgvBtMgJWWQJn14FbBZ9SPOFOzxB1TeWI0wd8%2F7YGwfvwnpL%2FYTDwMbcCvanbc5DNHI1f5BwiRxZDvzZJO2s4fkbkzbt7NaCdu996yZdzOh2MvMd1oEeQE6PO89yLJYGEA%2B%2FAORigq7yPNDEd22fN6lxDpcazOY028tPUUYxZ9QyGT5MF5vBXcQGQV20ZCzI9xOhA%2FUES0ZVLkxKy3t3ZFlylICCnAQthF2be%2BjMckUX%2BLle4R%2Bclrv5di5bgCugsmQin70fAhnTLkn%2FuYK6nVevtiJ3iKUKKnHh0t6R5%2B3s5Baq6UtODE%2BLs6%2FANFHl4VyQ0VAijxEAqPtSAJK7gDc7336r4N4efDOtgDA5irVo6QteMKOw0zdHFvZeCoQBp%2Fnx2AdarC5RKLBcE4am8FYzHzCR%2B6TiZIuaAZpiJIxWXUwitpH9gTp%2BHQX6KP3bPfH6T156rrXknvwsSj%2BrboJG4ueAXZVBgW96N1EfEE2tngzghsRxNG%2B75fnCKh9FzL3p91F2IjSQbLBCQjCqRLq4Btop8kojseL0EcyNpZq1PpeMc3WEOuAcw921BRxIvFgwwZ7UyQY6pgG%2BOGBzy%2BtQ%2Fu6FUzIME2ZXpqYycUpgqyowYmxh%2FHLXaT1O%2FShMIocBBvTOxbY14%2FM3fKymY%2FANh2OM%2BTqcZ4B48x%2BYvxONC%2F68bF3HAtOmelNLhzxoVKM5QK2IiBS6V12QrxaRyEY4rhNTkEZfAxvwZV58Je914arrKFWPJZYnXA2yqmKOReBGeRwZPy1HsjjTD90VzZolwy7fW1rWNzTR%2FMehk6z0&X-Amz-Signature=9ad09df396c23b64aad640e2c23fd85266c2cc9c879d26931c646ea46d274474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTWEJSG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENef9kmTiAILMsgkTqAhLQHWf2BVkGWgOcxZXOVoW2TAiBfGJ%2BtqbPIkvAnEqmuk%2FuT04BAak5zGAB8yvsVTk%2FBriqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUyhSYVCOLy6KI5vKtwDYJagaFqIPxWaLH240OG2GqabCb3KUF73P0a%2BO3ybmHjYdoSGLkwSetF0wgvBtMgJWWQJn14FbBZ9SPOFOzxB1TeWI0wd8%2F7YGwfvwnpL%2FYTDwMbcCvanbc5DNHI1f5BwiRxZDvzZJO2s4fkbkzbt7NaCdu996yZdzOh2MvMd1oEeQE6PO89yLJYGEA%2B%2FAORigq7yPNDEd22fN6lxDpcazOY028tPUUYxZ9QyGT5MF5vBXcQGQV20ZCzI9xOhA%2FUES0ZVLkxKy3t3ZFlylICCnAQthF2be%2BjMckUX%2BLle4R%2Bclrv5di5bgCugsmQin70fAhnTLkn%2FuYK6nVevtiJ3iKUKKnHh0t6R5%2B3s5Baq6UtODE%2BLs6%2FANFHl4VyQ0VAijxEAqPtSAJK7gDc7336r4N4efDOtgDA5irVo6QteMKOw0zdHFvZeCoQBp%2Fnx2AdarC5RKLBcE4am8FYzHzCR%2B6TiZIuaAZpiJIxWXUwitpH9gTp%2BHQX6KP3bPfH6T156rrXknvwsSj%2BrboJG4ueAXZVBgW96N1EfEE2tngzghsRxNG%2B75fnCKh9FzL3p91F2IjSQbLBCQjCqRLq4Btop8kojseL0EcyNpZq1PpeMc3WEOuAcw921BRxIvFgwwZ7UyQY6pgG%2BOGBzy%2BtQ%2Fu6FUzIME2ZXpqYycUpgqyowYmxh%2FHLXaT1O%2FShMIocBBvTOxbY14%2FM3fKymY%2FANh2OM%2BTqcZ4B48x%2BYvxONC%2F68bF3HAtOmelNLhzxoVKM5QK2IiBS6V12QrxaRyEY4rhNTkEZfAxvwZV58Je914arrKFWPJZYnXA2yqmKOReBGeRwZPy1HsjjTD90VzZolwy7fW1rWNzTR%2FMehk6z0&X-Amz-Signature=2d3b4c1e108b8717b4c60fcbf86630a06964ae0b02fb861b83891dc341ffc4ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

