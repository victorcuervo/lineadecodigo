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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILPOAKG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADLYpVFAlGm3iqphr1UvQOmTOhQMCJ1BKHcF1OfaHwIhAJx1ZnQrsAVMPQDSsGXCcbta4iYpWZMYC8GCx9XooMndKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpVwEGNo7wIeXu5HYq3AOcaYrEuVwI51yg7Y8VoRhHZMZyH3%2FGDMXfT6UK9M6Vt3V7jgHsS3q%2Fy4W4MBi42bn4miTP2XagCSx2lvFfhuEcRR%2BHzsIlX02llRKzLrElQxKR22o5KrIXPublJOEFBuIHy2CIbfxiYyp9eaIDI%2FSA6rvsforeE%2FH3fDXOezUt9EGPcLf5IRKs4TDipbHiwpLHUSmxBL3G53OOKEoLpAh7D1TAsyJ6BYhqWCoDR%2F3X4J%2B1LrXf0rc1Eh1bnwE%2FjDbvwWukjRusZUOLcFm0tND3hK%2BRyhjNhJ5d%2B0sQEzBCwuq5ooPA5vXZKPVR9e1jeRKtPM3Pu%2Fsd%2BfTBFkVFeMxUaOYbWv6FSrGEpqmq3TC5JJl81bJYCciJDAvdrI5pVhppJJbTPdRBy5eKv2eQr1TkWg%2Bcl5TyWXgN%2F86xHzrF%2F%2FA4lMwmujSgD2XN1KjaJimNVu%2B6eairbEOf6r5Qx3t19u9y2lTNuOm71NL7TM3YtlYlkGjxg6LbNOfLf0TW2S91%2BBnwE6OoWfbttsot8FJ7sSpuWgNU1ew3WaKabyDVjBPsZMPPLKTLjBTDzU6F%2FQHFP%2BKbKuDxL8B2bxkzG%2FmnDWJAtwuwlUVeXy7crR2M3qDL%2F6HDcQ6jvl0F%2BjCtn4vKBjqkAcCuCToJHyXBHD2gdYACsdRdYGK99gJTGx%2F1u5xMurjLZ0aksUeVw8cWEyQnKGlKsGOns%2BdaBcN75O%2FSAMgmlE7yBdcHk1UYNAgndCC1mBlEEbc01LC4WCXQT%2BuBFea%2F604eIXLS8w8082rmp5y%2FQq%2FG2twg%2FJ2yUeslKyqzcZRq%2BSodUlWLycsvjG4XdC4kvmMCrljjmZ2inbyDfYp9eWbWEiZO&X-Amz-Signature=8e4660dfe896c7b0b729eb3b6f2af75a6128d84a4a6ec0d2e7524df3fe4982d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILPOAKG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvADLYpVFAlGm3iqphr1UvQOmTOhQMCJ1BKHcF1OfaHwIhAJx1ZnQrsAVMPQDSsGXCcbta4iYpWZMYC8GCx9XooMndKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpVwEGNo7wIeXu5HYq3AOcaYrEuVwI51yg7Y8VoRhHZMZyH3%2FGDMXfT6UK9M6Vt3V7jgHsS3q%2Fy4W4MBi42bn4miTP2XagCSx2lvFfhuEcRR%2BHzsIlX02llRKzLrElQxKR22o5KrIXPublJOEFBuIHy2CIbfxiYyp9eaIDI%2FSA6rvsforeE%2FH3fDXOezUt9EGPcLf5IRKs4TDipbHiwpLHUSmxBL3G53OOKEoLpAh7D1TAsyJ6BYhqWCoDR%2F3X4J%2B1LrXf0rc1Eh1bnwE%2FjDbvwWukjRusZUOLcFm0tND3hK%2BRyhjNhJ5d%2B0sQEzBCwuq5ooPA5vXZKPVR9e1jeRKtPM3Pu%2Fsd%2BfTBFkVFeMxUaOYbWv6FSrGEpqmq3TC5JJl81bJYCciJDAvdrI5pVhppJJbTPdRBy5eKv2eQr1TkWg%2Bcl5TyWXgN%2F86xHzrF%2F%2FA4lMwmujSgD2XN1KjaJimNVu%2B6eairbEOf6r5Qx3t19u9y2lTNuOm71NL7TM3YtlYlkGjxg6LbNOfLf0TW2S91%2BBnwE6OoWfbttsot8FJ7sSpuWgNU1ew3WaKabyDVjBPsZMPPLKTLjBTDzU6F%2FQHFP%2BKbKuDxL8B2bxkzG%2FmnDWJAtwuwlUVeXy7crR2M3qDL%2F6HDcQ6jvl0F%2BjCtn4vKBjqkAcCuCToJHyXBHD2gdYACsdRdYGK99gJTGx%2F1u5xMurjLZ0aksUeVw8cWEyQnKGlKsGOns%2BdaBcN75O%2FSAMgmlE7yBdcHk1UYNAgndCC1mBlEEbc01LC4WCXQT%2BuBFea%2F604eIXLS8w8082rmp5y%2FQq%2FG2twg%2FJ2yUeslKyqzcZRq%2BSodUlWLycsvjG4XdC4kvmMCrljjmZ2inbyDfYp9eWbWEiZO&X-Amz-Signature=f895a82354c514ae05a40f02f4f7837ad139b32e22061cd83d5a95aa93d18b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

