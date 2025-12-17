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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZ2AKSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV30U6gwQtMSSlMRMTiGXYM5T5PdPhuSH1t%2BQ6wnVMKAiEA3OcV9W8vowo90bHYZXBfA5Yf09jVwIVjW0g6il6juoEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB5W6PGxzVXuRaHxEyrcAyNFccpI2LTkCszZGN3AwWdnLGX1BOw295acXeIwI8YNnY%2FVkqrrhK5EX5rZKYwu%2BsvZU3XhJ3jf%2F0PY5mpQ8Nd3a46%2FE%2B7QKPYYL%2B4tYJwfOqigqoHhxPoKJJGCR%2Bya3mITCdwvIa3s87hfqzV8mfe%2B1cz6Ih6V9wlMhjMo431YJg3GnUAN8Ah9nNi8a8X8r0863rE%2FjYDISVMFFATKYbQYxbUYUVRA%2FHDPydPe0xMDeB53gPVOoH0bhv4IYoZi0xG9LR4Abslqqnx4izE468Pl7k8VnmwPw%2BKqcqmgcNZPfBY8WYqUP8juNJ%2BHBewx85y8dML3Jl%2FW8Lyjpxmn4R0SKq7Gqc9l1m7FS92aP4m7r3tRWuovSeoLuHxwIwxOm4OTXjZpfd7jcUDjSE9jQQPP02Ys7X1zT3fNqxFcH1HNDuFXo%2Fh9NJdab4k5pYvvzaKYVmGNvrhMQ7u7ulTMJ4HYSL60M7ijwRgvNDwCl9sEc4IP78y%2B6%2FKc5HovmNtukYJFLilQsP7%2FNaiD4f27xh479HkhSe%2B3cjIJsbK4RcrQR8koIzbk%2Fq3gss%2BrUOejW%2BkNnFVr63VyfysljTmd8r1aBfOFMkWQYE%2BdL64fptbXXcx9fJZ8LIg7ezn0MNyCicoGOqUBxT36wP9RA8dy%2F7tOOs40HwbFAgedezHa7r6XNJWFQNpC95Ys%2FLCLLnetW8fmD13v2OhxpvnI4IdlXzAyBuS5bmQ4NEz2r2wRTE5W85CV6L9QvisXVhcpMciP%2FM2aq7WqE8dGKPFxgCSU5xPw0KLPMCYYk5z6C4rSrFb%2BVrGZU6z3VkS4dhvQNOAtzUIKGM9rfwWV5qGDpakKi5RaYulWQwzEVa1j&X-Amz-Signature=3b51645b02acc7436ac392dce6ce2dae648e063cd4859decd4aec40f1be151ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZ2AKSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV30U6gwQtMSSlMRMTiGXYM5T5PdPhuSH1t%2BQ6wnVMKAiEA3OcV9W8vowo90bHYZXBfA5Yf09jVwIVjW0g6il6juoEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB5W6PGxzVXuRaHxEyrcAyNFccpI2LTkCszZGN3AwWdnLGX1BOw295acXeIwI8YNnY%2FVkqrrhK5EX5rZKYwu%2BsvZU3XhJ3jf%2F0PY5mpQ8Nd3a46%2FE%2B7QKPYYL%2B4tYJwfOqigqoHhxPoKJJGCR%2Bya3mITCdwvIa3s87hfqzV8mfe%2B1cz6Ih6V9wlMhjMo431YJg3GnUAN8Ah9nNi8a8X8r0863rE%2FjYDISVMFFATKYbQYxbUYUVRA%2FHDPydPe0xMDeB53gPVOoH0bhv4IYoZi0xG9LR4Abslqqnx4izE468Pl7k8VnmwPw%2BKqcqmgcNZPfBY8WYqUP8juNJ%2BHBewx85y8dML3Jl%2FW8Lyjpxmn4R0SKq7Gqc9l1m7FS92aP4m7r3tRWuovSeoLuHxwIwxOm4OTXjZpfd7jcUDjSE9jQQPP02Ys7X1zT3fNqxFcH1HNDuFXo%2Fh9NJdab4k5pYvvzaKYVmGNvrhMQ7u7ulTMJ4HYSL60M7ijwRgvNDwCl9sEc4IP78y%2B6%2FKc5HovmNtukYJFLilQsP7%2FNaiD4f27xh479HkhSe%2B3cjIJsbK4RcrQR8koIzbk%2Fq3gss%2BrUOejW%2BkNnFVr63VyfysljTmd8r1aBfOFMkWQYE%2BdL64fptbXXcx9fJZ8LIg7ezn0MNyCicoGOqUBxT36wP9RA8dy%2F7tOOs40HwbFAgedezHa7r6XNJWFQNpC95Ys%2FLCLLnetW8fmD13v2OhxpvnI4IdlXzAyBuS5bmQ4NEz2r2wRTE5W85CV6L9QvisXVhcpMciP%2FM2aq7WqE8dGKPFxgCSU5xPw0KLPMCYYk5z6C4rSrFb%2BVrGZU6z3VkS4dhvQNOAtzUIKGM9rfwWV5qGDpakKi5RaYulWQwzEVa1j&X-Amz-Signature=b53ff1ffea68113270cb0d19158099449c888fe66cff552aefacfd0b59241ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

