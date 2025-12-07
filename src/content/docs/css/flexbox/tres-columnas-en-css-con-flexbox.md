---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45DHOGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOpH3q%2FLY%2BaJVQ4VHeTZeir6p%2FOGc6Cq9Zy9xUnGvuOAIgGgzQai619633m71y%2B72rLz%2F%2B6keC%2FgeklX8DDzzF35QqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FvZRsnb1G76jmWiircAzI7x4XyUhEQW2q8QrcMYI53jNmL0tUzLX6V0uUuudBX93DvO7ZGs7wRi73cctxaYKJn%2FRaJP9DM68WFGm9%2B0cJRtQj%2BqwXIZjAk8j8dRLc6yBj%2BG0VJWCL%2BE45HcLSxQJwejhZ6G0J0gstKyv39G5Pxl8zQGEN%2BW8vD2oBzJH0BATwCu96%2BYzCMLK5IYg%2BYZUPxa1oYEQtVOVlrUwu7lyRbZmOZSvUiv8b4fKj0S%2FtRDOLUD5PmLNo4YjhzuXlBBXEwZh%2FlHGXdZjCMbjX7LApvcheX07k5PB8w5KlgrPYAlDjwfVq7U7j4h%2F7udP%2FaM6PRDxpWZd2CXwMfV%2Fz6ZWM2hLLkzXPgcELZnbYP40t%2BXmYtzMaEsRlLJblKy8y5UHLSZwNdUBrRxTl%2BTBOVQOjBSWf1%2F1zVfkLh9DsEOyLicNluyXFhpLE7%2FV8THiXbC2RJPEPrLjL0TrhAWRWiJ1VdyZoWcv1ZUVqqpNtM0D0LF%2FITncX%2BgbqQKaOHOyD%2BhDeSSFJA81UDdrk%2FfheDla13Sb%2BD3OjQjU5vvHCYM3zLdFNgsJsRv06tLTrgcCBGalTBlFED5no7Uos1oJV3S%2B52nzb0BAjHffnIjPJBwaJ6qNfyBnCqZnsAkN%2BMMJG%2F1skGOqUBM7dfdJaqzX8EMjgmuA2AfxRwqOLMZjVCzfC4leXqVxgHdwBNkQBkhxX5iu0ixD8bnu%2Ff5npynz5MyrAgUO0A1mGamTGtuuSSb9V1kGVGhW9THEvYY%2FKrKSbOXw5cn9eKtTgA4zyeJkNudRR3YZCAhpDfngrlIlmn2GjTgOhu7sFkWTMr%2FC1uq4%2B%2BBOj%2FULJ9BTGAKJCEvwLLOJuthHPBDuM16eQU&X-Amz-Signature=ba095cfe02b1ac6ecbfe77dbcc7b58aa950671e2b6279b55bdb2c537e0cdedae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45DHOGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOpH3q%2FLY%2BaJVQ4VHeTZeir6p%2FOGc6Cq9Zy9xUnGvuOAIgGgzQai619633m71y%2B72rLz%2F%2B6keC%2FgeklX8DDzzF35QqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FvZRsnb1G76jmWiircAzI7x4XyUhEQW2q8QrcMYI53jNmL0tUzLX6V0uUuudBX93DvO7ZGs7wRi73cctxaYKJn%2FRaJP9DM68WFGm9%2B0cJRtQj%2BqwXIZjAk8j8dRLc6yBj%2BG0VJWCL%2BE45HcLSxQJwejhZ6G0J0gstKyv39G5Pxl8zQGEN%2BW8vD2oBzJH0BATwCu96%2BYzCMLK5IYg%2BYZUPxa1oYEQtVOVlrUwu7lyRbZmOZSvUiv8b4fKj0S%2FtRDOLUD5PmLNo4YjhzuXlBBXEwZh%2FlHGXdZjCMbjX7LApvcheX07k5PB8w5KlgrPYAlDjwfVq7U7j4h%2F7udP%2FaM6PRDxpWZd2CXwMfV%2Fz6ZWM2hLLkzXPgcELZnbYP40t%2BXmYtzMaEsRlLJblKy8y5UHLSZwNdUBrRxTl%2BTBOVQOjBSWf1%2F1zVfkLh9DsEOyLicNluyXFhpLE7%2FV8THiXbC2RJPEPrLjL0TrhAWRWiJ1VdyZoWcv1ZUVqqpNtM0D0LF%2FITncX%2BgbqQKaOHOyD%2BhDeSSFJA81UDdrk%2FfheDla13Sb%2BD3OjQjU5vvHCYM3zLdFNgsJsRv06tLTrgcCBGalTBlFED5no7Uos1oJV3S%2B52nzb0BAjHffnIjPJBwaJ6qNfyBnCqZnsAkN%2BMMJG%2F1skGOqUBM7dfdJaqzX8EMjgmuA2AfxRwqOLMZjVCzfC4leXqVxgHdwBNkQBkhxX5iu0ixD8bnu%2Ff5npynz5MyrAgUO0A1mGamTGtuuSSb9V1kGVGhW9THEvYY%2FKrKSbOXw5cn9eKtTgA4zyeJkNudRR3YZCAhpDfngrlIlmn2GjTgOhu7sFkWTMr%2FC1uq4%2B%2BBOj%2FULJ9BTGAKJCEvwLLOJuthHPBDuM16eQU&X-Amz-Signature=371d9ba894d41c6f22de0c3275ab295ccfe705068fceb3f5e9f48974d31241b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

