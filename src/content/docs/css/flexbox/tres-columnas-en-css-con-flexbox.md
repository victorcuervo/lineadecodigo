---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62ZN3IX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyjppEGN71my38wUe65sM4xbUYIxAgypNOJam%2B9DDIpAIgNPK2BBhzGimR%2FfliV48E%2FMzlZ8TrfLtQWZH3yemsh%2BYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAaGebsnyRSrAXrnircAyGAPY%2Bax0FZ8ilqYKqACb8F0UR%2FZDGixFyXRFbkAG5opuXGP2%2BJUs1EDLdW8gtLTfATp%2F4Q4xQo%2F7F1QgqFQx3BKw6%2FkgSDCF6t%2BSkkTmAT30W2ffkxdEVeCbiVTX9dXPgiD5tMKH66Iu71y9UuKyKKzOLRlH7NJe205I19MXKGLqLeD40NmZGQkfzAmlXcCfo7ikqhN7Lqb4Mr8xaRNPXSKvIJLY72HP1ZM8x1Id1HPjgJ16VjRJk4ENfre%2Fk2bYZH8VW1VbILuDu0z56hcOQEZprbhTqXXWWn27XQxhDEP7uAbIdjxgtMueL11F3SYzRKBv24F%2Fw4JKns9U4S4YAR%2BXzKVzV8J%2BbD%2FA6KgHPdxV9hBj1eg6dFjaE3X4Pq1XddkRH%2BlqDL8RV8q7Pwtj%2FjfCSAAA6NnzJ%2FPDPhuerxd%2F21GhPEurxwW%2Bhx8Sy1d9Y8FTd9WJnRCYaqtGLUgUqUvOgtKi7g%2Fi2ur2eAqwXZj1cS%2FFZaZz9bfh6AO7O54GLZPZGJMU%2FME60UTaMLg4rv%2B7ntsjuj%2BJIYbo5KjcWCj3oMG2mZPqOadYJUmd5MZm2PK9%2FkJNVtVlOlkUu%2BcoNJsSIzcubKpy68k2cdMWnwZ6ks2NoSxJjvZn4SMLXC3ckGOqUBs7eADs5r4cgPm6ONp%2B52BDGpWIr0XN%2BoWfP4NgHjHMIhMrI%2FnbTlnE9%2FKlIXEdb4rdz8uJbUZclfFCg%2BeY5pmwC5u6%2BAvwG1PZqM8bG8J91Vv5VCGKgQS1%2Bop18nQDoFKCOqZlHZaaoMJFykO%2BTMVu07tBkwGmwA%2FuRFafO%2FoF0I9GlYFXGIhbLO%2Bd5lm0Ob%2BMSTDjr%2BvZTr1EwVlRB2Sw6UhEvM&X-Amz-Signature=5d97f94b015fb4b2835d59212a4ebf94b5af6e455bb3d9a6ae851c56b588ba73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62ZN3IX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyjppEGN71my38wUe65sM4xbUYIxAgypNOJam%2B9DDIpAIgNPK2BBhzGimR%2FfliV48E%2FMzlZ8TrfLtQWZH3yemsh%2BYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAaGebsnyRSrAXrnircAyGAPY%2Bax0FZ8ilqYKqACb8F0UR%2FZDGixFyXRFbkAG5opuXGP2%2BJUs1EDLdW8gtLTfATp%2F4Q4xQo%2F7F1QgqFQx3BKw6%2FkgSDCF6t%2BSkkTmAT30W2ffkxdEVeCbiVTX9dXPgiD5tMKH66Iu71y9UuKyKKzOLRlH7NJe205I19MXKGLqLeD40NmZGQkfzAmlXcCfo7ikqhN7Lqb4Mr8xaRNPXSKvIJLY72HP1ZM8x1Id1HPjgJ16VjRJk4ENfre%2Fk2bYZH8VW1VbILuDu0z56hcOQEZprbhTqXXWWn27XQxhDEP7uAbIdjxgtMueL11F3SYzRKBv24F%2Fw4JKns9U4S4YAR%2BXzKVzV8J%2BbD%2FA6KgHPdxV9hBj1eg6dFjaE3X4Pq1XddkRH%2BlqDL8RV8q7Pwtj%2FjfCSAAA6NnzJ%2FPDPhuerxd%2F21GhPEurxwW%2Bhx8Sy1d9Y8FTd9WJnRCYaqtGLUgUqUvOgtKi7g%2Fi2ur2eAqwXZj1cS%2FFZaZz9bfh6AO7O54GLZPZGJMU%2FME60UTaMLg4rv%2B7ntsjuj%2BJIYbo5KjcWCj3oMG2mZPqOadYJUmd5MZm2PK9%2FkJNVtVlOlkUu%2BcoNJsSIzcubKpy68k2cdMWnwZ6ks2NoSxJjvZn4SMLXC3ckGOqUBs7eADs5r4cgPm6ONp%2B52BDGpWIr0XN%2BoWfP4NgHjHMIhMrI%2FnbTlnE9%2FKlIXEdb4rdz8uJbUZclfFCg%2BeY5pmwC5u6%2BAvwG1PZqM8bG8J91Vv5VCGKgQS1%2Bop18nQDoFKCOqZlHZaaoMJFykO%2BTMVu07tBkwGmwA%2FuRFafO%2FoF0I9GlYFXGIhbLO%2Bd5lm0Ob%2BMSTDjr%2BvZTr1EwVlRB2Sw6UhEvM&X-Amz-Signature=a246c1c8dd2d135acf6db24df65c88c031796f7df7b04dbd871b108f5b64a0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

