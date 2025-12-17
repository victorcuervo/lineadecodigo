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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLYRLSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi79lSuKmZTJg87aLTaBPyxXCsuQUMrvaGnOeRMgI5%2BAIhALRi91QgRkK1zPflKPLM%2F7y8vKAg7TVjaHVQUKWMe%2Bo2Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwUZdt6X01XcOEtjVwq3ANe6LQlTIBNAU1t2fSZQVjqd9hcuv9%2BPs%2FXFLdyq8FXYttee4wR%2FzFlNURQjDwzrzZ8GUaF1mnjVcCuvlgfeIbIfuhDaeSaZs2tGADzOQDK1ET1yjzvnV3wTcd8lZmSAzegXjJd6xsoe8AGVZDuHK2fE9U%2FmKBHNLpXJpUg%2BoBZODvU%2F4VVCA%2FS%2FUat1TPmG9AvCY8eJ3bQAiXzZWO2xLfIBTwu23vvCBCAVqvCThaW5Rp9l0xvzh4UujX%2Ff5zWpQubwS913rrPaUQqS9274lL2fuB%2BHMPh%2F0prHAhfdo97r8%2FPXsQhhNlC0FEfgL5ry6Tkpu4gkNlzr%2FjqRbFHsSGkk0sKPLRHL3f64V8RSrvhI7HQV8S82xjfKhgtYGccgCbGRd5kWfPOCrHZ6oeeyhOlx8MO08Rm1ntgswS8qLyijmY0Rc56OW5BwucWkOP6ed2C3d5Kr9ChpiBHsaxSAxMT29cO9KUAk5W356RgEZYywMpCBw0Lb6sA19OqRiRkFUpJgCqUr4JBwPA65nntdNXcgLIZ6%2F42DCPCrJ0RCNroViRrMovNaNa2AOu3IF4oKDZmhdC4XkgHxV0ulBdmP0u04lJUFkU8rf5fwt4LfXFKph8eAAbOFOBx7QB7iDDrxYrKBjqkATGLDIuuJlLqvRdM2I2nbQV0TWTtD1gIC6T%2FWrhxxcAwzOkocpFR98qfuucz4%2B5xZHSJf8Pd6W3TaZni4NT44e46mXPXDAtnSg4umrcKLp7O8vhesWqvz%2B%2B1DN5y58zWRrHpgrae0Ccraa05QMAc2YRfN4ZcndImbKDog7NKfzEUj9OGZ%2BJYNApnwXf1xta2DsbKvbhLzaH8jO7CyckPbrVWaJ9P&X-Amz-Signature=e2d5a4f53c4c179486791a456499a3ccd395a87b7a6b9a0f3d32c3daf0d4c097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLYRLSL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi79lSuKmZTJg87aLTaBPyxXCsuQUMrvaGnOeRMgI5%2BAIhALRi91QgRkK1zPflKPLM%2F7y8vKAg7TVjaHVQUKWMe%2Bo2Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwUZdt6X01XcOEtjVwq3ANe6LQlTIBNAU1t2fSZQVjqd9hcuv9%2BPs%2FXFLdyq8FXYttee4wR%2FzFlNURQjDwzrzZ8GUaF1mnjVcCuvlgfeIbIfuhDaeSaZs2tGADzOQDK1ET1yjzvnV3wTcd8lZmSAzegXjJd6xsoe8AGVZDuHK2fE9U%2FmKBHNLpXJpUg%2BoBZODvU%2F4VVCA%2FS%2FUat1TPmG9AvCY8eJ3bQAiXzZWO2xLfIBTwu23vvCBCAVqvCThaW5Rp9l0xvzh4UujX%2Ff5zWpQubwS913rrPaUQqS9274lL2fuB%2BHMPh%2F0prHAhfdo97r8%2FPXsQhhNlC0FEfgL5ry6Tkpu4gkNlzr%2FjqRbFHsSGkk0sKPLRHL3f64V8RSrvhI7HQV8S82xjfKhgtYGccgCbGRd5kWfPOCrHZ6oeeyhOlx8MO08Rm1ntgswS8qLyijmY0Rc56OW5BwucWkOP6ed2C3d5Kr9ChpiBHsaxSAxMT29cO9KUAk5W356RgEZYywMpCBw0Lb6sA19OqRiRkFUpJgCqUr4JBwPA65nntdNXcgLIZ6%2F42DCPCrJ0RCNroViRrMovNaNa2AOu3IF4oKDZmhdC4XkgHxV0ulBdmP0u04lJUFkU8rf5fwt4LfXFKph8eAAbOFOBx7QB7iDDrxYrKBjqkATGLDIuuJlLqvRdM2I2nbQV0TWTtD1gIC6T%2FWrhxxcAwzOkocpFR98qfuucz4%2B5xZHSJf8Pd6W3TaZni4NT44e46mXPXDAtnSg4umrcKLp7O8vhesWqvz%2B%2B1DN5y58zWRrHpgrae0Ccraa05QMAc2YRfN4ZcndImbKDog7NKfzEUj9OGZ%2BJYNApnwXf1xta2DsbKvbhLzaH8jO7CyckPbrVWaJ9P&X-Amz-Signature=03953f1f62969521424a77ff9a21377b9105973fd5a48bbc515231cbfc9d5336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

