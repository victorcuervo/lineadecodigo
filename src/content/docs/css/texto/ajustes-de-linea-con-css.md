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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6GMACE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbd6IM1XAR4qEL2B%2FaCC%2FVTeVomA%2BD9g9s5hAQR6%2BoTAiEA%2BIRhcIZZoZBxnbMxydE14N30hg8yCxzqPo3E08MHodkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFY8a9op7qJ77RJOLCrcAzt5GuEmta%2FXjIGoVXjaLkfqCymP1QUMLwq819RIAzoEHnyrdeHRIdwOEAMID670EIzqTN7IJlZaLQlGt1InAWORWhnJpapp49mz1VlvL1xCvoQm3Ww3D2gzsRMt2aHrJ1gQ1ejZkBE15cGtjUP1q1yLwy3nXbP%2BC%2BlDMlfX%2Fu4tX2kkt7jk%2FTzSUJH0tloA13LwJ9ZmWusf%2BiCf3cjWasAH%2FuDTHvyQ8AExCrHvsojwtJ8%2FCq3L5VG%2BG%2BXWhktif5PGC6QXqapbL3nJQyv%2F%2BUfxTewWy3fDsftLb6rvR1%2FJOHeEAAp0QbwySvYee84UEqvECW%2FaEY5tA2S8o63xmhD%2B8qB1NDt9U9DqFruLkf2cFOGvnskpziwkmkVfyjzVTj7hbSJcia2XoImQ2insysBt5TncGGAXyRvZnG1H6IPw6HXAvjhUX3HZhHdU34e9POKVgubyIScOkC37SShYdWOGq0lEzIF6hGPKok%2Ff%2BAzwdS47oxZ79fRcKhYf4S%2FB5to%2F0snxSM5gcw8G5sGoCfhGr22V5WfFxZ5qkL6lLlPHziUQw0MP4SGmlPoEJk1MV8RCgFNQ7n%2FB%2Bqwpdr3MY0zK43vQYGJ%2BJ1f95xL23Z4G%2FKWFsRwcCg%2F%2BvvE2MNv6h8oGOqUBo99dGx90xyhGE1t3RqPwdYU9vksjM3M7rH3QiWww%2B2DsBNkPB8KGRZIZStDbsXJh6XKdenuyfmYDiLZBdFe9U0WR%2BG2fyJDhy%2FZMOApwVbbTbSg7MlRDWSuQ4lubFUSQaZZ2wiHWVbbMh3QRT1%2BHVpEoZTVrk759uYsmT2d3nPhZBbeo8FXT%2Bx7Wgh9rfpK74%2B567bCGT%2FNs6WipVNBSkw%2Fv%2B21O&X-Amz-Signature=bee01703a74cd0a73306d12bf3769509927c0f18fc5403607801ee86d5dd3c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6GMACE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbd6IM1XAR4qEL2B%2FaCC%2FVTeVomA%2BD9g9s5hAQR6%2BoTAiEA%2BIRhcIZZoZBxnbMxydE14N30hg8yCxzqPo3E08MHodkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFY8a9op7qJ77RJOLCrcAzt5GuEmta%2FXjIGoVXjaLkfqCymP1QUMLwq819RIAzoEHnyrdeHRIdwOEAMID670EIzqTN7IJlZaLQlGt1InAWORWhnJpapp49mz1VlvL1xCvoQm3Ww3D2gzsRMt2aHrJ1gQ1ejZkBE15cGtjUP1q1yLwy3nXbP%2BC%2BlDMlfX%2Fu4tX2kkt7jk%2FTzSUJH0tloA13LwJ9ZmWusf%2BiCf3cjWasAH%2FuDTHvyQ8AExCrHvsojwtJ8%2FCq3L5VG%2BG%2BXWhktif5PGC6QXqapbL3nJQyv%2F%2BUfxTewWy3fDsftLb6rvR1%2FJOHeEAAp0QbwySvYee84UEqvECW%2FaEY5tA2S8o63xmhD%2B8qB1NDt9U9DqFruLkf2cFOGvnskpziwkmkVfyjzVTj7hbSJcia2XoImQ2insysBt5TncGGAXyRvZnG1H6IPw6HXAvjhUX3HZhHdU34e9POKVgubyIScOkC37SShYdWOGq0lEzIF6hGPKok%2Ff%2BAzwdS47oxZ79fRcKhYf4S%2FB5to%2F0snxSM5gcw8G5sGoCfhGr22V5WfFxZ5qkL6lLlPHziUQw0MP4SGmlPoEJk1MV8RCgFNQ7n%2FB%2Bqwpdr3MY0zK43vQYGJ%2BJ1f95xL23Z4G%2FKWFsRwcCg%2F%2BvvE2MNv6h8oGOqUBo99dGx90xyhGE1t3RqPwdYU9vksjM3M7rH3QiWww%2B2DsBNkPB8KGRZIZStDbsXJh6XKdenuyfmYDiLZBdFe9U0WR%2BG2fyJDhy%2FZMOApwVbbTbSg7MlRDWSuQ4lubFUSQaZZ2wiHWVbbMh3QRT1%2BHVpEoZTVrk759uYsmT2d3nPhZBbeo8FXT%2Bx7Wgh9rfpK74%2B567bCGT%2FNs6WipVNBSkw%2Fv%2B21O&X-Amz-Signature=b10f22374bc4fa254a0a313dfd89407447acc75f91f78f608a5361079e7043ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

