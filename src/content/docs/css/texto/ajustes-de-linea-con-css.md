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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N6GMEGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2BKvmwcBORRF6ZQSf%2FA%2FVT9wB3K4Htf4zdn03rab1sAiBd%2FXAlX%2Fu93ZpygnA1%2BjxnAtVqSn7HrD96DsfnkkDkiSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMSRvomujdeTcwvmmHKtwDWhl0qLQchK298%2B2Ha9OhZ%2B7RZbD8M1BbYMbSw1g8WjslwLJJZhtWjrrP8ofNKA7x0DZIuIMUHTVwtiHfARDnVv%2FsNKVjCYVjtEu0OKzfTRXMv85I%2BGUs%2Fod7%2BbJ5VTPh1QzMyxA2vDBMBrQ1R61Nu%2BvZ2cnQSc87w1RyRWjMd5ozhYJmDvjgH1hh8HQVvi%2BgBm%2Fe26tCMXQG3FHwm8mQ6l1wQzLbsJbRQ%2BIkN2eJxMVJBERxu06IyeSwQeMdplhEZHES7idTsceJAlNJ9X8Xaclw08EeX2%2BCjUzDFjKddlv1Xi3b0%2FcSPRXpL289fJY5rG0OkjSSuZDOutPVuC8bH7kRhNOl%2B7pn0IBVJllseArU488if8EGgknAW%2FtVGGYcyYbOY42fc%2BVvNw13wJAojYh2CCXN31wqJtfL9OwTqpE5pRhzU2LRlJn1z%2BwN4Vy17IwBeI5lumk6fFYQEB5fNWdtW98ufbR2uMuCe0zLtTRXWhCS3Nnp0rERV0G8StoQ99TwSK69WmwdTsiFdG64Ett3BB6jHrw%2FY0zR97BMAvOk5L5PE8h7KGIf5dHonwtGstpanjlcfPs7Oxm%2F6o2QhDE9Wwa1qvgECTC%2F3xJ1LMWCcCo84FAI%2FfpXL1sw5qqKygY6pgENPiaz32VhKMrMk00QMFqFpa6zPFvU8prCspseheEeJ9kVljldyxPIQsFvWCUD9vmsaSEHqhMGsJP4U15mwTQvGxCOSeKTyuRHvB3QzndSiggS7jqeYOPxH2twE34eriMnE0m6FJlEqIWmc7eqmoXOsUvaQyXjTJAt7gQ5J%2Fo61Lmtd70mc1H5e4gJLCTpUnJ%2Fy8cMqtmYXa416MW9iEeUxAOt0%2FIA&X-Amz-Signature=33b1df6c56a474b97a6d9375227304ea65036bf436a887f3d1621617bb525a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N6GMEGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf%2BKvmwcBORRF6ZQSf%2FA%2FVT9wB3K4Htf4zdn03rab1sAiBd%2FXAlX%2Fu93ZpygnA1%2BjxnAtVqSn7HrD96DsfnkkDkiSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMSRvomujdeTcwvmmHKtwDWhl0qLQchK298%2B2Ha9OhZ%2B7RZbD8M1BbYMbSw1g8WjslwLJJZhtWjrrP8ofNKA7x0DZIuIMUHTVwtiHfARDnVv%2FsNKVjCYVjtEu0OKzfTRXMv85I%2BGUs%2Fod7%2BbJ5VTPh1QzMyxA2vDBMBrQ1R61Nu%2BvZ2cnQSc87w1RyRWjMd5ozhYJmDvjgH1hh8HQVvi%2BgBm%2Fe26tCMXQG3FHwm8mQ6l1wQzLbsJbRQ%2BIkN2eJxMVJBERxu06IyeSwQeMdplhEZHES7idTsceJAlNJ9X8Xaclw08EeX2%2BCjUzDFjKddlv1Xi3b0%2FcSPRXpL289fJY5rG0OkjSSuZDOutPVuC8bH7kRhNOl%2B7pn0IBVJllseArU488if8EGgknAW%2FtVGGYcyYbOY42fc%2BVvNw13wJAojYh2CCXN31wqJtfL9OwTqpE5pRhzU2LRlJn1z%2BwN4Vy17IwBeI5lumk6fFYQEB5fNWdtW98ufbR2uMuCe0zLtTRXWhCS3Nnp0rERV0G8StoQ99TwSK69WmwdTsiFdG64Ett3BB6jHrw%2FY0zR97BMAvOk5L5PE8h7KGIf5dHonwtGstpanjlcfPs7Oxm%2F6o2QhDE9Wwa1qvgECTC%2F3xJ1LMWCcCo84FAI%2FfpXL1sw5qqKygY6pgENPiaz32VhKMrMk00QMFqFpa6zPFvU8prCspseheEeJ9kVljldyxPIQsFvWCUD9vmsaSEHqhMGsJP4U15mwTQvGxCOSeKTyuRHvB3QzndSiggS7jqeYOPxH2twE34eriMnE0m6FJlEqIWmc7eqmoXOsUvaQyXjTJAt7gQ5J%2Fo61Lmtd70mc1H5e4gJLCTpUnJ%2Fy8cMqtmYXa416MW9iEeUxAOt0%2FIA&X-Amz-Signature=a4f12d33b45a0732842f3ab06adbeb17622c8c4d43eee3d9f935584cc9add5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

