---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVY2IHHM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRO3riSpajc4HimrlrGtgK3jtxLdbKm09mXUTTzQVVfgIhAJ5%2F0%2FOkVrlABBJiKefCDnFcN%2BOBZ8h1dnH8qYQeIwVyKv8DCGAQABoMNjM3NDIzMTgzODA1Igx%2FX6VaS94T6o6AdVoq3APjhZ%2FEt198IKbqvd0LkO%2Fs73w0IGnKm9u0qGy9F3N999y%2FcXGYbb0YTDkaLP4aHyEaiW8pvAdNFanaRngl039D0tC9heXyGOjYDLY1z0IdByiM0iYmbiPnLHpbendHRh%2BZPlBSXjge0J7Xg96wB%2F2SwFSs5IGeonVlMu58FBtAsE4ae523S0IozVvwndz76sfGM5LS9y3DkDydQk63008NVWJkug4gxja2oDTG1XSkzrvPKpBL9E8nxJQD3SJ4bX5XVbyjGIwUKpV7HCLRS8MI9yP%2FzuyhQtCiGxZKdSVAcT0sAqKd%2BcVD%2FfxsDrorDBEr0tZ%2FPLX0youJ9orhSUVF1MMX9h2%2BNNdyJP5x7WqcTqmqR0SVl5h1%2FPFmio4Vk8kzAazV0sq2iD6VKWUk%2BhUeTo9hslv5lyd9T%2Bmb2tmvxTWABe2MEYDLcy9T9Ua0HbTdOamj4gZL49QmUSqqXuQ24%2FnYaObhTjSWQc8Fx0RWQ5ETsXA5V7V6ycPpVpZwEbXi49abCLadGxjja23XrwcKfOOnyZDd0gOpazXjWfCZnHVH5kcIIVC2MXJqklKKZNTkFWW0TPjzKyZ6eI7UDcmjuB28BZSq%2FFLPmnceGuPGDt6yHYs0yFXKSkSc3DC458vJBjqkAUebfQj%2FjzN2m0q70htI75FUh2XdUvvWVmoiakw9APIT0MgA4SD48nGtwl7kBr%2FKaFPpqEU%2Fggo4wPDxIrbtJLHdPDahDAnjcbnfa7qlfnjZ%2FmeUxTdTXo2zP%2BdFpP0cu8nstSBnVPDU71wy9yCclLp1gIC0I%2FFLSnLJJ46sZPA0YK6N%2FAwZuKzC1GTMVEJvDH4J7Bhp0Eo4lFZ0FzwvvOovLXVN&X-Amz-Signature=fe262102aa83a9fb9cf0a73e96e8526fc0ccb1042ccd5a85660243d34f34a1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVY2IHHM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRO3riSpajc4HimrlrGtgK3jtxLdbKm09mXUTTzQVVfgIhAJ5%2F0%2FOkVrlABBJiKefCDnFcN%2BOBZ8h1dnH8qYQeIwVyKv8DCGAQABoMNjM3NDIzMTgzODA1Igx%2FX6VaS94T6o6AdVoq3APjhZ%2FEt198IKbqvd0LkO%2Fs73w0IGnKm9u0qGy9F3N999y%2FcXGYbb0YTDkaLP4aHyEaiW8pvAdNFanaRngl039D0tC9heXyGOjYDLY1z0IdByiM0iYmbiPnLHpbendHRh%2BZPlBSXjge0J7Xg96wB%2F2SwFSs5IGeonVlMu58FBtAsE4ae523S0IozVvwndz76sfGM5LS9y3DkDydQk63008NVWJkug4gxja2oDTG1XSkzrvPKpBL9E8nxJQD3SJ4bX5XVbyjGIwUKpV7HCLRS8MI9yP%2FzuyhQtCiGxZKdSVAcT0sAqKd%2BcVD%2FfxsDrorDBEr0tZ%2FPLX0youJ9orhSUVF1MMX9h2%2BNNdyJP5x7WqcTqmqR0SVl5h1%2FPFmio4Vk8kzAazV0sq2iD6VKWUk%2BhUeTo9hslv5lyd9T%2Bmb2tmvxTWABe2MEYDLcy9T9Ua0HbTdOamj4gZL49QmUSqqXuQ24%2FnYaObhTjSWQc8Fx0RWQ5ETsXA5V7V6ycPpVpZwEbXi49abCLadGxjja23XrwcKfOOnyZDd0gOpazXjWfCZnHVH5kcIIVC2MXJqklKKZNTkFWW0TPjzKyZ6eI7UDcmjuB28BZSq%2FFLPmnceGuPGDt6yHYs0yFXKSkSc3DC458vJBjqkAUebfQj%2FjzN2m0q70htI75FUh2XdUvvWVmoiakw9APIT0MgA4SD48nGtwl7kBr%2FKaFPpqEU%2Fggo4wPDxIrbtJLHdPDahDAnjcbnfa7qlfnjZ%2FmeUxTdTXo2zP%2BdFpP0cu8nstSBnVPDU71wy9yCclLp1gIC0I%2FFLSnLJJ46sZPA0YK6N%2FAwZuKzC1GTMVEJvDH4J7Bhp0Eo4lFZ0FzwvvOovLXVN&X-Amz-Signature=94878a4913b7ad437d093b9a8405678c13267edfb82bc4a231c437114462440c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

