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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LR77J33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmx5wx6fhU%2F4w7lJRja3Sgh%2B2z5thY0%2FnPki%2BQnUTTQIhAKHs%2Fy6Iu%2BkDheSjvA8Q8CH1MGcq%2FwOPR1UHIKb95MqbKv8DCH4QABoMNjM3NDIzMTgzODA1IgyUXtngOJMySmkykL8q3APxqw2T%2FflZ1%2Bwzeumitqp%2Bx5tFdKZDTUNhTA2dyze854NYZ3Dna60MCM4ME8MAWNqwt90M%2FSft3BQ5IHZCJDef5Dz8J8qqY%2FAZ%2FrU3RW92DVaK%2BP3mFhPQvMICzp%2F1MId9ovlGQ0fFwzM%2F%2BUECo8b6zn8cR2XNtvmHm9eLkU7XLIBTRveEVPq5%2Fx7NIZV557H0LdRSWWosDG2EthC%2FcKrxo2Equc2Y0tJou%2FUvMhq1ufiKeE0QVHp3jHE0PIxmtGSPA31wSVkxJvUxzAaqsmezsEpppv%2FvOvB7Tx65aPg2WhPvps%2B3QiShCI5z3V7SPxsxkovE8EnDEkSU5n95QIKgDbrVh9XO14DmPk3lK9yWkoTO4ImP%2BW9fQEsu0BwYjYMJGDbTSoG59NpFp7YBeV60U%2Fr%2Fc4pPSyp8M4Js26RbtHQRQDISzysF%2BHRzv6Wo2zRzV6lZkyk9FZI1uzdkrSxYDeCBIUoMolmwGhqW%2FC%2BJOLLvqB6FQvR%2F7t%2BGAigQMx1PMg3CxO233wAZRzFp5voJPdYYpWgrb8gFxGsx5mJdPXtDr%2FzaZF3MwExk7ZyenLj6jnxKR%2F29Z2Efc%2FxbmSD3mTsKQrA8JEm64I%2FzZxZrFKCdVD5T8mmUnRgj5jDQxorKBjqkAZ5VRLn%2BoTcRZHqnDNdzJbAtpP1A1ysd6qOe%2Fmj%2BQmBo6Nv4lttrCXvcpcEmmZOfV%2B09wENIpzfLUbxsgd3bB0ITj190w4vn8tYRk4rP03mXT4h9oIctmw6NA3wiaARhVkkbU8a8QQyorsQRNAWHDO9ZuVnedTxeutbOXnF5v4vJ1%2BJVuan6TAyYVkxmKgPAWj7JW83rJFT9%2FJZtocB3QUwuDwOZ&X-Amz-Signature=5889a427bb832a055d16c3b53d713d08061ebf38ddd56729c44b17a550c8fc92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LR77J33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlmx5wx6fhU%2F4w7lJRja3Sgh%2B2z5thY0%2FnPki%2BQnUTTQIhAKHs%2Fy6Iu%2BkDheSjvA8Q8CH1MGcq%2FwOPR1UHIKb95MqbKv8DCH4QABoMNjM3NDIzMTgzODA1IgyUXtngOJMySmkykL8q3APxqw2T%2FflZ1%2Bwzeumitqp%2Bx5tFdKZDTUNhTA2dyze854NYZ3Dna60MCM4ME8MAWNqwt90M%2FSft3BQ5IHZCJDef5Dz8J8qqY%2FAZ%2FrU3RW92DVaK%2BP3mFhPQvMICzp%2F1MId9ovlGQ0fFwzM%2F%2BUECo8b6zn8cR2XNtvmHm9eLkU7XLIBTRveEVPq5%2Fx7NIZV557H0LdRSWWosDG2EthC%2FcKrxo2Equc2Y0tJou%2FUvMhq1ufiKeE0QVHp3jHE0PIxmtGSPA31wSVkxJvUxzAaqsmezsEpppv%2FvOvB7Tx65aPg2WhPvps%2B3QiShCI5z3V7SPxsxkovE8EnDEkSU5n95QIKgDbrVh9XO14DmPk3lK9yWkoTO4ImP%2BW9fQEsu0BwYjYMJGDbTSoG59NpFp7YBeV60U%2Fr%2Fc4pPSyp8M4Js26RbtHQRQDISzysF%2BHRzv6Wo2zRzV6lZkyk9FZI1uzdkrSxYDeCBIUoMolmwGhqW%2FC%2BJOLLvqB6FQvR%2F7t%2BGAigQMx1PMg3CxO233wAZRzFp5voJPdYYpWgrb8gFxGsx5mJdPXtDr%2FzaZF3MwExk7ZyenLj6jnxKR%2F29Z2Efc%2FxbmSD3mTsKQrA8JEm64I%2FzZxZrFKCdVD5T8mmUnRgj5jDQxorKBjqkAZ5VRLn%2BoTcRZHqnDNdzJbAtpP1A1ysd6qOe%2Fmj%2BQmBo6Nv4lttrCXvcpcEmmZOfV%2B09wENIpzfLUbxsgd3bB0ITj190w4vn8tYRk4rP03mXT4h9oIctmw6NA3wiaARhVkkbU8a8QQyorsQRNAWHDO9ZuVnedTxeutbOXnF5v4vJ1%2BJVuan6TAyYVkxmKgPAWj7JW83rJFT9%2FJZtocB3QUwuDwOZ&X-Amz-Signature=25bdd6c7703d308d6bf8bb57267516714b0775d5d47cfad2454b13774b7de0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

