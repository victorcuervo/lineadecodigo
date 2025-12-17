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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6D4GMAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVNsEPq68LI8ML0ycLXl9v2Q7U0bm6cq0OY9K39BoasAiAfHU60%2FFJUkcuytxgQcuSSOePr68J2nlZ1QgcURre77yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVxLDYHR%2F8jM4cRyKtwDz%2Frfh8ilOJGoxGhC%2BzaR8AZMSQZw3FyQdcuF4jCN6mk6leTW%2Bsi5kNnzuK%2Fcp5eSQV3R7%2FDeIhoAc98lvHB6NSxU3tYN6a4R10U5Ic0xHjDfYxLOEmwtPvu9U%2F%2BPAaT%2BA9QoaJVDJnXdOr70mlJQvmGNUXrl5o0nuAR41avYoLK3VvmXfoJmmc6rJDFFt9bhhLAsZNuvdOPgfkubmc5ntkh92epaBYQOsfKj1yAw%2BzMDeDJBM941VN1h31b8I4hZ4npxzl%2F%2FvttCNpR5RBdWzs%2F8o%2B2Vb7hTXk69oPhb9j2ITwU9kDtOXPE6IfHsySXJeBVuwc%2FmWTwr39VbKvA%2BPN15fU0No%2FSOixHiYZCPm4XrwdjGH4iyrVHDVWAgAJnxHUWcKvW%2BRnsmvlj8NGyfC7k4bDxPa10u82CyQFWJtmyDjrQChU68rqiyXprunoSBqlk1bjYvd06ffgNdQHmXu8UrNrwQdyifSk8YTkALRBmUCo4fxlx%2Bq0z6%2Bt1i35NEVf8oy34FvWtY%2BnmhL%2BxJGtq44mQH3sdKkvCJc68V14F7MLHXV1hDdyDJntnymo08D8%2F01ygbtPEMrm6QOZYquWXlsgAansehXO9hoibuLAOzG2U8DtIYfMyhTIMw2IqMygY6pgEm9ctyAiICdYqgRNGDaZWhapiVoU%2FfcNqia2xFjt1A9zXY0jGI44tfMcJmotFhlBwqZctFShgroFWGgWbdDbjWfnyfhNHvmGWgdwY%2Fq%2FRoZgjQeXqxPmPka91Spgx7HUoijk%2FLYnmK7xy32jdf1DwOfl7FeTBoG1xoDKArlEmo1CobNTBvZx%2BGq3%2Bn5hbzKB4mx81%2FEhDDN4RK%2BekoINshXvpor3mI&X-Amz-Signature=699f9051d975c349ba3b371340e163b0ee6d731db36dc07bc9607a241be020e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6D4GMAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVNsEPq68LI8ML0ycLXl9v2Q7U0bm6cq0OY9K39BoasAiAfHU60%2FFJUkcuytxgQcuSSOePr68J2nlZ1QgcURre77yqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVxLDYHR%2F8jM4cRyKtwDz%2Frfh8ilOJGoxGhC%2BzaR8AZMSQZw3FyQdcuF4jCN6mk6leTW%2Bsi5kNnzuK%2Fcp5eSQV3R7%2FDeIhoAc98lvHB6NSxU3tYN6a4R10U5Ic0xHjDfYxLOEmwtPvu9U%2F%2BPAaT%2BA9QoaJVDJnXdOr70mlJQvmGNUXrl5o0nuAR41avYoLK3VvmXfoJmmc6rJDFFt9bhhLAsZNuvdOPgfkubmc5ntkh92epaBYQOsfKj1yAw%2BzMDeDJBM941VN1h31b8I4hZ4npxzl%2F%2FvttCNpR5RBdWzs%2F8o%2B2Vb7hTXk69oPhb9j2ITwU9kDtOXPE6IfHsySXJeBVuwc%2FmWTwr39VbKvA%2BPN15fU0No%2FSOixHiYZCPm4XrwdjGH4iyrVHDVWAgAJnxHUWcKvW%2BRnsmvlj8NGyfC7k4bDxPa10u82CyQFWJtmyDjrQChU68rqiyXprunoSBqlk1bjYvd06ffgNdQHmXu8UrNrwQdyifSk8YTkALRBmUCo4fxlx%2Bq0z6%2Bt1i35NEVf8oy34FvWtY%2BnmhL%2BxJGtq44mQH3sdKkvCJc68V14F7MLHXV1hDdyDJntnymo08D8%2F01ygbtPEMrm6QOZYquWXlsgAansehXO9hoibuLAOzG2U8DtIYfMyhTIMw2IqMygY6pgEm9ctyAiICdYqgRNGDaZWhapiVoU%2FfcNqia2xFjt1A9zXY0jGI44tfMcJmotFhlBwqZctFShgroFWGgWbdDbjWfnyfhNHvmGWgdwY%2Fq%2FRoZgjQeXqxPmPka91Spgx7HUoijk%2FLYnmK7xy32jdf1DwOfl7FeTBoG1xoDKArlEmo1CobNTBvZx%2BGq3%2Bn5hbzKB4mx81%2FEhDDN4RK%2BekoINshXvpor3mI&X-Amz-Signature=7090a51893c9dd988f9e95f749a27b877798619b5f9a9127d0c228a9be3ab930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

