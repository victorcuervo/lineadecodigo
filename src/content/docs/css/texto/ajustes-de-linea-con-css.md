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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDA6K6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaGGbtwBuO2owq3571OzQVTFB0BhrL2H49db7O7ufuwAiEAk%2BjUmYay9bLul1o4tlQnahC%2BXm7VGLzRoo2bw5EcE1Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC%2FaKvIs6qf9nBy%2BAircA5VZImLq89D3UQEpyQ4g1pyX587qFGfQB3nXuJqBXhJohixKCPfusuxgQzmYIBqpi6aGdkS5A%2FjwW6e3W4pBHTEFaUKzi3Y%2BWyYj%2BKMq3nhE%2FlTcAHf8t53JLUo2tkGs1HxrYGmf4cwfi8vojfMnZdO%2FqEQkGFzLKb6INo01C0WabXoDWgmpJJVMGf2f%2FrFkse1Mo9bO%2F6s%2FPJOJiqh2gpZgjtmSyUIczRZsv2Gd3dEKwKNAkF6pneiJF6i1wS5x14%2FPw4lrhq5%2FNdw1vyJp6q4zINstVfmLv4YxTpJSxGk8%2FPm1XzVuF5BW9iIlLB5ujQwoUnMtJuuqOtYOrR5oHUXkT1d6HF7liJ1%2BNbhQhs2iojmn7lvH0wmIEHJSCsUlYf0zSqXyyrnf%2BqmWjYiDUrn%2F3asMLHnLB6fVLAb7wMyFrxi0VIf0gzyRvRpUSz%2F74fhF5LzF1mg8kZHoVdRdtCLGkASPTKAeYc%2FL0r2IhpgH7btmTokIrv5pIHR3Ipq7UY3bv9MDcDZlH3e%2BUk76F1sjM%2BnVkMHT5ecM500fSKBw4MnN%2B6GBQCLLJMrf28elYwTfiGWJudkglgvNKRn4vxzmxEUeIUMz7KFQSRfCGMd1VFSW78bOhmM6weiIMM6DicoGOqUBgwzxmme0PBxbh376HqG20QUegxnT4Kv4ye60MKFqIDabsCQdCiJKeK7rujM310pxfBDmhdcLCVNai2FG6WQxXmKQnggPoEuj8AYdrlRd5s%2F9v7uf00Q6%2FckrizaBCcw7yYz%2BpZlExu18Ln12L5WpjIowrA5zMs6Q1ZvGYBpGH3D7oH8HZTtvAiI3EO9YfprCxAxgcbETbUxYufkm9giD4khMpXjZ&X-Amz-Signature=b1950810484239086d0ab3ca552edbcd17e6064bda45a8ce3e3466e9a80afc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDA6K6Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaGGbtwBuO2owq3571OzQVTFB0BhrL2H49db7O7ufuwAiEAk%2BjUmYay9bLul1o4tlQnahC%2BXm7VGLzRoo2bw5EcE1Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDC%2FaKvIs6qf9nBy%2BAircA5VZImLq89D3UQEpyQ4g1pyX587qFGfQB3nXuJqBXhJohixKCPfusuxgQzmYIBqpi6aGdkS5A%2FjwW6e3W4pBHTEFaUKzi3Y%2BWyYj%2BKMq3nhE%2FlTcAHf8t53JLUo2tkGs1HxrYGmf4cwfi8vojfMnZdO%2FqEQkGFzLKb6INo01C0WabXoDWgmpJJVMGf2f%2FrFkse1Mo9bO%2F6s%2FPJOJiqh2gpZgjtmSyUIczRZsv2Gd3dEKwKNAkF6pneiJF6i1wS5x14%2FPw4lrhq5%2FNdw1vyJp6q4zINstVfmLv4YxTpJSxGk8%2FPm1XzVuF5BW9iIlLB5ujQwoUnMtJuuqOtYOrR5oHUXkT1d6HF7liJ1%2BNbhQhs2iojmn7lvH0wmIEHJSCsUlYf0zSqXyyrnf%2BqmWjYiDUrn%2F3asMLHnLB6fVLAb7wMyFrxi0VIf0gzyRvRpUSz%2F74fhF5LzF1mg8kZHoVdRdtCLGkASPTKAeYc%2FL0r2IhpgH7btmTokIrv5pIHR3Ipq7UY3bv9MDcDZlH3e%2BUk76F1sjM%2BnVkMHT5ecM500fSKBw4MnN%2B6GBQCLLJMrf28elYwTfiGWJudkglgvNKRn4vxzmxEUeIUMz7KFQSRfCGMd1VFSW78bOhmM6weiIMM6DicoGOqUBgwzxmme0PBxbh376HqG20QUegxnT4Kv4ye60MKFqIDabsCQdCiJKeK7rujM310pxfBDmhdcLCVNai2FG6WQxXmKQnggPoEuj8AYdrlRd5s%2F9v7uf00Q6%2FckrizaBCcw7yYz%2BpZlExu18Ln12L5WpjIowrA5zMs6Q1ZvGYBpGH3D7oH8HZTtvAiI3EO9YfprCxAxgcbETbUxYufkm9giD4khMpXjZ&X-Amz-Signature=3c7334a3ca9ad5afa55f91c8cea951779611f91e5cfb02762464ecc5f934c66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

