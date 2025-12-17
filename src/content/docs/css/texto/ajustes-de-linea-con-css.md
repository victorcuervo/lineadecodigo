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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2APMUWV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ZHD8juPZShm6xn7b8TT7Dv4K%2BbasknGqQwnC6s1SQQIgETXBi61%2FlxQQjQTFX7jf9aduSHL6werMZ%2BnBNyq8jCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPx9eKQnNRSf9eVDDircA37OXOnqTnNZit2fKrob3hl3Fai81TKzkVmoPaJhzLNTGvCkBZk2HvZjDsD1kUIGKOPASafo4PEp3gtj4gcpomB7qlKVxl20M3MeSoYCYBx%2FATpzwr5K7ycv62df%2FjdXO9h0fG4RDnyjOuPfFRHz7y%2BtBwQb5p%2FgH0ugJj6IxjbDi0X6%2F66jPNsi68io0gsBiWfzDpNyZtKenq9pbrTlS6Sahs3KJrmBxAiLR%2FsTXFBelc0pFlm9I65PJHoAS3bI0TKE%2FpLZtJyO4dS9BGo%2FE3I24KqtDUdmon2PGCE%2BSQmP0A2z32D%2Bn6y4fObnq0IoC%2BQC6oo4GGuLpha22O%2Bna4x1lLhRMa8vsR8hj1wwcMCAyP7OeBNsPXZKFsG2OOUg9i4xizYLo7jLt70wxCP9hnEEsw1bXr4aqG8BCnB09nE%2Bvz5%2FDaFGNAm376PbV3Jh2veAYKXmNU2ke79OPxUWtoflHrYEdQvLB9IkWgKsCLNeMeUqNFlJVk9DHz5rMFVNklTsR%2FJ1Dd6mQwUs4261%2FiTg2spImGcUEKiSU%2FraMbS56nNGW5hxTFizDLRB%2Fdp31rTbhtnewF%2Bk04e1X8vq5BYlCTCQhA6RmpQeFyEX9kVMaZ4GB69W3LsBMVDUMK%2FOiMoGOqUBajoMXzFh9dsX49pSAawi1HLKVvPJ5gx4XFNI3RZRVWm%2BWKICZzvUsaR3UYbyL3yZRIVtz4jexQCbomh7uxRPhFGHLBAbfvtY7DuapfzqMzxhK3qurUy6w%2Fw%2F%2BXiyDijwJvl2LSk6RBRc7EVG3kfFbyKYLbtQ1mlr5VKcwzumkG7mq%2BpXdSo%2BUm5XzqJkEjcYc6lFYOfwgTz%2FI8q4b183oj6cZ83I&X-Amz-Signature=ea25dcbfa0da0fa4981589f95419c130bc4365b22a3c8958b09fea71bb7da519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2APMUWV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2ZHD8juPZShm6xn7b8TT7Dv4K%2BbasknGqQwnC6s1SQQIgETXBi61%2FlxQQjQTFX7jf9aduSHL6werMZ%2BnBNyq8jCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPx9eKQnNRSf9eVDDircA37OXOnqTnNZit2fKrob3hl3Fai81TKzkVmoPaJhzLNTGvCkBZk2HvZjDsD1kUIGKOPASafo4PEp3gtj4gcpomB7qlKVxl20M3MeSoYCYBx%2FATpzwr5K7ycv62df%2FjdXO9h0fG4RDnyjOuPfFRHz7y%2BtBwQb5p%2FgH0ugJj6IxjbDi0X6%2F66jPNsi68io0gsBiWfzDpNyZtKenq9pbrTlS6Sahs3KJrmBxAiLR%2FsTXFBelc0pFlm9I65PJHoAS3bI0TKE%2FpLZtJyO4dS9BGo%2FE3I24KqtDUdmon2PGCE%2BSQmP0A2z32D%2Bn6y4fObnq0IoC%2BQC6oo4GGuLpha22O%2Bna4x1lLhRMa8vsR8hj1wwcMCAyP7OeBNsPXZKFsG2OOUg9i4xizYLo7jLt70wxCP9hnEEsw1bXr4aqG8BCnB09nE%2Bvz5%2FDaFGNAm376PbV3Jh2veAYKXmNU2ke79OPxUWtoflHrYEdQvLB9IkWgKsCLNeMeUqNFlJVk9DHz5rMFVNklTsR%2FJ1Dd6mQwUs4261%2FiTg2spImGcUEKiSU%2FraMbS56nNGW5hxTFizDLRB%2Fdp31rTbhtnewF%2Bk04e1X8vq5BYlCTCQhA6RmpQeFyEX9kVMaZ4GB69W3LsBMVDUMK%2FOiMoGOqUBajoMXzFh9dsX49pSAawi1HLKVvPJ5gx4XFNI3RZRVWm%2BWKICZzvUsaR3UYbyL3yZRIVtz4jexQCbomh7uxRPhFGHLBAbfvtY7DuapfzqMzxhK3qurUy6w%2Fw%2F%2BXiyDijwJvl2LSk6RBRc7EVG3kfFbyKYLbtQ1mlr5VKcwzumkG7mq%2BpXdSo%2BUm5XzqJkEjcYc6lFYOfwgTz%2FI8q4b183oj6cZ83I&X-Amz-Signature=9af8894cdbe422b5c0e8ce1fcd00e6a63e4dbe2325c4a9f8aa133dfd4a204535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

