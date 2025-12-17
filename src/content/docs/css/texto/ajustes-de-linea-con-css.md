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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPOIOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApJRTUuPFKqO6tQFvzeVpD7gsIzAU6BPRD6DbgWH5j6AiB%2F3XnU9wdsE3H7roP%2FL6bMaTRDKg3lQTDdrzpn7gv1aiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJwu7g%2Bo55dYhy%2BHKtwD8HpEQW5jJ9ZXxIj1JHY3FN3LaZzkxk57rAasE3yqQPqOPpxyPQtjZd%2BQHQ%2F7KpBEPT3Ssne0xTRyJ1Zg9a81oqMfIlEdHoEF8%2Bxp5Z%2Fpn5pzcu90pkBnjBfOO5f08RzII8kQ3Z8Y%2FL5R8BaNQsEv3Equc9NtCyarlEKLrrSRT7MFKZZ%2Fn4s6klpf1o%2BxQgWgVgnZZ0H7RcyS8QRJQ5M1Y8vk2be8lwzw4y1bDwcAkusL7VCaewUPzY81uUvqGlUMbz32xOz4kJtvHPChQu2SQXKbZ%2BC%2F3vfzPXZGf0J9V%2FTnXZUQde2HXGjOXSF%2BmUtJJIgQA5iNhKKFl%2BTZdQek3EkRw5t0ryaK9A5GoD6ZsCCknbiopX839Ai8RCBenzcB%2BAvokPQ4bOhdV6XOkmeyNn9pYTY%2Fa0b5RjKgzFQau60jPAKape%2F3h7zBQowH6Efi56KlwbR2y65ASdkq1hUib55L72cOEP3iWlU31oVuHgIPAVSwGHwmsd%2FMhlYjylha7UEEVV%2BhrkYILdHSgw7Rdd5M2jDUHZfjBDkj61lKqKn%2FD2sxSXi3%2BZFrnoctZNK3X4%2FxOFDJH%2FXkpEi1aNDbWtdnk2ILv26tNtDFkDz4VTrrczQmzazeKARHUxswuJ%2BLygY6pgGJzsY87YAsL6m51xk5hXuvv4dN9mG%2FogDkK3OcRgOeuBWBwUt540dTE30xAbcbJXLqZFAp2g4dTO9BF4ElNTmZGKmmaMXWWjwUcfN%2FdGgqk4xIFbZeyheovH8I5%2BEKU9wH6oPB4asXELNQh2NtX4dCWYoIIbKCZ6FGSJ%2BfvP63JUde6zLYOZ3YDbHh6KX9U4z%2BBnmOjnd4Lq8ufzu7%2FdTH4wu8F6%2BI&X-Amz-Signature=5d1a88efa2f702ddf5bdd151f6244e2791193a44fc4cf75d4a05e7fe240531fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPOIOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApJRTUuPFKqO6tQFvzeVpD7gsIzAU6BPRD6DbgWH5j6AiB%2F3XnU9wdsE3H7roP%2FL6bMaTRDKg3lQTDdrzpn7gv1aiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJwu7g%2Bo55dYhy%2BHKtwD8HpEQW5jJ9ZXxIj1JHY3FN3LaZzkxk57rAasE3yqQPqOPpxyPQtjZd%2BQHQ%2F7KpBEPT3Ssne0xTRyJ1Zg9a81oqMfIlEdHoEF8%2Bxp5Z%2Fpn5pzcu90pkBnjBfOO5f08RzII8kQ3Z8Y%2FL5R8BaNQsEv3Equc9NtCyarlEKLrrSRT7MFKZZ%2Fn4s6klpf1o%2BxQgWgVgnZZ0H7RcyS8QRJQ5M1Y8vk2be8lwzw4y1bDwcAkusL7VCaewUPzY81uUvqGlUMbz32xOz4kJtvHPChQu2SQXKbZ%2BC%2F3vfzPXZGf0J9V%2FTnXZUQde2HXGjOXSF%2BmUtJJIgQA5iNhKKFl%2BTZdQek3EkRw5t0ryaK9A5GoD6ZsCCknbiopX839Ai8RCBenzcB%2BAvokPQ4bOhdV6XOkmeyNn9pYTY%2Fa0b5RjKgzFQau60jPAKape%2F3h7zBQowH6Efi56KlwbR2y65ASdkq1hUib55L72cOEP3iWlU31oVuHgIPAVSwGHwmsd%2FMhlYjylha7UEEVV%2BhrkYILdHSgw7Rdd5M2jDUHZfjBDkj61lKqKn%2FD2sxSXi3%2BZFrnoctZNK3X4%2FxOFDJH%2FXkpEi1aNDbWtdnk2ILv26tNtDFkDz4VTrrczQmzazeKARHUxswuJ%2BLygY6pgGJzsY87YAsL6m51xk5hXuvv4dN9mG%2FogDkK3OcRgOeuBWBwUt540dTE30xAbcbJXLqZFAp2g4dTO9BF4ElNTmZGKmmaMXWWjwUcfN%2FdGgqk4xIFbZeyheovH8I5%2BEKU9wH6oPB4asXELNQh2NtX4dCWYoIIbKCZ6FGSJ%2BfvP63JUde6zLYOZ3YDbHh6KX9U4z%2BBnmOjnd4Lq8ufzu7%2FdTH4wu8F6%2BI&X-Amz-Signature=99a68b6dd69293285948b4ff57717dd92030fbbfc0f3d60e748784f8e5487ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

