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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDB7C3Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxRvCjLQaOwkYeZiqXXvMNZ3Z42WaTm9r8K%2FfjjByvbAiEA9kUoYVAO%2FhvhP%2Bj3dDc9lfDKwp07rn80R97wgdxprqQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAaZ%2B0D2n7nRn0xesyrcAyqMSfcaosizNHgZoT%2FwFJ5L89TiMysD%2BXumi%2BEVLUMOW%2FxSvn%2FdJlf2Kyt5mmpbGmeCdN9KJv9GdLguQ6ZAHD7AYC2CVBBKaLJ5MKw0wQMr26MxqpTJCOluVE8LRCiHY4Vo9ivzpz3AOW92YWTQO7WkMClooRJvzr0rPId7C4Pmdf3dx1bsFQDC9YAq7ILRAylUtnBvty9%2BYdYacFcMZX6gjzJGx8ZcSp4mx6YzZBTzCNGXg6XISbAdQOZaPvNkQbJgvVzXBLPqB67wdSThfD8T5ZmSOEd8PrPOtd4L8YtLirhKYJi0xnC7gJLDZrwtNLBockFfdvWspM8lZQnnbhOzVW3RviYvyaNHJzOBkCN1KLfDwpw%2F2MSI3NpKjiMIZt030X4SduCNg5UBUjh0HlfALkSTA16ZbkBQhzWH3uo7X1sduHjMtytxcd5Tl6BlI7vHSqcWhNl3d2UImEdwpt%2B%2FRUtJmmNX5DituSSacdec%2BlX%2FjbI155ghPv9DzjFbUlscNSl7vT1WSDk4crezHqt7tnHKJigQWBemrizJi4wbU4cGuFEQH56civ0b8KPsw1MmNSKj7iCOcJ5Z6hq7CvC43GkKsgPTQRVb1aMwPu%2FadcGXLYlyebQ1D2alMOTpiMoGOqUBnT%2FPl7KVZrDMtWj9L8soguvBbUNiqR44KTLX4gNCqTLV8DLA6z1qCLsYd80RFalTZiPF%2F37hun4fbb3wn5pG6Nxi1Gcvor69dKaCmMNVvDkWVZaHYrw35bbUXmTKG6B1QsVPE5lQiTb4nNmn%2F%2BAy92NbZOkQEGQ%2FEoohMr2SZtZ2tFEQzIndkwpfnDxWGM%2BMpXSZWCQCgSXzNgrgk1d%2BvdonKPWQ&X-Amz-Signature=c4a1694de2666b8493f24b4663a07a4ddfc6a1b2e8a8e24381d66e51965836f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDB7C3Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxRvCjLQaOwkYeZiqXXvMNZ3Z42WaTm9r8K%2FfjjByvbAiEA9kUoYVAO%2FhvhP%2Bj3dDc9lfDKwp07rn80R97wgdxprqQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAaZ%2B0D2n7nRn0xesyrcAyqMSfcaosizNHgZoT%2FwFJ5L89TiMysD%2BXumi%2BEVLUMOW%2FxSvn%2FdJlf2Kyt5mmpbGmeCdN9KJv9GdLguQ6ZAHD7AYC2CVBBKaLJ5MKw0wQMr26MxqpTJCOluVE8LRCiHY4Vo9ivzpz3AOW92YWTQO7WkMClooRJvzr0rPId7C4Pmdf3dx1bsFQDC9YAq7ILRAylUtnBvty9%2BYdYacFcMZX6gjzJGx8ZcSp4mx6YzZBTzCNGXg6XISbAdQOZaPvNkQbJgvVzXBLPqB67wdSThfD8T5ZmSOEd8PrPOtd4L8YtLirhKYJi0xnC7gJLDZrwtNLBockFfdvWspM8lZQnnbhOzVW3RviYvyaNHJzOBkCN1KLfDwpw%2F2MSI3NpKjiMIZt030X4SduCNg5UBUjh0HlfALkSTA16ZbkBQhzWH3uo7X1sduHjMtytxcd5Tl6BlI7vHSqcWhNl3d2UImEdwpt%2B%2FRUtJmmNX5DituSSacdec%2BlX%2FjbI155ghPv9DzjFbUlscNSl7vT1WSDk4crezHqt7tnHKJigQWBemrizJi4wbU4cGuFEQH56civ0b8KPsw1MmNSKj7iCOcJ5Z6hq7CvC43GkKsgPTQRVb1aMwPu%2FadcGXLYlyebQ1D2alMOTpiMoGOqUBnT%2FPl7KVZrDMtWj9L8soguvBbUNiqR44KTLX4gNCqTLV8DLA6z1qCLsYd80RFalTZiPF%2F37hun4fbb3wn5pG6Nxi1Gcvor69dKaCmMNVvDkWVZaHYrw35bbUXmTKG6B1QsVPE5lQiTb4nNmn%2F%2BAy92NbZOkQEGQ%2FEoohMr2SZtZ2tFEQzIndkwpfnDxWGM%2BMpXSZWCQCgSXzNgrgk1d%2BvdonKPWQ&X-Amz-Signature=e74aec066fea657f63a2776f50917dac80a736d4c1bff9c6ea3f61e5ce2f78e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

