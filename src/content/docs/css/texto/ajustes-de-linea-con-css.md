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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4J4AS5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHSr%2BSz%2BP90ercJtj4%2BeZxNPaDB4Dx7Hmj4RshllsZAIhAO%2FqpLiTdJ7MkSzW%2F50t1MA%2BGglucn%2Be%2FV4k1SAytP6gKv8DCHgQABoMNjM3NDIzMTgzODA1IgxITVSDAAbLNwoNcQYq3APG%2B77L0Oy2fyutcu5heJ%2FPOD3Q3CHVKZQCCjBWmuUxngzzNrGvw6szX%2FRJoo8pri1apY1n01wYRo6aX1aDE0IT1dOsXGr3rSOqn%2BKlPNl45Rcug%2BHkH0we0w3ZzuovOB5U7lE12RaahyUkVEPvk%2BN2yhcEGKi%2FJF2P4AHJegUeVUzmuJyWM5DfsWrM1nGdXK3cMjJ%2FoEJd%2BJQQsAn27gmuxGF2yCM56y%2B95DJob2Zk1%2Bq38BIZKui3SrwcU12FLWGDye%2Br%2BfEBjjYeRpBcjn2ejEYyHfN05BmRQGvRaG7PLBX0VSiMU%2FjDbRNpq%2FKiifZDGFel4wHF4IGVAsuEwhNVuITxSsiKXjudhqWRrzoGdadjpPkA9dw1ZLZ6%2F4dvyZApDd3hno7TRpZKkBX0HMGGsKxJnHLvY3x06sPYujuJ%2BlfAfSV1zzdXYVS7T4vCyXLXhn0H5o0N4M4s4bThpBkFC4EkIMJB8NqLSY3BRrV1K28MtCEdUzyXAYiWNU%2FF5IP52HVUja3shCPJ8cvyQk50VYbXwJvqlwa3pntPplEf9CeTckQql6A9KRVULwZBvhOnsqhzEH9t7PkQqRH8Ln4fPXQqnS3Dz24nYRessy7GQGQDDXkO5kff7%2FlwHjDLnInKBjqkAcFbk6k42mi51y1ZIb%2BnpAgNMoFMk8P99zVDFZgM53mCUgW2Pzh4W78FEAK7omGxu5zD%2F%2Be8%2FHGY%2FDan%2FSPckVO6teSYI6bxyldDegZX4gcHV7dHcVpdwH6hy5J8SzRDJRETT21kVVAtOUP3e6sIBYU04kspeHUwZnJHvF47jL7rFk0f7fDgSUhOw4jjXnXWLz9e8pITr6oaGhLNCHnGm2zBmaqb&X-Amz-Signature=bdcda6d9bfa4888b10330758306b85156d08d62905991d6d7940d60b4d104233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4J4AS5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPHSr%2BSz%2BP90ercJtj4%2BeZxNPaDB4Dx7Hmj4RshllsZAIhAO%2FqpLiTdJ7MkSzW%2F50t1MA%2BGglucn%2Be%2FV4k1SAytP6gKv8DCHgQABoMNjM3NDIzMTgzODA1IgxITVSDAAbLNwoNcQYq3APG%2B77L0Oy2fyutcu5heJ%2FPOD3Q3CHVKZQCCjBWmuUxngzzNrGvw6szX%2FRJoo8pri1apY1n01wYRo6aX1aDE0IT1dOsXGr3rSOqn%2BKlPNl45Rcug%2BHkH0we0w3ZzuovOB5U7lE12RaahyUkVEPvk%2BN2yhcEGKi%2FJF2P4AHJegUeVUzmuJyWM5DfsWrM1nGdXK3cMjJ%2FoEJd%2BJQQsAn27gmuxGF2yCM56y%2B95DJob2Zk1%2Bq38BIZKui3SrwcU12FLWGDye%2Br%2BfEBjjYeRpBcjn2ejEYyHfN05BmRQGvRaG7PLBX0VSiMU%2FjDbRNpq%2FKiifZDGFel4wHF4IGVAsuEwhNVuITxSsiKXjudhqWRrzoGdadjpPkA9dw1ZLZ6%2F4dvyZApDd3hno7TRpZKkBX0HMGGsKxJnHLvY3x06sPYujuJ%2BlfAfSV1zzdXYVS7T4vCyXLXhn0H5o0N4M4s4bThpBkFC4EkIMJB8NqLSY3BRrV1K28MtCEdUzyXAYiWNU%2FF5IP52HVUja3shCPJ8cvyQk50VYbXwJvqlwa3pntPplEf9CeTckQql6A9KRVULwZBvhOnsqhzEH9t7PkQqRH8Ln4fPXQqnS3Dz24nYRessy7GQGQDDXkO5kff7%2FlwHjDLnInKBjqkAcFbk6k42mi51y1ZIb%2BnpAgNMoFMk8P99zVDFZgM53mCUgW2Pzh4W78FEAK7omGxu5zD%2F%2Be8%2FHGY%2FDan%2FSPckVO6teSYI6bxyldDegZX4gcHV7dHcVpdwH6hy5J8SzRDJRETT21kVVAtOUP3e6sIBYU04kspeHUwZnJHvF47jL7rFk0f7fDgSUhOw4jjXnXWLz9e8pITr6oaGhLNCHnGm2zBmaqb&X-Amz-Signature=65c9a760af87208d992b8e95a1e22cc93a7b2d9c93f09304fbbd99f8a57a2435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

