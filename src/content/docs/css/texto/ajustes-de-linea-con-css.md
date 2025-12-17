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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKO37WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnFBgB8wdisOP3IDdE5VPrxjgfW6Yxg15cgwFWV69ZFAiEA%2FOfA34krvcxKlgOBIXiSKarSb7V6c3fvVKzPCr0OoqMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQETNGxZW7mUq5yPSrcA%2FpS5AezRF2Uf7k2IWKXoSwTP0T919%2FcZrIGK%2BRdgir1y%2FCaJwZzJ2Q0OB1YiI37GfQUHX%2B3nXC5EEWMd%2B1Ga4QBYKG8cEF4FA6XWtBbYMk9PLsyD9%2Bm2ElCodFvDADQPUrew5gWEZV98gfX95XibvhZnwe4f8TXSpSnxzNChSTsNPwzSvxyAFt%2B9nBi%2BxBT%2BEb7kkuwsNiepYhGSIK2AfvzfIu81eLbA%2BydRPazJ9EIGbkWZlDAsDSOm3DvwgcVy%2BZYPEdIEzFxtgWbM2DD%2F8V8bad6sVVP0%2BiTXtEqCUOOyMfURM2UoEFV202aLh7moUgflzGUq4Tmt%2BaMFT%2FJiYZieygTnmkS5giGu4dJuaYPKeDZSbH9yw0L5%2FVMBd8BjfnXSGb%2BdPm5TevsE8lKZCXDCELexOz9X%2BdZ9BzYv5XRm1WJ2y2rcyWpWurJ0bjF1KJPuRaSPevV%2F%2B7lOhRhimUTYfB000wePRNYSjIXoBO54QW%2BPSbJYydaUKydJbxQcbahCaUJalBHbeP7RqXw9OhiD1k7zNYxyYV40NWYjtV0VItwLW8%2FGQbUwVCS3OLNZ3RkvJADXDa%2BPinWTKlqBFehh6jkg3KEWFTLiSU5En1e00gXg4kxNDnaa37VMNyfi8oGOqUBe652qs9Lm164kK9hfR0Vyz4%2B%2F2NdTt%2F2DGYWJpF3o%2BjKWZrl5DvZ5yToi%2BlhTMgOy1Qpe3YiaI%2Bd7FHae76n5tQOzhhfERtBNlh1SAk0GA557Th6h3vcHR%2BPBXAabI68mUns3wMvDxCBX4kyV8%2BW%2F6r2nKn%2BuZe2%2FQROftCw%2BNyVbijzN3CcuwxANKTL7uE0BCPd8KjSJ%2FhvmWCPlbQr0FipjwEb&X-Amz-Signature=37b74691dc86ccfb3c6b96ff986439016a8f95c35bd9222f83282915496fae48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKO37WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnFBgB8wdisOP3IDdE5VPrxjgfW6Yxg15cgwFWV69ZFAiEA%2FOfA34krvcxKlgOBIXiSKarSb7V6c3fvVKzPCr0OoqMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQETNGxZW7mUq5yPSrcA%2FpS5AezRF2Uf7k2IWKXoSwTP0T919%2FcZrIGK%2BRdgir1y%2FCaJwZzJ2Q0OB1YiI37GfQUHX%2B3nXC5EEWMd%2B1Ga4QBYKG8cEF4FA6XWtBbYMk9PLsyD9%2Bm2ElCodFvDADQPUrew5gWEZV98gfX95XibvhZnwe4f8TXSpSnxzNChSTsNPwzSvxyAFt%2B9nBi%2BxBT%2BEb7kkuwsNiepYhGSIK2AfvzfIu81eLbA%2BydRPazJ9EIGbkWZlDAsDSOm3DvwgcVy%2BZYPEdIEzFxtgWbM2DD%2F8V8bad6sVVP0%2BiTXtEqCUOOyMfURM2UoEFV202aLh7moUgflzGUq4Tmt%2BaMFT%2FJiYZieygTnmkS5giGu4dJuaYPKeDZSbH9yw0L5%2FVMBd8BjfnXSGb%2BdPm5TevsE8lKZCXDCELexOz9X%2BdZ9BzYv5XRm1WJ2y2rcyWpWurJ0bjF1KJPuRaSPevV%2F%2B7lOhRhimUTYfB000wePRNYSjIXoBO54QW%2BPSbJYydaUKydJbxQcbahCaUJalBHbeP7RqXw9OhiD1k7zNYxyYV40NWYjtV0VItwLW8%2FGQbUwVCS3OLNZ3RkvJADXDa%2BPinWTKlqBFehh6jkg3KEWFTLiSU5En1e00gXg4kxNDnaa37VMNyfi8oGOqUBe652qs9Lm164kK9hfR0Vyz4%2B%2F2NdTt%2F2DGYWJpF3o%2BjKWZrl5DvZ5yToi%2BlhTMgOy1Qpe3YiaI%2Bd7FHae76n5tQOzhhfERtBNlh1SAk0GA557Th6h3vcHR%2BPBXAabI68mUns3wMvDxCBX4kyV8%2BW%2F6r2nKn%2BuZe2%2FQROftCw%2BNyVbijzN3CcuwxANKTL7uE0BCPd8KjSJ%2FhvmWCPlbQr0FipjwEb&X-Amz-Signature=3c2d6e7f40d9d8da238070a69396b65620da0223c82600c36a8833d02509a839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

