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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CA74S2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR5Qs9RWuo82wJpPDCR6oiBQTvrUEvcU%2Fa4zKwcpdzBAIhANWkkFiSTxHH9X8rqGdY16yP2l7lBoadc3yArHnlvFjBKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHnT46drwPX%2F%2B%2BfVQq3ANUkz%2F6YvFh7g2GNfdfXH8jKAnfgaPVqwS44cjsGdquSDXlXC1Gr0yQ2qJKhVnCqIhnQmL1KAvL4O7LMBK%2By3K2YTrs3RxDEcx4VUB2gXrN4xTgWhlZ%2Fr96G%2BSz4er3w%2BQWCrwzqpyRXNgOPPZBK4BSQ4bC2N0KPAp1IN0Q%2B7SuLMK8gsLhwMHOjQEDIWnfEXPFMNdx4WSgX8LzCFSrQkATkg0o3ek1ylyD0%2BkQ9CzdGf9waKHWg8sUsAps%2F4FowFG7055DUB7rgBz%2FwxJRpzNmKhLR3FyuQOSy%2F%2FWy%2B8pbOB9YiMzAIajZUIc4rKKF3j8qUgRvZzcYpRD%2F0%2BUMsPtxuD5O9aWsdmROfW0%2B5ISnj29xm3eWwerUXhmW7nmhe7foRtpUO3gP%2FtsVjLVQMd2%2B1VD%2FHvi4ggbXNA0%2FPmJk9NtIn7MFdCKjzy1A3bLl9YKFCChA266R8Ftzg2L6tC7ixVCBNgDXlTHzvDnzwNBYGXnLctwMjElgpnmYdTurce4LSnwz5AXI4MaOJ%2FmYLRv50VH0dnUNJWmlJEd8gIOPWw3s9opDxS7DWuzZisCssy1wyw%2BNoBKSdBni1ntLJxom4NVanLyy8SvC0%2BR4mtWC8TMfkEXHv%2FhoMKtzqjC874nKBjqkAXZNRjkNg6KEESMhWgcBeprx7475oEHoWYuMu0IC0mjiW4lKiOe4fMTnfXpUd6UwwO5%2BiVQXQQ7oGgpWMfU%2FxDotu4YVVjshDpzjtH%2FopdlFH%2B22tYLGsLX%2FMiJtuyxo6COF0ukou4tY6U%2Fj7oIOzwkXs7LMD24atfFn7Rsw7dgnE56fEDnRx%2BN0Duq7PoJlH9Xm%2FaTEfcXgpwCsj0Vy9doKHJzA&X-Amz-Signature=21b99366f0cee179d5107331c7c48e9fb3f0abf3e9bb906e2de5fc7a09b5389e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CA74S2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR5Qs9RWuo82wJpPDCR6oiBQTvrUEvcU%2Fa4zKwcpdzBAIhANWkkFiSTxHH9X8rqGdY16yP2l7lBoadc3yArHnlvFjBKv8DCHsQABoMNjM3NDIzMTgzODA1IgzHnT46drwPX%2F%2B%2BfVQq3ANUkz%2F6YvFh7g2GNfdfXH8jKAnfgaPVqwS44cjsGdquSDXlXC1Gr0yQ2qJKhVnCqIhnQmL1KAvL4O7LMBK%2By3K2YTrs3RxDEcx4VUB2gXrN4xTgWhlZ%2Fr96G%2BSz4er3w%2BQWCrwzqpyRXNgOPPZBK4BSQ4bC2N0KPAp1IN0Q%2B7SuLMK8gsLhwMHOjQEDIWnfEXPFMNdx4WSgX8LzCFSrQkATkg0o3ek1ylyD0%2BkQ9CzdGf9waKHWg8sUsAps%2F4FowFG7055DUB7rgBz%2FwxJRpzNmKhLR3FyuQOSy%2F%2FWy%2B8pbOB9YiMzAIajZUIc4rKKF3j8qUgRvZzcYpRD%2F0%2BUMsPtxuD5O9aWsdmROfW0%2B5ISnj29xm3eWwerUXhmW7nmhe7foRtpUO3gP%2FtsVjLVQMd2%2B1VD%2FHvi4ggbXNA0%2FPmJk9NtIn7MFdCKjzy1A3bLl9YKFCChA266R8Ftzg2L6tC7ixVCBNgDXlTHzvDnzwNBYGXnLctwMjElgpnmYdTurce4LSnwz5AXI4MaOJ%2FmYLRv50VH0dnUNJWmlJEd8gIOPWw3s9opDxS7DWuzZisCssy1wyw%2BNoBKSdBni1ntLJxom4NVanLyy8SvC0%2BR4mtWC8TMfkEXHv%2FhoMKtzqjC874nKBjqkAXZNRjkNg6KEESMhWgcBeprx7475oEHoWYuMu0IC0mjiW4lKiOe4fMTnfXpUd6UwwO5%2BiVQXQQ7oGgpWMfU%2FxDotu4YVVjshDpzjtH%2FopdlFH%2B22tYLGsLX%2FMiJtuyxo6COF0ukou4tY6U%2Fj7oIOzwkXs7LMD24atfFn7Rsw7dgnE56fEDnRx%2BN0Duq7PoJlH9Xm%2FaTEfcXgpwCsj0Vy9doKHJzA&X-Amz-Signature=a4806f3aecc2df8246279320b144b47732db713e11a391822db4544e41b00b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

