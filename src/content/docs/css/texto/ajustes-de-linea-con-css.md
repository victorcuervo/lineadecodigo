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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7LHMDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWthzjQyZ1wbEQNpwVbmv5uQlCFrZj3Fi88XsQZJ6sFAiEAmS2yCgjVmP8Bp0UoWxzAXYMCH5ShqG084THCecNoqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjqK3GOBS17SDhKAyrcAyZTmb5cIk9VBA3CJYPVRk7vMlZYzL1E%2FLYnYdxLShh5InkTyAMgodclY6MmjBI18ddW8nxWt71EEPzmCEwG0yz1B3uUECyKDQ%2BDjAak4%2FEejL%2FcRwlU4FJ4AMpkc%2BXN5H%2Fy72nqEBUSDzAS%2FqVi0I5RTUAEK5jC3s%2BgZPjRq6G7DRcDwhGomQv5oUusDbCuMiqQNUrIChj4WVqh07TN9TCLWVjVUL%2FCDjCLHC6iLl%2FwO7%2Fzq0B%2BMjcM4mn%2Fr79zl1qWT692DBhvbU2lKU%2BcGpk3NXrYP0UDxxeJ%2B20NG92L4iXXmiOFT4%2BK15J1V83kYvsthsT7ZYcDEINEf8tY7j16dKdYGCLsG93G5IamXOKE1%2B5iqPH%2FwfioDsaxuEkgRACff2XwazkcUQ2F7EuDTJ94GnlhYSSlec47f8DkR0puvzAj0E8KHAFTUvOPE79K3WBfxZ%2FntJkPvAJC3lXdpw%2F4AJ6oMB2%2BC3Fb2A0Gw2pxhEkX%2FgbyX%2BsZ6v%2F6Y1CI4eOOVkCytn7C4NqrnjzCd6EXcaLva1D5MFXDyXfU5wnCAei7Wae02KdH9r86FIaOBtOG9e5t5M1rVqwn1HB2WCwnJ4NzGvraLIGCdLvkF6rxgaD%2BQZ8XEIea%2B8ufMLygi8oGOqUBgv%2B4BDLtrkiTKzFifrkKOiOgmNWCG9j8RsnUb4q2JUeqFl%2BoZcmk72b5GTzlHoLu6NR9TKs7Yy8nWg27FeWW6HCKdwuaUU1v%2F4bmQ31va6vePAfZgJtU3pNBuXVSWC%2F5SJUBjidOTa%2BbLaVU01d9TKVy9dRNz%2F1PpkxvImOyhLkjhs61NWlRv19HUFjYGezIkZq6tU7tghebcGy51gwt11%2FUlkvd&X-Amz-Signature=a603d3f50cd5bdcd408844d961673f49618a9b04e6851bd5e15e4d69cd1e60a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7LHMDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWthzjQyZ1wbEQNpwVbmv5uQlCFrZj3Fi88XsQZJ6sFAiEAmS2yCgjVmP8Bp0UoWxzAXYMCH5ShqG084THCecNoqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjqK3GOBS17SDhKAyrcAyZTmb5cIk9VBA3CJYPVRk7vMlZYzL1E%2FLYnYdxLShh5InkTyAMgodclY6MmjBI18ddW8nxWt71EEPzmCEwG0yz1B3uUECyKDQ%2BDjAak4%2FEejL%2FcRwlU4FJ4AMpkc%2BXN5H%2Fy72nqEBUSDzAS%2FqVi0I5RTUAEK5jC3s%2BgZPjRq6G7DRcDwhGomQv5oUusDbCuMiqQNUrIChj4WVqh07TN9TCLWVjVUL%2FCDjCLHC6iLl%2FwO7%2Fzq0B%2BMjcM4mn%2Fr79zl1qWT692DBhvbU2lKU%2BcGpk3NXrYP0UDxxeJ%2B20NG92L4iXXmiOFT4%2BK15J1V83kYvsthsT7ZYcDEINEf8tY7j16dKdYGCLsG93G5IamXOKE1%2B5iqPH%2FwfioDsaxuEkgRACff2XwazkcUQ2F7EuDTJ94GnlhYSSlec47f8DkR0puvzAj0E8KHAFTUvOPE79K3WBfxZ%2FntJkPvAJC3lXdpw%2F4AJ6oMB2%2BC3Fb2A0Gw2pxhEkX%2FgbyX%2BsZ6v%2F6Y1CI4eOOVkCytn7C4NqrnjzCd6EXcaLva1D5MFXDyXfU5wnCAei7Wae02KdH9r86FIaOBtOG9e5t5M1rVqwn1HB2WCwnJ4NzGvraLIGCdLvkF6rxgaD%2BQZ8XEIea%2B8ufMLygi8oGOqUBgv%2B4BDLtrkiTKzFifrkKOiOgmNWCG9j8RsnUb4q2JUeqFl%2BoZcmk72b5GTzlHoLu6NR9TKs7Yy8nWg27FeWW6HCKdwuaUU1v%2F4bmQ31va6vePAfZgJtU3pNBuXVSWC%2F5SJUBjidOTa%2BbLaVU01d9TKVy9dRNz%2F1PpkxvImOyhLkjhs61NWlRv19HUFjYGezIkZq6tU7tghebcGy51gwt11%2FUlkvd&X-Amz-Signature=7ff82bddc39d97e4caff2ae82e355a47e1104c1433aded1e7449aa6dea062d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

