---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJSW65B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrdPkj17zDq%2BQE7gHT1PPiGY1FwuPCf1gDaV35VvlCbwIhAMrokr5cGiOsFUoK2ZmiYrtQfmQrOu%2FASw5Ua%2BA2kz6kKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw8IgTmssXVC1yiUIq3AO2Z1vTMiBKsNU3gDIyQBSozBNIq7xp9e1%2BbNNpKxV%2FPGgzt8mxFM7YNteOQiGSNxk9RUVp4VC0K1vvnJQ8y7zHHnI7PRzcmXX1ryn%2Bb9lHDnEswSbEmQIMWIaVXlYF5TOHXx3zTSURdRDgUonwJ6BGaZ4vNXnt%2FzxXUjPQj3IfgrslxK%2B1c1j4a415eO89%2BFOW2B%2BTQrQzIAjQ2Py5DcRoi2UzMX1ezvwA1HQzR%2BgVPYJwIj8A12eJhf2nDbrlRm4yHh7%2FiCNszpVkxZhjMfSLJQ6pgntMEvQHB1aFBsUmWJ%2BVI5FG09YBWIFEJDluEo0X%2BzHKgLfLNUHCkVjXvWlK3oS33XMiMglbvnvVULgbPHyg9ISm4E%2FQTOXMVeivASGE%2FXOQgiNOYoM9n4fi8NR56hT9i5TrQvd%2BuCS0VEfwHeNYaruAnNt7fYnIGLhZ45QaGpg73kOf3K%2FCBkegyTP4Pfi45HZW6YdkEQXl0I9wgp9tedziSJKOQqzOhpkwwoGjOHig3%2BNtoqGwQdWGXsISBzkuN6EsyOh3guowXiBcLr4HC38%2B9rTbgOl%2BNtEwYQOrlYmq7CjYsmu%2B6RJENmC76o4mdXNCyxGvM7EwOaRPuWd3O9gipFtZakTKQDCviN%2FJBjqkAVWEtMKjF16vCpdByTlOTu1Bxz9IRmZw%2FFLlenaZhF02HdhXUN6i%2B%2FJ%2FAb56Jx4vwrGRkoDrX%2B8tjUHJb0DcL%2FTjEuNbD72k9kox6yOGpCgn0gDv9RLXbr4bJ%2F6Ogf7HQO6kyMUQ4h39AceeshBPYNu4JiKciZzRbswmGl7cF7zJSZgGU%2FAGLmI0pVv%2F6S3AferwyWVuoMkHwH7Lc%2Fz5PBRfjfnG&X-Amz-Signature=c0936e1ff90e140edb1490e27e55e6a7dcc044ef974dd44c2a3f683d987e50bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJSW65B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrdPkj17zDq%2BQE7gHT1PPiGY1FwuPCf1gDaV35VvlCbwIhAMrokr5cGiOsFUoK2ZmiYrtQfmQrOu%2FASw5Ua%2BA2kz6kKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw8IgTmssXVC1yiUIq3AO2Z1vTMiBKsNU3gDIyQBSozBNIq7xp9e1%2BbNNpKxV%2FPGgzt8mxFM7YNteOQiGSNxk9RUVp4VC0K1vvnJQ8y7zHHnI7PRzcmXX1ryn%2Bb9lHDnEswSbEmQIMWIaVXlYF5TOHXx3zTSURdRDgUonwJ6BGaZ4vNXnt%2FzxXUjPQj3IfgrslxK%2B1c1j4a415eO89%2BFOW2B%2BTQrQzIAjQ2Py5DcRoi2UzMX1ezvwA1HQzR%2BgVPYJwIj8A12eJhf2nDbrlRm4yHh7%2FiCNszpVkxZhjMfSLJQ6pgntMEvQHB1aFBsUmWJ%2BVI5FG09YBWIFEJDluEo0X%2BzHKgLfLNUHCkVjXvWlK3oS33XMiMglbvnvVULgbPHyg9ISm4E%2FQTOXMVeivASGE%2FXOQgiNOYoM9n4fi8NR56hT9i5TrQvd%2BuCS0VEfwHeNYaruAnNt7fYnIGLhZ45QaGpg73kOf3K%2FCBkegyTP4Pfi45HZW6YdkEQXl0I9wgp9tedziSJKOQqzOhpkwwoGjOHig3%2BNtoqGwQdWGXsISBzkuN6EsyOh3guowXiBcLr4HC38%2B9rTbgOl%2BNtEwYQOrlYmq7CjYsmu%2B6RJENmC76o4mdXNCyxGvM7EwOaRPuWd3O9gipFtZakTKQDCviN%2FJBjqkAVWEtMKjF16vCpdByTlOTu1Bxz9IRmZw%2FFLlenaZhF02HdhXUN6i%2B%2FJ%2FAb56Jx4vwrGRkoDrX%2B8tjUHJb0DcL%2FTjEuNbD72k9kox6yOGpCgn0gDv9RLXbr4bJ%2F6Ogf7HQO6kyMUQ4h39AceeshBPYNu4JiKciZzRbswmGl7cF7zJSZgGU%2FAGLmI0pVv%2F6S3AferwyWVuoMkHwH7Lc%2Fz5PBRfjfnG&X-Amz-Signature=4cb7a83de8afb34fb05b1bdefa30a9465b0e1bed3e491187975c845d2f8a9761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

