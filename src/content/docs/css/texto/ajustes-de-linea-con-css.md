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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTWZGMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDas0Oi1Sh1hVlKvINNKOCODkcap%2Fc%2FlLUKDxIhs88zxAIhAJl4jKSYbs9UYsVsDgN00DZFf7%2FycdEYsPVv09SgZUqLKv8DCHsQABoMNjM3NDIzMTgzODA1IgzaF98SR%2BC%2Fnxvlfboq3AM68Mg9I%2Fs%2Bgc4DZtS1r0RQfQBW2e0y34YflGmw4kzlxdDeF6J4joWLXUvAe5z2dWKkxJ8n%2F4HW2bjDmquEOE%2BIpcDsl3V8pza8a5u2G7gzcXryA275%2FmTAxs1reW5aHikc420kxB4FI%2BFLmiXQv6z21vva7FAECdoyhCSOA7Uyw2qgV2O3hYmS%2FO8KXwgSUA0E1%2Bfdgv3WyDs3sxf5X0lxPFn22aVUpXvMF22%2Bt8r2GtiKzvth78YlgW5KwGfNVihQTYHaHsjkPn2wRfKChjjb1a2AAmNM4ClVEorr3XHutGNEJTvU%2FPmazA7QdECeVQ60erOnynFaMGuwF%2BnbJN737jaZWT9L54uMIbp8fSsLqoNJs9NXtmEBCLM4pm3As68P2ISVwejq5FfBGb4J3Wg7DPGdteg9kP9P6dok5IQWew95%2FL3iMsL7fqdKocUwacZzvlJRxnQ08ZYxvz2E%2FPl%2BYWfpq5efBEVGuNaUJhNwzw4bV71yXud2vGxqXGHNc5dZLr5MqA6AAFbkL7UDpmYeBRiU32D3OqEE4T%2BrGqWQ2lRbAIadiMZR3Q61lWIqwGPxhdrJiQAFpyP239D3Vqm9cdiOsLZMn4sDVtGBkeYLK6uuZ8uDxy%2FMqu1znDCM8InKBjqkAZN4E3gilqSMZGiJ5l8Gvg4tWphC8vC03h7TzHBWLdk7UlxC5R9VDvPsd5zB58zlUOk07Z%2BouSe7phxlptfz6JZeVwEX9S2S2BDs8J%2F22BqFuoCGnbMgZxoFpnHps1DL6Ne5N71%2Fq7%2BupqY5EVEI9Cg%2B9SAPCxvYRnx%2F7fkqDoumfGuCGQCl0UtuZSA3ke3SM236iTfQpNSB3LwwnDYZcZmC3aT%2F&X-Amz-Signature=25e536dc3e2e2f50559b7aa6e087fc4509e6160ce8042d4c733053d48957cbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTWZGMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDas0Oi1Sh1hVlKvINNKOCODkcap%2Fc%2FlLUKDxIhs88zxAIhAJl4jKSYbs9UYsVsDgN00DZFf7%2FycdEYsPVv09SgZUqLKv8DCHsQABoMNjM3NDIzMTgzODA1IgzaF98SR%2BC%2Fnxvlfboq3AM68Mg9I%2Fs%2Bgc4DZtS1r0RQfQBW2e0y34YflGmw4kzlxdDeF6J4joWLXUvAe5z2dWKkxJ8n%2F4HW2bjDmquEOE%2BIpcDsl3V8pza8a5u2G7gzcXryA275%2FmTAxs1reW5aHikc420kxB4FI%2BFLmiXQv6z21vva7FAECdoyhCSOA7Uyw2qgV2O3hYmS%2FO8KXwgSUA0E1%2Bfdgv3WyDs3sxf5X0lxPFn22aVUpXvMF22%2Bt8r2GtiKzvth78YlgW5KwGfNVihQTYHaHsjkPn2wRfKChjjb1a2AAmNM4ClVEorr3XHutGNEJTvU%2FPmazA7QdECeVQ60erOnynFaMGuwF%2BnbJN737jaZWT9L54uMIbp8fSsLqoNJs9NXtmEBCLM4pm3As68P2ISVwejq5FfBGb4J3Wg7DPGdteg9kP9P6dok5IQWew95%2FL3iMsL7fqdKocUwacZzvlJRxnQ08ZYxvz2E%2FPl%2BYWfpq5efBEVGuNaUJhNwzw4bV71yXud2vGxqXGHNc5dZLr5MqA6AAFbkL7UDpmYeBRiU32D3OqEE4T%2BrGqWQ2lRbAIadiMZR3Q61lWIqwGPxhdrJiQAFpyP239D3Vqm9cdiOsLZMn4sDVtGBkeYLK6uuZ8uDxy%2FMqu1znDCM8InKBjqkAZN4E3gilqSMZGiJ5l8Gvg4tWphC8vC03h7TzHBWLdk7UlxC5R9VDvPsd5zB58zlUOk07Z%2BouSe7phxlptfz6JZeVwEX9S2S2BDs8J%2F22BqFuoCGnbMgZxoFpnHps1DL6Ne5N71%2Fq7%2BupqY5EVEI9Cg%2B9SAPCxvYRnx%2F7fkqDoumfGuCGQCl0UtuZSA3ke3SM236iTfQpNSB3LwwnDYZcZmC3aT%2F&X-Amz-Signature=09522b423f1fbbf0e1e97f51642f5abe3189ab3cf89c8d8d91a4efb255b9496b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

