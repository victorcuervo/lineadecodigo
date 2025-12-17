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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3REBHS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHjPRVHiIt7qpaVnmlcp47P1K7RJIOgsEEE7dk5P26QIgD84zW8XaxFoBwIcT7HqzFNPLcie8IeNCB7i3%2F8F3o3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNZxM1SIwxUibgrj%2BCrcA9yPNjdkP8IRy9Rr8DTWwHAmZfrVpeXDHkQXlNETX9Bu0%2B3fWEJoKNO6dQ%2FXR3rh5tuqg%2FElKCAIHted2WgvnraAhQxsvIPtIN4BP828R3RtZceJ%2BN2tld%2FAE8dr2KZdV6Cy5bpf6hJqn45PA8qh69BqNqvVsrcmAHTZ%2BXCBxUBQJstMTtsMFFRNHFoMYy8lGguZX6EUzNeSM%2FuQ8kz%2FVqpspEzMRB8%2Fay7jm6GGHoFxMa%2Bzg%2FBrzCgNmMJTb4nrVa1ViTCQj5zNloTBRncmwuJSkNvCkePDpay%2Fgnv2%2BMQz%2FzACG65t3bDHXqN4Np49ARtT1VR1tEDS137vy4adJNSsafggSaS8Pvpi40gM0wGv0l1EPnQukupaa2vVk%2B%2BCzvVyMHeQvFGuZpkjtfggtsmg%2BxQ9PuHxxSto1mPzFTybznwxgoY5r45ZxlRuJyJQumYiMMnlERNCUvA%2FrYEFMVGMuDQlJroi%2BeV2ujhlPb6%2BCEqFdLrPGAgJhhuqWv%2Fb3g%2FjnYgulrlCaMIjLfAxj3PyoP2Gsr%2Fztm1v%2BuX5tFTAuOafOoZkN9wySddVFDzP6fjuqWSFg4pImdH44yvj7QGn8%2BGEoCwD0SM8e5PF7bOGKHpeCFSdwx18ZA2RMJr7h8oGOqUBegEL0Rk0aeiNl73ssu8ionlhGjM70i8GYCredrxo%2B1rieV6HZlIhQVxVlGh%2BzWKharvPS179dn%2FwKY%2FXfG2tUV6k64EDDhHPlxreE%2Basc7A70UQJAi%2Br9gDFQRsUEz6YNdVD4LoT7g2hLGVtpHzyqWwk5uiOGfhGlBkr0LIvDdArMIrrBSId79auB6I1mjBVsyYrY7WXPGK7S216TPyDjiJsWi9D&X-Amz-Signature=51e882c70cb9f762d3dd0a86d3fbc0d644f215c20beb31638d0fa7faecd85e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3REBHS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBHjPRVHiIt7qpaVnmlcp47P1K7RJIOgsEEE7dk5P26QIgD84zW8XaxFoBwIcT7HqzFNPLcie8IeNCB7i3%2F8F3o3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNZxM1SIwxUibgrj%2BCrcA9yPNjdkP8IRy9Rr8DTWwHAmZfrVpeXDHkQXlNETX9Bu0%2B3fWEJoKNO6dQ%2FXR3rh5tuqg%2FElKCAIHted2WgvnraAhQxsvIPtIN4BP828R3RtZceJ%2BN2tld%2FAE8dr2KZdV6Cy5bpf6hJqn45PA8qh69BqNqvVsrcmAHTZ%2BXCBxUBQJstMTtsMFFRNHFoMYy8lGguZX6EUzNeSM%2FuQ8kz%2FVqpspEzMRB8%2Fay7jm6GGHoFxMa%2Bzg%2FBrzCgNmMJTb4nrVa1ViTCQj5zNloTBRncmwuJSkNvCkePDpay%2Fgnv2%2BMQz%2FzACG65t3bDHXqN4Np49ARtT1VR1tEDS137vy4adJNSsafggSaS8Pvpi40gM0wGv0l1EPnQukupaa2vVk%2B%2BCzvVyMHeQvFGuZpkjtfggtsmg%2BxQ9PuHxxSto1mPzFTybznwxgoY5r45ZxlRuJyJQumYiMMnlERNCUvA%2FrYEFMVGMuDQlJroi%2BeV2ujhlPb6%2BCEqFdLrPGAgJhhuqWv%2Fb3g%2FjnYgulrlCaMIjLfAxj3PyoP2Gsr%2Fztm1v%2BuX5tFTAuOafOoZkN9wySddVFDzP6fjuqWSFg4pImdH44yvj7QGn8%2BGEoCwD0SM8e5PF7bOGKHpeCFSdwx18ZA2RMJr7h8oGOqUBegEL0Rk0aeiNl73ssu8ionlhGjM70i8GYCredrxo%2B1rieV6HZlIhQVxVlGh%2BzWKharvPS179dn%2FwKY%2FXfG2tUV6k64EDDhHPlxreE%2Basc7A70UQJAi%2Br9gDFQRsUEz6YNdVD4LoT7g2hLGVtpHzyqWwk5uiOGfhGlBkr0LIvDdArMIrrBSId79auB6I1mjBVsyYrY7WXPGK7S216TPyDjiJsWi9D&X-Amz-Signature=90fa7bb0347226d753cb8d2f73e3bf7706fdfcc80c21dd8c82a33d522b2aff98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

