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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ533XWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5zPaUT%2FE8qSAM8KVnPftV4yVteh5m4iXQmpDW1GWCgIgM8goNSId4IbG19T5pPN48%2BYzCJzYlj8Kyt6V4YRNfCYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD8eJZIdnwVJVNj5hCrcA6pucXFRQZsmw7STVhTI%2Fj6OYK7vx6KlF2%2F7CKZoVCe3tdSHhlS5%2BB%2Ff%2FSreWqif4GvaskzdjoAav6qIt6vaL5nirCILsdUgUJOnIBBDEshuJl9USPs69PyA2zSPIcTt8skBE9gZSi2%2BKn1kPD9e6HZoxIHqmybMok9FyaChutf7wKC23c1d%2Bx2CemRwsTDsPqz2TZHRPQYs%2BfPNl6HVXBwXiY9%2FehwzgqWFAQlsvrdH3nAcn0y5pWFdTw%2BMsi4KKJyJVMFNPdCpBExw2yw0Nl7rvG8PbB6s9yEzy5eHy%2Bpza1N9OMjfStr3xxOiJK5rZsCegNtBDUSC33jzY72Kljyi37gJnjBKigNs%2BCofovOztcW9c6buef4vAJijlzb8nRaWSpG3hnsicJlGPnVWtjLY22luWWUOaGhoqJX4fXIbmr1AYoVXl0PtASVtcWSQA3cTVaEH5e5ZJXhxGEtcWw%2F5gbMCPlcAc1prU8tx3Ja5YFAX7mW53AWZD0s6u0d5KJvZMTbAHf%2Bk%2Bct0mFP1n5OW8NVFD3jmlgAjFLCYgWoU0xrTS%2F6JMlRIZLNrEe7CVrxVjNalam4yXts2KEtlzb8tUIigB0jk4b7hs%2FtMiBUeuldScpq%2BolQIbHTjMPiyiMoGOqUB9gCWOCbcHo4a%2B34EsXwjuEo83KLKVv8f2tn8ddkxlol0sF%2B1BB4IK2y42rf5bdoETRQ4MgDPNh%2FYt5lC%2F2%2BvSNKNXd9uLStzyRJa4z6M0EYHtHyZJIjwz2N33SXLFBRXLbiIVJL4QSSmFw7FtECJQXM1M6sN%2Bcll0rgR4zuDBIW%2FnsFpzYupuR4wALIru%2FCeCoWFqxogR%2BGdrzJbeDPZ7Y%2B8tF4a&X-Amz-Signature=e4a37f1ca646703856d94fe3cd120578af06daff5c92d16b7c59c30ac5f3960c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ533XWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5zPaUT%2FE8qSAM8KVnPftV4yVteh5m4iXQmpDW1GWCgIgM8goNSId4IbG19T5pPN48%2BYzCJzYlj8Kyt6V4YRNfCYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD8eJZIdnwVJVNj5hCrcA6pucXFRQZsmw7STVhTI%2Fj6OYK7vx6KlF2%2F7CKZoVCe3tdSHhlS5%2BB%2Ff%2FSreWqif4GvaskzdjoAav6qIt6vaL5nirCILsdUgUJOnIBBDEshuJl9USPs69PyA2zSPIcTt8skBE9gZSi2%2BKn1kPD9e6HZoxIHqmybMok9FyaChutf7wKC23c1d%2Bx2CemRwsTDsPqz2TZHRPQYs%2BfPNl6HVXBwXiY9%2FehwzgqWFAQlsvrdH3nAcn0y5pWFdTw%2BMsi4KKJyJVMFNPdCpBExw2yw0Nl7rvG8PbB6s9yEzy5eHy%2Bpza1N9OMjfStr3xxOiJK5rZsCegNtBDUSC33jzY72Kljyi37gJnjBKigNs%2BCofovOztcW9c6buef4vAJijlzb8nRaWSpG3hnsicJlGPnVWtjLY22luWWUOaGhoqJX4fXIbmr1AYoVXl0PtASVtcWSQA3cTVaEH5e5ZJXhxGEtcWw%2F5gbMCPlcAc1prU8tx3Ja5YFAX7mW53AWZD0s6u0d5KJvZMTbAHf%2Bk%2Bct0mFP1n5OW8NVFD3jmlgAjFLCYgWoU0xrTS%2F6JMlRIZLNrEe7CVrxVjNalam4yXts2KEtlzb8tUIigB0jk4b7hs%2FtMiBUeuldScpq%2BolQIbHTjMPiyiMoGOqUB9gCWOCbcHo4a%2B34EsXwjuEo83KLKVv8f2tn8ddkxlol0sF%2B1BB4IK2y42rf5bdoETRQ4MgDPNh%2FYt5lC%2F2%2BvSNKNXd9uLStzyRJa4z6M0EYHtHyZJIjwz2N33SXLFBRXLbiIVJL4QSSmFw7FtECJQXM1M6sN%2Bcll0rgR4zuDBIW%2FnsFpzYupuR4wALIru%2FCeCoWFqxogR%2BGdrzJbeDPZ7Y%2B8tF4a&X-Amz-Signature=8203125e2ad1ee9957adb8cbd9e6a33e447affc2b5eeb90010f1f0565e561ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

