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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQQONT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtWESQGYO3h7JWWon7kuI59mbnzFLJHe2noddlA57vKwIhALx1ne%2Br1Vzt%2B%2BvjdnuMNQaUeYPjjsnIAvsSXKffycilKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHNkQhphu49k7s93kq3AO1c%2Bq1EQmjITxQcPyPqYuRadmpN7uHsyhuZWXAVg2Ip8EyETyJvE2V0lpOW%2BgUwkE2T2qOofw18BKm5%2FEIehdjYZcQgDHR%2FeoLg5BCi17JDL0fNhytetEGGJITKQ5AHufssgoI8%2FrTwClThd5kTJ8pc1yRJ5KwP37C77dfIoV0Eq455XyAgo4q2MIF0F69LV5GjeF7OrsFu7Ee%2BNEqTEabmzva6eSyi15uQ8akVyxKlMJKwr9AykQ4xTm82FqadlUpfnZABU%2BeHJAdEiq13mw7ZgWUfNyxd4CNwfZ2DOUof%2FF5sxBtA8FMIhSKzqvfd5nFplkNLL3s9XrkuYFXATzuXHo7IJ94HF1NOQbyFxSu6VHtEtU6Z83ZidlwUZFHboLoipVeXywDxRYnT1yw4AXyyF%2FQNgU%2BtsfhwC%2F9yHsYZPkdEvoIZFHgPIU0qoBZ7LnhknMlGTqbP5HGXQRjzO7%2BLnDqR0hRb6BgLRd2QwoKPf%2FDoWZJasjnbw7VTtKA5sAC8hepTKGFyVTOpH5WeK65D3MgQlZX2eFxzCO50pGJn5BvWL9%2FaKR5j7CXM0j19FAJHgIu8d%2FHx0dNCiFlwro1jM64TM6uhhOr%2FkJ8zf0TN2MEo1SMiMHZMMrY7DDfn4vKBjqkAVsM53L90doJeL1yEZBWap8mmWshzSMpXmZ17H4M98loNJ7C8K7lMPNdcTTM%2F0Z6B%2F5z4nS1UcnyEpVKyyHJIOkdFW2oshJGiBSsYhwTI3dqyjQKc8fQsbaALlt4ind5S3oAETT%2FzGNtQOyr93CW6g%2FzVuVbOsVHRWfu57GBgHcB0BFLl6cD2xpQvUEbvN00T0Zr0A7BP9j%2FkeiM9LzfUgE7B5B5&X-Amz-Signature=cd23d00e94f8c5136153b28694eff948be7122d5cf947cba5386d33c3354ae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZQQONT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtWESQGYO3h7JWWon7kuI59mbnzFLJHe2noddlA57vKwIhALx1ne%2Br1Vzt%2B%2BvjdnuMNQaUeYPjjsnIAvsSXKffycilKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHNkQhphu49k7s93kq3AO1c%2Bq1EQmjITxQcPyPqYuRadmpN7uHsyhuZWXAVg2Ip8EyETyJvE2V0lpOW%2BgUwkE2T2qOofw18BKm5%2FEIehdjYZcQgDHR%2FeoLg5BCi17JDL0fNhytetEGGJITKQ5AHufssgoI8%2FrTwClThd5kTJ8pc1yRJ5KwP37C77dfIoV0Eq455XyAgo4q2MIF0F69LV5GjeF7OrsFu7Ee%2BNEqTEabmzva6eSyi15uQ8akVyxKlMJKwr9AykQ4xTm82FqadlUpfnZABU%2BeHJAdEiq13mw7ZgWUfNyxd4CNwfZ2DOUof%2FF5sxBtA8FMIhSKzqvfd5nFplkNLL3s9XrkuYFXATzuXHo7IJ94HF1NOQbyFxSu6VHtEtU6Z83ZidlwUZFHboLoipVeXywDxRYnT1yw4AXyyF%2FQNgU%2BtsfhwC%2F9yHsYZPkdEvoIZFHgPIU0qoBZ7LnhknMlGTqbP5HGXQRjzO7%2BLnDqR0hRb6BgLRd2QwoKPf%2FDoWZJasjnbw7VTtKA5sAC8hepTKGFyVTOpH5WeK65D3MgQlZX2eFxzCO50pGJn5BvWL9%2FaKR5j7CXM0j19FAJHgIu8d%2FHx0dNCiFlwro1jM64TM6uhhOr%2FkJ8zf0TN2MEo1SMiMHZMMrY7DDfn4vKBjqkAVsM53L90doJeL1yEZBWap8mmWshzSMpXmZ17H4M98loNJ7C8K7lMPNdcTTM%2F0Z6B%2F5z4nS1UcnyEpVKyyHJIOkdFW2oshJGiBSsYhwTI3dqyjQKc8fQsbaALlt4ind5S3oAETT%2FzGNtQOyr93CW6g%2FzVuVbOsVHRWfu57GBgHcB0BFLl6cD2xpQvUEbvN00T0Zr0A7BP9j%2FkeiM9LzfUgE7B5B5&X-Amz-Signature=625401c353c11937a4dd1f1b1489316b1848f09d5061ada287026cd2bd78ab4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

