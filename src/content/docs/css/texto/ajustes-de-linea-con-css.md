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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMA67FD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHl%2BDddXCkFEXfv%2B0D1%2BVqLcBFFTM36eVM4zrSMFaDvQIgVjcr9QMrZ%2BPLmWI1rOlwaa7Izg14bJdhd904Oe%2BZk4Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLal83HgqzE5cDmnbircA%2Bk9mJGAHfae%2Fqghvld1ucb5q3iZi13TRuXIRZCaCH3jo8nSD64c90feDmTj9iRDYAuB%2FgNQje4pBnN3FvIwaejxlO%2FuPwdZTXpLZ3BFYnh4hsbLWYSZJmCIszRyCHUqHCDd7W4h8XYfKir%2BS0ucVf3UIlfw0Yxw32Ms9vJ%2FbUWlPzJjaFOewrEm40kFZ2lAG6KbdwnWMJ7iqVjqGWWV3KnRXNUbeixcdEtGlCuiEhXjI5tppnBGgSqnF4ozbR71JbAQos7Y9J3Z73gcdBnXoW%2Bpuov3KKxjpgRUneSqS2LxTCrK984cbnPfr7mTeJilvGY3YiLDRiU90FQscvi4bhR58Nd3En3Fpvdbfv7YT6hQWeJbXDYeoqE8lAf3qCr9WGmGttkb40%2FafxYGZdwr98IbgXSKgD%2B4Vbw%2BsEwAkjgVxu3y6AGkhStEp47kiQFSKHtf9l%2Ff5N%2BHNX7L8mCBChLSZIzCOoSSRPtHzLmYZxs7JQWrvzsIENJTfQXWAlsXv4VVXCZup4byWJvQckRKcucaxItIqcaK7RcF2kl6BMuRNO7RfGtnyi7hsWROycu42SFpGBOuvMjpLp03b3xIFcxeuwrQOQeHvpJPjtYTfFwE%2BfNFl6ioCpJAR35GMMuXiMoGOqUBTgJ6JZdQp5geN%2Bxn50ojZddYFMkyhKOv9FDRRsDbDBPI59L0fDIzb%2FoQ2CFYd3iz2iydv7lx%2Buo%2BC12ff8c%2B9qcPXSSUzeAxtOQZeuzRKRDQevKYG7yLtVpE%2FpD0jeSPO%2BI8R1OyMkKBm%2Bo3%2Fvcdxx9ey1j%2BsL8p%2BZCP4tNat9WuclZPL0Ngs%2BJyxyhiOd5FbiDbHqaoozutaJV7o8zyDmG3queX&X-Amz-Signature=fc80e92914df87bbdbe8aece3a7c7fb5817b9eb5843cc7eef3e78beca0219f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMA67FD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHl%2BDddXCkFEXfv%2B0D1%2BVqLcBFFTM36eVM4zrSMFaDvQIgVjcr9QMrZ%2BPLmWI1rOlwaa7Izg14bJdhd904Oe%2BZk4Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLal83HgqzE5cDmnbircA%2Bk9mJGAHfae%2Fqghvld1ucb5q3iZi13TRuXIRZCaCH3jo8nSD64c90feDmTj9iRDYAuB%2FgNQje4pBnN3FvIwaejxlO%2FuPwdZTXpLZ3BFYnh4hsbLWYSZJmCIszRyCHUqHCDd7W4h8XYfKir%2BS0ucVf3UIlfw0Yxw32Ms9vJ%2FbUWlPzJjaFOewrEm40kFZ2lAG6KbdwnWMJ7iqVjqGWWV3KnRXNUbeixcdEtGlCuiEhXjI5tppnBGgSqnF4ozbR71JbAQos7Y9J3Z73gcdBnXoW%2Bpuov3KKxjpgRUneSqS2LxTCrK984cbnPfr7mTeJilvGY3YiLDRiU90FQscvi4bhR58Nd3En3Fpvdbfv7YT6hQWeJbXDYeoqE8lAf3qCr9WGmGttkb40%2FafxYGZdwr98IbgXSKgD%2B4Vbw%2BsEwAkjgVxu3y6AGkhStEp47kiQFSKHtf9l%2Ff5N%2BHNX7L8mCBChLSZIzCOoSSRPtHzLmYZxs7JQWrvzsIENJTfQXWAlsXv4VVXCZup4byWJvQckRKcucaxItIqcaK7RcF2kl6BMuRNO7RfGtnyi7hsWROycu42SFpGBOuvMjpLp03b3xIFcxeuwrQOQeHvpJPjtYTfFwE%2BfNFl6ioCpJAR35GMMuXiMoGOqUBTgJ6JZdQp5geN%2Bxn50ojZddYFMkyhKOv9FDRRsDbDBPI59L0fDIzb%2FoQ2CFYd3iz2iydv7lx%2Buo%2BC12ff8c%2B9qcPXSSUzeAxtOQZeuzRKRDQevKYG7yLtVpE%2FpD0jeSPO%2BI8R1OyMkKBm%2Bo3%2Fvcdxx9ey1j%2BsL8p%2BZCP4tNat9WuclZPL0Ngs%2BJyxyhiOd5FbiDbHqaoozutaJV7o8zyDmG3queX&X-Amz-Signature=c6f34005309a431e72f3b5cc3e17819f2e32228e6d7ba75370669ab961cdeb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

