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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRBQDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaRWjaZbUqtWqZ2R%2FAfvRpInVcX8KzXlsa89vYuJkQQIgS9ZCrc2j1JUFrQstqpRckEq6L8EHMBI8%2BfwOtfSD6VgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxuEK9oyx6jOfR%2BcircA48E8Nysb2P2nJFTXGv9LwUVph9WemAhVFpWYO5%2F561whvz%2F9FAsr2ecy37hs4uhWSeWaOYVqlaQuue1%2Fe582prM1XdotvLjVgGpd1U6nzahePnOyO6gMryj5TZ6t7ZCEC9pQJOfBgQUBYTenDuTKlrTy%2Bh0p%2Fv6hkPgkXh%2F4SlCWP5xPly9nBAL8pdDf7NetbKiHRAef6AKG3kg6%2B%2FoRfJTpuMbnR%2Bl1edxyEk%2Bbn1EW%2BBH3NUdvrCge%2FE0hsQHZRjo9%2BAlVJdjHnVHDXjrvevh3q7WqwC2M1%2BX8FZ5U%2FnxK5WoTcB4DqDFPqf%2BKSPt0kX9PCvZzG%2BemcPi1hGa4fZch1R3zk4zhOATmq%2FiRPLf4p4IZ%2BBJPhYxrxRlnh4X%2FGp0cvwhId42GiwBXnbxY5d4KwkWPLDXMg04PuXtfH06uaLj1CvNKD7TmJOadXiN2y2BigAn49U5ztMVYPVuAfLo7Tph1f8gGgEaKJaitPr8IYCAQN8Wqsj%2FSX11LjEhK3vcnpuC1cWrNp4i%2F6JPWjVdP0argb%2BFLu2VN4AdLUryIqkjXUkser1pi6R5bWR%2BAMf7RFlzSJSBGyMYcDK9X28fr%2FYjwENXL6moK1qCkx63QHBelq1GQT791sRDMMqei8oGOqUBU1g5Xa%2BBAaoQO7qvJND4GJY6E0SJbSVLQw3tOyMc%2BH5C6vxHMGn1N32BSjKK54RlxSYDdaMQ1U5%2BqRq86H9A8a6AK5o%2FQwwf4FTWunQ4fMN7HVNnnhR%2BkzItWiPMZ1HdLsCLqv4iF9DaInjsPWw2hnCAFJ27tESQtSodMagYJyG6eBleD1pAyjcYUdgKIIhk0LWNu%2FbY1ypavbgFOX9Mqs6Sm5q2&X-Amz-Signature=9a6b5b267f6b4f736eabc3f121607307feff6cf58db709fe1cbbdf0ca204e441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRBQDKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLaRWjaZbUqtWqZ2R%2FAfvRpInVcX8KzXlsa89vYuJkQQIgS9ZCrc2j1JUFrQstqpRckEq6L8EHMBI8%2BfwOtfSD6VgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxuEK9oyx6jOfR%2BcircA48E8Nysb2P2nJFTXGv9LwUVph9WemAhVFpWYO5%2F561whvz%2F9FAsr2ecy37hs4uhWSeWaOYVqlaQuue1%2Fe582prM1XdotvLjVgGpd1U6nzahePnOyO6gMryj5TZ6t7ZCEC9pQJOfBgQUBYTenDuTKlrTy%2Bh0p%2Fv6hkPgkXh%2F4SlCWP5xPly9nBAL8pdDf7NetbKiHRAef6AKG3kg6%2B%2FoRfJTpuMbnR%2Bl1edxyEk%2Bbn1EW%2BBH3NUdvrCge%2FE0hsQHZRjo9%2BAlVJdjHnVHDXjrvevh3q7WqwC2M1%2BX8FZ5U%2FnxK5WoTcB4DqDFPqf%2BKSPt0kX9PCvZzG%2BemcPi1hGa4fZch1R3zk4zhOATmq%2FiRPLf4p4IZ%2BBJPhYxrxRlnh4X%2FGp0cvwhId42GiwBXnbxY5d4KwkWPLDXMg04PuXtfH06uaLj1CvNKD7TmJOadXiN2y2BigAn49U5ztMVYPVuAfLo7Tph1f8gGgEaKJaitPr8IYCAQN8Wqsj%2FSX11LjEhK3vcnpuC1cWrNp4i%2F6JPWjVdP0argb%2BFLu2VN4AdLUryIqkjXUkser1pi6R5bWR%2BAMf7RFlzSJSBGyMYcDK9X28fr%2FYjwENXL6moK1qCkx63QHBelq1GQT791sRDMMqei8oGOqUBU1g5Xa%2BBAaoQO7qvJND4GJY6E0SJbSVLQw3tOyMc%2BH5C6vxHMGn1N32BSjKK54RlxSYDdaMQ1U5%2BqRq86H9A8a6AK5o%2FQwwf4FTWunQ4fMN7HVNnnhR%2BkzItWiPMZ1HdLsCLqv4iF9DaInjsPWw2hnCAFJ27tESQtSodMagYJyG6eBleD1pAyjcYUdgKIIhk0LWNu%2FbY1ypavbgFOX9Mqs6Sm5q2&X-Amz-Signature=09a82233ba0516f1753c0786e4ed7b32843b2dca5547c848d28680535ae2bbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

