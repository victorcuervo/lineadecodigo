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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2SZHEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRNq1maJRcCluSiOQXb0SK1Ime2mRzl0zCo1ZrI4K8TAiEAiLwFC7RVtXA%2B4Jwx2oBdAh2LESncIiugsdR2TffUjVUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOFJzZJw6Jsd36vusircAxBEYCeCNmST5pZiV5lWGoKA97SbFHz3T9EH%2Bah9hnMBeXxdr69oMwiaswDVH0tYjTRRlUhhSfl8Y3Ooh27C20yItX%2BDgmNlzAVwVYSPFOqKaMl5%2BrJ%2Bld7uXZOXGSAQIO3Baeol623kI3bTlfr4X68BweYY%2FVN7Am8LMH63pcoKxAwO5KxYFwIzf3R3MTwbYdrajXpajxJLQjiXNRUdm3VZs68hGz%2BVryM6TXjsrueBOtC0PUSseJRXP1YgeHKTtDu%2FuuQsAqycLdUi9kqi6PofB8nWwPtw1NTBzU%2FQm0Ef%2FlYkoyTZvHZ5GZqa3lqa%2FRdyt7eaNo%2BPRoyH1IALE53YBhYdteZpGC8IDbhIUwkRvUUL0QwnsDCyc%2FLV%2FaXPc2TNH%2FRUPZc1Qb7jEUXaOPf26dXE0WsORqqqCzg4WAbqY59zooWG2%2FMPKwYuz6vkTB6Rk9t1nk%2Bls5mzJv5tohCkBfkNScMbFKApeOwXc6oMEkAnEv%2BHzz31iWJeb41Id3EuCb2Q1Hj7X0eoYynt49LVgYLGCxBCsM5du76crCjmx8n31SheVSPDi5uVln3y7nlXszNbzEcMAXLnVphMkQ%2FUElJ5xRywW9PsC6JHPvI0QO9lAGmP5npgtBwnMKvGisoGOqUBZbs11fUdbhotHmK1Tb5qFUPvZMJoRQtQCIcaHBzUsfRjPdsxJ3ASJNGq9fvZfVGGscaGaVJhGYOvbyrTibvnpi4Sc1A5T%2BpHV6bmIICGptTrRkAIT9fv4dF2EuA1Z48IgERccM65QCiOidxoazVD%2BiW8O5G%2Ftxg5joIHeQLRYZ2xVEkg3BtqSlXWzX8l5GstImul4RRqYzUPLzyX7shKRz83K3rc&X-Amz-Signature=bbcd4de23ef717a007fefead11655befd8875f9d4b902650491bfe250618adeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2SZHEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRNq1maJRcCluSiOQXb0SK1Ime2mRzl0zCo1ZrI4K8TAiEAiLwFC7RVtXA%2B4Jwx2oBdAh2LESncIiugsdR2TffUjVUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOFJzZJw6Jsd36vusircAxBEYCeCNmST5pZiV5lWGoKA97SbFHz3T9EH%2Bah9hnMBeXxdr69oMwiaswDVH0tYjTRRlUhhSfl8Y3Ooh27C20yItX%2BDgmNlzAVwVYSPFOqKaMl5%2BrJ%2Bld7uXZOXGSAQIO3Baeol623kI3bTlfr4X68BweYY%2FVN7Am8LMH63pcoKxAwO5KxYFwIzf3R3MTwbYdrajXpajxJLQjiXNRUdm3VZs68hGz%2BVryM6TXjsrueBOtC0PUSseJRXP1YgeHKTtDu%2FuuQsAqycLdUi9kqi6PofB8nWwPtw1NTBzU%2FQm0Ef%2FlYkoyTZvHZ5GZqa3lqa%2FRdyt7eaNo%2BPRoyH1IALE53YBhYdteZpGC8IDbhIUwkRvUUL0QwnsDCyc%2FLV%2FaXPc2TNH%2FRUPZc1Qb7jEUXaOPf26dXE0WsORqqqCzg4WAbqY59zooWG2%2FMPKwYuz6vkTB6Rk9t1nk%2Bls5mzJv5tohCkBfkNScMbFKApeOwXc6oMEkAnEv%2BHzz31iWJeb41Id3EuCb2Q1Hj7X0eoYynt49LVgYLGCxBCsM5du76crCjmx8n31SheVSPDi5uVln3y7nlXszNbzEcMAXLnVphMkQ%2FUElJ5xRywW9PsC6JHPvI0QO9lAGmP5npgtBwnMKvGisoGOqUBZbs11fUdbhotHmK1Tb5qFUPvZMJoRQtQCIcaHBzUsfRjPdsxJ3ASJNGq9fvZfVGGscaGaVJhGYOvbyrTibvnpi4Sc1A5T%2BpHV6bmIICGptTrRkAIT9fv4dF2EuA1Z48IgERccM65QCiOidxoazVD%2BiW8O5G%2Ftxg5joIHeQLRYZ2xVEkg3BtqSlXWzX8l5GstImul4RRqYzUPLzyX7shKRz83K3rc&X-Amz-Signature=9809b9d8e0bd148294911a0578092a07573e93ca8f23777183233f5c5cc079d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

