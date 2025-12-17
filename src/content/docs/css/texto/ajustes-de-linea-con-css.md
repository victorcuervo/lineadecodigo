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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZC5KZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj90Nzw2%2F0GIozPw9g7rnHfn%2F1DA6QddrgFBpRgAqyQQIhAP4eDbU2KO2uTM25fB3H40aeLwz1bsA9RWCMrjepEr4qKv8DCHMQABoMNjM3NDIzMTgzODA1Igzd3fqmby8iPL1rtbAq3AOgVXRwGcHh%2BMimlSMfshV2%2Fw%2FBiQ8w3YLBuWGbui9CSkHNvSn0t2sojNviHgf%2BW19GblFCteOh7k2MB1XTivBEdzAxf40%2BfW9ZrJ6J2AXpSUK8c9R3Vb0e2N9bGxF8%2FnnvuurtaxQXOP1fHfxrME3i4RvZ%2FIzFW0FO7ht9qJgPU39iDCJGDVdenm7twgpUkhfi46xrAO96Kk0yFbfSqWUPXtbG2BZtGBg6HV6dDpL%2FWCQJtlGFfpUmGvQ4Syxks3%2FCw4HFK6fb%2BIEOoj7SItmUuqMWwsd6twc0w%2BC%2Fo%2FGZUd%2F85lZRDN7x%2Bir4dZvRqRtwvlH8tni1lham2tjCtFwZ0iikZSjfJzg0ILRvJuRgOgakbASyYszNuiuw9pIp%2BC%2BdmtKzuAR7moa7cQYKdRfJruErbI1NhPlJvuRat7RO7ZlsEXhHNyZaFFe3lkfbc8lKMaFnQZQsms3Dk5WrzjhCp2n11F%2Bqj5pDgoetMKsEK8PePJ92goIJHLX1b36TttOa%2Fm82d9SWQ682qcCS91pgm6nfM%2B%2F5s3BQfHPFci6dCqyP4VTOQ%2F3xQyZGtu16i0z7LckxnRVPhmalZH88apu0DpKZFuQ0DDg%2BpU1Wy6ctrF0KwQM%2BWgmR5%2B4rCjDMlYjKBjqkAXvvu7qK5uAVt%2B9Mk0iySglU3fFZMwsRa75xDntaeu6i8zqQtkjqPImlzNZFcCz4Gcpzb4TLfoNwxgF1DKjM5Dox4rzLoLst1ygYVhiwWCtqI92kswUXJ%2FMPaVPgPNtPfWsTdICQiZWsSQ%2B4I3SuuREShJ2dAN7OmBl5mX6c%2Fo3dJkOavqQ5ALTQUrxKMtEbS58G%2BAeJburF2JdhOnxuicdz8UHG&X-Amz-Signature=e584344dbe45f8ce4fb4ba29214fd1d0f68408b959da9e82b83d3109e157c8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZC5KZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj90Nzw2%2F0GIozPw9g7rnHfn%2F1DA6QddrgFBpRgAqyQQIhAP4eDbU2KO2uTM25fB3H40aeLwz1bsA9RWCMrjepEr4qKv8DCHMQABoMNjM3NDIzMTgzODA1Igzd3fqmby8iPL1rtbAq3AOgVXRwGcHh%2BMimlSMfshV2%2Fw%2FBiQ8w3YLBuWGbui9CSkHNvSn0t2sojNviHgf%2BW19GblFCteOh7k2MB1XTivBEdzAxf40%2BfW9ZrJ6J2AXpSUK8c9R3Vb0e2N9bGxF8%2FnnvuurtaxQXOP1fHfxrME3i4RvZ%2FIzFW0FO7ht9qJgPU39iDCJGDVdenm7twgpUkhfi46xrAO96Kk0yFbfSqWUPXtbG2BZtGBg6HV6dDpL%2FWCQJtlGFfpUmGvQ4Syxks3%2FCw4HFK6fb%2BIEOoj7SItmUuqMWwsd6twc0w%2BC%2Fo%2FGZUd%2F85lZRDN7x%2Bir4dZvRqRtwvlH8tni1lham2tjCtFwZ0iikZSjfJzg0ILRvJuRgOgakbASyYszNuiuw9pIp%2BC%2BdmtKzuAR7moa7cQYKdRfJruErbI1NhPlJvuRat7RO7ZlsEXhHNyZaFFe3lkfbc8lKMaFnQZQsms3Dk5WrzjhCp2n11F%2Bqj5pDgoetMKsEK8PePJ92goIJHLX1b36TttOa%2Fm82d9SWQ682qcCS91pgm6nfM%2B%2F5s3BQfHPFci6dCqyP4VTOQ%2F3xQyZGtu16i0z7LckxnRVPhmalZH88apu0DpKZFuQ0DDg%2BpU1Wy6ctrF0KwQM%2BWgmR5%2B4rCjDMlYjKBjqkAXvvu7qK5uAVt%2B9Mk0iySglU3fFZMwsRa75xDntaeu6i8zqQtkjqPImlzNZFcCz4Gcpzb4TLfoNwxgF1DKjM5Dox4rzLoLst1ygYVhiwWCtqI92kswUXJ%2FMPaVPgPNtPfWsTdICQiZWsSQ%2B4I3SuuREShJ2dAN7OmBl5mX6c%2Fo3dJkOavqQ5ALTQUrxKMtEbS58G%2BAeJburF2JdhOnxuicdz8UHG&X-Amz-Signature=ff91b4047c757fa29eba142465cc43203878fd550c9ce8ea0cb9fb9324f09476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

