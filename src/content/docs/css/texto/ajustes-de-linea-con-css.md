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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LMVHWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwi3BOP2cn3dxwBuavam%2BSCaIewHuo%2F6pR77v%2Fn9m6GwIhALACQhLrlk6R1pbRFGY%2Fx1OQXO6Qg14GI%2FVWGyko47ljKv8DCHkQABoMNjM3NDIzMTgzODA1IgyopHc58hZJXMN%2BIU4q3AOo4CIa9pVlEOQ38Ot8EOAfnc10rQrK9P22%2FNeXO%2BgfIx8pqs0jjLvv%2FsCHZp8ong%2B1b523KO8q2Aqf9dsOAThtebDhJNalIl9B9byQq76wb3wNVeuh2gMq%2FYNb6kI2hb%2BmAWkFwd9iisehrOsiAzWSHTdyDhu9EANkjnfXWVx4EgAkdaDoS5qOKWFJtaPDJ494DEO7iuJi9BXZpbmelS3%2F3MrO%2BR7KDrx2AXe4s0ihFYBm9QrKb3ltU1c1pp696vZGUYk%2F86rqP6ry3NeXKFEClCktt0rPc8U0rBx8M9eI3JHLQ1tAs%2BenT%2BfmGkVduL52j9OEuOlRyYtIrIwiRQP21rOrj53d7H0F3hxp2U2NUl5llF4HJj1zG4WFdo7ep6EthAICLjO0KkSHGobMzifbdVBgJ%2FW0iA8tZYSEdmwNG6EX9HuBAfaI0qAe2sTKMMIc6DfAODOY9OPP4Z1DOQPlEP1OkwRDwG1HpYBKbT5Fu8mE9LpfMSgLBqkmzJ7klshA21nDjZDSwXswe2%2BUM4C5XagmX6w8yli51t7VGJOYFukG3hk0PQhHnTRGtiDtSGH19mbU3pfbth7p39wQXBKftni%2B4SQoy%2FSkjpZM08lc%2FrcTlz0ctH85%2Fe8QPDDm0YnKBjqkAWpdkcndfn27N%2FRLpbO%2BkKW3RVd9H80LNTYlgk9BiHEeT0F1pSntTXmtpTGwEninSlyX7k%2Fu7Ve9ettI7EanvbdXWS862XDwCywpIqqX4FhfmpewHWuUVZQp3Q5tq0q5PRXTRcC4djQnm4hYumAS%2FYaFTHtBTXKrYYIBOm0eSfUwf%2FKzbIKvzo%2FpXizQXaWUowEy5GcyupqHmOfw7rXek760CORd&X-Amz-Signature=3801f8fb972fbb1fac4c27585277e6feeb61bd889c745b2aed232d2950f8b149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664LMVHWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwi3BOP2cn3dxwBuavam%2BSCaIewHuo%2F6pR77v%2Fn9m6GwIhALACQhLrlk6R1pbRFGY%2Fx1OQXO6Qg14GI%2FVWGyko47ljKv8DCHkQABoMNjM3NDIzMTgzODA1IgyopHc58hZJXMN%2BIU4q3AOo4CIa9pVlEOQ38Ot8EOAfnc10rQrK9P22%2FNeXO%2BgfIx8pqs0jjLvv%2FsCHZp8ong%2B1b523KO8q2Aqf9dsOAThtebDhJNalIl9B9byQq76wb3wNVeuh2gMq%2FYNb6kI2hb%2BmAWkFwd9iisehrOsiAzWSHTdyDhu9EANkjnfXWVx4EgAkdaDoS5qOKWFJtaPDJ494DEO7iuJi9BXZpbmelS3%2F3MrO%2BR7KDrx2AXe4s0ihFYBm9QrKb3ltU1c1pp696vZGUYk%2F86rqP6ry3NeXKFEClCktt0rPc8U0rBx8M9eI3JHLQ1tAs%2BenT%2BfmGkVduL52j9OEuOlRyYtIrIwiRQP21rOrj53d7H0F3hxp2U2NUl5llF4HJj1zG4WFdo7ep6EthAICLjO0KkSHGobMzifbdVBgJ%2FW0iA8tZYSEdmwNG6EX9HuBAfaI0qAe2sTKMMIc6DfAODOY9OPP4Z1DOQPlEP1OkwRDwG1HpYBKbT5Fu8mE9LpfMSgLBqkmzJ7klshA21nDjZDSwXswe2%2BUM4C5XagmX6w8yli51t7VGJOYFukG3hk0PQhHnTRGtiDtSGH19mbU3pfbth7p39wQXBKftni%2B4SQoy%2FSkjpZM08lc%2FrcTlz0ctH85%2Fe8QPDDm0YnKBjqkAWpdkcndfn27N%2FRLpbO%2BkKW3RVd9H80LNTYlgk9BiHEeT0F1pSntTXmtpTGwEninSlyX7k%2Fu7Ve9ettI7EanvbdXWS862XDwCywpIqqX4FhfmpewHWuUVZQp3Q5tq0q5PRXTRcC4djQnm4hYumAS%2FYaFTHtBTXKrYYIBOm0eSfUwf%2FKzbIKvzo%2FpXizQXaWUowEy5GcyupqHmOfw7rXek760CORd&X-Amz-Signature=ea49446750155ceee3feff7ebcb2d9b0fc8b3d159f1528ae9ebfc80571afd39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

