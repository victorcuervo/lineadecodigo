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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CK4YZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEZpw8BMsA%2BM%2FRevT0d9MkT8wvNkYQCGSgDM1ZZCyEbAiEAqCrRk1j%2B%2FTf1GE68crAkPCFumbf9LjYTRDnzny%2FbDIQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFFn%2FGXoTZH%2BP9N3pircA22188lH936EcubcdpFk0lnOKM0g%2FQ2mVFXcfkV8m5G%2BuUzdNubXu0V1YeM1rLddLudz7prRvCNPk1%2B3Fcwno7FnoNcHsvSKcjtOz3RATonToR0s%2BQWSuHXqrAMGdYnirbnoubbn23Zahjea0QXG3Pwacctl2mSJYd0v%2BjDTP%2Fa%2Fo7gph0JhwLSNQ%2FZHluxqPsoOm%2BkdtsINZj8ifk4jIpnADSjpJeC%2F%2BaUwYImiFAO5J%2Bkq9P7mlMFhSHlPjiGTmyTBAU1P1GATrmjTuzqMHLbAo6S%2BDkhKb7TReCplpZ0uAdF%2B0MW3Qq1essx%2FJqQaaV27yzyJoPTDg6%2Fx5vVn84bx0QmcNMKX2K8PceS2Kew%2FbTJWmu%2F30%2Foo7ANyqQZbWBQutMfoSOIs%2FR3pek02rsAbCou7wmZ0n0IgP7mpltW5z9uehp%2F4WCVfVKyUZIROpJepinJqO0shLz2jSKd6CvUtGtK168Z7dTN55TsBU7v6KlSFKXyE9psbpDjCt%2Bp7jfpLWFq90%2FgMpTdqVsAHjR40E96IVONnapYMqNSoi%2Bty6WsPFcIBJkJTDAiedYqkghl1vJp6yuxRyVKUJrHDouiBqYOWnTOcWk8mOArAqUuOiEKMZVVQn0fMyMtSMM6OisoGOqUBSV%2BRGcB5ylFwNzm4D%2F0jf03crqmc4%2Fop4unC4VhmmCJN%2FE9aCa50rK8UqQLVzs7ZXU1Wob0E0ClQjY7XKxlJaRK1e5eTPtUiw4%2BzWWPycgK8C6ejBSOnLGTXtJMTvkc0SdU7mKoUmfm1Q79bYgpYM2XQloBce8lXtiHd4u2HA5TlxBlUKb8ghqdoXjVZ64R%2FnbXEWW4uLsQJYn3sNQk0dpQh%2BA%2FV&X-Amz-Signature=1e1383c3388ec5949a854ac6c6e497298504fe434e5fe2ee69aeafad91a96bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CK4YZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEZpw8BMsA%2BM%2FRevT0d9MkT8wvNkYQCGSgDM1ZZCyEbAiEAqCrRk1j%2B%2FTf1GE68crAkPCFumbf9LjYTRDnzny%2FbDIQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFFn%2FGXoTZH%2BP9N3pircA22188lH936EcubcdpFk0lnOKM0g%2FQ2mVFXcfkV8m5G%2BuUzdNubXu0V1YeM1rLddLudz7prRvCNPk1%2B3Fcwno7FnoNcHsvSKcjtOz3RATonToR0s%2BQWSuHXqrAMGdYnirbnoubbn23Zahjea0QXG3Pwacctl2mSJYd0v%2BjDTP%2Fa%2Fo7gph0JhwLSNQ%2FZHluxqPsoOm%2BkdtsINZj8ifk4jIpnADSjpJeC%2F%2BaUwYImiFAO5J%2Bkq9P7mlMFhSHlPjiGTmyTBAU1P1GATrmjTuzqMHLbAo6S%2BDkhKb7TReCplpZ0uAdF%2B0MW3Qq1essx%2FJqQaaV27yzyJoPTDg6%2Fx5vVn84bx0QmcNMKX2K8PceS2Kew%2FbTJWmu%2F30%2Foo7ANyqQZbWBQutMfoSOIs%2FR3pek02rsAbCou7wmZ0n0IgP7mpltW5z9uehp%2F4WCVfVKyUZIROpJepinJqO0shLz2jSKd6CvUtGtK168Z7dTN55TsBU7v6KlSFKXyE9psbpDjCt%2Bp7jfpLWFq90%2FgMpTdqVsAHjR40E96IVONnapYMqNSoi%2Bty6WsPFcIBJkJTDAiedYqkghl1vJp6yuxRyVKUJrHDouiBqYOWnTOcWk8mOArAqUuOiEKMZVVQn0fMyMtSMM6OisoGOqUBSV%2BRGcB5ylFwNzm4D%2F0jf03crqmc4%2Fop4unC4VhmmCJN%2FE9aCa50rK8UqQLVzs7ZXU1Wob0E0ClQjY7XKxlJaRK1e5eTPtUiw4%2BzWWPycgK8C6ejBSOnLGTXtJMTvkc0SdU7mKoUmfm1Q79bYgpYM2XQloBce8lXtiHd4u2HA5TlxBlUKb8ghqdoXjVZ64R%2FnbXEWW4uLsQJYn3sNQk0dpQh%2BA%2FV&X-Amz-Signature=288ec7548416e0c4dce4914737bc973061bcb10214beb34634ed1adbceacf47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

