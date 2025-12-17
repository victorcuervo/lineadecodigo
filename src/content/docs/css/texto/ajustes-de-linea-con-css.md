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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5H24RAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9RC%2BkkcWwdyF%2BEO7hMhIEygqhvXYWzXqZvCffPxxx5AiEA5yMfzNo1afHyfvA4qZhRqFkIOC1vYlGegKz6Y4vr%2Fg8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGyVjAlveB4nCO9LGSrcA%2BO1%2Bg5ZobtSB331MxgTKB%2FmdteAMa2aZUCgVtNu8%2FK6Ju3OrUXoRbLW7%2FC71z9ArgcxnD3JYfAFFvqoQ%2B7%2BstMmD%2Fm7w9qDtmwKLmh8siRRAgeGnZKSIYqFX2YGYMyaAMhvIG7bOgXtA5n77r2rPAu9lEkhS%2B%2FA%2BCzMnADbbgYs11p8pETF7N4XW52khcswvL%2Bz134AzSPxUsHt2Nb5Jvy%2BtLQQD%2BtjoqZG%2B18%2Fk2tZNAnryNz8zhOU3kJQJR1Peuz1n9uWm5LZSvxHJeuAeNYdd1vLWh7cp6MuUx7CFSolP30t8Zkw0thbtWtj12zoI5Sy41jG2pxrjl89O3hRGK8dzSsEXWp0gdChGAbBFC%2BhqFjIWlmk%2FAIYh1NWgIFfArylMkKz2rJPUYITSRHL%2BQCA2d2SUizO5KCNz0MMdCTgOUz3IIXE1dkLMytbHJrUA%2FhOW8ck1K1EaKTmkUXTloRUkj1W%2B7IaQmBaAGerTZDiMLY3aMBpF4CrmhH0pm6aZ0sUKJVF%2B1LRBoABr%2Bj9w3ymeWfqs4JNj%2B29jkuX%2FDUF0nhx%2FCCTRUl0lrm7m1eXAGkaTJP30wutEpNtGP9qcXDAvjA5e3ymoendwYj1Cb4%2FJFR54NY9TPm5obXXMPvNiMoGOqUBoIMYi1fKiPk0dh%2BlDPgKC6cxk2vJb3Nb0V54H9slfpFTvPD7pEOf1utKosAY6j2go6sjK9WAq2QD0nJ4arG0V3z1A6p1Hrd0aZkkXiGeI3LYH84y4GrVUG%2BQXXYts3w%2FFY%2BzRo30V4%2Feyz%2Bdx1CTk3aYd3YYbfD9%2B0LHQK0t8HiVRrhVtxbvyEh0TtaREst2dYxeCyOHb6Qc7CxQ%2FzI34Wy9RRSm&X-Amz-Signature=14ba86be709939cd415f798fd94dabcc6e95ed41d9b4a9bcf38b5fb55695a6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5H24RAS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9RC%2BkkcWwdyF%2BEO7hMhIEygqhvXYWzXqZvCffPxxx5AiEA5yMfzNo1afHyfvA4qZhRqFkIOC1vYlGegKz6Y4vr%2Fg8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGyVjAlveB4nCO9LGSrcA%2BO1%2Bg5ZobtSB331MxgTKB%2FmdteAMa2aZUCgVtNu8%2FK6Ju3OrUXoRbLW7%2FC71z9ArgcxnD3JYfAFFvqoQ%2B7%2BstMmD%2Fm7w9qDtmwKLmh8siRRAgeGnZKSIYqFX2YGYMyaAMhvIG7bOgXtA5n77r2rPAu9lEkhS%2B%2FA%2BCzMnADbbgYs11p8pETF7N4XW52khcswvL%2Bz134AzSPxUsHt2Nb5Jvy%2BtLQQD%2BtjoqZG%2B18%2Fk2tZNAnryNz8zhOU3kJQJR1Peuz1n9uWm5LZSvxHJeuAeNYdd1vLWh7cp6MuUx7CFSolP30t8Zkw0thbtWtj12zoI5Sy41jG2pxrjl89O3hRGK8dzSsEXWp0gdChGAbBFC%2BhqFjIWlmk%2FAIYh1NWgIFfArylMkKz2rJPUYITSRHL%2BQCA2d2SUizO5KCNz0MMdCTgOUz3IIXE1dkLMytbHJrUA%2FhOW8ck1K1EaKTmkUXTloRUkj1W%2B7IaQmBaAGerTZDiMLY3aMBpF4CrmhH0pm6aZ0sUKJVF%2B1LRBoABr%2Bj9w3ymeWfqs4JNj%2B29jkuX%2FDUF0nhx%2FCCTRUl0lrm7m1eXAGkaTJP30wutEpNtGP9qcXDAvjA5e3ymoendwYj1Cb4%2FJFR54NY9TPm5obXXMPvNiMoGOqUBoIMYi1fKiPk0dh%2BlDPgKC6cxk2vJb3Nb0V54H9slfpFTvPD7pEOf1utKosAY6j2go6sjK9WAq2QD0nJ4arG0V3z1A6p1Hrd0aZkkXiGeI3LYH84y4GrVUG%2BQXXYts3w%2FFY%2BzRo30V4%2Feyz%2Bdx1CTk3aYd3YYbfD9%2B0LHQK0t8HiVRrhVtxbvyEh0TtaREst2dYxeCyOHb6Qc7CxQ%2FzI34Wy9RRSm&X-Amz-Signature=6d786004b973ba7a52445fc57a963b48103ae222b93978ba119d3e6171e70961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

