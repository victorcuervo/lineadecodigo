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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFCHNSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaKT%2B4PDA%2BS5zrN05nqm76q4lay1kk71WYB6CmsL9e7AiEA0kVJ4EHfkHuxrlUxGOQRlMo3K%2FGjsoMP1Ntx4v%2FEK1Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHzBZAJzkFxJdP0GNyrcA%2BoHnrm19QltkuRRyQw%2Bt8BPWVo0kpEUokeG50vHPlUFALhPnfpJtFB%2Bg9CwimJSlU200OF3nX4WpUxmllDEPlD21UWs5KfsEMTddZge%2BkwSp9hc2VZqCAM7%2F15%2FT5pGFAck1MSXlYkvuhKNcjZcL3NB6D%2BttUM8a3DgYwJXsXMxSXk3CGBCMmQwI9PG7zup4GUorzk2Mtgx4jCvS5kSYxLBPrg%2FVSXx7c0h9DjTKkdE3XxieUZ1yzmUyp%2FReZk5%2BBXOrHayhd3NK8F1y9l3kCKy1GKrkQ%2FyEZGenc9s0CFOFIKzT5m1WuO7HS8kUnB0HH%2B2MMu5FJdYOPsqddDCD9yrKgqnlB8nAGj1EYPhFYdoIflCSJYb%2BiayHPOLeVw6PntcFJ3nozUL1hNInOTqWPVR2zCW7SZxP7mBbk4OCkxfBZdk9OsTYf6ts8ytVFUqox1dTsTtI9P1hLJg8%2FuDlNo3u0n5cHvb1ZPGjxof7amOf%2F7B3sdaTjQ09uxW2XkU1e5j0n25quifxXBj3E%2FwKoAw3SaGjx6x2VGWvdIonOr%2FiCvhr05l1Hg18uVOX4HCZNn8RVfGfbso3MI%2FUm8qJmDpEqpUwa%2FIfrp1SNkK2Kte7sujHo9RsGrmLJi5MIzfh8oGOqUBJV1Lix%2F5XYX3iJ%2FbAkRB6S9BG9TFc%2BiKPZT6os32Ebqc0hX0hq42r%2FQMqdbyr%2BFShd1qhOWRHFSh8vRPAOZ3cEIAOXF9zOmznAwnn2NDa1v803HGcvRzPfFM%2FjNVq9UrCOWQM3WbXB5xxMuUxxvQpHybUs4umHb4zknS2GC8EsegZlC6dyhMgn6OnjaUFlahdG3EZafOpgQ9PqkUkXYiLA9Q2J5%2F&X-Amz-Signature=05395f46033b78cc0404c0edaf35d36d7bb6b9088ea8a7aa82b24a1a4fba80cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFCHNSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaKT%2B4PDA%2BS5zrN05nqm76q4lay1kk71WYB6CmsL9e7AiEA0kVJ4EHfkHuxrlUxGOQRlMo3K%2FGjsoMP1Ntx4v%2FEK1Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHzBZAJzkFxJdP0GNyrcA%2BoHnrm19QltkuRRyQw%2Bt8BPWVo0kpEUokeG50vHPlUFALhPnfpJtFB%2Bg9CwimJSlU200OF3nX4WpUxmllDEPlD21UWs5KfsEMTddZge%2BkwSp9hc2VZqCAM7%2F15%2FT5pGFAck1MSXlYkvuhKNcjZcL3NB6D%2BttUM8a3DgYwJXsXMxSXk3CGBCMmQwI9PG7zup4GUorzk2Mtgx4jCvS5kSYxLBPrg%2FVSXx7c0h9DjTKkdE3XxieUZ1yzmUyp%2FReZk5%2BBXOrHayhd3NK8F1y9l3kCKy1GKrkQ%2FyEZGenc9s0CFOFIKzT5m1WuO7HS8kUnB0HH%2B2MMu5FJdYOPsqddDCD9yrKgqnlB8nAGj1EYPhFYdoIflCSJYb%2BiayHPOLeVw6PntcFJ3nozUL1hNInOTqWPVR2zCW7SZxP7mBbk4OCkxfBZdk9OsTYf6ts8ytVFUqox1dTsTtI9P1hLJg8%2FuDlNo3u0n5cHvb1ZPGjxof7amOf%2F7B3sdaTjQ09uxW2XkU1e5j0n25quifxXBj3E%2FwKoAw3SaGjx6x2VGWvdIonOr%2FiCvhr05l1Hg18uVOX4HCZNn8RVfGfbso3MI%2FUm8qJmDpEqpUwa%2FIfrp1SNkK2Kte7sujHo9RsGrmLJi5MIzfh8oGOqUBJV1Lix%2F5XYX3iJ%2FbAkRB6S9BG9TFc%2BiKPZT6os32Ebqc0hX0hq42r%2FQMqdbyr%2BFShd1qhOWRHFSh8vRPAOZ3cEIAOXF9zOmznAwnn2NDa1v803HGcvRzPfFM%2FjNVq9UrCOWQM3WbXB5xxMuUxxvQpHybUs4umHb4zknS2GC8EsegZlC6dyhMgn6OnjaUFlahdG3EZafOpgQ9PqkUkXYiLA9Q2J5%2F&X-Amz-Signature=d52818909c180281842c3b68cd3c2dea88cf604d0d861e2074f0c4252b19d80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

