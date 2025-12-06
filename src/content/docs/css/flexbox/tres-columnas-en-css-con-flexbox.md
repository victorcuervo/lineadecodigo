---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCSQ4GLZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSYq1ByX5jyLwODfI8d4ZVusPLNqatqdVwj27%2Bscw6JgIhAIOdr6L4ZuUgZZimao7X0aznZqHgulr64%2FqyguPY7B6tKv8DCHAQABoMNjM3NDIzMTgzODA1IgwAE7j9e1ljFGE1F4Eq3APII8aGftjDe3KfuSou6GYfVl3VBMQ1nqgvkG2bCNzA%2FC0%2BTknRiVDhSjWzvvCcZXNla%2F%2FMMJYwvookDhQqb%2FzX82vWHEWyELUTdA88vXJtjK7hRiyKhpW0DZtTlZ0Mafc1MuV9urxtlUmggw5qDV3egHHbXfG7YASQ8OsbwsbF7wBhZXtiIh0fPaQ%2B5wTA6ozRNhOlrhysYp3DiMi2rd7EPa0BZgEEXetApK%2Bl%2Bc%2FlLHo%2BqmmY%2Bqkl8JuejKadUBbBtag97FLCo2Ja7XWo%2BDxBkPpYfAp7UkgT5it%2FV5h%2Bu55HXNbdPpmqLAM51biHkj43MiTe4dYwIstCuOQJR6PZyg5b65UNul31V%2FaLvlfATKrgg9rhKkpZPN5dggQsV30M50GEG8iZjhFfMFeB3snoquOqJlIeqBcC0KFy1c4tlx8r7W0CWbf0uGFz94aXwbC6LpJYrFPDuMlAIuhBn0vqAqAVjNydM6CarXtCI1cwO3fFfdNvt7op3QKeF3cL2IcNyWDbo8%2Fka8SgreXbwASOeHRzRz2xfq0YQ%2F2M3sPtoNXaWVPKclGJTyPrg9nvx%2FbJRD4Y8NQDPgQzYZ3IUvdGxVNLk%2BNIba3InDFQ%2B4fwuVnpwSNej%2BrMLqfxLDD2ns%2FJBjqkAXgXXg0QDRNSRQhwm04c%2Fl30qT3TllA6%2FMK1sBXz0NflaRsCcH0sLVFt99FEJhH98GU%2BgrCNveLJhbMMHCE6pgJqbzKeypvVqqmcfmX9ZHTxHvQEJgTg11LCu1OjofoO%2FwPOcUGgHogKC6C9RzElfwR5B2xkQWFyF2%2FF9h7RRsNQxi89VVW6xhmaY5EAf09UeVrnfuYMZEOYX35sBB7bMqH1fnrW&X-Amz-Signature=3ceecd22229e4168623e2c12e2fb551cafdc7c44c8860a12033b3170275b0fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCSQ4GLZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSYq1ByX5jyLwODfI8d4ZVusPLNqatqdVwj27%2Bscw6JgIhAIOdr6L4ZuUgZZimao7X0aznZqHgulr64%2FqyguPY7B6tKv8DCHAQABoMNjM3NDIzMTgzODA1IgwAE7j9e1ljFGE1F4Eq3APII8aGftjDe3KfuSou6GYfVl3VBMQ1nqgvkG2bCNzA%2FC0%2BTknRiVDhSjWzvvCcZXNla%2F%2FMMJYwvookDhQqb%2FzX82vWHEWyELUTdA88vXJtjK7hRiyKhpW0DZtTlZ0Mafc1MuV9urxtlUmggw5qDV3egHHbXfG7YASQ8OsbwsbF7wBhZXtiIh0fPaQ%2B5wTA6ozRNhOlrhysYp3DiMi2rd7EPa0BZgEEXetApK%2Bl%2Bc%2FlLHo%2BqmmY%2Bqkl8JuejKadUBbBtag97FLCo2Ja7XWo%2BDxBkPpYfAp7UkgT5it%2FV5h%2Bu55HXNbdPpmqLAM51biHkj43MiTe4dYwIstCuOQJR6PZyg5b65UNul31V%2FaLvlfATKrgg9rhKkpZPN5dggQsV30M50GEG8iZjhFfMFeB3snoquOqJlIeqBcC0KFy1c4tlx8r7W0CWbf0uGFz94aXwbC6LpJYrFPDuMlAIuhBn0vqAqAVjNydM6CarXtCI1cwO3fFfdNvt7op3QKeF3cL2IcNyWDbo8%2Fka8SgreXbwASOeHRzRz2xfq0YQ%2F2M3sPtoNXaWVPKclGJTyPrg9nvx%2FbJRD4Y8NQDPgQzYZ3IUvdGxVNLk%2BNIba3InDFQ%2B4fwuVnpwSNej%2BrMLqfxLDD2ns%2FJBjqkAXgXXg0QDRNSRQhwm04c%2Fl30qT3TllA6%2FMK1sBXz0NflaRsCcH0sLVFt99FEJhH98GU%2BgrCNveLJhbMMHCE6pgJqbzKeypvVqqmcfmX9ZHTxHvQEJgTg11LCu1OjofoO%2FwPOcUGgHogKC6C9RzElfwR5B2xkQWFyF2%2FF9h7RRsNQxi89VVW6xhmaY5EAf09UeVrnfuYMZEOYX35sBB7bMqH1fnrW&X-Amz-Signature=9c8e2a0a5c290b93bd34fd11ebe4e49248f2800893b05e44f82169f94459c7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

