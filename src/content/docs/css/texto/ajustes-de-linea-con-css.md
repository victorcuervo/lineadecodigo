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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SFDMQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhFlnJW2OACUKJbX6qUYjCbGrrttOQfrbxWJri81fB6AiBDXJz2CQ8d7YjzxEvWJgnDsqQUMP5sAJq%2F4whnn5qXwCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM5qoZNV%2F%2B7sIHPJzfKtwDOm7Emt3ei706DeY9K7ZZd9urhENDia4ZZ9ep5%2BzQ%2FMsC4H3v%2FhqRV0toGgCHYtSNkd8kCtuHI7BmjAOGBLoU5A3Oua4v19cFpGaD9gDEUuYb4IMXDya%2Fv8RZMdVj1cEM6TDzgJtmTADjD%2FQwaIPl%2B7rYkrvllsAAP4KTyydcjumVnNLAHkNzfIA9K9Yatvkhij2STKYs7Nk%2Ff4COrKN%2FHVZX%2F4MsP%2F9p24vCEDEiljKJG1ymAbGV9IXoln%2BxL85BuIypB7AVjErWPQFUXfawK2cMzhOfOjai8WwrqYt7Xh%2B%2FI%2BS9jT1bwqvgNm4K5f%2BPKzQGzTfMG%2BuQy9KtEjZonOeiCSx98%2F1QOah%2FSaMAaptcUcT3D99OFtKzl%2FUJ%2BrIrQXpb1FYDIRPOGSOtLb%2Ff3LoOpI2RXA95JPbcSdLQj9SpsV6toHw31Yx6FhfgrLGLOw2bWmgTaF7pqfW9ixy71Rln49XQyaIgiBmnVm1MCQoholJrs1sWy76eh901fOhSsRdd5nb4H7JsxIRePaU7ag1mtW1M2c5VNVKeb8kyAQjjJ%2FzgQOr%2BZIqZYomfieLiTpWTPe8RlHQbou4FftB75BvP%2BvY1JDBtODNQbED33GAxku74Ht4kLDH64%2Bow4o6KygY6pgHky6qvamkehKQHsZ4HVua0EuaBBW90eUjbEbRzU7haHwKpeHpq6xrK7z2oWGPMaJCqSbb6PXtJzCSg7P%2Fl9YIRhvdF24ffeZL2GCUhX96%2BXxUGJN1k6nt5PpauOizk8AEfk6sJcA1135Mf8FCFOHABNfhiW9ZXfkyC0L2cw6TetjYSKEhEZ8Q0R2Klf%2BOx1E1srDxqBNOspf4T423Qbxk39dMnHCEQ&X-Amz-Signature=e008241e1ab80f9168da17d5f4f2386f637890bd0396a60409317e9ef7126b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SFDMQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhFlnJW2OACUKJbX6qUYjCbGrrttOQfrbxWJri81fB6AiBDXJz2CQ8d7YjzxEvWJgnDsqQUMP5sAJq%2F4whnn5qXwCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM5qoZNV%2F%2B7sIHPJzfKtwDOm7Emt3ei706DeY9K7ZZd9urhENDia4ZZ9ep5%2BzQ%2FMsC4H3v%2FhqRV0toGgCHYtSNkd8kCtuHI7BmjAOGBLoU5A3Oua4v19cFpGaD9gDEUuYb4IMXDya%2Fv8RZMdVj1cEM6TDzgJtmTADjD%2FQwaIPl%2B7rYkrvllsAAP4KTyydcjumVnNLAHkNzfIA9K9Yatvkhij2STKYs7Nk%2Ff4COrKN%2FHVZX%2F4MsP%2F9p24vCEDEiljKJG1ymAbGV9IXoln%2BxL85BuIypB7AVjErWPQFUXfawK2cMzhOfOjai8WwrqYt7Xh%2B%2FI%2BS9jT1bwqvgNm4K5f%2BPKzQGzTfMG%2BuQy9KtEjZonOeiCSx98%2F1QOah%2FSaMAaptcUcT3D99OFtKzl%2FUJ%2BrIrQXpb1FYDIRPOGSOtLb%2Ff3LoOpI2RXA95JPbcSdLQj9SpsV6toHw31Yx6FhfgrLGLOw2bWmgTaF7pqfW9ixy71Rln49XQyaIgiBmnVm1MCQoholJrs1sWy76eh901fOhSsRdd5nb4H7JsxIRePaU7ag1mtW1M2c5VNVKeb8kyAQjjJ%2FzgQOr%2BZIqZYomfieLiTpWTPe8RlHQbou4FftB75BvP%2BvY1JDBtODNQbED33GAxku74Ht4kLDH64%2Bow4o6KygY6pgHky6qvamkehKQHsZ4HVua0EuaBBW90eUjbEbRzU7haHwKpeHpq6xrK7z2oWGPMaJCqSbb6PXtJzCSg7P%2Fl9YIRhvdF24ffeZL2GCUhX96%2BXxUGJN1k6nt5PpauOizk8AEfk6sJcA1135Mf8FCFOHABNfhiW9ZXfkyC0L2cw6TetjYSKEhEZ8Q0R2Klf%2BOx1E1srDxqBNOspf4T423Qbxk39dMnHCEQ&X-Amz-Signature=a84a07149c09587f8db2ec208665d39ff1c6236dea388817db23d5efcbccf390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

