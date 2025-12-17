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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCOEGUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSl0Cvzbc2em%2F5dtZrnCphGqkLmfz%2FnaF3CcDzWHyHgIgW9GPgHWEg0sTsQ8lsEpmYsBhXX3flZg%2FIShh60HCyfcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA80KUx%2FeJxBwbhm7CrcA9HA1jVFF9ZjEU8%2FKJxlM979AtJF8icdUksAhqwlELu91BmCEisxgIhWAccOq4fuUukowTPTqF%2F1jJNrdGQzOauiSWXuHRHY1OZUVRpU47EYDqrw9sFBSRRbszDZoDifII4pF5Aq5FyLPF5RxwFcdm9IByeX4JEeYtQfX39AGTHcjp6RsgGf%2B9eHm%2FZZCLv%2FbukAE4KcpfesGcJ6tA%2FnnSsM%2B3KyTyF3Q6tu2l%2FYH65EJIEkSLL68e9NEzQOj5U%2Fell5SjolMqQaV24U0wDH3aThCWQ1aXjHpsx7yXG58I2pgLc2XaQLXjDN3GSARlbuDglU7X9pYp1ETWWaIpv8f4oJjRKwPa6VwcWZVTYUpdEMGHwKUuJkQB5QrYftyJWRcuIAqvQ1Al9CHQdj6lULrYukL8B86QlkLE2b4VFQJxenRvnDOa4NGu%2BM7BZV1WGSBgK7%2BmUIzSEmOEA6y4Bri3WwAMEA%2Bo9ZxtBka208axnzEGoqGFHQjPbyjCMZvJ9WDdeRktmgbwF0rYBxX2PNXtCuReRLoclvTRdH8C9NV8ovzZK7MWd1CGvOcgeOsqyWUwG8QW9j4dcmXHqElyntabGZK%2FeC1ZyrQw8Q%2Finb8fCmTZZ2XM8ewalbfTMDMJGrisoGOqUBUmY%2BIbsE%2F3r%2B0d9o3kbcwarITcMzdDDdJu61a188SJy6IN69sqev9PPsitnBfzWdctOf5tsueXU6P2NpHn0b%2FgCefz476L%2FrMLa26ZT3UlDTLkL9E8XnsNiRNs8ddZRiFpUdGM8OtFbgBNlrBdUVifz%2FQ9GaQtbU5CV5tfrxwredzxi24%2BB30wKrzOysIri6VnlyY6DYfWGafH3YhXRx7o8JGI76&X-Amz-Signature=66cd08fc9f597b27950a8d5c10303f54e183701943406fd5b2da3ca94cf776f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCOEGUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGSl0Cvzbc2em%2F5dtZrnCphGqkLmfz%2FnaF3CcDzWHyHgIgW9GPgHWEg0sTsQ8lsEpmYsBhXX3flZg%2FIShh60HCyfcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA80KUx%2FeJxBwbhm7CrcA9HA1jVFF9ZjEU8%2FKJxlM979AtJF8icdUksAhqwlELu91BmCEisxgIhWAccOq4fuUukowTPTqF%2F1jJNrdGQzOauiSWXuHRHY1OZUVRpU47EYDqrw9sFBSRRbszDZoDifII4pF5Aq5FyLPF5RxwFcdm9IByeX4JEeYtQfX39AGTHcjp6RsgGf%2B9eHm%2FZZCLv%2FbukAE4KcpfesGcJ6tA%2FnnSsM%2B3KyTyF3Q6tu2l%2FYH65EJIEkSLL68e9NEzQOj5U%2Fell5SjolMqQaV24U0wDH3aThCWQ1aXjHpsx7yXG58I2pgLc2XaQLXjDN3GSARlbuDglU7X9pYp1ETWWaIpv8f4oJjRKwPa6VwcWZVTYUpdEMGHwKUuJkQB5QrYftyJWRcuIAqvQ1Al9CHQdj6lULrYukL8B86QlkLE2b4VFQJxenRvnDOa4NGu%2BM7BZV1WGSBgK7%2BmUIzSEmOEA6y4Bri3WwAMEA%2Bo9ZxtBka208axnzEGoqGFHQjPbyjCMZvJ9WDdeRktmgbwF0rYBxX2PNXtCuReRLoclvTRdH8C9NV8ovzZK7MWd1CGvOcgeOsqyWUwG8QW9j4dcmXHqElyntabGZK%2FeC1ZyrQw8Q%2Finb8fCmTZZ2XM8ewalbfTMDMJGrisoGOqUBUmY%2BIbsE%2F3r%2B0d9o3kbcwarITcMzdDDdJu61a188SJy6IN69sqev9PPsitnBfzWdctOf5tsueXU6P2NpHn0b%2FgCefz476L%2FrMLa26ZT3UlDTLkL9E8XnsNiRNs8ddZRiFpUdGM8OtFbgBNlrBdUVifz%2FQ9GaQtbU5CV5tfrxwredzxi24%2BB30wKrzOysIri6VnlyY6DYfWGafH3YhXRx7o8JGI76&X-Amz-Signature=b1eece58ad300868b7716f3bcda203e0d1a79f289d436124abc5e74ac10351b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

