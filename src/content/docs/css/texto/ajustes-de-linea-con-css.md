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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AURMKRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2WYRbP1mbidmu%2BOVxMNUupGhkCXDvKSfm0vEJrs93mAIgA9HcI3mRqqCs0lnleNBHcVT4U26g2Iypwzl5Rmp4%2Fl4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEXSOYJIJ5mrpL9GWircA%2BR8p8GZxVV2PdkCoZ3jV7kvLL4lSTHhgWjyjC00wvFVEZ3V6R4ws2Mpc7HnIhQf8P2AlZvzSDnEFM8E%2Fs6DLb9RkYEx9JOamx%2BryZMIuzCquX5Gq9rtjYSaRHuGaPZjDKYfwXq2DfKkRgBgDdivpXs9DU%2BnKkGiiZxGQhBGnND0SUgfOhQhgHa492uYA8l4v1%2F4Ih7G%2FXtY32Szs0Yct%2Fx6z0fcpPhyfTBzP1m%2FmK8wCCj6c4qQO%2BCxlZfVIvX8frMje91PlqDuoPIC5VP4ryznaZAf3nMevhEYrO3jQOOzexHLAgc7L0GFpwJk%2FGd7AF2qianszTm%2FHDpVlQ9nqUe53BDeSm5WghyAe4of25N7Ot0ffDSqkoivPU8QCSqlSEmdl%2BPMFsm4gz4GDIs2kItJwA%2FJ5Gftzei%2FDG4ecNLFPqaDXgvDg%2FEIreWyVSaylI7xbRmW2PAUmzAzi3eXSDUwvtDRHW7eOUPNkWhScjqe1GSpDuzp3ANoAyWXLee64tbPayBf1ds9Gesc816bO43KQxT3zkOd0kvp83jHsHB0gfD2107FkNUsafKCpaZzs5WCYwq8nEzbiCBd714lEqse6dlkTz%2Bqv57zjRin%2BDoaCTvCGiJ4vLJ%2BN1hvMI64icoGOqUB9%2BsJSlVDP2qPtozAQLqu69zNMR95jSq2IS7VlH2y%2FNRXDrjnY%2BVs2PjW4dfxdtLArMlxUwW31OHIdrJr49VFlBHiBaHGnUQ9MnPnJi%2Fqng0XC9oj2vEIQK33w9y%2FeXc5MM5V6JL3VVYaEzltqShAtT0h0HJwv7yVb0t3ru1rc5R9Kb8QyexhV%2FyfHUHdz1IgJ16Ivny9rWKU39JB0o1883ykyd1N&X-Amz-Signature=943bc07a3136a65081cda0b9dcb4f6b4b7e10758395a00ac14da7c707f21b00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AURMKRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2WYRbP1mbidmu%2BOVxMNUupGhkCXDvKSfm0vEJrs93mAIgA9HcI3mRqqCs0lnleNBHcVT4U26g2Iypwzl5Rmp4%2Fl4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEXSOYJIJ5mrpL9GWircA%2BR8p8GZxVV2PdkCoZ3jV7kvLL4lSTHhgWjyjC00wvFVEZ3V6R4ws2Mpc7HnIhQf8P2AlZvzSDnEFM8E%2Fs6DLb9RkYEx9JOamx%2BryZMIuzCquX5Gq9rtjYSaRHuGaPZjDKYfwXq2DfKkRgBgDdivpXs9DU%2BnKkGiiZxGQhBGnND0SUgfOhQhgHa492uYA8l4v1%2F4Ih7G%2FXtY32Szs0Yct%2Fx6z0fcpPhyfTBzP1m%2FmK8wCCj6c4qQO%2BCxlZfVIvX8frMje91PlqDuoPIC5VP4ryznaZAf3nMevhEYrO3jQOOzexHLAgc7L0GFpwJk%2FGd7AF2qianszTm%2FHDpVlQ9nqUe53BDeSm5WghyAe4of25N7Ot0ffDSqkoivPU8QCSqlSEmdl%2BPMFsm4gz4GDIs2kItJwA%2FJ5Gftzei%2FDG4ecNLFPqaDXgvDg%2FEIreWyVSaylI7xbRmW2PAUmzAzi3eXSDUwvtDRHW7eOUPNkWhScjqe1GSpDuzp3ANoAyWXLee64tbPayBf1ds9Gesc816bO43KQxT3zkOd0kvp83jHsHB0gfD2107FkNUsafKCpaZzs5WCYwq8nEzbiCBd714lEqse6dlkTz%2Bqv57zjRin%2BDoaCTvCGiJ4vLJ%2BN1hvMI64icoGOqUB9%2BsJSlVDP2qPtozAQLqu69zNMR95jSq2IS7VlH2y%2FNRXDrjnY%2BVs2PjW4dfxdtLArMlxUwW31OHIdrJr49VFlBHiBaHGnUQ9MnPnJi%2Fqng0XC9oj2vEIQK33w9y%2FeXc5MM5V6JL3VVYaEzltqShAtT0h0HJwv7yVb0t3ru1rc5R9Kb8QyexhV%2FyfHUHdz1IgJ16Ivny9rWKU39JB0o1883ykyd1N&X-Amz-Signature=0e39fec64ac20145696b433158181b266e99f9397fc5a6978bad714de0c2e359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

