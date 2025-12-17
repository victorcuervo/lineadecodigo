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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5JJ36J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMKQLo8u2a6Gh8Ketiy6tPBZPFPeCUQCcdReG4iosVzgIhANxOns%2FhQJ9WjY3ge8q5ODVuKYS51FrqNLWd%2Fn5Pv%2B%2B4Kv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2FRLyo4j6eFBXjbIUq3AOIaZNA7%2BDd2d7mcSjMbass8a1mZ67GZPFHbc4zuI2LSZofTWDeFIvKjuSVEZ84ziNPiKvVXjWIMcL1FMIhmYtXggi%2BcMJvUqgQGO1eohvq5ZdaQZk6cQr%2B3lav4rd0OID36xHPAozw5x1awUBGUn%2FWti3oPylmH1cKmODpO7I2bJ7qBqQlF8F4k6VfWb2QKDtMCYR13%2B9fWlVbhkPpk7oxPnSNXwOZ5els3DWEuQ5N2Me6MqjnhNzit45NCMCAvCqy06KOpvFRET0urBqfF5tmfJdnic636ENLMxGAh3C%2F9EKfk%2Bvm2eyG2g2CwzTkPRMkFSoNdF5v%2FCW6wNhGk3%2FCIPCPJuFuFopoa%2FCAtSBE7kXPZwJeKibRaFwnKn6zECr98kvKTNoaFOZUCRMsPQWxkVqa1UYOjgeujTacQRl8azipR4PU23F8WBqQqKcUZ0ImXJzNe5UcVYkvFMUYE%2FX02iJM9KpkUtpVB3j%2BJB5ofex65Nnjvmc1D1FCKNrjDNBv2kQHCZ9NOKTghxX6NwyhRZgUtE1i7CJbnypyMno%2BZyO1Q%2BUZCo%2BI%2BgptXlbScOwQR%2Frt6eR9yOEP9DoNTGyEv7rYPKRmFi63KPORHiwPSOQt8Vy79qNXprZ4dTCc0YnKBjqkAUTNd40aLLok3oQlwPaYiJ33CKwPogAUpFwUQGKPL0Z%2BeWfQqehritSl5YnK7pLeqU78zObAj5y%2Fyf2f%2FsEGPvdy4DicsVSoG8soIh1qwON8mkDi%2FKZNkM66QipSYstFPpXR92kLSwsdk6IBe2jFVM%2B00LIk5%2FkXndA03DTA7odvsqcQ520F3VYNa0jbjbfnNo7kVMesXHATaN3Vh8r2GL7zL3W8&X-Amz-Signature=a1447c346e5d103b63763bd5ca1cd045951603c89c036ed391b628185d5cb775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5JJ36J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMKQLo8u2a6Gh8Ketiy6tPBZPFPeCUQCcdReG4iosVzgIhANxOns%2FhQJ9WjY3ge8q5ODVuKYS51FrqNLWd%2Fn5Pv%2B%2B4Kv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2FRLyo4j6eFBXjbIUq3AOIaZNA7%2BDd2d7mcSjMbass8a1mZ67GZPFHbc4zuI2LSZofTWDeFIvKjuSVEZ84ziNPiKvVXjWIMcL1FMIhmYtXggi%2BcMJvUqgQGO1eohvq5ZdaQZk6cQr%2B3lav4rd0OID36xHPAozw5x1awUBGUn%2FWti3oPylmH1cKmODpO7I2bJ7qBqQlF8F4k6VfWb2QKDtMCYR13%2B9fWlVbhkPpk7oxPnSNXwOZ5els3DWEuQ5N2Me6MqjnhNzit45NCMCAvCqy06KOpvFRET0urBqfF5tmfJdnic636ENLMxGAh3C%2F9EKfk%2Bvm2eyG2g2CwzTkPRMkFSoNdF5v%2FCW6wNhGk3%2FCIPCPJuFuFopoa%2FCAtSBE7kXPZwJeKibRaFwnKn6zECr98kvKTNoaFOZUCRMsPQWxkVqa1UYOjgeujTacQRl8azipR4PU23F8WBqQqKcUZ0ImXJzNe5UcVYkvFMUYE%2FX02iJM9KpkUtpVB3j%2BJB5ofex65Nnjvmc1D1FCKNrjDNBv2kQHCZ9NOKTghxX6NwyhRZgUtE1i7CJbnypyMno%2BZyO1Q%2BUZCo%2BI%2BgptXlbScOwQR%2Frt6eR9yOEP9DoNTGyEv7rYPKRmFi63KPORHiwPSOQt8Vy79qNXprZ4dTCc0YnKBjqkAUTNd40aLLok3oQlwPaYiJ33CKwPogAUpFwUQGKPL0Z%2BeWfQqehritSl5YnK7pLeqU78zObAj5y%2Fyf2f%2FsEGPvdy4DicsVSoG8soIh1qwON8mkDi%2FKZNkM66QipSYstFPpXR92kLSwsdk6IBe2jFVM%2B00LIk5%2FkXndA03DTA7odvsqcQ520F3VYNa0jbjbfnNo7kVMesXHATaN3Vh8r2GL7zL3W8&X-Amz-Signature=e4d0dee01a100e9fcae79db8e0fa3ea3456abec0170a599139996bd7d22cb95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

