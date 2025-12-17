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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULFLL2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGslMae0VO%2BpF6bocRipKza4DK1CvDOFci5ezbgVce9dAiB4m4HFZyYYACNljG%2FBsBa2xZTF2y1OA3LYJkYr229lCCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX0ubCtPb2aNepXkfKtwDjQx1DaREhFp4lHQMHtnSlBgH3HlwFm38crIQslDYY4F1qGfmjDkYfZxzVLizDb1nr5%2FeuUndLrs0jXb2o3dc0lJCPzExtNHm7TRc4CO6TwiXzgl%2FbB0sf6BM97da1CQxUStCnuK2jxEVbMGJkXUYSM3K1P7FvJyPvXBv307jdbIxJRW8HCnWrlSOCyRm3%2Fqo935NqaHL3HSvWEY%2BEan3DWNVG%2BmWItseS8JELSd4CPUbkylisLu2Mt0P2Uo6fGd1nlI1%2FFDT3QYyhEiwf53UetEscWocx4xyE9FKB5vIHXLqozeKOiQ3ZNSP%2F4Ke1Tbjxfr7iMTfuSsNRu4WAMf3ePCKEytnxnUWUADiwQZogE7JRPnnc0P6q4CozzW6VcZ1f%2F8VrX2D74TLeLjikWG9oP7Tguc9N7o2PWFOP9x6LPTudPqzpwykD3qoyDuj5zApp52HF7o0dMwEyDbAGCqmTSy2p0t%2Bku6sQ2f7Rb3zr40B4dpR8CENOODogplcYvGL3lmyhHRQNdqm%2Fs5zkVDQbYKuKeunQHJGXxJASUy%2B2xWOo5RCNs27EB9Rk0cUKKIepw7QF%2FqPChjzrwwLSVlMxvq7tkpcoTrgCwVjYBQQeCgQKRhQNPItqLJ%2B%2BZ8w7aCLygY6pgFohO9eunyRn7HG7KrkJQy2tWu%2FqR0%2F9PgaeLG%2BSeb6YuJ83xvtXVp51dddWQllOyzf0uYY0%2BHkKaJCtlcaYr8oD9FlDNZRYGAqRNr%2FoZ9RqkV3EKXJPyu6lTxvC1YDan%2BgDi%2FjvIjGnLYbj8TFfr3IGn3nwzDJd5xY76C3u5WB2d%2BCAxeTmjTpxmC1UNsbl8088IT478%2FCOrcIKttyhkwIIYVCWN%2FR&X-Amz-Signature=52c6eb3fae02c07070a2c71dfaa8e46ebde5e8d953ede46707a892fac08eee15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULFLL2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGslMae0VO%2BpF6bocRipKza4DK1CvDOFci5ezbgVce9dAiB4m4HFZyYYACNljG%2FBsBa2xZTF2y1OA3LYJkYr229lCCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX0ubCtPb2aNepXkfKtwDjQx1DaREhFp4lHQMHtnSlBgH3HlwFm38crIQslDYY4F1qGfmjDkYfZxzVLizDb1nr5%2FeuUndLrs0jXb2o3dc0lJCPzExtNHm7TRc4CO6TwiXzgl%2FbB0sf6BM97da1CQxUStCnuK2jxEVbMGJkXUYSM3K1P7FvJyPvXBv307jdbIxJRW8HCnWrlSOCyRm3%2Fqo935NqaHL3HSvWEY%2BEan3DWNVG%2BmWItseS8JELSd4CPUbkylisLu2Mt0P2Uo6fGd1nlI1%2FFDT3QYyhEiwf53UetEscWocx4xyE9FKB5vIHXLqozeKOiQ3ZNSP%2F4Ke1Tbjxfr7iMTfuSsNRu4WAMf3ePCKEytnxnUWUADiwQZogE7JRPnnc0P6q4CozzW6VcZ1f%2F8VrX2D74TLeLjikWG9oP7Tguc9N7o2PWFOP9x6LPTudPqzpwykD3qoyDuj5zApp52HF7o0dMwEyDbAGCqmTSy2p0t%2Bku6sQ2f7Rb3zr40B4dpR8CENOODogplcYvGL3lmyhHRQNdqm%2Fs5zkVDQbYKuKeunQHJGXxJASUy%2B2xWOo5RCNs27EB9Rk0cUKKIepw7QF%2FqPChjzrwwLSVlMxvq7tkpcoTrgCwVjYBQQeCgQKRhQNPItqLJ%2B%2BZ8w7aCLygY6pgFohO9eunyRn7HG7KrkJQy2tWu%2FqR0%2F9PgaeLG%2BSeb6YuJ83xvtXVp51dddWQllOyzf0uYY0%2BHkKaJCtlcaYr8oD9FlDNZRYGAqRNr%2FoZ9RqkV3EKXJPyu6lTxvC1YDan%2BgDi%2FjvIjGnLYbj8TFfr3IGn3nwzDJd5xY76C3u5WB2d%2BCAxeTmjTpxmC1UNsbl8088IT478%2FCOrcIKttyhkwIIYVCWN%2FR&X-Amz-Signature=1c5b95e3d8ad3edcca013b8bc0365338db8e7a5fa1071086ee7d060339547e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

