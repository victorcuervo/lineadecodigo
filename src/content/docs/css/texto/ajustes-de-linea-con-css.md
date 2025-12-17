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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAJPORR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4pVEhMjcODDnOYWo72NBHcrmtFRESLEs%2Bj3TRZQhWiwIhAJ6U5E4ox6s2EmNUO%2B3MLO7K6P8gBebq%2F12vbpOcAXLeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1PpHZCteTH3%2FdAsq3AMfy89puxhbUcfHrp46nCYagUMHzyKkavDz76bT73PTJ8zpbUeWkwf221on2%2F6qvAqYWaQXJnIa%2Bbhl8RC93k7zWUyX%2FY8Plj4GaYfBvu5xkbvfOSg3NMK1EeJHNYp%2F0MWt3k2XJ4HADDRidSo2XPzsT3xGLfnHgNjxVmmtnpJ22VYOccYZp4CijkwXwAW%2F0CnjnS1nPrPKGaVEenwenEoBglgja4UnToik1pdnHakx00vnQhHMoeI8Mg9mViuC2%2BkNUmwuggMZB%2FsE81mF19hmpoHISK1%2FJOPwLuHhBSK%2Bdht4Eg2Qj%2FDIVddjV%2FSBopZY1Zy1%2FuXtAZMcfg5reNV3rQH37lw%2Fh7xqmBHEGN5bax2yR9lEnAkVmUFNMMY1XF5IWRNweQB0j25cKUMgkpBxr1r61vdh59fUYILsEW%2F6B%2Bb20sfbTOLPcow%2FQeMy3Dq3WHVwYvpVUfqpi0lLqu7xUr3RTcdbxgu0tmBg%2FvmUCKvhaEETNG4aP%2BrHwadzcYoKu99AXRpVRbM2n7OHsOIdPSdxEW82Vzelf17Z0G8Or3sliA4LJOCeqndc%2FHUFyBM5yhbwol4Ld5OfiOKyWamw3iXB9bdSqpTV7MquT%2FWlu1rbEd1TEia5oEznWTDdoIvKBjqkAfirD%2BrN7hTgpG%2BmwsCUpCbQD0SliAkRxVfrY%2Fns9axe%2FYHVrTpjx0KTwzVUdUSXLp6GymrPn1MPhdXVOcr6ptuNq7sktxMVZMGypNuznjzmX4bKJHjdZE5BM3IE9NP%2Fck2hKKWqbTtrLFKstC%2BtDFooKACk1wZAFUfvQ0HMxrdS5URDDzAZ%2BUyNOLIy4HVcb14UnUbN0wSdCdzvosQgzk2QXkXp&X-Amz-Signature=79ab24177904c6759361bcbd8f9f491fa85bd066ee6b452591afa1fbac554fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QAJPORR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4pVEhMjcODDnOYWo72NBHcrmtFRESLEs%2Bj3TRZQhWiwIhAJ6U5E4ox6s2EmNUO%2B3MLO7K6P8gBebq%2F12vbpOcAXLeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV1PpHZCteTH3%2FdAsq3AMfy89puxhbUcfHrp46nCYagUMHzyKkavDz76bT73PTJ8zpbUeWkwf221on2%2F6qvAqYWaQXJnIa%2Bbhl8RC93k7zWUyX%2FY8Plj4GaYfBvu5xkbvfOSg3NMK1EeJHNYp%2F0MWt3k2XJ4HADDRidSo2XPzsT3xGLfnHgNjxVmmtnpJ22VYOccYZp4CijkwXwAW%2F0CnjnS1nPrPKGaVEenwenEoBglgja4UnToik1pdnHakx00vnQhHMoeI8Mg9mViuC2%2BkNUmwuggMZB%2FsE81mF19hmpoHISK1%2FJOPwLuHhBSK%2Bdht4Eg2Qj%2FDIVddjV%2FSBopZY1Zy1%2FuXtAZMcfg5reNV3rQH37lw%2Fh7xqmBHEGN5bax2yR9lEnAkVmUFNMMY1XF5IWRNweQB0j25cKUMgkpBxr1r61vdh59fUYILsEW%2F6B%2Bb20sfbTOLPcow%2FQeMy3Dq3WHVwYvpVUfqpi0lLqu7xUr3RTcdbxgu0tmBg%2FvmUCKvhaEETNG4aP%2BrHwadzcYoKu99AXRpVRbM2n7OHsOIdPSdxEW82Vzelf17Z0G8Or3sliA4LJOCeqndc%2FHUFyBM5yhbwol4Ld5OfiOKyWamw3iXB9bdSqpTV7MquT%2FWlu1rbEd1TEia5oEznWTDdoIvKBjqkAfirD%2BrN7hTgpG%2BmwsCUpCbQD0SliAkRxVfrY%2Fns9axe%2FYHVrTpjx0KTwzVUdUSXLp6GymrPn1MPhdXVOcr6ptuNq7sktxMVZMGypNuznjzmX4bKJHjdZE5BM3IE9NP%2Fck2hKKWqbTtrLFKstC%2BtDFooKACk1wZAFUfvQ0HMxrdS5URDDzAZ%2BUyNOLIy4HVcb14UnUbN0wSdCdzvosQgzk2QXkXp&X-Amz-Signature=a22ce53d418326a277292ae048e359f3126cf93e080b9dd2ec7d5d53fd139ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

