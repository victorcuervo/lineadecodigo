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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJ5LFK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkuPGtsBgBj25UY2jgxSq3rQoAoa77FbZ3s4wrKy9jhAIgUzEU7jB5rKg138x3FZgtvuoCD%2BBbL7Sx1rW%2FYq7%2BmeQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDsg3Pm5pyJv1d8LyrcA%2FUGP59llUQwvXyW0kF%2BWBAosTo0w%2Fpt12UKH0PHU2x0gvv7VgrlERiOrJtkgCNym%2BBdO4fNuqJef536a6TaOhkgMHTi3RB6fJ0N6N56q7YAcWKo1Zy0N5SN9pD9RtwlRJQvnCBDR%2FHoJvj8zX4w9idnhJVvY2pl3JCrmoH61oHQ9gwfbx8XjPBO54yXZk5GsuVULPEkjEYK6UFkGmDb%2BqbOe%2B%2BwQ6fGdWnJA2szO4g659buebjPCk%2Bfh%2BG7TtENni8n6U0TvHCGnjRoZ2VqYszp5ofh0xl%2FPp1R3XAvG8ak%2BkqSpW2i4nQBljJ4hZDurW0UUIASIpccQdcMfF8aUuuoLtUMvUPNADFVpRma%2Fp3NJiLdyeATbzaTtTxSKGeEpOMDizjuWJb2%2BgLGu08gnXKEl6m7Rh9lPPXQyobdfRaBvZdluo5nJBWWtDGhkw0pIXAsyPSErVeh%2BaznTGDK%2FYb6Tl4uO0QxusWT%2FOOtO%2Bi79XDhZO8q2GmAnEkyudApbknF1C%2BLelxMFo6NEu6swmojDLkw7SJxvp5rDVhbKcdatOd7NeI80H7D3jpE0iASRb01ep4Y3YqLcH0Zc0svpNUMekV8qNXy4hj7ZCyKajI1oWwGnvjoCpqbTq%2BuMM6KjMoGOqUB1hGLNgwDQqPumLDmS2rrlmmjXWbj7F3nxrpaZQdGk8zUDqgpuhYbZDS5nfnGJ%2FCW8b8MaZ%2ByE6RTGT9KJ%2FpZstWq24V8WAmvxNAyLLwtrqNUseLI%2FX0PNfsaJXPp3hlHrYoYcJUhLgDU4K1BpORiO9aypa48cLQmOnUZIOsANciASfWXH1uJMIE2eiXSXtBo5Xfq0%2BIp9OmeuRori0T%2Ffs%2BE61kG&X-Amz-Signature=e777ad92b17799b247ccc94daf1e7086a5f8141b7f7e545ea09a9a9034f477df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJ5LFK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkuPGtsBgBj25UY2jgxSq3rQoAoa77FbZ3s4wrKy9jhAIgUzEU7jB5rKg138x3FZgtvuoCD%2BBbL7Sx1rW%2FYq7%2BmeQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDsg3Pm5pyJv1d8LyrcA%2FUGP59llUQwvXyW0kF%2BWBAosTo0w%2Fpt12UKH0PHU2x0gvv7VgrlERiOrJtkgCNym%2BBdO4fNuqJef536a6TaOhkgMHTi3RB6fJ0N6N56q7YAcWKo1Zy0N5SN9pD9RtwlRJQvnCBDR%2FHoJvj8zX4w9idnhJVvY2pl3JCrmoH61oHQ9gwfbx8XjPBO54yXZk5GsuVULPEkjEYK6UFkGmDb%2BqbOe%2B%2BwQ6fGdWnJA2szO4g659buebjPCk%2Bfh%2BG7TtENni8n6U0TvHCGnjRoZ2VqYszp5ofh0xl%2FPp1R3XAvG8ak%2BkqSpW2i4nQBljJ4hZDurW0UUIASIpccQdcMfF8aUuuoLtUMvUPNADFVpRma%2Fp3NJiLdyeATbzaTtTxSKGeEpOMDizjuWJb2%2BgLGu08gnXKEl6m7Rh9lPPXQyobdfRaBvZdluo5nJBWWtDGhkw0pIXAsyPSErVeh%2BaznTGDK%2FYb6Tl4uO0QxusWT%2FOOtO%2Bi79XDhZO8q2GmAnEkyudApbknF1C%2BLelxMFo6NEu6swmojDLkw7SJxvp5rDVhbKcdatOd7NeI80H7D3jpE0iASRb01ep4Y3YqLcH0Zc0svpNUMekV8qNXy4hj7ZCyKajI1oWwGnvjoCpqbTq%2BuMM6KjMoGOqUB1hGLNgwDQqPumLDmS2rrlmmjXWbj7F3nxrpaZQdGk8zUDqgpuhYbZDS5nfnGJ%2FCW8b8MaZ%2ByE6RTGT9KJ%2FpZstWq24V8WAmvxNAyLLwtrqNUseLI%2FX0PNfsaJXPp3hlHrYoYcJUhLgDU4K1BpORiO9aypa48cLQmOnUZIOsANciASfWXH1uJMIE2eiXSXtBo5Xfq0%2BIp9OmeuRori0T%2Ffs%2BE61kG&X-Amz-Signature=fad762c6da92f662d9edf7eebc698abce1e4acb51875e086cb54fc67f1607c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

