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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQTANUC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdG2hhh5fkUPPsuhO95KYd%2BRWnnI8PEiJjujTCp1SKEwIgfUcObfVu73Cf3K5auuVx5BgFaz26lUNpqBtoZhB%2FdsAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLp77H%2B94yyJlVPRLyrcA2kvjGzPgI853Ad8dM0uro0dj28eBjrZptC4BaLAJFWeRn9Bvv0QpoVk89nLQknwtQNVfTEiwDuJUn9EOGHcgZnRyo0jDJPwUuqdEDWW%2FmmIX%2FbRPPJqH7HIERr%2FdyN0iVusfliSv4OlMrHXeNJ47NAz6MSkT%2FVfDebSweWbYl0pIstHW8QrZP%2F3peTouJ19zsTRR6ZG78pNUbSo5DvGSX1r5Kc7evKUg2R2%2BCoEJqV1eUxEL1V%2Fb48xOcNRNUL4Vavqvr1ftpQkT8ZxvGA4jibcH5NerxsU6MwM83W4bj2Ex95ZHOoF79XHjFXhAYpvBdBT0azv918%2FnVjTiGCa%2F6ngEJn7lgCgTb1N3Cd0K5RLHjNQ7aU3qBgyXMzheCzrgjFc1mxcbcjckjRV1gr5xgO9aQuSYeNaJOh7UV5yKLovaedYNb7wf%2FCQkyvY7Xmdascwm05yEIlLV4pl5nW4nAyEl9h9hYrDeTldJqB%2FHqiQAeu9JBx76sR5eMWQp%2FrH4zEq3SVbl3B9gRrGGYtsccHuq4oYl87NMWqjekF4H5ko246ldCcQY7NQEPibJofkXBpR0x6pz0xVI6o%2FYABceRfwFKYVHpM8vgbnZHiQorfPgxH4tTxTZoTIhmB2MJfSicoGOqUB3mB1BZfxoBe5gkm2waaNo6Dj9vMsRCY%2BibBKV%2FD8IDkGU5ttFtzFOwqGTcHevE5V8dTFNtUrAzBblWQqlfuDpxup7oXLBncVit5J7817oDWZoqOV8wtcZc8Mye3TtOVsV7cSNMcahS13lujwgthn2My771kjAea70RyT7Vd%2FRIcCpaVVVvjWG1JGFCXiaIr4QD%2Bu9PoCJEKeSYcroqfgSiUqSfhI&X-Amz-Signature=920e985641578c81db3f719253a944c26464ac155314ac96ee005f473d5b5f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQTANUC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdG2hhh5fkUPPsuhO95KYd%2BRWnnI8PEiJjujTCp1SKEwIgfUcObfVu73Cf3K5auuVx5BgFaz26lUNpqBtoZhB%2FdsAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLp77H%2B94yyJlVPRLyrcA2kvjGzPgI853Ad8dM0uro0dj28eBjrZptC4BaLAJFWeRn9Bvv0QpoVk89nLQknwtQNVfTEiwDuJUn9EOGHcgZnRyo0jDJPwUuqdEDWW%2FmmIX%2FbRPPJqH7HIERr%2FdyN0iVusfliSv4OlMrHXeNJ47NAz6MSkT%2FVfDebSweWbYl0pIstHW8QrZP%2F3peTouJ19zsTRR6ZG78pNUbSo5DvGSX1r5Kc7evKUg2R2%2BCoEJqV1eUxEL1V%2Fb48xOcNRNUL4Vavqvr1ftpQkT8ZxvGA4jibcH5NerxsU6MwM83W4bj2Ex95ZHOoF79XHjFXhAYpvBdBT0azv918%2FnVjTiGCa%2F6ngEJn7lgCgTb1N3Cd0K5RLHjNQ7aU3qBgyXMzheCzrgjFc1mxcbcjckjRV1gr5xgO9aQuSYeNaJOh7UV5yKLovaedYNb7wf%2FCQkyvY7Xmdascwm05yEIlLV4pl5nW4nAyEl9h9hYrDeTldJqB%2FHqiQAeu9JBx76sR5eMWQp%2FrH4zEq3SVbl3B9gRrGGYtsccHuq4oYl87NMWqjekF4H5ko246ldCcQY7NQEPibJofkXBpR0x6pz0xVI6o%2FYABceRfwFKYVHpM8vgbnZHiQorfPgxH4tTxTZoTIhmB2MJfSicoGOqUB3mB1BZfxoBe5gkm2waaNo6Dj9vMsRCY%2BibBKV%2FD8IDkGU5ttFtzFOwqGTcHevE5V8dTFNtUrAzBblWQqlfuDpxup7oXLBncVit5J7817oDWZoqOV8wtcZc8Mye3TtOVsV7cSNMcahS13lujwgthn2My771kjAea70RyT7Vd%2FRIcCpaVVVvjWG1JGFCXiaIr4QD%2Bu9PoCJEKeSYcroqfgSiUqSfhI&X-Amz-Signature=4e90c9311ea2f46ce461afbc51605ab4c6fb66750dd91e446a833bdda3d94d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

