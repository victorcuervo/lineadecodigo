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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KY4PHQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkTkBCA%2FAFy428obvnlkZsfbB7fAd7gozyq65rGzRMJAiBympdDVp5l2HdQSKah5soZL3WUxyFqm6MgooJum7snLSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMnWRR%2BsDfq69FY1rAKtwD2rZrbv7GGq853%2BGDubJy57iS09rpFdev1uSPsBWzuocGyokuNsEutOGGa4RUQmHuGnmhntIcJci3wKDEHpL3WW1sdtvUgl7UqeTEPXIYK4wBN%2FFOVX4StPu0op70ghLfWk0%2Frn0%2B1UDNDsHXOQFivp1R9NJn%2Bv4Tl%2FsDyFXHQIWbGCHAAyreCyXrDqP5yhnNSqO18uP532mbyzLBQ0mHHJevR%2BqccoVRXOlHJltEL7omKuPQnCzQKaJ%2Bg3l15E8tUq0cADG9LdjxotkGcx%2F3vDagkbdOiKcKW2tMpoqsxmQdm9Ivbb9o7cNh6kSCxLMQYPjeERSgZj5%2FtxGtQ1xW%2FsbtV%2BXk7FfmKeD41A4ZFMzjs%2FUwivY60OaSv0c41QQANHDsd%2Fde6p8bmiUIlyYfHEgzwr8NPU4cZBIkogWqVPXbbec6NRKlXwBW4ZcNobHATv0u%2B0dgqMvYGUOuhfYKYTcpf%2FYn40NzhR9KOHH%2F%2B3tSubxBZ9zFEqgWnqIhJglLhZMYNiEGKKgklP6gtifQd1ghd2dasWLtp2iAjP0d4kSIQbeognx7JjMYduQfslccN7DI8tyLIeaMKV2Fzf9ESQQUEZO3%2FmZ4bJOk9T5BQ5c6fGU6t%2Fa45vTnn7Ewn%2FuHygY6pgEbjPt8d80C2YKMlvusCdDgyFJ07OeprfNggrYsamaE5jsJAQx%2Fa0Zy4o7UU1AqQQsgGyTJs0xGPZXKIHPoMYPgSCRwtlo8aUXIM2WbTZKN1RUl9EEQWDB0Thmn%2FIagi%2BCxsB0WBBHjaZdkYMfXMbDRZNXR261B4B305MUu2QqLSI6v6yhblffyrZYm9Gt9jKu5ThXUjdt2OXtgfWB7TuUGzfjB1Edi&X-Amz-Signature=c1dc85bebf8016960d39039ea2a0f3a2be6b33413dbb062b9398e7ca4da7f916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KY4PHQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkTkBCA%2FAFy428obvnlkZsfbB7fAd7gozyq65rGzRMJAiBympdDVp5l2HdQSKah5soZL3WUxyFqm6MgooJum7snLSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMnWRR%2BsDfq69FY1rAKtwD2rZrbv7GGq853%2BGDubJy57iS09rpFdev1uSPsBWzuocGyokuNsEutOGGa4RUQmHuGnmhntIcJci3wKDEHpL3WW1sdtvUgl7UqeTEPXIYK4wBN%2FFOVX4StPu0op70ghLfWk0%2Frn0%2B1UDNDsHXOQFivp1R9NJn%2Bv4Tl%2FsDyFXHQIWbGCHAAyreCyXrDqP5yhnNSqO18uP532mbyzLBQ0mHHJevR%2BqccoVRXOlHJltEL7omKuPQnCzQKaJ%2Bg3l15E8tUq0cADG9LdjxotkGcx%2F3vDagkbdOiKcKW2tMpoqsxmQdm9Ivbb9o7cNh6kSCxLMQYPjeERSgZj5%2FtxGtQ1xW%2FsbtV%2BXk7FfmKeD41A4ZFMzjs%2FUwivY60OaSv0c41QQANHDsd%2Fde6p8bmiUIlyYfHEgzwr8NPU4cZBIkogWqVPXbbec6NRKlXwBW4ZcNobHATv0u%2B0dgqMvYGUOuhfYKYTcpf%2FYn40NzhR9KOHH%2F%2B3tSubxBZ9zFEqgWnqIhJglLhZMYNiEGKKgklP6gtifQd1ghd2dasWLtp2iAjP0d4kSIQbeognx7JjMYduQfslccN7DI8tyLIeaMKV2Fzf9ESQQUEZO3%2FmZ4bJOk9T5BQ5c6fGU6t%2Fa45vTnn7Ewn%2FuHygY6pgEbjPt8d80C2YKMlvusCdDgyFJ07OeprfNggrYsamaE5jsJAQx%2Fa0Zy4o7UU1AqQQsgGyTJs0xGPZXKIHPoMYPgSCRwtlo8aUXIM2WbTZKN1RUl9EEQWDB0Thmn%2FIagi%2BCxsB0WBBHjaZdkYMfXMbDRZNXR261B4B305MUu2QqLSI6v6yhblffyrZYm9Gt9jKu5ThXUjdt2OXtgfWB7TuUGzfjB1Edi&X-Amz-Signature=4afb7ad318119e3f8c55a9db0276f349e0e24b49b05be22a7e208627aa395566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

