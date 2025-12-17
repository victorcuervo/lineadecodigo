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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETKXAF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfiyldDm8bf2DsCHpfnecCwKDA2tRZIWQYxzjQkVKfIAIhAPpJ0Uyxtg%2FP2uSdhEriTJwziE1jVmMwn5W26sVa9zxaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCO8zIul8ql%2ByXo3Yq3ANruLHtlemYTOuHfV%2FwkZ531HmnuXaA%2BZlbX5DQvcU1BCPKTn3i%2FMpD7X%2F5PP5U6AMhjK7ukvX4o5h8mWjMYVLRJniJV4vSZRSn8XU4ErUBqClIRh2GdMmHteQEjJh%2Bx%2BYUnkoHeAe8uS7qQ4%2BHB7hYiX9uxlzCOKcscEiSBlV26pTbOJYU0kPLBtURTcqIMLmQOJlVoR6CUdS4uXh3u3INgF2wCg2%2F4uyIKnJ1OgkYbaf5z6SM%2FjiQlSIHPcJDklv%2BAgIoudkKpmoIh2GNCvlD1%2F3Z3Y3vH5zQDg9bJrYg0TGEcbilPu3i%2BUA1ymIkkYtZpm38Z%2BQpoScIU3ij3%2BQdhkEhV9aKjPs3OqztrB4jWvogZ872JTIguFAAxPs%2FE%2BdTkoWVnvoTf36crlBZdwNt5harL%2FMAiUOgcd70noQCGHhc0%2BxzduI9Iee9aUEgSHzeH9RX%2FAZQXGlBP4XXdzfhrkjgQj2MvXqGrodyEf%2BzrfkwkQFOIczwjMsJVu%2FMGrRM99dADQRak4d2LJSgGhLWOKRhH7Wwyl7h6HjeLwtzshcT%2FffBiCICuFhjVirkFfIUILAc1xISJnrRfZVY%2FdN0xGK6fGJZahcW6gfVfjB%2B2N2Z0xrmGjjeTqSdzDDwnovKBjqkAWt7qlUEIO5L9Mc3WIiJeSX%2FFHAFfbMkzY1TcttXpXYfVrJD1%2BhMGfbYylqaXZVtudrC7AvNk02QNierSrfe5evVaE50YOT7svLjMzPNqWt%2BbK10befEkoDTXx6Lh%2B5bO3AUPCexGjw2Dlpn3kYOXToRTCdFUXQAXXkrpmzIVtL31lZoa5VJMUFV9no3hWlR2VGgIYIIWaFh2EO9AdZw9pqiGATT&X-Amz-Signature=3407ae4279f5cf1e7456c7691608866ec59ed1eed18adc9f3630ceee75eb3782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETKXAF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfiyldDm8bf2DsCHpfnecCwKDA2tRZIWQYxzjQkVKfIAIhAPpJ0Uyxtg%2FP2uSdhEriTJwziE1jVmMwn5W26sVa9zxaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCO8zIul8ql%2ByXo3Yq3ANruLHtlemYTOuHfV%2FwkZ531HmnuXaA%2BZlbX5DQvcU1BCPKTn3i%2FMpD7X%2F5PP5U6AMhjK7ukvX4o5h8mWjMYVLRJniJV4vSZRSn8XU4ErUBqClIRh2GdMmHteQEjJh%2Bx%2BYUnkoHeAe8uS7qQ4%2BHB7hYiX9uxlzCOKcscEiSBlV26pTbOJYU0kPLBtURTcqIMLmQOJlVoR6CUdS4uXh3u3INgF2wCg2%2F4uyIKnJ1OgkYbaf5z6SM%2FjiQlSIHPcJDklv%2BAgIoudkKpmoIh2GNCvlD1%2F3Z3Y3vH5zQDg9bJrYg0TGEcbilPu3i%2BUA1ymIkkYtZpm38Z%2BQpoScIU3ij3%2BQdhkEhV9aKjPs3OqztrB4jWvogZ872JTIguFAAxPs%2FE%2BdTkoWVnvoTf36crlBZdwNt5harL%2FMAiUOgcd70noQCGHhc0%2BxzduI9Iee9aUEgSHzeH9RX%2FAZQXGlBP4XXdzfhrkjgQj2MvXqGrodyEf%2BzrfkwkQFOIczwjMsJVu%2FMGrRM99dADQRak4d2LJSgGhLWOKRhH7Wwyl7h6HjeLwtzshcT%2FffBiCICuFhjVirkFfIUILAc1xISJnrRfZVY%2FdN0xGK6fGJZahcW6gfVfjB%2B2N2Z0xrmGjjeTqSdzDDwnovKBjqkAWt7qlUEIO5L9Mc3WIiJeSX%2FFHAFfbMkzY1TcttXpXYfVrJD1%2BhMGfbYylqaXZVtudrC7AvNk02QNierSrfe5evVaE50YOT7svLjMzPNqWt%2BbK10befEkoDTXx6Lh%2B5bO3AUPCexGjw2Dlpn3kYOXToRTCdFUXQAXXkrpmzIVtL31lZoa5VJMUFV9no3hWlR2VGgIYIIWaFh2EO9AdZw9pqiGATT&X-Amz-Signature=deef0cf7ffe3c542c74383be1c2ea9cba5d47aaf03740712e6d1f332574dbfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

