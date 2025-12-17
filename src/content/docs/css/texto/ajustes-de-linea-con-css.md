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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3IPANB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm26vwFHay2v9uk4iOOG%2F87Yqn9pWwnqDnOdHv4TQbiAiAFA3xXeWNUvSXGT7nHRjOUoGulOTWj2MUd7tQPR0sjqSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMwgq6W%2FZBmfsmodY3KtwD5z%2F%2BetLrewxUnSyJ%2BhOu4LlGRjWSAEC%2FaNK%2BeycI4tOSvCRty55gmMyZs42e4bg0s8r3rqPsU99Bsd0ycj0rX1DBIvmhRTA5yqQ0HXd%2BUG7ZkDwwJ5dnOsTGAAybohBVWy1syx4WwBib3HNZPtTKTbSqamL%2Bpip4p%2FOW%2B0u9PM%2B%2BHqaU75PbVSuwzyGKqsVD1tJdMPpiFQXQXD9NHuNPIURiHXfpEiWNfoBiqgZC4dhHBb2SMf9SEUCAUrQStY1Dx95LrI6z0%2FDsj9I5PbT4VyjwVXmPWh4H14Ji02huRNn%2Fbwn0b6w1LpfInSntvnucrMvokrQfH%2F2aVSZT4fJ4AuJ7hW26sN5fVnLry0te%2FuB0FKOQZ1JOVrreLfvacf%2BSFGtn7F%2BcAxQNrTKO3YDxktNlPWz6j0uinK0AvdkdhZfb26EZbsktQOnETQZj3h7WDrtmdte%2BcWVe9y5zBIgnDXj5SH1A%2BnqkwxVREaeOdx5%2FQfVjjU9gCKaJzeYElNHwhyx8lfKIlwhmg6QFXkFtr4DR24bhKTl7pvmi28k7fKC%2FPaf2ZXWePzfonf0k%2FPPz6jnjA8bbcpW%2FVIzJcchyHQLJFB5H6H422HQmNoo7OcS0pZXmfZrdHAZPvuIw5vCJygY6pgHLlc1eJlzwAKXWz9FaxwwxLvJ43HD9MdsrPRfhKiD1sYFKIHYR4pLX6svICgN1dSlTHV9AuLw15g1t3YFEko3tfdZ1cG7vUQ6jxmcWb9dzAkQCWtS2IVNEuO7WvFj%2BL60jCRaOC3ooX5p7zt46FFfHydGFnUL6I4vdFnKhyLvzgJTh6D2blympmN0cwioFga33Ocld%2FX2UBwlOCNYB91LqR9Aqmbtn&X-Amz-Signature=5fe78497913fbe8444716fd212323b3b61e2e43b5b5428cd24273c92e3b8a606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3IPANB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm26vwFHay2v9uk4iOOG%2F87Yqn9pWwnqDnOdHv4TQbiAiAFA3xXeWNUvSXGT7nHRjOUoGulOTWj2MUd7tQPR0sjqSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMwgq6W%2FZBmfsmodY3KtwD5z%2F%2BetLrewxUnSyJ%2BhOu4LlGRjWSAEC%2FaNK%2BeycI4tOSvCRty55gmMyZs42e4bg0s8r3rqPsU99Bsd0ycj0rX1DBIvmhRTA5yqQ0HXd%2BUG7ZkDwwJ5dnOsTGAAybohBVWy1syx4WwBib3HNZPtTKTbSqamL%2Bpip4p%2FOW%2B0u9PM%2B%2BHqaU75PbVSuwzyGKqsVD1tJdMPpiFQXQXD9NHuNPIURiHXfpEiWNfoBiqgZC4dhHBb2SMf9SEUCAUrQStY1Dx95LrI6z0%2FDsj9I5PbT4VyjwVXmPWh4H14Ji02huRNn%2Fbwn0b6w1LpfInSntvnucrMvokrQfH%2F2aVSZT4fJ4AuJ7hW26sN5fVnLry0te%2FuB0FKOQZ1JOVrreLfvacf%2BSFGtn7F%2BcAxQNrTKO3YDxktNlPWz6j0uinK0AvdkdhZfb26EZbsktQOnETQZj3h7WDrtmdte%2BcWVe9y5zBIgnDXj5SH1A%2BnqkwxVREaeOdx5%2FQfVjjU9gCKaJzeYElNHwhyx8lfKIlwhmg6QFXkFtr4DR24bhKTl7pvmi28k7fKC%2FPaf2ZXWePzfonf0k%2FPPz6jnjA8bbcpW%2FVIzJcchyHQLJFB5H6H422HQmNoo7OcS0pZXmfZrdHAZPvuIw5vCJygY6pgHLlc1eJlzwAKXWz9FaxwwxLvJ43HD9MdsrPRfhKiD1sYFKIHYR4pLX6svICgN1dSlTHV9AuLw15g1t3YFEko3tfdZ1cG7vUQ6jxmcWb9dzAkQCWtS2IVNEuO7WvFj%2BL60jCRaOC3ooX5p7zt46FFfHydGFnUL6I4vdFnKhyLvzgJTh6D2blympmN0cwioFga33Ocld%2FX2UBwlOCNYB91LqR9Aqmbtn&X-Amz-Signature=62ac50b2d1936abe35e586ccc43610e5a0ad18f564961b97347ba834075974c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

