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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGZ63XA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAluqAv3aGOy6LhZYYAuh%2BKJF6cu%2FrI1M5Ar%2F%2BRTjh11AiEAj76A8ooST2my16Pi9LKKeXbjwx%2BIRslwjDDl4sSf45kq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDv%2FBj4J86whvwVtryrcAzgcwHExHAa7JmRCNySMPLoYzaloqO%2FlwQCKQzbyc37T4LRLKKbQD8EQsBXVuUXBgHXarmu19vkM42Gt5c4l5S21U6l6vY6PQZGHcv5ddCVIanyflpiZVVO8sjyGiWD6cMaI%2BYZs4%2F%2FtVoAzDYn091WB9ZVGBlhCy3VGy3XYgEZrqxSp63xrA2SoDr0C%2B25ypVw24zUM0MLQnzINnJNO4Ca7N7b37T594p7PU6Zo4RKNpA%2BMhUhg%2BaBGo8p%2F%2FsIkhdQ6qpQsPT4D10e%2FXGuBU%2FkjOvPZpMBV1Etf8JS6mfVnEryuWl%2Bd2eYxh%2Bb4ulNJcpAzD3IQCww0wnstqAAkG2kPSiZHQNZ1%2Bosd2BnwiS3AWImcr8hwGrkPQdH9mYIYyo1cyt%2B8BKiyJt35lE5SfYNcxijdk%2FnLBlpJHym0jSuWmwlAyejtJMI%2F9KBu%2BAOg%2FsASlsCiTkfxaXjwsIHswFcTe1%2BDsshu5DJ%2BupcXoamsBRuAOv7GHEan6LY7QjKF2y0HUkIHplP1ndCjdo8L5iuzdJvXcHcxMnESWtoJP2qx2tZJQI64iHH9DlKIS3fJNQnQshvqaGz%2Ff%2BYSok7FLX9ng%2BaO15P5OvDBlH7H2gqxgetc05f%2BKCwjEuEJMMDhisoGOqUBEgAVTYvpZ3I1YxvKIPgFD1lDuMvdo526wWMJtIKRZjy20qQslh2TVrvXE3ICwu0Y4joCvNQgUIZwi8Yxd09uc9rjNCf58VNqRsuI1RwtKaRPUWOJxP3RGzgNzzD6DTiTI626BgQn7X2LdG%2BW%2BwAsHPJNGehrSiYnUX%2FhKWsFnbu%2BmsR0BFtZWnBPB%2B%2Bgxroaa%2BIsuWPMlt4YCmb%2BHhioWaRjywtH&X-Amz-Signature=ef3049646a04f0871e89b2f9df38ae5a77d7d201653d710ff35565bddf2ae26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGZ63XA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAluqAv3aGOy6LhZYYAuh%2BKJF6cu%2FrI1M5Ar%2F%2BRTjh11AiEAj76A8ooST2my16Pi9LKKeXbjwx%2BIRslwjDDl4sSf45kq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDv%2FBj4J86whvwVtryrcAzgcwHExHAa7JmRCNySMPLoYzaloqO%2FlwQCKQzbyc37T4LRLKKbQD8EQsBXVuUXBgHXarmu19vkM42Gt5c4l5S21U6l6vY6PQZGHcv5ddCVIanyflpiZVVO8sjyGiWD6cMaI%2BYZs4%2F%2FtVoAzDYn091WB9ZVGBlhCy3VGy3XYgEZrqxSp63xrA2SoDr0C%2B25ypVw24zUM0MLQnzINnJNO4Ca7N7b37T594p7PU6Zo4RKNpA%2BMhUhg%2BaBGo8p%2F%2FsIkhdQ6qpQsPT4D10e%2FXGuBU%2FkjOvPZpMBV1Etf8JS6mfVnEryuWl%2Bd2eYxh%2Bb4ulNJcpAzD3IQCww0wnstqAAkG2kPSiZHQNZ1%2Bosd2BnwiS3AWImcr8hwGrkPQdH9mYIYyo1cyt%2B8BKiyJt35lE5SfYNcxijdk%2FnLBlpJHym0jSuWmwlAyejtJMI%2F9KBu%2BAOg%2FsASlsCiTkfxaXjwsIHswFcTe1%2BDsshu5DJ%2BupcXoamsBRuAOv7GHEan6LY7QjKF2y0HUkIHplP1ndCjdo8L5iuzdJvXcHcxMnESWtoJP2qx2tZJQI64iHH9DlKIS3fJNQnQshvqaGz%2Ff%2BYSok7FLX9ng%2BaO15P5OvDBlH7H2gqxgetc05f%2BKCwjEuEJMMDhisoGOqUBEgAVTYvpZ3I1YxvKIPgFD1lDuMvdo526wWMJtIKRZjy20qQslh2TVrvXE3ICwu0Y4joCvNQgUIZwi8Yxd09uc9rjNCf58VNqRsuI1RwtKaRPUWOJxP3RGzgNzzD6DTiTI626BgQn7X2LdG%2BW%2BwAsHPJNGehrSiYnUX%2FhKWsFnbu%2BmsR0BFtZWnBPB%2B%2Bgxroaa%2BIsuWPMlt4YCmb%2BHhioWaRjywtH&X-Amz-Signature=dd4da185163c2a15a34de4a09566c28bdcac01ec85627166d8c0e06c195bfd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

