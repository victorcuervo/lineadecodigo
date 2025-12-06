---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPDAWSC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICefFQCHquMGjwkT9Fe62hKeAEwBweREOVffK0tnUlQHAiBGQtXDYCm6fBTy16Az3T8vk5l9JPMDBWq07X6A153Q%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYilU18DH5mgDN093KtwDURimi3qMQsOB7VlMmg69jXP4PYT9%2B3lwgqfPyLZHvTBbY7qjLvuUhRgk%2Flqfe6vsm9hkjdVpAG4yBHWEAmzHvbRpAtLjgX5ZvXeZ8nYIsk%2BZgS9e6f2daSP5Saa6hZChZIbPamTZrHb6mGqS5wTibxVaTh2H4vjULHQqvJEr%2FJnar%2BfkQ6L64GwSKGLp8w0ZZ16V5xsYi1MlWVaRW%2Bb7Xs3%2Fdi%2FgKFIhbUWqhwEVnDw5%2FUCSvgqMDAxVQsdHsxFbS9Hx5Y0NhoNDM%2BCbTKKF%2B91EOUFaYLpB1naQvpVMJRFVe%2FewfmXwxcvT3S4IbIsEfO96QEheDfrd4r1vinEX2aeIUSFC5Svjn5k92ECByEqP1Ll%2FT0nCYlzk1u3bNIFAM79UnFqeXkUmDCOYZ0jctV61MVm6CY6tafYK95u3BjYhutFTNcRWXXKuJEDkY22cK2b5z2Mi37U9kLMj%2BRt0d5r26So9ZEb8J%2Fbebq5tmvEEeBuPiD1yCoTY0DpGnqyU8PPPBWwiDWWbFXeIyY5o%2BKwFkuLSpNNpE8vmhkKI3mHodE0qjDQsHASABC37aqARBKESB%2B%2FhQypwaHh1Uqd4xdBUvCsgmsz2f2kTfnN9kpWjJjTHCyJjbG8YjsUws8jRyQY6pgEg4leWtcKCgKZrKlj4Z0oHP%2FVRH7WJMAzLEyA4oehFjzJMW5WBzH3ngtnOksBzXMKIwYCl64Osibn%2Fm1UczSx502bULFZxBwufsHv%2FEGOiGD9kssmG86kxnrL6p4i0qwz9C8ZLkSWsHf7KuhuK0c1Zil%2FxxHi71FEJ7VgLZikN2xs3Ueja1zLgDM8h2JCpqS1pb6Sn%2FkiDnxsFbMqwI%2FR9MqusLRnZ&X-Amz-Signature=115a67a16ddca222476aa044bbdc84b33bb8a2fc241f9a15adbcb5d5df7a7909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPDAWSC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICefFQCHquMGjwkT9Fe62hKeAEwBweREOVffK0tnUlQHAiBGQtXDYCm6fBTy16Az3T8vk5l9JPMDBWq07X6A153Q%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYilU18DH5mgDN093KtwDURimi3qMQsOB7VlMmg69jXP4PYT9%2B3lwgqfPyLZHvTBbY7qjLvuUhRgk%2Flqfe6vsm9hkjdVpAG4yBHWEAmzHvbRpAtLjgX5ZvXeZ8nYIsk%2BZgS9e6f2daSP5Saa6hZChZIbPamTZrHb6mGqS5wTibxVaTh2H4vjULHQqvJEr%2FJnar%2BfkQ6L64GwSKGLp8w0ZZ16V5xsYi1MlWVaRW%2Bb7Xs3%2Fdi%2FgKFIhbUWqhwEVnDw5%2FUCSvgqMDAxVQsdHsxFbS9Hx5Y0NhoNDM%2BCbTKKF%2B91EOUFaYLpB1naQvpVMJRFVe%2FewfmXwxcvT3S4IbIsEfO96QEheDfrd4r1vinEX2aeIUSFC5Svjn5k92ECByEqP1Ll%2FT0nCYlzk1u3bNIFAM79UnFqeXkUmDCOYZ0jctV61MVm6CY6tafYK95u3BjYhutFTNcRWXXKuJEDkY22cK2b5z2Mi37U9kLMj%2BRt0d5r26So9ZEb8J%2Fbebq5tmvEEeBuPiD1yCoTY0DpGnqyU8PPPBWwiDWWbFXeIyY5o%2BKwFkuLSpNNpE8vmhkKI3mHodE0qjDQsHASABC37aqARBKESB%2B%2FhQypwaHh1Uqd4xdBUvCsgmsz2f2kTfnN9kpWjJjTHCyJjbG8YjsUws8jRyQY6pgEg4leWtcKCgKZrKlj4Z0oHP%2FVRH7WJMAzLEyA4oehFjzJMW5WBzH3ngtnOksBzXMKIwYCl64Osibn%2Fm1UczSx502bULFZxBwufsHv%2FEGOiGD9kssmG86kxnrL6p4i0qwz9C8ZLkSWsHf7KuhuK0c1Zil%2FxxHi71FEJ7VgLZikN2xs3Ueja1zLgDM8h2JCpqS1pb6Sn%2FkiDnxsFbMqwI%2FR9MqusLRnZ&X-Amz-Signature=ed1337586d6395b879ddb079d1f6307243a4a7c73f5b1e41441e08cee78a32bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

