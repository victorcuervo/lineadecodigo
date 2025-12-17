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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MO7I4BS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl1kE5W2qpifuBYewDAxfFDhvuXsLTO5%2FbMNi9HANkWAiEAua7By292wR9GnP6kDVvjUJX4R%2F0a60Z3%2BPseVjf3J%2Fsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMz08DjudJBSKFtBCSrcA7a%2BHpgpiPx8xEoxkz4tmavULUEFHDRh7701Xqasw%2Bg62Yig6cJE3fyjMLhTckucwDs1FWAvjW%2FbfP1VksZF5vdhZZ6GkEUiILC7%2B838K7e%2BJUVshPbeLdLPTRwhVFkFAevTkKvz3wbzgBXiQlFVwOMPGNf%2BpZJmbygcyXSMXwDTUQOGMV6j5nxRh8tqbF%2B6%2FE6U%2BPlqkC91gNbNrDeV7F9NECG6ZXrkiSOggziq%2FK%2FtxBB2mxlRKsZfmrIkHknbdvBSTW%2FGKHFKHeQJFUrPVY1Zwx3P1y7njk2MOzvKoAvcGE9h7LghcEXQZswp7dhRVNxeE74y644aeJ645DAxeN9YVCgrGZqxR%2F675rBdP7BC%2B4imywLjeAwEihkNIBGu%2FBNVeALREot54qX39ESJgzCGdcpIlDsR1SLCgxQw4UVGynGCiOeeRiOPG0aQUaClgaTA8PTCIhL0zwhVQFueioKHXATg4Jh8vgIYhpy4397o%2BM78sc6ihPR6R9fcdevbTAsawZi9kBi3XI23JW0qGP%2Bb0Cxjx21HJpCZ1aPq6in8jgYfgnOOF49mi8FGiMt0Rb5Hx1w0fOD2DKv5HljkpO91JevmLildpQhG8rNaULC6aU1Hl%2F0SKKn1L7OQMNHGisoGOqUBk4y1Xzts79aefOd2RElNJG%2F406hJOe5XBgIRH2TD%2BlQPm9QLvAIRhF2rgw8JpRfxQn6DqKtQN1FVVpJPPt%2F3j52Iwd%2FdmvKrPJw3LIu8Tv6PCAY6mdfWrtQi7kWZHq58b%2FTOsvEkzv%2FuH2%2B8QND393dMn7g%2FpCzLjOu2eP0smc9qT2SGiEmVDd7D6j3A0uejO22nv7G7wyA33r9pxKaqFNRvrsEx&X-Amz-Signature=365006f28784c20f6f8afa18f18469852927bcf3cf059862eba0d4d0592268c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MO7I4BS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl1kE5W2qpifuBYewDAxfFDhvuXsLTO5%2FbMNi9HANkWAiEAua7By292wR9GnP6kDVvjUJX4R%2F0a60Z3%2BPseVjf3J%2Fsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMz08DjudJBSKFtBCSrcA7a%2BHpgpiPx8xEoxkz4tmavULUEFHDRh7701Xqasw%2Bg62Yig6cJE3fyjMLhTckucwDs1FWAvjW%2FbfP1VksZF5vdhZZ6GkEUiILC7%2B838K7e%2BJUVshPbeLdLPTRwhVFkFAevTkKvz3wbzgBXiQlFVwOMPGNf%2BpZJmbygcyXSMXwDTUQOGMV6j5nxRh8tqbF%2B6%2FE6U%2BPlqkC91gNbNrDeV7F9NECG6ZXrkiSOggziq%2FK%2FtxBB2mxlRKsZfmrIkHknbdvBSTW%2FGKHFKHeQJFUrPVY1Zwx3P1y7njk2MOzvKoAvcGE9h7LghcEXQZswp7dhRVNxeE74y644aeJ645DAxeN9YVCgrGZqxR%2F675rBdP7BC%2B4imywLjeAwEihkNIBGu%2FBNVeALREot54qX39ESJgzCGdcpIlDsR1SLCgxQw4UVGynGCiOeeRiOPG0aQUaClgaTA8PTCIhL0zwhVQFueioKHXATg4Jh8vgIYhpy4397o%2BM78sc6ihPR6R9fcdevbTAsawZi9kBi3XI23JW0qGP%2Bb0Cxjx21HJpCZ1aPq6in8jgYfgnOOF49mi8FGiMt0Rb5Hx1w0fOD2DKv5HljkpO91JevmLildpQhG8rNaULC6aU1Hl%2F0SKKn1L7OQMNHGisoGOqUBk4y1Xzts79aefOd2RElNJG%2F406hJOe5XBgIRH2TD%2BlQPm9QLvAIRhF2rgw8JpRfxQn6DqKtQN1FVVpJPPt%2F3j52Iwd%2FdmvKrPJw3LIu8Tv6PCAY6mdfWrtQi7kWZHq58b%2FTOsvEkzv%2FuH2%2B8QND393dMn7g%2FpCzLjOu2eP0smc9qT2SGiEmVDd7D6j3A0uejO22nv7G7wyA33r9pxKaqFNRvrsEx&X-Amz-Signature=59dc2dae9788e38e577621a448f3a2d1b564004e46e47ecb3412cecd314b6d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

