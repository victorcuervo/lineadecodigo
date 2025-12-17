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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6K6NVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vWnP4FJnMtfPf1xpdgkwLO%2BSv01ZaiXLjD%2FzUxI5PwIgEp3Hngwp9cqlu15ind0RNwKy5jodeCN5nhpTnhy%2FFjYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ29cqMMdegisWtbSrcA2F2JTUcsBpOZoOX1fZzoQywuDEUaneedFj6%2FdOqFCikUcGm6DdgPSpjpuHrp35uIsSL5Ptq69eAUfKEsruRDJ8g41nSIl%2FdN7g2ZPygPWad234ywrFxjUEqVQSvoa8Yi76a6BvEJk9Fq%2FvarLOJJ5tDiGAENFk8zA54DC7gc4k97gOT25nj3mRU7Zpm0zGIVoc3A5cVF%2Bix6WZaohqHSLYyD%2FWQPIH6ienoRRcAskGPM0CbgH%2FFPVEEgdRUsHXQDEhPJBUomNtRdRscYAl%2BLYbiwky5nUIbBK6JBHVp8TbsUMLkDctTIkos9CcfkBLw2ShCWHJOWzEi9Oz%2FI%2Bk%2FaqBmLioq1%2FaM0AFL3YwNkv3lmu8a%2FzuWpNKAWt3O3drierWml9SDNTBNZjtgle5LuwEw75XxYG8dadU5N%2FNr3dAq1%2BWTJb4EUZQNVCcrDPgMWsIgOzdarpoC0V66TT6ABynEFDWZZzs28Hy3CZxwicccSzt%2BHGuNB%2BKsxJ2M6E58vfN50ceVMldpxG5wheN0BQH17tDvZKi5sS5IHEkmbKbwtmIns7iq4KYE5oez6WD6QvvF9GDl632ZcMlDOQxKtcfjANJw%2BSLm5bEef36K7DytYLC5lPh7t0LNnFupMM6KjMoGOqUBaBrIDHIfe5avanAO1%2FCeg5n8SxX7hPM3O7XYwlqUPwVN9%2F9%2BSJw7W1AsI%2Bc2%2BtdGBtv%2BThZRTo9vGlzJkUF6Z7%2Fj5gDslZ544fuRr0WCZDO93epmGkvxc8PZphqaYKm%2F6z09rFBwsqSCqK9eAHWODK%2FHmgXy0sEHmyDvU%2B11Kk71%2BScx%2FU14e%2BB3wu%2BfamOWzq7n9m9EPfV7pY5CpaqJ%2BqeF69iJ&X-Amz-Signature=5f8e5732cbacb87dcead33bc4d10d569afaa5728c064ff51ea30117c436fd47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6K6NVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vWnP4FJnMtfPf1xpdgkwLO%2BSv01ZaiXLjD%2FzUxI5PwIgEp3Hngwp9cqlu15ind0RNwKy5jodeCN5nhpTnhy%2FFjYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ29cqMMdegisWtbSrcA2F2JTUcsBpOZoOX1fZzoQywuDEUaneedFj6%2FdOqFCikUcGm6DdgPSpjpuHrp35uIsSL5Ptq69eAUfKEsruRDJ8g41nSIl%2FdN7g2ZPygPWad234ywrFxjUEqVQSvoa8Yi76a6BvEJk9Fq%2FvarLOJJ5tDiGAENFk8zA54DC7gc4k97gOT25nj3mRU7Zpm0zGIVoc3A5cVF%2Bix6WZaohqHSLYyD%2FWQPIH6ienoRRcAskGPM0CbgH%2FFPVEEgdRUsHXQDEhPJBUomNtRdRscYAl%2BLYbiwky5nUIbBK6JBHVp8TbsUMLkDctTIkos9CcfkBLw2ShCWHJOWzEi9Oz%2FI%2Bk%2FaqBmLioq1%2FaM0AFL3YwNkv3lmu8a%2FzuWpNKAWt3O3drierWml9SDNTBNZjtgle5LuwEw75XxYG8dadU5N%2FNr3dAq1%2BWTJb4EUZQNVCcrDPgMWsIgOzdarpoC0V66TT6ABynEFDWZZzs28Hy3CZxwicccSzt%2BHGuNB%2BKsxJ2M6E58vfN50ceVMldpxG5wheN0BQH17tDvZKi5sS5IHEkmbKbwtmIns7iq4KYE5oez6WD6QvvF9GDl632ZcMlDOQxKtcfjANJw%2BSLm5bEef36K7DytYLC5lPh7t0LNnFupMM6KjMoGOqUBaBrIDHIfe5avanAO1%2FCeg5n8SxX7hPM3O7XYwlqUPwVN9%2F9%2BSJw7W1AsI%2Bc2%2BtdGBtv%2BThZRTo9vGlzJkUF6Z7%2Fj5gDslZ544fuRr0WCZDO93epmGkvxc8PZphqaYKm%2F6z09rFBwsqSCqK9eAHWODK%2FHmgXy0sEHmyDvU%2B11Kk71%2BScx%2FU14e%2BB3wu%2BfamOWzq7n9m9EPfV7pY5CpaqJ%2BqeF69iJ&X-Amz-Signature=ac40ba4c1bb1e372d73fa691ddfbfb5594942bf97242e4f7e72a3759063e87cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

