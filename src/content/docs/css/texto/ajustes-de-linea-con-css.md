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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ALY23Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3D7VsjDJowE91xelvIRYtrSCezHAf%2Bfw0JqdCCFmz7QIhAOV4sHPqc8RfAMay4FnFEVDShqNE6KBkXEAleRh%2BmgwYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu51xcfexAEyM0J4q3ANTzyFbQXRHzqCEh1MpZyKxwspvmHTKz8bBdrW3OuwTiPmI24KOedUlHJLBEfWfGXTm5bgN%2FxqpUB8k%2F30I5e5Sx7XPId9BYF%2FFtagoIWczTJVtjjV2jPMxim5FS3ujx827Vp9blXb2tCihy2L5wjO01xp061B678swZdgCZxUvVmT26oiFdeiPaMAgbCnWIi9Dq3tUykRbaCtgODMMtO%2FCF8qDpQP%2FdXzsW%2F5TYPie6MFDgyjyz8ijql77nfXAt33igks6xxIvWWDbTs0K6AeFMtec%2F4qL6I2GzMB7Q4sXxNieeqk%2BzhUWvxoDYyfUbXzpWhuLfvMtlyrwy%2FRr8%2FSJoFVFVeTqggXoPegUIqzxHuq5DO8%2Fbe0ZYW388uE9DaU3vteSRBvjSj8lbxWvFO1o9q8OLKyoBcSTM%2FSvIUARGCnBi6yYAmS4buisUnODfEbW0hIDKWNGr2d9AFWDA3yIXcz3QCs7PsCH2Tc5czDvPwkTeIywFxLKHByxUelgDwDnJ0Pk0ebvA8tNtjiV0W4wSNHj03SCKWLcNPN%2FdhnMJmx%2BfXi3uIHbEmch6F6kfx0sc06o2TfOVKSJ7Hi96a64SuCEpUCKgfXTP9qqWXvm8U0dh6fOaZ%2F%2FI4kdJDCzrozKBjqkATELJVvDCn0nycXW%2F2apPt%2B%2BDlFdl7uXpQmoIkpGTN8o1nzF4NB7DbRmpLOcWBDmZtvItU2yDyxElKuo5zGrCQZpbkzlKzDktuWDCWQDhs2Laxa6HyevaK3dRJBJZZx1VabQf0ScCbrbXH3TGc%2B80LX9VtDHFefcfj4wHEonVYTjMv38GNab85tq0L7VzWCV%2FydpK26KP3Du%2By8R8t6IpJz%2BTUoz&X-Amz-Signature=5556924ec415179b62719c59e87aec53c012137bbeaf0a51c74e2c05e22da059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ALY23Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3D7VsjDJowE91xelvIRYtrSCezHAf%2Bfw0JqdCCFmz7QIhAOV4sHPqc8RfAMay4FnFEVDShqNE6KBkXEAleRh%2BmgwYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu51xcfexAEyM0J4q3ANTzyFbQXRHzqCEh1MpZyKxwspvmHTKz8bBdrW3OuwTiPmI24KOedUlHJLBEfWfGXTm5bgN%2FxqpUB8k%2F30I5e5Sx7XPId9BYF%2FFtagoIWczTJVtjjV2jPMxim5FS3ujx827Vp9blXb2tCihy2L5wjO01xp061B678swZdgCZxUvVmT26oiFdeiPaMAgbCnWIi9Dq3tUykRbaCtgODMMtO%2FCF8qDpQP%2FdXzsW%2F5TYPie6MFDgyjyz8ijql77nfXAt33igks6xxIvWWDbTs0K6AeFMtec%2F4qL6I2GzMB7Q4sXxNieeqk%2BzhUWvxoDYyfUbXzpWhuLfvMtlyrwy%2FRr8%2FSJoFVFVeTqggXoPegUIqzxHuq5DO8%2Fbe0ZYW388uE9DaU3vteSRBvjSj8lbxWvFO1o9q8OLKyoBcSTM%2FSvIUARGCnBi6yYAmS4buisUnODfEbW0hIDKWNGr2d9AFWDA3yIXcz3QCs7PsCH2Tc5czDvPwkTeIywFxLKHByxUelgDwDnJ0Pk0ebvA8tNtjiV0W4wSNHj03SCKWLcNPN%2FdhnMJmx%2BfXi3uIHbEmch6F6kfx0sc06o2TfOVKSJ7Hi96a64SuCEpUCKgfXTP9qqWXvm8U0dh6fOaZ%2F%2FI4kdJDCzrozKBjqkATELJVvDCn0nycXW%2F2apPt%2B%2BDlFdl7uXpQmoIkpGTN8o1nzF4NB7DbRmpLOcWBDmZtvItU2yDyxElKuo5zGrCQZpbkzlKzDktuWDCWQDhs2Laxa6HyevaK3dRJBJZZx1VabQf0ScCbrbXH3TGc%2B80LX9VtDHFefcfj4wHEonVYTjMv38GNab85tq0L7VzWCV%2FydpK26KP3Du%2By8R8t6IpJz%2BTUoz&X-Amz-Signature=11e48d39b277c0676bbae41dc38544567a16a8055fc472564de27ac162e94b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

