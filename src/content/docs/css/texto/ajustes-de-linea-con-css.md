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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKZ6IYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPAjgn4josQKfg84VXjGpNWA3ITxT2Se2bHT%2B4CkBPWAiEA%2FMSqQyzllN%2B%2FCSdysTmo%2FuCVGXQ2ba5O4Upjde7QeVgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNck79DnWQZop9D1xSrcA4q7D5I0d0yniZi0OwkpOee3KuRqpuL70M3Lvu%2B7CCr8avsq40zquX3II1i%2FNaJ%2F%2BC0WUc2EIaXPy%2F9uhTV%2BZMWhdM5TjKXrsQ%2BZJjzKXvJdnQ4QUgBKPwaNJS0s3FgtkWgwirhUQVbb7iDfa9uvK3sCMviAqIn3eQN0z3FK4dggc2U7A3EoXwjMmAdmYPBUcGrn06OPeaorPjE8OwloZJWz1fwNoycLdXHCkqzreBNLhmukMGDOIjLStE2aOXohsSNlh1ikGnbKupsa6ttiDAuEiRzFwJ2R4KW1GrQNqdj73NifblatJBIiDSvarFWCxTMk8Zd7wGgmUELZkgELJFfCr7Og4aXPs%2F1TvMBB5E7OrmXcljWg6uUQU2V1LyTkoGnEve1QxMcyDFD8N8MrILxQ%2FWOdS2J%2FiDNOGZ%2ButLTNALZufR3jLKj88etyAexKU0dTFF3iIx0rgdtVhlwKfQImvYWC2w3GoxXSsjLQjUPbtXn5vKWWnfsFg9SYU6RVjdAiFIY4C18NaVggFM5MbXVDHjscnEhtE9GuBfALGIQ8swxnzF3DUnp5aPaMBcxUqkbUzwmxikXr5RCsM1LTj7z0keLsOE5Nq7h3EUy1ofy1pHASNdYsLVTMdP6SMKSqisoGOqUBPc3s%2BQVzZyd70WvKvAKXf95X1PhaB0ZTh%2Fb39lEBxACnSlJSg0J9ePEayfiCOpgxoC3ZjIzYqlHv5FqbafKNRoAaPB5mSKzFyquWv%2BYjyQLaU7CONaulXE0RKSy2iOQ%2FjCrdX3CxceH4SlQcLxkvoWkiv5eHa5DiZUG1WEnAw%2Ffk4GyW6L3wTurUKWde2XwVVRl6duD2PO29tx9kaur78JO3ti02&X-Amz-Signature=0347385ee409922c86fd1376e3e6bc121648aa510307da68fbc7aaf6ead421be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKZ6IYR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPAjgn4josQKfg84VXjGpNWA3ITxT2Se2bHT%2B4CkBPWAiEA%2FMSqQyzllN%2B%2FCSdysTmo%2FuCVGXQ2ba5O4Upjde7QeVgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNck79DnWQZop9D1xSrcA4q7D5I0d0yniZi0OwkpOee3KuRqpuL70M3Lvu%2B7CCr8avsq40zquX3II1i%2FNaJ%2F%2BC0WUc2EIaXPy%2F9uhTV%2BZMWhdM5TjKXrsQ%2BZJjzKXvJdnQ4QUgBKPwaNJS0s3FgtkWgwirhUQVbb7iDfa9uvK3sCMviAqIn3eQN0z3FK4dggc2U7A3EoXwjMmAdmYPBUcGrn06OPeaorPjE8OwloZJWz1fwNoycLdXHCkqzreBNLhmukMGDOIjLStE2aOXohsSNlh1ikGnbKupsa6ttiDAuEiRzFwJ2R4KW1GrQNqdj73NifblatJBIiDSvarFWCxTMk8Zd7wGgmUELZkgELJFfCr7Og4aXPs%2F1TvMBB5E7OrmXcljWg6uUQU2V1LyTkoGnEve1QxMcyDFD8N8MrILxQ%2FWOdS2J%2FiDNOGZ%2ButLTNALZufR3jLKj88etyAexKU0dTFF3iIx0rgdtVhlwKfQImvYWC2w3GoxXSsjLQjUPbtXn5vKWWnfsFg9SYU6RVjdAiFIY4C18NaVggFM5MbXVDHjscnEhtE9GuBfALGIQ8swxnzF3DUnp5aPaMBcxUqkbUzwmxikXr5RCsM1LTj7z0keLsOE5Nq7h3EUy1ofy1pHASNdYsLVTMdP6SMKSqisoGOqUBPc3s%2BQVzZyd70WvKvAKXf95X1PhaB0ZTh%2Fb39lEBxACnSlJSg0J9ePEayfiCOpgxoC3ZjIzYqlHv5FqbafKNRoAaPB5mSKzFyquWv%2BYjyQLaU7CONaulXE0RKSy2iOQ%2FjCrdX3CxceH4SlQcLxkvoWkiv5eHa5DiZUG1WEnAw%2Ffk4GyW6L3wTurUKWde2XwVVRl6duD2PO29tx9kaur78JO3ti02&X-Amz-Signature=db394c2f4fe7aa90d124292784d75641ce54d3bb8207a1f69934d81bfc7c5b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

