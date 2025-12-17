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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVP563K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZRqfTdPS14siL5PKD8uXrFvofIn7uxwRHq5Kekx26gIhAMLixmdJZH2jWsphgAcffc1EY0BS09k4jFybmQd8%2Bk2mKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHbb3Gi5d187aaJPwq3AOOTV%2BDjTY60G8WorIPFMrTId2oEJ1%2BRB8Dv8uIJlp9cjlMrvOwPfIZmLVysZ1jsWIu3wHRL1K7BLG03sbCB1sN6C5b02jgatqJWPQEn%2FmkhvS1rOgCqT0on%2Bb054XZiiLvitLgccXNqnH4B9083h85WU9mlMCHYT3TH3B4MiDiCKev9Wit%2FL55iThMhTmBnbbVZFVVKe%2BDnNv%2Bbp%2BDq5OU1VrT6gLZRQNB%2BnC%2Bkb4z0o4IqwO0osO1VyZwlERbA%2B6dAs%2FSrsum8HHF%2FIfFbOURDev6Qjlj5bV729gTZ%2BrH%2FnpCnkIMgzSHwdqaKGpcBJNnY61At4pI9XpcEfdPXzr%2Fc0ehV7rijjS5h6dcCT6FTW75mRG34bD%2BZ6eBgg044EjC%2BTxF3jzz904X6Az2tft2hlMR%2BC0fPM5vncVy2Jdu6HWJkdTrYUPEFvtntUqtOVpdVxg8BkKaeYxIvpRyWhiIerv3az0Xo9%2BBM2suwfkw5MSzbTSKA4n4Ao7nBhSYMqyd%2FnNU1AWFkNGjK%2B81oxzITIGLnNqgECSR36ttZN%2FGNFDwt7jjceeMNJ5BrZjOMxIoUJ2iQmyxpv4Gqr%2BMDFJ%2BuktDVkOA7ILuftkWmYz%2B5SzdAIGB0En3n%2FYbBDC9gIvKBjqkAdbwIWcgTe3H4UHJWg%2FMIdoNRXXw1EpK%2B%2Fd0Zkurx2NFXdk5bGxsV8SU3ZB7Fv34IWCmtKPAyNhP44ivHtIesBnVbZPxZyRw3hjPNcxbjBbBuLqxYo1qZa%2Fmd35mjRrARx2xC4Fsq8we4Ys%2BQQUzTo1dySWYihCHesFORNDC4Skw1cdz7H%2FOmWZPddcnqRpkmofuYa0SkMI2uMdqva%2Bi4eBQ2Puv&X-Amz-Signature=d869b9e33747af648ae37d1bff77761310c7a97d771953d2e38ab302de3b12a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVP563K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZRqfTdPS14siL5PKD8uXrFvofIn7uxwRHq5Kekx26gIhAMLixmdJZH2jWsphgAcffc1EY0BS09k4jFybmQd8%2Bk2mKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHbb3Gi5d187aaJPwq3AOOTV%2BDjTY60G8WorIPFMrTId2oEJ1%2BRB8Dv8uIJlp9cjlMrvOwPfIZmLVysZ1jsWIu3wHRL1K7BLG03sbCB1sN6C5b02jgatqJWPQEn%2FmkhvS1rOgCqT0on%2Bb054XZiiLvitLgccXNqnH4B9083h85WU9mlMCHYT3TH3B4MiDiCKev9Wit%2FL55iThMhTmBnbbVZFVVKe%2BDnNv%2Bbp%2BDq5OU1VrT6gLZRQNB%2BnC%2Bkb4z0o4IqwO0osO1VyZwlERbA%2B6dAs%2FSrsum8HHF%2FIfFbOURDev6Qjlj5bV729gTZ%2BrH%2FnpCnkIMgzSHwdqaKGpcBJNnY61At4pI9XpcEfdPXzr%2Fc0ehV7rijjS5h6dcCT6FTW75mRG34bD%2BZ6eBgg044EjC%2BTxF3jzz904X6Az2tft2hlMR%2BC0fPM5vncVy2Jdu6HWJkdTrYUPEFvtntUqtOVpdVxg8BkKaeYxIvpRyWhiIerv3az0Xo9%2BBM2suwfkw5MSzbTSKA4n4Ao7nBhSYMqyd%2FnNU1AWFkNGjK%2B81oxzITIGLnNqgECSR36ttZN%2FGNFDwt7jjceeMNJ5BrZjOMxIoUJ2iQmyxpv4Gqr%2BMDFJ%2BuktDVkOA7ILuftkWmYz%2B5SzdAIGB0En3n%2FYbBDC9gIvKBjqkAdbwIWcgTe3H4UHJWg%2FMIdoNRXXw1EpK%2B%2Fd0Zkurx2NFXdk5bGxsV8SU3ZB7Fv34IWCmtKPAyNhP44ivHtIesBnVbZPxZyRw3hjPNcxbjBbBuLqxYo1qZa%2Fmd35mjRrARx2xC4Fsq8we4Ys%2BQQUzTo1dySWYihCHesFORNDC4Skw1cdz7H%2FOmWZPddcnqRpkmofuYa0SkMI2uMdqva%2Bi4eBQ2Puv&X-Amz-Signature=9044768d9aa2988daf7f53e6549ddd574da1681a6db0b134484049d255183470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

