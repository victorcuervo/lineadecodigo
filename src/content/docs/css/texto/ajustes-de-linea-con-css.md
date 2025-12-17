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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6EBRUB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqQH0JQOmzsT5VZ2k98t9BM2edrA1tivWGu55jjdxdWwIhAM5XsFd%2F32MTJFZENfuTV2hSutCwkOkoD9UR6FgloX3pKv8DCH0QABoMNjM3NDIzMTgzODA1IgyCyaFcO43tsolHsuQq3APWWJlk5QSuL0DevGwc%2B2SKwLuSbvNvRgAlZZbK0N%2BkVi9Iba1cZVD3RYmlNcsYD4iKR%2FIv%2FHZCIpVHiB0Q%2FFWnzHp52JeUDV1aj370ZeED1YYM%2FUm2Z%2B%2FkhIFK6xBAGekKbHrlwQXqXGJ3G2RJqJQ0quUClXCDfckjr8w1dJCDPAxzCl%2B9Qz8glUiqDgt7MOKpMJZF6hwMz2wM1xMZNRN6A2DMF2qd4G6zSgVGo5EQcWfIpFq2x6GMhuIUVQfNlkvczGgOjO7YFL12EP8kzyhSeNED%2FkdpheGuqe66IFMVOStiwK651jH29B2TJDrxIk%2BJbpql2TzkOKgRqm%2FiMtgTWKnqzzuwZw96OhS0aMFeLCwPlb5g6df1UKHWdU3hEGC5lW7W1NhLsUdP3imVeFppTcHoF0eZ%2FMQntLIpWsB%2BF7zn7zt4zNLms3L3pwgq7r9pJ3fCPsI96JDBT0PRpyAxD8R6EEBJnPneAgD%2Bmv6%2BiGsxox1xzBSHLfAvXEdtXyqMFSDVllhQHKLw56vmSBEZPA891xPbBPfqXvBblYkAIAS7AG49TXy%2FCH3pzV3dEDEc3KzrSKo92lB3M5AbSG1AmzHG15k1C%2F38zwWh%2Boly6VjkmuforCDjhPJr4TCHq4rKBjqkAbBFJEhvTdDkTpNGN51YZeFy%2FB600v9z6crW47FKaweUFm5brneDcEGs7OJOJkGUtUllxpsWycG4389KA%2FH0RwgtlHx9Wun03sgFLzKAVFD%2FMC87OCs1peoP4eSgN06YkXjAMujHLX7nGWmKA4F3cwpK1DilSijvYK0BOGjqAiW5CIcGjysIcJz%2F%2BtO6k9jDRH9f0ji1O1lzCdv8eCKFkZI2Hm2m&X-Amz-Signature=6d014f7ef1015bca22fd26089e8284dbd6137679a37a82ddc509d97456afbb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6EBRUB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqQH0JQOmzsT5VZ2k98t9BM2edrA1tivWGu55jjdxdWwIhAM5XsFd%2F32MTJFZENfuTV2hSutCwkOkoD9UR6FgloX3pKv8DCH0QABoMNjM3NDIzMTgzODA1IgyCyaFcO43tsolHsuQq3APWWJlk5QSuL0DevGwc%2B2SKwLuSbvNvRgAlZZbK0N%2BkVi9Iba1cZVD3RYmlNcsYD4iKR%2FIv%2FHZCIpVHiB0Q%2FFWnzHp52JeUDV1aj370ZeED1YYM%2FUm2Z%2B%2FkhIFK6xBAGekKbHrlwQXqXGJ3G2RJqJQ0quUClXCDfckjr8w1dJCDPAxzCl%2B9Qz8glUiqDgt7MOKpMJZF6hwMz2wM1xMZNRN6A2DMF2qd4G6zSgVGo5EQcWfIpFq2x6GMhuIUVQfNlkvczGgOjO7YFL12EP8kzyhSeNED%2FkdpheGuqe66IFMVOStiwK651jH29B2TJDrxIk%2BJbpql2TzkOKgRqm%2FiMtgTWKnqzzuwZw96OhS0aMFeLCwPlb5g6df1UKHWdU3hEGC5lW7W1NhLsUdP3imVeFppTcHoF0eZ%2FMQntLIpWsB%2BF7zn7zt4zNLms3L3pwgq7r9pJ3fCPsI96JDBT0PRpyAxD8R6EEBJnPneAgD%2Bmv6%2BiGsxox1xzBSHLfAvXEdtXyqMFSDVllhQHKLw56vmSBEZPA891xPbBPfqXvBblYkAIAS7AG49TXy%2FCH3pzV3dEDEc3KzrSKo92lB3M5AbSG1AmzHG15k1C%2F38zwWh%2Boly6VjkmuforCDjhPJr4TCHq4rKBjqkAbBFJEhvTdDkTpNGN51YZeFy%2FB600v9z6crW47FKaweUFm5brneDcEGs7OJOJkGUtUllxpsWycG4389KA%2FH0RwgtlHx9Wun03sgFLzKAVFD%2FMC87OCs1peoP4eSgN06YkXjAMujHLX7nGWmKA4F3cwpK1DilSijvYK0BOGjqAiW5CIcGjysIcJz%2F%2BtO6k9jDRH9f0ji1O1lzCdv8eCKFkZI2Hm2m&X-Amz-Signature=81f527607dd347b4b12de2e845752eac0252822c7e053e6ff1199f5a1c893b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

