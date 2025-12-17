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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTK6POYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWBuaB%2BrZYzcji22OsBvh3gmtOFWfE0heyk44uWC9%2B4AiEApAcNjvJyDVEjUP9wb4L07%2FkBE7DNF%2Bc8KSnFxhnqVRAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANRkbJ7ovPHegCeyrcA7U6Ekwo4wPVcXzH3MZKrECXuABLfYK%2B9EW2yGJx4vFYqbPweDl27wF44lJwmVJJb4acJzdETrDgfcJeIbDi4NnEtwaDKOPDcAU3s5JMMtU69BrmPiWs3e5DAGoQ2tmlo38CTgWUKJRaXXxQAweagJt4jVDgI4UOlKI%2FYcbxs%2BokP7ynykUxe44McUJAAsy5i%2FntqFQlpYFaMYywneGc2cOCEOh2kjg60jqekPeV0avBOi%2BXU02sY6V8r9o0a1tFiItmqNPEPck95Tw0iVS4%2Ftje4isXjzpaXV94GfI4GjqOR8kp9a0TpWUHz2105ZUaPq3frI%2BqIvSr%2FH64qKUNYH1rnwN8sVcfLkZBJ3Bnryh%2BJaIwHfoP44bNsVkOw%2Fq3EBSBLdTC3s6eXtmEKAgco6yHVYfmrcRgBFmkQnhowKFKNzBxjGK2tk8TeJAKI22lL8FoLR1Fk7byXa8YrfIdrD1ROfAPuc%2BuPg5sYHZGAhGto%2B%2B1ZRnZJA6AwOWabPrrY90cqRC22TgT2yWIKhp9tl6nZVqsL3lQNZ6%2BCzLv%2FtZfeyPFsM4YH2Iiifz%2FQ2oGisnF8MOwMxq9zx5krN7wFc%2FP3cBJzeWOWa9N6po9t%2BiolXCCDlwJJesnNTBsMKmgi8oGOqUBep6I6VzKxPGR8aIZlXZvzMhEDKRsPgOAcdfyyYZVOH2ovQZqxoya925C682J0R%2BvcOpslu5snzonUo9aZqGGVJPVC0LVYJsxPdcBQyWk%2BGoQckJhszCWND%2BG59TNxWz4DefObXRumY6BZB56iPbZpE9909eJ3ggl7TWUOicovsJDXQcDwvU6rqZVjosc7zAnrPyuc0dTEiOcfGO1ixLoxgrVsuzS&X-Amz-Signature=71ab0139b569eeedef28e7eba5214cc09ada3c1fa3633de56fd8cfd73cbc1ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTK6POYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWBuaB%2BrZYzcji22OsBvh3gmtOFWfE0heyk44uWC9%2B4AiEApAcNjvJyDVEjUP9wb4L07%2FkBE7DNF%2Bc8KSnFxhnqVRAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKANRkbJ7ovPHegCeyrcA7U6Ekwo4wPVcXzH3MZKrECXuABLfYK%2B9EW2yGJx4vFYqbPweDl27wF44lJwmVJJb4acJzdETrDgfcJeIbDi4NnEtwaDKOPDcAU3s5JMMtU69BrmPiWs3e5DAGoQ2tmlo38CTgWUKJRaXXxQAweagJt4jVDgI4UOlKI%2FYcbxs%2BokP7ynykUxe44McUJAAsy5i%2FntqFQlpYFaMYywneGc2cOCEOh2kjg60jqekPeV0avBOi%2BXU02sY6V8r9o0a1tFiItmqNPEPck95Tw0iVS4%2Ftje4isXjzpaXV94GfI4GjqOR8kp9a0TpWUHz2105ZUaPq3frI%2BqIvSr%2FH64qKUNYH1rnwN8sVcfLkZBJ3Bnryh%2BJaIwHfoP44bNsVkOw%2Fq3EBSBLdTC3s6eXtmEKAgco6yHVYfmrcRgBFmkQnhowKFKNzBxjGK2tk8TeJAKI22lL8FoLR1Fk7byXa8YrfIdrD1ROfAPuc%2BuPg5sYHZGAhGto%2B%2B1ZRnZJA6AwOWabPrrY90cqRC22TgT2yWIKhp9tl6nZVqsL3lQNZ6%2BCzLv%2FtZfeyPFsM4YH2Iiifz%2FQ2oGisnF8MOwMxq9zx5krN7wFc%2FP3cBJzeWOWa9N6po9t%2BiolXCCDlwJJesnNTBsMKmgi8oGOqUBep6I6VzKxPGR8aIZlXZvzMhEDKRsPgOAcdfyyYZVOH2ovQZqxoya925C682J0R%2BvcOpslu5snzonUo9aZqGGVJPVC0LVYJsxPdcBQyWk%2BGoQckJhszCWND%2BG59TNxWz4DefObXRumY6BZB56iPbZpE9909eJ3ggl7TWUOicovsJDXQcDwvU6rqZVjosc7zAnrPyuc0dTEiOcfGO1ixLoxgrVsuzS&X-Amz-Signature=376c06d57d08a8a8d8cae41d1f0c89359b518e1bee2a2a9ed342762c2634bff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

