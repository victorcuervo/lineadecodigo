---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZF5AYK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGEbqrJsjz47gZpvxc3hVC3iGHej2Q%2BPUz5imeyyqzkAIhAJns8EXkjEA956FUZOkq81qUXeZFx0n86EaxV9KkjcISKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvnMbcNkklaNJHHr0q3AOVi9m2%2B07ESMVIbWYJg1eKUte1YNVtALGoqaS8x7j5QANPMDAYx1a3EOEbIYnSvOPWbZ8ZtedBf3AS7m3%2Bdxfko2FN9RUfcbKQJZSyL%2BcKdPAf7eYNIFzZWKdxEj7qH0n9oLIrN2%2FVkzOKIfjbV4IVeKyvtMRan1UGL3%2BDBSNxQ%2FE7%2F178iESxaKh3WjO9fgVJKdvxZGiu9t41ymtArkcJJog6lPfyp5Sp%2Bv1c9khlwgkeLnF3PfXZxq58wVicY94UzJsYc%2FLwbOm8jmXXUibzP9SnM5z5LSek01bWcy2kDu4InHjrnnh8D7teIqeN7RfNOX1Qj844yIsKlbHXH%2BO1H%2F3fbIG33pF4zQ1Af0inY3ykISJbY29q8oPPxWLVX%2FxRSjDs5isQbBeab3pnr7vRo0DaMYrvsvIsLk9WQ%2Fx4465B4wMpQ4TRVnVGdawCVWU8BERWTcshD7mYe2gsn6lisIHeBahbNdeoNI95YZFtzsq5F2uyu61zGV5x5XIiNdeERY%2FLaBkb841uxuJPxMOjW8QRwjCi%2BbbD%2FvgIKOGUcjGmDSOjQi1i7Yq%2FEhLXfEqwIanLQhmwFPsSx2tpJsqcP9ctRikRi8cuQNfgE1bAbpVMAi3M3af4ZHmrWDDtntTJBjqkAWorbwPVmbMtLPzMl5j2HKQ5PuGfrn3w4m2EtvhwyLgf%2FXZ85WJ8cxxrzbERHEN8Lgmdw4ejWIkaGs%2FZjnrzBcOVX3LDdNUbktyKbCJDmS5CIzRPtFw79QBUbd52qoXBchEvEgpdAakotmHIWIkJcF3AUcQ6WIHqJucEEKX7reAAecNxoOyksVkroS8jVvthv9Fn15vGgohuf7KlFLj7igIjmGs8&X-Amz-Signature=86ee9dce7adc5d2c35a30b453a2efd6d24787afc494871656b4b2ca31446f5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZF5AYK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGEbqrJsjz47gZpvxc3hVC3iGHej2Q%2BPUz5imeyyqzkAIhAJns8EXkjEA956FUZOkq81qUXeZFx0n86EaxV9KkjcISKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvnMbcNkklaNJHHr0q3AOVi9m2%2B07ESMVIbWYJg1eKUte1YNVtALGoqaS8x7j5QANPMDAYx1a3EOEbIYnSvOPWbZ8ZtedBf3AS7m3%2Bdxfko2FN9RUfcbKQJZSyL%2BcKdPAf7eYNIFzZWKdxEj7qH0n9oLIrN2%2FVkzOKIfjbV4IVeKyvtMRan1UGL3%2BDBSNxQ%2FE7%2F178iESxaKh3WjO9fgVJKdvxZGiu9t41ymtArkcJJog6lPfyp5Sp%2Bv1c9khlwgkeLnF3PfXZxq58wVicY94UzJsYc%2FLwbOm8jmXXUibzP9SnM5z5LSek01bWcy2kDu4InHjrnnh8D7teIqeN7RfNOX1Qj844yIsKlbHXH%2BO1H%2F3fbIG33pF4zQ1Af0inY3ykISJbY29q8oPPxWLVX%2FxRSjDs5isQbBeab3pnr7vRo0DaMYrvsvIsLk9WQ%2Fx4465B4wMpQ4TRVnVGdawCVWU8BERWTcshD7mYe2gsn6lisIHeBahbNdeoNI95YZFtzsq5F2uyu61zGV5x5XIiNdeERY%2FLaBkb841uxuJPxMOjW8QRwjCi%2BbbD%2FvgIKOGUcjGmDSOjQi1i7Yq%2FEhLXfEqwIanLQhmwFPsSx2tpJsqcP9ctRikRi8cuQNfgE1bAbpVMAi3M3af4ZHmrWDDtntTJBjqkAWorbwPVmbMtLPzMl5j2HKQ5PuGfrn3w4m2EtvhwyLgf%2FXZ85WJ8cxxrzbERHEN8Lgmdw4ejWIkaGs%2FZjnrzBcOVX3LDdNUbktyKbCJDmS5CIzRPtFw79QBUbd52qoXBchEvEgpdAakotmHIWIkJcF3AUcQ6WIHqJucEEKX7reAAecNxoOyksVkroS8jVvthv9Fn15vGgohuf7KlFLj7igIjmGs8&X-Amz-Signature=0f2f071bcb0efa656cd93d3844462a25988824730ee7fdf2a545b4fd27323c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

