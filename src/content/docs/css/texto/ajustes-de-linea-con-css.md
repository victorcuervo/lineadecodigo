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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAF65UY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5lQadtSvAX7SrkB3%2BppgqrmHo8BoteX9yyS1tsUmK1AIgfkMufjaZKJZUnIV8gS28nrmvAwq1ymbu5qbZ6fbPDYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BdSk3%2Fo9IkfbZ2dSrcA6Amlyhi7l7b4p5AAixYU2a0ECgIkBGnFup3l9ai%2F2eS6a2wFSyaDYWPxu5WGjFiGuXxyd6QXAv5kYEJ9g1gP6SjQgGlIdFkcjrXj5r6i71CP%2FZX77fPJvMSQBeMsyJG1cfd%2FiGflYOgi8p60Brbjbl8XEJ5LnOt5kILV93a4DRDWChSqXlK7TOxhM0IaqpdwhN9UzYfSANWFojs1rcb4jGF1tdsMIrNI2Ae6wJKFPqQOdBQ7DUrMRsaFZXCPlOKINh5vEfnsqBPIOeXke1p3ZNP5mMRR4dl0ghQ2le5SSMqW9am1xwe77UwzO9OGmVTwyYTnvcef1XPHo01ZJUQA63c7uyTnbh8khhOsLJhTaKe6%2BTj%2BDEpxNud%2BMStFI1x7l4xOsZYLk%2Ft23yfF1wyKmuE8uusuJKcc7lZBvf%2BwJyzPNcvW1GKn0xckVgq26BK5jIQDHZTsddSufrnxr3Ddg1FeEImDzxXwIXLppeldYBQ59ZMBXZn1RRUq1bT3S4FzhuZnLynheUtzwAcSNgapgJJOBW9%2FZeKAZgzcT5DonyMlO3%2BcWPuT75R3sz%2BSRRRBfRih0eoVNPogPG3TZzTDTb4gRSESN%2FwBtFHSHkryUhLXS0g2nH%2BRrb3Fl4JMJGujMoGOqUBmx%2BFC8aAGknY1pn%2FdvNNysBIjMhcPJexQGV%2BIw7kuFaWLssA6Lw2NEO8p6B3HDrgreWSKM6QlwZiMyR3s1XuVObtq3tjIZ6mmwfCHFoTBqdWuT8akTVBYWgvv8gFnKnYRU%2BrFnx1meTDQkukLuTCYA25M6IkZWSBPuHJuAtRVViWL6sHowXAw%2FVdn5WoXcU0U0Ag4ikODPcaGQjsZIswaDnQ5%2BtY&X-Amz-Signature=6a96b546e0704d6dc399ab05cab7ca458077d827f94d08e632c4b42b17ce5908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAF65UY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5lQadtSvAX7SrkB3%2BppgqrmHo8BoteX9yyS1tsUmK1AIgfkMufjaZKJZUnIV8gS28nrmvAwq1ymbu5qbZ6fbPDYMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BdSk3%2Fo9IkfbZ2dSrcA6Amlyhi7l7b4p5AAixYU2a0ECgIkBGnFup3l9ai%2F2eS6a2wFSyaDYWPxu5WGjFiGuXxyd6QXAv5kYEJ9g1gP6SjQgGlIdFkcjrXj5r6i71CP%2FZX77fPJvMSQBeMsyJG1cfd%2FiGflYOgi8p60Brbjbl8XEJ5LnOt5kILV93a4DRDWChSqXlK7TOxhM0IaqpdwhN9UzYfSANWFojs1rcb4jGF1tdsMIrNI2Ae6wJKFPqQOdBQ7DUrMRsaFZXCPlOKINh5vEfnsqBPIOeXke1p3ZNP5mMRR4dl0ghQ2le5SSMqW9am1xwe77UwzO9OGmVTwyYTnvcef1XPHo01ZJUQA63c7uyTnbh8khhOsLJhTaKe6%2BTj%2BDEpxNud%2BMStFI1x7l4xOsZYLk%2Ft23yfF1wyKmuE8uusuJKcc7lZBvf%2BwJyzPNcvW1GKn0xckVgq26BK5jIQDHZTsddSufrnxr3Ddg1FeEImDzxXwIXLppeldYBQ59ZMBXZn1RRUq1bT3S4FzhuZnLynheUtzwAcSNgapgJJOBW9%2FZeKAZgzcT5DonyMlO3%2BcWPuT75R3sz%2BSRRRBfRih0eoVNPogPG3TZzTDTb4gRSESN%2FwBtFHSHkryUhLXS0g2nH%2BRrb3Fl4JMJGujMoGOqUBmx%2BFC8aAGknY1pn%2FdvNNysBIjMhcPJexQGV%2BIw7kuFaWLssA6Lw2NEO8p6B3HDrgreWSKM6QlwZiMyR3s1XuVObtq3tjIZ6mmwfCHFoTBqdWuT8akTVBYWgvv8gFnKnYRU%2BrFnx1meTDQkukLuTCYA25M6IkZWSBPuHJuAtRVViWL6sHowXAw%2FVdn5WoXcU0U0Ag4ikODPcaGQjsZIswaDnQ5%2BtY&X-Amz-Signature=349858ff5a724d535ba6f9c349d39a3d7a57dd533771336733ba3dbbf03ad553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

