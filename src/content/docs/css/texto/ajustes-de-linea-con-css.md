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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7QG4HW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq42Esp1YvYHEC2JuaTibnhOiGWgn89c88R%2FQ9iSMnwIhAN%2FBnXztJrvKJo9x1YsqNNv8aPp5%2FCXOt70iN%2B%2FrFOfsKv8DCHkQABoMNjM3NDIzMTgzODA1IgyMffbZ8GrCHRVqQUsq3AMAzWKuIC5P7ppfAJkLC5eYbGzyi80XOhHYKoorP7CyPNiqu%2B9PZY0KixhsY9eBVF2zeHXb84PnctBMJ8YzMSyjjMepk5UzDI42xhC5lOXLNYl8KBXXK%2BEHoQ05n2oGZ%2FeV1LgLzsKASAEOFfxm9PmPClr5h20sI%2B%2B1fl1dy5Sr3LcMv36MHVsmMIYnoy4kzhyeMXeC2XdXBzj7p7dSN%2F9prkhYKFgEiHpdfzRiz%2BzccWHysBSNh24Die8FHFFTkvgEgxlUheZWPJaWU6ZWTORI7wYdS2peHjnU1gZJCES%2BcL1q0dZF47FliMhQlv%2BL92zW8u71RqoJ9KEJtzBXqEeQvrny0uER1lDrQQulvacO4hzzHxdfInCRyLbBla48JlVwZllUWXipwR6kPJyz5hUfu8GnXaU8pFAAlJmvukZQjLwv504sBiRf%2FXjkImgm2Ehlyfk55MGlowMTHWaOOlHHum6eBsU5foyQoj9eWVNKItzi%2Bw6kUB4OKjtSe0Z0Q4hjKLP2oF7KY161PVWFb48PqXWMjbGhnJsyU9i06pGD16DPrm8FUwqSJinxM%2Bd9%2BQQTTujiQ8g7G%2B1uk1gbYqDSrZPuu3yEElVQ%2FtBwMstsKucUnld501rLzD5ytDCVuInKBjqkAVoyphagPMR3E8qLCPGvgVHClB7Wxb7Xt8KSJxvayLIiGQNwZNAQ2wBDYEscFISt8jRJIRVlTC0TatYOX0fvI8pGNPTpEB7COtAZXar3emssrJSkocLJxPLNtbEYdXeyWyOrF21DWq7mvm5ue538AyZXJ3n0BrYBP%2BNqhOLkGilSoamFRmgFAft%2BE4Lj3VxpAPxv7qElQXjVtDnhFkeZ7Ns1QLtd&X-Amz-Signature=3482a29b10b7132dee78f2c51373d88f5de0efbd39274b8194e83b373767c478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7QG4HW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq42Esp1YvYHEC2JuaTibnhOiGWgn89c88R%2FQ9iSMnwIhAN%2FBnXztJrvKJo9x1YsqNNv8aPp5%2FCXOt70iN%2B%2FrFOfsKv8DCHkQABoMNjM3NDIzMTgzODA1IgyMffbZ8GrCHRVqQUsq3AMAzWKuIC5P7ppfAJkLC5eYbGzyi80XOhHYKoorP7CyPNiqu%2B9PZY0KixhsY9eBVF2zeHXb84PnctBMJ8YzMSyjjMepk5UzDI42xhC5lOXLNYl8KBXXK%2BEHoQ05n2oGZ%2FeV1LgLzsKASAEOFfxm9PmPClr5h20sI%2B%2B1fl1dy5Sr3LcMv36MHVsmMIYnoy4kzhyeMXeC2XdXBzj7p7dSN%2F9prkhYKFgEiHpdfzRiz%2BzccWHysBSNh24Die8FHFFTkvgEgxlUheZWPJaWU6ZWTORI7wYdS2peHjnU1gZJCES%2BcL1q0dZF47FliMhQlv%2BL92zW8u71RqoJ9KEJtzBXqEeQvrny0uER1lDrQQulvacO4hzzHxdfInCRyLbBla48JlVwZllUWXipwR6kPJyz5hUfu8GnXaU8pFAAlJmvukZQjLwv504sBiRf%2FXjkImgm2Ehlyfk55MGlowMTHWaOOlHHum6eBsU5foyQoj9eWVNKItzi%2Bw6kUB4OKjtSe0Z0Q4hjKLP2oF7KY161PVWFb48PqXWMjbGhnJsyU9i06pGD16DPrm8FUwqSJinxM%2Bd9%2BQQTTujiQ8g7G%2B1uk1gbYqDSrZPuu3yEElVQ%2FtBwMstsKucUnld501rLzD5ytDCVuInKBjqkAVoyphagPMR3E8qLCPGvgVHClB7Wxb7Xt8KSJxvayLIiGQNwZNAQ2wBDYEscFISt8jRJIRVlTC0TatYOX0fvI8pGNPTpEB7COtAZXar3emssrJSkocLJxPLNtbEYdXeyWyOrF21DWq7mvm5ue538AyZXJ3n0BrYBP%2BNqhOLkGilSoamFRmgFAft%2BE4Lj3VxpAPxv7qElQXjVtDnhFkeZ7Ns1QLtd&X-Amz-Signature=6411daeb49b046569cbaade6aacec51a05294cc808fff1f09b0f0236d2e96d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

