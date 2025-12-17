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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z46W7ZBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW1ctvMgRk2gGTRMwAEAZHE875xIa%2BjDE8W5Ir73ihnwIgGL589gGhnadaE2Jf2460fSYXNrfOJkdCovZYPy%2B%2FC30q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIbJkUAPjRRFrfn64SrcA4FKcuyxV6srzUQafPmse0J8txIkvtmUFnmllBhWgBE8gTVuzN0GwMB%2BnpbuAfC3yc6KUWLixxTscjEINxyk2ogs21%2FBqqiZnNv0fWG8RPcLgKqvEChzx8Gy6uxALN0KoIy6S3U5d250z7Ptze%2BLBGAhkQqz1jHUmsVs7XptT1mKBCSSu4r68hO4wFZq981ecbpYWVAJ98odm6DTM0kGGxdr7Ah02A8NfYpsm0ixcD0YEkV3azL19j1aBCt9262BFbhJPYqsF4HXgK8ne1XRD8kyrFYk8QZs6BX3L0g%2BwPsp6Fj2%2F8oVyhuIgwXVFRaEOg1vyOtr0phI9OEdyo%2ByoiD3KBJlkXdaj%2F8NFBrSt7WBBPb06%2FGCZh04MngYr7S9fNTIbEZCiNjzRZPtQHUz%2FvE4K4aw6Xy40%2FpRv3KaBSckTVz2bMaipy1cbFUe16fj%2BX9VV7Rz4xYNcX02vhR8FiNRdDwSzB5OxiUUeGqxVvrX6eQtJM0fk11uo6xdvbx%2BkhncUkPpzvRJ5EJeF5wvnUemQxsbZysZGykPfNiuJK74KigYZSxgoicjAhEs3ts3ZvHG3o9%2BILW9t6AlYdJOeA4lXcdix6Ve8Qe1slqFhM1YMHLpOCFAE%2FiDH7RmMIu4icoGOqUBK0iYHdI%2BiaTJZEFQP9N3njhtIja2IZeGe5a54ilj7m9i8zmICwacx5EtbC9AHB26wFnJjHOiGwzmiMMei0cVhwwDk4eezKW8NJTQcu9DJNkhuF8rOtMbHURcMaVJcSWoHejCg77rsD8WJqVCCKaSAvKEYas2JfJpP8HRxwokhQGReCYJ581hZHtG%2Fo5kOohDxPFX%2F3sfgs8JaT5pPSQNiFHRHt1j&X-Amz-Signature=4f6ca8614a5aead7cf66d6b1743a0004e9d878d65bf628cff7bf19fd82086e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z46W7ZBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW1ctvMgRk2gGTRMwAEAZHE875xIa%2BjDE8W5Ir73ihnwIgGL589gGhnadaE2Jf2460fSYXNrfOJkdCovZYPy%2B%2FC30q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIbJkUAPjRRFrfn64SrcA4FKcuyxV6srzUQafPmse0J8txIkvtmUFnmllBhWgBE8gTVuzN0GwMB%2BnpbuAfC3yc6KUWLixxTscjEINxyk2ogs21%2FBqqiZnNv0fWG8RPcLgKqvEChzx8Gy6uxALN0KoIy6S3U5d250z7Ptze%2BLBGAhkQqz1jHUmsVs7XptT1mKBCSSu4r68hO4wFZq981ecbpYWVAJ98odm6DTM0kGGxdr7Ah02A8NfYpsm0ixcD0YEkV3azL19j1aBCt9262BFbhJPYqsF4HXgK8ne1XRD8kyrFYk8QZs6BX3L0g%2BwPsp6Fj2%2F8oVyhuIgwXVFRaEOg1vyOtr0phI9OEdyo%2ByoiD3KBJlkXdaj%2F8NFBrSt7WBBPb06%2FGCZh04MngYr7S9fNTIbEZCiNjzRZPtQHUz%2FvE4K4aw6Xy40%2FpRv3KaBSckTVz2bMaipy1cbFUe16fj%2BX9VV7Rz4xYNcX02vhR8FiNRdDwSzB5OxiUUeGqxVvrX6eQtJM0fk11uo6xdvbx%2BkhncUkPpzvRJ5EJeF5wvnUemQxsbZysZGykPfNiuJK74KigYZSxgoicjAhEs3ts3ZvHG3o9%2BILW9t6AlYdJOeA4lXcdix6Ve8Qe1slqFhM1YMHLpOCFAE%2FiDH7RmMIu4icoGOqUBK0iYHdI%2BiaTJZEFQP9N3njhtIja2IZeGe5a54ilj7m9i8zmICwacx5EtbC9AHB26wFnJjHOiGwzmiMMei0cVhwwDk4eezKW8NJTQcu9DJNkhuF8rOtMbHURcMaVJcSWoHejCg77rsD8WJqVCCKaSAvKEYas2JfJpP8HRxwokhQGReCYJ581hZHtG%2Fo5kOohDxPFX%2F3sfgs8JaT5pPSQNiFHRHt1j&X-Amz-Signature=0b2074254698c022aee8dc6b785fb4e2088dc0ca1863b6ebe9e004cbd62bf023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

