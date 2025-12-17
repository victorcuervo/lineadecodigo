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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNTMUA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdoaT0fPAKzBPrQG7hvdDWq5g2RW6YYvN%2B5Rxj6dnKzAiAzTi02eOOGYXGSMEAAEXWUgivX33V6WGfbxBroO3QolSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUYMBF5hay4mfHr9zKtwDTXyE%2BvUiQUDZ1tQznb1ke3%2FlFyvErWQfoAkyjYT%2FHtHQUQsctd%2FmtrzihOpUNdEBl0Z4P9rtX8JtKT%2BGeO5tw%2BFHyKzDMCqoqxLBOqbwU40q5HGcqZJdnyQAc%2BAQv36dJg1vaCkLWxMDK3LWX18Xl9M14l9%2FHFYQ%2FkHLecGsRJUfNUqThzrgc%2BR%2Bafq7WZXAmEO282gg9CcYq0zqnEiqTDPiKwoI4K%2Fd5SEg5xhy7rbZao7ilOTAwSf5oHsmxWzEs7RhbA%2Bxmb6R8ItqtwncLS2FHpU05UuzlLgleQttcFyiUDFtGAEClIdRaM5lqCE3pvTr3MvZWZkj%2Bbu%2FXsc4%2F40CBFRe9w8sDAzavZudJVEEoNRANvJHAL%2BRFoLRe0QFLhWgiHOdapnmbOncObgjw9JbUbxYtHv65dwyVL4ltV9U%2Fy%2FTdH9YCR77JxjIwR3kNCKihZruqwIosOmcEpKt1Y3Ct%2Fv4SU0Zy0WBg9JrovugW2OI5Xy2BbcZUXJlWm7eqsl4hn4r5Kvha7md%2B6PrE8xrGkG58RVXu1zQYqq8I9oeUqX6I7XnDl3PD4oB93XWhe%2BRM%2F6lenNNulb%2Fb4wf6ID8hli5WWIN4wgNPIZv7Gp99UeF%2BRChqvE410wwyIKJygY6pgE0khQ9OIfR20wbFOB0L6uGnpj0iK%2FU5q38I25YTxYuQfudGgXr5Mz%2BlP4z4594%2Bix8gNPS26eQ5y0bixUMfcKNgATkvLh6HttFSBG0p9G4%2FycG7ahco9oA4I4g%2Bump5K9Tz0L4W6iwXD4YDLbvncgyhNm4k0UZ2gofPMeuRmjIWWVQa7WyQe2d%2BkzVX5c5liBa1fnOflm1PwpACKsWw0A2VnO8Uudo&X-Amz-Signature=b76348e3575937a4402ed461724c8809580469eaca24257650e2d022123e59e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNTMUA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdoaT0fPAKzBPrQG7hvdDWq5g2RW6YYvN%2B5Rxj6dnKzAiAzTi02eOOGYXGSMEAAEXWUgivX33V6WGfbxBroO3QolSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUYMBF5hay4mfHr9zKtwDTXyE%2BvUiQUDZ1tQznb1ke3%2FlFyvErWQfoAkyjYT%2FHtHQUQsctd%2FmtrzihOpUNdEBl0Z4P9rtX8JtKT%2BGeO5tw%2BFHyKzDMCqoqxLBOqbwU40q5HGcqZJdnyQAc%2BAQv36dJg1vaCkLWxMDK3LWX18Xl9M14l9%2FHFYQ%2FkHLecGsRJUfNUqThzrgc%2BR%2Bafq7WZXAmEO282gg9CcYq0zqnEiqTDPiKwoI4K%2Fd5SEg5xhy7rbZao7ilOTAwSf5oHsmxWzEs7RhbA%2Bxmb6R8ItqtwncLS2FHpU05UuzlLgleQttcFyiUDFtGAEClIdRaM5lqCE3pvTr3MvZWZkj%2Bbu%2FXsc4%2F40CBFRe9w8sDAzavZudJVEEoNRANvJHAL%2BRFoLRe0QFLhWgiHOdapnmbOncObgjw9JbUbxYtHv65dwyVL4ltV9U%2Fy%2FTdH9YCR77JxjIwR3kNCKihZruqwIosOmcEpKt1Y3Ct%2Fv4SU0Zy0WBg9JrovugW2OI5Xy2BbcZUXJlWm7eqsl4hn4r5Kvha7md%2B6PrE8xrGkG58RVXu1zQYqq8I9oeUqX6I7XnDl3PD4oB93XWhe%2BRM%2F6lenNNulb%2Fb4wf6ID8hli5WWIN4wgNPIZv7Gp99UeF%2BRChqvE410wwyIKJygY6pgE0khQ9OIfR20wbFOB0L6uGnpj0iK%2FU5q38I25YTxYuQfudGgXr5Mz%2BlP4z4594%2Bix8gNPS26eQ5y0bixUMfcKNgATkvLh6HttFSBG0p9G4%2FycG7ahco9oA4I4g%2Bump5K9Tz0L4W6iwXD4YDLbvncgyhNm4k0UZ2gofPMeuRmjIWWVQa7WyQe2d%2BkzVX5c5liBa1fnOflm1PwpACKsWw0A2VnO8Uudo&X-Amz-Signature=2a093d6fdc4e746ac5a34449fafed950f0bf35dc81b353b45b0c40d4bc362ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

