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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZQNYJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4y%2FtYNl%2BlGkmj2qZmmIS3rnxDFpHfbebE0S%2BYxZeq8QIhAMcV%2BEzGXMDdvo%2B0lNKpEgK3g9RtAiapVNBrPLIrqcuZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwxIHfwL8vFkh1ViRcq3AMy6Zhqkl6OO8eh95fIytVpkcx2gZ4VWn2gywd5QUNnPP9NiZb6Fgsm4e3MdKC%2F9tkvFwyClt7A7pnk3qtBw7Tgs7ywgCkynZ1e32OqB0AD5ndyGUg0KpIXZVQZSTjAW2PUyWgADrCvlwHbOBRZstCtuezN0ITYZnwKNyGK5xiuhPBhTVEVGo3fR%2FtHIaEGf8FJ5wPMvicEHK40Yxn7Pkf9ifWPboDsdXz8YlKS%2FPHyl6tv5cjKxdkbPUtufK%2Ffq31CBTMWsFy7RaHc%2ByhvgtpkyEi9x%2Fk2raqIrM32xnGE0UMXGOc54Mbrg1%2FVB5e%2BHA7ro4KcjaLcolTO82JXLMmSYxfFryqDMiMZZ%2Fmvfa9qbOafIMYT2ZBbeu2jqkbPfrTw6my5CNQ3Zu43I33F%2FrxMDXuneAjrr40UyEz1iGiU11VKfZWT1961G5E6Ksak8o1t3WwCjqzquvOknUiaVRq7LPJdpQ9DSjHn6ouy74iAFPZLqtlMiIqkM%2BFaUzCHQRGZGurrLGHfNFiBBpuz8ST2FoeKf9Rb5KsGMWgUGO7DOnUatz3UzijcokfBt4Yvw0sMEexYbzhlYGZIRt8fBstwvpZXe0NzfxO%2BHDBS23ndrnsODVg5Mkpa48C2gDD1sojKBjqkAdg%2FdQi07RmEdWVS45FIFjdPDCqteaGf%2FPm1y%2F0CqrGRM9hO8gBeTbCj%2Ftpgm7SnU0G59CIuna86gB1FzR6JivDt91YAKxqUi1uUxMtlq3Qtu16hvo85GPVzDNl8g7%2BY6CfsBSX7UAmc%2FV58%2F7t5sCsfvJ0mF00rXa91qxZ7ptekN7pzHRJwITdmo58ixJMQ7podrBbeINS59RN7AxRjwTbnKdrQ&X-Amz-Signature=19035f6ee4488f840e085b3984aef8a16cc54786ec3caf092cd57c44d564ff35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZQNYJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4y%2FtYNl%2BlGkmj2qZmmIS3rnxDFpHfbebE0S%2BYxZeq8QIhAMcV%2BEzGXMDdvo%2B0lNKpEgK3g9RtAiapVNBrPLIrqcuZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwxIHfwL8vFkh1ViRcq3AMy6Zhqkl6OO8eh95fIytVpkcx2gZ4VWn2gywd5QUNnPP9NiZb6Fgsm4e3MdKC%2F9tkvFwyClt7A7pnk3qtBw7Tgs7ywgCkynZ1e32OqB0AD5ndyGUg0KpIXZVQZSTjAW2PUyWgADrCvlwHbOBRZstCtuezN0ITYZnwKNyGK5xiuhPBhTVEVGo3fR%2FtHIaEGf8FJ5wPMvicEHK40Yxn7Pkf9ifWPboDsdXz8YlKS%2FPHyl6tv5cjKxdkbPUtufK%2Ffq31CBTMWsFy7RaHc%2ByhvgtpkyEi9x%2Fk2raqIrM32xnGE0UMXGOc54Mbrg1%2FVB5e%2BHA7ro4KcjaLcolTO82JXLMmSYxfFryqDMiMZZ%2Fmvfa9qbOafIMYT2ZBbeu2jqkbPfrTw6my5CNQ3Zu43I33F%2FrxMDXuneAjrr40UyEz1iGiU11VKfZWT1961G5E6Ksak8o1t3WwCjqzquvOknUiaVRq7LPJdpQ9DSjHn6ouy74iAFPZLqtlMiIqkM%2BFaUzCHQRGZGurrLGHfNFiBBpuz8ST2FoeKf9Rb5KsGMWgUGO7DOnUatz3UzijcokfBt4Yvw0sMEexYbzhlYGZIRt8fBstwvpZXe0NzfxO%2BHDBS23ndrnsODVg5Mkpa48C2gDD1sojKBjqkAdg%2FdQi07RmEdWVS45FIFjdPDCqteaGf%2FPm1y%2F0CqrGRM9hO8gBeTbCj%2Ftpgm7SnU0G59CIuna86gB1FzR6JivDt91YAKxqUi1uUxMtlq3Qtu16hvo85GPVzDNl8g7%2BY6CfsBSX7UAmc%2FV58%2F7t5sCsfvJ0mF00rXa91qxZ7ptekN7pzHRJwITdmo58ixJMQ7podrBbeINS59RN7AxRjwTbnKdrQ&X-Amz-Signature=809cfdc40e9f54189bae54ba9d237900584dfd432c6d528a805bd20c87ecc587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

