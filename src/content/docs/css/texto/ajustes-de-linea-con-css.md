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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCZKCV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc%2BMwVjEFqcGxk0Vlaridm9r4afRrjwJh7riyYYHaVfwIgJjv0t0lZB%2FN8cXpURt1FV16xtfe1e1S71Cx9COJpEcEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDhq%2BOBdnttkDOAZACrcA8ybr9uagV35lhFgW1jj%2BB9i9W4oHi5u6gE5BBRe7IRmBbt5y0nXKy82U4Zbf1OKrJ%2BhUEQEflbR1mP%2BzVereXaAnIfVOKRKRlXhRR3u6zGDcJ3bOTItV6pdhxX5qGs2sELv7gtC%2BEGbFv9nFhRFERdBb6lhIUsfHA3e1VN62XMIeVOmpiFF%2FkTiYBReMuTZ%2BZBJCFH%2ByOmV1bw65P4XK5M4qgIXxEdxQfKDy27YSdVBh12UYmMQYwkmx5ZC8tLnvkag8%2FNmvixBNHeZC6youIxJ%2FEKAMddDt%2Fuo66jpVRkiU0SladiIOFpXNJ2aPe313bJ9jB81b1QXqcDAWy%2FIva4LEZUh4JRoMx1DHji9c8EG2iu0k%2FHeLxW%2Fvu9Fg%2BSiP5nmmTa00B9w9kIfXdM4NUgBNVLhzmwNvo7KJJQqMVzueeWuxctwdTt%2Byz8nz5EA6X5rZtDYtHLTwymaIlaGUOJv4aNtt%2BVigng%2Bxg8MbiCEgL70%2BaGfWvI88FZ%2FGddpSba3dp60s8JKXa87i4OACq1pjdzleX5%2Fz2StSYOOZ%2B4cqg5XdEHVZIaewW5yeN5fc2vyLupN4Z7EW2PAs7RIwP8iSHkkiXJGzmUTJszVbH32vcKZXyBhipVovWI1MNDGisoGOqUBIABBPYj62wLIS55jAwKTY%2BEYhONXKkG76OiZnEJXfud6MbSUVdMjL%2Bd%2BL89XSMP%2F4maqhuB3bz%2F5%2Bqr0FGV9lgAjsl9t8wu9xOlX3vDvlIBSUV74ZKtJyPn12%2FjagiMr7qgVkbb3xpPTKrn0bs0z%2F5c0awB3wo2I2R90zXqcWnGTAoP0KgRPRSlHILaoBBQXCGiLTnahQo7F3cYe30JGc%2BkIRCAa&X-Amz-Signature=1278dc7acc1de5cb083a4f2f8de5cf97a8851c9565c33a5307499dc2f72ae2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCZKCV2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc%2BMwVjEFqcGxk0Vlaridm9r4afRrjwJh7riyYYHaVfwIgJjv0t0lZB%2FN8cXpURt1FV16xtfe1e1S71Cx9COJpEcEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDhq%2BOBdnttkDOAZACrcA8ybr9uagV35lhFgW1jj%2BB9i9W4oHi5u6gE5BBRe7IRmBbt5y0nXKy82U4Zbf1OKrJ%2BhUEQEflbR1mP%2BzVereXaAnIfVOKRKRlXhRR3u6zGDcJ3bOTItV6pdhxX5qGs2sELv7gtC%2BEGbFv9nFhRFERdBb6lhIUsfHA3e1VN62XMIeVOmpiFF%2FkTiYBReMuTZ%2BZBJCFH%2ByOmV1bw65P4XK5M4qgIXxEdxQfKDy27YSdVBh12UYmMQYwkmx5ZC8tLnvkag8%2FNmvixBNHeZC6youIxJ%2FEKAMddDt%2Fuo66jpVRkiU0SladiIOFpXNJ2aPe313bJ9jB81b1QXqcDAWy%2FIva4LEZUh4JRoMx1DHji9c8EG2iu0k%2FHeLxW%2Fvu9Fg%2BSiP5nmmTa00B9w9kIfXdM4NUgBNVLhzmwNvo7KJJQqMVzueeWuxctwdTt%2Byz8nz5EA6X5rZtDYtHLTwymaIlaGUOJv4aNtt%2BVigng%2Bxg8MbiCEgL70%2BaGfWvI88FZ%2FGddpSba3dp60s8JKXa87i4OACq1pjdzleX5%2Fz2StSYOOZ%2B4cqg5XdEHVZIaewW5yeN5fc2vyLupN4Z7EW2PAs7RIwP8iSHkkiXJGzmUTJszVbH32vcKZXyBhipVovWI1MNDGisoGOqUBIABBPYj62wLIS55jAwKTY%2BEYhONXKkG76OiZnEJXfud6MbSUVdMjL%2Bd%2BL89XSMP%2F4maqhuB3bz%2F5%2Bqr0FGV9lgAjsl9t8wu9xOlX3vDvlIBSUV74ZKtJyPn12%2FjagiMr7qgVkbb3xpPTKrn0bs0z%2F5c0awB3wo2I2R90zXqcWnGTAoP0KgRPRSlHILaoBBQXCGiLTnahQo7F3cYe30JGc%2BkIRCAa&X-Amz-Signature=22f4cb627889a32212e3e732952406d944db1f01e17de74f849ac6b814173e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

