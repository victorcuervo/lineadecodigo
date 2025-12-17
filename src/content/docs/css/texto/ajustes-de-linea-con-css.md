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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNILHBB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg6i%2FwyMsVSl04nCGiMxqzLmawAuH3H7bZvLIzpAKDAAIhAMhpGwVVBCMu9rai%2BN6HdkQ5kFLsbEXxzGqsjyywdX%2FsKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7H3zSClTya9artnQq3AOncj1wKMi9elZbwUIE2V3i%2FYxnlJZ7isrtO1TdkOrZDwOG9BoxOA5IvSNYB9aep5Pgn9Dbb5dmSzvpthpbjRnvHM4VJhC%2B8WqEdNeZj%2FzKJmIbeL2G%2Bby8rmVZ1ZRq9E41Ro5WUQzLMlcgY02vOND0OzQW2THpZjk2ppldZSNgUG%2FBwKxm%2F3LTIdMwgM6kWBbCdPOGY4%2FQBz5Rp%2FpndASg9ro2eEiANMGI5EikWjpiq6g6UMVthS51ArbcNTgfW8OpsiHK0Kx66im4ji0y5BSNd08EV4YtiJ%2Bg5MoqR2WoRvGeA6dImCdgYCj8xYMiiwtd6%2FRHTlO%2Bx%2BE3bdci3T6YgZ5oHsvc3f1ZW1g5OxuN0jDzhrhB6je7hUQUCYqLbH27N7AkxyCfB323WcsW%2BQDI6kaxXtPjyK42YvCVnJUOaAFnN3zSYMLm1TdsXPoBQfiwbBbtz8oSWXCTAragrxoPgTCoTLzT%2BtFuzHCYmA16k7jzA0hN5gFswegp8NT2y2gkg7MFNgRbZnwzZSytkuehI23gydBd2hLxwGBRIWq1bZ%2F%2FhH%2F8Z%2BhGcRygjSKGjAkDvHIGPtB46QpY1gLxHhEkQAMffM3pLg9kKj%2BME4%2BSYqbELM3TR9u6OxFf5DDGzojKBjqkAav8NjiqqfbNYFydDYl2aAyIYSHy3pLStDHCgpNEwE0nA%2FDbrJ01ladVvs6ZvE6GpfyUNLQ5NI7FbJoImAoT01OrEZYq40S1ek52lvIJKyrHLNjFnf5d8eF8qfW3Xpusz%2FLUMWcHHw7sHFZ56oOGaeG%2BfIgFUG783nJwqAwo7%2BXOB8FoJf8niZX06Mjwz15WxE%2BZdStuSZMQz5syFg7S46xTHKis&X-Amz-Signature=acf1de960d2f5ea3c99210dabde7b73499883a0575b43f1c42ac1ec9edc7e4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNILHBB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg6i%2FwyMsVSl04nCGiMxqzLmawAuH3H7bZvLIzpAKDAAIhAMhpGwVVBCMu9rai%2BN6HdkQ5kFLsbEXxzGqsjyywdX%2FsKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7H3zSClTya9artnQq3AOncj1wKMi9elZbwUIE2V3i%2FYxnlJZ7isrtO1TdkOrZDwOG9BoxOA5IvSNYB9aep5Pgn9Dbb5dmSzvpthpbjRnvHM4VJhC%2B8WqEdNeZj%2FzKJmIbeL2G%2Bby8rmVZ1ZRq9E41Ro5WUQzLMlcgY02vOND0OzQW2THpZjk2ppldZSNgUG%2FBwKxm%2F3LTIdMwgM6kWBbCdPOGY4%2FQBz5Rp%2FpndASg9ro2eEiANMGI5EikWjpiq6g6UMVthS51ArbcNTgfW8OpsiHK0Kx66im4ji0y5BSNd08EV4YtiJ%2Bg5MoqR2WoRvGeA6dImCdgYCj8xYMiiwtd6%2FRHTlO%2Bx%2BE3bdci3T6YgZ5oHsvc3f1ZW1g5OxuN0jDzhrhB6je7hUQUCYqLbH27N7AkxyCfB323WcsW%2BQDI6kaxXtPjyK42YvCVnJUOaAFnN3zSYMLm1TdsXPoBQfiwbBbtz8oSWXCTAragrxoPgTCoTLzT%2BtFuzHCYmA16k7jzA0hN5gFswegp8NT2y2gkg7MFNgRbZnwzZSytkuehI23gydBd2hLxwGBRIWq1bZ%2F%2FhH%2F8Z%2BhGcRygjSKGjAkDvHIGPtB46QpY1gLxHhEkQAMffM3pLg9kKj%2BME4%2BSYqbELM3TR9u6OxFf5DDGzojKBjqkAav8NjiqqfbNYFydDYl2aAyIYSHy3pLStDHCgpNEwE0nA%2FDbrJ01ladVvs6ZvE6GpfyUNLQ5NI7FbJoImAoT01OrEZYq40S1ek52lvIJKyrHLNjFnf5d8eF8qfW3Xpusz%2FLUMWcHHw7sHFZ56oOGaeG%2BfIgFUG783nJwqAwo7%2BXOB8FoJf8niZX06Mjwz15WxE%2BZdStuSZMQz5syFg7S46xTHKis&X-Amz-Signature=b23ea219088b006eeee3de13a66126c5217f1a72f28cc15a6c707146473fffa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

