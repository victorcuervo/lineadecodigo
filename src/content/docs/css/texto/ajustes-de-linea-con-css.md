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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTACUJ3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmw9xfCCUWJD6%2F6VCYXilz7d5QwrMnkWACI5Ttfs%2FwGQIgGuk1shIykFeNZSXDm8LG%2BSxnSpE2rWYzJA7So5FfcrYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOCREpJeZ8%2F99FmsRircA6luQd1CJQBNpqBO0w4U5hfAkU8mGLnRo8FWUVA89STkIa2v%2BHFB6NRTsMkyOth%2Ftu1nQ7HiI6JgPCF3No8dig0OsTvw4ggb2YEjZBEIYIrRsyCBH0iNGkjNJoO4ETyAg%2B7zXh%2FTdZPvAzNr8SYfjlzBLqZ9Z3DKlOoAfebsasPzVwaxo9OLcY15FVsSzU7PKYfZxA7VwgeYuZk5ytKfxX%2B627m7rr40L7ZSRe6H894O5n1Ptg0FKwTKHSvrtQ%2BNt%2BH1%2F1%2FQ0t%2FIKRTXP3v%2FfKetEPoMAb9OplnXewtYkkmoa3%2BekROIPZm1q9IAauXkCgyaiEFX4MJz7h8th1%2F%2Bx9yOPZQqgan1O3tMkQTe5bTANIpp0uWp0IvfvrS6l7l5ghUzBiacmW1hfHQp4mWm0HFvTThGd%2FawyBXlda3pnEdkA4KAiZERVajmM%2B24%2BqTU6lGNYJwTAWRnw9rpXUqE65Wo%2BdS3gNwp%2BjJRmNkhb%2BfAoO6CjLHaDw1A%2B7AOW0yre%2FHIsP7x9NDIFWCjxvykuf71G5ebDrQlE31Gu%2F7poCMUqQn8Kimg2KTdQZ%2F%2FuNPEb%2Fq%2FhgK4fGQ8DcJv%2BRS6Bsv%2Bg7Xxw0Qa%2BqMwuE8PrHthkSI3kwv3BOcBnATuMOzOiMoGOqUBef6kmUk%2BzaoVQxFrVsMDv2MlY%2BbFg%2F3SR6IbxfxZU6CFd%2Bud3a9PTvo3sObRXgWf4QMdoYNmsoMwZy3nXrCN4Tr7ujTP4HZySK%2F7sayhZNa89QMHpWBknlbrxLV1%2BfLeEV%2FBf4U72GabccF8iD3Rt%2BOTkBFB6J8GDPfbJNMtWNggSO6Jhc%2Bv6EMVJkmJGlIRDYLeK%2Bc%2BHU%2BggR7o6Q%2Fp151kvtQh&X-Amz-Signature=19a5d5774048d7478c680feafe576ca0288c41056aef693d2ebcf1f016f1c1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTACUJ3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmw9xfCCUWJD6%2F6VCYXilz7d5QwrMnkWACI5Ttfs%2FwGQIgGuk1shIykFeNZSXDm8LG%2BSxnSpE2rWYzJA7So5FfcrYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOCREpJeZ8%2F99FmsRircA6luQd1CJQBNpqBO0w4U5hfAkU8mGLnRo8FWUVA89STkIa2v%2BHFB6NRTsMkyOth%2Ftu1nQ7HiI6JgPCF3No8dig0OsTvw4ggb2YEjZBEIYIrRsyCBH0iNGkjNJoO4ETyAg%2B7zXh%2FTdZPvAzNr8SYfjlzBLqZ9Z3DKlOoAfebsasPzVwaxo9OLcY15FVsSzU7PKYfZxA7VwgeYuZk5ytKfxX%2B627m7rr40L7ZSRe6H894O5n1Ptg0FKwTKHSvrtQ%2BNt%2BH1%2F1%2FQ0t%2FIKRTXP3v%2FfKetEPoMAb9OplnXewtYkkmoa3%2BekROIPZm1q9IAauXkCgyaiEFX4MJz7h8th1%2F%2Bx9yOPZQqgan1O3tMkQTe5bTANIpp0uWp0IvfvrS6l7l5ghUzBiacmW1hfHQp4mWm0HFvTThGd%2FawyBXlda3pnEdkA4KAiZERVajmM%2B24%2BqTU6lGNYJwTAWRnw9rpXUqE65Wo%2BdS3gNwp%2BjJRmNkhb%2BfAoO6CjLHaDw1A%2B7AOW0yre%2FHIsP7x9NDIFWCjxvykuf71G5ebDrQlE31Gu%2F7poCMUqQn8Kimg2KTdQZ%2F%2FuNPEb%2Fq%2FhgK4fGQ8DcJv%2BRS6Bsv%2Bg7Xxw0Qa%2BqMwuE8PrHthkSI3kwv3BOcBnATuMOzOiMoGOqUBef6kmUk%2BzaoVQxFrVsMDv2MlY%2BbFg%2F3SR6IbxfxZU6CFd%2Bud3a9PTvo3sObRXgWf4QMdoYNmsoMwZy3nXrCN4Tr7ujTP4HZySK%2F7sayhZNa89QMHpWBknlbrxLV1%2BfLeEV%2FBf4U72GabccF8iD3Rt%2BOTkBFB6J8GDPfbJNMtWNggSO6Jhc%2Bv6EMVJkmJGlIRDYLeK%2Bc%2BHU%2BggR7o6Q%2Fp151kvtQh&X-Amz-Signature=56f5311b37db2ed1a362f06fe62b78701aa5bb9a22497a835ed00ee80e209a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

