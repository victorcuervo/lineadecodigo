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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OOZ5IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVn%2Bmh33MQVnaFEypH%2FQF2%2Fj36xaE5lgznJRL7KE0KJAIgayIWnlXxPbETDw3N3ha56ukEtC%2F3gQWcD5toNzUm40UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS4bSEiNDQ44IGCIyrcA0sPRgHTEwXmPhw%2BwbbfTmlmLRhf8Uwq9KckDpsKejWGE4sx6GEbdGiPBkWMTc7EZpnfIjz2u37CTu%2BRkvzxOjQOBwsB7rOACqDqQS0%2BVsQmeJApILdFF75eubs%2Fxsm%2FZstZzzKDucWN2bWuATL0CQh3xNMUMv6Vc21JdTYHEKS8UG8boy0xX4GtB7H7R35OIRWLsyZnXooTuBRezi%2BRRwLXVEK0xz00xQi%2FZh97bPe6ES1OZeTgldehw1ulSjhYMrRaK0rj97xvS8yGyHejUSVpifV7hFEEbUXEkgC1IBmNe2NiN7NzU0Z2fY%2BiqTpoLBOLXYsdBlaSzQ7jTQbA9BG%2BE82UNJF14tQ3W%2FIWR3qdj1UVAfjjaaqqnO%2F2WOGwldrbpkNVZWv%2BMfxdhpFEZP1ScSRAe5dbsG4KYz1IyjCWMf4S%2B9ghp5FZjpKQKIJ8IVsX5PTZA6RrTL4OrQvxRuSlMlXYK8HLSdVAr4p1dvau%2FJVcVMSU3aHph%2F87shbU27%2Bnyb92ibKxAIHrRVvYen5MEFjZOkKJqrAID4cSXqkgt9KimN620HkuhFA6wB3nMRKbH5Z0YtIkZm7n495hcPtaDO5l%2Fkso90YIZuD%2FP3X7Zkeigzs2Rs9nbWPhMO2gi8oGOqUBzvq7SpkyWkWa0SPmaNpcU15aVXLh1l1g021XXbVQ6MUrgHd9QCN%2FYpZP6Fq%2BCTvque6MpCb1GPzRekPxTT%2BCQdCJw4KT3FE0xLytZBMPKEMjoJykCsrBkDU8LQL9ER6G%2FI0fJZvWba7CjoLVu2IBZAzWGAiRntvnHZWrH3auU7aqZTBVZBRzRwc%2BKYUVjbA%2BqQFSRztn3QQBP1WVac8uBrbnAomU&X-Amz-Signature=c49f83a1482a453d53da3d9aca62da37cb6db63a0f9571ceb01c49e6a0049b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OOZ5IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVn%2Bmh33MQVnaFEypH%2FQF2%2Fj36xaE5lgznJRL7KE0KJAIgayIWnlXxPbETDw3N3ha56ukEtC%2F3gQWcD5toNzUm40UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS4bSEiNDQ44IGCIyrcA0sPRgHTEwXmPhw%2BwbbfTmlmLRhf8Uwq9KckDpsKejWGE4sx6GEbdGiPBkWMTc7EZpnfIjz2u37CTu%2BRkvzxOjQOBwsB7rOACqDqQS0%2BVsQmeJApILdFF75eubs%2Fxsm%2FZstZzzKDucWN2bWuATL0CQh3xNMUMv6Vc21JdTYHEKS8UG8boy0xX4GtB7H7R35OIRWLsyZnXooTuBRezi%2BRRwLXVEK0xz00xQi%2FZh97bPe6ES1OZeTgldehw1ulSjhYMrRaK0rj97xvS8yGyHejUSVpifV7hFEEbUXEkgC1IBmNe2NiN7NzU0Z2fY%2BiqTpoLBOLXYsdBlaSzQ7jTQbA9BG%2BE82UNJF14tQ3W%2FIWR3qdj1UVAfjjaaqqnO%2F2WOGwldrbpkNVZWv%2BMfxdhpFEZP1ScSRAe5dbsG4KYz1IyjCWMf4S%2B9ghp5FZjpKQKIJ8IVsX5PTZA6RrTL4OrQvxRuSlMlXYK8HLSdVAr4p1dvau%2FJVcVMSU3aHph%2F87shbU27%2Bnyb92ibKxAIHrRVvYen5MEFjZOkKJqrAID4cSXqkgt9KimN620HkuhFA6wB3nMRKbH5Z0YtIkZm7n495hcPtaDO5l%2Fkso90YIZuD%2FP3X7Zkeigzs2Rs9nbWPhMO2gi8oGOqUBzvq7SpkyWkWa0SPmaNpcU15aVXLh1l1g021XXbVQ6MUrgHd9QCN%2FYpZP6Fq%2BCTvque6MpCb1GPzRekPxTT%2BCQdCJw4KT3FE0xLytZBMPKEMjoJykCsrBkDU8LQL9ER6G%2FI0fJZvWba7CjoLVu2IBZAzWGAiRntvnHZWrH3auU7aqZTBVZBRzRwc%2BKYUVjbA%2BqQFSRztn3QQBP1WVac8uBrbnAomU&X-Amz-Signature=fb558993ecd3f4dddb36419ba7cffb44a325faf74b419537b8cdafeaaa1a43b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

