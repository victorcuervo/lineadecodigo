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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRIMZ7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgaRRVL3km7GXqcJExBBVkWF%2FfCoLzhMlFY9RCkOkuXAiEAu5FfqEKD2GqpEpIiTf4S0V1vJh8mYalBbY7E%2FVpOQ6AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwFyPuicx%2B0E6nquSrcA0NNh8Yr6kY1jtUsBJfz9SPMvV7Lo5eWiwOxYudCPWsfRp6viBKfbgrfM21JG%2FM2kn0N73mVdbgpN8KUw7Ye%2Bze23ud4cGrQOE3ODX2sCZSYiFrxXAONpGYgeOj3ns6Ln7%2FkkiEheaHuVazFsB%2F297j7ErfpPhc9XoVwQ9UgGK4K%2FRu1bLUFg%2BFpC8mmwiRLIDlC%2F%2Fr432l815zxK3mj%2FOayZc481Uil77IcK%2FM20eVNvJOij6KDeEXaeXnG0SkF3d%2Bk%2Fa1DQBzY8so8cha9oB79O%2FfmHqMk1KwSTceOHd45LFDHzf8svxsEflq52n7JIxeeNL8f381wGkTi3TQGhQEfq4IIwew705qY8oOZ%2BRjhPzXq7d5%2Fwl0hVxv%2FCOZ6vIV2Yg97t57Srf%2FGCD6bxbdgcGwdLf34e8mMKHZGWLYHEOuLl%2FzSBoMzGKXuXMpOea5A0hlqjBc7fEEmRanCIxFrjlGPlGP1iBi0x04r8n4JpvCMSi7LmXaB5QHFnpHdQ0NC8JteNVpUGdu3YWz%2FOfS0nAzENHXybMjdi9enBBmhiC28jdhW9sOkYM0A40pUfOYqjefsUhbLOLJIQ9002mpIxhHCR%2BA%2FapILM6HbidFyyNxpCU7JcSQ%2BbmLkMPyei8oGOqUBKVlTGjoVRDTTzpA%2Bifb935fbwD44u3uZnVI8twwLkhS0gvqBm7mfksvgrWqgRZuhr609qBI1LCNemDUOchM6tQUXgSZG2q9b1vd9R1BVHSQ5VBV1PrSXU8620PPzF1uyEjFwRR33MVxDt1%2F3PFk0rxPtTtDqdd%2BGgLeVEQfCoXU25DbaTKXtXLBcIP3DrMKVj5qT%2B3jvKgjoV83YD4mteONu4N0z&X-Amz-Signature=351676099afb1d3bf9dbbc4e295d68d521ad46c924a894104f9db4d1bce39ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRIMZ7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgaRRVL3km7GXqcJExBBVkWF%2FfCoLzhMlFY9RCkOkuXAiEAu5FfqEKD2GqpEpIiTf4S0V1vJh8mYalBbY7E%2FVpOQ6AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwFyPuicx%2B0E6nquSrcA0NNh8Yr6kY1jtUsBJfz9SPMvV7Lo5eWiwOxYudCPWsfRp6viBKfbgrfM21JG%2FM2kn0N73mVdbgpN8KUw7Ye%2Bze23ud4cGrQOE3ODX2sCZSYiFrxXAONpGYgeOj3ns6Ln7%2FkkiEheaHuVazFsB%2F297j7ErfpPhc9XoVwQ9UgGK4K%2FRu1bLUFg%2BFpC8mmwiRLIDlC%2F%2Fr432l815zxK3mj%2FOayZc481Uil77IcK%2FM20eVNvJOij6KDeEXaeXnG0SkF3d%2Bk%2Fa1DQBzY8so8cha9oB79O%2FfmHqMk1KwSTceOHd45LFDHzf8svxsEflq52n7JIxeeNL8f381wGkTi3TQGhQEfq4IIwew705qY8oOZ%2BRjhPzXq7d5%2Fwl0hVxv%2FCOZ6vIV2Yg97t57Srf%2FGCD6bxbdgcGwdLf34e8mMKHZGWLYHEOuLl%2FzSBoMzGKXuXMpOea5A0hlqjBc7fEEmRanCIxFrjlGPlGP1iBi0x04r8n4JpvCMSi7LmXaB5QHFnpHdQ0NC8JteNVpUGdu3YWz%2FOfS0nAzENHXybMjdi9enBBmhiC28jdhW9sOkYM0A40pUfOYqjefsUhbLOLJIQ9002mpIxhHCR%2BA%2FapILM6HbidFyyNxpCU7JcSQ%2BbmLkMPyei8oGOqUBKVlTGjoVRDTTzpA%2Bifb935fbwD44u3uZnVI8twwLkhS0gvqBm7mfksvgrWqgRZuhr609qBI1LCNemDUOchM6tQUXgSZG2q9b1vd9R1BVHSQ5VBV1PrSXU8620PPzF1uyEjFwRR33MVxDt1%2F3PFk0rxPtTtDqdd%2BGgLeVEQfCoXU25DbaTKXtXLBcIP3DrMKVj5qT%2B3jvKgjoV83YD4mteONu4N0z&X-Amz-Signature=c784d105101ce3684106d1340b65a063d283c4189a212ab067ab2f87ed418030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

