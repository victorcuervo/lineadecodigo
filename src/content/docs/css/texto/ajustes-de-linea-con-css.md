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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66BDXH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq%2FAUL7073LzTS5fj8Fd5nxBct5F96AzwnZwDUorYl4AiBHAwRQpPwT5ayClIxdEje5PIFpfuiL9uNdAK0AeDGwHyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0OB8nCqbE3LKZECTKtwDVER%2BmMOhtweLnR6WHz0md96tqagJfHOlRd2LvhPZud0T5lBT%2B5w0cvstQYzSYMocWGgj1dk9eA1h6UEpAio%2FoyymVpxwK2b1MjOt1dyGQGweqtAPZzrScY8cyzDnvOJzVoKQFdFQctxbpU8ppc42yytU040gnLa7OhrHQ4CFWsGkDadDGVvrcboPJWTYYojT6vave%2FRT%2FdaRiv11i7q5fvpXu5GIrPDUbCSa070kT7pOJ%2Bog5h%2BycTpSOQUZ4PcknVdMD8DfC9WddDSTU6F8HRr0oo7FVvAowVvleEuWnjiVAsvq%2B7p%2BMStTv87o6x%2FYu47cJ3s9YlfqwnF4quBjsCYCyShzTylYhNaYu%2FjF44z8VAQyEoc8ntQ6aYCtYZoj42qymkp24h2wN%2BK3QlAeDQFu1ePESx3Vdls9i2UakWvak6xAChOtByBYsp1tSpN5Fp5NDjPDPyiagZthA%2Brpl0F7iQrE2NyWqjxqlSlgXofo505d2vD%2B2YrhveS%2FWFN44tVhIbLmJWIOyDhh2%2BRY7vwiF4IHqKyHAGU8nE6uquS3O1AQ0v%2FZjvpmiQ485lB8%2FwMpolqhxPCLq%2BuABVhQ4IU8LnIRVukwtepFkqqsqK%2Fl9GN2uxZWohTBuu0woLiJygY6pgEkCamC%2FzSAG7nVxNWGfcqZZRc4BvNqn2MwFOPOiJa5YDVqbrmzqw1w4oYkB1AkxMmtpHH1ZiSfMai%2B24YlH3BRRV7Bw4YHFmIcKua2KaoySuQMgsgUll9jxMWDN0bL1n7SzGxNYes8qemZ5o6pi5HYdliZ4qtKOZ6wX06aFOklco7Vqzq%2FE48OUdBrkKuKw1%2FlwrxIiLhILCisNITvUmeTwXc9EJNI&X-Amz-Signature=45d95617247833a0fd5299ea8db53953e78e161d1d83f46ea617defcc0ff1337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66BDXH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq%2FAUL7073LzTS5fj8Fd5nxBct5F96AzwnZwDUorYl4AiBHAwRQpPwT5ayClIxdEje5PIFpfuiL9uNdAK0AeDGwHyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0OB8nCqbE3LKZECTKtwDVER%2BmMOhtweLnR6WHz0md96tqagJfHOlRd2LvhPZud0T5lBT%2B5w0cvstQYzSYMocWGgj1dk9eA1h6UEpAio%2FoyymVpxwK2b1MjOt1dyGQGweqtAPZzrScY8cyzDnvOJzVoKQFdFQctxbpU8ppc42yytU040gnLa7OhrHQ4CFWsGkDadDGVvrcboPJWTYYojT6vave%2FRT%2FdaRiv11i7q5fvpXu5GIrPDUbCSa070kT7pOJ%2Bog5h%2BycTpSOQUZ4PcknVdMD8DfC9WddDSTU6F8HRr0oo7FVvAowVvleEuWnjiVAsvq%2B7p%2BMStTv87o6x%2FYu47cJ3s9YlfqwnF4quBjsCYCyShzTylYhNaYu%2FjF44z8VAQyEoc8ntQ6aYCtYZoj42qymkp24h2wN%2BK3QlAeDQFu1ePESx3Vdls9i2UakWvak6xAChOtByBYsp1tSpN5Fp5NDjPDPyiagZthA%2Brpl0F7iQrE2NyWqjxqlSlgXofo505d2vD%2B2YrhveS%2FWFN44tVhIbLmJWIOyDhh2%2BRY7vwiF4IHqKyHAGU8nE6uquS3O1AQ0v%2FZjvpmiQ485lB8%2FwMpolqhxPCLq%2BuABVhQ4IU8LnIRVukwtepFkqqsqK%2Fl9GN2uxZWohTBuu0woLiJygY6pgEkCamC%2FzSAG7nVxNWGfcqZZRc4BvNqn2MwFOPOiJa5YDVqbrmzqw1w4oYkB1AkxMmtpHH1ZiSfMai%2B24YlH3BRRV7Bw4YHFmIcKua2KaoySuQMgsgUll9jxMWDN0bL1n7SzGxNYes8qemZ5o6pi5HYdliZ4qtKOZ6wX06aFOklco7Vqzq%2FE48OUdBrkKuKw1%2FlwrxIiLhILCisNITvUmeTwXc9EJNI&X-Amz-Signature=c8e2dc14157019eb8e8f5fa00664802088a49940999d596615bc7c5ee9546ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

