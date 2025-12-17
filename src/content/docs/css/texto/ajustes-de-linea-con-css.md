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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLXAAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDdFtD2%2BwjcGA5s%2FnYav2XwJY%2F4fIwKd2CJNL2jUl6gIgc77fNtw682E6xJl4ZjxkPwGavX9qzCzVsP%2Bn0fVhcWoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnPKJ4ALMzewbnoiircA03huxjBAJz6cmAEeagorZ6Pj1EDeHSW9QEjizm%2F5dHKX4%2BIYPkw4dWaXiFR3iUcbYKMfRAIUSEomD3E6fCj9jnEQvTKH4eljT19oSMPY8s9c1Gqune3GUX4RrnlrCWAI1Bqpf9P54nuc3VzUL4Pokr8dEDk7pFBnsrdev75TYRt0y5SZXzN0aEvUN0bctMX4OdiRflzXjMEbzrP6rzdxRk0lGjTQQZB7z631SD3H%2BLqiX%2BzYHTb9MOO4%2FulIYmbCpW2dvGOg0dxzIqhzey7AgH3t4UAOilx5G56XN6NOlue8co%2B%2FxI8CQiEUulkcrBbHJJ4EhHG7F2mA138W8qupjnMQ43Q68PfH40SPIs%2BIOIolxHD6MIdcV9830mqip4KNn7F551duZe9FDqIsAE5R6SiaM3GRxJkJUHAHFBk%2BPdqT0YD9wfaGMqteookpaZZbQYuURAu%2BEcSNHosq2UrZ8GEyRzOyocmeYJT%2FBvBLtNX92v0%2Baeoad3NTYaJHdoTOv%2B6S2qoqqQRrPT0vN1Nek2kOzp95IKuVOJa38n4s1O3a6zqOOBROPZx%2BwFZrWNPBB8SANMSgJBzMiG9hUmvJsfxXyjnxu8vcH%2B%2FMysj8VCcmHs%2Fa9%2Bt7yi0cxZBMLyfi8oGOqUB47jojNx5UPg0cOp2ovaTPyONOgf6%2BRWYVy6hML86k2%2FK7Zv2oncfmGjyMOgCcqJbbnWhS0W%2FexT7sQpowWQeQq7AO%2BtZOAOXiGYoSRyXUSMcyVreVmXCiEQlbB111wxLYdYmSVQPxuGeddYsug4HbpPBfMElBMvLpjNEQH1xyDwlgffoN0mjML4ZAokdIQ%2FXyEtRXUmbIT82JArEmHaePLHl7uIY&X-Amz-Signature=a3b99d8aacd1e47b99a2dfcbb2441d2ed75c892ce794212a09ba9e47bfd18ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKLXAAVT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQDdFtD2%2BwjcGA5s%2FnYav2XwJY%2F4fIwKd2CJNL2jUl6gIgc77fNtw682E6xJl4ZjxkPwGavX9qzCzVsP%2Bn0fVhcWoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnPKJ4ALMzewbnoiircA03huxjBAJz6cmAEeagorZ6Pj1EDeHSW9QEjizm%2F5dHKX4%2BIYPkw4dWaXiFR3iUcbYKMfRAIUSEomD3E6fCj9jnEQvTKH4eljT19oSMPY8s9c1Gqune3GUX4RrnlrCWAI1Bqpf9P54nuc3VzUL4Pokr8dEDk7pFBnsrdev75TYRt0y5SZXzN0aEvUN0bctMX4OdiRflzXjMEbzrP6rzdxRk0lGjTQQZB7z631SD3H%2BLqiX%2BzYHTb9MOO4%2FulIYmbCpW2dvGOg0dxzIqhzey7AgH3t4UAOilx5G56XN6NOlue8co%2B%2FxI8CQiEUulkcrBbHJJ4EhHG7F2mA138W8qupjnMQ43Q68PfH40SPIs%2BIOIolxHD6MIdcV9830mqip4KNn7F551duZe9FDqIsAE5R6SiaM3GRxJkJUHAHFBk%2BPdqT0YD9wfaGMqteookpaZZbQYuURAu%2BEcSNHosq2UrZ8GEyRzOyocmeYJT%2FBvBLtNX92v0%2Baeoad3NTYaJHdoTOv%2B6S2qoqqQRrPT0vN1Nek2kOzp95IKuVOJa38n4s1O3a6zqOOBROPZx%2BwFZrWNPBB8SANMSgJBzMiG9hUmvJsfxXyjnxu8vcH%2B%2FMysj8VCcmHs%2Fa9%2Bt7yi0cxZBMLyfi8oGOqUB47jojNx5UPg0cOp2ovaTPyONOgf6%2BRWYVy6hML86k2%2FK7Zv2oncfmGjyMOgCcqJbbnWhS0W%2FexT7sQpowWQeQq7AO%2BtZOAOXiGYoSRyXUSMcyVreVmXCiEQlbB111wxLYdYmSVQPxuGeddYsug4HbpPBfMElBMvLpjNEQH1xyDwlgffoN0mjML4ZAokdIQ%2FXyEtRXUmbIT82JArEmHaePLHl7uIY&X-Amz-Signature=fb080b5d954c886b446314363ef45fec622c09cf0649a34c35363c570e755daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

