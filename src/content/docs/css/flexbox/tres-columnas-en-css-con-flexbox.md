---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UK56SW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVXtoqLhXSMQpzdtU%2FVzhA5WYpliYQvgHIQDC6NUzaQIhAPyDLmXqDWVVw8fqYaACQb1dzwHdZ0%2FoZE6f86ORmBNEKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXwAHsUE%2FF5hnjAgEq3ANK3tppOL6OS%2BAXiMNOyyQpiiy2y5On3gSlFc6eQEIjm8ggp39%2B3P%2BJmlwO6ZMZeLkOEiEMKs73TYCiImx7OaVVFjhtIHmJUbGsqmCC%2BmxZafO98lAY5OKdyvUofMcslsBRVXRvDj9tWRrwJQS8jckzAqvDUJtOZVV0cUfscZ1znIbvTP2yi2xnDOITZ%2FYKGnfNawsA%2BjYYjw36vKzEDw7pRGAJDz1NyDy2HIrzUFRyivu7YQbdX0TZw%2F3leSpf5VGAMpbuk%2FR%2FAi09G1z7jGnheU22UhvEBCtEt3a%2Fst6eqz75uWSuJc7tRHL4Vu9UypO9KWrgoGR7FOOQo%2FuNfj7mkcMQ%2BGpvm%2FiJSAJ9JAI4zU1na1HvGVPoj8eVFezId86asr68pJGvQAdOR1CHKhrzjG5BgfAewWCC5S83luvTsAlPsg1WwDM2FQ0twdiwfTz3xzbLuhcywYEa7qVe%2FJM7FGzmXmvcmwIXYj0Ai0dhnxRy85vAsM1UhNNw0xZXSQ3PzJqVVef8A7WIM%2Faaaw271yyDV8wQ2JFLOFmrmtNvCKE3gy20otGVU81ALUHho1ggvGHtPXg6snpegvdxgUDVD8D5lXOr1ZsmoFsPVxsnzdJBsfVfQrTG0WWwizC%2B79jJBjqkASyhvD05%2BCcrYwS%2B5NZe8du%2FghztFyvgb%2BShoAJwnfjiMHYXw%2F2nO3ZgGIlllbU05dKof32bBUbXAq04yPrw6vZa4RZq%2F%2Fihu1hj0B5%2Fp7wyNc5UqnCxTIZ06ERxR1BESDS3sNZiEh1A6fz4QvIf0j4riGczTzNX3i4iPG7sjJBMEA1pwzIz4bZj5QvEI4C9w1e4eCZeyiVmdy4gHAjNvHHfKNOo&X-Amz-Signature=2eb4ae5de0b99eb1aefb2f2ebdc0193259dc1b37305914ced9af0981897d04ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UK56SW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVXtoqLhXSMQpzdtU%2FVzhA5WYpliYQvgHIQDC6NUzaQIhAPyDLmXqDWVVw8fqYaACQb1dzwHdZ0%2FoZE6f86ORmBNEKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXwAHsUE%2FF5hnjAgEq3ANK3tppOL6OS%2BAXiMNOyyQpiiy2y5On3gSlFc6eQEIjm8ggp39%2B3P%2BJmlwO6ZMZeLkOEiEMKs73TYCiImx7OaVVFjhtIHmJUbGsqmCC%2BmxZafO98lAY5OKdyvUofMcslsBRVXRvDj9tWRrwJQS8jckzAqvDUJtOZVV0cUfscZ1znIbvTP2yi2xnDOITZ%2FYKGnfNawsA%2BjYYjw36vKzEDw7pRGAJDz1NyDy2HIrzUFRyivu7YQbdX0TZw%2F3leSpf5VGAMpbuk%2FR%2FAi09G1z7jGnheU22UhvEBCtEt3a%2Fst6eqz75uWSuJc7tRHL4Vu9UypO9KWrgoGR7FOOQo%2FuNfj7mkcMQ%2BGpvm%2FiJSAJ9JAI4zU1na1HvGVPoj8eVFezId86asr68pJGvQAdOR1CHKhrzjG5BgfAewWCC5S83luvTsAlPsg1WwDM2FQ0twdiwfTz3xzbLuhcywYEa7qVe%2FJM7FGzmXmvcmwIXYj0Ai0dhnxRy85vAsM1UhNNw0xZXSQ3PzJqVVef8A7WIM%2Faaaw271yyDV8wQ2JFLOFmrmtNvCKE3gy20otGVU81ALUHho1ggvGHtPXg6snpegvdxgUDVD8D5lXOr1ZsmoFsPVxsnzdJBsfVfQrTG0WWwizC%2B79jJBjqkASyhvD05%2BCcrYwS%2B5NZe8du%2FghztFyvgb%2BShoAJwnfjiMHYXw%2F2nO3ZgGIlllbU05dKof32bBUbXAq04yPrw6vZa4RZq%2F%2Fihu1hj0B5%2Fp7wyNc5UqnCxTIZ06ERxR1BESDS3sNZiEh1A6fz4QvIf0j4riGczTzNX3i4iPG7sjJBMEA1pwzIz4bZj5QvEI4C9w1e4eCZeyiVmdy4gHAjNvHHfKNOo&X-Amz-Signature=636dd9d21db4420d5f0d846671814fd8d1a104b6264e7da753d36fdd64c96656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

