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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZG56X56%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJBgCfL1SWMuKHUy7soQ51f1O0qOEkRB7GnYNl7t1FcAIhAP0WxjteUtxBq12kEbz%2F2Kqhbhh32sPmbHWX2I9c9bmzKv8DCHIQABoMNjM3NDIzMTgzODA1Igz0V4b%2FqCc2apy1LVkq3ANyG3bUEJE9WVUjMuT5yu7lBVsri21HLWeR6nsWtM2W%2BHMCzNCtHGF%2FpKtnvb%2FXHlgkXaG2cjQ73oJCl%2FZmv7NHD6I6rNKHrb1enVgZl4ppWPZGz1sQ%2BCvMLrQqnjreYB9J%2F5klzE%2BBnWHtIiawoG6xLK3kaeagkqX%2F4FZA1F75zJL8xzUyIVRJMQsh89zmsRrWSmA5r4NkdbjtFAEYETnXETVuJVLlJHhgds%2FiWNm8H4WEDI%2BSR5T1v2T7emLVHWJqaZ2bAnJYuz1A5kudhmnAd7vEKzh4AYVyhahtrnLTPMlCm6GJazG6%2F27zS2gtb%2FowPpNnCEgaA5IZeDp4FRSggwAD0A922Cz8pTI6FIDTwvSFcraswbIS%2FGngQ4zVLxr%2BV%2Bfx9SF0FL0awa8DShOcfi2v5V6nGc%2F2h%2BGRE6UN9guPDH6c%2FPRFJgbjhga3Slw8Wv6OR%2FgTScwz6B%2F7I03uLzVxGRSHDuPF%2F0iAVXwyHP3Xphx9R1T%2BSOM2xwbU4OOfnUaL9PTfX2FOqW2YFtWpRaIPYYwI%2BDwdkibWSpomIIFXEWO5Am7m3SUO%2FGfU4Vghtyw2aO4WNYREK1Ylec%2BjLT4MVDyY%2Bcai%2BYkAPxjFOTZfguHsGsZ7nC2ZnzDi%2B4fKBjqkAQE8GzGWgo3vv%2Fjj%2B25PTOFRRZMlA9lYuPFWMx14WUTpZp6VDyWNqRsIY5iwQ%2FGEsO7lIu5EnmZNzzWy0QqjbAKo1wcWt2Jq5Vo9Pi07hKi0BUZOBDgLZXLbq%2FoH%2BrQE1rSJIwb28eslN%2BusLhv6aBrftiJRfNnM%2BHkOwOIaZj1oxpTiIXTm6V19lCtqHE%2FEBUl%2Fqo4d2hkPNAU14McGdvIn%2BdGk&X-Amz-Signature=d20c940eff3646757466b532b6967831989bc8b83ea15733a249634aac1f926d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZG56X56%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJBgCfL1SWMuKHUy7soQ51f1O0qOEkRB7GnYNl7t1FcAIhAP0WxjteUtxBq12kEbz%2F2Kqhbhh32sPmbHWX2I9c9bmzKv8DCHIQABoMNjM3NDIzMTgzODA1Igz0V4b%2FqCc2apy1LVkq3ANyG3bUEJE9WVUjMuT5yu7lBVsri21HLWeR6nsWtM2W%2BHMCzNCtHGF%2FpKtnvb%2FXHlgkXaG2cjQ73oJCl%2FZmv7NHD6I6rNKHrb1enVgZl4ppWPZGz1sQ%2BCvMLrQqnjreYB9J%2F5klzE%2BBnWHtIiawoG6xLK3kaeagkqX%2F4FZA1F75zJL8xzUyIVRJMQsh89zmsRrWSmA5r4NkdbjtFAEYETnXETVuJVLlJHhgds%2FiWNm8H4WEDI%2BSR5T1v2T7emLVHWJqaZ2bAnJYuz1A5kudhmnAd7vEKzh4AYVyhahtrnLTPMlCm6GJazG6%2F27zS2gtb%2FowPpNnCEgaA5IZeDp4FRSggwAD0A922Cz8pTI6FIDTwvSFcraswbIS%2FGngQ4zVLxr%2BV%2Bfx9SF0FL0awa8DShOcfi2v5V6nGc%2F2h%2BGRE6UN9guPDH6c%2FPRFJgbjhga3Slw8Wv6OR%2FgTScwz6B%2F7I03uLzVxGRSHDuPF%2F0iAVXwyHP3Xphx9R1T%2BSOM2xwbU4OOfnUaL9PTfX2FOqW2YFtWpRaIPYYwI%2BDwdkibWSpomIIFXEWO5Am7m3SUO%2FGfU4Vghtyw2aO4WNYREK1Ylec%2BjLT4MVDyY%2Bcai%2BYkAPxjFOTZfguHsGsZ7nC2ZnzDi%2B4fKBjqkAQE8GzGWgo3vv%2Fjj%2B25PTOFRRZMlA9lYuPFWMx14WUTpZp6VDyWNqRsIY5iwQ%2FGEsO7lIu5EnmZNzzWy0QqjbAKo1wcWt2Jq5Vo9Pi07hKi0BUZOBDgLZXLbq%2FoH%2BrQE1rSJIwb28eslN%2BusLhv6aBrftiJRfNnM%2BHkOwOIaZj1oxpTiIXTm6V19lCtqHE%2FEBUl%2Fqo4d2hkPNAU14McGdvIn%2BdGk&X-Amz-Signature=1d8e1ad46407a59a86b0c9e9fb99373266be010ec2bd58ced65640de8cfec64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

