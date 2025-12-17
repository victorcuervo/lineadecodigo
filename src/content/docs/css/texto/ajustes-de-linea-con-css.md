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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITSUI53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrROQgaM27zP9hUaO7YxBnmwhkOI1tdqYIh0JO8zw0FAiAFCwqXJM8oR8bcYh2XffD2bJKNsIUbt1StfKyfJjzUfir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMNvgHnvIi6Zir82iXKtwDTl4x6B91x3RspyY45l4RVtOK6Dd%2FNgeH33w6b7f%2FqI3wopSzB5U9qGWRFlxwcrGnFLoYYr1f61DRfCLT2twG2BnFyscTkdkONdDYPQCKSTOwc1Vp41i3Xz5u90WEFQVQpNvty%2FN4lBtPobSdWwVulq%2FUpTc%2BkitXmxLmhJpbxaBWQvWDB9Lqxuu864qlcxDolGM9tbVkzdFtupoEZ%2Bc%2Fo18J7uq642bub2gE2QQScjcyapeMm6hXS5JnmwD4RxkL79MSEuifZ5%2Fdem17RPLRTD5sL4pl1WufqQXxgR%2F%2F4z39IYlltdfaA7kvJ0YIl5QfD6my%2B5ZoiyXle7hMxtkAyKESJwrkfTEu%2Fol6oe%2BBI%2FLbzoAtXHraNGoGrd3cOV0s43Lo%2BHbwsqjfsEL%2BYaeFcfDjRa8Q29au5pHYlq2OEVwojhnms3%2FhEjFJUld3v%2FfzMxE6J9Y0hJG%2BDB8ZjGi7pZkO69dErHPhco9C6kMLKV7N8%2FJrxv4Zd1Zc441ITCvWR070Nb7bRnrX7wPjzIziIVhIfiSqCXugXlwWM%2BjZwlae1gxmFK14ab2ER3B0G3xoAiV9XHxYVQMyE37uC4l1FAosYZVrugQvyb2ZlNWl8ZTIYvlUXjtShloPakAwiumIygY6pgHNN%2B%2B4sqzt3ahbCg2Y17i%2BcfCkMkaS0fa5MWW4j7lZUFexBcKNTZKkVVK09oAxYZddRh9ODROU9VVd7Y8kyzUhSLOMm6JTrOixVMcfe%2BaBYrz8mDqlDcalLxwYBXUcwEPX2TjiNUf8DhJ3VZYE0Uph4oxeBRC4BoeMVahZ337AY%2BG1KcvXrl6ZEK6g8l%2B1%2F4dvX0QWFnlvly6p1EiZOlklTJPbN7gQ&X-Amz-Signature=f51c2ae19ca3fabb2abd6a32096314e49938133f866cf3db07bc7f9707c0b774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITSUI53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrROQgaM27zP9hUaO7YxBnmwhkOI1tdqYIh0JO8zw0FAiAFCwqXJM8oR8bcYh2XffD2bJKNsIUbt1StfKyfJjzUfir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMNvgHnvIi6Zir82iXKtwDTl4x6B91x3RspyY45l4RVtOK6Dd%2FNgeH33w6b7f%2FqI3wopSzB5U9qGWRFlxwcrGnFLoYYr1f61DRfCLT2twG2BnFyscTkdkONdDYPQCKSTOwc1Vp41i3Xz5u90WEFQVQpNvty%2FN4lBtPobSdWwVulq%2FUpTc%2BkitXmxLmhJpbxaBWQvWDB9Lqxuu864qlcxDolGM9tbVkzdFtupoEZ%2Bc%2Fo18J7uq642bub2gE2QQScjcyapeMm6hXS5JnmwD4RxkL79MSEuifZ5%2Fdem17RPLRTD5sL4pl1WufqQXxgR%2F%2F4z39IYlltdfaA7kvJ0YIl5QfD6my%2B5ZoiyXle7hMxtkAyKESJwrkfTEu%2Fol6oe%2BBI%2FLbzoAtXHraNGoGrd3cOV0s43Lo%2BHbwsqjfsEL%2BYaeFcfDjRa8Q29au5pHYlq2OEVwojhnms3%2FhEjFJUld3v%2FfzMxE6J9Y0hJG%2BDB8ZjGi7pZkO69dErHPhco9C6kMLKV7N8%2FJrxv4Zd1Zc441ITCvWR070Nb7bRnrX7wPjzIziIVhIfiSqCXugXlwWM%2BjZwlae1gxmFK14ab2ER3B0G3xoAiV9XHxYVQMyE37uC4l1FAosYZVrugQvyb2ZlNWl8ZTIYvlUXjtShloPakAwiumIygY6pgHNN%2B%2B4sqzt3ahbCg2Y17i%2BcfCkMkaS0fa5MWW4j7lZUFexBcKNTZKkVVK09oAxYZddRh9ODROU9VVd7Y8kyzUhSLOMm6JTrOixVMcfe%2BaBYrz8mDqlDcalLxwYBXUcwEPX2TjiNUf8DhJ3VZYE0Uph4oxeBRC4BoeMVahZ337AY%2BG1KcvXrl6ZEK6g8l%2B1%2F4dvX0QWFnlvly6p1EiZOlklTJPbN7gQ&X-Amz-Signature=ad99c41107980d265a1bd4e572d104647ea6615429e055e8d38f294990502505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

