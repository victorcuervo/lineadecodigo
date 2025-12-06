---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVX5LD6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBWi1UW3Q9FfrpfPNeKhj969QPpSYM5k3rnSYVCW%2BVVAiBxdDp%2Bje37uV8cP5pQfE9UxPseZP4VOCySkX%2FWR6yIwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs%2FegwvBTPYvhYnG2KtwDYpLyktCyPboVFXImII8UTaPyR1pkbxN2lg%2FgzeJSaKBtar%2BTydURQ0QO92r8jfSgaEsj0SbCLa%2FZb9FZckI8lF8bn8XRBqfNUhR9gFfEL%2FuG1oxU5R894F57LbmnVqyrKAy4x61p%2Bm%2FjEPf9cpSgvBvp7jnMRoiJ5Ogzn4A4fZ3eKBA5JCtQkxw6kQQSNCaU8%2F3y%2B6N%2FWGjOLkaQ9mB9gKinPGYKn4nC1JYsdN06zRBg5S50LwHz0HUoLJ8pq%2Bw1hQm28eOwuyZZL5TSk83QtSaRiCm9zOwXAULC3YStiBEwJOydCB9UeYjnVdJrsGJkb%2BM4IdDOHYum4Z8U7GgXfe6rXIC0UMqwbYiN9Jjl6YPzLGACqIiN03bOZBlN%2Fr6dtVGELFdUxjcWEpkH7IxkK%2B4PNm%2BMLY9%2BNSkPn7M7VnDfGw5k9jmdfejQy8f5LqaKP50Rcwlt5ucTRLhs6zF5ttoHJsU%2BWc7EiveANb3zrfRZWa%2FTFOiAUWWNhp1j5Bdbc26OEd%2B%2BJzIpH5OdaUV7DNPtZyHos8GnnqlqoSebxzLXH%2FR4ioJe%2FjEOat%2FTnzuY4P2fdXUruMfclQLkF5VHVODIorsBaxVFfsyBqj%2BbTpG%2BY6DfiWqPbkVEM9owrcHRyQY6pgGJsSJ8%2FwkWq1EnklMSNjcXLnimsMAy3rmmJDkqkrU8n93vvfrKVKg5zfexEbq%2FjwWvhXSV1QYmAp0x6Ueyv6Vv8ADr5T7eudLpP6PfRzuG5giV9NYKkARuoZHq7AeGbUCIGwjZm2vq484lgBfon05ZEfRHRLfzu3Xe%2BScRCIih9B7mktYQyC5IfosVAzmrCq%2FTzxxp%2BFW5lU3EZHENbF7E3P6DK%2F4y&X-Amz-Signature=6e06d4194ae5fa40577b1323cfc1414ac070ca171239e8b68ef008dfb325cfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVX5LD6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBWi1UW3Q9FfrpfPNeKhj969QPpSYM5k3rnSYVCW%2BVVAiBxdDp%2Bje37uV8cP5pQfE9UxPseZP4VOCySkX%2FWR6yIwSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs%2FegwvBTPYvhYnG2KtwDYpLyktCyPboVFXImII8UTaPyR1pkbxN2lg%2FgzeJSaKBtar%2BTydURQ0QO92r8jfSgaEsj0SbCLa%2FZb9FZckI8lF8bn8XRBqfNUhR9gFfEL%2FuG1oxU5R894F57LbmnVqyrKAy4x61p%2Bm%2FjEPf9cpSgvBvp7jnMRoiJ5Ogzn4A4fZ3eKBA5JCtQkxw6kQQSNCaU8%2F3y%2B6N%2FWGjOLkaQ9mB9gKinPGYKn4nC1JYsdN06zRBg5S50LwHz0HUoLJ8pq%2Bw1hQm28eOwuyZZL5TSk83QtSaRiCm9zOwXAULC3YStiBEwJOydCB9UeYjnVdJrsGJkb%2BM4IdDOHYum4Z8U7GgXfe6rXIC0UMqwbYiN9Jjl6YPzLGACqIiN03bOZBlN%2Fr6dtVGELFdUxjcWEpkH7IxkK%2B4PNm%2BMLY9%2BNSkPn7M7VnDfGw5k9jmdfejQy8f5LqaKP50Rcwlt5ucTRLhs6zF5ttoHJsU%2BWc7EiveANb3zrfRZWa%2FTFOiAUWWNhp1j5Bdbc26OEd%2B%2BJzIpH5OdaUV7DNPtZyHos8GnnqlqoSebxzLXH%2FR4ioJe%2FjEOat%2FTnzuY4P2fdXUruMfclQLkF5VHVODIorsBaxVFfsyBqj%2BbTpG%2BY6DfiWqPbkVEM9owrcHRyQY6pgGJsSJ8%2FwkWq1EnklMSNjcXLnimsMAy3rmmJDkqkrU8n93vvfrKVKg5zfexEbq%2FjwWvhXSV1QYmAp0x6Ueyv6Vv8ADr5T7eudLpP6PfRzuG5giV9NYKkARuoZHq7AeGbUCIGwjZm2vq484lgBfon05ZEfRHRLfzu3Xe%2BScRCIih9B7mktYQyC5IfosVAzmrCq%2FTzxxp%2BFW5lU3EZHENbF7E3P6DK%2F4y&X-Amz-Signature=8fc5f1e6d9f845325a5bb775d96e4295f2937712ee0e5f9c77304f269a036742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

