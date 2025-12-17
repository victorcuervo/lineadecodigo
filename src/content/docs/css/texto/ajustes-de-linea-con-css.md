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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQRTI2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2YSV%2BkgSWn0asM4q7OvVBzL0igL1h1Mdlbk%2FFpyrnAIgI%2FMX2GusCJbSEhJWe1JIBKrsazN9ghbGhPXQM241josq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDhnuXMl7yVojh8XYSrcA7623wkI0emf9kJC4HvtNYaMjPC1FKV5pJTEI61UVe%2BCOzM8xdwKudwrepLjPKgo39G3iLCpV6gRqnwcNcF%2FN%2FxXgf%2F0V6auJg%2FSU7itH3VM8YNXWOb0BBbtzWCBiu17RS3QppEDjc0T9%2BPzf4u2mWG82rLa4I3hqC%2FBVvJE%2F%2F2e%2Bb2b6IVU7B2%2BC268BDQ6nGLZxMfhK%2FE1Z8SmRmHYVeeXDmX%2F2BZuTWD%2F6Tk54G6zlvQ2onu2MwCkOcYTkZQlDD7MHl7kE0Xj86K1jvU%2FlXr%2BjRZYv31iYpSQi3dRjBagzTcf6bz0yRxzns88I%2B0IuAiHqfpyeHwSUiwZqfD6L%2FLFtw07ZghH%2F3uIB9mUIXPlSfOuYh66tafQmMypmdFlkC54TW%2Bp6wazLICncjDWSC0UNaVRvYwncoPIL7FYQaXyJ%2BjbAYb9gtT37JRUj3RqQDLXMZDg91qaC%2BjO%2F1hbVTqlIt%2FCm8PKWz%2BWp02oXwkTtuuydkeBo%2BENv8BhJSs5UFtiwRfm8Lg2XKgu44b8S5lkGJtRtrSrTcrJO2Ks5lwWKMWNxCtc7g48c%2FNVGlLUuObiwRFxZkJYg1uE6J4huH%2FViOBLAfeuUJTPPh8znEqdOO1ZU5vDRdcl%2BqvjMKnhisoGOqUBVmyhOhEoBqe24J990iA7fu7IgbXIPr2yhL%2BANY3crI7tGRjXf%2FGR4YdcK%2Be5D416Ty4yryedoWC3iaH8fHLNHihT5ORqCFKszO3CbpplPqVQe7N%2B5aEsy0SQs4zdQYi%2FJd3n2HO9XUs36s7PAHX5ZdBNZBrCIL5N1jEhWXQgYTEB7kCi8VmyxZD1PWA11OqUaFhhekGmQcEJ52YUA%2BrIe7Ci76PI&X-Amz-Signature=0b20461dc68ccd2154a2d02d3314d1311f09ec61d6ac5545988daa22712b4198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQRTI2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2YSV%2BkgSWn0asM4q7OvVBzL0igL1h1Mdlbk%2FFpyrnAIgI%2FMX2GusCJbSEhJWe1JIBKrsazN9ghbGhPXQM241josq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDhnuXMl7yVojh8XYSrcA7623wkI0emf9kJC4HvtNYaMjPC1FKV5pJTEI61UVe%2BCOzM8xdwKudwrepLjPKgo39G3iLCpV6gRqnwcNcF%2FN%2FxXgf%2F0V6auJg%2FSU7itH3VM8YNXWOb0BBbtzWCBiu17RS3QppEDjc0T9%2BPzf4u2mWG82rLa4I3hqC%2FBVvJE%2F%2F2e%2Bb2b6IVU7B2%2BC268BDQ6nGLZxMfhK%2FE1Z8SmRmHYVeeXDmX%2F2BZuTWD%2F6Tk54G6zlvQ2onu2MwCkOcYTkZQlDD7MHl7kE0Xj86K1jvU%2FlXr%2BjRZYv31iYpSQi3dRjBagzTcf6bz0yRxzns88I%2B0IuAiHqfpyeHwSUiwZqfD6L%2FLFtw07ZghH%2F3uIB9mUIXPlSfOuYh66tafQmMypmdFlkC54TW%2Bp6wazLICncjDWSC0UNaVRvYwncoPIL7FYQaXyJ%2BjbAYb9gtT37JRUj3RqQDLXMZDg91qaC%2BjO%2F1hbVTqlIt%2FCm8PKWz%2BWp02oXwkTtuuydkeBo%2BENv8BhJSs5UFtiwRfm8Lg2XKgu44b8S5lkGJtRtrSrTcrJO2Ks5lwWKMWNxCtc7g48c%2FNVGlLUuObiwRFxZkJYg1uE6J4huH%2FViOBLAfeuUJTPPh8znEqdOO1ZU5vDRdcl%2BqvjMKnhisoGOqUBVmyhOhEoBqe24J990iA7fu7IgbXIPr2yhL%2BANY3crI7tGRjXf%2FGR4YdcK%2Be5D416Ty4yryedoWC3iaH8fHLNHihT5ORqCFKszO3CbpplPqVQe7N%2B5aEsy0SQs4zdQYi%2FJd3n2HO9XUs36s7PAHX5ZdBNZBrCIL5N1jEhWXQgYTEB7kCi8VmyxZD1PWA11OqUaFhhekGmQcEJ52YUA%2BrIe7Ci76PI&X-Amz-Signature=007cbf3cebabb4ba659e5c53b76481bf990250fd0823fe88204cad949fe21ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

