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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQGPHUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKTrOVoqitiYxgNctYTiFh91X07ZtqLZvG2iTDKmGhAiB8Xuz6gIKHPDO%2FHHhRuzF%2BZqHLO93XbTpACUy9%2BlOn4yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMi4q1db7pIiZW%2B%2BVdKtwDbqubuokS1zZVYhdZC8gjsOXo7sDEvSW7zus6dXQ1jzEUCAwPSdjQiQpEkLEF2VOfeJNewt3ZbE99tKHdbPCtM1NY5fUivLsNwRUby8Svr7Tyi6FDM3AqAsgRK4OjZK9f034WWrgqTrESRw%2BR0MHZfmFgDqn9N9%2Bj3tGJVlHPAuEb0rOa%2B0zjHxB0jWd%2BUS3bWpGn1cpllysot1yG9jT%2BGRbkDiynVFY7S4tDzsdgrFZAncGN4H2LzLCIOdXX%2F9e0jABqKqX6pWvYlVGm7ihj2QnRJSVwYFNd5ZOei53M7InMi4gR2jlPUZqRm%2FyXl6jC351po3LbwCb3ArCzsIBXscMa%2FMd%2BrtuNhkMIUcIwn1PnudA4sAThczjem%2FiRr5yTzmjPS1ironbbnGAJMHYZCWNXoHIL1qJb8Tyx6XAelMN065aB8Q%2FXt70z7C2Tb%2B4%2Bh%2Fo55pWKr1E6FkrVkXbaqeucNs5EYCwDwx6oZCgBPY86TX6lh7q%2Br0qt9Mg6KCxfe7JjJi3pMuKWTp3JXXcA%2FrDnbHY49I5gnkQpgpFTo0vye9%2FN1K1vsF5n2aFFaeTevmmkhDKC%2BSKmDVl7eX4jxTe18gG6amazc7SgxVfHsWo0XiMGhj04g6Toj6swrI%2BKygY6pgG5HKFZyJU9h4eVfjJOnpkD57AcSI2ANWOeg0rdwSvr8hUnaJeTQb8cwL1gYJnNbu%2BKpaeWu2TbYqC5x5ppqUs%2BI3BgKmw1abOP6vdpQzHpWy8%2F5qFIrbEzjRI62fU38qBg%2BIcvCZ2fZr7VtgREMegeEYE4tsA2gFKRMtvpo8vJfCgf2y7XhtNk%2FRmAuQPwStUToiqtliEx3eSyruoXNkLGXUiDpA8O&X-Amz-Signature=de020e5ee635f73baab20a243ccbe79eeaea16d9c768745b6d65eabc98bbeb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQGPHUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYKTrOVoqitiYxgNctYTiFh91X07ZtqLZvG2iTDKmGhAiB8Xuz6gIKHPDO%2FHHhRuzF%2BZqHLO93XbTpACUy9%2BlOn4yr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMi4q1db7pIiZW%2B%2BVdKtwDbqubuokS1zZVYhdZC8gjsOXo7sDEvSW7zus6dXQ1jzEUCAwPSdjQiQpEkLEF2VOfeJNewt3ZbE99tKHdbPCtM1NY5fUivLsNwRUby8Svr7Tyi6FDM3AqAsgRK4OjZK9f034WWrgqTrESRw%2BR0MHZfmFgDqn9N9%2Bj3tGJVlHPAuEb0rOa%2B0zjHxB0jWd%2BUS3bWpGn1cpllysot1yG9jT%2BGRbkDiynVFY7S4tDzsdgrFZAncGN4H2LzLCIOdXX%2F9e0jABqKqX6pWvYlVGm7ihj2QnRJSVwYFNd5ZOei53M7InMi4gR2jlPUZqRm%2FyXl6jC351po3LbwCb3ArCzsIBXscMa%2FMd%2BrtuNhkMIUcIwn1PnudA4sAThczjem%2FiRr5yTzmjPS1ironbbnGAJMHYZCWNXoHIL1qJb8Tyx6XAelMN065aB8Q%2FXt70z7C2Tb%2B4%2Bh%2Fo55pWKr1E6FkrVkXbaqeucNs5EYCwDwx6oZCgBPY86TX6lh7q%2Br0qt9Mg6KCxfe7JjJi3pMuKWTp3JXXcA%2FrDnbHY49I5gnkQpgpFTo0vye9%2FN1K1vsF5n2aFFaeTevmmkhDKC%2BSKmDVl7eX4jxTe18gG6amazc7SgxVfHsWo0XiMGhj04g6Toj6swrI%2BKygY6pgG5HKFZyJU9h4eVfjJOnpkD57AcSI2ANWOeg0rdwSvr8hUnaJeTQb8cwL1gYJnNbu%2BKpaeWu2TbYqC5x5ppqUs%2BI3BgKmw1abOP6vdpQzHpWy8%2F5qFIrbEzjRI62fU38qBg%2BIcvCZ2fZr7VtgREMegeEYE4tsA2gFKRMtvpo8vJfCgf2y7XhtNk%2FRmAuQPwStUToiqtliEx3eSyruoXNkLGXUiDpA8O&X-Amz-Signature=b9cbfe5d004e1c437b07d02dacfa240f55a3ccbeb7f37c6141f0072980df7f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

