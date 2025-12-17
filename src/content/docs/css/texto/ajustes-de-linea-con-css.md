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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYG4SMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3khAIBOWVgjPC5luUqpC5h%2BxP%2B2KYldjXiFK2h9fgMAiEAj71iJyNh7bXfvEdtwrK3bBxXJxyX19Jwyj0DtiF1UDwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC5RbuZow1jVZp1GtircA4JAtlIPYiJyQJmOiJYNESKy%2FCj1EGBKYfOmvLupdI%2Fa5ZOLYSq%2FvZSBjT59cItM1XvwfNRnevXDHIWHKdXKfMcN27XpM%2B7rgGqjxDM8Un580hHk1h%2FgXGVJSIyi8%2B8%2FFCEGK7ohGV%2BRPSruFLUMKtwLu7im47uMOs2r3Zh6WHev7VSsfeaKq0qSC9K1y3Ul3q8f9k5aY72aLZLaMi5sI8es8i8PukJH5IY4oL63dUieE%2FUbgIRrUSkugq%2BcARbB1w2yL41sy0C%2FQvdPD38%2B5OMkCHqR7cWnpVx9Md6DivvgwC5PoKsPZemcS9ITepjkjtj4f%2FWdR2r3BZqIsKd80un8jE2pgeif0fGrrvfuYLPfcRw8wd1I5K6eRReidGJBefReBjkGqZM2J7%2FnCJPC3ho6k1GBucqHdQBa4zz5Hl0uOTCjF8%2Bs1dy8RbxXZBsPP186QHVRk%2FNosCsby5vthpIu0QEvPC7u66IBeKG0sGoaYWUAbIIvs3B91pciODN6DN1G9AH0gegc%2BjJ1Po%2FYIhTsa6ubSdpSEwwMg2Wfz9Cjs51bypBPuJcwyZUFNJi%2FfmvqyjE1RpBEqutenHS62aPcb0vgW2aTuBHvGSj1eJfjiXZaOrFnoizBkzD5MIffh8oGOqUB460xnYL%2FfKNR%2FkordlO44B2rLKsK7qt547cFlQ%2Bv1GSKs822bdV9Zof9m9SaaaDUOSS7giIb8R%2BBkQ3vNbxsQQYEwqmAbJa5dn4Cf9lvNJ8BA9%2BOnzB83QPn5lHJxOButNE22c8t7XnMVFzUq4q%2FO%2FdOIUelJ8Rqe8bjtgpIkSYU%2FJGVlXBz6L4yUhXf9ClQLhfqSNsssAzdECWZ6Nt%2BdvjJCgZQ&X-Amz-Signature=e020b89bb806b9a3e6f1eab1a9f12d6447807bc98f66b53e679a498f34550560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYG4SMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3khAIBOWVgjPC5luUqpC5h%2BxP%2B2KYldjXiFK2h9fgMAiEAj71iJyNh7bXfvEdtwrK3bBxXJxyX19Jwyj0DtiF1UDwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC5RbuZow1jVZp1GtircA4JAtlIPYiJyQJmOiJYNESKy%2FCj1EGBKYfOmvLupdI%2Fa5ZOLYSq%2FvZSBjT59cItM1XvwfNRnevXDHIWHKdXKfMcN27XpM%2B7rgGqjxDM8Un580hHk1h%2FgXGVJSIyi8%2B8%2FFCEGK7ohGV%2BRPSruFLUMKtwLu7im47uMOs2r3Zh6WHev7VSsfeaKq0qSC9K1y3Ul3q8f9k5aY72aLZLaMi5sI8es8i8PukJH5IY4oL63dUieE%2FUbgIRrUSkugq%2BcARbB1w2yL41sy0C%2FQvdPD38%2B5OMkCHqR7cWnpVx9Md6DivvgwC5PoKsPZemcS9ITepjkjtj4f%2FWdR2r3BZqIsKd80un8jE2pgeif0fGrrvfuYLPfcRw8wd1I5K6eRReidGJBefReBjkGqZM2J7%2FnCJPC3ho6k1GBucqHdQBa4zz5Hl0uOTCjF8%2Bs1dy8RbxXZBsPP186QHVRk%2FNosCsby5vthpIu0QEvPC7u66IBeKG0sGoaYWUAbIIvs3B91pciODN6DN1G9AH0gegc%2BjJ1Po%2FYIhTsa6ubSdpSEwwMg2Wfz9Cjs51bypBPuJcwyZUFNJi%2FfmvqyjE1RpBEqutenHS62aPcb0vgW2aTuBHvGSj1eJfjiXZaOrFnoizBkzD5MIffh8oGOqUB460xnYL%2FfKNR%2FkordlO44B2rLKsK7qt547cFlQ%2Bv1GSKs822bdV9Zof9m9SaaaDUOSS7giIb8R%2BBkQ3vNbxsQQYEwqmAbJa5dn4Cf9lvNJ8BA9%2BOnzB83QPn5lHJxOButNE22c8t7XnMVFzUq4q%2FO%2FdOIUelJ8Rqe8bjtgpIkSYU%2FJGVlXBz6L4yUhXf9ClQLhfqSNsssAzdECWZ6Nt%2BdvjJCgZQ&X-Amz-Signature=0ce331985dc1cfee2aace0cb6f7dbdfd384fb2a8641436e2012014d370be1724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

