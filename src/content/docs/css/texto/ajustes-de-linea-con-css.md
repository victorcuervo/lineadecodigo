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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MWTKFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FiHKiHDkjoYnjp5T7jFmgwJEoRK4rJHvpp72ywOMtwgIhAN24C8BOpwywvw2HVOvjGQAQKt7SUyPoj4sdcvg4pcvqKv8DCHcQABoMNjM3NDIzMTgzODA1Igz6PG5nMdjwxvVaeiEq3AP7sQh2ksqHegs5oIAH1nq%2BEB0y83JwJanEr5421ip2LFvcgAzE6CApila%2FYGjkvRR4zMlTz5mfRU%2F6aCkYd6bQ0bvMR2jjSJWoxv2d0r%2B8vL%2BtJ%2FkiBfp8D42bJjm%2BKKNKXSwhYCBFR1wUcey4Hprwv%2FgpisW8wQL9jFzfc3spVdn8Gt63inyEd8dL%2F%2BqHSYoj5nVxMYvwg1FQvNWgGus2BB9HQDNlTYCgGfCsZA14TSSiMDep0uvb5zzrLSGhCbh%2Bd2v6ekgrkEuaZgW77%2Ft5A2hDokSNYjqcfTf%2BPS0wIBGlViYTzenvAFNKvH9vPy42hI24EtpZzalypmI2nB6YIwulSp4ushUWP6ht6zHLIrQ3R63GOFaRPQEwDwJ9ErhsXyulrcIXmeorSyQA120HTkEyOXFTnXq2v%2F6Wlj68stCwH44%2FWbzgc5Z8ilIwx%2FP4WlDPsJm5wDQo%2BJzHC5Z4tbIhzFOq3lWs3T1ASypjKU1btQcL0cDzeYzhqcLh6gFi%2FRp%2B%2Bc%2B97aP3ZFFuFKX%2F4UNgiBcf%2Ft%2FfTq5qVc1cvF1n9pxGE17q7Gp6Ql1Lsbcd%2BpRVn%2FUlVJT5Cv9gyH1Q7HZZHufspfjQ2UQQC6GRn%2B2RC59TLYE6V1zG4zDZgonKBjqkAV2bVlLOLMmFkXUe2VOQIcjyK8tCQLTzk%2Bq02qT1QKtBd6nOEB%2BB0aUK1yCTqiYpwbBZ5PbLAcedBAJI7Pr1d3MHoHcTcwm%2Fxbv7MDgKYYEZdvBbqlS%2Fd1AKBxMGrY1dzi%2B8TG%2BdgSlEQUPcY11L9eZho85foBhMKVauqrPvXYvTBPxpQ4lNNuoYAfJs0NAG4WAmk4PfQIsIgOwDpK8cXJJ4Nlkk&X-Amz-Signature=1781026002355bbfd8c8d355ee6e74b289e5b00508093bb2302bbdb729602fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MWTKFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FiHKiHDkjoYnjp5T7jFmgwJEoRK4rJHvpp72ywOMtwgIhAN24C8BOpwywvw2HVOvjGQAQKt7SUyPoj4sdcvg4pcvqKv8DCHcQABoMNjM3NDIzMTgzODA1Igz6PG5nMdjwxvVaeiEq3AP7sQh2ksqHegs5oIAH1nq%2BEB0y83JwJanEr5421ip2LFvcgAzE6CApila%2FYGjkvRR4zMlTz5mfRU%2F6aCkYd6bQ0bvMR2jjSJWoxv2d0r%2B8vL%2BtJ%2FkiBfp8D42bJjm%2BKKNKXSwhYCBFR1wUcey4Hprwv%2FgpisW8wQL9jFzfc3spVdn8Gt63inyEd8dL%2F%2BqHSYoj5nVxMYvwg1FQvNWgGus2BB9HQDNlTYCgGfCsZA14TSSiMDep0uvb5zzrLSGhCbh%2Bd2v6ekgrkEuaZgW77%2Ft5A2hDokSNYjqcfTf%2BPS0wIBGlViYTzenvAFNKvH9vPy42hI24EtpZzalypmI2nB6YIwulSp4ushUWP6ht6zHLIrQ3R63GOFaRPQEwDwJ9ErhsXyulrcIXmeorSyQA120HTkEyOXFTnXq2v%2F6Wlj68stCwH44%2FWbzgc5Z8ilIwx%2FP4WlDPsJm5wDQo%2BJzHC5Z4tbIhzFOq3lWs3T1ASypjKU1btQcL0cDzeYzhqcLh6gFi%2FRp%2B%2Bc%2B97aP3ZFFuFKX%2F4UNgiBcf%2Ft%2FfTq5qVc1cvF1n9pxGE17q7Gp6Ql1Lsbcd%2BpRVn%2FUlVJT5Cv9gyH1Q7HZZHufspfjQ2UQQC6GRn%2B2RC59TLYE6V1zG4zDZgonKBjqkAV2bVlLOLMmFkXUe2VOQIcjyK8tCQLTzk%2Bq02qT1QKtBd6nOEB%2BB0aUK1yCTqiYpwbBZ5PbLAcedBAJI7Pr1d3MHoHcTcwm%2Fxbv7MDgKYYEZdvBbqlS%2Fd1AKBxMGrY1dzi%2B8TG%2BdgSlEQUPcY11L9eZho85foBhMKVauqrPvXYvTBPxpQ4lNNuoYAfJs0NAG4WAmk4PfQIsIgOwDpK8cXJJ4Nlkk&X-Amz-Signature=51f3127a05394811275fa5c2b1c586c796837fef353ce169f23ca76cd97ed392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

