---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6ZEZEP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxAzsdTAYguCSknEx%2F4Xe%2FukcI7Ex4IqEsf16d36LjxAIhAMKn%2BNkYVuEuL1M79GHhDIPUiSGfXzbjguWrH44GelNCKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlojhL6G4%2Fl5qH4icq3AN4yYfOoh63wthJAEW8gQvjtJAJOS53eAuZVOFyG0%2B4REE9Mn6yUd7NP8n2IavZNid3S0E36OnPZQLDug4kJ%2Fc7Dw8szPJvn53jSCl8gv3LwWZDq5S6%2FstCivvVZ2DhdQF5dmpJXOUHesS%2BzvyldGsnO2xKddpC5ILbZHq5nWn7Uq0s64ml0wkk159KRqcsZkFllycAvG0EZWxnlVAJCPit%2FxUz6JyjzHsTVFwBIpgXMT41stdl%2FZZpNAp7QyuXqruTlytFDQ33GzIV6aXErDvJydd1%2BsxZiSeaL63F%2BxJK470Ve9XOncR4CZemvRFNH%2BXOj3Sfsy3LneiEp%2B8%2BSxLH9ti7URLOxvhCOWCnc%2FkJr16XAi5JNrLLB4DVIMZmCT%2FGOjujzdSZ2hCa%2Bdb5acCracAVHdOfuaQZSw9uWNcln28We2xlzDw8ezqy6bxX6ELM4NP%2FlgZiVTfTSaKlWDZJ2xAM5tSMzW0Q7JVTDA0Yq6SGlbJbYe7oO3853R%2Bc5JJBW5TSjXi50BRG65O0mczot0wBXTNKPaPhlqPMincMWDJJJAiNfRFeqbSApTDhGB1xKVrCH%2BADKHwkO2ygTF9CQTBwLeTYT4DKbNhWl5hxQHmN72b55vDp8xgGNzCekNvJBjqkAQT7T51kkBPoAe%2FkAkixYV3p7OygHjUMFGXQcw2EeI3bcxIHwStVXhzXOQ6orCdZ%2FAjjv2p3qbkLnu4LZfJEeM6ZOG4p0ggFqC0v51p70XrKL5DUe0uWmWH6rqhaXrjypmripZf5Y3j%2Ff8VqGbcUGQyRT9%2BJNOttqF0H5JHGDwN158hWoG35f5eH8TzLat8h3gisI11%2F3KGpJuSYoaimvytDwg6O&X-Amz-Signature=c1bff1e640afa94bd883766141d88fd86a994d47958ee4f2be413d6a109c1fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6ZEZEP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxAzsdTAYguCSknEx%2F4Xe%2FukcI7Ex4IqEsf16d36LjxAIhAMKn%2BNkYVuEuL1M79GHhDIPUiSGfXzbjguWrH44GelNCKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlojhL6G4%2Fl5qH4icq3AN4yYfOoh63wthJAEW8gQvjtJAJOS53eAuZVOFyG0%2B4REE9Mn6yUd7NP8n2IavZNid3S0E36OnPZQLDug4kJ%2Fc7Dw8szPJvn53jSCl8gv3LwWZDq5S6%2FstCivvVZ2DhdQF5dmpJXOUHesS%2BzvyldGsnO2xKddpC5ILbZHq5nWn7Uq0s64ml0wkk159KRqcsZkFllycAvG0EZWxnlVAJCPit%2FxUz6JyjzHsTVFwBIpgXMT41stdl%2FZZpNAp7QyuXqruTlytFDQ33GzIV6aXErDvJydd1%2BsxZiSeaL63F%2BxJK470Ve9XOncR4CZemvRFNH%2BXOj3Sfsy3LneiEp%2B8%2BSxLH9ti7URLOxvhCOWCnc%2FkJr16XAi5JNrLLB4DVIMZmCT%2FGOjujzdSZ2hCa%2Bdb5acCracAVHdOfuaQZSw9uWNcln28We2xlzDw8ezqy6bxX6ELM4NP%2FlgZiVTfTSaKlWDZJ2xAM5tSMzW0Q7JVTDA0Yq6SGlbJbYe7oO3853R%2Bc5JJBW5TSjXi50BRG65O0mczot0wBXTNKPaPhlqPMincMWDJJJAiNfRFeqbSApTDhGB1xKVrCH%2BADKHwkO2ygTF9CQTBwLeTYT4DKbNhWl5hxQHmN72b55vDp8xgGNzCekNvJBjqkAQT7T51kkBPoAe%2FkAkixYV3p7OygHjUMFGXQcw2EeI3bcxIHwStVXhzXOQ6orCdZ%2FAjjv2p3qbkLnu4LZfJEeM6ZOG4p0ggFqC0v51p70XrKL5DUe0uWmWH6rqhaXrjypmripZf5Y3j%2Ff8VqGbcUGQyRT9%2BJNOttqF0H5JHGDwN158hWoG35f5eH8TzLat8h3gisI11%2F3KGpJuSYoaimvytDwg6O&X-Amz-Signature=3326c783ab9d0d484c699313e83ebdb79267118fc60169f84a915f206f807285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

