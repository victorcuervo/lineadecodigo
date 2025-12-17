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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TFU66V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2FGZIW1spB4bEZhy%2BGJ9PthM5T9XrPRfypdJwkfTtVQIgbdLEg3ajcA5iy4kFAQsHPMAJ7buZaTqw6SSe8yHAvfwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlG6QIrjNc6O915lSrcA7DIOQxXVOo4NkpKrsTsn5tqPtrXOIhlGBdQd7z%2B3niFN63rJnMaBMml3OT%2BI5FSLpD%2FwDaGwucBBSvSudb0ZFYKByMCX9PD2sCVMKoIxZ2hVFei9gKC%2BgNyBlDV0giPl%2FERK3OXP%2BnckdKRQ9T4%2BCcxzgWEhFkpIy7M8FM8PkjsprlDjXHfmfp84SKMiB%2FcdND5t9fZ92%2Bk3OYJ11DXZ63rMIhuOa3yY17wWBs7MDnUafI1LORbx16ufmarJF9T4FRIQUqQjPrBF3Yto%2BsSAd6FaU2az3qk2t8vbl1Ee0Dynzh%2Bpf977rxgYFaYa0WAXQefakyWCGGoFLgwBo3%2FYzt2oybH9EhqdN%2BYO2I%2BwyFzyeuW8u5xsKwymeMR2a6p09tH5dH6rp8YDtFeqUvq8bZDM6z9SxINi33d8hlOQH%2Fy9qwq%2F2u47aHCM6hbszssSyVW9cMXOBpSNpz7sd8HmW1Fyp490rTK6GS12%2BKtKfRpvgcnCWhUv3RPyyogC898pg28mL9mfTqr%2Fk1VEPuCsbQhRN%2B5MHAPo9NRnk%2BfbzMG1pL10Sn%2BQVac9RJq2LQsT%2B4MTOQnenrcswbjol4OywQBxHvZfP2%2Focpvym8C8PCzLV8CcdJ%2BhdkJngfqMKmgi8oGOqUB3z9ihuwY7367kpF3llcZ7SkENsDGWibdKDgbEenA3Pc4cE1RaBPMeC3Meb6v5q%2B%2BA6FX%2FOLKhlifLoQBh%2F5iPcXXp83WMfIZH3axq8bksRuy6qTKUGyORhvX2Tc12Ioa502Yt8T5I%2FJxWALdHdU%2BghzOJnf32E0cfLRc%2FrNmAQjyqSD06HSKSv3Sk3YnMXRr5K5z0v0sY16STwiLN4kU9VBrGzNY&X-Amz-Signature=048d1d5f857397125710027af7c9020a34cd8578e9d560981ef18f433765799e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TFU66V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2FGZIW1spB4bEZhy%2BGJ9PthM5T9XrPRfypdJwkfTtVQIgbdLEg3ajcA5iy4kFAQsHPMAJ7buZaTqw6SSe8yHAvfwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlG6QIrjNc6O915lSrcA7DIOQxXVOo4NkpKrsTsn5tqPtrXOIhlGBdQd7z%2B3niFN63rJnMaBMml3OT%2BI5FSLpD%2FwDaGwucBBSvSudb0ZFYKByMCX9PD2sCVMKoIxZ2hVFei9gKC%2BgNyBlDV0giPl%2FERK3OXP%2BnckdKRQ9T4%2BCcxzgWEhFkpIy7M8FM8PkjsprlDjXHfmfp84SKMiB%2FcdND5t9fZ92%2Bk3OYJ11DXZ63rMIhuOa3yY17wWBs7MDnUafI1LORbx16ufmarJF9T4FRIQUqQjPrBF3Yto%2BsSAd6FaU2az3qk2t8vbl1Ee0Dynzh%2Bpf977rxgYFaYa0WAXQefakyWCGGoFLgwBo3%2FYzt2oybH9EhqdN%2BYO2I%2BwyFzyeuW8u5xsKwymeMR2a6p09tH5dH6rp8YDtFeqUvq8bZDM6z9SxINi33d8hlOQH%2Fy9qwq%2F2u47aHCM6hbszssSyVW9cMXOBpSNpz7sd8HmW1Fyp490rTK6GS12%2BKtKfRpvgcnCWhUv3RPyyogC898pg28mL9mfTqr%2Fk1VEPuCsbQhRN%2B5MHAPo9NRnk%2BfbzMG1pL10Sn%2BQVac9RJq2LQsT%2B4MTOQnenrcswbjol4OywQBxHvZfP2%2Focpvym8C8PCzLV8CcdJ%2BhdkJngfqMKmgi8oGOqUB3z9ihuwY7367kpF3llcZ7SkENsDGWibdKDgbEenA3Pc4cE1RaBPMeC3Meb6v5q%2B%2BA6FX%2FOLKhlifLoQBh%2F5iPcXXp83WMfIZH3axq8bksRuy6qTKUGyORhvX2Tc12Ioa502Yt8T5I%2FJxWALdHdU%2BghzOJnf32E0cfLRc%2FrNmAQjyqSD06HSKSv3Sk3YnMXRr5K5z0v0sY16STwiLN4kU9VBrGzNY&X-Amz-Signature=f8467c133db0ea78ce6576a4b5b2f4bed782e9576aca9743f78860b66e25c4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

