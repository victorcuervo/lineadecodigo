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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEPORCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMx4IoLCX1lZ1WYBfkLCQ1zGMqfVXSO2n5lOb15%2BVNHAiEA5DZdgXrTFXzyv%2BT6tZL5gorAcIiLv9chyWy6Ab9aaIAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5cho%2BlyGKTkPsILircA5rIyBT2sZRIb1QkCrVepLVWR%2BRC8OJKjvxlRP8r8WpfeP5%2B2q3Wh%2B0SZDhOF%2BAYhEub%2BDNvAyY4gnzq8fqiQD5PWy3CcxLU6%2BiZf6QdyyAGAh0YvP17FwLp8XdSjdpZNWxxnvXZXYW5%2BhmNi%2BvfyADPbaIx6QA7C4yQeV6mrJGJYCSy%2BTg0OSVZB%2F03Jscn8SxUDmPrqIyR43FeASiCKXfIyYW6YMUIEWat6qhDqfKR5rE1jEa9g8lCyvE1BGX0yuxLh6upY4sYjUK4fmmsGeeI7QqcLAIq3pxWQ1bcg2xa30h4ZeEbw9YeAKf0l9v4BBGjxKx0eqXjj20%2Fj2k3d9qba6HUG1uSnyezh7MyKckQ4ijOIHBJH8gEwZoj02miQaBuEP7oAtrMNLKEjkb0K%2Bws79YLEdsZtlHMYz0M5FyyyV6RdZNWq%2F4L4Flq2OBvynkbusBEIn0RmBHp4l%2FMdj3VfKfwZtlOBxSgjHezfmh%2Fp%2FEZn0chlqN%2BdI7AIh925I2tnxhRFcpQLFD6XXjDcgf54syCzXfFdJnSogKd4pOFcOQr%2BECAMzgwNuQuqzPzHt3IW%2FPgrUZ8U2CHk2l3QOKtlZ1MPTUO6%2FtYL%2FEdkGA9xFSRbiXLWgp3JrrjMPGei8oGOqUBxFExD3NthAFfmxOzb%2FJZJIoYlO5CTATEnxVIXqLxQdkSxWE98tyO7eka99SGlXVBfagF3CxBvi626KhUCuJI7HgGFN%2F1tD5FZ7rm1Ri%2BrpASa5eYF0Pkv7EEDdWnRO2H15w9dvFNCz8UIZICVK0ua5mEZh27bw3JXDVyzvGB5YNa%2BBEykOk%2BcGETo8yqLGiS78PxSIE%2FxzTTNwZKevXFm8cCAmUy&X-Amz-Signature=8fce85a60ea7f19f483ddfe6d905cd84b3e38b49e49370d5f42d4863e13b525a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEPORCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMx4IoLCX1lZ1WYBfkLCQ1zGMqfVXSO2n5lOb15%2BVNHAiEA5DZdgXrTFXzyv%2BT6tZL5gorAcIiLv9chyWy6Ab9aaIAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5cho%2BlyGKTkPsILircA5rIyBT2sZRIb1QkCrVepLVWR%2BRC8OJKjvxlRP8r8WpfeP5%2B2q3Wh%2B0SZDhOF%2BAYhEub%2BDNvAyY4gnzq8fqiQD5PWy3CcxLU6%2BiZf6QdyyAGAh0YvP17FwLp8XdSjdpZNWxxnvXZXYW5%2BhmNi%2BvfyADPbaIx6QA7C4yQeV6mrJGJYCSy%2BTg0OSVZB%2F03Jscn8SxUDmPrqIyR43FeASiCKXfIyYW6YMUIEWat6qhDqfKR5rE1jEa9g8lCyvE1BGX0yuxLh6upY4sYjUK4fmmsGeeI7QqcLAIq3pxWQ1bcg2xa30h4ZeEbw9YeAKf0l9v4BBGjxKx0eqXjj20%2Fj2k3d9qba6HUG1uSnyezh7MyKckQ4ijOIHBJH8gEwZoj02miQaBuEP7oAtrMNLKEjkb0K%2Bws79YLEdsZtlHMYz0M5FyyyV6RdZNWq%2F4L4Flq2OBvynkbusBEIn0RmBHp4l%2FMdj3VfKfwZtlOBxSgjHezfmh%2Fp%2FEZn0chlqN%2BdI7AIh925I2tnxhRFcpQLFD6XXjDcgf54syCzXfFdJnSogKd4pOFcOQr%2BECAMzgwNuQuqzPzHt3IW%2FPgrUZ8U2CHk2l3QOKtlZ1MPTUO6%2FtYL%2FEdkGA9xFSRbiXLWgp3JrrjMPGei8oGOqUBxFExD3NthAFfmxOzb%2FJZJIoYlO5CTATEnxVIXqLxQdkSxWE98tyO7eka99SGlXVBfagF3CxBvi626KhUCuJI7HgGFN%2F1tD5FZ7rm1Ri%2BrpASa5eYF0Pkv7EEDdWnRO2H15w9dvFNCz8UIZICVK0ua5mEZh27bw3JXDVyzvGB5YNa%2BBEykOk%2BcGETo8yqLGiS78PxSIE%2FxzTTNwZKevXFm8cCAmUy&X-Amz-Signature=f26df4e614b8b5cd31af918485df1b77de8003cbdd1ebdaf3c5c771c5913ddce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

