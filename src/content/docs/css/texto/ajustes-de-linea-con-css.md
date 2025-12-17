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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67ACN36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2uqUU3ZkH3yTX%2FH7rA%2FZacj3JkR8sT%2F997xOXfAna6AiEA4QGCE1jT9zmyx%2FAd9wslv6bdkbhy9xMX7%2Fo6PvO%2FyPIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCiJHB%2Br3uVd1Jj3jyrcA2dIhKXCscbxAZ3oUMCBB2aLk1DeMWC50OmN0u7%2FJ5%2Fa8mlSxRKkYY%2F8dGCTkyf8wwIoN10y5gawGjUcLsMmzNrrJSTSaN83rhIHiYPY69Q13sXIOJxP6cFiUDG5xZUBaqDE3AV36T13e5lcno%2BTd7B17X1hgbWnkQOB9R4Ow4k6jRt9ol6nw0dHxTjbw7L%2B6JIwGWNFnwzsWoYw454awC4UFGRPoxbeBOpOMXuuDfa2vPjXrJ3Qw0NFN%2FuWyuDVpKjfgjbXDh4EqMsUz2vhj8P%2Bsmdc9nmEBKc%2FY0rokx8Vp2UnFSj9Nt2gLU%2F4seJrU8GhjGiixNes4t6%2BKeNez%2F6h4WdxvtLaZVFtgjl1y52nGeNd9SxQtNOTHWMamrbT7ijEj%2F6XYkesT3UZ8panDlJzqGP1r%2FSOoafqprP3qA1zhXuYx6%2FH8ORiqUAo6ti6O6QO6wUwBiXdCX8rQ%2B497aSB04eJjjtjMxgEkI5IiMoXATC76vDaFsrIS%2BM3dcARL3jsoy9IiU3qCxWeJC66OUC%2FC7hn8kSTjLueEwKWJ%2F1i8nAxbaqM7I2D4PVMsxq0lNIzS%2FEC5P1jevfNWepmqWi7w%2F4s8ba6pCYywahl9OGfWXN35aaO6v1lIwoAMJC3icoGOqUBrlajW1Sa7Ec45AXyMKsrMVAOxO5lTbaXdXSs8u%2B6ftiGUTBer%2FJHk2kjhsp3FKWXG0F99l5NoD5u0Z0CH0CEyOKR95Dc1YcOAzk7hdZJP0apFFzIRNi8VQZVN9CQeDPR8xvbj36nWZcfCYO61EndGWg32MZU647dTpFIpjVzcK%2BNgMqqdRyvFaDxfRIByvpvFSl6mGXr76%2BxcoxMGFePqDBr%2FCo8&X-Amz-Signature=17814116ba939cc1ad8a190d2e2dea69ebf6a552451568c316673813c122554d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67ACN36%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2uqUU3ZkH3yTX%2FH7rA%2FZacj3JkR8sT%2F997xOXfAna6AiEA4QGCE1jT9zmyx%2FAd9wslv6bdkbhy9xMX7%2Fo6PvO%2FyPIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCiJHB%2Br3uVd1Jj3jyrcA2dIhKXCscbxAZ3oUMCBB2aLk1DeMWC50OmN0u7%2FJ5%2Fa8mlSxRKkYY%2F8dGCTkyf8wwIoN10y5gawGjUcLsMmzNrrJSTSaN83rhIHiYPY69Q13sXIOJxP6cFiUDG5xZUBaqDE3AV36T13e5lcno%2BTd7B17X1hgbWnkQOB9R4Ow4k6jRt9ol6nw0dHxTjbw7L%2B6JIwGWNFnwzsWoYw454awC4UFGRPoxbeBOpOMXuuDfa2vPjXrJ3Qw0NFN%2FuWyuDVpKjfgjbXDh4EqMsUz2vhj8P%2Bsmdc9nmEBKc%2FY0rokx8Vp2UnFSj9Nt2gLU%2F4seJrU8GhjGiixNes4t6%2BKeNez%2F6h4WdxvtLaZVFtgjl1y52nGeNd9SxQtNOTHWMamrbT7ijEj%2F6XYkesT3UZ8panDlJzqGP1r%2FSOoafqprP3qA1zhXuYx6%2FH8ORiqUAo6ti6O6QO6wUwBiXdCX8rQ%2B497aSB04eJjjtjMxgEkI5IiMoXATC76vDaFsrIS%2BM3dcARL3jsoy9IiU3qCxWeJC66OUC%2FC7hn8kSTjLueEwKWJ%2F1i8nAxbaqM7I2D4PVMsxq0lNIzS%2FEC5P1jevfNWepmqWi7w%2F4s8ba6pCYywahl9OGfWXN35aaO6v1lIwoAMJC3icoGOqUBrlajW1Sa7Ec45AXyMKsrMVAOxO5lTbaXdXSs8u%2B6ftiGUTBer%2FJHk2kjhsp3FKWXG0F99l5NoD5u0Z0CH0CEyOKR95Dc1YcOAzk7hdZJP0apFFzIRNi8VQZVN9CQeDPR8xvbj36nWZcfCYO61EndGWg32MZU647dTpFIpjVzcK%2BNgMqqdRyvFaDxfRIByvpvFSl6mGXr76%2BxcoxMGFePqDBr%2FCo8&X-Amz-Signature=90afd968083088e3658614567051e33fe08ea570ede9d74086c4d35b3b312094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

