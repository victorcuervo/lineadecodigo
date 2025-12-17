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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYLKXEZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBZzG9HoOOc8nXgq%2BQV8OUz3S3kMuOnF19XQy%2BgpMpNAiEA5ppImZwnHbl8OWPzU7DkYIJsNIaFgJloUsKTRE367AUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOl4RY7hBNE2GW93FyrcA6P2scwerJdzkX45OIAaD1WDcC6U5mAtYNO4543kpQY2CHFjmzdZzl13kpywEPUAC%2FQbvYy8aDJNEgKAPd2oe1SYp%2FI0FkZkV5YM90NyK2%2BMe1JV%2BFRhSuGlByMk5wtgOzzUDainbdsfsd%2FdU9hMratbkGGEUD9CGXokfCdtCS8W8xhG4sd1OMP6nCa8lJgkTKjdfmEaMjMoG8tR6Yvru3JO6BYzquwEVESucTRtI7Ee87K6%2BKLqyPHCexDdCxRhOWlelOfhF3GXt0BCml6PftbuODsofrh%2BY9RCtYWShkJfP%2F1HG5DnQ6cgHL0JsWn4lzEuOnMFdGufSXwIjbfoWYiQHRDlUAMNuIn0n6byWttFwX0bJcCd%2BmBf7D31GdEcCB6VMbS%2BFnZQbe%2B4E%2BxNYD61CdDoMAsLlNib6hg0bL%2F%2F%2BigQdBN9Pvl2Zmy83jCvjyJL7Kw3%2FBTIDb%2FX757Izbf1xd4%2FhbphrMIkydjOFPARJPhyA8pTVPo022991ViWYuGr5G7DoZNcoxgoGNPh4LHVUOFfvlOmw%2B8o3vp%2BVKyIi8YsrOt772TMLke%2BNlWE%2FUAmoTpK6UYFnhUIYQTDrfPXcJ9CACYHI6dgYBY4UUZcIxhC96OkQ5dCKZkLMMudicoGOqUBziHdtnRtZxPoJR%2FY1UsYOwuKf6pLFV9FKo2hcVSx4YCRym0byWZgyubHNtLFOTRcaTOP6%2BRZkafXC2nccBWbTY2OXW8nMFmGGK%2FAgE1em7uwkcK2II8wNyBEJ9S1UXTyiPknLLsbQu%2FFy9ZWjS0zqb9MZLJnKN3Cjke0lOcU2OMpc4mVhW6sdypjRD48uL5x6coYiJp0ziVm3KQnzsXSiIkboikR&X-Amz-Signature=693c2d6f5b01e4edd479988dc01c913ceb605bbf63a14c2e14d4cbc197e71672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYLKXEZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBZzG9HoOOc8nXgq%2BQV8OUz3S3kMuOnF19XQy%2BgpMpNAiEA5ppImZwnHbl8OWPzU7DkYIJsNIaFgJloUsKTRE367AUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOl4RY7hBNE2GW93FyrcA6P2scwerJdzkX45OIAaD1WDcC6U5mAtYNO4543kpQY2CHFjmzdZzl13kpywEPUAC%2FQbvYy8aDJNEgKAPd2oe1SYp%2FI0FkZkV5YM90NyK2%2BMe1JV%2BFRhSuGlByMk5wtgOzzUDainbdsfsd%2FdU9hMratbkGGEUD9CGXokfCdtCS8W8xhG4sd1OMP6nCa8lJgkTKjdfmEaMjMoG8tR6Yvru3JO6BYzquwEVESucTRtI7Ee87K6%2BKLqyPHCexDdCxRhOWlelOfhF3GXt0BCml6PftbuODsofrh%2BY9RCtYWShkJfP%2F1HG5DnQ6cgHL0JsWn4lzEuOnMFdGufSXwIjbfoWYiQHRDlUAMNuIn0n6byWttFwX0bJcCd%2BmBf7D31GdEcCB6VMbS%2BFnZQbe%2B4E%2BxNYD61CdDoMAsLlNib6hg0bL%2F%2F%2BigQdBN9Pvl2Zmy83jCvjyJL7Kw3%2FBTIDb%2FX757Izbf1xd4%2FhbphrMIkydjOFPARJPhyA8pTVPo022991ViWYuGr5G7DoZNcoxgoGNPh4LHVUOFfvlOmw%2B8o3vp%2BVKyIi8YsrOt772TMLke%2BNlWE%2FUAmoTpK6UYFnhUIYQTDrfPXcJ9CACYHI6dgYBY4UUZcIxhC96OkQ5dCKZkLMMudicoGOqUBziHdtnRtZxPoJR%2FY1UsYOwuKf6pLFV9FKo2hcVSx4YCRym0byWZgyubHNtLFOTRcaTOP6%2BRZkafXC2nccBWbTY2OXW8nMFmGGK%2FAgE1em7uwkcK2II8wNyBEJ9S1UXTyiPknLLsbQu%2FFy9ZWjS0zqb9MZLJnKN3Cjke0lOcU2OMpc4mVhW6sdypjRD48uL5x6coYiJp0ziVm3KQnzsXSiIkboikR&X-Amz-Signature=eccce45aae121ff6102fdbcc028894803fd987d41b55950389ed6053149bbe3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

