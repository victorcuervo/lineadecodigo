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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746EVEJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiLx332HeNYT71KTpIrnlpQkkc9G%2FSNKkYT0Ie3p2IYQIhAKc3jypZjIgxv8JlE3UE5BxM3dXOLNSM1vslr%2FuYMbhaKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiQh1VnoesAFOpUigq3AMkaeulfsc%2BfCwmU7uoCfK01ZNjj51EQ9Wl10Cfo4XoG4lnuPfu4j8ouvvLXMMCuhOEDZw6dUSY0Uth3QI%2FMlav8wGUcU0Sl9cRe%2BJaoQLHHEgiBkfiv%2BYEolAOxzWgAcHiE7peUm7vZyEDhW6jnPtNspSUjyPVVQsh2tzGpNA0ZqTxFC3GfvEk7qNPD%2B%2FXRRr2l4dtlM3o4ZUsXhM0%2F7sFtJW04fZivLeXBMyV9B64EMepFt7m8IroAWqp%2FFhoNfuUzJp7bc%2FNPDbqgJNQAPwcjiPyXUeOeuTd6BR3WPIoxXoQQLAdV8ID54NJw3QMxgWtoF66dJApGozCvWH3nWoltvBVTkroeBzMIdOh%2FrADzUSrcOO9e7dts3ruh1W0VCGYCRDzmH4Go2VSEj%2Fsz3qbaI9wPp5ZENq4HafGota6QQyo4ASF0mnhlOWwAYQpHag63a3%2B8KujtC45XxNKOmKCJ5lZNuM1u24L7a1oKHOTGP7idjQlZjzwniJb%2FvKLEdArn2l12sBfco3CdhvRILFD9drweDgQUK5G5PvUHk5%2FcXaibYycXlZXIEkjla14vnw%2BedsRji9pTmVOyVXBaPf1eejMLP2dnHo1TBcH35GtPlEN%2B8ecty%2FyNqxzXTDDi4zKBjqkAWQAXJ%2BjbcDkgb4cEuB0iNkl3C8XO1FebCu5jFUDk%2B3Zu4FI3oStwch6OwfYz6SMBS2UFst6HVmmWzFYqY3dPEgeMrWP7TtH2W4TfltNXA7w%2F8bT6g%2BmQQ7072LMeK%2BRPrj%2BSZNIa1%2Fmx0ID%2F3shpBx8uHo%2FaBZAASWxzCP26%2BAB7u4mbjUmEy1pfMeOZOgP3FloEsow2C9KFp3gl%2FWRS%2F49d8lc&X-Amz-Signature=2fdea6bd41f076e6f8eff978a0c6824846ab7d559d2d1eaba2dae2d5420df1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746EVEJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiLx332HeNYT71KTpIrnlpQkkc9G%2FSNKkYT0Ie3p2IYQIhAKc3jypZjIgxv8JlE3UE5BxM3dXOLNSM1vslr%2FuYMbhaKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiQh1VnoesAFOpUigq3AMkaeulfsc%2BfCwmU7uoCfK01ZNjj51EQ9Wl10Cfo4XoG4lnuPfu4j8ouvvLXMMCuhOEDZw6dUSY0Uth3QI%2FMlav8wGUcU0Sl9cRe%2BJaoQLHHEgiBkfiv%2BYEolAOxzWgAcHiE7peUm7vZyEDhW6jnPtNspSUjyPVVQsh2tzGpNA0ZqTxFC3GfvEk7qNPD%2B%2FXRRr2l4dtlM3o4ZUsXhM0%2F7sFtJW04fZivLeXBMyV9B64EMepFt7m8IroAWqp%2FFhoNfuUzJp7bc%2FNPDbqgJNQAPwcjiPyXUeOeuTd6BR3WPIoxXoQQLAdV8ID54NJw3QMxgWtoF66dJApGozCvWH3nWoltvBVTkroeBzMIdOh%2FrADzUSrcOO9e7dts3ruh1W0VCGYCRDzmH4Go2VSEj%2Fsz3qbaI9wPp5ZENq4HafGota6QQyo4ASF0mnhlOWwAYQpHag63a3%2B8KujtC45XxNKOmKCJ5lZNuM1u24L7a1oKHOTGP7idjQlZjzwniJb%2FvKLEdArn2l12sBfco3CdhvRILFD9drweDgQUK5G5PvUHk5%2FcXaibYycXlZXIEkjla14vnw%2BedsRji9pTmVOyVXBaPf1eejMLP2dnHo1TBcH35GtPlEN%2B8ecty%2FyNqxzXTDDi4zKBjqkAWQAXJ%2BjbcDkgb4cEuB0iNkl3C8XO1FebCu5jFUDk%2B3Zu4FI3oStwch6OwfYz6SMBS2UFst6HVmmWzFYqY3dPEgeMrWP7TtH2W4TfltNXA7w%2F8bT6g%2BmQQ7072LMeK%2BRPrj%2BSZNIa1%2Fmx0ID%2F3shpBx8uHo%2FaBZAASWxzCP26%2BAB7u4mbjUmEy1pfMeOZOgP3FloEsow2C9KFp3gl%2FWRS%2F49d8lc&X-Amz-Signature=af6a529bb94b3327274247a68a852bc665542f75a974e3c810c613ae11e0c745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

