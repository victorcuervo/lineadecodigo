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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYSZUDV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfjf4PdZdfDBwd5mydhCYTAA4hf9%2BnyOR%2BkrGuPChVzAiEA3xViJbkAUTXJtMdBlqj%2FnG3eMFwEjXBXpo306rD1gkIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFaccAiml2LoQoN6ESrcA1oK1UgJzbIt9lnAadwylSsWT5TKRey38B0SpRTVsYnSloIEmPzAB1nTDEVW5NqmYGwNwP6Zng2gaXmViL0mn3OIQ5ypU%2B2WiC%2Bk4jEjO1EMX4MPjyfKYwmC%2Bi9toZ1%2FzBAN2i%2FQFJVhe8NhyB9xL3i4ReVwXrGy%2F29JaqxJvot5RHO49pXZuMLBVasrAgmswbo6iAnB5p5aBFo%2B4lGDmQCJhStgyV3nMaxf77CX2mChaPuVFWnDJWrkOmV%2FZIk8yEt3u1Dx00RUooarP4LKiFlXS8ai87YbRKizHdce%2Bc3p1d%2BmZ8mFISuS84RP6VfjwUN5m%2BlnKMa6qL8TEPX3XBuNcN55ZMU2hxGrGri%2BcbxmHtgekPZABP%2F1GG6kmingjFZ%2B4WSlkjDVPw55Kw5ImCtmoXHSDSnln9a5g6G3SrYwPF1XUZk3XONHDSYNUZ%2BsZ1K%2B7H0cjrmpk3Jg4ptZ4XehTLUuGf2o6Lor9%2FkpMZYrIVD721TqFyTYVxW5pOsrrrT1gMZ%2B98IPdtgUcQ8NfIykiYgpcqTCp4Caa1d%2F8oYnZFqEEy34dslE3JhG0G6gt2r4TN%2BO9Mic4Ivg6HsSgSRbB1URkcQ8SUupvaBHRKShz4FGynTVwN83hqRwMJi3icoGOqUBZ1%2BpNPqfzeXosVyZVoJ%2FroKrvQH83oJp9Bqdp%2F%2FfUSq0qdntdgsU2nz348IIZQFG1hcWfdFYVH140zVMCpiUm8NhWqV8Gj%2BKhKpCtp8Lai%2BnmcNgiVj5lkceLzgEdwUIzW9xHCgbTgHFj7H%2Bv2uVvZS3JBbvug3SZXCWtC6%2FIdkrMQ%2FvHYDWiVAWbJZsUpZlllSoEvReIpmgl0jJzPUzcWuPnAjG&X-Amz-Signature=30f128f9a80889603f486c059254cc43ae85895f2e7054f1ce9ec5073efbde1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYSZUDV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfjf4PdZdfDBwd5mydhCYTAA4hf9%2BnyOR%2BkrGuPChVzAiEA3xViJbkAUTXJtMdBlqj%2FnG3eMFwEjXBXpo306rD1gkIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFaccAiml2LoQoN6ESrcA1oK1UgJzbIt9lnAadwylSsWT5TKRey38B0SpRTVsYnSloIEmPzAB1nTDEVW5NqmYGwNwP6Zng2gaXmViL0mn3OIQ5ypU%2B2WiC%2Bk4jEjO1EMX4MPjyfKYwmC%2Bi9toZ1%2FzBAN2i%2FQFJVhe8NhyB9xL3i4ReVwXrGy%2F29JaqxJvot5RHO49pXZuMLBVasrAgmswbo6iAnB5p5aBFo%2B4lGDmQCJhStgyV3nMaxf77CX2mChaPuVFWnDJWrkOmV%2FZIk8yEt3u1Dx00RUooarP4LKiFlXS8ai87YbRKizHdce%2Bc3p1d%2BmZ8mFISuS84RP6VfjwUN5m%2BlnKMa6qL8TEPX3XBuNcN55ZMU2hxGrGri%2BcbxmHtgekPZABP%2F1GG6kmingjFZ%2B4WSlkjDVPw55Kw5ImCtmoXHSDSnln9a5g6G3SrYwPF1XUZk3XONHDSYNUZ%2BsZ1K%2B7H0cjrmpk3Jg4ptZ4XehTLUuGf2o6Lor9%2FkpMZYrIVD721TqFyTYVxW5pOsrrrT1gMZ%2B98IPdtgUcQ8NfIykiYgpcqTCp4Caa1d%2F8oYnZFqEEy34dslE3JhG0G6gt2r4TN%2BO9Mic4Ivg6HsSgSRbB1URkcQ8SUupvaBHRKShz4FGynTVwN83hqRwMJi3icoGOqUBZ1%2BpNPqfzeXosVyZVoJ%2FroKrvQH83oJp9Bqdp%2F%2FfUSq0qdntdgsU2nz348IIZQFG1hcWfdFYVH140zVMCpiUm8NhWqV8Gj%2BKhKpCtp8Lai%2BnmcNgiVj5lkceLzgEdwUIzW9xHCgbTgHFj7H%2Bv2uVvZS3JBbvug3SZXCWtC6%2FIdkrMQ%2FvHYDWiVAWbJZsUpZlllSoEvReIpmgl0jJzPUzcWuPnAjG&X-Amz-Signature=ea373ceb21de5b0d536f075fe47da6c8c5178fd7c61a5d8df353d6bfbed86424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

