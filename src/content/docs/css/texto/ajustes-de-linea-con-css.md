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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIPQ3B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjlV1Dk75InhFTZejVp97evfxTu8KsCVh0PvNF6W8UEAiEAksM3v0d7233RFmfYnHeLmNQwjx2Crt%2BzjxnNR4aU3wkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBE6n%2FaZle2LHIlU%2BircA6RCI0VBhFoCFXOPuKpSjLhteP1jeauFO6zMZiwHhrh2WGdaPFSfg%2B50PtBec74IXLiuHsAbG8bjkktUL7Q7Zc0FkpgiqHjupMLr%2BXhQNQUiVHZa96oSy%2ByWMTS%2BwGLryOWhZVAf%2Fp2FuQ5mdMH3SW3u%2Fy9GYEP0MAeu%2FESZaEpdGQ7kpnn5VB1uP8lsD%2FwwpYa96pBFJ2To5fxH3mxFnsB4w8We6QTBb8BgBfB%2BkDJqpr77lEWfsp7CCLNHUhPRju5w43DPjA%2BbK0BXUMp9nBJNf1J9qMSjTcMjFizLXM54Ucwa0KAORx0LC41ncsHKtrl9zUIvP6dHINa2lLeAZR1%2B576Fu0GSKaliaKSLV2oR86gJeuC4LbRe5igwhwNor3vBo7WpkqX6uj9STzgGhu6LDzrSfzFzPOBv74C%2F7jz9wzwcB%2BDdjDZCU5cKmFRUVWGJvh%2Foi4BeDF3n9AhW0wjkNWYiI%2FNbKtsmTffuxqko1YAyqZ7C7NBUIpLk0M0tPZlFis837PLaVEDbjxHdhnvPcXAddIZFo3EIb%2BkiM3JRSIcymiYhXCyyPAaP07VRc4SrdfaTG7kdoF4dEQqNHrRucanu8kqDkbNsE41jU3f0neU0Bhl4XxSV2fvhMK3hisoGOqUB5mQZq0f6m82kJbHkr9EDyqAjUSIkVbGZUH6XsA2yCKdI4zo5HXEhT1XW8gWMCzT6uMpKJYxan%2FB%2FcA7Q2Ppju%2FWFt6g1ofgKJ1%2FQ6LH%2BsZqLl7Rdg1JyMzq4xqM5XAI%2FskYmj%2Fq0jvxpShdO9VaRmOjZcjdq2%2FJK%2BlbPiXeP2afnMy0WPo4K7OeCBK7FfoeDhQ%2BDXZsRVpDukA%2BJOcVMeJsPl9HI&X-Amz-Signature=1998af82eac20cf4576f348830ea349ba3ed8b6d5370e3d5fe5fd45b34916a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIPQ3B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjlV1Dk75InhFTZejVp97evfxTu8KsCVh0PvNF6W8UEAiEAksM3v0d7233RFmfYnHeLmNQwjx2Crt%2BzjxnNR4aU3wkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBE6n%2FaZle2LHIlU%2BircA6RCI0VBhFoCFXOPuKpSjLhteP1jeauFO6zMZiwHhrh2WGdaPFSfg%2B50PtBec74IXLiuHsAbG8bjkktUL7Q7Zc0FkpgiqHjupMLr%2BXhQNQUiVHZa96oSy%2ByWMTS%2BwGLryOWhZVAf%2Fp2FuQ5mdMH3SW3u%2Fy9GYEP0MAeu%2FESZaEpdGQ7kpnn5VB1uP8lsD%2FwwpYa96pBFJ2To5fxH3mxFnsB4w8We6QTBb8BgBfB%2BkDJqpr77lEWfsp7CCLNHUhPRju5w43DPjA%2BbK0BXUMp9nBJNf1J9qMSjTcMjFizLXM54Ucwa0KAORx0LC41ncsHKtrl9zUIvP6dHINa2lLeAZR1%2B576Fu0GSKaliaKSLV2oR86gJeuC4LbRe5igwhwNor3vBo7WpkqX6uj9STzgGhu6LDzrSfzFzPOBv74C%2F7jz9wzwcB%2BDdjDZCU5cKmFRUVWGJvh%2Foi4BeDF3n9AhW0wjkNWYiI%2FNbKtsmTffuxqko1YAyqZ7C7NBUIpLk0M0tPZlFis837PLaVEDbjxHdhnvPcXAddIZFo3EIb%2BkiM3JRSIcymiYhXCyyPAaP07VRc4SrdfaTG7kdoF4dEQqNHrRucanu8kqDkbNsE41jU3f0neU0Bhl4XxSV2fvhMK3hisoGOqUB5mQZq0f6m82kJbHkr9EDyqAjUSIkVbGZUH6XsA2yCKdI4zo5HXEhT1XW8gWMCzT6uMpKJYxan%2FB%2FcA7Q2Ppju%2FWFt6g1ofgKJ1%2FQ6LH%2BsZqLl7Rdg1JyMzq4xqM5XAI%2FskYmj%2Fq0jvxpShdO9VaRmOjZcjdq2%2FJK%2BlbPiXeP2afnMy0WPo4K7OeCBK7FfoeDhQ%2BDXZsRVpDukA%2BJOcVMeJsPl9HI&X-Amz-Signature=407a8eff4107c787d6c1e89cacce4dc280b30eef66a626018f0340960555e477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

