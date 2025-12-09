---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHC3TDB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChzKuKUGN3nfkdfse1WrLiJe2OmHtqsTjEY%2F0AsQBc%2FgIgeYE5EMgmEfE9aLdj%2FlLr1TPvfDZfCqtIB%2FvrnrBzD2gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8bQ8L9D3f9pWlpeyrcAw7LlrBCQIzawDJQLIex%2BwdCqXC9ZLfjj8dkOCubkP%2BhM2Ey4zQfSYoHDQhO85jRcJH94irw2ejP2n%2BMXtxZlD6fHUJG6WtdU1t1n5rQa5ULu9DNz7MO46uyuaZ3sJ6itkKBqxq8MQQqN4oUmXseYNJH8JL0r%2FnpNQG%2FAVTqADkTMk2w09Ctoz64h3hjKnKpcs6INCB2ReyZBjM8TDfkQ%2BrbjgFLmxNEO776gok1nHW%2Bw3kPGWBG1gLToocw0eOsEFQOKWItYEc2O%2FqHS6%2B4ScePQtKrmnXT78MwcDgicqcBBGH9WifQFYkrIApffwSl8QMRFTLOrJ1OXzu3orcITtnJvncXNEkhHCwAC17wqnJC7R5jv57fvOgwIlAl3yn0NIxLSrEkFrS9s4LtFkjOmLZWv8XYmBJFEeGZLF4YGSyweTJEsL8KOJaVqAhs%2ByUw3Hp7X8UtHHp6tMkU3KNC6nGas%2B7zY79ITftlYpZDE7ags92WeTN%2FT5zbpLc3xbWkazhVmt8%2BwW%2F0Uyza%2BnRwp2w7DP1Q7yYPqJZ5BuV2Y0gJN4HjGtbkYFyAlaNjHMzE%2FoFYt9NpX8ObwMB2uWgweHyj8sqn2jaAQXxb9i3%2BX75%2BHwGNS1XRpg1BurUwMJ%2FE38kGOqUBmmxKXZa1%2FT2e3ptEI1DZSfyo9Z%2BR70eMnVB9%2BnSBkMhZFSX9c5X7NOZSFvL7%2FS9iUd6E4WGwHbF7EYt9qPiJglG6Xq9fHPsMnEr96dzk4bMg1vJHbluSYez3W97FqYtWm0AUr8QJINyBDbFnOKZ2nbcNK7t38eOemvjUs7vwuLSySDTKBbfwDTXgmH0FViVqGHOIGSe6xPn160Fg2%2BeJo02xWs9c&X-Amz-Signature=0fe4c27585370ed59709cd957e2ab5c42f1ffbf01b0e7c338e88144c107dc9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHC3TDB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChzKuKUGN3nfkdfse1WrLiJe2OmHtqsTjEY%2F0AsQBc%2FgIgeYE5EMgmEfE9aLdj%2FlLr1TPvfDZfCqtIB%2FvrnrBzD2gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8bQ8L9D3f9pWlpeyrcAw7LlrBCQIzawDJQLIex%2BwdCqXC9ZLfjj8dkOCubkP%2BhM2Ey4zQfSYoHDQhO85jRcJH94irw2ejP2n%2BMXtxZlD6fHUJG6WtdU1t1n5rQa5ULu9DNz7MO46uyuaZ3sJ6itkKBqxq8MQQqN4oUmXseYNJH8JL0r%2FnpNQG%2FAVTqADkTMk2w09Ctoz64h3hjKnKpcs6INCB2ReyZBjM8TDfkQ%2BrbjgFLmxNEO776gok1nHW%2Bw3kPGWBG1gLToocw0eOsEFQOKWItYEc2O%2FqHS6%2B4ScePQtKrmnXT78MwcDgicqcBBGH9WifQFYkrIApffwSl8QMRFTLOrJ1OXzu3orcITtnJvncXNEkhHCwAC17wqnJC7R5jv57fvOgwIlAl3yn0NIxLSrEkFrS9s4LtFkjOmLZWv8XYmBJFEeGZLF4YGSyweTJEsL8KOJaVqAhs%2ByUw3Hp7X8UtHHp6tMkU3KNC6nGas%2B7zY79ITftlYpZDE7ags92WeTN%2FT5zbpLc3xbWkazhVmt8%2BwW%2F0Uyza%2BnRwp2w7DP1Q7yYPqJZ5BuV2Y0gJN4HjGtbkYFyAlaNjHMzE%2FoFYt9NpX8ObwMB2uWgweHyj8sqn2jaAQXxb9i3%2BX75%2BHwGNS1XRpg1BurUwMJ%2FE38kGOqUBmmxKXZa1%2FT2e3ptEI1DZSfyo9Z%2BR70eMnVB9%2BnSBkMhZFSX9c5X7NOZSFvL7%2FS9iUd6E4WGwHbF7EYt9qPiJglG6Xq9fHPsMnEr96dzk4bMg1vJHbluSYez3W97FqYtWm0AUr8QJINyBDbFnOKZ2nbcNK7t38eOemvjUs7vwuLSySDTKBbfwDTXgmH0FViVqGHOIGSe6xPn160Fg2%2BeJo02xWs9c&X-Amz-Signature=bab28385437e72324ac4b3b49af4d62b92333136c2df2786e8333d143018f41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

