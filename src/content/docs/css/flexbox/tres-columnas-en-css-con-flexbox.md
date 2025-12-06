---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTHZAMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwM9LofUP2BO1y73s8k6IRI%2Bzd3jr%2Fp3%2B0OSHerAGmPAIhANZ7w%2BwclBXPU9wWDPWsYHQ%2BIu%2FjbPLV%2FQQDRX00%2BvieKv8DCH8QABoMNjM3NDIzMTgzODA1IgzyZz0ISzniL3WJ83Mq3APZ6Qze22pzahXgu6cPtIkcmCJ7ltmGR5BQKqbEUJe1UEiZNX1r3A6uwXnCtfwFRvbgse5ZS9DSVoYZAmyYxxqVsdpbOQ%2FKDJ6wFGuhwZkSx2M7Irq%2FamyJAV1fKi5jdMoE4X6eXoDZZlJg2vDc%2F%2Fvx3axVHNfnugbKu4ZYk93Nww6AMD0ww67LE0g51wa4zGYtyxd9Itz5LzSNz2AUuUkceQuQmgg4M0ZvFCp4OnajIzm%2BTB2BGu2LdmWkQE7hQQ8zrg%2FYqj46sS1%2Byo3xgNYapVbKVfQFi8I9O0%2FaH%2F2JOiRSQQ%2Fwu07ESqZzN7oRdjEGPtO9hShCP9Ui4E%2FLV8JzWGJe4H2X0BVMUtFUgmptLOCPsYa4%2F5Bo310WId2ejWNZavUW3lz%2Fys7EmoPb6LddF5e9Cqx5d0PUCrmdBRvhibQg2gGjlaAIgE6kw5xduOr9QRww5UAKwTxNGNJQQIxdZ1FLW9qxJF8DU%2Fi9pzepw%2FqYKRAdC%2FgWrw1JRkymlV%2Bq76oTJrjekba7RKBRr4yBat0TXmkFUsTVihmjhdiYJf9M1oZh%2BAJKzsO4mMnQyKfV9iCUvf4hukmE1Q9u09a54BBIn7nqtQsHAFh9ZM0%2BTLUV%2FWlNCVEaS87q2jDT1NLJBjqkAWKYyAvBODVKzskh54zz4ks9o7MrfQS9sxybGwlc%2BnT5Y3pfnlBkydj8PqJVKOEXDXg3VPaQG7zA9kVgjX0tAyoyKKwHFkT7I9Y%2Fyj6FwQeqZo7FKr2pFpbe%2B4zB%2BYg6v9dRw6LvPlnsSAmMbZHuo8qQmOzhTzN%2FIPiUe2Ze%2FfJ57WgRE0XN0ll3brJplEWEHaCh26LjRpvB31WKvlhdZ3j1A%2Ff7&X-Amz-Signature=fe7bb6727b2ebac5808658ba853fa781978abfaeb3fa53263cc23c30378958db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTHZAMZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwM9LofUP2BO1y73s8k6IRI%2Bzd3jr%2Fp3%2B0OSHerAGmPAIhANZ7w%2BwclBXPU9wWDPWsYHQ%2BIu%2FjbPLV%2FQQDRX00%2BvieKv8DCH8QABoMNjM3NDIzMTgzODA1IgzyZz0ISzniL3WJ83Mq3APZ6Qze22pzahXgu6cPtIkcmCJ7ltmGR5BQKqbEUJe1UEiZNX1r3A6uwXnCtfwFRvbgse5ZS9DSVoYZAmyYxxqVsdpbOQ%2FKDJ6wFGuhwZkSx2M7Irq%2FamyJAV1fKi5jdMoE4X6eXoDZZlJg2vDc%2F%2Fvx3axVHNfnugbKu4ZYk93Nww6AMD0ww67LE0g51wa4zGYtyxd9Itz5LzSNz2AUuUkceQuQmgg4M0ZvFCp4OnajIzm%2BTB2BGu2LdmWkQE7hQQ8zrg%2FYqj46sS1%2Byo3xgNYapVbKVfQFi8I9O0%2FaH%2F2JOiRSQQ%2Fwu07ESqZzN7oRdjEGPtO9hShCP9Ui4E%2FLV8JzWGJe4H2X0BVMUtFUgmptLOCPsYa4%2F5Bo310WId2ejWNZavUW3lz%2Fys7EmoPb6LddF5e9Cqx5d0PUCrmdBRvhibQg2gGjlaAIgE6kw5xduOr9QRww5UAKwTxNGNJQQIxdZ1FLW9qxJF8DU%2Fi9pzepw%2FqYKRAdC%2FgWrw1JRkymlV%2Bq76oTJrjekba7RKBRr4yBat0TXmkFUsTVihmjhdiYJf9M1oZh%2BAJKzsO4mMnQyKfV9iCUvf4hukmE1Q9u09a54BBIn7nqtQsHAFh9ZM0%2BTLUV%2FWlNCVEaS87q2jDT1NLJBjqkAWKYyAvBODVKzskh54zz4ks9o7MrfQS9sxybGwlc%2BnT5Y3pfnlBkydj8PqJVKOEXDXg3VPaQG7zA9kVgjX0tAyoyKKwHFkT7I9Y%2Fyj6FwQeqZo7FKr2pFpbe%2B4zB%2BYg6v9dRw6LvPlnsSAmMbZHuo8qQmOzhTzN%2FIPiUe2Ze%2FfJ57WgRE0XN0ll3brJplEWEHaCh26LjRpvB31WKvlhdZ3j1A%2Ff7&X-Amz-Signature=c6c000c9188d7c41c9a40b85d6e485efa38b4dd9aacc56c1f9f772edc727bf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

