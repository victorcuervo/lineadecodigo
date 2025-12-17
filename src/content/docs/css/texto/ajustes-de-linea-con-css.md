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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQXW5IN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvIVitFehFhCOByYPZqB9VLsykH75cpo7ixCITGuGP%2FAIhAL1gdI7WVTkaAC%2FKnzkdzX9Sd9%2FwazgHq%2Bvru6%2FF4vIAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyQ7%2FtFN4DLsY4bgTkq3AMFd5OzuZB3%2FuXYGzllcyzFmjwIBzrjmpn4mh5lk3wxjhegARsNuwObA2bBAbhpWk05hXJ6FJXEAZX5DtrXyF5n1aEdX2UPRZzbdg1mdoQD4ax8AWBujJvNWW9O6g2i4meURrIbYZMdZpXZysxMDO9jwhjCzGfMrMm1mdP2IZ6JKJt%2BHquj3AnKXpnuTihpxmJqZaNJAIF92Dq%2F26l4bBP6w75LfuPNqzfqlz256%2FcJW6dUAjlkq6odzpih0OUGr%2Bpciv%2FuziAxdeRwE3m4EeDpgZ5iULe0QAgeArikr%2F6tBsxDBXv70m269%2FNiisK5DBhX4YNguD0BLr%2FAhYnSUhj54mQ2FkesPa%2Bsb9WfKk8wnw%2Bq4%2BMG0sjyeKWLzW7kjv6qDlSOHdx7cnBfsXNy9%2FM1vRnwWdvqiE7ANYB%2Fpj2gybVi9VPcnwEnmdnfBi8b2qvR9dY7eJn3yoTgS3gyV8c3sJ5BcLy%2F6D%2FdDGHnL5rWPFu8JNAd%2FX%2FUjeQ6fQ503uQT72ZVb23y%2Fwr42lOKAFvEXpW6E55JFCztGArwjWGHWv26zd%2FqN7gOxgGR0djaSR%2BNAxiZeeFTJSkpPrJuAkbkNP12HP2OoeB6II8msfzxUY7wFoml%2BifU8tm0gzCC0onKBjqkAfUA5KqiogMtiPhUtPLvxBeaD80%2FoC9Ee1nJOrMPdBoBw8EiXsZOwU6g94JDIeQCG5u%2FkMBLfFqujVm5MvdNtmwIWhBXDNPICt9xWbT4gCXdoivM2Yegy5hq04Ns7vc70siBxhhGAhVQ3w3qlMkpNtPbNQlg9ObPDZX634jzp%2BkpQrdLUhfhccQyKS2aUjxBpi6q%2BTfZHa6YbhoPiovwNeHaExBs&X-Amz-Signature=c01f0769340533ec7a3652cb0fbe3e16267ef75f83b089d4030d168aabd07d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQXW5IN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvIVitFehFhCOByYPZqB9VLsykH75cpo7ixCITGuGP%2FAIhAL1gdI7WVTkaAC%2FKnzkdzX9Sd9%2FwazgHq%2Bvru6%2FF4vIAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyQ7%2FtFN4DLsY4bgTkq3AMFd5OzuZB3%2FuXYGzllcyzFmjwIBzrjmpn4mh5lk3wxjhegARsNuwObA2bBAbhpWk05hXJ6FJXEAZX5DtrXyF5n1aEdX2UPRZzbdg1mdoQD4ax8AWBujJvNWW9O6g2i4meURrIbYZMdZpXZysxMDO9jwhjCzGfMrMm1mdP2IZ6JKJt%2BHquj3AnKXpnuTihpxmJqZaNJAIF92Dq%2F26l4bBP6w75LfuPNqzfqlz256%2FcJW6dUAjlkq6odzpih0OUGr%2Bpciv%2FuziAxdeRwE3m4EeDpgZ5iULe0QAgeArikr%2F6tBsxDBXv70m269%2FNiisK5DBhX4YNguD0BLr%2FAhYnSUhj54mQ2FkesPa%2Bsb9WfKk8wnw%2Bq4%2BMG0sjyeKWLzW7kjv6qDlSOHdx7cnBfsXNy9%2FM1vRnwWdvqiE7ANYB%2Fpj2gybVi9VPcnwEnmdnfBi8b2qvR9dY7eJn3yoTgS3gyV8c3sJ5BcLy%2F6D%2FdDGHnL5rWPFu8JNAd%2FX%2FUjeQ6fQ503uQT72ZVb23y%2Fwr42lOKAFvEXpW6E55JFCztGArwjWGHWv26zd%2FqN7gOxgGR0djaSR%2BNAxiZeeFTJSkpPrJuAkbkNP12HP2OoeB6II8msfzxUY7wFoml%2BifU8tm0gzCC0onKBjqkAfUA5KqiogMtiPhUtPLvxBeaD80%2FoC9Ee1nJOrMPdBoBw8EiXsZOwU6g94JDIeQCG5u%2FkMBLfFqujVm5MvdNtmwIWhBXDNPICt9xWbT4gCXdoivM2Yegy5hq04Ns7vc70siBxhhGAhVQ3w3qlMkpNtPbNQlg9ObPDZX634jzp%2BkpQrdLUhfhccQyKS2aUjxBpi6q%2BTfZHa6YbhoPiovwNeHaExBs&X-Amz-Signature=b6c8c99eb041f62b70f101a2773129a22490bc7e96e13bca253ba47b8e938c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

