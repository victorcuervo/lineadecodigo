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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ4LMMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIj9cmkc6iBVszmyuvirKiGtGcu8piZW6%2BoegKpEZWPAIhAJMxtgVdTBavWvp287bYgtU3UhRPmNhRG6337O4synFhKv8DCH4QABoMNjM3NDIzMTgzODA1Igz0jCeqAsXmTvqRnEAq3ANZAD01f94QlZjLkFVhP%2BGE04e9Yvdo0SxN3Cd%2FQ0QjZM4MF41%2FRrnM%2FRkcCw9aIxkkKWHup75gLP8XLz59aFxw6kdxIYkvWHte0aQLAz8LHr05fHKGWo1fK04yA76eVVUqwGaXYzIBo5EUsSvF4Gd2oOZg29TQ646HdnoEz7JoeXijhphnOh3J%2FntqEUSAmRBA5IKu6n35VV%2FwzDkli1J2fItKdvlJeNZAC4kL%2BiZZyYVQOzmdShZkpCa7Inp4P2XcT77xPztxtNcpGuimx%2FkCNS%2FC8vaxi8Ry0ZVe%2F4hYGL%2F0gIgyQUduLqAVbL6ih3UqmcZ%2B4moSyIzaYCGUZvG5nlnPfEW82W3kS98%2FSUe9%2FL%2FPFzWp7aiVNnUsDFSSXHY1OfdaDxjOBqcUzzKUg1%2FzwiiU7VBe6pMdXt%2Bg68z2NBbxGdAWA1eU%2BTIu%2BcMLeM2UHjlakgQWkIn%2BCukQ8cyCuTlLHGM84QDn4iCLkS2NCxghx%2FaYd18sIp%2FheCE52zTz7BUyLmH5HPLRmjnNeBSwi36eY%2FHeaaess1%2FTxO9tgJCqP%2B62LzS44YUBJ9wGAFXkfL3PYBtsv9of3kl6UUwjucATXDfU1TolMcQBKES4Qwy0HEPyc97BYYIeXzDmxYrKBjqkATph9pVwHVxHdMy0%2BW2S2euKARvH754jq1QiTO7sfw6%2Fku4qnInZW%2B1pGFvEAtTmNndkyVmvx7Uc80YHVOwUf3ak3PUA%2BFQEQiy0sNEIEwQMaR7qAwWGNZ2jpNoUe2u4VCaAnIsLc0NBQg8FIUNKZ46BlIDsK38TbrwNYyacxzSkeidD6hXTtpo7MsDkQLc98%2BZjrrbdQUguK7yEPx7r55dSf3fn&X-Amz-Signature=d2834e24d934ef7090064ea13e168c0dfc104c06b8781dce2d43a6e8fa828a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ4LMMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIj9cmkc6iBVszmyuvirKiGtGcu8piZW6%2BoegKpEZWPAIhAJMxtgVdTBavWvp287bYgtU3UhRPmNhRG6337O4synFhKv8DCH4QABoMNjM3NDIzMTgzODA1Igz0jCeqAsXmTvqRnEAq3ANZAD01f94QlZjLkFVhP%2BGE04e9Yvdo0SxN3Cd%2FQ0QjZM4MF41%2FRrnM%2FRkcCw9aIxkkKWHup75gLP8XLz59aFxw6kdxIYkvWHte0aQLAz8LHr05fHKGWo1fK04yA76eVVUqwGaXYzIBo5EUsSvF4Gd2oOZg29TQ646HdnoEz7JoeXijhphnOh3J%2FntqEUSAmRBA5IKu6n35VV%2FwzDkli1J2fItKdvlJeNZAC4kL%2BiZZyYVQOzmdShZkpCa7Inp4P2XcT77xPztxtNcpGuimx%2FkCNS%2FC8vaxi8Ry0ZVe%2F4hYGL%2F0gIgyQUduLqAVbL6ih3UqmcZ%2B4moSyIzaYCGUZvG5nlnPfEW82W3kS98%2FSUe9%2FL%2FPFzWp7aiVNnUsDFSSXHY1OfdaDxjOBqcUzzKUg1%2FzwiiU7VBe6pMdXt%2Bg68z2NBbxGdAWA1eU%2BTIu%2BcMLeM2UHjlakgQWkIn%2BCukQ8cyCuTlLHGM84QDn4iCLkS2NCxghx%2FaYd18sIp%2FheCE52zTz7BUyLmH5HPLRmjnNeBSwi36eY%2FHeaaess1%2FTxO9tgJCqP%2B62LzS44YUBJ9wGAFXkfL3PYBtsv9of3kl6UUwjucATXDfU1TolMcQBKES4Qwy0HEPyc97BYYIeXzDmxYrKBjqkATph9pVwHVxHdMy0%2BW2S2euKARvH754jq1QiTO7sfw6%2Fku4qnInZW%2B1pGFvEAtTmNndkyVmvx7Uc80YHVOwUf3ak3PUA%2BFQEQiy0sNEIEwQMaR7qAwWGNZ2jpNoUe2u4VCaAnIsLc0NBQg8FIUNKZ46BlIDsK38TbrwNYyacxzSkeidD6hXTtpo7MsDkQLc98%2BZjrrbdQUguK7yEPx7r55dSf3fn&X-Amz-Signature=c4f1c0aaf3fea919090c7d8ff573547a7f2c520a8da348131396f40dbdefed0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

