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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL376S23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ojd5MxR%2BjQtSau5zSVLNPBcgDl3jB3UOVp2qYgrXPQIhAPO8blXmK25qIO4JCrGqVkFitwXN57qjizu8hW8L%2B56DKv8DCHQQABoMNjM3NDIzMTgzODA1Igxv0N5yUpSaol1uETAq3AOTUmzz3zYHxTD4BTjZ6yKg%2FohmEIaFFPK8Gm%2BHC%2BH3FX2xd5169Zu4jbNC3rS3z5tAsxTbN6V9bcNksNUI52w62Q%2FCd2gQWwkRVmS%2FmCs3gZzgCDgPqR1VGTkD9A%2FI3X2qdqoaVdm08F17sGR9E4W71uHUJK7fzWkGwi4L1C%2FGjG%2Fk6qtSMl0947%2BYuH1vau3AHO6WG8YIi5oiQlUE7Riqk%2FD%2BbfwN77M3iU67A3D%2BsUOcxKv2PhaFr8dG4g%2BcV%2FOPdt6wl4yEv0T2210uBV3miX2La2gTBW2NE8%2F2%2FqI9XBLLTw%2BF0kKg9NIZav3EW8bGYdWsGDdi8H40vQdpTO1G50mhaWrb6K0QsdZaaHezBPZkD8m9CRYXtfDmW%2Bf6pkUosJqrLO%2BY%2FUUDOeQKFAOVdM9WpyCtP6wxU74ht4UOf2WfibpdbbqtMWXcr7qTQzL3Od4of6xpYfVtA5pUdp1LM0%2BhIUY2bZvMuFd31CvnQPQgTu8QDjuMzNsjj0t72ID2FoFup0x1kJKLDFf84LRHo4u9byObvIEKk49BGPRBA6yXxemonoOkAd5B6MAuwj4kMfrKKqA3DcYX5kJObyZoEjKAqXtz7h%2B8GZw7uVzypsrES3lHgQzBIkF%2BnjCYs4jKBjqkAcN7AFWZz%2Bw6ngFBGscjLY0D2g%2BeqnnN1sSDcA1VtkTSkiPz%2FUEgDdL8LX5PPoSsA3erdCDatA0mPPZq0ghqCdSRxD8HVgIQU3vZLBlaVfXlf8%2FGf9olaJnZiwyDk6TVQz76MVh9O5kRhg25W5tw33JMu0VPo4GbCULddXnuCwPRDzzoBOSMn0BflROXUCU%2FHxs0d5EN6Q%2FwD26WJCyLIW5Seiij&X-Amz-Signature=59563cb6fd760c11560ceb5a86844410acf64d28d018d8b44abeaf17eb8035e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL376S23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ojd5MxR%2BjQtSau5zSVLNPBcgDl3jB3UOVp2qYgrXPQIhAPO8blXmK25qIO4JCrGqVkFitwXN57qjizu8hW8L%2B56DKv8DCHQQABoMNjM3NDIzMTgzODA1Igxv0N5yUpSaol1uETAq3AOTUmzz3zYHxTD4BTjZ6yKg%2FohmEIaFFPK8Gm%2BHC%2BH3FX2xd5169Zu4jbNC3rS3z5tAsxTbN6V9bcNksNUI52w62Q%2FCd2gQWwkRVmS%2FmCs3gZzgCDgPqR1VGTkD9A%2FI3X2qdqoaVdm08F17sGR9E4W71uHUJK7fzWkGwi4L1C%2FGjG%2Fk6qtSMl0947%2BYuH1vau3AHO6WG8YIi5oiQlUE7Riqk%2FD%2BbfwN77M3iU67A3D%2BsUOcxKv2PhaFr8dG4g%2BcV%2FOPdt6wl4yEv0T2210uBV3miX2La2gTBW2NE8%2F2%2FqI9XBLLTw%2BF0kKg9NIZav3EW8bGYdWsGDdi8H40vQdpTO1G50mhaWrb6K0QsdZaaHezBPZkD8m9CRYXtfDmW%2Bf6pkUosJqrLO%2BY%2FUUDOeQKFAOVdM9WpyCtP6wxU74ht4UOf2WfibpdbbqtMWXcr7qTQzL3Od4of6xpYfVtA5pUdp1LM0%2BhIUY2bZvMuFd31CvnQPQgTu8QDjuMzNsjj0t72ID2FoFup0x1kJKLDFf84LRHo4u9byObvIEKk49BGPRBA6yXxemonoOkAd5B6MAuwj4kMfrKKqA3DcYX5kJObyZoEjKAqXtz7h%2B8GZw7uVzypsrES3lHgQzBIkF%2BnjCYs4jKBjqkAcN7AFWZz%2Bw6ngFBGscjLY0D2g%2BeqnnN1sSDcA1VtkTSkiPz%2FUEgDdL8LX5PPoSsA3erdCDatA0mPPZq0ghqCdSRxD8HVgIQU3vZLBlaVfXlf8%2FGf9olaJnZiwyDk6TVQz76MVh9O5kRhg25W5tw33JMu0VPo4GbCULddXnuCwPRDzzoBOSMn0BflROXUCU%2FHxs0d5EN6Q%2FwD26WJCyLIW5Seiij&X-Amz-Signature=9e4b023c7b45051ead71de68adc29367040c91350746041755ccf59a9f6d3bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

