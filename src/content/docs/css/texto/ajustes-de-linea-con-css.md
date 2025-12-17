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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA5UCPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2B1bkeUVgbM%2BbB4%2FzuhlJVrDZB2HnbKYCaOUjfXUJywIgPmFvPkeivF505aVZ07DV%2BzOY1NC0zNv%2BmKBtHwnofCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9MyD67ZSyf5aer1SrcA%2Bno2oLC2mbMKmPQQgAlUJ2gJBcvW3%2FFKiW0Z1VeraTOLHdrzs4H0veAwmr3%2F1zYW3eSKUp9atjG%2FVALEvHhIR7gW9Pst2kijrRm05b2rGSEghUnHTTdby%2Fs9%2BS81nBS3dI82DkT9rahf4HmTtyaSoMQYxpOR5dn3gMTJBjCPep6qb%2BJ1iYhScbQyvtiFA2tgphFMt%2BrxliOFgdR4cTD9s8f82obN59Zg4oOz1o%2F35mM5Yl%2FYegPXgJ9qdbXkO80aqDSp0T1YHq27OeD0y9rWra8DUu%2BegbS3r2gtwfr1neCnwheWsje0Aec%2BQW4%2F679kDrtwJWJ%2B4oEg%2BOPOQr6Qu214oYNUvLgp5XdeSq5tijEar33Ngn9doqFYOBMKXqBTAse3aMF1JnQ3iczayaaXptREDZ4GHPA%2Fpzn460xvVOEePKzIjqDUppB%2BL3QyrZ8EKGZ3ILt2KTQ0PFuDoG8bu%2FHGwiApsHdQRwK83EMYTopeu5hZJy5ak4rjAOPt%2FbzZ2l6NGUhU2%2FAEHLSwoEQ1H%2FqGWTb9gGfH4bDT%2BpOFH%2FrtTU2X8MDsERx52aO2iWrMAv8MSIXEdBJUG1no7Dyi34oUD4PVi9oJdMeV%2FsXcg9khwElL7StDmqm1DBUMP%2Bfi8oGOqUBLKJ73PjHmaZh9ZW%2Fe%2Fuk4Dms29n8FDzMHy5wyxPNdiipR5t3EoTXB2Yg%2FzsUZt2n6XRgXTq1j%2F4Ca8eOweYie3HlVoHyb%2FgshRbwKI8q%2BCtCoy%2Fr9GYYnkwjyXHXNepJ%2FdUBAZWNe4TU2k3%2BCZ6TeLpsk8MYw4eyAB1Df9N1V0%2BYWIYr3rVBbnMdOFAvgAbeiyXMApbOfewmt54T7lbE%2BVfcVuvt&X-Amz-Signature=05e0a45db17dbfedea91ad6f15289e076070cbc87c0f20d31a431fe25de48f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA5UCPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2B1bkeUVgbM%2BbB4%2FzuhlJVrDZB2HnbKYCaOUjfXUJywIgPmFvPkeivF505aVZ07DV%2BzOY1NC0zNv%2BmKBtHwnofCQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9MyD67ZSyf5aer1SrcA%2Bno2oLC2mbMKmPQQgAlUJ2gJBcvW3%2FFKiW0Z1VeraTOLHdrzs4H0veAwmr3%2F1zYW3eSKUp9atjG%2FVALEvHhIR7gW9Pst2kijrRm05b2rGSEghUnHTTdby%2Fs9%2BS81nBS3dI82DkT9rahf4HmTtyaSoMQYxpOR5dn3gMTJBjCPep6qb%2BJ1iYhScbQyvtiFA2tgphFMt%2BrxliOFgdR4cTD9s8f82obN59Zg4oOz1o%2F35mM5Yl%2FYegPXgJ9qdbXkO80aqDSp0T1YHq27OeD0y9rWra8DUu%2BegbS3r2gtwfr1neCnwheWsje0Aec%2BQW4%2F679kDrtwJWJ%2B4oEg%2BOPOQr6Qu214oYNUvLgp5XdeSq5tijEar33Ngn9doqFYOBMKXqBTAse3aMF1JnQ3iczayaaXptREDZ4GHPA%2Fpzn460xvVOEePKzIjqDUppB%2BL3QyrZ8EKGZ3ILt2KTQ0PFuDoG8bu%2FHGwiApsHdQRwK83EMYTopeu5hZJy5ak4rjAOPt%2FbzZ2l6NGUhU2%2FAEHLSwoEQ1H%2FqGWTb9gGfH4bDT%2BpOFH%2FrtTU2X8MDsERx52aO2iWrMAv8MSIXEdBJUG1no7Dyi34oUD4PVi9oJdMeV%2FsXcg9khwElL7StDmqm1DBUMP%2Bfi8oGOqUBLKJ73PjHmaZh9ZW%2Fe%2Fuk4Dms29n8FDzMHy5wyxPNdiipR5t3EoTXB2Yg%2FzsUZt2n6XRgXTq1j%2F4Ca8eOweYie3HlVoHyb%2FgshRbwKI8q%2BCtCoy%2Fr9GYYnkwjyXHXNepJ%2FdUBAZWNe4TU2k3%2BCZ6TeLpsk8MYw4eyAB1Df9N1V0%2BYWIYr3rVBbnMdOFAvgAbeiyXMApbOfewmt54T7lbE%2BVfcVuvt&X-Amz-Signature=131e5fd5b84214ec82043809bc72d30f45dee6eb7c005f6bd3f9b973bcf7293b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

