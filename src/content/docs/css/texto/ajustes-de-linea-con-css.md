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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SM5IUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIMHuOCJYWeXKU6Xy4ktiN2n8YTmuDZAG%2BdmK1qVMqqAiAwCwvZ2is%2BHOfFF9gwhv4WX8K0N35hxqChSr%2FN6fP2xiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FKGwLL3bpIlv5OkKtwD%2FB57sHN71Y3KBMg3WPDsqd0D%2FREIZHEslAJbU9jbGnI09f3QE98v2UMRp6cUKIUrrRXCYOTrCO04pRI8ShskwvU30wF9lqt23qr%2FPaWAu7%2B4I%2FzhU%2Fn9%2BbTg%2BRLT4EHkOlwwvnLBicDA6InQdQYmbzjHpFZeqQw%2Bgvajuj%2B7uHFL0XNNU49yUNttS27RDqPgUj1Fvzrk9swcZpqVksGOwbBkKaHW6yMPeyaCdYps%2Fpj8ZDxqoEdIQCI5Uu8mhVjIkYoTi8MvGk7eqC0hiOcLh3ZxV0NAM9aTpr0k1ukQgNeD7Ng5A0sa%2BIF%2BIy%2FrqtWs%2B4FF%2B%2Fbd67xGbMJW8DrHpXCd34wG8Hv%2BN3oQ3dnd8kPkIQHvixExepMGzRMQbd9ZBTEiKAyVTapnfmFzLp2pweaJedXw8o4azHU7qdYHrgntmyKkm6eo2se7vmz7%2BZ7iobYk5s3sIUeSYp1OJOwwjXeTAeuQXMyXreCmy%2F5YrJUD7QCUy4hQNh6r7xO0eA1PqFBP6PNjH1n6HMeAT5ZvTuqBmhKwxrPceuBn2wdycLO05vU5erE4ztKmluux03obuVrpKSeXh0ZOg%2B8TP6E4bl9jBN8M7tQSPtcXAYqhErL54OY4HJjNHJ4xH3Aw%2Ff%2BKygY6pgEcl2jVdE%2F%2FeginBVjt8P2QMq6h2wwP487gkrhX9wfPSeTbvMuCqiLl7U%2BSYxMCqyToeqwopryAvoMhCHTShZEgsUy1hvY9XMwdxT%2Blvf7yrViYDFoIPMzjQjGqTOp43gFPEEPu3DaqfpOsNQUjgdMS2axF7PJwoG0Iy5ueh%2BKZMwJUd2VCx5xCGjj3YvmoYICG3WfRNfnxI%2B4seE8Ts4fLfYZTkG8v&X-Amz-Signature=63c5e65d17fc1e699c4bfb45a990baab030243cd8ddd7469e82e7776b6c55dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4SM5IUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIMHuOCJYWeXKU6Xy4ktiN2n8YTmuDZAG%2BdmK1qVMqqAiAwCwvZ2is%2BHOfFF9gwhv4WX8K0N35hxqChSr%2FN6fP2xiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FKGwLL3bpIlv5OkKtwD%2FB57sHN71Y3KBMg3WPDsqd0D%2FREIZHEslAJbU9jbGnI09f3QE98v2UMRp6cUKIUrrRXCYOTrCO04pRI8ShskwvU30wF9lqt23qr%2FPaWAu7%2B4I%2FzhU%2Fn9%2BbTg%2BRLT4EHkOlwwvnLBicDA6InQdQYmbzjHpFZeqQw%2Bgvajuj%2B7uHFL0XNNU49yUNttS27RDqPgUj1Fvzrk9swcZpqVksGOwbBkKaHW6yMPeyaCdYps%2Fpj8ZDxqoEdIQCI5Uu8mhVjIkYoTi8MvGk7eqC0hiOcLh3ZxV0NAM9aTpr0k1ukQgNeD7Ng5A0sa%2BIF%2BIy%2FrqtWs%2B4FF%2B%2Fbd67xGbMJW8DrHpXCd34wG8Hv%2BN3oQ3dnd8kPkIQHvixExepMGzRMQbd9ZBTEiKAyVTapnfmFzLp2pweaJedXw8o4azHU7qdYHrgntmyKkm6eo2se7vmz7%2BZ7iobYk5s3sIUeSYp1OJOwwjXeTAeuQXMyXreCmy%2F5YrJUD7QCUy4hQNh6r7xO0eA1PqFBP6PNjH1n6HMeAT5ZvTuqBmhKwxrPceuBn2wdycLO05vU5erE4ztKmluux03obuVrpKSeXh0ZOg%2B8TP6E4bl9jBN8M7tQSPtcXAYqhErL54OY4HJjNHJ4xH3Aw%2Ff%2BKygY6pgEcl2jVdE%2F%2FeginBVjt8P2QMq6h2wwP487gkrhX9wfPSeTbvMuCqiLl7U%2BSYxMCqyToeqwopryAvoMhCHTShZEgsUy1hvY9XMwdxT%2Blvf7yrViYDFoIPMzjQjGqTOp43gFPEEPu3DaqfpOsNQUjgdMS2axF7PJwoG0Iy5ueh%2BKZMwJUd2VCx5xCGjj3YvmoYICG3WfRNfnxI%2B4seE8Ts4fLfYZTkG8v&X-Amz-Signature=7877866888ee23264c1c998926f5445b03fb14ab772fe3f370edac2f934a1f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

