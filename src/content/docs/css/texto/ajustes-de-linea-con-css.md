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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CT73UVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUyIo3p2ejW64wcliN9LgLB88LSa%2F8N2c52v1hHXc54AiEAqb%2Bm9jcXwOkBIZmsvcIOzKEFTDLXWO2aDtP%2BXKa4oOUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDH1ayBzShZPHdXVboSrcA9PJC8sdGBKnAjZq9AZs%2BOv%2FNo5FyqS91C%2Fc4a0FutJYtleDT3aj5N1jCmYiuXXULTLneeUwg5eZ4VAOGLezoHENKA8mJ1QQjCx1AeDDR9KUAoY1bPQmgZ2ivqrGBAca20%2FdWltcwJzWaDru5zvzhbNk44%2B2r1UuQsRBS6eEcVdgiimu0BrqbPNnD2DRPcUFPcaCXJzzHxwopp%2BnTvH5%2FIVU2vjxOb4%2BImEDnDAOy4kTvkGHIgwW7df1SWw09sTVUl%2FcXsw3eTAN3UKNADnrk%2FofxpIt7k0L7BuWUWmbQAv8QzivfPnvh4lx1A7KkFMIO12u42g9BvAh2VkR0IXzg%2FtNr59%2BotMGElVfnGf6RyiyWsX%2FoDqJA1sMkV1PfFc4idMS7u3JhxUSA0kN%2BzwPchu%2FLDaSqc5YoWFclchoQ6C7zWPpFmH8nHnx%2FWBhW4mVTDoYEQsCtH%2F9N5Bsj%2BDO9aRSSICUhxJ%2BJvrZov9GdwgP1iGz%2Fgb%2FwBPkGU42Dh4BcdpclFHaCkex0WGqsbqmb7H2Drn80wutUuqIjruV54F7csp9tBuUGAYPl5WmNL7KiCsByR853bnShuCnyP884lI9bt3FlulNygzoZ0HXUWS1vHHHDW6jPHiW7Gn%2FMNbFisoGOqUBYdiPD0Poh85UXtD3d81nnz7qj2H5xKiWTsSjqB8m2vKsR%2BkOAW6Ya%2F1eEgs%2FMV%2FKmUMJ9zL99Xnru59wT3OLW%2B2RHY36SW4KcN5S7bpcZybhlFMyelUd%2FDrdJ0Uw1ZrNsHWRtLDbxMzSCnprbpjw2c%2FNkGlqnON172LB%2FBFrh0aiZNgs56iu81Do24URC4WmkXpvrSEYOcDSo3KrpmiWitZyUgzp&X-Amz-Signature=f8a60f8717d2efb5fa6026f59d20e9e923aceb02ddce3e379588caf25d5da27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CT73UVY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUyIo3p2ejW64wcliN9LgLB88LSa%2F8N2c52v1hHXc54AiEAqb%2Bm9jcXwOkBIZmsvcIOzKEFTDLXWO2aDtP%2BXKa4oOUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDH1ayBzShZPHdXVboSrcA9PJC8sdGBKnAjZq9AZs%2BOv%2FNo5FyqS91C%2Fc4a0FutJYtleDT3aj5N1jCmYiuXXULTLneeUwg5eZ4VAOGLezoHENKA8mJ1QQjCx1AeDDR9KUAoY1bPQmgZ2ivqrGBAca20%2FdWltcwJzWaDru5zvzhbNk44%2B2r1UuQsRBS6eEcVdgiimu0BrqbPNnD2DRPcUFPcaCXJzzHxwopp%2BnTvH5%2FIVU2vjxOb4%2BImEDnDAOy4kTvkGHIgwW7df1SWw09sTVUl%2FcXsw3eTAN3UKNADnrk%2FofxpIt7k0L7BuWUWmbQAv8QzivfPnvh4lx1A7KkFMIO12u42g9BvAh2VkR0IXzg%2FtNr59%2BotMGElVfnGf6RyiyWsX%2FoDqJA1sMkV1PfFc4idMS7u3JhxUSA0kN%2BzwPchu%2FLDaSqc5YoWFclchoQ6C7zWPpFmH8nHnx%2FWBhW4mVTDoYEQsCtH%2F9N5Bsj%2BDO9aRSSICUhxJ%2BJvrZov9GdwgP1iGz%2Fgb%2FwBPkGU42Dh4BcdpclFHaCkex0WGqsbqmb7H2Drn80wutUuqIjruV54F7csp9tBuUGAYPl5WmNL7KiCsByR853bnShuCnyP884lI9bt3FlulNygzoZ0HXUWS1vHHHDW6jPHiW7Gn%2FMNbFisoGOqUBYdiPD0Poh85UXtD3d81nnz7qj2H5xKiWTsSjqB8m2vKsR%2BkOAW6Ya%2F1eEgs%2FMV%2FKmUMJ9zL99Xnru59wT3OLW%2B2RHY36SW4KcN5S7bpcZybhlFMyelUd%2FDrdJ0Uw1ZrNsHWRtLDbxMzSCnprbpjw2c%2FNkGlqnON172LB%2FBFrh0aiZNgs56iu81Do24URC4WmkXpvrSEYOcDSo3KrpmiWitZyUgzp&X-Amz-Signature=c165e3cc96de24d847164f17e9e0375329da501257a13f811dc327a84057e3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

