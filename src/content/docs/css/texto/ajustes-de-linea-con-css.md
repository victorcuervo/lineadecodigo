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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6HJSZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FqZO81aWQU3mqfT9jriCGGzgozd4GG0rpc1XU%2FtByIAIgUbuSp9tZ%2BVOAVI6HfgxjxsRm4TPQEn2rPjHe0n5Ct3wq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDONx%2BEFFVQpIYZeYSSrcAxWV1d%2BKwtl5gJoA3QNwg0pOjRiDTbcGU7X7lGDKhIEZLY0Cx4pnBHg4GZQgP%2FoMdTPaUMsqGBxaxZZWVgAtaN6awS%2F37XA4mccWI0rdMuHbNUNBDiaK2z58NaSuy65iw99n1XiNbi%2FAV1xjUvaZIaIEmK29N%2BGPCGstYallveU23%2FPHNr%2B5Hts%2B8KE5Y5TN6uPA3h2QsQegAI4kESTBrLNyDMuexX4C4ogw8LXXJhScLS1WoHpIVu8fSVmdm4vbLj1dMf9%2FOxypV7%2Bkde7KfqO87Ebg9IYAjxEb%2Fr5n31DdoEOJtEjkeiZ9%2Fm9%2FMFjtSxb43PlLax8cIa9FcPJg4ocksn%2BzukS0Zn%2FcNEoRZDeSCu1PF1CvrAJJqA%2FcXf8oCQsfl8NmIyrIuNSefIZhKEsdBRcQ3abEVQl30N6iM6vd2BL5q25DokDfa%2FQrSF0XCr0sfHCoHSuR6uxAccV1pIXQD0DE536wKeqKz4ifW4aggRl25JRE8sHKKmDkUgbeQ3NVI8R0ISXyOO6shJz85NvN1pjYA448le28A4lUQFDxHUgpZKIg09VeBIj8xUdwEy9KxJRfsXBRqNnua%2FFQdqf6O6t%2BO3j1GjZGrtDHZMjtUutbn4MzdqY1B75%2BMILRicoGOqUBiam7Ff3BQ%2FKn9nnW0j3XAJRbx47YsjZKgtQLsUY5n0uPnjmMczFzt%2B%2F1SjqxnLkFzdLRlgJ%2BLawBsZgULkFGwkIkSzmutChNoLxNNBPfgjdavgoWQ4H7%2FBQnja6zkFx4eqfy1DhLzlDXyS9CVxNimWmciXRAoD%2BjU3CEaKUF3fddX%2BjX0WiZWNfiRhLBuPwbjpEqBmT0Fn8t6%2BxIc00W%2BK49ueM7&X-Amz-Signature=f95dca9e3ea3e3979ce71be9b015d18e385f01d969089dd4ab4c62a6d97bdb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW6HJSZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FqZO81aWQU3mqfT9jriCGGzgozd4GG0rpc1XU%2FtByIAIgUbuSp9tZ%2BVOAVI6HfgxjxsRm4TPQEn2rPjHe0n5Ct3wq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDONx%2BEFFVQpIYZeYSSrcAxWV1d%2BKwtl5gJoA3QNwg0pOjRiDTbcGU7X7lGDKhIEZLY0Cx4pnBHg4GZQgP%2FoMdTPaUMsqGBxaxZZWVgAtaN6awS%2F37XA4mccWI0rdMuHbNUNBDiaK2z58NaSuy65iw99n1XiNbi%2FAV1xjUvaZIaIEmK29N%2BGPCGstYallveU23%2FPHNr%2B5Hts%2B8KE5Y5TN6uPA3h2QsQegAI4kESTBrLNyDMuexX4C4ogw8LXXJhScLS1WoHpIVu8fSVmdm4vbLj1dMf9%2FOxypV7%2Bkde7KfqO87Ebg9IYAjxEb%2Fr5n31DdoEOJtEjkeiZ9%2Fm9%2FMFjtSxb43PlLax8cIa9FcPJg4ocksn%2BzukS0Zn%2FcNEoRZDeSCu1PF1CvrAJJqA%2FcXf8oCQsfl8NmIyrIuNSefIZhKEsdBRcQ3abEVQl30N6iM6vd2BL5q25DokDfa%2FQrSF0XCr0sfHCoHSuR6uxAccV1pIXQD0DE536wKeqKz4ifW4aggRl25JRE8sHKKmDkUgbeQ3NVI8R0ISXyOO6shJz85NvN1pjYA448le28A4lUQFDxHUgpZKIg09VeBIj8xUdwEy9KxJRfsXBRqNnua%2FFQdqf6O6t%2BO3j1GjZGrtDHZMjtUutbn4MzdqY1B75%2BMILRicoGOqUBiam7Ff3BQ%2FKn9nnW0j3XAJRbx47YsjZKgtQLsUY5n0uPnjmMczFzt%2B%2F1SjqxnLkFzdLRlgJ%2BLawBsZgULkFGwkIkSzmutChNoLxNNBPfgjdavgoWQ4H7%2FBQnja6zkFx4eqfy1DhLzlDXyS9CVxNimWmciXRAoD%2BjU3CEaKUF3fddX%2BjX0WiZWNfiRhLBuPwbjpEqBmT0Fn8t6%2BxIc00W%2BK49ueM7&X-Amz-Signature=d47998cb43b8c7debf2be16cece55cd530e55c62d1f30acdd92b71bf1cc99a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

