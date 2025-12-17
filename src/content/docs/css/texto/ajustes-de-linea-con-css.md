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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ35SRWW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBsBSBiH4yoQnKhvHgrdbd8GfH%2BfgACwpk%2FkTo%2BwBRrwIgRC94AGqt8g2%2FhilKvkaZmaNoBB4t%2BIMJJYDYlq2kFCgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHbQQFhAwo8vfYDalircA7frwczUzQePOsj%2FBYjefiwAU4IGU9o%2Bee8BRFg4X7zU3YFgRxSNRY4UnkqhiAkZnAK4cwxN0IiGeLavssznmTPi%2FRNRoyKUwYM0RlHbxk5SSz%2FuEz7NHmb91%2BIC%2BOCEx2JsakQOe5jK4Ti2IjM3K2iXDr9DhDjijZ9kPHbBQeL6AeWJPQcvppWDUS7ktp58N%2Bo6MQufcQ64K%2Bz3GrN4CTI621xeNqLYwL2IZYLsl0TY1DN8Nzj%2BYYvohkgohifPeIJRm8cE77LxY4JMypCSKtqATFquanRXHsTxmsRhdWfkO6l2Cy1oRrMfUy0tnzo8zfZqzyJHEN6dvTkPXiPwB3pIf%2F5WHjSSa%2BDw5YUEnOq6%2B7Ix53OiwSmJOkfhmNtXi4bAjj%2B6xBOWStYwVCUz%2BlTf1zMEsieBaCkVWlze4CLoAIOAmArbT%2F%2FOyt30hRVCAs%2BjdHDutvQr4y5KTdVIaP9BQSGz6taOFkqs%2Bqg3uKaVYco5RhxOKhWcXOXjN8etlvSkL4WeaeqgzEIeTHSevSDRf5Dn%2B5JI8Ls9pRwGwRXx7J4gZe2Xs0rCht07%2FKsj8BtXq2p8LHXVfLdV9L%2FSttop3XOEIRmPn3fBTGzt6esDNHDr9Yxtl3Ii%2Bd61MIy3icoGOqUBYfnQmhsTMCaBXjXH%2FMVd8O1P%2BU30oclItLHQe%2BLVc1EfpAONCelhypXn9J1Yk8cPY2zfPWzYQNjiEAJD3wooyM35j0nMjdJqIO8tJJbiW8z1fSwkQW5TJaa3m%2Fk%2FtmNL4icXafiNbLsm7V61UtZaXEk7%2F%2F919EOQl71iBH98p2SK4zHg0U5pZbebHlt5w7HEGSCpJ4sEKHQY%2Fn4dyC9upKaVoD6R&X-Amz-Signature=37bce5bf173088d0508e84aba9313ea7a48b87b16d44c2533e5239815799caea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ35SRWW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBsBSBiH4yoQnKhvHgrdbd8GfH%2BfgACwpk%2FkTo%2BwBRrwIgRC94AGqt8g2%2FhilKvkaZmaNoBB4t%2BIMJJYDYlq2kFCgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHbQQFhAwo8vfYDalircA7frwczUzQePOsj%2FBYjefiwAU4IGU9o%2Bee8BRFg4X7zU3YFgRxSNRY4UnkqhiAkZnAK4cwxN0IiGeLavssznmTPi%2FRNRoyKUwYM0RlHbxk5SSz%2FuEz7NHmb91%2BIC%2BOCEx2JsakQOe5jK4Ti2IjM3K2iXDr9DhDjijZ9kPHbBQeL6AeWJPQcvppWDUS7ktp58N%2Bo6MQufcQ64K%2Bz3GrN4CTI621xeNqLYwL2IZYLsl0TY1DN8Nzj%2BYYvohkgohifPeIJRm8cE77LxY4JMypCSKtqATFquanRXHsTxmsRhdWfkO6l2Cy1oRrMfUy0tnzo8zfZqzyJHEN6dvTkPXiPwB3pIf%2F5WHjSSa%2BDw5YUEnOq6%2B7Ix53OiwSmJOkfhmNtXi4bAjj%2B6xBOWStYwVCUz%2BlTf1zMEsieBaCkVWlze4CLoAIOAmArbT%2F%2FOyt30hRVCAs%2BjdHDutvQr4y5KTdVIaP9BQSGz6taOFkqs%2Bqg3uKaVYco5RhxOKhWcXOXjN8etlvSkL4WeaeqgzEIeTHSevSDRf5Dn%2B5JI8Ls9pRwGwRXx7J4gZe2Xs0rCht07%2FKsj8BtXq2p8LHXVfLdV9L%2FSttop3XOEIRmPn3fBTGzt6esDNHDr9Yxtl3Ii%2Bd61MIy3icoGOqUBYfnQmhsTMCaBXjXH%2FMVd8O1P%2BU30oclItLHQe%2BLVc1EfpAONCelhypXn9J1Yk8cPY2zfPWzYQNjiEAJD3wooyM35j0nMjdJqIO8tJJbiW8z1fSwkQW5TJaa3m%2Fk%2FtmNL4icXafiNbLsm7V61UtZaXEk7%2F%2F919EOQl71iBH98p2SK4zHg0U5pZbebHlt5w7HEGSCpJ4sEKHQY%2Fn4dyC9upKaVoD6R&X-Amz-Signature=d64a5e77915af2069de134b46324648d2045def24d89ebc5ab546e041bd80365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

