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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUOTIR5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtvJ9kxSPDN4GBEKNbI5K8G9AslE4xY6qVDm58KZilBAiEAtCLI4af2A3M%2B7UQfmeAV2414pgxG11t%2BNlps7846dswq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJVN3Sp0p4Roj8XrLircA1M6DCTSx%2BrQcmkHFYHfPTTcn6k3hONL2fSH65zHhxtWNMyRYncqE9TWyyOWpF6NfJO8Xw4HSiYoJMuD4ICeZIY0DKMbi2P%2F2mbOuy%2Fb6xQ57FitoFLl37tQfDAQIyeGA%2FwIV3XqFGLmWauTsZSXExVgqOEJ1C4PpmfyuHDsfmh5JHQY0tG7i3EfH9Ud%2BihIlqNYnmTI00dXmWqHH1MdgfUIQJwtA3u1mgid7cOSjAw9q6qtnVh%2BR9s9IeeamRU5QTtR7cRH3%2BsLdCrVLcuSEsMUA1Lsx0XYXvjGmnfjvImaSBvdo6jvrFbLQfKWrbljgZTUEj2KnhMmtBrVYzl%2FA4LoIzhz%2B4H%2FurUkb8m3Yu3cBSEUpZnMiX91QZcUiKb9kQ%2FTP1XNpZZKhwufDZFl5vy1UNa0JAO1h86DhqPefprB%2F6CvKqSce8GT36hzqefB2%2BSGqdMYNw126yesyk56APOFGIda1YgiHh1JCn%2Fuc%2FQNJCLuAE9e2VCnThUuM36rciOxrhSpI1zd11nw%2BsYv979we7DPE%2FL3L1%2BUaxYfFg8Rf4ouwwIYKoys7GKGyefxB4qjpqPiBso8LDPq9qML%2FvAue5EYuWNHy9JQ97fPZ%2FQ07BKGb4%2B842OIALUSMPm3icoGOqUB2JlZpvDYPyAEWuSWBUBYxBeDFp1Oo82lW21uki81ahcmKafvBP6Aml6wpxBaz1eiuyASw%2B%2BiisALxh26qdiAKTUoHB3cUSfzTQOFEcKlSPQeU0WDkgGKW2Ymnx0cgnGb9aRs229DpWTnzCaTYOkAARZYxjJTyCwtZvM9nsa5rrTGsAyu6sqY8LC6742Tpj4UhGl5fiVAk2921diaejOvvOYUViGZ&X-Amz-Signature=6f1d91519bfc2d5ce8702fc2019a7535847abdba7ff504b1e0d464f5d8cb95da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUOTIR5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtvJ9kxSPDN4GBEKNbI5K8G9AslE4xY6qVDm58KZilBAiEAtCLI4af2A3M%2B7UQfmeAV2414pgxG11t%2BNlps7846dswq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJVN3Sp0p4Roj8XrLircA1M6DCTSx%2BrQcmkHFYHfPTTcn6k3hONL2fSH65zHhxtWNMyRYncqE9TWyyOWpF6NfJO8Xw4HSiYoJMuD4ICeZIY0DKMbi2P%2F2mbOuy%2Fb6xQ57FitoFLl37tQfDAQIyeGA%2FwIV3XqFGLmWauTsZSXExVgqOEJ1C4PpmfyuHDsfmh5JHQY0tG7i3EfH9Ud%2BihIlqNYnmTI00dXmWqHH1MdgfUIQJwtA3u1mgid7cOSjAw9q6qtnVh%2BR9s9IeeamRU5QTtR7cRH3%2BsLdCrVLcuSEsMUA1Lsx0XYXvjGmnfjvImaSBvdo6jvrFbLQfKWrbljgZTUEj2KnhMmtBrVYzl%2FA4LoIzhz%2B4H%2FurUkb8m3Yu3cBSEUpZnMiX91QZcUiKb9kQ%2FTP1XNpZZKhwufDZFl5vy1UNa0JAO1h86DhqPefprB%2F6CvKqSce8GT36hzqefB2%2BSGqdMYNw126yesyk56APOFGIda1YgiHh1JCn%2Fuc%2FQNJCLuAE9e2VCnThUuM36rciOxrhSpI1zd11nw%2BsYv979we7DPE%2FL3L1%2BUaxYfFg8Rf4ouwwIYKoys7GKGyefxB4qjpqPiBso8LDPq9qML%2FvAue5EYuWNHy9JQ97fPZ%2FQ07BKGb4%2B842OIALUSMPm3icoGOqUB2JlZpvDYPyAEWuSWBUBYxBeDFp1Oo82lW21uki81ahcmKafvBP6Aml6wpxBaz1eiuyASw%2B%2BiisALxh26qdiAKTUoHB3cUSfzTQOFEcKlSPQeU0WDkgGKW2Ymnx0cgnGb9aRs229DpWTnzCaTYOkAARZYxjJTyCwtZvM9nsa5rrTGsAyu6sqY8LC6742Tpj4UhGl5fiVAk2921diaejOvvOYUViGZ&X-Amz-Signature=a69ba7e233145d2d6313309570d3195ca0c0120c3a476ded7c09d92a833e0007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

