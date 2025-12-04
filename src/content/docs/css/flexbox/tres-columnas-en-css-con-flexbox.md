---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JU6YO3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCTnAH9anR8UAibPa1qzO%2FQCd9E8KUJerQQHwMR00ZqwIhAPAa0J59uyRFKbJZrkkTpUCASBF4cKK0ib7jwPkVCn6TKv8DCEkQABoMNjM3NDIzMTgzODA1IgxQuTuBCu1dJXpczloq3AM0CKuu27rNcnr9fjFCyn%2BTuX6iRarEB2Km3SSz67mH4y%2FxOahM5KlzehWHS2NgDLUkV%2FltjnlBCz3zRVKm4B4X%2Bagkve6ahxIfKb5AtXpKOODjtTTB0Onflc32GZDCMkiAUhDRe%2FREXUTG7KIhUHCYLkALgTaDSoO0vqkcW%2Fg3u5CBipzSZL9Zwu4oSfWJyIPKFhcH0cGKVpyKq8XDkkhNjTuLPrIVrW6R4LdINOSrfuM016R1AY%2F7XATzJoQTWhBY4UYpph%2B08dcyePqbBqKxkQwDAxVtW5gHRmRbxQkB2X%2BMPauE4ZtkS8NaOAxDXgFcp7GnS03v5JrAJJtT8L0snhCJJ3bfUziapvnpC6fptuhvC2lKnaZz44AxabheRJCzSK2JgIm5KBzfdif8%2Bq%2F%2FPB4Tcl4X2B%2BlMrtx5GBguIa%2BSPe2UgLhr9ZMn3JafQ1QYgWPRYI0jknoUjkvsUI137%2FMT6aFxi2eXMaWQzFj9ZRlhlNfPgzLpqkRBJmgXV6KyUCqf3YRCjZFkZQ0m8A1xr5OeeM5zwdHF4pfhV63czh1TpoNtI5RGJaAMLQPxd0Hd%2B2ZweNh2lokLuFu6IqEtxsPBu7f1k7nbT1RKeU7F6PyRv4W0e5v9WeuUzC63MbJBjqkAbdYoheDuqkmk9oCu0ONZmQ8%2FrQdp6%2Fc7iBryljnQCo4HtqM1l9Vy9qt%2BQ3ajaAjYLQqXzabt0KxGZQ%2BR%2BoxNq3OxZgIgC0pZegpW7vcwlDBjkntkvs0eITCvZTWIgUSvn2FvPMkYg%2F842WuXJnuHk6rQZJhMzQk6tvs%2FonhOy4V%2Fkw7Q%2B3X%2BJb0odjFwX2BGyOC1%2FW%2FP%2FfILwrJJ7j9at%2F4w7MA&X-Amz-Signature=5c3ff8675fe8cdbc0a52a668e5ddb8b05df6ed5b3b4d8e1fadfd3c6145e2d6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JU6YO3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCTnAH9anR8UAibPa1qzO%2FQCd9E8KUJerQQHwMR00ZqwIhAPAa0J59uyRFKbJZrkkTpUCASBF4cKK0ib7jwPkVCn6TKv8DCEkQABoMNjM3NDIzMTgzODA1IgxQuTuBCu1dJXpczloq3AM0CKuu27rNcnr9fjFCyn%2BTuX6iRarEB2Km3SSz67mH4y%2FxOahM5KlzehWHS2NgDLUkV%2FltjnlBCz3zRVKm4B4X%2Bagkve6ahxIfKb5AtXpKOODjtTTB0Onflc32GZDCMkiAUhDRe%2FREXUTG7KIhUHCYLkALgTaDSoO0vqkcW%2Fg3u5CBipzSZL9Zwu4oSfWJyIPKFhcH0cGKVpyKq8XDkkhNjTuLPrIVrW6R4LdINOSrfuM016R1AY%2F7XATzJoQTWhBY4UYpph%2B08dcyePqbBqKxkQwDAxVtW5gHRmRbxQkB2X%2BMPauE4ZtkS8NaOAxDXgFcp7GnS03v5JrAJJtT8L0snhCJJ3bfUziapvnpC6fptuhvC2lKnaZz44AxabheRJCzSK2JgIm5KBzfdif8%2Bq%2F%2FPB4Tcl4X2B%2BlMrtx5GBguIa%2BSPe2UgLhr9ZMn3JafQ1QYgWPRYI0jknoUjkvsUI137%2FMT6aFxi2eXMaWQzFj9ZRlhlNfPgzLpqkRBJmgXV6KyUCqf3YRCjZFkZQ0m8A1xr5OeeM5zwdHF4pfhV63czh1TpoNtI5RGJaAMLQPxd0Hd%2B2ZweNh2lokLuFu6IqEtxsPBu7f1k7nbT1RKeU7F6PyRv4W0e5v9WeuUzC63MbJBjqkAbdYoheDuqkmk9oCu0ONZmQ8%2FrQdp6%2Fc7iBryljnQCo4HtqM1l9Vy9qt%2BQ3ajaAjYLQqXzabt0KxGZQ%2BR%2BoxNq3OxZgIgC0pZegpW7vcwlDBjkntkvs0eITCvZTWIgUSvn2FvPMkYg%2F842WuXJnuHk6rQZJhMzQk6tvs%2FonhOy4V%2Fkw7Q%2B3X%2BJb0odjFwX2BGyOC1%2FW%2FP%2FfILwrJJ7j9at%2F4w7MA&X-Amz-Signature=33176cfb8c1269aa2f0c4e7122a0b98b4a2fc2a54c41c33d82dae4d29aa3bf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

