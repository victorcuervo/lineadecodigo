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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUP3EZS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV9KdIo4%2B5FgooHcsH2Fj96QcfOFDzmUhE2fQttmQJzAiBkwWmUtUWLEhTcygGnWIaC2WQDa%2B%2BZH4g%2FCH4GtaJb8ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMoPtsQPHnSVa4ptc%2BKtwDJq0Geeboh0gapZBnoC3b51gsmf6Ww5BLY23go1OXx1fLaEF8y7CIUfCSke7YBEbtU9zQFxVCJxgdIfCOANdsZnWYQ4NSvgMFEMLeeAU4ria0Ps%2B2BE%2FPGLKpzctiDjmLfv6RUcJVSpbaEfXCS8ZUeXE3akNy%2BM87CBFQFM%2FEsAO0rfAouRbCOGOOZwfGzuJxQYT%2FNwhLKCecPNF137MY65FrRAWkPQxAKckJZaO7%2Fhvk40E9jykVG4fXD8uHYJmtZT4kaLDtCAN1SmBbPf7U%2FWSlWv5NJo1fDpVh1YjlHBPlZwwqGSgUGwFkxrej8GBTwYwi9bpFXP1NL64IjA194f%2Be9zr4r8MisFY22QPWr8ELveI0DxaIdp%2BrozpLaUZmSYlzvZGXr1o6oNSs4CWXOoSjQ8mbjdtrooGi5PJzcQ3eVMaFdAu2ZDNiTNdZ7c1h3IUBlDsgXxH11g4UekzIJ2MImj70UJ7UpfbZhjAu3RHF7KDePyQtj0dOhpyHL2k5lvgqXXjBYdwrNz%2Fr4oKCYI4PiF6XIeJ1avbH%2BWxj%2BPh%2FG%2F8NKgzN000hOF%2FoHhiUQPHpnsEPCDXJnn%2F8wrM0Q1L9qkApg4ZVAX2cuHiqrPDaOk4dSvo9eDe0UPYw88WKygY6pgHZHaDP26YscoQxcoOnwiDb8qb0hAftnXQeoMcbbzKuNlynD6RQqUi0Tp1u3hzB3LphgBaxTjxTE%2FWXHkG5%2FDTUgunjX%2F5vJmFxCu%2Flzyc1cAQiMrUZIHWLrEDhbpKjp6Vx1KlLqAeWRRx4Ct1f6GM5Bea%2Fqn5yngcxDMYXA%2Fonf5cbfTpUFfXET0hy6kjQ32Mq47ABIhBeaFrgq2MHKDeeqDgsi1IO&X-Amz-Signature=16375d4042e6575af09f0705bc5ebdc3112c056fe723a189c5ae1bc869161765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUP3EZS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV9KdIo4%2B5FgooHcsH2Fj96QcfOFDzmUhE2fQttmQJzAiBkwWmUtUWLEhTcygGnWIaC2WQDa%2B%2BZH4g%2FCH4GtaJb8ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMoPtsQPHnSVa4ptc%2BKtwDJq0Geeboh0gapZBnoC3b51gsmf6Ww5BLY23go1OXx1fLaEF8y7CIUfCSke7YBEbtU9zQFxVCJxgdIfCOANdsZnWYQ4NSvgMFEMLeeAU4ria0Ps%2B2BE%2FPGLKpzctiDjmLfv6RUcJVSpbaEfXCS8ZUeXE3akNy%2BM87CBFQFM%2FEsAO0rfAouRbCOGOOZwfGzuJxQYT%2FNwhLKCecPNF137MY65FrRAWkPQxAKckJZaO7%2Fhvk40E9jykVG4fXD8uHYJmtZT4kaLDtCAN1SmBbPf7U%2FWSlWv5NJo1fDpVh1YjlHBPlZwwqGSgUGwFkxrej8GBTwYwi9bpFXP1NL64IjA194f%2Be9zr4r8MisFY22QPWr8ELveI0DxaIdp%2BrozpLaUZmSYlzvZGXr1o6oNSs4CWXOoSjQ8mbjdtrooGi5PJzcQ3eVMaFdAu2ZDNiTNdZ7c1h3IUBlDsgXxH11g4UekzIJ2MImj70UJ7UpfbZhjAu3RHF7KDePyQtj0dOhpyHL2k5lvgqXXjBYdwrNz%2Fr4oKCYI4PiF6XIeJ1avbH%2BWxj%2BPh%2FG%2F8NKgzN000hOF%2FoHhiUQPHpnsEPCDXJnn%2F8wrM0Q1L9qkApg4ZVAX2cuHiqrPDaOk4dSvo9eDe0UPYw88WKygY6pgHZHaDP26YscoQxcoOnwiDb8qb0hAftnXQeoMcbbzKuNlynD6RQqUi0Tp1u3hzB3LphgBaxTjxTE%2FWXHkG5%2FDTUgunjX%2F5vJmFxCu%2Flzyc1cAQiMrUZIHWLrEDhbpKjp6Vx1KlLqAeWRRx4Ct1f6GM5Bea%2Fqn5yngcxDMYXA%2Fonf5cbfTpUFfXET0hy6kjQ32Mq47ABIhBeaFrgq2MHKDeeqDgsi1IO&X-Amz-Signature=24156179af44f062f18c39e5f29685bceadf0e6c82449ceb4b1eaf80296ecdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

