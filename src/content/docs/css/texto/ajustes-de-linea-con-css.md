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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKANFDQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FDybIw9gPbKKJtXZYbunkqtX2euRt%2BtTOol9ST%2F04QAiEAzvw%2FRGkHHvMzG1%2FJgjjYJ73SDcAnodh4m8cDyZYCelsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCoArN0Hly0jlHrggircAzvI7ZywIVS1sMVMsbPjGFqTV6YIRTxcqNTAeNppUsstDgvr07XvrU6rfzVyjYQdtsG5X8KwmBeD7M%2FaEvBOkdDrKl7pK4C8B0QP9GoXfp7YhpSJQsOtLG7BBFnzXgwAw%2B5qQLuoD8fmJVrOJ3tJ6pKBh9BQZIY11dsuYYJEUQJ5OwOIws9CyArX2FQXCCKemcy35Wu2%2BIKnEIGOmFX62JVNsi5M%2BcSxaJ%2B9VUuj5fXJFgSsiKGs4ccTdAfnPp1%2BgG4eInvqYTfTY1FmVHDm3lu7z8pB48RzvAsS7qf9A1hluzAzmz2YTdwUivZ%2B0uFssYmQFcONz7ellkgZ7j21r%2BLHYczcK9bEDsk0u3BbCxDinS%2BW7wmp4qPSRn8NhT4P90w2OszFJwxYEpg%2Bthy8s9eSe2Wtc7JG2UaiGU10geBPJWMF1wtuqRBp5Maz1wifjkdufEnhi4ffZO1CydWz3LHSvzerj2EbXF4I3DfsAYhIaCNIK2%2FOK%2FzS7%2BX%2BuW53sHMaxj8NuNdWQvLneGYn%2BMq9EAIo4WF1Rpv1b8eFuweJLR%2BQdokNUdPjtAdp4TqD%2FuptbXMrMR9W3LrrEuUNu6bJaV%2FNmRPe2MFzcRVJ0xwr0mlEsRCWDr7GSy5mMJCPisoGOqUBrZlrXx8S%2ByzjWKQWSTq%2FPoavdWKg8h4EKp7GUXCYkWRgOnlt4JKf4ft%2BWDzz56M4ACShDuzgrB2ax4QfWLYgzeyGhX%2BFqRBAaGGKOUU653TWzTsKGzkSgBwvPjcuB1aJ5pZylaqIlAWaFc1TtO1GeDbGsFx%2F5rq3YQLkvDggWfBYUsJsCJIeHFNTNvNJ1wOGeoPTfJTlwjgu2Brv8v53%2FkRVW%2B%2Fe&X-Amz-Signature=ad0f9f8a6a3d73e81dcb243d0f309d5a4f2c269ed611432cf838e666422502f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKANFDQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FDybIw9gPbKKJtXZYbunkqtX2euRt%2BtTOol9ST%2F04QAiEAzvw%2FRGkHHvMzG1%2FJgjjYJ73SDcAnodh4m8cDyZYCelsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCoArN0Hly0jlHrggircAzvI7ZywIVS1sMVMsbPjGFqTV6YIRTxcqNTAeNppUsstDgvr07XvrU6rfzVyjYQdtsG5X8KwmBeD7M%2FaEvBOkdDrKl7pK4C8B0QP9GoXfp7YhpSJQsOtLG7BBFnzXgwAw%2B5qQLuoD8fmJVrOJ3tJ6pKBh9BQZIY11dsuYYJEUQJ5OwOIws9CyArX2FQXCCKemcy35Wu2%2BIKnEIGOmFX62JVNsi5M%2BcSxaJ%2B9VUuj5fXJFgSsiKGs4ccTdAfnPp1%2BgG4eInvqYTfTY1FmVHDm3lu7z8pB48RzvAsS7qf9A1hluzAzmz2YTdwUivZ%2B0uFssYmQFcONz7ellkgZ7j21r%2BLHYczcK9bEDsk0u3BbCxDinS%2BW7wmp4qPSRn8NhT4P90w2OszFJwxYEpg%2Bthy8s9eSe2Wtc7JG2UaiGU10geBPJWMF1wtuqRBp5Maz1wifjkdufEnhi4ffZO1CydWz3LHSvzerj2EbXF4I3DfsAYhIaCNIK2%2FOK%2FzS7%2BX%2BuW53sHMaxj8NuNdWQvLneGYn%2BMq9EAIo4WF1Rpv1b8eFuweJLR%2BQdokNUdPjtAdp4TqD%2FuptbXMrMR9W3LrrEuUNu6bJaV%2FNmRPe2MFzcRVJ0xwr0mlEsRCWDr7GSy5mMJCPisoGOqUBrZlrXx8S%2ByzjWKQWSTq%2FPoavdWKg8h4EKp7GUXCYkWRgOnlt4JKf4ft%2BWDzz56M4ACShDuzgrB2ax4QfWLYgzeyGhX%2BFqRBAaGGKOUU653TWzTsKGzkSgBwvPjcuB1aJ5pZylaqIlAWaFc1TtO1GeDbGsFx%2F5rq3YQLkvDggWfBYUsJsCJIeHFNTNvNJ1wOGeoPTfJTlwjgu2Brv8v53%2FkRVW%2B%2Fe&X-Amz-Signature=47a95e629d45e827c4fba32412e180fa962521402a5f212ac315861543e8f06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

