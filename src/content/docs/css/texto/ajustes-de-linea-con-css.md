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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667322LKZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL%2FTxNu7E3QBcDuq3DMwQ0zaVZu%2Fa%2F7vsWzpTxAbKXjAIhAOOvUAZUcfZgUz31isTnt3lbDeciqmJ6Bjll9vxl%2FTLHKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2FrEfPEdcyYuAYPQq3AM1iT1SaGgTHMZpYVmfXV4JHVcSE4bG%2FWs5McH6dDIOJ%2BcJYNFiwfDY%2BbHk0L7i43BdymqCHuKqc293vpWIwnmk0LsqIU1443zFVoxhbpzJRJacpvgOA%2BVXkQn5LbG28ivnmICa1hr0sJor2XID1lVb5%2Bz6f1byb4T2%2FqJKNVa%2F7wahyrQjLWf5tg6N2tkINdtTmHqPIRrMvcjq9qQKtCOinJrs7zCd2XjtsqVHjnO6wqlzdqe8LSJx5Sa9Skmh6WRlL0XyzhJtSTrChFpPBNMLw8a3cL%2BsJQawzRXqexe6UjaE2bVRzLHNgdYLNUVQJabkuCnNdbsXR3fCounjDZ2gsGN0zSB6%2Fwdr1aTHpnS08Wxg3IuOC%2BHLX%2BvAjIyO748iXhHOXMUCGLbF82GjEM3Q7iSUFHf9Rf4HCLF%2FDqonOT1gIljzJlHYN%2B1C3JshBJsREWSIilwU5Od9EYXq0KSgkjNMLYJ0LtenG6pYkYgI5dr7ck4WtqqHH4AuGX9CRz%2FJYtKKIwbjOVQgzMeT%2FWmgcr6zPUO3tfcos1%2FAzFQOiPttKy8YTz9YiI3f2pJMVxeIZ0NPJxAzIxvWASO6Sz7%2BOYdFk5FnbrMRVd%2F8S3NlpLvkH5pJ%2FAS4Iz%2F6CzDxrYzKBjqkAeOaxrfSk7x404lxFPdXzCVIlu8qcwJtF255%2FbKnuIaHC61QcNUBB02db1k1uT1uKbEw7h4%2Fbcb9v5tq%2FjvKBiJmHLqnniBgc5bmcbaABSgTvqyqrIwjkgRCJr2etLWvpZfl41KQ9asqy2biwTRqoQV%2FTiYiGngC34AUt7eAOKseKRLsOBCKesca8XQfLeg9wm42qiiHQHonzlSbBz%2Bt7HQVE8oX&X-Amz-Signature=7552dccd9a40a07157a89456b6a623fd368e38193755e4dc41d9838fca7cf697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667322LKZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL%2FTxNu7E3QBcDuq3DMwQ0zaVZu%2Fa%2F7vsWzpTxAbKXjAIhAOOvUAZUcfZgUz31isTnt3lbDeciqmJ6Bjll9vxl%2FTLHKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2FrEfPEdcyYuAYPQq3AM1iT1SaGgTHMZpYVmfXV4JHVcSE4bG%2FWs5McH6dDIOJ%2BcJYNFiwfDY%2BbHk0L7i43BdymqCHuKqc293vpWIwnmk0LsqIU1443zFVoxhbpzJRJacpvgOA%2BVXkQn5LbG28ivnmICa1hr0sJor2XID1lVb5%2Bz6f1byb4T2%2FqJKNVa%2F7wahyrQjLWf5tg6N2tkINdtTmHqPIRrMvcjq9qQKtCOinJrs7zCd2XjtsqVHjnO6wqlzdqe8LSJx5Sa9Skmh6WRlL0XyzhJtSTrChFpPBNMLw8a3cL%2BsJQawzRXqexe6UjaE2bVRzLHNgdYLNUVQJabkuCnNdbsXR3fCounjDZ2gsGN0zSB6%2Fwdr1aTHpnS08Wxg3IuOC%2BHLX%2BvAjIyO748iXhHOXMUCGLbF82GjEM3Q7iSUFHf9Rf4HCLF%2FDqonOT1gIljzJlHYN%2B1C3JshBJsREWSIilwU5Od9EYXq0KSgkjNMLYJ0LtenG6pYkYgI5dr7ck4WtqqHH4AuGX9CRz%2FJYtKKIwbjOVQgzMeT%2FWmgcr6zPUO3tfcos1%2FAzFQOiPttKy8YTz9YiI3f2pJMVxeIZ0NPJxAzIxvWASO6Sz7%2BOYdFk5FnbrMRVd%2F8S3NlpLvkH5pJ%2FAS4Iz%2F6CzDxrYzKBjqkAeOaxrfSk7x404lxFPdXzCVIlu8qcwJtF255%2FbKnuIaHC61QcNUBB02db1k1uT1uKbEw7h4%2Fbcb9v5tq%2FjvKBiJmHLqnniBgc5bmcbaABSgTvqyqrIwjkgRCJr2etLWvpZfl41KQ9asqy2biwTRqoQV%2FTiYiGngC34AUt7eAOKseKRLsOBCKesca8XQfLeg9wm42qiiHQHonzlSbBz%2Bt7HQVE8oX&X-Amz-Signature=9f1f8df5c191ee5edd029e413b42b08e491e1dfde7c5a303e05a182fc5eb3985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

