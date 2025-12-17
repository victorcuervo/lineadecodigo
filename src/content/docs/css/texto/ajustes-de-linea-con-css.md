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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24HLYEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFDLGUzdSuIURq7GQEy548FM2sVSe70Q4t5jJdaCZKwIgYb3B54IBOE0l%2F%2FZ%2F7KLxxZO7smvTqqzKZCC09iBZRxQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOoVsPR2BrEKga3M7yrcA1cVfkbhJ3onSeesmwa3QuE22ZZFqB64ezrz3a8pbmozi27usqi24oAWe1Hdn7LTmlustfe0lvuiFIpr%2F%2FwERHMF9jQGMvbzqG%2B57gb26EaiygJQh6pn%2FrzFfL4c2sdGRdIC14%2BgI3lvdi7U8cI9gYKUKvW1vOymi7X1MBRvwG4nszDpnpgMpPlvqJ3EWhd5q9Ipo8lTcYK003pDBpPByAgDkQpr2tox%2FCjG9GH6G4gdeJS29DnSo0PtGe5GUR%2FB%2BLAULRWMGSp8vAvrUySXpVsdNYGWZJwyeSUNBYOI185oLevxHEFhPVLOfyCzWp%2Bcey2CM%2Fcj0rIAz57PjGmheXhyPrmDt6nYL3mEID4JIvPaz7Z%2Fq%2Byuy6CFYWNnumogOGW0HNFZ3%2FnuAuwinNvQQHe%2FxGQwrVDPaWqDRA3AUKoHhf76rqUgurhLsIevXT6sJTU51nKgsk%2FAQQ%2BjahlPifHOFcTubHU768KBNKvHt%2FyYC3LPzfqD2Sy6yfIFfRp0%2BHKYTOSDG%2B10PkMLfM%2B56H%2BBXm0AJEaz7bJRg%2BzhtGqvvDb9O%2FqtrNzZvHm71fFnxp5LBM1VH2NScJssohiDWKAhDRCFQO4YxyVNYs9dFKVMiJCR8dmEczE884W7MLjOiMoGOqUBHIxx1gb7fp%2BKUKAL0T0OLOOFM6%2B7o9YnDpru1Tt3dHaH5JiLmp3oI5beexDr7YI6QZ7HzJxKTdJuCPfUPzXkfK2sibzSdLHd5%2B5nDuQqvDMCgDkRJt6z9Im4amwol2huOtNuiRjYXxRCYoEyAP5m39I9cvPYzB4mkFCt0rxASA%2BytzzIqJk1b8wfolCMC4GLHO38%2Fv3tzJUz3pKwtP2SYbRM93tk&X-Amz-Signature=f08a79bcf8131b505cb8d7ec08f93dce84cff5490c5ac6dac0d0fa00983ba268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24HLYEW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFDLGUzdSuIURq7GQEy548FM2sVSe70Q4t5jJdaCZKwIgYb3B54IBOE0l%2F%2FZ%2F7KLxxZO7smvTqqzKZCC09iBZRxQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOoVsPR2BrEKga3M7yrcA1cVfkbhJ3onSeesmwa3QuE22ZZFqB64ezrz3a8pbmozi27usqi24oAWe1Hdn7LTmlustfe0lvuiFIpr%2F%2FwERHMF9jQGMvbzqG%2B57gb26EaiygJQh6pn%2FrzFfL4c2sdGRdIC14%2BgI3lvdi7U8cI9gYKUKvW1vOymi7X1MBRvwG4nszDpnpgMpPlvqJ3EWhd5q9Ipo8lTcYK003pDBpPByAgDkQpr2tox%2FCjG9GH6G4gdeJS29DnSo0PtGe5GUR%2FB%2BLAULRWMGSp8vAvrUySXpVsdNYGWZJwyeSUNBYOI185oLevxHEFhPVLOfyCzWp%2Bcey2CM%2Fcj0rIAz57PjGmheXhyPrmDt6nYL3mEID4JIvPaz7Z%2Fq%2Byuy6CFYWNnumogOGW0HNFZ3%2FnuAuwinNvQQHe%2FxGQwrVDPaWqDRA3AUKoHhf76rqUgurhLsIevXT6sJTU51nKgsk%2FAQQ%2BjahlPifHOFcTubHU768KBNKvHt%2FyYC3LPzfqD2Sy6yfIFfRp0%2BHKYTOSDG%2B10PkMLfM%2B56H%2BBXm0AJEaz7bJRg%2BzhtGqvvDb9O%2FqtrNzZvHm71fFnxp5LBM1VH2NScJssohiDWKAhDRCFQO4YxyVNYs9dFKVMiJCR8dmEczE884W7MLjOiMoGOqUBHIxx1gb7fp%2BKUKAL0T0OLOOFM6%2B7o9YnDpru1Tt3dHaH5JiLmp3oI5beexDr7YI6QZ7HzJxKTdJuCPfUPzXkfK2sibzSdLHd5%2B5nDuQqvDMCgDkRJt6z9Im4amwol2huOtNuiRjYXxRCYoEyAP5m39I9cvPYzB4mkFCt0rxASA%2BytzzIqJk1b8wfolCMC4GLHO38%2Fv3tzJUz3pKwtP2SYbRM93tk&X-Amz-Signature=7b26c1f2700d8bb1fedad3a4477513c92edf93a3c96303b329c4ddcb3ecadb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

