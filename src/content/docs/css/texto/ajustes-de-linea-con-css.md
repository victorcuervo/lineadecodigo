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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV7GNZK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG80nS96Ym6wyaWO5PotFAdKHwNCYr7HuQGJ9k2JZTMAiB1G5NK%2Bs1T7rbu5NSH7mtcQyu9TSSYOgRntrfdrv2ezir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLCBr7XLBqZM0EtphKtwDoE6Sr6Zgru8fW5%2Bn1Kaf0dtLLaVioB2MITOZZznq8h9VFwDv4xEPlFc70LClykZBzu9Oo6jSyY4ipNIDo4%2F1vqO0dJJm0lK4BGWrKbDLaP542Nrjly%2F9GUSF5qWd1zk%2B6oIn1ItLJxfaRPym0%2FHAGGAYFr0WLRE59yawNpzuGBJAteKQDrWf7xyCiX1NmH009Woeo62xRZDo66%2F1KUzVcdxmZ6f7l7y34GwtQ2c%2BVaP9w3etYfI%2FDKn4dHL%2Fe7IbL%2FjQ5utwjd5NUvsj7qojX2fxaBvlaPFIm6TtEQp5LydpIzGZ7Dv4SN%2Be8zE9BkaAKT2HiYxVu0B%2F3qS2PQefJITHZxAHhVx9ZIkWNP1Jjs1xQf1uSEfGLDz1mgX4FAL3vqmpnxAz4eaOkaFq9gA0DAwsxZgYq4TBuVoCsQGNPWu7RYo2Xr8hpdjKvaG2U3%2FqIIJuCsyXHchNqHZKx4PzqtrhT0Gz5c96OpMMtZFjCzTAt7HQquIYzL7p2FqWa7o6qT8GZoheLPAm01gzcy6ORT9RxPmqrCX2nAEdAUcA3D4scFfNrZqZS%2Fv1%2F1%2BnBkKGKsKycrIbYKONmAtbxd5KKBrfT0imMsnOfwLy1%2F0I8TOd7Ive6KrjInmIKiUwxo6KygY6pgGQYAQDYzCxnPyR6wsLCv%2FhW2rUDDzCzKunmrsd7cN%2FIxYJXUzfMy84NSp2J8oKRp6tnJyxDYTh1k5EamiEEiKTJPGdVPIikyYEjESd4yr9diCUPtAVOYj%2BbSYbjJutTpdRDMC0nqDwHExz6Kq%2BXiXAeozXVv9l3JOADlVGeu17SLcS%2BE%2B1HON6zuILSuS9bFzmpXouJZYGezAMK1NNA3NxZ7yxYL%2BG&X-Amz-Signature=bfc3ad859ed7c883d64e2e6cbc86edc1770ad892d8fccaeb58a5d951fb10e863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV7GNZK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG80nS96Ym6wyaWO5PotFAdKHwNCYr7HuQGJ9k2JZTMAiB1G5NK%2Bs1T7rbu5NSH7mtcQyu9TSSYOgRntrfdrv2ezir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLCBr7XLBqZM0EtphKtwDoE6Sr6Zgru8fW5%2Bn1Kaf0dtLLaVioB2MITOZZznq8h9VFwDv4xEPlFc70LClykZBzu9Oo6jSyY4ipNIDo4%2F1vqO0dJJm0lK4BGWrKbDLaP542Nrjly%2F9GUSF5qWd1zk%2B6oIn1ItLJxfaRPym0%2FHAGGAYFr0WLRE59yawNpzuGBJAteKQDrWf7xyCiX1NmH009Woeo62xRZDo66%2F1KUzVcdxmZ6f7l7y34GwtQ2c%2BVaP9w3etYfI%2FDKn4dHL%2Fe7IbL%2FjQ5utwjd5NUvsj7qojX2fxaBvlaPFIm6TtEQp5LydpIzGZ7Dv4SN%2Be8zE9BkaAKT2HiYxVu0B%2F3qS2PQefJITHZxAHhVx9ZIkWNP1Jjs1xQf1uSEfGLDz1mgX4FAL3vqmpnxAz4eaOkaFq9gA0DAwsxZgYq4TBuVoCsQGNPWu7RYo2Xr8hpdjKvaG2U3%2FqIIJuCsyXHchNqHZKx4PzqtrhT0Gz5c96OpMMtZFjCzTAt7HQquIYzL7p2FqWa7o6qT8GZoheLPAm01gzcy6ORT9RxPmqrCX2nAEdAUcA3D4scFfNrZqZS%2Fv1%2F1%2BnBkKGKsKycrIbYKONmAtbxd5KKBrfT0imMsnOfwLy1%2F0I8TOd7Ive6KrjInmIKiUwxo6KygY6pgGQYAQDYzCxnPyR6wsLCv%2FhW2rUDDzCzKunmrsd7cN%2FIxYJXUzfMy84NSp2J8oKRp6tnJyxDYTh1k5EamiEEiKTJPGdVPIikyYEjESd4yr9diCUPtAVOYj%2BbSYbjJutTpdRDMC0nqDwHExz6Kq%2BXiXAeozXVv9l3JOADlVGeu17SLcS%2BE%2B1HON6zuILSuS9bFzmpXouJZYGezAMK1NNA3NxZ7yxYL%2BG&X-Amz-Signature=9a15d0c6d714b509fddaafb36073434ba43892ff2e79f26e6aa743b05b44a575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

