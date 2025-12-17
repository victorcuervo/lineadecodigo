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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672Y2DDCO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqgz90bpBu51NYX5eKJXOnbBkcuBDVrPwXa9%2B57P1FCAiEA0vIpyGJ1EU0bxVC01dtL6IEN2RrJLtncPKOba1pigeUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDICMNRIhdvbmtsxERyrcA4bQD8w4Bjl5FIapzyFgy2aXXVcurUh5mwCFBmqUh9YZ88le5ELhjDcnNwWjs6cGduVfW00misTWSa9wi4esIHvI0noS50ipW97%2Fz5UttghidNemx8fgUU3IjMR9r1ggROYHdEFZDcVhSq0N43Cp9NNu555E0dR3HvDcjDtKnTJuD5VXV2YK6Qv6o0%2F%2BLB1ccWK19PfjwbxqdSZ1Wak3ot3%2FqPuk8gskx%2Fu2MxTKtoLspGI0qroh1Nb%2FCofNsinI53OAwC9A455upZUg0n24wJgEM1EuFTU6y6LoOypwYKLayikbb66kB%2B4F72CNffn1eKcDms0Y%2Bdr32KJ4a6QtjnmyGsdlg8SK63tCKxrDGhal9cHgiz%2BNmANXzp0o4fNp9V%2BJszfBFjGgbGPxVS%2FLyqlR5oI3DEEIc6RJynbbwvZdAJ9EDglW3vMhiIFFuq%2FwY9yRHWMe2F%2FLFseKV3kRA017PqvXiAR8dguITuiS4AFsucXMMk5RyVoiwNGJiVJ8K84BXq80oKsKuMLjz2oUBhhB9o2ds%2B4wSep3LS6YAjxFkadjviQ2ahuOAxo3Tn0zMnOadq%2FbTXrfCoTXuOmwNnvMznwD5nbFyElcy8OHls%2FglUdKdve7VbDIwtxbMImdicoGOqUB1WHd3UN7q6cOWg2AKOT4AlI%2B8QQHrS57ZY1oRwjufHNDANhA9DY3bFJJcwXRCWbD2DlNhczFM7U0XPIRBAOeMLd3ZdHh%2Fe26Ek%2FPlPAG7E94ksjZopldCZXRsuUr5TZPMsX7VSZp25jTGAooaOD%2BMvWwD%2BgcfA7AZWrZUYsj5N2hG%2BdMWHAMWRdF0Dg8rSKi5E7bR%2BCAtHrfCmpGvRHWJzCNoVhV&X-Amz-Signature=0dd9cef8869dcf6ec5dcddc433093f18e5be7d6ba89f59647a6a6d5a75c5b0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672Y2DDCO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqgz90bpBu51NYX5eKJXOnbBkcuBDVrPwXa9%2B57P1FCAiEA0vIpyGJ1EU0bxVC01dtL6IEN2RrJLtncPKOba1pigeUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDICMNRIhdvbmtsxERyrcA4bQD8w4Bjl5FIapzyFgy2aXXVcurUh5mwCFBmqUh9YZ88le5ELhjDcnNwWjs6cGduVfW00misTWSa9wi4esIHvI0noS50ipW97%2Fz5UttghidNemx8fgUU3IjMR9r1ggROYHdEFZDcVhSq0N43Cp9NNu555E0dR3HvDcjDtKnTJuD5VXV2YK6Qv6o0%2F%2BLB1ccWK19PfjwbxqdSZ1Wak3ot3%2FqPuk8gskx%2Fu2MxTKtoLspGI0qroh1Nb%2FCofNsinI53OAwC9A455upZUg0n24wJgEM1EuFTU6y6LoOypwYKLayikbb66kB%2B4F72CNffn1eKcDms0Y%2Bdr32KJ4a6QtjnmyGsdlg8SK63tCKxrDGhal9cHgiz%2BNmANXzp0o4fNp9V%2BJszfBFjGgbGPxVS%2FLyqlR5oI3DEEIc6RJynbbwvZdAJ9EDglW3vMhiIFFuq%2FwY9yRHWMe2F%2FLFseKV3kRA017PqvXiAR8dguITuiS4AFsucXMMk5RyVoiwNGJiVJ8K84BXq80oKsKuMLjz2oUBhhB9o2ds%2B4wSep3LS6YAjxFkadjviQ2ahuOAxo3Tn0zMnOadq%2FbTXrfCoTXuOmwNnvMznwD5nbFyElcy8OHls%2FglUdKdve7VbDIwtxbMImdicoGOqUB1WHd3UN7q6cOWg2AKOT4AlI%2B8QQHrS57ZY1oRwjufHNDANhA9DY3bFJJcwXRCWbD2DlNhczFM7U0XPIRBAOeMLd3ZdHh%2Fe26Ek%2FPlPAG7E94ksjZopldCZXRsuUr5TZPMsX7VSZp25jTGAooaOD%2BMvWwD%2BgcfA7AZWrZUYsj5N2hG%2BdMWHAMWRdF0Dg8rSKi5E7bR%2BCAtHrfCmpGvRHWJzCNoVhV&X-Amz-Signature=a7a1e470cd9fc77e7daf651453f4f1aa4d05148307c936a88710bea0a6819741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

