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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKF2YZ7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0Rgkt%2FRfIQ3hW5Be7UAzAC%2BRsBSU55fg9ZDNqcsEEAIgWjwlsBB6PIsi%2BgTHefw4IOVO1IqbqE6%2B03LcPKzlvxEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaGa9zE2nRtUUH2sircA3ctdcHs8nQJSnwDBkwgy3kfdC6pOhn77v3PBAbS4dHg%2BOUxJCF2DYA7Wolxn5Dv54V4r1rN7kJCU0bFQGVTPYGTJowvEUZ56ttcqutSA7EnQHGqvrH%2F1Y757fyMH%2Bowsg0IhcDFTUSXZST%2BmgkflBgvqPBT%2BmAwAh%2B5SM6HiArHQ57%2FZbBrkkH8jjDWtg97a08jgf2q%2BCOVx8aoVktVCpFe6RCLiE05fnK29faewSjZT4ArAJParmUb1GkaHGHV%2BpWv12iuSOgXi5coGKnJYA9Ss4UPL1Y7JvoBryCoRR9ovXdlEnrCk63KJzffo%2FwCdKz8XuPpMQp0if1FwGm8EAbLGWQF9OOjkCWBNlReerTTOTouFRxw4ITFFCei8B1RJFxxU%2BqnpCqEHs9WU8E2UrkNPTrE7bhRFy5S5sAUgLVtMJmuZhd5%2B5hfHrEaZbxZbmHOz7ZtzYqm%2FeUBChwxb5Xhi9fQWPiOBpV7tHfocOejzUwmMXVcynnpeiIoQnTbvoeeP3eFQH%2FkoaQc8oEY9RB0FoCnWsp8AYClaYP%2FJ44KW%2BzIFruwlmfGdWDJsUQrcD%2BDp4ht1WlbSJ6x6de7FV1M%2BGPGaNmqYsgNNt%2FX1UPiG6rsrrSHdb8023VDMM6KjMoGOqUBoOw%2FBNRIUdPQ2sEMjlGmgoFSZJM0W0KUa%2BqiT7PkgvaNfOiVkN31Df6aVHZBFHmj18JzI0kim2PiqYteH21Sy2qCvTUewcn1QGcjsdf4%2BStZr%2FUP3ijKnLR4u3Pi03HEL7TxCx2hWu3M50%2Fxf%2F2nk0H5N%2FKC0ikI8lffUzXJFFLyT%2F1nAdA4bSM22SSfw6RoAJf9%2FpHC6cIGmCUXhL25%2F8c8xC4D&X-Amz-Signature=82e8d36ed37ee00af160943ad97e361a6906c5221163d49f297a88363674f260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKF2YZ7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi0Rgkt%2FRfIQ3hW5Be7UAzAC%2BRsBSU55fg9ZDNqcsEEAIgWjwlsBB6PIsi%2BgTHefw4IOVO1IqbqE6%2B03LcPKzlvxEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaGa9zE2nRtUUH2sircA3ctdcHs8nQJSnwDBkwgy3kfdC6pOhn77v3PBAbS4dHg%2BOUxJCF2DYA7Wolxn5Dv54V4r1rN7kJCU0bFQGVTPYGTJowvEUZ56ttcqutSA7EnQHGqvrH%2F1Y757fyMH%2Bowsg0IhcDFTUSXZST%2BmgkflBgvqPBT%2BmAwAh%2B5SM6HiArHQ57%2FZbBrkkH8jjDWtg97a08jgf2q%2BCOVx8aoVktVCpFe6RCLiE05fnK29faewSjZT4ArAJParmUb1GkaHGHV%2BpWv12iuSOgXi5coGKnJYA9Ss4UPL1Y7JvoBryCoRR9ovXdlEnrCk63KJzffo%2FwCdKz8XuPpMQp0if1FwGm8EAbLGWQF9OOjkCWBNlReerTTOTouFRxw4ITFFCei8B1RJFxxU%2BqnpCqEHs9WU8E2UrkNPTrE7bhRFy5S5sAUgLVtMJmuZhd5%2B5hfHrEaZbxZbmHOz7ZtzYqm%2FeUBChwxb5Xhi9fQWPiOBpV7tHfocOejzUwmMXVcynnpeiIoQnTbvoeeP3eFQH%2FkoaQc8oEY9RB0FoCnWsp8AYClaYP%2FJ44KW%2BzIFruwlmfGdWDJsUQrcD%2BDp4ht1WlbSJ6x6de7FV1M%2BGPGaNmqYsgNNt%2FX1UPiG6rsrrSHdb8023VDMM6KjMoGOqUBoOw%2FBNRIUdPQ2sEMjlGmgoFSZJM0W0KUa%2BqiT7PkgvaNfOiVkN31Df6aVHZBFHmj18JzI0kim2PiqYteH21Sy2qCvTUewcn1QGcjsdf4%2BStZr%2FUP3ijKnLR4u3Pi03HEL7TxCx2hWu3M50%2Fxf%2F2nk0H5N%2FKC0ikI8lffUzXJFFLyT%2F1nAdA4bSM22SSfw6RoAJf9%2FpHC6cIGmCUXhL25%2F8c8xC4D&X-Amz-Signature=c13e42436b5448aab015129b1bb3885abe4602c50aac7a7b569fb8531d1fcabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

