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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPAJYHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6pBxw8KzeJnqdh7BslUapbF4KAPLNJl4bCUdQXzfvNAiEAxGBzhOAi5qgsV8TV1oc9sfRddHxhOMu1LeYb8rJVm9oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBJdbWyvQP9436GAiSrcA4JKStpAL54mszOprV1qrglsj90b%2Bzzsf0FMCwN9uuq4HIYLiohVvSYcQBn%2BYo0o0wdeRYxeZNm3PcxO7rSn1p8gsRfZq2XuOC69zY3Ay5eBi%2BwVjp2tTVrMeScDt9H34KChdyz0Xg%2BEaVLxMqQg4TWUu%2Bd7XFGNtzR2MhByI1rlQfwF8ZkQhta%2FAGlpTeLBGZhU0m2i3dXV54UP8F%2B2bNqW0Hqe7hexaXN9ZYU5zoPxMsxKZC9U3YFM0O6sy%2FPu6B5KgkcoKBgD6HUC45ZKBW2gmhFq%2Fmojh2ts8PoGqausnmq0Bbp7K8bHR20Z5icxNItvm2qyHHLsI%2Fu4mzPL5X7i4FREy%2BS2W%2F6yGEkD4BAnNOl6Df0VIew7qpq8XmMJkY%2BlncG4jeg5maSpUsRMF2vcG0HbUIkxPIQ%2Bpq%2Bp3z0kXU9ifo7Y3WhnCCMy%2B9ZjR1E%2FXe0M5BDmOxpo%2BQy5uT3T%2BMOO6TuoN1vFDU0KBBNObZF4T17qYUo478EaQ53NqIEG0jSuWH69FW2Tzh4qcy29KSUF0rPbXn1bggpJcW23CDmYMbu0BAoTkqyXGPSeBSKaWOqJ%2BqkkO2oZEumKgeCNzj7QL0dtzMmEImxNZTrSyLQIxuPJqPPxblLHMK%2BdicoGOqUBXN7xb%2BEzJnThH3HTN7tpejBMj%2FNBENOOBGFBTKKwTnqqTZtrHZJMjJDQyZbJ2GEFz0QPlTWtjP4eOEv4%2F9axJgioWDhjnP20rQoFv5qMB2Py5ezMz%2B88DR9dTzTVE4zLUGHTE9yWUdRHcXdZ7cNju1iKVSNZSXK%2FdF2M37TKnsQkCqIVvr0EfNPHduq98U9iGVLiheRzo%2Fv56hsb3kDAyFEDI02B&X-Amz-Signature=4925959c9a8ea353e8028334f5c3a6d381dbd6b3ac2ae74b2478d268358c9b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPAJYHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6pBxw8KzeJnqdh7BslUapbF4KAPLNJl4bCUdQXzfvNAiEAxGBzhOAi5qgsV8TV1oc9sfRddHxhOMu1LeYb8rJVm9oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBJdbWyvQP9436GAiSrcA4JKStpAL54mszOprV1qrglsj90b%2Bzzsf0FMCwN9uuq4HIYLiohVvSYcQBn%2BYo0o0wdeRYxeZNm3PcxO7rSn1p8gsRfZq2XuOC69zY3Ay5eBi%2BwVjp2tTVrMeScDt9H34KChdyz0Xg%2BEaVLxMqQg4TWUu%2Bd7XFGNtzR2MhByI1rlQfwF8ZkQhta%2FAGlpTeLBGZhU0m2i3dXV54UP8F%2B2bNqW0Hqe7hexaXN9ZYU5zoPxMsxKZC9U3YFM0O6sy%2FPu6B5KgkcoKBgD6HUC45ZKBW2gmhFq%2Fmojh2ts8PoGqausnmq0Bbp7K8bHR20Z5icxNItvm2qyHHLsI%2Fu4mzPL5X7i4FREy%2BS2W%2F6yGEkD4BAnNOl6Df0VIew7qpq8XmMJkY%2BlncG4jeg5maSpUsRMF2vcG0HbUIkxPIQ%2Bpq%2Bp3z0kXU9ifo7Y3WhnCCMy%2B9ZjR1E%2FXe0M5BDmOxpo%2BQy5uT3T%2BMOO6TuoN1vFDU0KBBNObZF4T17qYUo478EaQ53NqIEG0jSuWH69FW2Tzh4qcy29KSUF0rPbXn1bggpJcW23CDmYMbu0BAoTkqyXGPSeBSKaWOqJ%2BqkkO2oZEumKgeCNzj7QL0dtzMmEImxNZTrSyLQIxuPJqPPxblLHMK%2BdicoGOqUBXN7xb%2BEzJnThH3HTN7tpejBMj%2FNBENOOBGFBTKKwTnqqTZtrHZJMjJDQyZbJ2GEFz0QPlTWtjP4eOEv4%2F9axJgioWDhjnP20rQoFv5qMB2Py5ezMz%2B88DR9dTzTVE4zLUGHTE9yWUdRHcXdZ7cNju1iKVSNZSXK%2FdF2M37TKnsQkCqIVvr0EfNPHduq98U9iGVLiheRzo%2Fv56hsb3kDAyFEDI02B&X-Amz-Signature=37a88bfa386fd22f86d684fb8fed7a9adf54495929e83ac23e1365fc1ea047cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

