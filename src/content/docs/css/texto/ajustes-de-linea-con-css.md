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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCNVYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWym8ldOkneXdqhmNxA1wUkW5L7SQz7a2BXJ4z0AetEAIhAK5uaqp2RlimokbFXtALZAslIdhvw97aWu0J0nu22IDzKv8DCHYQABoMNjM3NDIzMTgzODA1IgynNyFaTg9OeQDcTlsq3AMuFGqm1eLwyJr3ez605wRUD1SLR9mrXev%2Bi3TZ1%2FvzpCFib%2Bx6fKLDkdKp5yP51%2BeNe%2BN%2FDpEGS6ZMZA1PcMVn%2FP5TesqqiycLoNFXktRBYTq1Hy5HJoEyJ3xuZIYbGqgbwoL5SFJ3kkSBqxzutsyCh6t%2BA8%2FIsYm99i3lkrxkA2feMd1Kuczq2xNOhbmCdVlMZZCUG8FW%2FYmtyZ7FsiSiNk5XGXWyZFeEAPbcL6fxCYHDe8DvqU%2BYtJJu1ZnYFBFzbwnHiuS1GttYOw3LbAy%2BIqMKKopSPSaJMx6s6y%2F2g7Wbx03VQxfROqRR%2Brj278MMvkLoUTrBIJ%2Fib2viYX6DgEFJsx46aPPQjqcqPkqPu6CYFA37pa%2BzTUNxGtRxcgCvLw9t9AmgyJZBq7NM%2BSBYVJ65nODTdDJ6JJ2Ydu9tagaGPEhLhieClbaOY9g7642gd5vAv1ItLqbBlYVYFzSVUxHKA%2FF9pIsmVPSoRyXz0JRiPU4QlOfi21rB%2FE4O2PlRSbbmewTJ%2FKZOo4acnGeny3qZgzeODz28O5zv0L6MHB2VtvMUvwOMgqJlqzblxTSF9lP%2BVfOjoYFas%2FS0ZsHcL28vStGYDl6LF6LwqMrAXkGh2FhZPGRBRWk%2ByzDl6YjKBjqkATvTRtReY86g1LZA2LvegPs2r3pRBB7XxFWjhG95BxhnvNulZlDWb3q7p%2FeayOxKFNqzDUv%2BjkMNOVzV6lSvxUiuMx8dkQczJAoIBBp6J7UzZgzfHOxvCZ4C8MT8KqVuvhyHlg2VUdXcuTIDEQMu%2BK2bwSpzNfazE5%2BYiik9%2FEpMEXAuhiVZ3Mv9Vk44B4MCrMmTnHYw%2BJcU2DSUjK2K%2FHvR1998&X-Amz-Signature=19bca1eafeaf5c97285a6b7772049a094e2eb06a0301bbc9464551b57affaa18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJCNVYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWym8ldOkneXdqhmNxA1wUkW5L7SQz7a2BXJ4z0AetEAIhAK5uaqp2RlimokbFXtALZAslIdhvw97aWu0J0nu22IDzKv8DCHYQABoMNjM3NDIzMTgzODA1IgynNyFaTg9OeQDcTlsq3AMuFGqm1eLwyJr3ez605wRUD1SLR9mrXev%2Bi3TZ1%2FvzpCFib%2Bx6fKLDkdKp5yP51%2BeNe%2BN%2FDpEGS6ZMZA1PcMVn%2FP5TesqqiycLoNFXktRBYTq1Hy5HJoEyJ3xuZIYbGqgbwoL5SFJ3kkSBqxzutsyCh6t%2BA8%2FIsYm99i3lkrxkA2feMd1Kuczq2xNOhbmCdVlMZZCUG8FW%2FYmtyZ7FsiSiNk5XGXWyZFeEAPbcL6fxCYHDe8DvqU%2BYtJJu1ZnYFBFzbwnHiuS1GttYOw3LbAy%2BIqMKKopSPSaJMx6s6y%2F2g7Wbx03VQxfROqRR%2Brj278MMvkLoUTrBIJ%2Fib2viYX6DgEFJsx46aPPQjqcqPkqPu6CYFA37pa%2BzTUNxGtRxcgCvLw9t9AmgyJZBq7NM%2BSBYVJ65nODTdDJ6JJ2Ydu9tagaGPEhLhieClbaOY9g7642gd5vAv1ItLqbBlYVYFzSVUxHKA%2FF9pIsmVPSoRyXz0JRiPU4QlOfi21rB%2FE4O2PlRSbbmewTJ%2FKZOo4acnGeny3qZgzeODz28O5zv0L6MHB2VtvMUvwOMgqJlqzblxTSF9lP%2BVfOjoYFas%2FS0ZsHcL28vStGYDl6LF6LwqMrAXkGh2FhZPGRBRWk%2ByzDl6YjKBjqkATvTRtReY86g1LZA2LvegPs2r3pRBB7XxFWjhG95BxhnvNulZlDWb3q7p%2FeayOxKFNqzDUv%2BjkMNOVzV6lSvxUiuMx8dkQczJAoIBBp6J7UzZgzfHOxvCZ4C8MT8KqVuvhyHlg2VUdXcuTIDEQMu%2BK2bwSpzNfazE5%2BYiik9%2FEpMEXAuhiVZ3Mv9Vk44B4MCrMmTnHYw%2BJcU2DSUjK2K%2FHvR1998&X-Amz-Signature=00c3f8e9f4ba430ebd18bcd5f1f809b9cd8d5518dacafda57363d3d0f9807e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

