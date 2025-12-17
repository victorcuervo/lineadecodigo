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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAT2GY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHHcuJHm7zmUpsSx%2BHV4ejj0D2eDr6DSwSkk40xsXVfAiEAzDgkSby4sH56G4nS3%2FugoC1%2FGLnunkB9InRctk%2FLEm8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDpicNqysVloV%2BN52ircAza9VSMhKhQFJBHHeqYR13SrKh9DOPaoh6kDjkvgS9nVbMGl4mzC4KT7m4ukAuG%2BwboMXV8G63Qrs8cKTQWeFSz0oGUJhhF2bhP3YXqn0fiqs0l9BoPX10%2BC9aMX%2ByQGm1ac0hpQSesKO9kGDO4i1Cssabw4Gq0DVM37pLBcltKWPLsQMbMN8zRVoTVypQItYvaYitcHNPLOoeMkT4TAcjYq%2BDhLM5fxs58h5gZFQoL3URF0iyvLN0ZMXj3DNUOIUu78pXzUPLCSRwc5YntQMCk%2BQb6kEU8VXFe7aNMtAip0vWKBvzKEB4oKN6WsvPfUGCE8RnW6qrkLcbpy3p%2Bt8kG88G2Jrmn9DtqOLZqIHOGObORESYLPc5G5VAGC9%2F37GYHFQ%2BQhyZh9%2FY1qLNGWOT65yIwwWqcj09pA5N0PwueP%2B4oM1v9dUNJz2z7PpdAH%2BW5lR7lqRk5Sqzevo0B2uZ71fssgzjqERTnuu9VUQeeRvV%2FUYStuXfwfwLELEythSsX36vrpL8oqqtopmOe7AitYs%2B5D8gbJg3Iyaa675n0iMZ13hKxUOaF8sFC6rFb6zbpPACGzXvEdpisi4QfOk3%2FNOnD5xUhT4LswD%2Bb%2B5svzmkzd8mgouwrGaaDwMJ%2FGisoGOqUBvMA0H4oIrjEAgzcdZRjEk9UXTCS2AzRdRYGiYQgNSwycolS8tEapqZY6m82w3fvvREUd9%2FpPCp6%2BWu%2BPUbjPtLpaGK1CaTEgOlRIxKNxGv6O%2FZp%2FsYNVb4NQm3SH77frNwRdKaQCUjMBeEAFvY9IX1NmtGQG9s2zxYi%2BA3CacE2knqtv01RTBHeG0Ogq0zX6OKCFEs9s5eKYwhou%2BEiTAKUv3P7Q&X-Amz-Signature=3c47dca4c5704c641c885d0b4e2693eff6181939f209a287f65159a13b055880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAT2GY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHHcuJHm7zmUpsSx%2BHV4ejj0D2eDr6DSwSkk40xsXVfAiEAzDgkSby4sH56G4nS3%2FugoC1%2FGLnunkB9InRctk%2FLEm8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDpicNqysVloV%2BN52ircAza9VSMhKhQFJBHHeqYR13SrKh9DOPaoh6kDjkvgS9nVbMGl4mzC4KT7m4ukAuG%2BwboMXV8G63Qrs8cKTQWeFSz0oGUJhhF2bhP3YXqn0fiqs0l9BoPX10%2BC9aMX%2ByQGm1ac0hpQSesKO9kGDO4i1Cssabw4Gq0DVM37pLBcltKWPLsQMbMN8zRVoTVypQItYvaYitcHNPLOoeMkT4TAcjYq%2BDhLM5fxs58h5gZFQoL3URF0iyvLN0ZMXj3DNUOIUu78pXzUPLCSRwc5YntQMCk%2BQb6kEU8VXFe7aNMtAip0vWKBvzKEB4oKN6WsvPfUGCE8RnW6qrkLcbpy3p%2Bt8kG88G2Jrmn9DtqOLZqIHOGObORESYLPc5G5VAGC9%2F37GYHFQ%2BQhyZh9%2FY1qLNGWOT65yIwwWqcj09pA5N0PwueP%2B4oM1v9dUNJz2z7PpdAH%2BW5lR7lqRk5Sqzevo0B2uZ71fssgzjqERTnuu9VUQeeRvV%2FUYStuXfwfwLELEythSsX36vrpL8oqqtopmOe7AitYs%2B5D8gbJg3Iyaa675n0iMZ13hKxUOaF8sFC6rFb6zbpPACGzXvEdpisi4QfOk3%2FNOnD5xUhT4LswD%2Bb%2B5svzmkzd8mgouwrGaaDwMJ%2FGisoGOqUBvMA0H4oIrjEAgzcdZRjEk9UXTCS2AzRdRYGiYQgNSwycolS8tEapqZY6m82w3fvvREUd9%2FpPCp6%2BWu%2BPUbjPtLpaGK1CaTEgOlRIxKNxGv6O%2FZp%2FsYNVb4NQm3SH77frNwRdKaQCUjMBeEAFvY9IX1NmtGQG9s2zxYi%2BA3CacE2knqtv01RTBHeG0Ogq0zX6OKCFEs9s5eKYwhou%2BEiTAKUv3P7Q&X-Amz-Signature=c4a2292f16ebb02fd2df77ba7c469bd19509011cd22bb921fb5d00e999f3a413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

