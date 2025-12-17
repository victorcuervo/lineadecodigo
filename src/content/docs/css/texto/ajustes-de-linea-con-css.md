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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJRXBAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZDgX2Usl%2FwakLcDf3oUhJqOn82FUEnlTbtqpb0Q3N8AIhAOHcjjcgP6Ll1YzmCOf2go%2BG5i7ZDDXdG9oXH7Y6OG%2B4Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzRAZhYysJWCUN0dv0q3APLqcTznMF5qFxRdSLL4rW7%2FnoyYpaLfzoCG6B1VjLsiECvXo4SBZORaC2RhBdaWWkakGSwa9oaCnrl12umMCwyGrTWPAanaUOO%2F1xPfcSoj0l7nLA6B1KlSZB2pLggtJ05vsB0spcIPRjA7tZ%2FVrV74v1ryD0LRk3Nibhq3ozWXt8mlvoIXI5ZyI6fbONJQN%2FOoNwRS7XnOoEhgx1ZQBx1ahwpNM42uv51vR1iPecIo6KOxRS2oCJEnmNPDRST40IIheMPDaVQluQ43%2BtLp6JJ5Fp9C8F%2Bjct5NROFLb50BSXonkOhxwIp3h4a1uxto3GoBUc66PFnyJ%2FTTZl8MhHAyi9OQgybVf1pY3%2FNCfghT%2BlZ0Ox%2FLY%2FpJ2ITfiXchM8yB6d08XjuyeecaoCl87Bx%2BFUNLip68p53jYzesDB0HtYlSPUPlZefbxKOdioEIo4mfvGZHAkVoPr8OEtq7sdFjqTUlbl8g6HYChnxXBKPAKf4XJS7V91OFLF2WOiDN2jtqR9IUYoMihiMgU5i5lIGTKW6kb07Mb0agzOzqlZLW2SSVUGjJ3HzbMzQDzbsKJFAV70nenvshWntZXC5bKW5Q%2BUwtdLzQZf8w5ni%2BuugdnHrgEqJF1i25PBKEzDB4YrKBjqkASf6h%2F0wnkxsaqBmzPJpIP9Ry4OqGml49icObSEQyV%2Bov%2BoNa4ntykCUnK%2FyWIyeb8vGjq1iE4j6UFskv82hOM43IAXKv8iE%2B%2FELSW3corrghWOKkOWRnjn2JfTodGN%2F85Np4BcrORf4xhQGX%2FIcMd7GXETbfIMdEwekzMlgGyAa%2BVIqKXwf9saXuRben25EfzHrdr36MGrl%2B3ibOxNPZWEqjGqf&X-Amz-Signature=afbc4e4f81476cb005b9718fb2c3f5eb8ede3cb70deb564e8c9b4b5e68c7884b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJRXBAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZDgX2Usl%2FwakLcDf3oUhJqOn82FUEnlTbtqpb0Q3N8AIhAOHcjjcgP6Ll1YzmCOf2go%2BG5i7ZDDXdG9oXH7Y6OG%2B4Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzRAZhYysJWCUN0dv0q3APLqcTznMF5qFxRdSLL4rW7%2FnoyYpaLfzoCG6B1VjLsiECvXo4SBZORaC2RhBdaWWkakGSwa9oaCnrl12umMCwyGrTWPAanaUOO%2F1xPfcSoj0l7nLA6B1KlSZB2pLggtJ05vsB0spcIPRjA7tZ%2FVrV74v1ryD0LRk3Nibhq3ozWXt8mlvoIXI5ZyI6fbONJQN%2FOoNwRS7XnOoEhgx1ZQBx1ahwpNM42uv51vR1iPecIo6KOxRS2oCJEnmNPDRST40IIheMPDaVQluQ43%2BtLp6JJ5Fp9C8F%2Bjct5NROFLb50BSXonkOhxwIp3h4a1uxto3GoBUc66PFnyJ%2FTTZl8MhHAyi9OQgybVf1pY3%2FNCfghT%2BlZ0Ox%2FLY%2FpJ2ITfiXchM8yB6d08XjuyeecaoCl87Bx%2BFUNLip68p53jYzesDB0HtYlSPUPlZefbxKOdioEIo4mfvGZHAkVoPr8OEtq7sdFjqTUlbl8g6HYChnxXBKPAKf4XJS7V91OFLF2WOiDN2jtqR9IUYoMihiMgU5i5lIGTKW6kb07Mb0agzOzqlZLW2SSVUGjJ3HzbMzQDzbsKJFAV70nenvshWntZXC5bKW5Q%2BUwtdLzQZf8w5ni%2BuugdnHrgEqJF1i25PBKEzDB4YrKBjqkASf6h%2F0wnkxsaqBmzPJpIP9Ry4OqGml49icObSEQyV%2Bov%2BoNa4ntykCUnK%2FyWIyeb8vGjq1iE4j6UFskv82hOM43IAXKv8iE%2B%2FELSW3corrghWOKkOWRnjn2JfTodGN%2F85Np4BcrORf4xhQGX%2FIcMd7GXETbfIMdEwekzMlgGyAa%2BVIqKXwf9saXuRben25EfzHrdr36MGrl%2B3ibOxNPZWEqjGqf&X-Amz-Signature=14008d13cedd106786e516c71fca8fe5ffc68f9c4656f587ec9c72c2f89d29a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

