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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H4FJC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKPyaX1oX7oMBlGhzYn%2F6gtQdleJn%2BKx5qBIlK4xSFugIhAJ%2BYJCMkRvJSiEZPDS5XPG98OQg1Akk7PggmrQh8EZnCKv8DCHwQABoMNjM3NDIzMTgzODA1Igx5tKCOxMlRhEwairgq3AN50Q6xrc%2Fw0tXVXueyFlAROXXXqfdeY37qAyRKBPPJeADxBcyE9lPeMqeXnnr79FkDUApcD8jRFmVcAUvwwqOAsKwIbnutTCTsKpnIlQ9FGh3xYM%2F%2FPUZ1dDzqR2P5MBPDCIPSCwrtsvJhKaeMqizph4KVIxfk4gye%2FsT0RASiyVV15axShRd%2FM7Af9YNm1xQgGwZzzervoffQN%2FWlKHKn%2FazDC%2Fs4R5SHTrktOEH3y29cCVZ18ZObYkdt8OLzJ06oHNFSBBOT5TJ%2BI6H3nuxaAufMjc%2Byj2DXq4MqHK4NVrkIO4XGN9RAJ7GcmvTsuvi4E21%2B0uWJm7cBWJ2kea6tmslwub%2BxMXPtLTQuYi5p2xMcue2nEzlNTTYRRMVV0Ugk5CF0q0NKiP5GrhzDHYZ979EFh8NuuyaevMwlVXeOl894wGQh%2Bh4J%2B7xWhInfFBZWkuH%2FyptePuiQw9drW81eqToT33Ko8BLUgbVtF3GolQJDp0onAZcWbGd%2FScYYjFimlDJArAyMimeyc6%2B5py%2FLHwJRJ6xo31y0BNx9Fqsxo%2FP6H5kjCbrs%2F5CZvYhIFjI6A3uJqBcmxA4sYsbIQMH7D9lCLVWeH%2FgQEjotWeigx%2BMG5YMEwOvIaYNtnTCcj4rKBjqkAcs3AaTkzloMRnEYylQKen0nkdVznGEx%2F7WWztyaT20o7%2BSyDJi8CrpgsLVXYdGwAlqriCi7cgF%2B08Z9h00QEDA%2FAZCp%2B7yK%2FfOG%2FKFvrmH0SHYHkh12c%2BtJvJH67%2FCa1O8wI%2BMuE3qdo4IsLPnOtBgV%2B8a%2FQ07ZmbgOD33O9flU93dfiH6P9LM0v6dqNgK9rphCXV9Ds5%2F4IZoilm8g%2BmD6MZty&X-Amz-Signature=ad6a18d103392f8f8df348a83fa852c94d8cbcacb86842044f1de05be9606272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2H4FJC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKPyaX1oX7oMBlGhzYn%2F6gtQdleJn%2BKx5qBIlK4xSFugIhAJ%2BYJCMkRvJSiEZPDS5XPG98OQg1Akk7PggmrQh8EZnCKv8DCHwQABoMNjM3NDIzMTgzODA1Igx5tKCOxMlRhEwairgq3AN50Q6xrc%2Fw0tXVXueyFlAROXXXqfdeY37qAyRKBPPJeADxBcyE9lPeMqeXnnr79FkDUApcD8jRFmVcAUvwwqOAsKwIbnutTCTsKpnIlQ9FGh3xYM%2F%2FPUZ1dDzqR2P5MBPDCIPSCwrtsvJhKaeMqizph4KVIxfk4gye%2FsT0RASiyVV15axShRd%2FM7Af9YNm1xQgGwZzzervoffQN%2FWlKHKn%2FazDC%2Fs4R5SHTrktOEH3y29cCVZ18ZObYkdt8OLzJ06oHNFSBBOT5TJ%2BI6H3nuxaAufMjc%2Byj2DXq4MqHK4NVrkIO4XGN9RAJ7GcmvTsuvi4E21%2B0uWJm7cBWJ2kea6tmslwub%2BxMXPtLTQuYi5p2xMcue2nEzlNTTYRRMVV0Ugk5CF0q0NKiP5GrhzDHYZ979EFh8NuuyaevMwlVXeOl894wGQh%2Bh4J%2B7xWhInfFBZWkuH%2FyptePuiQw9drW81eqToT33Ko8BLUgbVtF3GolQJDp0onAZcWbGd%2FScYYjFimlDJArAyMimeyc6%2B5py%2FLHwJRJ6xo31y0BNx9Fqsxo%2FP6H5kjCbrs%2F5CZvYhIFjI6A3uJqBcmxA4sYsbIQMH7D9lCLVWeH%2FgQEjotWeigx%2BMG5YMEwOvIaYNtnTCcj4rKBjqkAcs3AaTkzloMRnEYylQKen0nkdVznGEx%2F7WWztyaT20o7%2BSyDJi8CrpgsLVXYdGwAlqriCi7cgF%2B08Z9h00QEDA%2FAZCp%2B7yK%2FfOG%2FKFvrmH0SHYHkh12c%2BtJvJH67%2FCa1O8wI%2BMuE3qdo4IsLPnOtBgV%2B8a%2FQ07ZmbgOD33O9flU93dfiH6P9LM0v6dqNgK9rphCXV9Ds5%2F4IZoilm8g%2BmD6MZty&X-Amz-Signature=9590158edc71e58be7f189b95ba39664c67edf7cab20d3c12ee8d932606c183a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

