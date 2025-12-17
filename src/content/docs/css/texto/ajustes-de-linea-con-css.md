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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M6URGES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2VDS5J9zZFU8Z5QhrmgWL3YfLw0c5%2BxhqAS3us4yuPAIgASEejGytcvNGO7K8r1UcmTgwMuXQShupCcH4U93Nc%2Foq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7AAF1eRT1LZuaaRSrcA4f%2Fo1CYdjgl7pZOLO0ujAzj4vDMK1wLIbbWW0gSs2OpFGjxoU5MB1oyXzba00HWjSRCwOlvzbYKdKaD3DF5jk2%2F2FkfeYqhfbj1L3J0uNL42amdDytLFBw375D4fQieUX25gjOpKXQs661RWoQwR7ejXF5Rbp6A1r1kGk9OYLLEAJCGyqfCIfhAb5Ub5WkReW6S%2BHAh8%2FF62%2BKziN5dDklnUUPL2DYHswcr6KYtqrSIEJrHdFDT1zhn0ohcsNTCjqjHQneSi1JojLT%2B7NAdQ7Tswvlpg8XX%2FXC1%2BpPw%2Btrf39MQ7Lv5A4Boi6MVG8fVgsUg6SKgjD1eftaNqCyLTJU5C6uyNAu7x0n8Yu95fpLudaWFMJvni3DtWDthITto0MygOq4m00FyzN82MJhv8yPHM6SPyUVmQDwfcI%2BqnsM9jX1dQpE%2FlDB%2F74RrP5Fyl6MFL4gedpqnNpC5O%2F0csPPg5obWp7IeaCk1Fynnq6dON8zS6hbHLb1nAKnmATaLqWXLNMFG1Wfmyk4KDv7n9I2i%2BGB9Z40PHsoCshn%2Faqzgdjp5AUNrwtGK4frYM8sv9nuTE%2FcXHXrRufvZxYuUO6JTLqEjPbEinU9OISK2jH1tkRPl8EFahCV%2FwVjpMMP7h8oGOqUB%2Fy8m238F2qtXVXHTYA1yjNibBB3SjfkbYIa3nplsNFRY4Cuo%2FF0qUULZQXHr3WdVCMC9ckfYwnKVk07dUx0n46SggPkk1NDFUDUJtTbSiQ4en6v7yi%2F3DJal9zeGZPRRyU4JtY%2BHhTguEkMGtZ0FVh4Jk2wyqjrT5VGVTYCDqauPRVny%2Ff1ds%2ByAWBVIlisBsff3WdjphW0oPg0AFX67PrHE2Wo0&X-Amz-Signature=a450e4fe1ec6bec4141ceb64a970af3543a3d5e5853ed5f425d44f6f68b6453c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M6URGES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2VDS5J9zZFU8Z5QhrmgWL3YfLw0c5%2BxhqAS3us4yuPAIgASEejGytcvNGO7K8r1UcmTgwMuXQShupCcH4U93Nc%2Foq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK7AAF1eRT1LZuaaRSrcA4f%2Fo1CYdjgl7pZOLO0ujAzj4vDMK1wLIbbWW0gSs2OpFGjxoU5MB1oyXzba00HWjSRCwOlvzbYKdKaD3DF5jk2%2F2FkfeYqhfbj1L3J0uNL42amdDytLFBw375D4fQieUX25gjOpKXQs661RWoQwR7ejXF5Rbp6A1r1kGk9OYLLEAJCGyqfCIfhAb5Ub5WkReW6S%2BHAh8%2FF62%2BKziN5dDklnUUPL2DYHswcr6KYtqrSIEJrHdFDT1zhn0ohcsNTCjqjHQneSi1JojLT%2B7NAdQ7Tswvlpg8XX%2FXC1%2BpPw%2Btrf39MQ7Lv5A4Boi6MVG8fVgsUg6SKgjD1eftaNqCyLTJU5C6uyNAu7x0n8Yu95fpLudaWFMJvni3DtWDthITto0MygOq4m00FyzN82MJhv8yPHM6SPyUVmQDwfcI%2BqnsM9jX1dQpE%2FlDB%2F74RrP5Fyl6MFL4gedpqnNpC5O%2F0csPPg5obWp7IeaCk1Fynnq6dON8zS6hbHLb1nAKnmATaLqWXLNMFG1Wfmyk4KDv7n9I2i%2BGB9Z40PHsoCshn%2Faqzgdjp5AUNrwtGK4frYM8sv9nuTE%2FcXHXrRufvZxYuUO6JTLqEjPbEinU9OISK2jH1tkRPl8EFahCV%2FwVjpMMP7h8oGOqUB%2Fy8m238F2qtXVXHTYA1yjNibBB3SjfkbYIa3nplsNFRY4Cuo%2FF0qUULZQXHr3WdVCMC9ckfYwnKVk07dUx0n46SggPkk1NDFUDUJtTbSiQ4en6v7yi%2F3DJal9zeGZPRRyU4JtY%2BHhTguEkMGtZ0FVh4Jk2wyqjrT5VGVTYCDqauPRVny%2Ff1ds%2ByAWBVIlisBsff3WdjphW0oPg0AFX67PrHE2Wo0&X-Amz-Signature=0ad0cb156ecaa72887b2729d9ce06fc965a35ce3262f4c613dc869e6136514bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

