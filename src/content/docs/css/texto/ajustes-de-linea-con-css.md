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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXWXUQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNdzhW4Whf35YGTRbgJedwVyXp7mP3x%2BHArpxaqMvk1AIhAJZcB8zkRJCIdA3M5W9WbnV2oA1OS7gehJnj%2FxCRCY9NKv8DCHkQABoMNjM3NDIzMTgzODA1IgwETxMxxAnL6MgR1vcq3AMsgVSHNmq87I9KiWS2XyGgwIZWSD3jqRFmhIyLQyxlK5628AvgsaECgBl5slcUhR9iOfVa6RWBlhiBz99YUNJBAwE7lyD1iKK8b2DCizxoLTlt2NlBbz9xNEzLI4K54n8QVOavJSQnStIqCaakLheX06AAEeYdOUy%2BmXnKco9IyemDYNiyT2W6CstLIlFmrfwS0YwCZGh6NLaJb1WNaH9kp7k7SnHSRTsBlNMI5uMivdWixiU8D0oIPLYGEfk5zzTv%2BkFhRNueqauCcxPMj7XDUr9KjGba22nlXQ9Pt8ygn2i%2BP69FnJFslfSglagqQeyL9va52m4AlqJj4wkT1HguV8ROYp2M15jlP2X%2BhroFg9ntXvRH9kq0rUSTvwsPJbmP%2B9m%2BQzjAJkeb%2FcYuIXuXdywIS8vuz3qYddlcs1%2FeX8Zjx%2Bjfe2IlAj40VInGfcP5H748UM0rS3qnKf%2F12AnfU0iWph9szGqiIRaDTsSjivf6qg3qNVfsfP%2B8f3pSMQJUvQlPlIXiUm0%2F1xp%2BSyUTfcdWKediBO7PVIZZH0GsRKqiV2Kn4uRFeS%2B0A05ADQ4FKXPuCMjPOZ3nfaJg8G9pcpzWFGZQa41wfLAAYd5Xh7W9RRjizyVQNid4xTCB0YnKBjqkAenG9SS0AXdpFJVoEsw8sngnVlTXEcKRhNAvOIS6H%2F7oMC3lyijIhZBnyDiZSQWMhqcUFNjZAQAFr8vHQMNdxsrUs0bUgam8fmIwUxl1a%2F1A4UPVKsHzHrmFFxk8m96iuxs20%2FOMM1rIXWaaSjYc6KLH1FKpBLY64stKSJqnmisd6zv2qzhaW7BG0ErF2mHMwWO8c1Bvh7R%2FVgwv8sjGURZWJ%2FxJ&X-Amz-Signature=70a5fae66388db3664959fdf55a68917f6617014b401514da56d29ebcb6c44f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXWXUQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNdzhW4Whf35YGTRbgJedwVyXp7mP3x%2BHArpxaqMvk1AIhAJZcB8zkRJCIdA3M5W9WbnV2oA1OS7gehJnj%2FxCRCY9NKv8DCHkQABoMNjM3NDIzMTgzODA1IgwETxMxxAnL6MgR1vcq3AMsgVSHNmq87I9KiWS2XyGgwIZWSD3jqRFmhIyLQyxlK5628AvgsaECgBl5slcUhR9iOfVa6RWBlhiBz99YUNJBAwE7lyD1iKK8b2DCizxoLTlt2NlBbz9xNEzLI4K54n8QVOavJSQnStIqCaakLheX06AAEeYdOUy%2BmXnKco9IyemDYNiyT2W6CstLIlFmrfwS0YwCZGh6NLaJb1WNaH9kp7k7SnHSRTsBlNMI5uMivdWixiU8D0oIPLYGEfk5zzTv%2BkFhRNueqauCcxPMj7XDUr9KjGba22nlXQ9Pt8ygn2i%2BP69FnJFslfSglagqQeyL9va52m4AlqJj4wkT1HguV8ROYp2M15jlP2X%2BhroFg9ntXvRH9kq0rUSTvwsPJbmP%2B9m%2BQzjAJkeb%2FcYuIXuXdywIS8vuz3qYddlcs1%2FeX8Zjx%2Bjfe2IlAj40VInGfcP5H748UM0rS3qnKf%2F12AnfU0iWph9szGqiIRaDTsSjivf6qg3qNVfsfP%2B8f3pSMQJUvQlPlIXiUm0%2F1xp%2BSyUTfcdWKediBO7PVIZZH0GsRKqiV2Kn4uRFeS%2B0A05ADQ4FKXPuCMjPOZ3nfaJg8G9pcpzWFGZQa41wfLAAYd5Xh7W9RRjizyVQNid4xTCB0YnKBjqkAenG9SS0AXdpFJVoEsw8sngnVlTXEcKRhNAvOIS6H%2F7oMC3lyijIhZBnyDiZSQWMhqcUFNjZAQAFr8vHQMNdxsrUs0bUgam8fmIwUxl1a%2F1A4UPVKsHzHrmFFxk8m96iuxs20%2FOMM1rIXWaaSjYc6KLH1FKpBLY64stKSJqnmisd6zv2qzhaW7BG0ErF2mHMwWO8c1Bvh7R%2FVgwv8sjGURZWJ%2FxJ&X-Amz-Signature=a71e367e924cee6da8fdb8b50e03f713112ce01ccf06b133fab81207e9c75c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

