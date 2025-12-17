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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QSQRGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRaIFYqfRS3O26FacuSONOJmEQjG4SJgzNZdx9PjiFnAiBAcN4mZ%2FcZBW%2FUl2Nk5jiJK8uJCOttLCHoP%2Fb%2B3SRuYSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMSVFQJvqjOTJivgZXKtwDbpbUGvRM9Qj9gyaABm23w1S2A%2F%2BKUVTv%2FVEc8Vbmit5gathyE1cQRTZCuiHckbDBqU3PVNWHHVrxyBmF1U7qnIsNIfOv5wK8Ot4Ti0nEq5iSJFSqf9cr2yvWQfLrAIf3QzAVGgrsy2FEN7eMakGPw08%2B6%2FZ0cZfwuAbP8WVF9FKMO5lK0NfZ%2BKPp5uU7Bt7t57cZEkbLoPqdxkPgPW0ZcCbvbO40FSEfioKaG7EljNSjKBYZ7Evyn98FVON2DGWuBlVowDYlO4b2jQJo2mgg6TYDi7XPPqSBxgpwzerfJPM%2Fsg%2FtzakWr1rirrotLe5KiFFDiBBX0NIp%2BZS5BWgfRb2WlmjDftg9Uyvv2YUVqj7CfCGu%2Bp2nMb3j%2FTCyvtk1hu5a1FseHoZmYc%2F0u5He6dnCRujN49gB%2B5h932hxJbHfhs7vVszPIONxs4qHNE6RV8W2y%2BTcv%2BfZiW8Inb27mzEe2Y5GXV2Wfl8eZSJrl78u8JRkV5JgsmpzOAH20msdw0%2Fe5qH9%2BIn75WfTbJQi4lVGlKMHm5UWwXrqdu9th0yoJi94e3AVWF2qBSV3SsRtBijz4k6ArtpxdavcXI55rU1YVeEi%2B8%2BAjwhLxgq5C6000006kfeAaSE1%2BpMwz4OJygY6pgHoIWIjLupflOHs%2FUqfw32GKZYL5OUImOrpbSecTwk%2BexcJ69S65puc7tOGR3AmLgzgbtfG9bPw1rriNxxtof8YZn2gkmOJVTOZN7gHMZR61Duq9c4p1ae54ZBYt66KCsff%2F6ZtbE35kj%2F1KRTLZZFPkmTy6P7n8Fg5X3O0HlI32nrKjeyu4yDET9LgeIMRNYYP0bdaveHyaHXnJ0QcKi8qGIp0sHQO&X-Amz-Signature=fc7ba6dc66184a54dc611d24a36a764083a4ba9f662f6adc9db86538fb481c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QSQRGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRaIFYqfRS3O26FacuSONOJmEQjG4SJgzNZdx9PjiFnAiBAcN4mZ%2FcZBW%2FUl2Nk5jiJK8uJCOttLCHoP%2Fb%2B3SRuYSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMSVFQJvqjOTJivgZXKtwDbpbUGvRM9Qj9gyaABm23w1S2A%2F%2BKUVTv%2FVEc8Vbmit5gathyE1cQRTZCuiHckbDBqU3PVNWHHVrxyBmF1U7qnIsNIfOv5wK8Ot4Ti0nEq5iSJFSqf9cr2yvWQfLrAIf3QzAVGgrsy2FEN7eMakGPw08%2B6%2FZ0cZfwuAbP8WVF9FKMO5lK0NfZ%2BKPp5uU7Bt7t57cZEkbLoPqdxkPgPW0ZcCbvbO40FSEfioKaG7EljNSjKBYZ7Evyn98FVON2DGWuBlVowDYlO4b2jQJo2mgg6TYDi7XPPqSBxgpwzerfJPM%2Fsg%2FtzakWr1rirrotLe5KiFFDiBBX0NIp%2BZS5BWgfRb2WlmjDftg9Uyvv2YUVqj7CfCGu%2Bp2nMb3j%2FTCyvtk1hu5a1FseHoZmYc%2F0u5He6dnCRujN49gB%2B5h932hxJbHfhs7vVszPIONxs4qHNE6RV8W2y%2BTcv%2BfZiW8Inb27mzEe2Y5GXV2Wfl8eZSJrl78u8JRkV5JgsmpzOAH20msdw0%2Fe5qH9%2BIn75WfTbJQi4lVGlKMHm5UWwXrqdu9th0yoJi94e3AVWF2qBSV3SsRtBijz4k6ArtpxdavcXI55rU1YVeEi%2B8%2BAjwhLxgq5C6000006kfeAaSE1%2BpMwz4OJygY6pgHoIWIjLupflOHs%2FUqfw32GKZYL5OUImOrpbSecTwk%2BexcJ69S65puc7tOGR3AmLgzgbtfG9bPw1rriNxxtof8YZn2gkmOJVTOZN7gHMZR61Duq9c4p1ae54ZBYt66KCsff%2F6ZtbE35kj%2F1KRTLZZFPkmTy6P7n8Fg5X3O0HlI32nrKjeyu4yDET9LgeIMRNYYP0bdaveHyaHXnJ0QcKi8qGIp0sHQO&X-Amz-Signature=8b2b0384e1942c037718a173a73cd4f7ad3d822b978a10b5cf44fc7b0a66ba10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

