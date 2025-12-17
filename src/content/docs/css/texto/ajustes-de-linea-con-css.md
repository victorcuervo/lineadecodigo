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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXH2DNHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZTqKwzGzKVhhIsFcMSXr7coQ4G%2BVPabH72DY7nlCZkwIgFqxiV%2BiUCOB1U2vLyL%2FKqgXVt2hRVwk%2Fd7Js6TfKUy8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP8cA5IxdwM%2BLjRSoircA%2FSev7yEKAr0qPvqZeMr0S98%2Fmdz4VTEOLIRE3MvVzvrCcHjJu4E3lU%2FEIWdaFav3BGTxhP7zHpZct6kWCiI3u2vwzyiNi78uHXf3GkKR6p%2BECSxW4nGW6XvKa8PTIpI0QB4jU%2FQCR6Daep4mWJGM8UKTuqRTOfz%2FgEBVFH7gtW7e%2BqKIz%2FNdDyzqEAPEWJ7DsFMVxpF98X0YmoV6rmhOdCgKSt2Yjk%2FXhjCF068rovK%2BsVS6hdE0lFiLm%2BQTeNqFm7YpEPB3%2BQRgmYb%2BMhrFvDcmJj0nw5GN7hbvwpQrn8M8hDvBVASHmvwjPZPGiNFw5DUZUp%2BZbl8QfRQIbLFH3UmaGM04ohABzNhAzn1tHw%2BNeysgufuT5T1GXepAFUKIRq8QaIMHlvLzHV6lPCK%2BHLuEM3cTe3btedzzRz9jFtKxAAesvCPV5Id0LTMQqBEkOeHYrPWvi7OSSb8OFvXQKK6OifpcwDneqIc%2Bs%2FC3SGA60iff6QBXikHPUveFKWiGqQ430eqFjvGmnMwvJ4LO2lPXEZC44fMIqNWYqOxgV6wU3W44PMPMpy9MzJeM8%2Bua58dRXat4AxLO3s8UBT4wRKf7ttXcbWoTS5rMo02pZfedCo4DKPkUm6%2BQ47AMJucicoGOqUB2aKi%2BGVoFMbPQnDcqtMAjOwmHStzvKbMt2rNTqwAqp2362sz7RkTNBbjP%2BKll%2B3vOOoO4RxuYZphHl35UB0Yl9xtljsHhuajnDlTuncEBxESTihMCIDmqHooBaIy02MruQgeap3f1iulE%2FevSt1OcwhZFQi0%2FQ05OM%2F7E7s5lSSzOIcHP%2BpE1JXhk1MzGppE%2BIQf8dvuMinjpgvuT29k611UHPP9&X-Amz-Signature=2ada305b430d1d3c75e33ab86276993d7bb66b39f6b07ec4b0fca1e57541eb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXH2DNHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZTqKwzGzKVhhIsFcMSXr7coQ4G%2BVPabH72DY7nlCZkwIgFqxiV%2BiUCOB1U2vLyL%2FKqgXVt2hRVwk%2Fd7Js6TfKUy8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP8cA5IxdwM%2BLjRSoircA%2FSev7yEKAr0qPvqZeMr0S98%2Fmdz4VTEOLIRE3MvVzvrCcHjJu4E3lU%2FEIWdaFav3BGTxhP7zHpZct6kWCiI3u2vwzyiNi78uHXf3GkKR6p%2BECSxW4nGW6XvKa8PTIpI0QB4jU%2FQCR6Daep4mWJGM8UKTuqRTOfz%2FgEBVFH7gtW7e%2BqKIz%2FNdDyzqEAPEWJ7DsFMVxpF98X0YmoV6rmhOdCgKSt2Yjk%2FXhjCF068rovK%2BsVS6hdE0lFiLm%2BQTeNqFm7YpEPB3%2BQRgmYb%2BMhrFvDcmJj0nw5GN7hbvwpQrn8M8hDvBVASHmvwjPZPGiNFw5DUZUp%2BZbl8QfRQIbLFH3UmaGM04ohABzNhAzn1tHw%2BNeysgufuT5T1GXepAFUKIRq8QaIMHlvLzHV6lPCK%2BHLuEM3cTe3btedzzRz9jFtKxAAesvCPV5Id0LTMQqBEkOeHYrPWvi7OSSb8OFvXQKK6OifpcwDneqIc%2Bs%2FC3SGA60iff6QBXikHPUveFKWiGqQ430eqFjvGmnMwvJ4LO2lPXEZC44fMIqNWYqOxgV6wU3W44PMPMpy9MzJeM8%2Bua58dRXat4AxLO3s8UBT4wRKf7ttXcbWoTS5rMo02pZfedCo4DKPkUm6%2BQ47AMJucicoGOqUB2aKi%2BGVoFMbPQnDcqtMAjOwmHStzvKbMt2rNTqwAqp2362sz7RkTNBbjP%2BKll%2B3vOOoO4RxuYZphHl35UB0Yl9xtljsHhuajnDlTuncEBxESTihMCIDmqHooBaIy02MruQgeap3f1iulE%2FevSt1OcwhZFQi0%2FQ05OM%2F7E7s5lSSzOIcHP%2BpE1JXhk1MzGppE%2BIQf8dvuMinjpgvuT29k611UHPP9&X-Amz-Signature=99b78979c8412a0e8dd8a9b3aaff4d4b45dcc962f8291c8bf1e405945315022a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

