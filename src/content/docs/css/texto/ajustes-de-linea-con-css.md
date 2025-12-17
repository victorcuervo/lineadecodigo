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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMWXQXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLw2ldKGWz09J8P6IFMQ%2Bd6cxF6KgBQFVa66BDTyG%2BBAiA8GIUUhLlmm1wW%2Bxm32mnvFk0Ouxt0hXkJElD8zOtHlSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMWSyw6OnmaKpY2TBGKtwDf1da0xOuOJU2bkPQu0Yk0Zqlq4XGQ9j929NmVE2CRGlHelbY178wZA9kwsc3GeB2C2wY0QuPULS7m%2FYjvX64DoqSlILQuzy8a8Tw6STzBhm%2Faj7KJG8vNJKz%2FShAwvXCnZUbNuEhr41Ntz88QB4BCNPeYcUx15Gw3cMWEOJdhwVcW8uxJM5yWImqBPeqMmF%2FyjhPTAzih3hnf8KjpYsQvOLAIxGIw3fpHWnhigo%2BW8rRB6SkVJvldY%2BnysKjj%2F8MLlARHf9m3Bfl%2BRoqt6to%2BWEDg8YSGq5sPijrqcg1l2cq5atkgM6HcWUwKAzqJ%2FYTHmVtB6OTuN71zwVhVMYGthfq%2FHZnkAVq75kAiUwgC0%2F8RtzBnbq7OnyDvJ58f%2BABGRMK%2BLeYqcDWe%2F%2BP52GLaWoIpdimK%2BGrHuptp28Oj%2Bv3bUEJuvDi%2BXdahDMEIPJpoml2Lut1lX7Gh95mOftFscLR%2BIJVvUsdJjBzHytXBOIXeFvEyQXwn3Oz5wfwz4Om19T1%2FeG0CrjjYQBuRacejdSM%2BYnHEnVwvuJn%2FSNz0UyKyE3GqcPjtksyJ8OLev3ZCUais47jCQGJc%2FyGtx%2Fqv8lSnPZKW2ZTHkTvnh3ZkL%2BdheRU8ojaGvOKSjEw2I6KygY6pgHzvyMdAjKkmED79jBSaXAhW8c9lYxdFCLqaYIN1n9I7NcWeoLKk0w3yxGw387cjhP7Xz%2BS9JIvsz4qDM5xtMCbHJdCetYqsb3hpX3VkdlAdaj9EqMk4VbU5xRB5spgfbMYZOji8soDBe5Veiq7J2ENHFJwK1%2BBGkg0SDiDmmh9lim96%2Fyx5pe8l2mBQAZYLkCsr9oMjyfAsf5EX0lnj1jUa%2BnL%2BUII&X-Amz-Signature=1d96cbf56763afff461c1ffe2b8c0d4a75f4ada30c6991c1b4fc935d9b6bb5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMWXQXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLw2ldKGWz09J8P6IFMQ%2Bd6cxF6KgBQFVa66BDTyG%2BBAiA8GIUUhLlmm1wW%2Bxm32mnvFk0Ouxt0hXkJElD8zOtHlSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMWSyw6OnmaKpY2TBGKtwDf1da0xOuOJU2bkPQu0Yk0Zqlq4XGQ9j929NmVE2CRGlHelbY178wZA9kwsc3GeB2C2wY0QuPULS7m%2FYjvX64DoqSlILQuzy8a8Tw6STzBhm%2Faj7KJG8vNJKz%2FShAwvXCnZUbNuEhr41Ntz88QB4BCNPeYcUx15Gw3cMWEOJdhwVcW8uxJM5yWImqBPeqMmF%2FyjhPTAzih3hnf8KjpYsQvOLAIxGIw3fpHWnhigo%2BW8rRB6SkVJvldY%2BnysKjj%2F8MLlARHf9m3Bfl%2BRoqt6to%2BWEDg8YSGq5sPijrqcg1l2cq5atkgM6HcWUwKAzqJ%2FYTHmVtB6OTuN71zwVhVMYGthfq%2FHZnkAVq75kAiUwgC0%2F8RtzBnbq7OnyDvJ58f%2BABGRMK%2BLeYqcDWe%2F%2BP52GLaWoIpdimK%2BGrHuptp28Oj%2Bv3bUEJuvDi%2BXdahDMEIPJpoml2Lut1lX7Gh95mOftFscLR%2BIJVvUsdJjBzHytXBOIXeFvEyQXwn3Oz5wfwz4Om19T1%2FeG0CrjjYQBuRacejdSM%2BYnHEnVwvuJn%2FSNz0UyKyE3GqcPjtksyJ8OLev3ZCUais47jCQGJc%2FyGtx%2Fqv8lSnPZKW2ZTHkTvnh3ZkL%2BdheRU8ojaGvOKSjEw2I6KygY6pgHzvyMdAjKkmED79jBSaXAhW8c9lYxdFCLqaYIN1n9I7NcWeoLKk0w3yxGw387cjhP7Xz%2BS9JIvsz4qDM5xtMCbHJdCetYqsb3hpX3VkdlAdaj9EqMk4VbU5xRB5spgfbMYZOji8soDBe5Veiq7J2ENHFJwK1%2BBGkg0SDiDmmh9lim96%2Fyx5pe8l2mBQAZYLkCsr9oMjyfAsf5EX0lnj1jUa%2BnL%2BUII&X-Amz-Signature=8f36f9bebdc63851f1f80d5db42c66381fe1b01390962f0242c8f0b18e78c0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

