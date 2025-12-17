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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QS3CDYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjFkr%2FnIczW7TxvFdTzGYZ5Oh2nZi%2FdhMAML%2BtG5vgeAIgf4MKnqvCdrCsQWqGBH5uoqbd1nDEp3pGNkCeCD27FGcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCCq3ZDawGl%2FFTJbgSrcA106SVz0EuMrgo852kHtUw2DJ%2FJHuPmG0F5YQDfuRkmm%2Btq7t0dG8OWcNAfpNMoXT%2FNSj9lUQ%2BTWzizDNBXjxIpRV%2BD8d5nIHGnQYXK5puBa2HoATh5qazmYQXRdRJacjIQtKWs6vrUbaDgpVNPR9NWn%2FnX1FuL7zp4XrqSsoyNLwPlQ7VaOakXm0eEkmIFu%2FjcGVH1KvDYGXltpGC3Juh0dSXc50eLm2ifo75P1zshm%2BmX9fNwclP1hcfA27J5JMSiIe2Jge5wc7MNlNBY3ps1dzX20TECn9C%2FKdGUU2Et8PnuOSVzam89mfjBfQxb6C5GofqvgESa89IzNNEsXvUDiNcALHhWw0wKcReFSqVhwf7w3PgzW19dl2Y0fBGFiboNznSArvQqriMh109O5mpWkIhsSLQx6%2BJ5lXZg06M4xUOoixXLIQTeDnotilthTIWHoO80MQcFg1chtKszK6an0%2FoftRo5iG0nwIS0V85VFYOZc%2Bjmfiutlbhc6xobXzjVISabskQXHmRiKNr16c6daljPP6E00nSzeN1VwPV9dIlXUEPcJ0y7v7HeQo6SfmQr59r9HF9bk6mGJ91%2FdgYx8hM3MKeL4spLqe7CPro5sPB5g6SRUDZ6gbgLqMN%2FpiMoGOqUBzBkxy%2BNSsYblmlqjN1mkSLQKWeJcXM0qId5rGH82Fqbq8kO0HY4laPjJlB5PFltiFHZGMx7UHyGem6XHWaSeUepEfyDAVP8ih0wSu50rckstQKZtiV6q3VDVFODDhsS2%2F5rC42AMXaxh5cZpzFmu2KRd%2Bk04cMDz3SkP27XhSxstQNjhh%2FTefgTpdY55Z434G7PNOVOHCTYHbUxVgZfGL%2Fv52v4i&X-Amz-Signature=6a4d249b45213bae15dd8dfd4ea851c71ab954af68521aab94478dbe774d7196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QS3CDYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjFkr%2FnIczW7TxvFdTzGYZ5Oh2nZi%2FdhMAML%2BtG5vgeAIgf4MKnqvCdrCsQWqGBH5uoqbd1nDEp3pGNkCeCD27FGcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCCq3ZDawGl%2FFTJbgSrcA106SVz0EuMrgo852kHtUw2DJ%2FJHuPmG0F5YQDfuRkmm%2Btq7t0dG8OWcNAfpNMoXT%2FNSj9lUQ%2BTWzizDNBXjxIpRV%2BD8d5nIHGnQYXK5puBa2HoATh5qazmYQXRdRJacjIQtKWs6vrUbaDgpVNPR9NWn%2FnX1FuL7zp4XrqSsoyNLwPlQ7VaOakXm0eEkmIFu%2FjcGVH1KvDYGXltpGC3Juh0dSXc50eLm2ifo75P1zshm%2BmX9fNwclP1hcfA27J5JMSiIe2Jge5wc7MNlNBY3ps1dzX20TECn9C%2FKdGUU2Et8PnuOSVzam89mfjBfQxb6C5GofqvgESa89IzNNEsXvUDiNcALHhWw0wKcReFSqVhwf7w3PgzW19dl2Y0fBGFiboNznSArvQqriMh109O5mpWkIhsSLQx6%2BJ5lXZg06M4xUOoixXLIQTeDnotilthTIWHoO80MQcFg1chtKszK6an0%2FoftRo5iG0nwIS0V85VFYOZc%2Bjmfiutlbhc6xobXzjVISabskQXHmRiKNr16c6daljPP6E00nSzeN1VwPV9dIlXUEPcJ0y7v7HeQo6SfmQr59r9HF9bk6mGJ91%2FdgYx8hM3MKeL4spLqe7CPro5sPB5g6SRUDZ6gbgLqMN%2FpiMoGOqUBzBkxy%2BNSsYblmlqjN1mkSLQKWeJcXM0qId5rGH82Fqbq8kO0HY4laPjJlB5PFltiFHZGMx7UHyGem6XHWaSeUepEfyDAVP8ih0wSu50rckstQKZtiV6q3VDVFODDhsS2%2F5rC42AMXaxh5cZpzFmu2KRd%2Bk04cMDz3SkP27XhSxstQNjhh%2FTefgTpdY55Z434G7PNOVOHCTYHbUxVgZfGL%2Fv52v4i&X-Amz-Signature=1216bd5554f62be799b245aa430b6913fcc4779199b892781a5c9c066313caaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

