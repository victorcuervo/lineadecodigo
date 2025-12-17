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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V225WGMM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ot2CoG7w0BJoayeB%2BxP1muBKQiY5JeIr9vyP0BSmwQIhAKqCK3evhDZz3CoBFaTzV6yL%2B2mXlL%2BJJwVziZBZ5ds5Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxcX89qNPGX7EabyNoq3ANiPMzpFOiNg9yGFGuApaDpzNdDDjo1ciZEnzvkbOVlB0rAkwLES3idBYuNYT8s0CXRLJhDcJrf%2F2HKBwKRXbwwCpyhvHA8P8jtiBRJzwZ33mHL%2FXpPIqqJHRDDIBEz5nSGcJ4fDXbH1%2BfPh8kcSq%2BfFF4LC9Jf5wZym252ZlcWzlr7DxuuD%2BrNhrknNxgFNXXWwnH3%2FzFJvk285FhzwgBVUo2dC%2Fs9b3DlbTLLeLOT%2F3jO0PMhoviOcfAJpWzwoBXQ49bLWzX5bq7k4OY5WEI46k%2F4iestVdOo5HknSqMS6RkKUMuO9M6fdPjaGKhB53iHLpzL%2FqPSzshBBVKZIzMdNhbiTHBKhXuIlAuXwnOPgaUTJN1aQNeW4QCejSsyYAAexyWK5zc0GeE2lcQxejvqKIXywsquQd05v54Y1R95tPlsK6kPYT7O%2FOywopBC%2BWzl4taAxOQFZU%2BnA2s0LM9arnkSKK3gXQygmjztxaCwCTrPzXfAit3AzP4GzCJLjqS4KLf9HECupW7iHvYS2YG1%2B4f7wyZDduEUnlhxFiTJOAFrOnKkGcQcwSYWBh0Xk3HcjDPkySjbYpj6KABVBAf56kjKLqd%2FW4O%2Fav56H0stcw8D12VY0Yo8rEC27zDKgonKBjqkASquhDIEL493YPCxgFhbLSBmDsS0XOzqcPAb6%2BJgSg6RDXDQ4h32FENgzrNGOOzKxL1eP2HDFEYu9AESz5okhD7xMEKfjVrvEdMCy3FuPmxgCw3ovXvf7oqPR%2B8L0dJRUjYqCeqJRPmngngAns936yO9yWK4ZHqiBuJ3dnDaZCxZagpqt%2FKrMT3%2B%2Bsk6hFtNkIazhCVQ4dCG0PlGxb21nXbPpCN4&X-Amz-Signature=7c7395a67963282682b5d2c3a7c5bf79441e9c89783b7b58a436568afaf8cea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V225WGMM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ot2CoG7w0BJoayeB%2BxP1muBKQiY5JeIr9vyP0BSmwQIhAKqCK3evhDZz3CoBFaTzV6yL%2B2mXlL%2BJJwVziZBZ5ds5Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxcX89qNPGX7EabyNoq3ANiPMzpFOiNg9yGFGuApaDpzNdDDjo1ciZEnzvkbOVlB0rAkwLES3idBYuNYT8s0CXRLJhDcJrf%2F2HKBwKRXbwwCpyhvHA8P8jtiBRJzwZ33mHL%2FXpPIqqJHRDDIBEz5nSGcJ4fDXbH1%2BfPh8kcSq%2BfFF4LC9Jf5wZym252ZlcWzlr7DxuuD%2BrNhrknNxgFNXXWwnH3%2FzFJvk285FhzwgBVUo2dC%2Fs9b3DlbTLLeLOT%2F3jO0PMhoviOcfAJpWzwoBXQ49bLWzX5bq7k4OY5WEI46k%2F4iestVdOo5HknSqMS6RkKUMuO9M6fdPjaGKhB53iHLpzL%2FqPSzshBBVKZIzMdNhbiTHBKhXuIlAuXwnOPgaUTJN1aQNeW4QCejSsyYAAexyWK5zc0GeE2lcQxejvqKIXywsquQd05v54Y1R95tPlsK6kPYT7O%2FOywopBC%2BWzl4taAxOQFZU%2BnA2s0LM9arnkSKK3gXQygmjztxaCwCTrPzXfAit3AzP4GzCJLjqS4KLf9HECupW7iHvYS2YG1%2B4f7wyZDduEUnlhxFiTJOAFrOnKkGcQcwSYWBh0Xk3HcjDPkySjbYpj6KABVBAf56kjKLqd%2FW4O%2Fav56H0stcw8D12VY0Yo8rEC27zDKgonKBjqkASquhDIEL493YPCxgFhbLSBmDsS0XOzqcPAb6%2BJgSg6RDXDQ4h32FENgzrNGOOzKxL1eP2HDFEYu9AESz5okhD7xMEKfjVrvEdMCy3FuPmxgCw3ovXvf7oqPR%2B8L0dJRUjYqCeqJRPmngngAns936yO9yWK4ZHqiBuJ3dnDaZCxZagpqt%2FKrMT3%2B%2Bsk6hFtNkIazhCVQ4dCG0PlGxb21nXbPpCN4&X-Amz-Signature=b3bac59abea455d38b49c8617b59451ba642021405866722c3f67dbca45c44e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

