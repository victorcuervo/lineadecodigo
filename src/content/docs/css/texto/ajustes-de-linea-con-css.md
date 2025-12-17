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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G7WUMVM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE37jzfJZxqVc8szv5or34w9P5nKOlr6I%2FKUc1f3hUPzAiEAgvYmNaC3oSkgpF%2BN%2BwtdBTlDFpVhJH4VKlFklh6pNkwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKeNDMdAtcEPkdnPtCrcA3fkXqAIRtwA0jrM9wINsn5Jem8%2FibV7%2FVQUxQcXH00Wl90Hp0%2FHw0tmZmreK2pQnt1SOMi6GxyBOGPqoeSKT3oL1v1VBy6QsuO6%2FFiBEVKCnMl%2Fb%2Fpuo46CLoirNNc5Si0C0nR46q3aWmh0TGwKu99nmkQMEVLkfFUd%2BpOQYDWQcaoalajCwC0PwZU42hz68YRNgOmVXtfPoOQujD0h9gUdE5K1wdyb5gN2y1qHzobShyO9vD2lD6Q07zQOLWopHkw0UZfK36F70xh4Xt3ePClAtgj%2FKmUs7N7L9z0ZvM2MQbE5msHlZBffcloBaXYh%2F4gGHz4hQ1pVnYLzRQyotIwd6k1hkCClrnGXw5XSSUDRiMfauvguUarfcHqxC%2FXhyjxj4DGJuo2nuA2kKAJpoKmCYdyUegPSTj5XmtRt5u0nBg%2BAblhvqfHgCN26k4%2BA5%2FsKlxQhIL%2BaJbTMx99CyzR%2B73KKd52WspBOAoyuLqgMJLzt56BVa279aLWn6uc6uwC6SC%2BqsmGrMZ60jcDmQ29lx3V%2FgvQijc5bVVH1fk3GnWPm2FVuHNvAx5ENmCrAL%2Fw%2BiehJBrHaCxTaaSVCEX%2BGDNRED4dhHnTD15Qcr2OITmnxWI%2Fz7iDeFypXMMXOiMoGOqUBuwEDZ6GJDNvrH7FjKfx7jn30K0%2BSbP6xJE%2BdWSeSfGxz9WXI1b9TaqfdyADCTXb6zcLzy9OhoQNkBXUxgoEtqyEDYG40DffbokDuidCWCz6ASK%2FpIC%2BHemWksSiXhQNtd6WW6%2BJVWqotM8TTx8GUtLywD8BGjbLgVWDYnemPrqt%2FzVM7w8vefv3EAOYaA4ktBKjteY4MueRnxuWD%2B5NTAywK9rmM&X-Amz-Signature=d2daa4ed22046b26afd3b5e79b8c0ac001a66a858cbd8db044116e35b4ccd70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G7WUMVM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE37jzfJZxqVc8szv5or34w9P5nKOlr6I%2FKUc1f3hUPzAiEAgvYmNaC3oSkgpF%2BN%2BwtdBTlDFpVhJH4VKlFklh6pNkwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKeNDMdAtcEPkdnPtCrcA3fkXqAIRtwA0jrM9wINsn5Jem8%2FibV7%2FVQUxQcXH00Wl90Hp0%2FHw0tmZmreK2pQnt1SOMi6GxyBOGPqoeSKT3oL1v1VBy6QsuO6%2FFiBEVKCnMl%2Fb%2Fpuo46CLoirNNc5Si0C0nR46q3aWmh0TGwKu99nmkQMEVLkfFUd%2BpOQYDWQcaoalajCwC0PwZU42hz68YRNgOmVXtfPoOQujD0h9gUdE5K1wdyb5gN2y1qHzobShyO9vD2lD6Q07zQOLWopHkw0UZfK36F70xh4Xt3ePClAtgj%2FKmUs7N7L9z0ZvM2MQbE5msHlZBffcloBaXYh%2F4gGHz4hQ1pVnYLzRQyotIwd6k1hkCClrnGXw5XSSUDRiMfauvguUarfcHqxC%2FXhyjxj4DGJuo2nuA2kKAJpoKmCYdyUegPSTj5XmtRt5u0nBg%2BAblhvqfHgCN26k4%2BA5%2FsKlxQhIL%2BaJbTMx99CyzR%2B73KKd52WspBOAoyuLqgMJLzt56BVa279aLWn6uc6uwC6SC%2BqsmGrMZ60jcDmQ29lx3V%2FgvQijc5bVVH1fk3GnWPm2FVuHNvAx5ENmCrAL%2Fw%2BiehJBrHaCxTaaSVCEX%2BGDNRED4dhHnTD15Qcr2OITmnxWI%2Fz7iDeFypXMMXOiMoGOqUBuwEDZ6GJDNvrH7FjKfx7jn30K0%2BSbP6xJE%2BdWSeSfGxz9WXI1b9TaqfdyADCTXb6zcLzy9OhoQNkBXUxgoEtqyEDYG40DffbokDuidCWCz6ASK%2FpIC%2BHemWksSiXhQNtd6WW6%2BJVWqotM8TTx8GUtLywD8BGjbLgVWDYnemPrqt%2FzVM7w8vefv3EAOYaA4ktBKjteY4MueRnxuWD%2B5NTAywK9rmM&X-Amz-Signature=56457c4d5649d03a7d49dfae2b95a17a9e8e386a505e1f78655673c47be5913c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

