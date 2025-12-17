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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHUSEZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs2UPXqi2rkiWFtYr%2BeD0wh8ksFkROYBS8x1GJj07AGAiEA7kdUozLMienNTAV3wg%2BF%2FUmN7rakINzTQZt2zF5AD6kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDca2qZmpXzqO%2FFnHSrcA07eR2a0cHjMgMCCMRDuB1NMqNvZp0d1YEElivUWy7bZrc16%2FnQI%2FfytdLQhUlKmPHE4kmj%2FypKcwHUeZFX69v%2FGgmLpaDJpJkBPXsmJCi3ed6Uy%2B4gf%2B%2BC5YgRLvKC5SPb1pOUdOIpg3qVsyLigPEAG%2BqFiR4pk4v7SXq6VKnbfyie2Kuw2wcaznuICuvexjVmcOzkcsxiXMYo%2FPH6zzOJrKpKc2fPifMoOgWBgHR%2FERV4quLbps2FmXCgJWPIJxuum4VCqHFtd7oytKfJkHrALBBZsugjcZGHqEGDyEMFqbsg1%2B0Kx3PvZGXQYBzJPAGpQsBGyNN9KFiOl1O%2BGCT1ZeEPeRh3f%2FhhZQMFEC%2FP0Rev5JA3IwCl9UvHeVTcLUyuZQ3VgyZP2GX4HLVCN3ZkDALl5BoZs%2FrfLCdN5f671Fv2xBqIfoRhnWDHJt9nfdA4hSE2MEmZCh4pOpbXDniNNAWsFEFHT09EML%2Bhd2ta5PzoNvVY4cskZrNjPnxDwtHhAk5Yfm0%2BIas3GeIbEyDZKmMj7na5sI1LXIMQAdsbd9ZIhHvTW5XvgBtHMsIlmU0NpJcLCytLelC6XIlLtjxlbVadhH5hTUhYumVDbLr%2FOgRJDDP%2BsZsO8hUf7MJu3icoGOqUB7aVBZp9VF%2B2gM6XR0vFoRP5flhjslkEIWlN04AXhrT2qbkx940iBAT%2Fk71V3BsPVEsn3%2BalUiICXdgapE3bvfDR%2FGqBGMkc4U2ve1E%2FGyugvo%2BCWULeicCLTqJRCzDPKridyWLQzhTDVdTKnino2q3Yk0DH9dskL4CDNYZLNK94PHVjHRqjZn%2BkOZ8STeykuBn24R8rnEN%2BK4V4h99FUIyGSTjKu&X-Amz-Signature=7d0ca20d6d6ece98e9fe30d6ec119c15c290a312f0d0d008248a0a151bf5ac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHUSEZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs2UPXqi2rkiWFtYr%2BeD0wh8ksFkROYBS8x1GJj07AGAiEA7kdUozLMienNTAV3wg%2BF%2FUmN7rakINzTQZt2zF5AD6kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDca2qZmpXzqO%2FFnHSrcA07eR2a0cHjMgMCCMRDuB1NMqNvZp0d1YEElivUWy7bZrc16%2FnQI%2FfytdLQhUlKmPHE4kmj%2FypKcwHUeZFX69v%2FGgmLpaDJpJkBPXsmJCi3ed6Uy%2B4gf%2B%2BC5YgRLvKC5SPb1pOUdOIpg3qVsyLigPEAG%2BqFiR4pk4v7SXq6VKnbfyie2Kuw2wcaznuICuvexjVmcOzkcsxiXMYo%2FPH6zzOJrKpKc2fPifMoOgWBgHR%2FERV4quLbps2FmXCgJWPIJxuum4VCqHFtd7oytKfJkHrALBBZsugjcZGHqEGDyEMFqbsg1%2B0Kx3PvZGXQYBzJPAGpQsBGyNN9KFiOl1O%2BGCT1ZeEPeRh3f%2FhhZQMFEC%2FP0Rev5JA3IwCl9UvHeVTcLUyuZQ3VgyZP2GX4HLVCN3ZkDALl5BoZs%2FrfLCdN5f671Fv2xBqIfoRhnWDHJt9nfdA4hSE2MEmZCh4pOpbXDniNNAWsFEFHT09EML%2Bhd2ta5PzoNvVY4cskZrNjPnxDwtHhAk5Yfm0%2BIas3GeIbEyDZKmMj7na5sI1LXIMQAdsbd9ZIhHvTW5XvgBtHMsIlmU0NpJcLCytLelC6XIlLtjxlbVadhH5hTUhYumVDbLr%2FOgRJDDP%2BsZsO8hUf7MJu3icoGOqUB7aVBZp9VF%2B2gM6XR0vFoRP5flhjslkEIWlN04AXhrT2qbkx940iBAT%2Fk71V3BsPVEsn3%2BalUiICXdgapE3bvfDR%2FGqBGMkc4U2ve1E%2FGyugvo%2BCWULeicCLTqJRCzDPKridyWLQzhTDVdTKnino2q3Yk0DH9dskL4CDNYZLNK94PHVjHRqjZn%2BkOZ8STeykuBn24R8rnEN%2BK4V4h99FUIyGSTjKu&X-Amz-Signature=5c6a204dd993feccfea268c9b00ac9bff0554d48976d905fde89cc4f1ac8a22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

