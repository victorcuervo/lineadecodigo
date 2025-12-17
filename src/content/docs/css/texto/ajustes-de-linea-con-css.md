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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KI7VH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsxm6Pno8vU5nmQ1M9qajCQgg3CCTPVemHNgiRnFHWHAiAQul1N5Bkwus20HA9d8GXQXJbnBATTkPCXaP73FTHIJCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJdDWg0a5GEuya2X6KtwDKLwg5dDyBmPoIwh1Ffr9%2FhoN3ZPDYf8rSsPGodOZ%2BX6%2BBN0lh%2F8NzYb%2Bmjdr4zAaZD%2BFqusaA22RH7SE6yhWlbcSH1E3%2F510s1fJnl2jJx5Q83EnsTL3HwL%2FnlV%2BJ3zo%2FkzIue2t8GHhm7FNvL7QBhsMhaZBzY0gjqjjHyjsRcJgihzU1GDWku7CrQ1%2F8aVhr4K1wWB4qw6ro8MZWZoUr7dDQ7A4ZeSA6GxJ5B0389ftXGYtS1ktsevXNbBJVUrWHxMQe9trBhpBK%2B%2Bj626prFCyDqRXGA%2FJVXywN3TyoxbRitHg7%2BHKZ%2FL62uik%2F6LPXut8tvw%2BxOpTy2vNX0K3wAhJmg4cm7FrmKCdiucTo%2FcO2vXhM%2FjBl6FYRmU%2BSkevqA3bTPv9OSoKI%2F6%2B4cB%2BwndRY1zq8C3eqjk9MARrjbBfaqO3Q2PO0mZj%2BnKOMkM7pRRPNOQ8Oh0NjX3ybj3C6h8dQrDBdSVA0XcagPpktV18tRG5Nxa1v0BJUSa0bxfpV63jKNToi%2BEHM2Smw01sMJnGDIxdTN97X8mIuX7bLTAiRobjCC6TBu87ws5fEUDeEZogGcgC1GsUmnSx9XfkpcJvJjnwmm%2FeYH%2FMGyQC4%2FF%2B%2B5V9RUwC3BfQFmcw2NKJygY6pgFIyJp3vVlnG9rDEP47o2GUzwQfc7jiH5q3KlJwRYkRVWIrwRpkunwxKV%2BdjT9y%2BReu%2BpQbRTeG6A50eodHdezLKyIpQqxF9Svw%2FMaKeHtivcSfDZ8%2Bz%2FRXyrFVjmDlhpKRt74qF8IaXHxNcB2k7eW0r5obG3ROaAEwDPLR4Z9dpHiKrx5RPfL%2BVpYsVEnvOqjDLORHs23fwRVcJ0daqFdIZFEQUtyE&X-Amz-Signature=3b1b1e966928cf59d4266eebc7da5b39528c0e5c85b21cdbd0a088cc8a3f9ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KI7VH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsxm6Pno8vU5nmQ1M9qajCQgg3CCTPVemHNgiRnFHWHAiAQul1N5Bkwus20HA9d8GXQXJbnBATTkPCXaP73FTHIJCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJdDWg0a5GEuya2X6KtwDKLwg5dDyBmPoIwh1Ffr9%2FhoN3ZPDYf8rSsPGodOZ%2BX6%2BBN0lh%2F8NzYb%2Bmjdr4zAaZD%2BFqusaA22RH7SE6yhWlbcSH1E3%2F510s1fJnl2jJx5Q83EnsTL3HwL%2FnlV%2BJ3zo%2FkzIue2t8GHhm7FNvL7QBhsMhaZBzY0gjqjjHyjsRcJgihzU1GDWku7CrQ1%2F8aVhr4K1wWB4qw6ro8MZWZoUr7dDQ7A4ZeSA6GxJ5B0389ftXGYtS1ktsevXNbBJVUrWHxMQe9trBhpBK%2B%2Bj626prFCyDqRXGA%2FJVXywN3TyoxbRitHg7%2BHKZ%2FL62uik%2F6LPXut8tvw%2BxOpTy2vNX0K3wAhJmg4cm7FrmKCdiucTo%2FcO2vXhM%2FjBl6FYRmU%2BSkevqA3bTPv9OSoKI%2F6%2B4cB%2BwndRY1zq8C3eqjk9MARrjbBfaqO3Q2PO0mZj%2BnKOMkM7pRRPNOQ8Oh0NjX3ybj3C6h8dQrDBdSVA0XcagPpktV18tRG5Nxa1v0BJUSa0bxfpV63jKNToi%2BEHM2Smw01sMJnGDIxdTN97X8mIuX7bLTAiRobjCC6TBu87ws5fEUDeEZogGcgC1GsUmnSx9XfkpcJvJjnwmm%2FeYH%2FMGyQC4%2FF%2B%2B5V9RUwC3BfQFmcw2NKJygY6pgFIyJp3vVlnG9rDEP47o2GUzwQfc7jiH5q3KlJwRYkRVWIrwRpkunwxKV%2BdjT9y%2BReu%2BpQbRTeG6A50eodHdezLKyIpQqxF9Svw%2FMaKeHtivcSfDZ8%2Bz%2FRXyrFVjmDlhpKRt74qF8IaXHxNcB2k7eW0r5obG3ROaAEwDPLR4Z9dpHiKrx5RPfL%2BVpYsVEnvOqjDLORHs23fwRVcJ0daqFdIZFEQUtyE&X-Amz-Signature=e93d942f78f4e4f760aedaa5d9e199a2743e0414606d4481838111d6e23e90b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

