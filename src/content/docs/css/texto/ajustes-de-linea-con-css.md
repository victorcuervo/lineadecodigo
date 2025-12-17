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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4HOMD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BHNkcoC8dl%2BEp6RO%2BD7aX0cnK1q0cPuxyYI5OJNNzHAiEA%2B71m%2FhwnXGhuRtzVBHBYTxbBKcd0GXQQmqpr3kOPDYUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPNsE9%2BzyOiqzcB%2F0ircA1VWI9DcVhRLBBrkpFeJ3gVc4r5QzLmEGSa2fQLUz%2BweubbG7ne3fXEG%2FnEFjJt%2F5dAZeSTseorlQAEA1CjdpWnNvNAZszUZAPVwgvO3ZAJzCpsnLL%2Fjck2SBXYXXFng0Ab9%2FSbCf17cDyS0Gv5BMJRCpbqaFCD%2Fv65rXI7xUixBclj6cKL2mTkQNwxJuf1Nt5uoRanBiUJpxsHYztfESh0vBdf5aKIjk%2BoYJgPaXyRDb2SZozhyz9J2OiAm5AhJ361A4zpjWgQaHAZZ0hj4f8X2fPBuC5us%2FBvn5mfYx357BIyhAV7k5F%2BC1HFCUERXGqDBMuOMyc7KyhTo2h9PjGUdijUcNpsS%2BQrbrLdvVjqgXi9jsLstRZ%2BSXD6K9UvKtG8gFL8FKpG%2FdxWhLCLSyE7NkmycrX2i8j2y7iWwQnuRHi9EH0XTmkCOsBLfQ522pXrdOPptJf8aEI%2FXuo2AazXawibzxogVuq2QI4m0VhaSDSw2LB7DKKI%2BXnf%2BKqltefcA2hmRaiJ1yJyFewEWub2AYTvkA112F4kiaqsbkbmeD19GpbLi3Qo7OU793trGdT3cDNi0jks6jiAJ7x6sueN%2FOGOd9HLeZoeB5WyTDp%2F1lhPBxpsAHvVlLWNKMOnFisoGOqUBFsC%2FZuw%2FhXnVbtETSDveRtxVPyejyJTtWYa7V1Qj16pxJnrtoqEZlMhaRlseR%2Bvtz5ISBUTrRpJ2e22wSB1cxFNLtzL0nIdaIP7rKO1iQmLysN8wW7ZQhxycGwukgb0vRhDfMBIjXn2R%2FguNGoEv2soQSf5H2tbT3Z%2BBNb8jDp6ysCjGqHiXzNk0sxXMLTrIL4Sk8P7Czvchnl5%2FYQVn0VtuLEsV&X-Amz-Signature=b4e6c00d29a98758e091e59acf3c4638cb5d89340998e4e0b09b3a7bdf2ef91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4HOMD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BHNkcoC8dl%2BEp6RO%2BD7aX0cnK1q0cPuxyYI5OJNNzHAiEA%2B71m%2FhwnXGhuRtzVBHBYTxbBKcd0GXQQmqpr3kOPDYUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPNsE9%2BzyOiqzcB%2F0ircA1VWI9DcVhRLBBrkpFeJ3gVc4r5QzLmEGSa2fQLUz%2BweubbG7ne3fXEG%2FnEFjJt%2F5dAZeSTseorlQAEA1CjdpWnNvNAZszUZAPVwgvO3ZAJzCpsnLL%2Fjck2SBXYXXFng0Ab9%2FSbCf17cDyS0Gv5BMJRCpbqaFCD%2Fv65rXI7xUixBclj6cKL2mTkQNwxJuf1Nt5uoRanBiUJpxsHYztfESh0vBdf5aKIjk%2BoYJgPaXyRDb2SZozhyz9J2OiAm5AhJ361A4zpjWgQaHAZZ0hj4f8X2fPBuC5us%2FBvn5mfYx357BIyhAV7k5F%2BC1HFCUERXGqDBMuOMyc7KyhTo2h9PjGUdijUcNpsS%2BQrbrLdvVjqgXi9jsLstRZ%2BSXD6K9UvKtG8gFL8FKpG%2FdxWhLCLSyE7NkmycrX2i8j2y7iWwQnuRHi9EH0XTmkCOsBLfQ522pXrdOPptJf8aEI%2FXuo2AazXawibzxogVuq2QI4m0VhaSDSw2LB7DKKI%2BXnf%2BKqltefcA2hmRaiJ1yJyFewEWub2AYTvkA112F4kiaqsbkbmeD19GpbLi3Qo7OU793trGdT3cDNi0jks6jiAJ7x6sueN%2FOGOd9HLeZoeB5WyTDp%2F1lhPBxpsAHvVlLWNKMOnFisoGOqUBFsC%2FZuw%2FhXnVbtETSDveRtxVPyejyJTtWYa7V1Qj16pxJnrtoqEZlMhaRlseR%2Bvtz5ISBUTrRpJ2e22wSB1cxFNLtzL0nIdaIP7rKO1iQmLysN8wW7ZQhxycGwukgb0vRhDfMBIjXn2R%2FguNGoEv2soQSf5H2tbT3Z%2BBNb8jDp6ysCjGqHiXzNk0sxXMLTrIL4Sk8P7Czvchnl5%2FYQVn0VtuLEsV&X-Amz-Signature=5b715db47c8bdbbae7e6f1e8795cbd2308e1579db22a764903525e6f890cba24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

