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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRSRE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM15AQjt3rzxWyLYg0ZuHSl8Trx4zqovYv648FxTal3AiEAxaGLMjCUfDb%2F5S6UY4R23zdWjiLSx9nbPbhV9%2FKvqz0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGp621fiOpjWVE7qdyrcA798vp3cx%2F03BQCWfCPU47zhKZFF%2FXNx%2BSu1LzEaENxGqFkFy2FkmcKnIu6I0md62lk5Uo3rdozcCTco3PrJZizSPoYXYvof3LwOiTIasJf%2BX2hVmnUlZ9ymCq1EMRcZld0FGTQq4jIJ6EGwwVEFZqYr6TRI16qJB3G1%2BbdO%2BtHcJgwRjMUJFzpe%2BOf5bJnjdKtVBCLcvX5xakdzGjUNgy5U6bpyJznRVr7DVLUrusMPdOJeI32JNWYstGtrdYwRbpvzEZvi0U8bxa7Fhg%2FUt2L0IGRYXSBvxLzWYNVLW0IoNy775A4llZXbBkMs8f7tDTUEEm123YvIe0eaUHax5c9UEBt0U3%2Bc%2BcHVlN9qvZugI1vcUw7EHySgMSbUfpbGDE2Xaw0TAD9puvHpJK%2BoPhmvbiI%2FSRTWtb%2FCStgA%2B7lVggCmqjmPZYqQMYwVdjNJ34Jd%2BjikOgjPhw6MSPCeDZNNrQsXkgt%2BH9TtfFMkpxnWhQ4EDV%2F9tsGIrkfRHSqpnIgBNS4uWxhdhOVk5W9iv6SMNP63eR9tzDCQnEaaTKwedaSr1soGsigzWlxRPeYG6vnew3bSLcGUroQnIvzQZetaHcDRuG84dQ%2Bw%2FI%2BOnutayUvtEVm3DHpUCNKYMN%2BxiMoGOqUBC2JWD80VSoxegwYh9DL7nrJh5Wl1nO2HgNbAveXXlsdJYfC%2FWmr0LZuDCGNbF7EYrahqdRMedB6oCd5qJ9G60uHZE7gpM2gW7eC7gNzok9kkA0w14PGUFJWG%2BTwPFBfSA1t8kkbmYnul0wEK%2BevWch4lMe2NVEzhtjlFV8RblOiyVPV3xpW91r6rBW3LgT%2BC59pmZhdJqURMj1k4UeTsoRqyvTjE&X-Amz-Signature=b41e08223d5ed9cddbd4da5b388d3d9a9beece25f74bd26dbce2166e24622d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ZRSRE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM15AQjt3rzxWyLYg0ZuHSl8Trx4zqovYv648FxTal3AiEAxaGLMjCUfDb%2F5S6UY4R23zdWjiLSx9nbPbhV9%2FKvqz0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGp621fiOpjWVE7qdyrcA798vp3cx%2F03BQCWfCPU47zhKZFF%2FXNx%2BSu1LzEaENxGqFkFy2FkmcKnIu6I0md62lk5Uo3rdozcCTco3PrJZizSPoYXYvof3LwOiTIasJf%2BX2hVmnUlZ9ymCq1EMRcZld0FGTQq4jIJ6EGwwVEFZqYr6TRI16qJB3G1%2BbdO%2BtHcJgwRjMUJFzpe%2BOf5bJnjdKtVBCLcvX5xakdzGjUNgy5U6bpyJznRVr7DVLUrusMPdOJeI32JNWYstGtrdYwRbpvzEZvi0U8bxa7Fhg%2FUt2L0IGRYXSBvxLzWYNVLW0IoNy775A4llZXbBkMs8f7tDTUEEm123YvIe0eaUHax5c9UEBt0U3%2Bc%2BcHVlN9qvZugI1vcUw7EHySgMSbUfpbGDE2Xaw0TAD9puvHpJK%2BoPhmvbiI%2FSRTWtb%2FCStgA%2B7lVggCmqjmPZYqQMYwVdjNJ34Jd%2BjikOgjPhw6MSPCeDZNNrQsXkgt%2BH9TtfFMkpxnWhQ4EDV%2F9tsGIrkfRHSqpnIgBNS4uWxhdhOVk5W9iv6SMNP63eR9tzDCQnEaaTKwedaSr1soGsigzWlxRPeYG6vnew3bSLcGUroQnIvzQZetaHcDRuG84dQ%2Bw%2FI%2BOnutayUvtEVm3DHpUCNKYMN%2BxiMoGOqUBC2JWD80VSoxegwYh9DL7nrJh5Wl1nO2HgNbAveXXlsdJYfC%2FWmr0LZuDCGNbF7EYrahqdRMedB6oCd5qJ9G60uHZE7gpM2gW7eC7gNzok9kkA0w14PGUFJWG%2BTwPFBfSA1t8kkbmYnul0wEK%2BevWch4lMe2NVEzhtjlFV8RblOiyVPV3xpW91r6rBW3LgT%2BC59pmZhdJqURMj1k4UeTsoRqyvTjE&X-Amz-Signature=2734206633e74910e1f84a2efe04c6f7bc81637d9a1197c4c7059aa121a29c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

