---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPPG2Q2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE824LrUyDXP2X4FOpWJiBtNUgYCOqP4nv%2F3Oeb2AAOMAiEA%2BVOpNkDUQooBwS8bd52JYBOkYqOTR91qvi0aFkWsHuQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNVAZqqnNBJlHkBrCrcA45ok17rUXz%2FIioVLwWnpeSy9ssuHEmcxl6RMBo0Ab6jI%2FA1xFd6qskTvqdg5lh47zo113uw0DBlnhvYO7kfhvA%2BEklSK7oRj7d%2F5b4O4wRzajxPXiAI%2BbJ6HKQt2ufi3QAiMKya59WTvo4js9IjBthflm7Os%2BZA49fNUfRSjH7i1QKPjkcjWaeTGCkmKUv8UMfaOL10vgemPrf17Gv5OMNC689%2FD6rYXRDf51AALCvo%2BJltYp1ND43OYWjtUsMS9QrnzKMEforIeQETkis8bpdL0P8dw4SGSCKG8%2FXuWl182JMrz517H7Kh0KLwHxSF6Ajyc4qiHJ5Ofmd0qG9E4aYBro1eQR9%2BUQgjMbchrk6QF5tWV%2BBVOJH%2F43GHLU2WL1qknejma5U%2Ft4JpC66J6q3QBDqnOu6uAn8%2BTwxHNcUjrLEmlPpHKn%2Fa2BVdvatqxknuuBCzvMmiZnwAo%2FPnyvzmuUbf%2BmjTcdf%2FcBD%2FfvjINOt4Nr%2FMlQfwrdE67zXXBMKQVYnZTf7EuU6JrqjAiYwxvJkP493LntE0vR44Iad5btkwebvDMgbziIGuvbNwx%2F3TT%2BJyDw4AGyPeHi5TcGJFeve3maA%2BiqslYx2ol5VBgIZkjAILlm482%2FDHMKmF2MkGOqUBwBAFGlC08B3H0Kq5Js2jaleXt%2BhAhhARyuaSjw7IUsPW8UmL6gUzc8q3pn1wJSHPahEOlf53WWmuABn8EpSAnUoDLW22qRSE7Gk%2FZHBNBFFt49JDjvVDy7LLFkZgElnNv7Fcd%2BU8qwSjznw0UmdBvTnt7OjNBdkwltMXBIfW5fi1oluNJ8bUn3yeXT4iIJoWOm%2Bpy45k27Bfe%2Bw38Lf7U3jXK%2FJR&X-Amz-Signature=999cdfc69fd7505e941cfc999545fae28525c41c698ce377f4ebdda43506dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPPG2Q2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE824LrUyDXP2X4FOpWJiBtNUgYCOqP4nv%2F3Oeb2AAOMAiEA%2BVOpNkDUQooBwS8bd52JYBOkYqOTR91qvi0aFkWsHuQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNVAZqqnNBJlHkBrCrcA45ok17rUXz%2FIioVLwWnpeSy9ssuHEmcxl6RMBo0Ab6jI%2FA1xFd6qskTvqdg5lh47zo113uw0DBlnhvYO7kfhvA%2BEklSK7oRj7d%2F5b4O4wRzajxPXiAI%2BbJ6HKQt2ufi3QAiMKya59WTvo4js9IjBthflm7Os%2BZA49fNUfRSjH7i1QKPjkcjWaeTGCkmKUv8UMfaOL10vgemPrf17Gv5OMNC689%2FD6rYXRDf51AALCvo%2BJltYp1ND43OYWjtUsMS9QrnzKMEforIeQETkis8bpdL0P8dw4SGSCKG8%2FXuWl182JMrz517H7Kh0KLwHxSF6Ajyc4qiHJ5Ofmd0qG9E4aYBro1eQR9%2BUQgjMbchrk6QF5tWV%2BBVOJH%2F43GHLU2WL1qknejma5U%2Ft4JpC66J6q3QBDqnOu6uAn8%2BTwxHNcUjrLEmlPpHKn%2Fa2BVdvatqxknuuBCzvMmiZnwAo%2FPnyvzmuUbf%2BmjTcdf%2FcBD%2FfvjINOt4Nr%2FMlQfwrdE67zXXBMKQVYnZTf7EuU6JrqjAiYwxvJkP493LntE0vR44Iad5btkwebvDMgbziIGuvbNwx%2F3TT%2BJyDw4AGyPeHi5TcGJFeve3maA%2BiqslYx2ol5VBgIZkjAILlm482%2FDHMKmF2MkGOqUBwBAFGlC08B3H0Kq5Js2jaleXt%2BhAhhARyuaSjw7IUsPW8UmL6gUzc8q3pn1wJSHPahEOlf53WWmuABn8EpSAnUoDLW22qRSE7Gk%2FZHBNBFFt49JDjvVDy7LLFkZgElnNv7Fcd%2BU8qwSjznw0UmdBvTnt7OjNBdkwltMXBIfW5fi1oluNJ8bUn3yeXT4iIJoWOm%2Bpy45k27Bfe%2Bw38Lf7U3jXK%2FJR&X-Amz-Signature=c4fa53bf8f929084e2f5c856c230f96944058b3a6b848b6fc1b815aa99b9742b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

