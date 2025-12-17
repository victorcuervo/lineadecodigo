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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBMLK6G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFPJiq9%2F4xeqkBwaH94iuE7amr3b49KY2daBpSHtYOgIgBlGlgr0NT1%2FEuPC27MgHjQUGKvW%2B3D2Lohie7givtQUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKNelCA5oqNonKSywCrcA92sDpHq4%2B1gddnUcC6HkDiu0nlngYy%2FSARrSBNEzKcTrTOVqp1mEuCASPb8SdU31QJ9aOrER1WmWzBVKxtHcYtCHwXHdG%2FThAkAa9kdEhx560CxwSYrVQnswOacFO6%2B0lfMdF7RSpr5th1pzAsqWzbMmm0kMXVxwg%2BB7X7JkfbCq99G%2Fr4owruKNxlKOekWdoqvu8wSzAxJ3YmA0KgpZzg%2FMVA5yF1oshj6mqreuG8VsnNr3uPHRk%2BuS2bzGe8ixVmBS%2Fs2r0sqpkB5Q2rv%2BiGNvX9h34feaRnEEejMptH5BKduWLuSpjkzfYFyz5bZB8nu4qWlmu769Ftqs9Sh%2FyyQblm2vru1CgO%2Ffe9kd0PokKNE%2FQfTf1Yej3aOCR0p5nj8XRr4urkRzW0E9N%2BXWEo8%2FGmNjJagDfFSR1%2Bid70ticOI65MMpvwp%2FPNYWRU%2F7vNpmKrvtDXeeAcQfSLDlGp2MI9ffrgiavN8EraDG7cJyYeV8brVFRjaz1ly4RDLZ%2Bo2ZUF7n8MM8CbxpJCOBUEKV1zwneb0O2NiT9z8lYrO8KvEy75IUosjyeSxyPk6b2aSm%2FCyPuusRBOyWpM5cbPjJEu1nqsMcuAWLGL%2BHQ0snMzqqpER8yJ2NL1wMJ7piMoGOqUB8ycrHRRF%2F%2F0T87CQmN3b65E3zdGE%2BlxldkEDgEoOf0fF2z626vomeH%2FRy4AL96J1EiXJAoLJy6K1%2Fv%2FgyfWPK4Q9ctrhaLL7Jo97BRL4Hsi%2FlPtHUc9LgmKwLI5ZwUo4DAOSR0R%2Fn2UCWqqJtB%2BvPE6HoNA%2Fu4vjGQ6LL2cDQJn62nYSUgD%2BXFluTt0eUmjiZHFhW4F0GqHA9WkUksoZjvdeMkuM&X-Amz-Signature=3175fa08fe37f04a656a8012849c464385a1ac757f932f340ffc319b9b063690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DBMLK6G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdFPJiq9%2F4xeqkBwaH94iuE7amr3b49KY2daBpSHtYOgIgBlGlgr0NT1%2FEuPC27MgHjQUGKvW%2B3D2Lohie7givtQUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKNelCA5oqNonKSywCrcA92sDpHq4%2B1gddnUcC6HkDiu0nlngYy%2FSARrSBNEzKcTrTOVqp1mEuCASPb8SdU31QJ9aOrER1WmWzBVKxtHcYtCHwXHdG%2FThAkAa9kdEhx560CxwSYrVQnswOacFO6%2B0lfMdF7RSpr5th1pzAsqWzbMmm0kMXVxwg%2BB7X7JkfbCq99G%2Fr4owruKNxlKOekWdoqvu8wSzAxJ3YmA0KgpZzg%2FMVA5yF1oshj6mqreuG8VsnNr3uPHRk%2BuS2bzGe8ixVmBS%2Fs2r0sqpkB5Q2rv%2BiGNvX9h34feaRnEEejMptH5BKduWLuSpjkzfYFyz5bZB8nu4qWlmu769Ftqs9Sh%2FyyQblm2vru1CgO%2Ffe9kd0PokKNE%2FQfTf1Yej3aOCR0p5nj8XRr4urkRzW0E9N%2BXWEo8%2FGmNjJagDfFSR1%2Bid70ticOI65MMpvwp%2FPNYWRU%2F7vNpmKrvtDXeeAcQfSLDlGp2MI9ffrgiavN8EraDG7cJyYeV8brVFRjaz1ly4RDLZ%2Bo2ZUF7n8MM8CbxpJCOBUEKV1zwneb0O2NiT9z8lYrO8KvEy75IUosjyeSxyPk6b2aSm%2FCyPuusRBOyWpM5cbPjJEu1nqsMcuAWLGL%2BHQ0snMzqqpER8yJ2NL1wMJ7piMoGOqUB8ycrHRRF%2F%2F0T87CQmN3b65E3zdGE%2BlxldkEDgEoOf0fF2z626vomeH%2FRy4AL96J1EiXJAoLJy6K1%2Fv%2FgyfWPK4Q9ctrhaLL7Jo97BRL4Hsi%2FlPtHUc9LgmKwLI5ZwUo4DAOSR0R%2Fn2UCWqqJtB%2BvPE6HoNA%2Fu4vjGQ6LL2cDQJn62nYSUgD%2BXFluTt0eUmjiZHFhW4F0GqHA9WkUksoZjvdeMkuM&X-Amz-Signature=2dfdd5edfa3029cfad5d49461b4d4a1042466441d284f42a602c15e79bbd276e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

