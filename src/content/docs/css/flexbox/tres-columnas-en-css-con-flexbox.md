---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GK6WEJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA%2FJP0ZsyMxLcJ9L7m0lSvRCc0c5Q8w7GYwCzpYYOmTAIhAKkqGnkECkABdQ58lxNlZz%2B9WV%2FBMz546xHkY%2FfvnC3aKv8DCE8QABoMNjM3NDIzMTgzODA1Igw6ZW%2FnhjQDFg35kqsq3APGxHzvgm1PQcQ9MmTqq2tfRt9JRK2xk%2FLfGd%2FoZnVw04Ti%2Bbn7MzyJEMkt%2FNy3Nv1%2FJOwNFd%2FD3%2B66NTDpXeL%2FzghKT3WMQvbuTTpnskKWK5MxLUTOmv9tYzx8jmDmnbDhlCncfkRqsVm0H%2FA7%2BbfgjGLIK9rqbKFZW0VIlgmdCHmONUTCouTfgfytB6D3HjhIXj2lA6eAbYq%2B61P8RZX9oJqwE8eEylnqiN8uqFK2YjMWF8OH9X43MAgrvXcTPkQANUoaAE53vn0VAYREASlNGrhhj14g9qivtMmlBtsN3tNfV4GsnyTai4G%2FvwyMFCMRN3vzkre9BtBBOrSaZ4%2F7cOOpkTKw7MWltIdeHaQgO9BSIZcoS61JxBxQFjc64Eik5HQsTkH%2BdioLRE9QiFqeKIm%2BGoTI6CYfDsKTJOy997FfVVlkW1aUwC3ZQQFHAwzJllHYtFN%2FUg%2Fm1v4MSoiQfRZtBIHjn1VIl%2Blkifnv1mXntNCmWeP0KQflE6ilK6OLjyE%2FRNjMsZTrwtdua6v%2FFm8rKXqKBhWyY4Wta7yI4PwdBPedL3xUPI%2BAvJAKzu19ESwyAMs%2F4QD%2FMXtYx7wqvCiecuRwSJ4eZMWKRQEyaWAXMzUViEhPQyjTMTDGjMjJBjqkASgEuxRGkq55UY9ERrghOmXn0o9pcgWgPDorkbc4%2F1fjf5Kgnnl7HFc%2BoexJCO0KVhRnCZzSyz4jKwvQ51de6UjI%2FFmhMX7m3RhSqWYMgTYkQg9YK0N68B4GRzW5xajSuCvcbEI4B5nUQrUgbsV5FISiMMr%2Ft0cq30RC%2BPPdeyQ1yldR64JG4xv%2FKVc9JMWDYf0%2B9t%2FIz1l1Bmzc5lw0hSQgRVEZ&X-Amz-Signature=831845004b93a90fa7b862fa79ce2a8795c21c900faec7440d87ab31bb8bf9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GK6WEJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA%2FJP0ZsyMxLcJ9L7m0lSvRCc0c5Q8w7GYwCzpYYOmTAIhAKkqGnkECkABdQ58lxNlZz%2B9WV%2FBMz546xHkY%2FfvnC3aKv8DCE8QABoMNjM3NDIzMTgzODA1Igw6ZW%2FnhjQDFg35kqsq3APGxHzvgm1PQcQ9MmTqq2tfRt9JRK2xk%2FLfGd%2FoZnVw04Ti%2Bbn7MzyJEMkt%2FNy3Nv1%2FJOwNFd%2FD3%2B66NTDpXeL%2FzghKT3WMQvbuTTpnskKWK5MxLUTOmv9tYzx8jmDmnbDhlCncfkRqsVm0H%2FA7%2BbfgjGLIK9rqbKFZW0VIlgmdCHmONUTCouTfgfytB6D3HjhIXj2lA6eAbYq%2B61P8RZX9oJqwE8eEylnqiN8uqFK2YjMWF8OH9X43MAgrvXcTPkQANUoaAE53vn0VAYREASlNGrhhj14g9qivtMmlBtsN3tNfV4GsnyTai4G%2FvwyMFCMRN3vzkre9BtBBOrSaZ4%2F7cOOpkTKw7MWltIdeHaQgO9BSIZcoS61JxBxQFjc64Eik5HQsTkH%2BdioLRE9QiFqeKIm%2BGoTI6CYfDsKTJOy997FfVVlkW1aUwC3ZQQFHAwzJllHYtFN%2FUg%2Fm1v4MSoiQfRZtBIHjn1VIl%2Blkifnv1mXntNCmWeP0KQflE6ilK6OLjyE%2FRNjMsZTrwtdua6v%2FFm8rKXqKBhWyY4Wta7yI4PwdBPedL3xUPI%2BAvJAKzu19ESwyAMs%2F4QD%2FMXtYx7wqvCiecuRwSJ4eZMWKRQEyaWAXMzUViEhPQyjTMTDGjMjJBjqkASgEuxRGkq55UY9ERrghOmXn0o9pcgWgPDorkbc4%2F1fjf5Kgnnl7HFc%2BoexJCO0KVhRnCZzSyz4jKwvQ51de6UjI%2FFmhMX7m3RhSqWYMgTYkQg9YK0N68B4GRzW5xajSuCvcbEI4B5nUQrUgbsV5FISiMMr%2Ft0cq30RC%2BPPdeyQ1yldR64JG4xv%2FKVc9JMWDYf0%2B9t%2FIz1l1Bmzc5lw0hSQgRVEZ&X-Amz-Signature=86aa568e855f97e13dccd66d25486c4c3176b6990bc3f881d883a10d7920c4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

