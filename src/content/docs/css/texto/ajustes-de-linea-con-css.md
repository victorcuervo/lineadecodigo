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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKXLUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpAQ%2Bwys08D0FrAlulk7ALpZUHKLDq%2BXs%2FWw7enBSzngIhAJoO0SLzk4XU5vNndjyMY%2BJGoHKMdkPFUeD51SgpIHVhKv8DCH4QABoMNjM3NDIzMTgzODA1IgywG7d8hd%2BRdjwgAE4q3AOJ00uI3HpJ5koRvtIvvmn3QnWPZC9uoX3%2Fa33sTJ4AeW%2BURIye0Z6bII6jzcwPRLMsLf54LpMVBG%2BPV69CoC0rIpA8ob5kJZEwXbe1LaXuyP5bE9YQQ9rfGg5%2FOIF3pbEESNdCkL4Zi4ll7L7sHAMcdG6yGFDdINb%2BSb2vaS5NeGapaf6rrLUOak7hh0F7ls7ADRSxCg0CrJKcuDDWYSS%2BvT6V8iwPVpc%2BUnFqyIxXjLcH7NJQlXbWHw9%2B8tL47m%2F4JiQl5n8ymMCO1avNj8tnx%2FVNpvt1k4FTS8XMPTVeyX%2F%2F64mB73gNOh3KRc6CrYWAmaJ4aLaNnquL2UI%2FieRzCr9yFX4GFguO6fORhed9wjlHi5i1fr6kHiPG1GjEkzoo7yExThacMXn7JYzrhjqutBMFy31TzxNj%2Fol3ZR6Dg8v%2BH3hUYhIbkOQMZEvjnexz0SLP1JvjxqVk66ysUSDuchmJuw4PLBa1tCoBZyxixcyE7quqGZhQrDJlIsAJD01wLlJ36YukGeWG3CLAL77sQ1C0r%2B6CLQXHH5cBEQCnd%2FDQBZZUeOawpkdg28OXPSsJkbLuHFKrf67Rl%2FNulBbhVd%2Fm5vzBopzJBtMOGjwx2Vv6RoHlSsrT%2BxDVvjDUxYrKBjqkAX%2FslTrNpg%2BOmNmTy1bPBXrTHfHJDQLektE6QuylOX2EXt5YldF9%2F9%2BTVIHVegyTsckwItSGw4a6Y5bKcEOgisj1wRsS07pCjjhj%2FJ9ioxDoYpFkUHmjIWFYZ%2BSnlKupc2InRBZl5uDCCbVbvmLFwTPQE9cNqgy6hJEz16Eem7abNEwVLDgcJ1SfNjKJYz2pKedgBsCwnwzSQZ2FmkW8jviY7z%2F6&X-Amz-Signature=88c267cb4b4e2d9de9f5d92d1b5b419c0884215b4fa3506d1c9ba5921b54caeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKXLUW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpAQ%2Bwys08D0FrAlulk7ALpZUHKLDq%2BXs%2FWw7enBSzngIhAJoO0SLzk4XU5vNndjyMY%2BJGoHKMdkPFUeD51SgpIHVhKv8DCH4QABoMNjM3NDIzMTgzODA1IgywG7d8hd%2BRdjwgAE4q3AOJ00uI3HpJ5koRvtIvvmn3QnWPZC9uoX3%2Fa33sTJ4AeW%2BURIye0Z6bII6jzcwPRLMsLf54LpMVBG%2BPV69CoC0rIpA8ob5kJZEwXbe1LaXuyP5bE9YQQ9rfGg5%2FOIF3pbEESNdCkL4Zi4ll7L7sHAMcdG6yGFDdINb%2BSb2vaS5NeGapaf6rrLUOak7hh0F7ls7ADRSxCg0CrJKcuDDWYSS%2BvT6V8iwPVpc%2BUnFqyIxXjLcH7NJQlXbWHw9%2B8tL47m%2F4JiQl5n8ymMCO1avNj8tnx%2FVNpvt1k4FTS8XMPTVeyX%2F%2F64mB73gNOh3KRc6CrYWAmaJ4aLaNnquL2UI%2FieRzCr9yFX4GFguO6fORhed9wjlHi5i1fr6kHiPG1GjEkzoo7yExThacMXn7JYzrhjqutBMFy31TzxNj%2Fol3ZR6Dg8v%2BH3hUYhIbkOQMZEvjnexz0SLP1JvjxqVk66ysUSDuchmJuw4PLBa1tCoBZyxixcyE7quqGZhQrDJlIsAJD01wLlJ36YukGeWG3CLAL77sQ1C0r%2B6CLQXHH5cBEQCnd%2FDQBZZUeOawpkdg28OXPSsJkbLuHFKrf67Rl%2FNulBbhVd%2Fm5vzBopzJBtMOGjwx2Vv6RoHlSsrT%2BxDVvjDUxYrKBjqkAX%2FslTrNpg%2BOmNmTy1bPBXrTHfHJDQLektE6QuylOX2EXt5YldF9%2F9%2BTVIHVegyTsckwItSGw4a6Y5bKcEOgisj1wRsS07pCjjhj%2FJ9ioxDoYpFkUHmjIWFYZ%2BSnlKupc2InRBZl5uDCCbVbvmLFwTPQE9cNqgy6hJEz16Eem7abNEwVLDgcJ1SfNjKJYz2pKedgBsCwnwzSQZ2FmkW8jviY7z%2F6&X-Amz-Signature=a3df1dcde1c779cf0dbb232e263dbee248d91afcca3ab2fb1b71f1bf19f37710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

