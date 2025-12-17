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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WOMSNQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bpn%2BiPSsJLBAg7g%2FsCwvePkIQd10ul8ViRXMYjY7%2BSQIgRzufCDhhB13fRmYA7YsnE%2B4lCfePefxR6pvsz9fetHkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJXk2zHABvTClbTBhCrcA9LR%2BZOQQgImza5kdznjr5DfrQm%2FgtllVwrnw2G7BNNJM4ap68biRaL%2Fk5eS%2BwHvCDI4pIXLJCebqaRqLK6HyDz55h2ahuTGy1p05%2FFziN%2B2haT%2Bkiw8qMyOvzyuunVL%2FqANyvNtZbpo8XQr9OMdZpj44maIyu4NkL9zWdl9X8Ej%2B710%2FjcJjm6zu2qqJ1%2Bmivf5wcmoSONwMqVYXY5DGZAOL6pIx8MQTPnvCAzcIKoJcjTCdqwvHAnE9pwsA%2FKMpvzDUNR%2FE2d9BANYA4272K8dhTHFo6lu94GNXhNvlQrD7Rpveh%2BzQl%2BjjKAV%2BR57pQ0x1YCRa%2F1T6UK94MBq%2Fdk3f3PyExspNovvlSOLCxNE1R5%2FK6uYz%2BXdXDAL6V3A2fTgXrXMg31gt%2FQGlZRYT%2FN0npVbmMbdJQPBcROuWNq4L51Tq2voZNkj984sKL3ZxYa63sES6lnOq0gxrCx4JyrKb3T6W8aVLa8cnYr1qN4WAxG%2BAj3yjqnENQ4rbsk9bYJTL%2FTDdCX3gEK8fSVdXNx5%2BGvNetm3R0ZKi%2FlKFfjmHhJoUfuPfismog9ybSWyb70RwZVxxjpFMb2aUnzkiLqA0cjUmRARcs5Szh4Ddmk8feVaU7DzOUv9dn0WMJLSicoGOqUBqfOiHXmqe%2FGBfyMsNVrhGxjkZ7c3wtQMlPzb3Unutw3HB1poVPGyZ%2FbbJIrcdXqAaKAybyxOHIdlE9P0gCRSZeoyxna%2FlpedcXK7rbseJF7Wu81rwmpEjBgFPy1jq8rm02D6qKgePUjbW55VRTIIVx4jMwWBe%2BOszBIWTcMX7Lh9RUhxh9yyg%2BUU3aUNWRJvWfve55nYkDs71lLcXSccwMj0VSjK&X-Amz-Signature=0a9e6c3aa75578dd354b2f5f2a1ebd36740d8def07ec9789e1bdf54de36dee52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WOMSNQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bpn%2BiPSsJLBAg7g%2FsCwvePkIQd10ul8ViRXMYjY7%2BSQIgRzufCDhhB13fRmYA7YsnE%2B4lCfePefxR6pvsz9fetHkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJXk2zHABvTClbTBhCrcA9LR%2BZOQQgImza5kdznjr5DfrQm%2FgtllVwrnw2G7BNNJM4ap68biRaL%2Fk5eS%2BwHvCDI4pIXLJCebqaRqLK6HyDz55h2ahuTGy1p05%2FFziN%2B2haT%2Bkiw8qMyOvzyuunVL%2FqANyvNtZbpo8XQr9OMdZpj44maIyu4NkL9zWdl9X8Ej%2B710%2FjcJjm6zu2qqJ1%2Bmivf5wcmoSONwMqVYXY5DGZAOL6pIx8MQTPnvCAzcIKoJcjTCdqwvHAnE9pwsA%2FKMpvzDUNR%2FE2d9BANYA4272K8dhTHFo6lu94GNXhNvlQrD7Rpveh%2BzQl%2BjjKAV%2BR57pQ0x1YCRa%2F1T6UK94MBq%2Fdk3f3PyExspNovvlSOLCxNE1R5%2FK6uYz%2BXdXDAL6V3A2fTgXrXMg31gt%2FQGlZRYT%2FN0npVbmMbdJQPBcROuWNq4L51Tq2voZNkj984sKL3ZxYa63sES6lnOq0gxrCx4JyrKb3T6W8aVLa8cnYr1qN4WAxG%2BAj3yjqnENQ4rbsk9bYJTL%2FTDdCX3gEK8fSVdXNx5%2BGvNetm3R0ZKi%2FlKFfjmHhJoUfuPfismog9ybSWyb70RwZVxxjpFMb2aUnzkiLqA0cjUmRARcs5Szh4Ddmk8feVaU7DzOUv9dn0WMJLSicoGOqUBqfOiHXmqe%2FGBfyMsNVrhGxjkZ7c3wtQMlPzb3Unutw3HB1poVPGyZ%2FbbJIrcdXqAaKAybyxOHIdlE9P0gCRSZeoyxna%2FlpedcXK7rbseJF7Wu81rwmpEjBgFPy1jq8rm02D6qKgePUjbW55VRTIIVx4jMwWBe%2BOszBIWTcMX7Lh9RUhxh9yyg%2BUU3aUNWRJvWfve55nYkDs71lLcXSccwMj0VSjK&X-Amz-Signature=f0a64cf093b6e0788ccf5945e27e6001a1f98b0ae76c0098c6e37e9afc46f45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

