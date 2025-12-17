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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ADWGC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI0O4%2FeV05fGSSlzl0rSXQeOj5j9lpe0qJvIwuuUaR%2FAiEAw9NZ%2BkvgW4wmVuaDdeJSskWRM0f8qtWRnrzE707%2BYyEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFj83GeZhj9Yf7OYiircAzfzVMu2LK7T64xz3B00vtPhxt519DgrjO%2F3DKnUrEj1kgEoYDtZrN7gYmsnfxZ5FBLjkC5mZaHeX5SwzS537M0aro2JNKvRW9wNLCp57X05HLCfAIo%2BOSYmF2sguJfR0EkXOqld%2F8x%2F4aILS2987oCDC9EtNfKt26%2FLXFd6ttnpBQ6xAuE%2BniQSyid0sHUt5atcNR4GMSb5huCEZfk6EIXLx%2B948GyQSaoEW50lVTXL%2FmOlms3x8v6gUXM1wfQiSt3NWZp1yMYHW38wUFQ6qbV3JMY%2BPpNquYJCTtAn7rwcK6n5tSz6QD2Ub1EbZyCVHm%2BXhYmmqF%2FQDiOEu3rRmwMNL9PbTeNdgZI%2FHAXEh%2F%2BZjvxmGDTxxQ6fVfnj00wZYmSJcXyhTMIn%2FMdqZ0ZyDlRg1n3%2BRX5Q7HJBuVHl%2BaElqRPPnvExWeh38cS4UWN4CKOTG67TsehCTJhZLCILyFpT41yHHJG2%2BvMNyxmO7PTYg8B5YhIRLSCwyowSo0Ec9JdvlFS6vXSdQ34XHLQE5OyKvisJJlC1NjZbDXnklBtFOVa9liPdpVqVoeO6rV%2FnCox2p3bVeg4%2FmwBdo%2FEOKD4RVPh6G4iJydDdVf%2FDmlS%2B0naSmcD5AOfp4wgoMK7wicoGOqUBQc8IDVc3n%2F2E%2BKG3oR%2B%2F1KQVy7JSY2ijM0EW8WgKL18ckY2uUq5zAriNevMu1cQlopIArVX3uumciH7dGnVPnZG%2Bt1lpXMgHB5BajqpU4VwnTLzLDk1fYWVAGKnfsIHo%2Byw06b%2FOO59PoTr3db8d1OVgNYabE9Qzg9L9bDhGmQXQ8x%2BDv5qnm4%2FPKyvGkhFYXsE1DXOJT0BUrPqmzEQlWg3s4dJ0&X-Amz-Signature=708c63b1f34a894f0da25d4499f49ca9f77f91cc5d446dad2710750ae66717db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ADWGC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI0O4%2FeV05fGSSlzl0rSXQeOj5j9lpe0qJvIwuuUaR%2FAiEAw9NZ%2BkvgW4wmVuaDdeJSskWRM0f8qtWRnrzE707%2BYyEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFj83GeZhj9Yf7OYiircAzfzVMu2LK7T64xz3B00vtPhxt519DgrjO%2F3DKnUrEj1kgEoYDtZrN7gYmsnfxZ5FBLjkC5mZaHeX5SwzS537M0aro2JNKvRW9wNLCp57X05HLCfAIo%2BOSYmF2sguJfR0EkXOqld%2F8x%2F4aILS2987oCDC9EtNfKt26%2FLXFd6ttnpBQ6xAuE%2BniQSyid0sHUt5atcNR4GMSb5huCEZfk6EIXLx%2B948GyQSaoEW50lVTXL%2FmOlms3x8v6gUXM1wfQiSt3NWZp1yMYHW38wUFQ6qbV3JMY%2BPpNquYJCTtAn7rwcK6n5tSz6QD2Ub1EbZyCVHm%2BXhYmmqF%2FQDiOEu3rRmwMNL9PbTeNdgZI%2FHAXEh%2F%2BZjvxmGDTxxQ6fVfnj00wZYmSJcXyhTMIn%2FMdqZ0ZyDlRg1n3%2BRX5Q7HJBuVHl%2BaElqRPPnvExWeh38cS4UWN4CKOTG67TsehCTJhZLCILyFpT41yHHJG2%2BvMNyxmO7PTYg8B5YhIRLSCwyowSo0Ec9JdvlFS6vXSdQ34XHLQE5OyKvisJJlC1NjZbDXnklBtFOVa9liPdpVqVoeO6rV%2FnCox2p3bVeg4%2FmwBdo%2FEOKD4RVPh6G4iJydDdVf%2FDmlS%2B0naSmcD5AOfp4wgoMK7wicoGOqUBQc8IDVc3n%2F2E%2BKG3oR%2B%2F1KQVy7JSY2ijM0EW8WgKL18ckY2uUq5zAriNevMu1cQlopIArVX3uumciH7dGnVPnZG%2Bt1lpXMgHB5BajqpU4VwnTLzLDk1fYWVAGKnfsIHo%2Byw06b%2FOO59PoTr3db8d1OVgNYabE9Qzg9L9bDhGmQXQ8x%2BDv5qnm4%2FPKyvGkhFYXsE1DXOJT0BUrPqmzEQlWg3s4dJ0&X-Amz-Signature=42e8954555bb2d03995ea7991adf6fa0db4fea63f569d3c6d7cee2e44149c54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

