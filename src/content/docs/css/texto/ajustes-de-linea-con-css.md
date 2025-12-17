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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USIGYN2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIPsEcoDNzMmeUMWCR04sRBAN5SshFqPkcF9i9mJJdZAiAUGxfaUjcF3QC%2BYTBKMfLE%2BTUFy2VksD9l2qfMYwj%2BcyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4F9Da7gjLCGw%2F8KVKtwD1YV%2B968lZX5JsdlUVhC77GQ9%2FWyGMfZRwVP7s4YA5VwAh544vu1FQXq4cG58o810VKnYcRYV6088m5FZfQbm3gXehnnkcIzcSfGz8SDEOk6kalMi0l0FpdAGFdDqt3Lgagyi6V%2FbZHplLX1CZZ55luPEurDdyxOXjLzBeQ7lSrRmdxEMO6Z0CUfIWKEIMLIwkSWRzRtYdW5W8bJD6ouqn5LbWPVyUz%2BPYFpyoZCVeOriNa7uT4KN0hVMWu4EOGIkzc7k1EMiDbZrA5YELvSJ%2BogIzlTQjp7ALjo0bO%2BALfU6n8GWNmLBjA7c9KdQC6gulRCtIILgCOcepkcbakCl0uofhk7GCIbaW7hNgBAW5BdSc0%2BblDmUsLxySkg6leqavVAAg8JY5FSNyvbWIwUMvyHOifz%2BzWMg5pyE2sWoeAlDEwVWOJXMuwF8szYxpzeDyL3pEWOsDYGeNAkKlOUXTuE47r7UFUWOWQJb5ZTDdxpRKNk6r44%2B59yOdKJb3pmtGh3GEpdpZDcKxo7jDgP0zafFIG8tCWykM4ZtwJ264jLr93i9Dh6TRKP4vnumSYihlfE9hsp0WW4bh6XXL7h5pohL0m3K4tWEU44tMMUE7ueKRHCbDfZurV7MU%2Bww3KCLygY6pgGznuaDlX3XvwJu4oxQJVho3gXzZXQhK%2B3cniVVkIlp1lBhJIxzw3OwIdw3o6%2BACBaIa%2Fl658YovC7VsVoywZUTzMlu3c4t8y%2F3rwfJnaXsH9L3UEdEGrg9XAO%2Fd%2B%2Bt1018pnN%2Bjudm5DIi%2BXhAFeS5BKak71VAmMnf5BU1xdrRgrdJrw48b2cav9ycqnoBWnrR68WIloNEqbXTZQTXGJK2zWmPcTPB&X-Amz-Signature=6cde2ff5a3526d6a6e5a600b134ab6f70205646d3b5abd0df8639d4f7e4db49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USIGYN2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIPsEcoDNzMmeUMWCR04sRBAN5SshFqPkcF9i9mJJdZAiAUGxfaUjcF3QC%2BYTBKMfLE%2BTUFy2VksD9l2qfMYwj%2BcyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4F9Da7gjLCGw%2F8KVKtwD1YV%2B968lZX5JsdlUVhC77GQ9%2FWyGMfZRwVP7s4YA5VwAh544vu1FQXq4cG58o810VKnYcRYV6088m5FZfQbm3gXehnnkcIzcSfGz8SDEOk6kalMi0l0FpdAGFdDqt3Lgagyi6V%2FbZHplLX1CZZ55luPEurDdyxOXjLzBeQ7lSrRmdxEMO6Z0CUfIWKEIMLIwkSWRzRtYdW5W8bJD6ouqn5LbWPVyUz%2BPYFpyoZCVeOriNa7uT4KN0hVMWu4EOGIkzc7k1EMiDbZrA5YELvSJ%2BogIzlTQjp7ALjo0bO%2BALfU6n8GWNmLBjA7c9KdQC6gulRCtIILgCOcepkcbakCl0uofhk7GCIbaW7hNgBAW5BdSc0%2BblDmUsLxySkg6leqavVAAg8JY5FSNyvbWIwUMvyHOifz%2BzWMg5pyE2sWoeAlDEwVWOJXMuwF8szYxpzeDyL3pEWOsDYGeNAkKlOUXTuE47r7UFUWOWQJb5ZTDdxpRKNk6r44%2B59yOdKJb3pmtGh3GEpdpZDcKxo7jDgP0zafFIG8tCWykM4ZtwJ264jLr93i9Dh6TRKP4vnumSYihlfE9hsp0WW4bh6XXL7h5pohL0m3K4tWEU44tMMUE7ueKRHCbDfZurV7MU%2Bww3KCLygY6pgGznuaDlX3XvwJu4oxQJVho3gXzZXQhK%2B3cniVVkIlp1lBhJIxzw3OwIdw3o6%2BACBaIa%2Fl658YovC7VsVoywZUTzMlu3c4t8y%2F3rwfJnaXsH9L3UEdEGrg9XAO%2Fd%2B%2Bt1018pnN%2Bjudm5DIi%2BXhAFeS5BKak71VAmMnf5BU1xdrRgrdJrw48b2cav9ycqnoBWnrR68WIloNEqbXTZQTXGJK2zWmPcTPB&X-Amz-Signature=1f4336b83693a992d808083bdf5c061f64d9be3acb09eb97118a7a4625af0ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

