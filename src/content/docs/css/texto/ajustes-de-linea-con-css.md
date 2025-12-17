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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSPWZWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpap6r%2Fx40oBsoqzT%2BU7ymfkOuPWTaxdcxc2aMzwafnQIhAPiYDfIlLSDh4xNG6ZE8oLk%2BCwdmRNzpYd92NUhCXaHhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuHIMhviUj088UQz0q3AMRr6AWiQVtzTTV8P5iPjeZZsw017T6x7loe08wmIn%2F5uB0ND3T2cRn7nS3RFWEzrH%2FloMOLq2y804PQjY6z9sw05oZBX0xllIBzCTl1T3i%2BfkU3Ozx4TFv9O7jcOvss1BTo%2FnXcYEpCtMy9tsSpW0YBSBL4lpqxFVOxD8Q3XitsSkIQK3OE1BaMB0LdCiVLzqiqP5eIQKdxLx%2FWQoIxgUUCWrbpbQ1cO2ZrqB%2FRZSfvr%2Bq81jCFzuL2l3EmPgDKDOR4%2BuoJU8Xqf7w2hOw5YdLK8D%2FPxRb6X3%2F4Axz0n6%2BlNucmzFIyL6J%2FlokpaIv0cGneSupERwuYMOl4wqcx2Dr2Z8VkQwfnycm3hEVUf1EGKZ3vtYUHSYlQxfEqUCZEUVMl%2FWIdRh4dTm44I5SUgsr3YPPG3x2DrSpG7rSMlWDM9j2PSgtxRbxmJBg0TWYGVT066OEEu3jQCjMJPmzj2Qa4r%2BOqDWECP4MM%2FOAQW779Ls09mQjwiglFhs7IETvLKuwOtz68cDzgQ0z4RXqjfW6t%2F9C2oFzoi3HeW96ujOSB2%2FMxDB%2FoDaGcn%2Fb4tzEsVP6jUOJ0FPus8z1iy2H7AfJ9scLLqxbF9TG2Yx54XPpeRFjcx7o986k8QTM4jDLi4zKBjqkATlCcHcodENZoy5gcFb2vRAhxj32DYdI7Fg4qvPkNqyBcn0393jtRADG7XIRger2jGbHQtKG%2BB8FCWs6JyC1j1PxnM1jmOBYEJAj51l8Me%2BVA38ndOUIzrf3c1z77hrV%2FB5I%2BHdUYz0s1ONsAfVIJRX4GLrLRWID3oFII8dMpxLu3YLowrYz2txTpYxgr5eyRWgYO2SwIl%2FxjFxUk749kfnr3JFM&X-Amz-Signature=f78c57f8ade32f05266ea75710f157720f55e49a502f731b11df1055fdf69ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSPWZWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpap6r%2Fx40oBsoqzT%2BU7ymfkOuPWTaxdcxc2aMzwafnQIhAPiYDfIlLSDh4xNG6ZE8oLk%2BCwdmRNzpYd92NUhCXaHhKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuHIMhviUj088UQz0q3AMRr6AWiQVtzTTV8P5iPjeZZsw017T6x7loe08wmIn%2F5uB0ND3T2cRn7nS3RFWEzrH%2FloMOLq2y804PQjY6z9sw05oZBX0xllIBzCTl1T3i%2BfkU3Ozx4TFv9O7jcOvss1BTo%2FnXcYEpCtMy9tsSpW0YBSBL4lpqxFVOxD8Q3XitsSkIQK3OE1BaMB0LdCiVLzqiqP5eIQKdxLx%2FWQoIxgUUCWrbpbQ1cO2ZrqB%2FRZSfvr%2Bq81jCFzuL2l3EmPgDKDOR4%2BuoJU8Xqf7w2hOw5YdLK8D%2FPxRb6X3%2F4Axz0n6%2BlNucmzFIyL6J%2FlokpaIv0cGneSupERwuYMOl4wqcx2Dr2Z8VkQwfnycm3hEVUf1EGKZ3vtYUHSYlQxfEqUCZEUVMl%2FWIdRh4dTm44I5SUgsr3YPPG3x2DrSpG7rSMlWDM9j2PSgtxRbxmJBg0TWYGVT066OEEu3jQCjMJPmzj2Qa4r%2BOqDWECP4MM%2FOAQW779Ls09mQjwiglFhs7IETvLKuwOtz68cDzgQ0z4RXqjfW6t%2F9C2oFzoi3HeW96ujOSB2%2FMxDB%2FoDaGcn%2Fb4tzEsVP6jUOJ0FPus8z1iy2H7AfJ9scLLqxbF9TG2Yx54XPpeRFjcx7o986k8QTM4jDLi4zKBjqkATlCcHcodENZoy5gcFb2vRAhxj32DYdI7Fg4qvPkNqyBcn0393jtRADG7XIRger2jGbHQtKG%2BB8FCWs6JyC1j1PxnM1jmOBYEJAj51l8Me%2BVA38ndOUIzrf3c1z77hrV%2FB5I%2BHdUYz0s1ONsAfVIJRX4GLrLRWID3oFII8dMpxLu3YLowrYz2txTpYxgr5eyRWgYO2SwIl%2FxjFxUk749kfnr3JFM&X-Amz-Signature=ac2f05b66d76b8a9d638cc563c62afeb67c33c5028bef9a9521068dc944d2244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

