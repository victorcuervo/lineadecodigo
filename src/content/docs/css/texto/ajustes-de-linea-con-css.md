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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4E7OJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAjOGp7GdAiWBsTE1%2Fau%2BF%2BnRZdyXbl6eg5mvt8rWjzAiEAk6QnHLueLN7twffLAVJDYNXkqhLNDQ3KIlLKIRF9GpEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIRXOpNjoX2eD8R3qircA2YOZa9OpWTOj%2F1T9Il8wd%2FXGjNu2cAWrsG%2BVjZNaAapx5IfFmywtIQzCDrat7ts1nrE9gcnF8JJ2qwLA%2FIKi%2Fe5IqcEZk3J6PPBzZ5iawB%2FF3bJTv%2BkgChx19Cn%2FXUaIun3DK5iT%2BOtQIRLH7AHNIYc%2F4N7SxK4owLxnZ82E6E54aZ4%2B0Vs5Qr7afFlrKCjloug8NT0pY6gJilMMxzrZq3N1wihpdT1FKLExezwpy3MIBxO76FBK%2FIJijYmlqFrYmwIWROOVCLA3FhsoqvsPdHo%2BwutW%2FzeZWZB7dNlEXOv3AugXRXFPhmrVGNjsSgyFfIVYGyUcoVHyjoyH38dgXsWRKTE1dngobZPGGOKLcszdenegBaa9OLHJCobClR7NrIrzPokC9VaKiB6BEuzpLAmJEXAIV00XdWXq1pFM9S%2BmavktZ47luiH%2FgIfXUqX5eTQi1pJy%2Fw4xVQSM%2FfngEbPxvWzd8ht01l7cua9T%2FhgJReEav6qXXtcfP4M5KzvCBGuQO7TLfo5iWKsaydUoZ4Qg%2B9f7NA2WN5QeTWfktmA9qbcRdDLICDxSVqx6qZ4K8LpnRG1%2BFGfOR6bR9BJpniRwXCIVM0%2FwEjZPakf2pGiN%2BfjXsVXPiLHsGw0MM2PisoGOqUBSdnPu7pk0uWQaBMY2m664D6Yq0M7gs75AcloZR3OcbhgwQRnrnkJj4HLYzDbV1r6Iq%2Fqo5go3FegRX3iI6ZtPvhJkVJ4YbGPmcDD8xgwIHf6M%2BLsK2GHH4hUCqRtqFP1PDwN4HDndOwVVAkE7Zs72zIOHfNfHr268JrcVMU0EzUB9vzPnXsdLi36ZTM%2B7Vrhjq6glrkfedFtY02u5TRX1JzLLZiz&X-Amz-Signature=f825186ede046200d6c9e721bc4ba02024b2beb0290e7a68d498d3c9faaf1da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4E7OJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAjOGp7GdAiWBsTE1%2Fau%2BF%2BnRZdyXbl6eg5mvt8rWjzAiEAk6QnHLueLN7twffLAVJDYNXkqhLNDQ3KIlLKIRF9GpEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIRXOpNjoX2eD8R3qircA2YOZa9OpWTOj%2F1T9Il8wd%2FXGjNu2cAWrsG%2BVjZNaAapx5IfFmywtIQzCDrat7ts1nrE9gcnF8JJ2qwLA%2FIKi%2Fe5IqcEZk3J6PPBzZ5iawB%2FF3bJTv%2BkgChx19Cn%2FXUaIun3DK5iT%2BOtQIRLH7AHNIYc%2F4N7SxK4owLxnZ82E6E54aZ4%2B0Vs5Qr7afFlrKCjloug8NT0pY6gJilMMxzrZq3N1wihpdT1FKLExezwpy3MIBxO76FBK%2FIJijYmlqFrYmwIWROOVCLA3FhsoqvsPdHo%2BwutW%2FzeZWZB7dNlEXOv3AugXRXFPhmrVGNjsSgyFfIVYGyUcoVHyjoyH38dgXsWRKTE1dngobZPGGOKLcszdenegBaa9OLHJCobClR7NrIrzPokC9VaKiB6BEuzpLAmJEXAIV00XdWXq1pFM9S%2BmavktZ47luiH%2FgIfXUqX5eTQi1pJy%2Fw4xVQSM%2FfngEbPxvWzd8ht01l7cua9T%2FhgJReEav6qXXtcfP4M5KzvCBGuQO7TLfo5iWKsaydUoZ4Qg%2B9f7NA2WN5QeTWfktmA9qbcRdDLICDxSVqx6qZ4K8LpnRG1%2BFGfOR6bR9BJpniRwXCIVM0%2FwEjZPakf2pGiN%2BfjXsVXPiLHsGw0MM2PisoGOqUBSdnPu7pk0uWQaBMY2m664D6Yq0M7gs75AcloZR3OcbhgwQRnrnkJj4HLYzDbV1r6Iq%2Fqo5go3FegRX3iI6ZtPvhJkVJ4YbGPmcDD8xgwIHf6M%2BLsK2GHH4hUCqRtqFP1PDwN4HDndOwVVAkE7Zs72zIOHfNfHr268JrcVMU0EzUB9vzPnXsdLi36ZTM%2B7Vrhjq6glrkfedFtY02u5TRX1JzLLZiz&X-Amz-Signature=c613e0b5f72cca711a70e327b7f04984b8dce09c484a6043bcf734d1a6db0be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

