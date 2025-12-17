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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXGWZXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTiEBF79CgPPP8dVxJK%2FLCzPwNJ%2BqOlSt3B9B1KnNfbQIgbgNJctne8UIxuPWqIakUUrabG%2Fd4qoOHSb5s5rzUAksq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDApxyQtuFAjJPHn4vircAwtqMl6NYSLRnWuu3EJHQsbxXacLW1YudkzFYkugsgIsZuP3YsYLEoX%2F5biifViduvJy9tEsovT9%2F%2BjEJ2UJ5%2BeLTs3JScza6lbCZaTiffC%2BurE7E3BCSIF1b8uH936vc7qQXApHo2wFLLP%2F%2BAxcX61kWDptJDhqn65PJHNyd3IHSrUATU4jsiwFzqtdg%2B4RBeAz0mwgLpt1yj%2FxVKiGqVcY6cz%2FDRld%2FLCHiLzbDeN8hLp7XOjj1efW8TSpmhz%2FRqhV1r3Iz%2FPpx9TKiOkRkpYOIyWKmuY4goyv8J1D8Ysnr4wOSI1AmclJHqfCu0Ojiw0kVMoLyY4LWKd3pb1Oe3GJBTLcY04OgGyf4txVoFyQdz6cNC6V42gWH7LqSeZC0GMAOYJuWlOXJjEgLn%2BNr60b8oqhakDa%2BHzpZR3uBBW4I508qrgofFqfz72UCbPJYFVjrp3kM7YgNUOeWbktv%2BJc04rUxXFiMw%2FQy9cUDtUGDoKMdiT2b3hwpghINYCcAak4lTls6EdRbtHtI%2Fpwyi%2BRui8yGXQpwSqjUtLhvY56cc3Dj7BMjVHvyx2IEh%2FhhcNG8UumkNI8U7I0wOPH8xx4aDAf7qYylL0pTcziBV4AAVZhnvyfTUwPg%2BfMMPeCicoGOqUBgLveePlJd7VQqJQY7qrNc18s8VIWkv%2B%2FyA3Bz43zoT%2B60duCsIQuqMWrvqTXHQbMQ6m8McDU0PMA9JwQH5cpmlYhrnb9amA5CvMeo6efwMSKSbPPAjsDfxkjOx%2FVST%2FUgHP92TXorofqw3R%2B5AbmTvxEEeSbGW1TJrm%2FfZxIrn28a6WfzhC%2BzwrtNpodWQVBn3RY3v2YYdrCXdHnptiDBWgfCzCq&X-Amz-Signature=bd38782aee7aa405e217bba16f9874cc31e1e281927db35e615887983e5c320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXGWZXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTiEBF79CgPPP8dVxJK%2FLCzPwNJ%2BqOlSt3B9B1KnNfbQIgbgNJctne8UIxuPWqIakUUrabG%2Fd4qoOHSb5s5rzUAksq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDApxyQtuFAjJPHn4vircAwtqMl6NYSLRnWuu3EJHQsbxXacLW1YudkzFYkugsgIsZuP3YsYLEoX%2F5biifViduvJy9tEsovT9%2F%2BjEJ2UJ5%2BeLTs3JScza6lbCZaTiffC%2BurE7E3BCSIF1b8uH936vc7qQXApHo2wFLLP%2F%2BAxcX61kWDptJDhqn65PJHNyd3IHSrUATU4jsiwFzqtdg%2B4RBeAz0mwgLpt1yj%2FxVKiGqVcY6cz%2FDRld%2FLCHiLzbDeN8hLp7XOjj1efW8TSpmhz%2FRqhV1r3Iz%2FPpx9TKiOkRkpYOIyWKmuY4goyv8J1D8Ysnr4wOSI1AmclJHqfCu0Ojiw0kVMoLyY4LWKd3pb1Oe3GJBTLcY04OgGyf4txVoFyQdz6cNC6V42gWH7LqSeZC0GMAOYJuWlOXJjEgLn%2BNr60b8oqhakDa%2BHzpZR3uBBW4I508qrgofFqfz72UCbPJYFVjrp3kM7YgNUOeWbktv%2BJc04rUxXFiMw%2FQy9cUDtUGDoKMdiT2b3hwpghINYCcAak4lTls6EdRbtHtI%2Fpwyi%2BRui8yGXQpwSqjUtLhvY56cc3Dj7BMjVHvyx2IEh%2FhhcNG8UumkNI8U7I0wOPH8xx4aDAf7qYylL0pTcziBV4AAVZhnvyfTUwPg%2BfMMPeCicoGOqUBgLveePlJd7VQqJQY7qrNc18s8VIWkv%2B%2FyA3Bz43zoT%2B60duCsIQuqMWrvqTXHQbMQ6m8McDU0PMA9JwQH5cpmlYhrnb9amA5CvMeo6efwMSKSbPPAjsDfxkjOx%2FVST%2FUgHP92TXorofqw3R%2B5AbmTvxEEeSbGW1TJrm%2FfZxIrn28a6WfzhC%2BzwrtNpodWQVBn3RY3v2YYdrCXdHnptiDBWgfCzCq&X-Amz-Signature=807f8f7c2120384b710974d6e4a08bad8100c3dc180fcc6446ceec627433761e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

