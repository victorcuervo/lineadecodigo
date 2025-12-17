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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6PDZ4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV4Z3gxJWcTRQqWqh2GPBrT9KCfse9%2BRB1oMQs7tsYQIhAIdroxbP1nX%2Fr7ttlQSWPCT0kOSXUdA%2BxQYpc1Y04rhWKv8DCHkQABoMNjM3NDIzMTgzODA1Igzre8vhqnOg3Ort6h0q3APbwi5z0nx7jaVcwZ96kPPlT3SOkbx36CbUm2kFvafAV1QvWnp9PwZbT%2F9cWYNAsss7BK7kLyD6ngA9bhrM4zdVCwsksJamdcE6ThuX%2B3gDeEdrNdM2WV%2FlsRrZ0vCKrXoqyuWbXYeZM8Ei9qyelq4XfYntDZhnXKnZRTgOAclyJIy464D1ycVvBVDspnsmQlrH3Y6g2v07p2xgH%2FB90lfxptyLjZOYgdKi5TDWocqwAy7kTpgaRtc%2FCAEk309QnzgwX1FgFJ3H42TkyFcBSL0Q2%2BSISgz4l%2BYfe7tEVutoIKmTyXOWTT0c4SE4mXKfK6xMJk9IV%2BhebBFUtv%2FPjD7KAztoV%2FeGkPOtbWo35KEhxOnL9jn60gcoltZFLd8NrRU1ZGcTmCO0%2B7Hk8n1%2FtSMfFnnJNu4mSFZbSSO9OUZdaZTJFbiwBq4g8pdzPgpyS4qoJrHe7wK4jThNzoMDsavOPYbh8qwTIiUsLtCsEwUT1Y0jOpqEXldlOXhQ71CnkEE1sYODDrgyez2p3zZrdoe2y1xuqj074ExU9Vov%2Fyyvu2f3wnmwyb6H3Cgd0UfckPlCTxjSOavBN7sCGvCreDlOg4PFkXn4LTeROAKjPRJmewQzazPlmyYrzjLLYDDut4nKBjqkAb7pbVySHPNdjLAlkZvG%2F5By1bCCaVheqtYWEtYlNSkgkNiPOMZD5Fjn7M7uIQgF%2FOLvCfi55pSO3R9Py5TG71IDUJha%2BlkMNPzDztd3o6%2F7egMDJ2L1i1LyjU8YAZH%2FehEqkq1do5133zUWPaMUqTgnZDwZ9tTtoZVY0V%2FM%2B8d046eHJE%2BRyDyWp%2FfSSZt1nDUcJWYoDBNaZwrwpZk644DJ0%2BED&X-Amz-Signature=7eaca96702b089794050d161debba1b245f3b956d866f45c0a7fb8407f860d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6PDZ4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbV4Z3gxJWcTRQqWqh2GPBrT9KCfse9%2BRB1oMQs7tsYQIhAIdroxbP1nX%2Fr7ttlQSWPCT0kOSXUdA%2BxQYpc1Y04rhWKv8DCHkQABoMNjM3NDIzMTgzODA1Igzre8vhqnOg3Ort6h0q3APbwi5z0nx7jaVcwZ96kPPlT3SOkbx36CbUm2kFvafAV1QvWnp9PwZbT%2F9cWYNAsss7BK7kLyD6ngA9bhrM4zdVCwsksJamdcE6ThuX%2B3gDeEdrNdM2WV%2FlsRrZ0vCKrXoqyuWbXYeZM8Ei9qyelq4XfYntDZhnXKnZRTgOAclyJIy464D1ycVvBVDspnsmQlrH3Y6g2v07p2xgH%2FB90lfxptyLjZOYgdKi5TDWocqwAy7kTpgaRtc%2FCAEk309QnzgwX1FgFJ3H42TkyFcBSL0Q2%2BSISgz4l%2BYfe7tEVutoIKmTyXOWTT0c4SE4mXKfK6xMJk9IV%2BhebBFUtv%2FPjD7KAztoV%2FeGkPOtbWo35KEhxOnL9jn60gcoltZFLd8NrRU1ZGcTmCO0%2B7Hk8n1%2FtSMfFnnJNu4mSFZbSSO9OUZdaZTJFbiwBq4g8pdzPgpyS4qoJrHe7wK4jThNzoMDsavOPYbh8qwTIiUsLtCsEwUT1Y0jOpqEXldlOXhQ71CnkEE1sYODDrgyez2p3zZrdoe2y1xuqj074ExU9Vov%2Fyyvu2f3wnmwyb6H3Cgd0UfckPlCTxjSOavBN7sCGvCreDlOg4PFkXn4LTeROAKjPRJmewQzazPlmyYrzjLLYDDut4nKBjqkAb7pbVySHPNdjLAlkZvG%2F5By1bCCaVheqtYWEtYlNSkgkNiPOMZD5Fjn7M7uIQgF%2FOLvCfi55pSO3R9Py5TG71IDUJha%2BlkMNPzDztd3o6%2F7egMDJ2L1i1LyjU8YAZH%2FehEqkq1do5133zUWPaMUqTgnZDwZ9tTtoZVY0V%2FM%2B8d046eHJE%2BRyDyWp%2FfSSZt1nDUcJWYoDBNaZwrwpZk644DJ0%2BED&X-Amz-Signature=1968fb26962c2227cccca5136cabab8f397b2e03b92fbf2cacc8a1003b4dcac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

