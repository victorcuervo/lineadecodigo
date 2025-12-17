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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWE6YEXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLzANVN60mO%2BohPV6E4nKQU3%2BKTj%2BRvOWAXPsvu%2BCcGAiAIn88wPwbm6rg8mmADHUuLvPZD%2FV25NaycTBr%2Br%2FU3Uyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMrW%2B1ID4gHPE2FJhoKtwDEHZyBfTKhnX3C9AiFQa0oFlLp4nDX8IIOgOD5XsnfZjapFUEM3u4lJ47KnmypouGB%2FpB5C%2FTU0ex4Z54KS2qQUPRFYOhdjwRA8SRPO9XvoEuhLA1xzWQ0%2BvVLDfejp8HOen5PhzH5lWbUPAJyOMAbJCyNaJXgIw9rdoRl1L5eh7rPP6fdlycd5YV4%2Bl4kqg3gJL9b4kbQD7B0lHsBj6ZEcC76X42h3cKmwxBmagC%2Bsarwob8xAi6ZLvbTaOnUE7%2FCAw849BFKJN8PYG5KNb1YH5UeZEFd5H%2FGcDJ84M7ZXLUm%2Fp8La3a2RA%2Fj7ZHnIQxihrKqS90%2FE0QY1FMNfM62fQBNxkabmchCaZDU8ee8cnOA%2FHfVZ%2BXoFA4WS7hZVMUzW765myU2p3Q3xaBvEUjfxcC0xWnW0W8r6KbhlBYlED4ZX4s7CFUwe3JDA1FcvaH8QOvVgBngEzXP2%2FzUFM1sCYpfTyzBwwC9tS2m7OnvMYs78JYLIPsIREy7aqy%2BnViMzc3zokFv604CjKXVPajXd%2Fk8QktcM3z%2F3c9CESKPHL2crWRqgPNWta9NPdIKaX0Tm3Vw7Sk3U9rhTrDc%2BwCscUzMq%2FnBApT6DC1ex%2BrOYL6RQwhLtpSuTupyhow2rOIygY6pgH9c2E2waZkYuhicirwQHRFzpCX24f1ywCoF%2FB%2FuVQmsnAXMDM3Spl5ksKvQ%2B8KFV3K5bmP2V0P3aec%2FOhKGhaxH%2F9XaFRnqklRdBCuiCQw8VqQz012auzKU5FR8OXRUr1T3M%2Fl3sFQqEl5jefRmMQTEkoE8pmYaBeIv8q6S692%2Btj%2F%2FSbzGcpMlwswyfR0Pw0qUoDEf7vBcLWMY3CtwnJpzZzJPa0S&X-Amz-Signature=19891a10b5b00dec566b5ee373d5edfa01c9d6bb0cc672f5d56ecf58888ec41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWE6YEXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLzANVN60mO%2BohPV6E4nKQU3%2BKTj%2BRvOWAXPsvu%2BCcGAiAIn88wPwbm6rg8mmADHUuLvPZD%2FV25NaycTBr%2Br%2FU3Uyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMrW%2B1ID4gHPE2FJhoKtwDEHZyBfTKhnX3C9AiFQa0oFlLp4nDX8IIOgOD5XsnfZjapFUEM3u4lJ47KnmypouGB%2FpB5C%2FTU0ex4Z54KS2qQUPRFYOhdjwRA8SRPO9XvoEuhLA1xzWQ0%2BvVLDfejp8HOen5PhzH5lWbUPAJyOMAbJCyNaJXgIw9rdoRl1L5eh7rPP6fdlycd5YV4%2Bl4kqg3gJL9b4kbQD7B0lHsBj6ZEcC76X42h3cKmwxBmagC%2Bsarwob8xAi6ZLvbTaOnUE7%2FCAw849BFKJN8PYG5KNb1YH5UeZEFd5H%2FGcDJ84M7ZXLUm%2Fp8La3a2RA%2Fj7ZHnIQxihrKqS90%2FE0QY1FMNfM62fQBNxkabmchCaZDU8ee8cnOA%2FHfVZ%2BXoFA4WS7hZVMUzW765myU2p3Q3xaBvEUjfxcC0xWnW0W8r6KbhlBYlED4ZX4s7CFUwe3JDA1FcvaH8QOvVgBngEzXP2%2FzUFM1sCYpfTyzBwwC9tS2m7OnvMYs78JYLIPsIREy7aqy%2BnViMzc3zokFv604CjKXVPajXd%2Fk8QktcM3z%2F3c9CESKPHL2crWRqgPNWta9NPdIKaX0Tm3Vw7Sk3U9rhTrDc%2BwCscUzMq%2FnBApT6DC1ex%2BrOYL6RQwhLtpSuTupyhow2rOIygY6pgH9c2E2waZkYuhicirwQHRFzpCX24f1ywCoF%2FB%2FuVQmsnAXMDM3Spl5ksKvQ%2B8KFV3K5bmP2V0P3aec%2FOhKGhaxH%2F9XaFRnqklRdBCuiCQw8VqQz012auzKU5FR8OXRUr1T3M%2Fl3sFQqEl5jefRmMQTEkoE8pmYaBeIv8q6S692%2Btj%2F%2FSbzGcpMlwswyfR0Pw0qUoDEf7vBcLWMY3CtwnJpzZzJPa0S&X-Amz-Signature=084ba7ac0b8744d9f4f0c42879b24dc83d7c6ac36da895dc48826da27d54d200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

