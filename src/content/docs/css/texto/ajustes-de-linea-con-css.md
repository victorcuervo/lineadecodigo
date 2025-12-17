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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655HSUIDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGApyAwOv6IVOxbzjDAKp1FYYKB6h5YFtGhgMga8WwKPAiBLt138czjJ8eCwWzUVMWevc4viIy1m3smF40T9paRzUyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX3BsX87rqWOJvVhSKtwDzGxQP2vTBcja8lAuWdtB3hYO9A80Eo5zZ93vJY8meAgOkc3ZobTgckG0f1ggXIM7Vj%2B5jAtOqMUsOigzChO1TLVXx3KAgWEuisqVif1mESSVc2fSQj%2FBzfYegZt04aivN6HF%2FXHQR2286Ls7orS51g%2FpDktqoNkble3h9EEf6%2BTCsKA6k4Y32488rWU6%2FkXwnfAZ9wdpr84UBQfLMIwm3t1MCcIhVszXmZFyCdQju3rj9RXXkC1Gx0eDjSmt73l81mcZoNQqoFp1FjcH8UKR545YzMWPn8vi929hUgwmGSWE182P%2FnzfE0l%2FymPWxvqI7YX3ZffeBgOlStCquK09vs%2FziC37hqqrWxIh386H3j%2FdEwlXsZ2%2FLIgonReXSnjMmIZQb%2Fc7ryWAWoLiyWOgg6tuxPPG9tPWAtH3suZjh08HR%2BOCwgV0KUOffykdccNkBLeNwbwkOm5LXGiakZTvfJ5JdA4Kg%2F%2BMB3vejz3XZSoTANj6NTP%2Ba2uHKyHWQR%2Bhj7CG7WxG5JQqf3lQqQXpRpurtlxIywp4Az54CbPjUg%2BjjhL2cA8ER2MnDH75tgVTOFgLAcJ2ELfAyAZHIG18lNP%2FaiGLSySomZFuRBYgNLM19%2BomTCsuBPlMeb8w6OGKygY6pgFaZ4qSRIYZnZ1sW%2FQ4e2Ygp1ktRmi5b%2FPDHSfZB4YVcMRYYFXVIH2l5I6aE8jImFJE3afp4dOcrvoGTNR6OEDXVx1hyJ8DjGpAvFXWEmyhkpb1MU9HmMjrpDCFsbTQNeKRYCimcAxBcXuM52JvwnA3XH8KZsI%2BYOMUqEsF2KkBQ4C6r9R%2FkhhJ%2FCt%2BmOIhPPx%2FFKpdQaxsg5HgAEVSIIcKQtTwa6%2Bp&X-Amz-Signature=67ff667f4f58480fec346b7c751e7667be2263e2b22379e8d910b91cde38725c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655HSUIDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGApyAwOv6IVOxbzjDAKp1FYYKB6h5YFtGhgMga8WwKPAiBLt138czjJ8eCwWzUVMWevc4viIy1m3smF40T9paRzUyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX3BsX87rqWOJvVhSKtwDzGxQP2vTBcja8lAuWdtB3hYO9A80Eo5zZ93vJY8meAgOkc3ZobTgckG0f1ggXIM7Vj%2B5jAtOqMUsOigzChO1TLVXx3KAgWEuisqVif1mESSVc2fSQj%2FBzfYegZt04aivN6HF%2FXHQR2286Ls7orS51g%2FpDktqoNkble3h9EEf6%2BTCsKA6k4Y32488rWU6%2FkXwnfAZ9wdpr84UBQfLMIwm3t1MCcIhVszXmZFyCdQju3rj9RXXkC1Gx0eDjSmt73l81mcZoNQqoFp1FjcH8UKR545YzMWPn8vi929hUgwmGSWE182P%2FnzfE0l%2FymPWxvqI7YX3ZffeBgOlStCquK09vs%2FziC37hqqrWxIh386H3j%2FdEwlXsZ2%2FLIgonReXSnjMmIZQb%2Fc7ryWAWoLiyWOgg6tuxPPG9tPWAtH3suZjh08HR%2BOCwgV0KUOffykdccNkBLeNwbwkOm5LXGiakZTvfJ5JdA4Kg%2F%2BMB3vejz3XZSoTANj6NTP%2Ba2uHKyHWQR%2Bhj7CG7WxG5JQqf3lQqQXpRpurtlxIywp4Az54CbPjUg%2BjjhL2cA8ER2MnDH75tgVTOFgLAcJ2ELfAyAZHIG18lNP%2FaiGLSySomZFuRBYgNLM19%2BomTCsuBPlMeb8w6OGKygY6pgFaZ4qSRIYZnZ1sW%2FQ4e2Ygp1ktRmi5b%2FPDHSfZB4YVcMRYYFXVIH2l5I6aE8jImFJE3afp4dOcrvoGTNR6OEDXVx1hyJ8DjGpAvFXWEmyhkpb1MU9HmMjrpDCFsbTQNeKRYCimcAxBcXuM52JvwnA3XH8KZsI%2BYOMUqEsF2KkBQ4C6r9R%2FkhhJ%2FCt%2BmOIhPPx%2FFKpdQaxsg5HgAEVSIIcKQtTwa6%2Bp&X-Amz-Signature=63f276a32a8ac32f0900531658009903dff9209399c50808a2ec5abfeb524640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

