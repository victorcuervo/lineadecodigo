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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7RXGJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAckugGEFosdVaP%2BlLPHPSAINuF5qp%2BCo31eb8sJsVG1AiBXhUu%2FyRWS7oN5jFiJKCJe3HOf15jmcMyluqlmDklbwyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROuhUQ6NdPoxvfuYKtwDu%2B31uKg9ZPcwboF5ItIIyDVzykkukgTLB1Knj9vgq0xQHJ3eLzNqalBf4RenAolrZ%2BHt8LnC1kQPptRCPRMfdODaNDhgc0g1m%2F0BD%2BiTsulH%2FAHSLEJA4QRPM9d0BQHrBVMBK9SMHWPUGNPYLMN%2Bhdz3XyTxa8WCVwukNw6qZkPV9XiBAiqAhOCk8qjSJgUfINesDXvEDOzRAX%2FlcAl5nQjXC8HLxn%2FVG5Ev6hJ0C1LKtiuCnPco9uurEQEAQw5qoayIR16FsCag6ol1cR3BDr7ebpSaHRmdtr0oKeDID%2F6302XvOPNU5daVpoTMOI3gUVwVPq8FAbMz8%2Fd8GCSu0cMRjJD1PMLfHTobZ2oH5%2F7mDeit0h%2FQfeE%2BmjoesPGVDUEKnoPdqphDb83TmtACxct2V4TlrQkitKrWooNYVqsZgRHYW91dqaSbw%2FijjPWd2sDSsyvuv%2B%2F1DcP3OWa241toWCk2qkZOBEdaieIUVALRYWsegyhWGdPGaOFb4Gk%2FO7gWr2OxPzjRW8169HjvlH85ugXLKOo7elIjoCxq7CHZdm6I%2Fgy2mJrr4yFrm%2FwUjiLM7A%2FpUJQSHP2P%2Fd4tXGcz1NsI%2FY0iLFGMXhyxCb3uC9OvaJFSZLadJrswy6CLygY6pgEdSiYlaUdb0yd79jhhyc4x7hA0JFQu1lguNVeQt7TFSo%2B%2Fd5XDEnpv7FsW0%2Fg9j2TWeJnn3dkFpvPzeQD1T0WRMk1ckXAlWatuM66qUDgm2RWGZh46vQX5gt7lsMhUADgf4LpO3sJL9phdzLuxNa65%2BsOenMHs6%2FvX2X6Lak%2Br7C4a5TCG7QMBIR%2FNCpMrsaJRayLHH3nhG7LHSWdHcGEZkaAv1Mys&X-Amz-Signature=f95cad2d8263796b9ef87c8ed508cdd681dbf9bcba1fbc4e9718b0bb95b1bbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7RXGJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAckugGEFosdVaP%2BlLPHPSAINuF5qp%2BCo31eb8sJsVG1AiBXhUu%2FyRWS7oN5jFiJKCJe3HOf15jmcMyluqlmDklbwyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMROuhUQ6NdPoxvfuYKtwDu%2B31uKg9ZPcwboF5ItIIyDVzykkukgTLB1Knj9vgq0xQHJ3eLzNqalBf4RenAolrZ%2BHt8LnC1kQPptRCPRMfdODaNDhgc0g1m%2F0BD%2BiTsulH%2FAHSLEJA4QRPM9d0BQHrBVMBK9SMHWPUGNPYLMN%2Bhdz3XyTxa8WCVwukNw6qZkPV9XiBAiqAhOCk8qjSJgUfINesDXvEDOzRAX%2FlcAl5nQjXC8HLxn%2FVG5Ev6hJ0C1LKtiuCnPco9uurEQEAQw5qoayIR16FsCag6ol1cR3BDr7ebpSaHRmdtr0oKeDID%2F6302XvOPNU5daVpoTMOI3gUVwVPq8FAbMz8%2Fd8GCSu0cMRjJD1PMLfHTobZ2oH5%2F7mDeit0h%2FQfeE%2BmjoesPGVDUEKnoPdqphDb83TmtACxct2V4TlrQkitKrWooNYVqsZgRHYW91dqaSbw%2FijjPWd2sDSsyvuv%2B%2F1DcP3OWa241toWCk2qkZOBEdaieIUVALRYWsegyhWGdPGaOFb4Gk%2FO7gWr2OxPzjRW8169HjvlH85ugXLKOo7elIjoCxq7CHZdm6I%2Fgy2mJrr4yFrm%2FwUjiLM7A%2FpUJQSHP2P%2Fd4tXGcz1NsI%2FY0iLFGMXhyxCb3uC9OvaJFSZLadJrswy6CLygY6pgEdSiYlaUdb0yd79jhhyc4x7hA0JFQu1lguNVeQt7TFSo%2B%2Fd5XDEnpv7FsW0%2Fg9j2TWeJnn3dkFpvPzeQD1T0WRMk1ckXAlWatuM66qUDgm2RWGZh46vQX5gt7lsMhUADgf4LpO3sJL9phdzLuxNa65%2BsOenMHs6%2FvX2X6Lak%2Br7C4a5TCG7QMBIR%2FNCpMrsaJRayLHH3nhG7LHSWdHcGEZkaAv1Mys&X-Amz-Signature=14251d436792dd71fda5d6910d8ceb51380cdcb86078610ed7b2ff4b709e67e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

