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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CUV5XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrPK%2B8SWUSthmIPKFLSNRmiYZ%2B1Ch9DIVskYVTN1GVlwIhAJ4BSZo5Qhy1LOCeuqTtkG6y0mqQOvVfn3arX7KAht6nKv8DCHsQABoMNjM3NDIzMTgzODA1IgzDFkTGgT9zBchgv%2B4q3AOEBFZCXUMxhAFBeBD%2Fo7%2BqeJdYi5QiEx%2BlLF0aYEDMJ1bgJEY50p4u1WxXXHf%2BgNZ3HaKNQ8rOIgT1BEOgz46wwyyklsw1cJxBCorNjJQHqEJXpzFeBOzY2f%2BcX32E%2BBl3uI23j6OHXRCZsmv9scQBK4pCieppY9Y%2B3eMLCFHlK42Z%2FQe8ncCXWQcw5sdXt%2FU6lgvquKPjjowGcTrmPH%2FxmvPbijsGpcm8UdFBg887H8Jq9lKi7Z7iOAZNmURIi%2Fp8hQ1aKZLA9QoaJiqQVpRcjTaB6TXeh5nfiigTUYzvUEprcvDJ%2B4RNX8DSK4zEVMFUjMXpB0NrifMmuToBatqEgD4EcGHPrs4lk40ql5%2BRvFL2pesg%2BckjVEmksclMi8FEwf2pMXJn0O3dMNGT8pLBGle1JNztM0VLm1wY0vGa6%2BHEmSw5IveJQ%2FNcVAwcFqHeFeTfO%2BhU4LYVi9YKFQePGYCQgD3p8Qt0UdLAEJbJDpMBeP%2Ff0L6t5T%2FuOrgEk92sOLwx82umeZildWKmrZjjgQGNSWJVgB3uiNOK9TSuWefZSSKqOslCyHBQJzznHAxtewQOueGl34QgOG9VY9lLjxml94qqP8bugsY9oEXgutFonG%2B4Nuc%2BwZsk9jDz8InKBjqkAfs9zixEQ4tKXiwrz4Y3Vf0T%2BjjL6EyWkyorcLT8Xp8unXX1oyrrylvdexPIIHMxZUBiVxLrWLM%2FWGzBlfWJlrPlSZHkU84J%2BMh5mHdsBaxW2r5CJirWdyhePsQVtSVxFCuRnK5%2BdQniRvTA6f1yPeocyewHzZY9a0NjPpREzHRTl5S7juj%2B%2BeohtB%2FjqqZGwN1fd8Rw%2BjiVwQjZ1gOSJ%2FaAA0dP&X-Amz-Signature=e07121f41c11b1b1abeb73278c214ec1e707ab6b59dddc1fab6f7dcdbc5b2b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CUV5XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrPK%2B8SWUSthmIPKFLSNRmiYZ%2B1Ch9DIVskYVTN1GVlwIhAJ4BSZo5Qhy1LOCeuqTtkG6y0mqQOvVfn3arX7KAht6nKv8DCHsQABoMNjM3NDIzMTgzODA1IgzDFkTGgT9zBchgv%2B4q3AOEBFZCXUMxhAFBeBD%2Fo7%2BqeJdYi5QiEx%2BlLF0aYEDMJ1bgJEY50p4u1WxXXHf%2BgNZ3HaKNQ8rOIgT1BEOgz46wwyyklsw1cJxBCorNjJQHqEJXpzFeBOzY2f%2BcX32E%2BBl3uI23j6OHXRCZsmv9scQBK4pCieppY9Y%2B3eMLCFHlK42Z%2FQe8ncCXWQcw5sdXt%2FU6lgvquKPjjowGcTrmPH%2FxmvPbijsGpcm8UdFBg887H8Jq9lKi7Z7iOAZNmURIi%2Fp8hQ1aKZLA9QoaJiqQVpRcjTaB6TXeh5nfiigTUYzvUEprcvDJ%2B4RNX8DSK4zEVMFUjMXpB0NrifMmuToBatqEgD4EcGHPrs4lk40ql5%2BRvFL2pesg%2BckjVEmksclMi8FEwf2pMXJn0O3dMNGT8pLBGle1JNztM0VLm1wY0vGa6%2BHEmSw5IveJQ%2FNcVAwcFqHeFeTfO%2BhU4LYVi9YKFQePGYCQgD3p8Qt0UdLAEJbJDpMBeP%2Ff0L6t5T%2FuOrgEk92sOLwx82umeZildWKmrZjjgQGNSWJVgB3uiNOK9TSuWefZSSKqOslCyHBQJzznHAxtewQOueGl34QgOG9VY9lLjxml94qqP8bugsY9oEXgutFonG%2B4Nuc%2BwZsk9jDz8InKBjqkAfs9zixEQ4tKXiwrz4Y3Vf0T%2BjjL6EyWkyorcLT8Xp8unXX1oyrrylvdexPIIHMxZUBiVxLrWLM%2FWGzBlfWJlrPlSZHkU84J%2BMh5mHdsBaxW2r5CJirWdyhePsQVtSVxFCuRnK5%2BdQniRvTA6f1yPeocyewHzZY9a0NjPpREzHRTl5S7juj%2B%2BeohtB%2FjqqZGwN1fd8Rw%2BjiVwQjZ1gOSJ%2FaAA0dP&X-Amz-Signature=1f9360990b2d0ec6f534300ca3c67bde7b87e2d62beac753a33556d537485523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

