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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRIY32K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKqJg6caSwp%2FJo29xI5UhitWCJK4EefgrtlOsW8LhFyAiEA1bEXLBAJ%2BCjrRURbkzlsN5Z52zWboTGVzy6onI9l8qIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHaOhc8FkHkD1Mz5xyrcA%2BzoH3JWDcLkl%2FFauRAu8TY0qXpLuf7%2BtLD1sjMQQ7YIKrWANhZw7xmsmhJd6JFVi%2BmLflrj0jFv2JOi9%2F3lp14cyqja7HUrG9B4bxHI7YAmXMkWWO0n7Dr70x2ypm6E1f3Y%2FW52MB0DGPMsOi5oHgWfuD01P4IjwL0Fqi%2FgNxUbU8upXC85rCw5AajEB8zTr9ttDrPbM%2FNoNt0y4a5KZQTQC098oU2hBVvNslBOSXTsZoe56Y5dDvVxegS%2BH%2Flfb68bmPoWkdmbejSBNzQGE0exHma778cozCggSDKs8mRHiG9%2FEt1vSfVlocLHw1C7DIzsLOW2U98gvvmVWu509Gb2ktpCzKprZg2W5p6pG7%2BHyP5Jvb8KmN%2F%2BRRgusltIBux9p9e8pcbGIxtwBe8WPXg1W6AFD6rPCpqcw5o9GWEShBOgUPiPo0yGB72Qd6fwSEaB7cpZmiVSLjhU%2Bg2VjOImUKvOp9IcwarpCWlxvhoTKowiiISumzPj0nJf7IUtt4UXXCmSO1Aynj0XLBpWsXUW5cJclgEOUDOSdq5H5Cvh95500MV9XI7Kmy01L9GDA0BPm0EhsifUJUoehGLOSsPTf8rDPDNxIFVhkFen7%2BrGTHSwx5UYUPBN4dMYMObFisoGOqUBXnR0uczRDp8vgEulp4Ocd4QN0uk426pGjVvKycbxZIEer18DwOTIZkfLzM%2FRzfPqAyvK5kiH%2FrYokfvc0P96JTHcTJ6BL%2FT%2BltzgwhI6%2F0QKsvSZyu7V0g10WwWbOkMtpG%2B2xS78RvwCuVTeR8FPNrKy540HhTTf1Ix6zhVEgdxUA24mxCeOaox8vAqwY92CQFHCM9vaUoTn3SfaC8nWk9XOkbeu&X-Amz-Signature=3e49c14bc369d5223c653cb48d89a76407670218bf905665d8f4349664276ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRIY32K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKqJg6caSwp%2FJo29xI5UhitWCJK4EefgrtlOsW8LhFyAiEA1bEXLBAJ%2BCjrRURbkzlsN5Z52zWboTGVzy6onI9l8qIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHaOhc8FkHkD1Mz5xyrcA%2BzoH3JWDcLkl%2FFauRAu8TY0qXpLuf7%2BtLD1sjMQQ7YIKrWANhZw7xmsmhJd6JFVi%2BmLflrj0jFv2JOi9%2F3lp14cyqja7HUrG9B4bxHI7YAmXMkWWO0n7Dr70x2ypm6E1f3Y%2FW52MB0DGPMsOi5oHgWfuD01P4IjwL0Fqi%2FgNxUbU8upXC85rCw5AajEB8zTr9ttDrPbM%2FNoNt0y4a5KZQTQC098oU2hBVvNslBOSXTsZoe56Y5dDvVxegS%2BH%2Flfb68bmPoWkdmbejSBNzQGE0exHma778cozCggSDKs8mRHiG9%2FEt1vSfVlocLHw1C7DIzsLOW2U98gvvmVWu509Gb2ktpCzKprZg2W5p6pG7%2BHyP5Jvb8KmN%2F%2BRRgusltIBux9p9e8pcbGIxtwBe8WPXg1W6AFD6rPCpqcw5o9GWEShBOgUPiPo0yGB72Qd6fwSEaB7cpZmiVSLjhU%2Bg2VjOImUKvOp9IcwarpCWlxvhoTKowiiISumzPj0nJf7IUtt4UXXCmSO1Aynj0XLBpWsXUW5cJclgEOUDOSdq5H5Cvh95500MV9XI7Kmy01L9GDA0BPm0EhsifUJUoehGLOSsPTf8rDPDNxIFVhkFen7%2BrGTHSwx5UYUPBN4dMYMObFisoGOqUBXnR0uczRDp8vgEulp4Ocd4QN0uk426pGjVvKycbxZIEer18DwOTIZkfLzM%2FRzfPqAyvK5kiH%2FrYokfvc0P96JTHcTJ6BL%2FT%2BltzgwhI6%2F0QKsvSZyu7V0g10WwWbOkMtpG%2B2xS78RvwCuVTeR8FPNrKy540HhTTf1Ix6zhVEgdxUA24mxCeOaox8vAqwY92CQFHCM9vaUoTn3SfaC8nWk9XOkbeu&X-Amz-Signature=b4c7239b1697a1346b5aae5bfbdc425a68830b5cf59603e92591b5ea254395bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

