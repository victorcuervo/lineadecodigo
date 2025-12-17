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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOBQU32%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBU7pUGN6bXVO4vnMGtp%2F0Eum9LuuW%2FYsKc8DzHmrQAIhAP8nXmp2GkHyhnhd0fDZTw8unWvOXGr9wRCVW%2FuYbEG%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgweD1mbY7IWmyXrZK4q3ANwfiUOBe6wKeVzllOKTbLcZg9zCm4l%2FNB4vuC8cU0UzIF708l61VvuwivtiDTl2nxn2iKuln3lpAjbE2ZlXawx4Cn76hQRasNenxrbJs3o7TRyQ4zRtFviLURKjm91ozLW6yUCHCBtRsMjhrONw4zysCSsZsKeJklPbLvXqUH9IqtlK1hC6ly0fVdqe7Y1jcPj5vHRfHNV2aqnkc6iy127KlTJ4RUhuLQPU2yF2lYfYQsiG5UrqpPQxabrhtn1bn6kjtCmIuzss39NvK%2BldchGCNXPbalUMdtsQoxkBWs66ZllQbTJZpJIPL%2BO4Pb67j4I3l4VG8eq9i%2BOekKzhK844npSeTP3P65gOLSFiniMjt2znQi18%2F%2FbFYXHwVf4dLI7qOURCTD3krCCQ8bsCk2jJpQWhR3Y7sro3CmNgeF6Tg5RmT7js1tC%2B0NrkOE55roaxvvOKJAY%2BSzY2nikFVQfnaQJZdMD%2FKMd64c1%2BaoQ3z%2FNgxeEaevap%2FkK4kQ5GBy3mZd3wAy97uqvu2mAslGmv9Qpi1VGMLMC9bcR6YMDR7e21LSdbRcxZ%2BLl5Xt1EnrqZNT0Lf7%2BCKiNLleUISQstVseu%2FJv%2FBUBnMDhBO%2FJskT6vVt%2Be4CZdFumzDDo0YnKBjqkAZg7tyUWNpi648RSUKTLv2B2HE2G%2BfYNME3W8B5zJ1g%2BaUn9yNdmgYlAQfas3VGOa9DLXw3LdTJKhGXt7ezzPdFoDhJyw4h78LXSwYwoejL5KzH%2B7oNfqofIG%2BlpPlXCipQ%2BfwaUfB2kT1XugzzI3vM3aETy%2BmSdNNF9dXQ8i9SKrFYGkblgcX%2BmDZuANPAdCk8sgtd5kU4deCiUmm3dOSTwPSYW&X-Amz-Signature=f1aefc5d20fc00ef380b8be30d42871474089f0dfd857d675f680cd499b4ad1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOBQU32%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBU7pUGN6bXVO4vnMGtp%2F0Eum9LuuW%2FYsKc8DzHmrQAIhAP8nXmp2GkHyhnhd0fDZTw8unWvOXGr9wRCVW%2FuYbEG%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgweD1mbY7IWmyXrZK4q3ANwfiUOBe6wKeVzllOKTbLcZg9zCm4l%2FNB4vuC8cU0UzIF708l61VvuwivtiDTl2nxn2iKuln3lpAjbE2ZlXawx4Cn76hQRasNenxrbJs3o7TRyQ4zRtFviLURKjm91ozLW6yUCHCBtRsMjhrONw4zysCSsZsKeJklPbLvXqUH9IqtlK1hC6ly0fVdqe7Y1jcPj5vHRfHNV2aqnkc6iy127KlTJ4RUhuLQPU2yF2lYfYQsiG5UrqpPQxabrhtn1bn6kjtCmIuzss39NvK%2BldchGCNXPbalUMdtsQoxkBWs66ZllQbTJZpJIPL%2BO4Pb67j4I3l4VG8eq9i%2BOekKzhK844npSeTP3P65gOLSFiniMjt2znQi18%2F%2FbFYXHwVf4dLI7qOURCTD3krCCQ8bsCk2jJpQWhR3Y7sro3CmNgeF6Tg5RmT7js1tC%2B0NrkOE55roaxvvOKJAY%2BSzY2nikFVQfnaQJZdMD%2FKMd64c1%2BaoQ3z%2FNgxeEaevap%2FkK4kQ5GBy3mZd3wAy97uqvu2mAslGmv9Qpi1VGMLMC9bcR6YMDR7e21LSdbRcxZ%2BLl5Xt1EnrqZNT0Lf7%2BCKiNLleUISQstVseu%2FJv%2FBUBnMDhBO%2FJskT6vVt%2Be4CZdFumzDDo0YnKBjqkAZg7tyUWNpi648RSUKTLv2B2HE2G%2BfYNME3W8B5zJ1g%2BaUn9yNdmgYlAQfas3VGOa9DLXw3LdTJKhGXt7ezzPdFoDhJyw4h78LXSwYwoejL5KzH%2B7oNfqofIG%2BlpPlXCipQ%2BfwaUfB2kT1XugzzI3vM3aETy%2BmSdNNF9dXQ8i9SKrFYGkblgcX%2BmDZuANPAdCk8sgtd5kU4deCiUmm3dOSTwPSYW&X-Amz-Signature=521c4920acfae3f09acb163d1b47a7d6a75879f732d75a4fa9aad289649c082a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

