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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDQ6WEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPCWo%2BE9j2nFHk1WVpJxylR5seIbZWQYxTCcwwPbfKAiEAlqbMB8fNZoU3qnGW27VgWm3k1yPL449%2B0FY4np5x2XUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEjibGHvj4cLbyNTCyrcA6yY6r4PgkDsosdOraTSvH4jYkCEjSjFBXKfiIh43K%2FJBEDzMC9pEgImKnFIoUagVxsqL%2FHyM6o%2BBqJXr83qNNt17OtIy7Hi55Mivgm157DSJzC24hu1OIHM%2BGcHlI2k99gOgKNaiQWnB0tFx8qfS2EF23M8B4UvKGXVbreR%2BDaAAP1fjdDnUe7StlCM3mc%2FAryRt9oVU4nYSgLoaOogKvk60vGabnuedQImLV36%2Bovsjokb1wD9KK7%2Fd2wOjV%2Bp2ZlW0%2BHIsS0n%2FBxLk0GLwoW7bJnWl9wvS70Ac09DcUihZ9bD26%2Fi2yKzoGx90YQ5QQoNM66RQUMt9zhN5SXaDBnZbf%2Bon8n0VVopksSPOxWIufwM3FCayMfR3B5w6RZ%2BqSBrrJwhqa6UjnSXsClE%2FO0EsRi%2B8LoOito3u6gvFPdVIyMt4yFNxzSt%2FDoeIoLFyRhKMiCYTCmPLWa2PVfwcf0BGNRhhZtO6fn4A3KuLbza66zcImq0%2B1vgJvNWaLxOzajPniDZiHD8BO5NDnLTpPgHRpDcJx6Tno6MBVFsjWRCFI7bgcpTrZSzyxylaYEiOt4Mpmu9KubYec62np5K70LVukqcH87McL0gDRrv7GhykZnsH7rsfMAc%2FBx2MOLRicoGOqUBtKSS9adipqqMeIsr5lVdHYfikQSSCZT5fabdpUQ44kKpbyjdQbWeT380sNm27j9HsBUGz5xEP17OhWP%2BUCHrpyHmSWurqMSyRpn%2FEZSuuvVpF4LieLcnkMRm4c2eCNrcXUB28ml8VYkxVMZb8%2BXvgHqd6C5YXu6BI80lS9EXpgrb6vz18k%2BS9pP1mNNsS19FVvvIbcCFhXdY%2F574HhKpC6GLa1Rg&X-Amz-Signature=9c3fecc7021b013f22e245ca73a00f08ee43e498070d923c6fd7137f450222d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDQ6WEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiPCWo%2BE9j2nFHk1WVpJxylR5seIbZWQYxTCcwwPbfKAiEAlqbMB8fNZoU3qnGW27VgWm3k1yPL449%2B0FY4np5x2XUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEjibGHvj4cLbyNTCyrcA6yY6r4PgkDsosdOraTSvH4jYkCEjSjFBXKfiIh43K%2FJBEDzMC9pEgImKnFIoUagVxsqL%2FHyM6o%2BBqJXr83qNNt17OtIy7Hi55Mivgm157DSJzC24hu1OIHM%2BGcHlI2k99gOgKNaiQWnB0tFx8qfS2EF23M8B4UvKGXVbreR%2BDaAAP1fjdDnUe7StlCM3mc%2FAryRt9oVU4nYSgLoaOogKvk60vGabnuedQImLV36%2Bovsjokb1wD9KK7%2Fd2wOjV%2Bp2ZlW0%2BHIsS0n%2FBxLk0GLwoW7bJnWl9wvS70Ac09DcUihZ9bD26%2Fi2yKzoGx90YQ5QQoNM66RQUMt9zhN5SXaDBnZbf%2Bon8n0VVopksSPOxWIufwM3FCayMfR3B5w6RZ%2BqSBrrJwhqa6UjnSXsClE%2FO0EsRi%2B8LoOito3u6gvFPdVIyMt4yFNxzSt%2FDoeIoLFyRhKMiCYTCmPLWa2PVfwcf0BGNRhhZtO6fn4A3KuLbza66zcImq0%2B1vgJvNWaLxOzajPniDZiHD8BO5NDnLTpPgHRpDcJx6Tno6MBVFsjWRCFI7bgcpTrZSzyxylaYEiOt4Mpmu9KubYec62np5K70LVukqcH87McL0gDRrv7GhykZnsH7rsfMAc%2FBx2MOLRicoGOqUBtKSS9adipqqMeIsr5lVdHYfikQSSCZT5fabdpUQ44kKpbyjdQbWeT380sNm27j9HsBUGz5xEP17OhWP%2BUCHrpyHmSWurqMSyRpn%2FEZSuuvVpF4LieLcnkMRm4c2eCNrcXUB28ml8VYkxVMZb8%2BXvgHqd6C5YXu6BI80lS9EXpgrb6vz18k%2BS9pP1mNNsS19FVvvIbcCFhXdY%2F574HhKpC6GLa1Rg&X-Amz-Signature=0316a2b3ef6b2c61a3321cc89ad505b7fc2270e220281fc73dd26e7a9d48c50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

