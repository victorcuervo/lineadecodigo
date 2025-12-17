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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2T65MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3jHI4trl55M8M5BYy4Y9CuDVH1XBrUHKXPffHpLceLwIhALwOWzSQqkbnok5tgW%2B1VWwtkdrfAQXbwnJvyxkBAEo4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyYZeOBglqRbVeFhdgq3APyfTJlkNWhS5b%2FMduwVfr5SL72Y10i%2BevD5Ou2a82D8aqtW%2B%2F6E7jaPuLMnbWyvJu9cegU1RaKprBUXPb2fQzT5E27UniIU8d5iuJsuL93H1UEs%2BTPV%2F1WpdYtn3m9HpScM6Ll%2BclESl%2F7AzZRJ028WLZnFIjg%2BczALB%2Fkl3%2BlJ9w3HbBzUou1qSv8efrrDOdf0n%2FCOqxVwAYf1skjHwOBRwHuKyzaB9Rf4VoWmIyOMg1l9mzrDd6M0ki29QLwDNHdezfvxv4WQnnxw3tBN85O1zRXr0K3eY%2FCTZO84RE3eOmAq%2Frb9MfrfrCAa8PTciiBM0QYALdmTQo%2F5NxSQgnc0IwOiEf6xkvWu6DHe%2F%2FyWDApjCien%2BCzTIbhL493z3xBH6%2BFAV3hYYNfBbTJIcNx%2FaklsIIJv1fXfg5PA6zsiwVHHjzVM4K0L4cz%2Fh3vONEEQFfA4LatPn%2Bc8iCbesuk2bR6pSM5s%2FJCh09Qj7vkQtGOZn7Ew3YfL0LGCgRG6s%2FqRXYVk%2BqtHx%2BkIWnCj7w%2BmkBkbQypfcfYdirJB1wj0TxZfgPSBpQbUS%2BRHF60DK0MaThiJEbsulhZEgPGe01M4Y4pi84XaHuMNHkFM%2B9ss%2FwK36wxdz5VFNJymzCzlojKBjqkAa4ykgz0FkC3Xf%2BqSey9NOhEYAR5BvtWYKR8Zk9gLzC0qP9Ksuhzvky8QMPFoHVW%2F9TyqByNZPngvhaSc%2Boc6bieRU8DK9pPjvOOf5GO7uyzwcOY3%2Fxf7DOeLoW1aIXujX78HEFH%2FUH1M39gIbl9WiPJ6mkItVOowD%2F7xKECtQjzukvBLKEyVVwQXOBSVhwd2RFKaTbcB6Z%2FNBL5t1eJtDL43d0c&X-Amz-Signature=db58fe68899ca9190c4900423e1ca1a0193114909a4577b29b90a118c1a610fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2T65MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3jHI4trl55M8M5BYy4Y9CuDVH1XBrUHKXPffHpLceLwIhALwOWzSQqkbnok5tgW%2B1VWwtkdrfAQXbwnJvyxkBAEo4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyYZeOBglqRbVeFhdgq3APyfTJlkNWhS5b%2FMduwVfr5SL72Y10i%2BevD5Ou2a82D8aqtW%2B%2F6E7jaPuLMnbWyvJu9cegU1RaKprBUXPb2fQzT5E27UniIU8d5iuJsuL93H1UEs%2BTPV%2F1WpdYtn3m9HpScM6Ll%2BclESl%2F7AzZRJ028WLZnFIjg%2BczALB%2Fkl3%2BlJ9w3HbBzUou1qSv8efrrDOdf0n%2FCOqxVwAYf1skjHwOBRwHuKyzaB9Rf4VoWmIyOMg1l9mzrDd6M0ki29QLwDNHdezfvxv4WQnnxw3tBN85O1zRXr0K3eY%2FCTZO84RE3eOmAq%2Frb9MfrfrCAa8PTciiBM0QYALdmTQo%2F5NxSQgnc0IwOiEf6xkvWu6DHe%2F%2FyWDApjCien%2BCzTIbhL493z3xBH6%2BFAV3hYYNfBbTJIcNx%2FaklsIIJv1fXfg5PA6zsiwVHHjzVM4K0L4cz%2Fh3vONEEQFfA4LatPn%2Bc8iCbesuk2bR6pSM5s%2FJCh09Qj7vkQtGOZn7Ew3YfL0LGCgRG6s%2FqRXYVk%2BqtHx%2BkIWnCj7w%2BmkBkbQypfcfYdirJB1wj0TxZfgPSBpQbUS%2BRHF60DK0MaThiJEbsulhZEgPGe01M4Y4pi84XaHuMNHkFM%2B9ss%2FwK36wxdz5VFNJymzCzlojKBjqkAa4ykgz0FkC3Xf%2BqSey9NOhEYAR5BvtWYKR8Zk9gLzC0qP9Ksuhzvky8QMPFoHVW%2F9TyqByNZPngvhaSc%2Boc6bieRU8DK9pPjvOOf5GO7uyzwcOY3%2Fxf7DOeLoW1aIXujX78HEFH%2FUH1M39gIbl9WiPJ6mkItVOowD%2F7xKECtQjzukvBLKEyVVwQXOBSVhwd2RFKaTbcB6Z%2FNBL5t1eJtDL43d0c&X-Amz-Signature=2ef6368193a951eeb67e2d2e02df472f2036fa877b60a176529272e510538e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

