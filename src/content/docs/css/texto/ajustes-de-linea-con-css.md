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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IMB6WRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq4Y5Ub6ziYI%2FuiylZIkYy2KD2wPsH6%2F8qy3Kunx1BfwIhAP8oaLPxeExB4r5wj2wkSjzOg9SkxFlInxcOICldWJfYKv8DCHMQABoMNjM3NDIzMTgzODA1IgzyCV7HWAzCXX3cDxsq3ANclTQ9EoBtQJPD2qItSzlAKJPIeH%2BaSDh%2BP4KVlt0t1EnkXyE5UVKB%2FnQDZnbzbDLD%2Bes3aAUjXoGZLuLN4cSCoK7YTJL%2F4VVi6qmwxOBmWmO2GyHJsDBqZtX8oPzfg6M%2FH7%2BEDLc1tqnDAlOvwBtzOX7Y733DVajDJ%2BpnY8Ntuk7OcIILQ17SvSzkvV2T7M7Qy%2B6dijUQq7KupRUVQOmRc4CHkQYv%2FNi%2Fcx3bKcxhQpFh1h1ZjWLDUD66UqyZj4wWrMHUwDKv7vwZIcnTyQcDf%2BJ9mkfRpZBr2dwa1QA0tdp%2F9UznVV73II6o9Wuj%2BrMeFkeT%2Bas5lkLeUpcrM5fYaS2OyHwKQu1x1NkPw%2FzhpYfzRBkJspmLqHjwq%2FZ0q%2F1ClkuwQtmHcA6SP9VOwLE7bZJ5YkGafKMtw0k5wASPndZTF3YXhVQmStSgO7JhEGPHQ8txKsrd%2BWweXdOUrhfz7ocCvzBe66gy0MFksZ21ewhO00q1ldDCmD84iYXRwLQQ9y860GVHc6bFuffspRfYTrDR4Kx42ADa8AL6js8DJbwIZoesVncWtLd72wigLBu7u9rPXPFSVgLVhspQPs4NqrKuTvVDVcHMj5p97jHQ%2B8%2BEogG9WLcC4Vz%2BgzC3l4jKBjqkASrKTbPZjjLwZWWkYBxqxL3zeCXlLlzvg%2Bh%2BXNB8aw6cQzEqMmMliTzhzx2dy9I%2B8upoppTMNfaItLSuEyzNwUUq9AnxgJxeSCzQlto1%2BYfE7LLz6ijKA6or23MyFkPrHGutbCcskm7T4Xq3utYYaYalhwSJBhQW2tgQcBGPvPxm7YjeDqUJL%2Bh5hJDvZzON3UgJC1PhGE4ZaKt7Fk8YiibpFATa&X-Amz-Signature=a2a6d03f1476eb5719270526feaad4e65972fe02d7ad1c1ca73a83777dcfe134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IMB6WRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq4Y5Ub6ziYI%2FuiylZIkYy2KD2wPsH6%2F8qy3Kunx1BfwIhAP8oaLPxeExB4r5wj2wkSjzOg9SkxFlInxcOICldWJfYKv8DCHMQABoMNjM3NDIzMTgzODA1IgzyCV7HWAzCXX3cDxsq3ANclTQ9EoBtQJPD2qItSzlAKJPIeH%2BaSDh%2BP4KVlt0t1EnkXyE5UVKB%2FnQDZnbzbDLD%2Bes3aAUjXoGZLuLN4cSCoK7YTJL%2F4VVi6qmwxOBmWmO2GyHJsDBqZtX8oPzfg6M%2FH7%2BEDLc1tqnDAlOvwBtzOX7Y733DVajDJ%2BpnY8Ntuk7OcIILQ17SvSzkvV2T7M7Qy%2B6dijUQq7KupRUVQOmRc4CHkQYv%2FNi%2Fcx3bKcxhQpFh1h1ZjWLDUD66UqyZj4wWrMHUwDKv7vwZIcnTyQcDf%2BJ9mkfRpZBr2dwa1QA0tdp%2F9UznVV73II6o9Wuj%2BrMeFkeT%2Bas5lkLeUpcrM5fYaS2OyHwKQu1x1NkPw%2FzhpYfzRBkJspmLqHjwq%2FZ0q%2F1ClkuwQtmHcA6SP9VOwLE7bZJ5YkGafKMtw0k5wASPndZTF3YXhVQmStSgO7JhEGPHQ8txKsrd%2BWweXdOUrhfz7ocCvzBe66gy0MFksZ21ewhO00q1ldDCmD84iYXRwLQQ9y860GVHc6bFuffspRfYTrDR4Kx42ADa8AL6js8DJbwIZoesVncWtLd72wigLBu7u9rPXPFSVgLVhspQPs4NqrKuTvVDVcHMj5p97jHQ%2B8%2BEogG9WLcC4Vz%2BgzC3l4jKBjqkASrKTbPZjjLwZWWkYBxqxL3zeCXlLlzvg%2Bh%2BXNB8aw6cQzEqMmMliTzhzx2dy9I%2B8upoppTMNfaItLSuEyzNwUUq9AnxgJxeSCzQlto1%2BYfE7LLz6ijKA6or23MyFkPrHGutbCcskm7T4Xq3utYYaYalhwSJBhQW2tgQcBGPvPxm7YjeDqUJL%2Bh5hJDvZzON3UgJC1PhGE4ZaKt7Fk8YiibpFATa&X-Amz-Signature=3796f6d80f52e50d3f1c96b1b1bd9e658b411b11628b42b6b184e2d68a0586e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

