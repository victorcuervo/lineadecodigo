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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL6QOO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqFi4mc6w9Qp9CEsGpRex%2F1iVy0KDx%2BHtyUsCJjU6cQAiBQk2g8d%2Fp2JaFQnI%2BSSmaySc6ko8cyjTLe%2BFo1LdOqLCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMlduTKsZVHb%2FP4PGSKtwDKEdcUC8SoTusxGEVQ%2B%2FIweKqCQqGKfI%2F14kayXYCTvRQUZ4cvEGW9tqk8N%2FzYs8wLwjWzG3HsSdkl7BfK7n%2FXXAoTzhRJlJB%2F2H6MJHhtDRW9Nc3cx2tV1%2FQKpXTwwrgSukGy8F0KV%2Fu%2Fhk59dBqNTfGs3bnXH%2FqtIE0triWSKN6HkDFmjYVOR0Ihvq7bqhrNljUllsZKmbu06K0tr7F9hRv2akaNnrNFqAENSjjqk5tN4QyGyJLF%2BAGj6R1fGcIdzsYRr2rOKh6c60%2Bpqc9j3aTfeO00Zlj0PUmysza84lZRj3T4X6hbVfu%2BvuqyfheFpwB0OQ9AQxtEZnaz%2F%2BFVXjqiCQ5mJgCvIx3JN5LkpyHnwEVqqwKHLnva30UxXWqhJrpkB5B3cjvqODfEH0Xg%2Bqg1G5qNjfrRX99%2BRdAAcK%2FOWDRqIfnBkhLj1DXfsu9sOX6NKcrV0UW8BkyzyGeURv3dLHq8eV0Z%2FvQUC2kOTuhj5yYUCh0auvJiD6%2BPFsYkkOHwfT6uzQGlWw0EUOp5dqlZV%2BSYDhpLtcLCSrRjdSUEYyLLkED7fmnKyDxxdPb8YZvEkOLIBQBrmxIHvcrz3z9Tz0YNKL3Y9yDEf4XanTojQVZHP0j7HGER00wuvuHygY6pgH%2BOJj%2FJKkyYCL0AZdnAUpfctB%2Fi76xGUjWRCJeCGfd9GI8vbsf%2Bxq8C7K0zPcR0h7OiULOu25Cu7MGdX9Qq2pLNoDwkOhmkWc4CbP%2B%2BxtClZU5VPdB%2BcalOheWevXz58A0pWJG8JJeAT%2Fxh2oodbDkE1C3F3niCYLoI9EtxO0JD3ZA3aBcNc2maHPp11r7B59bako1t0UOnIgaqI96lUxWAru%2BalQd&X-Amz-Signature=6bddc48d5a7e1e1650892a1f1887982644a6036c756aa1cbdd8cabad43e8c8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL6QOO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqFi4mc6w9Qp9CEsGpRex%2F1iVy0KDx%2BHtyUsCJjU6cQAiBQk2g8d%2Fp2JaFQnI%2BSSmaySc6ko8cyjTLe%2BFo1LdOqLCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMlduTKsZVHb%2FP4PGSKtwDKEdcUC8SoTusxGEVQ%2B%2FIweKqCQqGKfI%2F14kayXYCTvRQUZ4cvEGW9tqk8N%2FzYs8wLwjWzG3HsSdkl7BfK7n%2FXXAoTzhRJlJB%2F2H6MJHhtDRW9Nc3cx2tV1%2FQKpXTwwrgSukGy8F0KV%2Fu%2Fhk59dBqNTfGs3bnXH%2FqtIE0triWSKN6HkDFmjYVOR0Ihvq7bqhrNljUllsZKmbu06K0tr7F9hRv2akaNnrNFqAENSjjqk5tN4QyGyJLF%2BAGj6R1fGcIdzsYRr2rOKh6c60%2Bpqc9j3aTfeO00Zlj0PUmysza84lZRj3T4X6hbVfu%2BvuqyfheFpwB0OQ9AQxtEZnaz%2F%2BFVXjqiCQ5mJgCvIx3JN5LkpyHnwEVqqwKHLnva30UxXWqhJrpkB5B3cjvqODfEH0Xg%2Bqg1G5qNjfrRX99%2BRdAAcK%2FOWDRqIfnBkhLj1DXfsu9sOX6NKcrV0UW8BkyzyGeURv3dLHq8eV0Z%2FvQUC2kOTuhj5yYUCh0auvJiD6%2BPFsYkkOHwfT6uzQGlWw0EUOp5dqlZV%2BSYDhpLtcLCSrRjdSUEYyLLkED7fmnKyDxxdPb8YZvEkOLIBQBrmxIHvcrz3z9Tz0YNKL3Y9yDEf4XanTojQVZHP0j7HGER00wuvuHygY6pgH%2BOJj%2FJKkyYCL0AZdnAUpfctB%2Fi76xGUjWRCJeCGfd9GI8vbsf%2Bxq8C7K0zPcR0h7OiULOu25Cu7MGdX9Qq2pLNoDwkOhmkWc4CbP%2B%2BxtClZU5VPdB%2BcalOheWevXz58A0pWJG8JJeAT%2Fxh2oodbDkE1C3F3niCYLoI9EtxO0JD3ZA3aBcNc2maHPp11r7B59bako1t0UOnIgaqI96lUxWAru%2BalQd&X-Amz-Signature=41746d97be12ccb5ca30ee8cb3baebab203cfe504ebdfbf078d9ef07a41bd9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

