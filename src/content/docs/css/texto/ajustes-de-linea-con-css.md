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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXKMGP6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDBy1EYp%2Bg9Rm7T9uFlKgxInDPl2m7E7BLR6Op7TnBUAiEAuHG17oQbYrVjPnNeDVcelOR%2F6%2BThI83TxudfzoTwuxkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGrrI1Bnooj7dpFvLircA8P5w6xOCgAcwGJQ70SOiXy5vrtL0I6PRlf1hxLdq7rtAQypC3HxMMLnQ9HYeQDKIRlV3F%2FL4Gji8eWYNd7Q3T6csEq1iLbLE0oEyebgnnv2%2FNPrl0VKGJpwbr1PmCR7HBhcDYh07BxUjdk8vZUr4NSeqedt%2B3lffMhw9ApYeT7%2Fjp%2BCCAwI28mElSfAEMqG%2Bwkxxo6jsONw9KTrrkm8k8uHNcmI2esdtXr06rG%2Fd5uW4ygbttQ3D6YBr8wd7hJlkMP71A8tWuALeqLDDflWosal9lrCj74NnAWJ%2BYf1432fYKh%2Fk3fuc%2BEZN1xI8V1NsZBjaFWZ0e1iLAYFNty%2BcdTISm1fDBcqacLzHihH%2BrQCLdGF7XW6YTNOCxIBzVKnodTDVUW539%2FvvM4je9iFdDiVISmo9HTBh9raVB2I1Y7q5TMGR1cu9evdymJCwYNuZXYFOygNofZqeUpyKJKJmnPboA1BzRvpuIUw%2FTJHR0TASFFCncSE4%2F85QkWrLkngEI3eYvPzoS84imRAu4M1Xprw%2FKO8PjzYbPdKpT5967wZdhGO3nFuwwog1lyRMkjvV%2ByzczUcXM7jtIaCDyJrqOIqWD39GzDl7Sq3DqZKMA0KIRxYXb69MhRWaLIlMLjGisoGOqUBlr9jbOMp4f5%2Bk2zNUmSAtBLRdUaIEldI0rhBqDZ5x9gH2tL8XBY6E1RSbjlOqkudlPb6REP6qqsG%2BDVNnKRoSY8XZgotMnq58fXEVot45WAKgAggICHOKAJMlaQmSeuY49H4ntvpK0%2FUya9UZv9ZxLeYm8v1fwAjVdsqSedxqLCPYOs%2FyV8c%2BFrQ9%2FEzCgPPTbCpzuu1KdfU07RRjBBtDCl4%2Fmxh&X-Amz-Signature=ca9b3d1ad7b43aab3685f22a354382dd24560e155e36ea9a10935475b65d11ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXKMGP6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDBy1EYp%2Bg9Rm7T9uFlKgxInDPl2m7E7BLR6Op7TnBUAiEAuHG17oQbYrVjPnNeDVcelOR%2F6%2BThI83TxudfzoTwuxkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGrrI1Bnooj7dpFvLircA8P5w6xOCgAcwGJQ70SOiXy5vrtL0I6PRlf1hxLdq7rtAQypC3HxMMLnQ9HYeQDKIRlV3F%2FL4Gji8eWYNd7Q3T6csEq1iLbLE0oEyebgnnv2%2FNPrl0VKGJpwbr1PmCR7HBhcDYh07BxUjdk8vZUr4NSeqedt%2B3lffMhw9ApYeT7%2Fjp%2BCCAwI28mElSfAEMqG%2Bwkxxo6jsONw9KTrrkm8k8uHNcmI2esdtXr06rG%2Fd5uW4ygbttQ3D6YBr8wd7hJlkMP71A8tWuALeqLDDflWosal9lrCj74NnAWJ%2BYf1432fYKh%2Fk3fuc%2BEZN1xI8V1NsZBjaFWZ0e1iLAYFNty%2BcdTISm1fDBcqacLzHihH%2BrQCLdGF7XW6YTNOCxIBzVKnodTDVUW539%2FvvM4je9iFdDiVISmo9HTBh9raVB2I1Y7q5TMGR1cu9evdymJCwYNuZXYFOygNofZqeUpyKJKJmnPboA1BzRvpuIUw%2FTJHR0TASFFCncSE4%2F85QkWrLkngEI3eYvPzoS84imRAu4M1Xprw%2FKO8PjzYbPdKpT5967wZdhGO3nFuwwog1lyRMkjvV%2ByzczUcXM7jtIaCDyJrqOIqWD39GzDl7Sq3DqZKMA0KIRxYXb69MhRWaLIlMLjGisoGOqUBlr9jbOMp4f5%2Bk2zNUmSAtBLRdUaIEldI0rhBqDZ5x9gH2tL8XBY6E1RSbjlOqkudlPb6REP6qqsG%2BDVNnKRoSY8XZgotMnq58fXEVot45WAKgAggICHOKAJMlaQmSeuY49H4ntvpK0%2FUya9UZv9ZxLeYm8v1fwAjVdsqSedxqLCPYOs%2FyV8c%2BFrQ9%2FEzCgPPTbCpzuu1KdfU07RRjBBtDCl4%2Fmxh&X-Amz-Signature=e27c6e095fc014943e37d4eb47df54443215db01818de3c9646a8d1367d95759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

