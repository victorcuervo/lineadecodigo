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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGE62P6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrIgMJmrvhjSGhlIxChbvVIL2rjdugzz6swC2rgeP3zAiEAuXZB54sHwQAurT7WZbO%2Blq63SnkIwvu%2Fwn6GPrzE2wkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEST5lNnx%2Fty4P1avircA2TCKjQid3mSqGDkvgxxcuxzlJHcAmNQT1FDFPkJHiYi0K4Y8%2BgxYBz%2BzY8sCmxFM8lpm79o%2FlfSq7me0kGohJLCTexsKYbM%2BELS7TyyNefofY1GmFIHpUlhSMkeJX8h%2FMPcZyPbdbPNYN%2FMvhpkF8WYKTWv97khCE0Zj16sbnlX%2BFjR04ttx4LrV7yIIsN%2FtyVxZjHwyx9%2BYZIqlzq43R79VD1j4u6ljqBHpxAo2LBEgVeemac6AqrF80Rrm4F7ZT4ntkq%2F0vlptz1BdsDQWClPIemotqU%2BDllex%2Ffp0nanHI6dehcMQ1TzvbVPCn7iL3AT3IBYRUqort%2FA9A7EymHgs%2BXWiaUHfUQvL3M1EyepT%2BAtIztgi2978TvtF36LcAEBTD5xC1Ynd0333asnAg5rk7CbJPee%2Bo3rB6H0Xsg9SRNxzkcxXC8%2FzvNa6juBOpwDet%2Foiw2gQLdyazz3cmqmodzmBPJnPA6ItsQzNRCexAvZhe2VXCKbRK2ZN1udvK7C4I6TQdSn2KTxPMs%2FTGcQABldq0AQTeEgCpTsDY5IghP%2FENISpj8fzt6VO5Q9DLup2tW4GqrebjSXU8SYY%2BUoWYpX3cBcerhGhF7E%2FOk7zoz1ZhhK7iRRBy8OMOHRicoGOqUBTsDm%2Bn%2FfKU0AcuiXKCOXfuZhlk9toT%2FAi6RucOkj3wB6k5WerAh6Ith0L3xA%2BYGUhb6L5cS4%2BCw9hvmR5YGMDI6bxMTaVIGqlDd5RCSiHx2Aeu1X0KXY6hQZakXZr2m%2FL79cKh7QwP1sNFIRACKTGw6VKpqlNqGEf3EdfBmZgk8E%2FrZQaTSa5GBjD41mC0oynaA1Tf2y2tVpd6VVPOv1RuM%2FJeyt&X-Amz-Signature=29f0d2285822028174639934e6f809be230f82e83b2771e501186b4bc2be88a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGE62P6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrIgMJmrvhjSGhlIxChbvVIL2rjdugzz6swC2rgeP3zAiEAuXZB54sHwQAurT7WZbO%2Blq63SnkIwvu%2Fwn6GPrzE2wkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEST5lNnx%2Fty4P1avircA2TCKjQid3mSqGDkvgxxcuxzlJHcAmNQT1FDFPkJHiYi0K4Y8%2BgxYBz%2BzY8sCmxFM8lpm79o%2FlfSq7me0kGohJLCTexsKYbM%2BELS7TyyNefofY1GmFIHpUlhSMkeJX8h%2FMPcZyPbdbPNYN%2FMvhpkF8WYKTWv97khCE0Zj16sbnlX%2BFjR04ttx4LrV7yIIsN%2FtyVxZjHwyx9%2BYZIqlzq43R79VD1j4u6ljqBHpxAo2LBEgVeemac6AqrF80Rrm4F7ZT4ntkq%2F0vlptz1BdsDQWClPIemotqU%2BDllex%2Ffp0nanHI6dehcMQ1TzvbVPCn7iL3AT3IBYRUqort%2FA9A7EymHgs%2BXWiaUHfUQvL3M1EyepT%2BAtIztgi2978TvtF36LcAEBTD5xC1Ynd0333asnAg5rk7CbJPee%2Bo3rB6H0Xsg9SRNxzkcxXC8%2FzvNa6juBOpwDet%2Foiw2gQLdyazz3cmqmodzmBPJnPA6ItsQzNRCexAvZhe2VXCKbRK2ZN1udvK7C4I6TQdSn2KTxPMs%2FTGcQABldq0AQTeEgCpTsDY5IghP%2FENISpj8fzt6VO5Q9DLup2tW4GqrebjSXU8SYY%2BUoWYpX3cBcerhGhF7E%2FOk7zoz1ZhhK7iRRBy8OMOHRicoGOqUBTsDm%2Bn%2FfKU0AcuiXKCOXfuZhlk9toT%2FAi6RucOkj3wB6k5WerAh6Ith0L3xA%2BYGUhb6L5cS4%2BCw9hvmR5YGMDI6bxMTaVIGqlDd5RCSiHx2Aeu1X0KXY6hQZakXZr2m%2FL79cKh7QwP1sNFIRACKTGw6VKpqlNqGEf3EdfBmZgk8E%2FrZQaTSa5GBjD41mC0oynaA1Tf2y2tVpd6VVPOv1RuM%2FJeyt&X-Amz-Signature=d1f5c7d91819f02b2be244fca701571ee0cf12fb990fec77a3a410fe2957d467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

