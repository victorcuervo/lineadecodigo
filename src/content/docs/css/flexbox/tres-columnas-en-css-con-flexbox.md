---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOPC34R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDstmHypD5uCIlp6YpJSxhk74Kzob79l8Sb0QPP4SlaSAIgWt48bTEhO4Eq24OM7qDMLaCCgz4JsRsqRZgVwGDKfTAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4Ck8bZN3RuDKUq7yrcA7MyNE24DuzcWV4wDs2d1%2BAcGneYW4rIvuDYNAl0X7a1hNKw4zBWupZuc8Odcwr7O6LlsoJvLQNYUEXgQkNSoBIhC7Bg88wtr068ltpu7H2sTB56svNq%2BMXrnXPfcobTVVD7spYG1jRtoYO9bX5M%2BTD%2Fc4Nt5ZXcJeFynMB6Z%2F4ni4SVLBySsvqZ9q5UUXWcYae7J0u9hOJJhYXv9YSG6ADguRyM0CJKCfwgs%2BQAkJhfQHJ%2F%2BGjBHzo121UlJa3uAvejOgL6DUz%2Fw8IQVO6w7XSzcz53D1yG2hAtlp8unS2M4oSNYKLy%2BGmLd%2FxLPw7KUDgmMe9t2mnes5P8y72fFshSKZ%2FvL9lQjVnFR5RoaoU3HhmU8gucdstE8wrE7j36f%2FbGkVY4XfvU7SQyxG4FOua%2FeOEiX861qXzImMt%2FgV19f5yWYHbdIpIQzpvJYzT1yN4dVM2nRkVBu3GnF%2B3dfYft4v0zo5NXXYPb0rORVZ6%2BcrgCa1a5htxHSEf5FGm1RHzx7bBb4hxBfdRL76j31CgSr9NMVaOgAYilrYaDkVmM1KKR0E7JWVOHeJqHNqZ5i13ifkIBYmUXSjOiZl0OJJILqdkJAlXTOguaqjW%2FoKyLm10D9T22r%2Bu4hU%2BWMJn90skGOqUB3QSOQnUv%2F%2B%2BURHWE38mhQwl3l6Y8GcWJa7F7cZ5OOi3KBDRz6FLmdw0IW9AmmoPVKeGDIQUdrcwmhCqYbCYbnfwoVyRMxQ%2BsHAWv4UAsmMARFXkoAdA0n2U%2FfcDidiNjFLaKFSrO4av1qjhUQt7vo2W%2FoWTE4xv8Bh6pdP4mMfoiazq%2Fz3VUuIl9IaKC9AETltF43Tl6zqq6StrKRXLFQ6EH1MnL&X-Amz-Signature=72ba56148cb49a502fb40d1cb57c10b1bb122fb4050d9a1c335b62b4d596c043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOPC34R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDstmHypD5uCIlp6YpJSxhk74Kzob79l8Sb0QPP4SlaSAIgWt48bTEhO4Eq24OM7qDMLaCCgz4JsRsqRZgVwGDKfTAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4Ck8bZN3RuDKUq7yrcA7MyNE24DuzcWV4wDs2d1%2BAcGneYW4rIvuDYNAl0X7a1hNKw4zBWupZuc8Odcwr7O6LlsoJvLQNYUEXgQkNSoBIhC7Bg88wtr068ltpu7H2sTB56svNq%2BMXrnXPfcobTVVD7spYG1jRtoYO9bX5M%2BTD%2Fc4Nt5ZXcJeFynMB6Z%2F4ni4SVLBySsvqZ9q5UUXWcYae7J0u9hOJJhYXv9YSG6ADguRyM0CJKCfwgs%2BQAkJhfQHJ%2F%2BGjBHzo121UlJa3uAvejOgL6DUz%2Fw8IQVO6w7XSzcz53D1yG2hAtlp8unS2M4oSNYKLy%2BGmLd%2FxLPw7KUDgmMe9t2mnes5P8y72fFshSKZ%2FvL9lQjVnFR5RoaoU3HhmU8gucdstE8wrE7j36f%2FbGkVY4XfvU7SQyxG4FOua%2FeOEiX861qXzImMt%2FgV19f5yWYHbdIpIQzpvJYzT1yN4dVM2nRkVBu3GnF%2B3dfYft4v0zo5NXXYPb0rORVZ6%2BcrgCa1a5htxHSEf5FGm1RHzx7bBb4hxBfdRL76j31CgSr9NMVaOgAYilrYaDkVmM1KKR0E7JWVOHeJqHNqZ5i13ifkIBYmUXSjOiZl0OJJILqdkJAlXTOguaqjW%2FoKyLm10D9T22r%2Bu4hU%2BWMJn90skGOqUB3QSOQnUv%2F%2B%2BURHWE38mhQwl3l6Y8GcWJa7F7cZ5OOi3KBDRz6FLmdw0IW9AmmoPVKeGDIQUdrcwmhCqYbCYbnfwoVyRMxQ%2BsHAWv4UAsmMARFXkoAdA0n2U%2FfcDidiNjFLaKFSrO4av1qjhUQt7vo2W%2FoWTE4xv8Bh6pdP4mMfoiazq%2Fz3VUuIl9IaKC9AETltF43Tl6zqq6StrKRXLFQ6EH1MnL&X-Amz-Signature=ce770c70aecbdc21885e1e7f40d5d1ab232ceb591a3edb0bd85543a0c396eae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

