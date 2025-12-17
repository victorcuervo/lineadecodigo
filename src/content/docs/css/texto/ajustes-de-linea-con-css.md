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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6PX7JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2QISsUCVd%2BR8ZE1xsDFoO%2BJ%2BKoNS8a7N7Aps0Pv2qgIgPgEuUESoMjZ12NESP3eJj2BTW2vOuHZrI81wh1sUFJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2F7pNMTTf%2FXiHRuKircA59RtxKmlEfCSlr3GCUk9met2Auu7OrQgS8FVBAAYYQuI9%2F3njWs0xHpSJh6h49EuGF%2FSMaN05lTHP05JE5cZXMQsbZschBxDGV90JRD8WZFRjrSrINa1L8FbSfmsKfsdWkhHcsw71Y1%2BzZJw5qppTUrv4jQnN7%2F250NNPggNVgnHGXSb9OzGjSyfOtpSi%2FyOEJc8i9z%2B193DWZD1CZkcjzTtNIXOKE8uLMJPd%2BNZMf4KCnfEvc8XQ9bkqVO0q9urcCAu8lqcZWvv4Wln9Khc3Lhw7YgG2rGVbVNHKpFZLyxktMhQ0AEOA8DMhXIxEq05kk3GipaF5FU4cjIQF9ibA1i0Vx8fe8EK4JX%2BSc7rIAvh9HvQdu3QFnB2nS%2FbYvyvjtrjvRj8qauEYHGptrNm1i3JGVachRNOuPeeYfHwa4FgbcTtwscRrTfmCpAo06H5mwJFKYou0COP2vExBOqq0EOfKI91LbXSRbTTpfxlbLcH4yb7uWlAmFhlvp8nFgFV%2FHypi7N6Tx5uYml9zIC0cCJJ%2FEN9OWp1WxCoZhMTM12OAsqgqFYej5yaB2LMm47wnYPhaP%2BHabTcxBHrZa4pJK5b6xaCsIDtO%2Fr0TWmfYthn1iO%2FwJTCsjlYk%2BpMOWei8oGOqUBPJWoWl8uJK%2FEx6gIyJvRl%2FuUOVQZrOoLfrOG92YeID8UCDPs63%2F9hFz%2FL1QzDXszAB5iyT1nz8%2BtxSi186SDOz8I759TwiHgi8K3ppNukB4Wzz2jxNo1q8Qm3NjdHOmkChvAfYX5ci2RdHXIzP0RVO6sn2DaZS5HDTBTA%2BbQsBjjMDjGrunMR%2B05hJy3j%2F%2BrNqzJUGe%2BKbs5Rj9IP4YBGqIuT3Yr&X-Amz-Signature=321ff7ca28a444a6fcad28034d5c7f27ca97308048862e10023690ac9431f27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6PX7JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B2QISsUCVd%2BR8ZE1xsDFoO%2BJ%2BKoNS8a7N7Aps0Pv2qgIgPgEuUESoMjZ12NESP3eJj2BTW2vOuHZrI81wh1sUFJIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2F7pNMTTf%2FXiHRuKircA59RtxKmlEfCSlr3GCUk9met2Auu7OrQgS8FVBAAYYQuI9%2F3njWs0xHpSJh6h49EuGF%2FSMaN05lTHP05JE5cZXMQsbZschBxDGV90JRD8WZFRjrSrINa1L8FbSfmsKfsdWkhHcsw71Y1%2BzZJw5qppTUrv4jQnN7%2F250NNPggNVgnHGXSb9OzGjSyfOtpSi%2FyOEJc8i9z%2B193DWZD1CZkcjzTtNIXOKE8uLMJPd%2BNZMf4KCnfEvc8XQ9bkqVO0q9urcCAu8lqcZWvv4Wln9Khc3Lhw7YgG2rGVbVNHKpFZLyxktMhQ0AEOA8DMhXIxEq05kk3GipaF5FU4cjIQF9ibA1i0Vx8fe8EK4JX%2BSc7rIAvh9HvQdu3QFnB2nS%2FbYvyvjtrjvRj8qauEYHGptrNm1i3JGVachRNOuPeeYfHwa4FgbcTtwscRrTfmCpAo06H5mwJFKYou0COP2vExBOqq0EOfKI91LbXSRbTTpfxlbLcH4yb7uWlAmFhlvp8nFgFV%2FHypi7N6Tx5uYml9zIC0cCJJ%2FEN9OWp1WxCoZhMTM12OAsqgqFYej5yaB2LMm47wnYPhaP%2BHabTcxBHrZa4pJK5b6xaCsIDtO%2Fr0TWmfYthn1iO%2FwJTCsjlYk%2BpMOWei8oGOqUBPJWoWl8uJK%2FEx6gIyJvRl%2FuUOVQZrOoLfrOG92YeID8UCDPs63%2F9hFz%2FL1QzDXszAB5iyT1nz8%2BtxSi186SDOz8I759TwiHgi8K3ppNukB4Wzz2jxNo1q8Qm3NjdHOmkChvAfYX5ci2RdHXIzP0RVO6sn2DaZS5HDTBTA%2BbQsBjjMDjGrunMR%2B05hJy3j%2F%2BrNqzJUGe%2BKbs5Rj9IP4YBGqIuT3Yr&X-Amz-Signature=833de50be3e2a7152dbc143055516c968f6c739d1c1c230acca9350ec6f31673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

