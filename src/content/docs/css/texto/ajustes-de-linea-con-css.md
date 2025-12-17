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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANVLAJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUZ58oIGGb5c%2FaBZtk70jx3aurHywaMiCMltjh8UTlUAiBCLGFaHcSUtqrJ1ggmtzltGQR40HhRUih5lrrXtaEqSir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh1w3piMfJBs9spTfKtwDmNDj167AvflFYrU7FlZq82IIcujaH%2FNFDqY%2FIq1tavDd4otZoHKzxgjP4JnVcbfC50CJdzxe9CxAREuy8UbrM8PIASHobW5Uuu%2BDAnrqe3ScdofrEhvKCpDJ6bTI8qQV299sYRyU9%2FAzOkkbM4eE2aS9MlBRHGus%2BzhbUUsiZgaglGjUx77DFdn7S5ioj4OL%2FXYnodPhzXQgoOTltE%2B9k8Qq7yWpXobQ33YXGarRrKZe9M48jTnc%2BR6oI%2BVSbaRhm%2FA9jsj2ejZwqs7v6gN2MI8ZMP5jxNBUJlLNvFk7LWW3%2FDA3bEKbBVabn%2BC7BSyz0%2Bmt1iIYW3FLNyFYRGLkQhnYaLAeMpuuA0xmMMIWxd5U5ELsolO%2FUE8caYCQ0aW9W1Q31llUirzEctfk%2F4Yi0Pe7ANNswlE2pQecO3c0bDwt5ntyPRp0e3zvEbR8Jej4WirL5P17JARMjLI8aUEPBReRZe8prSvG%2BBlc1X9SJRjA11sNzHNb1EUT%2FrdEiUHh8bhQ%2B9K3MWlFzMrNsH2L0TcFROvtJe2gNwe3igu5F82iezW96tNcp6y3%2BefbuqrXUqlPh2M4O8ts6NgSIccyFp3Hgn%2F5CgJ%2BHh%2BtOUUfh4oALAk4a8WfxoQpmx8wz%2FuHygY6pgEtdS0wBul7Tez32Me0OSdT8TdqFeZKd9grm4QdgvHZ3xsiCowV5IjDRyP5ibXre2skhmQ0rGP05S5dAMVCSw0TUekqtrKT1QL%2Ftsv%2FDnR5Mhisl9hK4OeYIOjVGqTvCE1LAfdSuUplmgNMkLHb%2BQ3Fh3CmBb%2FZGvKzAJF6r7HdzCMXsqrmkPU25dp1MzGyn5OZHv1VaK9dig6zORITyV2yNw37sEDG&X-Amz-Signature=da4dccc8e58d0122fcb9598fb22415fd3ed62c530a7b753c0771b3c0c945dbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANVLAJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUZ58oIGGb5c%2FaBZtk70jx3aurHywaMiCMltjh8UTlUAiBCLGFaHcSUtqrJ1ggmtzltGQR40HhRUih5lrrXtaEqSir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh1w3piMfJBs9spTfKtwDmNDj167AvflFYrU7FlZq82IIcujaH%2FNFDqY%2FIq1tavDd4otZoHKzxgjP4JnVcbfC50CJdzxe9CxAREuy8UbrM8PIASHobW5Uuu%2BDAnrqe3ScdofrEhvKCpDJ6bTI8qQV299sYRyU9%2FAzOkkbM4eE2aS9MlBRHGus%2BzhbUUsiZgaglGjUx77DFdn7S5ioj4OL%2FXYnodPhzXQgoOTltE%2B9k8Qq7yWpXobQ33YXGarRrKZe9M48jTnc%2BR6oI%2BVSbaRhm%2FA9jsj2ejZwqs7v6gN2MI8ZMP5jxNBUJlLNvFk7LWW3%2FDA3bEKbBVabn%2BC7BSyz0%2Bmt1iIYW3FLNyFYRGLkQhnYaLAeMpuuA0xmMMIWxd5U5ELsolO%2FUE8caYCQ0aW9W1Q31llUirzEctfk%2F4Yi0Pe7ANNswlE2pQecO3c0bDwt5ntyPRp0e3zvEbR8Jej4WirL5P17JARMjLI8aUEPBReRZe8prSvG%2BBlc1X9SJRjA11sNzHNb1EUT%2FrdEiUHh8bhQ%2B9K3MWlFzMrNsH2L0TcFROvtJe2gNwe3igu5F82iezW96tNcp6y3%2BefbuqrXUqlPh2M4O8ts6NgSIccyFp3Hgn%2F5CgJ%2BHh%2BtOUUfh4oALAk4a8WfxoQpmx8wz%2FuHygY6pgEtdS0wBul7Tez32Me0OSdT8TdqFeZKd9grm4QdgvHZ3xsiCowV5IjDRyP5ibXre2skhmQ0rGP05S5dAMVCSw0TUekqtrKT1QL%2Ftsv%2FDnR5Mhisl9hK4OeYIOjVGqTvCE1LAfdSuUplmgNMkLHb%2BQ3Fh3CmBb%2FZGvKzAJF6r7HdzCMXsqrmkPU25dp1MzGyn5OZHv1VaK9dig6zORITyV2yNw37sEDG&X-Amz-Signature=ea958f59e73755dc691bd92e8b4b2d8395e7bf71f8db51dea379a1607c553432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

