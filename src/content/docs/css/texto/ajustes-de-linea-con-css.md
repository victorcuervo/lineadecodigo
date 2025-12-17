---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24PW4ES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCvUVzMcMaoByKjVBJLl43IZsYRHwtghfZ%2BfzddpZhIQIhANCs7ebxsJYWnt9ZqnvbF4dRKfyUPPVirhiKwcJpbGYGKv8DCH8QABoMNjM3NDIzMTgzODA1IgxpqfveRiHZZftSmoUq3AMlF4uobOUIDNdf0hqp1ke6IMGjMa5hbvSt4nKyvKalDCbiJo6nVTGMS1aMpzqbec1rbS2w3JeNPGbXK4R6fCM1nADCRg9hJmR0WWv3VOkx6f9gGyfVfpHJA5fIxcH3k8lW5fQUF8sF7MV5jLCgO8QnNR8Bva712wLpi72dzEYbwdP0S4RXRTqpHmgtL4vKkuRa3oSy%2BFL94dsEFgSDINXuNaO32Gyviy8f%2FPX%2FpH39NJPZiH4AC13S%2FiXMtYH7Qw29ZVHnim7pR68F3vF%2FXZkR5prW4o%2FZ1NS3Dh9WUMI1rHof7AbKE3RtjtD4utSc1%2FUCLOEeJAWBUFu1e2BSP9WhdBJfbIvJbVue7OeSFlKuGzThg9iastLb1ZcluFxHRBKQ7FBq6AKynpOUtu0jd307MatGbOkleGUWt7PMrGHMUf57VBfmIkHXCqvknUoUV1W2kJJI%2BHT%2B06PrESetU5l%2BnT95JeDvMjv4N%2F5Vujmg9p%2FdmSw1zmaiRJ4iyhRckEpU7k5gjt9MOZ7ShImC8ahhvI4v65ozyxwVzUwaj%2BhYKPXP1iho%2F2pJpamK7yuFZcEruTl5hpWYDKFIKeAe%2BQcJ3YkFrg2h3rhWKJ7wB1ekov47pB6JYDhTNSc8HjCX4YrKBjqkAZKWWwA%2FU2jzr9Q8YtQutyhum7n1i5Y0xlBByRpibXLE6ZafOZ3O5E10w7pDavM55MVjfqRqMZqCAuu3VXgjd4C9NBmF7aHzQAIjC0qxGDX7DN%2BSEoNmrSH%2FbsV68QnfqyplnEv0UwR008XTKjwu57nBvGiKPPFJc4zY5ZyghcMQQP6akFPV2p1owfTDqMtwltKS1HPEMVUxZKunFn3kMgVTb0eo&X-Amz-Signature=dbf00db23787ea4565814f981d3f68587f061a695f8f31810f38bd9989987f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24PW4ES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCvUVzMcMaoByKjVBJLl43IZsYRHwtghfZ%2BfzddpZhIQIhANCs7ebxsJYWnt9ZqnvbF4dRKfyUPPVirhiKwcJpbGYGKv8DCH8QABoMNjM3NDIzMTgzODA1IgxpqfveRiHZZftSmoUq3AMlF4uobOUIDNdf0hqp1ke6IMGjMa5hbvSt4nKyvKalDCbiJo6nVTGMS1aMpzqbec1rbS2w3JeNPGbXK4R6fCM1nADCRg9hJmR0WWv3VOkx6f9gGyfVfpHJA5fIxcH3k8lW5fQUF8sF7MV5jLCgO8QnNR8Bva712wLpi72dzEYbwdP0S4RXRTqpHmgtL4vKkuRa3oSy%2BFL94dsEFgSDINXuNaO32Gyviy8f%2FPX%2FpH39NJPZiH4AC13S%2FiXMtYH7Qw29ZVHnim7pR68F3vF%2FXZkR5prW4o%2FZ1NS3Dh9WUMI1rHof7AbKE3RtjtD4utSc1%2FUCLOEeJAWBUFu1e2BSP9WhdBJfbIvJbVue7OeSFlKuGzThg9iastLb1ZcluFxHRBKQ7FBq6AKynpOUtu0jd307MatGbOkleGUWt7PMrGHMUf57VBfmIkHXCqvknUoUV1W2kJJI%2BHT%2B06PrESetU5l%2BnT95JeDvMjv4N%2F5Vujmg9p%2FdmSw1zmaiRJ4iyhRckEpU7k5gjt9MOZ7ShImC8ahhvI4v65ozyxwVzUwaj%2BhYKPXP1iho%2F2pJpamK7yuFZcEruTl5hpWYDKFIKeAe%2BQcJ3YkFrg2h3rhWKJ7wB1ekov47pB6JYDhTNSc8HjCX4YrKBjqkAZKWWwA%2FU2jzr9Q8YtQutyhum7n1i5Y0xlBByRpibXLE6ZafOZ3O5E10w7pDavM55MVjfqRqMZqCAuu3VXgjd4C9NBmF7aHzQAIjC0qxGDX7DN%2BSEoNmrSH%2FbsV68QnfqyplnEv0UwR008XTKjwu57nBvGiKPPFJc4zY5ZyghcMQQP6akFPV2p1owfTDqMtwltKS1HPEMVUxZKunFn3kMgVTb0eo&X-Amz-Signature=41bce0b2dd6ad7c47fea2d402f8fec1b3e83de6306491e9ec666feaa609032da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

