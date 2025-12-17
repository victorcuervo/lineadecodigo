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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DCA7DS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7D3mniVjPV%2FkH%2Br%2BJibuwKLOazH3r0gnUUSN8h4gbaAiB3kJ%2FurVDExY%2Fces%2FzkTOyEbRF2AJcHCScK9eNJpFtCSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM48Y2BnoQzYAq28IgKtwDGoDj9gJkVL3vRlUjoM4nbwKCOI4tTNG1I5iUPdrl11dEasosPARYPElXLalhn27oddSzRgAuYXPL48P0ClPHwFsoWjltvY9F80ek36CBe1cMtiOPjDSNDtsyeWY3COGztVsgG8VaE5nWWJyxToz5ShRLC6nOZJ%2BbwwOOn6Mel0SVJyQkMENKszhYGJTZuVudA%2BY%2BJMevcJUCyzsoye89YHFZ9agm9%2BAjXwE1siGfz96bZlTrxVl%2FsQ8vwQkkfh6x4w9XV06b4KMAvri0tXaNVAFzuEp74%2F0IWXz%2BI7s0VC4%2BViiHb%2F8bRY5kYmw2qoYtvKrOfvbVuo60RBdvxbtVRgn6wPcVRK1bJBW3sjlmUFpiVSyuJlP17heRmGJvfQr026QP7lieSYIWbt5u9LRU%2FlYIUimTcsohzUzl9IcjE7cXljymqeI7UMmmlJ5XRSQwWppmytNU3Zvpm4vmmuSet2iubr9p8kJdoHN1if0jjLVu0P0jKhJuPm2A7dMXe9WBlE%2BOoudOVy18bhkpuTV3q6LIo72wXWlOh3dcYyP2vpMOugBUpOhc5E0VNM%2BcycXzcN5yXa9ZQ7O6MU80N6RJykuF4P1wSgLDQvCLbZ0oyCLg6Bb0hfcSKQgieCwwxM6IygY6pgG%2Bese14WIVFIuATrSza8nxjjTbAs6d1bQd8ZDZ1dNBmor%2BVidw2I3Ypm2fBbssE5UUY%2BuNbwvTXorB4AAnWv6bmxuC40r8YP25Y7Vt6Nik8BYgGEh%2BaILuO7QqzjjvhLMzA5Nuzb%2F%2FrdZCYB2hzmAhz7tHQNKlej2kQzJLC%2F9fnp%2FBhn%2FuoPaIvlb2txM470toeIUdd%2BVZ8ysjIW%2FNlbmzhsoUvvoE&X-Amz-Signature=e7d27f1bc16f3307749db4e15a3baf8ecf932343ac7873b4dd076ec384798f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DCA7DS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7D3mniVjPV%2FkH%2Br%2BJibuwKLOazH3r0gnUUSN8h4gbaAiB3kJ%2FurVDExY%2Fces%2FzkTOyEbRF2AJcHCScK9eNJpFtCSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM48Y2BnoQzYAq28IgKtwDGoDj9gJkVL3vRlUjoM4nbwKCOI4tTNG1I5iUPdrl11dEasosPARYPElXLalhn27oddSzRgAuYXPL48P0ClPHwFsoWjltvY9F80ek36CBe1cMtiOPjDSNDtsyeWY3COGztVsgG8VaE5nWWJyxToz5ShRLC6nOZJ%2BbwwOOn6Mel0SVJyQkMENKszhYGJTZuVudA%2BY%2BJMevcJUCyzsoye89YHFZ9agm9%2BAjXwE1siGfz96bZlTrxVl%2FsQ8vwQkkfh6x4w9XV06b4KMAvri0tXaNVAFzuEp74%2F0IWXz%2BI7s0VC4%2BViiHb%2F8bRY5kYmw2qoYtvKrOfvbVuo60RBdvxbtVRgn6wPcVRK1bJBW3sjlmUFpiVSyuJlP17heRmGJvfQr026QP7lieSYIWbt5u9LRU%2FlYIUimTcsohzUzl9IcjE7cXljymqeI7UMmmlJ5XRSQwWppmytNU3Zvpm4vmmuSet2iubr9p8kJdoHN1if0jjLVu0P0jKhJuPm2A7dMXe9WBlE%2BOoudOVy18bhkpuTV3q6LIo72wXWlOh3dcYyP2vpMOugBUpOhc5E0VNM%2BcycXzcN5yXa9ZQ7O6MU80N6RJykuF4P1wSgLDQvCLbZ0oyCLg6Bb0hfcSKQgieCwwxM6IygY6pgG%2Bese14WIVFIuATrSza8nxjjTbAs6d1bQd8ZDZ1dNBmor%2BVidw2I3Ypm2fBbssE5UUY%2BuNbwvTXorB4AAnWv6bmxuC40r8YP25Y7Vt6Nik8BYgGEh%2BaILuO7QqzjjvhLMzA5Nuzb%2F%2FrdZCYB2hzmAhz7tHQNKlej2kQzJLC%2F9fnp%2FBhn%2FuoPaIvlb2txM470toeIUdd%2BVZ8ysjIW%2FNlbmzhsoUvvoE&X-Amz-Signature=105a209aa6c2ccf45b9b600970b90333c37d0a612f9546ca6430517f83f4969d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

