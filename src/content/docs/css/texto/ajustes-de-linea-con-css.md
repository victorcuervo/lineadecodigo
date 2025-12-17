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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBZOEQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW2ji6aNqupdNWxXiUSIiR8UGIGHXQhp7Za8GKxEmxFAiBncGircWRyiT%2Fg8f4SUc0jpmbBIGxPcI0jJw6wPvvXuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVuzHTM9gkftJfnSQKtwDsIS%2FTKd54CyWddvmPikRjEMl%2FQFpPKPYTdSDlrx0Lj7CYNUQSljMgEQ%2FjCNSadiHlN%2Be%2FYJR65eE6Eumcb6THOSTTZ9O5mnVawh6bTtLnoot1JwLrp4LqRr7qYlhEZGQh6NDuGVO1hyAOvwgb1wum342QyI2Jc6JE0dO7z%2BNTrD4bAKOtTPcz3tR1XvUoulF3a7zm1EB9shGTLpxvpzp%2FqLQ8w%2BXkSBob0R1p98Vhv1nxAX3pt%2BfqLHT%2Bu43ClPKsS5XDQ0m1s4cjQpcopOKKvHoZQwDQkT95dgG8cqTR%2BduepA0%2FcSu6fH1svB%2FDf0Xw7OLQpBXH7KPhdje7qvJ1m1Z24huKP5JK674VJsjxNrMcR8JyMeD72f6aPJcP5oF8BoNzEN3kKKayh4SYozJjyy8rJ3GCjARsChRG0FTwjgQCOkW95vTvDzvWdkMYcg040nEQzJoDcYQ4NQIepNEV1ecX7vE%2FkU1%2B9EgL7Ih4dkqW8j5XQqrIkddq7ps8Pf1271hHbc%2FD9XkrvOuqFAaRxpHDkWFOTzRC%2BSBLXcVkL4tt3oXIo6EZaS7TSPcOWsbJ86vSkcHcuc1K0%2FA90jAyoYiAvz4oFS2u%2FLycPYWu3ggIZPr13RVs01vqukw686IygY6pgE%2FDqYgtx%2BMRBx6rImiWm97tQEsGrR5JgAiraXJTQV3twzCTSGWdRdM%2Fjjx8yF2cthz5SSkz%2BDyBANfslMgqyCYiO8GQdbGPUrx4phZCq84KF99yrk4mezpi2Tes10Oi9AUO%2FX9y65b0Myu50NbCI1JxmSm0jqTkV9vMh4iFSelwUV4BLAirZOgCCH5QDVA6XBIG%2Bkrh0lwrdws0pAsy8C58tGay3hr&X-Amz-Signature=249dae6cee80b3e6b3a7ffcf6471c505d781819b8fa1aebffe191f6d63204d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBZOEQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW2ji6aNqupdNWxXiUSIiR8UGIGHXQhp7Za8GKxEmxFAiBncGircWRyiT%2Fg8f4SUc0jpmbBIGxPcI0jJw6wPvvXuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVuzHTM9gkftJfnSQKtwDsIS%2FTKd54CyWddvmPikRjEMl%2FQFpPKPYTdSDlrx0Lj7CYNUQSljMgEQ%2FjCNSadiHlN%2Be%2FYJR65eE6Eumcb6THOSTTZ9O5mnVawh6bTtLnoot1JwLrp4LqRr7qYlhEZGQh6NDuGVO1hyAOvwgb1wum342QyI2Jc6JE0dO7z%2BNTrD4bAKOtTPcz3tR1XvUoulF3a7zm1EB9shGTLpxvpzp%2FqLQ8w%2BXkSBob0R1p98Vhv1nxAX3pt%2BfqLHT%2Bu43ClPKsS5XDQ0m1s4cjQpcopOKKvHoZQwDQkT95dgG8cqTR%2BduepA0%2FcSu6fH1svB%2FDf0Xw7OLQpBXH7KPhdje7qvJ1m1Z24huKP5JK674VJsjxNrMcR8JyMeD72f6aPJcP5oF8BoNzEN3kKKayh4SYozJjyy8rJ3GCjARsChRG0FTwjgQCOkW95vTvDzvWdkMYcg040nEQzJoDcYQ4NQIepNEV1ecX7vE%2FkU1%2B9EgL7Ih4dkqW8j5XQqrIkddq7ps8Pf1271hHbc%2FD9XkrvOuqFAaRxpHDkWFOTzRC%2BSBLXcVkL4tt3oXIo6EZaS7TSPcOWsbJ86vSkcHcuc1K0%2FA90jAyoYiAvz4oFS2u%2FLycPYWu3ggIZPr13RVs01vqukw686IygY6pgE%2FDqYgtx%2BMRBx6rImiWm97tQEsGrR5JgAiraXJTQV3twzCTSGWdRdM%2Fjjx8yF2cthz5SSkz%2BDyBANfslMgqyCYiO8GQdbGPUrx4phZCq84KF99yrk4mezpi2Tes10Oi9AUO%2FX9y65b0Myu50NbCI1JxmSm0jqTkV9vMh4iFSelwUV4BLAirZOgCCH5QDVA6XBIG%2Bkrh0lwrdws0pAsy8C58tGay3hr&X-Amz-Signature=fa913f65bc9a3eb2656933bc758501658bebf4d46b08c56379031c508a57798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

