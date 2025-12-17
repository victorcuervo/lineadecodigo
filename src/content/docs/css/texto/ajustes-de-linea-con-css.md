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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVVEFVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUYdDPhmz6RzGnwBpFblb6MxsaVxRgc%2By%2FcCmBH1OsyQIhAL6vqSrnrmBVjifCnBH2ajWRgMG51%2B5g1DNoZmBGwHXRKv8DCH4QABoMNjM3NDIzMTgzODA1IgzIll8HzncxY3GpVJwq3ANybCtGWGuoJ8MWfWzthWM%2Fl6Gxk3%2BtEuiPPmRgJVrUMypXRqQANV%2Fp%2BAA2gYQlSSeSHhsVKBhizmQtkbxZmNsJfAo2AagPQqgx3kxNClvPAQXq2%2FvsW%2Fh6BXxZeXJkXbTBTD6XfPAMp6YkmFcH%2BN4W3shbQv5ap2hqnleEf%2FQZfSUWYoDOof3Ibg7V00qTZlso1TCzB6d9wm6RmOtkDl5TIGv8sLniw9Tgick7rL4vfMg2cMvNMf%2FdKIsnkCVMaEb98X4T8tZv9IaWaipJ%2FdQXhHvet6B4au1Xk9qHy2OD5sVZ0WiLhaiZhoFpOxhYZ1hpEe3cdHAU%2Buma42JKbariFYkMtluNMq3k81%2BS8suWJ6A72tWnJjQn8ECwQbGJWXh4jekAjyWtlXcMBf0JeG701RktDRd9IQZTiLjjqj6cFYM1mGBEEK7tfln3skkbqiKtNd2YNYqVk0U8WRNRUfJz7Ogy1Fg7VQtl5uQnxGQaFVkI6TQ1uigPq%2FT%2BsoX%2FZBHpuVCeos9iq5OkyKR%2BMcech6AHhynkjUbSTIw2lA27kJ8ITvU6BcTaTEHgMFTHVtttpt6s0wYAeHRDnsIqHe43TLIq29cWXKHf2AKM8T9koAm8rGv%2F%2FD8e%2FpLdbTDpxYrKBjqkAZUiIOrsqa74fSYoN%2BDRNBro4tkqr3nMzY8CV1gyUiy7urNjjWU9s8AcJ5uybrGJ3yHrn%2BVDid3WYVsbN4wcLU3Tl%2B7G2lAhmSDRNo6lITarDD2jvwaw2QJtI8lb3Za3g7HZUnscItp8lQqm1j6Br2z5R5EL9VLRIb6Gnq8sa9%2BKFw4qY5bQWJnK2sDTd6mKzbrgmzASitbB7cY%2BuV%2Bx%2BIhMJpPn&X-Amz-Signature=75be39aa4fa81bf3ee8518f326fccdb45deef1e4fab04003d7c27fe50bdde59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVVEFVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUYdDPhmz6RzGnwBpFblb6MxsaVxRgc%2By%2FcCmBH1OsyQIhAL6vqSrnrmBVjifCnBH2ajWRgMG51%2B5g1DNoZmBGwHXRKv8DCH4QABoMNjM3NDIzMTgzODA1IgzIll8HzncxY3GpVJwq3ANybCtGWGuoJ8MWfWzthWM%2Fl6Gxk3%2BtEuiPPmRgJVrUMypXRqQANV%2Fp%2BAA2gYQlSSeSHhsVKBhizmQtkbxZmNsJfAo2AagPQqgx3kxNClvPAQXq2%2FvsW%2Fh6BXxZeXJkXbTBTD6XfPAMp6YkmFcH%2BN4W3shbQv5ap2hqnleEf%2FQZfSUWYoDOof3Ibg7V00qTZlso1TCzB6d9wm6RmOtkDl5TIGv8sLniw9Tgick7rL4vfMg2cMvNMf%2FdKIsnkCVMaEb98X4T8tZv9IaWaipJ%2FdQXhHvet6B4au1Xk9qHy2OD5sVZ0WiLhaiZhoFpOxhYZ1hpEe3cdHAU%2Buma42JKbariFYkMtluNMq3k81%2BS8suWJ6A72tWnJjQn8ECwQbGJWXh4jekAjyWtlXcMBf0JeG701RktDRd9IQZTiLjjqj6cFYM1mGBEEK7tfln3skkbqiKtNd2YNYqVk0U8WRNRUfJz7Ogy1Fg7VQtl5uQnxGQaFVkI6TQ1uigPq%2FT%2BsoX%2FZBHpuVCeos9iq5OkyKR%2BMcech6AHhynkjUbSTIw2lA27kJ8ITvU6BcTaTEHgMFTHVtttpt6s0wYAeHRDnsIqHe43TLIq29cWXKHf2AKM8T9koAm8rGv%2F%2FD8e%2FpLdbTDpxYrKBjqkAZUiIOrsqa74fSYoN%2BDRNBro4tkqr3nMzY8CV1gyUiy7urNjjWU9s8AcJ5uybrGJ3yHrn%2BVDid3WYVsbN4wcLU3Tl%2B7G2lAhmSDRNo6lITarDD2jvwaw2QJtI8lb3Za3g7HZUnscItp8lQqm1j6Br2z5R5EL9VLRIb6Gnq8sa9%2BKFw4qY5bQWJnK2sDTd6mKzbrgmzASitbB7cY%2BuV%2Bx%2BIhMJpPn&X-Amz-Signature=4136c43390a16060af7201e70f02eed940a9dc6e734328ea8ac4c1ac98941b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

