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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5EHPYA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunmKVrH3YGMuQfhvRFm3u%2BP4lDMY8wFDLTAVlcxzNWwIhAOw0qJQ8GiXDGeq9xFaIJSVw7PN%2FhiWN9Pj%2FEhJPKeZqKv8DCHcQABoMNjM3NDIzMTgzODA1Igxt%2BcUayGvwOTJ7aSsq3AOfx5sMifAlj%2FkjgMa86zV1FDuYh5tnPhocnvC%2BGEfQgARsWcoNcqioXGrVRrN3YEY%2FK%2Fk0t%2FsGUCzz6UeTQFehHveP5HsWIpcDT6L0ISjiWCQnV00NurPZZG1AeiS6gqm9DQ8fbSV%2BFGn6IjR3ECFENrJZRNMclg9NOvwQQ1ChGMwn5HjIhV%2FEMq99yvHVGLs5ewvSnTHIiNCfaYLJSol%2BEviU4cYMHY58pJ%2BXMt9LXwjqm8UXAwz7xZzK7Nna87aLFVqSPex2lDArxA%2FP2qp5K9LOrwdtFFkXjCafc1P1S8ngWdR40lIz%2BLGosPPtDd%2FPBjnkJ5WB8e2HKQlynRTwYL72bkEF3CU55szpLcR%2F8neMW7JiiDX24yhYwjGQSQv6x1ZqFj96ko%2BELpsuLAxvecYkGKZAOE9WNQBgEh0PT%2BCT17ZIgvxc2eXXC2DH4v%2FjuTdcxPmVWIILLRM7AWxQEOCqsbHEvnColpctrUTGenVMftfeSLXezBvIzJq%2BWQKfafhoYt8HoN3rQQlw6pKpCptl9bXn3qx%2B0cj9SVy2%2BhbxjLXjt2qRKXyUo%2FhgldcCbJqaTAMzovh2Tn9bK9u3nQtI%2FMriBgQgemLTBCmsYiItYku1cJ7PjIqnEDDSg4nKBjqkAXdl%2BYfrRJxC6AJWtMjftGNluugtf7dOLy4KkyjUC34ZrRzk8%2BgVV5jDdQ4Uk1YJ3lUWEO%2FXQaHoNfRHLOEBDffq1F%2BphNi7yT0qfEZRJpUCnA7%2B3iZWnBqpZVubibflx6tm4CWGP5z%2BMggUbLfxtTAlT9SwzwxH8KAZhOvD6%2By6b3tNdoZY%2F0c9q94H%2B7jxmGl7QYOlqAsD%2FoFWg0LZ1NJzYcJf&X-Amz-Signature=9c04a1ee8b251940eefb62658d9bef58d68fd8b1ab10d12c11260253e0cf90fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5EHPYA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunmKVrH3YGMuQfhvRFm3u%2BP4lDMY8wFDLTAVlcxzNWwIhAOw0qJQ8GiXDGeq9xFaIJSVw7PN%2FhiWN9Pj%2FEhJPKeZqKv8DCHcQABoMNjM3NDIzMTgzODA1Igxt%2BcUayGvwOTJ7aSsq3AOfx5sMifAlj%2FkjgMa86zV1FDuYh5tnPhocnvC%2BGEfQgARsWcoNcqioXGrVRrN3YEY%2FK%2Fk0t%2FsGUCzz6UeTQFehHveP5HsWIpcDT6L0ISjiWCQnV00NurPZZG1AeiS6gqm9DQ8fbSV%2BFGn6IjR3ECFENrJZRNMclg9NOvwQQ1ChGMwn5HjIhV%2FEMq99yvHVGLs5ewvSnTHIiNCfaYLJSol%2BEviU4cYMHY58pJ%2BXMt9LXwjqm8UXAwz7xZzK7Nna87aLFVqSPex2lDArxA%2FP2qp5K9LOrwdtFFkXjCafc1P1S8ngWdR40lIz%2BLGosPPtDd%2FPBjnkJ5WB8e2HKQlynRTwYL72bkEF3CU55szpLcR%2F8neMW7JiiDX24yhYwjGQSQv6x1ZqFj96ko%2BELpsuLAxvecYkGKZAOE9WNQBgEh0PT%2BCT17ZIgvxc2eXXC2DH4v%2FjuTdcxPmVWIILLRM7AWxQEOCqsbHEvnColpctrUTGenVMftfeSLXezBvIzJq%2BWQKfafhoYt8HoN3rQQlw6pKpCptl9bXn3qx%2B0cj9SVy2%2BhbxjLXjt2qRKXyUo%2FhgldcCbJqaTAMzovh2Tn9bK9u3nQtI%2FMriBgQgemLTBCmsYiItYku1cJ7PjIqnEDDSg4nKBjqkAXdl%2BYfrRJxC6AJWtMjftGNluugtf7dOLy4KkyjUC34ZrRzk8%2BgVV5jDdQ4Uk1YJ3lUWEO%2FXQaHoNfRHLOEBDffq1F%2BphNi7yT0qfEZRJpUCnA7%2B3iZWnBqpZVubibflx6tm4CWGP5z%2BMggUbLfxtTAlT9SwzwxH8KAZhOvD6%2By6b3tNdoZY%2F0c9q94H%2B7jxmGl7QYOlqAsD%2FoFWg0LZ1NJzYcJf&X-Amz-Signature=64cfde12472bd18ae4d4d926f7ba374fc431d2b268f3d4cf00992fd8cc85e72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

