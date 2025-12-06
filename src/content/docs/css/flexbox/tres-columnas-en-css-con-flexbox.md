---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYTZN6M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2LNyivYqwHdwywbRf7u6kzq2rqQ2OrN9pgqaacwOhEAiAOazdMryEuL%2BdItTaxNiwx64jhHHvXgsbc5%2FvWyh7xfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZGPi7yeg2t2AUIffKtwDTk4eyzkmTQ8aaC6STAjCOeVkXxXea6ZJjgzcBWQQD91eu7lt9XqiDWd7vtTsZdP5zu18rh4erJHtgYEGA1gNX72C9U29p9XSl9iEQX%2Bo%2FbZktq7a8Qgfo0DybuoMlnYoF8XRjtsv97ubIT1TZ2rqWB9UGjLqBerfbdX3tr4w2FRdP%2BqP3urNxKdtw7r6C5rUL31wvynNezLDBxVKwUID3rIzDCLNoQDBnYv5MpFq2yIPXkKcZoyS8KvGy3MrWGTr6FGb38s6QFjVv08cm9YrDsfLFHaUfnRJFYyDn2Ne3qI56Ny4TAqXLdoKD77zMZi3jsfZJ7dX%2FZ%2B6rswlgJwLGhBe3r44eBxMigxgnL6SI9Y1KhSkPqIQTWbk8NXjvHVz%2F8jWwc4koqSmQ7B3hhQGOpwS3wqm13zv6TmXfjnC9m%2BpZfWAQBUbzz%2BADiog8ijfUrGGTlu5Uz9RlUsxMj%2FCjiZi9HL4Azdk2om6GjjUrBRqvFB01kgh7TwdekpCXNR7LGojbIaoLdtDwS40l4zclrQzPQmFHbWiAKDRZrmHj1xin4M6yJ0NxxrCTeY2z64yGKw3hRznrl8jLE1YCgTVgiBn3PSbdIvHgSZyKkq%2BQvduGisvNNfx7gHmsgQw89PSyQY6pgHUSBKTiofC7qfKXeS2IkgZPvCNN0qprqtviy7X8Vixe%2FaqHDFknlgCsPM%2BC9dOww%2Bx96NngPe15A9Ca1DQi%2BqBFkGYuIkKOHW8q%2B3L0PWGwtkar1mzjoWjb%2B%2BRjYkVi6iDHbsGpp2JE5tPogZhuZnLx9EvpGzZaBVk2MVYlKAvOCZwrJFvSfeiKLYqKH%2FHqhkZUjSTq8on7aBLCuMIkkDTIHSKT8yf&X-Amz-Signature=f0f6c9d56a4bae229a21861116de39acd5283fdf3a417714ea23aa9229d8248e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYTZN6M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2LNyivYqwHdwywbRf7u6kzq2rqQ2OrN9pgqaacwOhEAiAOazdMryEuL%2BdItTaxNiwx64jhHHvXgsbc5%2FvWyh7xfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZGPi7yeg2t2AUIffKtwDTk4eyzkmTQ8aaC6STAjCOeVkXxXea6ZJjgzcBWQQD91eu7lt9XqiDWd7vtTsZdP5zu18rh4erJHtgYEGA1gNX72C9U29p9XSl9iEQX%2Bo%2FbZktq7a8Qgfo0DybuoMlnYoF8XRjtsv97ubIT1TZ2rqWB9UGjLqBerfbdX3tr4w2FRdP%2BqP3urNxKdtw7r6C5rUL31wvynNezLDBxVKwUID3rIzDCLNoQDBnYv5MpFq2yIPXkKcZoyS8KvGy3MrWGTr6FGb38s6QFjVv08cm9YrDsfLFHaUfnRJFYyDn2Ne3qI56Ny4TAqXLdoKD77zMZi3jsfZJ7dX%2FZ%2B6rswlgJwLGhBe3r44eBxMigxgnL6SI9Y1KhSkPqIQTWbk8NXjvHVz%2F8jWwc4koqSmQ7B3hhQGOpwS3wqm13zv6TmXfjnC9m%2BpZfWAQBUbzz%2BADiog8ijfUrGGTlu5Uz9RlUsxMj%2FCjiZi9HL4Azdk2om6GjjUrBRqvFB01kgh7TwdekpCXNR7LGojbIaoLdtDwS40l4zclrQzPQmFHbWiAKDRZrmHj1xin4M6yJ0NxxrCTeY2z64yGKw3hRznrl8jLE1YCgTVgiBn3PSbdIvHgSZyKkq%2BQvduGisvNNfx7gHmsgQw89PSyQY6pgHUSBKTiofC7qfKXeS2IkgZPvCNN0qprqtviy7X8Vixe%2FaqHDFknlgCsPM%2BC9dOww%2Bx96NngPe15A9Ca1DQi%2BqBFkGYuIkKOHW8q%2B3L0PWGwtkar1mzjoWjb%2B%2BRjYkVi6iDHbsGpp2JE5tPogZhuZnLx9EvpGzZaBVk2MVYlKAvOCZwrJFvSfeiKLYqKH%2FHqhkZUjSTq8on7aBLCuMIkkDTIHSKT8yf&X-Amz-Signature=bd373cde8ce99864759d7a208046069942c52f9ee6aa3c55bb05e9f784d3765d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

