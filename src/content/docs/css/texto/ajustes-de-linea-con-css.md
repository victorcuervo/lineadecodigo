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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMX2FT4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhtHQBq%2BUwYXj1VyrOMp5Y0Mf1Y19kTuBUZAQkq2AwbAiAMAGaDga8WBmEz%2BOcJVtxxRFpV50Mf3RUPoBgw2G%2FR7Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZiqoLjCpV6s2kfAqKtwDxspbSVVWeStg6TPJ3BUqh1ftU9CLSqkl%2FLQ2%2B4jztypnX29W7aguwX%2F1LdPfi7xbMkTxKb5yAH6cSV6IgsDmf7vfzu4y1KZV88d5rYVuCy17uuyUxNZjnlC2CbwzCATn8hdjN1yB21aHW0aMYxvKn7KD1FtIegdkiyKxP9puVgQgvYD0o7kmKs1OLO8cItckWNh6BK0Fwa8eWoT4J6opqbtz1nEb8Q6eRiLAjYuKbcsGYO0A%2FXFtM2a2FjkDmrxI0EgHi%2Bq8taTRRJiIeFFeO%2B8vqETITxrx4k8XOJvlquXxVVwe73%2FgoBCUo7QsZYV2X5swE4k9LeQO2L7Siiouw5GvgWAXNVg6zD%2FesmsmkdcbwokiyJywRvf3jquoxR1H7%2BQp7%2FID0d3dV63S%2FStxlqQ1fiiFjHQGnNWZPzkH6CKAQ9SWEkNUSlFMoGbBCb%2BfqBUAQr8M4DbrndGHzNTXkdoQhRsOUB02pzhc6qrEY%2F%2BUJ2YWe3G9FIxXC%2B2YXlYNBKxmYJym0syMhxcyTxictsM%2F4qxZZ9fRzmPf6hUVbqbEA92fcy0LRk20m91PcC%2BkH7FWauoF8GPc6rgk2K1rBP%2FjI%2BxJFdmZkORyc5ppWScJ8n%2FU8ZW8EaKEGtYwqOmIygY6pgFSZLUdwo9H3TF5JD1e0quFQy9HEeIXSp%2F2j68NcebX6M75zy335p7gc%2BwejdkSryBUpxN1W9lQMM835iEuiXBbYKSX8cl7MxyuAx0j4EqgELRfTQslEHaDvyMGeyfBR20sjszPvlDO5UWvIzOq6RItaMpwQpKi4hbgriW5PEGzkzujFqr1e3n%2Ba23RW48clC78FTgh23yZYB5Aprljqw2NmnuhPx0i&X-Amz-Signature=a0f093051b9d9a2ad28d49bbbe84dd1179a860c9925d03dec7c1ef1e8e29e6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMX2FT4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhtHQBq%2BUwYXj1VyrOMp5Y0Mf1Y19kTuBUZAQkq2AwbAiAMAGaDga8WBmEz%2BOcJVtxxRFpV50Mf3RUPoBgw2G%2FR7Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZiqoLjCpV6s2kfAqKtwDxspbSVVWeStg6TPJ3BUqh1ftU9CLSqkl%2FLQ2%2B4jztypnX29W7aguwX%2F1LdPfi7xbMkTxKb5yAH6cSV6IgsDmf7vfzu4y1KZV88d5rYVuCy17uuyUxNZjnlC2CbwzCATn8hdjN1yB21aHW0aMYxvKn7KD1FtIegdkiyKxP9puVgQgvYD0o7kmKs1OLO8cItckWNh6BK0Fwa8eWoT4J6opqbtz1nEb8Q6eRiLAjYuKbcsGYO0A%2FXFtM2a2FjkDmrxI0EgHi%2Bq8taTRRJiIeFFeO%2B8vqETITxrx4k8XOJvlquXxVVwe73%2FgoBCUo7QsZYV2X5swE4k9LeQO2L7Siiouw5GvgWAXNVg6zD%2FesmsmkdcbwokiyJywRvf3jquoxR1H7%2BQp7%2FID0d3dV63S%2FStxlqQ1fiiFjHQGnNWZPzkH6CKAQ9SWEkNUSlFMoGbBCb%2BfqBUAQr8M4DbrndGHzNTXkdoQhRsOUB02pzhc6qrEY%2F%2BUJ2YWe3G9FIxXC%2B2YXlYNBKxmYJym0syMhxcyTxictsM%2F4qxZZ9fRzmPf6hUVbqbEA92fcy0LRk20m91PcC%2BkH7FWauoF8GPc6rgk2K1rBP%2FjI%2BxJFdmZkORyc5ppWScJ8n%2FU8ZW8EaKEGtYwqOmIygY6pgFSZLUdwo9H3TF5JD1e0quFQy9HEeIXSp%2F2j68NcebX6M75zy335p7gc%2BwejdkSryBUpxN1W9lQMM835iEuiXBbYKSX8cl7MxyuAx0j4EqgELRfTQslEHaDvyMGeyfBR20sjszPvlDO5UWvIzOq6RItaMpwQpKi4hbgriW5PEGzkzujFqr1e3n%2Ba23RW48clC78FTgh23yZYB5Aprljqw2NmnuhPx0i&X-Amz-Signature=b019b2e880f89bf1430c580b111f0eb462d1d63cf299a96bd3cf7345498b3f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

