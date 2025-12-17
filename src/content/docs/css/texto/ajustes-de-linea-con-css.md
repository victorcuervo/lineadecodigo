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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FFVF6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BCfLV%2B9er%2BoHhO5UB6NQH6zVzrDASBM1L8LC%2Fxgn65QIhAJFaD9yAsMI9xzJADR71tgrfex2djryAhD2NTQYQlMwrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGnIHJUPW2HUBq%2FEIq3AOkMGFzjnG8iz0JgTWemrxQ0mMqaodOG6GCjlVTT7reh9m0%2FXkaXE3h0CxQyM6qXzvdF7B1oehYRn11N2sFWmmCBzu98B4VltU4vNJTAQoU%2FfcLGpvG1Grxfa0QeV6ZMCBYdhkcKSHVxFoJSGFnMKVwl7bM8EY%2BIVZ2f71B1WkWJgDyGaW5uuKk3LR0Emvvev2icGsZgDirJh6UZ5QHnO28dGSYegyMPLhlfJuNTxwUrGNLP2RJ17AdT0jLp8%2BXFGGzpw42LSumxfxJ2X43Ht94K7GSn4LSgHuD4%2B16P4B1Goe1QuG8qQJZY4NL8Cixiuj2vqW4WqPF%2B3JqEsi3LGITENUeJDm%2BUwHf8sVvX%2BsTnhdmvsTNF3KAu%2FRu1wLWSf627CNoQgJmAAbr5J9uwC12kCVs5I9w1jXMxenTAWmGl8276iLDlSA3Ltk5umaPcLQyPPsSzBwVSYqU8EQ5QcL1cnhfE3gJURhzrqjn3ixWulJ3ImXalbMLA5hM%2FyaRUDh%2FVmo%2FRVspU2JB%2BnajmNVTTMaeJhszoOggJfyx1yKB5uaN8%2FnSt5XcsHRbU%2F8ZZhRteaO4jiA3vpaNVdk%2FvmXZYKfuVpN5bbpcUFPeePC6NX7VctY3Z4JTEkK7mjCmoIvKBjqkAdh7nzzRSOn3vewRxq5pFYpfHteKlvw0TgtjxvMxjjWaOemLftGCl6O2EgkHg27xVNAw2ZzjvmC8Rd7YrItXer7AmnsiywUW0HDVzv%2B9CHfiM4obWkuTiNWBhZ5DAi1ZyI4d9Jf%2Bl6Geb4lFVraf35l5KmxphlkIhT4UPNaa03DfzpXTToGrs%2FugBW3jmW30t%2FCMVkARuwP8yQD3q3wty%2Bk9lcZT&X-Amz-Signature=31a617ccbb165cbbd2cd369c5cb13e2b5dc62fc3da47abbca14ebfa8ecc6627a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FFVF6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BCfLV%2B9er%2BoHhO5UB6NQH6zVzrDASBM1L8LC%2Fxgn65QIhAJFaD9yAsMI9xzJADR71tgrfex2djryAhD2NTQYQlMwrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGnIHJUPW2HUBq%2FEIq3AOkMGFzjnG8iz0JgTWemrxQ0mMqaodOG6GCjlVTT7reh9m0%2FXkaXE3h0CxQyM6qXzvdF7B1oehYRn11N2sFWmmCBzu98B4VltU4vNJTAQoU%2FfcLGpvG1Grxfa0QeV6ZMCBYdhkcKSHVxFoJSGFnMKVwl7bM8EY%2BIVZ2f71B1WkWJgDyGaW5uuKk3LR0Emvvev2icGsZgDirJh6UZ5QHnO28dGSYegyMPLhlfJuNTxwUrGNLP2RJ17AdT0jLp8%2BXFGGzpw42LSumxfxJ2X43Ht94K7GSn4LSgHuD4%2B16P4B1Goe1QuG8qQJZY4NL8Cixiuj2vqW4WqPF%2B3JqEsi3LGITENUeJDm%2BUwHf8sVvX%2BsTnhdmvsTNF3KAu%2FRu1wLWSf627CNoQgJmAAbr5J9uwC12kCVs5I9w1jXMxenTAWmGl8276iLDlSA3Ltk5umaPcLQyPPsSzBwVSYqU8EQ5QcL1cnhfE3gJURhzrqjn3ixWulJ3ImXalbMLA5hM%2FyaRUDh%2FVmo%2FRVspU2JB%2BnajmNVTTMaeJhszoOggJfyx1yKB5uaN8%2FnSt5XcsHRbU%2F8ZZhRteaO4jiA3vpaNVdk%2FvmXZYKfuVpN5bbpcUFPeePC6NX7VctY3Z4JTEkK7mjCmoIvKBjqkAdh7nzzRSOn3vewRxq5pFYpfHteKlvw0TgtjxvMxjjWaOemLftGCl6O2EgkHg27xVNAw2ZzjvmC8Rd7YrItXer7AmnsiywUW0HDVzv%2B9CHfiM4obWkuTiNWBhZ5DAi1ZyI4d9Jf%2Bl6Geb4lFVraf35l5KmxphlkIhT4UPNaa03DfzpXTToGrs%2FugBW3jmW30t%2FCMVkARuwP8yQD3q3wty%2Bk9lcZT&X-Amz-Signature=306c3f6440d3ea9f8f03b4dc473956ea29eeb62ef1286d0a275367b26c563897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

