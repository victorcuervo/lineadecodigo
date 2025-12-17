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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYFDCSEF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPyPiDZPyzXEHzEOTGH45wk8HvJX2bF9e2dL3ldYtYAIhAOE%2BqZ%2F2WLlW6CKJlIBAdm1NcVmgsKDGhd8J4ZWz%2BReqKv8DCH8QABoMNjM3NDIzMTgzODA1Igy9b%2BaQvg24hVnRDDsq3APX0z%2F7KUVJ3d5hHqu9o4twm%2BWOBIQOK8d4MZWsMlXVoXGbAfY%2FOmlXku%2Br3A5RUXzzhlVf7Oy%2FkFv69YfUPEZnDYZLE9sqpHP169ZRJwsr7cAmx07aRMe83FzLqHkCjAbaKspo4aiP1eibzQN%2ByF1ZVjqNGIfUu2ljXH2CnTC%2BwCfdGbupy5IxUJKd8NPVEC3HnHoYndzPJ0CdjOHxWooYoLE2KDf4MvWbWtvueq%2BAooSgeCV37T4yzcJmxVf9uKX5bddKTiAyoM3jpAzEOgWxE6Yu50Ey2NUBr6ecyUgodCDu7E6J1NR8mLjuvn9UnJJg2Nu7vtIcMunfbqVwG9pADI9zw45MOOC%2B2pXHf5kqBQOofjy3on5i0vAhjqdBcyLEJbay2GRXwzUwQ9%2Fna3%2BBB7D8fDEx22dGXqq6d970ZB7gAQc5acEiC9yshGJFgjKSN7Yn7BgFtwETlW7SiIe6t5uuArFI2m9FdGn45puxJKAwZOGJZzRqn3yTnGNJMXgc6%2BquNQOF2fWJTZt4om73IxsUWwm4yDIYMW7zQAwEd3ktS6ENvtdSB0IGa8DJV4Tien3Khm1czxelRnfsU%2BFMLaBhN5pqcF7wgmbFtL0xrNFuoHfpeb2Sx%2BMMpTCY44rKBjqkAeDIm%2FrJHdriHsMA7Zfnzr2r0PJwhoNbEMfwDUHi2aOlbl75TDluKDZRm1lUNuYxsohR%2F6dxDpE8YrDspe3ndu0Ar%2BKu0OY59WQ0bE8gribhSmWnyLENlEEgJRHUUmd9atE1If0OMXnVeq6eUYyvPkAE21ZUwA0AmB6wCSAPBjFlmx66kH4qg9PNCAbxd5sj4B3sz6nTfVwlYI7TYIEfHnQyiPQQ&X-Amz-Signature=6af2abb1b1c0c8001f9cb28514c36441fcd1f7202dc985d84ca4e992848de5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYFDCSEF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPyPiDZPyzXEHzEOTGH45wk8HvJX2bF9e2dL3ldYtYAIhAOE%2BqZ%2F2WLlW6CKJlIBAdm1NcVmgsKDGhd8J4ZWz%2BReqKv8DCH8QABoMNjM3NDIzMTgzODA1Igy9b%2BaQvg24hVnRDDsq3APX0z%2F7KUVJ3d5hHqu9o4twm%2BWOBIQOK8d4MZWsMlXVoXGbAfY%2FOmlXku%2Br3A5RUXzzhlVf7Oy%2FkFv69YfUPEZnDYZLE9sqpHP169ZRJwsr7cAmx07aRMe83FzLqHkCjAbaKspo4aiP1eibzQN%2ByF1ZVjqNGIfUu2ljXH2CnTC%2BwCfdGbupy5IxUJKd8NPVEC3HnHoYndzPJ0CdjOHxWooYoLE2KDf4MvWbWtvueq%2BAooSgeCV37T4yzcJmxVf9uKX5bddKTiAyoM3jpAzEOgWxE6Yu50Ey2NUBr6ecyUgodCDu7E6J1NR8mLjuvn9UnJJg2Nu7vtIcMunfbqVwG9pADI9zw45MOOC%2B2pXHf5kqBQOofjy3on5i0vAhjqdBcyLEJbay2GRXwzUwQ9%2Fna3%2BBB7D8fDEx22dGXqq6d970ZB7gAQc5acEiC9yshGJFgjKSN7Yn7BgFtwETlW7SiIe6t5uuArFI2m9FdGn45puxJKAwZOGJZzRqn3yTnGNJMXgc6%2BquNQOF2fWJTZt4om73IxsUWwm4yDIYMW7zQAwEd3ktS6ENvtdSB0IGa8DJV4Tien3Khm1czxelRnfsU%2BFMLaBhN5pqcF7wgmbFtL0xrNFuoHfpeb2Sx%2BMMpTCY44rKBjqkAeDIm%2FrJHdriHsMA7Zfnzr2r0PJwhoNbEMfwDUHi2aOlbl75TDluKDZRm1lUNuYxsohR%2F6dxDpE8YrDspe3ndu0Ar%2BKu0OY59WQ0bE8gribhSmWnyLENlEEgJRHUUmd9atE1If0OMXnVeq6eUYyvPkAE21ZUwA0AmB6wCSAPBjFlmx66kH4qg9PNCAbxd5sj4B3sz6nTfVwlYI7TYIEfHnQyiPQQ&X-Amz-Signature=c88a26f536a475f1575518f191d0106ee5c39d895c2fbdf85bae2a2f8484f088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

