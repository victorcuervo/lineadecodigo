---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YASTT4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RRs2UbUOfJM5O1phxmPCv9pz%2B1PO3jksSDVeAwaxAAiBg3Jx8v%2BBGfjgvbMHqEFUxv3ZfmBtXG6G8vgrrk%2FLXUyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMedM%2B9AfqTFMsAJO3KtwDs2fIoccbIM7anmr0RH2750%2Fsx9%2Bl%2FxPICYR5UFaikBDAFBYXoeW5hcH2aa9Dp35D8KIO%2FQoQMoD%2FWU2li%2Fgb3foGrBSKKTAzcTS4vJo1T58bhnx%2B4hGoW4%2F9VofPF8czL1jkcrdkL03ehNx8pzn6VVl5afdh2jHkeLhLgXpNOhO311czXSnOyh7h0mTgcHoYlntR2F7zW16X8SBEBtv12E%2Bd5DNnCwiHM2y5n4yYt%2FXI5nNpf3gQrbJ6yr51Gternuo6kDpzqZyjaMVFr5epld7coQTv0%2BVHvCvYx2LeeEkmXsylX2e1JyPKQeD%2Fo5BfMz8GEeOh5ZQZOsmOxq3K6vIewL7YJVszrOuq7ujydCxUzpGXrcDxIhC0BqKtcrRQvAb9cwM2W77Jo5aZNXJWjH62EbqjpKRVkU5FQzVHfqro6DkDBGSd0WlHAW556s1gjNtoaM%2Fq8M0j8vwcMM9Xr7dq6pg%2FMnhPrHwkM1PX%2F80BwDeyEFPjRuUx6mJiQm58JRPWrGcBEcBft8%2BWyDImnnfJa111BxumCwKRB4pV0bUKl8lsiWRG76RiAHBL672nbBjpZkuctczEqT1PjVddh60vryDPKk4YnjQOv%2FOvIl03GTrOMMOEtigF7hAw06HdyQY6pgHqG13Cr6aaVUHl4%2B1etSyscO1eN7yrHXr0Z3VdBee8i7lTKnXxEbFZw%2FWgPzroDVCw3jBDzIZI4NKjpCFcVkLiRDrBxpnU4marU5qqocJVVrfYRmf9ElRJMZIlcqybQ4taCZ3U59MA9nMhtESk5HA%2FMgqLWbKHIojra2DaHm68s%2FYWu6Is%2FyKkWEk4Dz%2Bc6JNp%2F%2B1K63luLQViH8qCt%2B2Hh96PKFiQ&X-Amz-Signature=62e0c833386f568970d3ee958aa811aff1b76e16a44557ff93d3034ef00b1da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YASTT4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2RRs2UbUOfJM5O1phxmPCv9pz%2B1PO3jksSDVeAwaxAAiBg3Jx8v%2BBGfjgvbMHqEFUxv3ZfmBtXG6G8vgrrk%2FLXUyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMedM%2B9AfqTFMsAJO3KtwDs2fIoccbIM7anmr0RH2750%2Fsx9%2Bl%2FxPICYR5UFaikBDAFBYXoeW5hcH2aa9Dp35D8KIO%2FQoQMoD%2FWU2li%2Fgb3foGrBSKKTAzcTS4vJo1T58bhnx%2B4hGoW4%2F9VofPF8czL1jkcrdkL03ehNx8pzn6VVl5afdh2jHkeLhLgXpNOhO311czXSnOyh7h0mTgcHoYlntR2F7zW16X8SBEBtv12E%2Bd5DNnCwiHM2y5n4yYt%2FXI5nNpf3gQrbJ6yr51Gternuo6kDpzqZyjaMVFr5epld7coQTv0%2BVHvCvYx2LeeEkmXsylX2e1JyPKQeD%2Fo5BfMz8GEeOh5ZQZOsmOxq3K6vIewL7YJVszrOuq7ujydCxUzpGXrcDxIhC0BqKtcrRQvAb9cwM2W77Jo5aZNXJWjH62EbqjpKRVkU5FQzVHfqro6DkDBGSd0WlHAW556s1gjNtoaM%2Fq8M0j8vwcMM9Xr7dq6pg%2FMnhPrHwkM1PX%2F80BwDeyEFPjRuUx6mJiQm58JRPWrGcBEcBft8%2BWyDImnnfJa111BxumCwKRB4pV0bUKl8lsiWRG76RiAHBL672nbBjpZkuctczEqT1PjVddh60vryDPKk4YnjQOv%2FOvIl03GTrOMMOEtigF7hAw06HdyQY6pgHqG13Cr6aaVUHl4%2B1etSyscO1eN7yrHXr0Z3VdBee8i7lTKnXxEbFZw%2FWgPzroDVCw3jBDzIZI4NKjpCFcVkLiRDrBxpnU4marU5qqocJVVrfYRmf9ElRJMZIlcqybQ4taCZ3U59MA9nMhtESk5HA%2FMgqLWbKHIojra2DaHm68s%2FYWu6Is%2FyKkWEk4Dz%2Bc6JNp%2F%2B1K63luLQViH8qCt%2B2Hh96PKFiQ&X-Amz-Signature=33fbf83f663353a0db0f2148eacb8500c135c30e4f75c021feb80360736980d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

