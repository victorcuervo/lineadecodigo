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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2722AA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI3oxv2cohLtyruKyG%2B%2FbK%2BNpcUq7DkKzUpGChOI7rMAiBQNajAkRMzZlIhaqwpB7iXBaLdQrVVsPf0Ylov%2BEUK9Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMRV31IjalpmtZXcUOKtwD%2B55xwQocApATRUa7ySTl7Q3WGa6HSnHC6rGyhqNWbdWar49fn%2BPnYkzgRHx%2FcJN4OoLq4SZtE%2BvlrcQif4SRsk13fBWa8CYR%2BPoXQk7i9325MZr2F0LHvqfjS8%2B34MH2UVbbNL4X3B%2FXF67g65eE8xZY7338uJUT2fdm82r2q0WhckvzOOKLIxsoLtRNkuh8zVac%2FEhg1GenpF9KAVRjRoAAysjBQkxNKLlmORZuD%2FDrm3LzSQf3kD6gBIBq6Z6Ja7JbOykmE3AmZt7ig1oA1qHyNRqVVwCIhaW%2BDpIZs68A0u6cdrcW9D2Z8tMsLNkDnfql122BCX2rSQDSdNEMTgeDEHlCT%2BzSnkAC8sjGf6WBb2XNmTaRCvBAluqRP7RrF%2F32xbP1rgWcFpdBWgBce6ORAe3u4%2BJXqlhf%2BKcFkxFgJSnCiCeo%2Be52Myx0rFI3rHmFKW9EDmoLn5zc3hP2lTDvdpNcypxQvqudLWYV1fRBU8U9f7omhOTvgd3sspuIhcqxO8UMFbnvTUTyNG7cG0%2Ff%2BbdmjkQYqbR800wS2UX6k2DceL7Ri0URpLpcO3HOhxJzmW2NIiYwXZROW94Nwl%2FzGD61f22m2Hg7v0L9Re%2B7D7jSEi7OAc%2F3Rmkw2%2BmIygY6pgHS7lCCUeLjaEp7GWoDSSFOLKLFkGt%2FCuRPhBrfXzLsaFMeFElZPuHtAzNxfc5k5RVA0BdOKnUYUysqmsW42fuDQivdGEX5ogbFAciEJDHT4U6W6tmvzSuVAcXRjmy7x%2Bwxz%2FFdaH1sP0w6cr%2Fhe%2BOc4B%2F%2BQM3VUGHuNNmHUpfdA3CM6lgs0TkdCymwzg5epIFqgJq6IqP2BxxMCLYdW4as8fYawdpn&X-Amz-Signature=b817933a0e3992aeef85a7e295ebba2fc651ca444ba44852506b55e09a120846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2722AA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI3oxv2cohLtyruKyG%2B%2FbK%2BNpcUq7DkKzUpGChOI7rMAiBQNajAkRMzZlIhaqwpB7iXBaLdQrVVsPf0Ylov%2BEUK9Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMRV31IjalpmtZXcUOKtwD%2B55xwQocApATRUa7ySTl7Q3WGa6HSnHC6rGyhqNWbdWar49fn%2BPnYkzgRHx%2FcJN4OoLq4SZtE%2BvlrcQif4SRsk13fBWa8CYR%2BPoXQk7i9325MZr2F0LHvqfjS8%2B34MH2UVbbNL4X3B%2FXF67g65eE8xZY7338uJUT2fdm82r2q0WhckvzOOKLIxsoLtRNkuh8zVac%2FEhg1GenpF9KAVRjRoAAysjBQkxNKLlmORZuD%2FDrm3LzSQf3kD6gBIBq6Z6Ja7JbOykmE3AmZt7ig1oA1qHyNRqVVwCIhaW%2BDpIZs68A0u6cdrcW9D2Z8tMsLNkDnfql122BCX2rSQDSdNEMTgeDEHlCT%2BzSnkAC8sjGf6WBb2XNmTaRCvBAluqRP7RrF%2F32xbP1rgWcFpdBWgBce6ORAe3u4%2BJXqlhf%2BKcFkxFgJSnCiCeo%2Be52Myx0rFI3rHmFKW9EDmoLn5zc3hP2lTDvdpNcypxQvqudLWYV1fRBU8U9f7omhOTvgd3sspuIhcqxO8UMFbnvTUTyNG7cG0%2Ff%2BbdmjkQYqbR800wS2UX6k2DceL7Ri0URpLpcO3HOhxJzmW2NIiYwXZROW94Nwl%2FzGD61f22m2Hg7v0L9Re%2B7D7jSEi7OAc%2F3Rmkw2%2BmIygY6pgHS7lCCUeLjaEp7GWoDSSFOLKLFkGt%2FCuRPhBrfXzLsaFMeFElZPuHtAzNxfc5k5RVA0BdOKnUYUysqmsW42fuDQivdGEX5ogbFAciEJDHT4U6W6tmvzSuVAcXRjmy7x%2Bwxz%2FFdaH1sP0w6cr%2Fhe%2BOc4B%2F%2BQM3VUGHuNNmHUpfdA3CM6lgs0TkdCymwzg5epIFqgJq6IqP2BxxMCLYdW4as8fYawdpn&X-Amz-Signature=8545da9182b291af83a56a03a9526915277ef566343e18eb006a85c678d26e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

